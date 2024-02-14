import React, { useState, useEffect } from 'react';

const Intro = () => {
  const images = [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12cf12ac1c8e484ea487ad6400ee3444_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Black_GZ0355_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac09bb56249b43158485aca1007cc1ef_9366/Excel_Backpack_Black_EX6933_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/df67ab60b5574c368b76adf9010f2d2d_9366/Tee_Time_5-Panel_Hat_Black_HA9254_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/29ef510920b54492a721aa1c01782cb2_9366/Steel_Metal_Bottle_1L_White_CL6092_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2aaf5e8a7924f1d9277ac9f005b5f37_9366/Santiago_Lunch_Bag_Black_EX6532_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1e27ae8bbfb647489261ac8e015d181f_9366/Icon_Snapback_Hat_Grey_EX6798_01_standard.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/523731a02e914d318cb4adcc00f985ba_9366/adidas_FWD-02_Sport_True_Wireless_Earbuds_Grey_EY5113_03_standard_hover.jpg",
     "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",




  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
}, []);

 

  return (
    <div className='mt-16'>
      <div className='flex justify-center items-center bg-gradient-to-b from-gray-200 to-gray-400  p-2'>
      <img className="w-3/12 rounded-3xl p-2" src={images[currentImageIndex]} alt="" />
    </div>
    <div>
    <p className='mt-1 text-center font-bold bg-gray-100 text-gray-500 p-2 w-full '>Exciting Offers <span className='text-fuchsia-500'>Just add to cart</span></p>

    </div>
    </div>
  );
};

export default Intro;
