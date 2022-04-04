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

