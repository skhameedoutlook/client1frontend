import { HomeNav } from "./nav/homenav"
import homeshow from './nav/homeshow.png'

const HomeStyles = {
  // background: 'violet',
}

export const Home = () => {
    return <div className="h-screen">
        <HomeNav></HomeNav>
        <div className="flex flex-col justify-stretch items-center bg-slate-50 h-full">
          <div className="lg:w-9/12 sm:w-full p-4" style={HomeStyles}>
            <h1 className="text-5xl">Nulla pariatur ex consequat occaecat labore fugiat ea quis amet Lorem sint et aliquip qui.</h1>
          </div>
          <div className="lg:w-5/12 sm:w-full p-4" style={HomeStyles}>
            <p className="text-xl">Lorem aliqua ea ea do labore ea aliquip cupidatat officia sint nulla laborum ex. Magna pariatur aliquip velit voluptate. Tempor elit ipsum nisi excepteur nulla.Dolor fugiat ut deserunt culpa sunt. Aliquip dolor irure exercitation elit commodo cupidatat incididunt consequat nulla pariatur. Do est non velit consequat.</p>
          </div>
          <div className="lg:w-7/12 sm:w-11/12 flex-grow p-4" style={HomeStyles}>
            <img className="mx-auto" src={homeshow} alt="homeshow" />
          </div>
        </div>
    </div>
}
