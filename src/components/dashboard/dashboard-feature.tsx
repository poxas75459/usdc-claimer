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
    "4T8hJY2sGDuusftEjcRmDAc1uwDgej2AyidukSxwnfb2pRZHaz6VShsEmoWgNLJiXqPKUpY98ewqyGJrmjx3miQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJq7cq8s6Y53oLcNavNGiUyT94ZyNA4CC2Lkq4t6eRQDrV9Ccvwf75ngNNzPSvcdB2A4icX5ZUEiTa6rhfHwAJG",
  "key1": "4Sap4Nnf3tdiP44drVEAU4yNDPnbptPCenVWa25U2R5MiXfHBXxf94FvkXdEY5cmDoHQCm2p2jchtr3ZKsyjygGG",
  "key2": "36hHtqq1GK9VTUNarPRTE7KAszXkMxsYUgDchB1rbVuYWnjT5NkhXf3KRQBBmica8QaDHEpApmcvQ7QJPevGTGpL",
  "key3": "4Un5Pq85Sigj4RSt9dMSTYxWz76e2SsbSfPQx6TkuyrShtDCgHuXNHEvcPXrAbShwn6UUnh6W9TxBF9ZAn7cBWGm",
  "key4": "3YvkAqHbMV46A7JkEgernWPGZkJvVXbnYWvnrTwt3yqYa17mxFq3BcAnJ9yBqkfxUd4DtheNbjUEDE2nDMsZtUs7",
  "key5": "3n9RBJmQTXFTeiymQWQJiPXKYAuA7baMp2KuQdKFbBzXbznjSoKXGyqdeaHme7A3MPGQzUvC1oEQYRY1YXumSD8f",
  "key6": "2GSNt4tajxJuGJXtwgcG7gPzBvAgJnXzAEtnsjbsrxpzThNPiTLDNJbgGnciRhdW33Q6V9nwZ6EMDJAmKJHqSt4r",
  "key7": "5HMzYkq3Zz9JzVJJyzkdBDgRaWSog31mqcqa8AAtbBCQgEdqPWMZrh5JqDK5UhKuyhd6u1tZgV7mx9qrPdFz667M",
  "key8": "33SXEFFQ4VxiWVECnvif9DpSikY8G3SB738MZ4PhqBh46wsH9EfdHUn66v3YyQ3HJMn5ABmvXVdWBybMMeghJEUg",
  "key9": "3EFdTf6uYqJTLMnJecMyV9KPa4BCrsJsJfEPGhg82Pu4nLWFsEWkLKgeM91mNRanSuDHqqwsMZCV6rV3M47cj8Cg",
  "key10": "41xpYe4eHneqhKJ6t1Mh4EWuncEbbcGj7tx6KPVSopfpyR9s1xmmCCbJQN7jdyq6THPbw9Wa1LeZZAa6F6mG7e3z",
  "key11": "3LQQCtUY6c8MGEUcVExpRieCwSE6PzSVgcpdY9FB8qpHvKFTt1hzr8kqgexskggxNgYQCfWhqRXvf621Wzwf8KuY",
  "key12": "3HFqZQoKzzFmnRACYUYoXEf9p1Va2YWG1xn4n8w53KQxBQ4XqZBpxnFLzkEjZR3HhGhPgkKAdbG1MviLpy4GXGV3",
  "key13": "3qu4HK4USZWgGuqWkWvpPZGrozp4GZsKV9hbZjQ7EqJH9JybBUUNbA6ccqHG4cnFaZ2CeC15e2DFhSnm1KGBngPC",
  "key14": "4L3gkY3do8LJhimy1TbikvEQv7HyHjwsW6dF8XuTv9jnMQ9YWZqdTUpBTw3WouBxURUxYLBfUGJRJkJF7nUSUJgK",
  "key15": "4VgE5CLKE1qsLQGuZYoJ9WApG4PrDH9GFntVnCNBEobaYQMhEopcYDdCprpbFbYJSYqXJzJU9WStTunsbNoEKdzx",
  "key16": "5ohs4hphHtBzk3mjvB1SCj5Cf2EWizdsqhVVWBNU2zs52DSvNGua4yznvgqyfVvwJWH9Dz1d8CmJRpgfFPYs6NnP",
  "key17": "3WDSdaQH2mqps8zMsB2ySkL5VHH5CnjgwUF2irbUDQ8YcTNcuMZm8ZV3qQjJ5xzXwsCo4xCDyugGW2aZMAiUJ1iQ",
  "key18": "39tgksBRH7nRfcRfLXcEQWVy3ySbqGnaDEXTcBdRWP6yVbUcuq956LLUvg96d49Rf9VB9LY1ukDyJwLVSb86iY8F",
  "key19": "2pWpCA9QE7f2eH5zH9A5yTNdGWyAZkHujRG6VL4x2Rs9aHsLaQB7pLVBkFYTbHsMqBuiZgBDLJiZcdTph9V1owun",
  "key20": "5P3eSWh5G7PqUDtdVTmgkv5ht7chgFb1ZHAKHu8Sh52wRcUnGYkKRFkkBJLoD2cn1YZb2C2gdfomifMwTuwe1P6f",
  "key21": "5TGusqJ14H4HVvE9iQk3LsERqcGwnnTM2Z34dXKBapf8AzQSoSHa679itvAtiBWARR6TD3jivfTv2BSVtN8cC1yU",
  "key22": "2SwtuEQYyKJcMnPpDurUSLFNYcb7MZ4mKXSgrG15dUu7Nug1dGzaa6jcAWPUNwhpbXjUxFpRsgBMfvCdfthqFas9",
  "key23": "5uUryvGurLQRrTusFf5fqmBLiJpycZnUzddnwPJ1MmD1hsxzWEoPdwkZR6FvzbrAVw4spD3CbMfJu43Fg6tj82NF",
  "key24": "5qugaoTTrFDFXJWXTdKa4YpQSD62kP4X4ut1NA2LcXD2DKXavdcx6WqVVWAo45nn3XUxZ9eZLL5cdxxeazJEDBp8",
  "key25": "um9vFCGaPdGGEPvpg64aw2zBNZmQuUMpKn4AJYzCpRRMiTWtd6QkjGsjtSudQ9CtErbKcGHdA5JgFwhzUudNJrP",
  "key26": "3MKmBW5MP13Wk8UAADt91SRF1jUfGaNXpXPV2GgqH7CGnLS869nmB2s6FBUiYBTCkDyC1ScQ5TufjZhsW1hyoSWt",
  "key27": "dqZdhdZ6QBvzu5m3KUfxLe8Fs4quBaoJyAVPPqBwtjxzosfjoQBdCDViY47wtSVtkWjSZWaQHvseJ7Hw5RUzSKN",
  "key28": "RwQFHECPuFiBVk6ecWVdyL4hwaXJEYubu9qsxD1ydMpeJ1FyCdzmNKMP9mukHLwMByE5dwt2v9sJei5bSxwYDZ1",
  "key29": "2QB44C9bweEDEPV9Rq9uo9vTMpkPBLshvUAPd3DJEEaJQpbezods2RBa9pABVQ8rHA1vuxDBwY9RSMeYtTakM11o",
  "key30": "555e72KVfWUtyx8SWmFSuqiH8sP6j3CxJkpeDQ5BsHegaT2NjkQ2XHnXVYvuvGWQQSE4QiMgKJHqRt87hLHvHpQm",
  "key31": "2sjBbijxXcnjtjSa25yPzPD8Yvz8pCCdo1mBcns3cFYeKJTfLh6jG7qcaFhcHocPW98JarBfxLsuA6i8X5sZ1cvq",
  "key32": "JrAGLvwkb5pY1qMVY2UXFopRLLZQBfjUcfeEw5grd4cAk9P1541ZE6t5LThS9eEHzurS26NsDaRuiheGjAza4Nj",
  "key33": "nsNhNi9xCGki9gdP27GUBQ8Pd2w2N6fxpCDVgh1c4U68v2XFXPZzoeXr424xPvrBTdKwhLdT8Njt5HGh2kRFCN8"
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
