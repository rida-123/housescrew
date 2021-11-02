import './forgetPass.css';
import img from '../../../src/Capture7.PNG'
import img1 from '../../../src/Capture8.PNG'
import ForgetPass from '../forget/forget';
export default function Forget(){
    return(
        <div className="back">
             <div className="contain" >
                <div className="row">
                    <div className="col-sm-6" style={{textAlign:"center",borderRight:"2px solid grey" }}>
                        <img src={img} ></img>
                        <br/>
                        <br/>
                        <br/>
                        <br/>  <br/>  <br/>
                        <img src={img1}></img>
                    </div>
                    <div className="col-sm-6" ><ForgetPass/></div>
                </div>
             </div>
        </div>

    )
}