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