# GPT-Wrapper Mobile App

This repository contains a full-stack GPT-wrapper mobile app developed using **React Native** and **Expo** for the frontend, with a **Flask** backend for handling API requests.

## Features

- [x] **Mobile GPT Application**: Mobile GPT App built using **React Native** with **Expo**.
- [x] **Backend API**: built with **Flask** for interacting with language models.
- [x] **Cross-Platform Compatibility**: Supports both iOS and Android devices.
- [ ] **Voice Interaction Mode**: Enable users to interact via voice commands.
- [ ] **Streaming Text Output**: Implement streaming text output for responses.
- [ ] **App Packaging Commands**: streamlined commands for building and packaging the app for iOS and Android deployment.
- [ ] **Database Integration**: Connect with a MySQL database to store user data and conversation history.
- [ ] **User Authentication and Authorization**: Implement secure user authentication and authorization mechanism.
- [ ] **Cloud Deployment**: Deploy the backend API to a cloud platform.
- [ ] **Push Notifications**: Enable push notifications for mobile app.

## Prerequisites

- **Node.js** (v22.3)
- **Python** (v3.11+)
- **Expo CLI**
    ```bash
    npm install -g expo-cli
    ````

## Installation

### Environment Variables
1. Create .env file under both frontend and backend folders. Write
    ```bash
    OPENAI_API_KEY=your_openai_api_key
    ```
    Replace `your_openai_api_key` with your OpenAI API key. 


### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/quao627/gpt-wrapper.git
   cd gpt-wrapper/frontend
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Expo development server:
   ```bash
   npx expo start
   ```
This will start the Expo development environment. You can use an emulator or scan the QR code with [Expo Go](https://expo.dev/go) on your mobile device to test the app.

### Backend
If you want to use the backend API, follow these steps:
1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the Flask development server:
    ```bash
    python main.py
    ```
    The backend should now be running on port 8080.
4. Change the code in [frontend/components/ChatScreen.js](frontend/components/ChatScreen.js) to point to the backend server. Replace the URL in the fetch request with your backend server URL.
