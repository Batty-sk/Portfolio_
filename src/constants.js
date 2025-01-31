import {cinflix,c,cplus,react,typescript,gcp,mysql,python,instagram,linkedin,githubsocial,algorithmvisual,magiccards,quiz,mongo, retrodrive, nft_marketplace} from "./assests"
export const HEADER_NAV = ["#hero","#about","#w-experience","#projects"]

export const PROGRAMMING_SKILLS = [c,cplus,react,typescript,python,mysql,githubsocial,gcp,mongo]
export const SOCIAL_LINKS = [{texture_name:'github_texture',link:'https://github.com/Batty-sk'},{texture_name:'linkdin_texture',link:'https://www.linkedin.com/in/saurav-kumar-5225a2292/'},{texture_name:'leetcode_texture', link:'https://leetcode.com/u/BATTY69/'}]

export const WORK_EXPERIENCE = [{role:'Full Stack Intern',company:'Hoping Minds',duration:'6 months'},
    {role:'Frontend Developer',company:'Texium Solutions',duration:'working'}
]
export const PROJECTS = [
    {
        name:'NFT Marketplace',
        image:nft_marketplace,
        github:'https://github.com/Batty-sk/Nft-MarketPlace',
        link:'https://sk-nft-app.netlify.app'
    
    
    },
{
    name:'Retro Drive',
    image:retrodrive,
    github:'https://github.com/Batty-sk/macintosh-file-system',
    link:'https://retrodrive.netlify.app'

},
{
    name:'Movie Companion App',
    image:cinflix,
    github:"https://github.com/Batty-sk/CineFlix",
    link:'https://cineflixhub.netlify.app'
}
,{
    name:'Algorithm Visualizer',
    image:algorithmvisual,
    github:'https://github.com/Batty-sk/A.L.G.O-',
    link:'https://a-l-g-o.vercel.app/'



},]