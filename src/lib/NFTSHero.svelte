
<script>
import { onMount } from 'svelte';
import potion from '../assets/potion.png';
import backpack from '../assets/backpack.png';
import lands from '../assets/lands.png';
import character from '../assets/character.png';




onMount(async () => {
    const displacementSlider = function (opts) {

  let vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

  let fragment = `
        
        varying vec2 vUv;

        uniform sampler2D currentImage;
        uniform sampler2D nextImage;

        uniform float dispFactor;

        void main() {

            vec2 uv = vUv;
            vec4 _currentImage;
            vec4 _nextImage;
            float intensity = 0.3;

            vec4 orig1 = texture2D(currentImage, uv);
            vec4 orig2 = texture2D(nextImage, uv);
            
            _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

            _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

            vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

            gl_FragColor = finalTexture;

        }
    `;

  let images = opts.images,image,sliderImages = [];;
  let canvasWidth = images[0].clientWidth;
  let canvasHeight = images[0].clientHeight;
  let parent = opts.parent;
  let renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  let renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  let renderW, renderH;

  if (renderWidth > canvasWidth) {
    renderW = renderWidth;
  } else {
    renderW = canvasWidth;
  }

  renderH = canvasHeight;

  let renderer = new THREE.WebGLRenderer({
    antialias: false });


  renderer.setPixelRatio(window.devicePixelRatio);
    renderer = new THREE.WebGLRenderer( { alpha: true } );
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(renderW, renderH);
  parent.appendChild(renderer.domElement);

  let loader = new THREE.TextureLoader();
  loader.crossOrigin = "anonymous";

  images.forEach(img => {

    image = loader.load(img.getAttribute('src') + '?v=' + Date.now());
    image.magFilter = image.minFilter = THREE.LinearFilter;
    image.anisotropy = renderer.capabilities.getMaxAnisotropy();
    sliderImages.push(image);

  });

  let scene = new THREE.Scene();
 
  let camera = new THREE.OrthographicCamera(
  renderWidth / -2,
  renderWidth / 2,
  renderHeight / 2,
  renderHeight / -2,
  1,
  1000);


  camera.position.z = 1;

  let mat = new THREE.ShaderMaterial({
    uniforms: {
      dispFactor: { type: "f", value: 0.0 },
      currentImage: { type: "t", value: sliderImages[0] },
      nextImage: { type: "t", value: sliderImages[1] } },

    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
    opacity: 1.0 });


  let geometry = new THREE.PlaneBufferGeometry(
  parent.offsetWidth,
  parent.offsetHeight,
  1);

  let object = new THREE.Mesh(geometry, mat);
  object.position.set(0, 0, 0);
  scene.add(object);

  let addEvents = function () {

    let pagButtons = Array.from(document.getElementById('pagination').querySelectorAll('button'));
    let isAnimating = false;

    pagButtons.forEach(el => {

      el.addEventListener('click', function () {

        if (!isAnimating) {

          isAnimating = true;

          document.getElementById('pagination').querySelectorAll('.active')[0].className = '';
          this.className = 'active';

          let slideId = parseInt(this.dataset.slide, 10);

          mat.uniforms.nextImage.value = sliderImages[slideId];
          mat.uniforms.nextImage.needsUpdate = true;

          TweenLite.to(mat.uniforms.dispFactor, 1, {
            value: 1,
            ease: 'Expo.easeInOut',
            onComplete: function () {
              mat.uniforms.currentImage.value = sliderImages[slideId];
              mat.uniforms.currentImage.needsUpdate = true;
              mat.uniforms.dispFactor.value = 0.0;
              isAnimating = false;
            } });


          let slideTitleEl = document.getElementById('slide-title');
          let slideStatusEl = document.getElementById('slide-status');
          let nextSlideTitle = document.querySelectorAll(`[data-slide-title="${slideId}"]`)[0].innerHTML;
          let nextSlideStatus = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML;

          TweenLite.fromTo(slideTitleEl, 0.5,
          {
            autoAlpha: 1,
            y: 0 },

          {
            autoAlpha: 0,
            y: 20,
            ease: 'Expo.easeIn',
            onComplete: function () {
              slideTitleEl.innerHTML = nextSlideTitle;

              TweenLite.to(slideTitleEl, 0.5, {
                autoAlpha: 1,
                y: 0 });

            } });


          TweenLite.fromTo(slideStatusEl, 0.5,
          {
            autoAlpha: 1,
            y: 0 },

          {
            autoAlpha: 0,
            y: 20,
            ease: 'Expo.easeIn',
            onComplete: function () {
              slideStatusEl.innerHTML = nextSlideStatus;

              TweenLite.to(slideStatusEl, 0.5, {
                autoAlpha: 1,
                y: 0,
                delay: 0.1 });

            } });


        }

      });

    });

  };

  addEvents();

  window.addEventListener('resize', function (e) {
    renderer.setSize(renderW, renderH);
  });

  let animate = function () {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  };
  animate();
};

imagesLoaded(document.querySelectorAll('img'), () => {

  document.body.classList.remove('loading');

  const el = document.getElementById('slider');
  const imgs = Array.from(el.querySelectorAll('img'));
  new displacementSlider({
    parent: el,
    images: imgs });


});
});

    </script>
