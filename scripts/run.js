const main=async()=>{
    const [owner,randomPerson]=await hre.ethers.getSigners();
    const waveContractFactory=await hre.ethers.getContractFactory("WavePortal");
    const waveContract=await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("COntract deployed to",waveContract.address);
    console.log("COntract deployed by",owner.address);

    await waveContract.getTotalWaves();

    const firstWaveTxn=await waveContract.wave();
    await firstWaveTxn.wait();
    await waveContract.getTotalWaves();
    await waveContract.getArrayAddress();

    const SecondWaveTxn=await waveContract.connect(randomPerson).wave();
    await SecondWaveTxn.wait();
    await waveContract.getTotalWaves();
    await waveContract.getArrayAddress();
};

const runMain=async()=>{
    try{
        await main();
        process.exit(0);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

runMain();