FROM node:16-alpine

WORKDIR /server
COPY . /server/

RUN npm install
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]