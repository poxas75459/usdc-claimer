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
    "4xTch7eT4YTM8rPX776XH8jSfqBGkyqqSJBs5Zp21T9PhMhNHP93RVxTioMHa4EP47pEFB5ATEuaFrnqKa253AM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hiD7eV9MiCgH6UGEyj9KmpWWTuAZ4WVmNRN46VJtAukX6xcaVWizJMMMwhSbxrni7WcdZ7T21xxXGWTek3NtYX",
  "key1": "39FBHNN3GVDrvcw7V9RLjvTgS8TXvkdpYcTQjBWFi2F3RQEXDvGULd4gws63qMHH9Qz9yj7MfHkawrLNDctNkQD3",
  "key2": "2z543QKWtngGXwxK7VPRiEYJ9cWN4BebFpCwbSSvEjPVRW7iP9S9Qdz6QbhnGq9RGti7vvBnFQb8bknfVNsJTrRh",
  "key3": "2qBzyS1gXuFa6Jva4YMjHi1z3Dk68XLVgeBrZG25dhaSnHYmN8jZZKgXnnAqpFraH5xZVhUAvF35cpTnfAoiCPu7",
  "key4": "iPSYdDwDrY53zD6RQWbfygHFo7gnjbWfkws6DXJCFWa9LeK7daD9XQmhSzMjG3azyvCP5PFgbjMdZVfmqNDXXFt",
  "key5": "3m1zG7LGkfGySR8sDP7LXbQY8uTynWRcqakGzRxs1bWsHvpZqd9NNykPuCMJmgiDnNEoxK2whHL8RoqU7AdxT62N",
  "key6": "4WewEKmSrZ4Rs5RVaCSZAGVMat7o3xyyfde7PuZq2DtzHm5Hy9cmoP1MGsc5LR9Jhv66Hk7pia9GuZY7uUSzZrX4",
  "key7": "2FE3BtvwwCS477V32Zvmh48w4zFba2CUNHsCyGqGo9h1gTdtbgfzt6WEnaG1vT2p6Gs11wSPd2PAfJ2U8oAzFzsa",
  "key8": "JFojBjZvkA8pxJh145qmT4fj2aKVtFt3ew7oUy2uR3jPAzBXx3DsKKr1bLSY5NyoJsqjpaTsDSzaidR9B96nfGQ",
  "key9": "UA3mvgwxm3hQ3A8MTae45hNg1Su1N4mtNqMw9CyHnwQaC5FMneL7JrVzb9aVLNQJcWYctTpQWELmmq7cg7BuU6D",
  "key10": "5Px5Y3YJic8rjQQSrDAGoneGWer9ajzQAxaTz3JJgEYwU63QEvmqAw97RAJcMuGnTd8qcQ5FfVLXQFVpRUF7PV7r",
  "key11": "ypGxywj4uFR72dcrmtUfmaTsWtAkzxmdAuZWCs2MGSFcU9DdPJoHkaQtpBQzCX6pLaFyENdeaXwYNhkcr2gcDzv",
  "key12": "3kFwatnuGXkcpDU24vkmQYqPaZKYZcLAWoxd8FFF7pN686CSEVzr9Wqa2JLYKgRjoLWw1UAn2wu1PunevXnnvjRr",
  "key13": "2Ea8fqpi4jveo72kcutt88wiKcDSFKnhxDM9k7KbAcHGzhe4UvFUoErove7cLfLzoHc4uXBFxWGkZmjvyCBnvWR2",
  "key14": "67VVdBnuwJ5V4JdoW76tKsQnynkT3tnpRiELz11q3Sgw9TpZagQmWs1jEshqFHhZijJzogUncvoq6Le7qfKuoHCU",
  "key15": "2UXQg42dgpU5rDaZwkkDcy2rttpn89SFo1UMmZk46ibpzW3XsBahpZ7NErEVsPoHhGM9war5V138aHjMP3f2w3qN",
  "key16": "427DGPSwA4i8DcPEnUyUjKRNgfznVM297soTeLEmSCVH8jrxkFyEHw1kB3pbQxhqVNzvkBezQ7JnmQ6VGXSm9Hya",
  "key17": "5bY3V45ya1z2V5fQ9DRkph2efjNBiVLNRF5eNJ4LcGcbkTkWVfgQs3p7dUtCQc2dvffoatEgdKMu3LJ53ZkyADsk",
  "key18": "5bo3CuxX88ztYr8apjiDFxqgCraj4jvNgUXKcJGaxV7WNksesWxMduZt612YYY3YWMrTjgXJhKGwPigYmKhsSaku",
  "key19": "4BjpL5XtXNTH4GdeDewXPfQQURSGbYKpbJp5tjU5xX6Kfm5JkATQoj4Rd2ZPVnVvxXynrAJDmRnoovBvi94MkyBe",
  "key20": "Ls9iq46JP1Z4E91Fzi5t3EMsR3ybpe8KVj4gnBE3yyZ5shSDQijVkmxAxsNjcJEhPC1mzCUHW2wUJuTXVbBShAs",
  "key21": "3SQzyyAhLzFkVEhpm5mqR7XiEjnoN6h7obaEWicGcqgFD8HjfGeVWUm8Zh2kAv4yty3Vewx6G5MX9qoNWtdmw3D1",
  "key22": "3ERq1LDB3a9NN63nvnbzA2sVvn4Bjbn79gR248SwYwaHBGNGdg9aKevLuFLZrFui4PfJLFUGJgpY446DwhmDduUu",
  "key23": "4kzp5BzktWU6yxZpeV23DDuYZ3drSE78VkqCGtUeQZJ3GXZSuZgbUq2EG3mYQTQGv5Qm3M5EsZK3YYjMEMhZH7A6",
  "key24": "Z9T3rkfDEMuSgMsiu3aGuPB1wrj69Z2UsFdC5rwh3tQPpDNGUQXic1HPeFuHGgfNDrMg2zM663UXL66ioKZeURj",
  "key25": "PFodc6soNXJKcSuFwgw4SMsnmuQ5yZ1XdpsC6P36SKqbS1arJ5fsSZ1dGbdG6fDznQcKRsyxi2KPbkeF3asGpZt",
  "key26": "3ZnnEVKmoutWrD3ZXeqEyiQZRrorzGGUG8fthFjekQuhS79pgRkechZ867aqR9XFxkTJtdpE6oZz6TCDk8HvenYi",
  "key27": "qwbtWFoKkMmMx6jFuR9kkXyPyPL25F8hBMFgghMmqaoGegbfqhcPX5XV6xJ96D9TZsBC4c4XzahCf1ZUJwoTrWU",
  "key28": "ZFQiAodK2WMfNyvaabDuSvrBdTnqMRFXwBskBZhimg14CKSQpq9ai9uvPAGWq5KVu6JhGhwZS2wjZH3axJaB1PY",
  "key29": "3TwbeMwLxHhvUaEMVEBp89FhFG23LmcfS9aLhCgiKyedJwuLV5WoKAPB5J7gdGZ57WTm9t6VQQ1KaHQxFvFSPd38",
  "key30": "3P8qY4qLzqNRoCgXGYTipVJaXzwhu9Xx1xEbK1zpz2G6fpJeYZunuGjsj5ko4KLVAVLnhRPTX1HfJJ35B8QCi9Wp",
  "key31": "49Cf7fsqj8QXUPZHpNY26PP2X84o7ahvTBFroLvaiAryA7dJQFBjFwrwnn8LHyRWxCqmexddgXqmXYwsN3fCzREw",
  "key32": "3afTMNUTLwXvJFGyRnXbFKgLKpdy2QCaz1pS1Vr5p1McAynSiz6FS3aNX9gLrodkKTBrLp1PaMta2kBF7S3pgTPN",
  "key33": "3uuayd45mCTYZK1CnpJnBeQ1xgYDfWh9cwm4Fd3ciWzsmKKDmDu7mU2aiKdanb3HA95ucPkdUAH2QDDZvKhFRor3",
  "key34": "5Z7v3PoQUH24f9FnoLWpiUoWN3s6ykmFqAgdvn6rs4u8C5Fo3NvoEbyVtMGDTkCfdGvA4CoruqEvWwyFeDP95RLc",
  "key35": "3NjTCBWUypvYkGfwh3XQJE84mxT5rfZGjQ5rkVqUXxPQCNwuxQ8mszPZHPqtoSvNFtxgvGi2uFohkLjmGmeEjBGB",
  "key36": "5yP7PAd8mAov6TvKMz6qgeiKp1HHERP1UQ4eRXBkRQZrx6YvSF3EjqFi3PBqxpmFcatMNbshXft2YrmPLPxa1rSw",
  "key37": "9jgFQyZfA4jxKyZZ8siKTsYcC5Y1BjnijH5ieqSrUNdwJCyn5UvWiSaYkHUvgPEjy1eNC2s4pBYSWip4ntwHzXC",
  "key38": "5pQWouNrjaU345czfTveuMrdumWAXpG6wnQztNLzXYVRJhiUL4Qqn1msvruFCLtAyxJ2uofzMjtLTLFKgveJiuyB",
  "key39": "4gBy7Eg5XZGCXhbFf4y27E1nVTByCRoV9ZyLsEmY5Nv8AbEbZnsJ48gyuCAyC1cWjjW5WUrBMpJxbP84ufNEeMVL"
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
