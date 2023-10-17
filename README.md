# pixi-spine-testing

Small example to test all cases before migration from [common pixi-spine](https://github.com/pixijs/spine) to new [spine-pixi implementation](https://github.com/EsotericSoftware/spine-runtimes/tree/4.1/spine-ts/spine-pixi) .

To set up and run code:
```

npm i

npm run dev

```

To manipulate and compare different scenarios you can play with global variables in `index.ts`

```

const useOldSpine = ...;

const spineVersion: 38 | 40 = ...;

const packingType: 'polygons' | 'rectangles' = ...;

```

You can use `public/preview.gif` to have full working version of animation at hand for comparison.
