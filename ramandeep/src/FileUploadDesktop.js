import React, { Component } from 'react'

const ConfirmAndSave = (files) => {
  return files.length ? <ul>
    {files.map((f, index) => <li style={{ display: 'flex', flexDirection: 'row' }} key={index}>
      <text style={{ paddingRight: 20 }}>{f.file.name}</text>
      <a href={f.url} target="_blank" rel="noopener noreferrer" download>Download File</a>
    </li>)}
  </ul>
    : <>
      <p>Click or drag files into the blue area to download them</p>
    </>
}

export default class extends Component {

  state = { data: [] }

  generatePreviewData = (file, callback) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => callback(reader.result)
  }

  handleChange = event => {
    const { data } = this.state
    const { target: { files } } = event
    if (files.length >= 0)
      for (let i = 0; i < files.length; i++)
        this.generatePreviewData(files[i], d => {
          this.setState({ data: [...data, { file: files[i], url: d }] })
        })
  }

  render() {
    const { data } = this.state
    return <>
      <div id='content' style={{ width: 100, height: 100, backgroundColor: 'lightblue' }}>
        <label htmlFor='fileInput' style={{ width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Files...</label>
        <input id='fileInput' type='file' multiple style={{ opacity: 0, pointerEvents: 'none' }} onChange={this.handleChange} />
      </div>
      {data && ConfirmAndSave(data)}
    </>
  }
}