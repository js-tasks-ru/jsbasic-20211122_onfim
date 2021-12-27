function makeFriendsList(friends) {
  let elem = document.createElement('UL');
  for(const friend of friends) {
    elem.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`;
  }
  return elem;
}
