import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardImg, CardFooter, CardImgOverlay } from 'reactstrap';
import './dataDetail.css';

class DataDetail extends Component {
  constructor(props){
    super(props);
    this.convertPrice = this.convertPrice.bind(this);

  }
  convertPrice(price){
    var finalPrice = Number(price).toLocaleString('en', {style: 'currency', currency:'USD'});
    return finalPrice;
    }

  render(){
    const data = this.props.post;
    return(
      <div className='div'>
      <Card className='card'>
        <CardImg top width="100%" src="http://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg" alt="Card image cap" />
        <CardImgOverlay>
          <CardImg top width="100%" src="http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png" alt="Card image cap" />
        </CardImgOverlay>
          <CardBody className="cardBody">
            <CardTitle className="cardTitle">{data.Heading} </CardTitle>
            <CardSubtitle className="cardSubtitle">{data.Subheading} </CardSubtitle>
          </CardBody>
          <CardFooter style={{'backgroundColor':'white'}} className="cardFooter"> {this.convertPrice(data.Price)}</CardFooter>
      </Card>
    </div>
    )
  }
}
export default DataDetail;
