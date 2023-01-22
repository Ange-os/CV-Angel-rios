/* window.onscroll quiere decir cuando nos desplazamos en la pagina o ventana*/
window.onscroll = function() {CargarSkills()}; 
/* la funcion cargarskills primero carga el elemento con el id "skills"
cunado hacemos esta resta en la creacion de la variable "ocupacionDeSkills" "window.innerHeight - skills.getBoundingClientRect().top" es para 
saber cuanto del elemento esta apaciendo en pantalla
entonces validamos en la condicional que si se asoma mas o 200px
a el elemento id "html" por ejemplo le agregro una class"carga-html" en este caso
se carga la clase donde tengo la animacion de las barras */
function CargarSkills(){
    var skills = document.getElementById("skills");
    var ocupacionDeSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if (ocupacionDeSkills >= 200) {
        document.getElementById("html").classList.add("carga-html");
        document.getElementById("javascript").classList.add("carga-javascript");
        document.getElementById("python").classList.add("carga-python");
    }
}
