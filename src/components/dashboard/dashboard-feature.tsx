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
    "66v832RmMUioZy7rJhuNPsDcFT8nBRfXttbTraegwxMQWQs4sqk6SUnPopjMbSHHwygzuXzuJ5JtcKUoX2NW9oCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqiebj9StiWtZ6oYNwusFEJPuEgpjkeAHFdfP835G8QZeT2AMBiwmicrwLVoJG2pEGDY15HegZiPCHsB8pUvxqo",
  "key1": "3qCSoyHSjueKtwRSYNvSnZobP9z2fG18U6ZdfjjxWiNuUckf8pz5DojQNwGctYcxDV6ndJ8SzAhX5mi8okSMTzUV",
  "key2": "42gxoshGqDsHaFbfLa1CvL2PxjLgQY98qq9AJSCNMqCQsXJZj7AsUPANwq8KnqxAuYPaD12BtdZ8hDEJWKkrkDok",
  "key3": "5tmMaGGbaS8vpSbzSdsekyADU4F97gUjLtEPCKXRdR3NJpn7RUoAa4dKrQQVycsYGFFzzjm3Nbs7KYhmrSny2768",
  "key4": "3WCioqFjb1qssiKkHsVjfvXBzGGGcQXBPgMDwyBqLxUEWuSFE4JqNoJhztgyWzyxZfg7ZN2xjyQu7dGYFcJ8iX87",
  "key5": "2HRndZaSGBzDwhR3tTaEHDujeXsHGqEpGzfhcPWijUTjtspGg4Ndcc45SafUTT9owwfQGEYH6wXFwYumPgPuqNNt",
  "key6": "Ggze3YvGQZVQ69DEJaFrkW8wTMscivG6zcNvdDZ9bzcoq24gF1y2kB2jWDkE5sK94qS4w43ukjbyJKrYSXSKU8r",
  "key7": "73bGn8sbXK86uQR1vZFVy3GCxQKQhBwVr3dfohEf6VGtMj5jqvLnNheqcD7SQDPxNJyA3UZLvTLJ2vC4Kt7KsNi",
  "key8": "5sv9MzZgqyBmdyuR9VuRBfJgKyUCKhkKKr5fDnhLJ1LKSK7rkzTQNmEviVnxuYSnnsgbXFNEk2Zcy1rugmwQ29xt",
  "key9": "4t7fGrmyznZJp7TaK8bTTEpqR8hULrWz4jReEEHMZ4Ei2GC4geuUtA3phmj4nm72Stnctg3MUUuaVjm8rijGaQGw",
  "key10": "5hVr2xW6MbRHx78cWgJNdEhwD5EHmQRNnyekXfrKYhFQjCXMgtSz5QytvCrEqqJqvfrohvVgnLAd9omyje2oXYpA",
  "key11": "66BiGhALm6rnk5EwyKGbVyj7CRAx8WxwBdEqfLYjVQBCdpxuGKzg1gegpWsXmdSsHXdTRmfTX7kkpGNpnszZPMiT",
  "key12": "584fVmwywZCzo88k4f24xtn4tPq7jCme1gBuUyQmS2gtb9s5iWoZ7KDtC5G9Wbxm6VD6Gi2U65YDR3X8C3mR33x2",
  "key13": "5D6mZSCh9xU1NkVvxWRw5ikFPDi2zogV94TsA2Rnej48Fww9kgmCYXnzdV23Xmwrmbj1ZfSWBhrjf7QB4EiSQH25",
  "key14": "42YhHxFfogp2hPt3ssqbwyxDK5Y9up4kzRCz5ksJ3adZMQyrQD9D83UfWtewr4b7Zp2Y2WBxdoWyX9VU4nrX7fpS",
  "key15": "quKMDDpBZAuRYk7NSiFc76ktyFLVGYJaqDze8npJpfY6PPi1K61rockjyoP4r2Nvob1yZEiGuGs1bExfw9FwNae",
  "key16": "DSM4dSPmYsHCbsC23LjeUjEo1veNdzT8aHH2WAtKnkMyRS5m9tpU9R446FwUoDwoddjQaVkBSXPtAyfDg3p8xoy",
  "key17": "Vw3NFGhKiWLcu7wtZ56HvHvpbpC82Db9f8jCSZJyh6Swx3PECSyDyDfNT4UbmqSBr9ZajMvJy8gE9r6g6HTqTYo",
  "key18": "4fP2h7oxu7nTeVpuqpqqLGH7V9S7eWtBtaQbcT2acLEYAYdm5iq5uzpvZYJamvojxDDi7B9zmoRwKFH1VCrBC7Y1",
  "key19": "3RxYc23yeuGtay9uxynP9WpqzZQuBbKWoUMijr5Vx65jrn3fBU3iV2Gnfu8NJmyr5sxjGL2kRR2ezYiFUsV9d2qA",
  "key20": "35Ao4smmkScJY8uH15wLfFkmNbEt4zGxPs7suUT3qM4NfzQtaQvedWV96mAxyNfmpfEk86ky3hkp6FJddfjAGcio",
  "key21": "3ympcTQtKpEY85M1dYM9XwEkc3XwHreZApstRtvK6DJM4zrMjqk42SqHpPCKA1tqns2su7PcyX3MY7v2gEF3NHYP",
  "key22": "5wo8LQkEX4QX2BfQd8TMq3gF1chLh9d3a1m48UiEfuCuPEz2BB4VB6BY765a7jc592oNnthHUkLqWsVAKBs6gPh9",
  "key23": "2Wazi2VQDzLEpKgzkSVQ47tobSKrAbsRD3k5y5S2GA571t4Xzt6uMubx5Af6r6LRUwftf1YQD5Th4ezQcHtJyRbo",
  "key24": "3QuHkYaCKzFn2bkdN23ZCgVTdckfYniozpALmimr5becY2zoApnx4oYYBsjZc3HnrCK8dDfidBZUR3jUza2Uv3ZZ",
  "key25": "2DrRQ7x3iWQw1Qveh9dSzFLvwp4qdHsnMuGMB7fV3cRHvWoPKBynfYbKwxgpShCrwwnzfUJYGQPsQLPh7Ufv9VFo",
  "key26": "3dtujHySrFELnAiZYZw4EvjRzprP7KeQqyYAGQPFHTmcH6Quqa3KGEF9WU4ZAmVUhZ8DUYxxagG1ARNkbxsbdWr8",
  "key27": "3nWH91UfT3xGVVRvEwF3TofZZY5KCM3LskQASkTdDUuskTfhSHsDxtt61hDcgojPj3c745FbNB1Uf4iMjUySE96i",
  "key28": "tar7KFMVuaNULEUKJrQ7Rig6tWSFRhsTaddobp95sLLswMCSZS7u2znozHJKW9QaMWUP4z9DbDGByyj1GVmP5fq",
  "key29": "QpPUH4efRZuyN2HLuTRonoCkEYxzkMkPpk2VX8VRo1o884xYPTGY1JpR1pPkAy8LVGyNAFkBEEoDwWkTq5XNjKv",
  "key30": "5fjdHPJWxy6ZDGd3DACyhcotekmmGmrsaE52MPyqfGU5tzxQENC27n1fvTgYPrp8w6Q7kmNzhTqWHYT1J63oNLGN",
  "key31": "R1YNEX6eXzjzrAQJwB4kksgJS4T1ZGNsv64Q2dFpn3BWWDfXT8Kj7M6EQQDeYFbTdB68Rf3JvoUGRiPjoLDYnwr",
  "key32": "2yTFpsCppqD5ahjWFfrpJh3Xo2DiDxP3FC7BKmKpmxx8mhSZVmkTMapcZmTriXpfnurthiftwn73MwMrUzpbYxqe",
  "key33": "2A2tFRfjE5SVSzBJH7XkuTi54jf7VqTUZqoeTF9yG1LAWHKfNkEG8YxkfrtBhRnCgd5Z5XskoiNwarYCqzX8LFGH",
  "key34": "62T8bHHTCGSwZsNQVti4SQBr6ZzV7SzeNAmko1NZzrLBVKvmQbJXKTiPScAuUHFFiWcrLmZQ7Vss6X462BYRCCFU",
  "key35": "2jvPjypZJKQA7Zeq9ruQv5NNbt8TB6FHhSSLwMEZSEedpq55sJUSS6FDi4HXSZExoZekqHx8sAJY9LXJJ28nqUuQ",
  "key36": "2cn4WBnq1oRyEmqM3ppzbNQCctfnvGrewFX54PHhrgYyzowPkPieeEj488Y7YM8rPSoXX2ccTLAoCF3yEq9pFVku",
  "key37": "aY9ca8FQoDerMTPnAxotMJTXqsWE1oM6KBaPGK9hMkU7hfZXNezxMEoEz5NXkfVooNdeYHRKnB2ihAhqsdT8ntF",
  "key38": "S4MSmbvN3ZDvRdfSB8nNiaK3523xfrzEVCf8W3CBzqTLabh9LLgKmG8PgFdMerpx6tAyt1dHZF8bte6wZFadsRs",
  "key39": "5VYFidAvA8wABfcPDTQ4awT5VuLMGNBwRxfPUyFMUZhCzkNdvKERin2Md6uwEvnvtvs1zT1EZ9txNJqfkqhiE2Sf",
  "key40": "sbBrJ3fBUZSa7n4Lemz1JwFajsNsh9GJCUKEcBgt5oLAvoSVdrL3oTAeqEvUDNp8RN3Vquc5G8Hg7VtAK3FWoMm",
  "key41": "5smQfBU3uGrEsJb9gBpeQSD52Ya24RHukC1qtxcNEi86bzEWUiKYfC89aWdkDCwPvxrVRDsuW2v3znxu2rCG5Z6a",
  "key42": "5wFNfpkojFrb3qTpiAJsx6md5PuXhPUwxd5LRJSaUZUM1nZXoNz59uLkP8DGdD9JLb1RSTm9cYSgLwL4fvS7Tfcp",
  "key43": "4zSqrFffsEgvq4avRk2BADM953pHiP2rXSj3b5EHj4zREvsf87HXVKnjj9o8BaKzYRJjwaVLNWSAt4e3tJJnk5M6",
  "key44": "54eUVMWtAbKrBbbzfhpgh1gguWPN2N7CVq9LmGU7M8tSkz8tUoM3map3PbNNy25bYgiGdFZTLQVRmK5iMXMzVQHY",
  "key45": "5CigZi2B4zm5rvWi5r56wor8wQJgxWeoUD3Rj7LzRvLeitk8b9isK64cG5DpPdkYRcVzPuZRW8PsxYSKuvMw1Tka",
  "key46": "4mSt14LjDz8FsY8ai9FmNV4i9pvnCPMbyQp95rrWbMGZzZf41hsii2E62JBGh5kGsLA14Zu7Yf2v4cYWpHJUHrTV",
  "key47": "E5PkV99QGdPfg9pJ9LbScUeMcNie4WTaAkJjqrxzvQkipeTe5vQf33afWGMcqJEASipBxHHP8qoZsUBXeVqbgG2",
  "key48": "2PXiuUZuMTscQmHbbzQ7YkthFhf3yMbPxK3giCtmfh8E4Wi293XvKokoNAQeNQw38J1f1Ao8HiSAhF8jVGXLezfG"
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
