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

// const Database = use('Database')
const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('/posts',() => 'list of posts.')

// Route.post('/posts',() => 'post here!')
Route.get('/posts','PostController.index')
Route.post('/posts/:id',({  params }) => {
  return `the post id is ${ params.id }`
})

Route.patch('/posts/:id',({ params }) => {
  return `post of ${ params.id } has been updated!`

})

Route.delete('/posts/:id',({params}) => {
  return `post ${ params.id } has been removed!`
})

// Route.get('/hello',({ request }) => {
//   return `hello ~ ${ request.input('name')}`
// })
// Route.get('/hello','HelloController.render')
//
// Route.get('/posts', async () => {
//   return await Database.table('posts').select('*')
// })
