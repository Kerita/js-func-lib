# js-func-lib
To record some useful functions.

## [1 setTag](./1-setTagForVueSpaProject.js)

对于利用Vue脚手架生成的项目(vue init webpack projectname)，提交代码之后，让运维人员上线，如何快速确定已经上线成功了呢？

对于前端，当然可以通过查看本次修改的界面或功能进行验证，但是这样未免太慢，所以写了个函数，放在构建跑的脚本中。

构建默认跑的命令是npm run build，在package.json中找到build命令所跑的脚本，即build/build.js文件，放到合适的位置，搞定。

函数的功能是读取构建生成的index.html文件，在body结束标签之前插入如下代码,后面的时间是每一次构建时间。
```
<script>console.log("Build Time: Thu Jun 08 2017 15:05:40 GMT+0800 (中国标准时间)");</script>
```

## [2 formatDate](./2-formatDate.js)

函数的功能是将日期格式化成型如"yyyy-mm-dd HH:mm:ss"类型数据，可以传递Date类型数据或者时间戳。

## [3 deepCopy](./3-deepCopy.js)

对于一般的对象可以采用Object.assign({}， originObj)这个函数进行复制，但是数组无法这个函数，所以参考网上资料写了一个deepCopy

## [4 getSometimeToday](./4-getSometimeToday.js)

获取今天的某个时间，返回一个Date对象

## [5 getGlobal](./4-getGlobal.js)

在不同JavaScript环境中，如浏览器和Node中，获取顶层对象(来自阮一峰《ES6入门》- 2.let和const命令 -最后一部分)

## [6 is32Bit](./6-is32Bit.js)
测试一个字符由两个字节还是由四个字节组成的方法（来自阮一峰《ES6入门》- 4.字符串拓展 2.codePointAt）

## [7 saferHtml](./7-saferHtml.js)
利用标签模板过滤html代码（来自阮一峰《ES6入门》- 4.字符串拓展 12.标签模板）