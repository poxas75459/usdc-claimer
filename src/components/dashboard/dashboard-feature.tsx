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
    "38qunJEk6Ki1G6dFni8f1dWdSXWeSiwNRt82QA9dd1riM8gejTPLerVGqo43ThWcVafShXKB47hfPvGnhiCwjtk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmqftdqtJNP2vDNKyW7yJQ5FWKnYxGpecEqjd8nxdwgLqspGWUUneYPtzpY8afiudJpKYNLcAAxa1n7mVUsX8pJ",
  "key1": "29GGepwLoRMQmgSy41sNxpmBRDqBuLgheZiFhGxLY9rdfJ5hdXpP8QmuLS7LD86ztzWEnLvG5uu42B1hQtNMWcKm",
  "key2": "2HrvUekg7yfGMKAUZSQRJYxBXXb9ruvpdaH8GFXKvskEYdujVVMZutxTenexr256NAkymyy4QaNVLc1N1ffgrBeT",
  "key3": "3MAg2UhusvdP7ew1JsaXnNXXRc5num7WXSUHmXAchKXYpLZzJRwD8Bbi9mSfcuvsAcytrQGP7cuPCsUCQmt4dW71",
  "key4": "4mp5ufapE3grdcwR35LudWnNWSaL5zA9XPKP9xPgPnhg1XfXTd4mK7ejAuK2KEGmhtW9FKRH1tphFDM1Qma6oR85",
  "key5": "6cGnxk2b3ZwJ1j2jHGaKaHSCYEata1XA4QPM3fMkWZvLbAsPBDo6zfnF4P9h9jYh2KtpNvvX2V9sNfPpy4SiL33",
  "key6": "Ac2TWQU9yMkpRyC1xjhEum9RCAGozzS2CRocLTqGpKdmi272mQHraFnEhHXdnjKkjGMdguTEaiEqzu7pkuYLJm2",
  "key7": "9ZChPcuRNZMSThKCzhbVA7xe8aoPCixEmReLrqcAg6uvUbsEZSUW6pWNhLhuacdMzxoMFVZrcBqSSCU2ZQ9JLAM",
  "key8": "2nm3kGcDsRcS7hHqeLBNScEdYhJk7jvECdetHcREWtY4h1qvqo5Tk3iTPwwmE26TVrw77En5BrP29WRuEYoys3jS",
  "key9": "4rRBaMMgqmZrNkNbCGwkTy4QcqzXJd2jWXnmpmSCAzMz8KzV7DZEDFUixRAfQU8d8KfZfNuXT6hgSmeLgeNBL7Sf",
  "key10": "4YczmL32WB9aqHUqXZhL6t2GAJiiy7rw5tgYcfXBGY8VNxzvqSt7TN4CfqG3iajv6khf2xfkMfRvkh3pTAyvSKVr",
  "key11": "5NEKrxQfpdmfajAG1hgiacHvS7bEss51YXmjECy3Bps4ZLxo4yuhLR3GsJRfWPTNGbEiJ5gZgQ7QPDFKfygcJYJE",
  "key12": "2wCqxvMBFZRNWg2o7YaPSNWGm4BteCurvnKyHpAUB2ouUAL3gMHoias4au8kCGkP3wFRZRPnUzPgSfFyCJDgMHtT",
  "key13": "65HzAWgwYTzxujwDKCCC1TMcQtjiZUtwvaWbnbgge4V9Ts892fb61A6Ev58ZX7ArmqZc5T99HkN8wiCgR1haQuWA",
  "key14": "2doaesCdtcAtAmshgF9xUGQ1H5MqGjSApr8KaGa2Nmb14LpKQmSNbZhpR6qzq5GKjfc6bVquRtrKn3KXzoF2JhaS",
  "key15": "2MKHVAmx4BJ2nnVnFwTHcPjZcjqFKhza6s1jt78gUokQJToUv5cG88fGMkZS2Me56DAZg8ukrmdVYaqrnQS3nQpb",
  "key16": "5TmNiUznBoyaTR75MMKRT1reKHLD2xMc6ThxfgUd3FGTXSZK4KRLktB3kxJRq7xoLDhpWapKMvGxFJ693Fn8ffU2",
  "key17": "5czneBr8aiapPsAZHEZd7CNxaxBWHZ7PFrj44srjLSbnJYTifWcGRrekzWGB34GaVS8Lbx8x1ex9QNQ7ttFaoCWn",
  "key18": "45DsdKxswYk3pLhVw2NuRjQjtaKXfFrpcKt7mAfdotUbL3MWWiYVWnXet68ZSrPENBThVBFj8w9YMRDDFTjUPqcu",
  "key19": "4gBLUHeZbSHQxgtCGyeXxiPzXkaucr1oixn3nDCFSuW3x1gnfdhnTJYPLGXKawDUPaadC2XZzTZU9eKpKu7C15dK",
  "key20": "2me3h6TNXcbqTDiM3ykTNasVbMBCUDxkQJzqms1CeSsq4aBrMWbmg4axAnMRgSCA9TwWh1pbxmHe2yncBH19DmJ9",
  "key21": "2K631x1bn8mZzcSRFsHvwLEeE9zNja5MRKkJYKRNJutgZhJrk9Mx2U9iXXBbzCFR8VV25aMj878tvQykBaKYEgPe",
  "key22": "fsgqZANp6Y9L3XWhyownGLDncg55m55QWbqnHxuSPckmwxwnQ5DHRDrzo9DfxNHzyrnap1uNQqMDtc443KgTrPB",
  "key23": "3JRkfeDUDgUq6vh6BY7tcWkXHvCGt2Y2oBwVuhzHNVsGh4nHGLxahyG4iWCRBENR2EM7PW2MXsmqcdbCyXfjymLX",
  "key24": "3Y4LLNTTLLPj2W1BmSkmYmf9i5goeBqoVGp7zgwxdCxhSor6NVxZmoVjgx17QGUavmzMMBVjGj1S49UgW9JVbBpx",
  "key25": "3Eki96g4KLzgdX2FG2oYAK3YofPtgfhTG3wCckwfDd2tDNhVauBhrYDaV4xLWQs62CNUBMzagmpV8gqoioyuzePU",
  "key26": "jgs5Tereau4F2DNf6AzDTG3autCXUJpUEoEtvjxMrgzuaC44FDjs6W1cqHqPXVf8sEo4GuSr53gk6BrYiszxTJh",
  "key27": "4jFUNhBPYX6nuefwWmRks3oGsnZNFeMeVmyviJg6QKhHrJC61yKiVbdWFPxjhQZSAekEq26z5u7JDdaz986uRvSa",
  "key28": "2551TuxV3HjPNhRchNST7orF5Y64aQHL99VHmc4aBaj5PggmMw7QH4knJdoFSuAvRhz8KEn1Sj7cQdmr5FH6vJyB",
  "key29": "5NKrrb6fjzXqKFuCRrYAdQTUvMYRz8s7SYzNxXtVh5LPD8vw2tpr6EBThqEyrMM8rm6r56gzX5e3EJL9dWspyRve",
  "key30": "3debshJTXrtrYZXeWNQewjs24n4kFVDBy1yN12cCy5aaCi56RDjdaRZvdszKpBZxCyN7kCeygrWbuHKxzWa57mhn",
  "key31": "3FYEvnMRmeNJQckMvpbH84NM1X6x3tBKywhBrMRH477NnVjGNuAUFUWDmypXcCEkNQZPco1eS16GNhfUd5SsXp8h",
  "key32": "QtYfeAxvYsq68mJfuhEoLRgS4zvEkAVASQEepyHHJfE8Kjq6eCWRYF2b645Y7y9cRUTaYe9H44uUztQZZcNN3jR",
  "key33": "8jATx9sK9FswaxuPFcuq3Wzc7dg4yhjXcFHTth6j1Fq82369sjmrHR8bAbkmUyWqYV5jYbYBdzAasFRfiRirF3b",
  "key34": "28sw7F6mV4zgRPt6UVyES5EeNNkdpL8PRs2QLvvQ1ty17BG8iTThBR6BBJzZUinZkNP7tiKKdt7H1yv44r5z86on"
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
