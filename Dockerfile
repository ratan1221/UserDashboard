FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]


##docker build -t ratan1221/userdashboard:latest .
##docker run -p 5173:5173 --env-file .env --name userdashboard-container ratan1221/userdashboard:latest
