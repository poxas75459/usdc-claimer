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
    "4Tf4B8WKgUpxv2mMjGhKLycVLQSYRtgeMUDizncx6TttzYrt8RS9yiGWsaxTs1Hphgq9zg7UFFEL8ffMNR8FTH2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28L1QnBWD9WzMav9g3hetPmHAETWTEX7sY1XEPSVLPpLXY6xwDX8fto3dGQyoCfJbXxM3ppCLum3KrvcL7qF3LW7",
  "key1": "5SmJjfwu2fvTi5ab3JkTLmTbXvpVNTojUJzD3M9XVn6HyH9kvSGM78ykN9Hx3hEPhVYyvDt5uuMkEXWEXryFPuRr",
  "key2": "2a4Q73iVxiXn9S5pMdSE328jViKPSsKhvb7LYu8qPkXezVbb76WVA8kC754F8Ljj9JUXsLZ8nP7qf5D4dgewCLdH",
  "key3": "5CmdftEWESrEj4GYxGRiTetgsxfWRpEsWjMm8gLRe9XfxMkGFLFKEakusH8bmoZhALNiJUEykAmcmVEfYtpCgowh",
  "key4": "5y8bdDba6bdBqo3imxD33PJ8ksHEHYuyxGpTf6B3zeNXNTfeoWPntuhpRquLzNVQ8aeBJjgt6XzEvDzku7htcELr",
  "key5": "3JcMoJzpaKpTgnGK9A33kRmvsqmpCwDLQA42TssGw3yfxFxHEnDsvHrGTiDj6uWMks3VLbkok58583wbW9hrbJNY",
  "key6": "4ASm8YymQKBMVXnuFQz1nP6GBWKrrMP6X2X9LggNMdddg1mwz5C7akP6A137HrQPtgEEwCZT6JEfb37zRybUjCV7",
  "key7": "9zp8R3gQE4LShH7xqm4geSrx6Tv6gTkAhKjv59SG3QggBs3jgbUMoHQ6oCDYYWGXTfyKVyPWyLhaHsowjphFWyq",
  "key8": "h35eySDPoymAEVc82w5hQUR6VMSKdoX7PN2fnup8vBp7UWksZm8LUcfyocvBA7wT8aFMPZKwHf4yJZqVZo7ZJwG",
  "key9": "2mc71y8bMJUiWp4p6x34RnC85DQBfsVT5DmKSvsrNVRYtxEjz5sdDEDua9BHG8Cu9ka5ZsvPUzZmN3p6WevAFbXB",
  "key10": "4MEu8ccuYJeeBa2UgFog8PCx7naFen1U4DrEqcs2JScByK3bL4pBoXKPuNUfMh5hGeKyXa7EsB7pNyP6AMn6hEyD",
  "key11": "62Y98vBk8Jk2JqcQWwsmPuWkA36SqUuFQmmdzX4D77RQNLHs7WcRQpArbsLcno2pb4nX6bCeupwXhLiJDXYnY5XG",
  "key12": "qQv1LE9jckqwTLuMwKEssoXw5g7uLeTJu5bQVKkqaYxFw9WqWucYAaK1gBiTTU7X5d8JEJ9nwfr7WTNit4PMMLa",
  "key13": "4i9WtCvLcnVrmKGrCDgg7vi3NDhTFeBFHEV91XjHbpV1op16A4PTfwhQLzA6GKs2w6F1iJhSstrvecaTECUtL1hm",
  "key14": "3RNc1g6Yw3gPA3g4X1JvypqKaiu6NGrAsoXpDCs6sbmroNUTZGznF6vfnPuDQnowQYrNEsMwxQsHKQRqxtBqPRad",
  "key15": "3uEarQ6F4vqesP28BQBW3RvhmPsXEHEarpbNg18Z6o8tT1KkAkr9ipbBmoExAFSYHgE414bwzZBUGRhqpY7nwHbZ",
  "key16": "Vvi1StVmhUSJ1KGLkdmNtRhkuF4nxsvJJi9CWfHC9jcYsVeUwxBCgriTcXJXr9gS4APLze8WRfNc3ULcJCzaDm9",
  "key17": "3qZ94mxHxMunNgaatKzspvHSVyEohGvTzH7LYKSEiJePQSMAUFcPx2zrhncyCsbNqFctdUzAvgCnDnw4Vp1DqDiN",
  "key18": "3X72ikGvqKDyrKAAXyXu1SVVnp51W28bgU58pM2uB7f2Ybg1u292ptC9qaM3ChhrmaKV2HqeJiPXhiFmn1svAw8J",
  "key19": "4THdw2tq5VtgaKNFxZGcV7oChCkh2kjT8M6443UaJpvJW5yo7VSK5t5sqT6mD2NqPpPVdfZsZCgNEcAgYcrQGp6g",
  "key20": "3UqwJBQo47ziNVzrwn8HzqeggbbAxEC9fQzvaTuvGpJLnnjb4qrkjK86Rao2eARqJMYnkmuBFvbF6mDc9a3GiD81",
  "key21": "bfbUobEGjRgnEJevQk77qShqvAhW74vXa6UTmqyA95oJ7b6Uevn6YfTXkVymugtQ3x4KxrDRxEzzEF5gVhjtYa6",
  "key22": "3L7Rapt2moWtTNKmCt8aDJbgoLaqL4EsdXWFnMzhPfpB4XrnKkUtdsk3ayUFgiiqDxBFusp7jWYPmh3ZXnL3Vm4S",
  "key23": "3o3V9CPtktMAdqCxJudYz7CDd5bJtf969EMna4FtjCHDmUUrwLbS1hsfXzYMBJ9PVXXXa3UvtkVoxzX4t7myAdnq",
  "key24": "46U4tLYNPbe2tEfRmpNQjMjhHCwxn2YyDGrNqwSWMcHdJ1A4azmJiTydVNiDvKdCcorResHDqqLou2aUY5gVjqhn",
  "key25": "ayoZsBtxM3aGFBDZfo5Ug1H4GhRhKjdqcyeZ1vGeAZUtcLPR3i5YYnKzhx78S9kn41vcj6ojZC5U4cuA7k9ZkKb",
  "key26": "4ieToy9HAbAbqq9WnzGDyPepWs4xBrJST35KNPzqUoV2qEU1PoaDXMFWa19DZr3sQMg3Pqa8Lmtoe4oroR8cNEsY",
  "key27": "7m9t4MtzXq35S4zTwe41ePq75HtDhZP8zL3BRGYhnWW2Xn3YZYYAhcQtgkkP2qN29cV1w2496R3ULHpwx94X2ui",
  "key28": "4EyJvKxrrMfKXgp7RXbV6U3AvuYrebzXntEP4MJe5MjcmE3mmNdmTDzSh1qGEtuhUzJDyyU3J1iGRCuxYXEiiDe1",
  "key29": "56n22Mg6Z9pLv8gZ6WHvvrUYUKBKvMJrXfEqtYSLQQchUMo15EhUDw2LRLHeE2127Ug6TTTQHkC9z2if1q7V4Rxc",
  "key30": "4er1nufXkf3KLvtNAjKXuvojEnvyJB1obK4ZdRqZQYNVeiuq8kStrTwoapz232eUsHRbkWgqX1xFi9KCeURCWYdp",
  "key31": "4reBvKeew27LCGsHk7ajEbyj9z8Lo5VXFDkJKK4UkpWv2TD8h3hJ3hQzfsGP9hXD8pz8juDBs2UM9FQFygApQKxQ",
  "key32": "EM86qf41fDqDdsf9HzuR1vZY357T6duHVEpjBoNhto4qJS2mmDChY4q1LP6iRxctUhYdV1aY3Kz9PTuLuSWVpog",
  "key33": "4gb1y1N8DnhsRyz8kTohMe9zNLSmdPXsYnEWswpyKbppKBfXV9s8RpsZvZpCpz7FcLvT8HMdCfYbgxBu54ccWXjZ",
  "key34": "4P2oZnrsu1LBBbF22egopFCYUqKEtunw54FLxqUix63NjonCAubDAgZoMNbEFwyaT8u1fP92Q55qNWnY6qcb2wZb",
  "key35": "3mZNQyADkXptDgjHatpt4RetAjMwVcYMnxDizCqfwS7dZxXz6kk1cwtdSoNH24eHWFqT2DZrGK5TpJAUAQR3RHCd",
  "key36": "5ZKR4RkCeeyqhFBSXvN9VT8iT9T6EhFpF8tJshjgqD1QY54rmFc5iQETqwoBRh6oU6TLuD1E7UFsCaHKLYXJJBjN",
  "key37": "5xtn8gB4dznsk7nn5poRbAV3snnTd3nvSfoamD7iPB9hsHLz5yEPnD9rEwCifJEic1AFednjQoJ9XRpGv3Xra63a",
  "key38": "2xo33zN2xxHckyrJsCm2JjPNuwihk9dvA718zQQz1jdv1H4QvfUnqN4tnFqGj2HhJgqqRE9BakGWSTojXox3jkhh",
  "key39": "6iLWa52tYMYJDxgKN7wHqEZxTM8mY8qvciDEyvC9NgitfQhpBMpT7PRWQfsFeouWD11jbdmwkiDN1wSwzP2vrBR",
  "key40": "5vTY2aCKY4zfwbfhLNNuNBi49JcuWjST7wFqVnFQx9MrgkJ46RpAjnnw4WNpFeHbg8qFANaotrG9CRUJyL8yXA5j",
  "key41": "29EYtXVxUjgaxRVBdfc87ZjxjbVrzpXRPFsQPjZGJEb5S6EHHcdLWWNkNcRRUCDeAejgeTHncBGrS22PcC45Roww",
  "key42": "3JNhoc8iPvUGn8EKdyLpiKvXPKqnGdE97d1TZf4v5oGzazp6ZMYyXvQR7i51YQsHZ9fXxFbHkB5Cz5sGDJ2My2F8",
  "key43": "67XqhmawA2nsD7yzzBkoPx6XrsGG6ubSeR84EepijAGMAgg9J7whn4t3WgQFoTF7bxbiw4ur68Bvn7U2LEQdajzq"
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
