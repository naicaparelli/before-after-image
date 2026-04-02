# Exemplos de Uso

## 📸 Portfolio de Fotografia

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/foto-original.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/foto-editada.jpg"
  beforeLabel="RAW"
  afterLabel="EDITADA"
  aspectRatio="3 / 2"
  sliderColor="#E63946"
/>
```

## 🎨 Design de Interface

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/wireframe.png"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/design-final.png"
  beforeLabel="WIREFRAME"
  afterLabel="DESIGN FINAL"
  aspectRatio="16 / 9"
/>
```

## 🏠 Reforma/Construção

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/antes.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/depois.jpg"
  beforeLabel="ANTES"
  afterLabel="DEPOIS"
  aspectRatio="4 / 3"
  sliderColor="#2A9D8F"
  handleSize={56}
/>
```

## 🎭 Restauração de Imagens

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/foto-antiga.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/foto-restaurada.jpg"
  beforeLabel="ORIGINAL (1920)"
  afterLabel="RESTAURADA"
  aspectRatio="1 / 1"
  maxWidth="600px"
/>
```

## 🌅 Filtros/Efeitos

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/sem-filtro.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/com-filtro.jpg"
  showLabels={false}
  aspectRatio="1 / 1"
  sliderColor="#FF6B6B"
/>
```

## 💼 Produto - Antes e Depois

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/produto-usado.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/produto-novo.jpg"
  beforeLabel="USADO"
  afterLabel="COMO NOVO"
  aspectRatio="1 / 1"
  maxWidth="500px"
  handleSize={52}
/>
```

## 🎬 Produção Audiovisual

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/raw-footage.jpg"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/color-graded.jpg"
  beforeLabel="FOOTAGE BRUTA"
  afterLabel="COLOR GRADING"
  aspectRatio="21 / 9"
  sliderColor="#FFD700"
/>
```

## 🖥️ Web Design - Responsivo

```tsx
<BeforeAfterSlider
  beforeImage="https://raw.githubusercontent.com/seu-usuario/repo/main/desktop-view.png"
  afterImage="https://raw.githubusercontent.com/seu-usuario/repo/main/mobile-view.png"
  beforeLabel="DESKTOP"
  afterLabel="MOBILE"
  aspectRatio="9 / 16"
  maxWidth="400px"
/>
```

## 🎯 Múltiplos Sliders na Mesma Página

```tsx
function Portfolio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <BeforeAfterSlider
        beforeImage="projeto1-antes.jpg"
        afterImage="projeto1-depois.jpg"
        beforeLabel="SKETCH"
        afterLabel="FINAL"
      />
      
      <BeforeAfterSlider
        beforeImage="projeto2-antes.jpg"
        afterImage="projeto2-depois.jpg"
        beforeLabel="V1"
        afterLabel="V2"
        sliderColor="#FF6B6B"
      />
      
      <BeforeAfterSlider
        beforeImage="projeto3-antes.jpg"
        afterImage="projeto3-depois.jpg"
        showLabels={false}
        aspectRatio="1 / 1"
      />
    </div>
  )
}
```

## 🎨 Customização Extrema

```tsx
<BeforeAfterSlider
  beforeImage="sua-imagem-antes.jpg"
  afterImage="sua-imagem-depois.jpg"
  aspectRatio="2 / 1"
  beforeLabel="🎨 SEM EDIÇÃO"
  afterLabel="✨ EDITADA"
  showLabels={true}
  sliderColor="#6366F1"
  handleSize={64}
  maxWidth="1400px"
/>
```

## 💡 Dicas

### Como pegar o link direto do GitHub

1. Faça upload da imagem no seu repositório
2. Navegue até a imagem no GitHub
3. Clique no botão "Download" ou "Raw"
4. Copie a URL que aparece no navegador

O formato será:
```
https://raw.githubusercontent.com/SEU-USUARIO/SEU-REPO/main/pasta/imagem.jpg
```

### Proporções comuns

- **16:9** - Padrão widescreen (vídeos, banners)
- **4:3** - Proporção clássica de foto
- **1:1** - Quadrado (Instagram, posts)
- **3:2** - Fotografia tradicional
- **21:9** - Ultra-wide (cinema)
- **9:16** - Mobile/Stories vertical

### Cores sugeridas para sliderColor

- `#FFFFFF` - Branco (padrão)
- `#000000` - Preto
- `#E63946` - Vermelho vibrante
- `#2A9D8F` - Verde água
- `#FF6B6B` - Coral
- `#6366F1` - Indigo
- `#FFD700` - Dourado
