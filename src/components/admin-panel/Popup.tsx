import { setLoading } from "@/redux/features/loadingReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface PropsType {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {
  const productData = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  const [inputData, setInputData] = useState({
    name: productData.name,
    price: productData.price,
    category: productData.category,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    axios
      .put(`/api/edit_product/${productData._id}`, inputData)
      .then((res) => {
        makeToast("Product updated successfully!");
        setUpdateTable((prevState) => !prevState);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        dispatch(setLoading(false));
        setOpenPopup(false);
      });
  };

  return <div>Popup</div>;
};

export default Popup;
