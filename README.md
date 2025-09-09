# Site de Cadastro de Pet + Cypress (Didático)

Projeto estático para aula: **formulário de cadastro de animal de estimação com upload de foto e modal de sucesso/erro**, com **testes E2E em Cypress**.

## 🚧 Requisitos
- Node.js 18+
- NPM

## ▶️ Rodando o site localmente
Instale as dependências e inicie o servidor estático:
```bash
npm install
npm run start
```
Abra em: http://localhost:8080

> Dica: Você também pode usar outras soluções (ex.: Live Server do VSCode), mas os testes estão configurados para `http://localhost:8080`.

## 🧪 Rodando os testes
- **Modo interativo (GUI):**
```bash
npm run cypress:open
```
Depois, escolha o teste `pet_form.cy.js`.

- **Modo headless (CI/CD):**
```bash
npm test
```

## 🗂️ Estrutura
```
.
├── index.html           # Página do formulário (HTML sem framework)
├── styles.css           # Estilos simples
├── app.js               # Lógica: validação, preview e modais
├── package.json         # Scripts + dependências (http-server, cypress)
├── cypress.config.js    # Config Cypress (baseUrl http://localhost:8080)
└── cypress
    └── e2e
        └── pet_form.cy.js  # Testes E2E comentados
```

## 💡 O que mostrar em aula
1. **Validação de campos** e UX (mensagens e foco).
2. **Upload e preview** de imagem (FileReader).
3. **Modal de sucesso/erro** e estado acessível (aria-hidden).
4. **localStorage** como "mock" do backend (didático).
5. **Cypress básico**: `visit`, `get`, `type`, `select`, `selectFile`, `click`, `should`.
6. **Boas práticas**: IDs estáveis, mensagens claras, baseUrl configurado.

## 📝 Observação
Este projeto é **didático**: não há armazenamento real no servidor nem persistência além do navegador (localStorage).
