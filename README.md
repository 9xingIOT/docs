# 九星文档

## 开发环境

- NodeJS：18.16.0
- pnpm：8.6.0
- docusaurus：2.4.1

## 开发预览

在开发环境下，**只能查看一种语言**，默认是`zh-Hans`，即**简体中文**。开发环境下不支持切换英文。运行命令：

```bash
$ pnpm start
```

## 生产预览

```bash
$ pnpm build

$ pnpm serve
```

生产预览类似于`Nginx`运行静态网页。

## 爬虫更新

```bash
$ docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```