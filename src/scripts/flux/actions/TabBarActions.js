import AppDispatcher from '../dispatchers/AppDispatcher'

export default {
  setItem(text) {
    AppDispatcher.dispatch({ // dispatch调用的是flux 一个实例appdispathers中的方法
      actionType: 'SET_ITEM',
      text: text
    })
  }
}
