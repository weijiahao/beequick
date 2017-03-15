import { Dispatcher } from 'flux'

import TabBarStore from '../stores/TabBarStore'

let AppDispatcher = new Dispatcher()

AppDispatcher.register(action => {    //register注册也是flux中的
  switch (action.actionType) {
    case 'SET_ITEM':
      TabBarStore.setItemHandler(action.text)
      break;
  }
})

export default AppDispatcher