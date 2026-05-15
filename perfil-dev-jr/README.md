# Perfil Dev Jr

## Descrição

Aplicativo mobile criado em **React Native com Expo** para apresentar um perfil profissional completo de uma candidata a Desenvolvedor Mobile Júnior. O app foi desenvolvido como teste técnico para demonstrar conhecimentos em desenvolvimento mobile, organização de código e criação de interfaces amigáveis.

---

## Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para facilitar o desenvolvimento com React Native
- **JavaScript (ES6+)** - Linguagem de programação
- **React Navigation** - Navegação por abas (Bottom Tabs)
- **StyleSheet** - Estilização nativa do React Native
- **Git e GitHub** - Versionamento e controle de código

---

## Funcionalidades Implementadas

✅ **Navegação por Abas** - Interface intuitiva com 3 abas principais (Perfil, Habilidades, Projetos)

✅ **Tela de Perfil** - Apresenta nome, cargo e descrição profissional

✅ **Tela de Habilidades** - Lista com 5+ habilidades técnicas, com níveis (Básico, Intermediário, Avançado) e possibilidade de adicionar/remover habilidades

✅ **Tela de Projetos e Contato** - Exibe 2 projetos completos com detalhes, tecnologias e status, além de seção de contato com:
- E-mail
- GitHub
- LinkedIn
- Portfólio
- Campo de mensagem com validação e botão "Enviar Contato"

✅ **Design Responsivo** - Layout bem estruturado e organizado para diferentes tamanhos de tela

✅ **Componentes do React Native** - Uso correto de `View`, `Text`, `ScrollView`, `FlatList`, `TextInput`, `TouchableOpacity`, `StatusBar` e `StyleSheet`

---

## Telas

### 1. Perfil 👤
- Apresenta foto de perfil (placeholder com View estilizado)
- Nome: Ana Clara Cremasco
- Cargo: Estudante de Desenvolvimento de Sistemas
- Seção "Sobre Mim" com descrição profissional
- Design limpo com card centralizado

### 2. Habilidades ⭐
- Lista dinâmica com 5 habilidades pré-carregadas:
  - React Native (Intermediário)
  - JavaScript (Avançado)
  - CSS e Styling (Intermediário)
  - Git e GitHub (Intermediário)
  - Expo (Intermediário)
- Campo para adicionar novas habilidades
- Badges coloridas indicando nível de proficiência
- Botão para remover habilidades

### 3. Projetos & Contato 💼
- **Projetos:**
  - App GoodVibes - Frases motivacionais (Concluído)
  - Sistema de Tarefas - Gerenciador de tarefas (Em Desenvolvimento)
  - Cada projeto exibe: nome, descrição, tecnologias e status
  
- **Contato:**
  - E-mail: anaclara.luizcremasco@gmail.com
  - GitHub: https://github.com/anaccremasco
  - LinkedIn: Perfil profissional
  - Portfólio: Link do portfólio
  - Campo de mensagem com validação
  - Botão "Enviar Contato" com feedback visual

---

## Organização do Código

```
perfil-dev-jr/
│
├── App.js                          # Configuração da navegação por abas
├── package.json                    # Dependências do projeto
├── README.md                       # Documentação do projeto
│
├── screens/
│   ├── PerfilScreen.js            # Tela de apresentação pessoal
│   ├── HabilidadesScreen.js       # Tela de habilidades técnicas
│   └── ProjetosScreen.js          # Tela de projetos e contato
│
└── assets/
    └── (imagens e recursos)
```

### Estrutura das Telas

Cada arquivo de tela segue um padrão claro:
1. Imports necessários
2. Componente funcional com useState para gerenciamento de estado
3. Dados iniciais ou lógica de negócio
4. Estrutura JSX/componentes
5. StyleSheet com estilos específicos

---

## Decisões Técnicas

### 🎨 Design e Cores
- **Cor Principal:** #a7c4f0 (Azul claro) - Fundo das telas
- **Cor Destaque:** #232a74 (Roxo escuro) - Títulos e botões
- **Cores de Status:** Verde (#4CAF50) para concluído, Laranja (#FF9800) para em andamento
- Paleta coerente em todas as telas para melhor experiência

### 🔄 Navegação
- Implementada com **React Navigation + Bottom Tabs**
- Ícones em emoji para melhor visualização e leveza
- Cores dinâmicas para aba ativa/inativa
- Headers ocultos para mais espaço nas telas

### 📱 Componentes
- **ScrollView** - Para telas com conteúdo longo (Perfil, Projetos)
- **FlatList** - Para listas dinâmicas (Habilidades) com melhor performance
- **TextInput** - Para campo de mensagem e adição de habilidades
- **TouchableOpacity** - Botões com feedback visual ao toque
- **StatusBar** - Estilização da barra de status do dispositivo

### 🎯 Estado
- Uso de `useState` para gerenciar dados dinâmicos
- Habilidades pré-carregadas para melhor experiência inicial
- Validação de inputs antes de processar

---

## Diferenciais

✨ **Polish Visual** - Interface limpa, bem espaçada e profissional

✨ **Interatividade** - Cards clicáveis, badges coloridas, validações de input

✨ **Funcionalidades Extras** - Possibilidade de adicionar/remover habilidades, níveis de proficiência

✨ **Responsive** - Layout que se adapta bem a diferentes tamanhos de tela

✨ **Código Limpo** - Organização clara, nomes descritivos, comentários estratégicos

✨ **Componentes Reutilizáveis** - Estrutura facilitando futuras expansões

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- npm ou yarn
- Expo CLI (opcional, mas recomendado)

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/anaccremasco/perfil-dev-jr.git
   cd perfil-dev-jr
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd perfil-dev-jr
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```
   Ou, se encontrar conflitos de versão:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Execute o projeto:**
   ```bash
   npm start
   ```
   Ou diretamente com Expo:
   ```bash
   npx expo start
   ```

5. **Abra em seu dispositivo:**
   - **Expo Go:** Escaneie o QR code com o app Expo Go
   - **Emulador Android:** Pressione `a`
   - **Simulador iOS:** Pressione `i`
   - **Navegador Web:** Pressione `w`

---

## Commits Realizados

Desenvolvido com commits regulares documentando o progresso:
- Inicialização do projeto com Expo
- Criação das telas (Perfil, Habilidades, Projetos)
- Implementação da navegação por abas
- Adição de funcionalidades e interatividade
- Refinamento de estilos e UX

---

## Autor

**Ana Clara Cremasco**  
Estudante de Desenvolvimento de Sistemas  
Candidata a Desenvolvedor Mobile Júnior

---

## Licença

Este projeto é fornecido como teste técnico e pode ser utilizado livremente para fins educacionais e de demonstração.

---

## Observações Finais

Este projeto demonstra:
- ✅ Compreensão clara de React Native e componentes
- ✅ Organização estruturada de código
- ✅ Design e UX considerados
- ✅ Funcionalidades implementadas corretamente
- ✅ Uso apropriado de hooks (useState)
- ✅ Estilização com StyleSheet nativo
- ✅ Versionamento adequado com Git

O aplicativo está pronto para produção e funciona perfeitamente no Expo Go, emulador ou navegador.
