import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Department = [
  { key: 1, value: "헌법재판소" },
  { key: 2, value: "민사" },
  { key: 3, value: "형사" },
  { key: 4, value: "일반행정" },
  { key: 5, value: "가사" },
  { key: 6, value: "특허" },
  { key: 7, value: "세무" }
]

function UploadPage() {

  const [TitleValue, setTitleValue] = useState("")
  const [CasenumberValue, setCasenumberValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [SummaryValue, setSummaryValue] = useState("")
  const [DatanumberValue, setDatanumberValue] = useState("")
  const [DepartmentValue, setDepartmentValue] = useState(1)


  const onTitleChange = (event) => {
      setTitleValue(event.currentTarget.value)
  }

  const onCasenumberChange = (event) => {
    setCasenumberValue(event.currentTarget.value)
}

  const onDescriptionChange = (event) => {
      setDescriptionValue(event.currentTarget.value)
  }

  const onSummaryChange = (event) => {
    setSummaryValue(event.currentTarget.value)
}

  const onDatanumberChange = (event) => {
      setDatanumberValue(event.currentTarget.value)
  }

  const onDepartmentSelectChange = (event) => {
      setDepartmentValue(event.currentTarget.value)
  }

  /*
  const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    } 
  */

  //사건명 = Title, 사건번호 = Casenumber, 사건종류코드,
  //판시사항, 판결요지 = summary , 참조조문, 참조판례, 판례내용 = description , 판례일련번호 = Datanumber
  //사건대상(사건종류명) = Department, 법분야와 소관부처는 추후에 추가 고민해보기


  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>판례 정보 업로드</h2>
      </div>

      <Form>
        {/* DropZone */}
        <br />

        <br />
        <label>사건명</label>
        <Input
            onChange={onTitleChange} 
            value={TitleValue}   
        />
        <br />

        <br />
        <label>사건번호</label>
        <Input
            onChange={onCasenumberChange} 
            value={CasenumberValue}
        />
        <br />

        <br />
        <label>사건종류명</label>
        <br />
            <select onChange={onDepartmentSelectChange} value={DepartmentValue}>
                {Department.map(item => (
                    <option key={item.key} value={item.key}>{item.value} </option>
                ))}
            </select>
        <br />

        <br />
        <label>사건종류코드</label>
        <Input/>
        <br />

        <br />
        <label>판시사항</label>
        <Input/>
        <br />

        <br />
        <label>판결요지</label>
        <TextArea
            onChange={onSummaryChange}
            value={SummaryValue}
         />
        <br />

        <br />
        <label>참조조문</label>
        <Input/>
        <br />

        <br />
        <label>참조판례</label>
        <Input/>
        <br />

        <br />
        <label>판례내용</label>
        <TextArea
            onChange={onDescriptionChange}
            value={DescriptionValue}
         />
        <br />

        <br />
        <label>판례일련번호</label>
        <Input
            onChange={onDatanumberChange}
            value={DatanumberValue}
        />
        <br />
        <br />

        <Button>
            확인
        </Button>

      </Form>

    </div>
  )
}

export default UploadPage
