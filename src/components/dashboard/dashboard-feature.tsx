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
    "3bfDjfutnMm8uh9nafzL97H1UYhpGK4nTK2yJBTDesaPX87Q8dWfsxo3d2qPW61jgVc71nzUMpqnEwgSMX7cbgL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45D7JjD3v6dTzLKCf5na4tbqg1pN6DxcbywqSMCuvU5eEh87QPKNDuAp1xvtFE7GZxbddcG4RjnUHEC4TNL1Lr9K",
  "key1": "2TjFXshtK3GfDTNj8KuuDHkJT3pAhmrR3Lt76VBnCJ73zLqmJ924t9JoJpUSJ1ZCAzWq6VtyidttaMHeQVc7VCRS",
  "key2": "tpu5sphjLWFdRMTGAqng1xUZRPVTxqjTujpks9EGEZJTVNngP2GL9JjWxvTEW4hrR6mD7HFam7SMCFHfFmhqX18",
  "key3": "3k2wdfapPYaBM2n9SCuiyttniN34qJKcuAjgSN16ogtQac1F3WCzaouGKFL5mGzz3SzaqvVq3AhMhJAHdbncaV3w",
  "key4": "4fGLinq9qxzWstYQrDSgqETVxJAyp4CpW7qJ4A9iPEa32gCV4zk6eCctESZMK2wE9gyEqQPSjAQUzuMPsyNTUsPK",
  "key5": "3tgv5tDVcDdYjcgqvZxtrpqXU2iKcUFFyExq4rUzRHXHmRCp4RWHTuDacJPoAdtW3CinAGkL8EVQyZhTYz1PKLNt",
  "key6": "4GvXuD9eQMczgpSbTcwrsyS3V9AnpTikEfR5kNvjjBcRdUey4Z1Y13QfrmbQxBVpUJowcgBmNodoaLRTZYMwRkfH",
  "key7": "5pJm2rfzxK2e7vEPbFbhetRgYiURbHtCBq4mtg4CbNM8uQAL8f9mJAz88fWW5VDie4n7raL4yayZmR55SDqNfAd3",
  "key8": "QXAvgZyiPKV1ksNRiuxApBMUmrWejewqb3souPrWF4Mi6SbFV5TmEgvURaxqMbzuvrLTc2hjQZj6J4N7VVF6rrv",
  "key9": "4EFW96YadRt2fsAMdzM3mHoboMQthBbGUQ6UeKpSY2YLfxn5uNxKoCYuk6XhNf9ETaB2MarNjeYaf8mCPgyvVL6u",
  "key10": "4pmeJHbkT4w8GGCbL17iVqVPZcrXo1YJjtKbPnWMfnm3anaQe3uZnRXQxsRHBjezVKVYyDvjy7c5G6mnAQeWMNxc",
  "key11": "5jm7TANUxoqeqs2bkWteCxAjyAiHmzLvmNhYuZ7R865iowzVFt7irNPmApEjfnuESKSjiXLQvaLUdKtsq8oKW9ce",
  "key12": "3Q5QaKuEnQoDaDb4cqvkYbtGdGbUXk4FT5cd5pxhbbb4gbFNnbyC3QCQvnk8MMYF2d8y136LNfuyAaGmBBbwL4VB",
  "key13": "4QfvFrJXeHAeeJm4rRZNxueJKA5kqyNzGbtS9xbnd694hYr1p3Ua7BtgHpGYqPi6o1oaAR5XUJkYdcG8HoSdaAzR",
  "key14": "3SdXW5EMzLg3f25vVbhZykTFCuyMTDQ69yLSBfLTsJqJwVM47r62BshvZ4wzHFva14YpUikD8hvpAQnZkYiBzpL3",
  "key15": "2omGrfsrzvfvAXaVot6dAyvKvUzpPe2eo1sTE2ju5xANceyfExC8eBUbZLYMkLufjujksLeHxW7FYqQExpd9xNWr",
  "key16": "4MuEaNo32CysTZZM8HYRrEGpXjpcP9LxR8YVKL1gCNtTGycALSdFSh9MfcY8zQsLR9NJ1uzFy8W1vR7HzAzhuaDR",
  "key17": "3Qt2gKR7U98FvbwtQyESkjudDrA6KTs74GeuRijeBH9tDnmmc381Yn4BayCw24hPVSk543X8HrDMyg8ydVyh9syV",
  "key18": "5PijTnj8Hyt8yQ7vvHnbJgDdJgyQM1Df5yhXGVjCuXxnZ9uKfAG4pjesoZionPsYs25a45LZi25fLBik31nGXNo5",
  "key19": "3e6eQqTeoqgvEAXhcbWnPH2KNrgoLvYPJecEn4CH4KhpJzuG4XByDTjFkp2ATX2AYWbfEiqpDcux6ewX1XnBk2jG",
  "key20": "3YwAQEJzsGosn9hsWgjSSeaRc4K6K43ELLW4F9MWrsBXPBCBmjdXSAASFQnjEGvYu5sWAn7KaD3CA5xhSFESviBV",
  "key21": "5FR7VN1p6SEJzZBTxeLHaWj1nYUkbJFYCiqJvSAHySQYCkXhD7tnSjHAxqwU7PTFGfYfFEaCpSmfZBKaGZMuNSf1",
  "key22": "5kzQsLXgUkw4d5pvpnoPb2kQ2QwGLK5xkVN9MRbKmCqRBVAnVmav6S6rR2dToFeiPstAqZVsZhkpwmXVmrgLAHmK",
  "key23": "519QzsuMKCZ4Ey47k5rieVTsFdA3x7rqq7HtKnsbRDiYMNdsycKysC1JfLj65tDkPwFPGuEbZmhPWznndM6wxdxC",
  "key24": "vsSrgQS4yMeAFUUwgfWFDiuYtJ4B2gxijH4MWd69bNhxDDMeSnaoLmtahk2Uo1arnBt36KzAZwBEv5PXoPEYTSN",
  "key25": "5ypTsS2sZvUvPJ8cTjcvDPyiDuivHr8GiYFyzWJK1ATiFokzeB164K55sn8A8PhLPrZoXVBoSPoUZTxeXz9KiJUk",
  "key26": "5mPWUEJJNyaVxr1uUu4jcBozH28WqUPWN9jj7DyJKrXKMGTYbaf6uB13VhMvbN8Aoi1qcRU2GTC9ZhULY3SrUWCB",
  "key27": "5Vn5PrrMNtPT3kBFNBK6QxATNaZA8D6SLfUmzRaG1nZWpJk9HwuzVAnM6yp7SWkcfarxEjkZ62oXqRbGxs4XgzHZ",
  "key28": "3iybzbXmNWVJKvrhoCbJxJtKtFeueCVXsQDT4jBLxYP3ETUYN4BkgEN8ZitutLf9h6LpyGnKED26LFDKTRGi8XXs",
  "key29": "uH4nrfzY8q86jGMs3TbyK4q4MuytDojVcStCYNi9ZgXd5tRgC48c9CDHYqYJawU49FEAGiZBzz5WRxgxu2EXHXf"
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
