// Create the React element
const element = React.createElement('div', null,
    React.createElement('h1', null, 'Test Page'),
    React.createElement(ScavengerHunt.default, {
        title: "Nature Scavenger Hunt",
        description: "Explore the great outdoors with our interactive scavenger hunt"
    })
);

// Create a root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);