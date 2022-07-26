import { ChangeEvent, Fragment } from "react";

type FormRatingProps = {
    value: number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
  }
  
  function FormRating({value, onChange}: FormRatingProps): JSX.Element {
    return (
      <Fragment>
        <input className="form__rating-input visually-hidden"
          name="rating"
          value={value}
          id={`${value}-stars`}
          type="radio"
          onChange={onChange}
        />
        <label htmlFor={`${value}-stars`}
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  }
  
  export default FormRating;