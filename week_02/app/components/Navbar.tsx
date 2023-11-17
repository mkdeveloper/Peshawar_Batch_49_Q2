import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <p>Anchor Tag</p>
      <a href="/" className="">
        Home
      </a>
      <a href="/aboutus">About Us</a>
      <br />
      <p>Link Tag</p>
      <Link href="/">Home</Link>
      <Link href="/aboutus">About Us</Link>
      <Link href="/aboutus/contactus">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
