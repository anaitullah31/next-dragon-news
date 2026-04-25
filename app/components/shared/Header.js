import Logo from "@/app/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="text-center space-y-2 py-5">
      <Image
        src={Logo}
        width={"auto"}
        alt="Logo"
        priority
        className="mx-auto"
      />
      <p>Journalism Without Fear or Favour</p>
      <p>Date: {format(new Date(), "PPPP")}</p>
    </div>
  );
};

export default Header;
