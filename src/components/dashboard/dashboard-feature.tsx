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
    "2yhHHm21e5abK48xZXEfEjtzbodo74cHTCAEgGcYXNVZWHQ4mnvA2oPhw3ampVab5oinyESSNo7xdoJUE9ZCh6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5dKqWt2MqsLJ6phdnjzNc64e9KAPGLZy9tSxKBhng86i6yCFKqVKEZ4xGGH6gQca3pmod4bYX1YkYoyXfeeqG2",
  "key1": "4teMBwk2otCV8kfU8zQCqZqryUqkB5iA33HqPtGCSscZr5e97JEdbhKFRBEcW42DbzebdkusuFKrSCfuTC7apQRJ",
  "key2": "SvGdHcawKyeJWjdAHLV28zEp9Re2FegcsCx8EhNwUy1XY4PRjqutiNHFCYdUminFHDEZVJHwanoWXcVtfJRjtH1",
  "key3": "3rcjL7QboiJ8f46ABQL1aUrHqSW34pmW2UEEJyjnVqgbf8QSvbJhGWLkzoEo7Ju8rq3C3tu5iDWDj1yN5EhVj5H3",
  "key4": "45YSZL9L8bSSreMCr3vzmyh7JCa2AR1mxVvt6VUpYwbtDM1VWwRfZS9tiuVwwrAbZdyqLMNKs5xmFg95miRNmhzC",
  "key5": "5az9PaRDdJfQiK1k2fqgGStBBq2pPmKZTuTfJJZob7EU7ZKbdL3ntqkqXmBypyV7rgohjVZJsbF1ZGBtNPqNQMpP",
  "key6": "4FHvL7iWw7rAHyXhoae5R28TppWaNmuvXLgdGKyhJXUBqkpAXKosrqHFYNGCnmpFjSHoPDdiSjXET5mc9iQW6MC7",
  "key7": "25H7Y8W7u72izrwUnWLiG7W2VjT5H5TKQ9znt8VHpotKtjvgLbsYfhwgYrSE75Xn19PeVP1jy7Cg2bQxsT9XjK5c",
  "key8": "5eycKdRb2JE293LPwNahFgKgqxv3brBkSoaV9CoXjukNuy8sToun4goTb8AhQa5Uim7ii928TXUYkV3oQ3QkUmHu",
  "key9": "2ZuojHqfoDZotLHHy2GPkzsjT7dYSMWPm6GmYTrxQLhKfdxUx9x1z4sANoQ7oLcPjvqg9LvjbQy2Us45Rf5x1R2w",
  "key10": "7EURxKHHJyMKWhT216zsWfTbrNoWxMvbBBZGMNToJJyUAQPxyoJD5FxaMwUVKFkrKUYArNAuT2Dj1cep7zhpkiG",
  "key11": "5BVi7K2m3zTJuPmEVo4WEEkWF4xF1ye8C1qPK6ovApZftJPUFy6iLAiTs5vB3rNmaW3fkxcrP2aZSoeLptss7CyG",
  "key12": "62eX7CdCNR3DkeLY7PT9RkeVUmJWVW3D6MvJeL2w2D35RK3TjRWaeiKjmLUqgC1AukzY2zSvP8cx1oGGHzqJaVM6",
  "key13": "2VSkbFir5PR7ZEEn4GvtorqbhiziE8QPdVRW91iHzPnMP8Cq8hZBide6T6H31goQv3fhPASTh319itiUGqDD4Srk",
  "key14": "3X1w8BjrUFEcxrechSfcXWjusU6HVAVctCyuEVCzszjwVBDA6w3vv6ZyTW5n32nQZTBZofSKzUyrdCVnAogEW246",
  "key15": "5fa1w88x27CYK66V3QbwpGTFBS31fXDMd2Lxdg8NANTzyZJfuANNL9qtvo4vhQQ82RkDngYiGiCWGxPsGyW8sMPA",
  "key16": "xERCJ9Qiy5m1MQi9wktcK3LMXNJbzjkHpoieYSpHp4EP9ksRXV8cicTPmyKMMrCtroB4PgzXKNCvQ5ssZqkoSw1",
  "key17": "5Vb6N1nD6Qwk3yJ8GpUM3WMCNNBfpnS9FwHuQDnQGcLUpvuGutZkjBLXu3Z8a6Jkjg4V1FLqBsxxD3FunhAw3xqk",
  "key18": "43A2w7Uf4xK7bQb2UQq8aXaF2xfDeQa3ELZ68VjMXRZQQxL8EySAYtGyHULaDjipoyqhBQyqiK1eaB8KdcBwGA5K",
  "key19": "4EDWPRp67GeWPVBFoJCHc3VshEn1xnsXjk9HmTR6oruBN4YygNLsEAKs3MfTkGtGi9YpETiRdpoz1e7qa1F2B87a",
  "key20": "gadLEcRhUe3R4MXa7CVsvBDPYPgM47grJeaUmqaDJD8Rf3hzy1LE7zcZCUdSiB7MTC9VcbXMi6GsSGtDq4pzUQu",
  "key21": "2mk6RUnNdpjT94boFqwJAj6LtDBG3xh5ZRdbPytcvuhZyUzmzXqEjDw1taLiP3MRZwo145xSKXd8b3Ajv5AFq8mo",
  "key22": "4HKVkfr1ziWd4hfKDRQsxnQWEGeZQywkGqnPgvrXLi3CwUiCVGqLK7A72hZUVcwXiXKFBnX2ScxouespCRt5NFjU",
  "key23": "43iLNHwgNPMaja4733HcojZtn2Nv14qDDYw6BG3KnsiQDJmBdFYJzuBQEgaWQsYBvTjESTzE3d29E4amBm12zy5h",
  "key24": "2uHMDio7y5k5AjJn5ttVP7Sp1rEjpdzKgJhBsp5FwrpjR6sv4oxqo4wNY63xmr35ng9hxuUj5ofiBJJuvB4KGqh6",
  "key25": "3oh56VHj42XCsD47JGp2TvMvbEdTXKGrMrH1GuS7QdDBNqcz75L4g9VnGoH1kgvM1oNFgcXHajgugQK5tgjEy4ju",
  "key26": "4dfu1k5xEp6ELZj4rtvumvpHuRTV3T77QeRfy8HCE9z8xhpoMp6eVgkVynhe9StE8MRFANFCekBnVc7j1K2AE3b7",
  "key27": "2hiqqoK2xrPcqKnTuN1QWnmCPatMJZbDcmh3f6d6vLkVxU72WKU6mWoumZuvwNp62CWVeYy1E97To1cvStZCdunB",
  "key28": "PRCWywUSgyKewdeat1wx7nj2mWDVsFdNgH8RDTrv3bKRPAwazEYh1VudDffbbWb5QC5qtWmhgMJNu3WHaRBcWH1",
  "key29": "X1B8P52Dm9WbKyftUMqtKp5hM71LaS1V2HzsSmVvFQuhg1RZTrRHAgiukUU3UmmTun6VjCenGzp9eiDsoHGSUYV",
  "key30": "4jmJRr7cgWeN82eQtaBU4V9tPdzoN2JfXjTXWTyaczWs4THsVhUcvuRvpMcq2XNt5nDdZqvnSv1BYNhQjdkErE28",
  "key31": "3qxru3ANKuvhFQHiEfkdbK6KwE3aRj3kphdZU3ExNiXX8ysYEmuyuMHAcsxhSKsHQbzqBsd23zCA7EvByHMA42k6",
  "key32": "3sKMtQJoMKXtGNd7dxLMyoN8zKHigcvLTD8ke2sfa1WdUdxoC1ppfBpcTHVUR6WMVhVEBwdcbexjmcaGQ42dwhJu",
  "key33": "QjB1CL7QqqYzJvm5QsDLpsFSmdJFzoF7otgwcF3EyFunaQqDA6tfhbhtMX6JYkMAJqhkgWyfXgSphRoWCVjim8w",
  "key34": "zyfikhGptqMGa6KjuQsJppimXjbfG8VmGdufrJcfeV7PnePpbW5Hp6a6MVMpqUt9KApUswiFSGMyGHGyj3hKMP4",
  "key35": "35w6rY38fFxZgfwjgu5Qp1yQjCJfTYHoAKPNQTLzcuEVJAqRhWFBYiVu9GzcnULQ6EtBrSxyxe4JbmULjCQCACQ5",
  "key36": "57gTRrJ4VEeAWCfCS5FfrDvc2jjv6dbpcrbtVCheZKnCcJbJskEu85xYoKcTvsm6rAD8ijLruqvbcwb8Bjk4u2AH",
  "key37": "2cpAgHJWuQ7vT2aNvUt7gieaoDxuBbAQhT8y3GUh9a5BF2hjx9WjnBwsP1CutVdz53DJLE7ZYyjAq2ogWuNTgwTG",
  "key38": "4VLMWawJGrscGkbwnueZS2Mh9usYipuGDHBwAskFbnG8hjGU58Gq9JttqgvdzbSURT3GhivLetdLp3edKHzSxg89",
  "key39": "4ycBbE33y9QPMvLW1F6zd4VvmCQjvoRiY4SiRbu6ftabyviusny5gm1RV1uSUxvzVcpJnW6JreQFToqQTSiTArB1",
  "key40": "37fo1fcb8aJha9sxXTDHx4Vy6AUgF7zdimy2Cz1hLm5uj6M8vHsUPJhJNLYjDPdCa9CssvtNJ8cCfUANBkhNp32J",
  "key41": "2UNmqJJAKcJ7YAueaqrkfitdGWVC76CQD7Zewp4M2NBPqABEekgs6d2MCFDyTezBdQQhhFbD9W3YjfeyZVhVThah",
  "key42": "5ZaCpi9sktLBANftqorEFGnzxtTmwWL9b9bn3TxgPj6tnZgAuBvtsZAL41V5Xthoh7nKUyWZsFtLpJhJu3EwaQYf",
  "key43": "35acMgz2p8SFxD5D7PxkpjnDJPGEnaZxdXLewf3LDLUexpuSuKQLpoZLUY7KztBEg1osgcbEbaYhiuwnZ3dkGvsg",
  "key44": "2uJxTTu2dv4VjWkicyZCotNPcFV4Eh2ffPaRpqJENVui6Gs5RxrAFn8BcwEY4jE7wR1r8VjER6z4oCrw8QpdBoED",
  "key45": "3JYFYr6UqursssuHM9ALJS92m2grrXCftsZXPeaVfz9f87HFpNb61pk1yfDRyxBcXGVA1T8R7vkMbrFf7k5oC9cL",
  "key46": "3Kmik9MgvsWJSs8xQFkfLc7QHNkvQYsK8Xysmy3ND3URnB2eVVVnDvrG2xD31nJ9FynWBt16DF7cFLm6DDEMftP1"
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
