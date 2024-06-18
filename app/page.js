import Greeting from "@/components/Greeting";
import Image from "next/image";
import { images, creativeNames, addresses } from "/data";
import CarouselDetail from "@/components/Carousel";

const recommendedBarbers = creativeNames.map((name, index) => ({
  id: index + 1,
  image: images[index],
  name,
  address: addresses[index],
}));

const popularBarbers = [...recommendedBarbers].reverse();

export default function Home() {
  return (
    <main>
      {console.log(recommendedBarbers)}
      <Greeting />
      <h3 className="text-3xl">Recommended</h3>
      <CarouselDetail categories={recommendedBarbers} />
      <h3 className="text-3xl">Popular</h3>
      <CarouselDetail categories={popularBarbers} />
    </main>
  );
}
