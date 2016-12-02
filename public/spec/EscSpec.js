describe("Hello world", function() {
  it("Hello World from scripts/main.js", function() {
    expect(helloWorld()).toEqual("Hello world from main.js!");
  });
});
//This is test suite
describe("The ESC_KEY variable should be bound to its proper keycode 27", function() {
    it("Is properly bound to the keycode 27", function() {
        expect(escapeKeyBinding()).toEqual(27);
    }); 
});
//This is test suite- should be just another spec above
describe("The ESC_KEY variable should be bound to its proper keycode 27", function() {
    it("Is not bound to something else, like a string of 27 ", function() {
        expect(escapeKeyBinding()).not.toEqual("27");
    }); 
});