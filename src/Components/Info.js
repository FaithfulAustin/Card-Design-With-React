import img from "../pPics.png"
function Info(){
    return(
    <div className="infoSec">
        <div className="imgCon">
        <img src={img} alt = ""/>
        </div>
        
        <div className="nameInfo">
            <h2>Austin-Ilagha Faithful</h2>
            <h5 className="title">Frontend Developer</h5>
            <h6 className="mail">faithfulshine42@gmail.com</h6>
            <div className="btns">
            <button><i class="bi bi-envelope-fill"></i> Email</button>
            <button><i class="bi bi-linkedin"></i>Linkedin</button>
            </div>
        </div>
    </div>
    )
}

export default Info;