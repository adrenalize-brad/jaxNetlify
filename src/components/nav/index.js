import React from 'react'

const NavLink = ({ display, name, icon, onClick }) => {
    return(
        <button
            onClick={onClick}
            ariaLabel={name}
            className={`flex justify-center items-center 
                ${display === 'mobile' ?
                    'flex-col'
                :
                    'flex-row'
                }
            `}
        >
            { display === 'mobile' ? 
                <>{icon}{name}</>
            :
                <>{name}</>
            }
        </button>
    )
}

const SocialLink = ({ className, icon, onClick, name }) => {
    return(
        <button
            onClick={onClick}
            ariaLabl={name}
            className={className}
        >
            {icon}
        </button>
    )
}

const NavLogo = ({ image, onClick }) => {
    return(
        <div>
            Logo
        </div>
    )
}

const NavBar = ({ display, menuLinks, socialLinks, logo, logoClick }) => {

    return(

        <nav 
            className={`absolute left-0 w-full flex flex-row items-center
                ${display === 'mobile' ? 
                    'bottom-0 h-20'
                :
                    'top-0 h-30'}`}
        >

            { display === 'mobile' ?
                null
            :
                <NavLogo
                    image={logo}
                    onClick={logoClick}
                />
            }

            <div className="flex flex-row items-center">
                { menuLinks.map((link) => {
                    return(
                        <NavLink
                            display={display}
                            onClick={link.onClick}
                            icon={link.icon}
                            name={link.name}
                        />
                    )
                })}
            </div>

            { display === 'mobile' ?
                null
            :
                <div className="flex flex-row items-center">
                    { socialLinks.map((link) => {
                        return(
                            <SocialLink
                                icon={link.icon}
                                name={link.name}
                                onClick={link.onClick}
                            />
                        )
                    })}
                </div>       
            }


        </nav>

    )
}

export { NavBar }