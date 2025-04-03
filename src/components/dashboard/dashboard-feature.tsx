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
    "64DzzBL9uK2LFcNzrftpBsmySQEQ9QhxCoY9N1YLbMMigaUDWkth87snRU7BhrEuvebemrbNA5vQm3TsRAdSHRHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KSiFyYKdeThsDTbXDNGksXZWKCPrgKoL2Dzpq8C3zpfnMFu9geEPBSLAGpzH6x2Tpjhf2MqgUEAhZ5sdAmobtFh",
  "key1": "24mmBnJSm6scd42xGq1UcBE9mFugsLwVtnfyFv6S5AhvaJCLFmHeHGrs2zrWVc4bLjtnzUx2mc3nXzwg6j2kfiYi",
  "key2": "2mfNPJ7dnfVbQ619mrUCZTygVzgkVdeqJLE8oqs4Jk3eGY15EvKHGhHjXoormNfrzHBc5C9PMJwKntVoerdkUWmw",
  "key3": "4rnhHsLhuzUZpnnU9v31DhzJK6EfJna1W7pE2abeLDthxRBjjrwMkPDph7BxA6wCL6513jLbsrnmoj6piE3PZ2oS",
  "key4": "4NaC3GvbgjfeEyrwceVQJ1czZ67WnKcKP4i5cMhWX9v9tRfkTs9zFGizHb8CvoK1WVPWmfMwTfe1v2TxgC7juMfh",
  "key5": "xYsPzqCFsjbLkyGJXtwUibsqaKYJNA2VfayCeEpGs3jSBJiGDx5QJSpoQPTmpnPX4QK49onnFZTrd1PP4qnq5a5",
  "key6": "5iBPYHoL4Z64V6Ws8EyibWQJamxthSw9FhLp9Ny6CDpK3TNqR4DCMf8uyAdySK24yjZeHz6sg7L6UCu16qF76kUF",
  "key7": "3SsjkHMQKkqzWnqEM54AJVpy6cVrZCUP8tKgqo1UfABc7rhV31G3at1LwZPUfMaAJYYSdQd7favj9xqGQhneoZ8W",
  "key8": "2PPNbhAYwsoHoRcLqZg3r1Hgqs84CDfCRn2QPuve9c7wgsb6EDDuM4ThddaUFrPwk6ckg6mTH2VGRLivokjD7PVj",
  "key9": "3iwVgwCpWou6KqkrKdgBkgAktMVBPGWbPpAHKs6VXLuf7mwqunJFXqH2JRNFaqTSQdF3wcTV3u8poTsKvAb3By5i",
  "key10": "zHdRZaR9PPPBdxYTraMshUzzcnBz91JKTG6uioVwHtcNAn19bWdExz1vLusa7mtT5W9e9AgCouvcK1UfCRcyU3k",
  "key11": "4CKCvyisKJsmz2ZNgLnFKW3q4BLr8QUEZa8xxNDdwWJJrdtAHANieoTa3QvWHmaCD17YFAmRsQaEezVcs5XqbwaW",
  "key12": "2ZT2FkbTvVvNYPgEdNSRxVodvsLMnF8xxcWwobgTZiaKQvMbArKfJK7Gmpbahu2vRowDRMX8zuWbz5HbjkYsG8GN",
  "key13": "2xR6ccmm23gkb4USsqgXoppzgEahzTHNB5gM3cFuj3Ei5MvYk2YZfxR66MDr6ZG6ftJAcE5myujfBhk8GeLeiv5o",
  "key14": "253u5eSGCb8SSFW96RoKXbHiX19pGJSKHPeS7RMmknVccyEwU5nUEcwniCfYtbrTZiE4TiAhVFZMDqUv51t5oNeS",
  "key15": "4bmtVsFSMjEbsr6cc1L9wDwaotgSbyoDG6UUCTHfhz2458pgvnaMUj2uSTjGdqZirjzRSvsdEbhpocZSkVRfYefr",
  "key16": "2hvZ46ohfSfwLsMGFJ9dJ4b55BTXCVwxFZjpANrWkXUi1Fm4gaKWzs4iU4h7iXJXmdPXBTLRe569TeRT5Mqu7xhL",
  "key17": "4xiLxz9ysLQ6Uo5zoScnD9yadFqdVZvHDUgNUUZf1srvgjujPSrKQpdMAwwPCqiTq2cp8gKjcQNFuRXbwFnL5Xi4",
  "key18": "5MvrJRxTfBuYDHYoS7NrtVL2FJ2b3KZKm8xLnTTbL5BFwMz2QD2vwRqex7YjZVdLPV5rMZwu4XkDNrqoyEoiKVCR",
  "key19": "3mMbPy8pp8PxNhtDUSRQLUgPptfVLX3dKwJS6sR3MJBGvR2Mbq95Xj3LZgon41LLthFTc85VxdvZLnLrZRJ68CH9",
  "key20": "2CbMMAdZ7SZQhuFKUthv6eT291yyQUNs8bZjhmTNnc2APNb8tcXpeaC51L2Zsnjf4tBc3EpWXB9kY2Ua5VLAn3m4",
  "key21": "bk76ewVyxsfuHhY7HrEVmbzvaUhCcgFvpnCe3pQiHyhbJmk2EYzvQiFMEDXW57x7vqqgaV5XmzT7EEPuTPBX67x",
  "key22": "3RJAgcR5xy6MFFQ8oJq1MjhvvDN2VXAqH8fbh57aKViBY2wPLwL2m63mEB46ATBnuJAivZtydTxt1z5Bps81uf3p",
  "key23": "5Bb6o7cc2Dp429G2KyTkTJQaM4YvTHVT5uzsAYRepMBBsSuHkkk924qH1sk3fHUhFgULkjkY4qrX57dY3ojfAq9",
  "key24": "5KuyYfF2sa24Zncz6bRDxowbSonpsCeuWcWMw5mA8au6ZpjSwKc3UKS2TUjDr5FEYzANBCbA1xZHMaYQrBCGW2Js"
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
