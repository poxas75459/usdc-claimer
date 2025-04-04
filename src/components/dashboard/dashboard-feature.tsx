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
    "5ibveKcGjQe1cPyoyX1mAzZH7WuJWmVSH21gUeCnXA3NV2oqe2adbEU3usNuKzzjAfXJFHq3KSrbAg1KdPaAuuWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKaWz39kvsYdvjSjYPxpcLwNs5rpX8T9jM4fQ8dSbY56uvqvtmftiokBdvbAtua5T2UU37P8UiGGvLzdBDNSFdm",
  "key1": "3mJDb3esQUj2iNSt4kdGMtGr2dndnkvLgxYbFbnUExtik9WTbwJjCb9rZdVFmYx2gWtEWngkJEKwxnA2a2LbbqKX",
  "key2": "24ZFa8R1xajLZE5rrqjX8UnncTdJgyatXHvXYL9diAwj6uTTUaBZfLvv3M5vidALJ2wphVzAHrGW2kZwD2Xg15rv",
  "key3": "RX5hggQySugkFWhx2w4F21NK7xstknYVm7mJxRqRjMwzrngBbv7erQWgsCQMJsT4NaESYsRnjpmqw87mXu3NNZj",
  "key4": "4YRr8PvVV93fADiMH12M6C7YDbssKBF3tarQoFPA55YecgjBoeBzHB2Gg2GYxmrvDRENkJGx2PpGfmiqUsQdDZc9",
  "key5": "2SYQz1i53E1hUpPgCVj3skkQTci2znFeJWbvU3vATqyE9GN3UUCau5zzKrf6F6AzwX6eBG9832BE56DrzBiBD5oz",
  "key6": "65MZoaGrPNq5Lhn4o3pAgzsE43pSnJRjxRzzPWben1inBErdWszTZioMdFB7NDTyVMjUEmXqKHZAPqP3GAXKnnqV",
  "key7": "yqoHY8HmH7ozfqUwX9zCbia4sKEbMRWVz7JG8g5P8YX5LzP2EvUwa9GRydbEUofLH4v2GJykNYHbpzfFEHcF7dQ",
  "key8": "3ZKhKZh1B1otrUVedvCZ4YVpRPo4JkVmQJaiT8uyRkaGPtZk4kaNsjZvGp37ZrcHuxGmFJTe8iykUyH1Zv3t7Xa8",
  "key9": "5oodqvjt7T8cMo9XaiBZ8P9KNuZiosU59YnVijWxiiFqvyKz92qJUt8a4ertUnJDSo2YrCNAUDsX6v9TCYQuw2P7",
  "key10": "3e9uxnYdCciZJztJWyooZuqgFYAqM5bgQ5prupebvBGSBbfKtoJHkh2Ho5f4EvSSBoYSHngeN7kr8muipd8ohzRS",
  "key11": "5L5QtA166efdjkrYT5pxC1WByiL8urXyfympVXYoXxEGmBs3sZw8f4CaMEtSYTgyJyyvEEjYPXoreT7zyuWra4jV",
  "key12": "3rc7tUufDMRXnTY3xtzsPCgmpXwqh2rHkAZ9jiEgTCA2Yd89WFaV9VxGjK915bxKmWxm6foJTNiDB27ykbhfRAjV",
  "key13": "GNCprbVTGYW5EbURqdyipkstY2GYw1syuESVTY7YANQsyo3W5nmDhNTgLsg2WuMEB6reomXVoA4Vqzyr319ukDp",
  "key14": "4foWJT1brUXGnHLo6LVcFPriTvoycspFgDJreqfguro4GtbD6SsuGaeHSmUpjFK4jb92jQ6r9CgkrDhNgtfaujg2",
  "key15": "5fPAvYdCf94XveqjuydZaSntUYwkTSFyfUabBpDWUwKDJJBeXocGCvhs4BjJpWE51uXrPbdLpREZRzZh71jSDkgF",
  "key16": "uhwynqjdUwWFafLjuaaZZWDC52uuDcbs1MvD5o32o6XBKUKTr7sCquE7woNkFaHR2a2qCAXngDP9gPzbDymcGKp",
  "key17": "ANHAZkVSA7jb5Jkm2wLD8Z2xDENrfszikVgTNjZ2BFmUxQLJM7YWvsb3y1akkJQWzJxtjjfjozkTqjP8fi9FTJY",
  "key18": "2GxbxxJuLpSgcRKJQvnQS1ry4pvicgvzmgzNSwHpPAQwv5jrvf4WtTkyJ278xtjKFXeoMnbsSZuDYYPfjtDzGZf3",
  "key19": "4haMwuaGq84Zvbx7YqjsDUAZc5UFypCXVW7XWncUy7LghnYNwM1brwr9GX8XtJvpy1hey2biD3NrtLtryJLMQpyg",
  "key20": "2H6BrKffenMJBo2MV2fKE89gYAUmunkETKpWkYSrGsseZ7RFhuXqFkSo1XPkWb15etsoFqtPqqcSTfvGNmZ7hCu9",
  "key21": "4s1BB251exXJmpDiDY8ofDdkxbHQLbhoshGoytsKqygJSejRyJdTh9iWzTGsCgfvbUkG73vsXpjXM5VbXfz9yVjt",
  "key22": "LaEp3kURKtiuvcX4xfXLj3eFSsEjPhYdhxjjqMwPJ3uuykbYLog5qfVAtJNZq1GVMx3eM5DFQq3XS1vabUnBpTq",
  "key23": "27VXbV2cw956SZMQYNN79Pd88Cdxsc14zjKHvbzWAB7Luyy5pmxHweohpcj25z1JcT1b3KLZXXBAbT7Qyit6dzCW",
  "key24": "2BUpmx8krc1dChybn6A71YCom8b4u7Exp8tNecJS3d6ojQ7BatRwqbheVehCxMa7Yd1GpT9d9eMMAQVEtn4jNh8S",
  "key25": "3VsSkVnBZJkQiVHnixvwWmqRG7g6qXowSrmvUJvk59Sjx4JFpWA15KmC84W27NJuXo1VYPF5AgD88xy1sjdjjgQs",
  "key26": "2i3KUGXvxXc24uZTfDsSeFHsxjzRnvpVcJWnhc4KKeefYs9SKmX3shwVgJRUPijDt32Tv5uLjTe8BKFbHucCT5i2",
  "key27": "2ns6NKSL775bw5CjNt2LPvNMoHweondcvMU5UtQUB5e41enbCWhDSVJg8FZdyy3X2poBXpoRqY631N49xfE6F4Lr",
  "key28": "5h7eu4cRjQp8hP1e6k1qThDVBdAEJuHAHK4zc8iHa5wjvU45bPiF5pUPz8bZ7yLsob9DsrgFm2fawBfJX6GadnnM",
  "key29": "67gXV16cvHSZWMkbZt2GNJgQ6aNtNExoFZGhb19EtSGfs8QRwof7QQUKWJdKtCwF1A9HakVU8M8CCSKHQEJ9wWbh"
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
