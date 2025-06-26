
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const contactInfo = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "ajay.kapruwan@example.com", 
    href: "mailto:ajay.kapruwan@example.com" 
  },
  { 
    icon: Phone, 
    label: "Phone", 
    value: "+91 8534055272", 
    href: "tel:+918534055272" 
  },
  { 
    icon: Github, 
    label: "GitHub", 
    value: "github.com/ajaykapruwan", 
    href: "https://github.com/" 
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    value: "linkedin.com/in/ajaykapruwan", 
    href: "https://linkedin.com/" 
  },
];

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              I'm currently looking for new opportunities and am open to collaborating on interesting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-navy-light/50 border-slate-dark/20">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-primary font-medium">{item.label}</h3>
                      <a 
                        href={item.href} 
                        className="text-slate hover:text-accent transition-colors"
                        target={item.href.startsWith('http') ? "_blank" : undefined}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-navy-light/50 border-slate-dark/20">
              <CardContent className="p-6">
                <h3 className="text-primary font-bold text-xl mb-6">Send me a message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-navy border-slate-dark/20 focus-visible:ring-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              {...field} 
                              className="bg-navy border-slate-dark/20 focus-visible:ring-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              {...field} 
                              rows={5}
                              className="bg-navy border-slate-dark/20 focus-visible:ring-accent resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-transparent border border-accent text-accent hover:bg-accent/10 hover:text-accent"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
