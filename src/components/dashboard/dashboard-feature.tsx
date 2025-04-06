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
    "GJrCnNhsVQikQZNJznSQY1jEds6Hjd7DSpHmeVpFZrSdKP3EGdKj85zgPpHKxUa9sZenFMhbY2rFbunKwcz4ufV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wE9f4hCq6yKu7KzRXepPAc1cmwhDdELx4fEXEyzuzjgYX3dfG7Jzfia5sVmuHvRXW67QebTWvuFhWQsA97WWACU",
  "key1": "3HqLgZcQNqufqj2NTi8dMARzGYa7f2SbwQLR318ZyW5Z4JFciNPvJnQo2SSY7J31hk38tf3hvs5hEKuKPNrV24Mw",
  "key2": "29b26UYgj5WL6W38ag4L3gP4zoyNVszpoeNLdGYx82wZK4x5qg43MXdzUxmnQneMj4MKs9Zy2zFZA4ndFi5vZTo7",
  "key3": "3mwC32w5oQSQ4MrwUDqtta4A25juCaK8pVKAUheQjEFMd9uLcVGqgKxZkQgQtwmEJ8UaMbZw1JxqeuvxTNejEseH",
  "key4": "3yQihG2BZa3mVdZLwgD1NqHE9hDUYjhKb9xY3gV79kxLvRxyHA42nfQKD44wvFuA5Ls928K5569MQA1KiUP1uyQM",
  "key5": "32WBDyjwKbPM4yDTpejzTBgSExoCbX5KcgJR6HCFTq2vSz6atN1HyQ6mAfag8oAXNXzHQSRPvuLNSXkdiugp2i6Z",
  "key6": "hQAQ2zBD3PtTktCWf8mkGxZ9UgTSxsofePUkVbXz65roerw8TeaP9PBNX4bQsJDr8ymYj8pfo4BfKcDp4K9P3Ei",
  "key7": "2w5eQpxYNz8iduHgujMPPQUUoNdezo4TxcJCtyFuqEKjWJBHVA4cLccB6aH34SW31Wx5ERuZ5ZgJNNR69tyRKELG",
  "key8": "5pqFPPQj3YrVR9jyjTaFh7S3ov6vk9xJCR4KBXxRsKzrt1xNpz7suonDvhM8A9tC1MeqCzBT1sKMYst7fqDXwQEu",
  "key9": "5i64h1H6rnTXM1JtLtBcqCqbYtDdGJhg9n6Yai8kjKNFKXno4ccEVYwB26dpJUHSX2jph23JtsVcN3a2VkGN4e5g",
  "key10": "3FrSTsgtureBEi8Kdyg7nXapFMKCHZmSv6Wi2ru2dqgwR6VKPjnUdgNMVyCdsAYJhZxLEvFtPedP5A3aAM26wRAx",
  "key11": "4dKAgzyjVQhtgBWspUTfnRXYh6iCZLUN3fNMQNPr8UeiReBCUYYweuEU6g9HRGXZPXntP2rRSybjYuMFN8WmyJLu",
  "key12": "3JtxmedJk8jkYXd3JPFGNLi3Dxc4NvmKZ7RAqXeoYq9Yep6fvZDYbqcZvTGJ2At4s4W75SefHWNoHFc22vUaRRYu",
  "key13": "LHh8Kg88KLPwN9RkqmqQQx65QrfzPLBykZLMaFavthrdBxZ4uHQxfWDgNf26RqajfPsWFYP9QAXStWRAoY7teC2",
  "key14": "5vcY96wXDXdm235SRG9MCy1ZSDXVSVPo2CGJE6VhRVM86W9D27MSjNgPErEZdQo8iiTpj6zaswN1W5CV7sfdKQ53",
  "key15": "2XtLLAvzazuT3DeDnnLLPfRQ9QsnRsBEtwCNXPvzURqEejVmLbwfKCoWrACc1naQTjACaLjxswsKUdJUSbj2buGH",
  "key16": "3K3rbckaCjsQrBaM3iUroWgH3GLteT5makueRav2trU2BAB1Y9QRvvEDPLv49hRiGsPufuhWLT932g78txfzRaF4",
  "key17": "xd9X2aRA2PW6FG5sNMNr4v5rAD1NUHA8vTDCdY1Kq5i9JmZ9LatqQfkosVbENLds12zEy3bwXU4z23wiGxt5CRA",
  "key18": "2U1Q8EWQYmSyyygC3vs2SFKrN7YEDRixdsfPS4EpvCUB8GErpKab7gLmJr4qdWRBfXv2WLzp53N4YmCEzPX6gzvP",
  "key19": "3FAEdxfHbcBg3waGSFnVFmFVA43bwt5k9HLG3MoppE73AHGA28ZZt2nj4A7NPncqyH4sM1ad8P84K2JYK3PCBDVc",
  "key20": "4TG25KeSN53FZYdeu9v6BNNScE6xkzMcAGjenTegLSzKsSnp4mxphwivgd29Mmtt53xTHvJFhv9yibqWeoP8iGEv",
  "key21": "4vVLHwuKg4os3wTBpryA71e9mKEZuqhYeruBAUePdAC8L8B1cpEiQKoJYz5nW4V7FjSqCUigspwhC6BRZQttEGWn",
  "key22": "3Ch8NV5CgJTFJxxK5daRGeQrvCcrcYsyUnuipzBuY1DPWdTvo3m77KVqaBASgGeu6r6DJgzuYuFHkTS32aQQSm1H",
  "key23": "5F6S689JKDx6nm46GWEAJrEwfqddzHnJWLuoiySQoGXdfDpweJghnGxgN6meWAhGAE1iSgXhXLBPqnYqUQcpUfar",
  "key24": "68dTCBcyDupuZLzsB2787hingKpfVFwcsqvXJfxHpMLa4MH42yFgCQMYorZa8U9AK2qSCuCTTTxHhxijgJtB9WL",
  "key25": "wE3emCaUw4EAdDYYz5C9ZiGucuXg5pfPuNU8A7hPmuNGN52ZRMBPtqYWUYpW7oyM6TEkebPKE3q64YKm4YsTTYa"
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
