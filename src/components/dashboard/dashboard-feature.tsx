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
    "3ud1aMNkPG7S4pDx8Tip7V4ZyKLjUZqtGcWCBAuE8fuByZuLAtm8cs3qxuJHzZvb7H45qctqpcVZRKvjWgZRYCdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMzw3zGQ6xrBSLBU9SxzGSsinPR7Sg8EohqKAQAiZbWK6VpYDYadDNk1TFLiBdL5CxBS5p4Ar8j4LUQBce5gfG6",
  "key1": "ZU5m9rQcrWpWnAZN4QJFSKvE8E1ckKYMmjQ32P4sPLjAd3JSG2mM9digFfK4kCg2UQLdRLPwk6hgc3QFUBD5GLg",
  "key2": "hDCRDgPoiDzDk83VK7U6EEVsNWmXiMdaTrMrnFrW4sH7WyfwRrz9nvJTNn59NenAKFzZLchw21msYqNFLP3mkQr",
  "key3": "2icSH3erLhyGUpvhKQp3a6hRKSL12yNTdgh4aum6mLERhmZMgjzfCVfqgc3ZFpu4LVzyKFJSLUZs9UD1pWF4txJY",
  "key4": "3WxzhwFoBWU4vjf8tAwoWDbBMUCfU3YnMSTaLxJo36Yf2LVYHDk2R8Um4v6hNAtou8E8SFM66Yog5ZFh9atS98xk",
  "key5": "2GAvMSVXyxQwksJ3aPPPq5MtL3sFhzU2ea1o4wKxMwp347ygVs7ER6Xxh5SK4BzaxqtmD8QAw44RjfxnK6x5kZVV",
  "key6": "4Cy4SHQy5C9qzmSarVV2BLoV2XdiV37yfDU9yt2dtGkwnS4E8eD7BiFbj16tbHeuF8tP95nJSodiNjkLj1a1DoWK",
  "key7": "DjWAqmG6CiMcpc2AZ19frTJsDN8dXQ3fnxUqfQKVUs1nXV9Pdyx8ML5A56cGQZrKSQ6v2tDuZhdcKxNsbHbPD1j",
  "key8": "2Weq8eAP4HjW6ZVkSCTSXWbykx9tKdnv5q6o7HzjUXPUuGJN19wUGJk6xhEPQ8G9bvZeGxJWMp6LuMXJjXaytQHx",
  "key9": "4iCcq6cu271kNH43jVHQwBVw8HTdaKcoHvmmxg94HQqN2H8TffvU82p2HrzFb2hmHyfwSB9BXxUQjJ76LbxDKNys",
  "key10": "4VaKPXi7RiBz1ZJdeBQZoF1fU3T18ZZab2n1hn4DnYfZaxaWaqhFpmEHtj44xjTA8gowb3rfbui5GuwkVE8UokMM",
  "key11": "HCQteTStmZ7UcnQ62CbWA8DrbuBAvzLMztYVbDT6Y4WHgc1xWPSjDsgKQwtW4bZT6stVKPEJXX9aBFHbHNVfCgX",
  "key12": "3wSK3KTrkpwQDVPweDU9Y5ScqaAQ68mH8dvEgyPtxyFt8hCoN2Ag3pGu926Yk9khyUuhyE3LZGaPGBDzcYZYvdor",
  "key13": "2xvS2bzBHbdY1g25DeBs2CXxjybmrgQxQQHcQMPgcwEpw3zLwbbokespPLCYkL8ptn4GBVWxemta5mLw9B5gBuPS",
  "key14": "4tNpo7zh268ZzS3hiESPCwJtKu1sKcdzrmN3m2piHY8KApb9gLd9QTLzedn68KUtEUxDPLhiJdpATQDCKy2p2m49",
  "key15": "fp1MrMuA2VK8WR71MbHZdkFNAFvfZjTbB6hxYPidQRKD4c1NtcATtV7RcK1Ygw4c4PbTjMcj6FW4pvPL8FdWiPp",
  "key16": "M4HBtjJaMQNANnfMxziRCR9R661CZNx8wEEzaRru4xdCpH6Kug7op9XKsQ9uLhPycRaTvxYVDSU1Vr2EL8f1eDr",
  "key17": "3TXgEjU4Fn6FNdTFzjLwLn7UPLTP6dgZCgrVmoh5kp3xhkjZLXk6Mr3K3QYcvw2DnGDAWDYgNHWfWsdbbohC65D5",
  "key18": "2Enr48cE1ESqxRXGYpF5nehpYhHZ4D6xAurenWDTuMA5gBQq5Y1qUpXMGtrtPtDJNs9N2ut3eeg9w6X6pEyV6vx4",
  "key19": "34g3kjLtke7cef7m4u86oWpcniaFbQmxohwDr5qXRXU1iYWSa56JncQm7fMkMvNG9edqYW6HMnZaLeRn5RVpVdFA",
  "key20": "3Pbqjd1D9VicmUKyiV8SpSNnkLwTRvQ7s2V56C3qGNWh3djTms4NmieEFwsyiMAtCfKk5gDdSKsCNooEeNuvdBot",
  "key21": "43Bs5oiWfdPPhejEuVDaVCBn3QzTXbucuQZBaqxLV9ETvd5VWncg4iFYov994L4hhfgZ8W3jqefmSyHvCryA1y6c",
  "key22": "5YXdHrz9TqehkkWsSHDtwubLf3m2EgvBsNNFmFgH5mmKnx4XjQnMb9Tec1aA2c3jQ4QHNLx2G5KQw8HkmFAa7ekh",
  "key23": "42xg1qVbij94EjWQvz813LoTYz7J9QfjxYjrdUvBaMeMMrwGdSxQR5dgngXBbFxfhjLJyH1MCmcfmTYeviq6Tgx6",
  "key24": "2qUkZd7WmQaTb6UDKSQWnp62JPfnBt9TL9MknXx9BVvpiH83H6xh3tQR3ioAyM9K7FmQ2xp2E4GC9Ye2pUGLbdDa",
  "key25": "3g9Lyg4ARrxfe8iMpCYd5wznHZFHwgDqSFnnTDbEfRrVWhqZxiEVkJn51Pckp9xwjYRWsz2cEJ4v2oN9WzUi6ZhR",
  "key26": "e55sMCq5rcyi9gHoeQjzUfgf8MGaTKoS4pGPVa1dKoiAQtxDfy47khMfW2avsMTgqS4P19UPYXmpjRrg2scBj1A",
  "key27": "3xDAPZ6snh3XYvnHF1vLGsNAcSf1d7mi36mpdwzrGr3Gevn55LBgsxvZ1dQnDhcDtrYXjTorsZKUyXWH9uTGJ66J",
  "key28": "4JgacENtfjSKzHwQQdTNFrNf3yPaSFZc2c95kHGLDSUz9MvEF8nAfXmvWPSzeHQmrdKMCd31XL1Z49zt4t1Z7k3s",
  "key29": "XUXVoqdBjRiSHmMfEaBbrkHgJiRtmkUmcAh2qeEu6vU2pNuDVFVrCwFt9ncpDwQ2KTqMNzVWNEX3Whd5LpVA1nT",
  "key30": "5c9hK2b9sScxyHL7PrKWq7Dvgua8N4eG5Lxh7imRE3nJBXd38uFFysRW7hHJJqAbgWBew5n6VJ3jR4hPhT5bqi3N",
  "key31": "2jZCgoBP97Hph2jk9fkd6yJnp7tUTKmqTy4iAqe8RMFToC2gQNz8VZHsoY8BxLcUogYRMWBdfFJ47dedHyDbTpZ1",
  "key32": "4x1tq7VnL1ut9CY3atB67DGUEQ97PmE9sdwBCEgjhRWpaY8m77Kctqd5zknJPYxJPjqVRiJj2S29sYzRK5o9Dagy",
  "key33": "97hmAEFnuHSss3GVzLT4upLUHsatQ4NcsqocFMnhAP8UDndL2kxoct4YAZdPZ5ckaMUWaaMphyho2zbveb62HRv",
  "key34": "3xydqEoW5hsnHwyw54kQ2woYCEiJryqpDnMMQzkzTuxWhTR4TvgYo6C2PyWDWtSJBvzQdcYExwF4Anz349rhBFZu",
  "key35": "2t91hwo4dFhz33q13W1pfPRJnnEe1aqe85NeJkPDPdX58VPEQpRAz9GqocgynNBidPrWh6bzLjgFetnYBz8UD6mg",
  "key36": "2DBjFZr8qPGdBbQoofcURaxLpRbWosBFaapCAECudVtMdbP2KDADAoQswNqi6bzMpRr8P1PTC4RiMe3ehaPepJZQ",
  "key37": "41ke3KExpX3uA38A9HZFQjA8Kb1EJxvwTHWKt1ekDYiYvxUvwjTsXnJTnonJ9G1ufBVH74J2z6FD6jX6zkgQA4XB",
  "key38": "4RjBx1DM5iJLQHGSFZ6JvvgntKf8PKkQfH9HQdWQUJs4imkf7U9fRY6izE4Uz5uuSGhZpt1Fnt33cyKwCDDCsg4W",
  "key39": "4Zf8HyWfdxtY5uHei5rjyvE7NUs5kKac5FEvfpJhJJJ9ugUXsCkpB9g6vvUuLZVF7rZknHEPaye41euRFZTNwhsu",
  "key40": "2EHnpj8hsvfrP6jUq9aZvRLwmd4DPyDL2t91EfaQTwDSNmpH8VWyuiCsMFrtJD2QePGn9RAcCeSYhu3hJ8y4cizH"
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
