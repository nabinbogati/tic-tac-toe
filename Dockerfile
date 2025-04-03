FROM node:22.14.0-slim

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

CMD ["npm", "run", "dev", "--host"]
