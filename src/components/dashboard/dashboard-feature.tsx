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
    "2Nba6WKNbZGECtFboQJ4YwG2VxwDXgZmJ5XQHbw8Sf5uLXGecxjYw2VzRWLYqmQc1NC5r5RHUXxSvies4K9JM1ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jk4YWNAWbTV2LUnYsjNnmVvQHituMTBeJJYQ1JzLSaHfi8hP763bBy38pMjAwxzfVUXoPttkLBiSwXvnrvHpWoK",
  "key1": "23RuEGFdxC5qazL4g5J1KK5HwgGU6f2w5JgzJnjwPqJ3y6uU9ghNMZeixTagZYpPpwLxFMuTXL6TRedVE4awMCFB",
  "key2": "4HeewsYMVB7H9PX8CdNgZzpcuPqr8iZPYbGp7nvz5ak7jdppLTskN6UbECkvfirtyWnTHN9kc1DCUUEPkQ5Y64JS",
  "key3": "F4TEke2xoAyhK5U8WfEu7HhzJwPvWYA594QQFcDWNt1wVfU6uqNgSe2L6YfL53sNYDcCBkJoSTh4HeGWwXPL9fF",
  "key4": "64b8GKuQeztcivmkK2NgjvTH8KNf7D2Kf6RQkLG4736NPoJ66muNHecxFPrv7w4CwaqpnMPeo76pUc7eCZnD4odU",
  "key5": "35c6V8i2KFeN4DFKj3B32Ws8LH69sJ6EYRzp5dnUey8sn7QNKY7pE1yjnhi9ytGhW9w7wuNpyMBVft53EhWv6gsa",
  "key6": "3AFwPrMVPtMwReA6QT2WyEFaBi2emESYJ3P2xjNRJMKn62ZHdb3Az9q1fVV815NKaaxLaXwaUr8tEgnaz1wxR8BW",
  "key7": "5QvWgMzqUmimRZYvXX4yXDdA1jaVh1AKi6H7hCmTdbTFHfCDwvF83s8wBXuAuWhSYJaZguCMPazcmhoHxQsY4S5D",
  "key8": "5SdmfKhAcLauc6pFAr2ec1pCJdQJbvVtfPhyB2ab3tVJhuJNBZoQ1rAzdPDVsSfJ9MPa4Nziura5pWx6ifcpxGD5",
  "key9": "3fuquPJ9ZmR5VAjqaxLNYxkaGyXwLzVJbrvLQAxv13dfr967EocoQeuiBp5QZJuXC5YUFuPJFm5Hy1F9r3mCdqxV",
  "key10": "2zYsKbHtTamarYBT2uBZpZMKQvrRWqU2S5xggcb6V9PJeRDMVFgwUqqHJHArnLrZaWBMc7oXCqabFb6eBjXLNRFZ",
  "key11": "ej2t7NdfJ8M5f7tUgVQLfHBd7xLwNf9h1btNgDm9zvU7iTC8zj3Z1miTqbUHxdPdqb3cLwjKHXUxPf21TU8qm6g",
  "key12": "4r9Mp5yTt1kAYLkHaUFc9yJJrMGARV62VQusdHRasEpV7VRXXCRgjbYKaDnybYPG9FJFpoGvqsLyT4H6BUG724s3",
  "key13": "5ogDPwCreYi9n4VJnZnJkMgyZEiHuA5q82p1Sg2REChpM7xLhb6u7uW9d9EWD7zjCeEGV4UE3uu1Xv4wVE7pHiJf",
  "key14": "2Rw2Y7tiGwQRKTmqUUvwvXynWzp6Et6v3trAUnQ3DXGWAy2ErRxcN1BetUGwkV9dfwpaT8ipQTbH3WmGBZFzBz72",
  "key15": "411jZ3AT2Tb4dbsG67wT2oNBLW6pTotYfSq8KyuHvpLF76jFaf5h9kEiMfRoPRMbMf2X2qQPDQBGxGUY3uazXbQ3",
  "key16": "55RXF6dGEZ26eMwR5dnDVf4tmbBtzQmATcs9nde716SdVZPhWRyCq3eaJRk25NaMYZwPsudLcSWrVsZBBMioEv2r",
  "key17": "26oSD5aqvVQhtv4iJy4eVrwBkHQfQSGx2oM7iYUEW3gvuvxwV9MjtZFw8oDKB6h67p7LkjhBZHKGsW84QransRVV",
  "key18": "4W95ed6FuZ4Yg8ZaHPjkuxcfoXBeFVWZt6KVktKuUJMYuAnb7js7pTAXxLYPjBuGNjFVS3CT8vkpSwWe5TyTNJwR",
  "key19": "3Bpeki37JEknTU1BCWWJqQ1WMT614EAZykPs3py9wfVMbT1GWMYXrJ9v9xkK52wrqiB8XJKeTLVaJoi8UcjbZG4g",
  "key20": "5agL3WxUJEmbDGVR4sQ5Y7GBMYRAJ17yRXSfARyJJvw2Y9ZLFDwN2Snk5DTJz2EzZP9TVMRpe7xGaHeAvexD7uy7",
  "key21": "23aTd6hWoLudBut6zFZqXbviU36RgF3EALkNA5HuxEL5hjfvmiPc7MhsxFZH1Wp32kADPg5f4WoY8iAqfB9bdW1c",
  "key22": "3Xa9JeK3hRkwNJ5nSDjE6KGEfXfc1vvUF3zPhn78H3fcfFwUyZ82UrDbNjmRWtUo2BPmQwxTNht62PAF1xWwEfmF",
  "key23": "35FAw27FmSYrhSP1FxyAfP9tKSDRFjXV85GTviGmoG5NBHEXCxSnP42wwdjQPYdQhEPC4RsTPt5YUYU58rZr9LPz",
  "key24": "4Fz5qoaF7WLezg4fJbRUWPBwXc8KxhdYZtiWGCvXtKyAmuYtVS6sZxCAiVavRWCc5dxPoy5bVgqRXQPqWJW6v1B5",
  "key25": "2nwrAf7KoXh12ecNWm7eusWo4J15ELNdJi6auixhc1KQVkHXsrURfxXFS87RxmWvMMLidtr7LQp17E84sxjwpZUm",
  "key26": "4Nc9XdeYS7r4Q9bqQP4ZamZPw4UKPmDHxM475CPpnihXmf19wN8F2W5qjDj9kEsMEV2GG29T34pV35zbS7dTCnF2",
  "key27": "5HzxBq9kvegqtZ7R7SiNZUgaLZCxDuakL2hNAyZEHBok2Yd5XRgvrF3i8H8o5zutGFUoAwSr41ksQN56BWGM3Qio",
  "key28": "4pzA57U4YHxEUYmX2oB6xMLjzhZ8uwUzwA5Z4L1ozSWNYAwZKZ7aZBeHJzkh7TLtYcpGtNME5bAG33QBBgf47PXp",
  "key29": "3KoskkrSjQkGw1UWZR72x96MzbLHjS5QbGKBy9rEaqgfaZnn1oWxb8amgEmFfuM8YV2UnaVmksUfyZbR2joe1FVA",
  "key30": "kTb5GBdjsMU6cfqvQUBCWcC44zw3Z19n67p6tRkBCjbY2SPR2u1C5VtiKkRHfXxXcM4z9G3QJZfdaN6jJo4XGdq",
  "key31": "5vMPDp5re2Lr4YrYEQNX4nVsWU8ryuBH7tLfbpRdSBYs4X5NPX25yzgRBtDtm4ebcc975mgDu6N3BJPm8CRZuBrN",
  "key32": "kzCajUfw6N19iBLASvTxzQ4eXMFXMoLiczHnnSjvYPZ9FJutX8b1SGw1a5G5AtQx91JYuTcGkUBWsADTx1oQyJb"
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
