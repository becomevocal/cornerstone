import React from 'react';

const QuickSearchForm = ({ urls, name, lang }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getTranslation = (key) => {
    return lang.translations[key]
  }

  return (
    <div className="container">
      <form 
        className="form" 
        onSubmit={handleSubmit} 
        data-url={urls.search} 
        data-quick-search-form
      >
        <fieldset className="form-fieldset">
          <div className="form-field">
            <label className="is-srOnly" htmlFor={name}>
              {getTranslation("search.quick_search.input_label")}
            </label>
            <input 
              className="form-input"
              data-search-quick
              name={name}
              id={name}
              data-error-message={getTranslation('search.error.empty_field')}
              placeholder={getTranslation('search.quick_search.input_placeholder')}
              autoComplete="off"
            />
          </div>
        </fieldset>
      </form>
      <section 
        className="quickSearchResults" 
        data-bind="html: results"
      />
      <p 
        role="status"
        aria-live="polite"
        className="aria-description--hidden"
        data-search-aria-message-predefined-text={getTranslation('search.results.quick_count_live')}
      />
    </div>
  );
};

export default QuickSearchForm;
