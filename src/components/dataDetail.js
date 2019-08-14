import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody, CardImg, CardFooter, CardImgOverlay } from 'reactstrap';
import './dataDetail.css';

class DataDetail extends Component {
  constructor(props){
    super(props);
    this.convertPrice = this.convertPrice.bind(this);
    this.compare= this.compare.bind(this);
    this.showBridge = this.showBridge.bind(this);
    this.sortPrice = this.sortPrice.bind(this);



  }
  convertPrice(price){
    var finalPrice = Number(price).toLocaleString('en', {style: 'currency', currency:'USD'});
    return finalPrice;
    }
    //sort the data before passing it to the cards and it will display that way
    compare(a, b){
      const priceA = a.price;
      const priceB = b.price;
      let comparison =0;
      if(priceA > priceB){
        comparison = 1;
      } else if(priceA < priceB) {
        comparison = -1;
      }
      return comparison;
    }

    showBridge(data){
      if(data.hasOwnProperty('showBridge')){
        return(
          <CardImg className="card-img" src="http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg" alt="Card image cap" />
        )
      } else {
        return(
          <div>
        <CardImg className='card-img-reg' top width="100%" src="http://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg" alt="Card image cap" />
         <CardImgOverlay>
            <CardImg top width="100%" src="http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png" alt="Card image cap" />
          </CardImgOverlay>
        </div>
        )
      }
    }

    sortPrice(data){
      var arr = [];
      for(var item in data){
          arr.push(item);
      }
      arr.sort(this.compare);
      return arr;
    }

  render(){
    const data = this.props.post;
    console.log (this.sortPrice(data));

    return(
      <div className='div'>
      <Card className='card'>
        <div className='div2'>
                  {this.showBridge(data)}
        </div>

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
