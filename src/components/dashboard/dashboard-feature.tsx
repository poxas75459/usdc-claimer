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
    "4xqWubCKwZWaYVk3VEEfu4E9wwRPEt7mTfNpgKmnMRYwzuSAhMFUui8B37PCs6R1zPJrpdi22q7z4GejcWman5wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEUzg37zcKZj8SM4t86mkusnfwRwLgpEDdgdfcVQFAkV7L2KgjG8YHFbXR5mUXaM9BCGgoR2bxPFxVt8V4562oV",
  "key1": "5FJ5EZBtQ96WcC1NkbuLb9o5AKtgCVEnaDzvL98uWJAYh8nENPU8xWF9feSsDqgRnxuHqDngogSoPDgnL2fNdXDA",
  "key2": "3AfMcPMt5xyHc1NCr1sHM1oVJmVWLERavfJT5ZuMq8a1DTB9PuegbMLNkxHceYQrvabEyVhut5w2Cz4dSwA54N9M",
  "key3": "4dF3G1yNeGKjSLYPgAdd1noPvpjYMqYwtKGL4Q8pdtin1GXANSHwuQE6rDzMWKVCaWfeqj8LmseYVQPVLF2bctwb",
  "key4": "57pC9j9BEFzEGZ2VCCYmEgLwFx2r6CuEjYkRQD1fN9z5D5ZE7pTgrLx8chgS3Y2zWqo98Y5w211PvL1XoseLNouc",
  "key5": "51hy96FcQKoSzcisWErW5d1wgiP9Wn3GT8C7Mfqxyy1iaB7zptwRUd84h4T5YupCSCnQZ49SgdivT4KZYnx8ciQd",
  "key6": "2EGk7sD58QzbvTQggYpq5yDnYkyDooKw8aYgZy1e746g9TvNh19aHRaNBEqo35knpjriRm98EisZ5cXN3eN4ZMN1",
  "key7": "65ECWXh27axC1FvuF2WXbrZCSBtxQpmYqeB5mLHbBnRTZ2XGsgHD6Z3TiuhcWQsRiJNuuPD43mrshnHUx7wreGvz",
  "key8": "2oabLmeNJ5eTc1qQL5oGax6LpScw9ZedDYkcT3uMd85CP4WnS7X4dxRRaBGmjjYaeHrJMv52Y49PaewXKcEkdcQu",
  "key9": "2VYg4VciHUfNVcdxQQRV3jNdFUd72aBK1zzykiAZGDvhrfRpVFrn8vTdSYkaMYBbSABL3p1TGCinG4xmLXpAiPTf",
  "key10": "4nT5nuFHKqCwFcf315JZguLQPL5uxYoGVHTTbJGcKbYutCwiifenKovFhcsK15PKuMYd5gvhL1oCBZj1jAap2auh",
  "key11": "2iKiEyuE1F9EmJxbGGDZY7AiyMc3cVMPt3WwYw8MQfwf4wzTZ3wvvLPY82QCYAxhEgsMnTeMf6qdA5QXYRi5dzFN",
  "key12": "2bwePVR2W4XNEhCQj8AXi4MWRjKJJoz8DdhW3p64cR7XFhjZnU86wRkCyYBFWkpzSPx7QmH93tadLpHke7dmQUto",
  "key13": "2jXyf3T52gcuP297QCD7eXARgFKp1QNsm8orKtWCoP52q8z7fqwygFPDwjFALMnawDTA58zrWdUtm4rpihApmpDj",
  "key14": "5C4zwprSuu6cMw9qin9uUj2peysJfj5yMLq56aCeafYyNs2hxkY45RptZdNBJVLkiALYa5rB64YXnE2bmtXPqGWG",
  "key15": "kneJH33GfCTe8pdMAZgUksYoNZmLuJNNKp3YVvjU3dLBLpDD15wP1ACQEUoaUHhBMv8qbTzbfy4LegFjrLF2yuB",
  "key16": "4GpZ8PS9YBaJYP76L2PXnHCM3pitp5D7s5vY7vP8turEJzpnzZiPjTMbyy1pABK29jjLLQ1buX46eDkJFbHkmFwg",
  "key17": "3W8oE7ouWHtcXCXDbamXLq4i9nmoQmmLVmduRtazsd7136rmZjuTfDPmJHqsvSvuBjukoVsZcf7JWZJtZ4nUkSte",
  "key18": "2Pwc2NGsRdwcYWU9xMVNWp32kkpLKXR61m8vdAp6HFM6c4nTXw41R6AQpjWj5nje3o5BCP5Gdd2LRrVJH5TnuP32",
  "key19": "4k5aqhe92RBHaMuJPkHtHFv6ZMaNyYcJPpLpnPeXA7nnUMtFfj1TuZKuXyhyxy1mSRkmQ9irEa3LtRyGbSWBGg2V",
  "key20": "5fx8UiK3Zw37V2P6MtgDkEUZgyQcevbR9nPBESronMtNCNXqxyepGub38aXZkKt6TKkmnRjb5zJvhEZM1mxdKWjP",
  "key21": "4Rcyeop62CbLQahk6HnwSySzTjQfWvBLE4zP2SfPMpwMhkkz6dhrh2ZZvddSoAsTAAujrdXiV6Vyyn4XQNbbnFyA",
  "key22": "4qfSSJD8WtQUc4cnsvoUCHqh9xhjrRjuNd2MRUH48bkfWTvPWSqpuqkATRtsLMGR8YV2e3YG4H2HdJm726cefDdX",
  "key23": "tXE1m7dF5YAuvdRVJHBaAy21cH8mGUNzQZ5CypzCS9zKvt2rbWpGL2MzAyuQn9FRwu2q95UP4gdBXtRaBCnuaMN",
  "key24": "3KroPrkhZEnegCB8oM56Vons1eTWzkqd8FHU9jW6bikTRNSzzP5uqy2TaDjnt8Uen7YNS5hDFCqS7gwk9XNftsSB",
  "key25": "5J4NFNRtUCQJpoeALugWQHvdfWYniQQAqSAhwXyDAToXwBg4whyfc6gCp31uJ67bZT2FX3F1BWWUuzwZEr2eUJdC",
  "key26": "4D3k8bn5bvPfdkPAt3RX6Hye8V2U1UshvwXJyBkrYY1uv72Huh5XWxZFv7PPjHnx8kjMtcJvaPA4gRPK239rLThg",
  "key27": "M19NEHFyvvVwA9RJeRP9EsX5Ew83hSPphJ1dP2AqPm7wXMwwPBBs9Rz7XuV7HnNAp7CZyXzPLK12V1okcRMGKvs",
  "key28": "5wPCMfdh7qC7HkYadGe1iBkNseVEq2xKs2YyxbncDTs3etkFktwFvnz97F8GV21vTwK98p8U3TgvixwTUscxECcP",
  "key29": "29Qf5mxc5gnHjD2RKGGFzWFCvvAzzem16xnUvNFZiYp3aJ9T4exvS1Ckwh2xpsoZh5BHUHdGDbvo8a3C9S3rUCxo",
  "key30": "3G1mLa1hL79kiHit9W67KGPJvLvvkd2shH6FUAEPbpuFWMGL1XweTT2XF7U13TE9pKrPmP632Ky6DnaPFAT4DRzE",
  "key31": "4teo4YfwhAb7LTwwA1VH43fvyjMK5dq137W7nykUeJ3YkH6LXeQ8xQzdsAuPGvoxHMiU7k5GybBKyBSjtxMxV64M",
  "key32": "23Y9pRZ6za5fYYYo1VdFJTxpVTuL15TfDjrXLG9eB4iV9CuN9S9xgHFmJQxDBYveKNFPmZN6s1BE8RRKExY8QzyM",
  "key33": "3YSahBn9q9mziU62uRQ8FsQ9GNAPp26WpPhm3BD3ER923gS2sLaWqESng53uw7Bw3upGGN3ZEVTb5AjSmkZBZ3Sd",
  "key34": "2qk3VUB6i2DfPpsuVJxTBVCHJp5yCgVzjpnUXCdA7toJAgMcwFd94C65TPWy8JUyhugq1gC7j662KbmDS9XMjZLX",
  "key35": "5yBcwDQccu8WZtS8atp3QVwaSCxbTVzPw4cwQfBSLYDVsuZzhoXX1kDUV9TALXVdxYzgoCiFv2nDcUEvxgQgqTzc",
  "key36": "2d47fUJwUeXHCBd2PzGSt6HdwRnZDxkU6f85eBuVrYVMUAnZsKeVUbnLAunF6N7Hz7PbRUMDsQUyNbG4Cy1rYEYT",
  "key37": "5mqUYBYh5G9tTiq78xkzVAMj3HtUQqS8c6rVuBAemdRPNs8kJCTREFmKB7oGPQ2WSTwuzu9FHXg3G28yy7kzXsWB",
  "key38": "67mNfKfo2s428oe581zbQgJ7J5tTaoe9rrN6QuP3F3nSY6QVDXdZsCd4vKP5S7KWWkC5nyMrkHSG5jz626D4B4RS",
  "key39": "27eZVX1YT4YUPDUB7ab247ZmPnznvAE4LcaWaD1Eno32k1xTB47mtSxn6v6m6nKbqy3HkNWZ8qR39HXjo9HKzvip",
  "key40": "2ep1zU8jbvWfbFG5rqpZrAVpBiN3a49bng87ssFxZymPj4J4wp3FSVn1FsGNTLXert7S5V5UQkkV8fzPXMnMfoVt"
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
