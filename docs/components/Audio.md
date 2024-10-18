# Audio Component

The `Audio` component is used to display an audio player. It can be used as follows:

## Usage

To use the `Audio` component, include the following HTML in your file:

```html
<div class="audio-softkey-container">
  <audio controls>
    <source src="audio-file.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</div>
```

## Properties and Methods

The `Audio` component does not have any specific properties or methods. It uses the standard HTML5 `<audio>` element and its attributes.

## Example

Here is an example of how to use the `Audio` component in a simple HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="node_modules/kaiuing/dist/kaiuing.css">
  <title>Audio Component Example</title>
</head>
<body>
  <div class="audio-softkey-container">
    <audio controls>
      <source src="audio-file.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </div>
</body>
</html>
```
