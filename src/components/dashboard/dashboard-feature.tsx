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
    "5uudk3cuhHUz1B5hTYTdHkbjmrc1ThapntRnjxZ7DziCV6h372N7yZbgaxcCvJi5gqwRDoTMizCVg6ECpPXAHZGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oMRyC7FvBkAYpAxV4haLE65WqgiG3rQD5s8ouGLRhXv1UhuJkT4cXiv8vZ3KJwfhQVS7FMAUE85peKg2tbYDRw",
  "key1": "2fZD1mYa8jkoLWdo7PzskxaURcbGKYTYNZVofqLHBwU5U9ZUfZr9qEXUiBs2pDCU2a67VNDG6JQNhAp5Q5BoKzTi",
  "key2": "2j5nfsXAfDrnLNkyRadfuzwW7MeZaggnjBQj1EbR7RSiezFh7aJmfNBYxBcdrhoyrCLpeuPjaRavzAzzNSNgkwFy",
  "key3": "afmVQN2LrUDezRa6sq8JiR18CZn1uD3D9sZJtFYzWtXtxmi1buswMkZcCRqof6jNcL2i6QvvBzKMx3N8D4z1VSe",
  "key4": "2iYtGnToFCWGSAD4hdRpXfgGTL2o1ktesaeLXZERhjiGVVwJUXhYyhK29uWXYphjCrQ6UTU6XBNu8vUdSf316nc6",
  "key5": "d5tZg2UYbANofN4YXMZojBveDVbtH5c4PUq8kdRUVu9bf5KK79Lu1r4MYGDS7VoJipEw3Z3LBRMdQ1FWUmaoqYE",
  "key6": "52aXYqdMgX73JbWwyUfH3YNKC5A4679MPGxbL6s3T33Ua7oviM1H6kHX1K5zxFDFRitGofk25P6V9HZc7so5XX8A",
  "key7": "66HkDyASgZZCXLimro75fyKVDS5tfooKktQyMNTQAXZ8R4tZtmAkfXg2Jq3tuwvDnvRHneKUeqmvAxsjSzPWwzEc",
  "key8": "3CcPUaDsDvF7MSzwnPicPKhKbgT9bPVt8eD38vbpwSnzmejnu8YtvN8PefoRCtSmtWJHhKmPnb9jcXCHUi8VEVCa",
  "key9": "5gcR2HcsQANDJ6wGNkZhV1XnkE8jL5C9LuB1WNdTjJvEJnueJQgoXpCgrL13MWdyj2iiiqdrkYpUy4yZURmVm95Q",
  "key10": "4FhYRXgPAmaQqiVmXNdx32rkGXQVkhnRtjvGRYQGXt5LRnLxF4RoPCyF7oGBMdheMAXZvAHUd9g4FUzH14GoQW6S",
  "key11": "4NfXptiEcRKSg5eRDG4qcZm6ohPxWQyUTYQRRENnpaeHzfFAFvaDRcJM41FovG42vS7czcwSTDhg5jd6RLUMRWo1",
  "key12": "3dgGKcx9b9JCqer6JY3joye6dkxBd3gjnmMs4gz6A2sL3piMnBes7eKSVmeKVuDn8oo3AQWQPiugEVnxjQ7zZv4B",
  "key13": "4B8pWFtgGc1hEpYgatFRug89W43N4B2Z8CjAgwNwJrEuzpN8sHkAn3B5qdR95NAKsjHT88wAzJaJf4HrXsjLoeAL",
  "key14": "4LXZW3yQMnZn9Mf6dATUV8UTjD2gvyYQwk4juP9PXob7V3uinoRYuiokUKChn9MYE4ZtiJ8qr7QH6Zf1ZifiX8NR",
  "key15": "5wuKDEHyhX7GSaPtT1kgyFLRyiazZ6oPDDCcpWsupbqgGhXUQ7nazYwKiQV7rtqHpRNBshwDawn6gn9mohWDDfSQ",
  "key16": "58yhfCJkpkWHH25PUGk4KhURREwRTWzpADa55perTzZd8Skch55hPFQqJgDEVYK1N4AXgpjvhCdowqtadLDG8cEo",
  "key17": "r7F5g2jmaPesSakK7MGoFKMg3vvsd5rBcGYs4Tt5hwBTuxiVYLPRVEbD13sFk8pAFaenqHfvLU1enjEwwtzdpJA",
  "key18": "2LLRGBsSLGArZwebrgKGp787CUGHHrrssyuWd47q8rRaM1sgo7RaLH5fBvozYGj5RpUKVcFtd8V96pUtUWyDUAez",
  "key19": "38niSR2Jq3XzWzPE3zhxm81JQxmGrSRQFozRktjuFTziE1pJemWhWqnzMMuqdyR7nRvLwaBhvkdJyJTpwAvDKb9V",
  "key20": "4CJZhf2ib5bqDoJcECwig7RCE8rxq9TGwKrHGiNd4J66U2P8fr9J75JW43weGGuuaghEp3BN4Z8HCXgLFmYWHyeQ",
  "key21": "66vnLWzzCkpfx7z5LVkCdPWQDb1WahbHPvKBiSmiRYMjHpPNMcG4p39tnCeBCsJfB5nNggjEpcSfq1macmADWsC",
  "key22": "AZUgHHQDywGC6zV95fTPEQQpPuphK617EzmNJkjeXRyDa7P5GPnD7PFyeJWd6iReYg5NUB27RYGqkRtboMR42h3",
  "key23": "63CnVMF1x3do2LpJ2xgsLSwNT7CCmt2jPvo8gHP7W8qJYEZHaxwhU5b9QZG85nHBbe9kfDgnizkZSU2hBKx4b7iB",
  "key24": "5gyvvfKZWUHjMLU3pBqRcQrKokhbar84gozah9iXQWQbHCHZRVaXDTTxUD6RyLLD6baVPUfhAzsgAxFnRy6dx6rb",
  "key25": "3Npr5APhr3z1mnfBpeNokVvsGzVSPnHtT3ckswhKTc8e3GuUb5CkZ5xNBif12KcVWLnSn6L3Em6JRVBhTtfw7tE1",
  "key26": "23K53DjyVUCMeiWC5AFHWMUZC5tUDAshT99RGdNDu9YKFGYcaPpEfnniVisdsqgv5DBk7AH8GkEEyYU7W1b1dozB",
  "key27": "55tWk7MvvxjQFG5aEKkfP6tUUaY6gniGc7X8sg7B5nHqMJnqoqmpF2GfShv4YG9cm4pMwNGsdDgfk31AhSCE3yJm",
  "key28": "3KyzuJCYFLmhgL3UEYk778qsRuAVxKqrSGzuZ7SH3jSemcbk7sYCviA632W5SXgpcnzDkZEFVTsLmkKxPWNGrvPD",
  "key29": "FcGmn3Z9T8s1fcsrY2Gv9WEhC7amScscUZSy52R5CwtEJ3v89J2eGMUU1U2tuFQQ3cAsMWs6Jv4TKbGcDBuq7iQ",
  "key30": "2tr9943uDyrp2Qs7NAtXVh34wdXf5FY7nRPmsiZ2C1A9dwGT1rtLpiT94TXL9Stqsxp2Nh32pTKP64VAwoodH7GS",
  "key31": "5wMTcsii46ftv7BjP7jDHyBTeDJcb6h4C73Do4pFz4D55nEWh5whbrLZKMGngtYyJKjKuw6HVTjepHxGwHBdqmgU",
  "key32": "4QkYf8TNNi7fu4AYtr3MY6wj48s1qvGXaXviU7Qmp1cjQ6m9AfkaJHeoCVPnsGrRgurH27pdxdFTz27V9XVPdwsR",
  "key33": "5ivBkHYUZbxhuXie9Gzvz8U7mU3NvDcpb7SdDavmMBa7KBFnmByo7zKp2xqUDoqwcNQwMPiAnvKoXXhZ8cfhxW4Q",
  "key34": "3Gd2mREBvNyC8TDkMqzFerFsabP2kgrzddAkqCPCRdT4DnJ9maxn1xs4YSZUrGwHoPeUHSixmWpMLHUwvyevxU9i",
  "key35": "3PAYgMbDyM7g1yc7uLFWTKXQHoqcVQ4Pnf1xmdP2FEREKidgsHnaVLNJLUb11fpnyKtdu9e7dhjTbCmXkZfHf7nn"
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
