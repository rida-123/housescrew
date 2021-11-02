import image from '../../../src/Capture4.PNG'

import IconLabelButtons from '../button/button'
export default function Main(){
    return(
        <div className="container-fluid" style={{marginTop:"10px"}}>
            <div className="row">
                <div className="col-sm-6" style={{textAlign:"center"}} >
                    <img src={image} style={{width:"180px", height:"80px"}}></img>
                </div>
                <div className="col-sm-6"  style={{textAlign:"center"}} >
                  <IconLabelButtons/>
                </div>

            </div>
        </div>
    )
}