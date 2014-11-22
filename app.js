var koa = require('koa');
var router = require('koa-router');
var app = koa();

//xtpl模板引擎对koa的适配
var xtplApp = require('xtpl/lib/koa');
//xtemplate模板渲染
xtplApp(app,{
    //配置模板目录redis
    views: './views'
});

//使用跟express相似的路由器
app.use(router(app));

app.get('/simple',function *(){
    yield this.render('simple',{title:'xtemplate'});
});
app.get('/index',function *(){
    yield this.render('index',{title:'xtemplate',content:'this is demo'});
});


app.listen(3000);