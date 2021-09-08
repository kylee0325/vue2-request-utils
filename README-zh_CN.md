[English](./README.md) | 简体中文

<h1 align="center">vue2-request-utils</h1>
<div align="center">
  <p align="center">⚡️ 一个能轻松帮你管理请求状态的 Vue 3 composition API 请求库，这是从VueRequest移植过来调整的vue2版本，基于@vue/composition-api。</p>
</div>

## 文档

- [VueRequest](https://www.npmjs.com/package/vue-request)
- [English](https://www.attojs.org/)
- [中文](https://www.attojs.org/zh/)

## 安装

```bash
npm install vue2-request-utils

# or with yarn
yarn add vue2-request-utils
```

## 用例

```tsx
import { useRequest } from "vue2-request-utils";

export default {
  setup() {
    const { data } = useRequest("api/user");
    return () => <div>{data.value}</div>;
  },
};
```
