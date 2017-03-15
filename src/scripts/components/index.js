// 用来做容器

'use strict'

import React from 'react'

import { Link } from 'react-router'

import TabBarStore from '../flux/stores/TabBarStore'

import TabBarActions from '../flux/actions/TabBarActions'

class Index extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     currentType: 'features'
  //   }
  // }

  setTabBars () {
    let tabBars = [
      {
        title: '首页',
        icon: '&#xe644',
        iconLight: '&#xe644;',
        type: 'features'
      },
      {
        title: '闪送超市',
        icon: '&#xe61f;',
        iconLight: '&#xe61f;',
        type: 'USBox'
      },
      {
        title: '购物车',
        icon: '&#xe61b;',
        iconLight: '&#xe61b;',
        type: 'car'
      },
      {
        title: '我的',
        icon: '&#xe646;',
        iconLight: '&#xe646;',
        type: 'me'
      }
    ]
    let type = TabBarStore.getItem()
    return tabBars.map((item, index) => {
      return (
        <li onClick={TabBarActions.setItem.bind(this, item.type)} className={type == item.type ? 'active' : ''}>
          <Link to={item.type}>
          <i className='yo-ico' dangerouslySetInnerHTML={{__html: type == item.type ? item.iconLight : item.icon}}></i>
          <b>{item.title}</b>
          </Link>
        </li>
      )
    })
  }

  // changeTabBar (type) {
  //   this.setState({
  //     currentType: type
  //   })
  // }

  render () {
    return (
      <div className='m-index'>
        <section>
          {this.props.children}
        </section>
        <nav>
          <ul>
            {this.setTabBars.call(this)}
          </ul>
        </nav>
      </div>
    )
  }
}

// <li onClick={this.changeTabBar.bind(this, 'features')} className={this.state.currentType == 'features' ? 'active' : ''}>
//   <i className='yo-ico'></i>
//   <b>首页</b>
// </li>
// <li onClick={this.changeTabBar.bind(this, 'USBox')} className={this.state.currentType == 'USBox' ? 'active' : ''}>
//   <i className='yo-ico'></i>
//   <b>个人中心</b>
// </li>
// export default Index
// export {Index}
export { Index as default }
