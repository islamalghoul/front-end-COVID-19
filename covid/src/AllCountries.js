import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './AllCountries.css'


export class AllCountries extends Component {
    constructor(props){
        super(props);
        this.state={
            summary:[],
            
        }

    }
    componentDidMount=()=>{
        axios.get('http://127.0.0.1:8000/api/v1/covid/summary/').then(result=>{
            console.log(result.data)    

            this.setState({
                summary:result.data.Countries
            })
            
        })

    }
    handelClick=(ele)=>{
        console.log(ele)
        let obj={
            country:ele.Country,
            total_confirmed_cases:ele.TotalConfirmed,
            total_deaths_cases:ele.TotalDeaths,
            total_recovered_cases:ele.TotalRecovered,
            Date:ele.Date


        }
        axios.post(`http://127.0.0.1:8000/api/v1/covid/`,obj)

    }
  render() {
    return (<>
      <h3 className='all_countries_text'>COVID19 Statistics For All countries</h3>
      <Row xs={1} md={4} className="g-4">
      {this.state.summary.map((ele) => (
        <Col>
          <Card className='card3' >
            <div className='for_row'>
                <div className='for_col'></div>
                <div className='card4'>
                    <h4 className='for_date'>Country:{ele.Country}</h4>
                    <p> Total confirmed Cases:{ele.TotalConfirmed}</p>
                    <p> Total Deaths Cases:{ele.TotalDeaths}</p>
                    <p> Total Recovered Cases:{ele.TotalRecovered}</p>
                    <p> Date:{ele.Date}</p>
                    <button className='bton' onClick={()=>this.handelClick(ele)}>ADD TO MY RECORDS</button>

              
            </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>



      </>
    )
  }
}

export default AllCountries