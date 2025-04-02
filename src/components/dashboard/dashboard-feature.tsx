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
    "4UJws1aYpfCR4ysbQV8YwH2irdCoEtPY1aUgKjuXZMntzAdYqk3m56v3fqBkRDBh6npFtq6HfuCoUSSUEnNeJeCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orsS8qfC7StKnHPPggGqdo2dERvY6cGPcjsQ2FoW1Bdz1JqDMu3zUj5wQqhJiDgBm3bRaxAhUpEkCUMWqJq14FX",
  "key1": "XDqm9YLKTywSpZAQnTSTCqrdDX3qvbsXaAg2jdwKxDSfNj42xiLh2hnA4EpALxgubz8TcJD92k8i9U2ePHTitTQ",
  "key2": "2HeNUQ4DPpMfZYK5uTN5xU5e9L33F9xjm8t28aNTFXoGjKvZc6ALMWHAtzdcP4gk7Gt6fCZkcTC42E1SDdCZwkgk",
  "key3": "2YxbTgTjrNgpZuw9GLN1GCEFd1TqKwaY3abpe3gwYZHFNLhAqBA23cLJ4FHaxUqHXD5QVEATrpjARnLXGR6GeFVs",
  "key4": "2dfvJJXkX5BZDPkwW7oPvqaLmfEM8sk6JJZHDZhZXGgZSbpRkJmrFECc6Ti4CvyBUv1Cf9APDrdZouqriDYyfGfy",
  "key5": "5g5eyegEuvb8UWf9kBDcmVh11RXtVVVRNew8RP7TWpskEeYeTJL69CJGfWuAsLA3cFNkszVVHehxpTPyiMN1Baho",
  "key6": "677yyA5M1D2K4WTGuhAHDNCjLufGkSPQtBAdCCSptScuTk48Ly2Fc3dQY5wADpk695zgePSNBjSQnBRfEfKB9QHT",
  "key7": "4ASWzCtw61GnPByqqtB3sCb2VR6p4i4u1Rr4dqCNmHPWDRqaicZ4vGzZmFsJrpNeJYoBAsyzp5XNe2wuMAbAiNqP",
  "key8": "59gtBFZakEqwzXk3Yh2BDg45hCJvup4b9Z6mz9eYVziLsMySkRuY2uzSfdGqc9XvR7tnH12tEG6KaiVzSgSeBa1h",
  "key9": "Z3j7KaSkxdWsu6FKLkqVpXer9kUYSme4R9TPvtWjtN4LAy5iu2VpDFqHUDDKhX8DSeuyekZwqidxNs5m2r9ZXeZ",
  "key10": "3SmcyLCBXGoZfnCr9vMTC83R4zPa6pSmYjAQ8gSWHfLsYBBaaCfwmN8jccR3UZUjWC3nZbDULRdxApEWdpqHivaf",
  "key11": "2KXjReUkfZjpZtuMVJ6RGiXgMFAdvmNhHswmUoM12bMjKUskX7j9tDjX4uzd813mr5rrqN5PgC3Z8eEoUJCiYfAZ",
  "key12": "5eXSEkEe1aYDkd9BiEKF8L8BwQDVsA2cbdCXRTbiUvP2FzSuf2nnhkvhZ2uqPbaKsG5HneKg6XznCNqHjPL52pKQ",
  "key13": "P1A7oX4v8TtS5ULP4LHaV7sAQKvRk5LZ3d8MbzmBhu9knH2rMKySaBtmh4vnQbwgBAUEoS6wrEraLXGKdmoRozo",
  "key14": "3SEijSqnongzggMAfamquA2JhAffbyvDZYnSnTEhF4oC6GuqkCAnh4R6MAD1pCBbNzdhX6McE9ZHEP6kCvx6csZG",
  "key15": "5PtvDKFaWqZSSpRpPpYncAUrtHC66asxURtKTRaq5mJkGSzSUDh6d94a9b2uiMjhHQ77XDaDV7Y1ZVBxD6qDBku2",
  "key16": "jj3vVgM1PbKBZdpVGBtVm9YWBPZ4BJwwqKfbDk7JHiPyrFEbTt9CTF4Gyczk1tTmr2oRgqUNSXwibEHs6dE1ufU",
  "key17": "nQmwXJtqmqKwhVUMvxnSmia9A5q8prhVNyJ3SPPS91YnuVWk87AVfyBLm9m2dRifNgj639zrC4shpLTyj4YrjuV",
  "key18": "3vqs2zWjqJua7ednpeC85UQpQUqgAV2hv6HsgzYHL6EnmPubtxYP48vPFZZ7JCDycvtC3xRd2Gxt4EkYChyuZmqe",
  "key19": "FmheUvyvB42aUR7t1UuVZ9SNyXAZpw7Eydm9orMnSHD8hQ5NFhwbgKWrxkehKMpU6t8JFXkUWLHPjTmLxudZiri",
  "key20": "2BteZhveMW4N4oHhLL86XMKUtGkV6qFz4gsf6XtwAmP7pvkSDJHWNHjsGDzyWTjdkKkJBHGpT6eqQ52bx6h4J3Y7",
  "key21": "4HEGS6rtdqAU7RHKYnzuDBE8znjdosjpFu4aDi7PzPJQt7Z98srdtupg731KRdQ5su2bumxjVwJtddJn394WR6M9",
  "key22": "2pAa5nBmvNQuLgSZW8gvGzYcB3PYdoBcKTAFFCPsS2DDFExfTSihXvkSizk44G6yRceaBoD7T6Y96g5TEp2tZa5V",
  "key23": "3XxwvtnxpP93rNyfWjhZQzx5RYWW5tfbySsRfdLz2iCjmpeRZ9U9o3e4E8nC7wb3UBNmzRQnR5HdbE43sdF4dUwz",
  "key24": "367K86TrDz2DWnL7hFevU8jrgE8njfmQ1SGHBTBKQNM8L3rgb53qbtM7qMfUFwSWW3pApnYpamrTFPRxu2ormbkJ",
  "key25": "36xbBrQyfChnSyj5E7qWwprLCLZg2qjANm7ncZH162EHQaq8D35zZTWHPyyjFnsoDTB9ch7pxLs99BbRCjBwsSuo",
  "key26": "3jDtnoR9AtFFqYxJd8zN4Qpy5CtFud9r1EpiVLuGtwXWf6GN6gY3ZKpzXUZ3ZVKrnL2tvDAnJNZEfo1zA4frn3mg",
  "key27": "2n7jc276TSjsq7hjDPGKPiZPryY9T83DD3bgi11sUD7QrdhH6M1JYXWrw27R9r41pz4nrDnRfzusjqe4gAC5e3gm",
  "key28": "2d6cuqLXEGZ7uQq1ZMVwbMvaA1CmJdswAJYjCWrEf3jSr2eT2fNFmGkvcG6he1URJgb1pWrkFA2QWY8KGakoKeMi",
  "key29": "2ExauKjf9LYoeqPJ2cQiFX6GBLXCZ9M3ZbNRJVjzXEw246tu8ZbxNfu1SYxxXiYGjzrWP7Eh5iuSgo7r8vfQgWHU",
  "key30": "4HTwzNTJSnmA6Yy4v5TnasbZe2261AE1G9mhtfVJ4vXqiwq6so7bJaiAHUhArwJCLa6Pxj3RZWWx5G67s4YdmDLt",
  "key31": "3MDxd9koGhU63Kknkc6Hh1bznwubAddYP5choDQGoL7j1bUsLQoesXeq613Xy51kKbvS524FYPf3TfUKCGczcP11",
  "key32": "121J9NzCq8FJ9axABERh5csfy1m4Rm4qB5nqMTMvtjjzikZydD8gcGEzmqsY4oFfrv8siUnvicoDMtvFf9enw96c",
  "key33": "2UjBmAT9wcNrn7NHiAhz5WpfH6mtPgZJE2JfZ3SL7DSm3ihSqM7vaqdaJ8TGUT4bnRGaP7ukinKZiM3ju3zuXhFg",
  "key34": "2NwPLTanr6zyVpPWp6LgMQoErEYVmG4bFEXW5Qdyy7ie8UujLFH6LBvZ1T7YuAZnapAJd7gSHPJ5FNMyr5hcumRW",
  "key35": "4ziNDSFrsADTHvvLX1fkYU5UVbrbGbwcPoqXjnGwmTwuXi1DR3V6xz5GUNucD39EzgkudecKxUGWYCE9nKGP81KB",
  "key36": "2rhBWH723hvPicbjrAQ8pZwvwEMuk6boRATwrngR1rznQNH4yqAVDMPxoz8nDUhLVssrmhuCv3DuYGy8fjb5aR1L",
  "key37": "5X9kkRrQ8tS69CHFZb62UT2SpHEvxME8TD7ZcmNdC9Ke972Es5MFzHUiYJTUo86MunRm2SHHuaqHwZhVd1KigHu4",
  "key38": "2QMJkdji6sWzgXp9aJuwD1Q6Dw34emfsBB8wUZD2B3gpEw9CzAo9q6m6qhZd7tWKRBpgVEV2oJoSaRtG4HwD7vmT",
  "key39": "dYCMSXdT5H3LfXC3ZUyJm5XW7LW2cbfw5hSrP87CEf7JAAxQsqwQXocgyTBYqeYAePAUm6HwSVmJe3ZQudA22rh",
  "key40": "4e1C9TvRVnmg8YAxR9wcHjbxTSWnZ2yAyyHgTdG1dx7EVVWuQ9B6Bo8ohbNgzXGwbdbAD6LfbxboqMVUyrMGG5Qy",
  "key41": "4jPXWHMPvhhVPPRVJqjTWBw8ZnM2RRsyHk6iaUM5KdzPEChW9SUsavxTuxcJeWCrmqQHcUVY6rWFVowwqAmqPB4w",
  "key42": "3fVXUCmPZmvuWao9edSU2o2ooPo73UxcUJc6KJFtytrHQvvXLivpqdHUjXvepLpDwKrGbkForTFFUGKvdH7gY3iG",
  "key43": "3SyZeqSmd5FmX6T4CAvJG1LtcYEtcbj6nxEuRBjH6JyqTSEQunEcopEfRLduBDh3CF1df1JqKKJ7GcEx8mELQvEZ",
  "key44": "55Ayc8aHjTYmxbeVMLAVo7uxTbf2ZmUjJH6CDTNFh2GSQ6dAWCs5qcZKut3CtszC4JFGmKdTTRaBioJw3Sg8QnEt",
  "key45": "59d1SGuMHkJCSSEeScEkVVLo45dTYV286aNmxmwkCgrtFFtCRoFB3Rk5iALSyPcxgtz57sCbU4hQs2ktLdpFr7cs",
  "key46": "34Bs53bgMURc7gRZVrMSj8FyJWPQrV8eCGm43MHpRwnKdGECLaBuJ2TK9XoczkbURqsKRaPCWYZg6YCj1d5SzmbM"
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
