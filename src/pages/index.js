import React, { useContext, useState } from "react"
import { Context } from '../components/context'
import { NavBar } from '../components/nav'

const Home = () => {

  const context = useContext(Context);

  const [ page, setPage ] = useState('home')

  // Handle Menu Links: Source from Admin Panel - map array of objects to create new objects that set state to the name of the link then use ternary to say onclick set state to that link name and if display === that link them then display that page //

  const menuLinks = [
    {
      name: 'Menu',
      icon:'Menu',
      onClick: () => setPage('menu')
    },
    {
      name: 'Bands',
      icon:'Bands',
      onClick: () => setPage('bands')
    },
    {
      name: 'Events',
      icon: 'Events',
      onClick: () => setPage('events')
    },
    {
      name: 'VIP',
      icon: 'VIP',
      onClick: () => setPage('vip')
    },
    {
      name: 'Contact',
      icon: 'Contact',
      onClick: ()=> setPage('contact')
    }
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      onClick: null
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      onClick: null
    },
    {
      name: 'TripAdvisor',
      icon: 'TripAdvisor',
      onClick: null
    },
  ]


  return(

    <>
      <NavBar
        display={context.display}
        menuLinks={menuLinks}
        socialLinks={socialLinks}
      />
      { page === 'home' ?
        <p>Home</p>
      : page === 'menu' ?
        <p>Menu</p>
      : page === 'bands' ?
        <p>Bands</p>
      : page === 'events' ?
        <p>Events</p>
      : page === 'vip' ?
        <p>VIP</p>
      : page === 'contact' ?
        <p>Contact</p>
      : null
      }
    </>

  )

}

export default Home