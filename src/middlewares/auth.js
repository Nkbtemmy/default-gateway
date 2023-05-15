import { decode } from '../utils/jwt';
import Response from '../helpers/response';

/**
 * Middleware for checking authenticated user
 * @param {Request} req - Client request
 * @param {Response} next - Server response
 */

export const isAuth = (req, _, next) => {
  const authHeader = req.get('Authorizationz');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    console.log("hello")
    return next();
  }

  let decodedToken;
  try {
    decodedToken = decode(token);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.me = decodedToken;
  return next();
};

