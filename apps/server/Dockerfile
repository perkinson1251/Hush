FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/server/package.json ./apps/server/

RUN pnpm install --frozen-lockfile

COPY apps/server ./apps/server

WORKDIR /app/apps/server

RUN pnpm build

EXPOSE 8080

CMD ["pnpm", "start:prod"]
