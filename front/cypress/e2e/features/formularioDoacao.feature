# language: pt
Funcionalidade: Formulário de Doações

Cenário: Enviar formulário com todos os campos preenchidos corretamente
Dado que estou na página de doações
Quando preencho o campo "Seu nome" com "João Silva"
E preencho o campo "Telefone" com "83999999999"
E preencho o campo "Email" com "joao@exemplo.com"
E preencho o campo "Valor da doação" com "100"
E seleciono o projeto "Projeto Compaixão"
E marco a opção de aceitar os termos
E clico no botão de enviar
Então o formulário deve ser enviado com sucesso
