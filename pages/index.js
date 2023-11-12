import { useEffect, useState } from "react";
import Splash from "./studentsPage/studentSplash";
import SignUp from "./studentsPage/signUp/signUpForm";
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  return <div className="home">{showSplash?(<Splash />):<SignUp />}</div>;
}
