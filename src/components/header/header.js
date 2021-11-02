import './header.css';
import background from '../../../src/building.jpg'
import SimpleCard from '../card/card';
import SignIn from '../signIn/signIn';

export default function Header(){

  return(
<div className="container-fluid" style={{ backgroundImage: `url(${background})`,padding:"30px" ,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} >
  <div className="row">
    <div className="col-sm-6" style={{marginTop:"120px",borderRadius:"30px"}}><SimpleCard/></div>
    <div className="col-sm-1"></div>

    
    <div className="col-sm-4" style={{backgroundColor:"white",marginTop:"80px",borderRadius:"30px"}}><SignIn/></div>

  </div>
</div>
  )
}