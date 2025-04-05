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
    "366adwLCJdoArAPXP4JCRSfShiD5ecqjsmUc3nSexEq25rsp3GhAp5CECwLd2BtanftY7LTuZCQC6vwbQhmNFepG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKqUx3uZTyay6t2N3PapSPyaDMhDSiyoSidxZETX6Qa6MYknhzmZQzB24HuZ6bqNivPLHW3JiCkWufs4So6Uds1",
  "key1": "3Xt3DCU1WqVQMp6fbLdzy6UkkUya7sRWKfEhSfpm8zjfN5T5wKVBXw8azA3QS2e9785TuzpnkR9dGi5viPzswfrg",
  "key2": "4oMTU8QWFMgEzWjvoesx3iREqTWtRtMtBYciirM5LuWAaTzN9jsdF6ytXFQmXZXQbsgnfRVKo4RJfhqiyuDY8cWX",
  "key3": "7AvSNaSZjpizQksq1LggzsnNZqoa3CKPn26iw2ki48mTHPqodsTUG6s6WRYT3MdjHqvEL3mn4N4Q7AiDeaXcuJ4",
  "key4": "5Qp4Ro4CDPCM6Hm8FA2Rd3bpXrN8dWr2gR5bxTyYBNsHfU4ZepsdwyxmGAbHzMqaX39mnFXRLqYF1UDibwddNJXi",
  "key5": "4geq6kT8VPPSVDzZLansnRWSDbyzKHqi1rk2rWSD38vNqGKDGA7yuaxPDwjk2CbpEmJnLcnrHzM1bfg7vKa7tgjJ",
  "key6": "5oLzB1fE6ziNbx5drmWPrUcxUT86wMDxuq8TqYxdb98jr9NR3V5v95isWyRma229f676R7RWVS72UmKQgZfXNXZ4",
  "key7": "5hZSJSGAytuEbeHQPto5JwvP2U8GoTTHKo8dNoKHbspw4WN9Eg1joGkbjfw1xypvRtuamFYCPXDk12UbqKSh875x",
  "key8": "TKQA6BfbhEr5YxMCuU6HdTUA2MxuE2W2Vui351X2gPC1AyUAJzF2DvMckjWg5jxD7ixnbL9iSS1HGhiWSEJdZ6y",
  "key9": "5c6r6fbxGdTcgU5M4Miu1CMNgKbjCDshtx33LRef4sgwWL9z2GApcXXiovWDxjod67rB3MS3PpK1bJWUiMN1y3EF",
  "key10": "3EEhrLAx1UCjL5TEChrLZS7Z5hBvV2wMzas6VRJS8fDvgfKxPfRemYg9Cgrk2dq1XvmQ7TzwhaHC1E1gG8ea1XcC",
  "key11": "5XSPWybqWpJBn7Fs3nuCZkUZE4GiaYigDdvMa9VV8n1qFwQxcmLrqxv3bEmobquBe6qgLt1zraHiA9sVqTm7wJpC",
  "key12": "2jZoVxd3YJsuCnie54hGX3i9gEFBTjXfLCrd6w99XNSdr9mzrs47KEnaWRLjXsoAuXsvFa1kw1bYFYAvNFB9STR1",
  "key13": "34FrTtMTeYBnAp7EDcGtRTZ8v8YUhBGUjSJTHc33cPZe6NU39jTT2fvF8V6jvn9BpmyqDwzDcvrsbPrAKRfUjyXz",
  "key14": "5ta6foa8z8n3AsLUVtnDDvW8qjDdEwoNDRvZvCYWoBxd54Pj6rBLDMq4NteNJCkDxLaFoWRG7Ca3DLq8JXjLsy9Y",
  "key15": "5JsrgtLQeKCJ5hbaqhwfNeN5fBWrwMJSp476xTDnDtx3Kk5tRx9QxFgqzEtnEFdmZFnPMSadY6m46rqsG1wNweUp",
  "key16": "rWHb2XdEEPw5FL67zRTyfau5Bzp9yhZ5X2hyPV81yqPkGWkzEFy3s7zc6ViC3yyjxjAXtDZsJeRwhYBLhH1U3Ue",
  "key17": "4qoiCQXW3u4Fuyx4tvPdUrw5h34TgHGpExuEnqycwmhSEUBaXWuujXqPhiC3mjadjJcKYm6J4vpwUUfHaykqfiNE",
  "key18": "3GmZZHKxZdLdvqrqzoNDvguP6BTsvPmcwMGwxUPgQ64UK9CdZPgbvaXj3VjKTV7eeCTHSKVmmTwFQi5uRSwaqYMs",
  "key19": "3eq9kSPUCetCmafdWHskTiW1Uuk89Za5ad1M98xqsCikN9oAFNsmZmgvxGLWtso4jxA4oMNawb1a8fEbYtMd88Sw",
  "key20": "3Srk2MDmnzXHMLTt5ovgWLXZgdfd1F4RXExUct6JMEbvTpXzYjnibNKuZG96UoWjTY1m73daSRSCNq9LzhecBov",
  "key21": "3S69sDA68wLq3G5cRjxD62iwpRdWoEyrfhcUvB6E1ttytVyiZGmDpvb37eeeTjZnMcdLDBVeDxgqUGdYzsKdQx76",
  "key22": "2uDhw9K1MjXXxoVEC5wzbrqbaViNwJDmUFGyiB1bVGYvcxpVQaF8t2zRWDH2xaCDXeC7CjqMMV6Xrt1qTmULnQ61",
  "key23": "5ztTHBaTXx1S9swr4e6sMPgqptb5KAWdZ1RFLMBrTbyyjGGCTaufqwvvNxqksMEZuaZ3mTh46qaGpV52paHoowYV",
  "key24": "5Xej1H14cPBfjb99wMURiAPB5y1DRGu9R4NUDsKovTH9HZuXBjgf9eQHz88Rf5EdYh1LUEW23gihvZ8toz4qSNym",
  "key25": "3tJ9vG34sVcWW7YikHjiGtHdgQiZStkRcWRBAP7CEH5GEoLB5i4LhNEbY2CiPQHZgtwuaHQru267c1XHLeJsEnWv",
  "key26": "D1tpzqTvd2o8xCoRLxz5MjUsfBJLcd3qXsVRuanNookZFEKVastvVqo2wgSmvVtJcvMU3vY91TWifdkLeHdyzu1",
  "key27": "5DH3S7ZVdY8pTVHtKNwZGrM1KzfHdhPTkf2F1foFmP9j1Ur85RYd5abUNfThMhNvh9nkJVFkSwcDNNaMZCHnAH7R",
  "key28": "5mXkprS3rbqSPxrX4G7cHBLtLxES9nu8eofDecvgmi6KaVa9kKsRQBQChMQxX6H4m4m7QTFJbxj7NFK1edXEhCVQ",
  "key29": "5fTwPUK2Q1yQ82HaBvEFrwfbR7QgxHEUQRq9sNRkewmDuDsnh8FzXT8d8RTaewYsBo97L49LsoL1kDh9CHvELes9",
  "key30": "2ohMfwVkF1i8zafYNv2hcb3xXXrGZJXRjvbtomuXPJnj1nuHNVQgAN273YsnNWyr2aXACaLEsVEaZbtMK7owdd2y",
  "key31": "5oWdHcnaDu7xtHqfQoYXDuy8fZe5nN5WdP4Lb1y2d2BbrWpiW7s91Up5zMnTs5ZoJmi84TsvtpBFTdYkdYvVZF4J"
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
