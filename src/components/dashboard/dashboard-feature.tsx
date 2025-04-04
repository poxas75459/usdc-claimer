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
    "3Ku7u91kbaQpjFBSwrFafgniU852SmvvZLH42RWxgxqEiNbp6jmN2GssW1n12NTPmtUYCXfdLB7p947xCcoxbCiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Cjsud3W4YiDhUksvzVvWTmfFMk5P3CKmjrE7S7yECvN2T1DUTnSSTZ9TLXCzjE3L4xzix4bhGGvSJ6inoWhLrk",
  "key1": "5pDSxkxULmYUm35vnKQeSqgphdWTkrvm1GsTiustJCdGkDJtAcqGCAdovSmLt5zDH6kyc6LMMMQZJPEkVBy1Htyu",
  "key2": "4vRCnfYCf2sdNbERXMVfgKduNhTwZdkjNBF4uCzTwxUdAKNsFyDftiCiyrTXxWJ3utVxpxSchTGduJNPVeR9obJG",
  "key3": "2dGgJ3BKndq3TSVFkn9pCtyNNSCVbDKGe6h64L4ZCANnXaEp9a6CkxUgAtTcg2h1ZhaNdHyWPx7JPADyLFAT86RK",
  "key4": "5bEkupHGXPVFZ7JC2Qxsaw4fxUa39wPiANDL2QYYwCdGC6z8xjwPSsjWUaFgyNYYKgsoocvugh9j1GZNpCbP622S",
  "key5": "3Q3G61VDUtzgjppMTfzj1Enqw2FivKoB9Abj1JhM7PHtGhtfLLtwpwnf7AgghtMcMwEuavifoEL58TrnJAMqYPHy",
  "key6": "3WvffZK2oVRqwrC4gghYYY9Ww5cVDzkDYzUSYN4hhVcK4TuroqwHNto3b54oEMdBY1ZVbjUXePFrTvs4qwZwjmsq",
  "key7": "2NxN7Uk291MHrEqgZB5YNup7XM1ZNEWXmx19zusBGwCUtrdzNJPKEBRTwd3XnWRpNBCtpsMwxZHcP4r5hqw4xpMT",
  "key8": "2HLWvnSL7DyHAkdsNoyUiQydPPZBbTEA5HLGR8H6uvmixXUALhz4Xz1ZPw54u5desWVtknDNdPMNrgGF7WvftxeG",
  "key9": "3hWR9y3Gw4vTZczRbQQByJebhywfsofkTKYjVAZTe7vbtzbrqRJSG4hMMy1ZsuUeVkY11Xpv3iquLqPNxwPcSQcA",
  "key10": "229STf8psAeiiVFtfBPMVeSV9KVcZ4jry35L5VZFUsGhLokNJJyuTvpNcUSafBeEHg48oCggcSkRxzrK558Qe2A7",
  "key11": "XyUMicdVnnz11LTKF3wwgPS5iQ6CmEcDYVtezJe7xKjvPodMpbTgNVbxQJCx6NqwhWKXovPLxnoYK6ZWzVPtDPc",
  "key12": "61wez28wG8oK8jTmwTtHeCsxNpHfZKZeXXFNfgVskjF6q5ysngsvpLyT8pVKLrSPmWeATKTxwmaqw6ikgCpZcdkH",
  "key13": "2eAYUdX9iWkQnWpZNJK3SwvNAcgiUrtjn5cr65Da2AZmYRhXD9xBMxXrJY6gRnhk5h5P8W2cYveXt8kVKEZ5ytVs",
  "key14": "SmN2CWZjnr787PUHHY4xgUa4a1k1QXR9n2vxWgh2Q971ZjsL29rmugpTj3vMvXeVYvokNQmFHh6DeYyVLvyDayp",
  "key15": "2ReqcefeyttTW4aP1KfvqV2Zp1kmovTmFErjjqf9gfwo5j8Dpg6ZYXo9n5b3WpAQZXffsixpm1wJdKv8zbMGdm6y",
  "key16": "GniiBWUxxWcRD4YQYYmbC7PeANwPLdbgfPbyCo82MB2LKMYZVrfSsWbTvMVSkY7kg7UmCxj7di8CwgsSJJfsGNM",
  "key17": "61bHoCuUvZvisPzuQXxpmfe7vrJokBU9qt9nDUUMKbAn9XqV8goZCPXJHS7uuBwtHtB7RNa3fK4LzuqdQ75pvZLY",
  "key18": "2LzWduPEzoadDJ9SE5EtiuaxSZi9q3RP5eHnMqFeBVsDUh3LgNcRKUkLZhthoujyP3N2Vo6zaGjfNKQosmMv5KqM",
  "key19": "iYyBhTDpBAnARNVDxDBbFDWy27cv7abwiZJL1YgB8S8K6eo5Q7pGgYmfqqzhvFgXqrfzA4ZGZGLhRGPQzFVhZBg",
  "key20": "46RCaNG7DEj5kSoSycsm35FX7sLBuDxKCGSKsAdZuUp86vBrvm2hPR3smgADuEQTtTASAXLzpVJELtfUJCpEwEeU",
  "key21": "3FmLezfDKEsHqUzsXT3mqKU1PQ17PXvrJfn139EFHvU87wnNAKBgbKa4B4TBLp9MtGyzAVC1TRZfyZGjEn5Dq5MQ",
  "key22": "3xMkwQefoY3CKSFPRG1fZWSAqyz2K2K6x67ewnQHEPL6npCgqg4XZKXyE8Tv6j3zSPK7Z7Z4K6p3fKX1dWkapgbk",
  "key23": "HgNCd6JQrZGb4puQ6thPmM6CV37MYDbTD1Qm5y884KBu1EPwNLiF9ScAyCNCm6ZDy2K2Uiy7nmr3C6Z3RU4Cr8p",
  "key24": "2pEVrVFFjfbqNVW5vQggJzwvqqEwex6RPpaifW3ZR5C3ojiXAT7CB6aEvuCo1akYi1ZL81XN6FMmPqCrGcupJuLT",
  "key25": "3vQ9ru6KqFwuGY4eKRMP2NYdfxjBH3QyHdaVekBnaDGhB8JhZYUF8PdvSWB98SrBqYjuWpdgFXjyrF5kTQD8o77G",
  "key26": "FDvuYGEVi8hhpUKXNKxC1nyqiVWtLmZQ1TcHm44RSE4eBCFShtW7vpw8BotLd59V7DiMsKVeREMYYE9bvG584zD",
  "key27": "4uLA8cCxc6XyEodLfFGyuRbf7f93W8nmE7EGvuauEwKCe4pYLURM4yUGp6nkHWgcCzdAUuAXv9GSuFdSurSzMQsM",
  "key28": "4y6gURgoNVjs31mB7JAKt9RAX9nPLke87KzVufF4AoXr3HaVXcuJEMiFMi3R5TBYmL4Ls1z4vxfxbmmirUYvL6ez",
  "key29": "cwhYX7kSJMChAjJxMhUhNGTMWXmuRxAueXqpEoGvKTcEt5JDiuTEpmkqgRALqgectmT3ja3mzo5A5qBH8HG93UB",
  "key30": "21eArVZ6PBkXCqLmhiw9yqkFTbPLAkBTz8ogbnkVGLbD4o6aQThJcNdngxNHEgCsaQKHgyjLLi4ttKQaTnWoiXta",
  "key31": "4KGzFxfVJ5FRg9knWKajAE5F7ySkR3ShyUssndDLoJ8RBmnZpQ2apz5ajFJVh6sidNHqLXSy78e6BtiX5Bk3EVEp",
  "key32": "5rPu8zWtDGwitVXeEpPCU93jLzPfcdCs8prcvfJyTgXRf1fyWSXgzdW2KidtbguNd9xWvxqNq87b8HyxJ7EvDBjc",
  "key33": "3jmQwT2x7FVz6jbXYh4rxWKfof4CFHkH5ZC717RrNDT21TEDtER9Vk6qPUwcNTon9KEBrVuDCgjtbby9u7pri5hb",
  "key34": "2ABVNzTiBnk8SKFxwauMzePfqahMt9ui2pkwKB6S1PmMiGqvZXFW5t5tQyxMz7wgw4rBWNpc2ycXFPu3FJuEyEFE"
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
