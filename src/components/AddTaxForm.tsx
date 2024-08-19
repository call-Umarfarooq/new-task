'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
type Item = {
  id: number;
  name: string;
  category?: string;
};

type FormValues = {
  taxName: string;
  taxRate: number;
  applyTo: 'all' | 'specific';
  selectedItems: number[];
};

const items: Item[] = [
  { id: 1, name: 'Jasmine Bracelet', category: 'Bracelets' },
  { id: 2, name: 'Jasmine Bracelet', category: 'Bracelets' },
  { id: 3, name: 'Irène Bracelet', category: 'Bracelets' },
  { id: 4, name: 'Zero amount item with questions' },
  { id: 5, name: 'Normal item with questions' },
  { id: 6, name: 'Normal item' },
];

const groupedItems = items.reduce((acc: Record<string, Item[]>, item) => {
  const category = item.category || 'Uncategorized';
  if (!acc[category]) acc[category] = [];
  acc[category].push(item);
  return acc;
}, {});

const validationSchema = Yup.object({
    taxName: Yup.string().required('Tax name is required'),
    taxRate: Yup.number().required('Tax rate is required').min(0).max(100),
    applyTo: Yup.string().required('Select an option'),
    selectedItems: Yup.array().when('applyTo', {
      is: 'specific',
      then: (schema) => schema.min(1, 'Select at least one item'),
      otherwise: (schema) => schema,
    }),
  });
  

const AddTaxForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      taxName: '',
      taxRate: 0,
      applyTo: 'all',
      selectedItems: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      console.log('Selected items:', values.selectedItems);
    },
  });

  const handleCategorySelection = (category: string) => {
    const categoryItems = groupedItems[category].map(item => item.id);
    const isSelected = categoryItems.every(id =>
      formik.values.selectedItems.includes(id)
    );

    if (isSelected) {
      
      formik.setFieldValue(
        'selectedItems',
        formik.values.selectedItems.filter(id => !categoryItems.includes(id))
      );
    } else {
      formik.setFieldValue(
        'selectedItems',
        [...formik.values.selectedItems, ...categoryItems].filter((id, index, self) => self.indexOf(id) === index)
      );
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="taxName">Tax Name</label>
        <input
          id="taxName"
          name="taxName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.taxName}
        />
        {formik.touched.taxName && formik.errors.taxName ? (
          <div>{formik.errors.taxName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="taxRate">Tax Rate (%)</label>
        <input
          id="taxRate"
          name="taxRate"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.taxRate}
        />
        {formik.touched.taxRate && formik.errors.taxRate ? (
          <div>{formik.errors.taxRate}</div>
        ) : null}
      </div>

      <div>
        <label>Apply to</label>
        <div>
          <input
            id="applyToAll"
            name="applyTo"
            type="radio"
            value="all"
            checked={formik.values.applyTo === 'all'}
            onChange={formik.handleChange}
          />
          <label htmlFor="applyToAll">Apply to all items in collection</label>
        </div>
        <div>
          <input
            id="applyToSpecific"
            name="applyTo"
            type="radio"
            value="specific"
            checked={formik.values.applyTo === 'specific'}
            onChange={formik.handleChange}
          />
          <label htmlFor="applyToSpecific">Apply to specific items</label>
        </div>
      </div>

      {formik.values.applyTo === 'specific' && (
        <div>
          {Object.keys(groupedItems).map(category => (
            <div key={category}>
              <div>
                <input
                  type="checkbox"
                  checked={groupedItems[category].every(item =>
                    formik.values.selectedItems.includes(item.id)
                  )}
                  onChange={() => handleCategorySelection(category)}
                />
                <strong>{category}</strong>
              </div>
              {groupedItems[category].map(item => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    id={`item-${item.id}`}
                    name="selectedItems"
                    value={item.id}
                    checked={formik.values.selectedItems.includes(item.id)}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor={`item-${item.id}`}>{item.name}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <button type="submit">Apply tax to {formik.values.selectedItems.length} item(s)</button>
    </form>
  );
};

export default AddTaxForm;
