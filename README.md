# React Prototype Gen2

A secure, prototype React application for accessing reports with mock data. This prototype demonstrates a modern React application with Auth0 SSO authentication, Mantine UI components, and a clean responsive design. It includes protected routes, theme switching capabilities, and simulated API interactions using mock data.

## Features

- **Auth0 Authentication**: Secure login/logout flow using Auth0's React SDK
- **Protected Routes**: Authenticated access to reports and account pages
- **Light/Dark Theme Mode**: User-togglable theme with persistent storage
- **Transaction Reports**: Interactive table with sortable columns and mock data
- **Responsive Design**: Mobile-friendly layout using Mantine UI components
- **Error Handling**: Centralized error management with notification banners
- **Mock API Layer**: Simulated backend interactions with mock transaction data
- **HTTPS Development**: Local development with HTTPS support

## Tech Stack

- React 19
- TypeScript
- Vite
- Mantine UI
- Auth0 React SDK
- React Context API for state management
- Local HTTPS development environment

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm
- For HTTPS: mkcert installed (`brew install mkcert` on macOS)

### Installation

```bash
# Install dependencies (using legacy-peer-deps flag to resolve conflicts with React 19)
npm install --legacy-peer-deps

# Setup local SSL certificates for HTTPS
npm run setup:https

# Start development server with HTTPS
npm run dev:https

# Or start without HTTPS
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server (HTTP)
- `npm run dev:https` - Start development server with HTTPS
- `npm run setup:https` - Generate SSL certificates for local development
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Dependency Notes

This project uses React 19, which creates some peer dependency conflicts with other libraries that haven't been fully updated yet. The `--legacy-peer-deps` flag is required for installation to bypass these checks. This is common in projects using cutting-edge versions of libraries and doesn't affect functionality.

### HTTPS Configuration

The application is configured to run with HTTPS in development, which is required for proper Auth0 integration. The setup process:

1. First run `npm run setup:https` which uses mkcert to create and install local certificates
2. Local certificates are stored in `~/.vite-ssl/`
3. The application will automatically use these certificates when starting with `npm run dev:https`

## Project Structure

```
src/
├── assets/            # Static files like images, fonts
├── components/        # Shared/reusable components
│   ├── common/        # Very generic components
│   ├── layout/        # Layout components
│   └── ui/            # More complex reusable UI components
├── config/            # Configuration files (Auth0 config, etc.)
├── context/           # React Context definitions
├── hooks/             # Custom React hooks
├── mocks/             # Mock data and services
├── pages/             # Page components, matching routes
│   ├── Account/
│   ├── Home/
│   ├── Login/
│   ├── LoggedOut/
│   └── Reports/
├── services/          # API services, external integrations
├── styles/            # Global styles, theme configurations
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── App.tsx            # Main App component
├── main.tsx           # Entry point
└── vite-env.d.ts      # Vite type definitions
```

## Authentication

The application uses Auth0 for authentication. When running the application, you'll need to set up the following environment variables:

```
VITE_AUTH0_DOMAIN=dev-2e7srpgyafj5lgyw.us.auth0.com
VITE_AUTH0_CLIENT_ID=NaCVeiNxuCHCZ7jexX8TeDjcPlbLmtMI
VITE_AUTH0_CALLBACK_URL=https://localhost:3000
VITE_AUTH0_AUDIENCE=https://your-api-identifier/
```

## Application Pages and Navigation

### Available Routes

- `/` - Home page (protected, requires authentication)
- `/login` - Auth0 login page
- `/logged-out` - Page displayed after successful logout
- `/reports` - Transaction reports page (protected)
- `/account` - User account information page (protected)

### Navigation

- **Top Navigation Bar**: Contains links to Home, Reports, and Account pages
- **User Menu**: In the top-right corner, displays the authenticated user's name
  - Click on user name to access dropdown with Logout and Theme Toggle options

## Mock Data

The application uses mock transaction data for the reports page. In a real-world scenario, this would be replaced with API calls to a backend service.

### Transactions Report

- Displays a table of mock transaction data
- Supports sorting on first_name and last_name columns
- Default sort is by created_date (descending)

## Application Architecture

### Component Organization

Components are organized following the atomic design principles with the following structure:

```
ComponentName/
├── index.ts               # Re-export component for cleaner imports
├── ComponentName.tsx      # Main component code
├── ComponentName.test.tsx # Component tests
├── ComponentName.types.ts # Component-specific types (if needed)
└── useComponentName.ts    # Component-specific hooks (if needed)
```

### State Management

The application uses React Context API for state management instead of Redux:

- **ThemeContext**: Manages light/dark mode preferences and persistence
- **ErrorContext**: Centralized error handling with banner notifications
- **Auth0 Context**: Handles authentication state from Auth0

### API Service Layer

The application includes a service layer that's ready to interact with a real backend API:

- **ApiClient**: Central HTTP client using axios
- **TransactionsApiService**: Handles transaction data operations (currently using mock data)

This makes it easy to transition from mock data to a real API when available.

## Troubleshooting

### Common Issues

- **Auth0 Authentication Issues**: If you encounter authentication problems, ensure your Auth0 configuration in .env.local matches the values provided in the project specification.

- **HTTPS Certificate Warnings**: When using self-signed certificates, your browser may show security warnings. You can safely proceed for local development.

- **Dependencies Installation Errors**: If you encounter errors during installation even with the `--legacy-peer-deps` flag, try clearing your npm cache:
  ```bash
  npm cache clean --force
  npm install --legacy-peer-deps
  ```

- **Blank Screen After Login**: Check browser console for errors. This may indicate issues with the Auth0 configuration or callback URLs.