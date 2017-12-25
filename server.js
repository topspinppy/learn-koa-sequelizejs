const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();



app.use(router.allowedMethods())
app.use(router.routes())
app.use(require('koa-body')())

const port = 3000
app.listen(port, () => {
    console.log(`running on port : ${port}`)
})