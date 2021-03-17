var initialState = [
    {
        id: 1,
        name: "Iphone 12 Pro Max 256GB",
        price: "999 USD",
        altImg: "Iphone 12 Pro Max 256GB",
        srcImg:
            "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg",
        inventory: 1000,
        rating: 5,
        status: true,
    },
    {
        id: 2,
        name: "Iphone 12 Pro Max 128GB",
        price: "999 USD",
        altImg: "Iphone 12 Pro Max 128GB",
        srcImg:
            "https://cdn.tgdd.vn/Products/Images/42/228738/iphone-12-pro-xam-new-600x600-600x600.jpg",
        inventory: 1000,
        rating: 5,
        status: true,
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: "299 USD",
        altImg: "AirPods Pro",
        srcImg:
            "https://bizweb.dktcdn.net/100/324/157/products/3-94574bf8-44a3-40d8-87e2-2981053c4660.jpg?v=1602840587000",
        inventory: 1000,
        rating: 4,
        status: true,
    },
    {
        id: 4,
        name: "iPad Air",
        price: "1999 USD",
        altImg: "iPad Air",
        srcImg:
            "https://cdn.tgdd.vn/Products/Images/522/228896/ipad-air-4-wifi-64gb-2020-xanhduong-600x600-600x600.jpg",
        inventory: 1000,
        rating: 3,
        status: true,
    },
    {
        id: 5,
        name: "Apple Watch Series 6",
        price: "299 USD",
        altImg: "Apple Watch Series 6",
        srcImg:
            "https://cdn.tgdd.vn/Products/Images/7077/212770/apple-watch-s5-44mm-vien-nhom-day-cao-su-10-600x600.jpg",
        inventory: 1000,
        rating: 3,
        status: true,
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default products;
