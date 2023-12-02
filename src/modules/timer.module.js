import {Module} from '../core/module'

export class TimerModule extends Module {

    #renderElement(){
        const container = document.createElement('div')
        container.className = 'container-timer'
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
        timerValueBlock.className = 'timer-value-block'

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

        timeForm.addEventListener('submit',(event)=>{
            event.preventDefault()
            container.append(timerValueBlock)
            let timerValue = Number(event.target.number.value)
            event.target.number.value = '' 
            
            const interval = setInterval(()=>{

                if(timerValue === 0){
                    spanTimerInDiv.textContent = 'Отсчет времени завершен'
                    clearInterval(interval) 
                    setTimeout(()=>{
                        timerValueBlock.remove()
                        spanTimerInDiv.textContent = 'Начинаем отсчет времени'
                    },1000)
                    timeForm.remove()                    
                } else{                                       
                    spanTimerInDiv.textContent = timerValue
                    timerValue--
                }
                   
            },1000)
        })
      }
}