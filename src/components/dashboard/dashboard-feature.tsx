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
    "dwTdxShpmvM47ECqNqKmXEemXGRy1fNz7F2uydkkJyjxnAfbWnKKAmPGXLtRJQD2RjBgiyhAoCqpXM75ALqimqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5d4RUH2QNywzn9CCyxR6L4KH1EMWnuouW9gste1tuaeXQ3UypWxAL8q4VaKPeXMqQhJQU1FDNcDuWsnBUXuUjR",
  "key1": "2gzR3NN6EN5Mr5WVxcKh3ZgjhBBTaSH4wpPhx6doDen7Q9YGZPysmZXE1CtVQffk8rTn6KhhzuzhcLYoLEEvb4Br",
  "key2": "nxUJzEEty5sWsZhao9SN5k2Nzf5tjeq8qPwNWxTQ1AkFZ9FU6bctEqDTA6qa5m86rLp7KYDmo4KAUTAD5PreZg8",
  "key3": "3A2yA9WcMfwknNh24NaxhGJC3AUhBu9mvTYX3sbU4iG81VsrxFWhTGkpJ1MRBKWR7p2pu4t18m4vReYM5x3pMaF2",
  "key4": "Ud6aiYzbWEvUYdH6bafgucR6wHo3Q1fUfQ9ostbiJupbNcQ3QPV9dKrUW7eNsDTCza9WKz4oEFxc135tCuyjRcc",
  "key5": "5kzwn8BkxHgSsB9sBuBBENEtAbXqUURjdZQ9DDKeWz4d8apUcxZ45USYjJt4FpZ4N2V8nTq4scYom2Zt814C2C1V",
  "key6": "4vxtZE16ET94LXaAwRHL1xwo6QPteYuYfeKWC5vQ8mhr1PiceCUGfe4VfQ11D9CLh6G4HTJPvr8fn6UAfbCyaHkp",
  "key7": "2GvLoMmFjAVci4hADvxJTGsKMojNLy4mHm3Dt8e2X1YG4bYkJwFYnn6TRzmSd75QnwHNfYDdHWZU52Qkcb1voHPF",
  "key8": "GjfpuZuy7mAiyrFSKwh89MJzbsk7bLNHfHomizGDz8zpPaB2YsXXChZuwNDUfPFfoDUTAPdy9SzG1t4xMwx4dqx",
  "key9": "4bAJVQTdqNij64R7os84Pd9rNzZ52MzC59KymCQLg4cCsDaAEFrAGQRcnEG5Lp5YZR8QuX3Bnw5ZdShzhSxwwVGs",
  "key10": "5kZm123XWBHF14SfNgBjdenoi6rHrjX8QpVFuKpH6wxnS2YGoynPPNQJXi3hNUX4oovG39n8QhLP68tnuNg36eyg",
  "key11": "2BGWvxdJwHJySSPbwUjYKXbz1nvhWEZoXnU5181WHekAJtdVZhXA2eaj36z21iKHwc545iVvfxvGgSt44RQKAubn",
  "key12": "3LyREt7DQfng3VjTsXZ2o4DfjmwoEQX47wksn8W18XSvjoZ4b83QaNLC17c59LLpgveBb2BwKCpSeAzANtQs4Pba",
  "key13": "5Ybsmc2TPCLkJAS9yLi6eD3ywYzVcnRGotmsVtRAD8GMxd9MX11QiLc5fw2uMwY5q1322BRazbPXdyLPWFeQnEx5",
  "key14": "5yhirV29j2pj5bzGFoktdcr61CLdyrq1KjCSXJjcagecSMaG7xkfw5wGY2chXodxwKWbHKPASzoxCPfbTm2FjsAA",
  "key15": "2y67hMcqqxqAdSjFkcQgrr6weqP6Lk65s6SnVFZGtogXS6AXKQLYydvjkn4JDmoj6g91JTdVQTtEhS9Kn6ECxhdd",
  "key16": "2vdLATMAdyv5Mwd3Kho8muxrfMq4HCBhcoseFWsPUBWKKip95qwAT3ebV8PDrdMWiFk3NF2iXiap83WspmK2NpjE",
  "key17": "2xy31Xh6wXhovQBrVnuie1De7tfsh9aLQseesMvdzjDsyCy92Hcf7spH2hxTu6VuqZ97DpHndyXyVq5xoyeU5B66",
  "key18": "2PGDnaXHH9fPhGg2emnVkCpuCMBaBGgATtvisDurwcmaerzWv7iigJhwxxci6HUX4RDxDjugnbmY8Wc2iEB8rV95",
  "key19": "v9gAaqNqh7u7Gj4HRBdiFdLDtn5mjA1g7cy72W7yzh9Lzm5kBEfv7ZHNVxrpSFcQ1AbRrYT4bRhnn9UST1etZPr",
  "key20": "7wwtPDe3oZjQ2YpBYxjw64saxm4vomeGTa3bPqiBowp8esKeYmbQdZnRHxGmm9oFkv76dVxEH2PmfVNpbH3K6SA",
  "key21": "3dJiWFGaNWQy87m4ivDFwQC6FfRfrV4AH3X37gKLuW52KM6uNsqGkMgjhonhaY5UiYhwRnL2E71UBgLN9bSLuenp",
  "key22": "2BXoMVzWqLZyedMtonEWXR5raPJHeDBZSspfk2A7jtBuR2AygWZL1z5wxH9tayJyQiSYohmVsbLXEgWindN4cE8n",
  "key23": "2yEswhtLw14eR4MwK9SA3Jgi7mXAPw3hz8hqA6MxBonApBuKFG7LZKqE449vwbfjjTn8eYQXjfFAHfcPdr59MGBo",
  "key24": "3d84v4NRtmGXTa6z35qqzxTmifAu2RDcXsjH5oSiqTkUWMaMvzaz2ban8tveogCVAp7pH7rTiYKYjsSeodufnZCP",
  "key25": "4QHDJtF8fqWSoAV6REAJXEdB4hztLG5pxA8dyU28H9cDRpiR8VovLMkV1FSBB7FNnW7KocLq1rohmWAGVz5XCpfb",
  "key26": "51uyK13UqQ6n1CScGoPkp4GXkH5tPxUykmoZooCsY9GTuXpm2UnD2GoievwQnr5dJ5FpQbaoA5yCWLC7Cmuebd2m"
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
