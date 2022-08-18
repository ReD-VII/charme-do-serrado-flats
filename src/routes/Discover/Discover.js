
import ImgBackground from "../img/recorte.png"
import BackgroundImage from "./indexCSS"
export default function Discover(){

    return(
        <BackgroundImage>
            <div>
                <img src={ImgBackground} alt="Background" />
            </div>
        </BackgroundImage>
    )
}