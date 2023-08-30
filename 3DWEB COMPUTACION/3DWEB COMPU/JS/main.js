/*
Author: Alejandro viteri
Date creation: 23/08/23
Last Modification: 30/08/23
*/

//Creacion elementos
var Scene = null,
    camara = null,
    render = null,
    control = null,
    cube = null,
    torus = null,
    cone = null;
    maximo = 4;
    minimo = -4;

function StartScene() {

    //Scene,camara,render

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, //Angulo de visión (abajo o arriba)

        window.innerWidth / window.innerHeight, // Relacion de aspecto 16:9
        0.1, // Mas cerca
        1000); // Mas lejos

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('app') });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // orbitcontrols
    control = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 0, 5);
    control.update();


    //-- grid

    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);
    //axes
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    animate();
    onWindowResize();
}
    function createGeometry(forms) {
        switch (forms) {
            case "cube":
                const geometry = new THREE.BoxGeometry(1, 1, 1);
                const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
                cube = new THREE.Mesh(geometry, material);
                scene.add(cube);
                cube.position.x= Math.floor((Math.random()*(maximo-minimo+1))+minimo)  //flor: Numero aleatorio ya que el ranom genera aleaotrio tambien pero puede ser decimal entonces podia chocar
                cube.position.z= Math.floor((Math.random()*(maximo-minimo+1))+minimo);

                break;

            case "torus":
                const geometryTorus = new THREE.TorusGeometry(0.8, 0.1, 5, 20);
                const materialTorus = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

                torus = new THREE.Mesh(geometryTorus, materialTorus); scene.add(torus);
                torus.position.x = -4;
                torus.position.x = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);  //flor: Numero aleatorio ya que el ranom genera aleaotrio tambien pero puede ser decimal entonces podia chocar
                torus.position.z = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);

                break;

            case "cone":
                const geometrycone = new THREE.ConeGeometry(0.8, 0.8, 20);
                const materialcone = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
                cone = new THREE.Mesh(geometrycone, materialcone); scene.add(cone);
                cone.position.x = 4;
                cone.position.x = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);  //flor: Numero aleatorio ya que el ranom genera aleaotrio tambien pero puede ser decimal entonces podia chocar
            cone.position.z = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
                break;
        }
        //---- objects ----

        //cube
        /*const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        camera.position.z = 5;

        //torus
        const geometryTorus = new THREE.TorusGeometry(0.8, 0.1, 5, 20);
        const materialTorus = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

        torus = new THREE.Mesh(geometryTorus, materialTorus); scene.add(torus);

        torus.position.x = -4;

        //cone
        const geometrycone = new THREE.ConeGeometry(0.8, 0.8, 20);
        const materialcone = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

        cone = new THREE.Mesh(geometrycone, materialcone); scene.add(cone);
        cone.position.x = 4;*/
    }





function animate() {
    requestAnimationFrame(animate);
    control.update();
    renderer.render(scene, camera);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.01;

    // cone.rotation.x += 0.01;
    // cone.rotation.y += 0.01;


}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}