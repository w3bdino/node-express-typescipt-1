import express, { Request, Response } from 'express';
import { checkWordString } from '../utils/checkWordString';
import {
  CONTAINS_GOODBYE_WORDS,
  CONTAINS_WELCOME_WORDS,
  DEFAULT_MESSAGE,
  GOODBYE_MESSAGE,
  WELCOME_MESSAGE,
} from '../utils/contants';

export const postMessage = (req: Request, res: Response) => {
  // Application routing
  const { conversation_id, message } = req.body;

  if (!conversation_id) {
    return res.status(400).send({
      error: true,
      message: 'conversation id is required',
    });
  }

  if (!message) {
    return res.status(400).send({
      error: true,
      message: 'message is required',
    });
  }

  // check if message contains 'hello'
  const checkContainsHello = checkWordString(message, CONTAINS_WELCOME_WORDS);
  if (checkContainsHello) return res.status(200).send({ response_id: conversation_id, response: WELCOME_MESSAGE });

  // check if message contains 'bye'
  const checkContainsGoodbye = checkWordString(message, CONTAINS_GOODBYE_WORDS);
  if (checkContainsGoodbye) return res.status(200).send({ response_id: conversation_id, response: GOODBYE_MESSAGE });

  // returns default response
  return res.status(200).send({ response_id: conversation_id, response: DEFAULT_MESSAGE });
};
