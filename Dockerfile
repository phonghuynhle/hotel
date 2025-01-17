FROM node:20

WORKDIR /app/backend

COPY package*.json ./

RUN npm install --force or --lagecy-peer-deps

COPY . .

EXPOSE 3030

CMD ["npm", "run", "dev"]
