# Collaborative Whiteboard

This project is a collaborative whiteboard application that allows multiple users to join a room, share their video streams, and collaborate in real-time. The application is built using React, Socket.IO, and PeerJS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Routes](#routes)
- [Socket.IO](#socketio)
- [PeerJS](#peerjs)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/collaborative-whiteboard.git
    cd collaborative-whiteboard
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Create a new room by entering your name and clicking the "Create Room" button.
3. Share the generated room ID with other users to allow them to join the room.
4. Collaborate in real-time with video streams and whiteboard features.

## Project Structure
frontend/ </br>
├── public/</br>
├── src/</br>
│ ├── components/</br>
│ │ └── Forms/</br>
│ │ └── CreateRoomForm/</br> 
│ │ └── index.jsx</br>
│ ├── pages/</br>
│ │ └── RoomPage.jsx</br>
│ ├── App.jsx</br>
│ ├── App.css</br>
│ └── index.js</br>
└── package.json</br>

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
