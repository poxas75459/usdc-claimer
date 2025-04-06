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
    "5u7Pw9BSWxv23BmgcEXb3fTXU1Q8ZVtz8qLnKEBy8tN8iJeBEQGnR8iCEQ4qRZpM14RVnEHr68DMSxY8A4muJmat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYS37eeMrNUPm99EcPgdV5d5x2Vw7FLifSLHi8SjYbBWbJjvSgdmz8rXsHouSWHQVYtQLn8Ss2QWA5nhNPfBgeY",
  "key1": "4dYeriWLjAY9ZknwJMw6Cda84uHUheJy7npSBwzXDNYhxfQWMmdgKpdmfBSJ2uyxpcqStXQPLnNGvTN8emKb3gwK",
  "key2": "4Wjr6Dn3zUzoWs15444V4DL3ZK5KRztfESENLNB6K9HCpbvaB6jqsYSZgqyDtjbLdmbPTtoqfFESssEcZLBUYjS2",
  "key3": "5izJ7k9LB3n7gM3tTK7ZZd9RQP25cRiUzsMRrWDgghdifyRktFG28SyGU1piPgLQqfo3LQ7QsuDV8C5tbVKtNp2i",
  "key4": "4KK3fUJ84EXnhYVDcfP2oSYGTxFBuaupLzMTsnxc3v3oz3YfcEVzZRX8Qqj4ACNi8mZe5tbn36XUpXnzfvv4KsNU",
  "key5": "5TdHx3m6TBvn7iZzpsHzL4sSQibMtmY4urEQFzq49FaJmV38cNeH4AZZftH5Kd2CX8A7qHYFZrLF5vDhyJK5BbX5",
  "key6": "47XxGUv3bgvk9vp2WESoS2Fj5YDxA48vvWdUGktmcbsPnAjBqt7Rxfp5TDV8AsXbtfnFtB2fLoUxh9o5EGVVVxPQ",
  "key7": "5Z3DHrnNQ1a8ygjwCyiGAhDY4FY4KskwtwQg8EfT6zGcvJhwmqAgr9uL845rxpeo9kqsVWozWqwJPaYH1AckQQNi",
  "key8": "MgCpzpQH9SEWdJVnAzug4ZoBb1rk71VLFxdhimwRgsWGnTt9mdVFkMR2JvH1S7nwos2rdrd45QpLrTprR1kgNuz",
  "key9": "44MVMfyhW6ka2CXnWPRLHMpPhKvxDsFN69PhUy2tW6ySEmF9PbjtxmBV1hCt9ubyUnruTdrEG6uWJZ7RCAp7mEbR",
  "key10": "2RETFeKkN52UFBq7xsXo7xUu9UcdFJ44bmSdSW6TUQnXu63LKhq8zTC99dawZbXxVGM46WZqTD6j8h9W45VahM95",
  "key11": "3LM4ve1ia4asprD11uTVdEtzmaZHDRVzNMF9hzDsjBbVgWYJqMjwbkecwJZCuyZds5XFe1SjdddyKyssXTgaSFnN",
  "key12": "2jbsgdSRZugUvejKV5Q3SVXVUkYkMgCqBojKDsGF1QnYr2PbUyEo6RWhZim9rXzCkpkERJDPUBfD9QbPknEu3ZE9",
  "key13": "3v6o4SNxQy8NREZuAAHe58N3bwrRKRJqNU7TeFASy9A8fRUSrsoYcjupB9LRYW3E485h4TBp31XNjR17HXkRLEoV",
  "key14": "M9u6Gcf9nGWCxuunLqy71DbrUYmQKVotz2tG3VK3HPxiA6G3vctdGNpU99DbrarWYff48bnAYqskRfpjmrvjxW3",
  "key15": "4imxRWtosAmpSjriqS9BAfx5un3sFeJTRwMj2Wdcfqz6Qtq4DUARhzcvM72LWEzEqJwB9r5yQeRWvcZyjR256jdU",
  "key16": "3nU31TrK7X4Go7ZNswCGBrUhPNmaPiuJnUe7iqF2GLfJZ9ikDWNT3VgH2jbZg2FAuiVFF5MJykUFEMiRVWzZ8yaB",
  "key17": "2GFgEfs7sMhVhG8C9jzuYHJhbkyXJNUVwgJ6vhXX39TJNfWjJt6uju5pHLdcwYUSfLHtnY2L1jBibkQ4bX1xJC3C",
  "key18": "28Vp7HaeeEhUxNWsVWGCxwdrLFok5PCXvxYxVY3RDqj8BbL2uf7VctsMBNDR9d6FE3DXTfLhJHMBvkxRd63bzVfM",
  "key19": "jUX9f7ExM7aGA7Nzr11PxQZ6BZxzBwz5R65hcNRVNNA7xpti7GK6cmMW7tDobV3avLuYg9GK2MAGzKPhsS9BEuv",
  "key20": "3x6XNo7MyEu9zxPv3rBTc8FLP6pthyQr9hCqz3Z79N8MZXK5pXLXoHUscbBZ4531jToS5Z5VZJhXsB5rGYrfZo2F",
  "key21": "4A14VVmDMmdJqrimpYuV5zQMLFWWjiv67s5cLQFn2Q3cMWWjq3s1SCmaC36zzEhAH5zfsW8bEdMvQS88PXWrgu5b",
  "key22": "2bb45kxrCzDVSD3N26SQE1wkHZmEJ8FKzcPHczfQsUw6jTahSbchRWasXFnmnzzgFazP7KkHvZatP5aU6xydgW4h",
  "key23": "4aTkdLqKr7tV62yRqYDKqYBzz7pCun87d828hssNpXoWqw8jyrzGVhbhzwY3XuBwur5TEmx2WpgkR1rZkFvDqeRf",
  "key24": "3i1BExEnKcZKiit6mDGAJ8ekdGEJsb8WpmPGY8UYLVsy3RfuUbKxPrUSGTuqDFfThfLKHFKbA53ScgRXbZtiAtuV",
  "key25": "4V78YHEqazXnJnLE4vXrUj2x7AytHr9suiHrFsbfGs7FPc3Egcc5rT9ViV8SmyPjUBmjxDZFgKXSRs66GabwzYK1",
  "key26": "5SiWmPauYTrz2WYL4QbkggU2EJY6zgpjy7ZUqv8LfwmPwT5ft69PQ5opDiQHf5bE1ahdvZUtARdPEGHBY5DxY5Au",
  "key27": "47922QJBFMHs4m3JastujCQGW17T3N6WLAkfygMWw2RpGZNjneGCK3wMXegKVbLkAUCLy7voN7YvVWJYkZc1emEa",
  "key28": "4yHSE2ucqcQmKFL4KxBS566zBUwTWrQNFacnTUGhWGj5Nuu6LL85Mpx3n2XWMpxgdgoah4piD6YPD3P3Tdwwq21z",
  "key29": "5iiTwWwRiY6RMrjum25yzgPGZk58i4SBXYfc3RwyLRUD49jJJxFjUhEfvpWdTXw3F3YLHgFyAL37uDeeNbFZ24Zq",
  "key30": "5v7zr1ZHVPXRofcTGJaFHh5BVT7D5Nk1buzKMEYCY94bNvjUY9aeNCr5g69t5hi1g9kMFVzm5s4bfZwEqpPXWXnR",
  "key31": "5eW8Cxd12PZKvrrXqxHfDwe3V7qZnTxDTUZxvfutZEGN1m18QX5imEbJbf3z3JZbwy4DB9BeWAQSyqfsuwhDYfog",
  "key32": "657j1LVGRmwDHihp9ecAN8xHb7pxetxezht1AHrev8WqKq7eshM6everQxPbmQyHngHk9qkjsLyNAe3Wr7aTqGuu",
  "key33": "SSSFD75mX8ZeUiQpvXQvfrSnJJDsn2WAehr3XZ5SGtLno56FACB9mSYBKJeuVoSKpujaRbeijv8S563GwJ26SzS",
  "key34": "9BdgzRLG3X4VBnbRLSS19yFpjW1qyjpsN4EMwCGL23quQUYAPozSKidBaaKnGsFhYZ7PKgD2STrVL1ffvZSYcuA",
  "key35": "5C9DLQ1KsBrW2U7S9iwNk1sbC8SpeXtEtsHWiCdX2og1pLWW7rAiSHWsdtGpL5pBdXXo6FwUGK8SqN9UT3xqQTZF",
  "key36": "uFvih2vbDGsajy2CDr1cQi5EqpLuAbRBDyMXkQiQDhhDaBvybXF7NpEvKujAmztGyCuSjWuZsRK7owwQtUJdft7",
  "key37": "3Sj56mjiGdp7oevK6qA5bvd6Sf54q1ryYNq6oTKbe5jBU4Myy7uhNFV4Dpoz3eh4Cvyz2zjxfH4vsomSBkQCZbkc",
  "key38": "5uZ2mfLZHxgHfD8e1QV9tDa4rt942aBcpnsjhwZJspDRJiyvQ1gbCFKAk1bTHhkbWCNK3GUfpU6VMyi695xvhCY7",
  "key39": "5AzFMCQfvjnvtmiQ5ojgDZUtRA9AhQVouHJUUoHBgRuNof4friaqxsafsJpmbQTn3k49CSX2sWcAuVNiGEQQGJA4",
  "key40": "35gDuwew2MJugomyrtTmigCtC3Jx4EuVhUGbMd2GBZhE23yFKCLgg8Cmcsq9ruSk7CyfaPwCf7rwi65EtaBjLs6R",
  "key41": "3K4Xyovzb9PjY3dVUrV3H2M4xCFvK34v5wJWGEfcLs4bmdULc37iKw9Xe2ua9v3bWTJ7zf8B4FpxqGvxVKzuCMk2"
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
