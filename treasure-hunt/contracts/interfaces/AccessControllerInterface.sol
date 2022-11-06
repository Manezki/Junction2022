pragma solidity 0.8.17;

interface AccessControllerInterface {
  function hasAccess(address user, bytes calldata data) external view returns (bool);
}