import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err);
    }
}



export const updateHotel = async (req,res,next)=>{
    
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body}, 
            {new: true}
        );
        res.status(200).json(updatedHotel);
    }catch(err){
  
        next(err);
    }
}

export const deleteHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try{
        await Hotel.findByIdAndDelete(
            req.params.id, 
        );
        res.status(200).json("Hotel has been deleted.");
    }catch(err){
        next(err);
    }
}

export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
};


//NEW ADD ONE 

// Get Hotels Controller

/*
export const getHotelscity = async (req, res, next) => {
  const { city } = req.query;

  try {
    let hotels;
    if (city) {
      hotels = await Hotel.find({ city });
    } else {
      hotels = await Hotel.find();
    }
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};




export const getHotels = async (req, res, next) => {
    const { featured, limit, min, max } = req.query;
    try {
      // Build the query object based on the req.query parameters
      let query = {};
  
      // Handle the featured parameter if present
      if (featured === 'true') {
        query.featured = true;
      }
  
      // Handle the min and max price range filter
      if (min && max) {
        query.cheapestPrice = { $gte: parseInt(min), $lte: parseInt(max) };
      } else if (min) {
        query.cheapestPrice = { $gte: parseInt(min) };
      } else if (max) {
        query.cheapestPrice = { $lte: parseInt(max) };
      }
  
      // Execute the query with optional limit
      const hotels = await Hotel.find(query).limit(parseInt(limit) || 10);
  
      // Send response with found hotels
      res.status(200).json(hotels);
    } catch (err) {
      // Pass any errors to the error handling middleware
      next(err);
    }
  };

*/

export const getHotels = async (req, res, next) => {
  const { city, featured, limit, min, max } = req.query;

  try {
    // Build the query object based on the req.query parameters
    let query = {};

    // Handle the city parameter if present
    if (city) {
      query.city = city;
    }

    // Handle the featured parameter if present
    if (featured === 'true') {
      query.featured = true;
    }

    // Handle the min and max price range filter
    if (min && max) {
      query.cheapestPrice = { $gte: parseInt(min), $lte: parseInt(max) };
    } else if (min) {
      query.cheapestPrice = { $gte: parseInt(min) };
    } else if (max) {
      query.cheapestPrice = { $lte: parseInt(max) };
    }

    // Execute the query with optional limit
    const hotels = await Hotel.find(query).limit(parseInt(limit) || 10);

    // Send response with found hotels
    res.status(200).json(hotels);
  } catch (err) {
    // Pass any errors to the error handling middleware
    next(err);
  }
};



export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};


  




  
/*
  export const getHotelRooms = async (req, res, next) => {
    try {
      const hotelId = req.params.id;
  
      const rooms = await Room.find({ hotelId });
  
      if (rooms.length > 0) {
        res.status(200).json(rooms);
      } else {
        res.status(404).json({ message: "Rooms not found" });
      }
    } catch (err) {
      next(err);
    }
  };

*/
  

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(async (city) => {
            const count = await Hotel.countDocuments({ city: city });
            console.log(`City: ${city}, Count: ${count}`); // Debugging log
            return { city, count };
        }));
        res.status(200).json(list);
    } catch (err) {
        console.error(err); // Log the error for debugging
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount =await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})

        res.status(200).json([
            {type: "hotels", count: hotelCount},
            {type: "apartments", count: apartmentCount},
            {type: "resorts", count: resortCount},
            {type: "villas", count: villaCount},
            {type: "cabins", count: cabinCount},
        ]);
    } catch (err) {
       
        next(err);
    }
};