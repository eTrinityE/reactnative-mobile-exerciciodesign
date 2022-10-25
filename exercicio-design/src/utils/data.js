const DADOS = [
    {
        id: 1,
        text: 'Abajur',
        image: require('../../assets/img/01-tablelamps.png')
    },
    {
        id: 2,
        text: 'Lampada de teto',
        image: require('../../assets/img/02-ceilinglamps.png')
    },
    {
        id: 3,
        text: 'Arandela',
        image: require('../../assets/img/03-sconces.png')
    },
    {
        id: 4,
        text: 'Luminária de chão',
        image: require('../../assets/img/04-floorlamps.png')
    },
    {
        id: 5,
        text: 'Luz decorativa',
        image: require('../../assets/img/05-lightdecor.png')
    },
    {
        id: 6,
        text: 'Guirlandas',
        image: require('../../assets/img/06-garlands.png')
    },
];

export const getData = () => {
    return DADOS;
};

export const getDataByID = (id) => {
    return DADOS.find(item => { 
        return item.id === id 
    });
};