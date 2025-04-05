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
    "vFBR4ffQAUBcvzDisP8LbiZy6xkbVb7PdEp62nKLkkG5XAChfQZ1woKCtYktbpfX8MY5gJNTWUzaNcc6PUGMgek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z214pZ6Hn3FmZRpoMsXvtxWhNv8NYe8qosq8gWBstQdE9jHVQFVJXgvFpLd2yZZTZVZaCjuzhDxjo92i9sfe5g",
  "key1": "D1MzonU94o2AdjpUowTkxn6VPNfhSKcrGRzrZyPuikYNCouB1Fy2ryc9CWWmwnZfgtnQ12YgbMwSfomEQfeWHwc",
  "key2": "4pW7pvA5w593xd6H9f9RXgcYhkGCe5DUBNDadJVmaDqx6FZhYZkicCGwiWupxU5RPwH3eiZJ2w3nqGu3pt3zceTm",
  "key3": "3r33gpyo5UzdG3EsF1LEJKpPHFEUfZNWZu27iTeCyXpuhJigwqG4fZrSfA8pVHV4gWDZoezjzPP1KBnxwsRjm2nD",
  "key4": "27yqzBua5JQwV2SXkMnY7pzaHyHgC3BSayRLQrk5Z4tJnbiJhZG6NorQvKAAnc1fsLWUQc57MECXGLMtUyvCBsts",
  "key5": "3cjqSoYU2PvNaa73RST6aNkZcdGVh784Ycu3evMAPnYsVE1xzFQ5Lyw4iMRafdfQ4CsHHBU1g7thkpefmvpS6mY8",
  "key6": "5Szg89x4EDKBzfyZYvwKhvHBiYeXh1jFUmWxLXavdkqab73mMYK6cBCE4ktK1S1o1ihBToQeRuzAK7n7BoEDgb1P",
  "key7": "5PNGW9R86ZW37UHeBBhuZuQhtADZXaoQVpBeZen1kh4Dc3AJn3iqY95Dno31rqd2FvA4uwY1yWAqnM97xyBJVh7f",
  "key8": "27mjCQPCM4EB93ndTsNhjiHtJFJM2PZwzBZrCV3TXTg9H1uiz2R7h5xHmjFuWR8TvG2hdPqEybxkZUyhQbHUuD1m",
  "key9": "3RcXdrYQRK5XhbJY7Gfbkr5dPws3Ciphtr1ryktCarPpkoo4TvhscU5RjeKyEM5CFuXyByhXvkCyLFmqbjz5wQXG",
  "key10": "22r93ABHS4kZEuVwty2uPbNZMRBzHprdy4jVHG8U4pVrPUjxxmCnW2o23vnuaqdDgkMgeYLzLTsiUH2YPnsoehYc",
  "key11": "21WKw2YrH7X9yt9JXNRCH69RXpHra1Ju6XrdRxzTm8HhJbom11ykS9aP8FBAx44kje7jNZgtbSgCz2GZGZMxXrFM",
  "key12": "56fv6GAfhKPr6fckEDaxptzHRBR5exXtWKdPUrhXjr87MiWAXfr48umBM3kG1q6HyL3YZ4eRLdN9aDTcgJz8TfCJ",
  "key13": "25xapYhfhMytYhgfNXfmwoZL5ajssUaZ3P8T24mQHt3r1TG45RuFtcw8iLtXodPs7hPidTCeerSRg5xFv96tpHkL",
  "key14": "4cBHJjQXpSXnsVZyzsXnWU6YskyMja5eCmNeDd6mpkS1aAXWnr4kXGsCKAbEsz8s66ekD4FicJc7xrvniYJ7t68u",
  "key15": "2ZvUHQYCRPAsBrsefsE5bTAgegBWKwBkdvvDBp1WQ5u5SQ2gmTES2RnQ9YsbVvYk1S9s2ZG4TJQhMggKGu263ji9",
  "key16": "5ZSEDHQgq4RNQmTZjSEzTN59riq5vF4j8fWTsEotNHWUm6H9RizNCBSHttKzz1fa45pWmwuxHpbi1UiE3TdPp2T6",
  "key17": "3AqwoR2XaB86Jgzm4No661veQppnAYk7eXqN6cacSuN2zf3PLMu3PxTdVf4QpEvDGSWgxXZLf8KyEAiRwBccDWbV",
  "key18": "5BUYpQYa8pJT4X3WbwhuUVBacMVs32joHn49Kbm9Uve3ttQaSVpxJ76Hf1SH1p4Ku8kwf24hXaGHKw8jHov4FT6L",
  "key19": "3NpenUzsmMP5UeGX42a95V4b8WVg8Jn8G3G1f1oQdCT1DJuoMitjJ9kJwZZHgnHQN8fJULBUrUQ6fXkWcbE9AY2M",
  "key20": "3mUbsrjjtmdYqfELAyYiftRHi99DtmZeakQLaaGHNVk52t8Z5Eq9oDWWah8absAPRDGZVUk9eNoucMKgHnYCEBy4",
  "key21": "DqHfPxhCz4ML1AoxgiHxbcfeuTpMQQddqJSmApS9yVEreRpGiJM73ACb2mSfdZPHKR9CwsWTwi2EtAx2yKSXMCt",
  "key22": "QYkJ7TXDWCs91EWdrCiBaEDE7we5j2GTrAUTsZM744vYe1N55kXF4ViR5eYYFrWt9G99cA7fBErmgmv5tgJTmtk",
  "key23": "5h33mDniGHj2rzpLBqG1NngPqgKaJJrzonVhJFnTzj1HziaHaW8D6TsXnpYLs5Wti2SMZyYZgqZB3dq77KERKLWc",
  "key24": "232JjbS3mrYtK7Bp4XKujfprpLyzeokaH6MGbWmfvqd9Dby3bvNod6iWWtaad8sP2SfR5hB4T7R3nDD1Ervw98XQ",
  "key25": "3hLgfMo4mkH1sSkSeFJwvNjcSUDGTUgHQeNYhqx1z84ekNcMyoYDVozkx8xmdjVL5F4kLooVismFNMsVzWSuhTNK",
  "key26": "2fFZdShDa9iwiKQgcoZ1aoUxFYcz7scxng5q7LvFiXbANDsYwaxGsfPXTQXJEdgeM86MZLWPmYyNPkKuwTCHabCn",
  "key27": "3uAcuZiC3sPcf1sUWFRZ6JQjHFs9f1S95Ghp9ajyznCxwRQobwizA493aFDVFfDmnjVWaM3gDUu4xtt6Z86mer9n",
  "key28": "gHVy9XtY4YDZTTNg2sGPgesXCcsyW1SQLsJgtGKFW9DVuMZxHfhshq3WqRTzax7X6SFvCuMpNfqCRMpeXJnK4ry"
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
