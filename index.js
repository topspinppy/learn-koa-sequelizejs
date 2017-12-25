const Koa = require('koa');
const Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
const Sequelize = require('sequelize');
const app = new Koa();
const router = new Router();
let users;

const sequelize = new Sequelize('test', 'root', '432018', {
    dialect: 'mysql'
})

sequelize.query("SELECT * FROM Persons", { type: Sequelize.QueryTypes.SELECT}).then(myTableRows => {
    users = myTableRows
})

const db = sequelize.define('Persons', {
            PersonID: 
            {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            LastName: 
            {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            FirstName: 
            {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            Address: 
            {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            createdAt:
            {
                type: Sequelize.DATE,
                allowNull: true
            },
            updatedAt:
            {
                type: Sequelize.DATE,
                allowNull: true
            }
        },
    {
        tableName: 'Persons',
        timestamp: false
    }
)

// /user/:id
router.get('/user', async(ctx) => {
    let data = await db.findAll()
    ctx.body = data
})

router.post('/users', async(ctx) => {
    const { LastName, FirstName, Address } = ctx.request.body
    let data = await db.create({ LastName, FirstName, Address })
    ctx.body = data
})
app.use(bodyParser());
app.use(router.allowedMethods())
app.use(router.routes())
app.use(require('koa-body')())

const port = 3000
app.listen(port, () => {
    console.log(`running on port : ${port}`)
})

