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
    "2K6RHtDeeP4wnfPsMyJdyqoBAd2Pq5Dp1NGvqaD2uRkfPgH6gQiM62SdNJiXLXjv759daMFTML9Qnu8j5UbT6tsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s66AdYAn7eguC8Nth6p35dGFjQiegML9cqUg53GSTd4QrmBaU6eSTy9G41B5yVRNRY96CabXhbgx1FYmcM2Nvm8",
  "key1": "UWFLeRNrhXoyWxTnLFrcgskSY5o2DMPTRwPD6gHZeLRjXzkYSyTrW3DeKBbEo56ZA5yEAVUMuyVo5Zo3gPdAkaa",
  "key2": "Lt9mCN7DPJqnNXpmXuBVDHii9KwB1TswyNmDJLSSqcntLLBphDwHwVwPDTByXB3kUjD8MbYe1zePhFd3BaWwxRF",
  "key3": "3K4nywDWXPvfdg5Qa4r67uM1pfsqKynD5qa3gt9zTpDAnC9xDgdB6KQViEWRZCoLsVptuAYR2YEYjFN2ef8L3gwn",
  "key4": "5gDQBUHdoGGAreDm3QiRpotsdBFDB4cdypC1ttKBVxCRgFGzKQyc7ztN4fZNFtrXpKbr9WPWWUU4iCwqKVRqDJPh",
  "key5": "3vandMoXSL3VfyKc37QS8oF5cVxfz36d46jtfXahLvDQgrHMwVGb4afUZTXc26pnr19jUn1a8cn2LKDgajKnmdAy",
  "key6": "Di3g4FPAA9W4STRuJkXEAmADfPm584tUaN7tug9p1B4UkJDWE5UkcyFryyMJJqkmYYCSExxZCXHHqA3So9BME9u",
  "key7": "4qXi36qTFkbnqEA9jF33Jyh3QkrTT4RFzFv1sAbuHKZzyboDnjPBcj1D9bQrJd4xrwaCT3HYVy5DWeoHWYhJ1kQ6",
  "key8": "P1HKxQMnrWuT56svb3rK8woMNVf36GFJpQqR4dYat6bRXpF3xiAfec4Xwt77gPt9LNAM47ULZuTNupAZLi3VCAe",
  "key9": "5tNU4ykaT9sXhmSMgcUW73hRDsjUNBSQKLmaP1jqvjN6BheDNEfwLMJ9P2rujpUanYdfKDeMLRe6UypsANpVkFgm",
  "key10": "5QcwyY84RhhwhezBpQDA1DAwNJFRjQJ9WjnNcNVJW7BnctmajkkkBgbeBY34W6mwL3WfMfwZhLLdLpEupHFao5mJ",
  "key11": "2tzJgJhApL1AEmmvRuoANUjfrdNHWMzpY9StCo7gxy28mgvHqhsaCV41Y27Hu6v76JE3KK2u8JqUFy5krKaiXDvh",
  "key12": "2EJinesDVRfUuQEej96JhDwV8z1UeN5ter72oBsd92RBjdR9KgnGzCREfd3SEq5bameuG3yyoPMc36VgaCzND9ZS",
  "key13": "5iEbCJiNPp1uR9WJRZYqLf3qCiBNMfkKVQQi8wp8cpGcAXN4jUjdJemnWe8SMdzC8Pp18XfBJfyzwWsujSdNVu9o",
  "key14": "5zGC5JSuD7Wrhc4MYKBfeNMXAVHBL9G7JxaF5Y3dyPZmtXiGNoUFLy5D8tjhP7CuyQAfosTPK6Ky5YrW5a278cDq",
  "key15": "tcitTZw9oLwVBr1PZnUb9WyRwTrMB9FpmPytcJwejfAN2Lw7uxscuafe6JuAMKNHYGsz5653J6fXzRMBuFDEbTb",
  "key16": "4kkHYw4irufvubCkrqRWKrs48yRZkuU2GxdD82TgaZnxGsxL9YEYBfHQsjL8vARroMs31FkFuoeutk5sLCPJP4Wc",
  "key17": "4PVUeynTSFVkX2VbSvcPambcYptHas1rMwc3TzMB7hhjm9BxFhcg6UMPu2t8eawu7DeeP9YxCK9U2oN3ejr31bg4",
  "key18": "4UEiCbgYEGV9DRemuHG7YV3qM2ZeUEYeetnKC5ras2fpZyoACvJsx63Z4rLA9w6gQ8W2CPbWi8ptEh4UxL1LL5LS",
  "key19": "5LZa9HRnLz6opSyjuy6XPKgtujWzTG5HptTn8EgSQDkNsj441KoNk4abF3TrisApktqFFCJCgrGiPjcQa5ZqyKRd",
  "key20": "As7hWGnKvptUNz9htarfZshtdx6qPYmJKVN7iCQZjxGByC9VgVXAhNmMpsQ9QhWfrdQgwn1mxhmBa9cTDdWqmMm",
  "key21": "4o9XqNa4me6Ux4NZnMdEcyQ7NJxkJKJVAo4tcW8db9opW3pEfvBddURJJRJk2XW2vLD8fbSbqy468QcM4UVXrGCu",
  "key22": "24TrffXv78dnDRtx1ahMqt5uZgkd8qu1QrkEZTH3jSjQ8dvYgFA1u3BfFjLNeZDNmPrxSFMrJumPM73hZmCTPzeY",
  "key23": "46azUwfJ3Hm79UFiTdoJbnDQDHDYpunVnnoMPLeTY3oGoy9ZDDCct1dFPaXegWH7FAGDxPDGbhvbxWt6Upc7UsQc",
  "key24": "5Qwc5RajsmD9cSkFFLPFZMMWB7sCsd6hQLhLJ8CNuv4fGB5q4NuxcJJPfBdj7h5Lrgqp3TcSRnepEde5hEKbkUDu",
  "key25": "64eSVBcYCWhxDyEEvpyFifRAuJDSpfyaPmcvpzsQgNirvssqPC48Gy2WMLewVhscrY2oMPERDYsRobv7237RN8Fs",
  "key26": "KneTWH7FSFiV4g2E6Ce8sdWvSUYBmb8f34Npn6R9Qrz7YwptHNFxVfLHc1pBM6suzZyBpvUGeN8JctSEKQrMYgi",
  "key27": "5vonQmLwrnrqdB5RGS3JFDMXfY9KLBjpYBVo69HK5ThePFqkfA9qiqq5M5QrSp9uE1roTuP4dDZs15vCm9UrDpAQ",
  "key28": "33qCW7SW5JX4HCviK6HqBZaSG44XVjhjnMv4LRnAo7KHPPWn59dY8UfKjKzsuQ5y3GbBsvh4AFshDYuin1tjcMXF",
  "key29": "2XkALbzurgBoV2DGNGPsMBzS3UVbrh6fP91qQmTVDrwkcegoeuEoAcPBqBiphxfpMkwbPBvRZiTf4GDoLAi4xuwk",
  "key30": "31D8g99Kum129PESs3gfKunCp2nbW4wPGPbAZgZqCCDzyMMLL8QgZGYmS5R7rCSsgoGrosE69B6Bai9nh7yAdeAA",
  "key31": "3TtfZ1WnEBCsdUuRfxrhMEpaxWQQfYnJkcDk4mrYb21cGke6QEnouJ217KtmDVi2cHEa3agUxMiK5nNMJXUEYfhp",
  "key32": "3uV3764tXskeKkc24qyYLSyWCFWaGCEkoQDr6tAxWgJuJiqthZmytigL2ryZM4VceDTTzjbNWYg7Jb39UbW8X1f",
  "key33": "AsFPvCzSmTLV4VGs4P9dzgNxYv1F4Y6rzLkp2en1rr89jhsojbhmwWY5ddHkRqrvb2sS5bsBYx3zxZCYtbupJV5",
  "key34": "5hnsLUFvFAAGC6KJMp6UtwukKS8E3iSMFt41gqBzZSaJHbT3rEWWNdERVGKdCieK75myNbNAB16ULVdA4zRRWLmx",
  "key35": "43ExiL34qdRjeGVEzBDDKm6rLyMcGFDaEV6Txpv6wAHejRrxg7tuojiNnaTGkMGpCGrn9S8pf5CDHexdP8okWDZm",
  "key36": "62x17uvT4DbsL7yLStYh8hCiSVCoh1HuceZeNgvcZ9NuhR86RmuCrMzjcUkG2zcqmR23GJEPzY9PNRSpeJVcUCAv",
  "key37": "4SycYt2RbdhyfJLp8YFhpgSpMnVu7hzk9RmiBbQSQoCyqPvFGztGTCSZoY9B2b84buP3oXbzKy5L1tJY16MAgCV",
  "key38": "2q6zeEhtwN5FPgjMHXXsowFS3kMq4jYjSFvNnPFqviZZA5ddk9zJsSv255bC1B3m15U4E95Z7sMocffUgMWo5SHZ",
  "key39": "4o9FVoXhWwMjacyxVjRuTWRRjnJj9GnVAgH57n4nQ3YNGsbLEc9MouVK4MwD1U6WDxs6WYWjmCWK5cKvNtD3Hf7z",
  "key40": "4Xq8Pck4AnwMJJ13uWQzkrxU3rbLLSxMsgXGXAMERAWZ8n5km2zZEoyZvrHXT4TxYACPZd2efoghsKPJvdqapNw9"
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
