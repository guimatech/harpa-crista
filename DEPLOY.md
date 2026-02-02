# 🚀 Como fazer deploy na Vercel com Next.js

## Pré-requisitos
- Node.js 18+ instalado
- Conta no GitHub
- Conta na Vercel (gratuita)

## Passo a passo

### 1. Preparar o repositório
```bash
# Instalar dependências
npm install

# Testar localmente
npm run dev

# Build de produção (opcional, para testar)
npm run build

# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "feat: projeto Harpa Cristã com Next.js"

# Conectar ao repositório remoto
git remote add origin https://github.com/seu-usuario/harpa-crista.git

# Enviar para o GitHub
git push -u origin main
```

### 2. Deploy na Vercel

#### Opção 1: Via GitHub (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `harpa-crista`
5. Vercel detectará automaticamente que é um projeto Next.js
6. Clique em "Deploy"

#### Opção 2: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

### 3. Configurações automáticas
O projeto já inclui:
- ✅ `next.config.js` - Configuração Next.js com export estático
- ✅ `vercel.json` - Configurações de deploy otimizadas
- ✅ `package.json` - Scripts e dependências
- ✅ Headers de segurança
- ✅ Cache otimizado
- ✅ TypeScript configurado

### 4. Domínio personalizado (opcional)
1. No dashboard da Vercel, vá em "Settings"
2. Clique em "Domains"
3. Adicione seu domínio personalizado

## 🔧 Configurações incluídas

### Next.js Features
- **Static Site Generation (SSG)** - Site completamente estático
- **Otimização automática** de imagens e fontes
- **Code splitting** automático
- **TypeScript** com tipagem completa
- **ESLint** configurado

### Performance
- Cache de 1 ano para arquivos estáticos
- Compressão automática
- CDN global da Vercel
- Prefetch automático de rotas

### Segurança
- Headers de segurança (XSS, CSRF, etc.)
- HTTPS automático
- Proteção contra clickjacking
- Referrer Policy configurada

### SEO
- Meta tags dinâmicas
- Open Graph configurado
- Twitter Cards
- Estrutura semântica

## 📊 Monitoramento
A Vercel fornece automaticamente:
- **Analytics** de performance e uso
- **Logs** detalhados de build e runtime
- **Métricas** Core Web Vitals
- **Monitoramento** de uptime

## 🌐 URL final
Após o deploy, seu projeto estará disponível em:
`https://harpa-crista-[hash].vercel.app`

Ou com domínio personalizado:
`https://seu-dominio.com`

## 🛠️ Comandos úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Executar build localmente
npm start

# Linting
npm run lint

# Deploy via CLI
vercel --prod
```

## 🔄 Deploy automático
Após a configuração inicial, qualquer push para a branch `main` fará deploy automático na Vercel.