FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build -- --output-path=dist


FROM nginx:1.13

COPY --from=builder /ng-app/dist /var/www/html
