import { HomeNavUsersButton } from "./homenavusersbutton"

const HomeNavUsersStyles = {
  width: '200px'
};

export const HomeNavUsers = ({ buttonText }) => {
  return (
    <div className="flex justify-around" style={HomeNavUsersStyles}>
      <HomeNavUsersButton buttonText="Contact Us" bgColor="bg-gray-400" color="text-black"></HomeNavUsersButton>
      <HomeNavUsersButton buttonText="Sign In" bgColor="bg-black" color="text-white"></HomeNavUsersButton>
    </div>
  )
}
