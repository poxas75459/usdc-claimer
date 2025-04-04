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
    "52PFB2wcJw3axA5vTrV57eC1u7kHRtNvvDAk9cwpTCMmw2QJZ8PRnX63Ct6xBD8qtpjt3X1abr1KJdvNiVemh2qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqCHmqKRcfcjdkBmqCpJ7tWs4KCwuQAfJQhfgUqDkyjD9XmZGARVZSHB5XAiiBuLMvR3zNjDBGNC8FPyGn5VE92",
  "key1": "4u8B89nM5xGhZQNLpsuUGNYxQGsjZapQLeKyBNxhf9DMBfqbqRiiGEhGNqq3x7tG1irJujEwKVnMmQPbRtdNakAm",
  "key2": "4iMrMynDZnb52LNxVWwLtEJdGKRz7bVekzYjbD1QivJvGU6NqML14Xsh2Q5SLYvtFFA6KTUmMUgDLphTJChohh4S",
  "key3": "2MfKV6rBTz7JYVnfhGfQyFhgi1CSAyvnj9vXZqWStbpiFy3awaYrijPAdrxUThY9bftkZSF9kDA4cwB4p4oDxpJt",
  "key4": "2jC39wBwXxGyTPV9suwmsvG6XcoGevmoDCu4bJ8wcE2X8RQDqrkzPphWJEKFYDxRgYuVuYLv45Q5wQptVT5bUtBh",
  "key5": "xsebcGbVgmEjA6Ekc5yJw2MkUrCgE1EqfPu2RoH8k8QJkwsYKF8Z1d3NDgZXmUmcFwyM9WauxCjFHTwVWc28d6W",
  "key6": "3eNsXE5GLmm2sAmZB4QsVyMc7dnfeyBwNQjXS8fnLueEfzJgywmKoDkVRU74JgSLTKw7XVWXwwApxXYcwqMeZr2k",
  "key7": "26qh43eLk7JgJeyhvHTiat6FE6MYP8Hd2DWT9RV5temiEX8oWtX9XJw6AFJukKoFYjqB4TMj2taNJX3gZbYed6BS",
  "key8": "2PPr5HwmbarLLW9fCh7ZNbU4zma9UHQaRiT3fXwb19LPJtPRY8kuWzUvtyXL2TdXHgzcC9dcUfJ84xJG6nDtzXsj",
  "key9": "36kotRKQFfUvf2p4j8DcP6HHhDbT5RqUBpGbT5UwN59KF1YtCVAQA3maDyrZe5tdMUb4sHpZf958456NPSxs85vJ",
  "key10": "3xvukDhCfwZeUgS5YWrTMwNivwB6mp7yqMP8LmuB9obDWzstAcFQAbcmwJpi1RDyhWSVogTUbVmCKMhavXLLbqW4",
  "key11": "6QnvcpC4wWyniXMo1WAb92vk8j3psHfWXKPHFYE2n63whwbky2f43weXwpUm7SgjdmqFUKMCgUu3u4kFpSfWKyW",
  "key12": "N8QNe4V3M1QraSBiXU45pYmYV6jv86MraUKtxdX2cY4jL8uLboon69wa6zFyZLiuN5FsyUpUyqXwWd6vyVDL72Y",
  "key13": "2oq3Uhj4j1YQdLgERyDsHQQgUDP2jEyk4Ar9yJpUNL5AxpWvJXUarzgWJtUPgaWZuGNSZM6i9uaPhjWMGSqc6EGk",
  "key14": "3h1a7JMZgX392guukxXzuv8ZMjbqxRHYLpYKwTv4u9t5rUxXPLPYyonpv7tU8vj1uVu9HyFPzre4uE2Fe73CjDE8",
  "key15": "3q6G1kf8oxkuLHmr4MQhxxQZkuV6qTQYdNaRtSR91J6rYLu9ifJZVdpp9fYc1DUz6JPixe5FBwyJZYg3BbVHdQDn",
  "key16": "2BgiWt1STbAFbjRdFLKn6qpuxRwLynuYAbRqy7DqhDeRThWK9Jm4mAU8w1bzY9gWoP6XdptqpjPBQcsn9sf6fkiU",
  "key17": "2B2z47ZndxRSFhjCEHU2AavSfPQuAvbuoZCxc3vV2B29bCCJozi6z9F6afL8g1ZYWruGn1gVAoJKBtepAfGpgQD7",
  "key18": "ekM27XdThmypBsHZ42noR69uEzvQeMFvKjZd4SSaHDgnGBwJcrsFejhavVwwURJsRY9tS9xGVPLcKVLNCfGcLhi",
  "key19": "2Fk1qVqajHgdTVyEyLeeLHkhRQguukEkU6wWWb82MYm6TVBEjq5v26WDR3iVwsEe41A6rm8Ba2YYm1M5XYryxThY",
  "key20": "3HoizqQZ2pvXxT4AxH11VuwcskpHhM79qQi8SN7irLv6UNHY9AmoCDzohXw1m9FDAcWVBkEqZVyrMmtnGdgZtCHV",
  "key21": "5YeG3He8J5JY8AaqZezTwgsNusAxR1qHMfb5MCHWQpoYNQTGFvS3p62Qtbgnx7b2WBdxxvdfpa4Aojri4aC5d2am",
  "key22": "2pJrE3dsYkGAr5EkEgEjkYZu3gsNGxbKuLLYjjoc3kqDUbcm4E2vD45ynhJVpvBhMFyc9hDR4f8Sc1WntgwjbVtT",
  "key23": "hs3HJeWH5q3Q5kEVFoHKWFx9mmw11o2NVz9MVZaMQRVYpRvHn89ydS7pjMiJJWBWyjGGENEdtFvRa1yVHAbwbfN",
  "key24": "3UMzExasgPhfHEV8oLnMKKTyeMmpZMKuu7AQqUAiVprU23VweAm2VfQmBH8DygvYxWQFJyMQycx5sc8CEnPykBNk",
  "key25": "3fZby38JkJQrcpEZQQS1uZfqnnXhXtLup5EAmQE8mPGJ8vtaJwbtTSGyTmjRLEYFbVCJXDSw194eLF67Eu7HajEJ",
  "key26": "3CS5y5oNiNaDT72Pd3ZuUjYiQFsvYivDiStRMod5FrPMeFH7NNCX6K41EvG71qiV67UpihGVDuNDqWpDoMarDWut",
  "key27": "48mycfoKN3EyMsPLagjZbbZiyEgQVDqgwjJxMYuKs9vVvN5zJK1t6X1wQEUGu88ozryEBQ9YJo5HcKDZq18goJGs",
  "key28": "nKZtLUWWGB6v7tEwMDC6AqCoMWXP8DtYwzKTvasdEhLRHuntUzhRwBD2onjXa9Trvow6it26yYPVEf6twB8XJM9",
  "key29": "24UJZ2ucZeCXLV27pnTvAnFFQVE2CTQtbs6c1mmDYAQeT4rMKyZM7BnwG6b6gfCfnHfH7usHQuVoBVa255223rbD",
  "key30": "scJvBG4VKm7K8ZT8urbK5im3Y61omafXvqPeCHnopah1GJmW6YjR7UENMEWjmjeH7RhEG33RPD88MJTPzZUY83u",
  "key31": "3b9hc3sh5QhooYyix8n2vvrRHNR87E8NW8j9Mh6KdePbx3RpTDypbHJk4rRhZCQzJEBr9e36ErsxGUWtCwwvZiuQ",
  "key32": "3KAY22KrF39cYWp6SoVzrZeXSysBHfCi5b6UJUCfHgZt1MrfJ4f9UQJANqg1YFEGdbPCrzwkG3XfSQ1KDetsd9DQ",
  "key33": "BFF4LD7rLx2fm9Zuv3jUDy9D7Z2zPb4mvq8bVN4EJTEhP69RBzK1hhzNtKCGsnyFAq14eWW891jYtPd1KgRjyXZ",
  "key34": "2iDdhbzkhm1BKLEAvTFJ9epzAJh2F6mtRNzBR7ymrbcz9asuErTGDLNEcaHzq1uXve9nL9ZCexGQjHzFrMWWDEb1",
  "key35": "46CMHX8L7w5hZbqmKiR4pop55pbpRwnwNFTcwsvgee2NHCLJMZbDLF3wZr7osLxAXHrjM9p7niXeyfWtrpzuktJr",
  "key36": "3d3mbDDkheedYHADutMgvmBDaX1xoyfgru7qB4q5qkAH8XzVQHfajtRuanC5xWEN172fUEzwrRsbEuAhk7Zd7Wns",
  "key37": "2E26NJ5bG4VM3vYiZVzQCHTUHDuGa2XkmYHqpM5RFkDv9vUKSvyjC9cHRHrZRDsPywt2tZEELPbfWBGNqRbnsbc9",
  "key38": "U4GHJpoXZtm2wqNqnSEJTQCXSKmQSsa1yTsRernToMGG69dM8FPQ83rcEX9sCZL6D2fgvpYQiGnprouN4JCN8vj",
  "key39": "4nsE4npTeK6k8LX4odEzAYaQcTd42ELEXALE6WgiYjHoArVZyzhGLiFgKJjsTdePSViAvA1gaGCxzMP6tHF72yzm",
  "key40": "3P2NABMnj8LCsigDqG3QEq5wrRbxk2Y9eMfJff2GDYMh1p8P1391S85FP7ezQ15egZAGeWsHdfPxPRsx3KN3FFQQ",
  "key41": "3bArzxtZPdAoYdX6AQEmsVcstrStuVCf1SixiJ9K8UxWGmnuBzjRCkiGNfAbnvb6ksioqj1mNbgKuaZZr6LCikbS",
  "key42": "3T6MjpqegteDdLb1K57GJeaj5MqHUVPJqam7EEuxtYu1Wd1fcx5u26hRBVysEpWfhFdTaGiRt3MwAPrffjW6RanE",
  "key43": "3wbh2MtD3BRFA1TEkj4Xz5vRk174EcWKiJ3gUWPpPFDfDrJsKJYqMfbe21vvbazzVswwEj6HHnmf5tqM8tf3syq",
  "key44": "4prFgWnL5yXyYZNXNJX4ZkvLrTCuzHshn8L6fyq4YtPbQE46XvecVbi5ytTMUALLSHV2Xaeq6UskM5kQNwqzNdyg",
  "key45": "4HsechVBv5PMrvpcj6jHTM9yxeCu9ZhRcSbSNzat6QHmrXvvVWB9wW2KgvDUN4rjwYVq8VxTvaBJ2EiUU5d3Lnok",
  "key46": "4xCWLgEH2msVvJpRrTqgScjsGR66RTtNvzJqQ8haS7LhcfNKAZzVWFcQGMy1ZVsNSTXDVgncsMsufvkjWBPoKrD8"
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
