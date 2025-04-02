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
    "YtuYbSd2EBNPy8YLENkKxsdfMtmbtMbHrcJDfDzDFvszNiZVxvbvkZEjL89Uwjjra6WU4yEHbyGX8JqtnrfbXXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HZSA5nEXWFK2D1yKB3L8osXNHWxWcmMY93qZAh1ER5Rajj6tp9x8kJ6LLyHp7tWodA7sXtuF7U3jkSU1JhE7MP2",
  "key1": "XP8BigtaYgjQKh8ET9DXqy2n1R4XnhY7y7fPvXcZBX1y5vVL7CiSVJnoWNNWP5U6gX6mmE8bVhX1SFsFNN3kNF3",
  "key2": "23g1i9KQA96ZwBkBeHmZhJLg5V5D1JMh8ygMWfVDPyDvPR5oLWNQL5Y4LAzPA49yWaX9JZz9dr1QwA1ytWFUdys8",
  "key3": "4kYzQiCqhdAh5ESgBwdoGX2iUzrY6gQ5qdtDCXAyWF9bTaUGgXGoeutKpkv2c4Uu676L8PPxXwsfogzJjgY6uqcs",
  "key4": "5BKjmr7P74odHvWC2uzchvTd5FCDMPfK2JhKdbRtST2RAGza9bQWLgJdVE512JU1sevq3PHSQ6xMiVLgbC44iY2s",
  "key5": "5nsa19XBKMf9QqL3FrT9B4Cg1nbkNxtSAnY47eMLcXbzWs61NTJZY9cbXsQtdTVQXfnBC56fpHtWhAEJ6SnjfBGa",
  "key6": "5SzzrvfQYAod2pmkr8tBTY3oiB86wq4gQTdWnX6fYhHarWoZMvsYgVFSDK49ESUQVKPxmNVXvmCo7pRkAaexQe78",
  "key7": "5pzpSa8VTmpkueeH8MbnrEB1XA4jHtNXN4Cygqbh5K4Xs8s1zJxBC7XjPWgfXGmpaXAqoFnRaFEr323Q3HeMWwCi",
  "key8": "2knyU59XTjqGhw6pnLS4fsQ3EdNzhjNuXhzSYP3ZKLxiyhjZ3gext7uNEUTuuCPjSqaQUtMh3bxda8oAvNDgx45j",
  "key9": "5bLkppso3Ny97uNXAesJbLjxJyAfmFwGi7ZgE4Z8qofWQs3gEH7wsWX4qWfVhX1RHe2Ued7NfhuissrwS4DfZsA7",
  "key10": "549F1W1SYz3Zb7SFrPJFRWLow58romp3Cpq3WDFdMGcFwhHUh2Jpw6u1nrSmqzhZLX3WtKdN8ovU6e6gjJ84qDAs",
  "key11": "4J7gG2RHUxZ5J8HGriY7QJjEBZD4etfCLAgNsUcj5BmhtdXjB1wPzSLDGdypSnWk7gqtDvRzDHYDmFQQLnyFdvKL",
  "key12": "4MM6BHrH9X3pG3po7rAttLmfpfWLtmo88e9w39csTqgR7VvQSZrYDxV9oy14JAr5uEspw7RdZGFHmp2y3g4rhXKQ",
  "key13": "4YrbRhcpUoTCCaspwttM7kbE1RnAjTBbYR9iW7osDyXVuvqttsLctgZbh2wK18YMWUdZkv3yUbqQCSBAFpcJsFvA",
  "key14": "4ZpdQxyo11mcDFoUQkLbNPQbPMVACELSxP6j1ZERtapqv81PUCGw9Tfz7iBTfVzR6qXjDVKSXoPgedASFjspkQ5a",
  "key15": "5tqybBKt9URakK27tyyiyJNg11YYz7u1SqkQQtEUUezuTRNddenkVrWauTR8ygXWXBqA685uztRz1apG5nodFG7M",
  "key16": "5WKdda5qnCcQCq5qiC18kABvxP1NgyvNH1fopC8otNcZ8Lo5mNynKNGPWSPUMBPNc7M8U7k1GKQk21uKzAhM3JhY",
  "key17": "4h8DLUNkT7oZGjSvgHhwGKfVvd9ZbUpC2EpUxuDEjDK8xJu1UyAF5uA26PNtKG9JuEY47MxraVmyNppmptFPogbn",
  "key18": "NHnDZxDZGiCP6thMYTGYUcVxCoqkizs3BbLYJEgHuNbAanqT5mrbXMEwYqFkmEPhNATyB8swRxsXWR2shJvnMsC",
  "key19": "3MrdixLB5ZMokSspzU6KXTReeJRWvaZVfPGoetH1cMrNQj3tMTjLyhtkqFWMP1grxpLBygPsNS8uH8xeryQrM2QQ",
  "key20": "5xkYcGENeC8KzQYaadKMntzyc4cKPi5LYJwrMu2k2wutwckKpB8igzLorgm83X2KKudNgUiDnjFKqTbX6GLKGhpx",
  "key21": "51ovABa5965yuR6VFD4rQ5JWCifhJxNB9wq1BWRTv1n7ww96qMdUaCwUEGAnyZquzw6FVeZ4FeUx9YUwH4MQFAur",
  "key22": "3Xacdt43Eed2K2vCVTJD67XVVs5LmtrRk9TcAAJx2kJLFxsNykdMFqYcTgDtuMCZV1dTdpUNZjTXKjREk3jb7vR",
  "key23": "2hUwQgPdBLQDq4a2Yx3D7WFWtxsXdRFmycMr6b9pyUUDP6vLZJj6h975166B76XVBSKynpq7y8oJNreaY2mttxQp",
  "key24": "2MRrdazdnGeymLMfMxwRtmnMZSzxshvPNYk6HhzYPHteffBcXuzj9xaQFENfJjKpcyCE5K3Geyy3NBZ7BSxfkZb4",
  "key25": "nMJqVnpC33tAEDpyikXmtdKRxSdfeNnMAvxKradHTjviuzzJd7cKZ3iwW9Vm8umyC4Jqx8qzc1wP5pb6LSDTcgf",
  "key26": "4bdTW4vMVVE4cTqgnxtQPJQqu6Lne5kEdaeB3kGzt85WLf76beF2rewvvLGT9ArwRZqEot3UhyBag284WZSx9HU9",
  "key27": "335c5gEdE3rMxCLPoq64iNiGRyPSNesKojdfb4Uba3CKb6TpPJchqc14XLWAFVJiFMbj83bypA3V2jFEq9jFgrjK",
  "key28": "67qLoSh8qaCpwXZYSa7BxDdL8aLpJtK34MoyEFAbRstmZas5mXuS1vHxJ72PP3dVstfKRa4E5WtZNHGB9hVq3tVc",
  "key29": "29uphp4X2Su77Rw9k5vsM6Go1T2BSnKXrgGGmW6XSLju9hHVgxjugWkpmLfmc4ontTxW8wWGsjM5JtfD1p8GJE8c",
  "key30": "62gHoURUBWRGrhSH3tnQXpui73tG1aqM9FPSQTfz1ymd7xQZ7yJx8T9UDkacLRUr3U9eCUVgXUYdENX8RnGEsj71",
  "key31": "2bXmrC8VJWW6qEWxe2AU1Jy2WytW3WZ6XULy6i6M8JXvSqidNH78jxt1fCKi3GGMUfwwvydpNC3ELQkKLtey2dmi",
  "key32": "5mNmvKBGGnoe5rMjvsrVFRfVvtEQCDjWTayjH3zw4H4nakXyRAAMTGXysBU9VUGB1fUkGPGfhRSGM3SyB1e21W3b",
  "key33": "Te1PeJ6Hw546b5d5oDdm76uwPQ8cjCT9kmjxV13QqgEf25Muo1xGEQu2x7CDreatjsVLmwc48LpD3HwTk86rqzA",
  "key34": "239kRVeYWV5vhEPWq7WhhBu3DDTu7Nt7EAcUUZgfhASPswEXWsxEURcpz89g9A4zYZE5TWxskC7RVdMP5DpVabdi",
  "key35": "5uDTKi9qV18KBYyNd9u2UBfGLx2CyiToBuUpokvTw1Qqa1Xw9JNVZxSxC217w2hiaF9wukFF4nvmzf9TdpbZF3xX",
  "key36": "4daohCNjbJhh9yKi97ay1quPBgsVJYvAfZ57BYeACTJoiEDRPtZ6PnX7diSxbw98n6hiRcTS3vub1YsZcmMdkVcA",
  "key37": "3e42GG3V3gMPQf8LHZEeME46tJ5JhN639HtuPYMUhUz3V8KdB7BiLXFeP5xpuo5h9isYAxfnJBLu59siH182h1qn"
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
