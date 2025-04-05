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
    "4saxn3UQFtPcrjdVLX4i6Yuy5B9RJcC1p9tLgt4bWHjxcT3ychnsXpqAvZPoij8Zw67C9rK22XpX55iihJtHsCnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VYkPvTRdMuhj5iBqaKW43dtzgpAd3FKxHFaxzH6re7mCrUEuykzVyRtLRbA3SvfUoyT9HSfwykfCP4HpEhdjCM",
  "key1": "3FkjMi9aXLWVdkSuswcBiwyPdvD2fBtzfDGfF4sQx2eCmUZfX2PUgqEZNLiL1jnE1RRDcqSvDLpnftnz23hX9HK3",
  "key2": "2zRb1zeb8cA2xwEwkBQm7uFMUMPMpXyycMJSLfDV6DH2f7dzD3Xrp4YmeGB7ZqdmAmKNihkJC26n3DZCCPdEqh28",
  "key3": "RZsYgcejsAMzgZhGjRiqjdwZv4RzHDGAt4w6GkbQJVjYxJD6C4dEhsnXhMcbTTrwTvDLhVs3TCJT99WtjHR5sMs",
  "key4": "67KBNkXLsFQujtvwfgDqbUb77dXSHNcyp51Km9HGygbhDYJqXqM4HF1ztD4qbz2mLymbe8fHmAXCyZAgwtxE3DiV",
  "key5": "5WJW92RfFJr2SyDFcydzchaZUzpqTUmRRUqhbgNv2ZudUqQPPdewdVqZRZPnjvcPngcy3ceft12DZwQvCErwPogT",
  "key6": "3tjkteTJ7vYpoZSvDo8tmDPcv6yHxCur4tiutzaQeiGCHik1F9o6z8iCEZZh8n8wdW1LXWbqHjhzAbFUzJ9STk9U",
  "key7": "3KaRs7GhwnqXhn71fnKgniNxVCGAu6FCUUuv3qykoXPHCaQy14jJnst5uJ1pUKZwhqVnZjjw9uyHKcQBmgGjJRtV",
  "key8": "Yyji9eMjmMRFSpjcqfVihnCg4nY26DG5y8Ctyi2ufDt1xpFrmUAabepVT2UpGzYkqVeXZTtWDThCNZ2vENUoEpS",
  "key9": "2o582qz3RVw42kAgrVW1uHG85zhy8PUkHvoWNiT3hP1UXqgxotASELMaevrSaKv1LsazdkMkt7JKLL3XcY6SAgaE",
  "key10": "541vYpRBrrkZM1rn1QGT3CWaNP7n5AeS2YhBbBtTpFpqSsjjRBUMrPBRsb4wvRz31oXUW2LJc2bUYQkmvdzNskbZ",
  "key11": "XDvg224zkWgycgyzq61Vdosvx6ueozc89LbHjpKXavwABW8k3FTCiwBPJKorjrpxqtK2iSArgM3ru2NHLsx4ZtZ",
  "key12": "2VfC1LCPqe7Do43HE3hDaAgAWmxfY7DwjKMUMwVsh2GEdGbiypRCcRgmXyBTvpoe9c2E1sKuX3V7MSFA45Sjb4sR",
  "key13": "4zcUgXhoGcTBVu6eABqmquVLDKNhW8uyQgTeKEpFfo76KVWazXKnUk31SoyLHmVJtU5no422shJmA2CRT23qN9Z5",
  "key14": "4a2S1B7vWDUK6b1WPfKYxa3cNpeP1sNN8mTExT9FLLAHzVgTg1fq7eWCsidbBFBiJAN1aCd7N2nzWum3oMEPGBe6",
  "key15": "eDuUMeYSrfx4adGLTpZ2HUcm8XYdddmx6gX6PGmkDpkyUx9BjcuwFSsTRzxt7k2xiC3Jb8CriLPtk68CXEdf2EY",
  "key16": "2DVcs2oCWHAKXKgBsm8eWhTjncpriBzZnqYQvaf8PJfchf9uKkKrAyDRkyFDtCxMd7cimwN9TFyRsnGyGYre1CLR",
  "key17": "5r2d88a6DfMWiwX63zkWAQby8GLDsrfuvTfYZUNDxKTks3KoWMw2Yb7R7ccaFeMkyb5kEfUwhvu9XrzUAJ3cUnbk",
  "key18": "4b88mg2vCj8K8BQUZypAaahUApuRZj4TUaunYooZCvG9kuVDLjuVvmFJukHYoEgwCPmZypmuEcUdh1Mmk9Rvh2vt",
  "key19": "4e617zshjeRqVPi5nk9pQM4snZS33ZM7gd54XuLR8rLGaPNApSA7yqWYL4HEzJAF8NyeFg2ANwX4xVAjbagsXnqL",
  "key20": "24EeXDmhoSq4VWtnvzsciMdSc2DQqecUpFG65QWJLJ7y2VgUgeNW5osqd662FxHfC9scSKypbV2K6zmVMvDRuUdd",
  "key21": "53WEk5ximJJF1xf2ffkx9XFYoUBi1HdKeYfz2EgctEdgRfsR8mz6r8M6RANAi7sTtbnSHcHLCCiJ99Z4cWZRVvTh",
  "key22": "jXnNVvp47xJPbr5XoNnstR9NdJndwa4iSMw1miRLXQqJTwxnjbcBchVAxYy4aqRDCxPm93nescwGyxvnQcgUbs2",
  "key23": "4u2YdiZvDhfLwBNm5tF8GS9jwkzxeuF8BwDaG77u6Axa2BYoyGF5m385q22oqFhvDDPFPT79FSH9f6HkgYW5KvAx",
  "key24": "5a5Yo11cufCPQMkA2oCkArYaH7EpAbUBmWCc6jU5K1qDH5Rkf8Q51QDGPjb7dh9pHvYGeTR3KEEm6cwzCMiUAWYF",
  "key25": "3u9Wodrq7Po8PsgCJrcnGW9x9fCNV5nVayzXvvGoFBs4xjpsYQRewDzEZKstCykQxoXQuiJqDPhifzEspmh55e29"
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
