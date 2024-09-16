## Components

### `CreateRoomForm`

Located at `frontend/src/components/Forms/CreateRoomForm/index.jsx`, this component is responsible for creating a new room and initializing the PeerJS connection.

Props:
- `uuid`: Function to generate a unique room ID.
- `socket`: Socket.IO client instance.
- `setUser`: Function to set the user state.
- `setMyPeer`: Function to set the PeerJS instance.

### `RoomPage`

Located at `frontend/src/pages/RoomPage.jsx`, this component handles the main room functionality, including connecting to new users and managing video streams.

Props:
- `connectToNewUser`: Function to connect to a new user.
- `addVideoStream`: Function to add a video stream to the video grid.
- `videoGrid`: Ref to the video grid element.
- `user`: Current user state.
- `myPeer`: PeerJS instance.
- `setPeers`: Function to set the peers state.
- `socket`: Socket.IO client instance.
- `users`: List of users in the room.
- `setUsers`: Function to set the users state.

## Routes

### `/`

The root route renders the `Forms` component, which includes the `CreateRoomForm`.

### `/:roomId`

The dynamic route for a specific room renders the room interface, including the video grid and the `RoomPage` component.

## Socket.IO

The application uses Socket.IO for real-time communication between the server and clients. The Socket.IO client is initialized in `frontend/src/App.jsx` with the following configuration:

```jsx
const server = "https://collaborativewhiteboard.onrender.com/";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);
