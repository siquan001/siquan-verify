## siquan-verify

一个开源、简单、快速的人机验证插件

## 使用

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <!-- 不用管index.js -->
    <!-- 引用verify.js -->
    <script src="./siquan-verify/verify.js"></script>
  </head>
  <body>
    <!-- 点击式验证 -->
    <div class="verify"></div>
    <!-- 嵌入式验证 -->
    <div class="verify-embed"></div>
  </body>
</html>
```

只用先引用`verify.js`，然后使用`<div class="verify"></div>`或`<div class="verify-embed"></div>`即可把人机验证加入到页面。

### API

```javascript
var verify=document.getElementById('verify');
var login_btn=document.getElementById('login_btn')

// 所有使用了Verify API的代码需要放在Verify.onready里执行
Verify.onready=function(){
  login_btn.onclick=function(){
    // 使用 Verify.isVerified(Element) 判断是否验证
    var isVerified=Verify.isVerified(verify);
    if(!isVerified){
      alert('请先进行人机验证！');
    }
  }
  //使用 Verify.onverified(Element,Function) 监听验证
  Verify.onverified(verify,function(){
    alert('验证成功！');
  })
}
```

所有使用了Verify API(即使用`Verify.xxx`)的代码需要放在Verify.onready里执行。

`Verify.isVerified(Element)` : 判断是否验证
`Verify.onverified(Element,Function)` : 监听验证
