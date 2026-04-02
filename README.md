# Before After Slider

Componente React para comparação de imagens "antes e depois" com slider interativo. Ideal para portfolios, showcases de design, edição de fotos e demonstrações de produtos.

![Demo](https://via.placeholder.com/800x400?text=Demo+GIF+aqui)

## ✨ Features

- 🖱️ Arraste o slider com mouse ou touch
- 📱 Totalmente responsivo
- ⚙️ Altamente customizável
- 🎨 Suporte a diferentes proporções de imagem
- 🏷️ Labels personalizáveis
- 🎯 Zero dependências externas
- 💪 TypeScript

## 🚀 Instalação

### Uso no Framer

1. Copie o código de `BeforeAfterSlider.tsx`
2. No Framer, crie um novo **Code Component**
3. Cole o código
4. Configure as propriedades no painel

### Uso em React

```bash
# Copie o arquivo para seu projeto
cp BeforeAfterSlider.tsx src/components/
```

## 📖 Uso

### Exemplo básico

```tsx
import BeforeAfterSlider from './BeforeAfterSlider'

function App() {
  return (
    <BeforeAfterSlider
      beforeImage="https://seu-link.com/antes.jpg"
      afterImage="https://seu-link.com/depois.jpg"
    />
  )
}
```

### Exemplo customizado

```tsx
<BeforeAfterSlider
  beforeImage="https://seu-link.com/antes.jpg"
  afterImage="https://seu-link.com/depois.jpg"
  aspectRatio="4 / 3"
  beforeLabel="ORIGINAL"
  afterLabel="EDITADA"
  sliderColor="#FF6B6B"
  handleSize={56}
  maxWidth="900px"
  showLabels={true}
/>
```

## 🎛️ Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `beforeImage` | `string` | **obrigatório** | URL da imagem "antes" |
| `afterImage` | `string` | **obrigatório** | URL da imagem "depois" |
| `aspectRatio` | `string` | `"16 / 9"` | Proporção da imagem (ex: "4 / 3", "1 / 1") |
| `beforeLabel` | `string` | `"ANTES"` | Texto do label esquerdo |
| `afterLabel` | `string` | `"DEPOIS"` | Texto do label direito |
| `showLabels` | `boolean` | `true` | Mostrar/ocultar labels |
| `sliderColor` | `string` | `"white"` | Cor da linha e handle |
| `handleSize` | `number` | `48` | Tamanho do handle em pixels |
| `maxWidth` | `string` | `"1200px"` | Largura máxima do componente |

## 🎨 Exemplos de uso

### Portfolio de design

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/exemplo-antes.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/exemplo-depois.jpg"
  beforeLabel="WIREFRAME"
  afterLabel="DESIGN FINAL"
/>
```

### Edição de fotos

```tsx
<BeforeAfterSlider
  beforeImage="foto-original.jpg"
  afterImage="foto-editada.jpg"
  aspectRatio="1 / 1"
  sliderColor="#E63946"
/>
```

### Reforma/Antes e Depois

```tsx
<BeforeAfterSlider
  beforeImage="casa-antes.jpg"
  afterImage="casa-depois.jpg"
  aspectRatio="4 / 3"
  beforeLabel="2020"
  afterLabel="2024"
/>
```

## 🖼️ Como hospedar suas imagens

### GitHub (recomendado para projetos open source)

1. Adicione suas imagens ao repositório
2. Faça commit e push
3. Use URLs no formato:
```
https://raw.githubusercontent.com/SEU-USUARIO/SEU-REPO/main/pasta/imagem.jpg
```

### Outras opções

- **Imgur**: Upload rápido, sem cadastro
- **Cloudinary**: Otimização automática
- **Framer Assets**: Se estiver usando no Framer

## 🛠️ Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/before-after-slider.git

# Entre na pasta
cd before-after-slider

# Instale as dependências (se houver exemplo)
npm install

# Execute o exemplo
npm run dev
```

## 📝 Licença

MIT ©

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## ⭐ Mostre seu apoio

Se este projeto te ajudou, considere dar uma ⭐!

---

Feito com ❤️ para a comunidade Framer e React
