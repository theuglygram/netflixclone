import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <>
        <FooterContents>
          <FooterWrap>
            <FooterLinks>FAQ</FooterLinks>
            <FooterLinks>Investor Relations</FooterLinks>
            <FooterLinks>Privacy</FooterLinks>
            <FooterLinks>Speed Test</FooterLinks>
          </FooterWrap>
          <FooterWrap>
            <FooterLinks>Help Center</FooterLinks>
            <FooterLinks>Jobs</FooterLinks>
            <FooterLinks>Privacy</FooterLinks>
            <FooterLinks>Cookies References</FooterLinks>
            <FooterLinks>Legal Notices</FooterLinks>
          </FooterWrap>
          <FooterWrap>
            <FooterLinks>Accounts</FooterLinks>
            <FooterLinks>Ways to Watch</FooterLinks>
            <FooterLinks>Corporate Information</FooterLinks>
            <FooterLinks>Only on netflix</FooterLinks>
          </FooterWrap>
          <FooterWrap>
            <FooterLinks>Media Center</FooterLinks>
            <FooterLinks>Terms of use</FooterLinks>
            <FooterLinks>Contact Us</FooterLinks>
          </FooterWrap>
        </FooterContents>
      </>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div``;
const FooterContents = styled.div`
  max-width: 900px;
  margin: 50px auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0 20px;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const FooterWrap = styled.ul``;
const FooterLinks = styled.li`
  color: #757575;
  list-style: none;
  margin-bottom: 16px;
  cursor: pointer;
`;
