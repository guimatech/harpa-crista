# Harpa Cristã - 640 Hinos

Uma aplicação web moderna e responsiva para visualizar todos os 640 hinos da Harpa Cristã. Desenvolvida com **Next.js 14**, **React 18** e **TypeScript**, oferece uma experiência de usuário otimizada para busca e leitura dos hinos.

## ✨ Funcionalidades

- **640 hinos completos** com letras e coros
- **Busca inteligente** por número ou título do hino
- **Interface responsiva** que funciona em desktop, tablet e mobile
- **Navegação por teclado** com setas para cima/baixo
- **Design moderno** com tema escuro
- **Performance otimizada** com Next.js e SSG
- **Acessibilidade** com suporte a leitores de tela
- **SEO otimizado** com meta tags dinâmicas

## 🚀 Deploy na Vercel

Este projeto está otimizado para deploy automático na Vercel:

1. Faça fork deste repositório
2. Conecte sua conta Vercel ao GitHub
3. Importe o projeto na Vercel
4. O deploy será feito automaticamente

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/harpa-crista)

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com SSG
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **CSS3** - Estilização moderna com CSS Grid e Flexbox
- **Google Fonts** - Tipografia Inter
- **Vercel** - Hospedagem e deploy

## 🏃‍♂️ Executando Localmente

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## � Responsividade

A aplicação foi desenvolvida com abordagem mobile-first e funciona perfeitamente em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1200px+)

## 🎨 Design

- **Tema escuro** para melhor experiência de leitura
- **Tipografia otimizada** com fonte Inter
- **Cores contrastantes** para acessibilidade
- **Animações suaves** para transições
- **Layout limpo** focado no conteúdo

## 🔍 Como Usar

1. **Buscar hinos**: Digite o número ou parte do título na barra de busca
2. **Navegar**: Clique em qualquer hino da lista lateral
3. **Teclado**: Use as setas ↑↓ para navegar entre hinos
4. **Mobile**: A lista fica abaixo do hino selecionado em telas pequenas

## � Estrutura do Projeto

```
harpa-crista/
├── app/
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial
├── components/
│   ├── HymnList.tsx        # Lista de hinos
│   ├── HymnViewer.tsx      # Visualizador de hino
│   └── SearchBar.tsx       # Barra de busca
├── data/
│   └── hymns.ts            # Dados dos 640 hinos
├── next.config.js          # Configuração Next.js
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
├── vercel.json             # Configuração Vercel
└── README.md               # Documentação
```

## ⚡ Performance

- **Static Site Generation (SSG)** para carregamento instantâneo
- **Otimização automática** de imagens e fontes
- **Code splitting** automático
- **Prefetch** de rotas
- **Cache otimizado** para recursos estáticos

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- Dados dos hinos baseados no trabalho de [Daniel Liberato](https://github.com/DanielLiberato)
- Harpa Cristã - Hinário oficial da Assembleia de Deus

---

Desenvolvido com ❤️ para a comunidade cristã usando Next.js