document.addEventListener('DOMContentLoaded', () => {
 const carte = document.querySelector(".card-container");
 const inputBusca = document.querySelector("#input-busca");
 const btnBuscar = document.querySelector("#btn-buscar");
 const filtrosContainer = document.querySelector("#filtros-categoria");
 let dados = [];
 let filtroAtivo = null;

 async function carregarDados() {
 try {
 const response = await fetch('data.json');
 if (!response.ok) {
 throw new Error('Erro ao carregar os dados: ' + response.statusText);
 }
 dados = await response.json();
 renderizarCard(dados);
 } catch (error) {
 console.error(error);
 carte.innerHTML = "<p>Não foi possível carregar os dados. Tente novamente mais tarde.</p>";
 }
 }

 function limparFiltros() {
 document.body.classList.remove('brasil-bg');
 inputBusca.value = '';
 renderizarCard(dados);
 document.querySelectorAll('#filtros-categoria button').forEach(b => b.classList.remove('active'));
 filtroAtivo = null;
 }

function aplicarTema(categoria) {
const root = document.documentElement;


const temas = {
"Open": {
primary: "#ff1744",
accent: "#ff5252",
bg: "#0d0d0d"
},
"Classic Physique": {
primary: "#d4af37",
accent: "#f7d774",
bg: "#1a1a1a"
},
"Exercício": {
primary: "#2196f3",
accent: "#64b5f6",
bg: "#0d151a"
},
"Natural": {
primary: "#4caf50",
accent: "#81c784",
bg: "#0f1a0f"
},
"Bikini": {
primary: "#e91e63",
accent: "#f06292",
bg: "#1a0f14"
},
"Wellness": {
primary: "#9c27b0",
accent: "#ce93d8",
bg: "#140d17"
},
"Brasil": {
primary: "#ffdf00", 
accent: "#fff", 
bg: "#002776"
}
};


if (temas[categoria]) {
root.style.setProperty('--primary-color', temas[categoria].primary);
root.style.setProperty('--accent-color', temas[categoria].accent);
root.style.setProperty('--bg-color', temas[categoria].bg);

 // Adiciona ou remove a classe de fundo da bandeira
 if (categoria === 'Brasil') {
 document.body.classList.add('brasil-bg');
 } else {
 document.body.classList.remove('brasil-bg');
 }
}
}

function renderizarCard(lista) {
 if (!carte) return;
carte.innerHTML = '';


lista.forEach(item => {
 const card = document.createElement('div');
card.classList.add('card');


card.innerHTML = `
<h2>${item.nome}</h2>
<p>${item.descricao}</p>
<p><strong>Categoria:</strong> ${item.categoria}</p>
<a href="${item.link}" target="_blank">Ver Mais</a>
`;


carte.appendChild(card);
});
}

 function buscarEventos() {
 const termoBusca = inputBusca.value.toLowerCase();
 const resultado = dados.filter(item =>
 item.nome.toLowerCase().includes(termoBusca) ||
 item.descricao.toLowerCase().includes(termoBusca) ||
 item.categoria.toLowerCase().includes(termoBusca)
 );
 document.querySelectorAll('#filtros-categoria button').forEach(b => b.classList.remove('active'));
 renderizarCard(resultado);
}

 function gerenciarFiltros(event) {
 const target = event.target;
 if (target.tagName !== 'BUTTON') return;

 if (target.id === 'btn-limpar') {
 limparFiltros();
 return;
 }

 const filtro = target.dataset.filter;
 const tag = target.dataset.tag;

 document.querySelectorAll('#filtros-categoria button').forEach(b => b.classList.remove('active'));
 target.classList.add('active');
 filtroAtivo = target;

 let resultado;
 if (filtro) {
 aplicarTema(filtro);
 resultado = dados.filter(item => item.categoria === filtro);
 } else if (tag) {
 aplicarTema(tag);
 resultado = dados.filter(item => item.tags.includes(tag));
 }
 renderizarCard(resultado);
 }

 btnBuscar.addEventListener('click', buscarEventos);
 filtrosContainer.addEventListener('click', gerenciarFiltros);

 carregarDados();
});