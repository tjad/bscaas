(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{110:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(6),i=n(7),c=n(13),r=n(12),s=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).contract=new window.web3.eth.Contract(e.config.voting_booth.abi_interface,e.config.voting_booth.address),e}return Object(i.a)(n,[{key:"submitEncryptedMessages",value:function(e,t){return console.log(t),this.contract.methods.submitEncryptedMessages(e,t).send({from:window.ethereum.selectedAddress,gas:5e6})}},{key:"getEncryptedMessages",value:function(e){return this.contract.methods.getEncryptedMessages(e).call()}},{key:"clearEncryptedMessages",value:function(e){return this.contract.methods.clearEncryptedMessages(e).send({from:window.ethereum.selectedAddress,gas:1e6})}}]),n}((function e(){Object(a.a)(this,e),this.config=null,this.config=n(188)})),o=function e(t,n){Object(a.a)(this,e),this.blockchain_address=n,this.message=t}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(6),i=n(7),c=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,null,[{key:"uuidv4",value:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}},{key:"clashid",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["1","2","3"],n=[],a=0;a<e;a++)n.push(t[parseInt(3*Math.random())]);return n.join("")}}]),e}()},188:function(e){e.exports=JSON.parse('{"ipfs":{"host":"ipfs.infura.io","port":5001,"protocol":"https"},"voting_booth":{"address":"","abi_interface":[]},"election":{"address":"","abi_interface":[]},"election_candidate":{"address":"","abi_interface":[]}}')},288:function(e,t,n){"use strict";(function(e){var a=n(1),i=n.n(a),c=n(66),r=n(6),s=n(7),o=n(13),l=n(12),d=n(155),u=n(8),h=n.n(u),b=n(18),p=n(92),f=n(110),m=n(27),j=n(3),g=(n(378),function(t){Object(o.a)(a,t);var n=Object(l.a)(a);function a(e){var t;Object(r.a)(this,a);var i={public_key:"cQzV150MGQ46Z+KR3KCcHE0NwGFoq6uddA955b9GiEo=",blockchain_address:"0xb4875b7EFf02Cc2A9a5697AD4dCE8aDD43e54e90"},c={public_key:"cQzV150MGQ46Z+KR3KCcHE0NwGFoq6uddA955b9GiEo=",blockchain_address:"0xb4875b7EFf02Cc2A9a5697AD4dCE8aDD43e54e90"};return(t=n.call(this,e)).state={candidates:e.location.state.candidates,decryptors:[i,c],decryptors2:[c,i]},t.election=e.location.state.election,t}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"ballot",children:this.state.candidates.map((function(t){return Object(j.jsx)("div",{className:"ballot-candidate",onClick:function(){return e.vote(t)},children:t.name})}))})}},{key:"toHexString",value:function(e){return Array.from(e,(function(e){return("0"+(255&e).toString(16)).slice(-2)})).join("")}},{key:"vote",value:function(t){for(var n=this,a={id:b.a.uuidv4(),candidate_key:t.key},r=this.state.decryptors.length,s=t.key,o=[],l=[],u=[],h=0;h<s.length;h++){var m=this.state.decryptors[h%r].public_key,j={vote_id:a.id,candidate_key_fragment:s[h],candidate_key_fragment_position:h,election_id:this.election.id};u.push(p.a.encrypt(JSON.stringify(j),e.from(m)))}(function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,s,h,b,m,j,g,x,v,y,O,w,k,N,C,_,E,A,M,S,V,T;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ipfs.add(u);case 2:t=e.sent,a=[],s=0,h=!0,b=!1,e.prev=7,j=Object(d.a)(t);case 9:return e.next=11,j.next();case 11:return g=e.sent,h=g.done,e.next=15,g.value;case 15:if(x=e.sent,h){e.next=29;break}v=x,y=n.state.decryptors[s%r],console.log("shooting file"),O=v.path,w={blockchain_address:y.blockchain_address,message:O},k=n.state.decryptors2[s%r],N=k.public_key,a.push(p.a.encrypt(JSON.stringify(w),N)),s+=1;case 26:h=!0,e.next=9;break;case 29:e.next=35;break;case 31:e.prev=31,e.t0=e.catch(7),b=!0,m=e.t0;case 35:if(e.prev=35,e.prev=36,h||null==j.return){e.next=40;break}return e.next=40,j.return();case 40:if(e.prev=40,!b){e.next=43;break}throw m;case 43:return e.finish(40);case 44:return e.finish(35);case 45:return e.next=47,window.ipfs.add(a);case 47:C=e.sent,s=0,_=!0,E=!1,e.prev=51,M=function(){var e=T,t=n.state.decryptors2[s%r];l.push(new Promise(function(){var n=Object(c.a)(i.a.mark((function n(a,c){var r,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.path,s=new f.a(r,t.blockchain_address),o.push(s),a();case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())),s+=1},S=Object(d.a)(C);case 54:return e.next=56,S.next();case 56:return V=e.sent,_=V.done,e.next=60,V.value;case 60:if(T=e.sent,_){e.next=66;break}M();case 63:_=!0,e.next=54;break;case 66:e.next=72;break;case 68:e.prev=68,e.t1=e.catch(51),E=!0,A=e.t1;case 72:if(e.prev=72,e.prev=73,_||null==S.return){e.next=77;break}return e.next=77,S.return();case 77:if(e.prev=77,!E){e.next=80;break}throw A;case 80:return e.finish(77);case 81:return e.finish(72);case 82:case"end":return e.stop()}}),e,null,[[7,31,35,45],[36,,40,44],[51,68,72,82],[73,,77,81]])})));return function(){return e.apply(this,arguments)}})()().then((function(){console.log("Before promises"),Promise.all(l).then((function(){window.contract.voting_booth.submitEncryptedMessages(n.election.id,o),console.log("after promises")}))}))}}]),a}(h.a.Component));t.a=Object(m.f)(g)}).call(this,n(0).Buffer)},299:function(e,t,n){},301:function(e,t,n){},314:function(e,t){},316:function(e,t){},330:function(e,t){},331:function(e,t){},351:function(e,t){},356:function(e,t){},358:function(e,t){},376:function(e,t){},388:function(e,t,n){},396:function(e,t){},403:function(e,t){},495:function(e,t){},497:function(e,t){},502:function(e,t){},504:function(e,t){},511:function(e,t){},512:function(e,t){},514:function(e,t){},526:function(e,t){},529:function(e,t){},592:function(e,t){},788:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(66),r=n(8),s=n.n(r),o=n(287),l=n.n(o),d=(n(299),n(46)),u=n(27),h=n(6),b=n(7),p=n(13),f=n(12),m=n(3),j=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.call(this)}return Object(b.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("section",{className:"h-screen bg-opacity-50 bg-black flex items-center justify-center border-b-2 border-green-400",children:[Object(m.jsx)("h2",{class:"uppercase tracking-wide text-lg text-green-600 font-bold",children:"Election voting on the blockchain"}),Object(m.jsx)("p",{class:"mt-1 text-gray-500",children:"A solution that works!"})]}),Object(m.jsxs)("section",{className:"h-screen bg-opacity-50 flex items-center justify-center border-b-2 border-green-400",children:[Object(m.jsx)("h2",{class:"uppercase tracking-wide text-lg text-green-600 font-bold",children:"The stumbling Block"}),Object(m.jsx)("p",{class:"mt-1 text-gray-500",children:"The African electoral systems are plagued with malpractise, violence and general apathy on the part of citizens.Not only that, there is also the issue of huge costs required to fund the process. The concept of democracy has therefore not been able to fulfill its purpose. "})]}),Object(m.jsxs)("section",{className:"h-screen bg-opacity-50 flex items-center justify-center border-b-2 border-green-400",children:[Object(m.jsx)("h2",{class:"uppercase tracking-wide text-lg text-green-600 font-bold",children:"Our solution"}),Object(m.jsx)("p",{class:"mt-1 text-gray-500",children:'A full on-chain voting system using "Cascade Encrypted Obfuscation" (CEO) technique that inherits the decentralized and auditable features of the blockchain. Voting would become digital immutable and transparent.'})]}),Object(m.jsxs)("section",{className:"h-screen bg-opacity-50 flex items-center justify-center mb-0",children:[Object(m.jsx)("h2",{class:"uppercase tracking-wide text-lg text-green-600 font-bold",children:"Earn Rewards"}),Object(m.jsx)("p",{class:"mt-1 text-gray-500",children:"Get rewarded for being an active citizen! Earn our Liberty Token (LBT) as you complete the registration cycle and vote for your desired candidate. Participation in government has never been better!"})]})]})}}]),n}(s.a.Component),g=(n(301),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.call(this)}return Object(b.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{class:"mt-4 md:mt-0 md:ml-6",children:[Object(m.jsx)("section",{id:"about1",className:"h-screen bg-opacity-50 flex items-center justify-center mb-0"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{class:"block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline",children:"BlockVote | Everything You Need To Know!"}),Object(m.jsx)("p",{children:"This Application is for election & polling at any scale. Fortified with encrytion obfusication in order to obscure the voters from thier vote making it nearly imposible to see which candidate a voter voted."}),Object(m.jsx)("p",{children:"These application has an inbuilt reward system to incentivise the voters. Electorial processes can be overwhelming most of the time and as sign of good fate its only natural to want to support the people for thier cooperation."}),Object(m.jsx)("p",{children:"The more processes you complete the more you earn, this way everyone will be willing to participate. Everyone must pre-register to vote prior to election."}),Object(m.jsx)("p",{children:"Though the infomation on the block chain is public, the identities of the voters cannot be easily figured out."})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{}),Object(m.jsx)("h2",{class:"block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline",children:"How To Vote"}),Object(m.jsx)("p",{children:"Every voter must go to the registration portal and register to vote."})]})]})}}]),n}(s.a.Component)),x=n(288),v=n(92),y=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).messages=[],e.location.state&&(a.messages=e.location.state.messages),a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[this.messages.length," messages to decrypt.",Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return e.decrypt()},children:"Decrypt"})]})}},{key:"decrypt",value:function(){var e=this.state.messages.map(function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.a.decrypt(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());alert(e.length+" messages decrypted")}}]),n}(s.a.Component),O=Object(u.f)(y),w=(n(388),n(18)),k=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).editElection=function(t){e.props.history.push("/election-form",{election:t})},e.elections=[{name:"Nigerian Election",id:"8e4cb64b-ec4f-446a-a860-26ec1d12ae5c8",phase:"Vote"},{name:"South African Election",id:w.a.uuidv4(),phase:"Candidate"},{name:"Cameroon",id:w.a.uuidv4(),phase:"Register"}],e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"elections",children:[Object(m.jsx)("i",{className:"fas fa-plus-circle",onClick:function(){e.editElection({name:""})}}),this.elections.map((function(t){return Object(m.jsxs)("div",{className:" w-full lg:max-w-full lg:flex",children:[Object(m.jsx)("div",{className:"h-48 lg:h-auto lg:w-48 flex-none bg-cover border-2 border-green-400 rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",style:{background_image:"url('/mountain.jpg')"},title:"Mountain"}),Object(m.jsxs)("div",{className:"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal",onClick:function(){e.editElection(t)},children:[Object(m.jsxs)("div",{className:"mb-8",children:[Object(m.jsxs)("p",{className:"text-sm text-gray-600 flex items-center",children:[Object(m.jsx)("svg",{className:"fill-current text-gray-500 w-3 h-3 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(m.jsx)("path",{d:"M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"})}),"Registrants only"]}),Object(m.jsx)("div",{className:"text-gray-900 font-bold text-xl mb-2",children:t.name}),Object(m.jsx)("p",{className:"text-gray-700 text-base",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."})]}),Object(m.jsx)("div",{className:"flex items-center",children:Object(m.jsx)("span",{className:"inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full float-right",children:t.phase})})]})]})}))]})}}]),n}(s.a.Component),N=Object(u.f)(k),C=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).can_register=e.can_register,a.candidates=e.candidates,a}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"candidates",children:[this.candidates.map((function(t){return Object(m.jsx)("div",{className:"candidates",onClick:function(){e.editCandidate(t)},children:t.name})})),this.can_register?"":Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:function(){e.editCandidate({name:""})},children:"Register Candidate"})]})}},{key:"editCandidate",value:function(e){this.props.history.push("/candidate-form",{candidate:e})}}]),n}(s.a.Component),_=Object(u.f)(C),E=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).createElection=function(){a.election.id=w.a.uuidv4(),alert(a.election.name+" has been created with id "+a.election.id),a.setState({})},a.updateElection=function(){alert(a.election.name+" has been updated")},a.handleChangeName=function(e){a.election.name=e.target.value,a.setState({})},a.gotoBallot=function(){a.props.history.push("/ballot",{election:a.election,candidates:a.candidates})},a.gotoDecrypt=function(){window.contract.voting_booth.getEncryptedMessages(a.election.id).then((function(e){a.props.history.push("/decrypt",{messages:e})}))},a.gotoRegistration=function(){a.props.history.push("/voter-form",{election:a.election,voter:{}})},a.candidates=[{name:"Tjad",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Martins",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Demmy",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Nurudeen",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Emmanuel",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Favour",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Alois",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Sunday",id:w.a.uuidv4(),key:w.a.clashid()},{name:"Howard",id:w.a.uuidv4(),key:w.a.clashid()}],a.election=e.location.state.election,a}return Object(b.a)(n,[{key:"render",value:function(){var e;e=this.election.id?Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.updateElection,children:"Update"}):Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.createElection,children:"Create"});var t="";return"Register"==this.election.phase?t=Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.gotoRegistration,children:"Register to Vote"}):"Vote"==this.election.phase&&(t=Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.gotoBallot,children:"Vote"}),Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.gotoDecrypt,children:"Decrypt"})]})),Object(m.jsxs)("div",{className:"election",children:[Object(m.jsx)("label",{children:"Name: "}),Object(m.jsx)("input",{type:"text",value:this.election.name,onChange:this.handleChangeName}),e,t,this.election.id?Object(m.jsx)(_,{can_register:"Candidate"!=this.election.phase,candidates:this.candidates}):""]})}}]),n}(s.a.Component),A=Object(u.f)(E),M=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).createCandidate=function(){a.candidate.id=w.a.uuidv4(),alert(a.candidate.name+" has been created with id "+a.candidate.id),a.setState({})},a.updateCandidate=function(){alert(a.candidate.name+" has been updated")},a.handleChangeName=function(e){a.candidate.name=e.target.value,a.setState({})},a.candidate=e.location.state.candidate,a}return Object(b.a)(n,[{key:"render",value:function(){var e;return e=this.candidate.id?Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.updateCandidate,children:"Update"}):Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.createCandidate,children:"Create"}),Object(m.jsxs)("div",{className:"candidate",children:[Object(m.jsx)("label",{children:"Name: "}),Object(m.jsx)("input",{type:"text",value:this.candidate.name,onChange:this.handleChangeName}),e]})}}]),n}(s.a.Component),S=Object(u.f)(M),V=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this)).registerVoter=function(){a.voter.id=w.a.uuidv4(),alert(a.voter.name+" has been registered with id "+a.voter.id),a.setState({})},a.handleChangeNIN=function(e){a.voter.name=e.target.value,a.setState({})},a.voter=e.location.state.voter,a}return Object(b.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"voter",children:[Object(m.jsx)("label",{children:"National Identity Number: "}),Object(m.jsx)("input",{type:"text",value:this.voter.name,onChange:this.handleChangeNIN}),Object(m.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:this.registerVoter,children:"Register"}),this.voter.id?Object(m.jsx)(_,{can_register:"Candidate"!=this.voter.phase,candidates:this.candidates}):""]})}}]),n}(s.a.Component),T=Object(u.f)(V),D=[{name:"Home",path:"/",component:j,is_menu:!0},{name:"About",path:"/about",component:g,is_menu:!0},{name:"Ballot",path:"/ballot",component:x.a},{name:"Decrypt",path:"/decrypt",component:O},{name:"Elections",path:"/elections",component:N,is_menu:!0},{name:"Candidates",path:"/candidates",component:_},{name:"Candidate Form",path:"/candidate-form",component:S},{name:"Election Form",path:"/election-form",component:A},{name:"Register Voter",path:"/voter-form",component:T}];function R(){return Object(m.jsxs)(d.a,{children:[Object(m.jsxs)("nav",{className:"sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 bg-blueGray-500 rounded border-2 border-green-200",children:[Object(m.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start",children:[Object(m.jsx)("a",{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white",href:"/",children:Object(m.jsx)("img",{className:"rounded-lg md:w-56",src:"".concat("/bscaas","/assets/images/logo.png"),alt:"logo"})}),Object(m.jsxs)("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",children:[Object(m.jsx)("span",{className:"block relative w-6 h-px rounded-sm bg-white"}),Object(m.jsx)("span",{className:"block relative w-6 h-px rounded-sm bg-white mt-1"}),Object(m.jsx)("span",{className:"block relative w-6 h-px rounded-sm bg-white mt-1"})]})]}),Object(m.jsx)("div",{className:"flex lg:flex-grow items-center",children:Object(m.jsx)("ul",{className:"flex flex-col lg:flex-row list-none ml-auto",children:D.map((function(e,t){if(e.is_menu)return Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.b,{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75",to:e.path,children:e.name})})}))})})]}),Object(m.jsx)(u.c,{children:D.map((function(e){return Object(m.jsx)(u.a,{exact:!0,path:e.path,children:Object(m.jsx)("div",{className:"p-5 pb-0",children:s.a.createElement(e.component)})})}))})]})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,793)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},F=n(290),z=n.n(F),q=n(110),G=n(188),H=n(577);function P(){return(P=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=4;break}return e.next=3,window.ethereum.enable();case 3:window.web3=new z.a(window.ethereum);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return P.apply(this,arguments)})().then((function(){window.contract={voting_booth:new q.b},window.ipfs=H({host:G.ipfs.host,port:G.ipfs.port,protocol:G.ipfs.protocol})})),l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),B()},92:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var a=n(6),i=n(7),c=n(303),r=n(97),s=function(){function t(){Object(a.a)(this,t)}return Object(i.a)(t,null,[{key:"getPublicKey",value:function(){return new Promise((function(e){window.ethereum.request({method:"eth_getEncryptionPublicKey",params:[window.ethereum.selectedAddress]}).then((function(t){return e(t)}))}))}},{key:"encrypt",value:function(t,n){return r.bufferToHex(e.from(JSON.stringify(c.encrypt(n,{data:t},"x25519-xsalsa20-poly1305")),"utf8"))}},{key:"decrypt",value:function(e){return window.ethereum.request({method:"eth_decrypt",params:[e,window.ethereum.selectedAddress]})}}]),t}()}).call(this,n(0).Buffer)}},[[788,1,2]]]);
//# sourceMappingURL=main.a420ea61.chunk.js.map