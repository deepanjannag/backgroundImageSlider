let imageNumber = 0;
document.querySelector('.btn-right').addEventListener('click', ()=>changeImage(1));
document.querySelector('.btn-left').addEventListener('click', ()=>changeImage(4));

function changeImage(change) {
    imageNumber = (imageNumber + change) % 5;
    let image = 'contBcg-' + imageNumber + '.jpeg';
    document.querySelector('.img-container').style.backgroundImage = "url('img/" + image + "')";
}