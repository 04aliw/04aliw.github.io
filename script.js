const hairstyles = [
	{
		name: 'Pixie Cut',
		length: 'Short',
		image: 'asdf.jpg',
        price: 335
	},
	{
		name: 'Bob',
		length: 'Short',
		image: 'qwe.jpg',
        price:225
	},
    {
		name: 'crush',
		length: 'Short',
		image: 'crop.webp',
        price:1000
	},
    {
		name: 'crop',
		length: 'Short',
		image: 'short1.jpg',
        price:1000
	},
	{
		name: 'Ponytail',
		length: 'Long',
		image: 'long.jpg',
        price: 550
	},
	{
		name: 'Braid',
		length: 'Long',
		image: 'long4.jpg',
        price:480
	},
	{
		name: 'Curls',
		length: 'Long',
		image: 'long22.jpg',
        price: 330
	},
	{
		name: 'Updo',
		length: 'Long',
		image: 'long3.jpg',
        price: 220
	}
];



function NewObject(name, length, image, price) {
	const object = {
		name: name,
		length: length,
		image: image,
		price: price
	}

	return object
  }

  function averageSum(hairstyles) {
    let sum = 0;
    for (let i = 0; i < hairstyles.length; i++) {
      sum += hairstyles[i]['price'];
      
      
    }
    return sum / hairstyles.length;

}
   const temp1 = NewObject("Updo","Long","long3.jpg", 220)
   console.log(temp1);

const shortHairstyles = hairstyles.filter(hairstyle => hairstyle.length === 'Short');
const longHairstyles = hairstyles.filter(hairstyle => hairstyle.length === 'Long');

const shortHairstylesList = document.querySelector('#short-hairstyles');
shortHairstyles.forEach(hairstyle => {
	const li = document.createElement('li');
	const img = document.createElement('img');
	img.src = hairstyle.image;
	img.alt = hairstyle.name;
	li.appendChild(img);
	shortHairstylesList.appendChild(li);
});

const longHairstylesList = document.querySelector('#long-hairstyles');
longHairstyles.forEach(hairstyle => {
	const li = document.createElement('li');
	const img = document.createElement('img');
	img.src = hairstyle.image;
	img.alt = hairstyle.name;
	li.appendChild(img);
	longHairstylesList.appendChild(li);
});
document.write("<h4>Average Price: " + averageSum(hairstyles) + "</h4>");
