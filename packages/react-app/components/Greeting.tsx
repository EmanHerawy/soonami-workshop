import {  useState } from "react";
import { usePrepareContractWrite ,useContractWrite,useContractRead} from "wagmi";
import Greeter from "../contracts/Greeter.json";
export default function Greeting() {
  const [greeting, setGreeting] = useState("");
   const contractAbi = Greeter.abi;
  const contractAddress = Greeter.address;
  const { config } = usePrepareContractWrite({
    address: contractAddress as `0x${string}`,
    abi:contractAbi,
    functionName: 'setGreeting',
    args: [greeting],
  })
    const { write } = useContractWrite(config)

const {data} = useContractRead({
       address: contractAddress as `0x${string}`,
    abi:contractAbi,
        functionName:"greet",
        watch: true
    })
 
  return (
    <div className="flex flex-col justify-center items-center">
   
            <div className="h2 text-center">Latest Greeting is: {data}</div>
          <div className="h2 text-center">Send new greeting</div>
          <input
            className="h2 text-center"
            onChange={(e) => setGreeting(e.target.value)}
          />
          <button
            className="h2 text-center"
           disabled={!write} onClick={() => write?.()}
          >Send
          </button>


    
    </div>
  );
}

declare global {
  interface Window {
    ethereum: any;
  }
}
