require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.listen(process.env.SERVER_PORT, () => console.log('Server running'))

app.use(express.json())
app.use(cors({ origin: '*' }))


const loginRouter = require('./routes/login')
app.use('/login', loginRouter)

const userRouter = require('./routes/user')
app.use('/user', userRouter)

const menuRouter = require('./routes/menu')
app.use('/menu', menuRouter)

const salesRouter = require('./routes/sales')
app.use('/sales', salesRouter)

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

const resellersRouter = require('./routes/resellers')
app.use('/resellers', resellersRouter)