import { Box } from "@mui/material";
import OrderItemCard from "./OrderItemCard";

export default function Orders() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
      </Box>
    </>
  );
}
