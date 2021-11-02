import image1 from '../../../src/Capture2.PNG';
export default function Section2(){

    return(
        <div className="container" style={{marginTop:"60px"}}>
            <div className="row">
              
                <div className="col-sm-6">
               
                <h6 style={{color:"#506292",fontWeight:"bold" ,marginLeft:"20px"}}>HOME IMPROVEMENTS</h6>
             <hr style={{color:"#506292",height:"5px" ,marginLeft:"20px"}}></hr>
             <ul style={{lineHeight:"30px"}}>
                 <li>
                    Safe guards work done on your property.
                 </li>
                 <li>
                    Let trades people find you &  the jobs you want doing
                 </li>
                 <li>
              safe guard work done on your house
                 </li>
              


             </ul>
                </div>
                <div className="col-sm-6" style={{textAlign:"center"}}>
                    <img src={image1}></img>
                </div>
            </div>
        </div>

    )
}