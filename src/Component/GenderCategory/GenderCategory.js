import React, { useState }  from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './GenderCategory.css'
import { useSelector, useDispatch } from 'react-redux'


import img1 from '../../images/Gender/Men.png';
import img2 from '../../images/Gender/Women.png';


const GenderCategory = () => {
    const dispatch = useDispatch()
    const categoryArray = [ { id: 1, title: "Shirt", img: img1 },
    { id: 1, title: "T-Shirt", img: img1 },
    { id: 1, title: "Pants", img: img1 },
    { id: 1, title: "Jeans", img: img1 },
]


    const submit = (e) =>{
        console.log("g nsmes",e.target.title)
        switch(e.target.title){
            case "Shirt":
                dispatch({ type: "GENDER_TYPE", genderType: "product" })
                dispatch({ type: "CATEGORY_TYPE", categoryType: e.target.title })
                break;
            case "T-Shirt":
                dispatch({ type: "GENDER_TYPE", genderType: "product" })
                dispatch({ type: "CATEGORY_TYPE", categoryType: e.target.title })
                break;
            case "Pants":
                dispatch({ type: "GENDER_TYPE", genderType: "product" })
                dispatch({ type: "CATEGORY_TYPE", categoryType: e.target.title })
                break;
            case "Jeans":
                dispatch({ type: "GENDER_TYPE", genderType: "product" })
                dispatch({ type: "CATEGORY_TYPE", categoryType: e.target.title })
                break;
            default : null
                break;    

        }
        
    }

    return(
        <div className="selectContainerCategory">
             <div className="productCardScreenCategory">
            {
              categoryArray.map((n)=>( <Card className="productCardCategory" style={{borderRadius: "20px"}}>
                <CardActionArea className="productCard2Category">
                    <CardMedia
                    className="productCardMediaCategory"
                    image={img1}
                    title={n.title}
                    name={n.title}
                    style={{backgroundPosition: "top", borderRadius: "20px"}}
                    onClick={(e)=>submit(e)}
                    />
                    <CardContent>
                    <Typography gutterBottom align="center" color="textSecondary" variant="h5" component="h2">
                    {n.title}
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                
                </Card>

            ))
           
            }
            </div>
        </div>
    )
}

export default GenderCategory;