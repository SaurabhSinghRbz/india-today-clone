// footer --->
import { footer, expandFooter } from "../Components/footer.js";
document.getElementById("footerContainer").innerHTML = footer();
// expandFooter();
// console.log(expandFooter())
let hiderFalg = true;
let hiderDiv = document.getElementById("hider").addEventListener('click', function () {
    if (hiderFalg) {
        document.getElementById("footerBlock2").style.display = "none"
        document.getElementById("hiderImg").src = "../Images/footer/expand.png"
        hiderFalg = false;
    } else {
        document.getElementById("footerBlock2").style.display = "grid"
        document.getElementById("hiderImg").src = "../Images/footer/hide.png"
        hiderFalg = true
    }
})
//  footer ends----------------------------------------------------------------------