# React Scavenger Hunt Component

A reusable React component for creating scavenger hunt applications. This library provides a fully functional scavenger hunt interface that can be easily integrated into any React project.

## Installation

Install using npm:
```bash
npm install @scavenger-hunt/react-scavenger-hunt
```

## Usage

### Using as a UMD Module (CDN)

```html
<!-- Include React and React DOM -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Include PropTypes -->
<script src="https://unpkg.com/prop-types/prop-types.min.js"></script>

<!-- Include the Scavenger Hunt component -->
<script src="https://unpkg.com/@scavenger-hunt/react-scavenger-hunt/dist/scavenger-hunt.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@scavenger-hunt/react-scavenger-hunt/dist/scavenger-hunt.css">

<script>
// Create a container
const container = document.getElementById('root');

// Create the React element
const element = React.createElement('div', null,
    React.createElement('h1', null, 'Test Scavenger Hunt'),
    React.createElement(ScavengerHunt.default, {
        title: "Nature Scavenger Hunt",
        description: "Explore the great outdoors with our interactive scavenger hunt"
    })
);

// Create a root and render
const root = ReactDOM.createRoot(container);
root.render(element);
</script>
```

### Using as an ES Module

```javascript
import ScavengerHunt from '@scavenger-hunt/react-scavenger-hunt';
import '@scavenger-hunt/react-scavenger-hunt/dist/scavenger-hunt.css';

function App() {
  return (
    <div>
      <h1>Test Scavenger Hunt</h1>
      <ScavengerHunt
        title="Nature Scavenger Hunt"
        description="Explore the great outdoors with our interactive scavenger hunt"
      />
    </div>
  );
}
```

### Props

The `ScavengerHunt` component accepts the following props:

- `title`: string - Title of the scavenger hunt (optional, defaults to "Scavenger Hunt")
- `description`: string - Description text (optional, defaults to "Find and complete all items in the list")

## Features

- Dynamic item generation based on user preferences
- Progress tracking
- Modern and responsive UI
- Customizable styling
- TypeScript support

## Development

To run the library locally:

```bash
npm install
npm run build
```

This will create the following files in the `dist` directory:
- `scavenger-hunt.umd.js` - UMD module
- `scavenger-hunt.css` - Component styles

You can test the library by running:

```bash
npm run setup-test
npm run test:serve
```

The `setup-test` script will:
1. Build the library
2. Copy the built files to the test-app directory
3. Copy any test-specific files

The `test:serve` script will start a local server at http://localhost:3000 where you can test the component.

## Available Scripts

In the project directory, you can run:

### `npm run build`
Builds the library for production to the `dist` folder.

### `npm run setup-test`
Builds the library and sets up the test environment by copying necessary files to the test-app directory.

### `npm run test:serve`
Starts a local server to test the component at http://localhost:3000.

### `npm run lint`
Runs ESLint on the source files.

## Building

To build the library for production:

```bash
npm run build
```

This will create UMD and ES modules in the `dist` folder.

## License

MIT

## Version History

- 2.0.0: Complete rewrite with TypeScript support and improved component architecture
- 1.0.0: Initial release with basic scavenger hunt functionality
