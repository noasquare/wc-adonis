'use strict'

class PostController {
  index ({view}){
    const pageTitle = '海王'
    const user = {
      name: '王超'
    }
    // const entities = [
    //   { id: 1, title:'Lemon', content: 'big Lemon'}
    //   { id: 2, title:'apple', content: 'big big apple'}
    // ]
    const entities = [
      {id:1, title:'apple',content:'nima'},
      {id:2, title:'nima',content:'woma'}

      // {id:3, title:'apple',content:'nima'}
      // {id:2, title:'shit',content:'wori'}
    ]
    return view.render('posts.index',{pageTitle,user,entities})
  }
}

module.exports = PostController
