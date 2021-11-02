import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import './footer.css'
export default function Footer() {
    return (
        <AppBar position="static" style={{backgroundColor:"#506292"}}>
          <Container maxWidth="md" >
            <Toolbar>
              <Typography variant="body1" color="inherit" >
              Copyright  &copy; HouseScrew 2021,All Right reserved
              </Typography>
              
            
            
            </Toolbar>
          </Container>
        </AppBar>
    )
}