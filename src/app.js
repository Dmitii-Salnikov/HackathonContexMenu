import './styles.css'
import { ShapeModule } from './modules/shape.module'

const shapeModule = new ShapeModule("ShapeModule", "Cоздать фигуру");
shapeModule.trigger();

document.addEventListener('click', () => {
    shapeModule.trigger();
});
