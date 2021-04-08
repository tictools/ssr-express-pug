class Task {
    constructor(id, title, description, category, status){
        this.setId(id)
        this.setTitle(title)
        this.setDescription(description)
        this.setCategory(category)
        this.setStatus(status)
        return this.build()
    }

    id(){
        return this._id   
    }
    
    title(){
        return this._title   
    }
    
    description(){
        return this._description   
    }
    
    category(){
        return this._category
    }
    
    status(){
        return this._status
    }

    setId(id){
        this._id = id
    }

    setTitle(title){
        this._title = title
    }

    setDescription(description){
        this._description = description
    }
    
    setCategory(category){
        this._category = category
    }
    
    setStatus(status){
        this._status = status
    }

    build(){
        return({
            id: this.id(),
            title: this.title(),
            description: this.description(),
            category: this.category(),
            status: this.status(),
        })
    }
}

module.exports = Task