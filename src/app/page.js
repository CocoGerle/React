import { GridContainer } from "@/components/GridContainer";
import { Card } from "../components/Card";
import {Tag} from "../components/Tag"

const data = [
  {
    title: "hi",
    desc: "how you doing",
  },
  {
    title: "hrgr",
    desc: "how ygdrgdrou doing",
  },
  {
    title: "hrgedgdrgi",
    desc: "how yogrdu doing",
  },
  {
    title: "hdrgi",
    desc: "how ydrgrgrou doing",
  },
  {
    title: "hdrgegrgi",
    desc: "how ydrgrgrou doing",
  },
  {
    title: "hddrtgrgi",
    desc: "how ydrgrgrou doing",
  },
];

export default function Home() {
  return (
    <div>
    <GridContainer>
      {data.map((item) => (
        <Card key={item.title} title={item.title} desc={item.desc}/>
      ))}
    </GridContainer>
    <Tag value="Skills"/>
    </div>
  );
}
