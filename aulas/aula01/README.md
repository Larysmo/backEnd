# Comandos básicos do GIT

1. Clonar um repositório

```shell
git clone url_repositorio
```

2. Configurar nome e email
```shell
git config --local user.name 'username'
git config --local user.email 'user@email'
```

3. Verificar staus git

```shell
git status
```

4. Adicionar ao versionamento
```shell
git add nome_do_arquivo
git add . // para adicionar todas as alterações
```

5. Fazer commit
```shell
git commit -m 'Comentario'
```

6. Enviar alterações para o gitHub
```shell
git push origin nome_da_branch
```

7. Trocar de uma branch pra outra
```shell
git checkout nome_da_branch_de_destino
```

8. Enviar alterações de uma branch pra outra
```shell
git checkout nome_da_branch_a_incluir_a_alteração
git merge nome_da_branch_com_alteração
```

9. Criar api direto da pasta raiz (express)
```shell
npx express-generator --no-view <pasta>
cd <pasta>
npm install
npm install mongoose dotenv
npm install --save-dev nodemon
"dev": "nodemon ./bin/www" # incluir na sessão scripts do package.json
```

10. Criptografar token
```shell
npm install jsonwebtoken # criptografar token
```