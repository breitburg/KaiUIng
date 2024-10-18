# Tabs Component

The `Tabs` component is used to display a set of tabs. It can be used as follows:

```html
<div class="kai-tabs">
  <div class="kai-tab-active">
    <div class="kai-tab-active-label">Active Tab</div>
  </div>
  <div class="kai-tab-inactive">
    <div class="kai-tab-inactive-label">Inactive Tab</div>
  </div>
</div>
```

## Properties

- `onChangeIndex` (optional): A function to be called when the active tab changes.
- `defaultActiveChild` (optional): The index of the default active tab.
- `children`: The tabs to be displayed.

## Usage Example

```html
<div class="kai-tabs">
  <div class="kai-tab-active">
    <div class="kai-tab-active-label">Active Tab</div>
  </div>
  <div class="kai-tab-inactive">
    <div class="kai-tab-inactive-label">Inactive Tab</div>
  </div>
</div>
```

For more details, refer to the [Tabs documentation](docs/components/Tabs.md).
