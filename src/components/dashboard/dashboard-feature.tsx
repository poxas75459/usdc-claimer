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
    "BzX1iFZT8yEj3Qxep1jdDmroii9V1qqfAeqhv6Lh1QoeQjgC3jREnHW6WGT2NzMAo3W4G61RaTTRZ1YRynaExLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeowdk1tMQ56qb44sQCCWaPL62AW7u9D4kcVVcNBzYhFpV12NX1GbsS3mvwbqcjCJUWyBEU4sHU2bj1Ree6fvhc",
  "key1": "4bFY1yyGAjaSxLU8x6XtDnsWPrdpzUr51Gwoya5iFxaMnyW1GaxM1V6wj7iPe5fE8uzTq7EJDLt2T5FxPwXCr5e",
  "key2": "2gPu7CyNfqa5KfCoDBCnMFHu7sTBDsh9LApv3MXdPuNgBnCkvwLzLxnCaKhashXGtwmCsAUBZhV9ek1auSpA4AmZ",
  "key3": "RkYVu9nRVKk8ZjGpimmwaKXpNfxh7hWeRM3Vue6xCz5biufMzD75yLU16jpYezJJumFcBgPWoVwkjKikzHbvuiU",
  "key4": "37YJPi4bnY7L8UjnubdvE8ivmMR1BazxS5SQbZXu7drKd4sQbmTX5HXSaPRbnL2EPTTqdYDL2wKajm13GYb9ezL7",
  "key5": "3yrX7BYMoMSoJX1bz5eSrrx3Jx3UeJA5uypSi23MpyPsnMJph8NVaMZwQB8Q9zCuD1sad93nBMbKpA5AJtHsVkmu",
  "key6": "43nxZ8tbqWqQjKdJFLjdEffW65SJEUmUWJTfmbo95JabJ35sWrtxrYGfFxFc5PxdptHMqtxSmkh4Mowsf1Ed1Zw2",
  "key7": "2aTwZBzrQSYePsboXjq73apaDrBuWGwBHB5DYqigg16DCA27xsQZ2L3fbVzbAXTCrFfoMcmpWzG9oVP9zBspcTSh",
  "key8": "3bLTM8EyLYXmTrVi7DUM3Z2tD3nQ45Mw66m6hPMkitzU4F1pwNnfQArZW1Fn5Ezbrg4fmKUQi9Fs1NMymLj6XNYD",
  "key9": "64qsRPuMyHtQWGBGXv4FCKhFYaWt5FKDEpNjr8QujbY2bXj2ZiZhWcYcV4pRjP1ZWds5m3r2HVh8FcsF1EXHP5kP",
  "key10": "33vuJnxVAqSq8yvfV2B2HBmT9LQAZCrnX7BtkBZfw7ZMhY46PpeiagJRmv12QsuRFkZYgtEqqBZmvsa5WpwsBM3U",
  "key11": "zZX2NWHMwj716GK8zFpHMCEAVpbDSyngZCZ4Wa88LZxbGbqGpZGMAqFH66C6XcB7VbwYuFsNqqsqM4wrQCxSe5H",
  "key12": "52kTh8zfUZin115RMmv8SKhoi877HNZuM2ufTDWjZKSMBYeeCsU7khXYoBxskUQyNpcoHCQuyxEJnp13WrP2udHx",
  "key13": "5g96v1ueQtPmTW4iaWEet9bZvJcLNMAvC78aExb3AAQ6iw1s388Dk8pioJTGdzTXiooFJzFcmUEeKRD8ppGKnyZz",
  "key14": "5hgVWEaPg4sBkeLxuWkH6akF43AQttqAwZSrPDNs4E46zAe4wM66BJUaFv1umm8beXf6ry6qLZsyvPY2eqWgET1D",
  "key15": "2mmYgDBrQmw3P46Hxi8xN1BnJDxvVC7TZMaAJ9TmDL1CMQco2dyFXBcv1pwe43MYo2jrbKCN1n75ypvJoHuuVpSH",
  "key16": "59AZYY5u3fyuBHLu4H4QBAdxWoX6vpERXjb2pfS4UkF9pRcdT6Rf4LrYuW6XTtmo13MK7wuFYvTp1METbi6y9cgk",
  "key17": "3RQ47ZGxZPYQsKLQrjrbWsq1o3B3GpT3ED7BvqapfWF88Cd4mEacV7KP81EWBZw5T34Es31oRux61FUUdQgLDRPX",
  "key18": "5oTDi1pZDkRMh314M2FRqucUTPCdFFzF1tvMyaHe2QJ1U3WMvtAJhPREoSinp8zk8YpJFGvd62Gb89cDMiUaqymg",
  "key19": "3LUgXCcgp8FrKaGC3Xb2eXhX5T7xVWBTCS8wv3VZNFd9V7PuYwyuGEcjamm9nE4B8ntC6b9YsLJcDbEhvbFc7CDK",
  "key20": "5SnvYLHfj9sNPeXQ1gnXLftyQA9jUvjmk3PYjfwaonY5gdQqAvTete9TPHnMHWgagC4d9bLvZoRhW9PUXTVMnpLu",
  "key21": "4GHRm8EACmTSdFFW8ZVThTqcv6Yr8kLjRKq6SLe34gnj12SXTR11MpuHedLDcX33eUBkAeQoYsYQnD8VJfJNYing",
  "key22": "5x5eBQWz99HwaAZAciGsBHEbvmavrZuhyjrpe5Mdsa35q7FhuFEvspeyg1jd8rnSJtMZbYBTqpYzg8dtWvLbWXag",
  "key23": "8jbVL2a5b5CgRp9aTS7QEdpaBZ2UGFHPpJ3rmaHVCMfC3Htuhw7Co4KW2XMi85Vqj9Xq1khVVnNyCmhthi7HbU3",
  "key24": "83f79CpQj9SyHM8hESgcug4mNHdxFcQAQMw3K9rf57taWPYuf4odMJYztFAHsdeczsnTX5ffrDTeSXZ5e4rCoE5",
  "key25": "nrrDE6Sp9cxuYc8MZ9XZ3YsR81YBB2fhdnrEVpfrQqqqs1k1E2Z2o6htYe29yU6gHcPmQvRvFxVitDfkk6YwKzj",
  "key26": "4dJY3ZDoU3cgXyy8tHaTeWXY8Cx96wvhnzjYfAQr4arQ23mSK4Ah1Y5jzNcGv99VKzkQA2cDFsxmFbGdTQ1PUk9m",
  "key27": "2Zih1xJ8xrcaqRNHFWbX63BYTmeErMzh62CQPD44MgqTbF11fyyUKbu5qgRSaLy9hb3zcz5Gr6cFE9eLueXEn7ae",
  "key28": "4PuuSVKfnNyS6MZ1vBLc7oNj27nJJmGU4phW6dpfbjmLJHYdYdAPF2v8LTJyz9nrxpHrm4hGPWyAbT49EPTmZf1q",
  "key29": "516SEWUjrC4Aaeav4aXDMj7Vr3Uyf2a6ELrrwzeCud9BiarsFyY5EqdbEndTSetFz1ufKwk73HbSxFNf1jDTwRWb",
  "key30": "57iYGbC846M3pQJdp3BvnMqJthrBrK9BTx5ivASrniLy4dZAh6LeMaThRnXhFbWEMKPiN2z49Y3zq9NF9QVBbGKd"
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
