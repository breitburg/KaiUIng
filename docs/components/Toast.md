# Toast Component

The `Toast` component is used to display a brief message at the top of the screen. It can be used to provide feedback to the user, such as a notification or an error message.

## Usage

To use the `Toast` component, follow these steps:

1. Include the CSS file in your HTML file:
   ```html
   <link rel="stylesheet" href="node_modules/kaiuing/dist/kaiuing.css">
   ```

2. Add the `Toast` component to your HTML file:
   ```html
   <div class="kai-toast" id="toast">This is a toast message</div>
   ```

3. Use JavaScript to display the toast message:
   ```javascript
   function showToast(message, duration) {
     const toast = document.getElementById('toast');
     toast.textContent = message;
     toast.classList.add('kai-toast--displayed');
     setTimeout(() => {
       toast.classList.remove('kai-toast--displayed');
     }, duration);
   }

   // Example usage
   showToast('Hello, world!', 3000);
   ```

## Properties and Methods

The `Toast` component does not have any specific properties or methods. It is a simple component that can be styled and controlled using CSS and JavaScript.

## Example

Here is a complete example of how to use the `Toast` component:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/kaiuing/dist/kaiuing.css">
  <title>Toast Example</title>
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div class="container">
    <button onclick="showToast('Hello, world!', 3000)">Show Toast</button>
  </div>
  <div class="kai-toast" id="toast">This is a toast message</div>
  <script>
    function showToast(message, duration) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('kai-toast--displayed');
      setTimeout(() => {
        toast.classList.remove('kai-toast--displayed');
      }, duration);
    }
  </script>
</body>
</html>
```
