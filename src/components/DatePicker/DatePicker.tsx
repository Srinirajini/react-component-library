import { FunctionComponent } from 'react';

import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import 'antd/lib/date-picker/style';

import styles from './styles.module.less';

const AntDDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export type DatePickerProps = {
  /**
   * Date picker placeholder text
   */
  placeholder?: string;

  /**
   * Date picker default value
   */
  defaultValue?: Dayjs;

  /**
   * Date picker current value
   */
  value?: Dayjs;

  /**
   * Error text. Leave it as as empty string to disable error style
   */
  error?: string;

  /**
   * Set true to disable input
   */
  disabled?: boolean;

  /**
   * Used in TimePicker.tsx to replace Moment with Dayjs.
   */
  picker?: any;

  /**
   * Used in TimePicker.tsx to replace Moment with Dayjs.
   */
  mode?: any;

  /* Triggered upon date value change */
  onChange?: (e: any) => void;

  /* Triggered upon focus out of datepicker */
  onBlur?: (e: any) => void;

  /**
   * 	Function called when iterating through rendered to specify which date cannot be selected
   */
  disabledDate?: (currentDate: Dayjs) => boolean;

  /**
   * Used in TimePicker.tsx to replace Moment with Dayjs.
   */
  ref?: any;
};

export const DatePicker: FunctionComponent<DatePickerProps> = ({
  placeholder = '',
  defaultValue,
  value,
  error = '',
  disabled = false,
  picker,
  mode,
  onChange,
  onBlur,
  disabledDate,
  ref,
}) => {
  return (
    <AntDDatePicker
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      picker={picker}
      format="DD-MMM-YYYY"
      mode={mode}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      disabledDate={disabledDate}
      className={generateRangePickerClassName(error)}
    />
  );
};

function generateRangePickerClassName(error: string) {
  const classNameList = [styles['ant-picker']];
  if (error.length > 0) {
    classNameList.push(styles['ant-picker-error']);
  }
  return classNameList.join(' ');
}
