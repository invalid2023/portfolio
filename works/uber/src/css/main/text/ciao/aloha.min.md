* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

ul {
  margin: 0;
  padding: 0;
}

nav {
  background-color: green;
  height: 53px;
}

.subheader {
  font-family: "Roboto" serif;
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  color: #FFFFFF;
  padding-top: 20px;
  padding-bottom: 20px;
}
.subheader_btn {
  background: linear-gradient(0deg, #1EACC7 0%, #4CE2FF 100%);
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border: none;
  width: 172px;
  height: 46px;
}
.subheader_text {
  font-style: normal;
  font-weight: 100;
}
.subheader_call {
  font-weight: 300;
  font-size: 12px;
  text-align: right;
}
.subheader_link {
  font-weight: 400;
  font-size: 22px;
  color: #FFFFFF;
  text-align: right;
  display: block;
}
.subheader_mobile {
  background: black;
  opacity: 0.6;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
}
.menu_item {
  list-style: none;
}
.menu_link {
  font-weight: 300;
  font-size: 15px;
  color: #FFFFFF;
  text-decoration: none;
}
.menu_link:hover {
  color: #FFFFFF;
  text-decoration: none;
}

.promo {
  font-family: "Roboto" serif;
  padding-top: 100px;
  color: white;
  height: 800px;
  text-align: center;
  background: url("../img/uber_bg.png") center center/cover no-repeat;
}
.promo_btn {
  background: linear-gradient(0deg, #1EACC7 0%, #4CE2FF 100%);
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border: none;
  width: 211px;
  height: 63px;
  margin-top: 130px;
  font-weight: 400;
  font-size: 18px;
  line-height: 63px;
}
.promo_header {
  font-weight: 900;
  font-size: 60px;
}
.promo_subheader {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
}
.promo_descr {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 30px;
  text-align: center;
}
.promo_partners {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
}

.benefits {
  text-align: center;
}
.benefits_btn {
  height: 27px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background: #000000;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-size: 11px;
  width: 113px;
}
.benefits_item {
  text-align: left;
  padding-left: 30px;
}
.benefits_text {
  font-weight: 700;
  font-size: 38px;
  text-transform: uppercase;
  margin-top: 30px;
}
.benefits span {
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  color: #1EACC7;
}
.benefits .icon_round {
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  min-width: 116px;
  min-width: 116px;
  height: 116px;
  border-radius: 116px;
  background: #4CE2FF;
}

.uber {
  text-align: center;
  text-transform: uppercase;
  height: auto;
}
.uber_btn {
  height: 27px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background: #000000;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-size: 11px;
  width: 113px;
}
.uber_desc {
  text-transform: none;
  color: black;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 30px;
}
.uber_text {
  margin-top: 20px;
  color: #000000;
  font-weight: 700;
  font-size: 38px;
}
.uber_item_desc {
  color: #FFFFFF;
  margin-top: 40px;
}

.uber {
  background: url("../img/Fon1.svg") center center/cover no-repeat;
  min-height: 864px;
}
.uber_item {
  position: relative;
  width: 320px;
  height: 280px;
  padding: 0px;
  padding-top: 50px;
  margin-bottom: 20px;
}
.uber_item_1 {
  background: url("../img/card1.png") center center/cover no-repeat;
}
.uber_item_2 {
  background: url("../img/card2.png") center center/cover no-repeat;
}
.uber_item_3 {
  background: url("../img/card3.png") center center/cover no-repeat;
}
.uber_item_4 {
  background: url("../img/card4.png") center center/cover no-repeat;
}
.uber_item_5 {
  background: url("../img/card5.png") center center/cover no-repeat;
}
.uber_item_6 {
  background: url("../img/card6.png") center center/cover no-repeat;
}
.uber_plus {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background: #000000;
  bottom: 35px;
  margin: 0 auto;
  left: 45%;
}

.choise {
  position: relative;
  text-align: center;
  height: 898px;
  background: #070716;
  padding-top: 50px;
}
.choise_text, .choise_desc {
  color: white;
}
.choise_text {
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
  text-transform: uppercase;
}
.choise_image {
  position: absolute;
  width: 100%;
  top: 250px;
  left: 0px;
  height: 480px;
}
.choise_footer {
  background: url(../img/Fon1.svg) repeat;
  height: 380px;
  margin-top: 367px;
  padding-top: 185px;
}
.choise span {
  display: block;
  margin: 0 auto;
}

.terms {
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
}
.terms_ul li {
  position: relative;
}
.terms_ul li:before {
  content: " ";
  position: absolute;
  left: -10px;
  top: 6px;
  background: url(../icons/check.png) no-repeat;
  width: 50px;
  height: 50px;
}
.terms_margin {
  margin-bottom: 50px;
}
.terms ul li {
  list-style: none;
  padding-left: 20px;
  font-weight: 300;
  font-size: 17px;
  line-height: 30px;
}
.terms_btn {
  display: block;
  margin: 0 auto;
  height: 27px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background: #000000;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-size: 11px;
  width: 113px;
}
.terms_text {
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 38px;
}
.terms_termsCaption {
  margin-bottom: 20px;
  color: #1FBAD6;
  font-weight: 400;
  font-size: 22px;
  line-height: 24px;
}
.terms_termsCaption span {
  text-transform: uppercase;
}
.terms_conditionsCaption {
  text-transform: uppercase;
  color: red;
  margin-bottom: 20px;
}
.terms_ul2 li {
  position: relative;
}
.terms_ul2 li:before {
  content: " ";
  position: absolute;
  left: -10px;
  top: 6px;
  background: url(../icons/redcheck.png) no-repeat;
  width: 50px;
  height: 50px;
}

.aroundworld {
  color: white;
  background: #080816 url(../img/world_bg.svg) center center no-repeat;
  text-align: center;
  height: 720px;
}
.aroundworld_btn {
  height: 27px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  background: #000000;
  background: white;
  color: black;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  font-size: 11px;
  width: 79px;
}
.aroundworld h2 {
  text-transform: uppercase;
  margin-top: 30px;
}
.aroundworld_h {
  display: block;
  text-decoration: none;
  color: #1FBAD6;
  text-transform: uppercase;
  margin-top: 500px;
}

footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
}
footer .social {
  width: 400px;
}
footer .social a {
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 35px;
}
footer .social_facebook {
  background: black url(../icons/facebook.png) center center no-repeat;
}
footer .social_twitter {
  background: black url(../icons/twitter.png) center center no-repeat;
}
footer .social_linkedin {
  background: black url(../icons/linkedin.png) center center no-repeat;
}
footer .social_inst {
  background: black url(../icons/instagram.png) center center no-repeat;
}

.store {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  width: auto;
  height: 50px;
}
.store a {
  padding-right: 10px;
}
.store .windows {
  height: 41px;
}

footer ul li {
  list-style: none;
  text-transform: uppercase;
}

.footer hr {
  width: 301px;
  border: 2px solid #1FBAD6;
  background: #1FBAD6;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.wrapper {
  width: 400px;
}
.wrapper_nav li:last-child {
  margin-right: 0px;
}
.wrapper_leng {
  text-align: center;
  text-transform: uppercase;
  color: #1FBAD6;
}
.wrapper_links {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.wrapper_links li {
  line-height: 11px;
}
.wrapper_links li a {
  font-weight: 300;
  font-size: 11px;
  color: #999999;
}
.wrapper_nav {
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
.wrapper_nav li {
  display: inline-block;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  margin-right: 60px;
  color: #070716;
}

.subheader_mobile {
  display: none;
}

@media (max-width: 1440px) {
  footer {
    flex-direction: column;
    align-items: center;
  }
  footer .wrapper {
    order: -1;
  }
  footer .social {
    text-align: center;
  }
  footer .social a {
    margin-left: 5px;
  }
}
@media (max-width: 1200px) {
  .uber_item {
    width: 290px;
  }
}
@media (max-width: 992px) {
  .uber_item {
    width: 200px;
    height: 180px;
  }
  .menu_link {
    font-size: 12px;
  }
  .subheader {
    text-align: left;
    justify-content: space-around;
  }
  .subheader_btn {
    width: 138px;
    height: 37px;
    font-size: 12px;
  }
  .subheader_call {
    font-size: 12px;
  }
  .subheader .just {
    justify-content: space-between;
  }
  .subheader_logo img {
    height: 29px;
  }
  .subheader_text {
    font-size: 12px;
  }
  .subheader_link {
    font-size: 20px;
  }
  .promo_btn {
    margin-top: 50px;
  }
  .benefits_text {
    font-size: 26px;
  }
}
@media (max-width: 768px) {
  .choise_text {
    font-size: 30px;
  }
  .uber_item {
    width: 200px;
    height: 180px;
  }
  .uber_text {
    font-size: 30px;
  }
  .menu_link {
    font-size: 9px;
  }
  .subheader {
    display: none;
  }
  .subheader_mobile {
    text-align: center;
    display: block;
    position: absolute;
    width: 100%;
  }
  .subheader_mobile_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .subheader_mobile .subheader_btn {
    width: 110px;
    height: 22px;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
  }
  .subheader_mobile_tell {
    font-weight: 400;
    font-size: 12px;
    color: white;
  }
  .promo_descr {
    display: none;
  }
}
@media (max-width: 576px) {
  .choise {
    height: 600px;
  }
  .choise_desc {
    font-size: 10px;
  }
  .choise_text {
    font-size: 25px;
  }
  .choise_footer {
    background: none;
    margin-top: 182px;
    height: 100px;
    color: white;
  }
  .choise_image {
    top: 150px;
  }
  .sm_class {
    flex-direction: column;
    justify-content: center;
  }
  .uber .row {
    flex-direction: column;
  }
}
@media (max-width: 425px) {
  nav {
    padding-top: 16px;
    padding-left: 70%;
  }
  nav .menu {
    display: none;
  }
  nav .activemenu {
    padding: 0px;
    padding-bottom: 10px;
    width: 170px;
    display: block;
    position: absolute;
    flex-direction: column;
    left: 2px;
    background: #000000;
    z-index: 1;
    color: white;
    text-align: center;
    top: 0px;
    left: -201px;
    transition: left 1s;
  }
  nav .block {
    transition: left 1s;
    left: 0px;
  }
  nav .burger {
    width: 40px;
    height: 17px;
  }
  nav .burger .spanM {
    display: none;
  }
  nav .burger .first {
    position: relative;
    top: 6px;
    transition: transform 1s;
    transform: rotate(45deg);
  }
  nav .burger .last {
    transition: transform 1s;
    transform: rotate(-45deg);
  }
  nav .burger span {
    width: 40px;
    height: 3px;
    background: white;
    display: block;
    margin-bottom: 3px;
  }
}
@media (max-width: 374px) {
  .wrapper {
    width: 100%;
  }
  .wrapper_links {
    width: 100%;
    padding-left: 61px;
    padding-right: 45px;
  }
  .wrapper_links li {
    line-height: 21px;
    margin-right: 23px;
  }
  .wrapper_store {
    width: 100%;
  }
  .wrapper_nav li {
    margin-right: 18px;
  }
  .footer .social {
    width: 100%;
  }
  .promo_header {
    font-weight: 900;
    font-size: 30px;
  }
  .promo_subheader {
    font-size: 30px;
  }
  .subheader_logo img {
    height: 15px;
  }
}