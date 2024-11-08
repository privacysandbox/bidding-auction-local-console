/*
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();
app.use(
  morgan(
    '[App] [:date[clf]] :remote-addr :remote-user :method :url :status :response-time ms'
  )
);

app.use(express.static(path.join(path.resolve(), '/src/app')));

export default app;