import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/155350460/photo/the-desert-in-western-india.jpg?s=1024x1024&w=is&k=20&c=OEHv860gy0B0QBH1XN56yCk1-LB3xf9ZBpORu2Ickgk="
    
    let COLD_URL="https://images.unsplash.com/photo-1528191710846-99b8717a2830?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=2048x2048&w=is&k=20&c=5elyCWs3aC4y7DDlZu1HLkksbQbDAkCINao9imMHOdw=";


    return(
        <div className="InfoBox">
          
       <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80? RAIN_URL : info.temp>15? HOT_URL:COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
            info.humidity>80? <ThunderstormIcon/> : info.temp>15? <WbSunnyIcon/>:<AcUnitIcon/>

            }
          </Typography>
          <Typography variant="body2" color= "text.secondary" component={"span"} >
            <p>Temperature ={info.temp}&deg;C</p>
            <p>Humidity ={info.humidity}</p>
            <p>Min Temp={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
            <p>
                The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
            </p>
           
          </Typography>
        </CardContent>
       
      </Card>
      </div>
      </div>
    );
}