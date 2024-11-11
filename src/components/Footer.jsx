import { FaGithub,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
    const date = new Date().getFullYear()
    console.log(date)
    return ( 
        <footer className="footer flex gap-5 items-center justify-center mt-10 py-2 border-white">
            <div className="text-md font-bold">
                <a href="https://daxvinci.github.io/portfolio/" className="myPortfolio">
                ©davinci {date}
                </a>
                </div>
            <div className="socials flex gap-6">
                <a href="https://github.com/daxvinci" className="socialLink">
                <FaGithub size={20} />
                </a>
                <a href="https://x.com/elvisveez?t=HeDUbDLIGnbhEAvtKL1WUA&s=09" className="socialLink">
                <FaTwitter size={20} />
                </a>
                <a href="https://www.instagram.com/subetedaijobudesu/profilecard/?igsh=MXZ5emVic2k0NGo4bg==" className="socialLink">
                <FaInstagram size={20} />
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;