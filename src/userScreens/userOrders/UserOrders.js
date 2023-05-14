import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pizzaImg from "../../images/ivan-torres-MQUqbmszGGM-unsplash.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function UserOrders() {
  const [ordersData, setOrdersData] = useState([]);
  let email = window.localStorage.getItem("userEmail");
  useEffect(() => {
    fetch("http://localhost:8000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("order data: ", data.orderData.order_data[0]);
        setOrdersData(data.orderData.order_data[0]);
      });
  }, []);

  // console.log("outsider orderData: ", typeof orderData);

  return (
    <>
      <>
        <Navbar />
      </>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {ordersData &&
          ordersData.map((ordered_item) => {
            return (
              <Card
                key={ordered_item._id}
                id={ordered_item._id}
                sx={{
                  minWidth: 500,
                  maxWidth: 700,
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  sx={{ width: 200, height: 200 }}
                  image={ordered_item.itemImage}
                  title="itemImage"
                />

                <CardContent>
                  <Typography>{ordered_item.itemName}</Typography>
                </CardContent>
                <CardContent>
                  <Typography>{ordered_item.itemPrice}</Typography>
                </CardContent>
              </Card>
            );
          })}
        {/* order card */}
        {/* <Card sx={{ maxWidth: 345 }} elevation={0}>
        <CardMedia sx={{ height: 170 }} image={pizzaImg} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Date: 12/05/2023
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Price: 300
          </Typography>
        </CardContent>
      </Card> */}
      </div>
    </>
  );
}

{
  /* <Card sx={{ maxWidth: 345 }} elevation={0}>
  <CardMedia sx={{ height: 170 }} image={pizzaImg} title="green iguana" />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Lizard
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </Typography>
    <Typography variant="body2" color="text.secondary" mt={1}>
      Date: 12/05/2023
    </Typography>
    <Typography variant="body2" color="text.secondary" mt={1}>
      Price: 300
    </Typography>
  </CardContent>
</Card>; */
}
