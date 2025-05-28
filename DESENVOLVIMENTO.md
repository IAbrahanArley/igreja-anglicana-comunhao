---
## Este arquivo descreve o processo de desenvolvimento:

##  Planejamento do Projeto

O objetivo foi desenvolver uma aplicação web full stack dockerizada com backend, frontend e banco de dados se comunicando via containers Docker, conforme as boas práticas de conteinerização.
---

## Metodologia Ágil

Adotei a metodologia **Scrum** com sprint curta e foco em entregas incrementais.

- **Quantidade de Sprints**: 1 sprints
- **Duração das Sprints**: 1 semana
- **Ferramenta de Gestão**: GitHub Organizations

---

## Ferramentas Utilizadas

- **Desenvolvimento**:
  - Node.js, Express
  - HTML, CSS, JS
  - Sequelize ORM
  - MariaDB
- **DevOps**:
  - Docker
  - Docker Compose
  - NGINX
- **Organização e Gestão**:
  - GitHub Organizations
  - GitHub

---

## Processo de Desenvolvimento

1. **Setup Inicial**

   - Definição da estrutura do projeto.
   - Criação dos arquivos Dockerfile e docker-compose.yml.

2. **Implementação Backend**

   - Configuração do Express, rotas e banco com Sequelize.
   - Migrations, Seeds e conexão com o MariaDB via container.

3. **Implementação Frontend**

   - Frontend estático servido com NGINX.
   - Testes locais da interface.

4. **Integração Docker**
   - Criação da rede personalizada.
   - Comunicação entre os serviços.

---

## Desafios e Soluções

### Erro de acesso ao banco de dados

- **Problema**: Access denied for user `user`@`%` to database `db`.
- **Solução**: Corrigido o nome do banco no `.env` e no `docker-compose.yml` para `doador`.

### Comunicação entre containers

- **Problema**: API não se conectava ao banco.
- **Solução**: Utilizamos o nome do serviço (`db`) como host de conexão via Docker Network.

---

## Resultados

- Aplicação sobe com um único comando `docker-compose up`.
- Containers se comunicam corretamente.
- Pronto para execução em qualquer ambiente com Docker instalado.

---

## Conclusão

Este projeto demonstrou habilidades em conteinerização, orquestração com Docker Compose, estruturação de aplicações full stack e documentação clara de processos.
