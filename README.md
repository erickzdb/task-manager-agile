
# Task Manager Agile

## Descrição do Projeto
O projeto Task Manager Agile foi desenvolvido para simular um sistema básico de gerenciamento de tarefas utilizando conceitos de Engenharia de Software e metodologias ágeis.

O sistema permite:
- Criar tarefas
- Editar tarefas
- Excluir tarefas
- Marcar tarefas como concluídas
- Definir prioridade
- Salvar tarefas automaticamente no navegador

## Objetivo
Desenvolver um sistema funcional utilizando:
- GitHub
- GitHub Projects (Kanban)
- GitHub Actions
- Testes automatizados
- Controle de versão com commits semânticos

## Metodologia Ágil Utilizada
Foi utilizada a metodologia Kanban, organizando as tarefas nas colunas:
- To Do
- In Progress
- Done

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Jest
- GitHub Actions

## Estrutura do Projeto
```
task-manager-agile/
│
├── src/
├── tests/
├── docs/
├── .github/workflows/
├── package.json
└── README.md
```

## Como Executar
1. Clone o repositório
2. Abra a pasta no VS Code
3. Execute:
```bash
npm install
```

4. Rodar testes:
```bash
npm test
```

5. Abrir o sistema:
Abra o arquivo `src/index.html`

## Testes Automatizados
Foi utilizado Jest para validar:
- Criação de tarefas
- Remoção de tarefas
- Validação de entradas

## Pipeline CI
O GitHub Actions executa automaticamente os testes em cada push realizado no repositório.

## Mudança de Escopo
Inicialmente o sistema permitia apenas adicionar e remover tarefas.

Durante o desenvolvimento foi adicionada uma nova funcionalidade:
- Prioridade de tarefas

Essa mudança foi realizada para melhorar a organização do fluxo de trabalho da equipe.

## Exemplo de Commits Semânticos
- feat: adiciona sistema de prioridade
- fix: corrige validação de entrada
- test: adiciona testes automatizados
- ci: configura github actions
- docs: atualiza README
