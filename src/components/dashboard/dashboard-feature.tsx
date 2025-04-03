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
    "2o9rXcXCsvMJwc8pLUQGsuMX6RG52Xtk4c4Ds3cH4cFvba7eSi5ahZcYCb4dQBCvYmXsFvTRNpmoD7emEgpfFrhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrobTw3rH8B5g6Lx4byKZL2ooUPbhSot6cdiVBVDhzVHZDGhCMNGDdmpxHsWV8FaT3aAsNKjpGv178G8ge6tj4P",
  "key1": "1yn2UWtgFnhryRddBCuYh1DZAwz7D3LKWsvk9XkUxUMZJJr7ShEVJJjGzscjHzLbZPmvcLT9ngCtUwVbj6bsnrL",
  "key2": "38gXvUUDFvFcyFaqjrfpW4DC8w1ezfmp4rw8XL1vgyFvLEWDiMDAmPTWF27Swi1aahUQhRSfCvv9i5AbMoxjNZ2Z",
  "key3": "3ht3vQGx6FCeHA5ke9kVzkj2FX9pjU5i97qs4XRXtohhXMhqJDYceqorFsn57ebDLHMMbXYrG3byXnMLKDQ4G6iQ",
  "key4": "4FHqG4zAcCrWkCjUF9Lef4BTgj3rV6CuBkYcuDG7FMGJPdsmqKuHBLpeWSswhQQFfAjJrX1k7gyNhq2kAgJGs6zy",
  "key5": "4NE1HvtixRzdgkTfpvyatZ4x382BUmve89vfPv9Z7pzo1ZxswxGQSVFuhr1ZhmHjQoa2PL6kr93RF3aEzSSE6JvS",
  "key6": "2ygrdENKiBMZJvjXem24ZFenf6LR4tGzimqvWWCmyJYRi9JYCcbpDBg11djUbHY16LiFzsYqJjq7LvgnAUcpgWth",
  "key7": "5HMxsZKKkhig9dhfVn8jpd2zv1sy7yU4JnvpcXzJdPG9ysvmN8kgqtZXemJ4h27XBJ9z8yukLJDZBpeWWLs7ehMc",
  "key8": "2UyXB2XzP8Rb1R2andHRBs4bbUHYaGfGHF7XZSFewLzDzqkygoRq7YzRYTRD5uSwuDwRZku7Y5po9wZ5R82DJEvt",
  "key9": "4MuPZxzwzY44R5tXi9MjaaRhEks424d3Mq3D6vvxLTgNwkhwg7hfWmhoRTEGdaMrttx3o32zwERyAsnMZkzdQFNi",
  "key10": "42GKYUJKu4xQsj4p9sKqwQHY1RetopoHSTikdd14p5AkXq9fFVkbHmkjUarRiXf32dLyq7AsZqfQEiREbDx7uB2G",
  "key11": "5uAaeLSUCrGjasmLZbn2DibgincWx4VzyG1MFmRQpyUDRcrtjUwfThnqjtiRK2supcpdraTKW5j6MPoRcC9NRPP6",
  "key12": "2dteUi8SyE2R5TAjvAHNMce8vfLgzTuH2Md4dNvWrcT8hM5geZXF14eFDxBxk3g17nztmsos3rtNGSPRH9KwY2Su",
  "key13": "uvR1cf9HU2YnySC95sEMSRNF41NKM7kEs8Qqn6tzDkHT71XnqbkYRBKVEukUauk8iCDmSAuUYatx3xmGbC8yWZx",
  "key14": "5Hj5VGHaS2rFYxy9FDLfks1aA1Y5ASM9HkwV2yfKQZyCZ75e3kpw8FLp24KJ6jyiTKUhHYqpVdRZHzmhB4z2kYDp",
  "key15": "5s11rftno2RrCtKGbv2v4FfL63opAEummQEFThnxf9R2R7oeDh7iq4hvboTsGzNaSRRFmu5YVrXXuE2nxWmmwSQi",
  "key16": "3qd5QkA3AMxKEFtgFLMWGuoMNQnWAr1PjfPs8r3cYQvEXtvf5rBseeV8NgPWTh4kGBV5CrGSz4sX9xRUXPZ8jMfU",
  "key17": "5FvHtCBmqeF6mytCQsDe1WWhCy8SfQrzv5Kz4tvWn9XYZr15uKNErwzJMQ7KWFPAZYzMDLzTaL8HqTH2hadSPCS7",
  "key18": "2iKQgJ2xiwpVVkHUubkU48HmYpDe1kYNX6xmxiMMbpgc6SDLfNyU1fUo7L3YPHYM7FWvok3apzoKKQgqk5ewFVNh",
  "key19": "iGdXBKw46DuLaUP7L6Kn1zppHgUJXBzs4cEBXpmYwBy6U4b9yNZP4QXsEZTvXEFCiG5EnR7gkdzzyNKSbWs9FuA",
  "key20": "4mmWypPVTXsQ8wP3RUSJ58myhgvBJi8ofbfaKve5cDfhA7U2qB4pNXtqrdvrQ2UUzGKrgMQ6wTBe7ikuqnSopLvX",
  "key21": "58wK1LfeTPm7wcM5RV92BVoQHPYhgzJqJ3VB7GX6zHDmEQSBzEEx17kDMAuxXFzrW2NnYQrGhtcHr3HQW7epfFCi",
  "key22": "5ahTaUe4w9bMSVQWyt3NGXUuy8Qa5fpB6mYNgqnrPH9V96hv1qPAv6LcxTABBwm3voxg87wsqc2NJV7ygsNQJweL",
  "key23": "5h9tqXpYAMXGHweNiJt6P1KKTLzYooU7tr3cZEahtam7uKdSj1Ey5ZsYF9TLMkYYgtPJxepYSdb9bxk9x8noozjn",
  "key24": "46MC2b5sni4CDiRDRJxFBBFedVdjdevTUBUpWG5t2EtNYQKEcf37Y2F8sEDG1gACPwanAkGHT2nW25bEpiFxc7Mv",
  "key25": "2cJ7DQP5xWbdBARaGAX43Eu8trLhE8xuWMzUfcepxwSYZrqDuSFSo6Nuh4rXJeFm4WpU58oKQDXAVkT4khmEPVk8",
  "key26": "2GYHPYsXoY9rhiKLdbi6EwFRpDgeEgU134ENbUZ7K9u2o9CGAWJQqamwRhnJPv3Zo61sDpw69xvV42rRefppUuqe",
  "key27": "5o3dPuZcp5fMmSRGCboN3GYKJppJEAq4cstKdH28B9AqanSk3KV6x7ETu52fM9R2WSpekjCjGRHH2GEdiUFhrYav",
  "key28": "292TLHkyBm5zX9E8PQaH74eDFtiXzfHRetn8EdzuaN8RkJp9mfv89G5aC26PnBUvRU25CuCK4TToG9HyiDDnPom1",
  "key29": "Hqjso9wZsrR7ZvTbJ8M5TVt4WxvQQi2iJGQnqSUX85k5yCBGScZtqJjGJ7jE9VcVLK8WVgW6TKv1Sei7Xqf1yRx",
  "key30": "64cEN1QzKYh8m7sBm8JDiTiMMWVhpRusCtD4bxE9ghoooinJn28zVLPhggypXiFHBctRt38t3oHKqe5zWpU2LuKW",
  "key31": "3v2uWydoK5uPfuxoA7CVSEeL7pLms9Sy9ZAk4AWxxi4fY9VDQ9G7PcPUhKM4zUN8cr2Fr8ZxfQryn6qjwAa6KLqA",
  "key32": "2Qx77re8gLmNKeuGYmBthmC2XtYRUTqvzmiJWKX6itYK7JH3334GYm3FzJE86tDw6dcVK4VPnDRqYmFqQggdsFgT",
  "key33": "DDoqESyfBTQcX46MmGWLtGQs3w2CFVMQrNPAKniBK3TYzWRLqmLRzXYfm6mE5qruUZUn6FXYruDptbhV1aQDHwe",
  "key34": "mQLoZzC1rAmwLPZ2WvDg2jrQTcy5dzQqxgphDGNRHDziFFhZcC4nnbjkDgdsXJzwCMZVwE99B2E62X1vmh7NBmc",
  "key35": "35Eviq3g7MMbfvw2AbvApxfbxZBw2R48aTYLWaab5sMsCSjYGa1WDYf8TuWYTNUbSXrw6dJk36T6oEoY6PAJ7xiH",
  "key36": "4Yr157TtBqY3NGB2RgAPJMV3pQqb7V7ZZBYFhZn8MfEakiifV9QmixckXFMvnBK1iVqX8mr89BKxUJPnqqNfk6Wc",
  "key37": "4Xm91cVx7fsh5C6gX3GVm7HcpYG6mEhW4JQgFcSnBD3aEnFyLmtJhUHXNm4Uaa9vTGsnPS3ArpnqVvmN8GsJxPQD",
  "key38": "5Ta2weWE1UC3XnHkCqgG1mkKYa6rFwWY7RiTkxMVpo82BbN8yjzFzZ4JvK96tGVi26SV3zzcuwMJNrE86FJKjtM6",
  "key39": "2mS4LzTofne1YuDS8qmK7tbz6UGHgJJTwLDjW75qi4eAW93EzpDmRdqaWBRHN3z6DAdzYpivbJmrLNhhfsgBCej9"
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
