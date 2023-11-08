export const HomeNavUsersButton = ({ buttonText, bgColor, color }) => {
  return <button className={`block p-2 rounded ${bgColor} ${color}`}>
    { buttonText }
  </button>
}
