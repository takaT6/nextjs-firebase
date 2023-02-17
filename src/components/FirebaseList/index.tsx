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
    seconds: number
  },
  udate2: string
}

const makeDate = (sec: string | number): string => {
  const udate = new Date(Number(sec) * 1000);
  console.log(udate)
  const jpDate = `${udate.getFullYear()}年${udate.getMonth() + 1}月${udate.getDate()}日`
  return jpDate;
}

const FirebaseList = () => {
  const [spots, setSpots] = useState(Array<Spot>);
  useEffect(() => {
    db.collection("spots")
      .onSnapshot((snapshot) => {
        setSpots(snapshot.docs.map((doc) => {
          const spot = doc.data() as Spot;
          spot.udate2 = makeDate(spot.udate.seconds);
          return spot;
        }));
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="col-md-11 text-center">
          <div>
            {spots.map((spot) => (
              <div key={spot.name}>
                <span>{spot.name}</span>
                <span>{spot.udate2}</span>
                <span>{spot.state}</span>
                <span>{spot.city + spot.address1 + spot.address2}</span>
                <span>{spot.star}</span>
              </div>
            ))}
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <div className="relative w-28 h-28">
                <Image className="rounded-t-lg" src="/download.jpg" alt="" fill />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirebaseList