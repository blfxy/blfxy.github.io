module.exports = {
  title: "blfxy",
  description: "22222", //mate标签
  base: "/",
  // 网页头部配置
//   head: [
//     // 改变title的图标
//     [
//       "link",
//       {
//         rel: "icon",
//         href: "/img/linktolink.png", //图片放在public文件夹下
//       },
//     ],
//   ],
  // 主题配置
  themeConfig: {
    repo: "vuejs/vitepress", // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about/" },
    ],
    //   侧边导航
    // sidebar: [{ text: "我的", link: "/mine/" }],
  },
};
