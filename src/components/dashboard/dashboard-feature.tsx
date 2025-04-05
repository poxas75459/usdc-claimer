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
    "5YnCfrP2GbbfwsUKkty3fVTi5UVn8w41njm4phF3Q2qU82Tkh83pMQp5NmCpf8wWYDwLW3ChotJ4xQw8GnMpL1aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSpRkdcpRgqa1Q7qZAM17SGgukXnfvEaaBMDG2d4ybKJcesDhQnP2A9Yq6eUBG5TriNJVdRxW2KYaWW2MZ5Fadb",
  "key1": "ZCbBX4L73yW84gvyEixyCQaZXqtFS4PS9UtwCg1NLqWy2z7f1FyfQR42HS1Mb94F1uHDiJGk5PXPJDF1ctSjii1",
  "key2": "5oQEjyiJbup7wSiesXmSbm3zEcNTpkcXC1Pm6r8EjJH92yHPgCqkkD4s66uoZLLBxqL68SwztqbrN4bWXhPBhEY5",
  "key3": "4bhEq3bVNuACdjZWNCBg2E5v8qCgMxpBBMx6Uhoywhiq46mhXDz1f28RkNedWySGuenC68yqGBEVubkxkbeUDxJA",
  "key4": "55mjpjRywwuGE2AWfnnzW3xRVM3HkKja4b1tMZmyxX3LmvaPb2CsVE811FbWZhinYNSiis18jphK8J25YUmTU5hP",
  "key5": "235NPSCsvrSzMcYpFLez8CubvQ1rbB4quetPp1FUNWkMFB1rwCz2w4QcG8QMbqj4ipkQC6ZDsFfFxgtQdrRitjQK",
  "key6": "53cYtRYHK41prhdTn5Ybpagp8rwHsnpGqsnXfrgcSAGcQKXTPHwCmEyopuFjLQYQUWb6FvP6YHtor79AYGf3Stmb",
  "key7": "3yyVzfVwYMxCopPtnJp9P4RQTpbuviXFunYLbZ8HVbTvZ9ScMtUscHXvwDgtmiGeDZejHdUTZzYL9XJjVdjBtSRx",
  "key8": "sUKdnWucQYrqCaN2niegPFghKvQcxUmgogrN894B1uWVM1pEPe4t5Fi5zw51uoZXhcYJEt9nUDUKfSSd8UY7CRX",
  "key9": "4rF1gJLkv4rJakFpu9KyfnnmjfqB996TENzjryq1FdsTtfgMvmuZM8XvPFHP16n8PyP8653ZHzoQUhTgAS5nBJYY",
  "key10": "549PuGuGB4D723k4E9NGicGShvJTNcicMgth4MMKSmy77g68qWELgZerDtUKxdgiS85BdoWA9wcHoXUzQm3YusWn",
  "key11": "5r4mUC6iWBFXH3hL6iWHPF56GFHxpR5WxTDGX4t79gUusvdE3eMmCXYkhfsB7o11my2WWucRVaocS2sf27zmjDhq",
  "key12": "4YWktvyqXzn6S7oAYUj1CpHr9sm7Ajfp4TA1rESem5TJPorUwH1Rh8Ybeee75auLocRsa9uRL21cfrjjhDYAnQ8g",
  "key13": "4XwJffJLyrAg5kFa6C1cinE2JfBrRTXKbbENAcaAS2jnL8fq7PdgMEi3hCcUz1qojTn7W9ECY3kA8tFb7z3bcGUK",
  "key14": "tARNrX15QePFbs4VPR1VTz1eLuJS6uLzBApVjaHjrQ4j4tL34yStMZ2oQh5C2MzGbb9sZxeVRRyVoBawRc4idoL",
  "key15": "3cdvFtvzXywFCAC7pgxXVjPVSU4V89QfD4aXjoswA1abnExEYUF6wCUowfsHS1PZCB6JXnjQEHzBsTzPCF2XKxwC",
  "key16": "41rFmrW7rHiZ742weLa2sM5FA1KPr15RjM4p7WNabNNAzPWabUfpY25S4HJzCsdx6QswRUg5yVhkdR6FF4dY9Evr",
  "key17": "2X3toDLxRSxqgDRRhDnUhbDdhVCAdHviNH6CaQmQmZuY7fEnsWZ2qbvHVLsr8jrHvkb2tdkPPKEF3j5iw7XfFmGb",
  "key18": "3V4KQNc8ZHwmJsR23wJNUm4MLg58cfcFyS8dGXJFCLyKd4iK6jZA8iT8kg3Egj34qZFeQLoM4X9JwxaC4uhurtfp",
  "key19": "2JP9kySoiv1fkWw97G6Y7Ks5DtUxaVcwBYDtaciqeYBDYWNfCM6Kz7ucp19ws65TANBQuSHdutETg3BZgShYrfeF",
  "key20": "59o3X75aeiRJxumTZFkhBvAs5x1xDZi9jPLpE19w9sxSpPWB8j1VPyhXk92QqmkNoVz7YiY21Wa1TTZgTp7QYEN",
  "key21": "5Zvy2SPxNt8KFp5rGi9KJmVYVj2s1kURRYi9KeDEPgtokoSAn4StWoJ9Cx3anV6VEVA8tqmxZbe6Y8rWaSjH4itD",
  "key22": "RCSFCeNLpFoZxqxHs61mTY7bkBUBZE1nQNwKA9m3f9r3eBa2eEUgLP8a7eWqPttKUx8YRfVQW8vCbRW5VG7AGER",
  "key23": "pPYgqjHQvh8LmNxsGFps4ZZE9AqX6NNAsbY3X2TMqrC1xoqAHf7b154tMjAYS8D1cUvnJkoeRqoaBUwaGKbhUeu",
  "key24": "5pi1ExjuNEw3ZUgj5wuYf9gYrSKnz2r7zf9DTRWfLzDjispbJpZzQ2uWES5oYjVENv24sToUpV6u247FdQoRHagD",
  "key25": "32sNh8tyVE9cdQjMf3UHgDuoqDZwebs4YNnuEG1C8tgyGcvujCioi5pLxWdEVXY2Km4dnamcY3TT2UZC3Er88LEi",
  "key26": "5qo6k9YTV2eNC14SgUnEVtAxKGNS5qWhjKKBt4eJtL3AU5CRCW1n3TqPLKpK7yf6hdwVNL6Amrj46yo3oxdDpje1",
  "key27": "2BdHsf1vHNLCKbiw3QrsafAF7w5PgiV5Zyv5AwgkuPT23T3WjmNcudgKw5RcMhEraZ9gzqQ1ZiEo7q1J6nxM35cW",
  "key28": "61EJAzFHDs8L9kjDNyxytjX6rgeS1kjsxWjXvEZfYhnKA6591WUndD5pnb5yhuQuK1m77yyzshkGSTGiP5DDUjqT",
  "key29": "oW3SxNA5Ahz42J2pb8VyUZXXHoNNuek7AiEsaeWevxpZkq4PzjnmmPvpkqs2NVyZ9zDmHqTwgWCHir1wgncRuUY",
  "key30": "33EF2fVizasgExxCxane7f1hvwXUFufbvh6bQV1zLuxCVZbKaBvkmH15FhM58p5x2QNdMhLAJQCcR3qsUYykhTy7",
  "key31": "5M1JkYU5idHSSvfhSTbzUJDfDPkHkog73DLV8WJnwGZCYRwyRVmmSG4coWdXrnjLkraQNFSitLN5XjyLrmRVWht6",
  "key32": "61MkyswmLCTN7mfgSZKFkVEWb21gif7hAGt9nwiFwNRN2nCfsnbbPW6Ke3Y9rpCWKDwH4ifZDcckB6p1JwiVRMLW",
  "key33": "4dFtvrdWsXHcbuud12gtXQgFwZsGPj5SiMn8TMGnjtJqrbnfx4TsSTgRtcVLmceLpwsbRnv697daKbvjWBAwUDtJ"
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
