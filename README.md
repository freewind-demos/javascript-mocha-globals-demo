JavaScript Mocha "--globals" Demo
=================================

如果我们在mocha命令行里开启了`--check-leaks`，就会检查对global变量的更新，可以减少意外错误。

如果某些global变量是我们刻意使用的，那么声明`--globals`，就可以让相关的变量不出现警告。

```
npm install
npm run test-no-globals
```

打印：

```
  mocha
    ✓ should find global hello correctly
    1) should find global hello correctly


  1 passing (9ms)
  1 failing

  1) mocha
       should find global hello correctly:
     Error: global leak detected: hello

```


```
npm run test-globals
```

打印：

```
  mocha
    ✓ should find global hello correctly


  1 passing (9ms)
```
