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
    "5XnWpcZp9NSBTarqiDjHcG8VWnKRB8Mr78bx9fP4VjRNnqVmnquTy87be6ZFQEhnCzwzyReCFKZhEoXsEraNpwpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7p2kPzSfHZhv1g6s198md6DXcdKU8hJaS1PQAPWsgiMBaivCCS2xELmvF9imWyReezeyV9T2tajvChE49BcCBu",
  "key1": "2UU38shCiVUV75S3JVWf8RgjGoen8xiKsdidTLqz8uU9uYe1eNKuuzAETmPtEiavpwUeDnctW1yWxjaWp4eSaMr2",
  "key2": "4YeKvvwHCLHx5Y9yB74txj1atEs7UpCK1Hxt9FQJYr2PFSeBvVDFxYjXWwU3ZZmWKWt9dRxPB8nzHEGV8QWjPpj7",
  "key3": "3j5BxViVpsCnpGAcA3VPFzh89jbjjw2AXnYZn1HRNwycHNEg9oNKDopZRuQy9LeRmS1w7CXTjiDAwSWVA9F6283s",
  "key4": "5r7uYdoj5qnv6U89zk3KKMyjYqZZaPU2dwcZowp9FfPbN9xUwRPb4NAvskRbjg47boiwuQpgk21W3CXpKdn6YxZA",
  "key5": "4VPmb5MzSCQKHBsDG1KwWNCRxRDsA7auytZQjcqX19d5Z5h1itsQMaMsHU5a6wh1iMLybZQa6cS4eU13oh8YuT1k",
  "key6": "5Z1AdKtYzmb7qmZt6EUBZ5BgAGi34WjiZfb1wTamBbv8rCfW7919KMYHxp9eqAMb8fGCfYVv5zkowoeNqjhXYha7",
  "key7": "2Q9XLjhnigMBiFTrhY7RbsUR7ENHsnte6bxRMn9utSAGEHZ4cwibQRbQkaga72SpYxp49eFJPrbY42VSFo8rz78U",
  "key8": "3gQ9TfuUeSJG5DzgsPKgfcmjcBcWybBZZexYrf1uBfwafwDySvx3PEVjtQxc1Tsqeq7nposbkUjJfsUbww9yQusF",
  "key9": "32jqwVRK79kR3f5qXmatKDDc7Q2WxijwJp5DjBujwZwijNoWbA32hxBLGCuH84wvM5G1SD24hUEKUtK7NYML5NmJ",
  "key10": "2pxAqy6F9mJBLxgU4RPwHYU6d3AFxLt2dCDMWVahAX5USnCSVfhhcPQK5eitSvBgQKimx8TZN41z5mZcPHTHigDC",
  "key11": "31v5bXRkE4KRSdYVkmwCxWogVnsPtRQpiWHkJHkEYCQSnSXvFM6BXinb9GVYEoes5wvE3sxZ1CFCttBcWBxA2FxF",
  "key12": "5WTZ3fARs33yuwynxLgxfTdaJdts2ueab3ttTjdrkxnv2juxXfMaE9sNtXizdrLxiXeKMVNTwbCVmDBvddLG2Qxk",
  "key13": "61JRsv7auV2p2itnDgEWDChxAyFr14p58h9MMDX1TBCxXzm4UGbWhZRUyE1UwWAcM12KW1fPRQ2cbctDvpCZrotN",
  "key14": "3pr34yp4scyDRepqmGcBLjmt74QmFokHWwGCT6zmps6yG614ghUuGofkLo1sgzBxtgCrXkS2YRcFMkXEp8oQNzNs",
  "key15": "4AoYcqiKGz3mC9RZtmsVq6C5pjTrcJr3E9rptT7DAffESpbPmZVR2pzxFuveNtUCtB2B3x5xK8PLd3ZeTvBoFkkC",
  "key16": "ynzCX13J2FFaf5fhtaidqeyxSxQdS4UoNWATqDJMvyqxYFhNMNriTdFXdqPETwaqVubyvD3ox2jzqtUH44DF2is",
  "key17": "54QE4sbks7XWe5iQKeUx7qS1oQtTJkXNtifaEFoAmTuR4yaGnsZR42BRJsxGcn7tomgceCqA4VkPgodV3SM9p7PX",
  "key18": "4dtjguefGeJcy5FiyFR6yFBz3zSuxzRQfCWmrjab9bAVFkGrRbbhuw8dY5QLYGrz2zPnPxNTCTH5ciFfpt5tFYAN",
  "key19": "VyZqY48gRhtWDYfHz2cUjWCaA36gG2iyjNNMkjfCXGvyd4xPXrHKMzZYvi1NnZm89TLsnncD67jYytADzwuWip2",
  "key20": "4y9rVa1Fn6sqLcAUdaAkSaXCEmAaLWgyEeZkZhVTE3v4PuywqNKtXnRvmudZ1FoiFGasqwP34Kh6mNny3MTe45Yk",
  "key21": "2jeUJ2GJKLzXABzW9ADWAjCDMMUnWqmqD59TxVKjbWjAVZ6LLWph76m3DnGs4cg8k13WweL3BT6H9g8PrPHFZqh6",
  "key22": "56jyoJQrthJNke6d9sZnH3eoB9oxkBAZ3vjoetLTeu4Z77hR8aotEQyN7Mfws7gqyjskwY4hwCo1x4dfTEgUjwRQ",
  "key23": "3JML1aErnELpKJL5BokxxnqZthvfKfP62xJimtDdo324B4kcuvYKfpSowd6bD2DUiMxac4kQPic6a2rY2SryMvB6",
  "key24": "Dg7UfbXDQXE93R3UX84v4i8ZTyCxDHFMT1Ei9pznykJC6VRrMxpWnBBDgCjA86kzkTZuk3CUQJ5wSK1hSmSW13D",
  "key25": "313YBXAJ2yevmSEGULpxgkYwyu2WPb6sfqcKEpmUWrC928aS5XaNpMumJxM3jf4yH9z3UcnXUqa8rnQzsuhpAKtJ",
  "key26": "2Zn2KnVEM5AcXhfEJyqKy7nGNqijqgUEjy9oz5hH4571KukMsFhNx1UNR1HHvyeFeaKAE3ArGAS433XRa3sdMcYw",
  "key27": "3uZcp1uhEDPdxo4EtCAMQCkhePFZtyVZ2PXujAsH2YcXknVUNvVMBLXoMshjoJiJKrHBGGbcZXxcSFwX8ekbzjvb"
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
