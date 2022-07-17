document.getElementById('add-border').addEventListener('click',function(){
    document.getElementById('friend-container').style.border='2px solid red';
});
document.getElementById('add-background').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='aqua';
    }
});
document.getElementById('add-friend').addEventListener('click',function(){
    const addElement=document.getElementById('friend-container');
    const div=document.createElement('div');
    div.classList.add('friend');
    div.innerHTML=`<h3>New- friend</h3>
    <p>Rerum, fuga.</p>`;
    addElement.appendChild(div);

})