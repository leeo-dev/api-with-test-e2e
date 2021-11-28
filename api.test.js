const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
describe("API Suite de Test", () => {
  describe("/contact", () => {
    it("Should request the contact page and return HTTP Status 200", async () => {
      const response = await request(app).get("/contact").expect(200);
      console.log(response);
    });
  });
});
