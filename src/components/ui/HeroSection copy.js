import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function HeroSection() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Load your 3D model (replace with your model path)
        const loader = new GLTFLoader();
        loader.load('path/to/your/robot/model.gltf', (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Implement animation (e.g., waving hand)
            const hand = model.getObjectByName('hand'); // Replace 'hand' with the actual name of the hand part
            hand.rotation.x += 0.1;

            camera.position.z = 5;

            function animate() {
                requestAnimationFrame(animate);
                hand.rotation.x += 0.01;
                renderer.render(scene, camera);
            }

            animate();
        });

        return () => {
            renderer.dispose();
            scene.dispose();
        };
    }, []);

    return (
        <div className="hero-section">
            <div ref={mountRef} />
            <div className="md:w-1/2 p-8">
                <h1 className="text-4xl font-bold text-gray-800">QR2Tech: Your AI-Powered Solution Partner</h1>
                <p className="text-lg text-gray-700 mt-4">
                    QR2Tech is an AI-powered company that excels at problem-solving and developing innovative solutions.
                    From data analysis to web development, we push the boundaries of technology to transform ideas into impactful solutions.
                </p>
            </div>
        </div>
    );
}

export default HeroSection;