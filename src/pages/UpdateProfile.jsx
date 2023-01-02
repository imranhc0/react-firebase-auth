import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function UpdateProfile() {
    const {setUpdateP, handleUpdateProfile, updateP} = useContext(AuthContext)

	const handleChange = (e)=> {
		setUpdateP({
			...updateP,
			[e.target.name]: e.target.value
		})
	}

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-900 text-gray-100">
	<h1 className="text-3xl font-semibold">Update your profile</h1>
	<a className="text-sm text-gray-400" href="/">with name and profile picture</a>
	<form novalidate="" className="space-y-4 ng-untouched ng-pristine ng-valid">
		<div className="flex flex-col space-y-4">
			<label htmlFor="displayName" className="sr-only">Name</label>
			<input onChange={handleChange} id="displayName" type="text" name='displayName' placeholder="Enter Name" className="rounded-t-md border-gray-600 bg-gray-900 text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2" />
			<label htmlFor="photoURL" className="sr-only">Image url</label>
			<input onChange={handleChange} id="photoURL" name="photoURL" type="url" placeholder="Profile Picture Url" className="-mt-1 rounded-b-md border-gray-600 bg-gray-900 text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2" />
		</div>
		
		<button onClick={handleUpdateProfile} type="button" className="px-8 py-3 space-x-2 font-semibold rounded bg-violet-400 text-gray-900">Update Your Profile</button>
	</form>
</div>
    </div>
  )
}
