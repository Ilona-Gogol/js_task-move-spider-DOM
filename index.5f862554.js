document.addEventListener("click",function(t){var e=document.querySelector(".wall"),n=document.querySelector(".spider"),c=e.getBoundingClientRect(),i=n.getBoundingClientRect(),l=i.width,o=i.height,d=t.clientX-c.left,u=t.clientY-c.top;d>=0&&d<=c.width&&u>=0&&u<=c.height&&(n.style.left="".concat(d-l/2,"px"),n.style.top="".concat(u-o/2,"px"))});
//# sourceMappingURL=index.5f862554.js.map
