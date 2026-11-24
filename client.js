/**
 * Hello 示例插件 —— 什么都不做，只在控制台里打一行字。
 *
 * 这个插件存在的唯一目的是验证流程：上架能不能过审、市场里渲染成什么样、
 * 装到 data/plugins/ 之后能不能被认出来。它不读任何数据、不发任何请求，
 * 所以 manifest 里的 permissions 是空数组。
 *
 * 插件的入口导出一个默认函数，Uranus 在加载时调用它一次。
 * 现在参数里有什么还没定（主程序那半还没做），所以这里先不碰 ctx。
 */

export default function hello(/* ctx */) {
  console.log("[uranus-plugin-hello] 示例插件已加载 —— 它什么也没做，这是对的。");
}
