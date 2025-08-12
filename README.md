Este projeto é uma API RESTful desenvolvida em Node.js utilizando o framework Fastify e banco de dados PostgreSQL hospedado no Neon e com Deploy no Render. O objetivo é fornecer um CRUD simples para gerenciamento de vídeos, servindo como base para estudos e aplicações reais.

Funcionalidades
Cadastro de vídeos (POST /videos)
Listagem de vídeos com busca por título (GET /videos?search=texto)
Atualização de vídeos (PUT /videos/:id)
Remoção de vídeos (DELETE /videos/:id)



Tecnologias
Node.js
Fastify
PostgreSQL (Neon)
JavaScript ES Modules
Variáveis de ambiente com dotenv
Render(Deploy)




Estrutura
server.js: inicialização do servidor e rotas
database-postgres.js: integração com o banco de dados
db.js: configuração da conexão com o banco
create-table.js: script para criação da tabela no banco



Caminho do render sendo utilizado para teste do Deploy, podendo ser alterado por localhost para testes locais



