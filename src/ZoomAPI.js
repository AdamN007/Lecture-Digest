import React, { useState } from 'react';
import axios from 'axios';
import jsonwebtoken from 'jsonwebtoken';

const MeetingTranscript = ({ meetingId }) => {
  const [transcript, setTranscript] = useState(null);

  // Generate JWT
  const apiKey = 'your_api_key';
  const apiSecret = 'your_api_secret';
  const payload = {
    iss: apiKey,
    exp: (Date.now() / 1000) + 30, // JWT expiration time in seconds
  };
  const jwt = jsonwebtoken.sign(payload, apiSecret);

  // Make API request to retrieve transcript
  const getTranscript = async () => {
    try {
      const response = await axios.get(
        `https://api.zoom.us/v2/meetings/${meetingId}/transcript`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );
      setTranscript(response.data);
    } catch (error) {
      console.error(error);
    }
  }}

export default MeetingTranscript;