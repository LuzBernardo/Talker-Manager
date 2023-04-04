<h1>Blogs API</h1>
<p>Este projeto é um exercício prático para aplicar conhecimentos em Node.js, Docker, SQL, Express.js, APIs RESTful, JWT(autenticação de usuários), focado no gerenciamento de uma base de dados para cadastro de talkers (palestrantes). A aplicação permite cadastrar, visualizar, pesquisar, editar e excluir informações (CRUD).</p>
<h2>Funcionalidades</h2>
<p>A aplicação conta com as seguintes funcionalidades:</p>
<ul>
  <li>Gestão de palestrantes: cadastro, login, visualização, edição e exclusão de palestrantes.<li>
</ul>
<h2>API</h2>
<p>A API para o CRUD de palestrantes conta com os seguintes endpoints:</p>
<ul>
<li>
  GET /talker - retorna uma lista com todas as pessoas palestrantes cadastradas.
</li>
<li>
  GET /talker/:id - retorna as informações de uma pessoa palestrante específica, identificada pelo seu ID.
</li>
<li>
  POST /login - realiza o login do usuário e retorna um token de acesso aleatório com 16 caracteres.
</li>
<li>
  POST /talker - cria uma nova pessoa palestrante.
</li>
<li>
  PUT /talker/:id - atualiza as informações de uma pessoa palestrante específica, identificada pelo seu ID.
</li>
<li>
  DELETE /talker/:id - exclui uma pessoa palestrante específica, identificada pelo seu ID.
</li>
<li>
  GET /talker/search?q=:searchTerm - pesquisa pessoas palestrantes por termos e retorna os resultados.
</li>
</ul>
<h2>Como executar o projeto</h2>
<p>Para executar o projeto, siga os seguintes passos:</p>
<ol>
<li>
  Clone o repositório para sua máquina local.
</li>
<li>
  Instale as dependências do projeto utilizando o comando npm install.
</li>
<li>
  Execute o comando npm start para iniciar a aplicação.
</li>
<li>
  Utilize as rotas da API para realizar as operações desejadas.
</li>
</ol>
<h2>Considerações finais</h2>
<p>Este projeto é um exemplo prático e didático, desenvolvido para explorar e consolidar habilidades em Node.js, Docker, SQL, JWT (autenticação de usuários), Express.js, Sequelize, APIs RESTful e gerenciamento de uma base de dados de palestrantes. Convido você a usar este projeto como referência, inspiração ou ponto de partida para o desenvolvimento de suas próprias aplicações. Estou aberto a dúvidas, sugestões ou feedbacks; não hesite em entrar em contato comigo.</p>
