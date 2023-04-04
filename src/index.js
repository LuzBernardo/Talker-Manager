const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const allJson = require('../Utils/getJSON');
const generateToken = require('../Utils/generateToken');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const validateAuthorization = require('../middlewares/validateAuthorization');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

const jsonPath = path.resolve(__dirname, './talker.json');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOTFOUND_STATUS = 404;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker/search',
  validateAuthorization,
  async (req, res) => {
  const actTalkers = await allJson();
  const { q } = req.query;

  if (q) {
    const talkersFiltered = actTalkers.filter((t) => t.name.includes(q));
    return res.status(200).json(talkersFiltered);
  }

  return res.status(200).json(actTalkers);
});

app.get('/talker', async (_req, res) => {
  const actTalkers = await allJson();

  res.status(HTTP_OK_STATUS).json(actTalkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const actTalkers = await allJson();
  const talker = actTalkers.find((t) => +t.id === +id);

  if (talker) {
    res.status(HTTP_OK_STATUS).json(actTalkers[0]);
  } else {
    res.status(HTTP_NOTFOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

app.post('/login', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();

  return res.status(HTTP_OK_STATUS).json({ token });
});

app.post('/talker',
  validateAuthorization,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
  const actTalkers = await allJson();
  const { name, age, talk } = req.body;
  const idsTalkers = actTalkers.map((t) => +t.id);
  const maxId = Math.max(...idsTalkers);
  const plusTalker = { id: maxId + 1, name, age, talk };

  const newTalkers = [...actTalkers, plusTalker];
  await fs.writeFile(jsonPath, JSON.stringify(newTalkers));
  return res.status(201).json(plusTalker);
});

app.put('/talker/:id',
  validateAuthorization,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
  const actTalkers = await allJson();
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const plusTalker = { id: +id, name, age, talk };

  const newTalkers = [
    ...actTalkers.filter((t) => +t.id < +id),
    plusTalker,
    ...actTalkers.filter((t) => +t.id > +id),
  ];
  await fs.writeFile(jsonPath, JSON.stringify(newTalkers));
  return res.status(200).json(plusTalker);
});

app.delete('/talker/:id',
  validateAuthorization,
  async (req, res) => {
  const actTalkers = await allJson();
  const { id } = req.params;
  const idsTalkers = actTalkers.map((t) => +t.id);

  if (!idsTalkers.includes(+id)) {
    return res.status(204).json();
  }
  const newTalkers = actTalkers.filter((t) => +t.id !== +id);
  await fs.writeFile(jsonPath, JSON.stringify(newTalkers));
  return res.status(204).json();
});
