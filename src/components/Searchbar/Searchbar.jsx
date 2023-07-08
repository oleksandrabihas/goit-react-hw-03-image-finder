import { Component } from 'react';
import toast from 'react-hot-toast';
import { Header, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';
import PropTypes from 'prop-types';
import {CiSearch} from 'react-icons/ci'

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChangeInput = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      return toast.error('Please enter key words for search');
    } else {
      this.props.onSubmitSearchImages(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    return (
      <Header className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel>
              <CiSearch size="28" />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.onChangeInput}
            id="searchInput"
            value={this.state.inputValue}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
 
Searchbar.propTypes = {
  onSubmitSearchImages: PropTypes.func.isRequired
};
