
# Property Management System

A modern property management system built with React, TypeScript, and Ant Design for managing buildings, tenants, maintenance requests, and financial operations.

## Dashboard Preview

![Dashboard Preview]

You can access the online demo here:
[Property Management System Demo](https://main.d28ax38pzxxwgi.amplifyapp.com)

### Demo Accounts

To test different role functionalities, you can use the following accounts:

- **Administrator Account**:
  - Username: admin
  - Password: admin123123
  - Permissions: All features

- **Manager Account**:
  - Username: manager
  - Password: manager123123
  - Permissions: Most features, no advanced settings

- **Regular User Account**:
  - Username: user
  - Password: user123123
  - Permissions: Basic features

> **Note**: This is a demonstration system. Please do not enter any real or sensitive information.

## Features

- **Dashboard**: Overview of key metrics and performance indicators
- **Tenant Management**: Add, edit, and manage tenant information
- **Property Management**:
  - Building Management
  - Room Management
  - Vehicle Information
- **Maintenance Management**: Track and manage repair requests
- **Financial Management**:
  - Contract Management
  - Contract Details
  - Bill Management
- **Business Development**: Tools for property business growth
- **Operations Management**:
  - Operations Overview
  - Article Publishing
  - Content Comments
- **Equipment Management**: Track and maintain property equipment
- **Energy Consumption**: Monitor and optimize energy usage
- **System Settings**: Configure application settings
- **Personal Center**: User profile and preferences

## Technology Stack

- **Frontend**: React, TypeScript
- **UI Library**: Ant Design
- **State Management**: Redux
- **Mock Data**: MockJS (for development and testing)
- **Deployment**: AWS Amplify

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/property-management-system.git
cd property-management-system
```


2. Install dependencies
```bash
npm install
# or
yarn install
```


3. Start the development server
```bash
npm start
# or
yarn start
```


4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── api/          # API calls and services
├── assets/       # Static assets like images
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── mock/         # Mock data for development
├── page/         # Page components
│   ├── dashboard/
│   ├── estate/   # Property management pages
│   ├── finance/
│   ├── login/
│   ├── personal/
│   └── ...
├── store/        # Redux store configuration
├── utils/        # Utility functions
├── App.tsx       # Main application component
└── index.tsx     # Application entry point
```


## Deployment

This project is deployed using AWS Amplify. You can view the live demo at [https://main.d28ax38pzxxwgi.amplifyapp.com](https://main.d28ax38pzxxwgi.amplifyapp.com).

## Contributing

Contributions are welcome! Feel free to submit Pull Requests or create Issues.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Ant Design for the UI components
- MockJS for the mock data functionality
