# Pure

> A modern and simple theme for Hexo.

[![Author](https://img.shields.io/badge/Author-Baoshuo-b68469.svg?style=flat-square)](https://baoshuo.ren)
[![Version](https://img.shields.io/github/v/release/renbaoshuo/hexo-theme-pure?color=%235755d9&include_prereleases&label=version&style=flat-square)](https://github.com/renbaoshuo/hexo-theme-pure/releases)
[![Hexo](https://img.shields.io/badge/hexo-4.0+-0e83cd.svg?style=flat-square)](https://hexo.io)
[![Repo Size](https://img.shields.io/github/repo-size/renbaoshuo/hexo-theme-pure?style=flat-square)](https://github.com/renbaoshuo/hexo-theme-pure)

![image](https://user-images.githubusercontent.com/47095648/111874137-bb164800-89ce-11eb-94fc-0d7e6d17718a.png)

English | [简体中文](/README.zh_CN.md)

*This theme is transplanted from [imhanjie/gridea-theme-pure](https://github.com/imhanjie/gridea-theme-pure) and has been approved by the original author.*

## Demo

+ [Baoshuo's Blog](https://blog.baoshuo.ren) (Modified version)
+ [Hexo Theme Unit Test of Theme Pure](https://renbaoshuo.github.io/hexo-theme-pure)

## Installation

You need to switch to the directory where the site is located before performing the following operations.

```bash
npm install hexo-renderer-ejs hexo-renderer-less --save
git clone https://github.com/renbaoshuo/hexo-theme-pure.git themes/pure
```

## Settings

+ `favicon`: Site logo displayed in browser tabs and bookmarks. (String, default: `/favicon.ico`)
+ `avatar`: Site logo displayed on the header. (String, default: `/favicon.png`)
+ `katex`: Whether to load [KaTeX](https://katex.org) CSS. (Boolean, default: `false`)
+ `menus` (Array)
  - `name`: The name displayed on the navigation bar. (String)
  - `link`: The link of the page to jump to. (String)
  - `target`: The [target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target) of the link. (String, `_self` or `_blank`, default: `_self`)
+ `disqus`: DisqusJS Settings
  - `enable`: Whether to enable DisqusJS. (Boolean, default: `false`)
  - `shortname`: The shortname of the Disqus site.
  - `api`: Your disqus api.
  - `apikey`: Your disqus api key.
  - `admin`: Your disqus username.
+ `gitalk`: [Gitalk](https://github.com/gitalk/gitalk) Settings
  - `enable`: Whether to enable Gitalk. (Boolean, default: `false`)
  - `clientId`: Your GitHub oauth app client id
  - `clientSecret`:  Your GitHub oauth app client secret
  - `repository`: Your GitHub comment repository
  - `owner`: Your GitHub username
+ `google_analytics`: Google Analytics Settings
  - `enable`: Whether to enable Google Analytics. (Boolean, default: `false`)
  - `id`: Google Analytics tracker id.
+ `footer`: The content displayed in the footer.
+ `friends`: Friends (Array)
  - `name`: The name displayed on the friends list.
  - `link`: The link of the page to jump to.
  - `logo`: The logo displayed on the friends list.

## Attention

### Code highlight Settings

The theme has built-in highlight style of [`highlightjs`](https://highlightjs.org). Please do not enable `line_number` and `wrap` because this theme does not support them.

Here is a configuration example:

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

### KaTeX Settings

It is recommended to use `hexo-renderer-markdown-it` to render Markdown and install `@neilsustc/markdown-it-katex` to render mathematical formulas.

```bash
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-markdown-it @neilsustc/markdown-it-katex --save
```

Here is a configuration example:

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

### DisqusJS Settings

You must [Register a Disqus Application](https://disqus.com/api/applications/) before using [DisqusJS](https://github.com/SukkaW/DisqusJS).

## Author

**hexo-theme-pure** © [Baoshuo](https://github.com/renbaoshuo), Released under the [GPL-3.0](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/hexo-theme-pure/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
