# Embroidered Protections: AR prototype

## About the project
Another digital aspect of the sister quilts, is to reveal layers of data by allowing some of the embroidery to be scanned with a WebAR application.

## How it works
Augmented Reality (commonly known as AR) is a way to digitally layer information over a physical object or environment via a smart device, such as a smartphone or tablet. Our sister quilts use a specific sector of AR, Web AR, which is available via an Internet browser, without the need for specific applications or equipment. The mechanism to reveal digital content usually relies on recognisable markers: these can be patterns (bold black and white geometric shapes akin to QR codes) or even images, provided they have enough distinct features.

This project uses node and [AR.js](https://aframe.io/blog/arjs/) and Natural Feature Tracking (meaning it can recognise images).

### Create your own markers
To create markers from photographs, we generate a set of data files with the [Maker Creator](https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers). For our Anatolian symboles, these can be found in 
`public/markers`. The associated images are in `public/images`. To create your own markers you will need a local download of the Maker Creator and clear pictures with enough distinct features.

### Run locally
This requires a local installation of NodeJS and npm to run
1. Clone the repo and run `npm i`
2. Run `npm start`
3. Visit `localhost:2022`
4. Click `SCAN` and allow any prompts, you can then present one of the registered images to your webcam to be recognised.

To modify the markers, edit any of the URLs in `public/views/ar-app.hbs` to match your own created markers.

Note: While developing locally, you might find it easier to expose your local host with [ngrok](https://ngrok.com) to be able to scan via a mobile device.

### Demo

https://user-images.githubusercontent.com/3882381/167289733-2f4d6a06-e259-4c8f-8b0c-6ab03da2a916.mp4

