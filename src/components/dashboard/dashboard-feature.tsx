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
    "3teaPUuZHvkaVZG61xieiLjhyXBP55pMH6drvXXDVpd2y4CzWpY6r5sHH8pvWFzMoPbDNdxAsntMfD1rBCQs8PNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377DPP3r6jKzNvbz71VyHVWAzg1qCSB9MZKZCnhiXhwKgLfk9ZPZ2ejdTyegQqZfJy82bGwce9t5KH6Zc1JpW1oJ",
  "key1": "2EGk5i1W7icuSNGut5kBM7wJTUmPykx3ozks8khaQB5ZRFmpjUPceDQfAT5JKMJPWUq2G9K3LRzhSMkR88DkZhiJ",
  "key2": "WjYbB3ZKFA8oLZ8RHwSCTGSUpWdRLtVGsdUfXnWQFBcAmMU3DedFroye7v5ouPUjTGgPUpcLaD9q3uAWQX26zxt",
  "key3": "3VAbn59d5LhBGTg33oRCyFi7RwP3dvTswfrtVi5JjcqRgsBy6PkDa6HYhX5xi4EmHpQXbH5vJ6xqVezjp75Vibsg",
  "key4": "xysSPPe9UP7fgXJ5EBgyo4grwu4fUwTVE4rgYxVd1pzSVc7J4Sv6uX9VKnYJptbBTwrBgMvpUt2YQXUjsBcSDqa",
  "key5": "ndqUatJXm1zGan18e5rWdtehhwRBtSRXSFpeYpoYhUDCYchiDvzH747i4fBsH7Bj2NeuhLX1phMHLv2srdUXxvs",
  "key6": "5kHyUFSLHqck2Zx5KGjz7qHJiy7Ui3gynkrA9TFvdJfW6uuQW5CTw5iuHfQRMzWMLeRnzg56UGK4xSuCeN4mgTX9",
  "key7": "5YNs4XKfSxUTxWv4gPEEhG9BeMTsRzQZitCzG7HqYdVfqEGqT1XmMFbP935wK6sQXnDieeRM18CvBed44Z7Hgpmm",
  "key8": "3dZu1axMgNbbQt1pe4osJ91G3seXhV2axwWfBZrhbEKUoVxgnj9yPRR1S5DNqsVqFuEq5FS6cuSrzBnYKVJd4v3W",
  "key9": "2SgqG24Pp1UTz77XeSRZDQe1hMpuEqYkqS2jKp1L4iqJ7qUqYcaWiDLinVcL5HHCPXJkL4htHcyHhMwCBMYyJyK5",
  "key10": "YpHWfLAV2y1aAm7ujooEdoCoPAde9Qu7MHKszzAwk8TFg5Uti8zb8AqL9UojSVw7F3SwXVzT2LKLFffuqbjnUNq",
  "key11": "59GtkfNy5toiWw5WrWHzAgPYZExgRuKgXT1tErSF1VoUsWmLvt2ZqEp9ejEKhd73ZM1XNUABGrhGCaeiyb4sHUFJ",
  "key12": "5KgZqej3u7ji4hxbZ9tgxge1T9YM8S79oszaKD2AUCv1HGJWXiz9Ckhhwxx79pspoFHsXHbXjBxJ7aAB9RR3cqdF",
  "key13": "64Z49vUzKvkM8NGWsAQST1RMXEBpZUXGCQJARdrDhPVSL1TvyFzr1iXXPXTctabDLLhCQUruFq57rLwW7GJJ2gY8",
  "key14": "2qCXusMgawKUydTRby9cshHgdVKS9CXCupgXVehUcWLTN15cZKjoaY6t6f2ZbuEkgZBXXtFhz1h7J3coLy6EUuq4",
  "key15": "5nK94YUZ576uPw6QmmqjqinUsUyEsNux8wEw89rYXSraGfE8hjThHr8JtCACKXyq4aKeKi4gd1pYU4dFVzw8sxim",
  "key16": "4uzCDzuRLMMByMsYyUDbuJH3fRrYKv59BtvS113HAuJ7vokmEyFxJL7WJLn9rwrEdgsWRhooySb4UJLtiSTKgKWz",
  "key17": "2zt9uVXJMGgEmGzR5uYccKGVDCuf9uM4Vs73bW3aZtvoGFY8nrQKYakmuwRNP5dHKGPXVk6hAG9eQanNgSU5ebgs",
  "key18": "46PpvPFUdM4UamRhkm9da8dJ8CUDw3jX9N5D22zubKR8KoRx3tiehSMZQs8XQFgwvYy2ZH9tNSv87FnyGHgEVeWm",
  "key19": "3Tg1UBb55KnnhuFtrucxEBUoPkAcxBEjQjBRSjAiiv54AituBnzsBzFDqF8iTRhPKJeVQ33NQWoYFPkHie4P3zEm",
  "key20": "2T3ug58Au9keKVpdGQBNpJwEWUKNWuyJ89MvEt8ejsCXoktaMUDzyi9vW8nFd18n4Za4V7oaoqToetxnQHAswJVS",
  "key21": "2oPwNtQsU3KGewrT7YTZftj98oaVwv6eCQFcMNTTmE6JvZW3stkT27viRsDQfqD2WdYay8g7SQbgPeMhE9R84iL5",
  "key22": "2w7pDZQXRZ8dnjLGzpEXNyY524So4P5x7pWLFP2ktTTXdY33nyeDTFP7BnvUNMkPKmS8DjbPYqaK9CSKtRgBrGes",
  "key23": "nV6e8wUt6RnW9a6tasBHBXVkdsZbdq2pFY2feyLqRZjoo7coUcXeeRXNbYtEWPoPh1h5Hx1tMX6xkbtTnjNs8A9",
  "key24": "3251E7g98HD2kqBPVYEY1NLSs4oBjZRXWfPsbFNGEY7a9f6XbuGGqSPR1pjJS6XPTmgEPaCax8UErhrSZs34cY97",
  "key25": "48U9KDFaVf9sCCq45TJvzEo2HRcAAM7KvUpEq6bS8jT9PhGNYFiYhwfk1EJXJVuDcXHpNpYMYRvvCVKDkSB41ud6",
  "key26": "5t9n6zwyqnzk1KaYBX12Rd12r3ZnSTxKz6EPfUCsjHVmWQcbc2RC6C6gmyfQWVFS1BUUZPW8ZxfPR75JVFyQj2jc",
  "key27": "Pqki3mcpyjffA5VGR8jwGq77DZT3b8MQDaC7tWtWVF8DDqkBmLfwMft8aXwcZG577kfkkKBCdWzBQTaEx2PV56X",
  "key28": "5SLGzcUpk2J4d5u313uPGmo21udobET6MW58rPjUo7NJLCELaWWrAwiLk76S8pj7KLnPKFZvEX9k7GLRuyazrzZc",
  "key29": "2ncXFyukqtpsYb11g4rLGRJPPfkRzjhB4z66S2KhZNBuJoged92iDcNKv6Q915Xbdwn56kdxReJNyMRiobUzKZ2r",
  "key30": "2BHh5W4qjujZ7uJgvWztLqKdCrh1DDbf8QMLnFG2eMb5HVeGNKjxsq6JzG1xhbwDL475TJEQ8ZHhk8pHtmRJDg3Z",
  "key31": "89ZhBSe9aYQp5aQLtvqcAJ1wUaLyRyov9D2ZEwZDu8HfRALyJsxRP4tbAWFceqSWUPDY7XVBs514cKGTW8NhnW3",
  "key32": "5tyWxq1JM8jVpqUKWMuRYkb9uEV99vkV5AoxbAS4bM5JzWNJUd8vZNu3x6K2z2WTka4iC2SYsBAdfcWgg3dtB9vP",
  "key33": "4i1oPSiLj78SrDhqr9dBuG62DwbG136M4vE3k8Rrj4EpkoJ52yK39kBXFX2TuWu4ZX6amc7ZNTk2DpepG7q6Qu4A",
  "key34": "3JAYs4VdpBk2SGVRHd2dQMzaJiGUDc8Vr3YGyRCaywcdPhcmsSZerMHVRp7gZL7vo7vp17pZU7FbydsPJYB98VzG",
  "key35": "4ctkBHQLUW33qNzA1GytDmE8uhW2NrvLNeF9JcEPXvWH2uDzeXGWWf9fWwK81s7qhFLCeLpGWFPcugPfvup9NaUA",
  "key36": "4svo4APxcwh19x6mXk2YNWEc5CmfSLNJT3HNQSh7i2S17QPZroX8WUe3zzsVDw9cN8TrvFhcV6UW45gCvgfNRxK1"
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
