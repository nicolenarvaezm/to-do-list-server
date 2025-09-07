class GlobalDAO {
    constructor(model) {
        this.model = model;
    }
    async create(data) { //create
        try {
            const document = new this.model(data);
            return await document.save();
        } catch (error) {
            throw new Error(`Error creating document: ${error.message}`);
        }
    }

    async read(id) { //read
        try {
            const document = await this.model.findById(id);
            if (!document) throw new Error("Document not found");
            return document;
        } catch (error) {
            throw new Error(`Error getting document by ID: ${error.message}`);
        }
    }

    async update(id, updateData) { //update
        try {
            const updatedDocument = await this.model.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );
            if (!updatedDocument) throw new Error("Document not found");
            return updatedDocument;
        } catch (error) {
            throw new Error(`Error updating document by ID: ${error.message}`);
        }
    }

    async delete(id) { //delete
        try {
            const deletedDocument = await this.model.findByIdAndDelete(id);
            if (!deletedDocument) throw new Error("Document not found");
            return deletedDocument;
        } catch (error) {
            throw new Error(`Error deleting document by ID: ${error.message}`);
        }
    }
    async getAll(filter = {}) { //getAll
        try {
            return await this.model.find(filter);
        } catch (error) {
            throw new Error(`Error getting documents: ${error.message}`);
        }
    }

}
module.exports = GlobalDAO;