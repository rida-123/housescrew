import image1 from '../../../src/Capture3.PNG';
export default function Section3(){

    return(
        <div className="container" style={{marginTop:"60px"}}>
            <div className="row">
                <div className="col-sm-6" style={{textAlign:"center"}}>
                    <img src={image1}></img>
                </div>
                <div className="col-sm-6">
               
                <h6 style={{color:"#506292",fontWeight:"bold" ,marginLeft:"20px"}}>FOR COMPANIES</h6>
             <hr style={{color:"#506292",height:"5px" ,marginLeft:"20px"}}></hr>
             <ul style={{lineHeight:"30px"}}>
                 <li>
                     Whether you are a interior designer,or a converyancer,o a construction company, advertise your company
                 </li>
                 <li>
Hire great people
                 </li>
                 

             </ul>
                </div>
            </div>
        </div>

    )
}