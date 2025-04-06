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
    "4u6Tysf3PGDCZCNbMBtPGa67AnvXc7qBenDNcZR2ZMLTebXwPJ2T2XV8X1aqrmf93iYG7DtAMZphJnTzpBNUkzFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJpve3okRHVh2GJKYKR1LvdyDnRtcXgi2Ucd41frBRLrxKs3HRSUZSYL7zF9toicyy37pxTDwZCvFF8r95ifa4v",
  "key1": "3Pk8RjAz1HHPqrEGgYs5TTbDswhWiNeWpxhMjXjh65WdynzbkUhCWmzuq1eJzh2arEpu1S6xnPes3LzLwoBuj2p7",
  "key2": "46apmECMo8nwrEHt6QCqBsLKQGAi3R59v49y6LzoUhfk1Xig16qDCM2WU2x6BM9YqniNHhzHa2ZZ9BLvSKRYFvP7",
  "key3": "Xsw2FjEu5Jup18Snu3PqeXtsRQryBZjVSyXdBBC8CQxraAFm9AddjdGywoWAGoMoCF9bq3oVFwVgE77SmrfZ4Jh",
  "key4": "2Sao2MEfeQRZq94aHpe7uumH94e2eRGvAFB2F579gE9HnBbYraisvQhKU5kD7QgQYZN9J52wxWm1dNuWrRWoJi3k",
  "key5": "3CSfFvTEvKk5WFjrx1ff1Z8D625YiXUA91J5nmwnxGh6w1TdnAfrNVwtf5kggVYUuhwRJf2xkVpnJi1BvBUtECVp",
  "key6": "Vnjt5FsvJN6eTrsetrnGCKRGudf5GCHZye3YwDPCdi1Hm7P8yj5sJStjZKkhwByzmSrvCjbENKRibaCgVActXFx",
  "key7": "2n5zaaJJ1W8Y2Zz5p9nnN9j2T6hQ9juvdRmzTLfikF7RzkcwN1zi1JChWygXQmcVvh3jCokQKax7zpWJqbV6wsbz",
  "key8": "u55X7K64C2kP4abTNE72i4ZydsiP1gYUaUdvSQYZH79refFC9K5ck27iM8Jfm19HMvfM2wYCEzB1s7nQ5giL8LK",
  "key9": "5WUWGURx4dzLfMDCeoJnnevwmiuGhzAbhVNP5rp2YUykmLa8Szk5WjjhKDgGTbcnQssNjjhMQGT2Qg1vuv5UEAkK",
  "key10": "5fAHSo5xuEgUni2haJAj6nsxmpUQhvPLtvi8LzExYxL6yYoSAsPJ3zoFgA55i4C7ZBGCHpsLF8iSWxsQ1opkuEde",
  "key11": "2SfujQzUu3z8c4P5Pz86peEvmbp63P83SE6XNzqmA2ZgZcQVPiLurKpWhY1DyRLQ4k6WHSiRGX8GYtvjtUBhg8yN",
  "key12": "3e5CsQnjuakUH5cJUDru3sna9CHvMZDnp7May6thehYiq351qcS3tswJv159zebnWQxDjCsQy7PV6PT21493hnfu",
  "key13": "34EP4FXkXm59bQqoNPz5uSRxvFfb5WNQmWZVc7MWJBUYh48s7wrSzeDa7xfKbqqoBojPPeRxMBWMY5iAvo6Tinam",
  "key14": "3c3coeqRxiH4qHu4exW7Va3rPjxDBSTq64uvU44XoafzqtnfJj7JfwpXWiLnE5fgnK2hz4TAbSUFKtxSaSbaVgBu",
  "key15": "5FnGZvfB7LNKjax4breXU1ettCUCgDNdjcHmAnPMrnMR6KDEhqnBePePaRZe1B1zCcoxXdSWgTMgPq7yNv7bEAfW",
  "key16": "2m8x3io6aoMNJF5j3Rrt7QoNEUoM97nfHLXXnGsmYaaRrSpAP8emzpvKzi4PPNnewEXACpCHBg6HmKcXCJskiKCM",
  "key17": "2Wnwo6oJEbtjgErY3vBLLHTDuHrgAha54EAL1EyGbwhYdrvCgWb2Aoh6d7qRMHaHaPBXvPEjrc5kuo5x1dqSq9jY",
  "key18": "3Xg7gthtp2R1XRrKjHFFojcSNbA1vWrm5tCMdVQc7fPXJs1Xt3pyYAWNWLKE59WjpuH9NXWnK1BpoJdUxv8yVia6",
  "key19": "34DdZqG8WPcoCKyx78iBwngcca8LCC4w5qy8neHenDYtuT2n14jgvNkVmXtQcr6UPAvHhzYGsGBN5Uy5YZm9LJq9",
  "key20": "55gYCceZN7jiHZgqLMnjePjUDB3EKfuWHfrqUq6hy6UYn6VnMaqr59TVS1nY53AurrCggpxxRV9yJ2oQFH3hD5vB",
  "key21": "NyDEvipQ43fBbF8rncTZicAFzU5yhn9DzB6gJFZZHuoNvJbLvT4N3hovxfWjZicrAbz87oFuxDFRUWdaNHRKgBG",
  "key22": "5VnkSaxo2JEhWqfn1sX32tANBZ7o2U7govhuaNAF7Wnx45X18fuuWQqyRxc4yzwdCVNoLssU8rEzz1Kjm5R2BtKT",
  "key23": "2i6tuAS7PTJaAza5gUGqaFHZ4TnuYk2dmD3VJ3v7H4wturKZAuWQAo814JgTXRZHReV1fi3iTEhjNpdSuS2TZPwE",
  "key24": "rZq36RyY3oTF6F4ptbWMRjMhTJWnb2xarEEQfv3fpuBEujs5CCKVHHZ9gG8k7LtFDe4yvxFaKHqRMDJH8tnT12S",
  "key25": "YXSW9t56W8q4iRSupGEzZJ3cgCwzBB6c3EviZoYgjDsrthTpNya29LWmQDRDgcnqrdgbVYPPnRhaLMueq1QPi27",
  "key26": "9fujPo9gjqMJgx5eLv63FUeGALbD2San41MReQNEwPcd2M6yrg1m5t3D5B3Y9jcByAxgDH2GtbzArb9sMQouNYs",
  "key27": "5RufnfT7j41TqUC3TuGYfeQ1F4TfNVQMofXvHb5NaNmZ8TBKVpXQCHPCwdgLK75mwFFbQyGUycSAcPHgfL9pEfym",
  "key28": "7fEfmfunSh9zFJV7SQjb9UwaC95Z6FgSZJx5CYnpteZfFbxwVCMihKbL6yTxyyhvDeghJaffmK7ry84FSCa6dLh",
  "key29": "4AfM2S9gFtZrkStMU5xqGLsohqc5mVDfDzbe9XpGSLshAKMyEo2cFDJi1HDhkdbJzBr1egQsADJzWSm8KPgBYDos",
  "key30": "4SQzuNqdt3epyfHDXqzePy6FF2hDZfxNGF669QdBdf1Kzv5mmwSxsMrQhHzKDWhmrzFtbBeFaAqYfzzAtUCwriUS",
  "key31": "GwoKDK1FHb7NTWp7KtKeGxcJq9smeLgwTfzYZMXWyc77QMoHMUY2oYcuXogoKbcLyLmEvxJYQ4hhstiMBs9Y5Dr",
  "key32": "3X96Q7PV6ZTjiSZf6aYfdWtGTxq4Cn5uVp6itjPSsRE1WtCExFT9yBZbenMeN9JqVAUoAbccNRZas9KMVFAMyhEs",
  "key33": "2kYbPs4zQ18MhL7UA7NL1MBDebMb391VPmou7PqtBSBWdxYJriM89Y2ArwVKmu6YUXLo37fyUYztb4eNbaEb9JnW",
  "key34": "5ozuRj6sMUZh5pHMjHCKZHtUZNSwYftjEuWPGUtmizHWCAMkAX5CtXSucZNyG9bgyLqwuBYsGjoWE965mKnrWAv3",
  "key35": "2ea8mcb7Z5Ck6CYbKrSUxzf1Etmu6ouZh2bpmaiT5N8KpceMDGizXhFcpTxnbTNDxJeTg3y59GkTNs2MZPzAmda5",
  "key36": "5xijcPUhorSYhx9vzUatx11DLbQDAwfX7SKovUkVKxviS2BE6EnmAuavtDhQownr9fGcUjzccZv895rjjsHQ2hom",
  "key37": "5cyjuFTvYFXPkSc7VnDiVdmmvkavVZFNEiknkZAWEMXpzPW9jwrdGNXg9oabdKWFE1ZkLzpMmytNv7ENyUvY7NC3",
  "key38": "33aL2hmcrobGwnHsaxTw1RuuUijtedMt37gcTsrPKYXsqPaojcYwtmpPqxxoUqjEVNveJcZk6X9VFoZCER43XMWd",
  "key39": "4eytrDzNL3YHamyKgHtnRg16vA2vzEoc9tHwZxdxdF9ZBfdsQa3dHrizYRzgNV5WEaT4nF3HSFPq5Z9T4ENwavP1"
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
