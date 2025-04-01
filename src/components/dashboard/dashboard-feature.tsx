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
    "3VSS92cj3MAwtZCxn7nEiyX1N5LbRtmeaxeJFbs594crFpveaLJE5cAK24FDn6EmpfM6igp1F1kvdd7S24wNkQmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKGbqxBLQdGrRTzHdzF8z3AvPwrHtir29wZDEFkMoqNACRnbgcURajqRKZ3d7kmdReqNaGYLPVAbzBAiXpZtYFZ",
  "key1": "5LyT3FGk3hKsG1nwTuTeLqFkNmvQK1MK2FopaY1KvFbN9Rdzk7n7BYtDmjy4ivqozALAiKPs2UsDbTt9gevdDFET",
  "key2": "351A2oYTzjmzt5gFbTGeJov8bjzXKweEcGTCeWRpaMCet25CwN6xu6WFUDfiLN12YJtd61pad1vtdBA1QqxE1SZM",
  "key3": "5nGGbzNePm35cX2UhZJ3qTgZT3t259h3fB6j2hWdcMwK334EfSFVMhnMy76rikR9kav8noN2RRW7UYfoYBF3ffoT",
  "key4": "gJT7ExHYE3pzKYg8zcvufoPaWE7fGXdDX8nuPqJE3ugVTdeKdN7YSJRNT9eGZvZKhP2hf6oBtiZJZgbmf6SdbtZ",
  "key5": "5bWiWEbZSfVaUpeGHFYtinkqf58HSUMQs5kYzUXYz3wtBrtsQxBcMH4ZkaDdoJ1KqMTALxMnpqzMvyK7SSxYucht",
  "key6": "5e2gDHHuxnMtcd4rBtHVCtjURaMiqBxyfeXntpXRZD7HrS7zSVDCoeQw8iKb1nrfgavrXGjYtHGxrw7GinS3TweS",
  "key7": "3Xgpiof2w8g2gTVYXL3UgirAzVDYj7WUooTFtMVRivJYrF3knXjBJZfwDWxhkTnAPrp1LrZGiGwEoJTnpsMjUcuk",
  "key8": "new2pFj3bD1GEtFyRkZbXTipGWcGf1FJkXaoyABrzmB6H4wyo7DnLUxQxaDpCzcLzthrKkgf14kWZsNqvnHNPFh",
  "key9": "3rgUxBGQJnfHybfb9Brh284s9gbjkjeVogBhCmz2zpm3b9mWS3qXMH3Kx6oAR8dAfqQ3jEkPBJTTfcuBR7CwtRGQ",
  "key10": "S69QfTZhqwDKbYyp19yGTFjQ6drFJhBrwNkiiViMLfmrAiScZbD9YKfSaht8jyQtLBU5EJgATsfFgcyCe9VzJo7",
  "key11": "2xQCBYJDyhfN1E2u5Mvhjsi2w68o2Z9keo9fWaTvftAZzEemuuajxtQB4Z52rnmdWYGvUaUyAb6zsoKZ5bh2uAvz",
  "key12": "2ewNHu7sNh3qYJ6rs19g2oGdVG4Vf9dXQcfEonNorjswT1iBsKsXLcnWkpVYzeH4iPM23HhKFDdQdAvXH8NEemx1",
  "key13": "4EPXBstmsxgEGZf8kNyEaKS7NuwiqypoMyUyXUf92TJZi9VF6fn7caWSRnGei1gZKw8BWw44HXMw3QToixJbrmnh",
  "key14": "3W4nqtmDgRsjRf93k9na9REUvo8V82xHywga9iatDHcJMwR4wDxAHYvdFJ7goLQm4D3xUTRqDhLtC9iEYo4ZyZwV",
  "key15": "489Ux7HpfkfmkWcyzZaeXUqcpH9xLfLfiRCDCfdmVQMdj8b89pQt2xXhaHPctmCYdRb7F5eVSQww4BF8rYx9zePm",
  "key16": "5FNqK2xRfTxRqKCFiLF7TVvq6PQ3JjpMnFBYpJfrYang6AHpQabCsy3wTCDJbQRSFJVmxRaXYwgQMMqUNav6Eu2F",
  "key17": "5mn1dsWB2XedA5HDVw5HsgxNqYXww6wgA1XWg9rFeEfBCC52LPdy4EkWtyXppPSKraBJB5oUMZREYafQ2VzqahtK",
  "key18": "2pM1hvCaC5JFzU5N5bot5Lpm7NMQDLEk3jXmtBDsiHGoH7Z2cxJHXiNxaeKG5xBgzaCHbMuLkyJtSvrrVqhybwEP",
  "key19": "2XK37544Wc2V5682wxgpNtkLHwc9YU3Y1z8sUMEN5LHFs51kPgAXcYiwGgYhoznDpgex3q3VpEEu46zB5f51Loph",
  "key20": "97gXCiLRyFniFqW9hgJDoGNDxezY2A3dDK8iqSp6fPhmGMy69ir83dRwMzuqeMgW5wPQMZ2ybo5bERYC3Nxp3Zd",
  "key21": "3d9rAyh7R1NMgF3snGmU7ZYAhtuHa7NirXPoE9vp19w2CNvAUouBBVy5PTfL5uNwvjtSJztKReb9FsUkDphNmNBU",
  "key22": "2mgpLH8qYeGjeqAU55uAkK7RXNnzn4kR63gLD4373z3j1aEuMyzsW5xAyX39pZPjtVXoAVJvkg8NkKqKBkWYYzLt",
  "key23": "FsY2tGSymfbHCN49v41dg4ssb6djL1EouK7riecJKkkULxcWwQvw8TE6DuugK8owAHDiEXHqj2fovKB2WRFvH4e",
  "key24": "3MXJotRRuS9r3jrwDeu2zmSiD35kuBeQzgUkqNwMECfHP9CvNRVQ9fyj7R9UP28vHYxMukGt7zJ6vgwSPk1LryeU",
  "key25": "2nyaMrQgdtR3JZooKjCZsfxMa4RhyFbiTkd4Pp7wpHsaoGbk8XnJURh2qixJ9DUwFhkaMu3ZmeFBqZLSkzoDSdcP",
  "key26": "3a4kCKoPtryS3c9N9vdu3vQRtAf1D9p5eP1fEeKk3iTLvDVHFrKnPTMtJvh6EVJ9W2CfYA4DG4JLYh2iHiCVmYHw",
  "key27": "U1gUEYM4iBQaqEn7VJMaXMp7x8ws7VL7rg6Q5as62T65Qw1HUgnibWf1WvNAShyihYjHiBp2XZDov76CB4sgL8y",
  "key28": "4CKSZ766yZK8k2NDQ3nwTgXcjft8Vf55Zf6YNYUJjD281b8pk23Uw3GnJatJCR69z9sgmpZu4YRhRtxWBmFESu91",
  "key29": "5SgeNAvjtWUmKGWoygVUcVZV2jbouqL9em6o6DJPvTZFg6N2TuPgPQTonVcj9hGcyGxAF4mi8SBP8mBiSptTiwjz",
  "key30": "4J4ZECkAEWUXQKjq3biuitEW1oCAH8azN1ktCtUojQbq3uiejRFK5NV5wTcZtWPYf9TrJRHRiXJ2TT3gwZpjDoam",
  "key31": "2nQ97y8NXfPq3Gqp3WKnU6cocZwhh6qZ6Vk4rUZ8ZV7SBE7jqaQRxozqQRRicJtYbV9bhP21suPDDY3eMasctggC",
  "key32": "27whW9xrqxbW16x3CXtBU92FbLxQaH4nY18Ku7QdAyVDRtDtQdmmNvd41c7d4XbjeUSYccqanWEfALvmcuSGaPJ8",
  "key33": "4iAj3fX2qYWzBJVbdjbN35tw7w4zxt2DGfxxv6JZfE8DTPzTYzQMdqhCaTkpoam1hu9ygURZxmdUgxBTCHAs33Hb",
  "key34": "3GRmhczBBjufmLGMJNLwhJTQuYzp52ETrKqL317Hs26zCaXXen7Br5BTybaukm47QupmhVwfo5d9XaUYzkAUUjQL",
  "key35": "4ZqDXuPfPwr3a2XpkMAe3np5UJz9joxJDea6FjaLhtgFjirtwdW5PNEsj2AJiaJsKpSbTZgTGmw1WriUR5HPzq5x",
  "key36": "ghnH3Ra1M53A5bJtpVh2hS2EAxSFM4D6vBnge3Mn94NuDqK4pifMxg3ovFA21EKE4XGzrMELvFGbqj9v3P5Fx3y",
  "key37": "8bgbkBvpz3Hzd9mKUmbwv9PoMbXurpK2b9NYpxx7uhXkD3GnmwUFzqKJ2RZWMMDrksFm7tzf3MnJFQzpefEW8fG",
  "key38": "5TxsZmgV281sZnYMZhyVmCVx15ojepW5k4som2fDZ26suCyGHa8faYSj5MzQFs3pidjsg7hJA25L69YpazEdDdoz"
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
