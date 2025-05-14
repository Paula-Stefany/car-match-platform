import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export function Products(){
    return(
        <section className='py-10 text-gray-900'>
            <h1 className='w-fit m-auto text-2xl text-center font-medium mb-8 md:text-3xl'>Centenas de carros novos e usados em todo o Brasil</h1>
            <Swiper
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className='min-w-[300px] min-h-[400px] bg-gray-200 rounded-lg'>
                    <article className=' min-h-[400px]'>
                        <img className='min-h-[270px] rounded-t-lg' src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202504/20250418/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem20333533694.jpg?s=fill&w=552&h=414&q=60" alt="Carro" />
                        <div className='flex flex-col min-h-[130px] px-3  justify-evenly '>
                            <h3 className='font-medium text-xl '>Honda Civic</h3>
                            <div className='flex flex-col'>
                                <span>Ano 2026/2026 | 23.000 km</span>
                                <strong className='font-medium'>R$ 190.000</strong>
                            </div>
                            
                            <div>
                                <span>
                                    Campo Grande - MS
                                </span>
                            </div>
                        </div>
                        
                    </article>
                </SwiperSlide>
                <SwiperSlide className='min-w-[300px] min-h-[400px] bg-gray-200 rounded-lg'>
                    <article className=' min-h-[400px]'>
                        <img className='min-h-[270px] rounded-t-lg' src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202504/20250418/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem20333533694.jpg?s=fill&w=552&h=414&q=60" alt="Carro" />
                        <div className='flex flex-col min-h-[130px] px-3  justify-evenly '>
                            <h3 className='font-medium text-xl '>Honda Civic</h3>
                            <div className='flex flex-col'>
                                <span>Ano 2026/2026 | 23.000 km</span>
                                <strong className='font-medium'>R$ 190.000</strong>
                            </div>
                            
                            <div>
                                <span>
                                    Campo Grande - MS
                                </span>
                            </div>
                        </div>
                        
                    </article>
                </SwiperSlide>
                <SwiperSlide className='min-w-[300px] min-h-[400px] bg-gray-200 rounded-lg'>
                    <article className=' min-h-[400px]'>
                        <img className='min-h-[270px] rounded-t-lg' src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202504/20250418/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem20333533694.jpg?s=fill&w=552&h=414&q=60" alt="Carro" />
                        <div className='flex flex-col min-h-[130px] px-3  justify-evenly '>
                            <h3 className='font-medium text-xl '>Honda Civic</h3>
                            <div className='flex flex-col'>
                                <span>Ano 2026/2026 | 23.000 km</span>
                                <strong className='font-medium'>R$ 190.000</strong>
                            </div>
                            
                            <div>
                                <span>
                                    Campo Grande - MS
                                </span>
                            </div>
                        </div>
                        
                    </article>
                </SwiperSlide>
                <SwiperSlide className='min-w-[300px] min-h-[400px] bg-gray-200 rounded-lg'>
                    <article className=' min-h-[400px]'>
                        <img className='min-h-[270px] rounded-t-lg' src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202504/20250418/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem20333533694.jpg?s=fill&w=552&h=414&q=60" alt="Carro" />
                        <div className='flex flex-col min-h-[130px] px-3  justify-evenly '>
                            <h3 className='font-medium text-xl '>Honda Civic</h3>
                            <div className='flex flex-col'>
                                <span>Ano 2026/2026 | 23.000 km</span>
                                <strong className='font-medium'>R$ 190.000</strong>
                            </div>
                            
                            <div>
                                <span>
                                    Campo Grande - MS
                                </span>
                            </div>
                        </div>
                        
                    </article>
                </SwiperSlide>
                <SwiperSlide className='min-w-[300px] min-h-[400px] bg-gray-200 rounded-lg'>
                    <article className=' min-h-[400px]'>
                        <img className='min-h-[270px] rounded-t-lg' src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202504/20250418/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem20333533694.jpg?s=fill&w=552&h=414&q=60" alt="Carro" />
                        <div className='flex flex-col min-h-[130px] px-3  justify-evenly '>
                            <h3 className='font-medium text-xl '>Honda Civic</h3>
                            <div className='flex flex-col'>
                                <span>Ano 2026/2026 | 23.000 km</span>
                                <strong className='font-medium'>R$ 190.000</strong>
                            </div>
                            
                            <div>
                                <span>
                                    Campo Grande - MS
                                </span>
                            </div>
                        </div>
                        
                    </article>
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}