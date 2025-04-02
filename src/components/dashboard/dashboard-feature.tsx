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
    "Z9w12kWytNAhja4ZTb495xk3noSiohFGdfZ8CGazHat5sCZnjYn97pETVx1JdJ9Nng5w9MuVw3pgtKa3sdxLSb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxUjXwit73ggR2TJaELh98vnWZAZj9yR7GfsQsjQaGGMSoyotV8khsYGBBA136md9kN1XLt9fNLenPiameVdtQM",
  "key1": "54Yx3tDYy2JPuo9y2BBKWjLxMwR2oQWbFMfqmadKF74VYSYWYtwH4uZQKVjfev7tnPA2L2NUZHuHfxAt4PVZzBH8",
  "key2": "3DPo5QAf4GTwu3kkcHFmDt2BPBx482c8DS6H4Lu7XABx8YDNHHEDUS1VuTH1TGfSWvSqL3bJA4Z9BfMKBsBBMhFC",
  "key3": "4HsatGPqXk5zcitFmKHKaJ7HuzeviJBUaV71RZ71iJ4cbJmqUrQip8xJuEjSYn2yFKZ1GaFUNcFFiCpCgdtLX8Vr",
  "key4": "5X19twDJcopxSinaLwwirnrpEU2SjHyrBwCKhnRBanZd889PCct4xueQQL7mLLXtd7C14DTikRqaecifsMCzkuUq",
  "key5": "RtNC2gtJH9XbWzZBvb4KQf2RK9GaR1okenJAsLzLSofsSZyNrDHM9jvH1Q1shRR76mXiZGzdnDUMmG3q2UMrJib",
  "key6": "2eMt3knGts63MCSBw83jggVMx233LkignG9LpxSqh9MbHoUCk6DRMb63RWZBD8irrb42dbyg4KRfUBzmLRYbaphf",
  "key7": "3wPJ6Xp2C5fgHQ5z9oCusGeWBVQ3fM2ZVhUduLTGbTjZKSZPJLQwuFJheVyc11k5XD1sDAjF58NKgFpXMLzT7Hk3",
  "key8": "4wx42ryREdCnNa2mTWwxbq9FHktBKKLvvmuRiB8NGzSnERU1d6HjTDJa2Eg4xjXjsfz2qELTYpyr11EYPKJTkfrt",
  "key9": "3Y9dAXNRzvqocoT6qyXn5dq5AMWGxfMrizGoxXcuuj6hgTQBuL6HWmtpBGsrPBEpXPyuArfF9PSZFyDUkHRFW2Lo",
  "key10": "3QUHZ8GvLr38NLyHkKddJcvHFTL784E1eZtmq18BKzAAJRTmNLSZE2rzdvbqezCMtePRSqsjmwFMNGwqCAWiAhYr",
  "key11": "28kj5PmBmMLSF9Nwmz8Cdz791yixWAhi69VJTEZDHBRB3qR73dyGhooQSSoXhjcu5aikbeAzNHXqGjSjewnDkvaA",
  "key12": "MAqUHG8e67ysD6fbQhtnWzFu9uEzn2iz6eU7E9WAx8KrhcaCVVs2bscM2fmZhf964sY7T55ZJY8yFpWUDTxWHzW",
  "key13": "iZBSY8WTY2gymUPDPoJUdsgRpzhRd8WmgLFkpEQtNWr7fbydmAfSXyhC9v3yn4n2yjXhftrjy6tKwwAfGLECHbk",
  "key14": "3jC71k3bTtp6Yy9dHNmMg7ekUrnUAmNNgfjTTt6nnkD7bVMQMAycgDKUpaee9EQzByArfhYtts5VLvWQAbpxxrt9",
  "key15": "39xpL8kX3HYRb9EFkXdU3me1YSchbnmbgFAhiNDJH1vHF7bZNWWnmGCQNii6PYHzCBwEpsYG1kwQPGz8bc7jH8aX",
  "key16": "36NP4AC1J2PnSCCpcuLdunHq1ardNyvKy28Zi1m48cBHsN7hE7RVfr4PPHq3i5pmnfoanxVZED1oFrxzHZNgZ49M",
  "key17": "3Y7PuPR54qkJqgdvhVaB7QQJ46UFrFabLAN3e1ucnAuepoat4gGGz7DLa1ET8Hyc3ZmGXNppvTTjWDog1jnKVHrR",
  "key18": "43XJSXpdidw38XaUEYfL7wJYRUxaoM6jymartJzFo7ejxXnTdxMUMraYAth9NDDYZgodyEb7ivimCgVBKqoyBU5t",
  "key19": "YZUcYNMjp4DRJL88myAjVQhvEJzq59KWwtnLGsBLUxx2GDvom8bTCQrk5gN5iLXJGkj1bjJPmrRm8KJQvW16pCh",
  "key20": "z4z3yFJZMHphZ9gXBLAfMsL7X2XvdpF977GxZ9vjMkMDMnrp2BH5hX9736Do2ajfspomnhBwQnFi3kPKkxQDF3J",
  "key21": "25Y4d6be258jYQCZkKRqvnZxX36BQ3LydeXcbADJA3JHoPfBJJdadDMSZbKHfWcWYxmx8FGfAAibyp5AQeXtnVdQ",
  "key22": "pqfGbMENNgymbz8RXhC7RsYMHsGqDrRQijhFEHLZvZCHnhVD93ytt18zLoqzdGxuqEEGMRCGraqToJy7pH2VhSs",
  "key23": "2nqFbifvYpmY8ppRYXAAVRQugWux6LNJEHzfGzek2qGwBVNqHPhCbDnN1GaJGHJUuyMaQiXbyBwXjuABJ8kD5VYC",
  "key24": "33dAaPZP98LvDsSPCsqGPJAEpH3VUbmFynRmpFaY1Hj8rt9F4NKYPsdpGvGwsaejXVaCVG2ghbpmVXY83XbCvAzZ",
  "key25": "3CY1Za8vhhAgLrfVntSTRu699ML6GNBRdty8auHHGEvuh5tVmkR5zER4BT4X3jSZfpXPKz7unYoRxoAUDGBU46iE",
  "key26": "4gKpSNafcvSWZivVirkWpfFyG2zVwaDpmUnouBv3jW7RAEZQHPMHr24iQZPaRpgMh3AKUcmWMKopjWeEuTK7Wzk4",
  "key27": "2UakyH6Bkhy3HqvjagHvk6brzGbCMWVTr5LTRHxyhodfHdxDRkfwSumAzoUoUsHT7bwwMD73T8geib59wbZVAACu",
  "key28": "3ZVBwPeLurSNnF2ryzbVtK4s3QsbutrkrknzeKCvQss7axkvxFguqw6mRLsXhjfN2tdv6hdG8Gs6kc7gpcDKfR1s",
  "key29": "4ZtnMrr3jXrqiEmGXQp9hmWYALsygu6wvM7WxYyVRBfqvCEdCedGMJxn4Qi1ukLLEx9A4dCwgSkLfbg1RpgmFdk",
  "key30": "5ZjUWgUJMXi5u22gsD1nt5Q66BgDNnc39pjdYztwzv9pGfqJac5KaH6bwuzrn8TMbDdcEXG9wNavshDSAs9BkAU7",
  "key31": "morS11f8w1MQmyLxRFwsATL6p9UzfBcnGxD7KZ4bXJhM7EfJi1LEBMk4uqJYmKvTQbxUC5C2hob6CE1vYX7Jwoe",
  "key32": "42E11rcyBgRdirhjZXLMzdwU52gjEJVeidM2Z4VitDtNKkMHGonQH9RZRujsUMKmzukfXCK3kx3m8esNngtSrek4",
  "key33": "SP2ueBs6KgakkXqpQfhmYiEwmsopzTG4ef9Gr78mV3rH1TihMMQA7kRNyVW9b4RjhdC662yrNznA5ATAkwKvDq9",
  "key34": "3fmdMsAa5GDmGm26EJfoad1882ckQ28x3RniaGewycfE4mte4kD54VuDnzLzZk1YixvgNqYCRRBQViJMqnxw5dMT",
  "key35": "gN4W5eXvpsHiAZtUxaQpDPUacr1pSBaUgM1Cg9991Uiz4xJP9zRAxTV7iJY4uYV5KZVzt34mmexQFffaqQQuYMX",
  "key36": "2njN8YPs2qzbaLtb4y8eF8XvRgM1DQGugvLRwNRCLesX6nb67E34HG7awR4gu9sBmgx5V5e6KYXj5hrvDpMBVMDW",
  "key37": "2iUpsv4gWpeDN8GSQN4Y5iKBw2u1SRdNHtpNkFPoSUgdjwXqRskio7xNMJQxHFCCYhUHBbVJfVmu7vF6V6XTebw2",
  "key38": "4GGxmMUQi851U5j3RKx9X7ZRgsSWSHEwJrkMwJLWMwfJbVB9v1btCeL2xoNR31NA2Bw1XDKk6QM7iMk4D4PT32WT",
  "key39": "2HQxypqnnQuMMtbmVrTQjeDsgCTctPi5tCwjaJYimfvFYrQW3bAauBZfXBmS2VZnct7Hq6mgykYdAgXPosRnWY2u",
  "key40": "5jeMXYStxwaW4UtwGJKQsfm76bLaxQU5FXjrCEvPxaRVR8X9ZuSYQtm7DmbToiZq92wG3ias6dx3Wk1K2fNJ2BDU",
  "key41": "5iHoDR4txNbCKSU49q1bjtg1JndXNYamRCmQC2tDBArxM4VqXXJsqgh8ozG3D6EXcebFmG4Zs3h9Dok14yTMfHgw"
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
