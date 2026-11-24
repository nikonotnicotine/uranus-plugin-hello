# Hello 示例插件

一个**什么都不做**的 [Uranus](https://github.com/nikonotnicotine/Uranus_Imessage) 插件。

它存在的唯一目的是验证流程：上架能不能过审、在控制台的插件市场里渲染成什么样、装到 `data/plugins/` 之后能不能被认出来。

装上之后你会看到的全部效果，是浏览器控制台里多一行字：

```
[uranus-plugin-hello] 示例插件已加载 —— 它什么也没做，这是对的。
```

没有界面、没有按钮、不改任何外观。

## 它碰什么

**什么都不碰。** 不读聊天记录、不读配置、不读密钥，不往任何地方发网络请求，不在 `data/` 下写任何文件。`manifest.json` 里的 `permissions` 是空数组。

这也是它适合当示例的原因 —— 你可以放心装上去看看效果，再卸掉。

## 怎么装

1. 在 [Releases](https://github.com/nikonotnicotine/uranus-plugin-hello/releases) 下载 zip；
2. 打开 Uranus 控制台 → 插件 → 导入 zip。

> 插件运行时还在做，这一版的 Uranus 还装不了插件。这个仓库先建着，等运行时做完就能用。

## 给插件作者看的

照着这个结构写就行：

```
manifest.json    必须。id / name / version / author / repo / entry / permissions
client.js        前端入口，导出一个默认函数，Uranus 加载时调用一次
style.css        可选
LICENSE          必须，OSI 开源协议
README.md        说清楚它做什么、碰什么数据
```

`manifest.json` 里的 `id` 必须和插件市场索引里那条的 `id` 一致 —— 控制台靠它判断「这个你已经装了」。

上架规则和提交流程见 [uranus-plugins](https://github.com/nikonotnicotine/uranus-plugins)。

## 协议

MIT
