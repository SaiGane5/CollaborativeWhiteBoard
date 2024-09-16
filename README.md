# Collaborative Whiteboard Project

## Project Explanation
The Collaborative Whiteboard project is a real-time application that allows multiple users to draw and interact on a shared whiteboard. This project leverages WebSockets for real-time communication and includes features such as user authentication, video conferencing, and collaborative drawing.

## Tech Stacks Used
- **Frontend:**
  - React
  - React Router
  - Socket.IO
  - Bootstrap
  - React Toastify
- **Backend:**
  - Node.js
  - Express
  - Socket.IO
- **Deployment:**
  - Render (for backend)
  - vercel (for frontend)

## Team Contributions
- **Sai Ganesh**
  - Implemented the frontend components and routing.
  - Developed the backend server using Node.js and Express.
  - Styled the application using Bootstrap and custom CSS.
  - Deployed the backend on Render.
  - Deployed the frontend on vercel.
- **Ganesh**
  - Integrated Socket.IO for real-time communication.
  - Set up WebSocket connections and handled server-side events.
  - Integrated video conferencing features using WebRTC.

## Local Setup Instructions
To set up the project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/collaborative-whiteboard.git
   cd collaborative-whiteboard/backend
2. Install dependencies:
   ```bash
    npm install

3. Start the backend server:
   ```bash
    npm start

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
    cd ../frontend
2. Install dependencies: 
   ```bash
    npm install

3. Start the frontend development server:
   ```bash
    npm start

## Accessing the Application
1. Open your browser and navigate to http://localhost:3000 to access the frontend.
2. The backend server will be running on http://localhost:5000.
### Deployment Links
Frontend: [vercel Deployment](https://collaborative-white-board-bice.vercel.app)
Backend: [Render Deployment](https://collaborativewhiteboard.onrender.com)
### Working Video
Drive Link to Working Video

### Components 

**CreateRoomForm**
Located at **frontend/src/components/Forms/CreateRoomForm/index.jsx**, this component is responsible for creating a new room and initializing the PeerJS connection.

**Props:**

**uuid:** Function to generate a unique room ID.
**socket:** Socket.IO client instance.
**setUser:** Function to set the user state.
**setMyPeer:** Function to set the PeerJS instance.

**RoomPage**
Located at **frontend/src/pages/RoomPage.jsx**, this component handles the main room functionality, including connecting to new users and managing video streams.

**Props:**

**connectToNewUser:** Function to connect to a new user.
**addVideoStream:** Function to add a video stream to the video grid.
**videoGrid:** Ref to the video grid element.
**user:** Current user state.
**myPeer:** PeerJS instance.
**setPeers:** Function to set the peers state.
**socket:** Socket.IO client instance.
**users:** List of users in the room.
**setUsers:** Function to set the users state.
## Routes
> /
The root route renders the Forms component, which includes the CreateRoomForm.

> /:roomId
The dynamic route for a specific room renders the room interface, including the video grid and the RoomPage component.

**Socket.IO**
The application uses Socket.IO for real-time communication between the server and clients. The Socket.IO client is initialized in frontend/src/App.jsx with the following configuration:
```js
const server = "https://collaborativewhiteboard.onrender.com/";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);
