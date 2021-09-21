const Lottery = artifacts.require("./Lottery.sol");

contract("Lottery", accounts =>
{
    it("should be equal to the organiser account that deployed the contract", async () => {
    const lottery = await Lottery.deployed();

    const organiser = await lottery.getOrganiser.call();

    assert.equal(organiser, "0x4b6Ed7dCbd5D1561A480f32fA3F0935E689B91eC");
    });

});