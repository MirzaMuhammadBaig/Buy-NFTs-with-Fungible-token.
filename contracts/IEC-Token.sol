// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IECtoken is ERC20, Ownable {

    bool ForMint;

    mapping(address => bool) public mappingForMint;

    event activeAddressForMint(
        address Address,
        address updatedBy
    );

    event removeAddressForMint(
        address Address,
        address updatedBy
    );

    event NftMinted(
        address Address,
        uint ammount
    );

    constructor() ERC20("IEC-Token", "IT") {
        _mint(msg.sender, 1000 * 1 ** decimals());
    }

    /**
     * @dev allowForMint is used to active address for mint.
     * Requirement:
     * - This function can only called by owner of the contract
     * @param Address - Address to be add 
    */

    function allowForMint(address Address) public onlyOwner{
        mappingForMint[Address] = true;

        emit activeAddressForMint(Address, msg.sender);  
    }

    /**
     * @dev removeForMint is used to remove address for mint.
     * Requirement:
     * - This function can only called by owner of the contract
     * @param Address - Address to be remove 
    */

    function removeForMint(address Address) public onlyOwner{
        mappingForMint[Address] = false;

        emit removeAddressForMint(Address, msg.sender);  
    }

    /**
     * @dev mint is used to create a new nft from msg.sender.
     * @dev msg.sender is allow for mint
     * @dev owner can't mint
     * Requirement:     
     * @param amount - nft amount 
    */
    
    function mint( uint256 amount) public {
        require(msg.sender != owner(), "Owner can't do minting");
        require(mappingForMint[msg.sender] != false, "Your address is not allow for mint");
        _mint(msg.sender, amount);

        emit NftMinted(msg.sender, amount);
    }
}