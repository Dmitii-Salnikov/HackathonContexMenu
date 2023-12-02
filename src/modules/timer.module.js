import {Module} from '../core/module'

export class TimerModule extends Module {

    #renderElement(){
        const container = document.createElement('div')
        container.className = 'container'
        document.body.append(container)

        const timeValueBlock = document.createElement('div')
        const timeForm = document.createElement('form')

        const timeValue = document.createElement('input')
        timeValue.id = 'number'
        timeValue.type = 'number'
        timeValue.min = 0
        timeValue.placeholder ='Введите число'

        const timerBtn = document.createElement('input')
        timerBtn.type = 'submit'
        timerBtn.value = 'Старт'

        const timerValueBlock = document.createElement('div')
        timerValueBlock.className = 'timerValueBlock'

        const spanTimerInDiv = document.createElement('span')
        spanTimerInDiv.textContent = 'Начинаем отсчет времени'

        timerValueBlock.append(spanTimerInDiv)
        
        timeForm.append(timeValue,timerBtn)
        timeValueBlock.append(timeForm)
        container.append(timeValueBlock)

        return {timeForm, container, timerValueBlock, spanTimerInDiv}
    }
    
    trigger() {        

       const {timeForm, container, timerValueBlock, spanTimerInDiv} = this.#renderElement()

        timeForm.addEventListener('submit',(e)=>{
            e.preventDefault()
            container.append(timerValueBlock)
            let timerValue = Number(e.target.number.value)
            e.target.number.value = '' 
            
            const interval = setInterval(()=>{

                if(timerValue === 0){
                    spanTimerInDiv.textContent = 'Отсчет времени завершен'
                    clearInterval(interval) 
                    setTimeout(()=>{
                        timerValueBlock.remove()
                        spanTimerInDiv.textContent = 'Начинаем отсчет времени'
                    },1000)
                } else{                                       
                    spanTimerInDiv.textContent = timerValue
                    timerValue--
                }
                   
            },1000)
        })
      }
}