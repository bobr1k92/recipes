import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage } from './RecipeForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const RecipeSchema = Yup.object().shape({
    name: Yup.string().required('Required Field'),
    image: Yup.string().required('Required Field'),
    time: Yup.number().positive('Must be > 0!').required('Required Field'),
    servings: Yup.number().positive('Must be > 0!').required('Required Field'),
    calories: Yup.number().positive('Must be > 0!').required('Required Field'),
    difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required field!'),

  });

export const RecipeForm = ({onSave}) => {
    return (
        <Formik 
        initialValues={{
            name: '',
            image: '',
            time: 0,
            servings: 0,
            calories: 0,
            difficulty: 'easy',
          }}
          validationSchema={RecipeSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            onSave({
              ...values, id: nanoid() });
              actions.resetForm();
          }}
        >
        <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component='div'/>
        </FormField>
        <FormField>
          Image
          <Field name="image" />
          <ErrorMessage name="image" component='div'/>
        </FormField>
        <FormField>
          Time
          <Field type="number" name="time" />
          <ErrorMessage name="time" component='div'/>
        </FormField>
        <FormField>
          Servings
          <Field type="number" name="servings" />
          <ErrorMessage name="servings" component='div'/>
        </FormField>
        <FormField>
          Calories
          <Field type="number" name="calories" />
          <ErrorMessage name="calories" component='div'/>
        </FormField>
        <FormField>
          Difficulty
        <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
           </Field>
           <ErrorMessage name="difficulty" component='div'/>
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
      </Formik>
    )
}
