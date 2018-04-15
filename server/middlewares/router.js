import Router from 'koa-router'
import config from '../config'
import reply from '../wechat/reply'
import weixinMiddle from '../wechat-lib/middleware'

export const router = app => {
  const router = new Router()
  router.all('/wechat-hear', weixinMiddle(config.wechat, reply))
  app
    .use(router.routes())
    .use(router.allowedMethods())
}
