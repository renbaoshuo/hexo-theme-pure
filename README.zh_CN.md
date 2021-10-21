# Pure

> 一款为 Hexo 设计的简约主题。

[![Author](https://img.shields.io/badge/Author-Baoshuo-b68469.svg?style=flat-square)](https://baoshuo.ren)
[![Version](https://img.shields.io/github/v/release/renbaoshuo/hexo-theme-pure?color=%235755d9&include_prereleases&label=version&style=flat-square)](https://github.com/renbaoshuo/hexo-theme-pure/releases)
[![Hexo](https://img.shields.io/badge/hexo-4.0+-0e83cd.svg?style=flat-square)](https://hexo.io)
[![Repo Size](https://img.shields.io/github/repo-size/renbaoshuo/hexo-theme-pure?style=flat-square)](https://github.com/renbaoshuo/hexo-theme-pure)

![image](https://user-images.githubusercontent.com/47095648/111874137-bb164800-89ce-11eb-94fc-0d7e6d17718a.png)

[English](/README.md) | 简体中文

*本主题移植自 [imhanjie/gridea-theme-pure](https://github.com/imhanjie/gridea-theme-pure) ，已经过原作者同意。*

## 示例

+ [宝硕博客](https://blog.baoshuo.ren)（修改版）
+ [Hexo 主题单元测试 - Pure](https://renbaoshuo.github.io/hexo-theme-pure)

## 安装

### 通过 GitHub 安装

您需要先切换到站点所在目录，然后才能进行以下操作。

```bash
npm install hexo-renderer-ejs hexo-renderer-less --save
git clone https://github.com/renbaoshuo/hexo-theme-pure.git themes/pure
```

### 通过 NPM 安装

```bash
npm install hexo-theme-pure
# 或者使用 yarn：yarn add hexo-theme-pure
```

## 设置

+ `favicon`：显示在浏览器选项卡和书签中的站点徽标。（字符串，默认：`/favicon.ico`）
+ `avatar`：网站页眉处显示的 Logo 。（字符串，默认：`/favicon.png`）
+ `katex`：是否加载 [KaTeX](https://katex.org) 的 CSS 文件. （布尔值，默认：`false`）
+ `force_https`：是否强制全局 HTTPS。（布尔值，默认：`false`）
+ `check_update`：是否在程序退出前检查更新。（布尔值，默认：`false`）
+ `menus` 导航栏菜单
  - `name`：导航栏上显示的名称。（字符串）
  - `link`：要跳转到的页面链接。（字符串）
  - `target`：链接的 [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target) 属性值。（字符串， `_self` 或 `_blank`，默认：`_self`）
+ `post`：文章设置
  - `feature`：在文章列表中显示文章头图（需要在文章中指定 `feature` ，布尔值，默认：`false`）
+ `disqus`：DisqusJS 设置
  - `enable`：是否开启 DisqusJS。（布尔值，默认： `false`）
  - `shortname`：站点在 Disqus 中的 shortname 。
  - `api`：Disqus API endpoint 。
  - `apikey`：Disqus API Key 。
  - `admin`：管理员的 Disqus 用户名。
+ `gitalk`: [Gitalk](https://github.com/gitalk/gitalk) 配置
  - `enable`: 是否开启 Gitalk 。
  - `clientId`: 你的 GitHub Oauth App Client Id 。
  - `clientSecret`: 你的 GitHub Oauth App Client Secret 。
  - `repository`: 你的 GitHub 评论仓库。
  - `owner`: 你的 GitHub 用户名。
+ `web_analytics`：站点统计设置
  - `enable`：是否开启站点统计。（布尔值，默认：`false`）
  - `google`：谷歌站点统计跟踪 ID 。
  - `baidu`：百度站点统计 ID 。
+ `footer`：页脚显示的内容。
+ `friends`：友情链接
  - `name`：站点名称。
  - `link`：链接。
  - `logo`：站点图标。
  - `description`：站点简介。

## 注意事项

### 代码高亮设置

本主题内置了一组针对 [`highlightjs`](https://highlightjs.org) 设计的代码高亮样式。请勿开启 `line_number` 和 `wrap` ，本主题暂时不支持这些功能。

配置示例：

```yaml
highlight:
  enable: true
  auto_detect: true
  line_number: false  # This value must be `false`
  wrap: false         # This value must be `false`
  tab_replace: '    ' # 4 spaces
  hljs: true          # This value must be `true`
prismjs:
  enable: false
```

### KaTeX 数学公式

推荐使用 `hexo-renderer-markdown-it` 来渲染 Markdown 并安装 `@neilsustc/markdown-it-katex` 来渲染数学公式。

```bash
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-markdown-it @neilsustc/markdown-it-katex --save
```

配置示例：

```yaml
# Markdown-it config
## Docs: https://github.com/celsomiranda/hexo-renderer-markdown-it/wiki
markdown:
  render:
    html: true
    xhtmlOut: false
    breaks: true
    linkify: true
    typographer: true
  plugins:
    - '@neilsustc/markdown-it-katex'
  anchors:
    level: 2
    collisionSuffix: 't'
    permalink: false
    permalinkClass: header-anchor
    permalinkSymbol: ''
```

### DisqusJS 评论系统

您必须在使用 [DisqusJS](https://github.com/SukkaW/DisqusJS) 前 [注册一个 Disqus 应用程序](https://disqus.com/api/applications/) 。

## Author

**hexo-theme-pure** © [Baoshuo](https://github.com/renbaoshuo), Released under the [GPL-3.0](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/hexo-theme-pure/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
