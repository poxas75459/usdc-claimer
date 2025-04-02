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
    "3cjRfyGRJDYCmKUwGQkfMT5qkf7yQvfYeQV77Pvy9xuaoqK35Rvuqy7WejBFhbkhyB53g63CMcnE8kuskpbASb1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318Gbs9osX3WXmLEzbw5q58eqVqGhGtcczmvUDpg3KCaH39T8T9M5xL8GTNzd2ZFK4WFbPsZpC3JSWR7YUUemvP3",
  "key1": "2jE3dPib8pNaJNcfUaLj9YUjWJq8t32WaoCgMDi9fev7sdCzD5hUcYsDzsDbMaagBuDjEsSrmHCMGY3HTsiY3Mbh",
  "key2": "8ezUxu2tKCM2WTtLnNQ9R8CPXkarVqvh5fZLsksA9yjaQH2iPdBJdSURJUCxvMugMMBtU7KdBrPSkUyzTLzJzTs",
  "key3": "4V2gSsqvtMuF6hivn2nSYdty6nfHch2zMvC5wHUMBEvwwvs9kVVX4BqaoLoUu8bG1BQKua2MkjB9TV7LYxiGrf3E",
  "key4": "3WWZfHFVxj3XjftHYj96uhfwHUpXfvwnTXij3UhRzVB8fYfMT3xVbL4Z8PqFhzERTzjGJBGz6MQ8LTZS3FoRXUKK",
  "key5": "3DNUkDFMJHHwrhXpGcNmHg83epifaFV185vReDkfvb9ha6oeyMnu6xDx89knaJCJt2veZKhKcMfvfcfYVjbpvfu1",
  "key6": "2JiVW5x5skDrfkgfxkT35oPr5xmpViVzW1tXYjCbUG4m7Syv5oNspb4Se229TF2Gqg6cTDVehNPGfFp4tV5U3qLb",
  "key7": "3NEMvLQDhs1EagWdo7miujmcVfvu4pBYiWuHTb2yTheWV4AhMaqQcT8vvW5rNfrFckNV1ttfbvx5YywpZqhYyWPz",
  "key8": "4v8jdx3V8bGpCoyKGkgL7iryUq7bUt9F44HtoFDXY7eLzC3gcUjX9bDfxNDAgVNQSU51KmvXcWM7XrSBKv1KxMPs",
  "key9": "2HLkPBMXpZz3JEdc5K18SRG6cgtvasifsSVeoM7pu1JpWsz6kfQEWZK3FKmms9d618fdYECCBnNw23VnkZ3skX1D",
  "key10": "5jGFyGPrH4HhCFLGDLR7bvYBz1DNkA27sLrFYnxwNRGLjT6CjMx6ArbkvV4Nw5fWyH6ujMd9z26EozMAokEsa4ms",
  "key11": "23WHU5aDHyMxQ5UpNBkGPepT9aUGNwLkrTq33x5HFeVoTcvZcNuFsjXdjaajGwbcY3gQvZJjeBB9oP24stFWeWx8",
  "key12": "2LyricUhVFLEtZKvEdr5tBMDDSVN4jxWLTZUDafy3DgoQzjSYKsF3CiQzXjmbphVifVGgEvw8ZLgm7r6tqm3xYf4",
  "key13": "53ms6mS3CAh4nT2oufAxANioq4yhoj31134wXvs61eBZk9H3VJa4dFhopUXgEmYLtsNHEmKUpoBh4gRumWdT2KDt",
  "key14": "NuR99cJ7RdH9NBbah9foqAcMCptE85GGKfUQkA8ZVCeYxMsD8485UrbWn7GWPGcX4xpjueHFAd2avKADkHvy78M",
  "key15": "46m8PqvpXTa73wY8pku8TqKhzCjLJbvzUuy7nCxbyQu9XW9hEifFEx1P5sBZHwKfC4f2qmok1CMWyvH6eiqTxzgc",
  "key16": "5HVwa9UQhxtse8UXbTu4CBYPejaUvJay9sMfb7s6erQv5Khv6jJbB5Gy46MseoYdZiBKHe1qGX8Yv8dA7qmUVyyG",
  "key17": "UU2qfUS8X8vgVVGnyvQn2gJ4Ub8qsuvYimz3XYqCEyxMLVAKa8nhEDAKBLxt8sPDTcC5fgkP74jrR7gUyTi6uWE",
  "key18": "3vqCbBV3BdELDj3fK3L195Gq89VTEmrDP3eUTNcTcdnduDyeKx6AqnGMNkf2FYgUUrQFoxp3J1QpnDQHS7RJDb2w",
  "key19": "3WcBhYqdjJznytTUSyTLqZWcPLC7z5shfrCb84ar2de9rfJuMDdK5kmcfkZFUTUo6ASUuNTPb7KmgLXYEezLbiZb",
  "key20": "5v2Bd1yVgi8JvfFzNszrEYZSi5kXGtJ965bNPSidUARNrzssj4WGaMTUm2NJrJ3thS2Px1QMTkiQDqsK3oxqc627",
  "key21": "2ntRto2s3DNUwpuurYmqi2wpNGF4PLCtaXW389aQhyqjqDcvD8CJZ6a9Afb9HFoQbgfasAua1SviUaCpa4tK1GZ2",
  "key22": "4YupBp3KKuJDpZDFEyGGHUY3pUVku2fcvS4RqZPrUwKkjXEQ9Jk6Q1TYE8u57dNGxfp5vnc3B3c1SjJZjMd5T57B",
  "key23": "3yNb9tPuEnLT9RTM1nKc8Ry5CNfpTQRXzvtsg2KwcFvWBAjEzNpL4tRVUe1qHfBUPMbYbBMDChpxWbb7Fkkkk57D",
  "key24": "3QXoULifz9iSuaRfFx33n8DPeenqpLaAdaLd9cJCpHSsyEiBdqqmHZ1ATZY2fDPAP5VWw8sLpUZy11z8cK2wJyxQ",
  "key25": "2cAdoKXnr4Y65YHS6iPo7WpjWZtn1iU2i2tC717ikYe3nioDsPsgox7kYAeTRmgAaTcU7smVK9nFfc7TmqvC3Qrn",
  "key26": "4s5BpTDS2VdLgvzxk8Jt8BCnmEb9qMU5z932fzip9dwJcbx1Wb5DxDMZ38rK6ubLvxM27VodrT5LaWhQXwuf73nw",
  "key27": "5LfZGYPL3dbJX2AzmvmspJyiHHUjiTQ6uMviQuS7rHiMmhah1eoF1oVrtNDAV6KZgficrXhJHNqDK2PnMKup481A",
  "key28": "4PJ2zzhY3m9vsSKdZTroiMuL74rGmYRPVZgRBNhjK2q2pn7GpPshYyeNr8DSPUS1SPpeV1omVY9c4gnHFVcKp2Qb",
  "key29": "2VbzfBQDrUdmTvqMV9A6VGPzTw1vCDGPig4rAHy3qaue544E4kDdYL6Qb68ujgHjyZPtPARXKynwKNGa7trzXhqn",
  "key30": "3f9mEPfx5m5ifZpQBck9UVjm5bKRYqyqw73JqUPxxSm2cv3232Ly9fR7HMeozhf1CB9VPjfAiVd6e87aWKnvHoJo",
  "key31": "33ZRUfsNgDRhyjnxV7RU29NaKXb8Z7JTnvh1MLHCc3e8RVsQ1i8hukiyBzWQ7xuc7ufq2uJ6HMQf9Gvt3LK7ek2s",
  "key32": "4xhm9gV9jQypE64CUZB7QXn6V8WjXcFLrjeG2RhxbFrmJhspSDqfWHLNp7SGKCaLrMpT5RHjRh1LwMfzGk2AKK3B",
  "key33": "4eLGQzWoQhtdgdCnSCmAqjMm7M2V45PWbcwZoHsVMyjwuHXUeUCKuymNFR6BT5YvRtX2rwKwqs53x634KjyAnVz4",
  "key34": "5Xz4RgJMuX9BYFDvnSE8U6yxXLXmeHzN2eDURe4NA3JuUeXotX5FFJSMuK577qFYZQVLJyiayJPuNy5fHScXSvr9",
  "key35": "55pYAueNykyqdkRfuyyHb92Q1Aed9Wa3A8WV4MQoLphasaEfAR2uVss3FTCQUu1AsPXmdcP6Y6ZLXSZMFHfNFAAu",
  "key36": "2jUVDqJs2b883TziYc8ncjHrKyFqRA1LFHvyiyZYGhHyeQp74MSqGPuqHYnw4Gs5FHJi35rrBhWirezd2Xep8fGN",
  "key37": "2BScehqfYqFd9rDYL1Nzs1AYJ3TWDfNiVJsfN2LqxBjvjUoRkjGJArv4Zi24GLKXAMAmXtGDwULoUvxxpHgncXLX",
  "key38": "3UwNHdh45JiK1MB2qWkk5DMSTMkKTREFVbYzvouEMVNNyWU1wdcyPCSQFctsaVXfAb83cg59QpD3sLz3RBw97bap",
  "key39": "5rLByDe5XofUpsFPN5XaPgNAeteHrUyZ5dmTven4MMGsKk3p1e462VJFjBZtmYRJ9FvWcrwac86mixZjzMdGeXf4",
  "key40": "nYEwosivwF17wbjKiGuCBwy48WGeYxb8fhq5XybX6iwKtg8thPQ4mNHQNQ3KEZgdEoykuJaRb9SJgvCdgdLveKb",
  "key41": "53LWk3L48w2sN6Fb86f4DFFRRPTdJhKkqPbYEf37R7ptT7TP9MwuMzb5zkkr1EaiJVxsBEcCe9aqBHpi5tksVSEE",
  "key42": "4rXMAyH8PLmrECAXo3LNZkMswch5P9X7oyDoFGPDED8G2f35zNVT2674MzYZfEC3oD5ecVVx6aJGfSqTRjD3qUVb",
  "key43": "AMXzZHfFjxwNzZJYSP7d6HFhzJHaWsiuzMZJMY8zyBw19guHfjXuoowKSuxzA4dTTRvya3kHw1hRqZNMc23hJ3W",
  "key44": "3cVHvJH6uiwQMAErEP8FJ6focxPYkdaaqutRe3wBve5wiGaCeUc1v3Keqtb7X2gsFUcV8ZnakYwe8Poq6kUv33go",
  "key45": "3f4BZhCwtmxhso2YTdDqZ2jQKY5au9ymxUfu7FeGWLadjYftHjspKcazDVe9fHFh2LV2Wr2YJBSd1mxNKkrB3B2t",
  "key46": "5V8HnZJ9o47EC92phbkcrzLZ5AaKbZQiMDNizQQe1cdy2QyQpqyhwZTZmSvP63XSNGqk9qkx6JHSHfZr74d6iJyv",
  "key47": "4s1Y4swCWMZqrVCnxGbLnvcftYseioPXcgvJ71ACaPNpBb7SdNiD1ycpmcoCGqWo4LrD1Axz3gGgF4xESx32bA3k",
  "key48": "4kL6KAERFY8tKwj8byvbbBGaCHDk2mVpTWJd8GRJXb2hDYp6z7c7EQY5j96UowcRpNKVnsrDNy99QxC7aq62p2Wr"
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
