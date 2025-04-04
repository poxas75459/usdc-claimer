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
    "3Qexwfk3bhyw7mydaTEJtxALkj7ci9hEswCqpsucZYfmn1Enk2ReLCXx28rhozPNeYw1rUtURqzna625sb83thMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YV4YumMwq2iGU4yQ63r73x1xsYempmRH8MrXxo57uzgze26y6RwDGvHgbzqZkZUxNMbJfn4Cv9zgKqALRvKgd4o",
  "key1": "3eZMPqmpkNnCD3QqDE1rQTzfNo9ahu9ny8ZtUxUxHxtBUjmUjYXzs4LVqidWjXxYsdHkmbsYWHH9SzBp2gC5pjGk",
  "key2": "3EbZuE2RDkGwgPAfQkdD9Fr5kxYvyZgn7TA2TkdpDnPqm76Gt8ib6kuEGaYVQvMxSZRM9yKBAkn1rvtTdVMLVAbV",
  "key3": "3SQzDocYq3TwPUaBuw9SKrfirxgx5duNzFfYHnAnwa3JG2JrD3WLLe7kfE4FVQqXTo735uNmJu9z3tXvGSqhJZTg",
  "key4": "2wr8XMDbwUT8scFrLu3vmjxfpYF6qDo8ZL64RCmXjunpC9W23tifhEdRGC5jDGwvykyYbDUvhbdmeRuox6VLBVHU",
  "key5": "5bGbVFA9FuHcmEJQ9VL76757Ho6EwASRUBPpFrUdsay4wZmpSB9fXf8S28EizSfhg6u8CTY59AB7JN5hd1THkDvA",
  "key6": "5WFnbbCcAVRc2VnYdgZDBsRpaGRsrCTamyKHD4H2jXJ8x9bLeQgMZUigavJFy1jy6pvbiDFZN1sGGtxMSwUW5f5U",
  "key7": "vYgwUsNRSGRcCF8j4VK3MX6JmEvHnXnuSxedXbrTn3RcVC97ZDVM8XqM9UVARB96Yai8zhkovFNg214rDtGGmwH",
  "key8": "4ggzXFcTadSFn5UB6AStRGNTiJcVaGdAH8NKouX5rGAMeBvj5j1vjHC4CnuEa8xeX31Mk58oXKF5zYtB5k64nUCX",
  "key9": "2pJvEge7Dz3vEzB6RVSU6GUvxf9g5gDQAFzMf7DZ3BpuSUWEeXimNEtXyk6Xugfcy5TCnTfioKnbfs6iccJ6wHjN",
  "key10": "4yDoq1Bn5qPztarxjrajV85JHPZnyvhvhbazVDm7M6PecCfiWLaqQLvsrhnf8PBG6Cd9WEf1ZFbmhhHPA9uk2EuY",
  "key11": "2siJRw1GmhH4bmWf8wYPPKWtepAUH5UeREikxC8WLAXfw4VoTFA2GLz2J1nxXodpigs6cd23vZrSPWP9C985evFp",
  "key12": "5qt3RJh5H6fy1XjL1zwUnnHY5SvJAonvL3RbUXaxkBE9GqtFCjgMAkXXrZHbyngm8o4GSyzDtx9HBh15HvY6HaRi",
  "key13": "55fXcVFTS28yidXTZ8iKF6AigLC6Rmnw36gNNM7Qv24qZrFogH56ykC6mBtDiz1BVZHr25ERr2Uc8hzmfe5QhbDy",
  "key14": "4kASU9ZP4Lff1uktDHruFyMQicWLsRRbBfbho256kh4D4redon2NE3KPeb43P18rFixr6D2qqejZJmCzCtxQKyQG",
  "key15": "62ztGT8ShUv98hkeRtL2HscUfcRCBCRBjv5f39meTLBzn25HkHncMDuNcfm96xFGyqRDVqd9RP5d1NrU249h194h",
  "key16": "3kWD7ALUVuGkeHicoJ4xpjdosdFcyh6MBuNqo5uZM8ttQoA9uyFnRNh9Q45tN1qGrQDAgwqrnuMbZp2aUpghhahu",
  "key17": "T77nYmD2oCNN553ACHqeQSnWfLyo1BiZ2yEs3f2K2kdcHGGTTDD7mdu5mjw2x2zpkWewEmjrRJi4oUsgr8meD7D",
  "key18": "2i3KSiGLE1ijYKLVkCCv9LJvBgFtuV9DNBmEjFpZyuqwY2VwvVsvzAxdVbUj4oduFMQjYtSjAf6AHNgAYTKQScGK",
  "key19": "5Au7ko1bTTuNxUCfKP8AMdqtvRNAeVDF84woAyMiTfTfP3QvBwx1Rp3uFeESAVwC28DmJhc2kHopSMsTzy2gNwsv",
  "key20": "JYCmefe4XKGuUhexhq9GwWEX44vg68LqgxSfydstTa9X9vxJZBF9TXUqYqbefvfDvvAh6pbYoU5s8mBM2uPVPdz",
  "key21": "nRSLhGGoR7wPJanjUHWX6VT5fTU6NCXm9zC3jkcoyrmPja6dUqs722qrv72BoHwiB45deX5heX8DsM2GgjQ33SY",
  "key22": "7BdgG2Bju5aQjUUvoQ6K8BVxgxkhL1Rnv7TdAZTAam83YLYzQAq79hREQ8EJ1R5x8DRtrh9PVGXuX98SbbvTodg",
  "key23": "3bypBadriWkufwHk1M8VRSta5ZV8vVj7KtbTKGeVx2Ec33qwZzuAdmHqWJym8m53f1inWwCSk1kNUwMZ6SdHTh8i",
  "key24": "5qBJnUktJPyE6sWZqzHnUkau7qcz685YkqQ5XPzjdNMPaoRSzUcwmKys4iYbPfDM8CtaW8FqDX9Re4zwdkvLZio2",
  "key25": "4rD8MizjV1UemSzzXvT7ibupgk3NKqFj4sqXpkNYHDnafF7v4EFY9vWwpnnsvLJ2tutm5knkpFfJ5W69r4v26n6w",
  "key26": "y1VAdrz6bCW1rfwhdt1ArTw9nBSfVgoXjWUaNRmhSwfU8nvJSe3aSTU71tEEkHvsqyy2zwUXXjWyYCGTrxNz9Cj",
  "key27": "2KwqYGxWVndkMF5qQQUNiJMngyzM1CFskRYH2Gmqys7cLjXYL63ZLjmAAdkrtDyLtkrsxZDn3GSutmF9o2mNdbkm",
  "key28": "RTGQ1ryQBAukBZmbZJ1NTebhBKPd3944Ri2QHUYVrNizBhAQWrGxbgFdcqn7quCBJKbY2L3iQNS6tPUJkaBVhks",
  "key29": "4mpjHY8rBqoXNCRXAAPkcBxZ7D39v9DNSKVsYgGsGD1Do3s8MZsvyD8GyQ7GwGeMB8nH1Enw37zAmW9yk4dxYUKK",
  "key30": "3GcPD1nrvjmnh2wdnoNadXZGJXyCiMQhWTcRLo5fUwyyX8JGceZLAjxAhtNoBKRMHwWs1KbRT3KnJbzVXitJj6qv",
  "key31": "rhaNRXp4R5mnLkQKkHqtsEPUxYD4pHKwekiUKiD9Lg9hunpa7YieADKigpMMjtMXeVBnsMUcjt4FogtnVct4bR3",
  "key32": "4i3TZstrMKQNv7YDKDXsseh98aBRSWJkzsNZC5CtyMahQFuzymoGB5BmZX6FbxjNEVUwv7Bigvkv9PcNFrcRW6FS",
  "key33": "3tXNWAmAKRcaukSkfSwta84ub7GyrnN8DPCKJ7tyPnikJUyzF3s6Pn3mToo5J3f96oZQe8WMSFGAzXdHFdpBeNye",
  "key34": "3Mhw8QcLYjVLQ3xiV37GgWiffU2q3iJz4ZaHD79KCyw4oZFjgh5Xi5M3s5sH4Suco4e9e58W1x7aGme7kVZbiTbW",
  "key35": "5UZxNaCgy8UW8gqU8Ptsp2KmsrPUY7Hi7rYftZ2Wcskk953F4KdsCuJV2U3eWpUKDJiPzqcR9pE78Tmv4J7CyXvB",
  "key36": "4VesJHXBYNPqw3zGQUHaUy5KM1bpFa3Kdb5YMhsBY3ywa9zwmcudAZdC5acHCkgt7XFpw2KFJoQEDrtHn4iYRLzw",
  "key37": "2NiudQjAywpLtPKfZvEMjxuJVAhmZXWvZ3u4AARfgSqgb6QCk1AN2WUnB6rG2DhgsTTJpDRqUFRSTGdkore4BWEW",
  "key38": "YLiMyKNmKh6oAmbo1YnnJn1J3i1KFZeUTUVEAUsmkF633DdiUbgAoSCoQ6NCgdBqqBZpcrgyjcVKr73X8SP6bF7",
  "key39": "VzMQJ53h1TKiFQ8dPx33fKuh8fVyw12KmDPE2QeTp9ZDhATKNsLi88V7gbc74YetoLk21WYV8fViwaEyhDJyAfK",
  "key40": "4DLa3scWGM5dgysZDc4UAnuo44SZgSMuhGZS4r7AhcQpTjGAhGybf4BTZQitJbjXNETsryyPmhhHpzpK3hgoGQ9U",
  "key41": "5rMF6kaMBL1hNscDZZVQPrrtUh68KWRJuusFxcDcC71Pr6bQdESVwhCbvXBcGbZWbgWhV8ZDtj3iwAd4FpMz45TB",
  "key42": "4cNvba8vPsMYUye43Rc2F3QExC2xqmUFZbZomnSZDcQHG6gge7spHfKXVCjULbHh7TXFmPSmPEVY6ifeBuxc4gzJ",
  "key43": "5icMu68NeogmgZqPCh7oKZW735RZaJ7trgd883wwRE2fAwHRk3GXjbfVkPd6RzZYXpsptAWnqHwX54S2hYtg3sfU",
  "key44": "EdDDvBbY2Kbp2wi1pxNgfK12t9XsH9rmEMTCdGxB6bGaa9UGPknae4W7BZV8a2jZnxJHHa2vUxNfUFeB8wF3Xsa",
  "key45": "2fGASuWF9CaZ77mWTLnHYsxPJ4r1bjM6UF3CTgYea8Hjwa4cqLdcySaVza4WLcoATSeNhU2gsSrCQ8s2nMZy2zHd",
  "key46": "uRC26N1tP3vFHoPByDTPq7GAEbhK2veyqVrfrnjUerR6JhNiXfvBKnGkn68uhsvnWYAH9h71RUBEh3pUXM4HPmA",
  "key47": "qkV4Ej746DeZSturjYdF2HssPApwsJ8DRyLZ2EVgXrdqXWiaQ5yPwVSfpZtam8BhCFQskyfU9qmfy91viKJnrFW",
  "key48": "4ougBkMavv2XBM5Rya6qdbpS8qSZVCMzQyGKiNcH51xQ7jGnqN98Kzgz2M6Fh4DLskiwLrpKEfULANXf4aH9G8LF",
  "key49": "4U5dwqev2GqXiqQAZz6L9hGGunhKu73x8dJJtnmyrYD47ke3ysEhSFNsvkaGK4GPou5sK2guBUAPfLsaKtigN1ew"
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
