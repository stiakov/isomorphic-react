import { mapStateToProps } from '../QuestionDetail';

describe('The Question detail component', () => {
  
  // REGRESION TEST
  describe('The container Element', () => {
    describe('mapStateToProps', () => {
      it('should map the state to props correctly', () => {
        
        const sampleQuestion = {
          question_id: 42,
          body: 'Space is big',
        };
        const appState = {
          questions: [sampleQuestion],
        };
        const ownProps = {
          question_id: 42,
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
      
    })
    
  })
  
  it('Should not regress', () => {
    
  })
});