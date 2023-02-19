import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from '../../pages/api/firebase';
type Spot = {
  name: string,
  state: string,
  city: string,
  address1: string,
  address2: string,
  star: number,
  udate: {
    nanoseconds: number,
    seconds: number,
  },
  udate2: string,
};

const Card = (props: Spot) => {
  return (
    <>
      <div className="w-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-auto">
          <Image className="rounded-t-lg" src="/download.jpg" alt=""
            width={1980}
            height={1150}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }} />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.city + props.address1 + props.address2}
          </p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            場所を確認する→
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;