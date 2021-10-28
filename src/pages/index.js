import React, { useContext } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { useWindowHeight } from "../hooks"
import { Context } from '../components/context'
import { PageWrapper } from '../components/layout'
import { Switch, Route, useHistory } from 'react-router-dom'
import { NavBar } from '../components/nav'
import { IoFastFoodSharp, IoCalendar, IoCartSharp, IoStar, IoChatboxEllipses } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import Home from '../components/home'
import Menu from '../components/menu'
import Events from '../components/events'
import Shop from '../components/shop'
import Vip from '../components/vip'
import Contact from '../components/contact'

const Index = () => {

  const context = useContext(Context);

  const history = useHistory();

  function redirectHome() {
    history.push("/");
  }

  const pageData = useStaticQuery(graphql`
    query {
      siteID: graphCmsSiteId {
        title
        description
        logo {
          gatsbyImageData(quality: 100)
        }
        backgroundImage {
          gatsbyImageData(quality: 100)
        }
        backgroundColor {
          hex
        }
      }
    }
  `);

  let page = window.location.hash

  const menuLinks = [
      {
        name: 'Menu',
        slug: 'menu',
        icon: <IoFastFoodSharp className={`text-4xl ${page === '#menu' ? 'menu-link-selected-icon' : null}`} />,
        textClass: `${page === '#menu' ? 'menu-link-selected-text' : null}`
      },
      {
        name: 'Events',
        slug: 'events',
        icon: <IoCalendar className={`text-4xl ${page === '#events' ? 'menu-link-selected transform scale-90' : null}`} />,
        textClass: `${page === '#events' ? 'menu-link-selected-text' : null}`
      },
      {
        name: 'Shop',
        slug: 'shop',
        icon: <IoCartSharp className={`text-4xl transform -translate-x-1 ${page === '#shop' ? 'menu-link-selected' : null}`} />,
        textClass: `${page === '#shop' ? 'menu-link-selected-text' : null}`
      },
      {
        name: 'VIP',
        slug: 'vip',
        icon: <IoStar className={`text-4xl ${page === '#vip' ? 'menu-link-selected' : null}`} />,
        textClass: `${page === '#vip' ? 'menu-link-selected-text' : null}`
      },
      {
        name: 'Contact',
        slug: 'contact',
        icon: <IoChatboxEllipses className={`text-4xl ${page === '#contact' ? 'menu-link-selected' : null}`} />,
        textClass: `${page === '#contact' ? 'menu-link-selected-text' : null}`
      }
    ];

    const socialLinks = [
      {
        name: 'Facebook',
        icon: <FaFacebook className="" />,
        onClick: () => window.open('https://www.facebook.com')
      },
      {
        name: 'Instagram',
        icon: <FaInstagram className="" />,
        onClick: () => window.open('https://www.instagram.com')
      },
      {
        name: 'Trip Advisor',
        icon: <FaTripadvisor className="" />,
        onClick: () => window.open('https://www.tripadvisor.com')
      },
    ];

    let windowHeight = useWindowHeight();

    let displayHeight;
    let displayTop;
    if(document.getElementById("mobileHeader") !== null){
        displayHeight =
            windowHeight -
            document.getElementById("mobileHeader").offsetHeight - 
            document.getElementById("navbar").offsetHeight;
        displayTop = 
            document.getElementById('mobileHeader').offsetHeight;
    };


  return(

    <PageWrapper 
      bgImage={pageData.siteID.backgroundImage}
      bgColor={pageData.siteID.backgroundColor}
    >
      <NavBar
        display={context.display}
        logo={pageData.siteID.logo}
        logoClick={() => redirectHome()}
        menuLinks={menuLinks}
        socialLinks={socialLinks}
      />

      <div id="display" className="fixed left-0 w-full z-10 bg-black bg-opacity-60" style={{top: displayTop, height: displayHeight}}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/events" exact component={Events}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/vip" exact component={Vip}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </div>


    </PageWrapper>

  )

}

export default Index