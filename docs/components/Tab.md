# Tab Component

The `Tab` component is used to display a tab. It can be used as follows:

```html
<div class="kai-tab-active">
  <div class="kai-tab-active-label">Active Tab</div>
</div>
<div class="kai-tab-inactive">
  <div class="kai-tab-inactive-label">Inactive Tab</div>
</div>
```

## Properties

- `focusColor` (optional): The color of the tab underline when focused.
- `isActive` (optional): A boolean indicating whether the tab is active.
- `onTabChange` (optional): A function to be called when the tab is clicked.
- `label`: The label of the tab.
- `index`: The index of the tab.

## Usage Example

```html
<div class="kai-tab-active" style="--tab-underline-color: var(--color-purple);">
  <div class="kai-tab-active-label">Active Tab</div>
</div>
<div class="kai-tab-inactive" style="--tab-underline-color: var(--color-purple);">
  <div class="kai-tab-inactive-label">Inactive Tab</div>
</div>
```

For more details, refer to the [Tab documentation](docs/components/Tab.md).
