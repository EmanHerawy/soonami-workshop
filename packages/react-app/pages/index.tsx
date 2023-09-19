import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Greeting from '../components/Greeting'
export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  return (
    <div className="flex flex-col justify-center items-center">
    
      {isConnected ?(
        < div >
          <div className="h2 text-center">Your address: {userAddress}</div>
        <Greeting/>
        </div>          
      ):(
        <div className="h1">
        let us build now
      </div>
      )}

      
    </div>
  );
}
