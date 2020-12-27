const HDWalletProvider=require("truffle-hdwallet-provider");
const Web3=require("web3");
const {abi,evm}=require("./compile");


const provider=new HDWalletProvider(
    "YOUR_ACCOUNT_MNEMONICS",
    'https://rinkeby.infura.io/v3/0e1cba359e284143804606eb0f9c60ae'
);

const web3=new Web3(provider);

const deploy = async () => {
    const accounts=await web3.eth.getAccounts();
    console.log("Attempting to deploy contract from account: "+accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({data:evm.bytecode.object,arguments:["Hi There!"]})
        .send({gas:"10000000",from:accounts[0]});

    console.log('Contract deployed to: '+result.options.address);
};

deploy();