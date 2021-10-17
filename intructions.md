#yarn init -y (cria o package json da nossa aplicaçao)
-y = sem ele vc poe as info manualmente

instalando dependencias
1)typescript
#yarn add typescript -D
-D = dependencia de desenvolvimento, so enquanto desenvolve
2)inicializando typescript
#yarn tsc --init
(desabilitar strict)

3)convertendo codigo
#yarn tsc

4)iniciando API com framework EXPRESS
#yarn add express

5)"..." antes de qualquer biblioteca significa que dentro tem as tipagens
so que nao esta ali dentro, algumas tem como padrao tem como padrao
criar uma outra para utilizar, quando tem "...", precisa instalar
tipagem

#yarn add @types/express -D

6. rodando servidor ==> #yarn tsc (convertendo para js)
   #node src/server.js

   7. para nao ficar dando yarn tsc toda hora para gerar js
      #yarn add ts-node-dev -D
      biblioteca responçavel pra pegar o typescript e o node rodar
      para deixar ele no seu server crie um script
      depois de license ==> "scripts": {
      "dev":"ts-node-dev src/server.ts"
      },
      para automatizar todas mudanças
      agora use
      #yarn dev
      ou
      #npm run dev
      (servidor roda e tudo que mudar muda automatico)

   8) app.get() --> metodo disponivel dentro do http para abrir rota
      app.GET,POST,PUT,DELETE,PATCH...
      GET -> Buscar uma informação(busca dentro da API)
      POST -> Inserir uma informaçao dentro da nossa API (toda criaçao de informação)
      PUT -> Alterar uma informaçaão
      DELETE -> Remover uma informação, dado...
      PATCH -> Alterar uma informação especifica

      9.dowload insomnia for windows to use REST
      para testar rotas, criar rotas GET, POST
      configurar o "No Environment" para :
      {
      "baseURL": "http://localhost:3000"
      }
      na url digita base e aperta "ctrl+espaço" e selecione "BaseURL"
      (x) Done!
      agora na frente do baseURL digitar rota, ex: test-post
