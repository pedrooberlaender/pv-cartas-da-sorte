# Cartas da Sorte

Site de vendas para estratégias de cartas.

## Requisitos

- Node.js 14.x ou superior
- npm ou yarn

## Como instalar

1. Clone o repositório:
```bash
git clone [seu-repositorio]
cd project-bolt-sb1
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Desenvolvimento

Para rodar o projeto em desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## Deploy no GitHub Pages

1. Primeiro, atualize o arquivo `package.json`:
   - Mude o campo "homepage" para seu usuário GitHub:
   ```json
   "homepage": "https://[seu-usuario].github.io/project-bolt-sb1"
   ```

2. Faça o build e deploy:
```bash
# Instale as dependências se ainda não instalou
npm install

# Faça o build do projeto
npm run build

# Deploy para GitHub Pages
npm run deploy
```

3. Configure o GitHub Pages:
   - Vá para Settings > Pages no seu repositório
   - Em "Source", selecione a branch `gh-pages`
   - Clique em "Save"

4. Seu site estará disponível em alguns minutos em:
   `https://[seu-usuario].github.io/project-bolt-sb1`

## Estrutura do Projeto

- `/app` - Páginas e componentes principais
- `/public` - Arquivos estáticos (imagens)
- `/app/globals.css` - Estilos globais

## Observações Importantes

- Após fazer o deploy, pode levar alguns minutos para as alterações aparecerem
- Certifique-se de que todas as imagens estão na pasta `/public`
- Os caminhos das imagens devem começar com `/project-bolt-sb1/`
