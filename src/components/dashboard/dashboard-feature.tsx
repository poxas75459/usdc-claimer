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
    "4LUfCFBQYkVaQjE44gUvJVR7PtpxHhGUwLrsW3T6um9f5PzGRyc6uUB3cHB6NpVwn5EZKgenVWANUQTa7hJMUg4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjoDdbwhUpYPYQJ8syZMJ4qxgzoUsMmuoGHrqKwB4MkctXcuuaCtfjbSNxCZ2XYieqBSxCDQ8c4ta7XsAET5T1w",
  "key1": "KtpkMWH73ozyb2ckLSzJoBHC4r3nKFCzKrVCQYvA67PdqfEHm3opymRzD8E8kF7ayFPqEVYp8wNqg7xSv8B8XJZ",
  "key2": "2A3TPP6M5jARWaYwJcoqKRKTLRqmAcY7AbyPtKokKLEc7U7yguPWTUuru28fdTZerpZiQqesbUAuNsPGapHr13FZ",
  "key3": "3cm9G91PFtVWfka1fWNr5bGp431P2W9XTq2NHad9kRHVfgu4q4pKYqaGdyh4HVg7dWvYZZywGxBb3M1mBquQwfFN",
  "key4": "zgi5yCt7hc6HWB2FdFuAam2R4bT7RJwfGkR8cywKVYpGeAXA5EzjRs5RR14BCsR4Uf39MeEitqmxbzzeLqJibu3",
  "key5": "3XQFNBqphxwp2737hLJxMbVdPDRiYqVyPZQjjVDwuN4LpJUAPZ6thwJTh3fmPQ5rRjpLAzAZCVKvtxi1zagHgxdF",
  "key6": "3qTmptjVWqhfejwGa7T2u3YJQNqPzroWAycFcWwVPz5vpiqfYbAbEocSXCPMfSssJUtm2GknvETbosa1JvdhjXTz",
  "key7": "BDC6Z5ScQNZufkv9Ab9q9GDxAXkMthPUm5kv84DhGnfNQm7X5a6qjrqJ2Kscxv1rowy6675V9LeDFgeWaJVeYDS",
  "key8": "64nNtLCZtdZFoqatXSZU2zeqD5BookfFTuPPd4g2bCfCTrRd8ZDR6zNfNsL695Lmuy34QLzTVaUmxiVoUEQAhdhi",
  "key9": "3YJoKCzp2EHBeoGjhcjH3fbFqba59ZTvbsidZtiA7RzPwz8TfUtPbw8Gu5DfCkgKfeE4CDreMKJYW1QjNcgRSUXv",
  "key10": "5xX1jZJzEsYvLVRdHb7KBQiEKpmZeLEUsA9d83EfzAGQvSbRTtkQsMbMPW1YRq3BZnhpVXuywEkkAsdsNM8qUfBp",
  "key11": "T9NSkauzDwTchk5VhXz8k9JWP41FVRS5dHxkzWct8UA9WxqA1nkGJMtfMev7vag87bipCxAomeqr8StG38GieKo",
  "key12": "u313ybQi5SnsQpqU5AK8jRT9sh4RyahTtHz6rKfr2KSWFMMtwt5WNCGeCUB9yz8VW6AQqZ2J7gq46w8ATpybiyf",
  "key13": "4n4vEeMXePw8s21i2pwv4aJmxoXKL3g5o41rmf8AsPN6zBiqFKvjLTMrdFP1Lan54Fe18pEuhzUCYrbPzkoRrJSL",
  "key14": "3yLaYY4u8PG7HBuVXhuCTVP7zxpsw7Fgm9XWVQQNs4Z52wK1TV9YUxzqrx3GAT396N1Y5bvP2NEU7av7GRQpH4jw",
  "key15": "2HF5gDLf3Ck3YaR3qg3j8EBTdBwBshm7bj6QXq1kyQiL1AiqFdbkiboXdVTQxfFxVWcYqYYnR3ZcrT5yVTTta3ak",
  "key16": "5qAQErWSGZPGB8UewnDwR8SAPbahXQYs6KFyBqiyYS6d4ERWES7ckxxrvXLRj767VSSxa7jeeJ7QamhKRP4er4tv",
  "key17": "3guQ5MaUdEmyMkSAegGk93FYzRqocEJhxbyzx44ATpdJ2UzqF9zUvZWmvJUmCFVayJNT9PDw1cc4VdLJvWdjvfii",
  "key18": "2ueHEv7iMX2eQWYtB1rTKh8g8GWm2oWZ74ywoomd6Ycrx5XFJQL3PQcNuoemNDMMo6inmPhu4abVZTMKS464Vri1",
  "key19": "54tMMZsPT9Fcc6p2Z1TCxbHj7mHh5TNpmnPbwgxaPN7RVmeGkJFhD6mXmz2PZtcegyaqxdGAaKXrq3hartzF74z6",
  "key20": "4w6PVC6woYHry7tRNmmkkvQL86pEMu5tuRaFhHdNUxFVWJGjfyxGU9LRmfUzcKG9ekcVeKHD9uudiWgjCNynxyyj",
  "key21": "3e3dLdBG6MAXPYmgrUbcCSsGxdPa8xSBr9BWAJ3PvsNRDRe27KRwxr1z4QXAzs6ixYHUJsoS8CLEb8sjNa5tNU8Q",
  "key22": "5LEkMZ1TgAvENiGWJeMw6d1syr6AMHDds6MRgBJSKM8yXVKxdVbbEJ6oGvgCXeyjMW6dUit6qcj4RNjF4iDnZT6Q",
  "key23": "w755y2dhS4XiRAfv79ZxhGBK37My5kJYPovytLwZinowbQmyx9DEf7qv8ZEw1CQvgsxEoRPSyz3a3pLuGuWC3sf",
  "key24": "3SmNDgyYEH41U2WSGfuw3FCpYiRF1NGaU6e5Jw2GL95BSjQ9YvawAqBZuY1jasaE3RH2tMYDm897yfnTEDciiRBq",
  "key25": "33HqdZ2enaoveVgh4s3NKXoZYLU99ZMQ6EMicZTMpQH9wFWL47hpkiaHNFndczNNiVvcN9fJLAQyDJaMtFgpuiwp",
  "key26": "Ay75RmhiY1BmTWWsp79zUaWEFjqRtZdUkQ2x899Ngw5ua7zo6Y5pETLPbrMYvEvToks6i4zisKaioePdbtZM6HW",
  "key27": "3ds6wey8VcgkwbnG7sNbK5k5RuFfX2AZwq5sfJqaA55sTXYFjBPtCLMgQojBWdEZEXngbvFVyyCXCZxMoEJbC2Tz",
  "key28": "4JayFtrhn4B9hy4pmwL32BdcSreTMBSYe2Z5ddvv77UQsPMDEXLSqCZS7V72RM1RncUx9Za3SDNnCaLceQ2XTwA",
  "key29": "4CV6s91oFW6NiQe1qbmrwoyqsHasBDUdiHstXYjiHNvYRYLp5fwcgMdqmCxnwXmudjyz63MbwX9h3VNZHZP7z45U",
  "key30": "5PHfMv1G7GFZULAfBa675eFMHbUjxmUc9o6EtQXULw84BScomTCPd3yf9iT5X6TsVutQ8BzA5q4ZJHX2XikcqzMW",
  "key31": "5fXAnNBAwL4NGR3bbyhNqYVZym7LqZ1QuPEp5wmAUgcCwdcDLve8fnXSKsTu1Si2WHz9ZhXvieqbBYin3YFjFScR"
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
