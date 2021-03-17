var initialState = [
    {
        id: 1,
        name: 'Iphone 12',
        image: '',
        description: 'Made by Apple',
        price: 999,
        iventory: 30
    },
    {
        id: 2,
        name: 'Iphone 6',
        image: '',
        description: 'Made by Apple',
        price: 499,
        iventory: 22
    },
    {
        id: 3,
        name: 'Iphone 11',
        image: '',
        description: 'Made by Apple',
        price: 799,
        iventory: 10
    },
];

const product = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default product;