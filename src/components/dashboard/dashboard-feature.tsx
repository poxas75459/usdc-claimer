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
    "NKiZVFm9sEVy3JNEv9aW2aMeLjki3XetLphPg3pyrVBziySs8ZAKzS4gwVmvCSCFZqZMqvQ9Qv5R1vEzQx8kfKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ys8y7nXKUd6yf4N6ErRBiV2KJ7DyhgqAbfHb5VYqgzSiKkkrDcUL4fPuRLeJZvVPHu9FuJZ589vikdD1vL91SdF",
  "key1": "5zYKKxGJR9k451CfrcB6bdaHejv86zwunrjZsxmgtAbr7xvrYu4967nSh4eZASoCB1mNwNR17HyhRfmf3toJRod6",
  "key2": "3tEWYbdSSWDYJ8BwXUpgqy1LXoedUscN9TdQTpqfn6MPE4bgNpU784SWmZERGi32m4MWJdPTop5pK4s6gzs8TUGU",
  "key3": "2t1F4c1aL18fCQjsa6FvcNBxQBLREhCP9KKpS979ikCUkUXo1rVSgiSMoPKcuZ5Pg6fiBMXDHyQLsYPYVFf1juPN",
  "key4": "5GnD62TE8hpq7KB3J4tK1vf2b1bPive5rEH8LZku7k4XJyUvTkExy2YzFHXWH2623MWC8nHqMUzha4MtcaQjow9o",
  "key5": "3R2NFRnJ9rq5kwWGWqyqNKb373Eb7vpknh9g54zMbPAdoBHhg839XBPugn7m5XpJMcQWLRYLD17JPLvg1dAEkEvD",
  "key6": "5BfQy2n2wa6q6a3CJZ4muofcdW4tLxryTeA4tutT7ZDsqe5hm4EDEVcCT6WUYVtdfmUBFma43Y2FPcXT7gpj2f8s",
  "key7": "26dgn8gHTGhrWmmttEgcmrviAexqHStfyNck6WdFbuoHVSXc62UFJBgaavTaMY8tZAUA1iMqwG2YehT5GZFPKDHT",
  "key8": "7xb5cA7J68ArUFooiksffVkWQWYeEwer81w9GjEe7XfFHf3ebsiy2XH99rC5wSZ17JMJQHq62imQbTYFARfW2Ey",
  "key9": "3r6m26uk9wSo1xrVfVzaqNGZS1KThkWsMX5tV9hxgZCGtGLSyVD9t9tG5Qsy7pg9yUV6TJWkzsSdgURs6xSpoWjg",
  "key10": "4AfNzmm2bsZBtqm9aaiqY86QKcCuxQeSPc6PqLXEXrDTG1wecj9dQVEUKKsnciccqnDSFRzF94ifM87qzXc4Rau7",
  "key11": "562b974yxG5QRLQLr5BAPjqJfA7QAfxEwet5mrKQnTJMfAKEGUKrTEkZeTSvgBZZfE8pJJSNFpc8nb71VEj68TQJ",
  "key12": "5iRWZoJwLSKFJJGTx7YMnHcJ1p65DzcFM5j4AR4EV9E5DVq5rwPgHknku1rTw1aSr3wMU7EZ4iwuMNhGjA7gVewt",
  "key13": "5CEMFucitvNWAEVtVWGpfNP5cZ3ofqPtdApY9cZ4muUSgkgXwWPGouDvV2scDTbip9byt6EVJU1SHDo2AbJYxG2f",
  "key14": "4JX5YAnogE1DRgtQoN1NJwUukVGiR8AFtcVSbYxtiuFjqWzeJDEnxAyo7aAKk6roe4j9otrEvzCn7b14QXtkETkG",
  "key15": "4kq7PF6KdvWoqoPx9SWV6Z4voqN9vUETSdBLvxPtVAPyyAhR1bCxXRmCuBKzg2BQsjSr2Tzz5zTexuhqcfFKrdYh",
  "key16": "3hGxGSnaTCnv8maxSqQynKWezBkno4DVDwnvawaC5oFyKEw9wDZ5FPVcdZKnJ4f5u43wMAoReqXdXwj7sdrbbZAk",
  "key17": "5FFyt1HFhw994Ztd4xzzWnPTVqS3g1BgHjb7Rw8fEN8G3t2txTCWvsytz4Lnpw3q4dMPoGx4edvbBTpiDrcXdFto",
  "key18": "5ozcwWt9WoegKavtuvUFQNbDCrbbsvj5fh89gSig7ZfdRyCUbvKhJ7fSF5FHE1BMd2fXmDCz7mCdHyp8BJYbebYa",
  "key19": "DcNLHPcqdjsFsPZ4boTqt8NwX8kEsFSJpSqdNiRj8re1XwHobdRqFRMZFBQ9VnRYGntWbcqH123J5mNCkd7wp9D",
  "key20": "3eGwW9F51hrt2Xg9VMQCcR2JPzuYA8RkM2UXa8gFzJjaFCTmqAy8RyVyfraerSGB6QF49z9FcQPJzxmnTyTE6zDr",
  "key21": "2hnwGjPdc9imx2qHxZrGUgZyHC3xTVgUVa8tcNjxJgN4dy3ALoLJ5Dpd5BJMfq2UbVtGgkZHc1bpcHKvEZN4Djs5",
  "key22": "mB4155otq2HYEgxWqSkfbVbc22wGx3twKcLycoYbp4zAhXcRyjdqrxRWjnJ8eZnSzN4xgdzsC5qYGN3pzGjdfvH",
  "key23": "tPVBatUUGS3v4idLwraS6ze8YeqjX3ZYAoeFTknu4LKYXTpCMDPzdCFHaGFgxHEC1K7VMLnMkMBs9dYxeUUrmdM",
  "key24": "sJUrF64cskvPZBH7Je32yy5EZDpDANTi4wCW58ig2a4xPpAZR7RAjxu7guRVWHk2vwb33AVyVdaB7Y3zwPcs43m",
  "key25": "4giy48SFABtTc78MypTNtxn1zjSQ1uAK37VhsRccsLBjxiHYQsqk8K1x1MAJzdVENGmCwXpSCmqv3wfkLrpbhnng",
  "key26": "2MraFeEBt1FGDLH9m2VjqdBXYLzZ45bo9S3TV5DSivq3izdLgRpcNj2GTEyDU6MK36fdZaqspJTibbphMs9xvucq",
  "key27": "2FP4SY8e7xMpWiwJU4fWfL9bmjugmToEGdJjw3gPcYVCdcvvDz9VExScSj2DMhsktRnhVMMNXoxJa9kervnVyvMr",
  "key28": "5mk27z6dUNwCV62mmBNjx6odyE49ZaxLVGTUAN9xqBvv73bLayXftiQPqEjan1PQSg1zDq5njyJ3SXmYaRHtLo6E"
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
