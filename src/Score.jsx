import ScoreCard from "./ScoreCard";

const Scores = ({scores}) => {
  return ( 
    <>
      {scores.map(score => 
        <ScoreCard score={score}/>
      )}
    </>
  );
}

export default Scores;