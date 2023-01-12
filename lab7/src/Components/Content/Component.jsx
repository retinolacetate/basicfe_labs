import React from "react";
import './style.css';;

export class Content extends React.Component{
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    getRandomColor(){
        return '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
    }
    setRandomColor(element){
        element.target.style.background = this.getRandomColor();
        element.target.style.color = this.getRandomColor();
    }

    render() {
        return <>
            <h4>Хоббі:</h4>
            <ul type="circle">
                <li>малювання</li>
                <li id="change_backgrnd1" onClick={this.setRandomColor}>подорожі</li>
                <li class="change_backgrnd2" onClick={this.setRandomColor}>плавання</li>
                <li>танці</li>
            </ul>

            <h4>Улюблені книги:</h4>
            <ol type="I">
                <li>Якщо всі кішки в світі зникнуть - Генкі Кавамура</li>
                <li>1984 - Джордж Оруел</li>
                <li>Маленький принц - Антуан де Сент-Екзюпері</li>
                <li>Гордість і упередженість - Джейн Остін</li>
            </ol>

            <h4>Київ</h4>
            <p>Київ — столиця України (та також мого серця), одне з найбільших і найстаріших міст Європи.
            <br/>Розташований у середній течії Дніпра, у північній Наддніпрянщині.
            <br/>Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни.
            <br/>Населення — понад 2,8 млн чол. Заснований наприкінці V — початку VI століття. </p>
        </>
    }
}