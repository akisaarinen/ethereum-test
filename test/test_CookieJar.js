const CookieJar = artifacts.require("CookieJar")

contract('CookieJar', (accounts) => {
    const owner = accounts[0]

    it("gets deployed", async () => {
      const instance = await CookieJar.new()
      assert.notEqual(instance, null, "Contract was null")
    })
})