const hairstyles = [
	{
		name: 'Pixie Cut',
		length: 'Short',
		image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhairstyleonpoint.com%2Fthese-are-the-12-most-popular-current-mens-hairstyles%2F&psig=AOvVaw3lpE0hNC7U_v2tr5-oYECU&ust=1677386721579000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp1tPur_0CFQAAAAAdAAAAABAd',
        price: 335
	},
	{
		name: 'Bob',
		length: 'Short',
		image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bewakoof.com%2Fblog%2F9-popular-trendy-hair-styles-for-men%2F&psig=AOvVaw3lpE0hNC7U_v2tr5-oYECU&ust=1677386721579000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp1tPur_0CFQAAAAAdAAAAABAV',
        price:225
	},
	{
		name: 'Ponytail',
		length: 'Long',
		image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F20-easy-mens-haircuts-hairstyles-for-work-and-play--650629477414836934%2F&psig=AOvVaw24cbaKqiVWXWSsvfCV_Z1n&ust=1677386491052000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIju9-Dtr_0CFQAAAAAdAAAAABAP',
        price: 550
	},
	{
		name: 'Braid',
		length: 'Long',
		image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.wp.com%2Ftherighthairstyles.com%2Fwp-content%2Fuploads%2F2021%2F09%2F24-fringe-hairstyle-for-men.jpg%3Fresize%3D500%252C505&imgrefurl=https%3A%2F%2Ftherighthairstyles.com%2Ftypes-of-mens-haircuts%2F&tbnid=3L8giuK5jNSTWM&vet=12ahUKEwjs3eXO7q_9AhUTxCoKHTIOBLAQMygJegUIARDGAQ..i&docid=MFevSvKiHJhwJM&w=500&h=505&q=hairstyle%20for%20MAN%20ANY&client=safari&ved=2ahUKEwjs3eXO7q_9AhUTxCoKHTIOBLAQMygJegUIARDGAQ',
        price:480
	},
	{
		name: 'Curls',
		length: 'Long',
		image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.menshairstyletrends.com%2Fbest-haircuts-for-men%2F&psig=AOvVaw3lpE0hNC7U_v2tr5-oYECU&ust=1677386721579000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp1tPur_0CFQAAAAAdAAAAABAI',
        price: 330
	},
	{
		name: 'Updo',
		length: 'Long',
		image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popsugar.com%2Fbeauty%2Flong-hairstyle-ideas-for-men-47771879&psig=AOvVaw3lpE0hNC7U_v2tr5-oYECU&ust=1677386721579000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp1tPur_0CFQAAAAAdAAAAABAN',
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

   const temp1 = NewObject("Updo","Long","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popsugar.com%2Fbeauty%2Flong-hairstyle-ideas-for-men-47771879&psig=AOvVaw3lpE0hNC7U_v2tr5-oYECU&ust=1677386721579000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCp1tPur_0CFQAAAAAdAAAAABAN", 220)
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
