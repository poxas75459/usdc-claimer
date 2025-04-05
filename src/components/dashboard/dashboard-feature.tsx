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
    "pVHY1xHhz9gKzEdVjFdxiwmEgeMrTDbAF9Au2L32CDKAovvfN82WEgVdsmZPnWEuhPPEkDKDMWQjjbE2mUQkWJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Apaxg1UpfhCAYVP5vrCuj48ShHaHSBjXHbVqRHiEwD8Q2iU4CqtSZTMpsD7H2RnbRXJjiumismRqpmF2tnfp5h",
  "key1": "vtvUEgGf4ivcVVKmUGzWNTv1caC4fTVC8nzh5S2ff6tGCdHUN6WqA2NPXwpcJ1zJysi88qYgxVNt4QMDZSXrjpG",
  "key2": "4xRdT99HhZiRGwhAkuoHZ8NyVExk3K4rV15sgbdwxx8x8dhfgJZo1z34mnaBycyWdSyMwgYSC6TDXSLtJ4YPoFgT",
  "key3": "3AGHnxTbFQiyJZmgiBMLtQq9X6TPyunBmkMBMjDEP6kBMHXS43oaBoCRENMFgtPdbbwsyD1k4otT2ocknvjhKGNm",
  "key4": "26aKJw7iuWdm4JK1VSPV2GAZRmTKcjbirgSDepcibPKPB1dbTM33ahHp4qC2N3JfEbedq9ijrjxoYgEZnGGxVkao",
  "key5": "5Ygjw615e8T4rsBXNpUkcYoBqhDYi4Dp7UbfhgkPTwXReEZ3RWXiJNb2tp7RfjRdfEhQ25qbgPaF23UKxqgWyHCY",
  "key6": "57t48GXJqBJ9YYKqqy5fS6PofFGHC1w28taPtxfggZvMfCsQc2GoNKvc7su4cxVsnGrY5hkhFYtejqaifYSRX88e",
  "key7": "4X6WkLVEieHwjfF95GvcdyM7z3WZG5F3V4cFecQDACqemXpZNt4DKtbSH2r2nwVowL8fakeenFrPjvJpQD39GSFS",
  "key8": "NuhtYUyxYnUgau9xcqo8JtLgmgpGGs5gFM1jcGEo1siGJ2Zt5HBy1uNvcWugPjcxk5yuJ5YuJhrj7xPPimNyfgR",
  "key9": "3jWoywUWQ3J9DYTes3X2uYggGJthQa3yWbYVQCKrRSHXLp6RBowSwe66XUMQRnGFYCNuYcEkf3GUWttp749m5mhy",
  "key10": "3nop4Moi51Bhgmb6shwEjopeQt1p1kWFcpNVqZedWv27fC2XbyBEtUcvj3bQ43ABCdyR2URq7Ke4n2r8uro4qm2f",
  "key11": "3F21sAu4VVvPyRLA2XBy9sx9dLBskeVn319Aum38pvFhWDDf2GAesh8UUoVjLQ4oJXnvufg7tVhSwQMx526EWikw",
  "key12": "27FMD1EkbJU7LQnKeLQqTqQkgm4uWzwGfYhxEgTEGUiD4E4ws5vn8PkdrRTLxKkdpyo7cukWaMuW1UFMHuaZ5wE7",
  "key13": "XDCKzYBqtRZWxfazW64dVY5aTuPdP1T9k3sBEVutaCPMXqz2ru9cibzH2akiVLkPBqJzktGtJFrsfrwmPuhXz7t",
  "key14": "zGVAwPGou7VcMqB3wYUp5zrseczXmkt4s1cnNVNds9MzTW7NLQWX6ckfMJM67a9PjhfMFvPycuFNrCJGv1MVy2s",
  "key15": "5vMrptB3Swo7TzTNgQqzntEDh9xAqMZkjScju458uAr76DhsoDWmSJwjbJYACTRBdYriHbdNuc4Xao2pwrQ5i6cn",
  "key16": "3d4BiCtLQEeCYGG51VePeyYVPSuMWZhFnzQNQ8zATMmVmSdoNhh5NCvMYQZuzCZ1MRgnhFzTa19vufzia4jQbTHJ",
  "key17": "3ZyanRMAvLuCQJSvjx13NybGsHdvM9gt2PuQbVFaurJCWSJPCRosdHadqKNKcka5ny9n9wVDA87erc3LqiGiKt8z",
  "key18": "5SfN6cfBx7wdYRzo2yTsvREEvNjawmsbzvWr4qh9oA6n4hhEjhLfaZXuWjTRvfBVBHg738TU7w7z9cp99vkepBSM",
  "key19": "5Fnmtowh23t1nxD7CB64rrDTHcLhQXEfiAKCfegLXKBFGCg6EpzwDf8f1VZBq8YdKnHjvFvvAvUemFCspj4gMW43",
  "key20": "3JvmokrDiNJhRD5xkUvZc4ojszAnar4Hw6rKtsQb7LSpeGT7W5L4guQVk96C1WB7H67zmdMsdS16UTaYLqR42e7A",
  "key21": "51u1EGB5HDXdxKGKj7tuPazCdd8jrVyiJ7B3Hro17ztSRwSbkN9WQDQBs3iHfkLS9Pj3m5Ta1FMig3SSi7tTCMSo",
  "key22": "3DAMtV2P7D6YszU9qYAmYdiDK1ZUjDpXwd3CGJucU57vYF4pbUPVJ579fPbQAdszgKrGSyhgYnLZzBkvh8aibpg",
  "key23": "RowaKj7odgaZSk6WtbyWSteSSYbT81BziFVEvXxJd7oK3FLgQiADofRVyMWnkD1VmYpGeW9ggzFahaf3wUQS6gj",
  "key24": "3LKKptVq1qeeYRqHNpkCJUJ4b842Hc4botBodZTWJvGyP9NLELhmCW9VbhggWV3geNh1zkRMP9cfcitHKin7HGg9",
  "key25": "4Fi2X6iRg4whsTGT1ybijNWRYjZw5eWapk8PePQ8kfYaw78P3U62y4gZVmfKXi11MgywmDQZBwvMnW4uD3He1HKL",
  "key26": "ydCeUquBYorGyDVYqAmQK8qg88XRoJPGcej4fpMgnoK3ygWzzd75e4KZcj53ZDEHretaZBxSR6UBozzypVgs8qW",
  "key27": "4bKJkx2TXy727xTRcABW1mJ3wr8YHnnu2twSiKpPq7u7p6Q4ba4fkPRJSgfm18R2gwjnLhmjBA2tLNPe6dhSp7em",
  "key28": "5ULHmqCqz9TN3hLVGghdPcUwWGbdbyvgzZJPEXA1WWggC56DDCDfbTFhxdgt4Z7kZkVZPGC9Pi72KWZuJQiBCr8j",
  "key29": "5uqb7Upc4qS6VUpYJeifejfc4o1w7pCv2mcwUupP8T1ophiPrPguM5HxBffY1xVthxT8SPL2vJVKQg96M7hgE8Hu",
  "key30": "2T3UmG8prYRp9j8uMjiZSk9jmqQuBkYFt8fmyLd4RBwfqLvhXatc8b6qvwdjqCb9eMTFF99tKrN7CpBNmJd44kvf",
  "key31": "3BKakM4y8Q5HcQ43fhStEcDTShJvBayHNUzNtWCf4yXgGipRkFGtvg1y1zkNz7PTnyr1jVhQg56BhLPGtRkwrhBk",
  "key32": "5e2hBCiFdz3LvzWcMLr3byH6Q6jF5YsnGZ69WqjoSjoqpr8b6Ua1tyzsUf7a9xoFkPrrZHMTWeKrrk3RTye7B4D4",
  "key33": "2aobwAhhwxkeb8AeseVhRmmoRp2KFgfv7nUCZsoAzTea3EzqMYeQm1KaJm11mTQqygbYjh3x5Feo3dy5tuu5LBBm"
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
