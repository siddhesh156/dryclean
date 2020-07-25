import React, { useState }  from 'react';
import './Product.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*imgs */
import img1 from '../../images/shirts/shirt1.png'
 import img2 from '../../images/shirts/oxford-shirt.jpeg';
 import img3 from '../../images/shirts/dress-shirt.jpg';
 import img4 from '../../images/shirts/cuban-shirt.jpg';

const Product = () => {

    const productList = [
        { id: 1, name: "shirt", title: "Oxford Button-Down Shirt", descp: "Oxford cotton is created by weaving the cotton yarn in a certain way giving a textured rather than smooth finish.", img: img2 },
        { id: 2, name: "shirt", title: "Dress Shirt", descp: "A dress shirt is a garment with a collar and a full-length opening at the front, which is fastened using buttons or shirt studs.", img: img3},
        { id: 3, name: "shirt", title: "Cuban Collar Short Sleeve Shirt", descp: "Cuban collar shirts can quickly tip into kitsch territory, where you look like you just stepped off a bowling lane or cruise ship", img: img4 },
      ];

      console.log("prodcut list  22 32",img1)

    console.log("prodcut list ",productList)

//     Oxford Button-Down Shirt. Sharing its name with the Oxford cloth from which it's cut, this menswear classic has been serving as the bedrock of many a stylish outfit for well over 120 years. ...
// Dress Shirt. ...
// Cuban Collar Short Sleeve Shirt. ...
// Overshirt. ...
// Flannel Shirt. ...
// Office Shirt. ...
// Chambray. ...
// Classic Short Sleeve Shirt.

    return(
        <div className="productContainer">
            <div className="productCardScreen">
                {productList.map((m,i) => (
            <Card className="productCard">
                <CardActionArea>
                    <CardMedia
                    className="productCardMedia"
                    image={m.img}
                    title={m.title}
                    style={{backgroundPosition: "top"}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {m.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {m.descp}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
                )
                )}

            </div>
        </div>
    )
}

export default Product;