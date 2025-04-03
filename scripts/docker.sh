#!/bin/bash
# Show help message
# Define variables
IMAGE_NAME="tic-tac-toe"
CONTAINER_NAME="tic-tac-toe"
PORT_MAPPING="5173:5173"

# Build the Docker image
echo "Building Docker image: $IMAGE_NAME..."
docker build -t $IMAGE_NAME .

# Check if a container with the same name already exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container: $CONTAINER_NAME..."
    docker rm -f $CONTAINER_NAME
fi

# Run the Docker container
echo "Running container: $CONTAINER_NAME..."
docker run --name $CONTAINER_NAME -p $PORT_MAPPING -it $IMAGE_NAME:latest
