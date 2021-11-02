import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from '../../../src/logo.png'
const useStyles = makeStyles({
  root: {

    backgroundColor:"transparent",
    color:"white",
  

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color:"white"
  },
  title: {
    fontSize: 20,
  
  },
  pos: {
    marginBottom: 12,
    color:"white",
    fontSize:"50px",
    fontWeight:"bold"
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} square={true}>
      <CardContent>
  
        <Typography >
         <img src={image} style={{width:"150px", height:"150px"}}></img>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
    Everything under  one <br/> roof
        </Typography>
        <Typography variant="body2" component="p">
          connecting builders,construction and housing industry in <br/> one single plane of glass
 
        </Typography>
      </CardContent>
      <CardActions>
        <a href="" size="large" style={{color:"white",fontWeight:"bold", }}>Build/Modify</a>
        <a href="" size="large" style={{color:"white",fontWeight:"bold",}}>Fix/Upgrade</a>
        <a href="" size="large" style={{color:"white",fontWeight:"bold",}}>Architect</a>
        <a href="" size="large"style={{color:"white",fontWeight:"bold",}} >Buy</a>
      </CardActions>
    </Card>
  );
}