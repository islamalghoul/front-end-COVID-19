import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./CountryStatistics.css"
import axios from 'axios'

export class CountryStatistics extends Component {

    constructor(props){
        super(props);
        this.state={
            local:[],
            flage:false
        }

    }
    handelSubmit=(e)=>{
        e.preventDefault()
        let country=e.target.country.value;
        let from=new Date(e.target.from.value);
        from=from.toISOString()
        let to =new Date(e.target.to.value);
        to=to.toISOString()
        axios.get(`http://127.0.0.1:8000/api/v1/covid/local/?country=${country}&from=${from}&to=${to}`).then(result=>{

        console.log(result.data)
        this.setState({
            local:result.data,
            flage:true
        })

        })
        


    }

  render() {
    return (<>
      <h3 className='country'>Get Statistics For a specific country</h3>
      <Form className='form' onSubmit={this.handelSubmit}>
      <Form.Group className="mb-3" >  
        <Form.Control type="Text" placeholder="Enter the name of the country" className='input' name='country' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="date"  className='input' name='from'/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="date"  className='input' name='to'/>
      </Form.Group>
      <Button variant="primary" type="submit" className='b'>
        SEARCH
      </Button>
    </Form>{this.state.flage &&
    <Row xs={1} md={4} className="g-4">
      {this.state.local.map((data) => (
        <Col >
          <Card className='card3' >
            <div className='for_row'>
                <div className='for_col'></div>
                <div className='card2'>
                    <p className='for_date'>Date:{data.Date}</p>
                    <p> Number of confirmed Cases:{data.Cases}</p>
              
            </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  }

    </>
    )
  }
}

export default CountryStatistics