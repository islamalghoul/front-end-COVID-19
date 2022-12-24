import React, { Component } from 'react'
import WordStatistics from './WordStatistics'
import CountryStatistics from './CountryStatistics'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
        <>
        <WordStatistics/>
        <CountryStatistics/>
        
        </>
    )
  }
}

export default Home