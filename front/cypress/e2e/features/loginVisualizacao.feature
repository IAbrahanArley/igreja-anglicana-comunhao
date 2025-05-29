# language: pt
Funcionalidade: Acesso administrativo e visualização de doações

Contexto:
Dado que eu tenho credenciais válidas de administrador

Cenário: Fazer login e ver a última doação cadastrada
Dado que eu estou na página de login
Quando preencho o campo "E-Mail" com "Adm@igrejaanglicanacomunhao.com"
E preencho o campo "Senha" com "Wx8~)82+O!ZjkA?"
E clico no botão de login
Então devo ser redirecionado para a página administrativa
E devo ver na tabela a última doação com nome "João Silva"
