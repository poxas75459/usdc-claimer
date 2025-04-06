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
    "4oHcGkJmhtKmU8EJay7Kjhm9d7Knheqvju5sLF1GvsqpedQgx542rcJ3zRzDDSPuXAhEcxpF1e5ZAMvuhL19zqCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAof8sjdLUFJQhghSx9qTKNV8u1ysfRVJZnxRyUrpZB54KYJxPm7D4f1Y43aUqDTrJiivvm7AcRx86Jw5EWktSm",
  "key1": "MLhysZoeM1UT6N7MKtzaKhSRP7TqJh9L1vcsiLapVxjTD9y52TnpFyvQvy2mNnuiS7TKiuDHFNFFKreesczB3be",
  "key2": "4YnQA5iVxDDoBsMc4mvuURMWynag28Havs5CMM4LobN9PwW6wtzZ8RtSTnuZgqFjE9bgFrN9353esJzKgNcbjL8i",
  "key3": "3AkaZu9ofb6M359YNeHjg6txFBzHkch6fP7m5r34dUtsWNk6FdL7QUXhgB2hN8wnnNT6teH6QRq3whMWJmupinyQ",
  "key4": "3bPhai2mHXVfKF6gRvgfRNq6ef9ngd4eGs4nqYo7rF9hETU1AEE9Tvj7HRVkhVVAT2MLWvmJPfwyE35BVVbBzhWi",
  "key5": "T9jivzZZkDsF8r5nyQSh8VPbvC8UReS9rVG24K7HnV8uTb3xQmNAwUHrMEa7uo6KLqPHFMnRLiDFJeXqZ81jkHy",
  "key6": "wc2mf1CH4wAiFaHvZWUc41EgaAnvB7jKJNXvuGsDQniUFHnJX9VXSTuaKtSb3dToTd9etGCwmYMPkhKe8tnw7JQ",
  "key7": "3eYhL6E2jZvPUiacWjVQvfVptPPwMDbu5SduPFkw9mQyHtUWLLTqA9cfTQQuhMNcexHS8nFQrQdKykbodKLdk4fa",
  "key8": "4HkPfbhG4LEtZe6bFRAWFoDuSWD5HBJxthrrPQzpbWA1DyaMhp3fFUANWn7oVHHmwvYSHmyfhoFMTZz9gSBBwzuB",
  "key9": "5R7LxyZ8hdEYYCtxgZNdyhG7H6cmepPtVNwdFE1w9xTF66GuyLUmjbBn9j59ab1QezZaMeVGvNDFoVmgoTqJyN9c",
  "key10": "4RrCozzmsQszfqmevK6oj7463jxxWqL9qfkMM17TqxQM94iePNQ4MhsaCUwed94ujtMXTUCqACRRVKHJTyferzxV",
  "key11": "22LswyCBxWFXM5DPiMMgu8h7bYPK5zAJswCeQfdbMfSN51a92Y6e92JCApMQpGuDGBrPfJZdptdUY1BSsj547r4W",
  "key12": "3WqQSdgfG4h2dnMP2DTuDSmBpMQARTarhAhsaaHBCXRG6chiSCKMGBwQAyePpEqBNTxWi1ujJn4nUJjZTNmyCKMF",
  "key13": "4ESuotDsswPwPnV7hzN4WBEhbJMmLMDTLmbmijWQptyqoQUh6F5Hos2CXDpobxg7unnEPAigJzhttpS5zXYxsA4F",
  "key14": "33joSt5pj2b7dFn3TCoqzihmWW1CS23GfdJgKJ52voHb66BiyDUq3uav6zAB14NRTEfQXSQz3BCScRb1DrtfCU6W",
  "key15": "3S2QjTfTKHftJWyn8azTqcjCEb2tHcJQT2GJWPogmknmgszkN4Gw3bK55hqMCJhzKnpgYHcdHhuZZmtVJTfNnUjC",
  "key16": "4Tj1kfA8kDHSgyXRVEQtq5LbWhJMQp9srfS4CAZ9qqKXveSphdYdHtKHP3yy8aARsfosFsrQBhyRc59ewS5SNpo4",
  "key17": "2UcuejKbfNyF454Q2aPqP7zTRQtksbSsghhhKo4iW1mq9b2BJQzoGpKoCzvcjNRW1if43AJWqKfJGVb8hVZ5auaV",
  "key18": "3nxRqnpzAK5PwA9YbVqiQ3LFoWbLTCQJ6aUX8HG3Lg6z2Nvv5jCqwMfce48VbQV1V9Nb3bqmwo1bWCj8UPhVmGrq",
  "key19": "5xut98hLpMoEjKA8sqFnhqXcyohg9g4zi1q3apWKs9tfAH39qXJ5oPNH9AfR6okJQkPYzrWy4dJ4mL1VYbJL8Tfd",
  "key20": "2ezDxrUTtQyWeTJj3osBL9wtT8HiUW7YPVcZeCKMwEAoa8HKsLDHwtWQbe6jHSXN6Kf8NsgtrJddBS38vJRqAfgE",
  "key21": "39C5QcHtHiP4SK66RovPG9ER8NASbJJJPu5ELXRYbqER6Rw9tHHrnBuYWEz79ngZn11uoG8MZDsQbDuSk6Yfn85F",
  "key22": "4R4E4YjaLgfJUzq1Fo12aTYHnXEQpJh338Q7neJbGGhkgbT1ZqhEajT5BX4mx3SuofGdyJfLJrqDTo95snvmcCKd",
  "key23": "5vMrLdWmidBZT2CpxSsRE38EL61ciVrpC1m7hpjJUtFkyiC55siAjQK8iEkY2ZbA6QmXfQpzip4qseipNF2xeLxH",
  "key24": "3A46hGwkFFrhVnGDhVsqvNXMmyDQk9iMMd1x7y15qAx13RbFnwTPrDJt6by648eHSRBCBCimBzJgVJFF5EKHnPUz",
  "key25": "126nmUyXc3TqVERRtp3j3xjUFmipDzL53DyDurUrbddbYfYmkwind5qZUBLJK35eznuLYDVLaNTCAYht6cm2RfAe",
  "key26": "2pnJDNRZ8F8ChLCj1ibnfTHwjx4iZtZaTgiS997PYEsAaZPagU4pJ1x7RKWHJFpfFcgJTbDRu1TZi971KqU3wZxV",
  "key27": "3j9AEdxryrD4EMYQ3ANBvTuqrmtkq22mzf52mdCAtH4zukY7wBaNvm6D9gb8GgRDKC2CudoevETwe5eDHGttmgWW",
  "key28": "8UNczpUhtVC8vvG7uHsAz8hmabTezNiAGgo5REGCBUESnJ5daUdxdbSb1bTmDZKLqbD6fPf7ti2du8s46P9ydCV",
  "key29": "yAPCw8GAKziD4EW3MEJNHa9G5HhY6HbKihekCG2crtS9cMLQuUsVP7Wsoxrgbs9Y52Um13DfxhvsYpuczardvNE",
  "key30": "2jHfsoLBmamH3vhP45Ske5WA9yfTyaaPV5eztb5wNqnegJxVMjTahTiHiob5HamzThGw3ifViaewEZn1UxhENxBm",
  "key31": "2mD4Cd6Er2FJ1aLM9ADgPQDhv6gbJzgGkipp8HgQRtkMNj3gBVBTDiQAVBC8szbh41HnhAxNgUHj24mCCSo9Ycgg",
  "key32": "5RczdDW2qMNZPETxLTX3cvgr9F9yq2a7Baq1HdG2x9neqXABAZTpgqScVtcwXwXyJrXyd3vJA4J5V6E6J8EYzoB6",
  "key33": "5A4RbFNLkgeCXj5dRdHaG8ASMY1XkUzQmcTyhcVZXnTgqfcgdSXpPWmF3PAh9q5siu2UgUp4LcW27LN6zyiber6y",
  "key34": "4j6wt2jNUM1tsvGzifzeuEoQHxp98UhrmJN5QSnWmZeL5PQd8s3gKMvNctJx3BpWWxh2vDnW1r4sXK2JmoNJjimw",
  "key35": "2Eq3XzSP8zaTn4aXXGZahZbaJp8HLvHkYvEKEFQpzd1jbCSx4bzdCVcZUkjnzXEBfdnV9sAKBZ7F8UtyXDRbATC5",
  "key36": "oFwPPNgwyt6vs7CySYErhf2voFgskjUwtmL6VQExbpty7SjgWURDVCbtLT5mZLh7FFsztQVm3FYbERYnhf4MNjS",
  "key37": "4XyEB85HaNfFUiwwirP57dS9gk1MW3XEsr9FThpfje4fFBatEoCY4fMtjaL4GAxEAorTw5d6Kpj2x8cAMAmzVf4",
  "key38": "2dKoGCHvFuVMJyM31JvjZzvXHLzq8Ww499aTSTpPfgDVPCTm5neo2UrwjBPrRpFQ2G67rSsj2X2zisq2vR61KfDZ",
  "key39": "2LPXjVdrw34F9aun6WpkBkfW7oPEnu9xiFJgVYRX3WntwQ52PT7yQE5UJoSABPU2Y2HXU9p93CbtqonKvyD7TNGH",
  "key40": "3aq7p2BoNxEQBUWHyGgowui9rZpLEDcXBBTyzmUUhioayQLwGg9tfud9PhYsAnoZLvqMYndBLmwq7dPCbZbUbnm5",
  "key41": "cVVGyESWUvnmisiGwFnVT89ks1tTcBhmV5NbQvwpyeEzxvRJiTy6CedvRgaE7E5MsmYSwGFY6txCk2XVVjq6oRE",
  "key42": "uUPyiU2YpTbQDH8ZjXkMFTZ9mkyZ4YFc4SyYjvE956vR8EXrjMqHMzrEH8wS3yzowEcjBhYSzQ4HLvcc4KoyksQ",
  "key43": "66W5B2Tjdvo7ATmVgdWqvhH7CZFYeR2bMjx8XXpFnF61juR2GPBVQRcHjeHaEd4kZQZNoU5GwURfmETgZSbdcyyh",
  "key44": "5Fd6wR1FbL3FhrqessRwBLYDvvQyRP8ECVnQuWfsLzhREN413E2nyKumEGgxGpdkTGa44ZFjBqLQfT8jzKhNxcDa"
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
