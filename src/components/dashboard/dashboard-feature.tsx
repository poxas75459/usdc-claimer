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
    "2L82yQoWFCJBfZRHBU5L65RHHLSE7bRwNtoRVWGJgvmUNPZFLkP3W9rXJmrxjvZ3ZHeLveoAsRXcrcuPkzfBfqKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5orTDRYgjKvtzw5Dsw56k1XunYfi3j8KE22bVNqTyV2h54jeuaJw2ZRzE6gNt9HXv5xReLw4KygUPgAs5GLaYG6v",
  "key1": "5NCye84DmWWzxhnQu4B4MKMK4C7vUVbDrFUC5uAVJMkDFoS53MFbuDQaq5imgFvahHn6zhLyL22Z6DSC8LD2Akz7",
  "key2": "4k8u9xMWrGbAmx2aR6iUfvhedQeWyeunN3u64feHcNn1yyPV1WEuGXVDpgyZBtjCvqHawGzj3tf5A9yymCRVR7dE",
  "key3": "2vcnqm54yKzZeCftS3FjgiwUZMrECNNsQfKN4SWR3EbynrHyDHbZau1oKj9YomiTP9iqYtAAVG1tLcDgkZAegb6b",
  "key4": "57RHMXBqmbB6t4U46Z8VTZud8RhLGLH3jXZ73KBiqGaEDVB6H3HhMqbm6ZV9imzWz8TvSoN4gPPpEBbnm3QMzn73",
  "key5": "5WcHP95Y7VC41QZK72HqiK9mqRgiYkVdTYNcvcr8SWVh3RC1BSmjv61EsfTcU1k7ZscFhZb68EfBUoYcf7woowaK",
  "key6": "ZL34G2WtaLRtNWXg1MjhXMQtorRCsnNrNRHDaotm6xFyyu6eTqhKEcVB7JfyMKBvGwpbdbmjdH7NTgD7nRL8Zqk",
  "key7": "2fzuJutUbtY5fKLchvwKEhNkLr9FDEgwhSLSXex9g6bwqQE7mdwC7axMH2RGogXrML4esPgqRosJCnoSsf8buWRV",
  "key8": "Sn9ZNG5sT7bEcQXKLhk4zc1BDqTEUM2Y5BM8Vv5ii2i6JAi9b6jMrBuHKxRPyQgWoAsNjj5brPuoBdzyRexAzVq",
  "key9": "3ze5vGW55WjabDJZtmhRG3Y5NmhakS4vSvGa3s6Lr3wjEgp6PA7Gpw3J2f9zFVx2NhRJESYFP43LMWA61V33aTCh",
  "key10": "3rMyUdjcnWHrR7gz7U1FKae6bDvHhuqfp9mR5v2SqhEeixZwHB7cj4cA5Y4kRaAM2ZPVud7oBsGkSGBpy6F9TDaH",
  "key11": "5U9TYiEVpX8aJpyemXjj1A5xMzf5QtejRkUWRBuVLntWRn28Q9TMFcZR6XyxGnXHiMYuQPdJwwo1b2cNyMCNZWqd",
  "key12": "2DdntQ37PVbPFFyzSVHHDsRAhaU3imDTmQ4kfKPVcGG33Aj8Sp7azqTeRELVyJ7cojkLq9hFyqcxCzkJ1v8cXxy8",
  "key13": "2uzAr5mrFgrX93YyBbUrBfU7afXTvBht2MqNfhqbVUWsQ4KEN86sQBwtfxivFTN5oR97wJojGvDryFct58RyBoks",
  "key14": "koLTUEiB2LgopJTRMZXfXJaRNkcEytBeJZuL1CWaK9GMdkcS9rbLtu9tJCqdbJcUrDbMSi3wu3UGSq23Ec4nzDv",
  "key15": "3PKxHYDCr9rZLRQ3f99szDx2jHXTcyAUsXoZ8o8ajgw2UahVexBvt5QoFUZzvz7JnLAjdVksufQscUnbuzFhRG6g",
  "key16": "3JC3zJ88BUjNHMDXKiuxjyjhbYKz2dDLVW2XFSMzjZhLaKveEVE2pgtqrKe7rdmy8r3ywfMke8UWSJxnwbEqwny4",
  "key17": "4dm1yf3MXR2a7w2bWixyRdhDMnvSebBToTFwt5xRN6VU27LeFrer7rSuyUFPFTCcFDGqeELXK71h68kMJr6LryVq",
  "key18": "41rQhxeHADghpNTKKxQe2SLwD7FBvxoD3hDMhsG2oxhtociPd5By7XgMA9iKFeDJ1x3mZMh4uqCk4oooSbRNRitB",
  "key19": "a9L84vfSYMTuaxNyCLLuomyirnqdNWbS1dBuwvmJhZN5HtpsDXiMBPUZC9tYAXgJ9qNiUP5VrT3ubHSVpw3kbQp",
  "key20": "3cty5bqXs8igRttr89K8N88tiVRoudjkNY5KE6NAPveYkUUf8kaNt4dnaL2fhm7Wvwa9nYpZje31od2sn8TetNCT",
  "key21": "2Fz6VcDW4YQv9o8Ls7fB68X2XoyCzfxSyjyQvSh7H27SbD5tT7xhrMfWAPSUWG2jJkS6TAexJSbuuS9UsRVe9gUv",
  "key22": "3E9n5g8e2PDNDhk6bpoheaAKsDtsuW3yizzKN83LYCM5FnfA6Ajs82FYtf5TS5fY29h3LhKVvSDwJTytBGkw1rph",
  "key23": "57rstn9d2WsRmwsMvBL33sFe9gXBTmQkVUemA2fH6DuefAhDpznmvHJ9qAM2WmTWnGC6KGKBQoHhgdQptgy4Fwin",
  "key24": "rc6tNeB7YxnTrKCjvWwP4dgxJmmPmTJ1V7otuu1jwrRg89aYgjJaG1EhVRi8qkR32njcRYGSLpi6kzWdDUevJd2",
  "key25": "2hFoPnJRWvUa3gPv9JsaUUKmWozY5fqSfLJM1ofiwoPVbzwCk4GUkMynyvXaRTMZ5Fg8aH6T2fdWy918cf5eic1m",
  "key26": "5z9GBRT6syTLovB1NWzwbXmdJvEybsGodDsx3dqkkVNFcyqAdK1oV5r3bS91psYD9zhXfvbgRzbMzn8ZtkEQq78H",
  "key27": "wuVHvxEk62zLVQqvDW3JJZQP2GGXU4wSSuBcVewoAKxpW6b5r3MjxgNiWHzxGniweXZFMQgz8VWjqdZujTtSYYG",
  "key28": "CwUED11PXY3segGwkAwro3dWDGfiiKMiiHX2FHZWfiJrCzKWdogENomDT3q9CteTSJNT7SgANS7RqWmdhwcM143",
  "key29": "2v63uwF6hPW5LWy1h2S8JaPA6ZUkYC6noBDpJV6gWqvN9BhkkyYorqog8TL2GtdGhDPizjxE3nLjNpL6BTYgqvyn",
  "key30": "43mH5kH3uqbssTwFvUnMWJGdF4uUiUidqA29MMYynHQePgVHJZ4dPU1vLktbGGHk4rWemywLiJa5WUTwXtPUW3zu",
  "key31": "5baJVc8rigv4N7TPjdtrXba4Cqqfu9LfsV38NfWwgGdtqdDZafNY6XneZLcPYR8V46RKZQms6Fiie8VjcYhyPC5X",
  "key32": "2CDM44T8MMdm9n8LUwiWd6XHXgTpyvLFhDxdCWLgAbUutCXrF6TpfpNfFpB3C1N3RhJ4mVu6ES78vm6EYEbVS3sQ",
  "key33": "qzvHuqywWxbd7kmwR4hMvEuJCeLGJmUuLkAgPu3dXQY861Kuk5xpYUcLLuqyKimiqoEqgUyLEo5fDYege5TXt4j",
  "key34": "zZqzNnFLBfmmuZXooDumcYh1su28zwbA5mB5GUojHJ3SxoiBnViK2PYsBwezc93yZrWjpuJy8u9hQe4aC11i85t",
  "key35": "5mYMmSHsh4rTEZ97pk5ev5URo5vZJ5ukZFV5GqqqPrvGWeQGQDPCBfXPs1HJbT5RWhMjgEem57F7Pa5DwSbyE9xF",
  "key36": "2djsNQu4CovpWUmHXSAJGaTcw2ZpqeRNDvZDDc4Z6TRcccZ25m5Ptj9YFNE5z552XJMzDzQhh3hEh2CZ8cyGr5uy",
  "key37": "3pyEZYqoY8DGDihMyXRroYUifufmyHXwViwzfRkLPMrByVrpauCPuMvG2TCYsnBs5e1DUreXa5jsYfB19NAnaxYh",
  "key38": "VVmbtLyPWx6uCyc7YawnMw6XJc42y9jvohfpJS2vFDPSR5VsJ4AzpjowzV6XeUdQWLNzF8CXZUW9qzsud9BHtcp",
  "key39": "5o6WhmBvqzQuHuQtFtuNrgLZ9kYGqNQUmphnvswg2jvnKEq1Rdp8Zq5T4816J3b5CaKYpJ5SbzdjsHm6GBTKiwco"
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
