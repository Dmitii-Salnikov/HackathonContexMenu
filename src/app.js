import './styles.css'
import { ContextMenu } from './menu.js'
import { DOC } from './core/constants.js'

// сюда будем закидывать модули
const modulesArray = []

const menu = new ContextMenu('#menu')

//снимаем действие по умолчанию и вызываем наше меню
DOC.addEventListener('contextmenu', (event) => {
    event.preventDefault() 

    menu.open(event.y, event.x)
})

//обрабатываем клик по меню, ищем интересующий нас модуль и запускаем его
const handlerCurrentModule = (event) => {
    const { target } = event
    const currentModuleName = target.dataset.type
    const currentModule = modulesArray.find((item) => {
        return item.type === currentModuleName
    })
    currentModule.trigger()
    menu.close()
}

menu.el.addEventListener('click', handlerCurrentModule)