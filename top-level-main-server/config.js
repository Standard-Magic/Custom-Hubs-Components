// create a config object for reading in hubs configured for injecting scripts
// regular slides images
// https://localhost:8080/hub.html?hub_id=2MCVA2f  
// google slides
// https://localhost:8080/hub.html?hub_id=8T88rLN

// is a good hub for testing components
var config = {};

config.hubsarray = [
	{hub_id: '2MCVA2f', urls:'https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/slideconfig.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-slide-show.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js'},
	{hub_id: '8T88rLN', urls:'https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-google-slideshow.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/gslides-kicker.js'},
	{hub_id: '5HsuTZ2', urls:'https://colinfizgig.github.io/Custom-Hubs-Components/components/slideconfig.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/hubs-slide-show.js'},
	{hub_id: 'kBquF8A', urls:'https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js'},
	{hub_id: 'DVeQzPW', urls:'https://colinfizgig.github.io/Custom-Hubs-Components/components/camera-cube-env.js,https://colinfizgig.github.io/Custom-Hubs-Components/components/interactable-ball.js'}
	];

module.exports = config;
