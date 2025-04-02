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
    "4gm2iRhaKjvS4zkCjDgyNaZmyxsgsttqqpRapgonqMfj2WXVqgZxFerf39o5LTm8eUCDBcTyUTUbbv4PK8ztqc8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2y8zSa2Ro5t7mQRT72NRvpNrqPYwEqbfUQYyTC3mEZLsfTPjsog7o9LAnSL3PaZLmT2w2vqqpChXQd3vjpvtxT",
  "key1": "3gejnexrjpJqUEtjMhcasUNT4Uo11rtYjz9raSjGvzd6xmcP89bakNVvjz9MbjFsHS9cD9bDoMda9Evw8P7t6gR8",
  "key2": "4HHZM4YqbUQxWxVGMzy527u6NVVon8C4sLQtfFFPttEqA9vseTCG38pVHkcfxaJzbrkhEfhyfAfjZJF1qHgg8EH6",
  "key3": "26HxiHgf7TERXYKJQj2P2FhbnbfRtrvhRBJ4jszjjEuE6MMSFRC2vWdFaDwBSSH7v3J8NFGWKcC9MbLz3rSGwXxA",
  "key4": "3GrvDa7cN9qnsJNCLKQCTSGkKQAKpH783wKqp7DcPYwXLmmvviUxVPf1qpULJ7EmfYtXqtg32zRqP3zkT9SqXTuH",
  "key5": "37twEqck6F8FfqU6uzT9sogDVzL54s63qkwFqtwXArG6iZEi5G8pKD7peGZt4B91gE79rNT5M93ccccEfKvyTPvk",
  "key6": "nUgppaEd1mxd7TKTBQbnh5A2GAwb1to2ujc55yRGVgP2HwxdeGLzSnUsg3DxeJJ3QbkVMR8QT4jb1niGbjRefox",
  "key7": "2Z9bBuihw7ENG49QnGE4MfyuswJgQSDJQDR64ZpjoRoX8Lrp46myt6mF2inMwPP8i8UGkwmGYZb3zeFjC7kPVHfC",
  "key8": "4C8aZz78Twtx2s4SLxL56Z8WFTvVyTkVTZrn7CcLEToxPq5ros6PXa81xnn5S2o5VBdQCwSfV4XcmovFgaJKmXtJ",
  "key9": "28yNcKJsmCcY32dnxQutpSKc6p4QbCGLTn6JVFPbCKBRgFJ8VQ2ckhXjzigEo6j2RSMwwPmDay9CDDVrgEHsxUq3",
  "key10": "ZtcSiDSFiHFLquGQa9nPLJaq8hkCHKX4CTKm77d45aFbRmsMxne8mXTLbCSLQgq25ezKBHv8sjoh9guna2vNZBX",
  "key11": "4CZ3XB4RqqLTv8PVnVcdgbwaHeAG4BpCNwQDJZGbPQfRL8MtAnThsgyvq3uHykJWrjgoetG6qdZZCajQLo3gfsuo",
  "key12": "3QviqYG6nsiDe8NhA8sTMK5PpzB6czogwWgGpf9eSF2HDuiyoMbLoCscteiwQaP6JA3tzePLnFeV19YDe8FuxEGA",
  "key13": "5WFLRzGCcZt4khkMQizXy32Fv3nzVcL97bTsFZAJA4JBfw26r1GkGxsjm4yZZjrAE3XWuwMm7gCJkbyBkmgkXTps",
  "key14": "NfYKcGG6f5APkqnuZJRWqSMFmphRmHxAhwGJjqEjtFxMMT43okUDNSf5cWUZJmArWFqm3YUSzWLF238BUJ9xXNp",
  "key15": "5Haz2E7MjXaWChXv7PnYkudBgBkdXUdgFx3hs4CkbwNTdoQNzLoP359M553zpY9s6VgJPDHSnVgtkAb2Kz5iQYeV",
  "key16": "4oN9Z4qbo6qBa9PPosZsdQRmjSxSmtJycgzevpLf2y5deY4CZRJ2Ltbt2DVByMDJJskm1i4Wb6EenXVzi66GP8yk",
  "key17": "2TrcjVKrj1oFmNE1zuCtjcXFAUcuvpK4VfE9V2rDevsfzxp33Pfd9L5ibjnFkNbj39M9CpvzzpK8xWfGmewnmV3v",
  "key18": "s8F3NAzJRYMJq5A1XsfmVbS2rkN3TcG8g9XXWFvxT31mXzaL3yCUkVoGUHYj7yiJuFDWPpLkhRHe6JFeo3gfW5s",
  "key19": "3yVC4cuYbq94tp7f43eVqXxm8ztqcR1AhZDe2LumoRzhzuBQQaKcJH7Fzd1R7MMU46zVVGcDucUgdSy7QvwCUhBi",
  "key20": "3Ct3ermWsEvCfuLtHdCkVcsvaGTkjtGBRcJbHfpMWV8FC5QvC7xiz79nD3SUrh9rpFFYh4opNtw7Ky1eBUD9VY7s",
  "key21": "gdtPbziNivpfXDcmM5eKER1gD6h38ADj5csGAd89nHsA2ehphverkh144CTfwS6c58sv2cBBXVYb3N25aBdt4VN",
  "key22": "4JLqbAEDRLSUjKnxeCV4q4BfPmwMa1hUYb8Gft4EXqXthmMfTmF6mG96froViDr1L6B8aLXHxcU7fQiAWfCN4XUP",
  "key23": "5b6oDSZzqxTbsANivWyY5iCzc3UgWrkaXbV7UFvaxmUg4WKu5agRFtrRTVeVXuotvt1sxGCsXppE1D76G3wVwnJW",
  "key24": "4nuDHGCe2gCc2tYuGQBdEahHM5W4woqtWKXz9GVm2NJcjaJGt9EGEzUDFNMWFFWTPznWwTE8PbhmFcwvgWwn28eo",
  "key25": "626giVa7h3GJKkeN2BCzaZxH3E3dquEbPQV5ZgWg6ioSjWEis1YxpBfMNcK8LedB1XgKPVKMAJvzx5LDsqikRdiw",
  "key26": "2uyUrFBAz9dzwoJGoKEe88M6Q7wZ499jRYQ91rnUFtnuinyZCcJSy1AdS62vf4wts2YU9iJeHVFPwFvyCxSFsPNY",
  "key27": "5zDB9zpEFpRGXiM3HZivAx6t7oJqaQcoDuco9z8hW2E3F37Wqw8G6aHQXWtEg7KtiLjjtnB5Hy9AN36emJLSY4gA",
  "key28": "3mS6nautKumbbHNn9JEP3XYa2ECNiZ3gZ7zWz4SjMShEutXGdBN2SeenuAscmWL7VALCuM1ZjTymC52HNSGDga8R",
  "key29": "3PXG83iciAwNbi8mPcx14NskHQMVA99xTtLn5MUMzCykF8JVHWZnedQMybE1YYN9u7h5LTenZfbYx66dmtcqpN7P",
  "key30": "2JLUh3hvKnvGAMCTBLwqvAz8bZdJ8x38K53D7ZMvH8o49D8T5bE8dqVLMx8JA6BqX7FYzBpsS2sAZd7bLH4jgUvB",
  "key31": "4LLXpfKwRrusJutkK8PXuTPHdjxsa2vtxJKxcTtLpcA7JHhFvs4QTozd6VWMY6ESNMgmK3dbPpVdA9MyhuXa7y3L",
  "key32": "za6BnuXbeggaNy3S5UsPRm7rx7YdXerrFm7PrGBDp7iXyhgrzDU7LnnFnPBQUAeNd8bwSm75uiUL6MrDPJGvKqw",
  "key33": "2m2zW9Xhszz5CHs9him9Vk7geUU3aNGSLE9ggDUMru3nrhVqiEFSQo2R4V6kGU4XgFZ9jt1CCoaYJhu8c1bhCdzj",
  "key34": "4J6uLfaZDtWzDzeCnEjJZq5JraJVySZqHdhE8QzbNq28omzTddpEUnvLJ4uRVZszPcj6HyD8c6hztoN9oQacobUs",
  "key35": "3wo5betihPEA8SV1MHuSY3RkJJzwYPEqzwvyYYiVFjsv9ybauK9GVCx5eUzbAbewM6jaFtkReoiMpwoaLZYh1MFK",
  "key36": "5RCVteSvY27MiNmEYrHVXAKb3PqnEu1sz4w3SiEvo2fK7MFzpiCsGjHwMCxVuWYu2WbbX2dJaFJHdyCHzo4VZJfM",
  "key37": "2NpTbr41oe6jmcdVMTtoX4YQJKiqKKi6fMudkciW4pJM9LewHRWsLHnh776hvXTMD5V8k4EU4ppuemjCsnkVVZyM",
  "key38": "23oYik2Hr4HUwJscNj22GoiHda8tCYoH8GhDTBh8qW22RyKfLtC4Qk7U8jJe2mQr5pbCi2Bk9RvKoWDQr4NaGgF8"
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
