function Sample() {
    return (
        <>
            <SkipComponent />
            <WrapComponent />
        </>
    )
}

// Skip
class SkipComponent extends React.Component {
    render() {
        return (
            <>
                <ul className="skip">
                    <li><a href="#main_image">콘텐츠바로가기</a></li>
                </ul>
            </>
        );
    }
}

// Wrap
class WrapComponent extends React.Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />

            </>
        );
    }
}
// header
class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <header>
                    <div id="header" class="cf">
                        <div class="head1">
                            <div class="logo"><a href="#"><h1>SIMMONS</h1></a></div>
                            <nav>
                                <ul class="navi" id="menu">
                                    <li><a href="#">Beautyrest BLACK</a></li>
                                    <li><a href="#">COLLECTION</a></li>
                                    <li><a href="#">PRODUCT</a></li>
                                    <li><a href="#">ONLINE STORE</a></li>
                                    <li><a href="#">OUTLET</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="head2">
                            <ul class="nav1 cf">
                                <li><a href="#">LOGIN</a></li>
                                <li><a href="#">CART</a></li>
                                <li><a href="#">CONTACT US</a></li>
                            </ul>
                            <ul class="nav2">
                                <li><a href="#">ABOUT US</a></li>
                                <li><a href="#">SIMMONS Factorium</a></li>
                                <li><a href="#">SIMMONS GALLERY</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

// main
class MainComponent extends React.Component {
    render() {
        return (
            <>
                <div id="cont-wrap">

                    <section id="content">
                        <ul class="banner">
                            <li><a href="#"><img src="img/banner1.jpg" alt="" /></a></li>
                            <li><a href="#"><img src="img/banner2.jpg" alt="" /></a></li>
                            <li><a href="#"><img src="img/banner3.jpg" alt="" /></a></li>
                            <li><a href="#"><img src="img/banner5.jpg" alt="" /></a></li>
                        </ul>
                    </section>

                    <section id="content1">
                        <div class="first-title">
                            <h3>SIMMONS COLLECTION
                                <div class="line"></div>
                            </h3>
                            <span>BEAUTIREST / N32 / KENOSHA</span>
                        </div>
                        <div class="cf cont1">

                            <div class="wrap">

                                <input type="radio" defaultChecked name="navigation" id="menu1" class="button" />

                                <div class="contents">
                                    <div class="inner">
                                        <div class="description">
                                            <img src="img/collect_1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <label for="menu1" class="label a">
                                    <span class="rotate">
                                        <p>SIMMONS</p>
                                    </span>
                                </label>

                                <input type="radio" name="navigation" id="menu2" class="button" />
                                <div class="contents">
                                    <div class="inner">
                                        <div class="description">
                                            <img src="img/collect_2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <label for="menu2" class="label b">
                                    <span class="rotate">
                                        <p class="nr">01</p>
                                        <p>Beautyrest</p>
                                    </span>
                                </label>

                                <input type="radio" name="navigation" id="menu3" class="button" />
                                <div class="contents">
                                    <div class="inner">
                                        <div class="description">
                                            <img src="img/collect_3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <label for="menu3" class="label c">
                                    <span class="rotate">
                                        <p class="nr">02</p>
                                        <p>N32</p>
                                    </span>
                                </label>

                                <input type="radio" name="navigation" id="menu4" class="button" />
                                <div class="contents">
                                    <div class="inner">
                                        <div class="description">
                                            <img src="img/collect_4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <label for="menu4" class="label d">
                                    <span class="rotate">
                                        <p class="nr">03</p>
                                        <p>KENOSHA</p>
                                    </span>
                                </label>

                                <input type="radio" name="navigation" id="menu5" class="button" />
                                <div class="contents">
                                    <div class="inner">
                                        <div class="description">
                                            <img src="img/collect_5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <label for="menu5" class="label e">
                                    <span class="rotate">
                                        <p class="nr">04</p>
                                        <p>KENOSHA</p>
                                    </span>
                                </label>

                            </div>
                        </div>
                    </section>

                    <section id="content2">

                        <div class="second-title">
                            <h3>MATTRESS<div class="line"></div></h3>
                        </div>
                        <div class="width-scrollbox">
                            <ul class="collectbox">
                                <li><a href="#"><img src="img/mattress1.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress2.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress3.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress4.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress5.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress6.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress7.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress8.jpg" alt="" /></a></li>
                                <li><a href="#"><img src="img/mettress9.jpg" alt="" /></a></li>
                            </ul>
                        </div>


                    </section>
                    <section id="content3">

                        <div class="third-title">
                            <h3>SIMMONS MEDIA
                                <div class="line"></div>
                            </h3>
                        </div>
                        <div class="youtubebox cf">
                            <ul>
                                <li><a href="https://www.youtube.com/watch?v=dfiF3SSMiJE"><img src="img/youtube1.jpg" alt="2021 에너지 넘치는 일상 하품편 디스코 버전" /><span>2021 에너지 넘치는 일상:하품편(Disco.ver.)</span></a></li>
                                <li><a href="https://www.youtube.com/watch?v=Fwb1we1h2JI"><img src="img/youtube2.png" alt="2021 에너지 넘치는 일상 하품편 칠 버전" /><span>2021 에너지 넘치는 일상:하품편(Chill.ver.)</span></a></li>
                                <li><a href="https://www.youtube.com/watch?v=zft4Bo_SIuM"><img src="img/youtube3.jpg" alt="2020 매너가 편안함을 만든다 지하철편" /><span>2020 매너가 편안함을 만든다 '지하철편'</span></a></li>
                            </ul>

                            <div class="thumnail"><iframe width="1000" height="620" src="https://www.youtube.com/embed/mn_QIhyfa8s" title="‘Oddly Satisfying Video(OSV)’" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                        </div>

                    </section>
                    <section id="content4">
                        <div class="fourth-title">
                            <h3>HERITAGE
                                <div class="line"></div>
                            </h3>
                            <span>편안하고 기품있는 침실문화의 시작, Since 1870</span>
                        </div>
                        <div class="cont-wrap cf">
                            <div class="first-box">
                                <img src="img/HERITAGE1.jpg" alt="" />
                                <span>Comfort<br />
                                    편안함의 원칙을 지켜나갑니다.
                                </span>
                            </div>
                            <div class="second-box">
                                <img src="img/HERITAGE2.jpg" alt="" />
                                <span>Eco-friendly<br />
                                    다음세대를 생각합니다
                                </span>
                            </div>
                            <div class="third-box">
                                <img src="img/HERITAGE3.jpg" alt="" />
                                <span>Science &#38; Craftmanship<br />
                                    품질에 대한 고집으로 기본원칙을 지킵니다.</span>
                            </div>

                        </div>
                    </section>
                </div>


            </>
        );
    }
}
// footer
class FooterComponent extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div class="footer-wrap">
                        <span class="foot-logo"><a href="#">SIMMONS</a></span>
                        <div class="foot-nav">
                            <span><a href="#">이용약관</a></span>
                            <span><a href="#">개인정보처리방침</a></span>
                        </div>
                        <p class="text-c">본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다. </p>
                        <p>Copyright © by SIMMONS-K, Co., Ltd All Rights Reserved.</p>

                    </div>
                </footer>


            </>
        );
    }
}


ReactDOM.render(
    <Sample />,
    document.getElementById("root")
);
