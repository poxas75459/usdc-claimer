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
    "3MHVtSs7eiERpBnEVDHG8S1w6BNP9wzmUueErfE6djs8Mykkkg84Kf8Rb2L1wQdPFivzMZDqnUPMBUNZpXNNkV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pHaUL21XMXUhg55KwTF87nwVBM7bW49FkCSnQxvmyKJJtUTdonLmjvPzSmSPk6rnMqauiDaSw4sZjK1ny6TL2Ha",
  "key1": "3mzkQ34eVSM1cLntUzbp1ar1ezCp7gjydspCyYKXVjYRosZQzmdW98BnsQCgBMCagGGaaeM7xhawzJPC2yZEjmpd",
  "key2": "SrazhtizCJymvZsK6docLPiLocWhDTubF2EK2uoVuZKkyErg1mor9Bm1crrPLu2GmU7ME87i6oZ31hpq7giKFCH",
  "key3": "3BWctnLY6A12nQdQcQeqYWeCh8Q72mNraG6CY8thnTmTeS3oNKsHQoL6YLxLKM8urtGCbgFd1yJwgQ7dyfr4YbMN",
  "key4": "2zN4fwxWaUvbh4sHG3zezQvzXzPjZCc9BbmTQhV6PtvKu65hSE28bZGkudtqbWmU2Qvgzb6NHmcWsndVk24fQaWw",
  "key5": "3jZK2qCs9D79aQofVS9UukcWhQVUwcTwZiLwkDPRj1GkF7EvNKfH1gkCpb9XuQVZwHrGDUZbaKvmuyqQGb973ggX",
  "key6": "8acQKzYmLeHLNiN4Vpet481CQcBT9CeDp7PHTfEYPH8WuoqCpBuzRuaDtK1dbbXAwE89jK3GHEhVENSykEW2m97",
  "key7": "3HxKJTPQm58bxrd6YoiWQtCSdfsiqYA9RtMyd6hj2S2dvymvBc4oBWSRC3UeeY3qf5fpq7ghWSph3i1hoD76PR9o",
  "key8": "2XVkf13gTCeRMPh6kXtUsTCnHU2qwHciW4Qjb8wrpApLvCBA94ZJK3f9i9v7GGKXfVAmms2vVJreLgJSC2DbLg3g",
  "key9": "3kzVgS9pmRBrBR7dhWvN7xKwAYtC96whxpHhvR57vER2nVS8Pdc6fBpxV5JEqGC9ZZkzjvpDt565y7F4BVcDtiX",
  "key10": "3euDFXhgwpfAdCeJmYVchLTxmmSWhpXpAdGTZ1b9sK2x8YS78eFt4iuzje15N2Ddxa5qwRv6yN7yfNe9PR32ZKTJ",
  "key11": "HNkk9SvQRMPezgwsrRiZFkXAZ8BgcWXgkEwdHuRUEKmPigXXgmufxfD8CooDWcgJvWKdAJZ6U8QUqMiFQRec9iU",
  "key12": "2Vt5wB1ZWmKYxZ1BjC3fvoik2a6WjJe6HrMxfA5gA9pudWmhoWpJrZc23Tq6XLnqi1B7iPVUoCBbDbDuog8XTmy9",
  "key13": "3ftsBsRDCQ8KNRxdg7tnxhnw6QizpoTDWGdcQzZFTygTiJge4rGPA4j6mKhJd9JKrypdqrz25ENbE63uigDqb4HU",
  "key14": "5M9KU2CVTubQUyDpZH24ygTbqhnXzcVQG9wuYuY8U55ndGdt9qf7QNY8vm9xLvXrb9gCamzr3cnQovbdQ96FBdPn",
  "key15": "5dW9gffkNtRBYRWmhV9gng7i8ufMQdLVtFq4Zn1xZT9QRy48iTCVU59QTW8PyKELCaD5qtAdcSnBCnkFkJEutfbX",
  "key16": "5fZSqtAV32snASoq3LjQGGSnnx6A3aRsoK6jmt4gsD3WWcPJG5mHFkxUVmXt8iJTfZMh3bPRcWZia8RobBCmFYw7",
  "key17": "53pkoqRVWVY7Kdj12jnUyeRWKBBxHRwmpmhiZTu7fvcUEQXaZabJybVKkSVhQdWKC1odPhP6c7RrNgb5D3VXeWz4",
  "key18": "4XwXUDZaJWXW2P41GVGSRSNrf9cF7wjYfEUS8fJRT6SiWQYv4YZdDdsGsaJwp7o8GUNQNTbszPNoiFcRh33GSTaq",
  "key19": "4ahKZWZ18dcHEM7GDqx9R6jWzgqx3PqMtdbhfgKwBcot37tLeEfVHH6UQ3uueZv8k6ZRuJtvHiLmdTEZbAk5bFf7",
  "key20": "3M1j93GTC8uG5uVBRLZXGAEDe3bbVNDiBxGzDkuBuQJ8N8fFSwLLC5CDwhHrzzBiEyuHKa61u2s3fmrAqJzyzE6N",
  "key21": "5FmnW3jGQzmehQxzE3Z1NzHPgW8xMJkg4XvBjkZxbpuPXoHdYNK5MkDDk8okc7N5gQ4xQovSg2uxh15R6wmCCYwx",
  "key22": "3psMPYv3FD3isws8K43rpD62k85Swo3ZhgUmsvsyk4UNGKepgdvzcR6nuPBPomtBEaSTcmEXFngoUaQe6akvwvNN",
  "key23": "UZviQcMtuD9hgwkHHcfAZ33Z1vKuHpJ8z9uEk2ZEM9jaEequdqpS3cmdfw3qgeRn3TGD1mPU1Nxp2xE9YKP2bn8",
  "key24": "2uiLDWK3QzD8Fm8teavRHGK146FMXK4P2itVNE3AGDKWjZicNpK52S26cJwRFnPhJrCfxPNvwLuXsyHJh1FLDfWw",
  "key25": "3VGf8Lp4STYks9FfWji92S4fcCvaHAAwWt1xhBb2SZ3pwbpAGvPpVKuE8tiXGu8fVLwLyGZH8pkx9m4Lqk6chhQs",
  "key26": "2pZYVSPgj6zqMdbg5t5K6w9owJ9efC9cb5WqH6NcVJufUULCiSAFYRwJkQLFVXkiCZjTCF9xVmLer6Zd1panJe7o",
  "key27": "cD1UoSipe8jE5eeSTeaWhMdTpNKHpQXzpPm3bKWoYBwZd6qsuDDEzk8Rd8aM8qiKLmKmmGG6dMgLS3B1rcjdvfC",
  "key28": "4xBJhsPVRmN2Kni4wCtDZUim2z4ACBFowhadrc2GN7149rEGxwqhybAQJownCRuRHZ4CoEJiBHof12cqm4KVggbN",
  "key29": "KqAgnHcoKsrRw6Pt1usnw4aYa38VByURMwGDXpb7RTDnhrZioaCppYePN4NHhMZthWs2y1eCf6gwJkYjHCLSWAF",
  "key30": "4Dsr7WdWzKJ36RtD2ZQcfTqse52XG3Q113TxNKff4Tt4qzS7PBU3NAHbur4cdchJxR2zkF3sRVME4fhcpUZRSreD",
  "key31": "4qsfrmhXScbkm4oAGa7z5agTZhJPKK58E9xqpFZXVxcc8h6qpCVN1DKgSKxV1hLWZm9PJ5aaBTswJBzV8Udc75Bi",
  "key32": "4f5f7MPijhZnCqY4x77kXWpnfRiosmzmpDCueuJSgRpsyJwEn75TzdEbubxRhndie2TJZBtXyC8VvdtHUW11X4h3",
  "key33": "4X7qv5dPq4qFxd45iSPhw5ovPdN56BsyRxydzynLk3owDgi7v957PnC79CkUyz7xd2NjcKPpZACQ1J73kxntDRKm",
  "key34": "6PDMxMpKpYGZAcamtwLP5n6GGbfQhnyQ7jEmFqpQuWthQ4hxEsDzKw24yP5c3WaM9PHsgXsGkkjJUJJLXkdh77b",
  "key35": "3ezyEgdykZPJLcsrj3YJDcRABWmAR4zUqWT38GoywMHvy7Gxgp5ZgPkwZKS8D1akr4YeaTyhxQWaT9BqYXdYrt4g",
  "key36": "26LEmQ7ueUsMzvvP3uKiomv7MHVoXvP7vRoSzJ91VrKv3xGV9yg9CWfXgw3AKdjrCBoLPjbv7tueqej82uMHWWp6",
  "key37": "5DmrDAmz9JBmjoTym8MUDZXv3py9nYZh8fzAf1KynXWYMoXLsWKbKfVjDbwHnKkpwJ8bqysbpSfJAfNYDQgfwfXa",
  "key38": "2pwJrDCqZujU5VBwqY4Sd9odDi649qwQ6DmU3D1zN5JUKK8zCiTjxvngffmrTkfm9jthqAYtFPvyP9W8VbdnmbTD",
  "key39": "2ZmTvcJfVEzwDrkfHdYvgAvg3DNg8nkTW2vThLFzQEk5ApNmunukr5NQZ9p8xF5ajpXSaqENQ96WZLpjQ1bBzHNX",
  "key40": "4Xnur9XAV3U8LnNsVrWNWVB36rvV3cGqWiHwkAcZYHWxtqQ6Feb3Y9XaJXkC2D2wy9sK44mLDTJbNymJrGvXCPGk",
  "key41": "35DLvY4dkkGgNNWJAPCQGcfidZG2F9gF5WsdYBTjxt3AeKy7TEoiZuLrxCULa8WyZgiwbnVTz2wSD7v9wDQTTYE4"
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
