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
    "5igftyJhkSfquXqjAKxrZx2gZgwfXN3mXFpKynncbYFoFAq1FH7J63qJRGunVkTaiKKwybmQonRAgYeqwEukrZCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qr75MNTWshWbThfJo8DcKR336hQBkZSTMU4RzxUMjm8LbLxJghocGERMkvQmikVNauzR9wipcNHfA9AhWCfYcZN",
  "key1": "5mRbfb1nB37L4sHjwWdm71KMDLs2ezVup6mZHAUmM8vUpXxU1Bc2PoXKpRUS2z7GhMXwjbQsVPhaG81HmyfRnbUo",
  "key2": "2ZZLA25sXrMHQ8gb3Ugh62r1d7poFcURV2xVgsnsjQFbKHwXKzrynvkTdhGsK3AbxG7qt1oMjUZSWMLLMJxW7Q32",
  "key3": "5tZXnk56WxX9sDSLrc5agskNBd8cY2EWXvSewmjtkKP8pp2emdFMDeRtEVknK9H67JyDZD4cckoDkpqbhsdWaaVo",
  "key4": "2Y3TjmRujTU4FDW6FgVz8aQCmXBaV6AYEgkRwv5gnCvHdaGEZA6ozKNEYvvfeTKGFJwD3iVj8idjHeVU33YaZbk9",
  "key5": "4gsTLf7kxybbtNJgvfhDxDnDV4YRoH1Y2Dxth2NdE5PP53MaPSyw7Ee9oh5pq3uTRhPiSNGdSgLTFUDxr85gEjGv",
  "key6": "3KhZYR1BECZr7N4qHVQ4BZsiBfmmBi2EebLDUdovp7dLxqT1HfGPXbpW5BoEtKXJhenagPfc3wxPhS1nMN5iFmB6",
  "key7": "2geka1Q4hWPrhRDbvuwALMVrCXZis7m51ZTTvnFHsDamQzTfz2UqvrS6AmoU8bsw9Jf9S4s2k7Bz13TzvckXtYdq",
  "key8": "2epGo2uDmr2eFuSE8MP3QJWcKjywfX8q8GcWi1B79dujqQ65UiyfY6sUrY4LG3A7pKT2T19p6MbKsxfSaaKFTq3z",
  "key9": "22GPH88FAsEKAFUUvMzctzXaxMozozQZZV6YSDLGGTnx99SVS2FT1kBtyNuXqNUtPZsdwUbyzuWWHNxEnH5qoSXE",
  "key10": "3NpBQzL7FUjdUeHWyDf4jBrGw8xkHotHWXza2oKSc7z3GhNE2LW7LDPtbVEax6NTmMxzfqn73wb9WJxxMxAAfs8v",
  "key11": "3y5uVcmsdsUeEG9zDCDg24Zmu91x4XRzD3Y8E3sDeWCsX4UH7JsV2ke9gAbgbSawC8wLXDyHTjrFaQdKSaQMAEgR",
  "key12": "5cAN6eTTYHmtLwXA88StKmkntgqaHQAtPdUUVv5o2sS1eC4ZfEQtvNmsbVP9z9yyQc22CbRACyiWS1QwKRNqHChM",
  "key13": "5opTEHEkxUNg6nr9uWhmvV6gP9koYdCmfYese3UH8wTkQNZ3AFintqcn3iNBcorvNR69j2fStm98v7L4PwW5NXhC",
  "key14": "3UywvEMnCX2K15fYuHVs7xUXLLkTTNmDpNoP9UzKyWc8v7H4unpQJLgzaCQcPMQeiKtx6GMExswJDXeY8MTDjQPr",
  "key15": "34Ph42PekjVfhzV1MEHaaBjz2Pz7zEnbCjpzAMwkdeBK5DYacBrQFkhC3rsRt42CucYxAbFWWBQ5x29TpR5y1ujA",
  "key16": "3LMohvANQfbvQW29eVA88huUD4ups1QffnFhMCTnqvJbfRnYHbgio4x1FCY9XvzLsA6APm68qjYET6QvsFK7duu4",
  "key17": "3s8EHUq35sW7jHxW6eBDf7vgdReMTLGWZnPbZeibbCcHikYYTCEZJX4qK1JAF1xR9cmYRTXffS7ci4RYZAgnfeLE",
  "key18": "2cGaw99W5YnKd9QuwyBeUVf64aTHPDDr4ZFQbK3zYst6zBP2X2ei8g5VctnoQm9DkwWuJmCiSscRnwo4hr7c9JD3",
  "key19": "24xZ4H3CsDw9fnrrooY9fc9Hy9EfY6sHRAZpeJ2RPACcVh6DEmja7psCAbfbisKG1i3EZzkEXc21WfJJLy7YoAzu",
  "key20": "4sBHHPTzKQU434PprBHTm8LikkrGyXw7pQCQzFM7YWTpGG8PzG1gztSVrn1Qacf64Y1QKDkogKrcVUpVVbbDpxQ4",
  "key21": "zxAaM4S6YrvBxMeF64D725f4Zn4JFnRzrLX9XocnEsrtAmp3w7jUjkTicrRA2XGKEnpdqmUrKwjFWDngwuiqYCR",
  "key22": "2daofbT8TwErSbEFUYRDMEM4JsUtNpENWiyYoez9m6SvAsdqY8qLVb58yN1dGof1ezk4Drbz1NzxxXgeqaE7wUqP",
  "key23": "5NF9Yd33wtHUnzyWGvfFridvPAuXBgU3dHgYJTHJUTTjhQz4FfCfYJWKeGngBBLVLaUdKZhPNQfBDCkuWcXbeeDV",
  "key24": "5LHNuyLmFRDrwNh3Dkd1TxR1TuEx6LVbkwmh1Vn7giT9UcqvEc8SZaJwWcA455zQEhoMMuhXfJ3nJi6vhbwwoyJ4",
  "key25": "4YN5rrgpWwHxuESE437Yyk3kEtV72LpiqW5AKfKXKefqicwaz8j3bx9Km63gizt45a3GpdM3BdVP8bqDWg2armAA",
  "key26": "3P6CykR5YFimBrnQGbqoYqnWVRJeD4GMhF6gvEHHbFx7fth6YNL9NnTZWeMTZxToYEzCNbFxQktxPz7CWxfQmQtp",
  "key27": "2ErAteiDhnsBQT6Vzb5cjNTLcYz6GSEzV4y3sB6CFthhD2DbvxRagT38gopVNnrxzSWVAEZETEsksvSGE5Qp3ewQ",
  "key28": "5rC8GBvy42u4tj8D1sRAaJJv9WbhiDZPqrEJCjPQHVEY6hM85fcbcP4QGNraFkoWLE3gLHv2M5Aix8S6FfnNLfpc",
  "key29": "3nRVxtPUkY1HJCZA9e7Aya9C7qKtFY1ia1ETmiEcJgXrTm3eBTBnpJTj65vJ3G6nUpVq7aJwtndV4tTQUkWEorfT",
  "key30": "378njvbFJonzzprp9HdLArgEJEmF5k94aev5ZieZ66dWey4LsbmXEHnVTwXEWGFbGcdR1zRw4tqqh1Y9kWVF7d5j",
  "key31": "VsDb3FnSS5QcSbHoKyxUeesfdRgbM2RYf5xzYDxLrmAi9AsKfxfcfGgavhxwf7eerh3CsKgyvZ6ufkGLxRVrAYJ",
  "key32": "5P9AzcJZmoS1SLsQpjoDGdqjzxKhzjjEbFx4228aKkNZKY5iJxkzuGEBnjAwaBnsQpQJC3JwFmgC6hgkKDpmZxpA",
  "key33": "4Tr4NWmrrGNf67gguaPsdd3ScuWuH25NGpQwxGwYvTXJF2mPf9rEdqNLMi6WThVfi1zeWx2FtAx1bLCzjCbf836S",
  "key34": "5FfgkC9NCSV18diAbbUv7JW6iRRFbESQ7Jvjddma8k5NKJUjUV3V1MhXZh7z4unR9Ui87zpWzzzchZ3Wh4cT9YQ2"
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
