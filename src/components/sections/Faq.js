import React, { useState } from "react";
import styled from "styled-components";
import { btn } from "styles/Globalstyle";

const Faq = () => {
  const [active, setActive] = useState(false);
  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };
  const Accord = [
    {
      title: "What is Netflix?",
      content: ` Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want without a single commercial
                – all for one low monthly price. There's always something new to
                discover and new TV shows and movies are added every week!`,
    },
    {
      title: "How much does Netflix cost?",
      content: ` Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.`,
    },
    {
      title: "Where can I watch?",
      content: ` Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
         You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      title: "How do I cancel?",
      content: ` Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      title: "What can I watch on Netflix?",
      content: ` Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      title: "Is Netflix good for kids?",
      content: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  return (
    <Wrapper>
      <HeroWrapper>
        <TextSection>
          <Title>Frequently Asked Questions</Title>
        </TextSection>
        {Accord.map((items, index) => (
          <Accordion key={index} onClick={() => toggle(index)}>
            <AccordionTitle>
              <AccordTitle>{items.title}</AccordTitle>
              <Icon>{active === index ? "x" : "+"}</Icon>
            </AccordionTitle>
            {active === index ? (
              <AccordionBody>
                <Content>{items.content}</Content>
              </AccordionBody>
            ) : null}
          </Accordion>
        ))}
      </HeroWrapper>
      <Watch>
        Ready to watch? Enter your email to create or restart your membership.
      </Watch>
      <Subscription>
        <Input placeholder="Email Address" />
        <Register>Get Started</Register>
      </Subscription>
    </Wrapper>
  );
};

export default Faq;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  padding: 0 20px;
  margin-bottom: 20px;
`;
const HeroWrapper = styled.div``;
const TextSection = styled.div`
  grid-area: text;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 700;
  color: #fff;
  width: 100%;
  text-align: center;
  margin: 5rem auto;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 568px) {
    font-size: 1.35rem;
  }
`;

const Accordion = styled.div`
  max-width: 815px;
  width: 100%;
  margin: 3px auto;
  transition: 1s ease-out;
`;
const AccordionTitle = styled.div`
  margin-bottom: 1px;
  font-weight: 400;
  position: relative;
  width: 100%;
  border: 0;
  display: block;
  text-align: left;
  background: #303030;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;
const AccordionBody = styled.div`
  text-align: left;
  background: #303030;
  transition: 1s ease-out;
`;

const AccordTitle = styled.h4`
  font-size: 1.35rem;
  line-height: 1.5;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-align: left;
  /* padding: 10px 20px; */
  @media only screen and (max-width: 568px) {
    font-size: 1rem;
  }
`;
const Icon = styled.div`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;
const Content = styled.p`
  padding: 30px 20px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.7;
  transition: 1s ease-out;
`;

const Subscription = styled.div`
  display: flex;
  align-items: center;
  max-width: 650px;
  margin: 5px auto 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  height: 60px;
  min-width: 450px;
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  @media only screen and (max-width: 568px) {
    min-width: 270px;
    height: 50px;
  }
`;
const Register = styled(btn)`
  height: 60px;
  font-size: 30px;
  font-weight: 500;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    margin: 20px 0;
  }
  @media only screen and (max-width: 568px) {
    width: 150px;
    margin: 20px 0;
    font-size: 18px;
    height: 45px;
  }
`;

const Watch = styled.h3`
  padding-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #fff;
  margin-top: 50px;
`;
