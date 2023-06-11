import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const VoteSurvey = () => {
    const [surveyData, setSurveyData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);

    useEffect(() => {
        const fetchSurveyData = async () => {
            const surveySnapshot = await getDocs(collection(db, 'surveys'));
            const surveys = [];
            surveySnapshot.forEach((doc) => {
                surveys.push({ id: doc.id, ...doc.data() });
            });
            setSurveyData(surveys[0]);
        };

        fetchSurveyData();
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };

    const handleVoteSubmit = async () => {
        if (selectedOption !== null && !hasVoted) {
            try {
                const surveyRef = doc(db, 'surveys', surveyData.id);
                const updatedVotes = surveyData.options[selectedOption].votes + 1;
                const updateFields = {
                    [`options.${selectedOption}.votes`]: updatedVotes,
                };
                await updateDoc(surveyRef, updateFields);
                console.log('Vote submitted successfully.');
                setHasVoted(true);
            } catch (error) {
                console.error('Error submitting vote: ', error);
            }
        }
    };

    if (!surveyData) {
        return <p>Loading survey...</p>;
    }

    const { question, options, totalVotes } = surveyData;
    const optionsArray = Object.entries(options);

    return (
        <div className="container">
            <h2>{question}</h2>
            <ul>
                {optionsArray.map(([optionKey, option], index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="selector"
                            value={index}
                            checked={selectedOption === index}
                            onChange={handleOptionChange}
                            disabled={hasVoted}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                        <p>
                            Votes: {option.votes} ({((option.votes / totalVotes) * 100).toFixed(2)}%)
                        </p>
                    </li>
                ))}
            </ul>

            {!hasVoted && (
                <button type="button" onClick={handleVoteSubmit} className="submit-button">
                    Vote
                </button>
            )}

            {hasVoted && (
                <p>
                    Total Votes: {totalVotes}
                </p>
            )}
        </div>
    );
};

export default VoteSurvey;
