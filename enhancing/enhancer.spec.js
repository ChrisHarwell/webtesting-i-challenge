const { success, fail, repair, get } = require("./enhancer.js");

// test away!

describe("enhancer functions", () => {
  describe("repair function: ", () => {
    describe("these should pass:", () => {
      describe("accepts an item object and returns a new item with the durability restored to 100", () => {
        test("Should restore durability to 100", () => {
          const item = {
            name: "Bob",
            durability: 0,
            enhancement: 0,
          };
          expect(repair(item)).toEqual({
            name: "Bob",
            durability: 100,
            enhancement: 0,
          });
        });
      });
    });

    test("Should be false", () => {
      const item = {
        name: "Bob",
        durability: 0,
        enhancement: 0,
      };
      expect(repair(item.name)).toEqual(0);
    });

    describe("these should fail:", () => {
      describe("accepts an item object and returns a new item with the durability restored to 100", () => {
        test("Should restore durability to 100", () => {
          const item = {
            name: "Bob",
            durability: 0,
            enhancement: 0,
          };
          expect(repair(item)).toEqual({
            name: "Bob",
            durability: 0,
            enhancement: 0,
          });
        });
      });
    });
  });

  describe("success function: ", () => {
    describe("these should pass:", () => {
      test.todo("item has an enhancement with a value between 0 and 20");
      test("Item enhancement is between 1 & 20", () => {});
      test.todo("the item's durability is a number from 0-100");
      test("the item's durability is a number from 0-100", () => {});
      test("If the item enhancement level is 20, the enchantment level is not changed", () => {
        const item = {
          name: "Billy",
          durability: 1,
          enhancement: 20,
        };

        expect(success(item)).toEqual({
          name: "Billy",
          durability: 1,
          enhancement: 20,
        });
      });

      test("The durability of the item isn't changed", () => {
        const item = {
          name: "Billy",
          durability: 1,
          enhancement: 20,
        };

        expect(success(item)).toEqual({
          name: "Billy",
          durability: 1,
          enhancement: 20,
        });
      });
    });
    describe("these should fail:", () => {
      test.todo("item has an enhancement with a value between 0 and 20");
      test("Item enhancement is between 1 & 20", () => {});
      test.todo("the item's durability is a number from 0-100");
      test("the item's durability is a number from 0-100", () => {});
      test("the item enhancement increases by 1", () => {
        const item = {
          name: "Billy",
          durability: 1,
          enhancement: 19,
        };

        expect(success(item)).toEqual({
          name: "Billy",
          durability: 1,
          enhancement: 19,
        });
      });
      test("If the item enhancement level is 20, the enhancement level is not changed", () => {
        const item = {
          name: "Billy",
          durability: 1,
          enhancement: 20,
        };

        expect(success(item)).toEqual({
          name: "Billy",
          durability: 1,
          enhancement: 19,
        });
      });
      test("The durability of the item isn't changed", () => {
        const item = {
          name: "Billy",
          durability: 0,
          enhancement: 20,
        };

        expect(success(item)).toEqual({
          name: "Billy",
          durability: 1,
          enhancement: 20,
        });
      });
    });
  });

  describe("fail function: ", () => {
    describe("these should pass:", () => {
      test("if enhancement is below 15 durability decreases by 5", () => {
        const item = {
          name: "Billy",
          durability: 100,
          enhancement: 12,
        };
        expect(fail(item)).toEqual({
          name: "Billy",
          durability: 95,
          enhancement: 12,
        });
      });
      test("if enhancement is 15 or more durability decreases by 10", () => {
        const item = {
          name: "Billy",
          durability: 100,
          enhancement: 15,
        };
        expect(fail(item)).toEqual({
          name: "Billy",
          durability: 90,
          enhancement: 15,
        });
      });
      test("if enhancement is more than 16 durability decreases by 1", () => {
        const item = {
          name: "Billy",
          durability: 100,
          enhancement: 17,
        };
        expect(fail(item)).toEqual({
          name: "Billy",
          durability: 99,
          enhancement: 17,
        });
      });
    });

    describe("these should fail:", () => {
      test("if enhancement is below 15 durability decreases by 5", () => {
        const item = {
          name: "Billy",
          durability: 100,
          enhancement: 15,
        };
        expect(fail(item)).toEqual({
          name: "Billy",
          durability: 95,
          enhancement: 15,
        });
      });
      test("if enhancement is 15 or more durability decreases by 10", () => {
        const item = {
          name: "Billy",
          durability: 100,
          enhancement: 15,
        };
        expect(fail(item)).toEqual({
          name: "Billy",
          durability: 95,
          enhancement: 15,
        });
      });
      test("if enhancement is more than 16 durability decreases by 1", () => {
        const item = {
          name: "Billy",
          durability: 100,
          enhancement: 17,
        };
        expect(fail(item)).toEqual({
          name: "Billy",
          durability: 100,
          enhancement: 17,
        });
      });
    });
  });
});
