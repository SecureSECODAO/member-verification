/**
  * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
  * © Copyright Utrecht University (Department of Information and Computing Sciences)
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */

var Verification = artifacts.require("./SignVerification.sol");

module.exports = function (deployer) {
  deployer.deploy(Verification, 60, 30);
};