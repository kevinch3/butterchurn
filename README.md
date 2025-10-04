# Butterchurn

Butterchurn is a WebGL implementation of the Milkdrop Visualizer


## [Try it out](https://butterchurnviz.com)

[![Butterchurn Screenshot](preview.png)](https://butterchurnviz.com)

## Usage

### Installation

With [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/) or [npm](https://npmjs.org/) installed, run

    $ pnpm add butterchurn butterchurn-presets
    or
    $ yarn add butterchurn butterchurn-presets
    or
    $ npm install butterchurn butterchurn-presets

### Create a visualizer

```JavaScript
import butterchurn from 'butterchurn';
import butterchurnPresets from 'butterchurn-presets';

// initialize audioContext and get canvas

const visualizer = butterchurn.createVisualizer(audioContext, canvas, {
  width: 800,
  height: 600
});

// get audioNode from audio source or microphone

visualizer.connectAudio(audioNode);

// load a preset

const presets = butterchurnPresets.getPresets();
const preset = presets['Flexi, martin + geiss - dedicated to the sherwin maxawow'];

visualizer.loadPreset(preset, 0.0); // 2nd argument is the number of seconds to blend presets

// resize visualizer

visualizer.setRendererSize(1600, 1200);

// render a frame

visualizer.render();
```

## Local browser demo

The repository includes a rich demo (`examples/demo.html`) that now runs entirely from local assets and showcases the three input modes:

* **Micrófono** *(modo predeterminado)* &mdash; solicita permiso al usuario y reproduce el audio del micrófono en tiempo real.
* **Archivo** &mdash; permite cargar uno o varios archivos locales.
* **WebSocket** &mdash; consume datos parametrizados enviados por sensores o dispositivos IoT.

### Ejecutar el demo localmente

```bash
npm install
npm run build        # recompila butterchurn y genera dist/butterchurn.js
npm run demo:prepare   # copia los assets necesarios a examples/vendor
npm run demo:serve     # sirve el proyecto en http://localhost:8080
npm run demo:thumbnails # genera miniaturas GIF de 120x68 para cada preset
```

Luego abre `http://localhost:8080/examples/demo.html`.

Notas destacadas:

* La reproducción inicia en pausa, el modo autorreproducción está desactivado por defecto y solo se habilita cuando el visualizador está corriendo.
* En pantalla completa la botonera desaparece automáticamente tras un segundo de inactividad y vuelve a mostrarse al mover el cursor o tocar la pantalla.
* Cada modo muestra una nota contextual con instrucciones (permiso de micrófono, formato de payload WebSocket, etc.).

### WebSocket: formato esperado

Activa **WebSocket**, introduce la IP/host y el puerto del servidor y pulsa **Conectar**. Cada mensaje debe ser JSON y puede incluir:

* Arrays de muestras (`timeDomain`, `timeDomainL`, `timeDomainR`, `samples`, `samplesL`, `samplesR`, `left`, `right`) en `0-255` o `-1.0` a `1.0`.
* Overrides por banda (`levels.bass`, `levels.mid`, `levels.treb` y sus variantes `_att`).
* `elapsedTime` opcional para animaciones dependientes de tiempo.

Ejemplo mínimo:

```json
{
  "levels": { "bass": 1.2, "mid": 0.9 },
  "samplesL": [128, 140, 137, 132],
  "samplesR": [128, 135, 139, 131]
}
```

Si no se envían muestras, el demo sintetiza una forma de onda a partir de los niveles.

Un mock basado en ESP32 con micrófono que publica este tipo de mensajes puede encontrarse en [github.com/espressif/esp-box](https://github.com/espressif/esp-box/tree/master/examples/voice_recognition).

### Publicar en GitHub Pages

1. `npm install`
2. `npm run build`
3. `npm run demo:prepare`
4. `npm run demo:thumbnails`
5. `npm run deploy:demo`

El script publica el contenido de `examples/` (incluyendo los assets locales generados) en la rama `gh-pages`, quedando disponible en `https://<tu-usuario>.github.io/butterchurn/examples/demo.html`.

### Browser Support

Butterchurn requires the [browser support WebGL 2](https://caniuse.com/#feat=webgl2).

You can test for support using our minimal isSupported script:

```Javacript
import isButterchurnSupported from "butterchurn/lib/isSupported.min";

if (isButterchurnSupported()) {
  // Load and use butterchurn
}
```

## Integrations
* [Webamp](https://github.com/captbaritone/webamp), the fantastic reimplementation of Winamp 2.9 in HTML5 and Javascript, built by [captbaritone](https://github.com/captbaritone)
* [Butterchurn Extension](https://chrome.google.com/webstore/detail/butterchurn-music-visuali/jfdmelgfepjcmlljpdeajbiiibkehnih), use Butterchurn to visualize the audio from any page
* [Rekt Networks](https://nightride.fm/#Mathdrop), Live DJs, Archives & Exclusive Releases, built by [Zei](https://twitter.com/TheRektNetwork)
* [mStream](http://mstream.io/), your personal music streaming server, built by [IrosTheBeggar](https://github.com/IrosTheBeggar)
* [pasteur](https://www.pasteur.cc/), trippy videos generated from your music, built by [markneub](https://github.com/markneub)
* [ChromeAudioVisualizerExtension](https://chrome.google.com/webstore/detail/audiovisualizer/bojhikphaecldnbdekplmadjkflgbkfh), put on some music and turn your browsing session into a party! built by [afreakk](https://github.com/afreakk)
* [Karaoke Forever](https://www.karaoke-forever.com), an open karaoke party system, built by [bhj](https://github.com/bhj)
* [Syqel](https://syqel.com/), the World's Best AI Powered Music Visualizer


## Thanks

* [Ryan Geiss](http://www.geisswerks.com/) for creating [MilkDrop](http://www.geisswerks.com/about_milkdrop.html)
* Nullsoft for creating [Winamp](http://www.winamp.com/)
* All the amazing preset creators, special thanks to [Flexi](https://twitter.com/Flexi23)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
