# 环境准备



```javascript
npm init
```

## ES6支持

```javascript
npm install @babel/core @babel/node @babel/preset-env -D
touch .babelrc
```

编辑.babelrc文件

```
{
    "presets":["@babel/preset-env"]
}
```

## 语法检测

```
npm install eslint -g
eslint --init
```

## 自动启动服务工具
```
npm install nodemon -D
```

## 修改package.json配置
```
"start":"nodemon --exec babel-node app.js"
```

## koa相关的包
```
npm install koa
```

## pm2
```
npm install pm2 -g
pm2 ecosystem
```
- 修改ecosystem.config.js 把 script 选项改成 npm start
- 修改 app.js 的模块引用方式， 把import 改成 require


## 放弃本地修改，直接覆盖
```
1 git reset --hard
2 git pull
```