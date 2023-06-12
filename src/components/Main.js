
import pic from "../images/ricky.jpeg"
import git from "../images/github-mark.png"
import linked from "../images/linkedin.png"
import '../index.css';
//import {motion} from 'framer-motion'
export default function Main(){
    return (
        <div className="main">
            <div className="my-div">
                <h3 className="main-text">What's Up!</h3>
                <h1 className="main-text3">I'm Ricky Raup.</h1>
                <a target="_blank" rel="noopener noreferrer" href="/about">
                    <img src={pic} className="main-pic" alt=""></img>
                </a>
                
                

    
                <h2 className="main-text2">Comp Sci @UPenn</h2>
                <h4 className="main-text2">+ AI + Engineering Entrepreneurship + Math</h4>
                <h5 className="main-text2">Interested in Consulting, SWE, and VC.</h5>
                <div className="links-div">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rickyraup">
                        <img  src={git} className="icons" alt="">  
                        </img>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ricky-raup">
                        <img  src={linked} className="icons" alt=""/>  
                    </a>
                  
                    
                </div>
                <div>
                    <h5 className="main-text4">© Ricky Raup 2023</h5>
                </div>

            </div>
        </div>
    )
}