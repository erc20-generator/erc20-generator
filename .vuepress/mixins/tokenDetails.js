export default {
  data () {
    return {
      tokenDetails: [
        {
          name: 'SimpleERC20',
          version: '4.0.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: false,
          supplyType: 'Fixed',
          accessType: 'None',
          mintable: false,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: false,
          price: 1,
        },
        {
          name: 'StandardERC20',
          version: '4.0.1',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'None',
          mintable: false,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          price: 1,
        },
        {
          name: 'BurnableERC20',
          version: '4.2.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Fixed',
          accessType: 'None',
          mintable: false,
          burnable: true,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          price: 0.25,
        },
        {
          name: 'MintableERC20',
          version: '4.1.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Unlimited',
          accessType: 'Ownable',
          mintable: true,
          burnable: false,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          price: 0.35,
        },
        {
          name: 'CommonERC20',
          version: '4.0.1',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Ownable',
          mintable: true,
          burnable: true,
          erc1363: false,
          tokenRecover: false,
          removeCopyright: true,
          price: 0.55,
        },
        {
          name: 'PowerfulERC20',
          version: '4.3.0',
          standard: true,
          verified: true,
          detailed: true,
          customizeDecimals: true,
          supplyType: 'Capped',
          accessType: 'Role Based',
          mintable: true,
          burnable: true,
          erc1363: true,
          tokenRecover: true,
          removeCopyright: true,
          price: 0.95,
        },
      ],
    };
  },
};
