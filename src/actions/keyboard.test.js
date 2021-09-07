import * as reducerType from '../unit/reducerType';
import keyboard from './keyboard';

describe('keyboard', () => {
  it('should drop return a KEY_DROP action', () => {
    const data = 'data';
    const action = keyboard.drop(data);

    expect(action.type).toBe(reducerType.KEY_DROP);
    expect(action.data).toBe(data);
  });
});
