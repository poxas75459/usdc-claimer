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
    "4LrbU7KPaJKhGHrz3mVY4RNpnfgLRw1TvgtWAyEGRWnGmXiNoy7vZcg8pxB9hQyBmQM7Lvu1PFZAW8gNH2jakJZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYvbvDkgYvb3fEjKBVs6wZnwy2mzLgYHDeGL8c3marf9TZ4BBCu1PPaC5gYyiDNjpDKCRmqiHibiqcvMKvWWnby",
  "key1": "BZzGZm77aa67Xwa8yhcmwqvgfhzDhDUDNpHNnwQYNa99oCHCbPeAthw7vzG5F9C8zY6WZDudEuffpvT3YBhD8Ua",
  "key2": "ggYpPT9rnBL6GTDyW6QUYzfH7P9dvaXVRVKmCif9haMQC4JjiszEywD6TH6v9zk843HPpazTJnKviaTZsETsMos",
  "key3": "g38VcR2wMEssJ22oh5P5P18D4z3PRar7GXCPa5x9shyrUMUvfNKebbeBMqTg8FDhEZXDP3vUSp8iysZtpJgDz56",
  "key4": "3Jb11JotZUs16UwK8YFdopsoHDtmwi5Dgwq985Amgj5jXcHQVCe5y1bQgxPAoncx2iEtEmBhLTJriy4tmrwRH9gP",
  "key5": "qYyKhbHMFw76Cwa6tFwi3MZSsez2WUH7jDKDPhNGDg57V3M1QcQPzLZ7NvdHr8vbkNEWn4g8r3zicgfaDYk5bDZ",
  "key6": "2vBhDtcN7dwuPekz8yBY6qrXwMai1vanq4wPAPgcFX4n8z4QsAYgmakKe3cTbxAWhBgk6f8pHXkBiFbPxJZX13uS",
  "key7": "5BzMM62AhfqifY2QpHgWdkhuhBYJjpLQrQqzvRVQr21TVdKFsXAux6HjWdVfpdWx6yHYCUYsKLmjcNJocDJhBVoh",
  "key8": "4552XsC5D6V3x1VyCnH5RruoShCsMCCSjxCy86rwjg4ChX6MfNXz9RUUUjPBcangs655LQmTPBjTkxEAnvgMw3Ek",
  "key9": "3jGyPR5oSRAvzm8BgJ37GAgmtXdpSpVivMGQfyXnRWx5RTQXJJWPkPAnRjeFs8yhqaNVpaT1KeBzjA39nFRmCPyC",
  "key10": "4wZWNorgVwCzJRWsnojYB9jWB9rfaGBKkigxJHhRfB7D9NcWcJj1HNMyqB9u6tsA2fuG2JQwhu2uFm6MsP3w25Sm",
  "key11": "5hUo4F16fZqgygvXobJXqS2UUVbWg8gMG4oyh1CkHDPjtYVi1jGLaq2ng4SXzrcmMetX2sjnDoyvDwtA4bddryDE",
  "key12": "5DMqv3FtwoMw5PFdMQD35WgL6xzBJSXyfS3PZVSj9xGx79FdyiGtQJb2Crujdw3CS7nVWzMyandoMf8nZCUYNQyF",
  "key13": "3tPNuvDGiWUp8SGenjT4WHXZ6ChJ1VgKCsWWLU45KR4fHwbMkvK9hTFnDgGm5rgdzvoQfNzD1MQk5cRoNvQv19zn",
  "key14": "5JDBKk1kz5nHtjLdscqj2QLGrBHrCkRYBfGQvwWjeQJxmwAXHMBxbxB1zUvQucFAiss5m6BpczqBe9n8mL2NQmWs",
  "key15": "8Zpar76BYH6aATi7EuN7LD8WzFwYP9E2DUbkMZrinn7ogA25uYQxe59Y9JPZwgUoGn9ijEBDGWkXZzGEe6p6JJe",
  "key16": "2DL9tSxRa35uVS1Rck4F2oq8CSSNrUzfmD4j8D2y5EjRwDe5hVwKe4ZiHFmwgKe5WvWFVu8ktWaaC3HpMJ58SUS1",
  "key17": "532aUvokP14ziHhaqCx3HmJP6kphtCXfVNqQzgwFL35Mo3Pyfk7MnF3x3WFGrPuBAjuNqpNhrxtw6KRoGwrsz6vv",
  "key18": "4889QV2UWrjTPzJq6JywKGeWZ8qNDyYBo81hFuKUYhDwxcC2xD8LHbSjG1Bca92aPHhcJKE2iSEi4pyCy9iXFsC1",
  "key19": "2LNjQ9n1DJpbWVkAhoGxjDsNcos7Ppto3Lyi6KcXLVxTdrGfqDhN3UAHkjZQ6EDAsMWiDQakXRTqZ4x2LACkHCYb",
  "key20": "mHPCXuuXXmYc7GNvU3gXytEZoD3xtcvf1WkBaaB57ZPvSr72Zus4F9GbgwqRFYczg6GHwBzDbJLhWJ47kE1vSN1",
  "key21": "59uVUGoGE1ycZ4QsH3tYtbrEmnVsXNjdday2FNomKzDfyFaob7sNadBFiV8guE7Mhg241n7CrSvVueMhviNssrsC",
  "key22": "2x3eb5JkNXmBvL9J45JXD6UUyhPBCkc1jyTLPHJ1Eo6buELt82MosrTR75pPJ6yWajXkpmUw9yMwZSHKdpnxzoUV",
  "key23": "2UaEYFDG27XaCvTXrSdZUtPJpe8Y33p4A7pFgC3xvzUEWJS3AAbmXR2DNUFkkjJeDuv5tW3nf9Hrur6Zn1SM4wh8",
  "key24": "3wz6FMHUwNnnciJuqUq3QXQBNnnkFm8A8BZiBBe1MQfdQsn6u36Xr45TqBMQs1idH27QamVs9EtbgG24DfLbwr5R",
  "key25": "4RQq2t2dEJnnYaA779bNQiocjK25FG1kZzMtMV4bpeJquR9i61c9z1zu6v1vtyPZ6TjAswjLDZ1oYRcLpaUd4T1p",
  "key26": "5fyEwGMF5AhmxcJTatTaw2JLzvA4kCRBRWaqpv47tTJCfqSvMAc1H3kNH7TZQWYwAXmXdyhCctRAxdt3ya6G7B5z",
  "key27": "5UZHTWWupNVgfChQv4NBAgHSaxAFdjRoc5TrjAUBD8bfvG3HRPLqcXU2tBsLbE7MtN1VzTkJ1bd8XNEp4xZoSAT",
  "key28": "2TFzPwazhNdtFFq7uSXjgPDmRJoLXc4xXKKfawytahcCmckFyKMZEBojzXcmXHdH9S2qxVCGCyxD9j9ye3LzPeeK",
  "key29": "exbMhc3mktRjc3TusnVia6Tnz4S1aidx6NuzAqUvhWvjjaRo3RUGXyEsqFC39Juvvr4LL852Q3dwhV49RSL1LYb",
  "key30": "3UdVA7X5HsEEYqkgSt7yFxPuMA3hEzEawmMg6u6rnPT9VZtTw8BeWee9oeooJDuYNnakR8sWArKhN4LMxfSo8su9",
  "key31": "2nRt7bBbHYeJMNQ2eBAShMwMkVkiwgxVCSwbKHqKxj7u4Npb5wam8nMPGhEQ3sEdSKSu5nuAK7X9pEB8fPNwEsix",
  "key32": "2EPW4UHD1ubs628ikwfQtqeG4kBadia7CFkN9SCekCwEAw2aJ6krq2CnaeW6NjcLAaHhMM864qXV7k2ibFRx5PUY",
  "key33": "2Ngh6SfcqRfDHzP7LTMBEdokDRQV3TtEixaJDQYMTMyRpf6i7iWxCJ9C1RzhysVreLNVtwmbTCjVJ2hBpNyjfnNA",
  "key34": "pajpj5xDDuk5UHmM9zTS8eesvadNShBZ8SjJbjoJxFbejGEwXVwhty3JVv3qdYo6Pxhe6yYtsjNLGzR1ABJSmtV",
  "key35": "6QqiybSoaqR1nvmb6tCpM3FesSGAk29PWKsGZvKd1kHSaCSqwR6TuQQYMc69Ts5e66zv2p6uT5QZ1KBvP5nEuR3",
  "key36": "4xi2U4WdnHE5dJCVkfRaLMitxXr96diRgTaeKZQeEqybi7cHadUs6CZ7Kn4TZLQSWuUMdrdqeuTURLZ741mzeRqu",
  "key37": "3eDDYv9TCNZTg9dPpra4WjZgMh2j1Pjqtfr79th2HurXJqn63jeVsuJu9uDPKe5EcPzSMc8VxS9NtcZ5y8R88U1R",
  "key38": "XVgiisKYf6cYSoFsXixER1JgjcMYPTzVkpJCHWFrRsJCDrTYcwSgfJsP8B3kDNUhvrKF2K2MNHE1BmQKsTjPe7j",
  "key39": "PN76A44FVs1w2sCAzyFrmKcn7mN8t6nVp9cowywRocAUKjSmCw2enHA6L6m2SSMRPhKrZQtVd864BaEPkjaPU45",
  "key40": "5wFUHyg8H5YbiZLESdwZDHLs9FQKVvk4QxJEtMhCRySM1wEBEd97tqPRRhiuQwbdiRgMpG5HCD8q9JDpZWKbHft4",
  "key41": "5Xh3YHuE7BUMabFJjNyqruUcCpjxijkxx9K15bwUUdLnfGrDxdeNqQt3cC2EVauMwy2iiwpMeqQUGS5BgZa5rhiF",
  "key42": "4Re8FBLL7Se9ZtkRGt1guyn24ZnPx2rNrtWK8GexJX2cXs8nczWwU9uhpbBRG23BnzCX8gdyhZntgiwY7H8QGNxa",
  "key43": "5xML3wu3NwmjDWtzhs7KgdM3c8rGRorNmVXwSp7pNsiKwBP9c9WQd2kmgrvoEpsW5CX9sHenb5gfJb5gcPz4zhTB",
  "key44": "2KtENsejCceDhGdTrmADqSwxZybnTuBhX5bKHMAW3d5ptoqw5yepRoZYneZ4aAjGhpRLkoZzepZnhsEwfp1VBTZS"
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
