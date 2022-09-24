import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a list', () => {
    render(<Home />)

    const list = screen.getByRole('list', {
    })

    expect(list).toBeInTheDocument()
  })
})