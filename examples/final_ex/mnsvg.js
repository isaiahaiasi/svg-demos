// mnsvg: MiNi Scalable Vector Graphics
// A tiny module that provides a more convenient interface for the Element API

const xmlns = "http://www.w3.org/2000/svg";

function create(tagName, attributes = {}) {
  // Must use NS version of createElement,
  // and must provide the svg xml namespace we're using.
  const element = document.createElementNS(xmlns, tagName);
  setAttr(element, attributes);
  return element;
}

// attributes: Object containing element attributes.
// eg, { "viewBox": "0 0 100 100" }
function setAttr(element, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    // Must use NS version of setAttribute, but namespace must be "null".
    // Not sure what the logic is there.
    element.setAttributeNS(null, key, value);
  });
}

export { create, setAttr };
