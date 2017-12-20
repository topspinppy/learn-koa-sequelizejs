const Koa = require('koa');
const Router = require('koa-router');
const Sequelize = require('sequelize');
const app = new Koa();
const router = new Router();

let users;

const sequelize = new Sequelize('test', 'root', '432018', {
    dialect: 'mysql'
})

sequelize.query("SELECT * FROM Persons", { type: Sequelize.QueryTypes.SELECT}).then(myTableRows => {
    users = myTableRows.findAll()
})


// let users = [
//     {
//         name: 'Jacob',
//         email: 'info@greek.net'
//     },
//     {
//         name: 'Wanza',
//         email: 'wanza@greek.net'
//     },
//     {
//         name: 'saiwarun',
//         email: 'eiei@greek.net'
//     }
// ];


// /user/:id
router.get('/user', ctx => {
    ctx.body = users;
})

router.get('/user/:id', ctx => {
    ctx.body = users[ctx.params.id];
})

app.use(router.allowedMethods())
app.use(router.routes())
app.use(require('koa-body')())

const port = 3000
app.listen(port, () => {
    console.log(`running on port : ${port}`)
})

