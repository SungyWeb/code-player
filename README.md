# code-player

## 环境

> 由于使用的是webpack5，但是中文文档并没有更新，需要查看[官方英文文档](https://webpack.js.org/)

### CopyWebpackPlugin

+ Q: 开发环境需要将`demo`文件夹下的所有html文件同步到devServer服务中，以便能够浏览

```
Invalid options object. Copy Plugin has been initialized using an options object that does not match the API schema.
 - options[0] has an unknown property 'flatten'. These properties are valid:
   object { patterns, options? }
```

+ A: 入参变化了 看文档

+ Q: 不支持

```
[webpack-dev-middleware] HookWebpackError: Not supported
```

+ A: 降级，问题版本 10.0.2 降至9

### CleanWebpackPlugin

+ 不需要了 ，`config.output.clean`可以设置