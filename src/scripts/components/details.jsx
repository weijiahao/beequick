'use strict';

import React from 'react'

let Details =React.createClass({
  getInitialState:function () {
    return{
      detailsData:null,
      title:''
    }
  },

  getNodes:function(url,id,callback){
    fetch(url)
      .then(response=>response.json())
      .then(res=>{
        this.setState({
          title: res.title
        })
        callback (
          <Scroller>
            <div>
              <i><img src={res.images.large} /></i>
              <b>
                <span>{res.title}</span>
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
      <div>
        <header>
          Details
        </header>
        {this.state.data}
      </div>
    )
  },

  componentDidMount:function(){
    thie.getNodes.call(this,'api/details',1292052,(data)=>{
        this.setState({
          detailsData:data
        })
    })
  }





})

export default Details
