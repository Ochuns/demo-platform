import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='bg-white shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
                <div className='flex-shrink-0'>
                    <Image 
                        src={"/logo.png"} 
                        alt='logo' 
                        width={75} 
                        height={75}
                        className='h-auto w-auto'
                    />
                </div>
                <nav className='flex gap-6'>
                    <Link 
                        href={"/new"}
                        className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'
                    >
                        登録
                    </Link>
                    <Link 
                        href={"/list"}
                        className='px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium'
                    >
                        一覧
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header