import './Korta.css'

export default function Korta( {korta, handlePasirinkimas, flipped, disabled} ) {
    const handleClick = () => {
        if (!disabled) {
            handlePasirinkimas(korta)
        }
    }

    return (
        <div className='korta'>
            <div className={flipped ? 'flipped' : ''}>
                <img src={korta.src} alt="Kortos priekini pusė" className='priekis' />
                <img src='/img/cover.webp' alt="Kortos galinė pusė" className='nugara' onClick={handleClick} />
            </div>
        </div>
    )
}