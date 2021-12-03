import React from 'react'

function EditProduct() {
    return (
        <div>
        <MainLayout>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-3">
                            <h4 className="card-title">Add Category</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-md-12 col-lg-7">
                                    <div className="basic-form">
                                        <form onSubmit={(e) => onSubmit(e, {name, slug, image, status})}>
                                            <div className="form-group">
                                                <label className="text-label">
                                                    Category Name<sup>*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control input-rounded"
                                                    placeholder="Category Name"
                                                    value={name}
                                                    onChange={(e) => {setName(e.target.value), setSlug(convertToSlug(e.target.value))}}
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-label">
                                                    Slug<sup>*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control input-rounded"
                                                    placeholder="Slug"
                                                    value={slug}
                                                    onChange={(e) => setSlug(e.target.value)}
                                                    required=""
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-label">
                                                    Category Image
                                                </label>
                                            <FileUploader value={image} onFileSelect={(file) => onFileChange(file)}/>
                                            </div>
                                            <div className="form-group">
                                                <label className="text-label">
                                                    Status
                                                </label>
                                                <select
                                                    id=""
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                    className="form-control input-rounded"
                                                >
                                                    <option value="1">
                                                        Active
                                                    </option>
                                                    <option value="0">
                                                        Inactive
                                                    </option>
                                                </select>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-sm mr-3">Create</button>
                                            <button type="button" className="btn btn-secondary btn-sm">Cancel</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    </div>
    )
}

export default EditProduct
