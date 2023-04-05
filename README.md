# Api rest

## Zod

usada para validação de qualquer tipo de dados

## Application

- RF: Requisito Funcionais.

  - [x] O usuário deve poder criar uma nova transação;
  - [x] O usuário deve poder obter um resumo da sua conta;
  - [x] O usuário deve poder listar todas transação que já ocorreram;
  - [x] O usuário deve poder visualizar uma única transação;

- RN: Regras de Negócio.

  - [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito;
  - [x] Deve ser possível identificarmos o usuário entre as requisições;
  - [x] O usuário só pode visualizar transação o qual ele criou;

- RNF: Requisitos Não Funcionais.

- Cookies: forma de manter contexto entre requisições

## tests

| func        | desc                                                                 |
| ----------- | -------------------------------------------------------------------- |
| `beforeAll` | executada uma única vez antes de todos os testes                     |
| `afterAll`  | executada antes de cada teste                                        |
| `afterEach` | é executada uma única vez após todos os testes terem sido executados |
