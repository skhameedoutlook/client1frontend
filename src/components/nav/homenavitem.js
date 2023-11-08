import { Link } from "react-router-dom"

export const HomeNavItem = ({ linkName }) => {
  return <Link to={ linkName }>{ linkName }</Link>
}
