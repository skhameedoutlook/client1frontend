import { HomeNavItem } from "./homenavitem"

export const HomeNavLinksHorizontal = () => {
  return (
    <div className="items-center font-bold flex md:w-6/12 md:justify-between lg:w-5/12 lg:justify-around">
        <HomeNavItem linkName={"Platform"} />
        <HomeNavItem linkName={"Sequencing"} />
        <HomeNavItem linkName={"Solutions"} />
        <HomeNavItem linkName={"Company"} />
        <HomeNavItem linkName={"Resources"} />
    </div>
  )
}
