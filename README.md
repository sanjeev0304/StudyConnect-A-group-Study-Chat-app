# AI-Driven Collaborative Study Groups

## Overview
AI-Driven Collaborative Study Groups is a platform that intelligently matches students based on their learning goals, strengths, and complementary skills. Using AI-powered clustering techniques, the system groups users into optimal study groups to enhance peer-to-peer learning experiences.

## Features
- **AI Matching Algorithm**: Uses K-Means clustering to group students based on their learning preferences, strengths, and weaknesses.
- **Real-Time Collaboration**: Integrated chat system for instant messaging within study groups.
- **User Profiles**: Students can enter their subjects of interest and areas of expertise.
- **Seamless Communication**: Next.js for frontend, Flask for ML backend, and WebSockets for real-time messaging.

## Tech Stack
### Frontend:
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: For modern UI design and responsiveness.

### Backend:
- **Flask**: Lightweight Python web framework for handling ML logic.
- **Scikit-Learn**: Implements K-Means clustering for group formation.
- **MongoDB**: Stores user profiles and study group data.

### Real-Time Features:
- **WebSockets**: Enables real-time messaging and collaboration.
- **Socket.io**: Handles real-time connections efficiently.

## Installation
### Prerequisites:
- Node.js (v16+)
- Python (3.8+)
- MongoDB

### Setup
#### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/ai-study-groups.git
cd ai-study-groups
```

#### 2. Setup Frontend
```sh
cd frontend
npm install
npm run dev
```

#### 3. Setup Backend (Flask API)
```sh
cd backend
pip install -r requirements.txt
python app.py
```

## Usage
1. Users sign up and provide details about their learning interests.
2. The AI model groups users into study groups based on K-Means clustering.
3. Users can chat and collaborate in real time.

## Contribution
Contributions are welcome! Feel free to open issues and pull requests.

## License
MIT License

