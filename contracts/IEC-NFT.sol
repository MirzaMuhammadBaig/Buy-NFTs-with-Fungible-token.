// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract IECnft is ERC721, Ownable {

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
     
    IERC20 public tokenAddress;

    uint public NFTPrice= 0.5 * 10 ** 18;

    event buyNft(
        address callFrom
    );

    // We will use ERC20 deployed contract address in address parameter for constructor
    // Deploying the NFTs contract by using ERC20 token address  
    
    constructor(address _tokenAddress) ERC721("IEC-NFT", "IN") {
        tokenAddress= IERC20(_tokenAddress);
    }

    /**
     * @dev BuyNFT is used to buy nft.
     * @dev nft transfer from seller to msg.sender
     *@dev tokenId will be increase, when function will be call
     * Requirement:     
    */

    function BuyNFT() public payable{

        tokenAddress.transferFrom(msg.sender, address(this), NFTPrice);
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);

        emit buyNft(msg.sender);
    }

}