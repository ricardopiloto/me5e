export default class ME5EItemSheet extends ItemSheet {
    get template(){
        return `systems/masseffect5efoundry/templates/sheets/${this.item.data.type}--sheet.html`;
        
    }
}