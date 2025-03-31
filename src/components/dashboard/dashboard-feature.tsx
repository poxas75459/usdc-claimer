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
    "6xQK7CeSnoV1ieNu2wcTXDgYHWSKiZRLC9APbL58B11DiAicsk2Y55mwPow5DS6rohEFKBiT2JhhuZoQWUixGor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wknez5bfxAEjdPPpgy9SJPsDY7pnhA1gUB8m58NWeMaFT37ePHyMmdisCAqysfHhPQPTsNKZ22SkxcA8rQWrRwZ",
  "key1": "3iA8SyZcErUgvs1rMB9JdwZ71mNcRKsmMwr22vJExeEnCsfrBNwztbuHA3nKzpFR3SLU1v9mVp6VXFhRaVAUp1JQ",
  "key2": "xbDRGkFeGHEH5FWEEoSfmtBRBTUbYFRSGLJPVcjzR9X4ZjxaU1fAJZSRehTYXJdGicP356yqDqBdUK8Gb1uZeNT",
  "key3": "5d3WuKcoEmQfPbFnBysqK9tZdwR3iMfR2ExxZdr6c3ohxi7BDa5jFGWWTaMBs6kmgBSZpbKtzo1YU9QH5Ntd7RQm",
  "key4": "4GTsgfZqghaScB9AiX3RZzAY2gfSbMvoRLaPwjb6SxCdJ39CSAo2VMUdtA3osVAyHhBZT5q4j3rwfV8gL9WdQXCo",
  "key5": "4JTgQSk1dm3QUtnQe6KydP4aDov7tT62XQgzb2pVX6yNUL5n8NJKNJkd8LDHnnBWH2fTat9vhBHJVMFtVDxVYAVq",
  "key6": "3aeccYnAjqTh44qKcawicYRVNQiaTeqRAQZ8NubxtniXRUwBgypgRt374Nx3otovZLSKV8ieQFceQdouodmRPAtS",
  "key7": "4dJqDBZcWia1X8K4paHSs7zsDaPRoKTZq4J9BppWiA8nGtVbTJCntXsBMsYdsAzEcSjsnPmGLefW6NiTXfUqcH2N",
  "key8": "4soZUiBm6gZvtyL8DtACv19bwMXUrLGW38D5KMFiJTwKmjHRwRkZ9ZFbfYcDrPGLxe8uETtaTmHxJMxE6AXtw6wQ",
  "key9": "eNEJ9f7mBBXnMRdCmyrsRFJ29kaRmoAMF2aJq1YF2QUUrEF7WgLUAa14H4fGgd5R6z3nyB5ruLoohR3masKqzo6",
  "key10": "249oqQoS2sADUd9ubcp5KMvEiroTJBcSmgi7mc7fJoWC7Xnv1hytaSPiLYtSVTQJow2FHNrdPvoArX4uPxNdUFhP",
  "key11": "4FbAqffUdWcnxQo4LW8goL8AAKyPAnjKb4WN65eveXDnHJsWSazHdhUUxqCivf257hESHoLaQkyDfh2cbq54qexP",
  "key12": "wchAmps3JjrF8y3ovJLp4AztAZ4b7FvfFfprxfPby5UkDbMfWYisou4m8wkf3QL9NSgpy39mMa1tvoUQb7GL4BM",
  "key13": "3sZwqVLeZysQKjLKGgTQUnG9jRTfs6FFS3KkYYMNfXNgFnGLawiGvnmL6X7tfob9tW4F2GRfSLWrEvJFkDhUeHpG",
  "key14": "4MFNvQbAM37GovZpuFedPGgrTwVZuBph9AynbvCzqsSqzfhGRztv8GmCzAzWKyETLMq8aCPAwrE1VvywAyUSu3TT",
  "key15": "22K2yiGmdhuVtZNkaoLudAyRzVPN4nVLdM9NeNkGbY7ffDKXS7eWeWyPRYmU27ccagTzXCVh7dRd44s8YJUKuSMP",
  "key16": "22tcfPRKATsQABcQj68WHEB1cS6ZvxRFfyD5tbVttoc2bg9WdLf63Xsva4724zyg2TyUETKRxWMaAY9gcZ6nnxFq",
  "key17": "4wp8dDy5WRwiJkecspTfURcjXM7FC1JqVX4Zsb21KNjBZcQZZULCif5bvP17kAhotZf59iGT67fRt6ZaptygLkpc",
  "key18": "53RnkXL9SnRrtZsjwVYeG9eRfgWwCtxTqwHKvjwXMf83TuWy91QhP55FFfpr13VpVNG6LsXinv9H5g9d216Dp1wY",
  "key19": "4H5kMnKEd214HpYgcEfwUZ5tSp9HuBVzA6BZY8zxunTfCGqwP9HQJFwvjqp4qB1uaBHEUi9w7puR89Qv1mYX8u6i",
  "key20": "4rbw4uK7y3ms9qNUEQAMmPnpXmm1AFA792HpGwfYBDCiNfs2dqQ1gaY75QMMhZL5Jg2Fq1UurPGqYVUgMQbtNrmL",
  "key21": "28qTxA6hBDGjzdYwFsb7ygyrCMUR2NTFfkcQiNjTmsg15m8P6YqK9SufYBrxkhtfRKRCah8R3XkeqiDE9z5jHdkg",
  "key22": "ApoAA5ueFq35Urdcqjet6uKXYuYdB3DyEQgu1gUxdF5voSn7UWxehjhew11WffYqDs9MurGWLudfN8qeYyZmFhk",
  "key23": "63zAZnTr6CvBwUFGjy46upLVkAQFedmgMpCm8cC4TT3R3nEjJqHGwmKze452BZwLox9jAiY4cZW1r9kXFTxYHxJY",
  "key24": "2aGtgugroezDiBTE5y9RYT63YXtpvLqgqQietfZ6rUHzVYRRoSMbUAzkwb1qHYTdQja1c8AgEmEFBS42eXv4PcR4"
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
