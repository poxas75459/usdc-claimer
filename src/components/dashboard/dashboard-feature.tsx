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
    "82GwaF2scNbqKeZNCRqnZUfWK81jGm3K4JS4DTNtbtugmyNxuctf9sGmi5QxYvVPfVK9WDFpZ933hd66etPtRVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dewbEr8s2NCZa636PPww4rnkM8e1pKL1KerjMYcgNPNEZSHwi7pewqxMTczDai2DC52e7QnUu5otXwdroiC5tJ1",
  "key1": "4Rwowt5Mmd2CinAtdRCF8k4a4NQYM7XXWGMe4iDNNAM5gMh1dqNeadAuVerH3449tRmyDYVcnT8zk73XnHRJhMXQ",
  "key2": "2WzpbmKdUpJ4Zc34eM12Y8mymQiuzyZXTpzB2Kf8aXApseamK8ExPCa6k2JDYMhtcZhpudQdMrancCWusAmXw4XB",
  "key3": "2RC3mBW9GdS9JsV85KumnoQHD47AqNphuJYr3bZrzQvC9ii7cEvp9WsdhURccKGyWbDsG3i9qmyW6ZPDthpZr2dn",
  "key4": "4LkhAtntVzZ8VW8syStZZHBRXkf5AxzHLPHznWoTKv6x38rD25svE4SPUnHyTqBY3tTJWkPs4QXYroqWXSBfTWVD",
  "key5": "2d9Az1qKjyPPUV3t8emYchFRD5yrEghvssYADm2hYBhdrecsyJq3T6Hcpy2dJT9igXVjFCpHzUzyDdmW2Mrpq8mi",
  "key6": "5mwVTEGKSnKDWxdLPaXZ9MXXEHm112UpqiPnjBuF5aCU42APoveTXFeTwTavdNnxrioqCkG3gSgxtJoXpiZhcjXm",
  "key7": "5YQUzQv2SUwcZrKU9uzBjXQVtat1DGZdoQgPKj2DY4VRdyKLQzc9Ra8jYQmqsxMUYhEseJyUcT1N8V7hp4bG2eTN",
  "key8": "4VFPVbHzSWx5wtcHVJZ5C5b3W4qj2JA7hxKe5URrM2mgXdVCDFboyYAmKLe4Wi14AosvPvt8xJD85xovcprdEsCX",
  "key9": "5NcCE7q4tFM72Jamd4UnV7tYSgPLkND945iLhEbVLQMgV3fhiicw38od4C69sqWtGXgJ9JbaBv2HXANHzD12u1fB",
  "key10": "39EN1KvTJikFjRvz7uNjd5f4AAo52jcXxw7wfbtWjzVaJnMmSaQAgVD9EZmxT3yCon7XtGtb7uqnj7NFQ2Cs5KGR",
  "key11": "5CadxYHp5eyY6z2YRb8skbn9xcH4uZtpArbw81TNbXfiertfgd6twFrfrWzerZsFY9vST9XsyfPEaqYPbNV4hr8h",
  "key12": "3JdowzCv3GLaHiqw9CCt2KFo4oY2uimrpyx3UXG6NXT8SqZBZ4QfVRgtr2xCwTPDxY2eC79ByENLY8Mdvoq1CCDp",
  "key13": "3X3hqvxsfM5JPHfN7oT5u1MAQf5D62ktHDWgKYaRKbeUSjJcRJan2qmnW6XRoqaMzPY2oPpwWNujzdPfeqxV6r94",
  "key14": "5FWz8TPDZJCbZK5Qfo6KHVbWKuaVgb6MeqhqEH3GpQfoE7m2Xd2hAhDKADHjjcQXNy3zV9ajQEz2GbtqctCow2dz",
  "key15": "3iR4jJhHo4GtzDispzjin2e2daRPBBdUB5aD3R5vjH9XHv7jSsqouyrWoGWq7jGecyMFE37TWNJCE2VwxY551D2X",
  "key16": "3pLyGmkgAZWs3LBNWgiuT5shRwpHzWYtJXgzYj5XsGEBhZ3V8fycL1DfziAukioZsCtTDYc23d8bmmaNAoFLV2pR",
  "key17": "5NgQtcgVvQchUspS5Du3XsLKwv4fVuLh4ZNH7Njm4UaMJs4U5rZLqaeqgxaZL7gyRsHoryQLnWzR12YFxTu3AEF9",
  "key18": "644fG3rBAsc54xSmcuB46VeESZFhHD7Lo1RKRhdqUHKn3dMKZCam1FK6WM66X4bnmc7SmPDHhdRQwopcHBqmquNL",
  "key19": "5cU2wwAtF7uNu7dpECsdYCWtvGbyJMNnAj4ghPfN3mWjmHwZuEUc1Mv6bZfiWd42Ny19A6SWsCx9BEue44eC4kDo",
  "key20": "3megnW49nbNEKRViKBQPLL7k3nq5Babk8x4fdoojdahNbX9ur5cu5iQ56DS4PJYj7v9FxPnUBFvEETCmPBarbSSd",
  "key21": "63dJjTYP7tZUzw39j7TU3fVoMqDSbSiwNbKaxfd6zLZikpsuz8AngmfcX4oVgN1vjuijYBEUQgRfJgUtBbNad83q",
  "key22": "ZHDhJTwoVWpKfweZaqfcSE7w3N18mcZo3mBr5LcrCxQAcPB9FQ5X1ybmHUZo78xGGherMsCQ4Y7mmynmLJGXv47",
  "key23": "2rMAJV2tmUDAB5HsXjFnrnRpeKHekQUP1ut86EzDGupbTsRKN4ZFD5H4bP5Umachc7CTLGRP1j1Ud16Kiz9WBH1w",
  "key24": "5AR6g5fzUxjxUxmv1aWckh3nAprfrgHXFstWBroeTVvHLPopBvGJbVaJ1b3QwY75HtowGNSDh76wK1VJdvDUFjA4",
  "key25": "db7eaFvUq7WKG7uvLtotbnknWbC5S9JjRHbYQSCYXBzXFuoizwfXkX6G1tpwGmDfXDs9ND7aHHeJPPFFS9KVSHm",
  "key26": "4i2K9n7DvrEpNuqusHVvK16CpYBbyH7TVuZJtc68zz17ihW5GFzxW5bDdc2HtDDC9XKrQbNptfi2keWFT5XJW1Ht",
  "key27": "2hxtQkHh92Mt138ezJwtqTMuhMf6vwn41E9VexFoJYjmXuMop4ndifbt3Wo9h5RTp5REhcmcXLCQts7GUzGn94Wv",
  "key28": "LkHSMEzu8UxEzUyqwScxbriJECKChTM3B8aNEaZxG1wF9CD6Ma24jurgVdNEyQp6N8FJorfqE54rxZBpi7FdLMD",
  "key29": "kJRBdqSE3kpPmmhPTdqs1fhV8STXeZuHHyja6P6vi1jbZAVRrfPsmWKdDypNe3i5jHxqaWGAgba1vemNu7SoLsp",
  "key30": "5VdWA3bz1zGjFEguUCA4y1sgHDqes5Fx6q7X8TQMQJbGqJ6a5wFqLwx7aDb9CtL1zGfZcLroty8tW8pd9eG7USoU",
  "key31": "3FCLsmo77Xf79oH9mkjMfk3Gr1DGtVhHAW9iZcbQUyJuu48RZDkfqLMeYsysSa1CFdtpTLVfYPAaj44Nar75PaGL"
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
