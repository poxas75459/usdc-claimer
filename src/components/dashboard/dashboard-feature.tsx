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
    "3FrmgtReNUmDPKzi9jcYyz8cGHZbRRuZwT8WFgSYqDZCEdLKYoFgtTxCmZU5PqAgVsd9f7aTXnUrgHpRudHz1yEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UfdT5NE6EtU3MQTDHbxujcdikN6A7iYovFjyc6BebPtYJF8NboVxhroS4VegvQ4cNRoP292xpfuMCfZ4dhXLcwM",
  "key1": "3eUjmvJFWiwfEGFDJNi1Ja97FocSWZHcpzEDNnTNAkWqbjJZyofmguRPsJumzRmYVwGWum2YZTAun4yjCiqTdG7e",
  "key2": "3iiEGRhe69zqv5eZi7fYFgEYabknDtaSexAjqcMwYN4FNJFCbFdDNaDobNZ9umJRMyrQeMdGFDH6uMYyLZhsJ3Z9",
  "key3": "4wU8wmwn1E7iMjXKK9wzXTbv2rcYs5tuSwg8HyNUZtXhgCP7SQMGbWEudQmDh7wYyZTog4suBHpptAj2xgj3Z6nh",
  "key4": "4gZshUYhSf53kQ8hdKzCbaGLpkLAKvDmxYPoeZ1ejEb7NBHAyFo7hoYwvPsVanfbcs2vuHeGeAyLGrvykGsZc222",
  "key5": "5dxm1yfheWFkDudyzJrD67yzwJjVnpN28GZ2uxC6pWzf5GBBTsAWBpVmJjhX9H5bvpQWzekLDzTuRPK9fo8ndFgb",
  "key6": "bEDCoDR4eRNCzzmFZ8pdNdiuFhnrdE43yQCA1F6svduHHaJLjWqe2PKdiajxFyX8Z1VveUau4dkyU1MCN8QrvrC",
  "key7": "5EW1qq2ERypM4UfDWBnZuhdt9NpHomWHvGkWGcnKwkQgGHFkYoyQkc2Tg22KJ9CpoHj6hubphSfFBQfXRdrrLuyJ",
  "key8": "2gw2PAZaYyjaUNUSqkKJFLVfMytswdMXjDmWTayyzvWMXUiXiiM6e9UaEQYvZ5Z1oGNxPUvGDecoZC2kX1pERVnW",
  "key9": "3tBdiWw9LHT4UqqdnnceD61aR9ghXN4KFUMxEfqa3oj8cYyPkYG8yTD8krUWeKMxqgZH5yTeFycJ97JQzAxPatFM",
  "key10": "3EXdzxi6QoXvuvEAKw6hLxnTJs3znMBvHG3gZaRevMQ3x2E2YrSMaym8i3ACj9hF1u3iExh2rbYZsSRX5NijzZ5y",
  "key11": "5Gk1QFUMNKbyc7uzby3JG7YtbvStRhPkGJpjKRgYnTsAS3moJYWCwoJP9iu6HvFaq2VucZpv9rTZv32Xfb2xWSRs",
  "key12": "JcoQT67XTKZbPMB8shhGTXvb22ue2XdMiWutXiiQZXZGKxVHFGXeKiyHeD5XskBB6qxiEGsFCFSyBQVcX7zMF43",
  "key13": "2XFNmkfX27kcdBCdMbj5KNKP2Vh3MMeXxv1ovuDz9wW37Vi5WDVsbXjwYxxXtiN5UMq7hJrhbZHbAFmqUXNB2AXs",
  "key14": "3i3fDiVVvFns8U3i3F8N9ktv8X2bzaTf8EyrqhyAdK1UDCQHEyX9TUZPHnv9mFKNzmGJrVqA7sCmrMd4MxXNBz6v",
  "key15": "2XbriukzWfhVTgKGweDjknt4BRSM5xUxwG2hrBQfjtpy6DoVtwf2TvJshHCa7TUU9Q5pJ6ptbYhmJeyV17Vo5a5T",
  "key16": "64YTXgVYB6JcSVacxmRSLHnndQQjzB2akgFGGZsisqEi2FFR29taC5qgb3uhSFr5D16sDdfsuwiywgzZZGGnfDNu",
  "key17": "3qCY7cvQNmQXms8oRHZLwD7JCBjYjHsukZVa5zhC6NxNqu4E62FP6A39FgM6uAG7WEW4Z6sksYDx3S89Nm3iV29e",
  "key18": "2u6Ju4jxnjC6qkQdbbaG3mUULVMZgNSBYgBkEAWAVSa65rzogr3w8uY5c23dXYoDEEbktJsKdeFG1PGBy8rRQHnQ",
  "key19": "5sBGxjjv8VKJ7FkP7RYevTyCmH7QBkNLNMNsg9wZqNAgg69548mPWkLg1agCJXaouymdNyZVZVcxWpy4M9dfzBJP",
  "key20": "5ASni3DhJABQEBNm4u6YYHhT2VJkCb3GZaDS9wtwKgusRMP4rHdjgEvAK7hSs7cvtq8EgnCvMjtCo4tJ7Fa8bwDV",
  "key21": "22DinXc6t2WRK8qaUJpmexxynkAUBXzkijpqExscvJsz2beK4GmJ7LT43Dy7jDQNJwrzbK6mwE2ZxjZnxF9SDP9G",
  "key22": "45oqzKC8bA9qqnKDhYTJaLZMdQpwu4tyQstKggjEi2CCeP5BRq7DawFn4VJCc4ymgsoFHqbFC36zV7hidudkEpCr",
  "key23": "zjqTc9od4JeXn7cUTHnun8YjBt1Y1ZSZtroAZmqU3N1Nk5CKXG9zvtiVvDJoCZY1Qi85VPsQFK6euwfAicZQGoA",
  "key24": "2AahRDKH7Gk3HF5fsLq15RiTgkWTSTmvHbzFxzVJfmLgJy5J6CE7XPXaQLm9m7s24Ni7MwiuUWTVso5UkN3HWqup",
  "key25": "5GJ64y2EGjixboKSoVo6bBjUfnYfDP7ufhGwrgd6dJe5hgQfqqi5uzn47AKDLttAduwAHrwgarKmxCFAs5rBqkF5",
  "key26": "LEqMxt784NhYA8uLTHXr9RkG9esAnExGNsx8Up29d5akT9iECDzMmq47dgy3dsR6RAj9s2Rf1KMYhWb2HefWVVf",
  "key27": "3THDF1FtJziLwft5pWhXe6V149HTLUNvrehxCj3zpy2RThWUN4SPocuz74uD5BE9cxeCutbzQFQusMqArBUFZHPL"
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
