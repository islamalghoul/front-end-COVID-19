import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./MyRecords.css"
import axios from 'axios'
export class MyRecords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Flage:true,
            flage:false,
            country:[]

        }
        
      }
      componentDidMount=()=>{
        axios.get('http://127.0.0.1:8000/api/v1/covid/').then(reslut=>{
            this.setState({
                country:reslut.data,
                flage:true,
                Flage:false
            })
            

        })

      }
      handelClick= async (ele)=>{
        console.log(ele)
        await axios.delete(`http://127.0.0.1:8000/api/v1/covid/${ele.id}`)
        axios.get('http://127.0.0.1:8000/api/v1/covid/').then(reslut=>{
            this.setState({
                country:reslut.data,
                flage:true,
                Flage:false
            })
            

        })
      }
  render() {
    return (<>
    {this.state.Flage&&<h1 className='empty'>No Available Records </h1>
    }{this.state.flage&&  
    <><h3 className='all_countries_text'>COVID19 Statistics For All countries</h3>
    <Row xs={1} md={4} className="g-4">
    {this.state.country.map((ele) => (
      <Col>
        <Card className='card3' >
          <div className='for_row'>
              <div className='for_col'></div>
              <div className='card4'>
                  <h4 className='for_date'>Country:{ele.country}</h4>
                  <p> Date:{ele.Date}</p>
                  <button className='bton' onClick={()=>this.handelClick(ele)}>DELETE</button>

            
          </div>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
    </>
    }

    </>
    )
  }
}

export default MyRecords