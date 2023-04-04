import React from 'react';
import img from '../img/man-working-using-virtual-reality-4019408-3337377@0 1.svg'
import image from '../img/photochka.svg'

const Complete = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="img flex ml-10 mt-10 items-center">
                    <img src={img} alt=""/>
                    <div className="ml-20">
                        <h1 className="text-5xl text-blue-50">We complete every projects <br/> extra care as customer
                            need</h1>
                        <p className=" text-blue-50 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis <br/>
                            nuncoe scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius <br/>
                            molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit <br/>
                            laborum iure inventore possimus laboriosam qui nam. </p>
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">Read
                            more
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="img flex ml-20 mt-10 items-center">
                    <div>
                        <h1 className="text-5xl text-blue-50">We complete every projects <br/> extra care as customer
                            need</h1>
                        <p className=" text-blue-50 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis <br/>
                            nuncoe scelerisque in. orem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius <br/>
                            molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit <br/>
                            laborum iure inventore possimus laboriosam qui nam. </p>
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4">Read
                            more
                        </button>
                    </div>
                    <div>
                        <img className="ml-20" src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complete;