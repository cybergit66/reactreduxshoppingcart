const INIT_STATE = [
  { id: 1, title: 'Test 1', link: 'https://www.w3schools.com/css/trolltunga.jpg'},
  { id: 2, title: 'Test 2', link: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg'},
  { id: 3, title: 'Test 3', link: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'},
  { id: 4, title: 'Test 4', link: 'http://www.planwallpaper.com/static/images/Nikon-D810-Image-Sample-6.jpg'},
  { id: 5, title: 'Test 5', link: 'http://www.planwallpaper.com/static/images/tree-247122_90ljtxI.jpg'}
];

export default (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}
