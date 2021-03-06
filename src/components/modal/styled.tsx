import styled from 'styled-components'
import {Modal} from './modal'

const StyledModal : typeof Modal = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  width: 100vw;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  .modal {
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #FFFFFF;
    border-radius: 2px;
    -webkit-box-shadow: 0px 0px 4px -2px rgba(0,0,0,1);
    -moz-box-shadow: 0px 0px 4px -2px rgba(0,0,0,1);
    box-shadow: 0px 0px 4px -2px rgba(0,0,0,1);
    margin-top: 54px;
    margin-bottom: 60px;
    @media(min-width: ${props => props.theme.screenSize.tablet}) {
      margin-top: 60px;
      margin-bottom: 60px;
    }
    &.modal--md {
      width: 485px;
      max-width: 90vw;
      @media(min-width: ${props => props.theme.tablet}) {
        width: 485px;
        max-width: 90vw;
      }
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 1000%;
    width: 100vw;
    height: 100%;
    height: 100vh;
    z-index: 998;
    background-color: rgba(1,34,54,.38);
  }
  .modal__content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0 50px 0;
    .close-modal {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      position: absolute;
      top: 21px;
      right: 18px;
      background: rgba(49, 57, 71, 0.03);
      transition: background .2s ease-in;
      &:hover {
        background: rgba(49, 57, 71, 0.06);
      }
      &:focus {
        outline: none;
      }
      &:active {
        background: rgba(49, 57, 71, 0.03);
        outline: none;
      }
      .uc-icon {
        font-size: 22px;
      }
    }
  }
`

export default StyledModal;