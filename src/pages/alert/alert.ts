import { Component } from '@angular/core'

import { AlertController } from 'ionic-angular'

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  testRadioOpen: boolean
  testRadioResult

  testCheckboxOpen: boolean
  testCheckboxResult

  constructor (
    public alertCtrl: AlertController
  ) {

  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Hey friend!',
      subTitle: 'How do you do today!',
      buttons: ['OK']
    })
    alert.present()
  }

  //提示警报
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'Please insert a name.',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel', data)
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Save', data)
          }
        }
      ]
    })
    prompt.present()
  }

  //确认警报
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Do you agree to enter?',
      message: 'You will enter a blank page.',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree')
          }
        },
        {
          text: 'Aagree',
          handler: () => {
            console.log('Agree')
          }
        }
      ]
    })
    confirm.present()
  }

  //收音机
  doRadio() {
    let alert = this.alertCtrl.create()
    alert.setTitle('Lightsaber color')

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    })

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    })

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    })

    alert.addInput({
      type: 'radio',
      label: 'Orange',
      value: 'yellow'
    })

    alert.addInput({
      type: 'radio',
      label: 'Pink',
      value: 'pink'
    })

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    })

    alert.addButton('Cancel')
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Radio data', data)
        this.testRadioOpen = false
        this.testRadioResult = data
      }
    })

    alert.present()
      .then(() => {
        this.testRadioOpen = true
      })
  }

  //复选框
  showCheckbox() {
    let alert = this.alertCtrl.create()
    alert.setTitle('Which planets have you visited?')

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Coruscant',
      value: 'value3'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Endor',
      value: 'value4'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Hoth',
      value: 'value5'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Jakku',
      value: 'value6'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Naboo',
      value: 'value7'
    })

    alert.addInput({
      type: 'checkbox',
      label: 'Tatooine',
      value: 'value8'
    })

    alert.addButton('Cancel')
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data', data)
        this.testCheckboxOpen = false
        this.testCheckboxResult = data
      }
    })
    alert.present()
      .then(() => {
        this.testRadioOpen = true
      })
  }
}
