import { Container } from './styles';

import IScholarship from 'models/IScholarship';

interface Props {
  scholarship: IScholarship;
  onChange: () => void;
  checked: boolean;
}

export const CourseItem: React.FC<Props> = ({
  scholarship,
  onChange,
  checked,
}) => {
  return (
    <>
      <hr />
      <Container>
        <div>
          <input
            data-testid={`checkbox-courseitem-${scholarship.university.logo_url}`}
            type="checkbox"
            onChange={() => onChange()}
            checked={checked}
          />

          <img
            src={scholarship.university.logo_url}
            alt={`Logo universidade ${scholarship.university.name}`}
          />
        </div>

        <div className="university">
          <div>
            <p className="secondaryBlue">{scholarship.course.name}</p>
            <p>{scholarship.course.level}</p>
          </div>
          <div className="scholarship">
            <p>
              Bolsa de{' '}
              <span>
                {scholarship.discount_percentage.toLocaleString('pt-br')}%
              </span>
            </p>
            <p className="currency">
              {scholarship.price_with_discount.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2,
              })}
              /mês
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
