const Height45 = {
  height: '35px',
  textOverflow: '',
}

export const HomeNavUsersButton = ({ buttonText, bgColor, color }) => {
  return <button className={`block p-2 rounded ${bgColor} ${color} flex items-center`} style={Height45}>
    { buttonText }
  </button>
}
