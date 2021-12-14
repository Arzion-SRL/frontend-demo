export const sizes = {
  square: {
    width: 50,
    height: 50,
  },
  ships: {
    width: 10,
  }
};

export const colors = {
  success: '#3BA55C',
  danger: '#CF513D',
  info: '#53D3F2',
  primary: '#305ED7',
  warning: '#F7CA2C',
};

export const ships = [{
  name: 'carrier',
  color: '#ffc300',
  directions: [
    [0, 1, 2, 3], // Horizontal
    [0, sizes.ships.width * 1, sizes.ships.width * 2, sizes.ships.width * 3], // Vertical
  ]
},{
  name: 'cruiser',
  color: '#e5b722',
  directions: [
    [0, 1, 2], // Horizontal
    [0, sizes.ships.width * 1, sizes.ships.width * 2], // Vertical
  ]
},{
  name: 'cruiser',
  color: '#dbb025',
  directions: [
    [0, 1, 2], // Horizontal
    [0, sizes.ships.width * 1, sizes.ships.width * 2], // Vertical
  ]
},{
  name: 'cruiser',
  color: '#c49c19',
  directions: [
    [0, 1, 2], // Horizontal
    [0, sizes.ships.width * 1, sizes.ships.width * 2], // Vertical
  ]
},{
  name: 'submarine',
  color: '#b28a05',
  directions: [
    [0, 1], // Horizontal
    [0, sizes.ships.width], // Vertical
  ]
}];
