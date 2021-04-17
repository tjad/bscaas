import BaseContract from './BaseContract';

export class VoterRegistrationContract extends BaseContract{

    constructor(){
        super()
        this.contract = new window.web3.eth.Contract(this.config.voter_registration.abi_interface, this.config.voting_booth.address);
    }


    register(election_id, nin){
        return this.contract.methods.registerVoter(election_id, nin).send({from: window.ethereum.selectedAddress, gas: 5000000});
    }

    getTurnout(election_id){
        return this.contract.methods.getTurnout(election_id).send({from: window.ethereum.selectedAddress, gas: 1000000})
    }


}

export class Voter{
    constructor(reg_num, nin, voted){
        this.registration_number = reg_num 
        this.national_identity_number = nin
        this.voted = voted
    }
}