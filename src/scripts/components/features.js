'use strict'

import React from 'react'

import Header from './header'

import Scroller from '../../component_dev/scroller/src/index'

import Carousel from '../../component_dev/carousel/src/index'

class Features extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      featuresData: [<div/>]
    }
  }

  setNodes (callback) {
    let that = this
    fetch('/api/features')
      .then(response => response.json())
      .then(res => {
        let resAct = res.data.act_info[0].act_rows
        let data = resAct.map((item, index) => {
          return (
            <li className='item'>
              <img className='img' src={item.activity.img} />
            </li>
          )
        })
        callback(data)
      }).catch(() => {
      console.log('没拿到数据')
    })
  }

  render () {
    return (
      <div className='m-features'>
        < Header />
        <Scroller>
          <Carousel>
            {this.state.featuresData}
          </Carousel>
        </Scroller>
      </div>
    )
  }

  componentDidMount (data) {
    this.setNodes.call(this, (data) => {
      this.setState({
        featuresData: data
      })
    })
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000 // 可选选项，自动滑动
    })
  }

}
export default Features
