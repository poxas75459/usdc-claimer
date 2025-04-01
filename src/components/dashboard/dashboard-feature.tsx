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
    "47sTsrphzPsbUMmmrpwWq8crDzBDbM9wvTPfNojXRjhGf2LVcUWyKGTnb3GV229G9LTpqL7KxFxdB2wyBSsJxR6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FoX1M6ziQ4S4PLZJHv9aH3ULBo9MqHYst8NtAps96mxGKC9bebjBDKhi7hRmJndATyuEsJtPE93ScAnDFZNoSRg",
  "key1": "3zNYDzSFaqfookPTYwtVDbUXEQrHBGbRUfdp8cbXdE46TMq5a3Gu7HRHiUpTKwS8PbqrBnaX5mE3VMvfGWVUNwek",
  "key2": "3uk2KBT7GaRMfYpZJ29BWja4ZhM3mbPPSgwQVsgkECHWR9SkAC1D34jGFubVNnbGqhKmFqfkXzbnmEhEqA64AgiC",
  "key3": "3DrzBicaY3PtTfRkqDdDEXdB8Cu5zucvG4913V6YnUYy8WKBZx5cyjDecz8zwAtjiGM1f8mzadsMpBCJJwV2o1N3",
  "key4": "2kqhdcdWT9craTJ5ffASQM6qPCYR7i3Ze9kCjDbbHwmU9wr5qjEvvS4Sj9N9XwH1ZTMZtFYSNvgGxdbhugRtttZ6",
  "key5": "5ZmsGGEqNi9UY5xL1kjV2VK7kmZb3wpaELu7rngSJaRgLR9Hozqe2RZHEyuaqwDQWf2yoUcBpQjCHE6M3cVyLvfX",
  "key6": "5ZfzMDyqedCPs4nNP8PBtW67FGdReXCMa1QKmWFpt3QkxWb5EV2wG74PjGbvUdAJjrmcMHeT8xbcB2LXncbA7KbT",
  "key7": "tSYxW6vY6N7GaKb3yVcm1sYqurBs2mQhMMuwf9smj8qvd9qjiooKRKTiyHx7Wxxpjy6ku8FibaEa1tXeUd6yVMe",
  "key8": "PMgqj7ctaUHDdVtfDTxzHT61Qnu89D58V4UPPs4qVWe6JG35VLXwRGDMbArosBWiLBbpH7npn2VEqDWxLLWMBoM",
  "key9": "5zCLsCSn5M4gaWsVh2Fzmjy3hVCZMUCM5NFK9mc8QjfEi4ThqG8NRWKhSue35kSNcz6DLxqeXQCSuNr9ZU13Lye4",
  "key10": "SAmc1KdPJD9QH9pS1rb1VxBzvmCPqoj44gQhJho1o8u68bf5BhmVgYaXd7xMFJhb3DUhJJcEuKuef1n1MbLHhFZ",
  "key11": "2AEpTVdB999T3mgMdMXunBrznNjWAEjQQahhEUVpzseL9HAhYeBMbB7tbf75kpuirxYERM8SJbANShzuYie44xK1",
  "key12": "4Z9QdxD6sE6bnrX5AeCb9GPxW5kdp3nrt9NbWdrKrwD23AcUjijeyU6YpExjizKoPb3BDqWVnSo7vWDknkvpu2K5",
  "key13": "24wjh9ErQVEa3GiYw1ZxhDdw68x2Xyng3Pezkj4jsXC5RtZFNURM3s7MKSWEUBjX3MBvHxqw7ybi1BfYxnCbZ6Q4",
  "key14": "5CYY6JPdupTRJAkzeDjwo814m1ewwtH1M1vnWspxefCsa7FdG9p61ZBBCNZKRR5uiFuobaSGmish4UZMese558K4",
  "key15": "4echKJ1aMtfpHsmPBa3DrcP4fBaRX2DKGdVh5sVvcDgd9KLUcaze9RBfSneFr5QEFgFo1JB4QxFrxW5v7SUqwors",
  "key16": "2wUwbJTZ9DEAERw12XQxbY5vbb2S1zeDfq8Tsyjcvrn31BN3efLE4nk4v26akkAjM3zo3q98VKUg1BEmYRi7dqXo",
  "key17": "3vVkXRKFPgSNZQm9z2pSuJXhQkY65tEaMq18cUhsYH4puFEvSugJLL2iLQXVLjnkJ5vMeBP2Gfsc9jLu92eu4jdh",
  "key18": "5cpypa11PgLFvwGWEyhp97BPC9ARycnADJignhtrJC9CDcq2KEcfvXqNxhrKBFRWwrBXWxeGt9JXuHBaXFXP2Y6Z",
  "key19": "3dqg1vuowe5KUR9acYdH5bHqkTY2E89zyrLHozPH4EXWQCBbkzMBnpxU3MGFr6jLzMKvWUgV3M4npoDGaGcBH7Xn",
  "key20": "5Kdr6LCoMRKJ3ZSnLizuJoV5YXP1FsWVBPSsWT6sW4SMkzUmqB94QdnhyqepgWuvPW3CSjuY1ATmXXCQL1V1jE1m",
  "key21": "4j8fJfaXQcwm3NPsurbNyP4ofgUGVEo5PHRRsYHZKRHcDkLF6Xj66C8rTyRxvmLKkbkbvkqNiwdBZ3DHJhRp2VKS",
  "key22": "3sYUGgYx4t9E21jGH9evGkprQjnQgsAE2EaGy9zB9yFfeCymkKiFNq3Mq1i2DG8F6FQpUNaNLp9qEWYESzzT1Z1T",
  "key23": "2jXNbgNZ7PjsMBhBDVBjKA7gKMye3BajwaJAL3ijbdePJ77vHJLth2tRzdqPQVLQzMnPPpkZnJaJKJ2dxwjPx1zF",
  "key24": "5gZUAcPY2qadyNefSHxSFBc6D5PmHU3CaMnJ4EvG6iHbKQZQxdaWxM89HTX7B6yc5P5NhywPtY29HLaVpbnvRtNr"
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
