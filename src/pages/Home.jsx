import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
    const {currentUser} = useContext(AuthContext)
  return (
 
    <section className="bg-gray-800 text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">This is a simple react project
			<span className="text-violet-400">That emplemented Login Registraion with </span>Firebase
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">and this project has social login feature also like facebook, google, github authenticaion system</p>
		<div className="flex flex-wrap justify-center">
			{!currentUser ? <><Link to="login" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Login</Link>
			<Link to="registraion" className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Registraion</Link></> : <Link to="profile" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Go To Profile</Link>}
		</div>
	</div>
</section>
 
  )
}
