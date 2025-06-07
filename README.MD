/api-marvel-comments
├── config/                # Configurações (ex: conexão com banco)
│   └── db.js
├── controllers/           # Lógica das rotas (Controllers)
│   └── commentController.js
│   └── userController.js
├── models/                # Modelos (interação com o banco)
│   └── commentModel.js
│   └── userModel.js
├── routes/                # Definições de rotas
│   └── commentRoutes.js
│   └── userRoutes.js
├── middlewares/           # Autenticação, validações, etc.
│   └── authMiddleware.js
├── utils/                 # Funções auxiliares (ex: gerar token, validação)
│   └── generateToken.js
├── .env                   # Variáveis de ambiente
├── .gitignore             # Arquivos/pastas ignoradas pelo Git
├── package.json           # Dependências e scripts do projeto
├── server.js              # Arquivo principal que inicia a API
