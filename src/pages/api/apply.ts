---
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const phone = formData.get('phone') as string;
  const formType = formData.get('formType') as string;

  // Проверяем, что номер телефона предоставлен
  if (!phone) {
    return new Response(
      JSON.stringify({ 
        error: 'Номер телефона обязателен' 
      }),
      { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }

  // Валидация номера телефона - проверяем оба формата
  const phoneRegex = /^(\+7|8)\s?\(?[\d]{3}\)?[\s\-\d]{7,10}$/;
  const formattedPhoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  const altPhoneRegex = /^\+7\(?[\d]{3}\)?[\d-]{7,10}$/;
  
  if (!phoneRegex.test(phone) && !formattedPhoneRegex.test(phone) && !altPhoneRegex.test(phone.replace(/\s/g, ''))) {
    return new Response(
      JSON.stringify({ 
        error: 'Некорректный формат номера телефона' 
      }),
      { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }

  try {
    // Здесь можно добавить логику отправки данных в базу данных, 
    // отправку email или другую обработку данных
    console.log(`Новый запрос на трудоустройство: ${phone}`);

    // В реальном приложении здесь будет код для:
    // 1. Валидации данных
    // 2. Сохранения в базу данных
    // 3. Отправки уведомления (например, в Telegram или Email)
    // 4. Возможной отправки SMS-уведомления пользователю
    
    // Возвращаем успешный ответ
    return new Response(
      JSON.stringify({ 
        message: 'Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Ошибка обработки заявки:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.' 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
};