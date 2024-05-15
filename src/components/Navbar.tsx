import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "@/actions";
import { Icons } from "./icons";
import { ProfileModal } from "./modals/ProfileModal";
import { SettingModal } from "./modals/SettingModal";
import { ProfileDrawer } from "./drawers/ProfileDrawer";
import { SettingDrawer } from "./drawers/SettingDrawer";

export function Navbar() {
  return (
    <div className="flex flex-col mt-3 mx-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <Icons.airquant_text className="w-24 h-24" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex md:gap-1 items-center">
            <li className="hidden md:block">
              <ProfileModal />
            </li>
            <li className="md:hidden">
              <ProfileDrawer />
            </li>
            <li className="hidden md:block">
              <SettingModal />
            </li>
            <li className="md:hidden">
              <SettingDrawer />
            </li>
            {/* <li>
              <Link href={"https://github.com/joemar25/entropy"} target="_blank">
                <Button variant={"ghost"} className="gap-1">
                  <Icons.gitHub className="h-5 w-5" />
                  <p className="hidden md:block">Github</p>
                </Button>
              </Link>
            </li> */}
            <li>
              <form action={signOut}>
                <Button className="gap-1 bg-[#38A397]">
                  <Icons.logout className="h-5 w-5" />
                  <p className="hidden md:block">Sign Out</p>
                </Button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-2 h-[2px] bg-gradient-to-r from-transparent via-[#c3cbd8] to-transparent"></div>
    </div>
  );
}
