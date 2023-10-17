import { Application, Assets } from "pixi.js";

const useOldSpine = true;
const spineVersion: 38 | 40 = 40;
const packingType: 'polygons' | 'rectangles' = 'rectangles';
const assetsFolder = `${spineVersion}_json_${packingType}`;

const run = async () => {
  const { load: loadSpine } = await (
    useOldSpine ?
      import(`./oldSpine`) :
      import(`./newSpine`)
  ); 

  const app = new Application<HTMLCanvasElement>({
    background: "#1099bb",
    resizeTo: window
  });
  
  document.body.appendChild(app.view);

  Assets.add('spineData', `${assetsFolder}/skeleton.json`);
  Assets.add('spineAtlas', `${assetsFolder}/skeleton.atlas`);
  await Assets.load(['spineData', 'spineAtlas']).then(console.log);

  loadSpine(app);
};

run();
