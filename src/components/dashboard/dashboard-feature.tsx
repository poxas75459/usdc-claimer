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
    "VvNtTfVEiDjVzyPd83C3FRBB8VFqWhyNviMPa3jeXJYb3MWMgLy7rm43RENi7LhXBipgVRCJkdKULDA1Nma4BmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMdEr3vsTWDdXcifBkuHVgJJBFKTkp7qucUfghxKGDfsGSvNqLn1c9sgYgq4jaTbfNJ45eaueY6w7LjM2TZJF4g",
  "key1": "24x7pnvfYmPkJGmN7R9S4kCNXsmvZWFo2sLkXwCfUqih9UsNweQMvWAiMpYyQuoXisr24WC9Ljf4dBACvAHoAjXE",
  "key2": "22kL75mpLf54ZwwNsQFL8n9uV96pNUXeymvqg9q8Cs8MnXSyw4SPYB3GMdMJu6tV72Uem48wveH7t9yPggiGNWkf",
  "key3": "4TiXtw2YmsbmFGoiGc2WkM1wjSLJ4EUpGSFYj4HRSqeWwBjXE5ocx8pthZyjEqUXh8RgeBx1HKRSscpwGeZ1DcLi",
  "key4": "5nfMJpxa4tpLCni3DZhX2EZptHy8dBbqXUXRy8TzQmHT5UWcMjManR66hto5iJHbZHGQSmUgAMuu9ogjdUFAaTHv",
  "key5": "5sSax1Ge7oUb1G9ckgNj95AP6u3ifxaZNQwojQBkVvXUYL3VuSjVEniSUGVYuJXP7NxBHuFqy9nHuP872a3CRbB6",
  "key6": "3Ry58YqXf4Mtztwpvruev8vsBqieGnaywWLGKaMFc1KiV2zU2AGxEoAQYUH16szXJRLDd7M5zt4WKfX38x22SoMK",
  "key7": "2amxaS3wXUhCAzMhv76RUPersFC8dCPEm1eDj3mCpRgVMRNTUKBUBLQnZe3RuhR43dSfpu7n7ZiH3VpwFpT4rbxs",
  "key8": "5qLrdREwqjna1Q6AP5brQHLkBEGETT79ebQsrU1GA2cgg4bEXNVycAAvm34L26MtvfM6TLLoK3WEJLHFGfrWgYJE",
  "key9": "25FwNqCQExbdxNRV19VGthp5HgxkxAVEj4mTbMZmojux5ndHxenTQfFY6hKp8rQ6kb2K2YKwoyAjEog46sgZTpDL",
  "key10": "4uVYQzoBdfn6zffuXM7Ptn68HnniKG2rXFGwWzqG1ar4HVr2HfU7QhXTMKjb7VuxgrKDVDnFqXwy4oktThF2z71J",
  "key11": "4MgekRp4YQSoH6fWBqzbLGNEBESDhsRUZNGxmWdFyKp6nFsMhmKzQK6EBDZaNdrrR8wtQ7S2ULQx254gQwCFitPm",
  "key12": "2YEVJ1mTsGLNMZ3AsRy59yzDG43XGBV5xXvQ4Fz3ZzygVKozZ2S7pj4Qh9GDMtVWqf7Kig6omnYSmSauNyzzEv4A",
  "key13": "3oX542ZEQHkKBttgSm2RKbP7zk5nYgEE4NxZbgHWLxm6HxE4oLMNJPTvEbPhEpbMPNBf38BTnxJBDybxS14P3hXs",
  "key14": "4kZCa1JhcijkTkTU4pLq1pVRqjvwXpooThioBRQT3C8oN2qWyJU4ttYiktaiDgcpZVuYcVKsmFpu9J2pLXR2w2mv",
  "key15": "2VJr9GBNYLZd2tbXQJiPD3ayDFTnp9n6LNUmq3CjTJaw8yqK4m1b5d33yYJU9Xkw5P73Tuz7EiDYrQM8RpLNyiqh",
  "key16": "hozjSfsvdVdVVxhEzfdJyYgAmbAr5638T9F7hhVERd7kJ8m1smLmXFrkK1gdKueudkeiZfDo9R84tSyCU5VjmXX",
  "key17": "TwsfrmXp412Kf5uyvU7HGAxW7up26vLaMUELbnK3Sz4rCVnQqqNu3AP388AdyW5WskD4ARJf27ycxdEJ8JPcGZm",
  "key18": "4k7h37hWU98N4WNhJr4wQGiqz12G35Vve2AFecdzNabs3treZF3XTQMJL2nNksnCiZgVXGNYBXVFJ7gFS36DGcwC",
  "key19": "5YsGrSiidsN71uyRG4BTXwUYJekYVqY7tJ6jiVYzGRzUdv4kNxJaRpiYcbQKK16ufC7X9nFVc8QyJkWDRwJxjHLv",
  "key20": "4NiCm861U5HNBod8A2zgCwr6b5EkEYuF3YKWWKCXgf6z7vCFyeQB7x5vV42PTDJD7st6GpqsoxB39DQeJR1SBkd6",
  "key21": "4uDR64dispSeoJdiZSWZTNZhGoYFCA7hQ5nUHQMJveUAYpgYd13GFh5DZviMqPr2Y9D4aBQCCJyYV1uLuag9Tb4s",
  "key22": "3xLGmnaGAMabercMZKBuhhMuD9TozfoC8NbW5fr69wGRvpNFA744pBXj67RzUrYngxq6ix61qbNf12MJsV5Xg8Dt",
  "key23": "LuuKq686jNvhdDALjG2LuTbdsFC8rby5rtwYV7BNWPu2CuWSD1xGoMqoX3NUtvoKwFE66kUbhyc1DXUsHPUuMGw",
  "key24": "5KVghJzoTa9YY1ygxwLst7z7QKRFNqykPu7fcU2aCwAPXwEtMCb7jXyZ5nziheMBL5L84K2Tx2hgpAZdGYqYJx7Y",
  "key25": "8RjWD7diNtzvKijE8rC8YTTQ22t4SSCL8Tp12mo43yTnYK7wSXRJmMPtobufJztGEQSzekagpuR5y24AzR7ib1p",
  "key26": "2xhxAsqzf9HQLEvUsvsnUcChXwB7mEZBHFndt4VJfDm7V8fdr7np3FVA9gRBC6kGLtCZEdFoWnH6MYVqP8ab68hV",
  "key27": "4MPcfC5SpHZeMLBwuTq8ZUtufrtp2346t66eY5S4hoyvh5adDrsTDHn4dXHXctRKaEeCDrSNYrviJRJU4a1moqxz",
  "key28": "4kuKKuRMgvnRqv9S6TisfDiuusT3QcHmRYiZKXd5RJQ9zVDCDc3QbZSgE6Soc5A6UYUs8rsYTwtCHUB7EkQAayGS",
  "key29": "44C3hxfzAXnPHUfZQHAQaLWvXaqddF2t7VBoVznXyUMvvk2nfSvXzgyyobWm1EaW2JdN3Y4zp3xNJyCbpZ9SnxJp",
  "key30": "4iysfV3LrhVvNWkEDqoucwmHgQBms46aGr8sJhRhC2EowxbAijZ1h9s3BX273h6Ctez4TxsC2JXvJbCb8MfP1bWi",
  "key31": "239ZzXQ8ikNmuCkYDSRm7o3RqLHznTxiMniJmMbw5kfsR1rdBzcvVdg2h4dNpKAMLWK5GGZ2ByPjCU4qD85VcDGB",
  "key32": "RSyA1mAbzqtdhtigfk4mziBLCoQSqNknkXSviZ8WW6Ap1DvqgUqZ1jzrUx9XYutk8kfkDKZtixFTMDzSUcJ3CMF",
  "key33": "3H9iczFwfpSTDmK6EVDyrqJ3gg9qWqmWi68MBffvizjo8P5rSByumihhaf2mQUrtqiPXYaMmAkmdndTiAT4sq2dT",
  "key34": "Mzg95Qnj3oaSwzkDerQKKQzDq4b5TCcHacjqem7Svupiy5MjjZqCjfaPDkLU3cXMPjjQAMJMgam6dkPppsDDCCB",
  "key35": "3x8bQWpSZETKAtk6BKF4AtPaR4ft8dRmDLT6EAAPLn183mebEZxM9pFMNzuwc4BRRDR8kvHNtanLGmuXpgLrsqGZ",
  "key36": "2GAiby8dHFuhqjMcATQVtvgh4T7P99cqSEiHdZ72sGK4LXypqxDasV5teG1EpSK8eioTWVtkZ3FQdUrYpN3Byh7K",
  "key37": "a2jvHhbcnBAJnoNFrBExjHZV92VmZnoc4gsvNwbw8qsmQFL7qCtZvxUWvYT6GHoBSytmud7Srj2irTinkHt7ybJ",
  "key38": "2xKP2ZaoMymbgpd3We5ChF5f1xZjt2jaJTk3RvhgvknaeRyP2y7FTCd5nqzE7fdf3Vs2wdkx4bci6xqT2vwAHC41",
  "key39": "29N5D1hDJuEKDPbHfUWcTchDP9ARtodeyZd6Jc5zPxdhYczYBYZL1HvAu8ScGZMLz31jSYQN4E4R646GWSEUh1aG",
  "key40": "37EYuBabtJMHPrAmw13zthSPSBBEvvFvuruadhsifFnyu4SDgo7vSyb7GAUhtaXs2DstG1xYs7JA9FvUNYRsqjK5",
  "key41": "2V3zZuaAzTmzKKBJeMpvXAMgJEuKjCNszrjFQGhAnRBM4vPmGUinnkNCYyNZ73VcwQEsErXSsxHTsTa63f8aov7",
  "key42": "xRZGP2sx8g9UrGSWoiL5yXVYgvPe1E545KcGe3qb6dCKN9MYtAGpLFhPDxJs5BeHUTApQh3sphnoE4PHARQ3Jrx",
  "key43": "63jwGD4Z79qNG39Jdsvzw242DoyHoPMRT64gGMeuWfhZAMccugM6CBEFPssQXVhej7QXnGE6sV3KPKybkWV9Qz1A",
  "key44": "3EEqSUjPWTpqsv7DqiRvQ6ouTWttD5nhqFa8edaQF9336iErzDVUwKdpty5YSBVzvV5shXVLye7ypV1a26T3pa2u",
  "key45": "3XmxntcYiSNwpCyAt7uyZnB5hK8n4ngERwvBtELb7aAP97Tqmr9eaYTjd2nMmsepxhzGWLvoACar42y1KAHwYq1w",
  "key46": "3QbxbUGTb1mU3avR3zbY7CCvKDsRoQy7XoTX2WgfXHRP24eo6QAfPkF4Go1xexES6W7up1qL83PoSn4PYLp2aZt3",
  "key47": "1CnoBNQNuuCiw2fcJCPHJSS4maY7k6dGcT5VfS6iC3JRks4YkuNwMxgoiNef594MKVgxJKMazh9omBBBq3ZB2RU",
  "key48": "5wbaHMHoqW2cuzYxDf2ZAkuEXbBRoUmvQFPcfM24M4XBLFw7BvwTxw6i9zpQZPkvhiTWBLEaE9t9uN3K8GzvxGKa"
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
