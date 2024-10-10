import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import axios from "axios";


const NewRoom = () => {
  
  const [info, setInfo] = useState({});
  const { data, loading, error } = useFetch("/hotels");
  const [hotelId, setHotelId] = useState([]);
  const [rooms, setRooms] = useState([]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
        
          <div className="right">
            <form>
             

              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                  type={input.type}
                   placeholder={input.placeholder}
                   id = {input.id}
                   onChange={handleChange}
                   />
                </div>
              ))}
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                />
              </div>
              <div className="formInput" >
                  <label>Choose a Hotel</label>
                  <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                      ))}
                </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;