AngularJS1 Inspect Component Demo
=================================

对于一个component，inspect的关键点就是要拿到`isolateScope`，然后才能拿到相应的controller，
才能做更多的事情。

注意：如果程序关闭了debug，则拿到的值为undefined

```
app.config(function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
});
```

```
npm install
npm run demo
```
