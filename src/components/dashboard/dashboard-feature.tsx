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
    "4npsHiaFeMkHio8yZjSFXSuXqoTA4TFTTZQA7BDuQwoa5mkYdseP7b43WrL5tB9k4wu1jp9KcpqXSaiJGADCqVtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGaNQDbFK42BzJGPLiWKMkzm1NBUxauN1BGkBchurA6FYmkAv7ZLMLtpYRbJh9d2rToHTXQVc9cUArYN8JTmArR",
  "key1": "Sr4CLaRzN2WWVfGLjbadD2vU6KvN5qLwoZPvHdeiSL4NE2by5cojvGdBvqQSzw1bFMmN6c5W5b2hgX7DoqFQZVn",
  "key2": "5p4m2NYGYZsPjxCA7ivNKHgUnD7kJwepvh9brTnFge6wd3iwwXvvTd6X3uxwFij1QgVYGw5LPSWyfXdT4riRdjBQ",
  "key3": "4LyXxWkoJcPqn2rA331ud8SZ1scZnxo9CuvX7gZEZfAYmZreRMrVBnfNwhYkGbCrh7wbGKnQ1tV7emYxg3VvYUuZ",
  "key4": "5eLiszoRRirMNMpqmXeAPo9U7HWcuiBWEtdcVvm7UbJSANY48Wz7RCpNH3aYvkZYiBXBUWAdMaFCSaA2gyFJHUhj",
  "key5": "2AuMoUTrJvS7vJpQumMP6tFpasP35HmvxjNSJn7kHikZkBUoM2aHRQJ24kbMeQgL7uJU9PiqSM9uyi5xLBdDCvhs",
  "key6": "tKfWHw2ovoRNtzrGKdTzYYSkn78hAkvr7a47k3uZiyppbc8sRj7XBLU1gMGuLiFyASBcP74CycLx1JHAfkdBRXv",
  "key7": "5YhA8xJ9QNpmqVa4A5WR1nutxMsuJ4d9FmpYE1YECohwW5FFwJdoZbswmfWYA41VA7oEcVNKqs6jLP8wiRu6PEBn",
  "key8": "5EDhNKvP3pf1qPWGuJygD4ht2qNQHYKKTTejP1uNn47etb9H7uMzEwBNdA9Q7ppYzR2ewWyZuMEELJ2ccBQKjLmj",
  "key9": "iJhHJ8oTehsSb7Cygg413LBtHMZQP6pDMhw3xpXFeDzRZZBBgzRBBUUX1V5M6KGV8wCh13tXDvdEUdwmJL6SZoF",
  "key10": "QnvJJCXvPkvs8ALv4YZyLqHpVXT3nRewqMBcsyZ7bkPjikGCUxjc56DaWBqZHt7fiFSjqbhpZm6WLJWRDgPvh3i",
  "key11": "2gk8H8T8sKzzHda7m9uJoy69F3mSVVkrbVKX4R7T2MLJDapSJa7aRd3AMUS1YJwZpxR7UGtmD3mBeYpc2LCVe6DQ",
  "key12": "2jntZ4gmQdPPaLvy4GBTfp59iNX7MmX35Zrik4q3tvNHHCGpdhQM5uKRWScXAjRcKUYHHpKLTQbBzSyyHBz3J7Zn",
  "key13": "2a3suBjikH7NXSisUh7YL1VavFjWzaRuAVcVpvy9ZRZZoZFBwue5v48ebfZe2Wzay4LPYpTce6CH73WbCGJj5DuA",
  "key14": "2gMt5wBpJ3fR7s5Y9TfChNEhUNZLwSewxJYQ7gwG7pCpDcir5TKi39QJgYvJski3PmWhjgc9n6YGUnavx3nienca",
  "key15": "2R4mnAi3MrRCmtrNZ4MeFMN3riBo3g8HjR46rtwimFVzNu2f88UHXobjcwZ3dtVHVrCBNT5xfBZnS6ETb9fTr7RP",
  "key16": "3ehFJELtzArWNCcycTTBNrWCiy9fQUQjHah5gnmJipaVDGHyD2nNCNW3VAebLKzn2BDFUX8GoNX9qcooA7i2nnf2",
  "key17": "5fuNhsw72ks3Cyv4D4joc6F821PUN6ZD3Sy3mz52LLetyizf5X2vquTDYv8PQAJg67yPbVvGVJ46VjvPFuXki6tW",
  "key18": "3iVEcD1Jmhd8BxFN4waAvLwHH792a3Ythekh4sWhSdZ4sYoEXKQ5jrjVPquo21CvqtVj4cQyduF8B5FVYZbP6jBM",
  "key19": "3Jgeq1gDY7sgQJW1igNJ517Grks7iFP3ikkvt8doUabgNvoRLF9Dvh5XggVPMQezBeJk6suYuMZmMtMtTMaggiwD",
  "key20": "2tb1oXq4WGDAEnvsm1BLa9V65fwwHHwyUZRCaAogYvyF1hdsKACTRhs8DZZfUHGHhX3CixLC69LNP7xEMak1HoAL",
  "key21": "2bqabUJB9nPqjXLAjrtqs9ZoRd6gcfrYbnvWpgV7NgBxhGrQrPjPvEMwxbevWw8THE9UF8x3MAydzDQ42MWUqK7i",
  "key22": "4U5Vpyu5oo18QU1XtUygTfTcKWMNKLkCS9sTN4yi3RoRGGqTHCZrXze2MBGapeZHri146XJUtNf25C2tbC9Se9yT",
  "key23": "zhrgZqTrgibU7cwKgXRA8eBfQvfESMSTDUegswXUrkBysCbf9UGacVV3VGp6kJ4j76u8HyvotkSRwH8yAcKKtj9",
  "key24": "jJB29nZuFxLi6ibPLJHuBRSnkttjV3yDULxBhE4mFyW9317q8t6BoukRYhwCd7x3NvsdF4TNj5syEfoCmnGNwA2",
  "key25": "TK9CnyoCPQmtVjB5qsqP9t1hZ34JUeRnS9WDRFxtM8vJbivMUkDme2ccVXAVTRydULU5tndAXpY8X2sDSmHQxwK",
  "key26": "5Hdoa6ade98BiH4yYCkAR1CBsuWNZ5Vbapx3CshgSDgDS47XwWNL5bfaMrSuXk6ut37sg2MAqqNW2TMXu5LTw4mu",
  "key27": "a78kJyqspedXHWbFwSV7AzNYwkuqjqzm4mkRnHytt99fh4QxGLPMsHpE84R4CTCNcgWfysmLDBSKBEVSDmyFuNy",
  "key28": "43U24dG3iN468WVpTR8cnnn52tCunEUHo9ak3fdh6EiwkyHb7gQHBqtgvD1EsKavnncVAg35yCqofAf4dr2KGWK4",
  "key29": "z2ZmyfLRCXqHCdQPXpYYNEx19EsD15JnWWW1ZuXb1zCUJkiTf8JKi2EQHALtxvQ9umgpBi9UkmaWHnErMXxN7Uk",
  "key30": "57Z8KVQUzTGozkEmvAC2Y1ztpQunCXCGBikrw2Zu5mN6vVwGaHnkrfBtKNUL44XWQof93t2PQRtRqyDUAuM5aGVM",
  "key31": "8WCsxQaSwzFzmQQjKDPvCb41phWXiwogz1GmVuUDL2BuurDuS27tNsyE72xMxpLJ4VM4WfAex4GgjTyM8CJjMe5",
  "key32": "rMery6Z4Mtnyim69TKY6yKdwJ8Hyfh281Ba9LuZc32q51YDXyBqG36vRPfGtsLaCVwj58B7vzquuehs8xjtDPew",
  "key33": "4R9SRaoFAKNCKcPTmwP59Pr7JyJNm8gbbcPQt2CugCUMjdA4iAx6AT8DhpCBDP5Ww4wpJUpu7fVLGLMNUyZh5o7k",
  "key34": "5QChZmhR4euksE6D52inG9UVFVt717YMzNTN5GM7BuwjyuH68EK2Ex5r24mVvwptjRGySxtQZvhvcwoUopPbfFPX",
  "key35": "4m8K87LUemz1puigUtYLS1cULdPuAWVVG99pF4C62ZuVF8eed1UVdJ8FMNkJzUXi8ayQRYjwiKN534B7oBbGRN88",
  "key36": "2a9qdTLnDdEeZuvnvLFzG7AafTzrngq8fws7mNabT3TKwDxbisBiqJs1Vts9AEn4bWSctfKhXFhQH5Y9Cw5Bq9dj",
  "key37": "4LU79gs5we9XhRtGX9XyJWxVrEE2FU4Nx7awYuX2HyEwGgtBPRQzKJDf1Ax7zvpkeSavf5JJ7CPypQodRKKxViCC",
  "key38": "3U5hmzrZAviTtbuqSFStwxBaozH25NqSzoHUbgCCTMudb2egvgsCBi4msRTiyGncKE5GK9NwL6rkZ95vFFHfLJjL",
  "key39": "zodYWNLwfmmcdcwrVdmwMsWTS6kC3G3cdDGZKMv5MiSzHem7q5nnh7AUN9CBRHi2fyhQwGJksp8oCjCRRKURvRd",
  "key40": "2rJY13fMRqt3wbVFFnYuXSpF5pJw7P6Vn62QGAmB2NqXBfcGfJ9QW9C5EobBWYacakC2gvKG8zNU89LHmsLyv9SM",
  "key41": "4w6bANqLUcmgNDpf9AFSYJ5GKCuTodBigHkBRbjEqXCkxydvmZaBukvhSdiQjrpnn8NuCkzkokdvRfUNNqpMSyKg",
  "key42": "5qwdgvFHYojDSYDB7V2RCgHPejeU6Un3Mvm74LtWHC5JjFMfaAJYbkfm5Yo7drVm1AVPzMRJ3Q5HMfKVWknAKZEp"
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
