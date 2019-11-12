import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Upload,
  Icon,
  message
} from 'antd';
import './FileUpload.less';

const { Dragger } = Upload;

export default class FileUpload extends PureComponent {
  constructor(props) {
    super(props);
    this.beforeUpload = this.beforeUpload.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.state = {
      fileList: [] // 文件列表
    };
  }

  static onChange(info) {
    const { name, status } = info.file;
    if (status === 'uploading') {
      const hide = message.loading(`${name} 文件正在上传中...`, 0);
      // Dismiss manually and asynchronously
      setTimeout(hide, 3000);
    } else {
      console.log(info.file, info.fileList);
      if (status === 'done') {
        message.success('文件上传成功.');
      } else if (status === 'error') {
        message.error('文件上传失败.');
      }
    }
  }

  // 移除文件
  onRemove() {
    this.setState({
      fileList: []
    });
    message.info('文件已移除.');
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
    console.log(fileArr);
  }

  render() {
    const { uploadHint, uploadText } = this.props;
    const { fileList } = this.state;
    const uploadProp = {
      name: 'uploadFile',
      multiple: true,
      action: '/upload',
      beforeUpload: this.beforeUpload,
      fileList,
      onChange: FileUpload.onChange,
      onRemove: this.onRemove,
    };

    return (
      <div className="dragger-block">
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
