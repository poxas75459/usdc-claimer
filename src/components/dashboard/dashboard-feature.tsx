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
    "4k2xd6vhLC3auFQPPU7CbNVU6opyxKLee5WxNymCkycCZHrj4EwbcpcjJtk1LAw4MYbfiLQvCgDCKVqfx6cHAEni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrJdYDuEX5MEtKGbGGnKHUqaU4JxYPW8fTp8S4trwPLwvqPM3EGkEAoN3WwpJg1fUpDMYvaRk917EXXtD9K6QSV",
  "key1": "5c12E8cYFc3DiwnbK7LjpuDWK5xFV28hMhGAcSKGDdpX9dPG94eiaFjryQYttG7RgVzPw43WQxF8P4sQHgWwW1BJ",
  "key2": "4Fs6obELu4t4uZt6Eo6GkvE5N5Rh8F4Ztw3JY6g4QrR6D2JdQUi9YH9CpijWfYRPNHc6dQkgQMpUC9Kykyi7ZkYF",
  "key3": "3ikiztdtA8EHcPZTSTPaaZU51mSgYEpxc7hQeR8FMu7Gv31ycoJ9Q1xrX2MrqbcwY4xsiJowaKyJs47hvfTRuqSL",
  "key4": "5jDVGqNAjrdyQhhj2y6DPzPjwVUi8FzXxSxHFRG25VQhwCDQ2X25nRPqV3nyHKvo5gkvSWqhuKynUHe8rA2shkyf",
  "key5": "qSSrhThtSLwGF6fN64y343jok5R1SuXSATF2cHPegQtK8tyMH1qbKiNFQEc2SBjxNhCkHubMBDvrLRzSCUfwpCd",
  "key6": "2Vqyg6pQpwewRGe78aYsX1kHLy9qDbEoH4Qw5N4CrYE2s2E82RRAbA99cNYaytKe8H2J4RXBxVi1nxH9t7PZSEDk",
  "key7": "byLBBVdGYEjJGBHPiJv6b7zS6wMdJNQVh9BSHs9WrfeLAsJTDUzSAe35VrN6ddu7zqbSRKzFmMoMrcyd3PUxVRJ",
  "key8": "2D8j1yXtwMoVaHLnzNSHwZUC3XVMd1JeBKt27yg4rkChY4PtffXWYWPV8pFhd9HpYAjL3e1veazH7DifxL46ri1J",
  "key9": "b7Z6aCp4HKqhXuCL1ywbFHbmz8PoD6TFodJF7ourziE1kKnZpRMffuzQqQ47qyHTuNq8YATtdgpZxBsPMuTNbfn",
  "key10": "3uxZms1593nMnceYRzUMbiuMrjqhxjia3VE81PFtzAUKoRJihP2Gxbbx4edF3Qtu4oHQ8suEYW3s1jMcyFkbxtic",
  "key11": "2M6tqLrq2UVztmu7raJhy1nLnUxto4tifvzApfHjM7ZKmKQ2JSEZGyxRiVQ3jyMuqKyzJhGzBEg2WHaJNCNeSb2P",
  "key12": "4rRkUunzfwKW2GPgHadzS2SUsus6JJk1hgrC6q5X2dyW9rvcFcfJ16SVQNbVQjdPntUC24tAB8ybRBpD2Pzd5YYL",
  "key13": "4cvGPrbHbNxWczntp7Vz2V2kbcPj5uBzcFQNuUo1L4654SzLibYYDpseRGu9GTRh41UyBwVRnEKDBYgPJ8juFeqf",
  "key14": "BGtzWL7hSSvKRTjjF2vA2VzyqaxUBk7RJVE4ubWmh89L84AXxLBtCjvzokqNEyqLUYG6LknmC4XNADNUQ97YSfT",
  "key15": "52BSdhjw1fPJqgqUDZ9dD6dN1xHHkTqWtvvDErLKMRxrq42VjxfKFVKNz7yXDU99urEFiBL8UCFD9yQfub32Q7zq",
  "key16": "4ugxPAWX9ViZCmsTKnbb5J3KNwnscHsE71FJc6apQEWixwTjsw65ZG7VG41GyBE9RAAwxiLDf1QmnWnh8nEcFeB9",
  "key17": "53mPGcHtNbKM8cvFVRGBo5miYZV4pnZrwwg1Rr1mp688Q1cGxKrhGipJLu3uVtaFyVz6KtzKdcwNp5ZkJG6SDKtd",
  "key18": "GxRBKXYQRPRhF5RWvngvBgtbQYUu3qQ9qdmSYK5XFLhW2b1vFvXCfM3BP6FDC8YLRYdPgE5iF9EADFptUpNmQjD",
  "key19": "3biSJHnvbArAPcDGi7ktWnY37Vxau31TDCgjbJ8zxZ1sKBzQgHR5KC5WM6HW6VU6PmiVHzW6BNgc1giS5Fe3WChV",
  "key20": "3gup3ZNuqwZfnjhmKctVEQ1Rhcs42cfLTJgZE3k9dvvicyw1pp2Z5byHYj5ThJiyE191owVBoMfaqCqCb7Yo2baf",
  "key21": "5SLJbfYviczuHyRhRbGTe5WcprChanGXZVKB8dChmKjAyzm2a9py2w6bhA3oNuC2PBJc6QYQdFuM425u8gzpxEgC",
  "key22": "2eTA1vKJtAGyamwJ2PkZ4fUBw1KrpDu1LxinY7u24CfMJcTB1ifFmNk5A8oWkXqzww2A2MypVTtTpDD9z4o8C8Ve",
  "key23": "4FQGqEWtVf5cbC77iPWvaseZxnYmrS2YKvhkoJ1W5vf2HYx8bXUj5P9r2msZEGh4LeKyzELfVG6qiQ6Ncnk83PFf",
  "key24": "2naUpANw7wnznKnbbmg231BRFm7DwyKjmcf7frLJ81BD2SRkJVTSTwAYiKHWkLYLQaGW73fejc5syndSmQwo2rEv",
  "key25": "QLS2FXr5b6aqbXr3cY28mPFj6QXo3scc2Jxc6EknT4siu9VsQNPcjnqJCoPU1ahwLfBcb8y32tAVh2kU2XWdKAX",
  "key26": "4pdDaFBdqxqHcsrSFhBg6zuD2Cr7QReUgCHcXx3A6z2VcHwFpCky4JD6JKbXsrvyaoWEdbuMMifXZ4NrnYjfaehU",
  "key27": "5EvGoPKHtc9y5sfkYZUR98d9VmWNCt8P7G6GaEaF9jcg2UqiEo1Ai2bDvPqUFciPdJ82dDkTMpMAZmT4VCdhGTyA",
  "key28": "7aGDqCbYqbCcft6G6wN3Ep8JWcEkBYwxCfxXwmz1YNa1VVLf5918P75Pp1hRu8DueJ6hN1azux33y6mMbPiPCAZ",
  "key29": "RQ3afn5jTY3VyFQqT8pRfMz7GYrxcYfYdpqcZ3YYaHNrNMoVTAicvDqZHNpq3fnfyKkgzJDR2sLMZih6Kuyvi5N"
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
