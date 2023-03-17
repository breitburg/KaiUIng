import { Component } from "inferno";
import classnames from "classnames";
import "KaiUI/src/components/TextInput/TextInput.scss";
import morecolor from "../morecolor";

const prefixCls = "kai-text-input";
const labelCls = `${prefixCls}-label p-thi`;
const inputCls = `${prefixCls}-label p-pri`;

interface ITextInputProps {
  onChange?: (evt: Event) => void;
  isFocused?: Boolean;
  fieldType: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  id?: string;
}

class TextInput extends Component<ITextInputProps> {
  private onChange: ITextInputProps["onChange"];
  private textInput: any;
  public state: { value: string };

  constructor(props: ITextInputProps) {
    const { defaultValue } = props;
    super(props);
    this.onChange = (evt: Event) => {
      if (evt.target) {
        this.setState({ value: evt.target.value });
        if (this.props.onChange) this.props.onChange(evt.target.value);
      }
    };

    this.state = {
      value: defaultValue || "",
    };
  }

  componentDidUpdate() {
    if (this.props.isFocused) this.textInput.focus();
  }

  render() {
    const itemCls = classnames([
      prefixCls,
      this.props.isFocused && `${prefixCls}--focused ${this.focusClass || ""}`,
    ]);

    return (
      <div
        id={this.props.id}
        tabIndex={0}
        className={itemCls}
        style={`background-color: ${
          this.props.isFocused ? morecolor.focusColor : ""
        }`}
      >
        <label className={labelCls} $HasTextChildren>
          {this.props.label}
        </label>
        <input
          onKeyDown={this.onChange}
          onChange={this.onChange}
          onPaste={this.onChange}
          onKeyUp={this.onChange}
          onKeyPress={this.onChange}
          onInput={this.onChange}
          type={this.props.fieldType}
          className={inputCls}
          defaultValue={this.state.value || ""}
          placeholder={this.props.placeholder || ""}
          style={`color: ${this.props.isFocused ? "var(--text-color)" : ""}`}
          ref={(input) => {
            this.textInput = input;
          }}
        />
      </div>
    );
  }
}

export default TextInput;
