# language: pt
Funcionalidade: Exclusão de doador

Como administrador do sistema
Quero fazer login na plataforma
Para excluir um doador específico e validar a exclusão

Cenário: Excluir doador João Silva com sucesso
Dado que estou na página de login
Quando eu preencho o email com "Adm@igrejaanglicanacomunhao.com"
E preencho a senha com "Wx8~)82+O!ZjkA?"
E clico no botão de login
Então devo ser redirecionado para a página de administração

Quando eu procuro pelo doador "João Silva" na lista
E clico no botão de excluir doador
Então devo ver a mensagem "Doação excluída com sucesso!"
