setTimeout(():void => {
  console.log("World");
}, 10);

console.log("Hello");

const id = setTimeout(():void => {
  console.log("Not printed");
}, 10000);

clearTimeout(id);
