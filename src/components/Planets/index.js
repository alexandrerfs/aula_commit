import React, {Fragment,useState} from "react";
import Planet from "./Planet";
import "../shared/gray_img/style.css";






const Planets = ()=> {
        const [planets,setPlanets] = useState(

        )
const removeLast = ()=>{
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets)
}
    return(
        <Fragment>

               
                
       <h3>Planet List </h3>
       <button className="button-pref">Show Message</button>
       <hr />
       <Planet 
                 
               name="Mercúrio"
               descricao ="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando observado da Terra, tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo matutino ou vespertino."
               img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
               link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
               
               title_with_underline={true}
               
               
       />
<hr />
<Planet 
                 
                 name="Marte"
                 descricao ="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.[1]"

                
                 img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg"
                
                 gray={false}
                 title_with_underline={true}
                 
         />


        </Fragment>
       
        )
        
}

export default Planets