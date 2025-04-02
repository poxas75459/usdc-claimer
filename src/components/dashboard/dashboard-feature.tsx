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
    "36RRJb1pnENRqBUSRid2K8BScVZqmnPVK3jYZqXidJSJBKAzJA7WMZkvkh42YKxgcH6RYu7VBeT2SGgJqgQ8vUYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDmsXoni3kHpM8eCNFciFQjgsz4fJCXJsEWaRRYnGCvcsNeN9BNCEeiG2ZiYBd3Q7X65Ntyi7K92bP79dzkAkgM",
  "key1": "4FgmNdQFYJBn7zpE2rfzJ3s6j5AU9PR9NgDxJnmfy99brHLBm8nEqgPnwUhqPJMjBEdeodQc13f6XwoNQiFPdg5Z",
  "key2": "4wjbMLeD7NPv25rDwKHE3t2EytqVPtcbeZbnYSiZzcjuhcRHdKQadrHYk1s19CNRKDvTLTDdjxBD3m1kpiLVU1z9",
  "key3": "2t1EfoCoW9QFAYzDkaps5kRzR61URk6ffi8T6h35o2XBo4zBYrNtZ25x2j4xL4iNbTPDKdnT7LrP4QubqWPdWV5g",
  "key4": "5GN7PZ447wcduqCHCkHS3Kw1L5i5awweYT624jcTdymdVakdHKCumgZdtbBqryRBHnUb39FEskWgqFnfFY3GBvS2",
  "key5": "25zLJmY7Z6oR4CJihbDt465a6qHNHm4tzbwXZeAepoqp6A3UQW8mxEyJhLGjBQ4unXtqSvnNBDvgSQt4VztfpcsZ",
  "key6": "3BB3NosQguuAG6mV89WTpF8qdVjbf5agCLVf2JeTSpRnLZDn1NYM7gk7218frmGXBpB55UYLD6mYyySSFeNVzXuh",
  "key7": "3WhC6ZojDmDCVi2fbyQg57YCLrEvf9E3TPEGh6scm5PyGsKAcm2VTF16tj6L3aVxbVz7j224Gy8AmzjfudQ9in4Y",
  "key8": "4QzygqrgPoQThfpP1CCkjUr6tLf7QxFaQdkQp5sbTT9siLsxi8PkFhWDDWWp6A2iAKxYR762ddi4BowVUXpVKcyS",
  "key9": "2R4aJVyXqqdGm8URiRcAkwsMnguV67FdLY7s984Lyu2MgL3jnxP9buhRYWziomEFWNX7EXR7AfuHLx3A8xWzdcha",
  "key10": "4oNWGbkx6iEE5vzB4d9YFWeV6LycnHJZ71nqjLT1tcHboXjFBy799QHFTbhWZoMrQSD8odUgpYN5Uh8UNSgaUbu5",
  "key11": "32816cUwhuTW15xb3pcXrHFy3X4zktr3t8duK3TKNxodprJLknTY5ZJJ2wwEQiisC4TEB1CkmVr1PARfjdRYQ16G",
  "key12": "McqZfXg3CotrUo8uRd2m3BVRHTaZf5YrJCWrsSJYu8ifG9CrCGAjYfFeL26hs3XdxffPs7WGtWLXawFomexWCNS",
  "key13": "3s1XKBNTNgB8gvmcw37cFivYSxfUgg3buYahxo5o1SxCNqtEUfNTMT57GzJRxrVqwmpfY5gWVCsXbkbe2ADYrrbW",
  "key14": "kWfJYaTn98No1Kk8QHRLx9onPhYa35utasU9Nw7XR2MKLEE2s6LL7NV4f8JU7JmAwHV5Fb6BLZo2ks9JcVgAXg7",
  "key15": "Dxo93rxLeaL2Q9dhrZBC9razVLiHcj6Dk7A3Rr36LSR64N5596udJUGGVPboURbTiWWEH56rnmkxu7z72VzysP9",
  "key16": "23u4RpY7WeTEX4qB7Kt1PZrKiFAzQ4d76g7L3LxNtAb1gmLH9BM99vcx6kpqJkv5HibPY3zxLER3iUKNLd3jWDbZ",
  "key17": "SBMNBrB3J92t9Pxggz46V5rCM1zoLQWnhSE4jNZy2EWcLdvUMuix4u2SsiYCA1FPUfQn8NB2X33pnMuZXU77qgn",
  "key18": "xPZbJxbmxG7DKAji2CGxtCLkbY2NqWPRTqemCVQ1gBuhxrTR7esLJekes93Dy8o3oUDAkri5DhF9eBLpPH65gvA",
  "key19": "4rdDhGzeZcsU9vBRChHSQ2rZEmoJHmr6VKzaw4PDhpSiGsvqgnXo7dp6wRd2CG2GBnCKDiekKXpXD1JJnHy5hkuf",
  "key20": "2xZj4uf7xDn9ArVxHL3boTr76RxFu1GwPztxzEeYDpxMP75AuU8BSEuUXZxTWCFhvvAFm5hx9wj5uyqLvE7Evuvt",
  "key21": "46rjnnh4drDRogMHbLG9KCbxnBy9DQH6FpSPCCoB78pe4TudiW4Sd5wngsg5xHCBrWqyD4NBrACX5GnRFQXwd4UG",
  "key22": "YACTheUUdpRq1RoJsU9Bif847XwAHV8nDCshFbkW2RMyPXTXXe4ktvRE78ByKXg4BGAzSjdoZaXtEaNpmHdeBsS",
  "key23": "4U5uxRZnHap89eJwo8yvAzEfLTdARzAKeNXp8UJdmm71KSB3sb1rqJrpMhtTN9QUEBnEmBY62f56nNBrwaAY55wJ",
  "key24": "EovqdBaCgE5uWy3SeBvH9uSr7W3sxuM4ztznKeD26c8xKSxhSirgUH2qL578fLGct2HmEpnHyzcnjvr5Kss1VhC",
  "key25": "3Ak83DFhuxW8Yagrqbdow4zrHaLG3U7u9PZoeHqDyByswDeZ3xVncXCpZkvXJHzURfwkxKdk5h9S2Wik3VEoo7ND",
  "key26": "29WBJowSvaNEC4jhWbkeCtr3N92p2LmmgezzMDehjT6qShpTXLPaf7vgJr5NXosmBupZ5dwwAaWTcMPEp8aUtaJv",
  "key27": "4pZoqB5rraCc5T9nMzQSmKigWAXhNgmXQaajhBvzaDQWtWT2dsWK5kCAJcGcfh6cMtB5RCPFVzJwS8p75GxwFBEE"
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
