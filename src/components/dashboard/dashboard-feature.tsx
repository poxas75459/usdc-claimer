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
    "2PzqKcAKADKMpaZ3265C2TWgW87MjwxRJXxoeSe7neKZkYRun5ELnTdeRJeFMkPvx82UGvwMaTvpP9nhSZuoF6NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkMATwjubb3nWyDiuyi77FBJ8dzZVALbTELxRpLJr1xvhQ7Pd54npe2RR4cgv6tZhu8fawNC2GYqV8McE5YG4Zj",
  "key1": "53i8R5aGJdDk9E84ZAAtW3koogMvdj1ngN3v9auaBmdcd9hr5H2KJ12wJeHZJXxp1DuC4YUMfsHsCE8EeWxzoQjG",
  "key2": "5ifZeHdXcv5cd3ksfGytxGJYM42hyU6bSDhh4vdXSfPbhuxpBYZ4PAtQMkkMqb2epoMmLniyNh3jjU8uu5n4qJrF",
  "key3": "3fm9Ef18mw3A21k3Zzdjt7s4qXWso5gu9YRvm7YaP8VtAojdxmUFdRP2di9gYQo6porb8RoCGDqJ5gbngKdYNpwr",
  "key4": "5nVaaU8zhJYZaie5rmjAARpfcYMFehKiQyXBTYDr9hdopiQooxdx8vBT7mSdSGN7Y9UpvBrPE5VEfqcv9ZnBkxyG",
  "key5": "2gpJthTZdCNLaqQ6x9qMsiXnSqU3K417ieHDTeeb4vb67jyGHNMSPhqphhTzrvYd3RyqJ1X4gTdR1Wbp18nCSm1Z",
  "key6": "2bMurAHsFkJuxSmwDHk1SgBd8DX92pvVye6ryYac38NsvMsFCm9AydnK9mTApKX3JE5ZShXHuXPwYV4MoCcNa6Lm",
  "key7": "5BMNy4eLqnCLxjuyiabKKJaAkFfbaQji8Woj1soWubaj9L4f8ch3XstKjobfyXZQ91AsxWNrWraFkA9b31U7Vrp6",
  "key8": "3WayvnhWAqvJDFffZjJsf174xqzsTHM5XAiNGwsarG1n86NbBLfekTWMG3DdWVuRPmrdCL2LpCjphm1vn2FKsoRs",
  "key9": "2C8BeTDziDpcTezBr5igz9hZurajW3Anov2fTm8BRP4rg6vFwnSCQT2jiHHd7q75n2yPXHv3w1A3vEjqX1PT6gzX",
  "key10": "2aHqhsr7wsSzYpZstjVzWs6Mu1XNa3n83HZV1gvGeA6vvrAU7UVR7ajDDEfjJnEZ5364Zg45Sv4VVoMx3aKkCXkY",
  "key11": "4w4c9Uk6s3bxdUqcoeJX4oGxTM8hQtuBUqYLtspggobY4P2NQQZJvxmPvat12LdhB5RapbP7T6EwXQSjQR4pxnNi",
  "key12": "3QEtodyUpUSmmazct1nd4s4rrSj96Q5uQFLyrvYVy1bSgvj7J2AZtwtrSukFQK29mVKWEHztLh1FAn34TZ3cEjn5",
  "key13": "4VLP4Mzr5A92Rocu1LkX61iH8wa1kq7zgiMgsGHrLfYep6eJufYNUZ52YvjBaruV7nyFbZrbw2Ef3gYFsTjaUor",
  "key14": "4Bp23FHTvaMejHnNeDHTBLXJEKs5pcXgjyNbKJh4AFHDZnnRugmrkEhx4jyU1DHNWZJPhrhJfQQCvvjuzUfb8eWD",
  "key15": "5HTZM3Bd8SHYJmjpEwNvDv9f6XynqzAm3B5VQgTd5BVsQDaRUzCcg5E6761DZY1SsqTcx1Pc2CGehbrb9MP5Qxa2",
  "key16": "3h8SQtoAuqcNF6hbYVMBJ4w9TKPbxg9S71me17Gg6mLbX3pxQGHN6tJsADBLw6Ht6U4R8WS7i7gADfJQG7g5bkik",
  "key17": "415KjnH4hizPYXWDjAdYFZ4Yq96UvkPYMLx4KS8sAqLi3ZXVpHU1zMXHk1DA7S9J6jwXMGoJ9i9PBSuoqWBaYmbt",
  "key18": "34pbhzU1U4EV8sUuXMEDZd9ppPBJR9M9PmfaHsEPVJ89jeJfxuMA5cjEvuxfDzwSKUkz38v5QwnaQHKDLCZXfSAc",
  "key19": "3P4BMaEiNb9C6jEea6aTDz2NvKCgdnCRNpMycuPiURKtXqAuhFzm6DHqc2ahkXLAHdXRbMApZ81J3J8XjgEM2QJx",
  "key20": "3x6b7kzzp7qvkcmeDWLsqDxyHVsWYbghCESS9JKF39RC7fMCMhEfiRsf7zZ4XaP1jeTEK3cAdGYTP3r2vfi5hedV",
  "key21": "2TrYecRQAKAqsimK9ayE2hZQaeVuXGrou3rcNeuBdFjm2soVd9MYwCVFM9zHJVCJzF1MhLsGqjdhtZbSuQF92Cg2",
  "key22": "2nj5kq5yUc3oJAHNHZosrufpTL1g6EBcckNtFrPhX3KgN4iGejYFBt68rnPxEAmQgJToX8zgUKauCyQkfLT33tFf",
  "key23": "2CYJUebogZ98zZadDXprtnrGHC4a9Lrn1t6VhoifazKxQnzNb7h7DLsggjhXQJBSVnGRQXtT8zv8r2WCN1srMVpB",
  "key24": "619XTLNqdTo7ADn3D6UkCLisMNoUozUP2GhGv6xPpma2xvVxZ6K88CR25NZEjG2DsCeV4JvG8V42ne18vtiQGvtE",
  "key25": "53Av4YPeHNd4TbNs1SeXu9et92CusAGM1EFXwtGXrzbia6GbfsiLKej9CzYGnjj4LmEPvt1MXjadv4jGzHYdW2RN",
  "key26": "2ePS8BWAC7Db7S8UfiHMCYmPBoXZ4Mo8dV5nxJf9puy1TXeH86K1qQtZhZSrsZ5Ak2fZZgSs1A84Nxe11dobepow",
  "key27": "aN3npaeW4bS12af7RW5QQDLy8LPjSMXEbNp8h6B5ThwjTEhqnwy5KbFUhs5jnoFoetZJtCGVkSRSPCoeTuUzh63",
  "key28": "5tPqfciz2VsZEY5qffNoG3x6F9xH2kQ1bLgC7AEhsGJSNCwKWhMMsE8f6fj5rGB17N6u4Xv4LgyvMrDJ6qaR7pdy",
  "key29": "54vEoBBm2e8MBM9HZp1gPtjND4gQxYfxwAvGECCdbUXMga3b8qYZAqxFphzTcX4LoPQgdUwPBPtzD4EGDtf3o911",
  "key30": "2upBmXq4BVJD6knA3gkpLcTC32QBPhcFAhSGuV4K9vz48TQydvQE3Pa5nVZqXtAMXkJDMLb6bk4HCR3ze9JW1bUw",
  "key31": "5Nk4T3XHBw1GtGyvDE19g4ynZxmicQeHxM4etjBMXMNQ17zjR992ZaLqnvCaYeBYaDowBp9o4vxkhRNAV8C7p4Pn",
  "key32": "s6MnoARGSjx4MyVovQJxAZnhn4zudfyFEjH6J4e7agw3vxr5mEeLNj7J8c2AXCDciEww3MPRBVDCvpdprz1Lxde",
  "key33": "5Uj79m4JRfEPqReLgLMpqVK4o2w48AuQymeWp5SXB2W8fJijqrfrUvoHr2VVGxas4UDLVTezN5UYZj4ir3amrGYv",
  "key34": "39iePqUNbARj8Rsnhz2X6nnPCWHRsvzT1k5upmnd3UyPR1r7cB9R4jGRuguHGtQrv25Lnt4mmyrGiCRjirLyzZEW",
  "key35": "2QYjauTWRtkT51ym9EiCmrwJzQwxdEaU5YVfiwY1VDJAXWHUxNrKjdG4jJiuMs9Q7ZmAL6NAjyJfgHV2X527LRsw",
  "key36": "2jgomJwzGwVMJE5Ybk941iRCJCKdQBXZeu4rn5mCY2nAH5VgqQXdWsuVsZMn5DjaABya73A5kmc9YLXYHZExR7Qv",
  "key37": "XjEKbkygcariqTT7E67ecHST151pEt5PGtkRT7k43W3Xme2HRz82fc5XKVZrXwsy5iZ8MBzLNRYTVEUeCbtfG3F",
  "key38": "5FkUem4D3bMPQFs5zQ8tBDA79LeGBh5oDFEJiEGHLaYUjJHtv2wrkTbkCETQsdBmFnG9BFrDzrYuXXH5kswgTbXG",
  "key39": "4aAPenKmJW1Xn1DDVJAKc3wYebLPR1jbBWMAFPC59XhT1ECiMhWQahu7HE3Mankm9DgodyxV2e8GNjcK6EP2DRQb",
  "key40": "DxZE6uVWBCeEcEFeyVt3Sdpv1HqAtQcGqRipjXPg6hm4tVoL5UXnYCJMkx4SKZbUPbTfzxmBMQ9iPqxrA1qfvfJ",
  "key41": "oEJ4LRsyrpsZqkXJSa46HNafVFswLvPdq8KqqhGvbRsZVAgiu9SDNNscsyMQvDbU9JZwEBzUT7Xyoy2f41Stcgr",
  "key42": "3bbe4fKpxgJ5NDCDWrycJR3KAB7eHcFGd9iHt1ru1FYm3NzPwQ2X6GExKdqNCvG9V5dE94zgYnLdRVsPgQsPpJyD",
  "key43": "2QdjC5w2YWVRDryzvFbkTwQ3PCVvs8wGYSqFPi3hhQh2UQ2a5sCqKZYbE6FUX7bC1qeCmcQfYkb5gTRW5H9KA9JG",
  "key44": "2emkPGVEcBCUs9qbeGN5w3UuUmCjNUw7Usb7Miv5KqfwQ6kiVS59e2eB8b4vE1tkfS6URdBfRud9PFNH8hUkyHar",
  "key45": "2XjmrGpjK1tGChUMWbn36d5RTzTvLYo3b3ipmrG5T1AuGRSpirvAzupzrkWM7w7tMy6B5dQbUyNRNhJjuLZvuTai",
  "key46": "2NEWY4nguf9iNdGiXYbmbkkMhdxLgbcZehTHCVosWoiPfUwRfht8GGXpaTzMa98g9a4hayjiMezGYN4EWy1zvFSN"
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
