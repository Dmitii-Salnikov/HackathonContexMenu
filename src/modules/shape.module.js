import {Module} from '../core/module';
import {random, getRandomColor} from '../utils';

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const figure = document.querySelector(".figure");
        if (!figure) {
            addFigure();
        } else {
            removeFigure();
            addFigure()
        }

        function removeFigure() {
            figure.remove();
        };

        function addFigure() {
            const figure = document.createElement("div");
            figure.classList.add('figure')
          
            const size = random(10,500)

            const x = random(0, window.innerWidth - size - 10)
            const y = random(0, window.innerHeight - size - 10)
          
            const color = getRandomColor();

            figure.style.backgroundColor = color;
            figure.style.boxShadow = `0 0 2px ${color}`;
            figure.style.position = 'absolute';
            figure.style.width = `${size}px`;
            figure.style.height = `${size}px`;
            figure.style.top = `${y}px`
            figure.style.left = `${x}px`

            document.body.append(figure);
        };
    }
}
