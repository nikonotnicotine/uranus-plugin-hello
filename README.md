# Hello 示例插件

一个**几乎什么都不做**的 [Uranus](https://github.com/nikonotnicotine/Uranus_Imessage) 插件。

它存在的目的是验证流程：上架能不能过审、在控制台的插件市场里渲染成什么样、装到 `data/plugins/` 之后能不能被认出来、插件配置的表单长什么样。

装上之后你会看到的全部效果，是浏览器控制台里多一行字（这句话、打几遍、用什么级别，都能在插件设置里改）：

```
[uranus-plugin-hello] 示例插件已加载 —— 它什么也没做，这是对的。
```

没有界面、没有按钮、不改任何外观。

## 它碰什么

**什么都不碰。** 不读聊天记录、不读配置、不读密钥，不往任何地方发网络请求，不在 `data/` 下写任何文件。`manifest.json` 里的 `permissions` 是空数组。

这也是它适合当示例的原因 —— 你可以放心装上去看看效果，再卸掉。

## 配置

v1.1.0 起它演示了插件配置：在控制台的「插件」分区点它的「设置」，能看到五种类型各一个 ——

| 项 | 类型 | 做什么 |
|---|---|---|
| 打招呼用的话 | `string` | 要打的那句话 |
| 用哪个级别打 | `select` | `console.log` / `info` / `warn` |
| 打几遍 | `number` | 1~5，演示范围校验 |
| 带上时间 | `boolean` | 句子前面加个时间戳 |
| 假装是个密钥 | `secret` | **这个插件不会用它**，纯粹演示密码框和「保存后只剩圆点」 |

改完要刷新页面才生效。真实插件在 `secret` 那种项里填 API key —— 写法见
[怎么写一个 Uranus 插件](https://github.com/nikonotnicotine/uranus-plugins/blob/main/WRITING-PLUGINS.md)。

## 怎么装

1. 在 [Releases](https://github.com/nikonotnicotine/uranus-plugin-hello/releases) 下载 zip；
2. 打开 Uranus 控制台 → 插件 → 导入 zip。

需要 Uranus v1.23.0 以上；插件配置（这个插件 v1.1.0 演示的那部分）要 v1.23.3 以上 —— 装在更早的版本上，插件照常跑，只是设置里那几项读到的永远是默认值。

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
