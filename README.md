

# Property Management System

## Overview

This Property Management System is a comprehensive web application designed to help property managers efficiently manage buildings, tenants, maintenance requests, and financial operations. Built with React, TypeScript, and Ant Design, it provides a user-friendly interface for all property management needs.

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
- **Business Development**: Tools for growing your property business
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
- **Mock Data**: MockJS for development and testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/franco0307/property-management-system.git
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

## User Roles

The system supports multiple user roles with different permissions:

- **Admin**: Full access to all features
- **Manager**: Access to most features except some advanced settings
- **User**: Limited access to basic features

## Login Credentials

For testing purposes, you can use the following credentials:

- **Admin**: 
  - Username: admin
  - Password: admin123123
  
- **Manager**:
  - Username: manager
  - Password: manager123123
  
- **User**:
  - Username: user
  - Password: user123123

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


## Acknowledgments

- Ant Design for the UI components
- MockJS for the mock data functionality
