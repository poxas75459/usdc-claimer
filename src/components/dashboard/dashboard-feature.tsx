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
    "57LzbWdj2kkhhWA7fWbqsuWBHtkLsGByXCYsbUpEqJvD1EppgPjKyZYvcWKDyLahekwnGXGXUtkFMNBQkbbh45UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pq24A3zYrBBnpRk92YTrRyS8Z2X89TD23FuVQNNbhGLTLGpKdFdHfQW36Hm27CsEAaZieYbLqQtonYRWjNQHzrJ",
  "key1": "7kFjXgwH7zkK9A8mBmhK31fd9K5ExE81V47V2vCxFHSjrWPmX8XQHpUwuWFGaYaoQ5dXkdbz7CWfqYgmTJS8m45",
  "key2": "2TnRBYVHzEANcNQLzWwFshECCEfwcmVpsfTTh3tGLXK46JM42wQmg1VLd8HCijXAb5u9aN7NUJTrfeYLd2JuYqYG",
  "key3": "3aNpPWZgwG76aB2ArJ5rHozQRpjt5dLcdGmdF7pXojdto7cTpHsRmTf1ALpRX1jrH7yMQpZkVV7eNRcbYm6V3qmf",
  "key4": "Cp4zGwGiVFDcT5NSWRZCzt5oKAjbVMjA52qN981SupGTk5p4Sr7Z8ekLhSCeAefVXcsn3WwwjUngFSBdKp2RR14",
  "key5": "26w7krz31R36YVmNctSH1PgERv9irptA4NHvweJTydYtZ3kb3fMzhYde8XCdYQ4LSN1RHtHWEXsca86cXaMSWQnm",
  "key6": "2ZAH1eu784Z35PThP99gh5eWRQtrkSkMpMTLzrtqVwQVpW7whKWXhGtT2V7hZkNtevM6sDosjJioAJEQr2Vqex88",
  "key7": "4vMrLtx9wnHGvLCVsY6NbpSRjiUNZyJR4jtX1gzk4rqic6hnaGy6K8FY9oir7Co3iVbtKQFqvZSt3S3MMRMcmkZU",
  "key8": "9B9DQYGaF9S9cLEzbUmsLzXaVY8uCdNZg9EYoJjLSPqyJKb8hhwVk7UuuVRqALZVPgXo53fq14ruPXxVDeHrWft",
  "key9": "2Kka1xa8t5cSP1Lo9VkHUMvGxPrz24igJqrgypnKBZVUyZvk3zVbwrNrHW7hWSbpoYrKhs7KuE6ksjzE4LjemtJD",
  "key10": "dAmtGEVFvRToEMstNqiPe55meyYhQZYYsaydb2JK7MtoiiGwaB79LXQ77DxoCqfTzaoCLVQujPJf23teNnAwNYn",
  "key11": "3sKd1rykUiTyznUikcjv17XqLzSW2ichE4t96fadBrUFFqWgjQKTYcPSY1V9mnyhFksgqFp12ZkZEDt3HXYwpGya",
  "key12": "2BQUZNux24HzRXkEkM8h77rHAwVkwivyW7c7hzbB2HrHpmRkqbQw8iqGU8ErzsWZHmXfgDcY5iNJpyGrhmt3WJv3",
  "key13": "5mixFxkoXjJiJDTkXKbwwCePbYi6PqFEfPkcayF5xTbHJc2E2g2J1koez7t3AJrKeTyvoX1WDtq1okEmkLSx5VBG",
  "key14": "4dmHCQjP1qHbCHQGE6PpoQPjpo9HbYCSbeHa8V9moEs2aKXnQdBM7iTKFdsXgYztsEqUUczNPcUs6Nni9oigyHRZ",
  "key15": "3Dfjad9mm8YwY2jYT7SKzqPnykkXkrSgDaUPc7TqtUV9q8ubBMfGGV447RX1ruKx1SxpZ5a2tmycpyFPUHaceGvU",
  "key16": "66sv2CKfxbuQCZdyDpYRccq7wqgN12NzRVjBH8rMHWhKdwwMfagqTH1J3d8g56bBSJ8nJMkANaLvMZFzsa7mf71B",
  "key17": "58vwFY6ExWjHveuapqWGNS6eN9g5WVCGcdMwhXyudxn4QYGZymR1G5AFqoDSSLMyd9KLSS6jKNQHKeaJ635TW7yq",
  "key18": "3uST99wa3Cmp2EU5ddYV3kzwxFwgAdQcVqykQJK6z5MMQWi6pEqBQ7F3iaEoNb6QqnhtwH3J8ZQkexfCru1HK6Kc",
  "key19": "2wuiAGfZQriW1so2X2zSAR1omycYtUMPayTmVpKUEipi9D3mPjLATEnVLYWfN3MLUQ33NqWKkoHPfA1h5XP7pvhQ",
  "key20": "3CUULt1rLYTANE2sswCR7YE7JE3RCXnZjGFRqy842jbWis7XchhcGa1X5aExFCGTEi3Mbhw2T69p8rLeSwPAM7Gh",
  "key21": "HewQbyX5vn4o3R67mpjpH6KeFTdxS3xX3JCnmN4sTc6vgh9ypUheWQhGKpGGTofS2TF3SYx8DdKmXp54w5pbgHQ",
  "key22": "5fhovzRFWwHwUzkGjdSKZnqzh6EcjP7DqbSxSoHVeNNEttgg5P9fazdnDzKwjioZhVBB9QqWVMpE9YkdLe4go5GZ",
  "key23": "2oCUU52pmxMNkFdLS3Jxgon9W5N9H73CKsDTPUEDGHUytWAtFRnqCx3Kxgy34jXzGT7Us5eBNduQeayU5jvzdQMH",
  "key24": "3qzn8116dFV49xYqd8dbMfm81CMEVEthgNwLoiirNiAnQAsuwQDCU4rxV3xchZUHxxA9Q7qNsH9mW7btBN935kZW",
  "key25": "3s9C2dMB6brLTFYo4xxomQK1qVbB8avTMTH2GYYRkCm5FiKTp1bbFiZxgvvWAiWkA6yr7mxh5rxP8CzFA3AmtGbs",
  "key26": "5fbTkyiw7R7wkbzgpswoay2nJzSk8m5N5sZRRLje4Ja4cbgAK9TyXpfDJcerUEsMR8ZMUoXAVAoKPLfGqvw2iNNV",
  "key27": "5NyxbMGYaLGn9jH6sxep9do2WQQv81PTm5dsfyveZMBzZESKapKVxaq4zThCgz5GnT9uNSTE3xUuYQvDAdNBSoA",
  "key28": "5NK1RutAv6YuQXX1PTrB8fwKgyobx9XCvuXGxerYEsQd6of5YAr8ZH3AjgVF27XjrEdfUrTndyHxTpfB6KswmGB2",
  "key29": "38XjmT7nXRnu9T9XbfkmudW14NR1eWaudry9T66KsHfygR1SHCFZugMr6SSiUMeN3fxeU772ifeqqkLRE6JLAk8p",
  "key30": "orrz1dKPC4Lti8vKrTvsa5HtYXkdyycUYrPEKLohJKdPmQGXxUBi8JbzxfNqgT6v2VTLfA9hAHybj7gF836F9op",
  "key31": "2L5WLMkthj2FsfkEJ1U87bLASbD7fddcSUV7fa7aPfCNFUCx8mHfAvEhSy31zTJqiLURcERvkuPM14runi4ANuyv",
  "key32": "5ahL1qXaAhn2ivEEaCsJXAUmMupexUNiPepGqEXk1LK6wEQK5FRTmHX3FkCuNryhvNvrNE1ojvkjwABMuDU3vjAD",
  "key33": "3r236pDv3Y1Estc8uudZ3uWG6yuZB6be6tyPwh1oF4Lu8BnyqWXrPZXypiFV5DtvuCHddY1kg6uXuKXvCKx7uVKk",
  "key34": "2x2o3vZdTshvqdY25WXB2JR4QWp5LiHzpJEbEL7PSuUk1kNDgzivGdryP7TL23YB7kxU32FCvVtZX2t4p4WDEmNY",
  "key35": "3x5DBg5ozf88ZDmkhhisPpCmL6Km2Egn6PGGrRoyDyMUrTmsoEM2213jhRNyQMafxoT7b4HJ5RGM2PcMNEyYkA2r",
  "key36": "5jeGwMBAd4EVRTdAJzfoUEnSFXGTgPE19qJoQwzxpvHczMjmunT6y1io3jXrcHRVbeVarqh7SJc4TEgCzfrBwt7w",
  "key37": "5wsMYTDgmFgVumwVuvqXvWS5dFrQjC3pe3W1tjdh98MBhQ6JD6BtGFvKpv8G8b2mfv2CmsqYUrFmA8KNe9Ga4pEi",
  "key38": "2YqH7u5TJrELEe8SETJpd837DeoFG7QdXRsSNuw4EUTKhUE3wVDoSjuTuigY7cYi3eYxaaH6RpFhyerqAfoLqmcU",
  "key39": "35JC4aSRUG9GBLuUPdK5AttojkXt1WT3N67xazJdznQwCzaZGFyqKYPzScjYxdbAcZv7JXNYPS7ibuBFj9UwdcBw"
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
