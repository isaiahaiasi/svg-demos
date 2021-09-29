# SVG LESSON PLANNING

### Cody's Notion outline for writing lessons

[link](https://codyloyd.notion.site/How-I-write-lessons-210ea94af06e441a9df1ec08a8a15112)

### GH Issue overview

[link](https://github.com/TheOdinProject/top-meta/issues/43)

- Benefits of SVG over other formats
- Basic format/syntax
  - be sure to note these aren't actually made by hand, even if they are sometimes edited by hand.
- Basic usage (eg, inline vs imported)
- Sources for SVG icons/images

## Outline

### Introduction

Introduce the topic, their wide-use, and the general scope of the lesson

### Learning Outcomes

- What SVGs, Vector Graphics, and XML are
- How to create simple SVGs and add them to your websites
- How to modify them dynamically
- When to use them, and when to use other image formats
- ???

### What are SVGs and why should I care? (The Basics)

- Definition of "Vector"
- Definition of "XML"

Benefits:
- Filesize is based on complexity, not how many pixels on the screen it takes up
- "Scalable" means that it will look just as good at any size you want
- You can easily generate or modify them dynamically

Use-cases:
- Icons
- Patterned backgrounds
- Graphs/Charts
- Very large, simple images
- Dynamically generated images
- Fancy effects achieved by svg-filters

### Anatomy of an SVG

Time to get our hands dirty! Try playing around a little with the example below:

`<CODEPEN> simple example showing some basic shapes and attributes, as well as css classes that define additional styling </CODEPEN>`

So, what's going on here? Here's a breakdown:

- `<svg>` This is your main component--everything else goes inside here
  - `xmlns` (aka "XML NameSpace"): lets the browser know what version of the language you're using
  - `viewBox`: defines the dimensions of your SVG's "canvas" 
  - ...
- `<circle>`: One of the basic shapes SVGs give you. The others are: ellipse, rect, line, polyline, polygon, and path
- ...

### Embedding SVGs

Common methods:
- img tag: this works just like any other <img>. It's convenient, but limited in functionality.
- css: `background-image: url(./my-svg.svg)` same limitations as `<img>`
- inline: embedding the entire contents of your svg in your html. This unlocks its full potential, but can make your html harder to read, isn't very convenient, makes your page less cacheable, and might delay the rest of your html from loading
- object tag: best of both worlds! (TODO: is it?)

### Programmatic SVGs

Say you want to use an SVG to display a graph of how many people use Node.js compared to Ruby on Rails. It probably wouldn't make sense to make a graph like this in a vector-drawing tool like Adobe Illustrator. Instead, you would probably want to create the image entirely through code, based on what your data looks like.

Luckily, SVGs are just XML elements. And much like you can create HTML elements using `createElement`, the browser provides a method for creating XML elements: `createElementNS`!

(aside): In the real world, you would likely use a library to make this more convenient. However, understanding the underlying API will make you much more confident in what's going on "under the hood", and mean you aren't reliant on any particular library.

Let's start by creating a circle!

First, we need to create our SVG element. Notice how the only different between `createElement` and `createElementNS` is that we need to add the SVG namespace.

~~~javascript
const xmlns = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(xmlns, "svg");
~~~

Next, we add the viewBox attribute to our SVG. Notice how we use the "NS" version of this method as well, but rather than giving it a namespace, we just give it `null`. 

TODO: why is that?

~~~javascript
svg.setAttributeNS(null, "viewBox", "0 0 100 100");
~~~

Then we create our circle in the same way, append it to our svg, and append the svg to the target element in our document!

~~~javascript
const circle = document.createElementNS(xmlns, circle);
circle.setAttributeNS(null, "cx", 50);
circle.setAttributeNS(null, "cy", 50);
circle.setAttributeNS(null, "r", 30);

// notice this is just like working with HTML!
svg.appendChild(circle);
document.querySelector("#svg-container").appendChild(svg);
~~~



## Talking Points
- What are they?
  - small EXAMPLES of both graphic & XML representation
  - (I CAN embed codepens, so maybe present a few simple SVGs and prompt readers to just play around with the raw SVG to get an idea for how different properties and values effect them)
- Why use them?
  - Icons/Logos
  - Charts/Graphs
  - Patterns/backgrounds
  - Simple UI elements that don't fit into normal html/css tools
  - Fancy (but still accessible) text!
  - Graphics that you want to change dynamically
- HOW to use them?
  - anatomy of an SVG
    - xmlns? 
  - basic properties
  - inline, vs `<img>` vs css import
- EXAMPLE exercise
- When NOT to use them?
- Where to find/make them?
- Addendum: Advanced usage
  - Styling (move up?)
  - Animating properties
  - Using SVG filters
- MINI-PROJECT: It's your big break! The New York Times has hired YOU to make some graphs to go along with a headline story. Although we often think of SVGs as being used for purely aesthetic purposes, they often play a vital role in communicating information as well.
  - Choose a common type of graph: a Bar Graph or a Line Graph
  - Should be *dynamic*--you should be able to give it any properly-formatted data, and have it spit out an accurate graph
  - It can look any way you want, but there are a few important features a graph should have:
    - The *variance* of the data should be visible. If your data points are 100, 101, and 102, and you show it on a scale of 0-200, no one's going to be able to read it!
    - The x & y axes should be visually represented.
    - The axes should be labeled.
  - STRETCH: animations!
- Additional Resources
  - SVG editors:
    - [*Awesome* SVG editor that not only shows the XML, but also lets you see the "commands" you're using to generate the SVG](https://yqnn.github.io/svg-path-editor/)
  - SVG Libraries
    - Two major modern "general-purpose" SVG libraries: [snap.svg](http://snapsvg.io/) and [SVG.js](https://svgjs.dev/docs/3.0/)
    - [d3 (charts & graphs)](https://d3js.org/)
  - Advanced resources:
    - [SVG Filters and Why They're Awesome :D](https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/)

### Dialectic
- What are SVGs?
  - Vectors written in XML format
    - What are Vectors? What is XML?
      - Vectors are graphics that are described using math instead of a grid of pixels ("Rasters")
        - Okay... so what?
          - Vectors are "Scalable" (duh!), which means that you can stretch them as big as you like and they'll never get blurry. This makes them an excellent choice for visual content that needs to dynamically scale, like an icon--instead of designing and storing ten different versions of an image at 10 different resolutions, you can just store a single SVG.
      - XML is just a "markup language"--a language used to encode a document so it can be read by both a human and a computer. It looks a LOT like HTML, and you can *use* it in HTML (at least with SVGs), but beware--it *isn't* HTML!!
        - Does it matter that it's written in XML?
          - Yes! Here are a few reasons it's useful:
          - Readable: just by looking at the code for an SVG, you can get an idea of what it looks like.
          - Editable: Because you can read the code, you can also *edit* the code. While SVGs are generally created using tools like Adobe Illustrator, Figma, Inkscape, and Affinity Designer, 
          - Scriptable: You can dynamically define, edit, and remove parts of your SVGs in code.
- When should I use SVGs?
  - Whenever you have relatively simple graphics, and you want them to scale, or be dynamic in some way, SVGs are often a great choice!
- When *shouldn't* I use SVGs?
  - SVGs are NOT suited to images with lots of complexity. Remember that every detail of an SVG has to be explicitly defined in mathematical terms. Images that are fairly uniform are good for this: for example, circles and other simple shapes. Images with lots of detail or high-variance are NOT well-suited for this: for example, images that are supposed to be photo-realistic.
- How can I use SVGs?

### Pitfalls
- You can absolutely generate SVGs in code, but you *can't* just use `createElement`. You need to create your SVG elements in an XML namespace using `createElementNS`
- If you want to target your SVG with CSS (a **very** powerful combination!), then you *must* inline your SVG, rather than importing it.
- If you want to export your SVGs from an image editor like Illustrator, be mindful of the elements' classes & ids. You might want to remove/edit generated ones, or add your own!
- Because SVGs have been around for over two decades, there is a LOT of discussion about SVGs that predates modern conventions and tools. That means that when doing your own research, you should be mindful about when that Stack Overflow answer is from, and if it's possible that a better solution has come out since then.
