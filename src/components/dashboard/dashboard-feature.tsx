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
    "3E4TaRo51Mqo2EL7eCjj9uzFMqvgYwfKJzLi377UMed64mqaNz3FYZxVR7U6wYdoQuKrXVBfHjEx4UdvUmytcPBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qnnEoVA18uBXTRKCcpnpe5Yo3pEdfTR7PbUN7PmmAwoPQmAgV1o7qopejEKrVSyQNz1eGR3QBEB9UDZzPnMAVHC",
  "key1": "4aDdkFbMgzjCgYk9BgKXqAR7oeVWnJGWSfhZ5BNY3nKyPL9q3gxMxxfnyyjXcYAJBkZRQ9Sgy5CpxJbV2aNgfggH",
  "key2": "4Q9U9RJ1d3Jm9oBd3iKREVA2HMcB4sQNgeU7mtG6HrvtwSr5PNgzUuDo4ouF1hE6hPC95dxokFG7T9EiaT7w79Pi",
  "key3": "3gcU6Hz3RSEPi4mijWhA3QSegAuEhuCzXm7bmHTRhVWkxnTeaKg5stK8Lvk8kz7yPjaL1f4SGpZEUDreCTJZm65F",
  "key4": "231c5EP2phm44YbkpiehBDccnAZV8YyPDD29Ho3Jj59HnrhH8885gSSwNiKEPtA5nV1RQQ3pCBvh47b4Mm5XzgDs",
  "key5": "62TH9iinnvPYGzWKicPZUmZNdPshT37scvjpCRKEf2nEGxxMG9Qu7NGmNPqBqZK7N7FAhp7tGXdoP3aHRz15rEYY",
  "key6": "JggemiNegcD5Gyko6WymdhXLwPJhQ2KcxuFmj9KG6yMHNnwZihySEc27k8tCymdH3S4jQXTvjuCrut6FvJzuMjn",
  "key7": "2Yyzg8KzfZTGTHL7LRsrYYVdYZJ4kBnxy7ZJawvpsS7Jv1ExKXrDXTjQBvKZBGchhEtrRhHnL2TtodxLB7B8Xusr",
  "key8": "4YwFpq6yS8jkjXMJmVftgg6eKd12CLQnVjJzKw3NQA9SuNHfYfzhBuoUguLUvzJxdWSqnYJPAdHeUehgnRJa2cMV",
  "key9": "4w7n65onm6eBR3PohrppjUSG4sEMZGCbFhXYsoLYNUtaXf5VApgo8v3Y8aWSm5vQoobZxdyXwnBdPbBFqjjT3EoX",
  "key10": "2ahZ9P9Qva1TU8yZjiVZ4ZURSpb6D3f8QK1FMTtQyoMx2PYdr9P8LcfuPDf83zVKTqu6DbwvT189J6Uz37VRjKi",
  "key11": "4voMhWQCBKrGwvkLTMKGn7fcvpmGc6hhRTnNjLUzaN8o5iMKmVYzj1g7361yuVCd32uMpVRPwKMJpfEKZTa2x2dU",
  "key12": "2eyc7fBD48wGacPZ5qwFcpL9ov7FqXHwMQVB4wWxc53k9oRXHAhUpbG3HMJMH4Ph3iRK4znU3inA3CfxRKA1TGtC",
  "key13": "4qqQgwj9pgACLg7fAS6MoWjpymZKWWhZYTZwJpGp2WgiDKkWy1DTgsAv8UzhvMswWE2hWY1qB3ZPQEHQSqNCGTNv",
  "key14": "3mLXDLbxRV1t2LdwMycgpg9qgksPGmvH7AyKwg4gqEDz9MHu5VcycU9uHpgoXszRtHr5hyj32VUqEYbHNW9o8h59",
  "key15": "4B3nbdEX3WyA3q4itr1vHLpgkTiNLi1heWqC1ux8QbFTx6ust6HhrRmsX6nDkp7DqmY7Y5exEznW6ySHwUw8k3k2",
  "key16": "x5PDmyP9uSmb64kZjTEVisbHTwqiQrmrZ9YUf6ezeR49Sy24NjzmQjyoeA8UNhyddJ5aJosUmYViLsUzpHCrHgV",
  "key17": "kaEDfWh9BGoX1sdtk9cr9MhnhN7A5832SCZrYtYGpTwVLRcdk5XDqMZxzRHTHz11686PcYC1EazK3CKMzVo3qCX",
  "key18": "3DsVCPzJxQv6MNFNUcpCjGLEmJy2P4PtPoq9fZ2833ninWRA8B9nJndimCdBP5k5MwjqXn7GyjdEyfZ88NrWH3C4",
  "key19": "T8EbYDEAJzPWt1e1MbPCcu1S2S1Ar9CvDYmtQvTDQVEgjZ8GEhsUb3PKMuSbudWcNJyqp6N3RZYNmrV6gt2NTec",
  "key20": "4adL1ABbchodftQTUghexv9HAoA8TCJRVm4KX58CnMAWJygWyj1Tcpt5sEKV6pZqZqrm6yqkXkY5qfMcB7wBuRgJ",
  "key21": "4SSvLgv672pLCDCoF8yJ1cR4yKcbR9UrnjpDkTvoPn1BaZ9rrvwkSR9M6wcguZT3rgdJdJD8hDZ8JYZXAGnBH4Vf",
  "key22": "5jyZ7tsD1LSd6DMnJCnmFYRdca11vS373H2PendirkWrQEsq4nsqQkhwxGDAnzPkgWPRNJFWtaDq72xxB3HpcvCW",
  "key23": "66pGH9fo4HGiHne6PLGMMH8bkqUhAVkByqueutv1z7nPzsVhZmAmEFHLeqP7rbw88k6aDAMNjWjuoE3Zt45XXpGx",
  "key24": "4ExRPdkZBnU9VKXAvGd6wxm9yW6bJb7LDfNZ4woEh3zuH66iKhoCieWvwiCtrvCYeEfWuBD1eGjBabCuZyUGPkb4",
  "key25": "2yCJtVVAgWneNDB2Dn39Dt9r8rXRRsb9aXf8yL8igY1kRuEiVAuf8MYzQFVfGn4Q1o1VC7husw4jhmdyxi9y6ebA",
  "key26": "oLmpfTVf43qHjDYuVShJ1QArsw2acxRZrHd43bJYyyrySioy6UDZUFUvk4rucGHraCe4C6uPRAPKkpr6r9PPDwK",
  "key27": "4BDYFWwYL6LozhtsdSZgm5q9E9yw5K4JYwK1Nh4gFzy5GXyiY8LUNn2W1qVSVPwV4scBcyBviXbcyBc3BSbJi1xE",
  "key28": "BNpdN3pEzBp8aKfWButvBVMDiS8ct68TabM9srSbvExzqs3LtNB9TXxHfFqbsVhQmdXmTa7pjGKc4vbmWFAKaPV",
  "key29": "5RdczdQTuxxdmmNWBJJ9EsnGAvhcsxv3FXwM8M3g86rmFdLWpvJz5twFrMMAswF6tga3XaokEVnSLdXMsR4De5Lr",
  "key30": "5ayuGpYBCHH1tUG9BSP97xDQNGJX2Bz1F1AM12km5iBrzHGj4wd7xtU7ABmR7PT2mLDZp18xJaUdPx3xD4zfdrTW",
  "key31": "3acsETMiR1ZUGH3VhEC4qTXx3JvHJe7EqhLMAmCxxzb5jTzVr3kFWrCr7DViEt9i5NUuubjwm4DuirhqHFSjYHmZ",
  "key32": "5yyUh1YnmAYF4VMUYYHvq5VrH8WwUAC8tBvK4FGifQDgUg2iJJztiGcnkMWVg3LiKuLnh3nvht29vwgxytXXtVkg",
  "key33": "49BKEJPszWwt6hN4LcVLnNKpznRk6845YtY532z5QP3yQLjLUQPt6Ccxve7UczXaizesgryJjsVNtN2yNaC3Nbvs"
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
