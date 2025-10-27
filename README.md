# 🎫 Ticket Flow

A modern, responsive ticket management system built with React, designed to streamline support ticket workflows. Features a comprehensive dashboard, full CRUD operations for tickets, and secure authentication.

![Ticket Flow](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.0.1-purple) ![SCSS](https://img.shields.io/badge/SCSS-Modules-pink)

## ✨ Features

### 🔐 Authentication & Security
- User registration and login system
- Session-based authentication with localStorage
- Protected routes for sensitive pages
- Automatic session expiration (24 hours)
- Secure logout functionality

### 📊 Dashboard
- Real-time ticket statistics (Total, Open, Resolved)
- Clean, responsive card-based layout
- Quick navigation to ticket management

### 🎫 Ticket Management
- **Create**: Add new tickets with validation
- **Read**: View all tickets in a responsive grid layout
- **Update**: Edit existing ticket details
- **Delete**: Remove tickets with confirmation dialogs
- Form validation with real-time feedback
- Status and priority management
- Toast notifications for user feedback

### 🎨 User Experience
- Fully responsive design (mobile-first approach)
- Modern, clean UI with consistent styling
- Toast notifications for success/error feedback
- Loading states and form validation
- Accessible navigation with mobile hamburger menu

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0 with Hooks
- **Build Tool**: Vite 6.0.1 with rolldown
- **Routing**: React Router v7.9.4
- **Styling**: SCSS Modules with custom design system
- **Icons**: SVG assets
- **State Management**: React useState/useEffect
- **Authentication**: localStorage-based sessions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ticket-flow.git
   cd ticket-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

### Getting Started
1. Visit the homepage to learn about Ticket Flow
2. Click "Get Started" or "Login" to access the authentication page
3. Create a new account or log in with existing credentials

### Dashboard
- View ticket statistics at a glance
- Navigate to ticket management from the dashboard

### Ticket Management
- **Creating Tickets**: Click "Create New Ticket" and fill out the form
- **Viewing Tickets**: Browse tickets in the card grid layout
- **Editing Tickets**: Click "Edit" on any ticket card
- **Deleting Tickets**: Click "Delete" and confirm the action

### Authentication
- **Login**: Use your registered email and password
- **Signup**: Create a new account with email and password
- **Logout**: Click the logout button in the navigation or on protected pages

## 📁 Project Structure

```
ticket-flow/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and media files
│   │   └── icons/         # SVG icons
│   ├── components/        # Reusable React components
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Logincomp.jsx  # Login form component
│   │   ├── Nav.jsx        # Navigation component
│   │   ├── ProtectedRoute.jsx # Route protection wrapper
│   │   ├── Signupcomp.jsx # Signup form component
│   │   └── Toast.jsx      # Toast notification component
│   ├── pages/             # Page components
│   │   ├── Dashboard.jsx  # Main dashboard
│   │   ├── Home.jsx       # Landing page
│   │   ├── Login.jsx      # Authentication page
│   │   └── TicketManagement.jsx # Ticket CRUD interface
│   ├── styles/            # SCSS modules and variables
│   │   ├── _mixins.scss   # SCSS mixins
│   │   ├── _variables.scss # Design system variables
│   │   ├── dashboard.module.scss
│   │   ├── home.module.scss
│   │   ├── login.module.scss
│   │   ├── nav.module.scss
│   │   ├── ticketManagement.module.scss
│   │   └── toast.module.scss
│   ├── utils/             # Utility functions
│   │   └── auth.js        # Authentication helpers
│   ├── App.jsx            # Main app component
│   ├── App.scss           # Global styles
│   └── main.jsx           # App entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎨 Design System

The application uses a consistent design system with:
- **Colors**: Primary (`$text-color-1: #3d98ec`), Secondary (`$text-color-2: #54ce51`)
- **Typography**: Inter font family with custom font sizes
- **Layout**: Max-width 1440px centered container
- **Responsive**: Mobile-first approach with breakpoints

## 🔒 Security Features

- **Session Management**: localStorage-based with expiration
- **Route Protection**: Protected routes for authenticated users only
- **Input Validation**: Client-side form validation
- **CSRF Protection**: Not applicable (no server-side state)

## 🧪 Testing

Currently, the application includes:
- Form validation testing through user interaction
- Authentication flow testing
- CRUD operations verification
- Responsive design testing across devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow existing ESLint configuration
- Use SCSS modules for component styling
- Maintain consistent React patterns and hooks usage
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Icons from various free SVG collections
- Inspired by modern ticket management systems

## 📞 Support

If you have any questions or issues:
1. Check the [Issues](https://github.com/your-username/ticket-flow/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Happy ticketing! 🎫**
