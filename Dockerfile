# Use a base image suitable for your backend technology (e.g., Node.js, Python, Java, etc.)
FROM node:14 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code
COPY . .

# Build the backend (if needed)
# RUN npm run build

# Stage 2: Create a production image
FROM node:14-alpine

# Set the working directory in the production image
WORKDIR /app

# Copy the built backend from the builder stage to the production image
COPY --from=builder /app ./

# Expose the port your backend listens on (replace 3000 with your port)
EXPOSE 4000

# Command to run the backend (replace "start" with the actual command)
CMD ["npm", "start"]
