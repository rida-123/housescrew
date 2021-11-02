import './signup.css';
import img from '../../../src/Capture7.PNG'
import img1 from '../../../src/Capture8.PNG'
import Sign from '../sign/sign';
export default function SignUp(){
    return(
        <div className="back1">
             <div className="contain1" >
                <div className="row">
                    <div className="col-sm-6" style={{textAlign:"center",borderRight:"2px solid grey" }}>
                        <img src={img} ></img>
                        <br/>
                        <br/>
                        <br/>
                        <br/>  <br/>  <br/>
                        <img src={img1}></img>
                    </div>
                    <div className="col-sm-6" ><Sign/></div>
                </div>
             </div>
        </div>

    )
}