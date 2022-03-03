import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">About Us</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Tertimonials</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">About Us</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Tertimonials</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">About Us</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Tertimonials</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Linkedin</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        scamper
                    </SocialLogo>
                    <WebsiteRights>scamper © 2022 All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink 
                            href="/" 
                            target="_blank"
                            aria_label="Facebook">
                                <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink 
                            href="/" 
                            target="_blank"
                            aria_label="Twitter">
                                <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink 
                            href="/" 
                            target="_blank"
                            aria_label="Instagram">
                                <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink 
                            href="/" 
                            target="_blank"
                            aria_label="Lnkedln">
                                <FaLinkedin/>
                        </SocialIconLink>
                        <SocialIconLink 
                            href="/" 
                            target="_blank"
                            aria_label="Youtube">
                                <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer