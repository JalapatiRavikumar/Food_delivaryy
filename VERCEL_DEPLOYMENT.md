# Vercel Deployment Guide for Food Delivery App

This guide will help you deploy the Food Delivery App (MERN Stack) to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. A MongoDB database (e.g., MongoDB Atlas)
3. Git repository with your code

## Deployment Steps

### Step 1: Set up Environment Variables in Vercel

#### For Backend

1. Go to your Vercel dashboard
2. Create a new project and link it to your Git repository
3. Before deploying, add the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure random string for JWT token generation
   - `FRONTEND_URL`: The URL of your deployed frontend (after deployment)
   - `NODE_ENV`: Set to `production`

#### For Frontend

1. Create another project in Vercel for the frontend
2. Add the following environment variables:
   - `VITE_API_URL`: The URL of your deployed backend API

### Step 2: Deploy Backend

1. In your Vercel dashboard, select the backend project
2. Configure the following settings:
   - Framework Preset: `Other`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Output Directory: `api`
3. Click "Deploy"

### Step 3: Deploy Frontend

1. In your Vercel dashboard, select the frontend project
2. Configure the following settings:
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Click "Deploy"

### Step 4: Connect Frontend to Backend

1. After both deployments are complete, get the URL of your backend deployment
2. Go to your frontend project in Vercel dashboard
3. Update the `VITE_API_URL` environment variable with the backend URL
4. Redeploy the frontend

### Step 5: Verify Deployment

1. Visit your frontend URL to ensure the application is working correctly
2. Test key features like:
   - User authentication
   - Food item browsing
   - Cart functionality
   - Order placement

## Troubleshooting

- **CORS Issues**: Ensure the backend's CORS configuration includes the frontend URL
- **API Connection Problems**: Verify environment variables are set correctly
- **Database Connection Issues**: Check MongoDB connection string and network access settings

## Continuous Deployment

Vercel automatically deploys when you push changes to your repository. To make updates:

1. Make changes to your code locally
2. Commit and push to your Git repository
3. Vercel will automatically deploy the changes

## Monitoring

Use Vercel's built-in analytics and logs to monitor your application's performance and troubleshoot issues.