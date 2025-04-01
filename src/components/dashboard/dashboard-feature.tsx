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
    "qwDRvp6URv7srcAGFhDguvMCVGs4YezrFhiWdHTPbWU4jzppzuW4o2yzbJtvDbcayTsYgTjeSfDn63MyxxUpu8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cfF8vJu5oaLFN4kcoMwW3oD6QgimQUSHHekr6fsF3WuTjHo8WviLsytkXJWqihncCJE9XuwzAiF6Uw9fxTKkuk6",
  "key1": "3DmTAQqZUgcgrp465fVDcE525s6Eki4iS1owXibLz3z7kFPpNcTnDicUsFT2YquHje3r3z6mQqQUk1ktuK5qyJAE",
  "key2": "4MmP3aTBd2wRM9Fssenrgn6Jkcr6msAnYxVtgRs2TkxJURn2A6LixF71AjquZA9Vs5Z4Q1VXzLqjJKGi2bRAUuSU",
  "key3": "51wZiVUM6Q3CFDAZDeBM8x9d6gjMMQ5bcKY2vb1MADzG3u6WyuegDYDwDBavZujCAeA567dBTNebLRDdRLDm4uFB",
  "key4": "2h2vqEBVbYpiP8oDujK2vYY93GFc1RFF9EAhPtqqRLbbjdAsDtzdxNFEVKkKrtmpAz3e2JJYiTQ2He8V5T6A76xs",
  "key5": "3NCJmcESGyDUmmf41e4fWq6MZcQhT71iC1ai1zRMzv5pSEXJkETBULqSq5AjxAXnXEo17dwB6R2oHs2o4DCK1sGb",
  "key6": "2s9LwnCXfSUVwm1osRgvE3h2tKJKstwXXRjJn3CNEFEfFmNgkG5y3rFcPa55YPTh832Hb1yr1R3HUbvhxMrYRjh8",
  "key7": "463uR2TKfyknNnCNh3kJc2tsnJ5ivjVq2RM66d2QbtPoaEWKVFN8CiqGnjESze9yZgTTF3vaBMbjXGAxHgT4SDc7",
  "key8": "5Gs6YKECP3NAGVHV5FVus3drP5Uabz5THDm9HSJxjvjoj3ieh6ERXiJqxRDhhBdjPPumgkD4rp36U1JgRvhJtoNv",
  "key9": "4oL8PiBNrHmBxUH2oEWwjWcdP67QNJLoCEwwKPaepcxLtnYTTz6j1meQZ4zh9kHiNDkmr6qGXcxxXDKc7LV2mejL",
  "key10": "5gKsCjDRYU5HwtM3eVPMWhPnVDRxNX9t4jCXx6GL7vMd3Do8UdkRuXa1ZuJfdVPCegE3CFxzGAMM8f3cJ5uNUoye",
  "key11": "HjSqwb2Co9X5aoYFvSgnc9JSAoSMkfyyohs5QyvgYH7BrNA9WvQrikJw4mDQzbaJn54izNFNV7Cczm5jcKH7EUj",
  "key12": "4XXBcrEgpjPvJ6P7Ugf5XPM6YGHxHuuBhdQLJ5DsbJbL4L5bqkDFBv5PGDCPXAAbTWAmjJLC55TfciiucUwtUBAJ",
  "key13": "3g1ED9KNY5eomwU6LqyUZPXVr6MPDWFA3WG5BBDgXANzX6saGDdHoPTU2LF73qy69aaaewGWZ18QCjW4greP9zX6",
  "key14": "37ckimsHH8yPY8TpvMoeSNXbFRoYgL4gWrysu5g4NppCFNv6fgMwH8mL6E7aEhyaNnh1KzVasx2U7MLsHDVkXLDu",
  "key15": "47WyKn1YnyemA1k6uTwyWTAfDLVHMJpuirF2WRb88bFjV9Qc13b53CbghuFVfXPyy9CFXRna4tjrZJPyzsC8pw2G",
  "key16": "5Zt24y2Zev1EYUnoKuyVY6zTGE3noZxt6d67GgZJgCvAo3JQyriYj8ZYu3MByboTQjHTjbNC7AcRWqFhPUF8X1y3",
  "key17": "4KavFbcxM69uZAYbJTGLD2SxNHdJ2TwLNocgvMBdFmveXJepEafibN7fzjfPFiUhuVVmYHusetXkb3AJdnhmYtWB",
  "key18": "4kCQCgAfmfDngKQbLdaoRqmvxCBN3fLugFjwyhB5YRh8M7AfRHcegv1K2iFx8WmG2wq6bXLQRZc38varKuX371mA",
  "key19": "3z1sh55ZsFtUsrRSWv1X7C7wL5h9rFhzBZ7CNL6fJMxQc3gP2ZtcutHpZoNoJv3HzYpPiuKCdZA6PWU8dYGwhR9N",
  "key20": "2T3fZq7JtJDeSiYFk4NG1nVzw61hd54C2J8HtMyDHJ2X5V2hToA1UrVekyeLjPrs9FvSwd9Nh14xADteVgDdLDWz",
  "key21": "ZhxzrG77TdC2UMwAsJuKTSZxVyLDksKny4F91wcqyziJzWr23zbmarSVmzs2VVW9CSNCD1C8EZ7kUkP3hGPbP7o",
  "key22": "3CfuFUgjbAgL3jUgMfdbbkDDjAvSGADDdYVY9XrmxLVmmRTCTi4niSaqEj2Bxwad6uRai9BofJkJZb5hbHqGCVsf",
  "key23": "5z4DPJMGzrLMutRQPFSB7MW1ngvPQLUhsWs42ZgstWdmwz9BGgDCtzCsWhBXYcbj3F7MMeaVdZeACqHS2saR4rAp",
  "key24": "Ysz7HHRX2PyyjZthheWRyStMsoq8KxVPQAQmnKacLG14bcwYjioN6S5oA196kwF7ktvZTp4kfG7b7Mhe3doX1Xh",
  "key25": "5jKbNkCw4C5ScyGH413K1W4nPrUtZs9civJPH6ZsGDypjxuj9C8D9cXnm9rardrqpuUGghJh2kwLU9ugBrcs8VQ9",
  "key26": "2GauifD1UhP3LYScPGVAwxUzDNfKhoAdNUizNC68wofV6fWttHKuQeJ9QSUwaxfxzR7JKdCZTneoddhFNzPB1786",
  "key27": "2kvr2U9UXzHg59vvf7hdKSZJA4u3hfdPSSetQkBCD3umhJVFpLjZenZpinSFkHhs7iqA8MU4naokUesURUJXvUZF",
  "key28": "3WNFp1kvV7iNjXAz8H6bQnG7yUpPWgKBgf8kQ9m4Yoka3aYFh4MZrqot4ipHGKPUJ437a85tF7ccbi7f1Zu5EErC",
  "key29": "3kKh812H1mDCNLgagy5krTQpqKyVMCb4G6cpj5y47PzLzVcJ3N9HjZ8rEMQTTykUPpuRF5yJskhKn55xKYP3zwZg",
  "key30": "2ZxXgwNLJkr3NZ7dN8S2vEd1hH5Xy91YhQcPmviYVR3ig8ZXQMp5VcGJ1onv4AxHrBz92G7CrofMCrX74a4ZHbW3",
  "key31": "3kGhBxPgjjqZ1oLggt9977gitSDL81JjXocQX6QAMYEu1qLZqR6PiYicDnAjwyozJiGJB59dF3UkNvfUSVE9Dzkd",
  "key32": "487EDfRiTGZj6YefhxWibC8XXMcx4izDcXdU94SH4ssc1d1x4rSjJWPhHTQqpVHMPuCSXu3isEo7nLYzPAhVB46H",
  "key33": "ZnhPwLdnkGzNGyW4op426CvkJ616gFeKYEvuJ2mWR1FTbwf3d4C8dUNtXUjrMNENu7sWvXQosEAGviKj3cepnTo",
  "key34": "5fU78NJo2pyNbp8ShZ1qBXfd6Y98ZDjCVAjtwMyv41J9wpEb9A38NC1zY9D4UhBsJ15PXStc8BYMzFxuzXKaGGa"
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
