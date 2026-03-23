# Movie App

Uma aplicação web moderna para explorar e descobrir filmes, desenvolvida com Next.js 16 e TypeScript.

## 🚀 Funcionalidades

- **Lista de Filmes**: Exibe uma lista de filmes populares da API The Movie Database (TMDb)
- **Cards de Filmes**: Cada filme é exibido em um card elegante com:
  - Poster do filme
  - Título
  - Avaliação com estrelas
  - Sinopse (visível ao passar o mouse)
  - Nota média
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **TypeScript**: Tipagem forte para melhor desenvolvimento e manutenção

## 🛠️ Tecnologias Utilizadas

- **Next.js 16**: Framework React para produção
- **TypeScript**: Superset JavaScript com tipagem estática
- **React 19**: Biblioteca para interfaces de usuário
- **Sass**: Pré-processador CSS para estilos avançados
- **Axios**: Cliente HTTP para requisições à API
- **React Icons**: Biblioteca de ícones para React
- **TMDb API**: API de filmes gratuita e abrangente

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd movie-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave da API do TMDb:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=sua-chave-da-api-aqui
   ```

4. **Execute o projeto:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
movie-app/
├── src/
│   └── app/
│       ├── components/
│       │   ├── movieList/
│       │   │   ├── index.tsx
│       │   │   └── index.scss
│       │   └── MovieCard/
│       │       ├── index.tsx
│       │       ├── index.scss
│       │       ├── starRating.tsx
│       │       └── starRating.scss
│       ├── globals.scss
│       ├── layout.tsx
│       ├── page.tsx
│       └── page.module.css
├── Types/
│   └── movie.ts
├── next.config.ts
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Componentes

### MovieList
Componente principal que busca e exibe a lista de filmes da API TMDb.

### MovieCard
Componente que renderiza cada filme individualmente, incluindo:
- Imagem do poster
- Sistema de avaliação com estrelas
- Informações do filme (título, sinopse, nota)

### StarRating
Componente que converte a nota numérica em um sistema visual de estrelas.

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🌐 API

O projeto utiliza a [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) para obter dados dos filmes.

**Endpoint utilizado:**
- `GET /3/discover/movie` - Lista de filmes populares

## 🎯 Funcionalidades Futuras

- [ ] Busca de filmes por título
- [ ] Filtros por gênero, ano, avaliação
- [ ] Página de detalhes do filme
- [ ] Sistema de favoritos
- [ ] Modo escuro/claro
- [ ] Paginação infinita

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
