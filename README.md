# FoodFlow

## 1. Contexto do Projeto

A **FoodFlow** e uma plataforma digital de delivery de refeicoes que conecta clientes, restaurantes parceiros e entregadores atraves de uma aplicacao web e, posteriormente, aplicacoes mobile.

O sistema devera permitir a gestao completa do ciclo de pedidos, desde a selecao dos produtos ate a entrega, incluindo pagamentos online, acompanhamento em tempo real, gestao de promocoes e analises de negocio.

O objetivo e criar uma solucao moderna, escalavel e competitiva com plataformas como Uber Eats, Glovo, Bolt Food e DoorDash.

## 2. Objetivos do Sistema

A plataforma FoodFlow devera:

- Permitir que clientes encontrem restaurantes proximos.
- Facilitar pedidos online.
- Processar pagamentos digitais.
- Gerir entregas em tempo real.
- Disponibilizar ferramentas de gestao para restaurantes.
- Disponibilizar ferramentas para entregadores.
- Fornecer dashboards analiticos para administradores.
- Garantir escalabilidade e seguranca.

## 3. Principais Stakeholders

### Cliente

Utilizador que realiza pedidos.

### Restaurante

Estabelecimento que disponibiliza produtos.

### Entregador

Responsavel pela recolha e entrega dos pedidos.

### Administrador

Gestor da plataforma.

### Operador de Suporte

Responsavel pelo apoio ao cliente.

## 4. Escopo Funcional

### Modulo Cliente

#### Registo e Login

- Registo por email.
- Registo por telemovel.
- Login com Google, Apple e Facebook.
- Recuperacao de senha.
- Validacao de email.

#### Perfil

- Editar perfil.
- Alterar fotografia.
- Gerir moradas.
- Gerir metodos de pagamento.
- Consultar historico de pedidos.

#### Descoberta de Restaurantes

- Pesquisa por nome.
- Pesquisa por categoria.
- Pesquisa por localizacao.
- Pesquisa por prato.
- Filtros por distancia, avaliacao, tempo de entrega e preco medio.

#### Catalogo

- Visualizar menu.
- Personalizacao de itens.
- Extras.
- Complementos.
- Observacoes especiais.

#### Carrinho

- Adicionar produtos.
- Alterar quantidades.
- Aplicar cupoes.
- Calcular custos.

#### Checkout

- Confirmacao do pedido.
- Selecao do pagamento.
- Morada de entrega.
- Agendamento.

#### Tracking

- Pedido recebido.
- Em preparacao.
- Pronto.
- Recolhido.
- A caminho.
- Entregue.

#### Avaliacoes

- Avaliar restaurante.
- Avaliar entregador.
- Escrever comentarios.

### Modulo Restaurante

#### Gestao de Perfil

- Dados da empresa.
- Horarios.
- Fotografias.
- Localizacao.

#### Gestao de Produtos

- Criar produtos.
- Editar produtos.
- Remover produtos.

Campos principais:

- Nome.
- Descricao.
- Preco.
- Imagens.
- Categoria.
- Disponibilidade.

#### Gestao de Pedidos

- Receber pedidos.
- Aprovar pedidos.
- Rejeitar pedidos.
- Atualizar estado.

#### Gestao de Promocoes

- Descontos.
- Campanhas.
- Cupoes.

#### Relatorios

- Vendas.
- Produtos mais vendidos.
- Horarios de pico.
- Clientes recorrentes.

### Modulo Entregador

#### Registo

- Dados pessoais.
- Validacao documental.
- Validacao de veiculo.

#### Disponibilidade

- Online.
- Offline.
- Pausas.

#### Gestao de Entregas

- Aceitar entrega.
- Rejeitar entrega.
- Navegacao GPS.
- Confirmacao de recolha.
- Confirmacao de entrega.

#### Ganhos

- Historico de ganhos.
- Comissoes.
- Ajustes.
- Transferencias.

### Modulo Administracao

#### Dashboard Global

Indicadores:

- Total de utilizadores.
- Pedidos diarios.
- Receita.
- Ticket medio.
- Crescimento mensal.

