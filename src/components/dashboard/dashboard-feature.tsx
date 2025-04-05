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
    "2XTgTheBj3scfcphCBZuajvWZjMHppyQMfDsc4tYNFqTVGxwJSgLK4H6FX7seUqKDivpsyPyZcQTcaF1zLTThCgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rb9PCcQf5RRGhDsasGfxsWzmoDiPwGHGCsR8h5wH65xVjSmdCuU6jDG6RqhvJS8sG2zLQMkQLVN12bdbsfJjyzj",
  "key1": "4fJ7baT4bczkA7C5p3o9rqFTP1q5GeWYow5aQYmDZuvt1x7UJQQKFhwyS6p73LziwBMG3sUKewo5Ay3YSyJVgUQ3",
  "key2": "5Fp2V3y3Wf9RZ7KZBbcdqReGC5hnmGAv3NHtaST2yGSwX6ni52H9e6TLWPZiMMJyTu59mEkbDJmWcPFHgLzvqwpP",
  "key3": "4VFDaEYvSFjjFSepo1wnP4uFe1njuykgB2z3sY3GjCMwRCrQMxeMQG9Epgc1ourJeCCoeep6Nu7nD6BKeAfmonB3",
  "key4": "3Va1aYTrgqfixX5nBTuQBjK4LhbFpTAcUMMT7r7AyykoWgWt9jqhhLAxiabJJ4kwsMbYfBqCgfj4mdAYy7EW6oPm",
  "key5": "8kcA6Nw1V5easHhCKZQxoJbUuiEsLdEyJ1VngGfFfrWryikkWQRHpXHhbdtNpDwYtrKRAWJvoaT8svhU3SA6tDK",
  "key6": "3zuKtoUQPsoDHzskouVgjUqWrEhJs3LotwSGvmQthMPfbM2WzCcH4t7wa44iiQo4omtjPZeaYqGFJm3ndKAUcT1a",
  "key7": "58aY5BxKtqBWaYxFtdcZctiNqUTayV8VBnHJ249vBxk4BT4ePAf2H7F14nQNcpaN9jJaUmkheSCxG5aEwQGGuLgV",
  "key8": "2tSfuHdcKo6oE286z9ZwZnppDVyWCpixoHmdyhGQ6NdsReUsQpKYtQTpUYYCukUdcNpzjPJGuXZZBESVTB44paNq",
  "key9": "41swxngQ81cavVMQhEoVnFUzK6SuABHay1nnky13WNZ4XZv7nz3Aw1S77CY6cYavZPn5brR9be5rdKbw6sPSnkha",
  "key10": "4KZxXVBmdSce7Zv9Upuh9Uvt8j4N38fk5uWQHofATdRK63cyZpSCBFwjyVf1NY7aikRtfroWsVVk8jPPXHYxdiKV",
  "key11": "4rhBRhseRrXcWEYC9tUV8DGLpMq2BhHPi4WgY7FuRZPVvUwLvV69ZoaZhwM1XdqiLLMF6tK6KNiVkMgnEpFwWyuw",
  "key12": "33NAV3BHCqaWCoNBTLvc8d1tCpfaHP19j7CLNEbh8Y2eTWjTU25Qr6KN9mjqaGftvzK5Dx8w6jr4CZh2WBf29n5f",
  "key13": "ScBWqZHZ8xMK7Loea9q7qQ8NfawU7erNHGRnKzENfMoP76JmoesnWmTNuY16oADUFCFELYwUziHo5N6MU5CKce9",
  "key14": "5c2wbLdZd6yGLyALKCcD7AWLhoK7FEnnyiunQ7Vw2WSJuQofQyYHMFSGcXSjdBCQHtZoKrBWnrQEmBYcbivEs3Wz",
  "key15": "66XfqG96CCyQ8jYLvu6NVj2QJi7tga5i9sm8m5cpnPS9qaFNQWVqxyJMsbGteHLDmgH4j3cAJbS46qNtx92c2Ujn",
  "key16": "294JAYDFZdmaizGbv7f852eTvTLCAVhV4yxp3UQ8Ggfh1BF8XcyEjNebaoqsSMmx1CeHMHhJkGQ6RG8k3zv8TwVN",
  "key17": "gmUzboyjuc9Kkh4ARHaUpK6NtjWKZTyLqrcnY4TF1YU2dZmNcWRMJ69LecHFG4pvWNdP9wsb3XCKiJjTPbhJEf4",
  "key18": "4ty38WwdJ148u13WZ8WfHJHFpxBKPC8SPvPxuMJRrUUFMofSopdTrh2hCidtrUea6MjxXd4BeHRKRyGGuu4XAusY",
  "key19": "2fgTvzcPtn4vHk3nRQUKNWUTWsoPijSri6CrSfqWoov9SYpQSvjqBnGQr5ejcKqyNth4oMkUYLJotuo3NzLi2voQ",
  "key20": "41ZTYhkZdkFJrxoTfQKjtafzU4ZacvhiwcKWNtuFtChKWKcQnK5af1KGtY27HvhwDfZdCwm5QzgHcH85gas5QnBZ",
  "key21": "61sAkw7ofAcmECuzjbA548z1AfMB3muvBnhXe9sWwyznc4LMJKgRDN2TC6PKojsSAfUcABdWFHGxxok9nfkJEGnF",
  "key22": "2ygApVBrekJXU4qwzriPCFxs4x6AHNZVbx3RZ8vd7cYrKGKj5SH6FqFmCSCJpYcuhVxiaw4NPajderSJM3N5v3mK",
  "key23": "5Tk2AQD7fYtffSi7HCYpf1sHrUn2Zcg476VmAq8TKQipAoSibzQxcsZ6gG7ZFhRV3PhQQTTxfysA8unSLat4JrV1",
  "key24": "3NyVXWQ1MrJFFUuJqC5tikWckd2XPQxR82jMt36V4me1BpXupz1doPRp53wnzZUwFDS3NhBvckRkmYsqdwKFoycX",
  "key25": "kZLRJRPQ89u2FDao7q3vmG5bTkPFGdBfTSEdSggwRMWt5Ma6o842q1EkEPGkgdiUV9rDiiUkL7LntEDhLMEAXvQ",
  "key26": "4s7kr2qXvyZweYjpGLsrF9BVT97ogtFv8KzDZULiDFp7NBHTKVUZZhozN8JkEZh5i5RdyFei4eHr3B7tKe8m8pjb",
  "key27": "4zrC4jspvRfPfRSVaiaNwJqN4xjmZ3RxPYFtdZ7cWhpyEyVMRWkcmVMWJhPyYgiVMSL4iMUQGp1Dxuk2t8PrzyEx",
  "key28": "3gBccq3zTJdEMqXYAd1eu9imvR1LKNR1fUWHvWoc2h6RNJvLdtp8CDxDRq4AKy9jWPdtDzCsPLJ8r1bEzGBXHzi9",
  "key29": "3EqhV3dccLjEKapCQLPMwTAjyVCe9wfmWnc3NN8wjntd3S9ZQ4TeUc9kiTYFC1Ye9QoWaN2i8nxcomv8mD1dQcQ7",
  "key30": "oyntAe4cW5QNKMDhhAbu3wyyohDQBVBWzEEfQU5AGRaUf3NJX97cu7gU1mnsn225t16nZCta1WFNPwCJfdwnFEN",
  "key31": "3EaHujzYQeZ6tYWsqVNEBQYnjZpC7xQn6pEEkGZojKHEwUpH9CDtFWTLZSUWSh79g6pNKHBLHDs5UbKbgXgX49eJ",
  "key32": "5PHDGpRy8uzoQQXXfMB6Nd1PzvVt2YneeSkKWwT8SsmZA2MjjgBjK2VBpTPqbsop3AA7fbQrobm3wi7NPowgdGiJ",
  "key33": "57Cdjo8wFcF5GjdDje1JMMpATWcJb96ViRBQPGASb7NK79RvfLBdv4R29PugCpDK3t2qXevQW5SkhXzyqENg9BGx",
  "key34": "3xCGSzdapQteSf3DG4BDsWdf85vrH9afcS74DzUrcE2y9f6zrAxDJCBfh8xg5neE8t7wYzPXAhmNbU8a7jNQ6jBU",
  "key35": "akGXLEWucQTEvqLfsLPxSfHeq67jmw8NoTCpmwyz1zvUDJ27B5jnRdkAg4pRRbXrERw1dE57CBxfbxN2XCiAEUt",
  "key36": "3wDVimft8AYyzd6t2UBD5uqP2GbYrYfcHLRKJnfSrVxgN4sh4RY1aZgxRZeAszkc6oMozpfAsUBbkD6ieXVG17uK",
  "key37": "6WgNDGC9nmjt7VSEWUTk31KBaF39GcjQ5xxVwnZdE68qL1q36z1iDr5aiHsiT4krMyGHZKTmNQh7isQMNxT1ajb",
  "key38": "4v39HMro7tzTTkhWF6tYYufyxxnAo4i4fjnewozKYwJLfKAt6s9QjMaanRh2FTLLk8hzrMK7huBB3Pu38Ez1tFT4",
  "key39": "4tyNpfpPbSuedP7vho9DS9gwy34zKntbAd1yEma9Nh4Gv8TRXHzfh1VrStQ5WBHjySjpxpX9HoSW6gCYc6ddtQ7Q",
  "key40": "nHpa9A4AKfNGFDtdGhVGzbveZusn3GZGVbhYQDA6YPMBuRL8pyfQDbNWxeEhkVnfoLtHn9zEvneQ22ifs6h8ErS"
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
