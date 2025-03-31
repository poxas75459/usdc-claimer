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
    "316jrzNRhCrbmq9mdf9oFifbhS3V6oGxh9ffhx54zE661bRXr6Q8gujJi2qpGKDDzWHw7LC7MRBFTQTJ3fouxos9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBwmX7fjuEGuW5EDpUJZitpAAExwRjoiWJuina4pQkERWLCfDhES29VfTatwjdyXANjVwH5Sa77cNeaHxpwL8it",
  "key1": "5F9rGBjetwWgqounDLPUtAVJr4Jpmucmvx5uucWp2p8pH6qvACs8hoFHDKsygVUhPBYfg5LBj7EAJQxpwMmUmTdj",
  "key2": "4dUkgwEXkHrJnqkyPrF6rDhTqVq1ZNhi3R6WUXUkoqPHseyxX7ynsttjTVQHrMDaDnU6FhTtU1Qu3S46y2oSC9iB",
  "key3": "2LFYxZYVoYqbXxc2fxEcMTZ4snGUdK8sD4PHMzPHnzd2BPzbSDVQd1s6J13eJJxkJJNM1AWjFVArct3evLVLqPKk",
  "key4": "3nUD75XFd7WGgcQnHxR3e92xHnFg3Avs2H4RCzDvkC9oHRhigQc45bfVyBHjiEpxLc5ibtbpECC3ijjdkpeTLzkk",
  "key5": "3kRCWExLgbzJ3EqTrqRG9YiMPVDMrqeSJMM7p2Ltp2fiF3dt8wjp1XJmH6FUYENEg4PiNEZpfMYtP6nhAQBeE9UW",
  "key6": "FP7a9oWmCVwcJcBvzjbRavsVueUQE9xCQZoSizbJWYew4qUAvWRgn9UYR6FVjTAh6pwouuPEEiYQciMYnrVfndE",
  "key7": "4LSGextv4syP2c8cyhvU7u6d6FKWzmW9YNmdLUvgWuFVpVCEQjtAhtTNdsTxQkgyW6dWVVB9Aszh4YQ6JKAwDiZw",
  "key8": "2M1ZLeMjppiKyhy4jsMakS8hmHpFrSbPpHiL8sHKfyrSMTQQKzSYqDu5fLtGx8dTnRZibAz45GY4d4oHvx2srXBC",
  "key9": "2P6kkLYzRVBUhcMLJt88a7b437Zroyu3uLXSKM2uyenQ7s4awB8BDktjkpYzksPMDbfyUhTyfvFgsdJzyifBQ5it",
  "key10": "tE2UuuyJquHkFymomxRTJycHeRT1jgY4JcbCWcdbZ4sEcuiBkaBtgWoorMFddpKoxyBYeN3xwunpXc9kUYhYk9h",
  "key11": "3U63rVk7eNUr7EqZQbV1EntdKdLbJ71rDgx7sVzNzzcfyRHycrf6j2o1th1riXGBuJAaBMF3qFSj83FAXMd1imrA",
  "key12": "53bwmnCY2jMrS87WoLqQx2WjveG6EKHsbScHWawzcWr5samioPxPZiJ2Lj7op5Sv49pHLFZgFCEMY1BD8pdzkQLF",
  "key13": "3RoW7p7RK9QWLuE9pZcDRsNtCfzGQU3ZX64tuJo8inYeVNLJ9BWVmgAZegq7qHWXomQQ1x3h582zzSf1Z2QagnvL",
  "key14": "211Uyz5Cjfw9Cnh6hKwspkFC4oWR2WjZWH75t2mSwRmnJ8HUUUcUfjZPWzTLWgycM4rLM8cvvvLKKPhn7Ls6BV99",
  "key15": "Us2FDLyKVdZ7NqE9ix5WK1UvSGzDMPCfkWwu5wDvS89Zhnhwyr6LtirFviDD5KX4wBn4kSnvGbwzhWA47P1x9h9",
  "key16": "3NaX1uxS2DfHTSrrNwJEVoLyA48zyS4cyuk635pbMFzW9CFjZDwSmsoH2Q11xYmZ9RtQFv2EkCNbEpUJWrCKo1BS",
  "key17": "4RW2zMQNjeAeaaR6wkV5EKuZt3ZXRVK4uj29nAYMQbFZr7NVAReCjvE9RhUaF6CSoNqYc6vxDczg6wHvGCDzPD1j",
  "key18": "zSbd1RfCkV1w6feydn8ohTockhUHUZLaPYEQ8RDChAoF7wDTmU5dDj37uDwXrMQdnWhLAHahCTwKNaMTEcxWe1q",
  "key19": "5ZrSbdk21hkLcupai7iUV4MGf5FrtdLpgq6GtmTah3cRyZdeNU9EVdZMo6N5Aa3Eh3FDZfpJJXP9YWHbN2B9noDb",
  "key20": "4Xc3XpuLmpAR6YFUB9usUXAFbjbexNLZ3X4S2dMyBi2FJHkwXePDHUCeuwarHhCtJXcV165BuLKymuWJbRLMDJmo",
  "key21": "3VejAgxygPRTzDvVcFNXAHZTAex9PJUqfWL4vsF9PvAfSdNEtPBx29sXxBRzwzdZT5MbjgcQ5PwqAHagmsv1HuLf",
  "key22": "4J2d3xoX6gXt1KccgedAggH3dTdnB4VihN4s6psut3rMBUoatPXfCb4tZJ7WQuoue2zdrPoYyB5D56hQ8j5SkfzB",
  "key23": "4nLnWxsKtxHwKXv3JF8LvjJ76Fj3vqUr88QtnjbtYnk3Ng7wsx9cjUeFp7bcUczQx5ZXyqC7F8TmAMwxnYLSVdj7",
  "key24": "2p3bZiKBP34GypjxQzeyxwghT7tetqHeiFbbsQeBgMzjRqrFw14DvRspERk6CHZyzEYXcHjyUn6QU26WXBjRePPC",
  "key25": "4P6RpXPNUgL9e6P9SFQQPFTHLjswhUdpwxVfVxtG28S8UcyRAHHTtxVNqBEmgcn9TjSa5Gy9NqpohHsgDUP6uXoj",
  "key26": "3n3zYY9ohMJHuAPFjAmaMcN75a36x1mRdFhoRRsbA9W1cgnEbStA25wJQJcZkPF2ien4nNGVEdDG18pYwTjUCiZG",
  "key27": "2MQYZwYgwznqNWi7J2Gccofo7bh81FzTM6M3nx4JLxus11Y57TnxsafK1tjehzyC4i3KwKrao1PoULUeo4TG656y",
  "key28": "4gp1UibpgXjubpL8F9i9uwBfVPikCUYN4yXiZxmaST4yihAh7ccwt34KNnCijE7R3tLGd45w6Su1XDiRkt8u9hQb",
  "key29": "dfZxniAsYGkFNHQg6CA89snCoCfdGarMd3aBTEXRLVviKdK69mpUA5qtr4Q13m3sLryvtotfEX2nedMCmaW6F5i",
  "key30": "FRJCQp3ZtRsh4uc8EZHk7SYCvetE5bwjfkjN1Ar3DrsBNHFZK7WfdT1pcAdW6AyrybAqpU8PbybHhFisNsFJfCe",
  "key31": "4BWdCSnQN3DMhUGG4X13cu77AJGBML7udCzpitEqdCx3C1C3em2EW178d7AeyYkQAoZTzNGjpDzVhaxkvYAEtiub",
  "key32": "4A5vXaUvme1vRn9DypobiPytiHjxaavvjB5aZCt2bG42UP6QLqbJa2FF26ed9EeawYrC6YHyrMX6kmp8VcsNuc13",
  "key33": "3CQ9xFW94mudFZhUU5162oMDFvnrmJo2wb1Fnj9FK9BeubXTLTDjjEB1qgv34q6Tz99uJVgmxDq6NwH4U6ANXeUV",
  "key34": "253CBNdKbzRNstwxKh9Wv86i7DgouWoksZPgjMnMcX91iAhUhH4sieE2kbCYA6eNWYQncjm1pN24qfXxFqQqH6Hu",
  "key35": "3VLHUowoubhgDiJUpySSAKhdnrcP5Je66r5drZxHTWxKf689FNxrjk1mmspJW9bte1o7kRHnheMyUA8RfxeGZBLS",
  "key36": "3GEQMP7uDeQdmQsV6wp8GwMhc7YhkKfUy2GBbqiXJTCCzK1bz5S91fP4tcKz6eTy4FatfrLzQxpLCUyLi2YEVc3Y",
  "key37": "3zkJZoTqmod5ZMeab83oDoXi1sfnYfGTiV3px8dc3JAM2L8AsUUkvDeYR4jDvbnjYyBwwJgUby7QhVM6xEpMpKoP",
  "key38": "4jc763r6QEFDLUzqB1BAkYdUsMgrd5rPfhHr5ZmE63UFz6DU7cVMseVzUWxRuf1VKDPzRNPPDr5JVraj85gJcd7D",
  "key39": "3LG87rvrTLUyoDNcMd4beU2V2EHa4tpVtM7qKbhcSKLPhxgHDMkcUJ5G8rqt6CyyaZ4CSfckFRYJUQGqhRDrCPDn",
  "key40": "4GkAX8amdPJ45qNaA2QzVKKrcwNRc2a7EvMgTXuQmYHtZnjTNdUBQhfFUZ2UimZjooM4r6Lyv5Hut2a7JVVPqXpS"
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
