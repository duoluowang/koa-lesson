import Koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'

const app = new Koa()
const router = new Router()

app.use(views('./views', {
  map: {
    ejs: 'ejs'
  }
}))

router.get('/', async ctx => {
  ctx.body = 'hello'
})

router.get('/nav', async ctx => {
  await ctx.render('./index.ejs')
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
