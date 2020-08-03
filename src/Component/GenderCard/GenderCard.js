import React, { useState }  from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './GenderCard.css'
import { useSelector, useDispatch } from 'react-redux'
import {
    getGenderType
} from '../../Redux'

import img1 from '../../images/Gender/Men.png';
import img2 from '../../images/Gender/Women.png';


const GenderCard = () => {
    const dispatch = useDispatch()
    const submit = (e) =>{
        console.log("g nsmes",e.target.title)
        dispatch({ type: "GENDER_TYPE", genderType: e.target.title })
    }

    return(
        <div className="selectContainer">
               <Card className="productCard">
                <CardActionArea className="productCard2">
                    <CardMedia
                    className="productCardMedia"
                    image={img1}
                    title="Men"
                    name="Men"
                    style={{backgroundPosition: "top"}}
                    onClick={(e)=>submit(e)}
                    />
                    <CardContent>
                    <Typography gutterBottom align="center" color="textSecondary" variant="h5" component="h2">
                       Men
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                
                </Card>
                

                <Card className="productCard">
                <CardActionArea className="productCard2">
                    <CardMedia
                    className="productCardMedia"
                    image={img2}
                    title="Women"
                    style={{backgroundPosition: "top"}}
                    />
                    <CardContent>
                    <Typography gutterBottom align="center" color="textSecondary"  variant="h5" component="h2">
                    Women
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                
                </Card>
        </div>
    )
}

export default GenderCard;