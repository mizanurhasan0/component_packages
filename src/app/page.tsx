// import Slide from "@/components/sliders/slider1/Slide";
import CascadeSlider from "@/components/sliders/Cascade";
import Data from "@/components/sliders/slider1/data/data.json"

export default function Home() {
  return (
    <div>
      {/* <Slide /> */}
      <CascadeSlider slides={Data} interval={1000} autoPlay={false} />
    </div>
  );
}
