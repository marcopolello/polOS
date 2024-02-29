## 🌌 **polOS** 🌌

# System 🧠

### [File System](https://github.com/jvilk/BrowserFS)

- File Explorer
  - Back, Forward, Recent locations, Up one level, Address bar, Search
- [Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) File Support (internal & external)
  - Loading progress dialog
- ZIP ([write support](https://www.npmjs.com/package/fflate)), [ZIP](https://github.com/jvilk/BrowserFS/blob/master/src/backend/ZipFS.ts)/[ISO](https://github.com/jvilk/BrowserFS/blob/master/src/backend/IsoFS.ts) read support, [7Z/GZ/RAR/TAR/etc. extract](https://github.com/use-strict/7z-wasm) support
- Writes to [IndexedDb](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- Group selection/manipulation & drag to sort/arrange
- Dynamic and auto cached icons for [music](https://github.com/Borewit/music-metadata-browser), images, video & emulator states
- Context Menus
  - Cut, Copy, Create shortcut, Delete, Rename
  - [Add file(s)](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications), [Map directory](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
  - Open with options/dialog, Open file/folder location, Open in new window, Open Terminal here
  - Download, Add to archive, Extract here, Set as wallpaper, Convert audio/video/photo/spreadsheets, Properties (w/Details)
  - Sort by, New Folder, New Text Document
  - Screen Capture
- Keyboard Shortcuts
  - CTRL+C, CTRL+V, CTRL+X, CTRL+A, Delete
  - F2, F5, Backspace, Arrows, Enter
  - SHIFT+CTRL+R, SHIFT+F10, SHIFT+F12
  - In Fullscreen: Windows Key, Windows Key + R
- File information tooltips
- Allow sorting by name, size, type or date
  - Persists icon position/sort order

### Windows

- [Resizable and Draggable](https://github.com/bokuweb/react-rnd)
- Minimize, Maximize & Close
- Persists size/position/maximized states
- [Animates](https://www.framer.com/motion/) opening and closing

### Start Menu

- Expandable Sidebar
  - Apps list, Documents/Pictures/Videos shortcuts, Power (clears session)
- Spotlight visual effect
- Folder support
- Keyboard shortcut opens with **_SHIFT+ESC_**
  - Or Windows Key when in fullscreen

### Taskbar

- [Peek](https://github.com/bubkoo/html-to-image) hover preview of windows
- Focused window indicator
- Search menu (w/Recent files)

### Clock

- Runs in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
  - Drawn in an [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)
- NTP server time mode ([ntp.js](http://www.ntpjs.org/))
- Synced to system clock on load
- Date tooltip
- Calendar popup

### Background

- Dynamic animated wallpapers ([OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)/[Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers))
  - [Waves](https://www.vantajs.com/?effect=waves)
  - [Hexells](https://znah.net/hexells/)
  - [Matrix](https://rezmason.github.io/matrix/)
  - [Coastal Landscape](https://www.shadertoy.com/view/fstyD4)
- Set via image/video (Fill, Fit, Stretch, Tile, Center)
- Picture Slideshow
- [Astronomy Picture of the Day](https://api.nasa.gov/#apod)
- AI Generated Wallpapers [Stable Diffusion](https://stability.ai/stable-diffusion)

### URL

- Query parameter loading
  - Examples:
    - `/?url=/CREDITS.md`
    - `/?app=Browser`

# Apps 🧪

- Runs 16/32-bit Windows applications

- Loads websites (_w/CORS support_)
- Bookmark bar
- Favicon support
- Back/Forward & Reload
- Google search via Address bar
- IPFS protocol support
- [chrome://dino](https://github.com/wayou/t-rex-runner) game

### [DevTools](https://eruda.liriliri.io/)

- Console, Elements, Network, Resources, Sources, DOM
- Activate from Start Menu or **_SHIFT+F12_**

- Plays console game roms

### [IRC](https://kiwiirc.com/)

- Internet Relay Chat Client
- Connects over WebSockets

- DOS emulator
- Automatic save states on close
  - /Users/Public/Snapshots
- Automatic window resize

- Markdown Viewer

### Messenger

- Encrypted direct messaging client
- Utilizes [Nostr Protocol](https://nostr.com/) ([NIP-04](https://github.com/nostr-protocol/nips/blob/master/04.md))
- Automatic public/private key creation

### [Monaco Editor](https://microsoft.github.io/monaco-editor/)

- Code/text editor
- Supports all file types
- Save files via **_CTRL+S_**
- Line count, cursor position, language id
- [Prettier](https://prettier.io/) formatting
  - json, js/ts, css/sass/less, html, markdown

### [Paint](https://github.com/1j01/jspaint)

- Create & edit images

### [PDF](https://mozilla.github.io/pdf.js/)

- Render/Print PDF's
- Page current/count & Zoom

### Photos

- [Supported Formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats)
  - [JPEG XL](https://github.com/niutech/jxl.js) (**_.jxl_**)
  - [QOI](https://gist.github.com/nicolaslegland/f0577cb49b1e56b729a2c0fc0aa151ba) (**_.qoi_**)
  - [TIFF](https://github.com/photopea/UTIF.js) (**_.tif, .tiff_**)
- Fullscreen & [Zoom](https://github.com/anvaka/panzoom)

### [Ruffle](https://ruffle.rs/)

- Flash Player emulator

### [Stable Diffusion](https://stability.ai/stable-diffusion)

- Creates 512x512 images using artificial intelligence
- Runs locally using [WebSD](https://mlc.ai/web-stable-diffusion/)

### [Terminal](https://xtermjs.org/)

- File system support
- Autocomplete & history
- Pipe commands together
- Command list via `help`
- [Git support](https://isomorphic-git.org/) (checkout & clone)
- [Python support](https://pyodide.org/) (**_.py_**)
- [WebAssembly Package Manager](https://wapm.io/)
  - Ex: `wapm cowsay moo` ([\#](https://wapm.io/package/cowsay))
- [Weather information](https://wttr.in/)
- [eSheep](https://adrianotiger.github.io/web-esheep/)
- Activate from Start Menu or **_SHIFT+F10_**
- Neofetch

### [TinyMCE](https://www.tiny.cloud/tinymce/)

- Read & WYSIWYG modes
- File save support

### [Virtual x86](https://copy.sh/v86/)

- x86 emulator
- Automatic save states on close
  - /Users/Public/Snapshots
- Automatic window resize

### [Video Player](https://videojs.com/)

- [Supported Formats](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs)
- Plays [YouTube](https://github.com/videojs/videojs-youtube) videos/shortcuts
- Keyboard Shortcuts (Volume, Seek, Scale, Fullscreen)

### [Vim](https://github.com/coolwanglu/vim.js)

- Code/text editor
- Supports all file types

### [Webamp](https://webamp.org/)

- Winamp audio player
- [Skin support](https://skins.webamp.org/)
- Playlist & streaming support
- Visualization support (["Milkdrop"](https://github.com/jberg/butterchurn))

# Games 🎮

### [ClassiCube](https://www.classicube.net/)

- Minecraft Classic compatible client

### [DX-Ball](https://habr.com/en/post/147339/)

- Block breaker arcade game like Arkanoid

### [Space Cadet Pinball](https://github.com/alula/SpaceCadetPinball)

- Reverse engineering of 3D Pinball from Windows

### [Quake III Arena](https://github.com/lrusso/Quake3)

- Port of the classic first-person shooter

# Try It 🚀

##### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/)

##### Development

```
yarn install
yarn build:prebuild
yarn dev
```

##### Production

```
yarn install
yarn build
yarn serve
```

##### Docker

```
docker build -t polos .
docker run -dp 3000:3000 --rm --name polos polos
```

##### Notes

- If during `yarn install` you receive the error `digital envelope routines::unsupported`, you need to set `NODE_OPTIONS` to `--openssl-legacy-provider`

-export NODE_OPTIONS=--openssl-legacy-provider in your project root