import React from "react";

const Footer = ({ content }) => {
    return (
        <footer className="Footer">
            <address>{content.address}</address>
            <ul className="ft__con">
                <li>사업자등록번호 : {content.number}</li>
                <li>전화번호 : {content.tel}</li>
                <li>이메일 : {content.email}</li>
            </ul>
            <span>&copy; {content.name} All Rights Reserved.</span>
        </footer>
    );
};

export default Footer;
