import LinkList from "./nav/LinkList";
import Logo from "./nav/Logo";
import User from "./nav/User";

export default function Navbar() {
  return (
    <div className="flex justify-between h-[4.5rem]  backdrop-blur-md first-letter: text-2xl px-52 items-center shadow-xl shadow-red-950/10">
      <section className="">
        <Logo />
      </section>
      <div className="flex justify-between  items-center lowercase">
        <section className="flex gap-1 font-thin text-lg justify-start tracking-widest pr-10">
          <LinkList />
        </section>
        <section className="">
          <User />
        </section>
      </div>
    </div>
  );
}
