

// create illo
let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 10,
    dragRotate: true,
});
  
// ---- model ---- //

let head = new Zdog.Shape({
    addTo: illo,
    stroke: 12,
    color: '#fff',
  });

let eye = new Zdog.Ellipse({
    addTo: head,
    diameter: 2.5,
    stroke: 0.6,
    color: '#636',
    translate: { x: -3.5, y: -0.5,z: 4.5 },
    // hide when front-side is facing back
    backface: false,
  });

  eye.copy({
    translate: { x: 3.5, y: -0.5, z: 4.5 },
  });

  let can = new Zdog.Cylinder({
    addTo: head,
    diameter: 12,
    length: 12,
    stroke: false,
    color: '#333',
    backface: '#333',
    rotate: { x: Zdog.TAU/4 },
    translate: {y: 6}
  });



  // -- animate --- //

function animate() {
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  animate();
