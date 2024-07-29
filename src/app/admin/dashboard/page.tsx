"use client";
import Prodcutrow from "@/components/admin-panel/Prodcutrow";
import { setLoading } from "@/redux/features/loadingReducer";
import { useAppDispatch } from "@/redux/hook";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("/api/get_products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }, [updateTable]);

  return (
    <div>
      <div className="bg-white h-[cals(100vh-96px)] rounded-lg p-4">
        <h2 className="text-3xl">All Products</h2>
        <div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 border-t border-[#cccccc]">
                <th>SR No.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: IProduct, index) => (
                <Prodcutrow
                  key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* {
              openPopup && (
                <Popup
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                 
                />
              )
            } */}
    </div>
  );
};

export default Dashboard;
