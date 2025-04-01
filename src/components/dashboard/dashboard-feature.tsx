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
    "4fV1ooumSFcKrAjR8msUWaz8DMonkJ7KnW7zADth3V7NNR8Gm1YrzUtnp7o8JVrvtKvWHZ6gWZRmaa8bJeux7yiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49FZfSMWCKdCTWacKhdcC7DsnFPyGTLRraSmNHnAVrhh3D7PuK867gy5KQJncr2RHX76a5p5JH2ZQzbVxmqHLdyx",
  "key1": "4s8ovYX5VTPEVxHmAWs7ETVptpzR46RT3ZJLqm1DXt44Piae5qx9Rdet4Nk98brgBxzDrYtU1YZfrRfxT4WtqAA7",
  "key2": "55H4kvpSPDWfhUnTLHxT5mC4tAxJSya7rGvfALAXrJpNnyfvV9LNo7rhTXsfoa8Kh3EUp938XtPfFFumUL4hZRqw",
  "key3": "2H91XcSy5om9vKRD8AyYxEc77pKrGpoFmKghPdoUxxau73WyqVf2FfdDP7wYZVYZj87p3VRj1RVj9DwHqZJs8JW3",
  "key4": "5eovoK9dXB2aGPiW5nzJpjp93jzi5fEncvYtxXUNQpWHHwPDprVC58wEmiHUvPEXcgFfjJtZuoXTbDdj8gLbW1m1",
  "key5": "64dwcjrz7bQQS2V2DVeQu3pDu8tEoFbyEA9ZTRFXHCxEiYVfhZETLhQyMEYRqsNjJHYxTytKRf7FeCtv3QchdGz1",
  "key6": "5jBz6J2FrRrV2H4Nk7uxzW7JbM84NYGgbQjLam5kNrnffE4tywbEz6ywrD1axTM7x8FVDqS3aHFjas8zFKNGuCYh",
  "key7": "49PeTWGMy6L13FFkVBuXskRSoH54GN9D9EeBxJDkb61NVxvsRDSuLjGr15DNURo9uCcpsqhRMKNtpAJHwbbxQwAg",
  "key8": "2vjA3TvxEUWUS2CeDtCxu6FWK8cZnMm5s2eWukhzRi7N532xAjSGEXRV6TekrYDHwPuvpcYH7YhnycCWn16zFikN",
  "key9": "47Yz8KT9Y7e32RfhuWT3fcycjDkwPBWhfLv3Eze1sQTGo8yATwX2YgjXyFAmKaNuoRTrfrVtiW5msGnQwY84G1FA",
  "key10": "2KNSV34AAoH81teWb4Ti4afq2PwsVBbm8LhtiTMt6xqAW5EQrSDUGtfjdYxVS5DdSWJFzM3E6cj9PEckr2maDVxb",
  "key11": "2hsPorMKTEknwxic4w38zGFhVfjLUY1htX2x3PX619aZv6V5YptkzYRrxAktX4AnVA1iiQqjCg5F9PYTvbDguXJD",
  "key12": "5L2msgDiqo1v44PdY7draPsTydy5ayysBR6ZuaKtXttLruZXJXSkfymL4hiLjN9vkPfNe2ZW7FU88mpHVztcSJ7L",
  "key13": "3oojhSy5P17d2YbKAQrDagwBxXhd3rnhRupAyCf5GEUa5EUd6xFgjqPxw91oyt56VrSWqbNdAz7kaqywX5zFTYTH",
  "key14": "5dhxkqkybBb9rhhaqXnDWLuUZSYQTHGRcSTaoaujqfQ9HitncdQNeBxffxoCZKQRhKHKK9Rec2HeGKYJkYB3AtQb",
  "key15": "2WBobd5vLbYQsFrtzbBb9jMfzG4oBV1afSMGYiYimWCaEYUF6DPDfxZX4mafr3pqc9hjuQ37LJuePEB74Bv3NLRA",
  "key16": "vkcxSdy9QwCkYdJLPUGazeEVge9JYdRc1VHMNQy9Jz4pUQhrFRCE8L9dAA2bsB61dYZW6NmzWcVahMrexgg9kMu",
  "key17": "2Cpbgn5ypc11Uq2nLukaNUAKQbzm2rtRPwifm3dgq5LwW7VtXG7qngtMZGohKeKyNFi1XeZSG5LLDx1uJsWcJBxM",
  "key18": "4Ssxsnd9DEWGWLBPsHMV6FFBmRo4jTvnSR58PULsQtrVJrWmzoJsTuspvaL2GwVWxwMuDtXb2pY84jvU2dXZ52qo",
  "key19": "3GLJMV4jTqUTgJh3Vcv5QdTry6V74YuLJYZPtmL2d4RZcad9HvinGdzQmFHZAR3M1AghsG75eNS2zUt8MBEjAzJ9",
  "key20": "3nkShguCzSxVDqTgdMcXsbCsWZFp2dfgLuvTCjxxnzZAA9qRWCGeE17VKqHbfkwczagozEkv8NDcY8Qv8Zg9FVwM",
  "key21": "2LwEhsj6yrGaFSC2PFryNWZVVAFoHQpvxRzMvEmGKf2pnvJ5VqeJ2JHqQtxg3fCAjAu76CfJsafqX3S7d2h7CsqT",
  "key22": "63v3BtPwCRJidfv9g7zxtvZvVdHH7zpKVZfTPNd4eV2tWqvjNdcwoqaRast1yVT7mFF1frMG6WeU48j69yEREhc6",
  "key23": "MAEj8fPw4pRJBXCUnLeBk1Ys9A4QjtB5EVWfZbW2MHc7oznebNtVoRZud5K9ygHU7LUSTLGHk34zR3bRzdsNMnq",
  "key24": "3oNkXiTVjfHdeeYP4V9FggXFoP3EkLukmCCN3p12LmSJX9sCa8YeVsHpRancz2xW8yQHyGMMUheNFBvU2uUCk2X8",
  "key25": "3m4g49fp2ieDqrnxUQmyZGD4ZEwG2X1GH4WzuEwrYMdkPKzKALNMVBZZ2pTpXTzp9u3rYvhr9gfHosUJPtnT99UV",
  "key26": "67CgXTrkRhm9igTBRYHKDUQ14hF5HKd19rZ3aYBbwS3tn7JnhCtrJHgBcacMm3JigRXxEUeuyW2Z8D6YH9WM7Vm9",
  "key27": "2QTzXderJUaNxQteVWTSym2xmWLqukRWPktMQxvCatDRkDVX2F1dNctTUSYCv9DssUHWAw2u5YnQjdc8zcaLmkor",
  "key28": "2MBtsvS2BbbiK9Ppodi1pUKrQPYJyKJACAYSas6VBu5YZCpBZDLFjbsQ3aqB8HZVjm8WCQsHZ5S38JvwDKmjFwRe",
  "key29": "2mFi2QsBbpHW4ENvXMQED6bu7sETKLSEg7dCeSM8YkMZFK1sDDeq9zyn86baqLrBH2PSS7rQDFkJGx3EK9y7twoK",
  "key30": "2yXzHFSELjhWSuHmpRxPYLt6x9c7tXo83ncmeWy7LXsMJmsUmCNyq1D3ifGmC5JqKGK3kgy6Wz3fX8v6EHs9egWE",
  "key31": "26yGJsFmYU6Da1yi7r8UGq3CGTs5wSWKD1E1qcbVRuXKdz9uPrybtaAeS7tZi6FzDrefcXZncDeQv6rvZQqxqtJE",
  "key32": "5NmLKNeZda4M7LfqdULD4pBKcLkPmAN917mchTJqm5om6oJJhz6msZpUxpmzYeSMwY43xtjHhc2hxFRFjvmH2yQw",
  "key33": "2RQbZN5TLSJCwqfPZWTKcdZvEjPZR3avmqrY6EidUhy8MFP8Dsdo5A8zQ84c62UewZ7Uih9z8tgi4w5NiJRXPwz8",
  "key34": "4twmQbzxLNrsDGDeA75b5UKHhRYh5eAcMANT4YsGAfp6HhfYKGFALad9YMGVmnEjEVkpGAymybnN3QABgyUFcY1i",
  "key35": "5YVoBfWWhgMsxTxk39A4CfYW67yXXaup1rFCvLefEzU38pwPdFaYhDceLFT2mfbf5aZzN3bmLY63T3oGZV1REgEV",
  "key36": "3cEjKnLcNcJJkK9zf2ewKct3L4mgzvYi1CMf5h2ebRqCN4JfmKm4CXjpJxWQx5ykkBoLJt32PuAZ6Vp95faFt6Re",
  "key37": "2caywbKovBtpqD9wb3H3BUQZoMtxeXduezokoGzQmdHSy16VercJUNKNA7u2SiD573EBEqcH1YLESoprUzFmXKHn",
  "key38": "3HEFQGRzJhPpVEAkhtJ4UZ3MzpMmrd7gVkAacR1Daaz21BtHfnnBgHUJarxvh9qMxz38tPntZvpCypsgUSK7xvqh",
  "key39": "4ADz8Lnj1CKg1gvwZUn7ZrR23Btt9KuR6cr7SuFpR1TkaZG7Skq1mtqek73YQodA5Zw7hyZinCedfyJMrTmnqDzC",
  "key40": "4TSTXRYxCRCjtWQthSAprGttRo9fEUmoxJ6KGiQvRQp7o9nutRtjbFFgPZVJdqgjAAbh7BTnPcLDu1jGGrhBQyc4",
  "key41": "MExCKuVciSfqy4FtGZTA55L4T5S66bWuDUY8kHg57UxwmgUQvcoyzAGC9TAwo9UuzcXJVxhAQNQpoZWtv2m1UPz",
  "key42": "YwKBRAXbeNJaLZGe218VkrhfiAirwm2smudVGzjKEZRN6ERazQcg12zxgZAj3uSGP8VfwD1gSyQmEeHvniMoefd",
  "key43": "4ApRdduX5j5f1PGFjzRqN3cZcsPpLvS3km8BbQn5DCtB4e5jQTydrZgoscgMYhuAuLPNJgTe4FKNjkADj7BX3gV"
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
