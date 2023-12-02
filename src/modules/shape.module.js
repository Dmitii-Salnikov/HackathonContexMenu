import {Module} from '../core/module';
import {random, getRandomColor, getRandomItem} from '../utils';

export class ShapeModule extends Module {
    #figures
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
            const color = getRandomColor();
            const figuresTypeList = ['square', 'triangle', 'rectangle', 'circle'];
            const figureType = getRandomItem(figuresTypeList);
            const figureSize =  random(10, 250);
            const {width, height} = document.body.getBoundingClientRect();
            const positionFigureX = random(0, width - (figureSize * 2));
            const positionFigureY = random(0, height - (figureSize * 2));

            figure.style.top = `${positionFigureY}px`;
            figure.style.left = `${positionFigureX}px`;
            figure.style.backgroundColor = color;
            figure.style.position = 'absolute';

            switch (figureType) {
                case 'square':
                    figure.style.width = `${figureSize}px`;
                    figure.style.height = `${figureSize}px`;
                    break;
            
                case 'triangle':
                    figure.style.backgroundColor = `transparent`;
                    figure.style.borderLeft = `${figureSize}px solid transparent`;
                    figure.style.borderRight = `${figureSize}px solid transparent`;
                    figure.style.borderBottom = `${figureSize}px solid ${color}`;
                    break;

                case 'rectangle':
                    figure.style.width = `${figureSize * 2}px`;
                    figure.style.height = `${figureSize}px`;
                break; 
                
                case 'circle':
                    figure.style.width = `${figureSize}px`;
                    figure.style.height = `${figureSize}px`;
                    figure.style.borderRadius = '50%';
                break; 
            }

            figure.classList.add('figure')
            document.body.append(figure);
        };
    }
}
