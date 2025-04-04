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
    "4ZGxg699u8CVPWRchry6bhqewirx4PVXfZ4AhSyxFjJt95XAvFE3zcWeDisyvLdVyBCCBCZbENbfJBFQxWXZprV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54TS7o3cEQ33ZHT862q27BZnKWxG15w3b7ocTSUjHC4BRB5NKKaU8S83KEWkV5QQPS2auqV8oqCVs2Jhsbf4xgL5",
  "key1": "386tbNdiWrARZotmSwGHW8BmFg4pjGCqQ2J4cXTpJ4THR3Srrh4fXPxns2DFJMLfs2sdMNZW2fj2tJDrxSTkaf9m",
  "key2": "QCCUkMasiTPEfbALdsDEWL2Nxxg2EC5toLofxcR6e8KfrASQPBYjVNyQ3kDrpexEYP7pxzF1hNnxDZwe66ZYRPq",
  "key3": "zay1LvEUd8BWdBEWtn1FwcW5HgBbJSG4hgz4eEmtiDPiFG3xQe9uSbEiuaTvzqsZXn7ih3rqx3SQKmfLEeZ7e5h",
  "key4": "2JX68ZW4esEos8ygjk9JAC2a25Gpx194jDcm6PFXPVoZWKVsL2t7xzqMPJmYqWBgTE7VpNFjBuqKfZA2qMKPupNQ",
  "key5": "2yTzjkfMkGFSehDMqYeApuGrWmixizsL2eAGBDMQQFPWqZtD64kZNALdkCiFXyp9tjyXFv9gNW93RSpbe2mNsFSb",
  "key6": "4eifW2tQjzE2TN3L5NSUpNs6hs2YoDprb6RqgfqjLMyS93RUVetMWgTMt1pWR7Qpqk7cFVxxHKvEWFSMtBzHtTfU",
  "key7": "5ZevWrURBMAq6u124hDv6iqbBRXhcMRAKhvi5uNJVPcAqfxDwZNMqDXmqeHy6eZY7nwzkfffSbpPpFuhfEJJCWPD",
  "key8": "466TARYLVhTxRZtdDFAcyNhLBwRQz9q1TyvaHDGVW8foZNjpEvtBGVQtK6ySa5HmALotYdW47Racxp3nN8wRh7Yz",
  "key9": "4dutnLf8SNe8ju6aHHp94xdycStxRhgitqYaeVGZFcet8TderABJyGTPGhNK7VBsE1zZRnnESiV4UnLw7Eu8NTNY",
  "key10": "5F5oYgme1Ye2fyyafNBMxbyjjU3qczVtkvqstSi7hdwEzxVvf6yFzn3oZmzxAmmhs5QxMABQmQCzY9X88PrVhcqZ",
  "key11": "2wPSBV7fsztTaW5Mwdk1sQrCf9e6RgQzxuTQvSJGHwaP1AxMmhYHFTnmqbH1VKCjEKtvnAo5FAzt8t8uhdGXfEAb",
  "key12": "2CgHVVorZLa496Bpq2MYpyuyHcaRCqD7twjAdb9ptqB31kJoskvJnb5MUGcf5DKYCpcAMQEi3XD591S1uB6AH3bg",
  "key13": "2vqHRw1Uu68s4G1e8co8zMTcxcf9TWUvtj6WRs48dVhqEzVgATJVwFu6UnGTmDsZBJx17MWGAyy9h9dR79mFpZvf",
  "key14": "3zmbubJZHi9JtEZ45iHopnmgA4vKFVxs3mRBNeLysHMKW6DSRg7qCJnxULpJ83Wh71nMuqbLvAp6kzBXVRz3H1pu",
  "key15": "mFjJPYxhbd8za78nrjP5DJ6ZqDyFw47Sp1rQ6p3b9X8oHqmo2TXjN3Zx9orFSmeBvD15f1h4hBHZvdUZUmJzAAn",
  "key16": "2sJXamq9oihgsKVjLQzNk8jrrrbWCB9NDC9UJT8aYWEmdtNMAoxP2C5czh58Qqk6u8KZMBALd2kCEqbd8QEdJ5Hs",
  "key17": "Y6A7U97G31bWcfUzQJwPbumK6q53zqh6NQiDh65wQhmdXyYXJ4e7FzcnsCJWknBiyDJcppdX3T5uXP4pgFkbfcZ",
  "key18": "5e6gR4a1vEfy4rCNYhWYMwoH6kGoT6tEo1Roh7BWRXBJUUnDTRiyjRw72nRzCJk3zjoYeZ2QKZ8vLg7LKVeNmD64",
  "key19": "2hZD2Nki7P9PqZZAQJ5hzgdLJHSJA126a5w5Mcc85LV3TPbQHsFLaSFbMDHxJMsuEC4sSLk71ETMyimK4iCBmrEh",
  "key20": "4iNyC2GFJ642ZYrkpGkUxZH8481y8yDHnwjr2NMBsmYCQ8GwQ69CNJAdfc6pZkAY7nf93BN18A3jJym8pLMrU32M",
  "key21": "4fdo333PAnE3gaJM9xPpnV7S3fRMZrwtUsJ3BFKxLXu2oWm1dD5DQbPhk93kqNrw4CziqjD63atEhi2D2zkJFpQQ",
  "key22": "5QP4XUkzar8wHnZuBLL7EzyLbSWXtWtK7q43oAg5XtiRnziMCz3EvVj7Y1uQhehciJddQvy76bh7R2ws6v8vw3Ja",
  "key23": "3C6YDB6r5wMxS6YmLsCHngFKk2QWtWboEbef1UPdEiDqBgEHJGY1wnZFctu8388HdSMG48vTNtvoMrzWjqUBXCeP",
  "key24": "45h4JrJT9T1qFyKRLXCNk4CLd3bpu4DbfcJksVfu62GsbyctB2HWXMetHPMebQNPLr4pAaG1gDLLp6mFMHTLd8Zb",
  "key25": "4aA3koF5ojbErSLdnoKon3pfmSWxbhCz6Qocv88HKmtG9Hs5eXxUvqWeW2TfgLMVsGHepviKLEGTmnMS1Zj665uK",
  "key26": "7Vvf6f8WAHtvMQHZN8WkSvEn571ZxawVtwyjF1n3RGD91Kv2bP2jcCoc5iueAj2rN4riJfi8nHfjvQ9CTEQgTBY",
  "key27": "2huoHEdcgidD2sHMcC8k4C6JQa6gF68iefPNoHE5eQTxdBdUZUwi4VA2rxGsBvpQHuGx8Zzv8SypkJPpmd9hVPmJ",
  "key28": "31hqqoqxJ4AvBkfG8GWd2yymqE9YorbPLvQ3y6w93wA6bop6MpnyB52BWF2GcRVFzWEUHKJXdmhiyMQNy9FesSqs"
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
