import axios from 'axios'
import React, { Component } from 'react'

import './WordStatistics.css'
export class WordStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            world:[],

        }
      }
      componentDidMount=()=>{
        axios.get(`http://127.0.0.1:8000/api/v1/covid/global/`).then(result=>{
            console.log(result.data)
            this.setState({
                world:result.data
            })
              }).catch(err=>{
                console.log(err)
              })

    }
      
  render() {
    return (<>
    <h3 className='world'>World Total Statistics</h3>
    <div className='card1'>
        <h6>Total Confirmed:{this.state.world['TotalConfirmed']}</h6>
        <h6>Total Deaths:{this.state.world['TotalDeaths']}</h6>
        <h6>Total Recovered:{this.state.world['TotalRecovered']}</h6>
    </div>
    </>
    )
  }
}

export default WordStatistics