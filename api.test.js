const { describe, it } = require("mocha");
const request = require("supertest");
const app = require("./api");
const assert = require("assert");
describe("API Suite de Test", () => {
  describe("/contact", () => {
    it("Should request the contact page and return HTTP Status 200", async () => {
      const response = await request(app).get("/contact").expect(200);
      assert.deepStrictEqual(response.text, "Contact us page!");
    });
  });
  describe("/hello", () => {
    it("Should request an inexistent route /hi and return HTTP Status 404 and redirect", async () => {
      const response = await request(app).get("/hi").expect(404);
      assert.deepStrictEqual(response.text, "404 Not Found!");
    });
  });
  describe("/login", () => {
    it("Should login successfully on the login and return HTTP Status 200", async () => {
      const response = await request(app)
        .post("/login")
        .send({ username: "leeodesign", password: "123" })
        .expect(200);
      assert.deepStrictEqual(response.text, "Logging has succeeded!");
    });
  });
});
