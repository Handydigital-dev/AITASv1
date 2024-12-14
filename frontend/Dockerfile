# Use the official Node.js 20 image as the base
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the application source code
COPY . .

# Build the Next.js application for production
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app
        
# Copy package.json
COPY package*.json ./

# Install production dependencies only
RUN npm install --omit=dev

# Copy only build artifacts from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
        
# Start the Next.js app in production mode
CMD ["npm", "start"]