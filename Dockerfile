# Stage 1
FROM registry.cn-hangzhou.aliyuncs.com/9xing/js904-docs:layer as builder

WORKDIR /app

COPY blog blog
# COPY news news
COPY src src
COPY docs docs
COPY static static
COPY docusaurus.config.js .
COPY sidebars.js .
COPY nginx.conf .

RUN pnpm build

# Stage 2
FROM nginx:1.20.2-alpine as prod

LABEL maintainer="drone<drone@9xing.cn>"

WORKDIR /app

# 设置时区
RUN echo "Asia/Shanghai" > /etc/timezone && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime 

COPY --from=builder /app/build ./build
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80