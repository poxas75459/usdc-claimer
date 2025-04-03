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
    "33fAVHvjbqJ6Spv5gAYxVx34SkaVq6pr7ME1NAVVzLdJj4YBERGTGTGrkEGA3VRwv8zkB6RJY85YD3uBUVdd5kpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UifhAXNuG9A2dTepVsuVAS3S1YkttJxoNoDCgsSKEfoSQasVay2PX845nLnQ5DNdKG79G81v2pgYBu1HqYYHagL",
  "key1": "CMiEYuMDbqiz932EGu7ttCAqPourC4mRb1ZfjL73CfCcoY8yYPrb9HgpeXbGSpwqYjQBVLER9RWfwJPozK3vkUE",
  "key2": "2ujg7rnMcJ4BTvEX366CdUAvpVV3qTq1dAYoeHoTmM5CA3yqf4ZLihWXkNRYFgYUPUoK1MtekWBUxytJBg9VTRnc",
  "key3": "2fLQC1NUTu5QLtF5DK1iqaxog2RDqjM7F5jQDJd6ypqJb2h7aKNhHSRLKpGFiYBnkKyCMMbAt7jG6K1543Ni5sjw",
  "key4": "59b5p8xGp6Rp8pqPPRTBPPrzPptFCtf9Qjs565DFgsRqKdrbV5QiFd9AbmoNPsmUe2SFhFxS8qTcoc2fhHJvNgDu",
  "key5": "3qzdW94ERZtCFM7vgmXNEXSmRK7rmrSTN4ugEWQPGbyWRD2maB8mrJ2K1WvQtqrW1UD7dearDbB91z8eAHowkPhW",
  "key6": "2TyEn4VhZnqGnVkaemXZP8oCpZR8r1qVVKr27a1afm2hJgQK7uQGvBEKKa2Yu1BhJumqWKFPZL6kNpUvBx3ono7s",
  "key7": "66bP3nJpU8GjQswiNZxK1Gpi1MCx6FjoAriBULM1aFqQxPRdwM4oe1t8fbFBMyMSD6qtXxzQmgT5GSJzJqrVNxn4",
  "key8": "2XDYBm77UwWgE2KP4XyzGCSoGN2FCGWgVGhvNx25NjAWvT4HLTJta32Y9HcRq2SNUzQq9TqXceTuCSQG6G5G9aYq",
  "key9": "2DuQ7CtGjbCMioyeUU2WqE2hNn1AxmpLRZoN7G3ajKDeMUDAhG9dqXtN2nd7Cdz3xNRDaLj2J4vYmFPNMr5wbVke",
  "key10": "5Tvfq9rg2omZFSPYaGBm9PhaaJPHydLFyrtNZ6DuqfzXQPgQL9EaNxvB9QxabH8KWuh9RHQ5LxizczgV3sEKYmj5",
  "key11": "4TWxdXQtjn6F5JiyiJjNvbXT5PKN5XtFSiRFff8ZbDqHkHpwoLGrh5vTuAzS6Vh8RBcgWyr35Nvqa5jFFGWuUMro",
  "key12": "QGr1W6m822g3KAgLtZrU4gKpmFhU5RvTD4TcWZh1U5kqkGAzZWN2PA76qK4f5tGeWg5jnJ2rP3DcoK1vq2UkZG9",
  "key13": "3G9GsVg5ZZnuAPCe4iUUJFfo6nuKzEaYxKUBzxB27y9NS4LmEdpg3NvoKnmLgzS5HPNhZSXdECdA6pd1KYvRS8ZH",
  "key14": "3m9YWCC9qs8orqX9BePoZrB4siPPFQqibqnPdfg9wxN1dQB472uK5CpBdX9GDwvW8UUKeqTbXiFKbiTy8VUriTQz",
  "key15": "2xKQCxKTMydYEB5gT4RHGfFpwXXP9aZqxo5ZBbHm6vtXJ2LpaARtfMUMFYbdY2YaGTkrUj7jfT2vDoHKECft5ZMZ",
  "key16": "6LcR8EZVEgpq4Qkh4QziaRDJLAqqwEp2iNRCVYWKBLcHCvjFhPxTs2QyC9BZ5i6wRssv1YtmmxeEBJWutbVaFPR",
  "key17": "4bE5DkyRTNkFV1s31YktLfA7xGfkaDrmgWnLzaoezmfCPtZYarEQNdPJykWzRSVFoDjPsVs6H278WsZ5bwoqRz1P",
  "key18": "RboZPq2erwc2JEAZxwgQoykZoZ9Qm1An7Ln6P5a3xVqrueDPV6N7NLgDKovPe3DqCXYrqXPiynQquzuDoPEPBm2",
  "key19": "426eUULYGRokUW5HDaJBsbYgVJYmwE6AUPkF3X4vGHExbtBzzhu3oRVm5DFBRwbNnD5V22dDQomEj4QnYKm74rpy",
  "key20": "5HQJ1LTyfvmyt1auSvkUzYt6MpGRKyFozWnx6BCjGLzaMUNYTUuADXHEtKaS6aNCwLQSBMaDXRn7GC9nb4d6xAQr",
  "key21": "2H8HuG3EjJ1NeWqnRsqshSvp4HnZGiKAbnVkxzE6DaaHFYxSgVBN8CBkT5gCAsc3ybAEQX1zLGNw1gMsyDc1cabf",
  "key22": "GF9vfdpe7tdiscRcKd8B7uxEKpM9URgEcjCHC1jrUsSz95BFphwBPfySc6xdPSLjwwCSLneg9fF6S4K4mJv2aHP",
  "key23": "2iyWN4oGNqo4ZsjxNpqoekhGYaGZSYzd1qQ4vs3nXnMejNVeyToRE1sNaoBorRsUaY7ajFrbAQvGYD78EdWEBFHi",
  "key24": "piJNn5gpwTrj2EYB9k9527da6DSA8CXYo4CHMnmbDsgnDXCPmsrHFUwwi7bAgLJ7sb2xhDp3E6mPtbG5n32K6r9",
  "key25": "4VSd5g8ByQtCU2PeG1oZ1qRQXtfCA3pRk7kLiBzJjBQbGx14iS5DixqDat6o7qgnFsk4j3dvh8byfmWUieNzALKW",
  "key26": "2TmaCWg3BjzCp14pPfJ1qUGWgjJQFThRakjoUXm1mYFYJRxQkScGSyfLwbCb9Dy4ecsHL2vr3miBJVGwYh4yxubQ",
  "key27": "5X5uE96WiMqrErQYQaXJb2PzcdaSaDDofqHaaPgpPSGSWuMNXPencTadxj945kyUZjecoKJ4XcbNZUzi3CcA9X2k",
  "key28": "2QAdhbPj9dzkfERUpEfNRSRf46yDhGBbbufMEzMxCnMRezwkxLWeZkwr2D3TbiqDRWJxCXjpipQ4kfNKfg5PPsXr",
  "key29": "3kwBVtS8pmWqsqEJkvckCwYMyjYFgt9NgbSGtdiYdXeXPf3nTru8vif2pYhWQUp6rcNjjJeQoue1q5UZ1JiUSuwt",
  "key30": "mNCNdTvdHYcCBS6AZ9azetBppUCc7TDXjC2NLXJpbuqWF9FGx6gxy5QLBpdshfzoe1n396hPsbruKC8BKij4nbq",
  "key31": "29Sbp5cgMhoPE45feaMGnyScKHMe67hGgutxcDYHPF6sYnrvwjMc6KkaomYrhHge3J1r37EgNUgaCMpx7M9TgiH7",
  "key32": "kiSZMJCeY4LAMU9fXaz79zYYWRoC6xTDJjLo9pNumbDXjqJieEGL9fmbXQXBzeE66WTRCrqmjNkkDLYJJJix3zZ",
  "key33": "2zA9dpRa4EhhrTuH5yBQyY99hiwM5bYQ19mky8yFCeY1tUYY6X8d3fQnadgRcm8V1M5Da6htGGmxgfpaXC4L1nfC",
  "key34": "38aUT7A1yBvBN8GHwTeD2nwvE6VBXQmavKb16FAqhCPt91yV1y7EYPWMY4gTEM5Yq5HqhQmnWrZd1RV82uPp8gvN",
  "key35": "2htTN3B1siRFssYtb6mmEodPtpSpqEjZ5XEWQPw3SDUW2cP6Q46hXrPsKJe6K1YAHE6GARMYAhQsPwdUpJ9uXovM",
  "key36": "SYTYjAcMssyBb9jETf78eZNTN59qpiMzezF3dbro2JrHFWWFDjyeYSqprb4Ka61AJFiTEGqkfA8R3UygF3gStgh",
  "key37": "3TeisRGac9vVNiHWsYpMFsSPJKPWPBWPtW5bZvKo3uj3RznQMsmPGY9kHH5EmmUyWhqnVhfvNjXAsqpAEgGPYYob",
  "key38": "5a8H3tMjHwyGvUPc6htxt9Ur1aaf5GjoK7d4nqL73isAdojd9SgMiyboNspiujWuyn3ivCbhQxHLHXbY641zE7bs",
  "key39": "BvdQ6k3SXwASxU9wkwqHTMAxo2UYhvEEN9NcCnmLZPNgAWVybwQhhsPMWKyhN5NJqZhq926p4ch8L2LNuh6BuQG",
  "key40": "2kP3BPxaR6GcFPXmLCsdGR9xGLDrArs1GsmvGm6UZvC86fhBApiaFidWpyzCvNCUWbLRSH3MzvY1vokckg7zjRoR",
  "key41": "4Tvo5Mafdmm9NV53aHXRVB1x46fFSpBPqTfCEyiivcQQzCracUgZH2tm6QEcV8knQBsMj86YhoaQhqakwGuHF9QH",
  "key42": "4g9mfqPjtBLDYgoLjoH8UyHZjgb6HcRZJj4uNoq6ipXqjtGFbwkBEYpArkTw7Si8agAq7vUEowASBzRqm1K2Eui1"
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
