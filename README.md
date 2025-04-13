# React Scavenger Hunt Component

A reusable React component for creating scavenger hunt applications.

## Installation

```bash
npm install @scavenger-hunt/react-scavenger-hunt
```

## Usage

1. Import the component:

```javascript
import { ScavengerHunt } from '@scavenger-hunt/react-scavenger-hunt';
import '@scavenger-hunt/react-scavenger-hunt/dist/styles.css';
```

2. Use the component:

```javascript
const items = [
  {
    id: 1,
    name: 'Find a red leaf',
    description: 'Find a leaf that is completely red',
    category: 'Nature',
    completed: false
  },
  // Add more items...
];

function App() {
  return (
    <ScavengerHunt
      items={items}
      title="Nature Scavenger Hunt"
      description="Find and complete all items in the list"
      onStart={() => console.log('Game started!')}
      onComplete={(item) => console.log(`${item.name} completed!`) }
      onPhotoUpload={(item, photoUrl) => console.log(`Photo uploaded for ${item.name}`)}
    />
  );
}
```

## Props

- `items`: Array of scavenger hunt items (required)
  - Each item should have: id, name, description, category, completed
  - Optional: photoUrl

- `title`: Title of the scavenger hunt (optional, defaults to "Scavenger Hunt")
- `description`: Description text (optional, defaults to "Find and complete all items in the list")
- `onStart`: Callback when game starts (optional)
- `onComplete`: Callback when an item is completed (optional)
- `onPhotoUpload`: Callback when a photo is uploaded (optional)

## Styling

The component comes with built-in styles that can be imported:

```javascript
import '@scavenger-hunt/react-scavenger-hunt/dist/styles.css';
```

You can also override styles by targeting the component's CSS classes:

```css
.scavenger-hunt {
  /* Your custom styles */
}
```

## Development

To run the library locally:

```bash
npm install
npm run build
```

## Building

To build the library for production:

```bash
npm run build
```

This will create UMD and ES modules in the `dist` folder.
