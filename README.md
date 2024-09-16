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
  - Netlify (for frontend)

## Team Contributions
- **Member 1:**
  - Implemented the frontend components and routing.
  - Integrated Socket.IO for real-time communication.
  - Styled the application using Bootstrap and custom CSS.
- **Member 2:**
  - Developed the backend server using Node.js and Express.
  - Set up WebSocket connections and handled server-side events.
  - Deployed the backend on Render.
- **Member 3:**
  - Worked on user authentication and session management.
  - Integrated video conferencing features using WebRTC.
  - Deployed the frontend on Netlify.

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
Copy
Insert

Install dependencies:
npm install
Copy
Insert

Start the backend server:
npm start
Copy
Insert

Frontend Setup
Navigate to the frontend directory:
cd ../frontend
Copy
Insert

Install dependencies:
npm install
Copy
Insert

Start the frontend development server:
npm start
Copy
Insert

Accessing the Application
Open your browser and navigate to http://localhost:3000 to access the frontend.
The backend server will be running on http://localhost:5000.
Deployment Links
Frontend: Netlify Deployment
Backend: Render Deployment
Working Video
Drive Link to Working Video
Additional Projects
If you have solved more than one problem statement, include links to the additional projects here.

Project 2: GitHub Repository
Working Video: Drive Link to Working Video
CreateRoomForm
Located at frontend/src/components/Forms/CreateRoomForm/index.jsx, this component is responsible for creating a new room and initializing the PeerJS connection.

Props:

uuid: Function to generate a unique room ID.
socket: Socket.IO client instance.
setUser: Function to set the user state.
setMyPeer: Function to set the PeerJS instance.
RoomPage
Located at frontend/src/pages/RoomPage.jsx, this component handles the main room functionality, including connecting to new users and managing video streams.

Props:

connectToNewUser: Function to connect to a new user.
addVideoStream: Function to add a video stream to the video grid.
videoGrid: Ref to the video grid element.
user: Current user state.
myPeer: PeerJS instance.
setPeers: Function to set the peers state.
socket: Socket.IO client instance.
users: List of users in the room.
setUsers: Function to set the users state.
/
The root route renders the Forms component, which includes the CreateRoomForm.

/:roomId
The dynamic route for a specific room renders the room interface, including the video grid and the RoomPage component.

Socket.IO
The application uses Socket.IO for real-time communication between the server and clients. The Socket.IO client is initialized in frontend/src/App.jsx with the following configuration:

const server = "https://collaborativewhiteboard.onrender.com/";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);
