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
    "5yhjGfpaeUetnqs1BZmBZKn66sZHPao7yZGjmHJsn1CRVm2eJbB6LnG1aEbzQiWFbT5QMZtSVuZ3K6fMmfvR6E1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gmDScvAV2eFf4Xsj8ti8LtxYLoaCu5TtsAXSCJR7aTUGghG1EYVSuFSQUYGMN2T7RrPLtbiHSkKHQ4FHmFVgcQ",
  "key1": "2FLD9nR5QDGxCff7XJvqp7hhFiyrGQnDGZpAxVo2YaGkz6hsgmk11FdwtRnL46DnqSm3tPJ4RDsQG3dFs3TMkgf8",
  "key2": "5Y5bMB9M55ZDsfHQ5b8tmrs73aw9Xq2XrRjAd67e47tPmQFbDUnNKFMzK8jK6v819B1DCHf8pqkn3c6K2YiRv8Qu",
  "key3": "4rTcPCNa7Cbu7cLmgVR5vEKfbSmNbuN3bavHAxZnzGNkp3nC2nMh1VygosJuPZrND98uxtiYCSxEySBh7ZED9SnC",
  "key4": "5yab9s6m5FT1B9FH6RcPT3HmXJSFkQtLfFKQbTqr67s78DqF124wYxu2fC91JNd26ysCrGSaoAF4YQtuJjHrW93b",
  "key5": "3htFbYy2xraTMYbtFxfz4htc2GyKec4MyF1ZWT45uVXKxcxvZ3h8QfRUWjRefXfN9S9f3LoSUgMfW62PQFy6kaNK",
  "key6": "RrqFb1uE8oDGy1e15f5bKpn93jtHrevbpFWPWT3jqG9Xta546whK1msh6B4uvsvicH2diaw1mrTRkmMYnqWUtwn",
  "key7": "2sjVhPhGRKhpVc1YmXXMc59WB9qYMozBNMDU4MVECLQojjoHK2pFoh2ybvhKNCunYkHHNwgPzSX5YSm4D2gdDrp3",
  "key8": "xvWtaM2vLnkED4J7Y1RtJxeLBSgRC2Q2hPzWUHXzgV3tEhG5zZqnSRshCZxJQm2bZ9n9cot3Xjqy8E6uKAcUUD2",
  "key9": "1Xmtwmz1D5dAWyABfmiRszpAmSoyvBRBrSWaq64YmevuNE3bCrprAK7xMbkCTNphYNSnhsHP6FgceTASfK3Fjmv",
  "key10": "PPqXQRjmG7kaat6hw1v7GtkyDZxChYocvLtQ2gJ7SX78kXi1CikHWQ9zt1hMxQrV7swCiKXCKGu3Zm29UWLvR74",
  "key11": "4pyS16dYU2EgEZ5dw49fNNNPczc6kWUjuFhjW5kzpY1ExKp41VzwV7hi9CuY6yt8Q1i8Eu2cSURXprFo2bmMASt3",
  "key12": "VkW8iieZA2xe63y2qKpsnY9q8icDxh3HvvYTvZjfEH52KyyBhVLpywh95YzxFD7YvDsxkjRCoQGWEZesyqtBwbx",
  "key13": "8okUyf9mDeY3Q5yeratrJ2LKUgMcixJv5uvX6xh93YY3BCHmhxwT8vjaicYrFDsKxP39LHms3tE56vA8xmeM3nT",
  "key14": "4Z9udvPWZfT3aNKcy2K7Kkd6sawkFeHBVtTrkhyTL9HxiLusUMitNwYmnVNi2QMeFkqcmMAF8YSD9nGmu6sLF8HE",
  "key15": "47ryaeKdnwwNtwdZgzkhrZEiwhu8qfVT5oEyGS3P2bL4CxvzWp4oQTCDa7UCe1nV3GfDg4TBDzz4Q1hiV2xN4YNW",
  "key16": "2i5xizAAPgQZW7YcAXj51mY98RZH8LopTeEz2nca9H5YtodtuaSCaRWpQCaPgNskmhtu7FaziYzupmrNGRgCEVh7",
  "key17": "34qV6FLuLbh8k5JpDMGLZQiZoxHF1Yrqa98Rxov1vLduASWPXDhFFdwa9VGvjC8WyESpC7yP73FLUCsjAQuKdG7K",
  "key18": "48UdqMHLQaD3UAM9sRoPpUkhTdzKA6rdvTCZmraKvQVzFNyR3uRHLoZTkhS3Eujj8tchT6CXryaxJHSVSNaAr6rk",
  "key19": "3ywgRP9VWSxuWPLMK9xZiu33KvAmBdMRczuiC6JfL7sGnMv3uf3JdpKySdRrZprZ92R6gU2jW8E8unzS3rAx2hvu",
  "key20": "2Q9JcvioMA4ij8eguEbfVwcxUqHxZcSRR48z98TQwLGrc427fF7CHrVEYwd1f9GdRTrvXWWk9SyskEjtPZUtiR6r",
  "key21": "4DB54CRzpYEbrB7D81VEsNycsPtJaT5xBJ2X22i3EDT7xoSE6pJdsx1Wm2F5ARK4LzEtTw36D25phjNkqNaSu11T",
  "key22": "2qTGjxkJQAXycJrvzLCtq7Pc2iSYyk76pRVhgy4cWSKUZPTvY9uTEwcYqrsyDxGFF1wRenyJaa9TZWJepJVxZx54",
  "key23": "3oYedApveLK2t2TaC6bbpqAUrNuXjBU4EbhyTNLJ9S8SFR8VTdY3wihr8jeVHTSWCjSQ6dXPhLsou8XhiCSmZz5p",
  "key24": "5HaG5L4r8cik9vBFFEHZwQjpffDQqecJjbSPehBKndy6pU8yhQyscYjtQxTL5QwRR8616Yv1c7JB5WncwHSrHToQ",
  "key25": "RuAJicSDgymDqXypbCtabEayjdEnXUNPUkrLk6w2MkBxxghEYLHWxbaZ5VvC5U6JTkFEakLiHv9kw48EWMCxzXM",
  "key26": "4z58TLoiwWikSRJAhjqRrUN98X4eF63KyEkK9u9bKd4GytT38hQEWgRpzK3j48xKjLWVHmcFucC3DNpGKB4WVcwV",
  "key27": "fH9AujKCDx4FcGHL5BBSzwbXBvDgNuTHLfiaYKQiST1CsMXafqe16awgksrKUVwahmnZRETdivRnXoDcpuAZ2sD",
  "key28": "2ynDskNFJZxeizRknqYjvAVGy5FhUzEgKXb3YLEfRE5HxLAPNJHaEL2C3hL7K6YYRQ1QYxZMCLSCH8iXxWY5bbZ9",
  "key29": "3FhKdWPZERMXGtzwiPNf96tYmDv6Hp2avRAhLbUSzmndqW18ok9KCHdU7kRKiXpXwBRQyjNN6iSJU8wtLtZX54sP",
  "key30": "498a8wrM4cPUC5koB6ibWy2kSdw9M4kwrtJtN2VuprcU7qatJDD4GpeUwT8R9TCdUXHmPbM47p6G9nXpEx87pVHk",
  "key31": "2A8s4iWw8yCcG5mFxPq54QZx2qJeag72v4pdPezCgSPmGGo9tZuQkgm3isTSFw6nWajonoUndWqPGymtNungjeTR",
  "key32": "5pTLRxqmS3sNcWUxm4wwNSK4rbgHx1vxXNig3wgyxKixyLMhp2CCsxYvBLrHSbRDXxBZj7xU7g8aptVLpeJUb35t",
  "key33": "5G4gCeBZQhtNYQBVpoSmSddhjYxV76HNL3YGc7eLbHbDHdaY8BWRSsG8JjMu9CaATgRo9ZUdwMD44SjYuzHJNHMK",
  "key34": "5HdNysNCuGALeau94a4FCRAPGVdCrEwUFW5pbgzErwLFxvaaNyAYdnyijkArXqtaqpRuCQwQdshbvaW5wU4tBGZC",
  "key35": "2Kd6xy6rAp3mQKTHB8HmL79wQkZNTNq8fmoCLYi78un9BPyM1XSciZMC7VQVufwL85JxnQuj7NWL6VW9yeqc5cwU",
  "key36": "4YSrp8xEWoAoJYGS1QFDTQ4zqQAgvRk9e4vtCLehxaGdPgzfTdS5Kc6e42Qk3qoYAspn9z1tWGS1KmjNeLvJwfDm",
  "key37": "xzxKYakQ1itcretN2JfbNxr6pxPH1fpzXGBb8Dr4zrjcFEEye6YVfZQKkiPtKRjfX45FbZksXMSkSxYubZEbKc8"
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
