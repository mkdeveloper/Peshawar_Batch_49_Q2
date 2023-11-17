import Image from "next/image";
import Button from "./components/Button";
import image from "./../public/testing.avif";

const Home = () => {
  return (
    <main>
      <h1 className="font-bold text-5xl">Home</h1>
      <Button btnName="Submit" style="bg-green-500 text-semibold" />
      {/* <img src="/testing.avif" /> */}
      <Image src={image} alt="some test pic" />
    </main>
  );
};

export default Home;
