/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "iX4RfzPP7dNywJVekhQQ4EdQNto4XsoJiTuFfmv5LhsdvGfCvJDqDSbvk5Jty9tpmzCFpFgcVyVc2cCz34XJN7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQQSnVXJwuaxrwY2vpttWES1B1T82tbGNEYMqkGeKbgQVKUQVvoS1q9LPjMeHYcxhXRzKhjy4vvkdHCpZ4KTJT2",
  "key1": "5d9oVQpdBxQr4RxV8jSfhpXS3hHhLPKAJfqStGC3v72wiWZir3kzgHrSDZHYcs1z2eqsovHdfKfuGAvhshFFb4Zr",
  "key2": "4BxHqva5A5HiqadT8Kd7ccmbZnWMDPwzwJnBwWCwrTNj7ikfXgvK6BoWZji8E2fe62sdkSQJLuuEhiV5aUAhUUo7",
  "key3": "4McwTBF8nFLA4dAM41zGhTvJxD7e5mfEYdbk35WNNto7H96Hp7M2kHdN5NFnUELkWoc7WeP4ufdec5QBNPncGBuU",
  "key4": "4TZUp248338hUXvCqRL5gFyDwza3GktnsENCxGpDfFQGdNZnzEqS6BQiXyJ6pwoTp2gfkoChUusrmjJRW426ukGc",
  "key5": "4gvBvu4z6YWv6yFK43A4GVJP49TyUH9bCYX5o5Uh7DTrS5rmLu2p68kym5kYXRdCybdRxudGQ6bnv5mFh1E9m9hB",
  "key6": "2hpC9bxYNAYzV2Zo9Xt2WLZ4oXwD5yLhHkScR77qSCb7nvCHCLXkd6phEJfx1y4z4jYZZuQNbfWKWqMMuBhfwX7N",
  "key7": "4LQHGZToRJaLxMf6X45EVu4L3X1s5kYJqpivHUKAK6dcWv65ia5CqEgTgkeqfPwyaXJzUUpfGfQvhVWJvzwwKmXi",
  "key8": "3Xma1VPeQDJ91r5gu4qJv5wsMvFkHbbKVdQLc2af22PdaJ9z2soQKJgPULmPFN2mmRQP5mPzZzW5kvjzrNcWKyi",
  "key9": "3h3KADdm3BBwon5WQy1FN8AWvxFZH9zYJ8P42fhCRDLFr9NrASwSx48y7q29VzATnQC1GTHC6ESG7mfGCA4NU2C7",
  "key10": "4zSrYtMrsZECsBTiiDEHx9pxuvmzp9QDn5ZompGZqjn4knAmZrvJ72GECEiXhSa5CceP7D3TNU6e59VGeTqnqwCz",
  "key11": "9v46mGvfKZxiGqGh7AdfEExfyXkpTA3LEcTtnJkUgCvz49gJJQW95q8d9cbpoqnnfewvgcndqL9iqDtVZJTBVJm",
  "key12": "4WS1MYwaUgsZrediePAv4JQgdinSQAt5ZvMQvddLPf5WNwPkWeVXtWkzp3tNKUUhCUhTG8h5EfuRQuvPr8TRf8uV",
  "key13": "2UvNxZqRFQvfp1rStbttfkFYrn8evr9Cc8QrViXus6y58ReBL3GymXqA4YUcyCANHDJNQPrieBXKd5xw7Z8NK34J",
  "key14": "31PwHXUFt3VVLPoVxNuBi13JqePUzroRqR3uCu9huKTxLcr9nq8AHcS7oH3TLdcgQzBr1QEFnHNARiF1Yc3UTXvu",
  "key15": "3Rnefy1yTBJ1vDa2gWdfu6WbjDBwyqLAWfW2MMAxuEJrMAYWbmL4KDh77K67dxvGnmPDQ6aWCECAHM7uf38T9QJa",
  "key16": "61E9Ac75F4tQJicW7fo3QhTynhGJUy3z1gqshyEMxLiSSKthQrUqDaKcSZVbTEcbh1JeYxes3jayyBVyaJwsQLCe",
  "key17": "4x5kEoMJJkjuf9At2NDTfUXUx6k8Y1bY4vfNNkPeh2ST94pZ9esM3xAJNth8Rs5yTZNrbikJf3xT3dqC3g6pJLjQ",
  "key18": "3G63X4PxrzpHytZc3b6oaZ18R2j41mdWbaxEtMjyBLimXjLib3n6d6H1z8CHKFcC6BxSYoDYHwLkjadnLh46vS99",
  "key19": "2kz1diN3knJATND1MY3aihBw8pFG4mo6gfehC8BBu6oFxKAirizEE7bcKxGiX4kEEnCzoDk9MTZ42kGiYrQSi2B8",
  "key20": "5QQNxKqxfBbsDh2u9BJGpiUMVdPknv15dzCyE7WoW8ZcrihHc8uSREKsseJzB7GmYXBJSLdnDEUHQKXoMW1SV7ZP",
  "key21": "2g41mPDQq2u1U9HZ5kW8Lga76zLEBf3TgYgdGimbUhSdfLLsVLNUe3qBKcMdkZe58g7yxywLKuMnAXnRHm7xhWh2",
  "key22": "45KghStMxKD81JNCYJfVkKxHCPRkMuFVfs36KX35x157inGfyU5iXKfQSjEnDUF5WMNEMVrEkx6fUuLmVwLShEa9",
  "key23": "3owgKmL75ArahMtv1cJVkqsqKi6au5J4Rb1un7LehXnkQwGr8AJYtXiUJ5tH5tvySW9BKqRDmChHbdQaSCdvaE1U",
  "key24": "bs2aNKUHEgF7WfEz1geUHVcj3xYSquTKNkQZPYoPEJEs2Y4pccn6EBMVdughXwWMGJZD8jUmU4bSTS4zC4YwszC",
  "key25": "4Ji2sWfdjQTziwMVWgusELujHmXfGpXmrPr1c38KNFWEhjwemfiicpjkdmtLKMSKVGjmbobLQaJXbFKsdif1khp5",
  "key26": "4Qqn8nswvU5aU7XNFqCh5ufaRDePqgM3g5jzKT1V1YHiXZFB5cuU4m3FzcaHuB9EDDQJkB9MekmH2qzDuReTyj2a",
  "key27": "4FZU534sHB8mEj76vjFtzRA6DF4dC3oXgnmP5D9cL2bsjkHUGfHurxnCHCcsh6dTATT5j5QBk82bt1ZLpY8vVWfy",
  "key28": "242s2EC1WDDC8skVyrP2BkPin178TK5gK72bdZzRnxRiBR854UcUGhPvXkyrYXkoZHTFfCnW7GqpHBsDbKxQj61G",
  "key29": "3d5QGX1MZ6hMv8CpWnefCMDFfnhVuTzF3jQGHYmEY6FxBdJjh3LCmk7iUgQ25zBut4nPdZfmU8NDUMxqdnwvYJ4b",
  "key30": "3DVykfub2i7pTWhjTWgzHdmE9U3CehQGdvs5ribzZ8debrqbvxRL8zMSbTbXyFhZN2iixZXt4GgBMMRFpgTxkUKY",
  "key31": "Eizd4WdhX8eoWLP3yNoQayDYBEzAez2FFDzibwZ25hjff1v3eD3gXSPyLt8TYMH9C1AheoLnJqUgSAaKFrFfRyK",
  "key32": "BjzQQZuTPU7BQZKHiNUp1uT8dqqUMGyBn2TWbKqj2Rv3jSEkHts8aCZddDMc9jH2spyM7NroHeay4qHaHzsAHvN",
  "key33": "32WN2HSDGU8gN4EJvkKvC9hcdLxdgZm8GGsfzRXs45Qyqj85fRLkFDoauYwpHAKaHe9qdHpiMwqW35atJ3SM1gqd",
  "key34": "4tjywY5G4mimf7vW8fi2A3gSwBudnthMhJuvKdq3wft3cKrarzqU8jyXbfsqnYA8AnmXHu74S58uJUn1KhbZxDbP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
