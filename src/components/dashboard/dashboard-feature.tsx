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
    "3jeRsVfXiVuF31ux3PudJMMpeAY3Eo1AWSpNzgyQH2jDhByrnUvmZfnjqmrPEcFTwPXR9a9KcUHMGjphP5y7ZivC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5d6Z3jUHkHPzmaCDi2Vi7JySuUhaqip8JQHhfpRX8VHLrwmtfSxG2sgT1Q9cpazHN9fD7dJmYRzxH6e7ZDKT1U",
  "key1": "vvCApqGnmLjJAuq1S8v6v4JWWZnGp5RyZsGfUC7RnQwc34aiSuBS6CRWYniFZGzsmhdWvLYqG3P64kdwZQN53FT",
  "key2": "4UomVnQHvdgRK5W3JSDiJ1QLX1c4q4ntWDxbTAQ34NsB8eeJq5vtCJP2LkTXMpSL6zeJLNtFKToDKR3sjByQGQko",
  "key3": "3taVBFbv34YgLN9izm3fkBRre68P9HEDx64nbhKaPvYgFxMjxZVpVQSsCNLafAyQmrD24pTCPSPfnxbKxUL8fYEq",
  "key4": "3sb98aEKJc1bZ3Ha9zfv4HJtUKHnhAMmDr8sgwHNuTQ9LiLcHMJzfYgeaXTN1LQzJkuX4SViYyDgTAQ2iM2E78Wk",
  "key5": "5YnAy5vFgBUrCUYQcmKoZqvQyM82KaLrDCtDs7JEoLxdbQBXZnV6uwYj5b94q4ykYLjEtRWXhzhqVjA5zsufmQX4",
  "key6": "5BeT77vPEgCWSyGq4hH8zvTLH7cpecwMRuCFvsxDKSgH9xepzAs4UycC98ef8dQstrsbVZku6qwamgf2jYV7HqGz",
  "key7": "6mPz7L1PJkD3jaLRTVkSAmmko1tQFhXu9qcyrcDmdUeCYCfjzRndqRAUc5uT4GQPhEh8mVo1ELCdDzLU62R1dmW",
  "key8": "ksKb2vewfLjSW1vkhu5ig6MFJFpRiBscSe7LmRwJ8cfpsXdAda7Wz59DRmUUPqvqhrH3kQTnX5W9s6VnsU2FskX",
  "key9": "4qnCYBMPCYDyiKDgQETWq4waeerwQZWAXvnaqbjAmxuc1CgjprrR87cT6dDyC5RjsHjy4eiVwvFXM3kFpa1ES8Hm",
  "key10": "52vdcBV2KozrZs7VbH2GDQ1oivsuadRXRcgFK75ZxST1aZKDQCPBEx1yFzmeWNQWoVtxqzXCG6NUp5D5H9uEgtCf",
  "key11": "6Sjw4yGZBSL5yqaa51Y6QiksKnDvVohvaZS1A33X7aefa2ptnnJmhEhb6iTFgZWvjDovSPw3Ug5feiQCH1gjMKW",
  "key12": "uMfXsnRJkQbAcugjAnzQAaZXk1W9oKeRXHdsfkPat3wsaAmHMgyBGo4Xtp2NjzAqrRZW7jyAZbUVQw1PKmcErmG",
  "key13": "3czGkprW4Tz27KV4hbSUt11ESuKpW62eeoEubqKVr7wPYKpPQxzPoWUpbsqsvU1HYDrJtibM38YSeq33udVKnuZF",
  "key14": "4ysYCC2iPfgHZmRhR3qTQzW8Uw2d5o4YwuWGarmccyZScDAm31SgbuVKsoJTSYy9YW3z8hSeyg9mYRZzuVS6DzQa",
  "key15": "3YJKgRqByy463869LMBCd6BmBnpkzoBXW32vJH2kr4BcTiB7ZUinWYoJSKcrPE2F7ZQgPRoebj3iXpYEdiwcr2Es",
  "key16": "qFne7qH5gjRDDzayjLFtHNUNTdM5qStEW8PThkuqWjHhVqptcNqwEoQBLcyg3vC5dVrvfDrXfWPaqsST2dkvBnR",
  "key17": "3vN64NmYVzNzJ6ywdbKWLqXvNk8sTaUfyCEfcUttEyQ8f6ouZ95m2iAxhdT1ZaJvabPvSnKsq1x1pQEXnREo34iS",
  "key18": "4JqNLBA66mv82zZddKB2Q67b4y4QE3qnTnPjwD1cewZ7LvD3K7FbVjXNxAEenxhqfo7WqLRqgKjqnpx81vLygWRT",
  "key19": "5qFxqZZUmw6gLJbj9BiEJaJzrHe4R6syqQd6vFaxMqVihYyNubPtEJNBgZbrnwshCeVdQVJKrbUAUv9ix2boLbpR",
  "key20": "4iHr7g6oDU9tsvpZC4BnYW3GhhRU2KFkggtAjcrm6PhEkafu3w4UNgsG3WZUar3NDordZhkPUnYngD3ZV9UowV2s",
  "key21": "2TSxkVn5wXbdejNAppUbNRRuSrjcsRGJzvy99Zqbfc2hyouSvPVEKqH7tdDMXJF3ahZHMyoaUpE2jEYXZwW4nxMn",
  "key22": "hNdYpqDMWrcNPAvVy8Rh7sPqgnoCaMYsDYXb2paGScymVq3QpmPAF2PyHQ4Nn8fw6miPYHkHXsmKrqGU9B3qidx",
  "key23": "iXrADEjAjKo5dDRVK2HooS3MYVDQeHvwvgyNrpAt7Hh6tL7TQur2qoRMtmmHRGQ69R5n5Hr1yYdRW1QjconF6Q1",
  "key24": "4PhP2Kq6S6BoEmzMrLgoP5THWaLr1ivSfvtDVu25mWoFQUdrQDPMTV1ZHUKYmXzFaJqK7Ye3NBEDxwhAJ1wgqwBA",
  "key25": "2PdXHfdyoiiJVc4o3emcPduP8J4bd61p5zFXmUC13wpGQM48HgfyujMqrg4UBbEuBcDEeWarB1rDY3Co21f1jn5Z",
  "key26": "36Ar1cjrnzRCFg82xXwpmn8m4W9NW8ktvrWXD4VFaiWjeKFJd9t8jR536Qz71AWjJq4nG5ukSET1PMq8svyfKDCZ",
  "key27": "4buBCrRuHDRnrwviCA1pxWVC3JGocWYMEuPaWyASyo9JchUcf7vu19cwELwi3Ctnhijz4PziEeqBMRmcWtCYkEQB",
  "key28": "wT4x43N61QWaGTGHym9XNPgX93GJF9Wsn1pq9ZXCaQRTgA2wXs6zvTM5VLFYuAxeS9WpH2K3J42QEZQbBLZsfrt",
  "key29": "21W6P3cr6ynDsamqNtgtHPUzbMEzfG352dpGprDMSbzZrbj7s5K5LiJ67mkvJRNqLxQSue9URRW7Kuapmd96JzYx",
  "key30": "3YfRt2kV9e8PANBgL76FmSRVNMqCK1LfxHX9zhHkTC8YVAFnzwTJQqX8wUSWRBTdadzb6eGQpz37WrpR9P1LciLY",
  "key31": "dsPnbTwPvEs4N7QPYb5EiPDf5cYAokSkrtBMGAhaVmYAxmoANwcekhG3EcsaTW8c8u55vgMwZDYFiSdxu8urhxf",
  "key32": "3nUeGWYvnmrbh77hqNbqkj7Yoiu4yz2wfvkJuYdccCJAK35gvfGGZb8W2phoAjteKKro7F3gFsu1mtvachkHPNSo",
  "key33": "ivfsz7LcdYBCTSVfZkR2tdGSwCo9iUwhtdRGFBvJ33YDWQNo2jPcXH36yVtDJkKMUikND2t3NfJRa9pjRrQrq9a",
  "key34": "3Vus8TmgtisndSW9mnpc293pLPujBHgam8qVisiWvwHzvuqUFiZhXzRHDtAS2GWvgAAcd2tzA2hCNHeiwxHAP4GL",
  "key35": "5HfwzY6wDN6JwvX5fU6uuREvHChBw1qJhXuqeVvUDvqXWHF1vH3m7cHnQUvGzWtT6aikxbEgBzz8yVExVgympWmb",
  "key36": "5kgrTYkTw35RANt1d2seMEbJTaqGbxJWk45RTecWHvq6txCxJJaFdMfA59J1gLD6Bn8UZ15HFPKTPpYVKyzbsoc5",
  "key37": "5btQEUWAGxu6q2SHB7VekJ4E2ZjWWe6DqahDEgfqj3Ag4VrmgQ5wyFsodpPsp5NVZFkXX6uHm8DgrPYHoRGBTYPr",
  "key38": "Wv1EoHa2bAeYNLMatp5Q2WM8gKWDYTjYvV4m7afcdLX3pTz9d3uCnivWmzvzeJfrFuAR3PeDEs8reqEwdzfWAPq",
  "key39": "5RPmojEVpq8tmwoBnsqYNiasPHTjMsRRdn5a671bM7YseULRmyjvDLWvgmccJddPDsL7zqH9o3Qy5NVWcpCvqbvW",
  "key40": "eUPx2JmBe67fgmRQCdi9frUXRyRAwXZgZzLSfgzUxnxnb4Um7qtChECrd2SRiqT5GCwZozATdALtviiYhAoyzsg",
  "key41": "64nXmELmWpYYVmNsqycfAPgCt6WLeh4Qe8jdpfLyiHm2MrZ3YuWFCzYWiWMDeqYyAP5juYfjCY86WWS69tyWr5Wg",
  "key42": "4ykRSor2SMXCwnvHk5g9AQmVPJiKVKvTeAPLLB4L8akykWTTfXSFw5hPMjTMoRdPRRthuusNkn1F5qYq8usUtaxz",
  "key43": "2mtSUekcqdebiYEQFJj7nbUSQn6DXdU2Bn2UNtC9qFEQfttzU8dpWizaEtuf7zBcDACZ3PPhRnU8zn9aLv8S3o1p",
  "key44": "eS8GHxNFxuhj7GQudoyHWFgQuGgrZu5XjLCkd4VDoN51n41uHm1epKPAdHWzAgbYXT7b5ydQsWG3q7SPSPdQ6xt",
  "key45": "2zBHXS2xrs8TxjNhWHhxzPPjRtMhiwq2baShLTRffDFwM6pVWfX6PxLfmnzJcLg4pCg82Uerb8qCdKiAYw9Zr5Xz",
  "key46": "U4RY5cf7Neh5DAjJCwDLwdyWezMs6R5meHUZqMhvuaKrzRzGVPSCR4sUSiSjdoHsXXq5mzyJJM3JSZ8eDT39cd1",
  "key47": "23mdVK97oFtdKVmdFJ61JvhBMime4gLLeX8MEw5a3mnYf37Ks3FoVvjJuph6vdTnj3ucEwr8qscDkWujEhCtz3Ly",
  "key48": "5e3fiUmJdkPR11DCFqzPQE2cxzn5LBw5WPVr3o2UfEeL9whr9A6MNaGTGpDEVKWV5GrgF1fQkBDsc4iPsYYT6eum",
  "key49": "5DQRKninvTnNngbGR9RXKsTzv5uuwEeKBEm1CRV4v1gEFcsD7DM2RFi5kqackGQfMWeG7zQ7jAwA1rXWhcTiBL1G"
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
