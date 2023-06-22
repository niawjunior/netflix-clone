import Image from 'next/image'
import Lock from '../assets/lock.svg'
export default function ChooseProfile() {
    return (
        <main className="flex flex-col bg-[#141414] min-h-screen items-center justify-center profile-container">
            <div className='flex flex-col min-h-[100vh]  mt-[11px]  items-center justify-center'>
                <div className="text-[3.5vw] text-white">Who{"'"}s watching?</div>
                <div className="flex mt-[24px] mb-[5px]">
                    <div className='flex flex-col items-center profile mr-[1.6vw]'>
                        <Image sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 2vw,
                    100vw" className='rounded-[8px] profile-card' src="/img-1.png" alt="me" width="150" height="150" />
                        <h6 className='profile-name text-[#808080] text-xl hover:text-white my-[.4em] font-extralight'>Yanink</h6>
                        <div>
                            <Image
                                priority
                                src={Lock}
                                alt="Lock Icon"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center profile mr-[1.6vw]'>
                        <Image sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 2vw,
                    100vw" className='rounded-[8px] profile-card' src="/img-2.png" alt="me" width="150" height="150" />
                        <h6 className='profile-name text-[#808080] text-xl hover:text-white my-[.4em] font-extralight'>Nani</h6>
                    </div>
                    <div className='flex flex-col items-center profile mr-[1.6vw]'>
                        <Image sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 2vw,
                    100vw" className='rounded-[8px] profile-card' src="/img-3.png" alt="me" width="150" height="150" />
                        <h6 className='profile-name text-[#808080] text-xl hover:text-white my-[.4em] font-extralight'>Man</h6>
                        <div>
                            <Image
                                priority
                                src={Lock}
                                alt="Lock Icon"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center profile mr-[1.6vw]'>
                        <Image sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 2vw,
                    100vw" className='rounded-[8px] profile-card' src="/img-4.png" alt="me" width="150" height="150" />
                        <h6 className='profile-name text-[#808080] text-xl hover:text-white my-[.4em] font-extralight'>Joe</h6>

                    </div>
                    <div className='flex flex-col items-center profile'>
                        <Image sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 2vw,
                    100vw" className='rounded-[8px] profile-card' src="/img-5.png" alt="me" width="150" height="150" />
                        <h6 className='profile-name text-[#808080] font-extralight text-xl hover:text-white my-[.4em]'>Niaw</h6>
                        <div>
                            <Image
                                priority
                                src={Lock}
                                alt="Lock Icon"
                            />
                        </div>
                    </div>
                </div>
                <div className='manage-button border border-[#808080] text-[#808080] px-8 py-2 mt-[4em]'>
                    <button>Manage Profiles</button>
                </div>
            </div>
        </main>
    )
}
