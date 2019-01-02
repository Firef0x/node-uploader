import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Upload,
  Icon,
  message
} from 'antd';
import './FileUpload.less';

const { Dragger } = Upload;

export default class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.beforeUpload = this.beforeUpload.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.state = {
      fileList: [], // 文件列表
    };
  }

  // 移除文件
  onRemove() {
    this.setState({
      fileList: []
    });
  }

  // 上传之前事件
  beforeUpload(file) {
    const fileArr = [];
    // 获取新的上传列表
    fileArr.push(file);
    // 进行赋值保存
    this.setState({
      fileList: fileArr
    });
  }

  render() {
    const { uploadHint, uploadText } = this.props;
    const { fileList } = this.state;
    const uploadProp = {
      name: 'uploadFile',
      multiple: true,
      action: 'http://localhost:3000/upload',
      beforeUpload: this.beforeUpload,
      fileList,
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      onRemove: this.onRemove,
    };

    return (
      <div style={{
        marginTop: 16,
        height: 250
      }}>
        <Dragger {...uploadProp}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            {uploadText}
          </p>
          <p className="ant-upload-hint">
            {uploadHint}
          </p>
        </Dragger>
      </div>
    );
  }
}

FileUpload.propTypes = {
  uploadText: PropTypes.string,
  uploadHint: PropTypes.string
};

FileUpload.defaultProps = {
  uploadText: '点击或者拖拽文件进行上传',
  uploadHint: '支持多文件上传'
};
