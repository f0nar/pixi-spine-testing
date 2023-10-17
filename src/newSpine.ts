import { Application } from "pixi.js";
import { Spine } from "@esotericsoftware/spine-pixi";

export const load = (app: Application) => {
    const spine = Spine.from('spineData', 'spineAtlas');
    app.stage.addChild(spine);

    const bounds = spine.getBounds(true);
  
    spine.scale.set(0.5);
    spine.position.set((app.view.width - bounds.width) / 2, (app.view.height - bounds.height) / 2);
    spine.autoUpdate = true;
    spine.state.setAnimation(0, "animation", true);
};