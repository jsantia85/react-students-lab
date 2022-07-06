const ScoreCard = ({score}) => {
  return ( 
    <div className="score-card">
      <h2>Date: {score.date}</h2>
      <h3>Score: {score.score}</h3>
    </div>
  );
}

export default ScoreCard;