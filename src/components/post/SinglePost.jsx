import { ref } from "firebase/database";
import React from "react";
import { useList } from "react-firebase-hooks/database";
import { useLocation, useParams } from "react-router-dom";
import { db } from "../../../firebase";
import TextWithMarkup from "../code/TextWithMarkup";

export default function SinglePost() {
  const params = useParams();
  const location = useLocation();
  const reference = ref(db, location?.pathname);
  const [snapshots, loading, error] = useList(reference);

  snapshots.map((snapshot) => console.log(snapshot.val()));
  return (
    <div>
      {snapshots.map((snapshot) => (
        <TextWithMarkup key={snapshot.key} text={snapshot.val()} />
      ))}
    </div>
  );
}
