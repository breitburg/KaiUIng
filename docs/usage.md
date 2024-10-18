# Usage

## Getting Started

To use KaiUIng with simple HTML/CSS, follow these steps:

1. Install KaiUIng using npm or yarn:
   ```
   npm install kaiuing
   yarn add kaiuing
   ```

2. Include the CSS file in your HTML file:
   ```html
   <link rel="stylesheet" href="node_modules/kaiuing/dist/kaiuing.css">
   ```

3. Use the components in your HTML file. For example, to use the `Button` component:
   ```html
   <button class="kai-button">Click me</button>
   ```

## Components

### ArrowListItem

The `ArrowListItem` component is used to display a list item with an arrow icon. It can be used as follows:

```html
<div class="kai-al">
  <div class="kai-al-icon">
    <span class="kai-al-icon-unfocused"></span>
  </div>
  <div class="kai-al-line">
    <span class="kai-al-primary">Primary Text</span>
    <span class="kai-al-secondary">Secondary Text</span>
  </div>
</div>
```

### Audio

The `Audio` component is used to display an audio player. It can be used as follows:

```html
<div class="audio-softkey-container">
  <audio controls>
    <source src="audio-file.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>
```

### BodyTextListItem

The `BodyTextListItem` component is used to display a list item with a header and body text. It can be used as follows:

```html
<div class="kai-btl">
  <span class="kai-btl-header">Header Text</span>
  <span class="kai-btl-body">Body Text</span>
</div>
```

### Button

The `Button` component is used to display a button. It can be used as follows:

```html
<button class="kai-button-input">Click me</button>
```

### Camera

The `Camera` component is used to display a camera feed. It can be used as follows:

```html
<div class="c-camera-feed">
  <video class="c-camera-feed__viewer" autoplay></video>
  <div class="camera-controls">
    <button class="kai-icon-button-input">Capture</button>
  </div>
</div>
```

### CheckboxListItem

The `CheckboxListItem` component is used to display a list item with a checkbox. It can be used as follows:

```html
<div class="kai-cbl">
  <div class="kai-cbl-box">
    <input type="checkbox" class="kai-cbl-box-input-unfocused">
  </div>
  <div class="kai-cbl-line">
    <span class="kai-cbl-primary">Primary Text</span>
    <span class="kai-cbl-secondary">Secondary Text</span>
  </div>
</div>
```

### DateSelector

The `DateSelector` component is used to display a date selector. It can be used as follows:

```html
<div class="kai-datesel">
  <div class="kai-datesel-wrapper">
    <div class="kai-datesel-header">Select Date</div>
    <div class="kai-datesel-container">
      <input type="date" class="kai-datesel-input">
    </div>
  </div>
</div>
```

### Dialog

The `Dialog` component is used to display a dialog. It can be used as follows:

```html
<div class="kai-dialog">
  <div class="kai-dialog-wrapper">
    <div class="kai-dialog-header">Dialog Title</div>
    <div class="kai-dialog-container">
      <p>Dialog content goes here.</p>
      <button class="kai-button-input">OK</button>
    </div>
  </div>
</div>
```

### Header

The `Header` component is used to display a header. It can be used as follows:

```html
<div class="kai-header">
  <h1>Header Text</h1>
</div>
```

### IconButton

The `IconButton` component is used to display a button with an icon. It can be used as follows:

```html
<button class="kai-icon-button-input">
  <span class="kai-icon-button-icon-unfocused"></span>
  Button Text
</button>
```

### IconListItem

The `IconListItem` component is used to display a list item with an icon. It can be used as follows:

```html
<div class="kai-il">
  <div class="kai-il-icon">
    <span class="kai-il-icon-unfocused"></span>
  </div>
  <div class="kai-il-line">
    <span class="kai-il-primary">Primary Text</span>
    <span class="kai-il-secondary">Secondary Text</span>
  </div>
</div>
```

### ImageListItem

The `ImageListItem` component is used to display a list item with an image. It can be used as follows:

```html
<div class="kai-il-img">
  <div class="kai-il-img-icon">
    <img src="image.jpg" alt="Image">
  </div>
  <div class="kai-il-img-line">
    <span class="kai-il-img-primary">Primary Text</span>
    <span class="kai-il-img-secondary">Secondary Text</span>
  </div>
</div>
```

### OptionMenu

The `OptionMenu` component is used to display an option menu. It can be used as follows:

```html
<div class="kai-om">
  <header>Option Menu</header>
  <div class="kai-om-item">Option 1</div>
  <div class="kai-om-item">Option 2</div>
</div>
```

### ProgressBar

The `ProgressBar` component is used to display a progress bar. It can be used as follows:

```html
<div class="kai-pbar">
  <div class="kai-pbar-line">Progress</div>
  <div class="kai-pbar-bar-wrapper">
    <div class="kai-pbar-left-filler"></div>
    <div class="kai-pbar-right-filler-download"></div>
  </div>
</div>
```

### RadioButtonListItem

The `RadioButtonListItem` component is used to display a list item with a radio button. It can be used as follows:

```html
<div class="kai-rbl">
  <div class="kai-rbl-button">
    <input type="radio" class="kai-rbl-button-input-unfocused">
  </div>
  <div class="kai-rbl-line">
    <span class="kai-rbl-primary">Primary Text</span>
    <span class="kai-rbl-secondary">Secondary Text</span>
  </div>
</div>
```

### Separator

The `Separator` component is used to display a separator. It can be used as follows:

```html
<div class="kai-separator">
  <span class="kai-separator-text">Separator Text</span>
</div>
```

### Slider

The `Slider` component is used to display a slider. It can be used as follows:

```html
<div class="kai-slider">
  <div class="kai-slider-line">
    <span class="kai-slider-header">Slider Header</span>
    <span class="kai-slider-tracker">Tracker</span>
  </div>
  <div class="kai-slider-slider-wrapper">
    <input type="range" min="0" max="100" value="50">
  </div>
</div>
```

### SoftKey

The `SoftKey` component is used to display soft keys. It can be used as follows:

```html
<div class="kai-softkey">
  <button class="kai-softkey-btn">Left</button>
  <button class="kai-softkey-btn">Center</button>
  <button class="kai-softkey-btn">Right</button>
</div>
```
