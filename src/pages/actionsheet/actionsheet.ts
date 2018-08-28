import { Component } from '@angular/core'

import { Platform, ActionSheetController } from 'ionic-angular'

@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html'
})
export class ActionsheetPage {
  constructor (
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete')
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share')
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'play' : null,
          handler: () => {
            console.log('Play')
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel')
          }
        }
      ]
    })
    actionSheet.present()
  }
}
