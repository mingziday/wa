# 蛙声

一个在线播放音乐的单页面应用，用来学习React基本技能

## 1、过程记录

### 2023-12-1 环境准备
intelliJ idea  
nodejs  
git+TortoiseGit  

### 2023-12-5
用Create-React-App搭建脚手架  
根据《React全家桶：前端开发与实例详解》中的实例，构建音乐列表组件，CSS采用semantic。不适用class方式，而是使用function的方式构建组件  
播放组件为ReactPlayer，见[ReactPlayer](https://github.com/CookPete/react-player)，注意要加controls属性，否则不展示

### 2023-12-8
上传到github的master分支
利用gh-pages工具，上传到gh-pages分支，设置GitHub Pages，测试[访问](https://mingziday.github.io/wa/)

## 2、问题
### modules的安装目录
git工具[安装](https://blog.csdn.net/weixin_45677696/article/details/128949171)
npm install xxx 带参数-g安装到全局目录，否则安装到当前目录  
npm install xxx --save-dev 安装到当前目录，并在项目的package文件的devDependencies节点写入依赖
### GitHub Pages是什么
一项静态网站托管服务，它直接从github上获取html/js等网站静态文件，(可选）通过构建过程运行文件，然后发布网站。
### gh-pages 是什么
一个将构建文件发布到GitHub的工具，直接上传到git的gh-pages分支，在每个Git仓库的setting目录设置下，外部就可以访问了
操作流程见[说明](https://juejin.cn/post/7159766711531962398)

## 3、计划


