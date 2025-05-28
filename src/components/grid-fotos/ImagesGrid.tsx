import './ImagesGrid.css'
const ImagesGrid = () => {
    return (
        <div id="galeria" className="parent bg-white px-5 md:px-20 pb-[60px]">
            <div className="div1">
                <img className="w-full aspect-square object-contain rounded-lg" src="/img/valledorado3.webp" alt="GoldenEvent" />

            </div>
            <div className="div2">
                <img className="w-full aspect-square object-contain rounded-lg" src="/img/valledorado2.webp" alt="GoldenEvent" />
            </div>
            <div className="div3">
                <img className="w-full aspect-square object-contain rounded-lg" src="/img/valledorado5.webp" alt="GoldenEvent" />
            </div>
            <div className="div4">
                <img className="w-full aspect-square object-contain rounded-lg" src="/img/valledorado6.webp" alt="GoldenEvent" />

            </div>
            <div className="div5">
                <img className="w-full aspect-square object-contain rounded-lg" src="/img/valledorado1.webp" alt="GoldenEvent" />

            </div>
            <div className="div6">
                <img className="w-full aspect-square object-contain rounded-lg" src="/img/valledorado4.webp" alt="GoldenEvent" />
            </div>
        </div>
    )
}
export default ImagesGrid