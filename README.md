# Lit-Element Demo

```
npm install
npm run build
npm start
```

## Prepare Typescript

* tsc --init

Make the following changes to tsconfig.json

* target = "es2015"
* module = "es2015"
* Uncomment moduleResolution = 'node'
* Uncomment experimentalDecorators = 'true'

* Add major option "include" - array with "./src/components/**/*"
* Add major option "exclude" -- array with 'node_modules'

<pre>
    "include": [
        "./src/components/**/*"
    ],
    "exclude": [
        "node_modules"
    ],
</pre>