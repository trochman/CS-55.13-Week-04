import { render, screen } from '@testing-library/react'
import id from '../pages/[id]'
import '@testing-library/jest-dom'

describe('[id]', () => {
  it('renders a heading', () => {
    render(<id />)

    const heading = screen.getByRole('heading', {
      name: /Related Persons/i,
    })

    expect(heading).toBeInTheDocument()
  })
})