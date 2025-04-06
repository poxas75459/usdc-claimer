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
    "4pJz9LYrKjFT7YdBUck6HMqdLPRVVoyKgfZocWh8wK4nNXWQKMxoxr5ycJDELaNeEip1GJQK5c3jgU7mPmtTqz2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPayCScHPwEM1QeVHFyTq7zoY4L7qvKa37L7Ak4NgsTZsmwB2bhbjXdMp3kcgHPGVzRYx2ZrYqHMk5BSgEPtax9",
  "key1": "4ugYcv4nhgUhXkrD42NzNGXvZUPwh3QaXJGzLv5uGaM9cemXcgtxdtPtAer3Pq2ksJj3rg9ySXnGubfwAVgP5xTr",
  "key2": "35wznYPrj4Cmo17Ew1HJKLEemHX1W2TZez3X1ve4KqJDWwfBBxLbANExXeWiVTaAMqPaPR6TJbHCBVDHFNXsfAbw",
  "key3": "2sGjxFj7DSNTYntFog4ws2CRuP5sRd65KhgaRdR8yWoRZKr8nPwUkiY7u9pWuHaa5ihysA6bYZsvX4qmgeHUW9T8",
  "key4": "2Qp2rPea8YLWJETPruNASoeMsUS5N8CeVtXnfBSBEE8kDpCsejx236goaSeVosEgi2VUckhhtmJvBHUwtYSovMDP",
  "key5": "34roZoG9HMtjzoSdBPdJwXvbpuCttKQrKctRfASmzs9XpYWHaxsvAwnDxSMJ5A1wZF6uqTqtCtL77vsqXwGeNfwA",
  "key6": "4q1fcFihxEBzLsXm4hk5KmhapiG3nqD9QVPWkAtuhqnheTArZfthXpxzZhT1gn4ZwBy6eDggtX2Y9xcZa2s6tELR",
  "key7": "4xhgMgTy1eqmEN94q4HR6YPYVt1V3MuXaFGjvm2v3GSXzFhaf2xodRZp9D6u4jYchnpvDYaA8FH3M7G1EtQQP6Do",
  "key8": "3jG5VLerZv1GWcqdpT1e5u1qSbXnz6BQWRX1jnx39NaA1vPUPw1DNgd7d6vqdrQPaPgYdoJpLtPN9CnDYKfsqqD9",
  "key9": "2p6QXiCMGj6eCCxcfnYeaNFh4nMGHDC3YwVxJLZ6qycngkYB1zHQQWXH8BwUXJkJY3YuxThGVHY1yZs4xxyhFpWf",
  "key10": "4ZMUBcVLHpmYryzrZJNggLpJWfJTF6FsQojWS1CqwRg8ggswUTwGRRDoXwZ6ijEMe798rvpQgMu7G41JJFQfmJ89",
  "key11": "5HCiDSNGJ6WEK2DjsUKH5bMAuKBU4uiN6RoQZiBvavdRvZUcEB9D9bSMLHnUHWyVZ5j7DdbUspXUPGytd9Jn87cw",
  "key12": "5YrR9bquU6df2nQ6KidkWPGCZ9dtsHsaSsnbQwDLDv8ruSKw3yD7XVLxf1iUJvtRcYmvH7efcekEVeJaQsaMZse7",
  "key13": "TuNiuQgMyLxz9hUmPT9GWJvrQ9fzUwLkCHSXyJYLaQfRWE2qJuHZJfbFp4pozUPQMCKCLKkdsye9p9c3RV9tsSe",
  "key14": "41GYSjntUSyDZcFw3Mw9ZcPBaGo3AsG72YHNESLMbXVK998JcrQUFFsJuUVY3QnaUMrFB6dFDu1Ko793WcnbzwFv",
  "key15": "3Bh1o2vV2kW51EDrqf9x1SMzdVhCd3nAn8zTT2qFJSC1htxKvH6ER3463YQri4Svcf42vdawFVupY94QD8etdbup",
  "key16": "65B2DjbNFrabdFGzqgh3t5Psbf8dVEoD2kDHScTrGZiYFfmfKrtuSeWEfN75BRKDBZeVqvgHkhJyu5MFVQcpeijz",
  "key17": "3A85Vjy1967vnvQMkhXkyfvi3asPeY2SQRePHWPdsEDwQS713xy2URUmYwhV3PTcTeBVuRAqM2zRwDQe6j1fkyz9",
  "key18": "Qn4QpsssqD6PL7BELKYiJmDxYCVAEn8vyPBf9bjunfGvrAhSeiDfzzFjRnb61BMmnBRb56Kafc42StG8LCVqmCw",
  "key19": "wW12KHxYPRv2zeQFqhy3CwwT9aSVusVcgQLN1mMyCAt6GtefFJgNNv7Cvfj9E3fDKxNryhajWHBYwhCcEgu1J5z",
  "key20": "Py4dfUH1wCKqwjbP9EddXqXUyBFQkXTnBjALJ1j6EExW4Dxce9XgeAvFddKj9ajXvPhArULEq7JqWcoHDGPU5PL",
  "key21": "652widan4GbUrg3X7HSDX18ZHUht7wGsg1j6mPscWC1A9Mi2c1PBBKMQmigT4z1kg83Xp9RZCcBpPzdiRig79dgz",
  "key22": "65h2hCewAehMFr6x76GJUT38p1qkuHW1DVNdRP8snaTrDopRFahjN47h5SGoJH4hafMDhL9UnFLTM7ztevxa5Poc",
  "key23": "3PziHNjUFSrwcMW5YFwnUdrsfuGRh2zoukAqENYXaRnoGCuVYit164bdc86DSvBJo8TnZ9LtWF9VszYAAkjTxZBC",
  "key24": "3nzGbXm2qp8zncW4utSENE9T5josZvZCCFSjiWnmT6e7LVjR5md8HATWCXxsgyLX9tLpo5PiKDPXRfAAziwDnLQv",
  "key25": "C7ZXZHJTobwwvkJZA4Wq8UtnR913gtvGYZvaeuJYh8UQfy6Sdu3dTGZJHzSBSUXSytqsr6BANz2eqrrYdXRZZzp",
  "key26": "3uzuqGzmfqmzRWjFt3y67e6qs4UcoAaYm1TKKbnHtCWtxSGMy2RiDcGQPdd8vmihTcujA8SWK9TG9eDqFbPaLcDM",
  "key27": "hiuCDz7YbT6ayDjMxH6mn5xFVnRXjKm57y9gDNzdPuTKDXEhBmrXQQ9oQ6R8vYumHmHwfM1EM5N8dtsF7j4o5HZ",
  "key28": "3KP1YhTJWKU4DTsBMq9FmhcsxasgCUcKVkV7AeDwUdkiF3U3euGd9QLA2AT7vUSooDnnP6o4hFx5zoNMMA7KAXtJ",
  "key29": "53wKsfs7saeuebP9JBUDVn9rufdC9AazF6U3LnNfcfWF5PvDCSPup8fFVDooa8jQCnYV7ae47vhD5Ta3QM3z9Ktb",
  "key30": "5bPsmLFCaE4Lqy8CoHQPH6CsoGMLmBwQHnieSt72MhktoCx5q53ftcALHvDtVBeHPixVY9RrFhUQ1u8eagQBRyCT",
  "key31": "2BhEYe68wzymWYBRzRG6Z9EpAmRQbSXdtNsu6WikjB3zYEVm4jrjmsFHkiTyWx1kxYNMGQZChAgAC8L6AJu5L7zV",
  "key32": "54kh1VfiqMV3yUNycvSxX4zzXmmdWjjjouQEjCxRrdJnJXMeZn3CU4YxyL4dY7L7AiyYKzrsM24GFBw2bBCyjwK9",
  "key33": "4mzbXst8dn5nH44TgazZ9KnzmcZCi4LnjoZym1h74Yd3R4W3vj4adtctzEthgX1yBLSuhpjEKUvHrWzEGC65mE61",
  "key34": "4KuMaKjW8cQU5CXbHtt9gfXkzVPdKiduKAXsdXEEUZeVpLzojxtT87SMLaSUuMf3Pvp8SY4ojZ8nCkYQ4R14BTgY",
  "key35": "3oEVh1fbN7Bp6p8pjR336wzSs1x7izBCSa4vqSugPerrDwBQ3SnZb118dY2vGQrx53K2K5ESPM7aoV7ivzoTepdg",
  "key36": "4VpENvG3YmWjzzBQgnr5F42MoDS2RQJ6eoWJpFhmnBuNWiwrMLSSKNBWmdy9i8799XK2T8hfSYRWeHGZXZ53LYCx",
  "key37": "25Lc9V4Ky8xp481Rh2Ei3o9nhzzeQQ6DoVF1YnpUa1gvMDyG542VeqT6jm7kviFyPHKVWEBEp1cq1B9GU6tznEVR",
  "key38": "kzjyJPeLChXVu1VuZW9k3dr43WVZmoDnskDWyEjsvhRPFuq8Mc6mv8NjQiH9kLcZ27HPZqdNUpzjdDTitGW2HkN",
  "key39": "KcqBypSmee78KTGKkX316D91k4RYEaGx6hMa2vpKjN2s6hThqKnHDKK9Kv53FeUnqo17mVnJ8DShcs21DKaqDUB",
  "key40": "3AAopuXmPwghv7TR1oXZEDbtUNbVZznXuZmjcqPQkwGbLLnBqmKJeKLCEPgHDtH9zujAL6eoq1Aj1jFvwahA6mnW",
  "key41": "5r8MBwodozX3Ws854Fj2Y8ksKupR5iyjjEQmdNBRg7HsSP1ehZ7HZxibEt7b268VkaCztdttkAKTUjfBRTtcv69x",
  "key42": "2Qd97e9N3nQ64K1PLFttmh64LsgMGwUmHcJsbRdij5pYuUV71csPAStizo6R9igoizGsHHPXnkGadFSFrN5dTapB",
  "key43": "1M86KM4PVj6D2DGjJyqHpLQJjdx1wB3kRsJ2aiAY3phRsP4EHD1TDKzJEhgazixM8h9139qcJaTh8juMN4gY27g",
  "key44": "2FdYFpBz1p6QLtATzy65bNZ5EQEYJZof14UK1rwCeSUUVipsh18jbCVQ72zpZJ2HtBK1GjaLCvNrhEEcgMvBCSAu",
  "key45": "5GiR5Zx5gvMevWP3mgMzA9kjr7rhi1qT46mUVSd5ewriiXd7j6EJtM8A2yd6G63wvWsPHYB5fJ7FS7tB5VEBK86Z"
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
