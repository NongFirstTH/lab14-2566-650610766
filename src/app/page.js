"use client";
import { Button, Container, Divider, Group, Pagination, Rating, Text, Textarea, Title } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">Your rating</Title>
      <Rating  size="lg"/>
      <Textarea
      placeholder="Do you enjoy eating?"
      label="Your review"
      mt='xs'
      minRows={3}
      />
      <Button mt="xs" color="orange">Submit Review</Button>
      <Divider my="sm" />
      
      <Group position="center">
      <Title order={4}>Elon Musk</Title>
      <Rating defaultValue={5}/>
      </Group>
      <Text c="dimmed" ta="center">Best pizza in this world. I give you X score.</Text>
      <Divider my="sm" />

      <Group position="center">
      <Title order={4}>Mark Zuck</Title>
      <Rating defaultValue={4}/>
      </Group>
      <Text c="dimmed" ta="center">My favourite part is pepperoni</Text>

      <Pagination  position="center" mt="md" total={20} color="orange" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Tanabodee Srikhampa 650610766
      </Text>
    </Container>
  );
}
