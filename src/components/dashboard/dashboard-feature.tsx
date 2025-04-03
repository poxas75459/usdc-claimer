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
    "45xeBXfjoMj3WyhqG6w3YHKzUzPf2LM1z8NmBVC2uprD7A4p3kXxui2tyx8WiQcTbrxdSYSnYEBNrPxZmQFGx9ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s24p74BH5aNmR7suuCYANAVvY4T1MAmCmGs3GgEHnNmaz3gcHs7qLZfjBNSzmDSvvsvS3dMaz5nWykY75sh8m3",
  "key1": "4s9PNXNamWKBbymfCYeFnvdRrXWkwMcgi7THv96r4i9iUCwc5N98AMbXGEgcjosLuqvYtemfjbcuEnEmNac5MVUv",
  "key2": "5shpSPnVTFVuLWeZjihGPQbmgbvyVEp5SR45E4KNYNxYqn7AB6pYaqGTiipjSiKpirbHMzYonwKSBo2bPvXvgbor",
  "key3": "5Q2yVU4Z8V69VyZsZHgv7aLeQfjDZpcrjQBh2pPVWiSm62P419HrZa1qM6k31RsH6KC5Wj8UeLrMxwCy4tpHGhVz",
  "key4": "5aS6wiq5or4282HYpk7NYywHW19cvrGSkyjvBp6F3P6ptaQ334YkM7huS71z2GPrb5dTiMULE4MRagiLQ2yxBpe7",
  "key5": "HegqJo4TKrvTsMkexiN55EetWc4otiL4UNJHvDgP8pUDHfa9hAx5SauBGNE9SXBnm8duUP22AcEFptTitqErL33",
  "key6": "4REr4jjRrhTHxzLgHn4SNdtaKyS4W7FaXYvHQDBLhnTuzUdo8s9Ey8bv3Fg8sNYRX6S2ZukSxNwRdt8ujDzLce4V",
  "key7": "5pPu3LuLYcSf2Zg8xP5pFvyUwPYJ5XjTiL9S9STfwbMQvDWaUYqe21ejNFnyc8GfecZc3UPcTKb9Wf4WkXZv1ykj",
  "key8": "41xsu6317znMQmdWBdZx5RDdMKmmobryuQ7oXcV6mvhLyHNGa8hMi8CHJe4ypWERaB9QW1Qk88yEDWu5jeAtJhxH",
  "key9": "4cKfxnXHnHCSbbAN7mdHnFaDs4gZ2RPo84D9cnYxwJ2GvKLUc8MmvWyLZvhmPbbwWTaUQYoqvqzRQkRL3kaodYQv",
  "key10": "3kb5o5zCKpbyTEKmT3jJpwzREWjZZmwPYeNLne85kcKjedndpzncQ847YEQMTXwGAD5coUNpHfWd55HF1rErvi1K",
  "key11": "3zFGv85493iVtxb3KcBXPhJwFb76fEMZBZikcWgjRv1Fztmi6jXjTpos1dzL62Z5RbYyC29cxxRLXRNBeHxi7Bzm",
  "key12": "4EioS1sCmAjZmNoutKcJzu5M83EVanJfw4yBB8P9scM5Jp2oXrKdNHThuo6ESDbenrnppX7B9EsUtp2jQRXb1CrY",
  "key13": "2DQdtR5VFnCMgCWhP2NyRFZYYNa5qwGfCNV7aj2mg6w2AcDhtvP82DxFLBJ83ZPJWEynbHEs1zrQaGjtSuFVWMfD",
  "key14": "3AkuYz25Yp2YzuuFSVZZn4nnU5zWY3hwWXrrECMucjWz8m8sUmQfn47Fg7nnqViyXkkFjDaf4RNPcnXJMy597CE9",
  "key15": "2uhW7Dv3r9Gwx2KL62eYVFKu7wFqnMCuavVVsf5XHTPnJgbMyLwkGLADVxHumHw1EMBYM7N5Ufe5S7XzVgN9Tdqw",
  "key16": "28p3b53aJyPtgRe5qY1isBpArTBiSueA6KVMBudCbcMyjaEem2hfZfyPoYdHSuT6PwLNCfMc31RbrQmw3SjCYdqF",
  "key17": "SVN3VVQi78J9TDqg36n9bi7RFZV23p3LcTBKi4vceYJfQJd7bev2TbTredmjc89GUWZaFMJvC4ypKse1XAvRkAn",
  "key18": "1wcQaNs8JEqaAsjz6YjcLQJWRJQe8qMgGFYVd4cVkb8Vqmtmq5B5grNGZ8o6p6feQBtaFA8ZKJfpM3K363AHQWs",
  "key19": "2udke65JdWVNoHdX4bjdMxDNPpoX1Qturj3hK35hH9UP2jm6hvm2dsKH9mCRhBkBRZYoZVmsQ9ueUYjoN7Mire1u",
  "key20": "yhvLU7kbCPsCiV5ZxfGJSiaVK4poZuJT8bMvi5rgAbYzLHLpky8wpcxV29Vu2ep2PdtyiJW3mMsq6rs5pqbxrYP",
  "key21": "4wD9GjCpyn7rrokRw5hsV39Av1Cm5XsTzeg2waynUUHpn84YYJqnUWmGXuzvp7xHi8GRfMKp4ZGmy7hnAtaH1fCM",
  "key22": "36Mung2Bgk9fDo6rJHppbA5QiZVERxykVgaGYrMAy7tcrSaieNNoUyQ7HCTCxY2bpyYWUsbFrZiKAc3YUWZre24k",
  "key23": "3xC9NLy9D2HDVFJe4fXp2KurwPxxa58szRnRdBUGZmyr98MsLYTuxd5xuuDe4MdsZi9cxEzV3Lh7n2AV3ANVNGh5",
  "key24": "64MbkV4bM5qY2umC1DU8J2nmf5fSBtiPnUiKbmFueAycCr67yvJdHxvoe2F7VNfiYFgvZJDbapvmaozeppUVKF7C",
  "key25": "DcrkX5t3eM3fdP9At5aRowFCtM6gs7BZfFtwLWGkLcFL2eeetEzgD3jiDXCqNtgJzP6vT4JeKfkko8i6Zuh9p8W",
  "key26": "3QAD19peDddvfFzNFEuBpSr6eaP6JMdkpLmS5g4WiMTUqW7FVS9v7HFPp1M63Y2rPjvnmzsgfWP9Mxnk6U5Dqc3x",
  "key27": "5MDCjtHhWy2BwR5KqyPunYd4hFEBBqW3YhWHsmvPoh2aLDtxP2Ce2F35ENNEdTngioXwPcHuSdNBE3KZHSWtucPc",
  "key28": "3ys8nZT3riyByX9irrnaMMG9cLtUV941y4BxdoFpPswNKwNUkRtPsRgcFCbbRM1gZF32sJdvkj9iY4ZBx2ERVNx1",
  "key29": "2ngvFw9UcT6xn1nVmBjBsAVn4e7hHVHbPHJ7jG39zjE47zCxW2LWn5Gb6XHWpSaE5qJgcUGfrcJ4y8wpu1BcRGnN",
  "key30": "3eLNnMuR82B3BjmPn75qFJqAZz1gy9r6xNvoCGr2YB4RwA5ziWc5SV72fPFKMEWb9kFwZ6vfmcFpyGTd6USVSCWB",
  "key31": "2GSnVpRGYDyoEtFfkSjqvJaPq2wduQDnkjkA4ekS1kyzka3uCUofSNmXL2RF14LoUJg2qE1KEJAUL6YBCsbjP7An",
  "key32": "5SyvDzjV2hfxcmcL3PuAPonpjvRW35vHcDBz1YRoRHAHMYg7reuCsa4CGq377qusak9bf2Q2dA4SxbenwLgEqyPw",
  "key33": "4Uca2AsWcrcPUjsjeTdU7JMkX9AXBcQwRYR3N6qSt718L9r1U5gnKMH638RbSi6LhUDmqdVpbXEocHuZAeSeevEf",
  "key34": "4oxxh7QKSZXzqiVcLoVK8fiNo343fuhGd8ixqnhrENF4YepS5XGfQgqYka2nJiWu23a1DstvM82m9yq7aUrcRCW4",
  "key35": "3vKTS4GPPjFvEs2HQSqex4cszJKnnrsehQRKwEWCNrkiZdjNYidEErzbkNEoJDaX5dhzE745Mo5b5T6oTpaPUYDB",
  "key36": "5pgTZ5pQZAkPupjG8b8EP4E5zUqciqyHKHYKwPQYgcgZxQEvgvXrzDbm2hd8Zk59Uq911i2dkbvRCSUcefuG15Y3",
  "key37": "5tWGsNWPMiYwdnhFFgjcMcQNnwDMbtoj5LvUBfNLkZCS5ZEW7kzHJ1jDEBdF7CvQUTR9ThnJWra9dLYq1Qz8LBhi",
  "key38": "3xEovTQ3bck8RdJLSfesFtPQEG6XaAgvc9bLp4D4r2k7VzhFar9fdLzSxCnb3iq2f6p9Y5Q1EYvAFusDJE8FX7xQ",
  "key39": "3WfQz8RN61LzCxLpXih574kQRfw1pSq5Qg9H38fvff2iCAVmh4tBZFunDXAAS6ufLu5Q4riToAw7wNufxiMait67",
  "key40": "35A7EM8nsuLReGn4WaAAFp6EGAdniHXVNRSHPjFaQCtJ357MqamEnoaTKQgzefbJhSnMKQ8VyHCf9jpf7G4hedHF"
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
