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
    "4QBG84TYhApSbrDXNEAEE6u4MCnKVsrbL23ukSpmmUrQZzQznZ8so5eLjrFXiG8Ch7PVXDjXLCRJmZYkHXSUy4Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pyWkMdkXLHiJHMK2cKibJTTfd5CfetmnSRNsvhKPTMe23PoC1LjSag4UniRQRmWUE87vr3RUt7Kqj8Yt5LejUZM",
  "key1": "2AAFey5tSfv3ZQHrVswnwHtgwwCM5gHS6dX6xqM4724w7EPbD91L6BqcbLFbo8h66fb1fx58yiZiGz2h9weXCE4g",
  "key2": "8xfdZo44TWFwB8W1bV5zEmfZPVLGikQZRY9KTeQ8ScEbGFUNu2TrpBkQGZ7vJY5UKsPFU1mm8xwPQQD7m6cjLc9",
  "key3": "5v4gE7uRWh9286Wo3aE8xKdMNFNfcs2Ydb8kdNytd91EA8T3jsBWXqnT1QiKY5XTxd2reGCce1FwJtBAkbKcywoz",
  "key4": "2zh3bfnQnoLJXSNqi4TM4gy7KFpjGLpn7Uiqh5xK4zgAgci4jqTtoJzrBqAu6eMDNppA6FXVTPwrcx8W3vwMqKjU",
  "key5": "2fNkbBWv7DDzrYAdZKtJWbT5TQT5sjFmKfXh1D7wjN5JC5CZiTzjaCzY6XcZPg4iRSF1UsYKu4SK5y3oBng9SUau",
  "key6": "3X7rZT1sHzmrtJ6Vg9BZE57f9qNqRtFcwvEjmiv2zpXSrUCoQT65iGANtpVXGPbvF6M2BKX4LV8EzLLDk32NA66s",
  "key7": "51VXNvfVm49BqfE29ddUb17z4k1J3qkpuQExu7zC5p4miobzb2bdzntj8QmQHsmmAxck2mJkDygdtjeWUoQPvdap",
  "key8": "4aTMcyKKkwx4Y6E83qFZ1JZTLKwyCmfR8wFNAzMcc9u4UX4CTLrXYbFS2dHhbvnvRxwtn51Z2oqPorS2yWkWMA6f",
  "key9": "4WCL9EJudXP2uf86MzPjs8Poko9qPhy5tX4Cstj8X7Dv1HRLDvnnrcyKF8cJv3CQ8iDxuynmbC3PdKJdg38Dxs3R",
  "key10": "3s86ntfnQACpKTL1L8HSAyuCasJX77bK6E7MrJsBrv8iwDGtJQkpPtDrWUkpYCKWPubMS74pB8PVmD5oXN7Wck57",
  "key11": "5WVYr2F38x4iMtMtE3NrfSXXd91Zw38G2eycMJ6XDwaUvmmti2PdK6QTys6ZEv1h5SHRaeSWmcZgW41zmEroSDVS",
  "key12": "2QY6fdWJYoEiAXGGfivYPkcpi3HxPgMG7kCrDP4ncgnTqPj6F4UrEBAb2oWocMrV3YroqvQjnouV1a2MP6SKLbVi",
  "key13": "3gbyB6LqKp98Y9FJttPV8VzJHNDHcQykrHbFzoAm5BRDSQUAMqvSvRyRXT4Vek7YoNjJ9edhgVUs2D98TerGhvjB",
  "key14": "5me9oeKTnDh1pw8R4LAQvJt95kVsmcdsQhNnLyC84qGiBrCP9JhdXixTJGsE5mQKgoFSwdUwDwP6JuiToNNfNj2M",
  "key15": "4YkA4D3k9Tuf6SYsk5j7RKgEtd2rXnzsYpkUMZXhLv7aKPvcg7LBbonkCZskkkoTTtNDmrjeACu8pGRo9kHLQVWX",
  "key16": "5aWDDBGMWvQ9711nYaVLWzDrxqpAUXcAqrS4c51hhw98Wr6Ue8UdseBq7GUqmddzSW5cRgZyjGpPwksPRV3F1rQf",
  "key17": "5ot8ZyGvQjn4xZDKyAj2VrTLHmSyxuTJgtAPBrZneRa4MsDgBvdqDZm7M6gTYKSW9qdYTthS6VfYqxAmenfptBXM",
  "key18": "4hwKjtWXACoad9UGLRA3iZjB3NYwKLBMVTrbiBKv6go6d4o4wn88FbP5deDzPpjGMRNHzLtxbSAK5F48pp3pDUVz",
  "key19": "fnoFgiur244u3SZnDM7yeUbnx4o39kgVHgF56Dfk7ggCkuFnGJvkasGm7vyCdsgJFW78YeVcqJEvJwPsVmESKFp",
  "key20": "3aJBdrPX8L7dHXttB1uwsB1nv1p6mxLeM1fPwR9yRSfMi3fVetJF6wGwekCmiXGyrCLVexYAU3uwSUPRNdKoVKXx",
  "key21": "3jBN6g5J3Yjq72dg6xi8fGpfKHPR28crpFqMBkvVFnQvAmyW7S7pd1rBwaHBnDCgMQv2mysydK16qjxHtnXPu1T",
  "key22": "2peuyobHeKjzPK9D9122rmqtuvn9VNBaeKCf3Tiq1CNHxRQ472jtmti5KtT4kvzmoMoRHLT38SBnuXDAjPB3xM4E",
  "key23": "aH8vwWPoFiTULsTJ8CbZubPdq7unG2WYTwgmu9KRdh8bxemd5WVecxPEqvf6ie33CxVzzbXrayEDnv4MRiZjS7q",
  "key24": "5HvxZbitnyLGqKpPsJea4csq85BEQegUk7jcC1EC9EqLhXVZVYND5WBfyKTcQwpQFAD3uiNbefNcUdxtb168vLQ6",
  "key25": "3CT1uZjgmgpkx4nbKPgmmVESBVQ3nNPCM7zKLAbr6gS2g3xKzMJwvKjHqSRaCPScu6rGmE8iVeQcv8NWkhhQnZgs",
  "key26": "3LgK1GVnBa98s19hQE4CgMEQFJD3duAJc4LYwHjoEqfga6F2CDh7pSkvaXmv9qcCGgjSMVLebAxETAsMfQHjsnEL",
  "key27": "5ZPBpL5cwMfnnEYhzqL4SQAsH9XTnHU6mQfCyDVfNRccmuGsQJSAgju9dLBpG9VUHJ2AY4L7vJsQFAtgDFM4Luss",
  "key28": "2KZJsxzQ6Ke8PdCtZ9DmvvfqADjFPoHkHF1fPKLk9edBDgiqvy887GbFGPS1NL6o2d2F8GB4u85KB5sPY25FRnKW",
  "key29": "2QWrd6K54gbeUUfqJxtcf9SWbAiefCYnNgkWpsu4cUhg5HoTLAFJtH3UtPEoPQVDaEuD5kdbJ3uwTJL15Lt7zBd3",
  "key30": "x2hkH3LgFFnLgjZt8a6qFa6DM5qibaduHL6QKehkciDZn5ADw6ZbSwCZ9CKWmyQq6xg3Gd2y7CNdVskggPSyaa6",
  "key31": "4ycCrC8etnMRtTab8jq5HLbDGiMei3YTrHHbifLwPjLebwozsWoiCXQd8Yju57yLzredvLn7pwSbBWHGV9MNRbkK",
  "key32": "5MT3bqGpBLtPiSqMhg8ypszstCrojw3Nb678DqvSQofjUrBvNhNFnZGfjvQknA5EhbXSNX6zniQSXtEEjU5Dn3yY",
  "key33": "54ehrookT5sKM1PmfvRLWV1M9PGHKunZtx1rMpfegRs6kJnpA6wbQd5SpCSnUAuQt5eMzJZwK3Y9ZqCmgUcTVfoJ"
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
