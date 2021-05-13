# Desafio 02 - Componentizando a aplicação

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

## Etapas

- [x] **src/App.tsx**
      Esse componente contém toda a aplicação com `exceção` do componente `Button` que não precisa ser alterado e `Icon` que também não precisa de alteração.
- [x] **src/components/Content.tsx**
      Esse componente, ainda vazio, `deve possuir toda a lógica e corpo` responsável pelo header e conteúdo da aplicação
- [x] **src/components/SideBar.tsx**
      Esse componente, também vazio, `deve possuir toda a lógica e corpo` responsável pela seção que contém o título do site e a parte de navegação à esquerda da página
