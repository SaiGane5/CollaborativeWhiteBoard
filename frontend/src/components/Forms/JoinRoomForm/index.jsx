import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";

const JoinRoomForm = ({ uuid, socket, setUser, setMyPeer }) => {
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleRoomJoin = (e) => {
    e.preventDefault();

    // Open peer connection with socket.io server
    const myPeer = new Peer(undefined, {
      host: "/",
      port: 5001,
      path: "/",
      secure: false,
    });

    setMyPeer(myPeer);

    myPeer.on("open", (id) => {
      const roomData = {
        name,
        roomId,
        userId: id,
        host: false,
        presenter: false,
      };
      setUser(roomData);
      navigate(`/${roomId}`);
      socket.emit("userJoined", roomData);
    });

    myPeer.on("error", (err) => {
      console.log("peer connection error", err);
      myPeer.reconnect();
    });
  };

  return (
    <form className="form col-md-12 mt-5" onSubmit={handleRoomJoin}>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter room code"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="mt-4 btn-primary btn-block form-control"
      >
        Join Room
      </button>
    </form>
  );
};

export default JoinRoomForm;