let catalog = [
{
    "title": "apple",
    "category": "fruit",
    "price":12.40,
    "image":"apple.jpeg",
    "_id": "1",

},
{
    "title": "butter",
    "category": "fruit",
    "price":18.45,
    "image":"butter.jpeg",
    "_id": "2",

},
{
    "title": "carrots",
    "category": "fruit",
    "price":18.12,
    "image":"carrots.jpeg",
    "_id": "3",

},
{
    "title": "butter",
    "category": "fruit",
    "price":21.00,
    "image":"butter.jpeg",
    "_id": "4",

},
{
    "title": "lettucce",
    "category": "fruit",
    "price":10.00,
    "image":"lettuce.jpeg",
    "_id": "5",

},
{
    "title": "milk",
    "category": "fruit",
    "price":13.55,
    "image":"milk.jpeg",
    "_id": "6",

},
{
    "title": "patatos",
    "category": "vegetables",
    "price":24.10,
    "image":"patatos.jpeg",
    "_id": "7",

},
{
    "title": "tomatoe",
    "category": "vegetables",
    "price":12.31,
    "image":"tomatoe.jpeg",
    "_id": "8",

},
];

class DataService {

        getProduct(){
            //retrieve the products to display
            return catalog;
        }
}

export default DataService;