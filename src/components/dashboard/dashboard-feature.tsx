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
    "4vx7c2i3hv4iVUC4zG1PqzUJyrZS4AmDn1Bc9o85snA4PXFygfrhL77wtxeha7GxHRRbXqewQHwqfUxQGbBwcU9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkWtAgnT5hAezfKEyLU9sNhu7t4W5yTAnFUzypU43eFshcSMvFpRm4rjrVSReft3Maw5ysidBPnQ7znj4h675QU",
  "key1": "5WxrfbwwLFdc52QqYfwDUpqaQPYsqWi9muSuyz8XBiXSA1YKwb6di8rahnxuX87wJBRJhW5zyudQBzScTdE2ntoU",
  "key2": "Zs2gBj7LSj96CtfXHe7DopZLTK8N3VvARKRGEjCP4kmnedLmYZ3ScdULEg68KD5k4uuqRkg2SF6aZ91jZP7wCBb",
  "key3": "3HBtMGm8SFhKq9hnwfiiNunNh9iLy3KjbWKBDW9NRRYe55NLzD2oxrM2ytBKxofgobhBumnwJ1u24BA7WFzwfQLE",
  "key4": "5LrHjbU4AGeNH4B98zBZnjwH3ZU3ASbfKKNzpyJiKKun3toz359jVmw3GapHiQfaTJup2GZxRBNk6xs46aaYGNj2",
  "key5": "5pj5NifKvPXzRrFUF6fimaZmifT5oCeAeuKX4QCC4v4wK4HkW1yAWTDfv8Uq33WGVABAqgXXpbZsWptwYhjRqQc9",
  "key6": "S9bDc2v9aFnFn9WK2dt8ibKUz5XYFKg5EB7cuf388e5TxRtHAX9gvwrz1sPZ1dkwS6Grb8hQQFWbwVpMWwjUdea",
  "key7": "2qxtDUpXKwdFiQAFQArMj5w19aXHHaCcnHkcuLD2YeYwRFNi7rNHurq6wgUSbNQ8KiwvMrqpmdwEAEoJ3q3cS5us",
  "key8": "4vxpnBjLEj2aC67vpoSWH9wuRMjc8LJcyDRJVX86JdWQSwoKzdFxwDigfFVXiE63vvYa7so7ar5gdkup2AbVbqi",
  "key9": "3omfDcawzsoKURqFpcVFfkEUjNwLWQegDKfM1R3kiA4ahiULKds7Dwym4jBwnnFfyuoa314zXUsdLuobfkndHRmi",
  "key10": "5VzKi9KeKeGyhmVgfDgZ8C85oaKQogcBbZBqLHEDTFk9T9SXNPEgZttFcXfrkSXwN3343YAF36V1G5BPDhk99BHA",
  "key11": "4sgjMKLfPs5dD4TGF5DprzeoYbr2xVhL7ms4UjFBqbyWYBTLoVME6oS5bLrWBY27weT3BfVDqtPvj5mMd69TVEj",
  "key12": "3u3AQWikyDp2Kn4YztjNizwYc8VUTZuFScHTmBuLLdTfea9sw1RufTiyJ7JhgxzzjzBZ8RFh1kUsrG6ussGytjKQ",
  "key13": "2jLC7nt7oW7DsCDdeoBkxdx8nkywzAKXr7xF9h77yaDM1VbuJKknUuqJafp6P6otK2ZiFd1Y2TPiCwEYsUPSevkS",
  "key14": "3Lk1yWqDnZCowBgHJ4x8QL2g6UHGEvppPPUdsE3Y3JjAXufc7iqB344Jo8Rohb9HkuDakH6wHNUCZWbP6kuxfb1F",
  "key15": "5AX7fcZG1nx3Mw3kow8aNoEsiYS7Mpkq4J7GsqQb7rUTAkYroRFGFZRcsGMLVMqdDPH89Ue5ujub2kLtY7Uf5FAs",
  "key16": "Cuvp6aPgccooifkNbeKLr2oTCaxZXbqNaPNK4oixG9fiDPQN6Gy3x1U8gDmvTpS4q2MZ56J3suzDzyLMXesX3uH",
  "key17": "5UoPxfbrGqAj3vx3cNbAiwaSfWNYevjBQRnTeQ3BhqLKN8DhfSVLUgs4gq7hD4QXZhNdNjsRFrot3CEz4hRDRPSa",
  "key18": "4KDo7MbTFFbi9KZMVXc5yT3XfCzcCAmz4HeeVWrciLBfEB6hL7xQFETBxUnwzCTowpnLFiZZJgAiWDVq74UktJKP",
  "key19": "dwhn2J3StFc2LajX8ukpaFbVub38BEb9R56D4w5Prchcm5aQxUcbyGGayettPqysdygzApFgWBQavALC5sYecWb",
  "key20": "32pno9s1zM5qbeAqkKfBDwYUcGWfDuCrFPLVKxRqM7bXLXrDFia7SjkySUjDwEVCXpjy59HYZd2QYrjeHh2ARuQP",
  "key21": "3o5YM2K8fK6gZgDVPtZpUWoVuwYakC9rG53CvSidwQKJArXzgq4aNuSN527A4k1vZdVuuXh16q1HvU2e5ut4b7g1",
  "key22": "3qExWr6FB55KhBRUtDK1CR8sD2YTEz8fS7NQ6xzDTu3KFcQKt5nC8tadgeYJRYCu2yz1jivGqd4gV3nuSDP16LNN",
  "key23": "3NWY7kknr279QFauX8MGKZDPdMtRNTQwVTvnuhXeZXW9atTVhj4vA6mcH4yugpjHNrQiD7eiJWrrDtDpRHPGBh3Q",
  "key24": "3L4AMKwG4tsTcpojh2hMHCwJnXDzMsFvHfN6DedR4gyq62eZ4ugkWeYtmMYaHH5RPugZiAfGJJpt91D2at9gBToL",
  "key25": "5o2dfYFHoKboTxVLbP2Sde4Q9LJGZ9u1bKRtvfevWh7vHMHYsFCsU5GyKM52RA1EBFgLzDAFjzH4HdAfSn4vpw1B",
  "key26": "weeLLXpY9gweXvXqQqgbPswT3cMDPwbafYTBWWiY4NbdxMPetB1bfikFHBzqDJJW4VAeyn61fh7XaHvXiywSfp2",
  "key27": "5X46WxYK8NUGWy5k3EqtvSYw6CyBShxwRUoNiwnFAMzvDnEj1w8GSdzoAR7WCNabbCb3K2Hvm4no8syUtmsq2HjE",
  "key28": "5uRMZwAdM2aHEmQDHY13vYwjdxLgL2kdK7VcCsEHLLC9QbfwLJSnB43FSahe7Xqfp9b1jxL9AZ977c9DXVa7Y2Br",
  "key29": "521ZDFEQgz7jZShJJE188SkdFVZ6uuVKKgEeMi842VzQa8LWFisCm3RLzDYz32aoXgs6gvurbCeB4QyKJk6DEMPA",
  "key30": "3fYqmbqZ2avtr7TD4cSaCyvxuaE53pBKWdK8fbtmccLRGCy3zk4fdhMYBsXt69y9Y6q7hcDdS8bkSYgbWuapgj39",
  "key31": "4gMYYFx9g2ieqCsAHFn37BThDoZmBArr6Ugo5GTjY9barDNayV8tLSd3Zx2HWfxeWQkKYsK38ejXmVob6DsxUaVd",
  "key32": "xV3ZxRgKa66WAQTNhrrfY9sm5i1Bvfj1a121C5s3sZXemAUZdBjf82wwJVXBc7J2b54uNmJQtiwirWd6DsPRgcj",
  "key33": "555615Z6PmFpaYjz8u4zNwaHqNNzWs4ZZi9xve6uRcAfZq9mMPUzzjV96jS9cLjvY2QvB677fAR23JBkCeG7hjWr",
  "key34": "498qXyypDv6kbczgUafEcaKZHii1jhswqtKSzieG7DtGQxV76kHnxHgqhdAjHk4jV9CVdxDYnyWs8fXF1ayK8KdP",
  "key35": "5Y2n9WjrjB4neCZBLnTcoVnvkQDDNVft1G7PUGBnERGnHVsZX8Ft8gC1uXBcM1B6wdTpHegwWA7Ekzj6YT9QLyid",
  "key36": "2ketuuDZeJEkVGe1zszWYnafA17tsivUa6qapUGCVWAawg1ppzXL8uEz4XidwrAHGyiixnXP57n3mhmCaEf2a3Pd",
  "key37": "3sbhDhEQy1UoJ5zdKmFWFtbwDDKi1XK56jo3DmxwXmnYfn26z6U4VEF7NUzvrGUC4yHYGKjr3huoC89gtjDYCkg8",
  "key38": "5jMWffJHWtwjh67gwKBqHcupVPQ3j6igLwASuhMKNasZABeHwLZv5rgqjKznLrasM5x6hewYSwvwE3QsaDxuco9A",
  "key39": "4B13r5R2BWeoe7Vn2qYQ3m25yRcjZ1UAevnLx4FabtXNyEt7PV45wcyHPd1NJfkNhfZcvomXWxBYsCnEuwFGu62y",
  "key40": "3EyWEKnHz3A2HJ2HdMDQ5fnd9wcZWegUrZmnCj9TSpnu7AaweZuoVsXtMhoNBta9cs2Wv67BrRdQo9ZvcxY6dksR",
  "key41": "4uV2LzHitdKMjSmYTgfNG56Ux1VHzrNSRayhHdsMjmCvtjxQGSc6D5t4jdbFxknZArD321oCQ2MQsp1FeTG4YTbh",
  "key42": "3nX39cT58JhuaZA7V6StMC2eEU56EXYRhZMnr9qgurq1ik1Za8LYeMgVMYsfHunyRZ6WuyPQ1aqWgcDWiVPGYXJo",
  "key43": "46TNujpdo2tzfahdseLFP6dmQzzWRkQkyNWkFrcqCTuFcH8fTa7PvoDSsdYiuJVKrSNVjo2VycXehdgAvtSCc5i6",
  "key44": "2FuiCqkyFygcFX23ddmdRD8aEnJusevSk5dEK8PWRsKWFCsrzLVpNA4QqWF226vi7b7po6gz8GmWtMsuM9ZjP7Hv",
  "key45": "4XdE1AqFVmBzfC4BmvRrpMhXdqW9RiygMSMMiWvfadxCpkqcDSRkRmvnciUapw1s2na1BkLXoFzm6NoTqNzapAn7",
  "key46": "2BQc12rXEBJUoDCMSkYfwvmqoPAPuWs2kzJ7gnVyJTwP52Zk3TLDufj33ccQ9yoomhmT9XeGwz8AscTfnSJrp1ka"
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
