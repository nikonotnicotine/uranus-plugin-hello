/**
 * Hello 示例插件 —— 几乎什么都不做，只在浏览器控制台里打一行字。
 *
 * 这个插件存在的目的是验证流程：上架能不能过审、市场里渲染成什么样、
 * 装到 data/plugins/ 之后能不能被认出来、配置表单长什么样。
 * 它不读任何数据、不发任何请求，所以 manifest 里的 permissions 是空数组。
 *
 * 插件的入口导出一个默认函数，Uranus 在加载时调用它一次，传进来一个 ctx：
 *
 *   { id, name, version, config }
 *
 * `config` 是用户在控制台里填的那份（manifest.json 的 config 段声明了有哪些项）。
 * 没声明配置的插件拿到的是 undefined，所以下面用了默认值兜底。
 *
 * 注意 config 是**加载时的快照**，不是响应式的 —— 用户改了配置要刷新页面才生效。
 * 这是有意的：插件已经按旧配置画了界面、挂了事件，热更新没法做干净。
 */

export default function hello(ctx = {}) {
  const {
    greeting = "示例插件已加载 —— 它什么也没做，这是对的。",
    style = "log",
    repeat = 1,
    showTime = false,
  } = ctx.config ?? {};

  // style 的值由 Uranus 按 manifest 里的 options 校验过，但插件自己也兜一道底：
  // 配置是用户填的，而「用户填的东西一定合法」这个假设迟早会被打破
  const log = typeof console[style] === "function" ? console[style] : console.log;
  const times = Math.min(Math.max(Number(repeat) || 1, 1), 5);

  for (let i = 0; i < times; i += 1) {
    const stamp = showTime ? `[${new Date().toLocaleTimeString("zh-CN")}] ` : "";
    log(`[uranus-plugin-hello] ${stamp}${greeting}`);
  }
}
