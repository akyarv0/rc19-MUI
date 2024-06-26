import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../data";
import { Container, Grid } from "@mui/material";

export default function CardComp() {
  return (
    <Container align="center">
    <Typography variant="h4"> Card and Grid</Typography>
    <Grid container spacing={2} > {data.map((item) => <Grid item xs={12} sm={6} md={4}><Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      image={item.img}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
     {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {item.text}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card></Grid>)} </Grid>
      
    </Container>
  );
}
