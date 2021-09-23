# SVG LESSON PLANNING

### Cody's Notion outline for writing lessons

[link](https://codyloyd.notion.site/How-I-write-lessons-210ea94af06e441a9df1ec08a8a15112)

- Gather resources
- Consume resources
- While consuming, think about structure & presentation, start outlining
- Develop outline, possibly splitting up if necessary
  - (note: I don't think multiple SVG lessons is desirable, lol)
- Main goal: Present info in most PRACTICAL way.
- BEGIN WRITING. Outline should be sufficiently developed for this to be straightforward
- Keep in mind ESL ppl & ppl from different backgrounds
- Casual tone, technical terms
- "Assignment" section: optional
- Learning Outcomes & Knowledge Check should be last thing
  - LO: brief overview of what they're about to learn. 1-3 per lesson (if more the lesson might be too complex!)
  - KC: Specific questions to test knowledge

### GH Issue overview

[link](https://github.com/TheOdinProject/top-meta/issues/43)

- Benefits of SVG over other formats
- Basic format/syntax
  - be sure to note these aren't actually made by hand, even if they are sometimes edited by hand.
- Basic usage (eg, inline vs imported)
- Sources for SVG icons/images

### Vague Outline?
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