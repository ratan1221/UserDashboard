<p align="center">
    <img src="./public/user.png" align="center" width="30%">
</p>
<p align="center"><h1 align="center">USERDASHBOARD</h1></p>
<p align="center">
	<em><code>❯ Ratan Kumar</code></em>
</p>

User Management Dashboard
A modern user management dashboard built with React, Redux Toolkit, and Tailwind CSS.

Features
📱 Responsive design for all device types
🔍 Real-time search functionality
⚡ Redux-powered state management
🎯 CRUD operations for users
📊 Pagination
🎨 Modern UI with Tailwind CSS
✨ Filter users by department
✅ Bulk selection and deletion
🚀 Optimized performance with caching

## Prerequisites
- Node.js (v14 or higher)
- npm
- Git
- JSONPlaceholder

## Installation
1. Clone the repository:
```bash
git clone https://github.com/ratan1221/user-management-dashboard.git](https://github.com/ratan1221/UserDashboard.git)
cd user-management-dashboard
```

# Install dependencies:
npm install

# Create .env file in root directory:
```bash
VITE_API_URL=https://jsonplaceholder.typicode.com/users
```

# Start development server:
```bash
npm run dev
```

## Tech Stack
- React: Frontend library
- Redux Toolkit: State management
- React Router: Navigation
- Tailwind CSS: Styling
- Axios: API requests
- React Toastify: Notifications
- Vite: Build tool
  
## Project Structure
```bash
UserDashboard/
├── src/
│   ├── components/
│   │   ├── Home.jsx           # Landing page component
│   │   ├── NotFound.jsx       # 404 error page
│   │   ├── Pagination.jsx     # Pagination component
│   │   ├── SearchFilter.jsx   # Search and filter component
│   │   ├── UserForm.jsx       # User creation/edit form
│   │   ├── UserList.jsx       # Table component for users
│   │   └── UserManagement.jsx # Main user management container
│   │
│   ├── constants/
│   │   └── titles.js          # Page title constants
│   │
│   ├── store/
│   │   ├── index.js           # Redux store configuration
│   │   └── userSlice.js       # User redux slice
│   │
│   ├── App.jsx               # Root application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
│
├── public/
│   └── user.png             # Application icon
│
├── .dockerignore            # Docker ignore file
├── .gitignore              # Git ignore file
├── Dockerfile              # Docker configuration
├── README.md               # Project documentation
├── babel.config.js         # Babel configuration
├── eslint.config.js        # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

### Features
- User Management
- Add new users
- Edit existing users
- Delete single/multiple users
- View user details
- Search and Filter
- Search by name, email, or department
- Filter users by department
- Sort by any column
- Responsive Design
- Mobile-first approach
- API Integration
- The application uses JSONPlaceholder API for demo purposes.

### Update VITE_API_URL in .env

### Reflect on the challenges faced during the development process and any improvements you would make if given more time.

- If provided more time i could have implemented Auth.
- User data export
- Error boundary implementation
- Code Quality
- Add E2E tests
- Improve error handling
- Add input validation
- Performance Optimization
- Optimize bundle size
- Add loading skeletons
- UX Improvements
- Improve form validation
- Add keyboard shortcuts
- Enhance mobile experience
- DevOps
Add CI/CD pipeline,
Implement monitoring,
Add error tracking,
Improve deployment process
