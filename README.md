# EduChatAI

A full-stack educational chat application built with React frontend and Node.js backend.

## Project Overview

EduChatAI is an interactive educational platform that enables users to engage in AI-powered conversations for learning purposes. The application features a modern React frontend and a robust Node.js backend with real-time chat capabilities.

## Tech Stack

### Frontend
- **React** - UI framework
- **Modern JavaScript (ES6+)** - Language features
- **CSS3** - Styling
- **Responsive Design** - Mobile-first approach

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Database integration** - MongoDB/SQL (based on your db.js)
- **RESTful API** - API architecture

## Project Structure

```
EduChatAI/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── App.js        # Main application component
│   │   └── ...
│   └── package.json
├── backend/           # Node.js backend API
│   ├── controllers/      # Request handlers
│   ├── routes/          # API endpoints
│   ├── config/          # Database configuration
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[your-username]/EduChatAI.git
   cd EduChatAI
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   - Create `.env` file in backend directory
   - Add necessary environment variables (database URLs, API keys, etc.)

5. **Start the development servers**
   
   Backend:
   ```bash
   cd backend
   npm start
   ```
   
   Frontend:
   ```bash
   cd frontend
   npm start
   ```

## API Endpoints

- `GET /api/chat` - Get chat messages
- `POST /api/chat` - Send new message
- Additional endpoints as defined in backend/routes/

## Features

- Real-time chat interface
- Responsive design for all devices
- Clean and intuitive user interface
- RESTful API architecture
- Error handling and validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or suggestions, please open an issue on GitHub.
