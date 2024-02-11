import Avatar from './assets/avatar.png'
import Github from './assets/github.png'

function App() {
return (
<>
  {/* <nav className="px-8 py-5 md:flex md:justify-between grid text-center justify-center items-center">
      <p className="font-semibold text-xl">renaldinurmazid</p>
      <ul className="flex gap-3">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
      </ul>
  </nav> */}
  <section className="min-h-full p-10 grid justify-center">
      <div className='w-64 rounded-xl bg-gray-800 shadow-xl'>
        <img src={ Avatar } alt="" />
      </div>
      <div className="text-center py-10 grid gap-3">
        <p className="text-3xl font-bold">Renaldi Nurmazid</p>
        <p className="text-xl font-semibold">Junior Web Developer</p>
        <p className="text-xl font-semibold">Follow Me :</p>
          <a href="https://github.com/renaldinurmazid" target="_blank" className="grid justify-center">
            <img src={ Github } alt="" className='w-12'/>
          </a>
      </div>
  </section>
</>
)
}

export default App