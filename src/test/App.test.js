import { shallowToJson } from "enzyme-to-json";
import App from "../App";

describe('Coinside con el snapp', () => {
    test('prueba en <App></App>', () => {
        const wrapper = shallowToJson(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
});