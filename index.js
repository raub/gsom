'use strict';

const core3d = require('3d-core-raub');
const qml3d = require('3d-qml-raub');

qml3d(core3d);


const { qml, Screen, loop, gl, Points, doc } = core3d;
const { View, Overlay } = qml;

const screen = new Screen();


const F_KEY = 70;

doc.on('keydown', e => {
	if (e.keyCode === F_KEY && e.ctrlKey && e.shiftKey) {
		screen.mode = 'windowed';
	} else if (e.keyCode === F_KEY && e.ctrlKey && e.altKey) {
		screen.mode = 'fullscreen';
	} else if (e.keyCode === F_KEY && e.ctrlKey) {
		screen.mode = 'borderless';
	}
});


const texture1 = new core3d.three.TextureLoader().load( __dirname + '/tex.jpg' );
const geometry1 = new core3d.three.IcosahedronGeometry(200, 1);
const material1 = new core3d.three.MeshLambertMaterial({
	color: 0xffffff,
	map  : texture1,
});
const mesh1 = new core3d.three.Mesh(geometry1, material1);
screen.scene.add( mesh1 );
mesh1.position.x = -250;

const texture2 = new core3d.three.TextureLoader().load( __dirname + '/tex.png' );
const geometry2 = new core3d.three.IcosahedronGeometry(200, 1);
const material2 = new core3d.three.MeshLambertMaterial({
	color: 0xffffff,
	map  : texture2,
});
const mesh2 = new core3d.three.Mesh(geometry2, material2);
screen.scene.add( mesh2 );
mesh2.position.x = 250;

const pointLight = new core3d.three.PointLight(0xFFFFFF, 1, 100000);
screen.scene.add( pointLight );
pointLight.position.x = 200;
pointLight.position.y = 2000;
pointLight.position.z = 500;




const VBO_SIZE = 10000;

const vertices = [];
const colors = [];
for (let i = VBO_SIZE * 3; i > 0; i--) {
	vertices.push( Math.random() * 2000 - 1000 );
	colors.push( Math.random() );
}

const pos = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, pos);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

const rgb = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, rgb);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

const points = new Points({
	
	screen,
	
	count: VBO_SIZE,
	
	attrs: {
		
		position: {
			vbo: pos,
			items: 3,
		},
		
		color: {
			vbo: rgb,
			items: 3,
		},
		
	},
	
});


const ui = new View({
	width: screen.w,
	height: screen.h,
	file: `${__dirname}/gui/menu.qml`,
});

doc.on('mousedown', ui.mousedown.bind(ui));
doc.on('mouseup', ui.mouseup.bind(ui));
doc.on('mousemove', ui.mousemove.bind(ui));
doc.on('keydown', ui.keydown.bind(ui));
doc.on('keyup', ui.keyup.bind(ui));
doc.on('wheel', ui.wheel.bind(ui));

new Overlay({ screen, view: ui });


let isRotating = false;
let mouse = { x: 0, y: 0 };

ui.on('mousedown', () => isRotating = true);
ui.on('mouseup', () => isRotating = false);


ui.on('mousemove', e => {
	
	const dx = mouse.x - e.x;
	const dy = mouse.y - e.y;
	
	mouse.x = e.x;
	mouse.y = e.y;
	
	if ( ! isRotating ) {
		return;
	}
	
	points.mesh.rotation.y += dx * 0.001;
	points.mesh.rotation.x += dy * 0.001;
	
});


loop(() => screen.draw());
