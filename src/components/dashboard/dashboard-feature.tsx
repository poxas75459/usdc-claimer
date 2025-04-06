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
    "U46vfjRTcodbuyMMBracY8vt7CDeqYSHe4px3q2Sut8RqkK1DsQWg9tAHEpZDhY18MTq6DeraENUvyREZeiQzdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ZE7SNkrDjucZshAxngBe3VhgC7XCepp3d4PDhKeWjTWBYLvXnuDg1BMEbEFMGsGypvuFizHnfC4SBuKhgKkfE5",
  "key1": "2YgB1YoBgtUTwLbmiBzTXR2dVrSzE4SYVQDE15kUoJwx3MjT9J3ggyGYrJXBJgbSpHyCuzG4BczCpL5NaoCVNaBT",
  "key2": "3P9uTQpsnJ5f1xQHtMXVu1WZKCmrH2uNPA23yu6DAHryAxdf3g3iaGiz9oGcHizPtQVpEfj3FLU23g5xrvKzuMRa",
  "key3": "4nVr4o5u1HwKnMD147SQ1x8PQVuVTdDYATfsrVMfgQGPeSLUZH8Xr3rHL78JHeU6HYWh776QQkLCwwEnK2U9HUp9",
  "key4": "4tiXVkciPdfiGK2qmLtvk3qjTrC47pTFpjEKLCVuLfADziPAB68VFKUV8pqBgPWWHDcNxb9gFf1EBzUTWvqFUsxZ",
  "key5": "3Uu58akgFDtQ9hrK29GsYgcag6hu5eE6CAfmxVNjkabKZqsdyswLeBvwUHzExagFNYyjUV76WQm61xic1YkBnMcV",
  "key6": "3mnYwT146uhPWfKhyMyqZFk9wqiWimmBsu8pvzs9yeGX6zGUeVRieUG3tZi58ufJxgqbFDcsUKdaK8gVPh8iF7u7",
  "key7": "NTt4Txe8XjzBhDRyzT7gKuX38QcPLT3mP6QsZqCkneQacxuwvbqpSC8Cpt3adTvHqd2kXuH2wQR6TytBEGRMG9g",
  "key8": "5fAggz8uCJGpi94JowSB9XctLjRasUoSW7VByecbXCt87x5XG58BUkV6wEaxXQFnE6tiax1WHc7yz2W2Yxixsy2R",
  "key9": "363Qk8jqba7AxLPTAdKvzhdjg3Z69ewLsiW4LK25AN9bJd9jhLw4rvAVfissDVHjVwDC6RhZU2Yh1E89JQ1vLyHq",
  "key10": "21MDr7m3bChF3RFNaiEWR642aFWmGKXThqH4q7mTAFuqcBp9UviV8To7Ntme8mNpHxoj6bdyf6tzx36bHkZoUZxZ",
  "key11": "3fs3youBj6RxDZk8x2H1WMRGZK8B6GXi4nxBYB5NXysRj36iDArXJCLDtNc8XkGZ6MKhx1bKNTP45oyqNKYmJD2q",
  "key12": "5ZQ2VHD41hkpY89oFjBJGbkD1Ly5fJWqx9ey1yYMYM7fRLAR9zLQKH2w4L4cdQcCotDykZ4S5GxnAnuZthR3FE7Y",
  "key13": "5d6G4Sue1dVydfjKovPuuTedf7Y5aEB8FbiQeaeEKjKFr1ReoRqAMdahgoEqWaRgDDKFGsV4LFKU9M8Udf1jPF5N",
  "key14": "4qANz8xMMkzmEgU5z2DMkbQS1N8Z2k6vzsQTvDJNKim5XgDc4tireiaHU9KMSPL595kaAUNvHiZMazCniNnksS8W",
  "key15": "5cMQgZB1xZoHFBB7ofFgEweSWcxmGXaZky2AvarKNwuPM4AwAis6WNpuQ82SUXCBpd5ujMDs2M85oXUkDDJamMEA",
  "key16": "4DWqnv9Btb3ggXQsv62t2ATQ4nYvaYCgkLkakSBTTvD7fmm4STPrkQTLNv9GU64ffjUoxMYVZGC8VkAXCqn8Bbq3",
  "key17": "5z6Ki2oT2rzsBV8Ti3nAuDMQvSgpjp8Jno9XsDtqCKCvL2BmEMNQVqimYh4fGcbcvPT972mdta38epTxt1Ar1cR4",
  "key18": "cxzwoXTPnZJaM4Wmh2pnaXS7zvy8r9vsKu2s2eDAB7tWpP9nr3Nkt9wJAVqXqauqhMfhmUYbsSiVyia36sdajRE",
  "key19": "5nvnAxDH9YX7GRXnDntw42u6geYfPxJUf5SzQzPwmSmjemYECd94hpQFSYPqxd1GKGDNeBhDrzrbhoFMGMAxqXE1",
  "key20": "2AUda1ijxDjRvYnhviXqhiZiDx18egiUrw8FudszMKKsHAj89VGfE3cu4YChrNRejGHXSm8SzvCfgKvRYTUbWtQA",
  "key21": "43JqBx88JsNhKLWEwpWifN2vVvnvTVXzceGGgAdRvh9GWpGLQtKGP6HFfVYsqfs61w7awK7b2KLyzARgAgyvK5qq",
  "key22": "5W2rUbZNNZPjmfLxj6EeaayG2WR1s5Ybeyu4V6DbkiyngJa9evDdmpUZuZjjJZ18v9cJD9CzfzeGQogLfZBdbXKv",
  "key23": "5rtzNcAW5g5qLzCcDAVB4tCinW1BTwhgrkL6D2wDtqUBZ5HnjaYUoULzmvGdx8HGk2Ny6VZrsq9kWZMoYjVka4kJ",
  "key24": "2HBApPLRC8XTQXckHJi71DAjQXUkPkyNGXXXVToRuV97d87Dwcw6wp5bxW89yXkt8jFqnYpPAbba4oS8w44eaVQA",
  "key25": "5nhbxYKt1PYnChWoYQGPUevSFaSBhAmzbuU6ADm1omAjr7SMspV4WoTrQesGwbB9pf6GEdTxWx6MTSLhtDGXzzS2",
  "key26": "5G9QR8PVAhGVrRiKBjJU4So3nwitatNbn4cU1SmK7MUv334KCewDE8Sf56x7T378Y19zLtJqE8Paz9DTg2qX3BkQ",
  "key27": "4TQQDdmEaTNgQTUxMNsFnfMbeTCrPEWgbyP6Drp1sNtMx6rrjPN1X53AV3zRyASePqBMLTtXnJPTaEyA45yfXHhH",
  "key28": "2DM8CnHqUvHVW263yV8Rj5toP3tHmJ5MeRcYCe8HneBMHHQiqagHFLwiMwuqA66xyTN92QQGawax9KhokrwvKmi",
  "key29": "34D4w4aqxCS1qVVzVWVGEfx3cvphNgHTv7gA8ahfNDCVbarMQrWW1Vwb4m5dLRZ13ZYZvNvPYn8ktqwV1fhiZfTz",
  "key30": "3jJNYyhzqXJnaCcjCF1dqeNXmFpLwwU1288FRWE2E5ZGzkNcNfdn2iAt8yJ4ucBmXMDgMLiWJgfVqaGTfHp5f4Re",
  "key31": "4BXDrAf8XZnnJDrz5qn5byd38yR8sSd8DsZFdFZEFMqjuYbYRopv38HfLG9rBkp8qWz5aPwwS7asKJVoTREaD5Tm",
  "key32": "2jfK5KtzH3ctT1v8fpCLp1A9jmLq9yrarEvccixTAw8jgJowpPnMmV4suMKei7PHpVEKrHnzmqRRCJdhRCToXrjc",
  "key33": "5JSoXmXPof2yBQbjo1d4VuTo4TZiVc2cQaP7kaDpJYGaVdbomMqk85QRWZvHVL7HHa4RNPjPqW7tdXvZCxo7n2oT",
  "key34": "2bRicTgZZSehDGSNyQJaEXLsBngFt7922r94mZDwtQUHCprvSztnEU2LuvfkyajXgiE189xASvdoRyopdX92c6WL",
  "key35": "nrUY3uG31eJZ5KrfpQ8ETKeGe938n3qbvdGaa5zybXjNVc7DhFHxTZ7yL8oNUpwtatXnt4yJquL4zqtsWhQo96o",
  "key36": "21RdAyvk3rVLp4twi6XQ8tRRo1VPtueNtisZkRauEvQASkR5BjrN4xFcDEcZfcSPAktibCN3Bdd38PWjmgnVfBVX",
  "key37": "3ZoqaUXxX35YdvhgbaAuBSE4iwHMLhUmgggM19BMSaFAMkCYhz45LoYjrBN9vXTZYZP3e8bo5s9tJUuZfvQtsrqH",
  "key38": "5wJPyQzQSWvEhvqQ697q5wbjz2FUXoJ5zLoF8JigseABzWGAuR6qGcYs3U8LXYEHkYcm3w8y5pZSrt5naM6TfaQa",
  "key39": "4cRUWBJCUA6GQ1rubRxNegTqh38S8L3LaxibjRjshbUuTovjnsJ8ygAraZLwtSyzWKvockewUP1Ts7qrrZmf5VZS",
  "key40": "38FmNfx6qtTYAtvZ5jay5Z6NMkiPZVKtZPSuNRdrsVBntv99iNJpezhEz5j9Tk4hSGfJ76RKRHua2rQxb25JfeKq",
  "key41": "4Y6eyBrJzNVDukSNqBPViEXLsi2pDsTravzVnNZT3vuZnGZZXzAr84WKbgrfpVuCfAQPUx3dXheMXr3LVE3Ew27q",
  "key42": "3UULvtRoZkjcbsb3zZnEG9EEsYMHyUkQEJou43AscH9Ud1h4ETnLvfPNb3agRoycmh9yxWPqntYQaR1GLubDLKuQ",
  "key43": "24fvz9dGLLoUEsn1xu8isatvGuNMcab5fvjDPgMozHLbfS7T44zgTZ59DRJPRx8XoQbPuTQ8uGaQBc35rrdUeGjW",
  "key44": "3uqySBUfXhpu4L8CLbXXnKzfTxpRQwmhCKn7BFA291dcncyzM7AoaSZA6nwPJRRgqZkHNbmeEEFSWCE5XqQ9oqeM",
  "key45": "b9t2pQXeejFVoGHeyd2CsNPSjgSnY9JF9wEbvcrP48h2GdjVGsvKy3EhG3DhMFRW2W7whB6WEz1rvaG3vZ5Pfk5",
  "key46": "4ym45jzXQuhJmbMA2oX7eDHayk7sJbhNQ7xnWXFg315dqD8q3V4i9z4GR4tzrar59mz9pPtfp28ZaKu2Qpmw9bnY"
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
