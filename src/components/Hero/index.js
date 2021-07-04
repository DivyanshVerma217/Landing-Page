import React, { useState } from "react";
import Video from "../../videos/vid.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="Video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Your BLOCKCHAIN partner</HeroH1>
        <HeroP>
          Sign up for a new accoun today and recive RS.250 in credit towards your
          successful sign up.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="contactus"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            CONTACT US {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
