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
    "2f48Fmen3uFB6vEZsAdMziKgMRSf5V2w8REUmoiyuyZstVDiwxf7dZuijDBZFaHz8nNsLShJtue7AhiqCjJNGJS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3hxorKi6JvGaVockAAAgwdisQoN76TYrEPPTJNrMrSEqkjsBWAP7nom9PKm5TcbCoyvAWQVn7yn9cJQoqsB4gC",
  "key1": "5YzJXoerJLXYYXkEtfPsuZnJNS44dJ2DQ4NchgnRqQAcj44qUPBAiVNUkus9hVFqJUGtkKKnpAhsgtgHWncQR4DC",
  "key2": "3W3UkDjZWDvDW6x4keXE8CY1kEGAyNHpKHXcyxgHNNDKnGT3dCNrpZqe9u72H2suV5Wd5GacNe9aqtg4ipcWPqHx",
  "key3": "3QpYpkz1EdTgesgGRktrAtq9xLK7pQYNAApBT9zkgSCk85FXKZUFDsLsVpsXkj6pu524AfBoFoFCgR1zTA679Wpd",
  "key4": "4KE25QjRRj9S79HmEtBLKZFV6qovEpr87gAcbsTuujGmSHyauVXrsNZhiq48f3DyfGiXdfoXzZrM5s8c3Yz9XVXX",
  "key5": "4SzYg7efZfuFmQmEi1DY3zH9tFX193zwKoHEyn5F1Qrq8F7zPcBCwrfAHUkurcWCL1n7oTxfZkK98CDVRX6L49sX",
  "key6": "4FkV4U752kV639mxPB6pqNCUfSoJYt9q6m8CAVqGJcSPkwFdSViM7UqYEnAggbvbQDjNp3QhpLzmUwutiHk5MkQ3",
  "key7": "2X6HRoQD9D4h1yWaeeMuAqUJ1Y2qkxxePidaTvQ8Q9VLhGVm1ZJkXsXRRsh5QtGq1R9E6CeTajM65qNXyvMB29Wx",
  "key8": "5guPaapmxDnd6hmCMx3ULV39ekaqpZzLMyQSXAuvgPdBFXKMAkdjzxC9uRaUCb97TcnhP1GotgLLSzAE7c6jcmyN",
  "key9": "37DXJ9avSRnptto5YAEWvJcqpqb438yCYingPq6Wuw9UZcBN3Pjijdr1wcEktLctp3BMreWJBU1TXqFxtd11GGK7",
  "key10": "5sepxPHxgSs3ZhehVWHmDrmEoz7g3Y7dKKjKgWqDptcLKsGJKeHRq4nJmATLTor9ASGFibtpHqNxu9mbnQ9gcDcd",
  "key11": "4jGaAGmf8979qHaz8WoJMv18dUyuURd7D4ykr5ij2w5gcQzJjHrmofc4aC6Yr7hnxzEtWsUuJ3LSv9BfuVo5kKKv",
  "key12": "4ANTb5YmkF6A3cvkX3kpzyJ1oYrnSa4mtD8G5C15CxbvL6UnSNDM9RMM3RksXXNFHGd6XwPrN4xzsNYfFs762YR",
  "key13": "4Rdrb9S5FqgRNJk82CXSKNU3EdARUUS9UvtvRqBCGAwMnJ8xw4VaApn1bjV4Y232TFqQ369NmkDa9C6Vfzxr2Lrt",
  "key14": "66TvxMbHnHLDpeNnMfWbiFobZ5gVKAtcqVPBLXnYmRdT6fHesEmM9mDPs7ATVi5beHPyyafdtdJMuEm4438mmHUN",
  "key15": "5KJb4BXWnSFYdzmdkNEBvCLsd9nGfVnV9acnJuZJFUvwkpLrGTnhWvWvJy7Ab3NUjAFvWJWWsKMQuwuumZ2EKieQ",
  "key16": "5m1eXNQtmeHQVHFiWU8sTxM3YtNyJGdsAPeyx75u1ibQDp4pNKj7JKcXeXEce1MpA2tQgiQE69F5mC41PVsfN2vu",
  "key17": "B4BEnvi9uEYPrMB1vKoEkATbnNrRnbCUvRzMsfaP2H4nFvLjEhS5jPpU8m4yKH9EEQYcHbgdne5T8fPe77WiWP5",
  "key18": "5LirJNLgvYJM36Qie6VLVNCydRsaJZ1pQ4G8bopptrFoRgMsJvi8jwT71Z2nJvRpwSLEyKVkQtS2N3BPBA74A5nY",
  "key19": "2eXENgyZ9Tojam4V7roX1BMkwVyL174MEh55dzogGU9mvmXKZ323tE9QKqrkCSD58njdVXDhBuKpM3GR1JmfXU4m",
  "key20": "55Ty2nH6gYzdxU3DEwqYaW8fYFyS5EDHfGK686zHsg17rkr189ZKrsWFfvWgbWxdzda8RB6cruBD4Y2JUrTvovvJ",
  "key21": "2b5yzDFEP7MurAvXDRkx8czgGLfyDGXeJNbL43AXEvaEwNgF6NALpVx816L6F9nWzGo7xgTojXxyDDK4yPJK61Mt",
  "key22": "4dv8hxXzPjWeWC52wew1Bfr8A7HDFN1ptRQPn2io3uBdjNfPAdbJsgx6HYhWwZvJEzKpbkTNy3QRAp2EwT87Lowk",
  "key23": "5kqnAAg7tXgXRbjFjdWAzv9gcx8FKDweLchLAdKGxUZHUhfzXj9LevV6wMafiBa2L96B2bo9EZZJvjfSACGsafhd",
  "key24": "2hR1ZBezyiQQZ6MWqmPUHgfN7ac4i9HSPKLfqRRDj2DbxMjH8q3AHedpyeCRMFYGEUfYk9pLd6fesB4iGYz58HAa",
  "key25": "3PVBZtJJyFe26uYka8za9fS4mvHMqfBx6ajQtqHQ12Uur5ipH3MEJjh7YRE3MKyRGrFZ694fddX373KEyaQ6oNwn"
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
