const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Solvz", ["0x6E46aF8ae73Dd8Bc4Bf34d6A2c8cC606C6405432"]);

  return { lock };
});

