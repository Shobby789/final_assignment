import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import pizzaImg from "../../images/burger-png-removebg-preview.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";

export default function ProductCard({
  _id,
  itemName,
  itemImage,
  itemPrice,
  itemDescription,
  itemCategory,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          backgroundColor: "transparent",
          marginTop: "20px",
        }}
        elevation={0}
        key={_id}
        id={_id}
        // onClick={() => navigate(`/Home/ProductDetails/${_id}`)}
      >
        <CardMedia
          component="img"
          height="200"
          image={itemImage}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDescription}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Rs. {itemPrice}
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              margin: "auto",
              background: "black",
              ":hover": { background: "black" },
            }}
            onClick={() =>
              dispatch(
                addToCart({
                  _id,
                  itemName,
                  itemImage,
                  itemPrice,
                  itemDescription,
                })
              )
            }
          >
            Add To Cart
          </Button>
          {/* <Button
            variant="contained"
            size="small"
            sx={{
              margin: "auto",
              background: "black",
              ":hover": { background: "black" },
            }}
          >
            See Details
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
}
