import AuthDetails from "@/component/AuthDetals";
import SignIn from "./signIn/signInForm";
import SignUpTest from "../signupTest";
import Image from "next/image";
const Logo="/asset/logo.svg"


function Splash() {
  return (
    <div className="splash">
      <Image src={Logo}  alt=""
          width={100}
          height={100} />
      <h4 className="bold-text">Student Attendance</h4>
    </div>
  );
}
export default Splash;
