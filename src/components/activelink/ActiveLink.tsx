import { Link } from "react-router-dom"

interface ActiveLinkProps {
    isActive: boolean;
    linkTitle: string;
    linkUrl: string;
}

function ActiveLink({ isActive, linkTitle, linkUrl }: ActiveLinkProps) {
  return (
    <li className={`text-nowrap px-8 ${isActive ? 'font-bold' : ''}`}>
        <Link to={linkUrl}>{linkTitle}</Link>
    </li>
  )
}

export default ActiveLink