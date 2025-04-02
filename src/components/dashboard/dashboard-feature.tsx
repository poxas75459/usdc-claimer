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
    "26L57eVhMSwYbAL54azcq9Q8AbyuFBbjEzcBSyqaCJr1XbUyXZahQ8zztNMsRMRd5AdWN5im5pu1KqQeDtc7koXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVmW3i4cztp8Nn21aHtwDLuo7h5w265C4tL5Mmv9HqhmZqr1EsgkNn6NTwxwBQ1Emqrun5HNpQXUFRhL6ThAAJk",
  "key1": "GzGvWU3FJSyD29ErGgvhc9PvHi9E2abGrfYMKQ8Zqc7aKFvp4U4qUhgGXwjAi74AaeFBKu9xC5k6XkqEHL7LkDe",
  "key2": "FRGGC2N9FwFi5WESphQnaQG2b5LkSwkub8RmJE9rJYdNpyXhi2ws8rpvWdtgjwSctSezap9iceWd1AZjYZwHpZe",
  "key3": "5o43dMcAXAvjxkUVVbXJWP7mMQa9dTvhb9n9MeUP18sN6WgnQEzYbeen5FZxj83u3ypTgicpBLtA5hRQH7CPUHQ4",
  "key4": "4TWPq7LQgibvKM7qyidhh5jCWHygJWZbgPaRGjMqP69Ef5uM1hXwSgtETu5AuhGc4VAMAqnMw5uXyhE5sfVL8NFB",
  "key5": "4mohVAhiecCYNZTBzWn5RVBnHGeUxrHWzjce1pdnfGsUtNG5MskH4hshFhS2deL8TSdobLqTCaSutw6j7mZ5b8uj",
  "key6": "nSSRvSFnghsgNAAoftK9pdi5Kms6bsGuhzvSii9BeHzdC4D9vRNzqLkY9KDqNwtn2FDtQJyu21Qu4ADFTZj258d",
  "key7": "4CgSqq84qrrDEnV5vLWCDbgy78sTYGfj4SuewYDeqxT9dKPWZuCeLwy8ExH7LbA1Xe9A8sp7ezcFdQLE3aRt5fav",
  "key8": "4JQaPoTBuMkRaqVcEJmabzXejVkiSVBHvHpcq6Nyg2eJ8UcdEteYB7dU6oGVTVh3GjoRrsw8sRLR9waHWbTYHwPW",
  "key9": "47snEDViotKNZVnyVPvxx1DcTUCaStA2tWPnBFYHMuTfwv1FDcLsMno1FqmhnhkK6g5wiLbXvTxvqZjmaE8Fe4Kt",
  "key10": "isanU6Qzb2LZCd1wFTP4ZfvvZCV11mAPxFv9T1rK5UBoXwDBv85HP48Dsco9rmKLPM9SYxWXKb5AL3yiPTkF7jU",
  "key11": "28mqHtMsvzCDViNHp4UJ6CGVaWM1oE2hEQWWyfsXKFLWpyrwJtHzcSH3eeeYjd78ivUw1ZU1dgoD77UzEHnLkEKs",
  "key12": "3saWwrQXpq51Mw8EydoV7PRqKqXWwnghvezFhVioyCVWZnwsFr1bmDXAJWqqPLXAhMNB1qCVp8RqxWpN9kweE1D3",
  "key13": "628N5UUwLn5V4M88eX8zANqp8W8RqX4ohCBDQFVbxWHp1ZRFS99f8QFNs43FASgVFPKjU9GrvfHbkT2PsSBk5D4w",
  "key14": "4EQe5YdEfDBGQJfV31sqJPT1NMuruxavusX53899WGkDEdvGs3ewQXJx8fRAw4C8fscCFNj4viPfkg5QEBobMWZg",
  "key15": "64LqhkSRxe3ALTinBAqSsMDCiPF7dsVwxDfrHYJ48ELKrT5ceXTTJuiS84jnugMDR8bfQ87tYU9cNpSAKqB3od4H",
  "key16": "27vX1u6KoD2Hf4nkEcWRAZEcX1N4GANxawYBbjQ8byQBrEDsyFaaHrbHueyup6qrbmj9ik3pjdY6kquEw6ggSymT",
  "key17": "fsoxZV1gmX4JCXhPYwmHBRaJxEyQxyjLKGmKNgvhKjhfYpXnrkRxfdKbsxysDFG3F83AAqmeRZoF8o9WvaQRKDa",
  "key18": "59QNn3nJxCxNt8awrZJdhSX3GbQV6wDn1YGC6qutUkEyA8WLnKoMEUKY4zkzjdzcQEe6f7Sr6zKz1suycXfdS9Dr",
  "key19": "2d6KEDbddqkT5KPAdYmvsXMYc1CjNNSd46888Jt6ZRAMR31fxighRaapfBH5ZvE7CzH8GaKsp2tgnWzVg8fYLtTW",
  "key20": "36x5QtjjgfizFYuyRdvFFyNcNiAaN5q8cDNq6P28vmRXureV4Dz46RWcXARcBHAL1rvonDVwyoMQzgStbeygVbJt",
  "key21": "431XYv9GkHVaDWVauyNSM3G3AHQSiAcvD3Y4mHiAb7WZhCHyxw9pWex6ZGSPfKAS28uZ39iGNY27abVW1pLfeBaq",
  "key22": "2tsVzqXskKtNS58MQHGG2Kit8RH43vbh35oBmeWEEzfXgfDJTi2YLjxTphph8oCmv53hLKHa5Mdu2269FDRL6d3p",
  "key23": "3a8pt5nDjmFYcpYZ1SuopTaH1nx5vGTUvLfjYTqsUXBs8tb3mchBeLtnqS3SkGiBjyrzxrB7TtSHKVb9BDzDyyuE",
  "key24": "5S5f66M5jNdqnkRwis56K4z9mUjoci5aqqzEWUikZStLZU6yC6kGtJ9oTF4qUSRxSpL1vXiqSE2jupERFohXW63z",
  "key25": "3uzgZ2NThczay3FBDzFnghEzrdygEZy9NXWtn3mAmtYTiuSb7mQq71wwE9WKJtcSPt5wNNLkHn1RVD6JAnF3UpRp",
  "key26": "5EJRjNESjhmHLKgzxetBVGPdNARSHzJyXnBqPnwKDGVjAQdxgexh4jqHd9E3pgvFanr3qg1Ru7NGRJZPAFxNcsyK",
  "key27": "4iPACe6znXdSUzrKyF4NV2hUgBiT3RQUE3AoR2vXV9K4MyPcPNUs7QgfuAX7xFYdf8tYS5Y97f2iyjLqTg6tf3a8",
  "key28": "3wREKnpHtZNZUjmu3cUj4ao3BijNDN2FZMLZoS6EQd7GQ92VFJBXhs8fsMsG6YGPes8SBXMRefEVsyaMo58tBahi",
  "key29": "66E6b9PGepMWfiKUhAEGm7ZwtsXtufvpb8cAww2obW2n2tecKTaG4QcpaPbewkDKLg4AxTeSrJLAwfNeFvtNno4r",
  "key30": "2eNLzaU4E6cmSYVTvBPHmyrg5KoU37RP23opX9Wi7AkRc8z9bjGueHvrMCAYvMUjFi3358YF3h8eszEp7oJed7oD",
  "key31": "3NMksfPJVafb5r92BhLY3mzzWoW19aH6Kz2BodH366Sr71m1jDLxxeNMxCyZ9Ww2AmaayEUcg4ZJ7SNdppMeYZ3D",
  "key32": "3citA1oC4WLhmFz4UXHvkbHyfo2FnTbZvrHQQtrWR3yNvCYdJpdhREPJcHBiyXSn5BwSKU6h4893XEhqsobd9eyd",
  "key33": "4nVR7nwQ1qS5YTMHDVNvHA78GTKycVQXUS28zaw1gDBmukVKSixWrpL9ubKviExZ4T1q1JEcGBdb1dLuCavWeudJ",
  "key34": "2WBWBga3BazLNxToCm6aJ5pzs8DzVuqFzieBEM59DGyYVeNL57mRe4Vb4TNLLVNcbvvMd72NYkVynSKpQj4dcVbs",
  "key35": "48gyFjwaAPXkMxWo3LLNhmPn6qpffLuqoBveWHLppUeh1GubZUkbeLQS3ACgGbhxZG1uzsyYgAu5u6QpZ9a4Wf8M"
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
