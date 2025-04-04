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
    "5mc8xxF1wbHvihwQagTkytY2fVFzhYAcCV9bXcG4CxSUpSHZY2gVQvsWJfsDtPmHhBt2bQ3yqpZDabebHvF6B9dV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hHU1QojepDoHRpYRncVYst5W6GZwh1UeQJynRoKXzZDtq7Srp5fWMAhcxocjKEhTkibPq3FXo1BWnc2dpSMQotv",
  "key1": "BRjQh8tGjsnrZrH6EUCDqrW63Dmb3CriWTmxB4yTrG2VXHvksj122jk5WxJWTqD2bx86cmcZ1tNgZ4yDZ4Tv4GM",
  "key2": "3Nx4oCf2NXWZGZNvAxPz22P62buFnKPvCPRi2FEjAy75kCezmhiWjMp2tDu7qyiZ6WUAFE5G1DYrj2zksB4iZzEU",
  "key3": "2gki9Qvw8rhtMwVtXgSctBFMFYh1dNVbSCWFEZ7HEYFaScX7PWrr1vhrs7M5e4TRtUAa6kJJ7wDe32sHQa3TntvA",
  "key4": "5eBBzuRGpRcRRHmZK2JmBd56fbJ8LF1TvmQmyHCqtrptVojqtak1wqrxuFQBNhrSrpu4qN5ajER95pgoYJMfmwcp",
  "key5": "5J2ZUcuQptQQJWVpweLx2DLJPv3G7sUecGkeSnKimtmFYh2AuH8psKXevwaZGHUJiHCJ3uckcVY2mQUbpUikSocq",
  "key6": "46GXbe6Xbyz8FYTdzFfeyPnhJicwWY9Jrw2ygAzDxpdhcmXtEK6W7TSMjQxKsyiLefVS6Ri1fJ2womACx5KQqrCm",
  "key7": "5cVJbpWCEZw2gFUxZkfqyKES6eG717NiFRLDm2TEgLaKT1J2r7hXBSmud15ri13NrFpUsdVMgpKTR9Y3TZcLh8A4",
  "key8": "3vqfCRXigKE48M2gTjtJD32GhAx8P8AWFNr7yXiPB8Atps47Ye2WJ5XsHXCFnusCJJPsAVnNBChx4jBwL8PKFe6Y",
  "key9": "51M5Ag3ryMPueeG4JPZYuniKaCGkSyaXRw7h3xF68B3EmADe9Hn7UuUsuvfaQiQpXci8wyafM6MiactPjY6B92XS",
  "key10": "23DddZVYekBmhHF1d5JJGSYQ9ZKemw4WR2wvFDEKgc8BcU5BpzYHckDyQnjDChqvFaoZVgYME5K7FGsPSnpzfDW2",
  "key11": "2Pcs58GRPWTtCBHGJrAQJEeQDRD2pbR1orTyB7ScWiop3t5yihYdLMHtAQfzbMZykSeetYbcZDDh11R6fgcddz4b",
  "key12": "26pszAwVgD8NRWgXCxEhd7KeDj9qZxiGFRTB2yqNT4LAGVkX7NhNn8bGD15JPEWszQEpsFbmqUSLxZiD8bVGoFxK",
  "key13": "DwFHoNuvs41FxotWuuCN2KQ6RDDCrEkRbSBapWZrN4yWuWsmNADXfdvwBtAemN9YQMuUcDJrtUv5hmDd8G8erbn",
  "key14": "5rRbtyvfgZuomrW5gmmkmmXrz9Kmp8L7hLtiVjoGG4mycCibb19DfLGLVzcmbjWMqQtJaqXnk6hSzKXxGC3dUWx",
  "key15": "5mMU7AXaVEs1U25FAGmoaVryUV47jwn6ytRgPmfYSE6sxHf8coiyyAfvfe7HvuV9oNn4WuW85UKh5ygF8dJLy3YE",
  "key16": "5Vrmjt4i69gfgzaaUhLHiEvjHZis3wFUhRQ6AiiEny8btRwDAaSYiDdDYxcoUL6pq1n2pp3Wn7u8RY8R8KJk8ZS1",
  "key17": "4mRG5LNhApVcUDbqaadWw1JaX9NUcMGTGKhgfo6Hbk9bD7yhEsuMSeNLCpaNxxi2Lif3d4QNqz2cqbHiVajLxox9",
  "key18": "TQdUt9XbZnFWwrgPeRHyCZPAXLJgYNT6XSLEhPKKFzYuWHj4ifGQMwJXveb6WU48wQtybSbYrYD33oorWYoQxKE",
  "key19": "EjfGDP6KTmM93Ab8fVWVX4LxqZrQ9dKnyAzbVzushS3cAuqqe8FGaagCeWKbGSv3J5CdRjgXzwQdorjowuaiQEh",
  "key20": "2SW5dexNYmU3PywvfXRW8DrCcfqPTdY8TGjj4RjxWGvco3apTSWdqGhS2byYGGAC4ZGmPbW7EQcX5ZprmFaoczmc",
  "key21": "H4BccvFD7zBTPHBZTX7LJV9Fq7P4GBsHx3JmpBxn29qEtkZtqX8kuecc76qnb1TvZJUJ7e15tG7cb5krUX7EZz9",
  "key22": "3FH3gkWGhoYEBGkgBMQtBKBtYTqu5ixFocTava7xbjyfAVwidFgXhiYbe7puAnicxvP2nzxh8V7Z6o6V1nuus4Fe",
  "key23": "2irYEXpcZGLLYaRjFZfHhKa82E4ekN7CUWJSE994E1HEw4AvFPxeZJXhVMayZRunRQi7QNyjk63TjGvXz26tv2G3",
  "key24": "8aeo4qt7GVrcR4955WSYXrN6fobx5HNqspxcLDUMEF2pCZPTzMQZepVyeAs6WW8b2g6azu59izfZX6npQ64Moqe",
  "key25": "3qFvYCGuVm7qCsaWkDdeBc1hqQwRHHCmqBdMQWhkE7DB5RHN1bkCeuQcjSsS62YofVgzJZPaj1F26EnLof4rHE61",
  "key26": "28VzxsmSs1jsSsvVK9xvbvCgfhsP2q2gYhBk3Q8qH69JaLdQfSo7vzfaiDWbDsBJqd59hx7PaAMjhaChtjxwdJ6K",
  "key27": "5DTug792U9XQBbgKeZVCGyZV6TteWaSkJkHXwwJEfZvhHNx7foZ4xnTfKfvcuBif5KEvmH4TnohEzwJoySCe3Ji3",
  "key28": "2zZpapGHhhZKGCh6AmnWYrvf68tN2E6tsAQ2ym5sLqK3dYkr4Pnenr6oLzj4kc5iTVRvotN5UBxFJtdZXWcP1dpc",
  "key29": "2iVtDDmGqvgM3eCmLeCdQWvk87V1NqsTDqRAhqnv7XGuXXcZCEQsEQH4LSuF69HrZnfTkxv1yXsrV2GiQnRumim6",
  "key30": "5zJDtUQaWzmo4KdSwNJQ7Mims2xoY19oaL8r4G2W5RWFK6Cre7dpjCEoMTB1owGHuFuxhB73EXQKeKHJU5Hu4RSM",
  "key31": "jE5yKFzjwZ5NzMV6SwKXTQr6gD6bus7L9TmrsoAT9ZS82hMfcJozKMSZJk7CQ2X5Yt2XNvWZSFQTT2eQ1nxzvbh",
  "key32": "4GUQCggPyMa8ZVRQxbWaEmuPeXjMaHTNLrH82S18N1ZR6LeRS8QUWq7zrj8PoLAJ4DwkAoFrnmaQaG41M8XJ9nF8",
  "key33": "4UnzSUQQdtcTuzJmhDTAnJaM1t7s5Gcchw2P4prME3tSumihAwRkHevhw1ZVe44YrC32WfLSrMLSCUUWdpgFkcqF",
  "key34": "3nkUFNjKmw6wajJvBGJoPcKhH5n6zkGstYSLgraEJhBWMaC1Pu2SQ9cT5ZJmX9Ftbk3tMSqcueCgbgYhBq7ULnGF",
  "key35": "5emdHr2dttsF27ihdhWsLBbJHGxJtfyJ7GyM7WL5y1DwZNV5XmXaxE5dzn6wQf8dcZ4L89b3Q5HdonBE1cUNvokN",
  "key36": "3ncmrqy5BYCWa61UpkxsRBp6Kdi7h8ENXJv8yHdxGbM4MsRK62eXkaeibn98B91xfiLowHUnWTn6o9p2NsgH9kNi",
  "key37": "28Tih1dVyZue1FtHiLBtRd8dwvoDXw5iNvaH7KvDFQPjPBGwsyAm95mEizzcVbsF62YBbYeUq3FukbEHJZBDDFmW",
  "key38": "3ghRoQn4BDihFUs839dts1YVAZz9q7v99cmXhzcFcFNKKYvntdokjh5cQFnbmSquTLb3R8p2Lo3YUTR58dwAUcbc",
  "key39": "mbwJzTayvhesKBDAK25jbfp7YCsPRgKAMaUaxooFTezYMauys2uuuRg8qW7Z9ULiwGyvtYwHyQvPYe5oajNbrUc",
  "key40": "5to7NShS8iTxPrqrbCaTKtHFWJ2gtryrFZdoNPfztGcLbydXvPijGjCVayBySr5rBW2sVVb98vBprSevjtbjcmr",
  "key41": "223JSoYx58KuyG1So16rwvuUcHbCvyuHU6HS3ZBizJGvFV7jQFSRrz2CkjNmehKnCFwKxGiicJTUfhCP5ExJyvVB",
  "key42": "64j7uv1BfELEuXsT7AtvNfPriMznrCkPBNnCeT1sPLBQeM1ZqYTFEx4WhSFpEuM8XHrnor5UJ3w8s8ZzgtSw4Di9",
  "key43": "YojVYqXKQ967dELyeGz7DjstPuAqZasXikAP3VwY9NujLKhKMYmxqcYs67SgzTmpPgyTNjWvBiuViYeX8Cw9UAh",
  "key44": "4dhMS3JDMRuoqY1cc8CQW4wroSZEjDEzu6faXPfTSDib9PsCAM3CJFJotkjpw7k9Bmup7GN2cgPXBzHpMGEsq8o",
  "key45": "3N6fdg2gJMEmfLM2wnWeLxMqyUFHTeceR2sXVN13kRrsQysnKvjeckfC1Ea4atJ7pFMcZc5kQCWk4JbmRGrC2dWs",
  "key46": "5XRS5JkQvNnPEvBkHGn3jQUCGY1rqw8Vfho4rehVFrCeAsSpG82aCKnAkL53jkJ2W9VgqgZb6SSUipKS5qcnRVfX",
  "key47": "3PKKpNTFybECzMuHrem1Rnv11PsJvDmEGqvMToeLuTLUaiA9QoYgRiyF7jjEYt8dDKJgZgPxrxjWtjs1LSgPpTMN"
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
