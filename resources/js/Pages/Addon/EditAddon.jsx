import React, {useState} from "react";
import {Inertia} from '@inertiajs/inertia' 

import MainLayout from "@/Layouts/Layout";


function EditAddon({addon}) {


    const [id, setId] = useState(addon.id);
    const [addonName, setAddonName] = useState(addon.name);
    const [slug, setSlug] = useState(addon.slug);
    const [price, setPrice] = useState(addon.price);
    const [specialPrice, setSpecialPrice] = useState(addon.special_price);
    const [status, setStatus] = useState(addon.is_active);

    const convertToSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    }

    const onSubmit = (e,data) => {
        e.preventDefault();
        Inertia.put(route('addons.update'), data);
        console.log(data)
    }

    return (
        <MainLayout>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body p-3">
                        <h4 className="card-title">Add Addon</h4>
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
                                    <form onSubmit={(e) => onSubmit(e, {id, addonName, slug, price, specialPrice, status})}>
                                        <div className="form-group">
                                            <label className="text-label">
                                                Addon Name<sup>*</sup>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control input-rounded"
                                                placeholder="Addon Name"
                                                value={addonName}
                                                onChange={(e) => {setAddonName(e.target.value), setSlug(convertToSlug(e.target.value))}}
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
                                                Price<sup>*</sup>
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control input-rounded"
                                                placeholder="Price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                required=""
                                                min="0"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-label">
                                                Special Price
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control input-rounded"
                                                placeholder="Special Price"
                                                value={specialPrice}
                                                onChange={(e) => setSpecialPrice(e.target.value)}
                                                required=""
                                                min="0"
                                            />
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
    )
}

export default EditAddon
