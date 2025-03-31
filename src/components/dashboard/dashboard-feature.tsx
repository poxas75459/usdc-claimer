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
    "4Y7o8AVpdFFenJxTAvwTT4mHVjYVQp1qLBMdJYsH5nhjDPJjbJGBjAXJwzUQiNaBgUZoERMdB4VMBPZomAfK7wvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mA8nXu8mqtg2LzQ3HC9zqGM4917Qg67ncWbgYppfAj5fmoiNrYKjoBmdVgugvb51E932Grrm6sJi3XjJWSULj3C",
  "key1": "wFPjCUgP2ZAK1D7VFzwZ7rcrVFjcor6nRMggEywJp73SijzHgqnWs9nWD3UjNL5k5CiaMxKBGEHcMbyywEAWVzc",
  "key2": "2kswPULv39dwP1EgeMnyBzdF4d577hHfJXR6FYWw1kJkTy4DJa6YFkpHVAg2LNngYYkvcfnNta4vGogps39UQpsz",
  "key3": "3FwH7yrDPAXSpcP3DBzccBZm12bUVrzyzKQwRGKaHTvaD32R15XddGYzcLufG7oKZKJq81eTesazE4wb8xRrGvGc",
  "key4": "2wgAUs4keWaZ3iqRmdU3YMrVZaJQuq1XzU9Su9buPveyjgjKktyK4eja3h6pX7uk3acLRCcdTgnSjsKugcyzSQt7",
  "key5": "53XLJDAcXEFCVPwHtTB95E4M24nsf9TP9Ju6YGuPt49J5JaUoRQWiUWT7eWwFtXJSa5E6KrxC5BaZLkyX9Jnqdz1",
  "key6": "2VqF4qVu8XW3LCQ8f7n36WUpP2KnPDbfPWZScBY8rLWBW9nRJG3VCp5hNm8g2V7WdzCjG42GoyCyVoaoZeUDRcD7",
  "key7": "5wydRMdLP8ou8TNLsNwoViSnaTtmBzk1oXm7uDMbLfguHmYKZCsBZSienu1wcY9BtioA2JU8JDh3B5WtxCB2bQNk",
  "key8": "5GC3xZ4fW6UPNnKt7bKKkPegpxKHJEq1TZA7ae5pN5vnbDK7fuw2cpbYQjBie2bKPecZ3Qm4MqMXdBngS1v2iSGh",
  "key9": "3LwUS4ynASQzVUDoBRdYQMmhAF3oLsMuUGi6zXgGdij1hNBaykRrg5mACZfRvjJk2LqdqgGqQ57J4geTociCsg82",
  "key10": "4aRgeUyqNn26qsjqxSe9UgdTSZjFQM8ifyCQuCF9SE1qhYejL6UsViJfL7aSjkuUxvFrg1YTEWf9dbfuZcyZrzW6",
  "key11": "332hSG62esbZaVtE3nzAx2b82eh2PR1MCoLYkBQozmdd2TaYvU7ntddtQ2Hkf5ea9dKU7SoEqSFCbKmKg7ij9FZN",
  "key12": "3vDheQpC1PjREERpSKwC6nqB2cXw5zajTAfh6wW1memg4VuhBzwBWQQYRAGGEVgS5dEF9vLHZjBQYHB4iYvT77J2",
  "key13": "2kzfLGzbTnTdWaweVBGJUN8VFWTAXx8j9n7ATFnzjg8ghWySgAyN3zn1NKpPGMfYzyGio7Qq7BUrD3WTvYrVhGVX",
  "key14": "4kSrw8hvNfVuRBLjtEXFG5gHwfVvoshjrBduerqXaihdQY329ov8VxMU9rBjL8Mz9bEVdjgG5nqpARBvwdnDcRQv",
  "key15": "2H5cVuGboLkfqPbV6SNsscu1ia6xNmuVLdV37R6n7xu4xnYDmNQzy14osh8EQZiVpNC5V3fxFmPZVtjvfjEujsfc",
  "key16": "qMQf8tfDuZbWRe6grS2LHKeu3cgE9Z1KK3XRCCdcwg1CAPiARtgqVHk3kge8srnpf4LCcpQdifDi4pW2u2SZnLy",
  "key17": "65qfw9vm8fQ7oiTJSbX3BChWVd4qumUca3j4S9JtHtESEyBjK6ym5EhJwc5fsCQLW9Ph8MStmMmnkRRgzH1cHNvL",
  "key18": "4xxgG1e6swgYRGAFHf5aT4PnispegPPEtUDM4h9FxmyPSZMU9y8SkYWVJMedHhRuSMWL1ZZb1QtDagQzo4NiwTpq",
  "key19": "2yJB1taE1cwweV8f65LnbEstYPda2o6cki4mNWjhi97YdE8rTE5rnrMR4JtZr8GiBDKgssr1HTeVhpMajGa9h8s",
  "key20": "48Yx2gV4dupFKyCRN83aWPGypzTux42gMfonAhHrFY9WpidMnpVvuTVcehAu9aLG5VMEtAfD8d1dbR182fvgfbhY",
  "key21": "3CvSE5q4Grbauzdp4tBpFo9hViozBf1NpTh13mP4mTEBgx3wobiPumPaoeyUhPyU27Njg3UDihESrr3VXmWFJCwa",
  "key22": "2Xwip2y5rtUttCagiffEGw32uFEKt3mw4brNMoiA9JiUwBcPfjEDtDjpxg5z3ZWg19zNDnx81ppX4dqxbVkuzRrf",
  "key23": "5HTE13smhrbuAqwPUyFGSZhi3pKK8LzFmHvhsESRWvhwfg9qu4kvhsnRURx4CBN2Mqt34gavXvdqKM5cRHgt3xfV",
  "key24": "5ajJ8oVbkUvettyKLLyUrce8weUoKkyLrVWT7ZvqBRXoUNxyZcBd8RXiAmfjvQ4sa4CigeBFmRrjYZyiPcj7rYxz",
  "key25": "5zBcsV39eaXjA4WD9XwrZ7qv3g7ar96wn1Z4SoWYtkwa6m77HntMyTGVeWraFY7jGTTz2hiSxmtx1H8MJCAB35sf",
  "key26": "3XaEFrfR9UKxPVrgvAyizr7nAMUwBC3gJNSDFnR7Gonb9SXNfe9CDcXCbV1sn9JukRR1ZanGLhTwfEgsbYfUgwko",
  "key27": "4m1gifnsJChGutec755b7jBwLCbEWdHXoXfhS3dFBbTBMCQscTinLRVejMGDKCaBPrSrnstbxf9BydytHqcy3K7t",
  "key28": "44dfFGd1UZy5nYqiKNiGYBNpBnVTtqwGhaqb1exacpkQXfzHqj2mN95soRbSaYCvdEtnxf3EHdcyDLC4m2bbsDY",
  "key29": "kow8K3i6NzfhPHXex2usy7CZL6UhRcdCmZqi8VatH3x3hM9io6fdn8CcEEtoFPx76vnaGndqQ3daEhadCAbZuiJ",
  "key30": "5kELvdvKzhMQgAzCKqMTS6ue8ifi3fzsZ9PLcNwG6Boz85c7HtV2gySLYBxqC3LUJB7zwQEazmayKxTyRqjp7gJW",
  "key31": "2PP7RJC8DEVFbJhriZyEB2yjdrigMe8qBTwRya4rEKSo9f3oJ1TJcGUUEjjXSDG2qNits1RrdSpdEUobFEpQTBmv",
  "key32": "4M9PWx5tRQLortPVToBeCaBzVBwJ23JGxMdkHSEboLURWv2E7nkAeqReSferat89HzhD6rj4u6jtSjWbSBDyfRpx",
  "key33": "2zC8rU1MMjizqzfRsYN1gxBYFKtm21TVnPLi54RLY5RHDiJ1D2297YtfNrkakcY9YtKdDJMJB9493vUvX5PFTCwn"
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
