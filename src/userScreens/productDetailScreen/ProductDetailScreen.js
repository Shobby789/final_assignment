import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, CardActions, CardMedia, Typography } from "@mui/material";
import "./ProductDetailScreen.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: 20,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductDetailScreen() {
  const params = useParams();
  const [itemDetail, setItemDetail] = useState({
    itemName: "",
    itemDescription: "",
    itemPrice: 0,
    itemCategory: "",
    itemImage: "",
  });

  const dispatch = useDispatch();

  const getSingleItem = async () => {
    let response = await fetch(
      `http://localhost:8000/api/getItemDetail/${params.id}`,
      {
        method: "GET",
      }
    );
    response = await response.json();
    // console.log("response : ", response);
    setItemDetail(response.data);
  };

  useEffect(() => {
    getSingleItem();
  }, []);

  return (
    <div className="detail-page">
      <div className="imgBox">
        <CardMedia
          component="img"
          image={itemDetail.itemImage}
          alt="Paella dish"
          className="productImg"
        />
      </div>
      <div className="content">
        <Typography variant="h4" component="h4">
          {itemDetail.itemName}
        </Typography>
        <Typography variant="body2">{itemDetail.itemDescription}</Typography>
        <Typography>
          <StarRateIcon sx={{ color: "#FFD700" }} />
          <StarRateIcon sx={{ color: "#FFD700" }} />
          <StarRateIcon sx={{ color: "#FFD700" }} />
          <StarRateIcon sx={{ color: "#FFD700" }} />
          <StarOutlineIcon sx={{ color: "silver" }} />
        </Typography>
        <Typography>Rs. {itemDetail.itemPrice}</Typography>
        <CardActions>
          <Button
            variant="contained"
            size="medium"
            sx={{ background: "black" }}
            onClick={() =>
              dispatch(
                addToCart(
                  itemDetail._id,
                  itemDetail.itemName,
                  itemDetail.itemImage,
                  itemDetail.itemPrice,
                  itemDetail.itemDescription
                )
              )
            }
          >
            Add To Cart
          </Button>
        </CardActions>
      </div>
    </div>
  );
}
