import Greeting from "@/components/Greeting";
import { images, creativeNames, addresses } from "/data";
import CarouselDetail from "@/components/Carousel";
import Searchbar from "@/components/SearchBar";

export const recommendedBarbers = creativeNames.map((name, index) => ({
  id: index + 1,
  image: images[index],
  name,
  address: addresses[index],
}));

const popularBarbers = recommendedBarbers.reverse();

export default function Home() {
  return (
    <main>
      <Greeting />
      <Searchbar barbers={recommendedBarbers} />
      <h3 className="text-3xl text-gray-dark">Recommended</h3>
      <CarouselDetail categories={recommendedBarbers} />
      <h3 className="text-3xl text-gray-dark">Popular</h3>
      <CarouselDetail categories={popularBarbers} />
    </main>
  );
}
