FROM node:18 AS build
ARG VITE_BASE_URL
ARG VITE_CABLE_URL
ENV VITE_BASE_URL $VITE_BASE_URL
ENV VITE_CABLE_URL $VITE_CABLE_URL
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1-alpine-slim
ARG STAGE=${stage_arg:-stage}
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.deploy/${STAGE}/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
