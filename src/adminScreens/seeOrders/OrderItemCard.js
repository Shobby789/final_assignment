import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function OrderItemCard() {
  return (
    <>
      <Card className="OrderCard" sx={{ maxWidth: 325, marginTop: "20px" }}>
        <CardMedia
          sx={{ height: 180 }}
          image="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success">
            Accept
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
