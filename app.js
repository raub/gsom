'use strict';

const node3d = require('node-3d-qml-raub');

const camera = new node3d.three.PerspectiveCamera( 75, node3d.canvas.width / node3d.canvas.height, 1, 1000 );
camera.position.z = 500;

const scene = new node3d.three.Scene();

node3d.qml.init({
	three   : node3d.three,
	document: node3d.doc,
	canvas  : node3d.canvas,
	gl      : node3d.gl,
	renderer: node3d.renderer,
	scene   : scene,
	overlay : true,
});

const ui = node3d.qml.used({file:'gui/main.qml'});




// const texture1  = node3d.loadTexture('tex.jpg');
// const geometry1 = new node3d.three.IcosahedronGeometry(200, 1);
// const material1 = new node3d.three.MeshLambertMaterial({
// 	color: 0xffffff,
// 	map  : texture1,
// });
// const mesh1 = new node3d.three.Mesh(geometry1, material1);
// scene.add( mesh1 );
// mesh1.position.x = -250;

// const texture2  = node3d.loadTexture('tex.png');
// const geometry2 = new node3d.three.IcosahedronGeometry(200, 1);
// const material2 = new node3d.three.MeshLambertMaterial({
// 	color: 0xffffff,
// 	map  : texture2,
// });
// const mesh2 = new node3d.three.Mesh(geometry2, material2);
// scene.add( mesh2 );
// mesh2.position.x = 250;

// const pointLight = new node3d.three.PointLight(0xFFFFFF, 1, 100000);
// scene.add( pointLight );
// pointLight.position.x = 200;
// pointLight.position.y = 2000;
// pointLight.position.z = 500;


function animation() {
	
	// mesh1.rotation.x = Date.now() * 0.00004;
	// mesh1.rotation.y = -Date.now() * 0.0001;
	// mesh2.rotation.x = Date.now() * 0.00003;
	// mesh2.rotation.y = Date.now() * 0.0002;
	
	ui.update();
	node3d.qml.release();
	node3d.renderer.render(scene, camera);
	
}

// while (1){
// 	node3d.frame(animation);
// }

setInterval(() => node3d.frame(animation),1);
