# language: pt

Funcionalidade: Login - Cenário de falha

Cenário: Usuário tenta fazer login com email ou senha incorretos
Dado que o usuário está na página de login
Quando ele preenche o email com "invalido@email.com"
E preenche a senha com "senhaerrada"
E clica no botão de login
Então ele deve ver a mensagem de erro "Erro: Email ou senha inválidos."
