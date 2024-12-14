# Development image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]

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