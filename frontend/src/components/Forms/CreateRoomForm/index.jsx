import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";

const CreateRoomForm = ({ uuid, socket, setUser, setMyPeer }) => {
  const [roomId, setRoomId] = useState(uuid()); // Generate a unique room ID
  const [name, setName] = useState(""); // Set user name

  const navigate = useNavigate();

  const handleCreateRoom = (e) => {
    e.preventDefault();

    // Open peer connection with the socket.io server
    const myPeer = new Peer(undefined, {
      host: "/",
      port: 5001,
      path: "/",
      secure: false,
    });

    setMyPeer(myPeer); // Set peer connection

    myPeer.on("open", (id) => {
      const roomData = {
        name,      // User name
        roomId,    // Room ID
        userId: id, // PeerJS user ID
        host: true, // Mark this user as the host
        presenter: true, // This user will be a presenter
      };

      setUser(roomData); // Update the user state
      navigate(`/${roomId}`); // Navigate to the generated room

      // Emit event to the server that user joined
      socket.emit("userJoined", roomData);
    });

    myPeer.on("error", (err) => {
      console.error("Peer connection error: ", err);
      myPeer.reconnect(); // Reconnect if there is a connection error
    });
  };

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId).then(() => {
      console.log("Room ID copied to clipboard");
    }).catch(err => {
      console.error("Failed to copy room ID: ", err);
    });
  };

  return (
    <form className="form col-md-12 mt-5" onSubmit={handleCreateRoom}>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update user name
        />
      </div>
      <div className="form-group border">
        <div className="input-group d-flex align-items-center justify-content-center">
          <input
            type="text"
            value={roomId}
            className="form-control my-2 border-0"
            disabled
            placeholder="Generated room code"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-sm me-1"
              onClick={() => setRoomId(uuid())} // Generate new room ID
              type="button"
            >
              Generate
            </button>
            <button
              className="btn btn-outline-danger btn-sm me-2"
              type="button"
              onClick={handleCopyRoomId} // Copy room ID to clipboard
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <button type="submit" className="mt-4 btn-primary btn-block form-control">
        Create Room
      </button>
    </form>
  );
};

export default CreateRoomForm;
