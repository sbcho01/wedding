import { useEffect, useRef, useState } from 'react'

const HomeMusic = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        /* 초기 볼륨 설정 */
        if (audioRef.current) audioRef.current.volume = 0.3

        const handleAudio = (e: KeyboardEvent) => {
            if (e.key === 'Escape') if (audioRef.current) audioRef.current.pause()
        }
        document.addEventListener('keydown', handleAudio)
        return () => document.removeEventListener('keydown', handleAudio)
    }, [])

    useEffect(() => {}, [])

    return (
        <div className="px-[24px] flex items-center justify-end min-h-[50px]">
            <audio ref={audioRef} className='outline-none shadow-none h-[30px]' controls loop autoPlay>
                <source src="/Ryan Mack-01-Forever and Ever and Always.mp3" type="audio/mp3" />이
            </audio>
        </div>
    )
}

export default HomeMusic
