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
    "4SNFKEgVgveA2QbKsBcvW9upzAGr1ibWu113fcvPvfToswiU2uspTyQDDu2zRjqkkFd9BJTERzCsyiyuMos1CzBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gonuYGotfKipmS1TtGY8hGoJiWseg8RPGpaRKgm7GcwBnDMo4rUSj9v4x7tJQdBzKfSPZMPp3JFNWcqwrQ7v9t",
  "key1": "5eoExkSpxbyg978ySxpRPzzU1EcdV2swdmZAdvFvAeQTFGczvJtDNF1rWAYvaYReNuKhkTQzr2aUTvuD5cFZphrj",
  "key2": "47V8Dw693wUzjMRAG3x1XmAHSxB4fJL9P5tve2wuxdfR3bpwGFU8TsAEGaGxf4uoWQDJoaPGANVmXwTmuH1LpGgo",
  "key3": "XK1ZbcpbsdYcv4avQzdG7U36kiGozSLqhRZXuGocJg4MQsoPFgbsKFdmRv8X3qW7iU9uec8WVN35G6zuhN6XJfQ",
  "key4": "43CoiYT4JYxPYPrswYpYv4wEte1NLMo2Zp23Dm7xusA5cK68sKCLtWm4oEzm8sGGYq4mZ5SfeqY2HRbeKYprE93K",
  "key5": "5adaEnes5JRYw6t2PnLpuszQahyLY12DATyyZf5Z5AWZpA9MkUhDfWqUbpCXpXZRk7wCmsuaMouERLwMojWRZU1v",
  "key6": "4J2GpU6QanVA8QrWYPrzcR4xDF9ZnFXmWft1iWaypdRXYpaGNT3cnQMTG2pSB83eEFysJ5BLRiQnbAh4E6Du2LeU",
  "key7": "2s8jkybi1MK6GNNPnmcCy4KiCApNhAb5tA1UynLV5xvdTMzvTB1eZY1sy453e8bf7W1XeJmQiQE8gwbia24mahsE",
  "key8": "24JisdutzAqiSNbsBf8q4cktprojuiFzE1NfGpKo3oWihC5CY8jzGcVA5hJ9Ha7F2XNfkzpY5nA9WSHLhZGnbenv",
  "key9": "3Q9SWKDXain4AGszT1kPn7i5qVoKcXkYb9VJjKWhzeXn3n2Y4KNiB5e7qKSqMqBA7QnYALuKD2WTCiFzj2N3rahY",
  "key10": "r13QTgS8QX97Fe2b1kPtraA1atJG9cJPoXhFuecW1RYkyKMbYkFw14H4Yv1v1fxVr1M2JpY3tgsS7VnuMsUsuE2",
  "key11": "2wPLHKoH3P1pYpGvkdyZoXxTZQ2ZoYHTdkJeysRTDBh8voHiXQvfjUbaMsf2VWJtUzroRPMsq9wfMTRti6s2Zya3",
  "key12": "2n7ARy5GjTfLzntAJhTuKTzWNZYodcvTMCK64UR8nxwx3zi5XFsRqyRyDoQYzoxVgmYh2Tv7HjrJCQHBQmYrvvFC",
  "key13": "429LnMgG7SemPN5P9FMiX6YyaNEffWSB59JaDdVXytTD2tsMyn3aY1rHrb2Bhe3VhoYbveWhR6MDYc8bkckBfu4B",
  "key14": "3nkuD3qA45GmnxUj5wb7ZxNf7okDbgESksMCK349FoU9YTkyVnxybcqoJE21tBF95urL8ALnb5s1QVjufHL3eSoH",
  "key15": "3zitbdVTC2Ru8teYHdfFoDYmu49Ua3ekBKE4XvQxLoDaVT2b5FF5BPFesaAJgmsZ5YjorBupn7ZRMHL1P4sxJtTx",
  "key16": "4hTkHcHPC4RJcfQynATZfRJfhBmLpB4d9yhzcxXTp5n7zUtZUSYhmkY7bY7kBbSVGtnqu9UPMJ4BC95R9M1VkiNB",
  "key17": "2G4Xp1a4qyQoHAdwqwkdPDmWnocqPKBSZN79D8RX1n54TH6onGJRJmkcFwkjdepFryXQQvz5rFnBpCc1sv2jHian",
  "key18": "5bNwiWhy2euNDBbe51pvi5YSbQQBzQj963mq6j5JUSSfvM6vk4VzRNUfuVqpfWMADWXTsXtzyR261yakdMRgwn6Z",
  "key19": "4GTaKDUL3TU8uxHp2ZJZCWi4yRey6nGxz7kqvkAh9zrjg1vHobw4iX3hjFs1AQ68hmnSFFHv9yK7HKsepCK4pvC8",
  "key20": "qwX6AeZQYChn8XSNNMojwfGaQw7YBLiXD3zWuZYm7TdUEg4xMU6Bn2H8EeDpCQz5VUbKyU233NMDWvyxBgaLT4z",
  "key21": "mjJcAxugNewSCXd8xVQTMSyei4zLZzwj2bipCTjKpW9mpoxQXmNNvEXV2afFgno6QjjCRHVsDWXtvQbKmE8LseR",
  "key22": "KgrJ19G2CQ95SN4cMh3nuRKDxGdn4Q2THFxw5GsNxg9VQw9LQ4vhikA9zyTR7j4Bu2AH47ETRGTP5FcwR7AVeVY",
  "key23": "4y5XRc1gofeLWaWa8b3Zi1u2RoHL69jKSvyiSK3cu9Qyx6kzdxyBW5vajWCYJWpJe3YsUycjzNE5ogdRCsPJbdkp",
  "key24": "RQrG4ZxSPytme5aSy2ZbVLcv23Ur14uvJrqrD2SeQLvPueFVGx6N38fbocG7P4jgmi6Cx5gcY9FK6zEVn9yR4rG",
  "key25": "2bEFgpTzX4vdGegUWUjrncxh7ZRku177PDzpUHXnQKK3cZCgY29q4ZStLouN5hn35J29vfK3VDBLRz6scPXDbZdj",
  "key26": "R4WxT2iL9wqsATbVS6eJ2cMY1hphEjdBeekiv8gszUZmxj3deF8BCKGXni7sLrrwkc3EwnWJDhieAXGJZ5qZqXD",
  "key27": "5qRxJFWFowgcmXSU3MxC6vZgNPSZyNNsN2JE5dqamn66EKS2DHYRYnN7kjFvQcTFZFMbyWRv11M5E8aGQizmL3qN",
  "key28": "5BwDWuEyTnoRFzFgHHvoDuokoK2sXxV1trQ6LVEPNLgU4LnXhvjqMymGZRtD59mfxchz6AqZfCoBEzQhczFjsY5U",
  "key29": "5QczybTB4mAEGCzBKHy5xhm51Uc7FAWCu3ShF996uq7YYLSsLvf3S7fBEyeZZoafEVBoGQtcnLKzeVCsmahrdHC3",
  "key30": "dzMDSM19sm2npEAbNTJVA1FjvNgLinKanvVFcgA12DvCAarmnea1DcbRiKSWxfvgpTLDmUmPh9q1zjg9hxpBCTr",
  "key31": "2dBWXB3imLJfXxejPcchJo6J8dAHizs6nmESzxQETYD3eHLEtjGC8giP7wFmJ675SDidMNqAxa2hKHdxHUvwy3ZJ",
  "key32": "4Q6rqVVkLXfuJZdi6e7qGdHtETMHcDW8Y75WHLJQphdaxgdGYAhYJykgwrWVHowbxy6kWYW3KgeHx9oNN8LxGW6T",
  "key33": "66Bb1TqbMrBdPwShchoh6yoepiyGRrGSKAdDHKu3983gbXqsqJTG1SNA7YKS79hUWCTeppQhx7FnRFwtPUgJtkxz",
  "key34": "4CmHFipFa16GHzSJrKv94gf5MYPeEeDGypUannfaViSKeCwtBU9BHmZ2PqFcLJuizT1UotUGd1gmHD32GTRc6LCr",
  "key35": "2d5rV9yUvgmB3fDJR8j81kChVSvh8FMHkpaMJDQsPobyKyGkXw1BKMgqpoTqStRCjPztsbcuoJpBR3mzCSKzz8yD",
  "key36": "54tD7qpsefQv4tFiX7ZSeNwacb6sRokDp1Ea1KfU6y8JaZSqYTJxW2gznj8DupbVE1oPpJVy9QBLJkpenTV7z11p",
  "key37": "3uHhgcjvXMvFDU9wXXLT4v6mLzJeiEKmJUXiEAVo1kvckXD7y5G1wzdfjb5HQAYeMJDpb9ecXbBH3g9Wp6eFo8Fx",
  "key38": "2zp9zjpmgCb9Y67MftAnZLmjNYt6gLY1LJf3rFQ1qLNuBcpWRVjXgjVoZC7LmZWFN9TJHqsDMq7MtwVWY6GaGkiS",
  "key39": "38hav5YGaV4Wyt2ZZambLwa67o7vU2LDJr1rGGbGma4dkaTCYA7kLZ7EkrHRxuswh4ExXa4RBd4kVwU21ov27ce",
  "key40": "CZVxspnsDu1xTUsvKWKHy32x2sqvtYQ3VJWhScpzTzzVcawpp1J7ZcvwJqQUqJhmPoUpGUpFyGXfibCYTqTqwvq",
  "key41": "4e4BP7rw754PxsZ2RmkfDMKfQuVpQRR7uEGbR9GpaXmQw18Ejwmvtjs7dGAmKJkPdD2uEYduF8nBCaUAKoQHL83H",
  "key42": "8rtTHoCkyvqaH1yGac4mFFq6rtaQCwEXKWzqDAq4aMZaz95aHtdE9ZD75qxhEUBMLLwBq2oZiVAyhqQgoPZFqj7",
  "key43": "4DNiAmTvErFTy5kngjiHLimnY2QQ5nyMfLN4BLzGq1FozVuBAURCTFbmsVxDcaB23sbkx4Lg6AZUfHhw3i73MvvC"
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
