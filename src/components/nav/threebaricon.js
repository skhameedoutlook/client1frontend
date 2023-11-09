import { HiMenu } from 'react-icons/hi';

const Height45 = {
  height: '45px',
}

export const ThreeBarIcon = ({handleMenuOpen}) => {
  return <div className='flex items-center ml-3' style={Height45}>
    <HiMenu onClick={handleMenuOpen} />
  </div>
}
