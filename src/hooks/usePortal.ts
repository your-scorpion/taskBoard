import React, { useRef, useEffect } from "react";

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
function createRootElement(id: string): Element {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement(rootElem: Element) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild?.nextElementSibling!
  );
}

function usePortal(id: string) {
  const rootElemRef = useRef<Element | null>(null);

  useEffect(
    function setupElement() {
      const existingParent = document.querySelector(`#${id}`);
      const parentElem = existingParent || createRootElement(id);

      if (!existingParent) {
        addRootElement(parentElem);
      }

      if (rootElemRef.current) {
        parentElem.appendChild(rootElemRef.current);
      }

      return function removeElement() {
        rootElemRef.current?.remove();
        if (!parentElem.childElementCount) {
          parentElem.remove();
        }
      };
    },
    [id]
  );

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;
