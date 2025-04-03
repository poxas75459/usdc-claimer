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
    "4eonT9nLtqDb62Hnt9fjyT4PC761YRbRNpE7NjEM9fdWYSaPLjdXzVopVDNtWxfZKXdG6j3sRcAMbXo3u1oMMuHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bKYfBk2ZYahrJspBMYxLvFGjmZJUfJFXKqs1xSKrqsSuxWg2FAZdLkc4Rb5ivNdtX2LXDX8dMJwoKkfDQRASS9e",
  "key1": "4Vtdq38phoqNjfVyehWFWiYtxNA9wXVSsspou2bM6TNq5S434MvLfE7HcGEHUNRLLKW2g9vXx49oZ9cDiohstDYw",
  "key2": "3MmJAyXEacP2JoahhQNvvVSCmUkaBnuSEJMPgk2we4APA14rnP7B3vF62sr4Kt8b763kiS6LYuTF9xc5onzV4g7z",
  "key3": "42UFbXb2Msvq5WWZzKrWiKEgwfDmBHovB3TedHNKyaLMojzZX7CATe9LMqoKdqyiM1XpfVNt3wkXHTCvRbWRZx18",
  "key4": "Cpwh1gK3LPEoRKyw3azdDpjXg8phZpmB3HWpQabqsWatFWKNgd9ZdSWnJA4odM1ja7Cbb6BNBV9o5PUTL4wGfrE",
  "key5": "3kMKTu7EqgNgAqrx3CcWdjdeaCo6XZz88uDTTZkU2pt64BYw66iCXsMu8DuCRkmNx9Wcg8zRsPxNPzYhUURY2Y7Q",
  "key6": "5h7EBUwjAW5w3hgpeh4mKjCDkRpSYtydUUyNK3YNZjqkmLEXY3DTn6dLjTg9eEujmrj8sciPnENB7qABbW8PnSkn",
  "key7": "3vXY8Qmpds8bNZLZ1iiwYJLhKc82CxnJm6cPa6WTGcoCXCLKjhAH6LDLWuSdKyAdA5NkWifayAV56bMQg5nGJKsT",
  "key8": "4qwYC5Pd5TVNcTHfC7nKvkYgcbfZKh7AnqSPXfngs6sY5ypRf92iMM8bw4fQqHpjPWdvaByiXdeUF8iZDiY4NAjp",
  "key9": "5X2GLkyaWaRFJqeuoV5Eg9d4hcZKaDFEjeSaciyAqM8LQQHWbtbjQeYBKb1Dptcoe645m64syHcPDm4tQKFeRBir",
  "key10": "Aj596WCRPEC3igN9GSNpXm4amW2cUMyVC6q9NBgzuRGK6voyEWgZta9H56GyD5U2mFCYKzTMSUYCbnsvLxp4NTv",
  "key11": "HwGoM4hmB96hz4ED44ZFSkPxhw8fnXdqGEoiKXnRW4uYLwQi6f6eATEgvvMuw4NjW8fT6aWuECqjfbpgAXKAoyB",
  "key12": "9bb8iNACus3PBftJRqgqGPbVTd5GL4VbHjFaigVdPA81nTifWiFk2qGbMsC3p98BgjjZ2CYKAfhppDAd3ynVF3D",
  "key13": "3NWYQLKwYan5hvXhVgtvnFwRCMENAaTGMAs4TjpZLdWeqvxwMMtLqSnRUMFTqr1wKzkT1uS2NR2kb8WN89mCF3Vy",
  "key14": "rssND4g3yxCuVCaVRT923Nt6hk53nC6bQ47SXBnww5f5LRDCTPcp727FFu5A8nicbjYF7jLs5SurFo2hx5VqrG8",
  "key15": "3uNyMGr5wQHc1WyuNELKDex69a7K9nbRm3LYYwiUybXq7vtAySFBQ5owSdwSeKMSUYB5J55Eh7DceokUpsy73N5u",
  "key16": "zcLhHAgwekYyS3QRJ7Fsq86nEKdPTk9z23U5E8UyncFyiHRwGPGopkeaHpeG4S92YZ6G7WkX5Jac8CA37Xv8VHj",
  "key17": "2A9SemGWqgKmuXhVFLS1w8CyxpBhyomg84rVN3uWho6K2yzMeKJpL4GSft6fYCMAfNsJXgbaSKCo4xLbeCDMCQDn",
  "key18": "4WD4vgAmHKVVmUBkDaExHMBv2nXrRCewQXkjcwgSfhoXsLzdtGWQqwUcQckYZD7Zqt6eMzcso294Z9Cx2bW1XbZ1",
  "key19": "4GQvYLTmi2mLuvz6FV3b4Y8X2WZcFJbe7MQEfhwksZaMWzcQM1rte1RkMDtuGfMp6bwVa6skdSRQwGqE4TiRGt7f",
  "key20": "Vsjw7o7EuhUhbjLtstWbBpZdcQdVB2FcCUbqD7WRvkzHn23cZc8vZZJZeX64E7k74prkNdFRNN6VEB4E6tn81Be",
  "key21": "5rUoDS27aCthnNiwLiob4iabhfFQPiyvUprMWXLvugXazSpHZwi2QpzpZW2myWsUs5geJ755anroTGtRqcgnQehc",
  "key22": "4XZVnhgH9tuuPrWQDrG317abzh8VfYtYUjCTcMmNGwtpg7Mt3B8Xba2EdNUZUgGsoBSv1yvE5V9xyyoZr82BuXCg",
  "key23": "55Uf5cpcdvJydpm886yqgqaK4nrJASkx888RJppFmEnTMJB1vs7gqEpQvExWbY5LVhbW2h1z2LL2zPZuXmHH1YPA",
  "key24": "3LwTb7nNarfLD4iji5uYcQbv7seDYai7bjFHQRqqUMiGS1uvv8iAs3gU7ZgsiPu5FZPUSpn62qdh81asqALgHK33",
  "key25": "CXzfgqx5ocvAk5qSbtNsTTYekg17kzBETjpn5pBTfSokZZH1tiJz8xRQwwKixpaX3bqG7Ec2mtwqJHJd7rqdCqB",
  "key26": "2KJohRHWKHzFZNwhcrUPa1xjT9KqvY1GigLTwWeRdFVxzBy3mrSdtLJRzEQHTTjzfaZ2TCEpTr29qVcnBbGXPw2d",
  "key27": "5mZ6sb8QpXouvPimLDJoyaGqGsAwqdTiXoGSWJfBBr3w6MPGsNd3UwWiJBFQFuGBrMs7gieCgDo39FZCgMKCd8Yo",
  "key28": "4FFfnxem4rGvVL8P9ipvqGXTsSn86iTxmuCgcQVg72ALiy76hQ4AFufvqoo9weuzPr8nm4HR6FrbjRwMGqZGso2Z",
  "key29": "269wdY48yzg42B6DJ3PWTgaiZLR7XZ1omJsma4PsG2Kiovb8Yvie6FfP8CKG5QYT3ysLPSMKzfeEw8C7EYmqonxZ",
  "key30": "3MCZrAzxKq2DyCHBNHBqCkTNffT7L6vc2SJTvNGyny1ghAJUb8b5gxfWvcYgKJiGaGqJqfEP5ZeePqfqyqnfzSGj",
  "key31": "3mxJiif8GetGSdkAV9jktaNY716EmeoeaXrCGVUKvoDmem9kTomaJbdLcc3oYb9s52bHYRR54m4jNRVFZgjZqmCx",
  "key32": "33ME6kewA43cjGvzhBVPGuh7rYZHhczUDMDvJU9sEtXKcHx8gBxNWBCVTEtHzt7MwKmP1Acv4uSQPg91v3UvohXo"
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
