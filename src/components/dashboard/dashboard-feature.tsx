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
    "5RnU8tCLK8LhFeNduTMpkpj7LTfkyiEmqcTnqXz42oaGY9abXEd6DUcX9w6fW3ZAbSjiwMzBnq31JqxN2zYboCuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X879F3hLuZNr9S7b8fLyJ8cybknWQhFUFPRYDhcsN8nWDiGuVnyV3Rnfuv8EPAaivPG27gaz9wsybu672h4fji3",
  "key1": "44w478Yi9mcuTnSFd4darkUE3JEeyfFtEDx9ZEnXhTW5t96HANaKZ2NHjMz6fmYr2xkqpfL17Kjt2sZRdyuLHv1v",
  "key2": "2baPTqANTMedEcizRPHksx35Fp5sbx2scCGBbgTJma5Mx4SScC1rA716pJapyt9DTxaEpR3yfjNXUNXjFeVf4VRz",
  "key3": "4LRLP1MUu89kKiExu9TUXp7z6Bm3ejT9EdbXiukTojSfj8jmiHzRRgKHtYpRWmJvR16Zbdx87CKkdXRysbmjUerV",
  "key4": "3443vjDSUhSN7FAarBQn5DAexTvcqNtH9vLmiLYDdHi5UBB3SEizPrdzyUp1NvL6LiPivEoXiE6Gpii1BEANHyM9",
  "key5": "PZWEyWYcd27Fivab1KrzMRjSLN81GmSbL8gkF3CeDgDEVRChEATYqX9FtoS3rdWLrBH2n5ezaV49kZWeeWo92A1",
  "key6": "4oWFGaxMPgEG1VgEXeDWvKz7orfV9ZbuSmsRYEJQ9Nag5kSHWKNhcRfinwd6KBLXqAppUqSsqfpKFjdTpq5YrJsQ",
  "key7": "3nGVVeB38dJ9B2CsHvMZMtkmHcmZvLP26qtAF7znBE6qAUFRV1W2VBZ9LsnMYCRgEf89waQ8fR6TpRBay6mxBGTP",
  "key8": "2cUmcGm6WD79JXddpioPKcHAT8aD2txgTbuPKsWnHGFGtFbf7Z5dDTKzmhnfmbsGMWmJUhTbYmPiJpszyPFVpyuB",
  "key9": "2dyqANjJ4RVWxYsdvHWr99o2QuygjkUkYGambquB9ibFtSndh5Z7CQzYMjjKZBZcwUxW2VDV53SLay913cSWVwbT",
  "key10": "AQHPFBtVHbjcGZn39JUcZA9NJJMArdb69ih8vfiLB3A4r7z6eKPYcqX6GtaVA1QJ4dE3eEWpLEyaYcAZUhtU9ot",
  "key11": "28Mk5YiL44tNKpowKrnDkn7qb5mz7CsfpNP92aVNdSV5LK4ZnWSAUd5e1t84HUgiSJgy2ohkz17NbX3snQCVRLmB",
  "key12": "5GycEUwbnK4wTPN2LgUSm4TgU2ENDeGbSRVoraChye84aeYWU6GxC6kb8NjL7TrkbaPLUnU7zzriGr6aMViEeEkB",
  "key13": "21MoYiGk7ohkiE4dBNNAhB6dS8KjD4nsxrAy9zhrWhoGvZo8zahZqb9YTgT1uKdvHSi6SU8Q2c39UsBfHV1LS9Ej",
  "key14": "5WwUEuagTbzLAHFnZ5VFJ7h1MTcpYH9U9BiBztGdtjBY4eWn41AYTQBTJEW7R6Q8VTsVxU7WcnTByQGZiuaM5U5N",
  "key15": "37eQpLBWiMKq3b9JuvtHZcK73vwMfG4ycWPBc1bRrhEN2FtWUCXMhGApwyx1q5DCuMGfDcAxNSYhwVVyVL1ZTVBX",
  "key16": "3a9CAd82fAjzdCinrjgiGLRziEdvWcawNe19piTijH2uYMQndU8CnYn13VSaKcGsURY1gMYzjPMpK6EEp8tMv9gk",
  "key17": "3BX6ne6FaTh5PVD681tWEtFoDfgQWWm3sMYXsA9zjXQT2DqWpEQJDxzmjdJcFtwD7e8mp73k6peWkDVpLjWSE9j1",
  "key18": "3MoHDdeGoujki2RgvVTXqXtP6j6GVEyzJ72pZd14tvbgdsX16oYoAssQmm9hJLS3HYpwf1z4awiM6n7aiCG5M7XA",
  "key19": "4KNpSu3EFwSVJDNvR8GzCiEZfyXYgAT4FGwZfSh5vHYAEVXo6GQLLu92eik57c8Lu1bxZdXBZdHWYw5uUMVjZhfr",
  "key20": "WKGG2eYjgUFTVk6rSzzwNoJEYAtN4G2g5iPHBys3vg84jaf86vBrEMZhtSPPY1iLCTvDnorff5uFp2dSdgNEF19",
  "key21": "49hqA4iXZpxb7HvXNn82G5vyfGPFGPxX1wh2N5P6ac3tUF5cPBgq9M2oenmuy9Um3jiZJeGy6o2PqTEqZAURceHh",
  "key22": "3krfGNJVxoWkX2pVDVtP1h44rEELQvuHqNNm6RVbWoMVESZ6bDGR8ri6RPjci47gbY6hRVfc19gm4U8FSFGop3E7",
  "key23": "4n2YfeLK7Gk3KBq9qv55zQNQiavjbPfmyC8JEw3cdXA7Rnn9XC3jDKGDarTtFtXQLfsXEAgyNg5wJYh8cWE8HBsj",
  "key24": "oj4zN7eT7uxMocJaVvaSm4SwoJ2Atp72WA1W46SiR61g4SyrSjreFzbV7MChwR4HhYUaVMmxFcxky9ZvKWyJE1Z",
  "key25": "5Sqpzqf95FgMCaEhhwiVt5KYzBTynwwFdaxFgvXNJ8YQn9X7ZSkbuMxNYMe2Q81VAmByPuQGGXca8FcenootQEaL",
  "key26": "4y2s7xc4s3gzKFQ4vMJmredQNWdznxjUcZZF3BxYZJfSWinpzUny819PxmJBhTGEswaoi9SnqfHLTB3eHew3aNpv",
  "key27": "5RSht4ywCfYkDY8up2uCUPsP9AoRBmWcKSQ7HFQV3mYNs9xsJX8AMWNRhDDFK4o4Pat6qyqhhLsmCjeSQFtrRRYh",
  "key28": "AtcAA88jjLHKnpiZZgiEt5VT1JKMhbYh953yVHLwb1pocuEGe5PtbTtkQprjjNd6sBv578uBka9D8qiHN9fgvXe",
  "key29": "2dWD8RfZxwhr1xnZydNFHBh1yMTW7cBH4QPwpJCn3S3K61a6mGQM423dooct445YETJHSoGeKeQrYaZye82oYaxo",
  "key30": "54EjmP8L58pFVRi9wFoVVLAYuPCV7Wuq8QHBc61vtjNNp4cybdPNZrsxtdzrUvS6NnuVAgoKqPbuvrAST4AZr2j",
  "key31": "2dfUFyu4QaQZF1dEVkHpkk7ymWaynqF7aFaVwfGxoALvrMbJUDJ5zCKNV2NpdB8va2vGzwQU8qZ4yxzQw8CURyzz",
  "key32": "5N8LLtwxP4gEsFBrvApBC1S3xC2gbMMfFaDwN1cM4KkHH6z6UZLHafN1aptaFPM1hvXzgSywRsGJYUPJk3EawRk5",
  "key33": "3SzsNFNM5fhP3MFhc5sFnXZZDXEkAhxNoLDH1JFHoEoipVL4hzmmRTPcF5SpPMJ44sPLMuMriwBwsS1dUbcg8k2a",
  "key34": "a62SL13p1D1RQPk6R5vhvPs2iiZGkhp8qEdyLWxSYkCJT3Cj5pJ9qphd7VzheH2kTr4SZumWBNp7mYH5QFJSPAK",
  "key35": "5HQUUC99W632M2FP8yUj9zWRCU4Ap3TWoZqYJF9pu7rRFkDfHhKUu8cXgrYxn6quY222tjjrxS57K2Jyvo3F8v84",
  "key36": "5BaYFbzce5VXRhswDPE2XkiVCq2dN6dCXz6KjwaPx4BDfkCiatofmB825bTeiQMkrVt2fZdEaQaaQFeXwXcPZ1YV",
  "key37": "4gg5mmasFEqwSJcZpwteQXDQDnytNoyfVkxWrePbHGANHsbs93jGgMJFQU1dcT16vbRtnMebVg5NfnwNEjWRLYKc",
  "key38": "63dK92CFmMzZir9hMRoDZEPxFg7whorkpSZfLs3sALfeF9njXx36Z94xaNp7NpdLnbffnmeZ4CEABvEFnHd2Yj41",
  "key39": "5pm14vpQa6x54piMWoM9fgpaGUZhJtpQECx2uVrTYuVtA7X4UbZkKgnZwxQUuDeehNuY3kXxkjAaHE4sNMi9Gxzr",
  "key40": "5My6WMp1HDYFWovRpwbx4PzF2RgvKhvJ4JhMXP93FZRhxnxoffGxazwycGXDiod2TyEWWA7fy2UqetDZj6joy9y1",
  "key41": "62yowCw29bQZKYm3cSP1swvJRtd25AJR9KiJMskJTFyJ9aJ1bqqYNL8swNtDePtzc21kuefuBfexaJFbG5MvSMJf",
  "key42": "2Ja5ty3j2dXjEbdYnCaUBRcdyPqE75vXABc6jrdp9X6AwjqJmHuYcXwEMRYmPLddgSovHjczfyzinL87TCspTyxa",
  "key43": "3Wz1oLqo2MgnyjvFdry5XdSA8qHNJvDRpgFpRmNQeVHpvQZ94Ym4XTbgpBrmUxSnstb7pLR6cA5ULLoRnCDKbD6P",
  "key44": "2jPD8PMQYgqxVWKnGuyZXmttMVuPJM6okPNi8cFMwo6KLhvWukzNFSWz3Ln3U8xmisNhSF6TvSDVN6qHaDqa9jPp",
  "key45": "5vMuFUMQczxCfd82vbxqR5yTZbERQdR4GaWm7B94td7MtuRcQZLQZ6WJaqwnA2hhwm5Q5Xxt2Dskc4qgsLjEWf7n"
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
