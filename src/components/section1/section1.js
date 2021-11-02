import image1 from '../../../src/Capture1.PNG';
export default function Section1(){

    return(
        <div className="container" style={{marginTop:"60px"}}>
            <div className="row">
                <div className="col-sm-6" style={{textAlign:"center"}}>
                    <img src={image1}></img>
                </div>
                <div className="col-sm-6">
               
                <h6 style={{color:"#506292",fontWeight:"bold" ,marginLeft:"20px"}}>FOR BUILDERS & TRADEMEN</h6>
             <hr style={{color:"#506292",height:"5px" ,marginLeft:"20px"}}></hr>
             <ul style={{lineHeight:"30px"}}>
                 <li>
                     Good jobs- whether you are a plumber or a converyser access the jobs  you want to do
                 </li>
                 <li>
                     Peace of mind- Reassurance of payment
                 </li>
                 <li>
                      Get notified on traning ot latest trends in your industry
                 </li>
                 <li>
                      Stand out from the crowd,let the profile do the talking
                 </li>
                 <li>
                     Equal share of job market- no big fish can captalize the market
                 </li>
                 <li>
                     Too busy - no problem, turn off your work availability
                 </li>


             </ul>
                </div>
            </div>
        </div>

    )
}