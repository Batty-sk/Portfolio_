import Image from "next/image";
import { pattern } from "../assests";
const PatternDivider = () => (
    <div className="absolute left-1/2 -translate-x-1/2" >
        <Image src={pattern} alt="pattern" />
    </div>
  );
  

export default PatternDivider