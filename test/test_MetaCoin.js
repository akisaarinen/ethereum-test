const MetaCoin = artifacts.require("MetaCoin")

contract('MetaCoin', (accounts) => {
    it("gets deployed", async () => {
      const instance = await MetaCoin.new()
      assert.notEqual(instance, null, "Contract was null")
    })

    it("deploys initial funds", async () => {
        const coin = await MetaCoin.deployed()
        const balance = await coin.getBalance.call(accounts[0])
        assert.equal(balance.valueOf(), 10000, "First account did not have 10000 balance");
      })
})