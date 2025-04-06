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
    "4QKkNJXUcndoG3WVHpgWUjTYAk1FNnFdP69SLhzgjsQCaCrtcdR9bApccS6ABYFLF4TLBAyKtyLwg1MrgR2DdTrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JtKTkZZiQuRuqPYCMqUMgQtQ8PiceCfvc2p4ASzEqdgA3sB5AsNd2YfgpJ4Vx1TjPGQezj2Gmg8aLCPVPd9HnuK",
  "key1": "2ZXdXJM12YJuP58dZ4Z3kQEu4dG63dPq2T4ntPXEccTMeXoUjdf7vK9JdUbDZNyoiAAtA3DjUvQCoM9xwZqyF2ne",
  "key2": "5Sw9DbTyGjFrQpGCqdY1gcMVQr5teL8TiJw7ME8hEivW8SDKdgJvu9KABSXCNVEP91D5yc5jo6qSnviAVyxXCuc3",
  "key3": "hpYMprsYGu4phiKzy78oUuwfYvxASLo3CarD4Bqv1ToMe1BNu9Z4Mkwih37SbLriF3tXaPLVvd1y9g5tTSbwCJf",
  "key4": "5fQLbL29ZHnu8YqTstxucCov4Y81HqTKR9p7a8p3UdTrgMpWMmr9yTv1oXVpCpURh3cdi62z9sH1GnupRgEMLoBJ",
  "key5": "49DoNgwsGfCX6CU2j6VkNooLw3h4csTtAU3hXjR39z5PrEo7eMwjLs3NQgjQvaJ8uEhSQMCiXfMy5rjoh3zZkHk2",
  "key6": "kyjDovWRx8Zx1bYVeNEwfowaXR7yViA2bRYQd4TnbFVHwQ85SPy2DnWxhug3Vv5kFnSdcZD7Sh9F8Yfr1cVK1uL",
  "key7": "3TWEFde98PLHr2Vn6DLEqy6FZbxPLEinDRTtdUDzqQno5woVawMHkHUfoViChijvSyY2WtuEJMgtCBW7Brx3wRS7",
  "key8": "3RZSeYWsXcTYZEtS1jo8qTKE32up27ASHSADJFSLojKBNkHUaeY4RE463Bd1Gqy7JGc5BWEg69CQPhUftHuYV7AE",
  "key9": "5Y7iRseE4ZffiYX93kf3mpgK3BwpmJbpqHX3ydXbwfp7PyLYanx4LSxwqxh6v6Zk5LtuqLhNtLb6YrrJqFYs59uU",
  "key10": "53LP79RpJZvEXzwroU9FjM9DQixichFwm8EqEnn4SPx2F35PUCsaynCGJ4KHtPQVu7SYjfFwfa6Ur2cmf3zFdG9X",
  "key11": "5UBnsWj4XGxqzA8uKR6ARMFE8egCWgFv3Hfam7BDXVi2NRk3ezhbkrKfkeNZgbzDdpZba4pzVipUu6RbJjF2teZp",
  "key12": "hPPj1RFDkTc3j4gZ1fZQghWmzq3839f6cpb7t4mV5XHHxZNqiKUAPL13aQ5tHMGBmhDgorPH1FRqhCjHQAPopFU",
  "key13": "4kbEVeSFM8cG5JwNopuNTUyzTvnvVcZKQbyr7Gh3cUCRmGnPX6PqVkjb2VoZXqkXm8yAn1384DxvAusk819XB6tx",
  "key14": "4Fo2NQnPyegXVCEm5TB6vUUVbKUqkF6RtuRDuZG6V5bg8T5wa2HJWZAVFEHa7pYogQVK9NnAt7TztxTwLv7yeTAe",
  "key15": "XSH4xkfUj9Wdgm6n6e3Q8UJcbU3QAVpWqfwRMnJLizgqLdXkMroYMaazXuUQCx4hcDH8af5TSmRFcs5Qo3C23Q1",
  "key16": "2sf4mFPLgyL5jceDY5poqtKnbMaawJLDAQykgqrTDcSxXovcxDEA8C8rw8S6XDY7uduxeto3Pb74yrs7zcHEHbPZ",
  "key17": "m9pE4sjQHBEX6SWBCt5rpiMWcimj731Mj2RxdgavV9RT9FxEMfs73QA8ykDq2srsAvXTQ41rZq2Vn6QWe4Lk263",
  "key18": "4xHCyjLfa1yN9DoDdWzckMU5VeM8QhYENT7CDP1qDUviuXZa8rQX6fCxiVXDnBj1wXiQGGbdiRQhmnw3X7qgmpdX",
  "key19": "2Jsje3ZjxJz3S4wntTcyLKQJsnM26PjF6rP6jP7HxB2fpdRPx7sMo12CvXf1oytwfDWxXNheb54LDgNVECnozqMJ",
  "key20": "5CFuRxzQDgh8aiccjqG7DF8StLStMh2HFTpJR6pZ7MFrUqvjBCCtZjXS3mNTdJg9xFK3H1BDjFoAgGEZLTc4t7Hc",
  "key21": "3QAoHviXFbaVaWvdn43stVnGHVcRBcTjpHrovHo9qUKsTdiTGRAJHftvXQNDfr79bErCuRvbvPHCDQb5qfzJ29UD",
  "key22": "4BAkXnQ4PLoT84zvRTxygvbKSM4RQw89YJQbKk6PxhdJAY2xUscCfNqQgMmr4gzy6XzguBguxkX4P4mharkAuziv",
  "key23": "49veMHhWRc1nDvmksQR7KFE4RYh1rfxjAR6WeiT27cDkq3gzmwikQA1uxuXSdnPQ748yeBycnaZ9FugekCqy4tz1",
  "key24": "4LTfppurBkF7xN9aiF1AhiuQ5FJP2ocqo6mL3Y7XithseGbJbTsDS9W8uv7A6kEkqbznH3UeQ9qFWc95tdc1ZgTL",
  "key25": "YtkMsCFoyBUiwSCSBhkAWQKJCAhpac2C7UPx1sPY23Rv2tmGbkDpp1GUxEiH4Qa3duX9SE65X9KttFBt6ioyfNS",
  "key26": "2joX3rjPoGVbQxnUVDmHvz8tvt9rMZ8TbZR7NTNwLE5K4GGhDbGtTjjTR1vHrpsKUBySb3iVZ5GVALkxdfgMqY17",
  "key27": "4SJMvJCLyNKjATPLJecD3iiAwrmEKuRUiuxqJmUJ6psNneKmmiwLB7H7A7BncDdv2Nxjb43DbdudCVCCpc5kM7KW",
  "key28": "3Zn3gtEjhYES2dSsac7uDExapiLxM73NeV9eVSbZXArFzv6vbQmb3jH8XHkpH5D13rbAUEhrZongBx4nfj9gVinZ",
  "key29": "4kq3cTHo7uPA6LwBMdiagErfYtPUtzNVr4qsnCuWj26BCGp9gvtAHHYvJyKhpP4xyJGgpmgm8XzFdGkXixx8cgPg",
  "key30": "5mYW4yL69wsV4fSu8PfpujDtnGuRYJTuRZqZ1YWZcDShQeM7BV1qSUMEbx9Di6Ut3ojBnUhVtyTMdir89Wp5wuXY",
  "key31": "5QDEXyNfcmp4aLLg2PncEg4QEuiLMARLTNrznRqUWo3hUDxvj26fa8PrYbsovSVVxpvqW2URb4HNXzrwUTFoaTsk",
  "key32": "4JnwCiDHajX7vfVqMydA9SkvrVnqD7iifDpNcRYCkDyE1WwvaHekt1xavndKuXdyPTvKgeT9AF9wfQpbhjFSu6cy",
  "key33": "2UHQ1AhyQWBAwRFLKRL6EPwJmg7PRgxpneVpBVhWs5gduyCmUBnULffqAaztYcG33CbWauBQt5EnJkascPtp6auV",
  "key34": "5QwZQ7tpQsjUAQ7ayy2JRR2vFPcbyLt4UQcWPPL19UkrE7bysEeb1NZhdCUGoAQwaV46MVDUY8E4G3MYy235yApC",
  "key35": "5gwatpAkCHZSfSksPiVUrauFbnr6tQSZHDKz56y3LtkXxmkKr3xs3cRKynG5jyv1eHvo8s1kBQ73MVe5vB5DCKji",
  "key36": "Nrv1Ey94LcW8cyberqDhoxxwV3er4xcwiPTmRX6bdvsA87sdqkU5PUNiHf9GnD1pbwZjboWcoXaAgcZ4k5ovj4Y"
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
