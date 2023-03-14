// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title A contract to verify addresses
/// @author JSC LEE
/// @notice You can use this contract to verify addresses
contract GithubVerification {
    mapping(address => Stamp[]) internal stamps;
    mapping(string => address) internal stampHashMap;

    address private immutable _owner;

    uint verifyDayThreshold = 60;

    struct Stamp {
        string id;
        string _hash;
        uint verifiedAt;
    }

    /// @notice This constructor sets the owner of the contract
    constructor() {
        _owner = msg.sender;
    }

    /// @notice This function can only be called by the owner, and it verifies an address. It's not possible to re-verofuy an address before half the verifyDayThreshold has passed.
    /// @dev Verifies an address
    /// @param _toVerify The address to verify
    function verifyAddress(
        address _toVerify,
        string calldata _providerId,
        string calldata _hash
    ) external onlyOwner {
        require(
            stampHashMap[_hash] == address(0) ||
                stampHashMap[_hash] == _toVerify,
            "ID already affiliated with another address"
        );

        require(_toVerify != address(0), "Address cannot be 0x0");

        // Check if there is existing stamp with providerId
        bool found = false;
        uint foundIndex = 0;

        for (uint i = 0; i < stamps[_toVerify].length; i++) {
            if (
                keccak256(abi.encodePacked(stamps[_toVerify][i].id)) ==
                keccak256(abi.encodePacked(_providerId))
            ) {
                found = true;
                foundIndex = i;
                break;
            }
        }

        if (!found) {
            stamps[_toVerify].push(createStamp(_providerId, _hash));
        } else {
            // Check how long it has been since the last verification
            uint timeSinceLastVerification = block.timestamp -
                stamps[_toVerify][foundIndex].verifiedAt;

            // If it has been more than (verifyDayThreshold / 2) days, update the stamp
            if (timeSinceLastVerification > (verifyDayThreshold / 2) * 1 days) {
                stamps[_toVerify][foundIndex] = createStamp(_providerId, _hash);
            } else {
                revert(
                    "Address already verified; cannot re-verify yet, wait at least half the verifyDayThreshold"
                );
            }
        }

        stampHashMap[_hash] = _toVerify;
    }

    function createStamp(
        string memory _id,
        string memory _usernameHash
    ) internal onlyOwner returns (Stamp memory) {
        Stamp memory stamp = Stamp(_id, _usernameHash, block.timestamp);
        stampHashMap[_usernameHash] = msg.sender;
        return stamp;
    }

    /// @notice This function checks if an address is verified and if the address has been verified recently (within the set verifyDayThreshold)
    /// @param _toCheck The address to check
    /// @return A boolean indicating if the address is verified
    // function addressIsVerified(address _toCheck) external view returns (bool) {
    //     if (
    //         verifiedTimeMap[_toCheck] + (verifyDayThreshold * 1 days) <
    //         block.timestamp
    //     ) return false;

    //     return verifiedTimeMap[_toCheck] > 0;
    // }

    /// @notice This function returns the stamps of an address
    /// @param _toCheck The address to check
    /// @return An array of stamps
    function getStamps(
        address _toCheck
    ) external view returns (Stamp[] memory) {
        return stamps[_toCheck];
    }

    /// @notice This function can only be called by the owner, and it sets the verifyDayThreshold
    /// @dev Sets the verifyDayThreshold
    /// @param _days The number of days to set the verifyDayThreshold to
    function setVerifyDayThreshold(uint _days) external onlyOwner {
        verifyDayThreshold = _days;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Ownable: caller is not the owner");
        _;
    }
}
