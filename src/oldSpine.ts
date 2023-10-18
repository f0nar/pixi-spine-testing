import "pixi-spine";
import { Application, Assets } from "pixi.js";
import { Spine } from "pixi-spine";

export const load = (app: Application) => {
  const spineResource = Assets.get('spineData');
  const spine = new Spine(spineResource.spineData);
  app.stage.addChild(spine);

  const bounds = spine.getBounds(true);
  
  spine.position.set((app.view.width - bounds.width) / 2 - bounds.left, (app.view.height - bounds.height) / 2 - bounds.top);
  spine.state.setAnimation(0, "animation", true);
  spine.autoUpdate = true;
};