
# Use the official Nginx image as the base
FROM nginx:alpine

# Copy the website files to the Nginx server directory
COPY src /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
