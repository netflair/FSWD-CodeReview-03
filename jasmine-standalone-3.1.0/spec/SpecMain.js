describe("Get Results for Austria", function() {
    it("should do power x 100 / age + 50", function() {
    	austria = 50;
        expect(calc(100, 25, austria)).toBe(450);
    });
});

describe("Get Results for Germany", function() {
    it("should do power x 100 / age + 100", function() {
    	germany = 100;
        expect(calc(100, 25, germany)).toBe(500);
    });
});


describe("Get Results for Italy", function() {
    it("should do power x 100 / age + 150", function() {
    	italy = 150;
        expect(calc(100, 25, italy)).toBe(550);
    });
});