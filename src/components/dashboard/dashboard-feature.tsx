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
    "3N2ZjJV9wDSgSeipVugvdNzon11WpTWKFMjZyZ75GRru7nCRBL1cvCtseryDj9NuUC4EbmcgYbfyk28iuWfsUxtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HiLmWrCbLSqy9UUdcZXAjd7ZbViWesefqD68Q7UBw9AA2NTtEd96wyBTxS8J8V48s7LTK46EVXPTd8MToDzE74y",
  "key1": "62vq4DTsThRLGSnoY8SoaaUo7hUsbmPBhAwpmfk2ZtKj37Mdry5auMm7aPqZNM7GV7herQRtV8bBXYBwKm5rLC1D",
  "key2": "jcHW7WUpcwNEsHX8KcJikUeJ4iy5i2bj4RePiEuJoLhejAw1yku4dcmUX6pTY8of9Y6bHSkvBod7pzjTEfCJMtZ",
  "key3": "5R5bEsmJCLUzGzgTauCmoputSZ2DiwHKm36Lh5C7mffYNBFiMUpVCGhXUK36wbTdrNQW66dDvNHDLMBAp3JWQJ14",
  "key4": "38WUBzUWxcQP1rd6tjVdB7KsymFafmrZmyfmqJmKFXXuhqihEFwkwSbgXPURrfKRUoj7PzLWXf6xcr6GAuUhsVKx",
  "key5": "3vhnY3ANEWsFnYbtAS44PAWrQNcUuRah5TrbjUsNiYwJqathS8cEDgk29PaJJ2EB1FVdEbJWhrpH5VPDwxWRXX6U",
  "key6": "5JDMwWT2bndr7TQcBYZWWU4gin3pTyJo6SVQGwQMv8TGm3ujP3VCFNP2yhzSgFxSE1NQweaTRxiwSFfhdhNgEjEW",
  "key7": "4Q8nsLW7gHtPcGF7W9UjK89ZFQQm59cLncUpnsVG4KZJKQhH71QY4L8Bzo5nE3u2JY7WGMiJE7aRsCoCZubyi5Q2",
  "key8": "5FjuzUN8fysz2cpWwWHcbCkGZrSsPgJuCkYyxaDKBxgCFXrZRLDfNRyoxxxoanZnsha1xXKFvsfDRuTD4sWKvePp",
  "key9": "3citY86VSpa8k3M3iqx5runrYZvkihQrqXa8tceU5NtDrKTtzGcus2gCqJw3tUmPGzKqkHEnSYE1i6KTUnnbf9jn",
  "key10": "5zzVZxPv7Qc2igrG92MkZCvzTk33qWVHXifBsmzBesEVPzhHTvZd21Wk9EZNnDCLk8qkftNnin9EXmBn4ojoKUEn",
  "key11": "2et5uEPWsitzfeweBHwtbpqMMjoVSTkxoUCfwyzEuVJBEZkgg4z6GKo1jodEVSva3f34udeWJx5rwNxgJgFC22M6",
  "key12": "6suBoJqdzXhMjWgHNFRFMRbtBM3AJTJ9uSbghghd5uqmwaSZ8NKrDKjfhNkhRxvhgcqvkeAuiPfDJqYUPiLRNgP",
  "key13": "48GqjWM9kozApToWohqGhEB24bDnKPsVc4mECE6jQ4yimPX8SbwD7qTGdR5vsHiprrRuFevyeRYNRJZPTwZEvkEd",
  "key14": "4D84SCE3r3wTqv6RkxtpzjDubkofV35VBuhPowjDwVct4j1RPMEaqeQMc2BnkE9X8dSYgTjKui2vKELhT8bQVLtk",
  "key15": "2U4w862U8QVMWLwBKabbdCpRkd8SF9hNe3Cc3JFtdqy7ZfqLJAFHxJu6W7jZeGyGcjM9Y1GUhEFJgAx8d9nshDGZ",
  "key16": "5ArpKCA1wr9QNHaB92FrZcZLRZ6Wzd3w2oPiEoQ5RM9ZUzZy2Lk93kgeVJfD3YXGyY6bK3wH3TAZ8fSZEGNbB4n1",
  "key17": "3GL1rpWxDv4PRv6mzYkq9e6x8yzmKEvMbXDe5ZJetknTcVtXnjvZ4siFa3kVbPZEvyxwFWCAGRdF83ZyGS6QxJiy",
  "key18": "4biHu11XL2B2dwPgd3xGX9ekNszKVqv3vi9SzkRBbaYuxgJEaP3fjp2AkTHEwZmkakpFfzha3AQxCgHpPUQqWkrG",
  "key19": "2CHEqYiNSyf481BfQkR44S5DVhMhNRJsVK8zyxTt2EdUY1DG5M5QZPxXd1WoTp3XrpvjNp5XRPyyCBR8ECb49uKb",
  "key20": "3X5DucdovoT993CVN9XbwJDATya7DbEFrajkzJJZKiFRMVxixczJfBncou76QaMHm221vr9fjxsFeu6TpvtZLNU1",
  "key21": "5sZXBmqmd1fVK5on8MUWdHWXzzAK7m2crJs2B7koHnzRsqmVed38Tj777JX8okEbPvCJqHgm5Zb4GGCLVz219vcK",
  "key22": "5r3cyQYVKgUffSQqWQhCToUp5dXnC2VQkD4T7WK9bUYoiujjUXigNB56dRQy5GrfEe7R2zZoS4FVm3o5qsUT6Q3y",
  "key23": "UbZFXzA8SRbCzz4pSVXQ4HikaS8UpfdWY7yCZnxBmb7JJx7ULN7XptEE5wCzewcQBEzSBU1cX1q5jXmRPa1nwf4",
  "key24": "4tr1ysiiLFjtajwX5RprPY2KpMMJyD6MSbk4jbFRp2hPMYNKe82RGdivvXiUCKPeM5dTWDgkVfsTc2h8eC7pAdXT",
  "key25": "3aJnuYF5eSpTDYwBaTCKzMhYfjXymY1ayPLZToSZBfQWR6XHxEaDz6Ns5kpdDhwUma4wW7F2rWT5suJsYVZjpaQS",
  "key26": "2wiMU9nT9YcxrPLVFM4bF7KVZZW7x7SA7aewb3oK1aEaRmULedZEn4cGRBjriZpiY6jpmba7Ut94MEWY4KSWA411",
  "key27": "4CbotpooDUdc6Jie4y7D3qTQbhTYHZtSn3Qy81QCxfurScApLmXpQbaAkBEp7wCkiZXVKP4w3ndH31Hx2CvFho18",
  "key28": "5DSoKbJSx87MnPD5rQ8dWJEqcG5yn4U6EN3U2awrGdQgKQ6oMFxs7fxuJXa9CZuYJsjPP3vDb3U3pS1jw7uGkCqy",
  "key29": "3VZeBWdoN3UFFpKx257RLb9MumZN7A9CoQD5MxMYZvS1PDwsnzZaFnY17mJLjRReTCvHvHxbJmv2ueSFzYCEW59c",
  "key30": "2eW21cAUS8ev15FYRbdVFtUoMyCg8BMdDJHVzVNhvr6a3fzLAL7dGV4grtVbQ2ubkX5wDS1jLnz51H7x8aYsWYxN",
  "key31": "5TuDZXnNQDgVZDc1mKh2oKPAL8Zja3Etr9STEDEZxtHTGQveEDH5g9o8upYLSvBmQH92GoG2qsc83sXhbZwtjj2v",
  "key32": "4SDgmrf1BQFhUBvaguZMwmUPbyZa7nSb8kGdZeoWSW1zBsbUVsjUyCgcpozgxRu7aV4u8zk9eoSQr8eWNeWhVTTX"
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
