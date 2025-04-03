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
    "4g7X2ruGHtBPffecbqh3iDiXx55bzYWPkyekPHi8pQZiVFodLdd6ncPYbbSTc9y4sJZwTtzwqHLWcMMjQG282Zic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bHxTBmiLRXHj3b4Dg5ty83zoSMmubL9FZRMzJUSWgkxoEtodQ6E6qBNQ2FBCfZTsGk4FB8Z29gNkUprna4QU9FC",
  "key1": "WVH6vS7A5mPv4zv4DgfPEPZ33jj6XPA2QQX7MerkM1zta2YUdqWYzHzwTnq3Ad2QibCV9YPNJqr9c3ydb81AUKm",
  "key2": "4KAPE9mzYGvHMvazDSkpBBTiZ894WrLbzmgotKdY8PDAEd9aaaSuocjKZGk15NSaHKAjAoYsBxCxyLGTqDYBAKjY",
  "key3": "219TZxRDkPAfs6n3AyqghPHS3KWDE9Lse4qAGxYWAJ2aF1thCHZxTcqbqb8XDftbWjW3cZD1pM7R8zAXUCF6jFTF",
  "key4": "5vaZk6pTLSvBGhVVDeukMPEWhSQfFe1bhRNea5gPyPZqCSYhPZwx3agCWBVrBnfzMSFWvp2L4RXwWnNZSWhkk4Yw",
  "key5": "35ZKVMbXZQCTL6hmNwCaEFgVRDJ82YHWyeH3s8UH8xar1W9U3729cgsrxWxS4BRTZ2TrdJEiPgJb59MLmLtvzZxg",
  "key6": "5LkqXtDTCRLSfCrKPs2FFx3bTF62UN1T5AXthdVnTZtmzweMEqxNZm2c43kK4i2nK1cUdzZYTqCNieSCnjBZXiVW",
  "key7": "4kTZqFGaiekKvALtRezXAvVb1ZRAvRzUGo3BYj8jjirydmLfQ914KdUax3xxq67vKReHhLz7UuHb2W7q5VhNCmN2",
  "key8": "3iYjKQbk6AsfFkA9f7yMVS7njkc2rTBB83XgC3F8YTycBSFgB7UY5ve4Tai8mBjuzg9jsPAtbd8Vwq9dHGDYBXVr",
  "key9": "Lrh7kzmE3ov26xJoAF7G4N5iP9wPuyqGhbU1ZKdPC15LskXP35nZC7pWH2UahSNiNq5rpkazppvZfhv2AxUK79s",
  "key10": "mPJLnukbm8Sm9xZLKbuY5oNM89sX88T2AdGLn4sHw6uTN9Tx8dZW7znha9DdHH8aSNh5AkNHG2xd7MXtWXPokDm",
  "key11": "4zy4eywzvcX4HDHUi1uWgXyBX3K6Hh9tzRH8wwDo9FUmuZ15uydTLY7mJq8zo4ZbcZs8sbsm2yydABBAjzywjVrz",
  "key12": "4FVPKAjxWMsF3XmTj59CpJbwNKWpTWf5zDpFWYm7TsCCNWXX3nYhYKQkTpJaW8sihq8AxQxMxHLzpqCVfwxTK6AP",
  "key13": "3CzsRNAP9e6kNKmiaYUtFvfgCfJ1dh8axq5b73nTdWTjkRDW6SZBLCDygtMCr9nL8F7ZWyfmNnYSr6EyGypwa3nd",
  "key14": "Ydr2Nr6ggbwcvg11Zh2GMAjs3RWpD8umHYHmkWHCpKmV6SCT5rMLnvRA1b55VWjbzK6U35zbM1933qM2ecHoztB",
  "key15": "krovnLE7bhGAR4Ad5ak2inhi8L6t9eGV2wYJcw8TVQkuQE7C5Cb1RSpJQhPvGgTPXm1owneC3vd2bmYAExuwo5P",
  "key16": "4gHgFhBXotASKygpBWGtRkgQDgT3vcSYeEwMHFVfawjfgPfSvL7U1SY4uDtmbBi3TWtG3WgdbqY8YuanGdBjy62J",
  "key17": "3z8wZvHHFx3jCfAV42ssjXjaNhAQj9q4JNvBHtVZmxk12RLt6xk8Zoqj7At9YgbmgSkvcR1ZdzqiyKKKzYKk4W8b",
  "key18": "3q9NU5LNq2GBPbS7VR4Ge16gPXf4o9UmqfBhXKwqh7HCTfLRRJT8Q9wWeMdkVviQeQCXX2RBLnvHdagRauRr946w",
  "key19": "5drePsRKVD95FVLFkgFZnkVWgcd8gmpbr848YFQX6MwH7ZaNv4CEC8M8AEhdg5YMmjyfT7rjmeCc1nytaEG7NHcN",
  "key20": "RKyzT1zDGrVRAGurozvvSgj23NJdP3Z13ZXWLzAbimRHKeiJDfQtpj6m2Whsbtf3SzSo2wT7tY6KdmDXafQmHKf",
  "key21": "43jCExiu7PDsgVkC1hQnd9EjU3faarXn5NuqnaVeFX9bcvguk47PVGzhREt3mPpxHBskgm3pRyXVSgmsZe6Z3dr8",
  "key22": "7tWq8zcyaMpvf3giNz56gt5bw17dNxk8ABitMdZHXPUCQ8X7g1ftHZXRHXWi6h1GJxthMsUQMg6juGBtG26UDHp",
  "key23": "4fUs5zeb97zsQE14LZX5v1m6NfsmGQD5tZy96ruFF7SNgo9dvE796aWzz3jjyBiKN8YH2GzxmYjKpXkLboaw8sLB",
  "key24": "C1KDNCUsdARC8xBPZMYP2uV4vjSftDPZ3ZLSSkbcLWAy2wx21LyQADCLrhfpneCgBF7KAhUtetkF9FtusbREHia",
  "key25": "51BjjPbumBNu5sEH24ionbUYHGJNykAUHXNabG2CL5G4kwo7qG7ZJ2kGvMmy8QmoMptsWnGApmv1nQDjUDGPxD33",
  "key26": "2ZAXHGeKGBWUYs48dxo5dsmZqUdoU35TLGqccwsAbi4KE9iVeR3QQUVbrKazz24TmVrBTbr3PzVkx2n5rLC8jnpp",
  "key27": "4LSAmMWX5BSGUJgUhQ1Z6TvTYnhxhxUJK7GQ4LEtNFrB4dkCy26zuekPgZoFaXDbcdMANjYD3o4WK9ATL8AYX5mu",
  "key28": "2ix9Lujgcyt4b7vg8gAEYRF5HppEACBXy7ezfHZhiMqS8ohbZ8LJgjTmqGDH2vm62cUphBVLw1FEjfgKqjyjUtVY",
  "key29": "33sdKqgvzttd1SoE4eZWtsJMsthMXfmuMC7k9hm5atZGki8A59CiBfoo6fMvTmZngRymBQbnYbF6moHkkL5NC2Lw",
  "key30": "35CphMna7xoK5Lo3Vp1wLoPCXsjjar3zvFyxoaeqNtqAkBPo9x8dbFUNkoZjWKZENKcMEQswoF8RHyNHSfcKCHQp",
  "key31": "mab5Wb9iEUwwMzxMQbKWzGvJiuCasVaWLsi89RZpRyh1hyEYoo6jRVLqNcigaoGk541LqpwRh1tghNm47u81kj7",
  "key32": "5NmPTcrxy1BcWu5BsuV6Vn3WKYobmSGWf4p3HDeZBzToqwtXyh32KNeaq3prF79Ye4whN6m9aGbFa89J8yEbcKf9",
  "key33": "3ojtoWQZZquA7fCn6GtnbTggmedm4kpdkMoncQSix9fJD5fVn2kUxVqsYdeBwQKHP6c2DCVT5GboXdkBY5urzYz5",
  "key34": "3JYNXNpycXzCouu3M7DjGMG3wN2HmHopmMn2nJ1qwKfd6RWMJbUo1Gh8TYTdpb8EZkf1bKeXjzu3DjsWfXCXcDdd",
  "key35": "5yPT9wTTq32pgBkgWdJKaTXZoXTg3kq8dfP6QhQgqTeU6QWkso3CiTCzFKLdQy7Dq5JkSSHs3DqVvJxHhRdCRoYM",
  "key36": "3Hd9GyprDUzZKG43KfFJQASnBWoki31gskhaBcjB8mbbMUHWo37MMdWXbhisf8pfenZ5ctjB9qoxxq85WT1D8G7",
  "key37": "3f1Frbmrnp2JCq5x2QgCEepB7Mivsuq89dey75gr9omeQF3PmwSvCEHeQ2Fqxu6VPdHi3JkrtgdtbwCxdn4x2eWU",
  "key38": "2Ty9eaY3UXDtDttjfpc1PPEsJqVjDjzHJicDUTyL8zKNmQogahkoF1Uqn9p4C9L3DqGW4Sug4uofKwdp4xWioDnn",
  "key39": "2gSJKiPP3LdpJ45w2GC6djcB8QAPEH2cFQygYM5AUPeefFbpgahmRotE2modXMW9EB8PpJMuX6E92YchwS3ybCaS",
  "key40": "4KtxbcUMyLCbLqV2cQG4vQdfQAaETnoc74uLcKMsZqvJCGnQDJvtm1TbhMribY2koNJhTP7jWhEBWVPyGRP4xkQk",
  "key41": "3RTBdWS2aUrSKBYx9Hg4McAGAXgVsUYqgBULim7UThi3KWwPMp7bBq2WKXpeKP7JGbJ5YCPdKTNyrsxdqnndtmsz",
  "key42": "4xFAwCcyUfAEF9F4qNuyAEhHhdNY63DQMDeh8yqmccgjLBBkSFgb8EmUxuozC1dZvUAXrF7ZnG4Vx3Js7oNFGJWy"
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
