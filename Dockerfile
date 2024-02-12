FROM node:14-alpine AS builder

# Add a work directory
WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]