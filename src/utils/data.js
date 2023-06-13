const tea = {
	id: self.crypto.randomUUID(),
	name: 'Tea',
	imgUrl: '../src/assets/images/tea.png',
	alt: `Picture of a cup of tea`,
};

const coffee = {
	id: self.crypto.randomUUID(),
	name: 'Coffee',
	imgUrl: '../src/assets/images/coffee.png',
	alt: `Picture of a cup coffee`,
};

const kombucha = {
	id: self.crypto.randomUUID(),
	name: 'Kombucha',
	imgUrl: '../src/assets/images/kombucha.png',
	alt: `Picture of a kombucha drink`,
};

const orangeJuice = {
	id: self.crypto.randomUUID(),
	name: 'Orange juice',
	imgUrl: '../src/assets/images/orange-juice.png',
	alt: `Picture of a glass of orange juice`,
};

const water = {
	id: self.crypto.randomUUID(),
	name: 'Water',
	imgUrl: '../src/assets/images/water.png',
	alt: `Picture of a glass of water`,
};

const cola = {
	id: self.crypto.randomUUID(),
	name: 'Cola',
	imgUrl: '../src/assets/images/cola.png',
	alt: `Picture of a glass of cola`,
};

export const availableDrinks = [
	tea,
	coffee,
	kombucha,
	orangeJuice,
	water,
	cola,
];