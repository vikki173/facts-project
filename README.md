frontend link: https://main.d31jtm7vcy8b8t.amplifyapp.com/

# Facts Project - Full Stack Mini App

## Overview

- This is a simple full-stack web application.

- The backend provides a REST API that returns a hardcoded list of facts in JSON format.
- The frontend fetches this data and displays it as a list.

## Tech Stack Used
### Backend
- Python
- FastAPI
- Uvicorn

### Frontend
- React (Create React App)
- HTML, CSS, JavaScript
- Frontend Development (React)


### Deployment
- Backend: Render
- Frontend: AWS Amplify
- The backend was deployed on Render and made publicly accessible.


## Features

- The frontend was created using React.
- Fetches facts from the backend API
- Displays facts in a simple list UI
- Shows a loading state while fetching data
- The backend URL is configured using an environment variable in AWS Amplify.

### GitHub url   : [https://github.com/vikki173/facts-project]
### frontend url : [https://main.d31jtm7vcy8b8t.amplifyapp.com/]
### backend url  : [https://facts-project-lcrj.onrender.com/]
  

### What I Learnt From This Exercise

- How to build a simple REST API using FastAPI
- How to connect a React frontend to a backend API
- How to deploy backend services using Render
- How to deploy frontend apps using AWS Amplify
- How to handle real deployment issues like:
    - HTTPS restrictions
    - environment variables
    - CORS configuration
    - correct build settings for monorepos