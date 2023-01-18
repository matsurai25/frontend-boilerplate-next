import Emitter from 'eventemitter3'

export enum EmitEvent {
  START_LOADING = 'INIT_LOADING',
  END_LOADING = 'END_LOADING',
  PAGE_TRANSITION_START = 'PAGE_TRANSITION_START',
  PAGE_TRANSITION_END = 'PAGE_TRANSITION_END'
}

export const emitter = new Emitter()