<section id="NFTHero">
<main>
		<div id="slider">

			<div class="slider-inner">
				<div id="slider-content">
					<div class="meta">NFTS</div>
					<h2 id="slide-title">Synergies</h2>
					<span data-slide-title="0">Synergies</span>
					<span data-slide-title="1">Skins</span>
					<span data-slide-title="2">Equipment</span>
					<span data-slide-title="3">Lands</span>
					<div style="display:none;" class="meta">Status</div>
					<div id="slide-status">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </div>
					<span data-slide-status="0">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </span>
					<span data-slide-status="1">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </span>
					<span data-slide-status="2">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </span>
					<span data-slide-status="3">All items in Skylandia, from resources and consumables to castles, lands, sieges weapons, and mythical creatures, are tradable NFTs. Being a competitive game powerful equipment and other types of items are a must if players want to reach the top and stay there. </span>
				</div>
			</div>

			<img src={potion} alt=""/>
			<img src={character} alt="" />
			<img src={backpack} alt="" />
			<img src={lands} alt="" />

			<div id="pagination">
				<button class="active" data-slide="0"></button>
				<button  data-slide="1"></button>
				<button  data-slide="2"></button>
				<button  data-slide="3"></button>
			</div>

		</div>
	</main>

</section>

<style>
#NFTHero
{
    height:100vh;
    overflow:hidden;
    background-image:url('../assets/NFThero.jpg')
}

main {
  position: relative;
  width: 100%;
  height: 100vh;
}

#slider {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}

#slider img {
  width: 100%;
  max-width: 100%;
  position: relative;
  z-index: 0;
}

.slider-inner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
  z-index: 5;
}

#slider-content {
  padding: 0 10px;
}
#slider-content h2 {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -1px;
  color: white;
  line-height: 30px;
  margin: 0px;
  text-transform:uppercase;
}
@media screen and (min-width: 800px) {
  #slider-content h2 {
    font-size: 45px;
    line-height: 1.5;
  }
}
#slider-content span {
  display: none;
}
#slider-content .meta {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 5px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
}
@media screen and (min-width: 800px) {
  #slider-content .meta {
    font-size: 13px;
  }
}
#slider-content .meta:after {
  content: "";
  display: block;
  position: absolute;
  top: 5px;
  right: -55px;
  width: 45px;
  height: 2px;
  background-color: #fff;
}
#slider-content #slide-status {
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  color: white;
  max-width:400px;
}
@media screen and (min-width: 800px) {
  #slider-content #slide-status {
    font-size: 16px;
  }
}


@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}


@media (max-width:768px)
{
  #slider {
  width: 90%;

}

#slider img {
  width: 100%;
  max-width: 100%;
  position: relative;
  z-index: 0;
}

.slider-inner {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

#slider-content {
  padding: 0 10px;
  position:relative;
  top:50%;
}
#slider-content div {
font-size:15px !important;
}
#slider-content h2 {
  font-weight: bold;
  font-size: 40px !important;
  letter-spacing: -1px;
  margin-bottom:20px;
}
#slider-content .meta
{
margin-bottom:15px;
}
:global(#slider canvas) {
    position: absolute;
   /* width:150vw !important;
    height:150.76vw !important; */
    top: 35% !important;
    left: 55% !important;
    transform: translate(-50%, -50%);
    z-index: 2;
}
#pagination {
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    left: 20px;
    z-index: 6;
}
}
    </style>