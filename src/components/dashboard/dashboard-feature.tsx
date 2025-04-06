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
    "3pHr8r5DnJ8xLDvkrqzCVBEr5TL4wdodozueqxTDMcZv97Q6HRemyD7PyKFeKRRvEEMxUpqxLmjFyygWqawwubqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHaSzRmR8rnevdDZWq5G5fxiDrUFnymvZsnvD8yrNGWUXXqKziGhkDxQG5nwVftECeneg9AJiHbJTf2B7YM6Yn4",
  "key1": "26WxwfRsX6GVBnE9ydoGU9vPN6cus5EPP1Ro3o1T96AevjdRBPo7E9Wv5zk8ruGCx8Ntc8cS9wLNxrLVM6WdXTP4",
  "key2": "2GwbesoZ83CyeVHUaRcuSSWqxunpidEQAoDPDg7eTB1eMU8hCaMbdiUkiragh3kfZNZXza1Gh6KfujuRj3iNBzY2",
  "key3": "3WBcf11jt9KowNmnzBejp8KWJx58cRp4GwRX53VVr3npjG8b2W6L8Bisy4vxX1yA2C9eyT7rW9LE42KVH2LLLiqE",
  "key4": "54vPHqdMhn7KmcJPje3tvBg51vrio3ZBYcqXn2PZ2sT4EUNGkznBuFh5gpi9NVZMhegTkbq36vK634QiPHtzRqgW",
  "key5": "5CQPMqiVgE1Y19KAc7y9cmv9N1Z1TWAUfUQvN2Gfj1ictcn8hAdmwL5NzjJj1Vy1X2otAQcccUUytoLCqXTadoxz",
  "key6": "49z9mqBCgVJTRZv4WHgbAeYYidXZ3ocdKwna1TKkB1aVAzB3kSRSbU6Ue3QZ5c1SoPFnZ2KQZpv2qc5qJCrYpCVW",
  "key7": "4xRnpRZQGWyoA4RGGMorovRu6FV22cGcbtKhxfzmQRtVRAteCEH5TYyrYvkLtFLJWKPX4kg33s4uxXvB8aCBDDw2",
  "key8": "3ZQEKKwbK3hrX2ZCxKhRjk5bWQARb8K2vEbfTtsbT2tV33u24DvF8Ukos5wBd17CwEy8LWfvPD1kU3GGdPJqoZBn",
  "key9": "rtjzAxvSSgQTphtKzN7VHa7PSBH3ZZqQvCfAi5Ty2ByhmoJtCpCrYkAwAgDCARRswCawaasZA6bfU2LXLivnMxy",
  "key10": "2quXWTabea4GwBJpWwXxpyK1bry1k5SoAX4CU5RAvGnYbARnW9KmuYWo7yKGvDvkV8JAsDXsnALZvh7ta9m3kd9G",
  "key11": "4omGijcLKqepWhSvFq8JPR3ymcxe8oUYxYsCwpXszX3NF4KYD1iY15jpeUh2Ld827pPPv6iRmqyDaZTHmP8VYBB6",
  "key12": "2BFQd6rKwWYZJmMtMW52Qwq6RVFZneSF2n2KyfiFoRsyv7CKeX1veLmAr6kgc7m9GuFfpE1M3bMKCAU8bmRX21jc",
  "key13": "4naqE3aEdCEWJ5s6Yn4RyaMfcwDsSkSuxHxgZMtmu9FB3dZtugMhPfvHMZRxMwDH6fj5sbhQ5qwNhZCvwYoPmbSj",
  "key14": "aL6rVbwZBe4eeh6ubpa6ko9DJZCfKKsZdF1SWtt39UGo3o6o7waQW2ZDmriHHPJGrMKMqEbduZYevffgfR8bZGv",
  "key15": "35fmxk5dBErbmd2HY5TbcauRJgtFz1FLjS8xYgsJbbeqpR15i94fyBLrL3JXw5BKxgM3cxJL8Fg1sdNXMr3dEehP",
  "key16": "8sznfq4aVh4HngA1Y1T2ZX93DYamYFtF9dAbwYF5EuP42pfAELetiWvVLMXWmcF9N1v4MLd5Pn3ExN38hj1HMR9",
  "key17": "3CxToAob5QojUsvRNp7iFqB5tH31842vnTdCEKjJoku2exAmTeik49tTN2bmLHyXTmUetS5tTAEsYDM6biWFj5Ue",
  "key18": "2Y5m7ecRZnUfesWDk8o9zkWmwpPwPoKWoaU9jCJEam4MhYibS8xXNQ64FhJFcKZmr2u9x1L6oX4birX25beE8oiD",
  "key19": "3muPvYu2XaRry7e94aZ2iWUdCRqpFEqDMzkHoWJb4e68PTKe1AeNahYMq9oosTqwTvuHhE82YC4d2d76yjS8bJkx",
  "key20": "3k5Vh1jQJJfQ5Kre3jo9j6z6dc3Vv1nqVNT5H69zHj5hzEHch7PH81cTVSJhYh3MVBgMboStSritm4erPaX2Smwt",
  "key21": "5Yof64nzzdRgAmQkEUDfQ6KhxRvnQcX9DBRqUhHSzQEZDWhEi6QGKpHNLYxituQGsQAb1ziMLYjLrqajhqWHPQ2G",
  "key22": "3FaeJxhY8kTdZnejLBxgWq8NyViEhbYrSrXYx3uo948Gi9GnP4vSpECQiWT8Vux1VmdPp4nLCCUw4npsgjpC8b1o",
  "key23": "4X6cwqCS2UfmZZEChtLXyzWG57Usj2bgQkefSoKyNi6PiVgBaLog4DaQ9wS2k1KWR5ecYTZsudkPKiGwW1Ho1VLi",
  "key24": "489kpYnc5XhNBFuaHGPVGSPdB2MV22FGmTy92TamY5cZnstQSrsDXkbrtFLWUSL7FiRnz88Ga3fqao1RNAfEdgCG",
  "key25": "5TYCeACwExwWKgLrcafiWdeVeJMebYo23MY4ripQZPeV4FSy5CzcpVmnazGDfciemfC1kxnpANVzmY97a48J4VYq"
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
