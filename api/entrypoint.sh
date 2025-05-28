#!/bin/sh

echo "Instalando dependências..."
npm install

echo "Aguardando o banco de dados iniciar..."
dockerize -wait tcp://db:3306 -timeout 40s

echo "Executando as migrations..."
npx sequelize-cli db:migrate

echo "Executando os seeds..."
npx sequelize-cli db:seed:all

echo "Iniciando a API..."
npm run dev
