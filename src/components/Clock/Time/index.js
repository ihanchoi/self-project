import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import styled from 'styled-components/native'
import ClockWrap from './ClockWrap'
import { colors, clock, shadow } from '../../constants/global'


const Container = styled.View`
  margin-top: 47px;
  margin-bottom: 67px;
  position: relative;
  align-items: center;
`

const ClockHour = styled.Image`
  position: absolute;
  transform: rotate(${props => props.s});
`

const ClockMinute = styled.Image`
  position: absolute;
  transform: rotate(${props => props.s});
`

const ClockSecond = styled.Image`
  position: absolute;
  transform: rotate(${props => props.s});
`

export default class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timer: setInterval(this.setDate.bind(this), 1000),
      secondsDegrees: 0,
      minutesDegrees: 0,
      hoursDegrees: 0,
    }
  }

  componentDidMount() {
    this.setDate()
  }

  componentWillUnmount() {
    const { timer } = this.state

    clearInterval(timer)
  }

  setDate() {
    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()

    this.setState({
      secondsDegrees: (second / 60) * 360,
      minutesDegrees: (minute / 60) * 360,
      hoursDegrees: (hour / 12) * 360,
    })
  }

  render() {
    const { hoursDegrees, minutesDegrees, secondsDegrees } = this.state

    const hourStyle = `${hoursDegrees}deg`
    const minutesStyle = `${minutesDegrees}deg`
    const secondsStyle = `${secondsDegrees}deg`

    return (
      <Container>
        <ClockWrap>
          <ClockHour source={clockhour} s={hourStyle} />
          <ClockMinute source={clockminute} s={minutesStyle} />
          <ClockSecond source={clocksecond} s={secondsStyle} />
        </ClockWrap>
      </Container>
    )
  }
}
