'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Database = use('Database')
const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('/hello',({ request }) => {
//   return `hello ~ ${ request.input('name')}`
// })
// Route.get('/hello','HelloController.render')
//
// Route.get('/posts', async () => {
//   return await Database.table('posts').select('*')
// })
// Route.get('/posts',({request}) => request.get())

// Route.post('/posts',({request}) => request.post())
// Route.post('/posts',({request}) => request.all())
// Route.post('/posts',({request}) => request.collect(['content','title']))
// Route.post('/posts',({request}) => request.header('user-agent'))
// const delay = (data,time) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve(data)
//     },time)
//   })
// }
// Route.get('/posts',async ({request}) => {
  // const data = await delay(
    // 'List of posts',
    // 3000
  // )
//   return data
// })
Route.get('/list-of-posts',({ response }) => {
  response.route('list-of-posts')
})
Route.get('/list-of-food-posts',({response}) => {
  response.route('list-of-posts', { category:'food' })
})

Route.get('/posts/:category?',({ params }) => {
  return `List of ${ params.category || 'default' } posts.`
})
.as ('List-of-posts')
// Route.get('/posts',() => {
//   return 'List of posts.'
// })
// .as ('list-of-posts')
