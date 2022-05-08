# Embroidered Protections: words

## About the project
One side of each sister quilt contains a list of words relating to women's safety and solidarity embroidered in glow-in-the-dark thread along the disrupted True Lovers' Knot (UK) or water path (Turkey). It was important to preserve a mix of both languages on each quilt to maintain the link between the two countries and quilt. We also wanted to mirror the words on each of the sister quilts, so the order of words is the same on both, with the language swapped. To decide which words to attribute to the quilts, we wrote several version of an algorithm to output a list for us to use.

### Version 1
Version 1 reads the `Position` field in the data file and preserves the order of the words according to that position. It then picks either the English or Turkish version of the word to assign to the English quilt, then picks the same word in the opposite language for the Turkish quilt.

While this version gave us more choice picking the position of a particular word, we found an imbalance in the English/Turkish translation ratio.

### Version 2
Version 2 does away with reading the Position from the data file, and instead randomly mixes the words. It also introduces a 50/50 ratio of English to Turkish words on each quilt, for more balance.

## How to run locally
This requires a local installation of NodeJS and npm to run
1. Clone the repo and run `npm install`
2. `npm start` will automatically run Version 2 (the latest) and output a random-ordered list of words in the terminal window.

To get an output for Version 1, use `npm run start-v1`.