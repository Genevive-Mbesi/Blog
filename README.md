# React Dashboard with xxx-ooo game and Firebase Authentication
This project is a simple dashboard built with React, featuring a xxx-ooo game and Firebase authentication. Users can log in, play the game, and log out. The app is styled using Tailwind CSS with a teal color scheme.

## Features
User Authentication: Allows users to sign in and sign out via Firebase.

xxx-ooo Game: A fully functional 2 player xxx-ooo game that tracks the winner and allows users to jump to previous moves.

Responsive Design: The app is styled using Tailwind CSS, ensuring it looks great on all screen sizes.


### Getting Started
#### Prerequisites
To run this project, you need to have the following installed on your machine:

Node.js: Make sure you have Node.js installed.

Firebase Account: You'll need to configure Firebase authentication. Create a project in Firebase and enable email/password authentication.

### Installation
#### Clone the repository to your local machine:

#### bash
#### Copy code
    git clone https://github.com/your-username/react-dashboard-tictactoe.git

#### Navigate to the project folder:
#### bash
  #### Copy code
    cd react-dashboard-tictactoe
    
#### Install the required dependencies:

#### bash
   #### Copy code
    npm install
    
#### Set up Firebase:

#### Create a firebase.js file in the src folder.
Configure it with your Firebase credentials (API Key, Auth Domain, etc.).
#### js
   #### Copy code
    // src/firebase.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
      };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    
#### Run the app:

#### bash
   #### Copy code
    npm start
This will start the app at http://localhost:3000.

#### Usage
  #### Login: Users will be directed to the login screen upon visiting the app. Firebase handles authentication.
  #### Play the Game: Once logged in, users can play a Tic-Tac-Toe game. The game tracks the current player and declares a winner.
  #### Logout: Users can log out by clicking the "Logout" button, which returns them to the login screen.
#### Technology Stack
   React: Front-end framework
    Firebase: Authentication service
    Tailwind CSS: Styling framework
    JavaScript (ES6+): Primary language
