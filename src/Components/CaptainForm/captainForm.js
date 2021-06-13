import React from 'react';
import { Link} from "react-router-dom";
import "./captainForm.css";
import NavBar from '../NavBar/navBar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ImageUploader from "react-images-upload";
import {MuiPickersUtilsProvider, DatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import swal from "sweetalert2";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

function CaptainForm() {
    const [car, setCar] = React.useState("");
    const [name, setName] = React.useState("");
    const [officeAttendance, setOfficeAttendance] = React.useState(new Date());
    const [officeAttendanceTime, setOfficeAttendanceTime] = React.useState("");
    const [applyingMethod, setApplyingMethod] = React.useState("");
    const [recommenderName, setRecommenderName] = React.useState("");
    const [recommenderPhone, setRecommenderPhone] = React.useState("");
    const [passengersNumber, setPassengerNumber] = React.useState("");
    const [plateNumber, setPlateNumber] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [idNumber, setIdNumber] = React.useState("");
    const [licencesfront, setLicencesFront] = React.useState(null);
    const [licencesBack, setLicencesBack] = React.useState(null);
    const [vehicleLicenseFront, setVehicleLicenseFront] = React.useState(null);
    const [vehicleLicenseBack, setVehicleLicenseBack] = React.useState(null);
    const [vehiclePicFront, setVehiclePicFront] = React.useState(null);
    const [vehiclePicBack, setVehiclePicBack] = React.useState(null);
    const [vehiclePicRight, setVehiclePicRight] = React.useState(null);
    const [vehiclePicLeft, setVehiclePicLeft] = React.useState(null);
    const [idFront, setIdFront] = React.useState(null);
    const [idBack, setIdBack] = React.useState(null);
    const [legalDocument, setLegalDocument] = React.useState(null);
    const [captainPic, setCaptainPic] = React.useState(null);



    const frontIDUploader = (picture) => {
        setIdFront(picture[0]);
    };

    const backIDUploader = (picture) => {
        setIdBack(picture[0]);
    };

    const licencesfrontUploader = (picture) => {
        setLicencesFront(picture[0]);
    };

    const licencesBackUploader = (picture) => {
        setLicencesBack(picture[0]);
    };

    const vehicleLicencesFrontUploader = (picture) => {
        setVehicleLicenseFront(picture[0]);
    };

    const vehicleLicencesBackUploader = (picture) => {
        setVehicleLicenseBack(picture[0]);
    };

    const vehiclePicFrontUploader = (picture) => {
        setVehiclePicFront(picture[0]);
    };

    const vehiclePicBackUploader = (picture) => {
        setVehiclePicBack(picture[0]);
    };

    const vehiclePicRightUploader = (picture) => {
        setVehiclePicRight(picture[0]);
    };

    const vehiclePicLeftUploader = (picture) => {
        setVehiclePicLeft(picture[0]);
    };

    const legalDocumentUploader = (picture) => {
        setLegalDocument(picture[0]);
    }

    const captainPicUploader =  (picture) => {
        setCaptainPic(picture[0]);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
          name === "" ||
          phone === "" ||
          idNumber === "" ||
          recommenderName === "" ||
          recommenderPhone === "" ||
          plateNumber === "" ||
          !licencesBack ||
          !licencesfront ||
          !vehicleLicenseFront ||
          !vehicleLicenseBack ||
          !vehiclePicFront ||
          !vehiclePicBack ||
          !vehiclePicRight ||
          !vehiclePicLeft ||
          car === "" ||
          !idBack ||
          !idFront ||
          !legalDocument ||
          !captainPic
        ) {
          new swal("من فضلك املأ جميع البيانات");
        } else {
          console.log(
            name,
            phone,
            idNumber,
            licencesfront,
            licencesBack,
            idFront,
            vehicleLicenseFront,
            vehicleLicenseBack,
            vehiclePicFront,
            vehiclePicBack,
            vehiclePicRight,
            vehiclePicLeft,
            car,
            idBack,
            legalDocument,
            captainPic,
            officeAttendance.toString(),
            officeAttendanceTime
          );
        }
    }


    return (
        <div>
            <NavBar />
            <div className = "addCaptainForm-container">
                <h2>املأ الاستمارة التالية</h2>
                <div style = {{direction: 'rtl'}}>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                name="name"
                                type="text"
                                label="الاسم بالكامل"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                name="recommenderName"
                                type="text"
                                label="أسم المكتب / اسم التربو / اسم الكابتن المرشح المسجل لدينا"
                                onChange={(e) => {
                                    setRecommenderName(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                name="recommenderPhne"
                                type="number"
                                label="رقم المكتب أو المرشح المسجل لدينا"
                                onChange={(e) => {
                                    setRecommenderPhone(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                name="phone"
                                type="number"
                                label="رقم تلفون الكابتن الي هتشتغل بيه"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} dir="rtl">
                            <FormLabel component="legend">نوع المركبة </FormLabel>
                            <RadioGroup aria-label="نوع المركبة " name="car" value={car}
                                onChange={(e) => {
                                setCar(e.target.value);
                                }}>
                                <FormControlLabel value="باص" control={<Radio />} label="باص" />
                                <FormControlLabel value="ملاكي" control={<Radio />} label="ملاكي" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid item xs={6}>
                                <DatePicker
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="تاريخ الحضور للمكتب"
                                    value={officeAttendance}
                                    onChange={(date) => {
                                    setOfficeAttendance(date);
                                    }}
                                    KeyboardButtonProps={{
                                    "aria-label": "change date",
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Grid item xs={6}>
                            <FormLabel component="legend">ميعاد الحضور للمكتب</FormLabel>
                            <RadioGroup aria-label="ميعاد الحضور للمكتب" name="officeAttendanceTime" value={officeAttendanceTime}
                                onChange={(e) => {
                                setOfficeAttendanceTime(e.target.value);
                                }}>
                                <FormControlLabel value="10 صباحا" control={<Radio />} label="10 صباحا" />
                                <FormControlLabel value="1:30 ظهرا" control={<Radio />} label="1:30 ظهرا" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} dir="rtl">
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                name="plateNumber"
                                type="text"
                                label="اكتب ارقام و حروف (لوحات المركبة ) (اللوحات) "
                                onChange={(e) => {
                                    setPlateNumber(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} dir="rtl">
                            <FormLabel component="legend">عدد الركاب (الكراسي المستخدمة)</FormLabel>
                            <RadioGroup aria-label="عدد الركاب (الكراسي المستخدمة) " name="passengerNumber" value={passengersNumber}
                                onChange={(e) => {
                                setPassengerNumber(e.target.value);
                                }}>
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="9" control={<Radio />} label="9" />
                                <FormControlLabel value="13" control={<Radio />} label="13" />
                                <FormControlLabel value="22" control={<Radio />} label="22" />
                                <FormControlLabel value="28" control={<Radio />} label="28" />
                                <FormControlLabel value="33" control={<Radio />} label="33" />
                                <FormControlLabel value="50" control={<Radio />} label="50" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} dir="rtl">
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                name="idNumber"
                                type="number"
                                label="رقم البطاقة"
                                onChange={(e) => {
                                    setIdNumber(e.target.value);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="وجه رخصة القيادة"
                                onChange={licencesfrontUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="ظهر رخصة القيادة"
                                onChange={licencesBackUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="وجه البطاقة الشخصية"
                                onChange={frontIDUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{  padding: 1 }}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="ظهر البطاقة الشخصية"
                                onChange={backIDUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{ padding: 1 }}
                                withPreview={true}
                                singleImage={true}
                            /> 
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="رفع صورة الفيش"
                                onChange={legalDocumentUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة شخصية (واضحة و خلفية بيضاء)"
                                onChange={captainPicUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة رخصة الباص و السيارة أمام"
                                onChange={vehicleLicencesFrontUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة رخصة الباص و السيارة خلف"
                                onChange={vehicleLicencesBackUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة السيارة أمام"
                                onChange={vehiclePicFrontUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة السيارة خلف "
                                onChange={vehiclePicBackUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة السيارة الناحية اليمني"
                                onChange={vehiclePicRightUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText="صورة السيارة الناحية اليسرى"
                                onChange={vehiclePicLeftUploader}
                                imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg", ".jfif"]}
                                maxFileSize={5242880}
                                fileContainerStyle={{padding: 1}}
                                withPreview={true}
                                singleImage={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={6}>
                            <FormLabel component="legend">طريقة التسجيل</FormLabel>
                            <RadioGroup aria-label="طريقة التسجيل" name="applyingMethod" value={applyingMethod}
                                onChange={(e) => {
                                setApplyingMethod(e.target.value);
                                }}>
                                <FormControlLabel value="مكتب" control={<Radio />} label="مكتب" />
                                <FormControlLabel value="تربو" control={<Radio />} label="تربو" />
                                <FormControlLabel value="ترشيح كابتن" control={<Radio />} label="ترشيح كابتن" />
                                <FormControlLabel value="مباشر" control={<Radio />} label="مباشر" />
                                <FormControlLabel value="فيسبوك" control={<Radio />} label="فيسبوك" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Link to = "/exit">
                        <button
                            className="addCaptain-btn"
                            onClick={handleSubmit}
                            disableElevation
                        >
                        Submit
                        </button>
                    </Link>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CaptainForm
