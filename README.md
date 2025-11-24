# Atlas do Fisiculturismo

O Atlas do Fisiculturismo é uma aplicação web interativa, no estilo *single-page application*, projetada para ser uma enciclopédia sobre o mundo do fisiculturismo. Usuários podem explorar, pesquisar e filtrar informações sobre atletas de diversas categorias, além de descobrir detalhes sobre exercícios fundamentais.

## ✨ Funcionalidades

- **Busca Dinâmica**: Pesquise em tempo real por atletas, categorias ou exercícios.
- **Filtragem por Categoria**: Navegue facilmente por categorias como Open, Classic Physique, Bikini, Wellness, Natural e Exercícios.
- **Filtro Especial por Tag**: Um filtro exclusivo para destacar os atletas do Brasil.
- **Temas Dinâmicos**: A interface muda de cor de acordo com a categoria selecionada, proporcionando uma experiência visual única para cada seção.
- **Tema Personalizado "Brasil"**: Ao filtrar por atletas brasileiros, a aplicação adota as cores da bandeira nacional e exibe uma imagem de fundo sutil.
- **Carregamento de Dados Externo**: Todas as informações são carregadas a partir de um arquivo `data.json`, facilitando a adição e manutenção de novos atletas e exercícios.
- **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em desktops quanto em dispositivos móveis.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as tecnologias fundamentais da web, seguindo boas práticas de desenvolvimento:

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para toda a estilização, incluindo o uso de Variáveis CSS para o sistema de temas dinâmicos e Flexbox para o layout.
- **JavaScript (ES6+)**: Responsável por toda a interatividade, incluindo:
  - Manipulação do DOM.
  - Consumo de dados locais com `fetch` e `async/await`.
  - Lógica de busca e filtragem.
  - Gerenciamento de eventos.

## 📂 Estrutura do Projeto

```
atlas-do-fisiculturismo/
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
├── 📄 data.json
└── 📄 README.md
```

- **`index.html`**: Contém a estrutura principal da página, incluindo a área de busca, os botões de filtro e o container onde os cards são exibidos.
- **`style.css`**: Define a aparência de todos os elementos, os temas de cores, o estilo dos cards e a imagem de fundo especial para o tema "Brasil".
- **`script.js`**: O cérebro da aplicação. Ele carrega os dados do `data.json`, renderiza os cards, e gerencia toda a lógica por trás dos filtros e da busca.
- **`data.json`**: O "banco de dados" do projeto. É um arquivo JSON que armazena um array de objetos, onde cada objeto representa um atleta ou um exercício.

## 🔧 Como Contribuir ou Modificar

### Adicionando um Novo Atleta/Exercício

1. Abra o arquivo `data.json`.
2. Adicione um novo objeto JSON ao array principal, seguindo a estrutura existente:
   ```json
   {
     "nome": "Nome do Atleta/Exercício",
     "descricao": "Uma breve descrição.",
     "categoria": "Categoria (ex: Open, Wellness, Exercício)",
     "data_criacao": "Informação adicional (ex: período de atividade, grupo muscular)",
     "link": "https://link-para-mais-informacoes.com",
     "tags": ["tag1", "tag2", "Brasil"]
   }
   ```
   > **Nota**: Para que um atleta apareça no filtro "Brasil", certifique-se de adicionar a tag `"Brasil"` na lista de tags.

### Adicionando uma Nova Categoria

1. **Adicione o botão de filtro** no `index.html` dentro da `div#filtros-categoria`.
2. **Crie o tema de cores** para a nova categoria no objeto `temas` dentro da função `aplicarTema()` em `script.js`.
3. Comece a adicionar itens com a nova categoria no `data.json`.

---
© 2025 - Atlas do Fisiculturismo