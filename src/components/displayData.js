import React, { Component } from 'react';
import Data from '../data/UIE-InterviewProject.json';
import DataDetail from './dataDetail';
import { Container, Row, Col } from 'reactstrap';
import './dataDetail.css';

class DisplayData extends Component {
  render(){
    let dataCards = Data.map((dataDetails, index)=>{
      return (  <Col sm="2">
          <DataDetail post={dataDetails} />
        </Col>
      )
    })
    return(
      <Container fluid>
        <Row>
          { dataCards }
        </Row>
      </Container>
    )
  }
}
export default DisplayData;
