// import Slide from "@/components/sliders/slider1/Slide";
import CascadeSlider from "@/components/sliders/slider1/slider1";
import Data from "@/components/sliders/slider1/data/data.json"

export default function Home() {
  return (
    <div>
      {/* <Slide /> */}
      <CascadeSlider slides={Data} interval={1000} autoPlay={false} />
    </div>
  );
}
