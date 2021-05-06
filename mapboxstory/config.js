var config = {
   <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Jonni's 3D World</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<script src="mapbox-gl-dev.js"></script>
<link href="mapbox-gl.css" rel="stylesheet" />
<link href='https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.min.css' rel='stylesheet'>
<script src='https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.js'></script>
<style>
body { margin: 0; padding: 0; }

#map {
	  width: 100vw;
      height: 100vh;
      top: 0;
      margin: 0 auto;
      position: relative;
}
</style>
</head>

<body>

<div id="map"></div>

</body> 
<script>


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9ubml3YWxrZXIiLCJhIjoiY2loeG82cWplMDA4N3cxa3MzZXU2N2JpYSJ9.H6vPKI0UKLv733mSCXh2Lw';
    var map = new mapboxgl.Map({
        container: 'map',
        setRenderWorldCopies: 'false',
style: 'mapbox://styles/jonniwalker/cko5mcyze2c2e17mux0j53dbs?fresh=true',
        center: [-122.335167,47.608013],
        zoom: 7,
        pitch: 15,
        renderWorldCopies: false,
    });



map.on('style.load', function() {

map.addLayer({
  'id': 'sky',
  'type': 'sky',
  'paint': {
    'sky-type': 'gradient',
    'sky-gradient': [
      'interpolate',
      ['linear'],
      ['sky-radial-progress'],
      0.8,
      'rgba(291, 0, 68, 1.0)',
      0,
      'white'
    ],
    'sky-gradient-center': [0, 0],
    'sky-gradient-radius': 90,
    'sky-opacity': [
      'interpolate',
      ['exponential', 0.1],
      ['zoom'],
      5,
      0,
      22,
      1
    ]
  }
});


map.addSource('mapbox-dem', {
        "type": "raster-dem",
        "url": "mapbox://mapbox.terrain-rgb",
        "tileSize": 512,
        "maxzoom": 14
    });

map.setTerrain({"source": "mapbox-dem", "exaggeration": 30});
});






</script>
</html>

        }
    ]
};
