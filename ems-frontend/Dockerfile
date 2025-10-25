# Stage 1: Build Vite app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the app (Vite creates 'dist' folder)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy Vite's 'dist' folder into Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
