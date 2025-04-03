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
    "5HnDmn8rg9UVXPNKYtXaJUPYoFAR7KHjydJLPjXBMVaHxSM3EbzjWbEKVg51VuPyuGuaZRdwz4nsWiTk9zC9SfQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGaXVf5HQkFU6WaLbutmEqbsZXbYrxwx9tVwQUjmBnQy3YQLwFn2fEnb2fz3GZeTwhsr4xo5MFEwN6yMWuzQeJv",
  "key1": "Pz1zojkZjbKmH55XjhmMV4y8n11jL7EG9dQYUcQYSWMQ1NmQMEfFF4wZA24rA5hdvRedr7tmKQ3UCCw7nAwQm7L",
  "key2": "28uLo5HU9g6GkVYHRWgmj8jMRcG6w5aYE1uQcb2XrmcijxUmmVFnCvGKePXvuAzwcU6bpNxu492bNim2nVasGLNr",
  "key3": "31WxmMV1yrCPH5E796StySnDqp6VUuWYdbqQ2yg9BHVr4RJcBZaoWKBeRj1vncoGGcKG2rPN89vA1gyhd8H65dUZ",
  "key4": "2sTUVHT5TA5LQvDfzY61xy8kySzmuwkNfqNu4Ae7zjCPdTqjqLjd3c76tiSzL3fXdv4Ch5EK9z1kYXSC17YFPcMq",
  "key5": "WXrstFwyLs7Z3mQGowVFXn3bppA4bHUU7UyXFKW39nrkeQ31DQWpKBbpdU5zTNFeZe2ENbBVg5LTLAGNvD2dZH4",
  "key6": "4XB7zvgkUpgETodqqmWPsWHE6qpCZe5naWBB7sH6qGJi5UhmDHHYeoQTHWPZw5eybsrA4phMe9rNtCKjare5mMne",
  "key7": "3F5Kzmg4PdSzoDLroYyTmBxbAdYBmKpziFBDZmrJ2MMxJJn5JGJ4mhzV91UUnSJT5gmhnqA2SnQtifqvc36V977y",
  "key8": "2U17sNe8oZT5CkzNsQg1vNPfiy5DywGvwLqGwqBUBejQPasvtECS96qoE51mTR9myNyDG9QbNd6i7pcnQgKmgHus",
  "key9": "5C9ss8eZfp9a1KRLTpMnSQC3R27V91rs7XxRrzTQWUn7n4ZbFbd78HgwBJHK9DUbp69ZdxqwZk8FtU6wcdZQRcV1",
  "key10": "58MaycRSGURnmUdc6NMfBveXdgusasXz3UC38AwBzCit9tQ4ptoGNvWQS3f3uGeJngtnMSFHFdaUev3CVEn56wE1",
  "key11": "25uRsvX4QPbP9phvbwo2hofdQ1Y5pCHJ8CsKp6z9LrxbD2TKBzeePBqQRAnW62kxuU64KcUwr6akXHQJrBBDr9hM",
  "key12": "2NhEBcAkxi1u2fkQXthuDmhQBC17k5suEKy8yda3gWcykQKiQxFBQj4u2sYkZBBF7m6m8ufYCCMukhDaf2dsixFK",
  "key13": "2AMTYGV2NDuxnN1k9nEkJb6EiVASiyU6KeAdiMjyKFVWBxdkaM81MsYsqc7M3EiPNBoft34PKKGypgqMwXQ96pN8",
  "key14": "2CdFGapbaBGa5Huj5bMHqptfSdv6L2w1e7dQUbJVbVQYigDnUnzvAt2zRqiWGyxa9TNWFSEKJvQJiE9ryBpurVTB",
  "key15": "4HD4tRWJjfmG5K7mwCPHvQNWDZaQUqYShPQkD1r7gPg9RtHNmNJ5XPdLU44zHD4ve6nWdtzxcuVZzzBeYx9hytmy",
  "key16": "42vuGJ3bi1puiXaMsodgE91LgzVY7mFw8Apt51DX8GWjCQaPFtPB9vxN8wG1hG6EsDTVyA4Aqh4Cjc44VW3KinMt",
  "key17": "3HjUqUHVvw63Yujbki5YUg1AyS8WdTZRgrEo37t4soqmQPweKutaoZiXfH6u9N2RUAnCt3pCyLKifW8Hq39buSGU",
  "key18": "XVY83m2drTDReZC9kFuJWzPTHwopTjjoYjJe53LyCnmLYGSRXU4edaLWatBkzUCSGtz4c2HHds1gfrFhyzfFSWJ",
  "key19": "Na5NY86KtjYie1QEgzzad9i7YUNBiuEzaFfdpGai8dgNjzTSvCq5ygwj1RGF2hhChx3a9tDStcGWUWvNcP9mupu",
  "key20": "2hDJkT4SgBVqrnC7a6aReyr1wYj4QWjjYjwBNey7eLZAkta7jeMBTJjJ8okbSZxRysy64Mqc7eC5bMM24hNiRXYw",
  "key21": "3RrUwVEok3L3G6yqWX7J969TBbcFnfzYk2fFQL3aU6mt7Cx7bErYfjbqcinkUW3rNfYNvyLzBU3xNr64HDQdrpLx",
  "key22": "we7TKThaZM7qaP9uKU4UaUYGNR5wyC99bnChi1ZH9jcYzpP74Tmmv6A4DkxuHcJLbbsDEf169dQ6BXCskh2BmVB",
  "key23": "47YtP3ymx9aUmCWXjU4SLMJrpuXpqtJ5eyQDXQmz3QQR6TD38SV6cp9SFed1fqGBdhTPuH7sa9F7csoU8FEVDoyH",
  "key24": "39hYxZqgb4EjxFGT3hDZCbkV7fM9x9bVfR9Q2k8xezHQDKVYVAWaaoRJxk4BXPiEGFBzB9x1fe9QauTWPgB9joB8",
  "key25": "3DyWcBi7oWnFbzKHGfExeQddZtNfAiFvHNwMqy3ETUNRo4NzMFW6T5cugddFGqauqF5GsP6P5ykNvm4LJ5wo3XQM",
  "key26": "3DDh1DvrHbhDxXkM9tD3nWS2ZDzxdwiajm3M6gndUnJfDWodrh1fBXdeUHuCheotacdwDn2BmKbRgs9Pxakvf3Mh",
  "key27": "58EfxCcpXDdFKSJP1xPksyWKcnj9Qqkz2MeXpRVmptcTiCdnquHwz9pfqxv6iXnceRiciCQBHKutYbNRfei1LKEA",
  "key28": "ofBC2tojzCB3aqpnXRTU7gkiNsgQ3EtX3mxLh3PGrNjSaR6sZTSSEK4ZKubtGGQDm3iWEjgyC9fEDD88qyXmS9E",
  "key29": "oixGRDZzrgxPxdiYvTfr4kTmix6NVXfWZAGkkBvXhwXPz23c2wxweGEG3JXuEC4UxbVvpSATyP81A1CVcUmHGsA",
  "key30": "4pAbRh6GCbqLASdTgFo3vvMyDACJ9kxXMdbX6uG42yRF2SjW6NNNwaVCsYLUXvq3EpKWqtZxYJNKT94w9LAhvCpo",
  "key31": "4sVMNbXLV7zEUxBgJcqT9ZWTXuiNK4YLvffZG6QyFG3cFjxh2qsnbk2TxGfFtByV2KEF5PmcpFRbiD48SGYZT5Xa",
  "key32": "5q4HT92zKTUATriPsfifZk5FkEDJ1SZD97DVQ4m7PaRwCQD4yfw96irq16qAL44PvLeB5sJEeQD8CdYPKDPNvdeV",
  "key33": "2iwEHtAUGd59hxuBMhPNNzM9BigK1CdgkXxn2kW6MeNguC6ULjkgGhQGQ52xeof271SuPV1PRDiyC4zq8VbRsHs8",
  "key34": "5S34vcSHGrQvqrWdAbXnwhpT8JbCNNGDa74UwDjp1Haj7rD6jzvuxkkjfnhyh9m8tfxzWVCuJJULZNL7asQoa9QV",
  "key35": "4ddov7mYvXQ2NayPg5GttocJU9UwXvAFmiH6nS51A1SpAXyyyq5MXzenH9GAX3FQAGGwY4vw4g4HF142aiKjoQJs",
  "key36": "5375YA9XX5j5ayDpe1d7JntK4WE3qrEkmPZ8pu5gjzDFanRfrfm8RwBnuNn3dd2Sa57ezXDHKKbPJiDjyH2F7AK4",
  "key37": "ykNfFnppynEDxggVREDHfNHTLQyHYKAVTnPc3SDqRMJHdujJnQBp3Wu7c3kanZzjuthwzWkub4t3nnz2zLiRZCS",
  "key38": "3RsSsvzioGEgPuNvbNvGwvFR7ttSAV2cXTDBUhcWJqxfaFJGDPsAFS2B1Y1LrbbYmQzURpyxHhTv1S93SV5P3gN5"
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
