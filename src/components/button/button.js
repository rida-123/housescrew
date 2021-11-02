import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    
   
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
    
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        
          
      >
       <Link to="/signup" style={{color:"white",textDecoration:"none"}}>Sign Up</Link>
      </Button>
      
    </div>
  );
}