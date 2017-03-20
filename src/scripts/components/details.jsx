'use strict';

import React from 'react'
import Scroller from '../../component_dev/scroller/src/'

let Details =React.createClass({
  getInitialState:function () {
    return{
      detailsData:null,
      title:''
    }
  },

  getNodes:function(url,callback){
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
        this.setState({
          title: res.name
        })
        console.log(res)
        callback (
          <Scroller>
            <div>
              <i><img src={res.img1} /></i>
              <b>
                <span>{res.name}</span>
                <span>{res.original_title}（{res.year}）</span>
                <span>{res.rating.average}</span>
                <span>{res.summary}</span>
              </b>
            </div>
          </Scroller>
        )
      })
      .catch((e)=>{
        console.log(e);
      })
  },

  render:function(){
    return(
      <div className='m-details'>
        <header className='yo-header yo-header-a'>
          <h2 className="title">{this.state.title}</h2>
          <a href="#/features" className="regret yo-ico">&#xf07d;</a>
        </header>
        {this.state.detailsData}
      </div>
    )
  },

  componentDidMount:function(){
    this.getNodes.call(this,'/api/details',(data)=>{
        this.setState({
          detailsData:data
        })
    })
  }





})

export default Details
