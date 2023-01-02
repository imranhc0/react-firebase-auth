import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Profile() {
	const navigate = useNavigate()
	const {currentUser, handleEmailVerify} = useContext(AuthContext)
	if(!currentUser?.uid) {
		navigate('/login')
			
	}

	console.log(currentUser?.emailVerified)

  return (
    <>
		{currentUser ? 
		
	<div className="flex items-center flex-col justify-center h-screen">
		{!currentUser?.emailVerified ? <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative bg-gray-900 text-gray-100">
	<div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-700 text-violet-400">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
		</svg>
	</div>
	<div className="p-4 flex-1">
		<h3 className="text-xl font-bold">Email is not verified</h3>
		<p className="text-sm text-gray-400">Your mail is not verified Please verify you mail
			<a onClick={handleEmailVerify} className="underline cursor-pointer"> Send Verification mail</a>
		</p>
	</div>
	<button className="absolute top-2 right-2">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 p-2 rounded cursor-pointer">
			<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
		</svg>
	</button>
</div>: ''}
		<Link to="/update-profile" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Update Profile</Link>

    <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
	
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={`${currentUser.photoURL || 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'}`} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{currentUser.displayName || 'update your profile'}</h2>
			<span className="text-sm text-gray-400">{currentUser.uid}</span>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="text-gray-400">{currentUser.email}</span>
			</span>
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="text-gray-400">+25 381 77 983</span>
			</span>
		</div>
	</div>
</div>
</div> : ''}
	</>
  )
}
