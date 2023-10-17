import { Application, Assets } from "pixi.js";
import { load } from './newSpine';
// import { load } from './oldSpine';

const spineVersion: 38 | 40 = 40;
const packingType: 'polygons' | 'rectangles' = 'rectangles';
const assetsFolder = `${spineVersion}_json_${packingType}`;

const app = new Application<HTMLCanvasElement>({
  background: "#1099bb",
  resizeTo: window
});

document.body.appendChild(app.view);

Assets.add('spineData', `${assetsFolder}/skeleton.json`);
Assets.add('spineAtlas', `${assetsFolder}/skeleton.atlas`);
Assets.load(['spineData', 'spineAtlas']).then((_) => load(app));

