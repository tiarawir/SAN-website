import React from "react";


// function Menu(e){
//     let list = window.querySelector('ul');
//     e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
//   }

const San = () => {
    return (
        <div>
            <nav className="py-6 bg-blue-50 shadow md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    LOGO SAN
                </div>

                <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                    {/* <i class='bx bx-menu' onClick={Menu(this)}></i> */}
                    <i className='bx bx-menu'></i>
                </span>

                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-sky-500 duration-500"> Beranda </a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-sky-500 duration-500"> Keorganisasian </a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-sky-600 duration-500"> Chapter </a>
                    </li>
                    <li className="mx-4 hover:text-sky-500 duration-500 my-6 md:my-0">
                        <a href="#" className="text-xl "> Program </a>
                        <a href="#"><i className='bx bx-chevron-down'></i></a>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <a href="#" className="text-xl hover:text-sky-500 duration-500"> Kontak </a>
                    </li>
                </ul>

                <div className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-60 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <button className="bg-sky-500 text-white hover:bg-sky-800 duration-500 px-6 py-2 mx-4 rounded-xl">
                        Yuk, Donasi
                    </button>
                </div>
            </nav>

            <main>
                <div className="bg-blue-50 p-10 grid grid-cols-2">
                    <h1 className="text-8xl font-black leading-tight">Senyum <br /> Anak <br /> Nusantara </h1>
                    <p>gambar</p>
                    <h5 className="text-sky-500 text-2xl pb-5">Senyummu senyum kita semua</h5>
                    <h1></h1>
                    <a href="" className="bg-sky-500 text-white hover:bg-sky-800 duration-500 rounded-xl w-fit py-2 px-3 cursor-pointer tracking-wider border-white border-2" >
                        Yuk, gabung san
                    </a>
                    
                  
                </div>
                

            </main>
        </div>
        

        
        

        
        
    )
}

export default San