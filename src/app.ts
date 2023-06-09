import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { SemesterRoute } from './app/modules/semester/semester.route';
import { UserRoutes } from './app/modules/user/user.route';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/semesters/', SemesterRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('University Auth Server running Successfully.');
});

// TODO: Remove before going to production
// API For Testing purpose
// app.get('/', async (req: Request, res: Response) => {
//   throw new Error('Testing Error logger')
// })

// Global error handler
app.use(globalErrorHandler);

export default app;
