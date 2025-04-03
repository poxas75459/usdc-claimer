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
    "5FYkPAsiCUaduCS1AjHu9Vw9cJh9AuUAAk2FexenSz5vVdvKP7K5q6S9CgJRTsqKFT5ubUbqNfToPzk2rbB8K6uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2qrvQoUwEZMvdfC1TCRHHHyqVAshbNzYdGNgJAd9vqA3k441LWxAtacXHE5ez87nRjQQgw5bwxywhsj5AmSEjn",
  "key1": "61e9Th12DoUeaMRn8Y7mufQJgUdTAJHKw3yUiJjAc3kQZaDrvTS6Mu9NHXDvv93pk6Vpsgi3PbqyfNEYrQMwE6Ua",
  "key2": "SoTHfHHAyHs2fdX8qrsQzUAGAZwN14UWv5nstDpn8daEV6MfmkUUhgGnGUugHqUo5QCLwq99x1rHhTpyinDiPW2",
  "key3": "5Sgt38KnYb28QLwfN1bDrJYgaHLQL5ZpB5tnsH3vv7mGZ4Dq6xTtcbX5g6CQYTYXmDeBUZGN7VW5kRsRLfLHKetP",
  "key4": "63RPPonqS8t1LcMrLiFprnitFWVWB5G2oz3kRKJxZB733ivb59zgW3P9o4VZAyGwvSzD4VeKZPnkHERWe9SsVvgp",
  "key5": "5mwKyDZwmvzA1AdknYvnVqLE9RsiY1GZAJ2B5jKwHBtrkYzxiGP4qZT9CwTVzzwYSe8NxU8M4TfG5hjp4pQ7TEaq",
  "key6": "242TqWfbh1vNJCgkuFAh4BFu3GJztevqRBKLKAa2MVjDP8qfjnjkqBnsoKTDDgwZYYFnn9X9b1acqfXdrxZt8mD7",
  "key7": "2aZv9yEX8wFwya63gGUMoG5JCXwKxSe17Sm3msUoac46rASFnqdKrWbg9GskongYpnKwnT5KpeyTiugYUJe6ifdp",
  "key8": "3d8B7JJhE3PZgcJpGUXUsWSPYEqv1AguFEmRxT7tKcfwUEhQC71q2ZnbRQp4bZG7MmPU9LSY9mYkwXRHYUtk62gd",
  "key9": "28Gmb7qDkfpSU1iuxfEH7Zft6Yu3mBCX1ugzf87yJrJV4KRpsfVNzhgfzVU2dsjoeHbeytgSeqE5bjcPXKk8j7bM",
  "key10": "3iMfhY2sqMy6abbDwZf7PJo94hhbomwkZvATyah5NCbkmK23yySK6An8Axg3iJjrdQSVXz1x1GViVm6xhndPYdEy",
  "key11": "2QXqMYrDrnYvcoTFajJoWtENcRDjp7NdaZRtYrarHWAQjWkBEx4CtAwTvPLL3E3zD576v41cjHQ2PZmLNLzraHKD",
  "key12": "2TFsWfg7CEC3g3Kxi2md7fiEVyAdcEAKpTecWDUx5t3gzcbV6n4UvxzBxtFMdNTYxsCTCigwWL18QHdwCUuZEYHP",
  "key13": "HTU2qRMMGMT6GdZBe7CzFY2v6e65KM2SuHUtPBrN5PsSbVPminhZvqLanSHuRNww1KQ9vKVtEdJAqzvTx2oetLH",
  "key14": "2q9a1YFs6BR9uZY9Tysb4DuaRDzasPLbjJCwyRsAFvnUuH5v3AapNcSARb3MHamFPRqMUV6r9gquBTMRxK775PVL",
  "key15": "2nk89Gqw5EzXj6qKp7frAoZWZASxWFa48njbyNM3zZc6zDHQhwrRR5pZRj12akyLG1zHQ1hQqQVHLe4GiFM7AwJZ",
  "key16": "5tTcGvjTezBsQZ1Dbfco65UFe62pL8AiarkiFnKYonfeLdpe5mZdt5F3m3vmJHkZQHD1JrkFN8dnXZCpfCYSrTRL",
  "key17": "3Ux4f7K9HunUMmSpEKXSWHtQypmU8kqZ6c4GcxdGyWMVFYNQqWYM9MarRJmB9KQjtHG6eo4wPMT6M3boJCjxNsjR",
  "key18": "3gfi5FWe5wCC9pwiEC1bNMnB2TytqiC3VMsHif53yXoLDAKhD1me8GszZLDqkDd4qnK8Py8K7JNffrLsx4yTJTBi",
  "key19": "3Bw2oyLNFrrjFaBU5eZCbhs2Xq3XT1zhrtxcmGVDQb782Fswu8YFAKSRY74n2ZwWX7Z5uL1TQ7zgKxb9vXJ7kDHZ",
  "key20": "2K8UsKQBWgsbV3QDgV9xsSncGmRnV9x34a68Z8cLdMuF8BPJYzfDDJ4buMa269supifBis3JbKDQCNiEUGDyab6p",
  "key21": "24QbEK91uqTh59U5kFhHox1Q8FZVRQEDb3fzuvEfDNrkcdZPuSrTfu8n5vkENk9yRtiYswXVzNk2PdLdTkXQ11qk",
  "key22": "5TcsUfQZks5YDkjeVsznDyTMw4nXYG1xLbY1WKiamwzXSeTr79dgR9hGs158wnzVmgh6cLiuqX8V5dYuJshVetJ5",
  "key23": "3g4BijC6E3XqhnEJhgXwwtfRhxWymHZJpTur9JGz1APnQXTeNEJZWACPwM5uuDkmkq5XhBxyPRP3sLgj7165SYrB",
  "key24": "5Gq2PPeDvGT5Dm7rq81p5WwjpXcv1nW1yMjcJHiQzfeLiKYiufXiVZHKHc4GUbTAQikeFuGpKSPr7Xqgk2Bsjhii",
  "key25": "5a9p8uqo5vGfeReHQru5pU8JQF5J35gxm779LMz2WCTdHLSXDto36hh1QoAHGbzrui28AbQSMTD6Ajo7qp3ncPer",
  "key26": "ZwWDsepASQbzEwXuEuHV5C9H8qXxvL6gCY28sYQbNFBQRu5gYx44gAGiRNtf67NRAKdVS5E1meQD7aq8w2DwSCb",
  "key27": "5aCfifLXBNnCKuuFGpjZyss3nm6pCa6FbFH3uSUWwyb6XYjXQjLCtasuLDBLryeuivywRtZeS58gsCanDWXbudsJ",
  "key28": "3X6TMuEpae8iVGQUWBVTwuotRfMmoAh8QZHjtWLjF4rpxUN1cG61r9ifZ2LXkGsK29NdDDMF1wcDV551eipW7Wr4",
  "key29": "fXmWKESX58GpkxSmzKrsCnKvadSJydZVRsFJ4LLb4sno15rf4vKA7hk44jceVok6gaawqK5rt9ujSByh7m3EJFt",
  "key30": "3imBEdWGtR7DsrhQg5wrr3ukRqkVuLgRY4fH3oF4kf7vZoUTaYwUYPRBNtjWnhtq7EPNCKyo6ab7nq3BKknSe4wA",
  "key31": "2cDbvFeqJBVSPPC3LbnrCzdPhXDd7TwjdkzDeuvhDtzgHB3SFhMVrBrtqF2hBc4zaWH5h8qYYxSkjVUtthxDS2EJ",
  "key32": "58rwyXb7tJ2oPax2CMv9LEF4gFxJK1raMMSPYBwiYUwVE4cPQZ6rPWrq55agQEpEGcfdYHhjc9Bw9A54aUtCea8p",
  "key33": "4huE6f6EW9rfAzFRhPm5ZRZBikALnW4NfFYz85RyReJBpTEtq48XCpbVCiYYvL62RRWocyzfkPwsvu9KBv17gbPX"
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