#### Gestao de Utilizadores

- Clientes.
- Restaurantes.
- Entregadores.
- Administradores.

#### Gestao Financeira

- Comissoes.
- Faturacao.
- Pagamentos.

#### Gestao de Conteudos

- Banners.
- Promocoes.
- Notificacoes.

#### Gestao de Suporte

- Tickets.
- Reclamacoes.
- Devolucoes.

## 5. Requisitos Funcionais

- **RF001:** O sistema deve permitir o registo de clientes.
- **RF002:** O sistema deve permitir login seguro.
- **RF003:** O sistema deve permitir pesquisa de restaurantes.
- **RF004:** O sistema deve apresentar menus atualizados.
- **RF005:** O sistema deve permitir criar pedidos.
- **RF006:** O sistema deve calcular automaticamente subtotal, entrega, taxas e total.
- **RF007:** O sistema deve processar pagamentos online.
- **RF008:** O sistema deve gerar notificacoes em tempo real.
- **RF009:** O sistema deve rastrear entregas.
- **RF010:** O sistema deve armazenar historico de pedidos.
- **RF011:** O sistema deve permitir avaliacoes.
- **RF012:** O sistema deve gerar relatorios financeiros.

## 6. Requisitos Nao Funcionais

### Performance

- Tempo de resposta inferior a 2 segundos.
- Suportar 10.000 utilizadores simultaneos.

### Escalabilidade

- Arquitetura preparada para evoluir para servicos independentes.
- Deploy em cloud.

### Disponibilidade

- SLA minimo de 99,9%.

### Seguranca

- OAuth 2.0.
- JWT.
- Criptografia AES-256.
- HTTPS/TLS.

### Usabilidade

- Interface responsiva.
- Design mobile first.

### Compatibilidade

Mobile:

- Android 10+.
- iOS 15+.

Web:

- Chrome.
- Edge.
- Firefox.
- Safari.

## 7. Casos de Uso

### UC01 - Registar Cliente

Ator: Cliente.

Fluxo principal:

1. Acede ao registo.
2. Introduz dados.
3. Recebe email.
4. Confirma conta.
5. Sistema ativa perfil.

### UC02 - Realizar Pedido

Ator: Cliente.

Fluxo principal:

1. Pesquisa restaurante.
2. Seleciona produtos.
3. Adiciona ao carrinho.
4. Escolhe pagamento.
5. Confirma pedido.
6. Restaurante recebe pedido.

### UC03 - Aceitar Pedido

Ator: Restaurante.

Fluxo principal:

1. Recebe pedido.
2. Analisa disponibilidade.
3. Aceita pedido.
4. Inicia preparacao.

### UC04 - Realizar Entrega

Ator: Entregador.

Fluxo principal:

1. Recebe pedido.
2. Aceita.
3. Recolhe pedido.
4. Entrega ao cliente.
5. Finaliza entrega.

## 8. Arquitetura

### Estado Atual do Projeto

O projeto esta organizado como uma base monorepo simples:

```txt
food-delivery/
  backend/
  frontend/
  package.json
  README.md
```

#### Frontend Web

Estado atual:

- React.js.
- Vite.
- JavaScript.
- CSS por classes.
- React Router.
- Assets publicos servidos por `frontend/public`.

Funcionalidades ja iniciadas:

- Homepage.
- Listagem de restaurantes.
- Pesquisa simples por nome/categoria.
- Pagina de menu por restaurante.
- Carrinho local.
- Integracao com API local, com fallback para dados mockados.

#### Backend

Estado atual:

- Node.js.
- Servidor HTTP nativo, sem framework externo.
- Dados mockados em memoria.
- API REST inicial.

Endpoints atuais:

- `GET /health`
- `GET /restaurants`
- `GET /restaurants/:id`
- `GET /orders`
- `POST /orders`

#### API

Estado atual:

- REST.
- JSON.
- CORS permissivo para desenvolvimento local.

#### Base de Dados

Estado atual:

- Ainda nao existe base de dados.
- Os dados estao mockados no backend e no frontend.

