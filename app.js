// Récupération des éléments dans la page html
const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");

const allSections = document.querySelector(".main-content");

// Fonction de transition des pages quand on clique su les boutons.
function pageTransition(){
    // Button click active class
    for(let i = 0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');

            // replace active with empty in the class name
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections active class
    allSections.addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectionButtons.forEach((btn) => {
                btn.classList.remove('active');

            })
            // show the selected section
            e.target.classList.add('active');
            
            //hide the other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
        console.log(e.target);
    })
    
   
}
pageTransition();