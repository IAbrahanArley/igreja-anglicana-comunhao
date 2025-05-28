# Projeto Full Stack Dockerizado

## Descrição

Este projeto é um Fork de uma aplicação web full stack desenvolvida por uma equipe no segundo periodo de SPI. O intuito do Fork é dockerizar o sistema e aplicar testes com cypress.

- **Backend**: Node.js com Express e Sequelize.
- **Frontend**: HTML/JS/CSS servido via NGINX.
- **Banco de Dados**: MariaDB.

Todos os serviços rodam em containers separados e se comunicam via Docker Compose.

---

## Como executar o projeto

### 1. Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 2. Clone o repositório

```bash
git clone git@github.com:IAbrahanArley/igreja-anglicana-comunhao.git
cd igreja-anglicana-comunhao
```

### 3. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
DB_USER=user
DB_PASSWORD=123456
DB_NAME=doador
DB_PORT=3307
DB_HOST=db
```

### 4. Suba os containers

```bash
docker-compose up --build
```

#### A aplicação estará disponível em:

- Frontend: http://localhost:8080

- Backend (API): http://localhost:3001

- Banco de dados: localhost na porta 3307

## Estrutura do Projeto

- /api → Código fonte do backend + Dockerfile
- /front → Arquivos do frontend estático
- docker-compose.yml
- .env
- README.md
- DESENVOLVIMENTO.md

## Tecnologias Utilizadas

- Node.js + Express

- Sequelize ORM

- MariaDB

- NGINX

- Docker / Docker Compose
