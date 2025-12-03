import { Box, Button, MenuItem, Stack, TextField, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = (data) => {
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      setStatus('error');
    } else {
      console.log(data);
      setStatus('success');
    }
  };

  // إخفاء التنبيه بعد 5 ثواني
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            label="الاسم الأول"
            variant="filled"
            sx={{ flex: 1 }}
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...register('firstName', {
              required: 'هذا الحقل مطلوب',
              maxLength: { value: 20, message: 'الحد الأقصى 20 حرفًا' },
            })}
          />
          <TextField
            label="الاسم الأخير"
            variant="filled"
            sx={{ flex: 1 }}
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register('lastName', {
              required: 'هذا الحقل مطلوب',
              maxLength: { value: 20, message: 'الحد الأقصى 20 حرفًا' },
            })}
          />
        </Stack>

        <TextField
          label="البريد الإلكتروني"
          variant="filled"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: 'هذا الحقل مطلوب',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'صيغة البريد الإلكتروني غير صحيحة',
            },
          })}
        />

        <TextField
          label="رقم الهاتف"
          variant="filled"
          fullWidth
          error={!!errors.phone}
          helperText={errors.phone?.message}
          {...register('phone', {
            required: 'هذا الحقل مطلوب',
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: 'رقم الهاتف يجب أن يحتوي على 10 إلى 15 رقمًا',
            },
          })}
        />

        <TextField
          label="العنوان"
          variant="filled"
          fullWidth
          error={!!errors.address}
          helperText={errors.address?.message}
          {...register('address', {
            required: 'هذا الحقل مطلوب',
          })}
        />

        <TextField
          label="المدينة"
          variant="filled"
          fullWidth
          error={!!errors.city}
          helperText={errors.city?.message}
          {...register('city', {
            required: 'هذا الحقل مطلوب',
          })}
        />

        <TextField
          select
          label="نوع المستخدم"
          variant="filled"
          fullWidth
          error={!!errors.role}
          helperText={errors.role?.message}
          {...register('role', {
            required: 'اختر نوع المستخدم',
          })}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="guest">Guest</MenuItem>
        </TextField>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">
            حفظ البيانات
          </Button>
        </Box>

        {status === 'success' && (
          <Alert variant="filled" severity="success" sx={{ mt: 2 }}>
            تم حفظ البيانات بنجاح.
          </Alert>
        )}
        {status === 'error' && (
          <Alert variant="filled" severity="error" sx={{ mt: 2 }}>
            يوجد أخطاء في البيانات المدخلة.
          </Alert>
        )}
      </Box>
    </form>
  );
};

export default Profile;
