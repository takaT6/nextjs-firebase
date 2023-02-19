import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from '../../pages/api/firebase';
import Card from "./Card";


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

const makeDate = (sec: string | number): string => {
  const udate = new Date(Number(sec) * 1000);
  console.log(udate);
  const jpDate = `${udate.getFullYear()}年${udate.getMonth() + 1}月${udate.getDate()}日`;
  return jpDate;
};

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
              <Card {...spot} key={spot.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirebaseList;