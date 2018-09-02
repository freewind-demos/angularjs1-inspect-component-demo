AngularJS1 Component Demo
=========================

AngularJS 1.5中引入了`component`，它可以看作是对`directive`的一种简化，让我们更方便的以组件方式来组织我们的页面。

directive是AngularJS的核心，功能非常强大，使用它也完全可以实现`component`的效果，但是我们必须在使用时注意一些细节，才能避免一些意外问题。

在这个Demo中，我们同时使用directive和component实现了完全一样的`counter`组件，你可以看到它们之间的区别并不是很大，只是component版本中要比directive中少了一些配置。

那些多出来的配置可以看作是固定写法，那么使用一个`component`概念既可以减少我们的输入（以及出错的可能），也同时把组件这种特别的directive与其它的directive区分开。

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Resources
---------

- 强烈建议阅读这篇文章： <https://toddmotto.com/exploring-the-angular-1-5-component-method/>