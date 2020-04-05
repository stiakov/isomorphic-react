import React from 'react';
import TagsList from './TagsList'
import renderer from 'react-test-renderer';

// SNAPSHOT TEST
describe('The Tag List', () => {
    it('renders as expected', () => {
        const tree = renderer.create(
            <TagsList tag={['css', 'html', 'go']} />
        ).toJSON();
        console.log(tree);

        expect(tree).toMatchSnapshot();
    });    
});
