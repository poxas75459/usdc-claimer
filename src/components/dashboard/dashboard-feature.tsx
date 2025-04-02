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
    "3RGbdSYxXCfg2kfhJFKwcwCLjDFKyiKB1d4L2JjxfnKskUn4dkYcZZaWpVKk2bnQxo8zNRmFpvA76La8BUd18ngV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RG6kW3qDTcKeSHDfXAkG9hKEd6PT1LzztTHjAepV1cxELCohtjcViXwwhjuqV7CvVyQf1iXCaMkNpMzN6G2ZJfC",
  "key1": "tUDVfPUgHKPPJhbTAPhtSdGXn8x3Cez8V1yUkU9UWuekYtAhdsP1v8Pbfw6Esb6KUA8Dsgc4Smr1T5DrWbVvNUf",
  "key2": "2xUkSMxWdF564ktvbtAVtPrTuiZskpRJXZdXxwxysRkZomerFvcQQBYQbQDeVAa5UFJmARsd3Awxup9yyXpVaQYa",
  "key3": "5eVGcwEtsqeyv8keQnt7P4XeAmJamzXbhJSGKoeapQV4wfVN1FeWyffYU7yDGwHaa5P9fLeBLLFENHcLJUTL7TQd",
  "key4": "3aTSvid6JbPdpokGywh9CKiTi34FjGt6QHPGYFMEE151mEpALWiY14pttNrubDLGyRah3Q1imySpwqquzXNPHwqx",
  "key5": "4az4BpVHrZ1RBifmcLk8fiaoe9DEqZDvnoXbSmU9mFd7frmxGsAXa846xDDkDaMDLp7jZU1XXrnbNmHdqXjTZCYY",
  "key6": "48RGJJoJWacbBrWwvD8BduaSmjMtcxUAZRaS1TuYa6agfM6FkQsYYzUqBhZDr1wWL17DvxHzpcZKHtvYCv9m1AF7",
  "key7": "5m7h9PfeRNV75jKcQwVd36PjjsgHBvHyUtp1kU3EMvABQJcwGMjnuKVqc9ozVMKxj8iLo3YKe3tNXKz435F2EWdZ",
  "key8": "28zBUw2kK6VX6ozzsxqF7iSD59QSoFpXKJea4xpjB8T3x4DjGj9hidmVbiDTDEf5AgbCU8SxwKHHFn8hh4MHnQdB",
  "key9": "33uWqegkgnUubwHAmVnEakxCzE9nUuCSYSUHXa6oqx5EDSb2caJds7hZLc6eH1XoP8drqZzF2DzZWXg8DJyRQYCN",
  "key10": "5G58Xkq3UkidUbr8LM4uB6pZehDZxyh8NjwBqpRDC8SGxjKuzZ14fjLdg36xQne1491SfLcVTFgc1SMJ8yc3oarh",
  "key11": "oCwt1jZnfjtpT26sMg2ParHKH7AfTBKBttGHiqv1ncCwY3VvTkiDn3Y7r3aR1r3NmprSZqoxGx9zk4Po7qjvFiN",
  "key12": "5uR9hY7muXPuchHh1t4uejgi4G8hkwYdmobvvo1XU3Vr1mpMRiGaUEBcxMAC9jBbVUHBwdLenERwi8p2NguAhAHM",
  "key13": "3XA6BpAK8NRymCwtQU8kMCe9mqgneSu1Y2JKXogvusfBYmws2Yvd3k65kziENbM4EQ7LgXpA3m9S3QdGQzgx2b9h",
  "key14": "zNxzU6QhnYH4ScJ2Wbe643MoudDg8AHEEj7DB1DggFQn5vfAc5VwomNaWhmdER3W3eeTHxBnpdviPPPxPWvJkCo",
  "key15": "w8rKH3DCcNJ5qs2NycDgUGudb4CCVJ6xiDoABUGT2gKy24s8h6a8bXJ51bxZHQ3SvKyeiNr277op7XFN4EzaPhS",
  "key16": "3mGuWpmNMeBBzcxNJ7qGLiRAAX9mMfFXLkEAVNZwuLAu52nCKh3e86Kv9mtRsdv23RBpgcwtNrQFvVcvdtbjj3de",
  "key17": "29VVWtTcMDpskiUvcdpADPF9tarHrD4QDVtmes2o5ttWAxFukhHuS1ZQbkjVJPS4GjgnghBRYkwY8WM8PzsoNxSo",
  "key18": "5o1afkkFNaskkuo83kUDw6FDH8CmmBLdNqTKEePmgP2BPcZk6c59EmNStQiiVGzTDmvUoTfqQ88BvLfATVq96s5B",
  "key19": "3LJ38vPExH8SwCdyWxdjQGYqExfsDxn6NgWV8xcjhVyoALPVfM6GLDWz3G3yPem9B8tA1h7GxrhL2Sx99VJFsSnN",
  "key20": "4fPvJGhhbzVGXNWWB87xxd6d3vTH9tb5SUx8SPeCumvr3v1AHo8PpzruqLkRDhDjtfuouQwJZheEVyZsze3wuHoQ",
  "key21": "4Vah1WgzVXTWCHwhrN3bSisA57uBCAszoZaZ8yH3yTZF8uiAP7TSZNPf8MfySKi6oszDgiibeGTy4ABf6KvHjHzv",
  "key22": "64rLDXQggLKhBsUay5Zum4XdSDmCSrcxd66Li79ChbpATyRE4yr15groJN4XzievmY3uzZ9p7Fj8MCYN6yrwuqQP",
  "key23": "2cXtir1tri44AzfzNYuc2fmVJGT8YEChm9KtXSZqZZHcFpnd3oJK9AGJvwfN5wcMMKH21rAjp9TfoH11hfKtYLhs",
  "key24": "2WJgwjYvXfiT6QNzXHucd6unrfQEc6pZzCzJML928DjMYSpKhWxzP7uSYxHjm2fiMQfxPywRptQvmk59VvokVuf1",
  "key25": "4Ea8WDtnQM73jGv6rJEjihzFkkF8K5yTRNyykSHhmyjmnADAGDuCcZvu4CCVUJvJ3Bt5WUsf12RM231G8S3umDoG",
  "key26": "5Q8P9ZDbjoRZajjVSLZiddZypkonX2NJ2SpwuGabCj2mkQvuR7zhhkxf6rrouphpRWURz84WarjNtePcxHYNEVxN",
  "key27": "TziWmfdbLdVXrJUjdPwc9b7Fty2N5k4jQXx8uuumxvvwemGoPPPB5tu7Eb4Dac1exMR8oL4WNTKeVspqo6egAto",
  "key28": "3AoNZyykJpPyvFEhcL6Eq3pK7gKa9Fyq9jTMDSP2esj71L9cSKkypFUpvcof7WvZbzmwMhyQdpfr2gYmKpVyXZxg",
  "key29": "3d9uz5YTtK7bmBe88vPZ6zo3pb4UWyTqLESUpTFCCYZo8Wrfx8TS5Fj8LczKPQAatnzD6pY8v1gQLYmcUjeUgdK2",
  "key30": "G21mWmsGcA7iFnuSBp8x44r36JRM4N4ox8G3ZTvcJUEEdfcGHmJEaZWQW7nvgWuxhfLLuscte9x4HCPEVmJwjKc",
  "key31": "49Z9P3JU4Uryyi2W3t9g38bcbxuYZ5vCeytd7ghnMzMgCMRFTL2PV7tQ2F2oqbUBjuHaDGZDjavHZVBCFH499T6H",
  "key32": "3BWYWPBCLXDDBC7D2fogrrRfBdFfSrVN6kMAkDRmXrBFaU1K9XvhmbPHWvwLfTRASQoMYWbFsXhN6jfTscRVHnaJ",
  "key33": "4J21gWiKkxVDNCd4umAQzyJHBaJPmzHG644LKUV6bXX5CGXTqXhKZ5YX124g74jiMMwMgF8ogiTmdyL85qfbnobr",
  "key34": "q2D7ZdCDJCLTcL9mKZ1NCcNrKHHxgF9pRYrQ4PfSvuexoaFcBJjN2rBwRFsr6c9wJBXNXDVqsRNo46kiWxNxrZ2",
  "key35": "3chtrQtZ9HzJK6f5uabApECyzvcSbZvN4Y9kmvzDmivNnii3gEU43Zu7MJHTwMuWn3yNKTXDPAKbjLQQTXWkQTbx",
  "key36": "4oV6BEt2Ni6BiEnvbXVQRgkN6xWtATVjtjMCA1BGCSobTsPE5doNDz3mbWYv3bSzi7sVgHKK7J2r9vpdnwy3nA24",
  "key37": "4FPhzhHv1YE4FnPhJN5q8Kmq9jwJrecEhkq1DdcGXQEf2uXpRaZeeFddJqsKKLSh7oSPfT6a9w2H6uqq6gWfyfm",
  "key38": "55w2SBFPmtXfUqvkT9YaPfjcAi1xafBsA4zprUe3CvbxogPf9miwovvNwyV8xAAGkEhDLd9u3aJxmVWJSgvfL1LY",
  "key39": "4vQHHwbStq7e2tULXhpM4YUn8mKrK3biYsW8M3TemfpdiwqZce8MnrATf4BJZmwTDGKjxEHhxqxNteLD35d2cCFv"
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