Evolucao recomendada:

- PostgreSQL para dados relacionais principais.
- Prisma ou TypeORM para acesso a dados.

#### Mobile

Estado atual:

- Ainda nao existe aplicacao mobile.

Decisao recomendada:

- Criar mobile apenas depois de estabilizar os fluxos web e a API.
- React Native e a opcao mais alinhada com o ecossistema atual, porque o projeto ja usa React no frontend web.

### Arquitetura Alvo Recomendada

Para evolucao futura, a arquitetura pode seguir este caminho:

#### Frontend Web

- Manter React.js.
- Avaliar migracao para TypeScript.
- Avaliar Next.js apenas se houver necessidade clara de SSR, SEO avancado, rotas server-side ou rendering hibrido.
- Manter Vite se o objetivo principal for uma SPA rapida e simples.
- Avaliar Tailwind CSS ou design system proprio quando a interface crescer.

#### Mobile

- React Native, por coerencia com React.
- Partilha futura de tipos, validacoes e cliente API com o frontend web.

#### Backend

- Evoluir de Node HTTP nativo para NestJS quando houver necessidade de autenticacao robusta, modulos por dominio, testes estruturados e arquitetura mais escalavel.

#### API

- REST para os fluxos principais.
- GraphQL apenas se surgir necessidade real de consultas muito flexiveis para dashboards ou clientes mobile.

#### Base de Dados

- PostgreSQL como base principal.
- Redis para cache, sessoes temporarias, rate limiting e filas leves.

#### Mensageria

- RabbitMQ para eventos assincronos como pedido criado, pagamento confirmado, restaurante aceitou pedido, entregador atribuido e notificacao enviada.

#### Armazenamento

- AWS S3 ou equivalente para imagens de restaurantes, produtos, perfis e documentos de entregadores.

#### Pesquisa

- Elasticsearch ou OpenSearch para pesquisa avancada por restaurante, prato, categoria e localizacao quando o volume justificar.

### Observacao Sobre Microsservicos

Apesar do requisito mencionar microsservicos, nesta fase o projeto deve comecar como uma arquitetura modular simples. Isso reduz complexidade inicial e permite validar o produto mais rapidamente.

Uma evolucao natural seria:

1. Monolito modular.
2. Separacao de dominios internos.
3. Extracao gradual de servicos criticos, como pagamentos, notificacoes, tracking e relatorios.

## 9. Estrutura de Pastas

```txt
backend/
  src/
    data.js
    server.js

frontend/
  public/
    foodflow-logo.jpg
  src/
    components/
    data/
    pages/
    routes/
    services/
```

## 10. Integracoes Externas

As seguintes integracoes fazem parte da arquitetura alvo da plataforma e devem ser implementadas gradualmente, conforme os modulos forem evoluindo.

### Pagamentos

- Stripe.
- PayPal.
- MB WAY.
- Apple Pay.
- Google Pay.

### Mapas

- Google Maps.
- Mapbox.

### Notificacoes

- Firebase Cloud Messaging.
- OneSignal.

### SMS

- Twilio.

### Email

- SendGrid.

## 11. Comandos de Desenvolvimento

Instalar dependencias do frontend:

```bash
npm --prefix frontend install
```

Executar backend:

```bash
npm run dev:backend
```

Executar frontend:

```bash
npm run dev:frontend
```

Build do frontend:

```bash
npm run build
```

Lint do frontend:

```bash
npm run lint
```

Por defeito, o frontend tenta usar `http://localhost:3001`. Se o backend nao estiver ligado, usa dados mockados locais.

## 12. Proximos Passos

1. Definir modelo de dados inicial para utilizadores, restaurantes, produtos, pedidos e pagamentos.
2. Adicionar base de dados PostgreSQL.
3. Implementar autenticacao com JWT.
4. Criar fluxo completo de checkout.
5. Implementar estados de pedido e tracking.
6. Criar dashboard de restaurante.
7. Criar dashboard de administracao.
8. Criar app mobile em React Native quando a API estiver estavel.
