English | [简体中文](README-zh_CN.md)

<h1 align="center">vue2-request-utils</h1>
<div align="center">
  <p align="center">⚡️ Vue 3 composition API for data fetching. This is a version for Vue 2 by using @vue/composition-api, which is forked from VueRequest.</p>
</div>

## Documentation

- [VueRequest](https://www.npmjs.com/package/vue-request)
- [English](https://www.attojs.org/)
- [中文](https://www.attojs.org/zh/)

## Install

```bash
npm install vue2-request-utils

# or with yarn
yarn add vue2-request-utils
```

## Usage

```tsx
import { useRequest } from "vue2-request-utils";

export default {
  setup() {
    const { data } = useRequest("api/user");
    return () => <div>{data.value}</div>;
  },
};
```
