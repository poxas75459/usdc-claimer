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
    "2pisjZ6xCFmtdHyUUu7ZdTRysMYnnc76upfsXnfD9FgQAMEK4uhLnYUooHFRaVMxpNi4XT5Y8pTuFDfjsupqjazw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n7sa27NbNNPdWBZg5gDmPveHKU4qL9AuRcrN1PWXtzKqNMAeQ9JtEQwHNKfT34KLPQQoVJRyRYFJs16JTzcBH4c",
  "key1": "4GfRg6dbX6CXfV7FJqvftXB8hDGq75c4nrDqLGNDDJFx9aoGjHAp7GdbFr7uNZy8wAyjqwAQ9oPRvpPWfghxC7NL",
  "key2": "4DatvdwgEFUh3S9M4jpHC33q3WCcq2fmLnKkjBL2rCPjDmZMHG6WseWexPK6jra99GDZ3Wyqd6qpB32B2mY6t58o",
  "key3": "4bPoWCsdrn4uZe97hBcT4eMqVKUtAoAw1ZtFNriG4zMdWintzZTLvFXHm6Xk3wbm7mzXjdJ8t2hEokY4oz4QJFmj",
  "key4": "4eXMegTMGFzNbHvNiTPYxXUWMo18N5f5wJzB9AuX6cvUbVMQ2qNRfJnDwihYUV4tpXSZ95tNsyphKAwJTi8QA3L3",
  "key5": "TepVT3fxZiNUWRwopeb2Pr3P9BHK6mMVxzeECJwWBoM9YWo4wgJ23GVgRfw29REvEBaGuMJVkHmsAxRCaAb9Xzg",
  "key6": "2934ifp38B2B2rNwDfSs15K2MZ4CZ1txaspuwsSZy55KkuZdicGJH1erxz6oHeiZd2u3M3MFKeYQUptKvS4GeDxN",
  "key7": "3njPJgyPgtW1K3yNuoSggXGgs973ey1ZTqB78vkfYtfvYbiF1amMDWQfaBsUDY5nXi9X3yrahfo4odDL1NaT4AqW",
  "key8": "5eeNHdHRKSdAFuoqdNo3M3zeVQSLaHNvDympXjikZQCqJN86h7UiqR8tVCKBXeY5jrojNNvgg7q8xMQK1cqQESLd",
  "key9": "42HqB4yhAipE9as5oWyMad1cGDYw7fNbVFRLC49BdTeJ9H9saoo79xNcJ9mPPcebFEyD5RsHF7baTUgwyhBAuZNo",
  "key10": "4EmHXEVW7vibFv7gyvYznVdNmNzz3PamvvB8B8Nx3M2p6QdonozLdiJP1bF5CCz2SQYPA3Rby7yUkJrMqcSoPaCd",
  "key11": "2ufBSbjTKmTGfZY6B1gd6cWVZm7SH1oJu3aZmUtm5ukVZtNE6mS35ifXY1ZcDnfV4Yi5NuQtwRo2gdAHPNgj6Qoo",
  "key12": "2uoASA64XHtoBkV2wm3CbwTsvx6mzZ9GPZ4tk6mFXd9d2oRpBMuGUWA7PumPi8FAm6wmyVRmqx9TA2RFG99wuFLy",
  "key13": "5TEzkG3mPTPmhZheVyF6pvu9Az12hNEyZtKeDLgNEGTmN9HT8PoSHCYFbEr7L1rX9E2swyYot6qZEa7HQ3PKCXmU",
  "key14": "78ZR57WZfFbcvLitD5pR2HAeh5nmVbXkkruGdcCCw8p8ZMrvNk4LftE1GvNv3RQsz2YHXqxnUbUvu14otTJ1gQK",
  "key15": "5sjyoWADnJsBar7ZoYszwMJP3oHVkYrvLzadY4xXN7vgSZC8fde3xVzLDTDTJCZYiL1sXGd1FxmbfwoqkmqCuari",
  "key16": "4Kkkh5ps7FKxSqs7WSVdtPBJcme8GWhVN9F2MXF2wHKgrFDsDbAWWSzCeXQYb4XgQNewHzD7Ax1vAFkpGSzPDWxy",
  "key17": "5i3MxEUjH2inmogVxQ6Z8Tqpo35t16uHNRnsiujWoV3gMzdvfQqey3Yryzejn37WPWvVEPQQ9GxCGdSYdPNLzdMp",
  "key18": "4QuHYNPYBykKrjKyR9i97rTpdN9Kp3VodXsAjJ9wSn5LjxZtTQS6AAV54BeFMenXdTMZNQCza5in3hBJnkS4g6i2",
  "key19": "FpUjuwPfT63dhrPrvCm3GvqEyZNx7GDkXYtQo66paE3gfXrUZkLEvA6D85aCrH311HYEUqMmMdiryuj45oyA9pY",
  "key20": "5L3AomxPCpfA5hGGYXGwXVyKJjSgyBziNtxXj2PEKJd8eEHBBxYasqKUEDQ1r4fdnt6s5GrcenW1b3TMW56bRtzi",
  "key21": "3yMU22WvHkESof6CHkuxdn3c43NoFyfDv4QAiZnqpR73QWxFchXQ3q1AdVCmgEAo7XCnBQtp84NDsfQKuAa5xV12",
  "key22": "2uYgWvmzxZLW6cdD3eVAhc9fF3k6ynnFGcp75b2QvMC5qjxENe8YhChX2SVrd53PoBmGCcujXCkx5nWXJynFD8T6",
  "key23": "3ScbzmPuP6GG3dm28Y67cP9mZpVpu3HrAVnxWTyMow5dNVF97UauwGjX58NsmxRJ7VZydobrbpnViq57znFGU8Mc",
  "key24": "3hv1AUo9jJxa2QFLZZnbKuLoAczRQDAXz1yBJcnY31GHbu8mMyzjYxUD4z5rPzLJb9wgCLFZvQfiHsZqhSQdc5LS",
  "key25": "59kwxoVqarpdPNhxRwQbg43oLUZZCXv1YF4VXzXnLHwksHNvdcRF5Xc9bQt1i8jXX5H7jn2yJreXURXjgg8hF74E",
  "key26": "b9eywTfN1vnYdrrVw3BvE1m3YQbi53cmGDwRM9MEseFiufLkzvdvefXVSC4LYmvbRpFAQ7zJ3SEkxeBkYKQYrgs",
  "key27": "3Booew4ySCoAtYK78tYYyA6ynVW3WQMESzmn3dYZm7ckuUXWwrjEmygQLsV3Hz4UWPh9PG6MAhVT2Yay1VUuurLX",
  "key28": "3ysJovYaNQmBdQsyhTi4aKk5qXfjgAsBi4GK4ysMuUtGQ57d1j6zQjnEtBVkxX3X5ADJFZtWR9e1N6foEtFEySZX",
  "key29": "Q3BwD7FWPAW2hi4JcPhVBiP9sCEvaxpKABLMTYU7yRQhbG6BLQ3NmW6XcEkiW6EzPr5enSkGaaevH3J6ioU5mJo",
  "key30": "43NRsHps5xiHYADy2FmXx7xsNaRpdf1KQfGjdwJYs4pN2jtdFnqky7kpMa9Pa6pYhc6ZhaMhXvLLkj8fLnAMURD5",
  "key31": "5QJ8dnbCAfhTUyJM3oRkq6abmkCRNsJ5rULRTVGV9NYN149cx9e8z5wrxmog5631kNFQ3QUvfuNZr2Wp8FJL3j95",
  "key32": "4m3rAZnWiWUbrWK1q6TuJp1MFnwSkMMz6QagHZ29tm9Kqpv8MKQCFnWpQDyNcuXhbmG1xd1w7T9Vy2Y5EVoKXBEN",
  "key33": "oamLwsPtAnUHAusiHoFLijuRjfbREd1zRTuB5mxZTzewqyWuUETR6fSdZpF18TRuC1Gh62usjfu4foVtzjLDq4i",
  "key34": "5Be5P6CeCwaYLwYyq2hkQYmBd9S6cAPcAXPf86Wp2Z88yWjSvdQogkGGg4KFJkNxW2fkLG9fERVSXErQzi4AzW2",
  "key35": "mC9gGPeD6mstPYdVpXYfgqq3Aqi1AyAsoBssKKgXhJJUN8kVjvhLWtoFypLxq8KeyeejWb16UGVjb7vcT3DnDPQ",
  "key36": "2B1hh6RHAuDWKMn8hKPAF3zuCjYZhqdYkiW3NfcttNmqLxv3GndjYZe1623nnCAtsiotfnXJnwZGYNRhAfJfKZ8t",
  "key37": "3eaqHc4Z28xPqTmJogwd47NgWytNcZHsWsM6QiVnARP3YGrvhaBMy4XTmn8PA5uQpdBBdQxjeqPwBJR96RK6pgTj",
  "key38": "3qt7s2S1bFxjFaxNv9jLgqjEzCxgXybcMN7SmQ5pESHvhjv5WpBR7BWP1PKV4oRmQe1CR3J3CPjkRmQhe3WnLuX6"
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
