let labels = document.querySelectorAll('input');
let f0 = document.querySelectorAll('.tudo');
let f1 = document.querySelectorAll('.festas');
let f2 = document.querySelectorAll('.pascoa');

for (let a=0; a < labels.length; a++) {
    labels[a].addEventListener("click", function(){

        if (labels[a].className == "tudo"){
            console.log('filtro: (tudo) clicado!');

        } else if (labels[a].className == "festas") {
            console.log('filtro: (festas) clicado!');

        } else if (labels[a].className == "pascoa") {
            console.log('filtro: (páscoa) clicado!');

        }
    })
}


/* FORMA ALURA

<div>
    <input class="js-filter">
    <ul>
        <li class="js-target">A</li>
        <li class="js-target">B</li>
        <li class="js-target">C</li>
        <li class="js-target">D</li>
        <li class="js-target">E</li>
    </ul>
</div>

.is-hide {
    display: none;
}

const filter = document.querySelector('.js-filter')
const targets = document.querySelectorAll('.js-target')
if (filter) {
	filter.addEventListener('keyup', event => {
    	const value = event.target.value
        if (value.trim().length) {	
        	const regex = new RegExp(`^(${value})$`, 'gi')
        	targets.forEach(target => {
	            const targetValue = target.textContent
                if (regex.test(targetValue)) {
                	target.classList.add('is-hide')
                } else {
	                target.classList.remove('is-hide')
                }
            })
        } else {
        	targets.forEach(target => target.classList.remove('is-hide'))
        }
    })
}

*/



/* Achado no codepen

class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}

const app = new Vue ({
  el: '#app',
  data: {
    search: '',
    postList : [
      new Post(
        'Vue.js', 
        'https://vuejs.org/', 
        'Chris', 
        'https://vuejs.org//images/logo.png'
      ),
      new Post(
        'React.js', 
        'https://facebook.github.io/react/', 
        'Tim',
        'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
      ),
      new Post(
        'Angular.js', 
        'https://angularjs.org/', 
        'Sam', 
        'https://angularjs.org/img/ng-logo.png'
      ),
      new Post(
        'Ember.js', 
        'http://emberjs.com/', 
        'Rachel',
        'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
      ),
      new Post(
        'Meteor.js', 
        'https://www.meteor.com/', 
        'Chris', 
        'http://hacktivist.in/introduction-to-nodejs-mongodb-meteor/img/meteor.png'
      ),
      new Post(
        'Aurelia', 
        'http://aurelia.io/', 
        'Tim',
        'https://cdn.auth0.com/blog/aurelia-logo.png'
      ),
      new Post(
        'Node.js', 
        'https://nodejs.org/en/', 
        'A. A. Ron',
        'https://code-maven.com/img/node.png'
      ),
      new Post(
        'Pusher', 
        'https://pusher.com/', 
        'Alex', 
        'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'
      ),
      new Post(
        'Feathers.js', 
        'http://feathersjs.com/', 
        'Chuck',
        'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
      ),
]
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})

*/








/* FORMA RESERVA

var btns = document.querySelectorAll(".filter-btn");

for (btn of btns){
    adEvent(btn.id);
}

function adEvent(btn){
    let botao = document.getElementById(bt)

    botao.addEventListener("click", function filtrar(){
        //alterar botão ativo
        for (elemento of btns){
            elemento.className = "main-btn filter-btn";
        }
        botao.className = "main-btn filter-btn active";

        //filtragem
        let todosElem = document.querySelectorAll(".project-box")

        let tipo = bt.substr(0, 3);
        for (imgs of todosElem){
            if (tipo == "all"){
                imgs.removeAttribute("hidden");
            }
            else{
                imgs.removeAttribute("hidden");
                if (imgs.className != ("col-md-4 project-box" + tipo)){
                    let att = document.createAttribute("hidden");
                    imgs.setAttributeNode(att);
                }
            }
        }
    })
}

*/