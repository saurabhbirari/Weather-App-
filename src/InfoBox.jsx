import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
function InfoBox({ info }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?b=1&s=170667a&w=0&k=20&c=7RWthXdjxMP_FkL17FlbLsjnqfJcSUkR7NJjD0d2AGE=";
  const COLD_URL =
    "https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.webp?b=1&s=170667a&w=0&k=20&c=vLS2YVKy59etAc4kn4wu_6rFsBdxyIhbH92R_WO4m3I=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

  return (
    <div className="InfoBox">
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 75
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature:-{info.temp}&deg;c</div>
              <div>Humidity:-{info.humidity}</div>
              <div>Min Temp:-{info.tempMin}&deg;c</div>
              <div>Max Temp:-{info.tempMax}&deg;c</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                like:-{info.feelslike}&deg;c
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
