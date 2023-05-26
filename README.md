# REACT ADVANCE SPA

This project is designed to help you understand and practice working with React Router DOM and implementing authentication functionality in a React application. The application provides a basic CRUD (Create, Read, Update, Delete) functionality for events and includes features such as user registration, login, logout, and token-based authentication.

## How It's Made:

**Tech used:** Vite, React, react-router-dom
A simple website build with [Vite](https://github.com/vitejs/vite) for initial folder structure, [React](https://github.com/facebook/react) for front-end and react-router-dom for routing our application

## Functionality

The web application demonstrates basic CRUD functionality using React Router DOM. It includes the following features:

### Event CRUD

1. **Create Event**: You can create a new event by providing the required details such as title, description, date, and time.

2. **Read Event**: The application displays a list of existing events, including their titles and dates. You can click on an event to view its details.

3. **Update Event**: You can edit the details of an existing event, including its title, description, date, and time.

4. **Delete Event**: You can delete an event, removing it from the list of existing events.

### Authentication

1. **User Registration**: You can sign up as a new user by providing a unique username and password.

2. **User Login**: After registering, you can log in using your username and password.

3. **User Logout**: Once logged in, you can log out of your account, terminating the session.

### Token-based Authentication

The application implements token-based authentication to secure the authentication process. Upon successful login, a JSON Web Token (JWT) is generated and stored in the browser's local storage. This token is used to authenticate subsequent requests to protected routes. The token expires after a certain period, requiring the user to log in again.

## Lessons Learned:

- loader in createBrowserRouter
- best practice of handling fetch data with loader
- best practice of handling actions using react-router-dom
- proper error handling
- proper nested pages with loader
- authentication (JWT token)
- React router dom hooks (useNavigation, useError, useLoaderData, useRouteLoaderData, useSubmit, useParams)
- React router dom utility (json, redirect, defer)
- React router dom component (Form, Await)
