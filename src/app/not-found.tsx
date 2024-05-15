import { Icons } from '@/components/icons'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-200">Oops! Looks like you're lost.</p>
      <div className="animate-bounce">
        <Icons.plane_up className="mx-auto h-16 w-16 text-red-500" />
      </div>
      <p className="mt-4 text-gray-300">Let's get you back <Link href="/" className="text-blue-500">Home</Link>.</p>
    </div>
  )
}
