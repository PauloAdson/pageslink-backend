# 📦 Backend - PagesLink (Strapi)

Este é o repositório do **backend** da aplicação [PagesLink](https://github.com/PauloAdson/landing-pages-com-react), responsável por fornecer e gerenciar o conteúdo das páginas personalizadas através de uma API baseada em **Strapi**.

O projeto está disponível aqui:   
👉 [PagesLink](https://pageslink.netlify.app/)

## ✨ Funcionalidade

Através do **Strapi**, os usuários podem editar facilmente o conteúdo do site sem precisar escrever uma linha de código. É possível:

- Atualizar textos, links e imagens
- Alterar cores de fundo e das fontes
- Criar e gerenciar seções personalizadas para compor o layout da página

---

## ⚙️ Tecnologias Utilizadas

- [Strapi v5](https://strapi.io/)
- Node.js (18.x ou superior)
- PostgreSQL ou SQLite
- Cloudinary (para upload de imagens)

---

## 📁 Scripts Disponíveis

Você pode utilizar os seguintes scripts via terminal:

| Comando         | Descrição                          |
|-----------------|--------------------------------------|
| `npm run develop` | Inicia o Strapi em modo desenvolvimento |
| `npm run build` | Compila a aplicação Strapi para produção |
| `npm start`     | Inicia a aplicação em modo produção |
| `npm run console` | Acessa o console do Strapi |
| `npm run deploy`  | (Customizável) Deploy remoto |
| `npm run upgrade` | Atualiza para a última versão do Strapi |

---

## 🚀 Executando Localmente

1. Clone o projeto:

```bash
git clone https://github.com/PauloAdson/backend-landing-pages.git
cd backend-landing-pages
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias para conectar ao banco de dados. Para usar SQLite, o arquivo .env deve ter:

```env
DATABASE_CLIENT=pg
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_database_user
DATABASE_PASSWORD=your_database_password
```

4.Execute o servidor:
```bash
npm run develop
```
Isso iniciará o painel administrativo no endereço:
```bash
http://localhost:1337/admin
```

5. Acesse o painel administrativo no navegador e crie um usuário administrador para começar a gerenciar o conteúdo.

## Frontend Relacionado

O frontend da aplicação PagesLink se conecta diretamente com este backend. Para acessar o repositório do frontend:   
[PagesLink Frontend](https://github.com/PauloAdson/landing-pages-com-react)

## ℹ️ Aviso

> Como o backend pode estar hospedado em servidores gratuitos, o primeiro carregamento após um período de inatividade pode demorar até 1 minuto.

## 👨‍💻 Autor
Paulo Adson
[Meu portfólio](https://www.pauloadson.com.br/) | [Linkedin](https://www.linkedin.com/in/paulo-adson/)
