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
    "4myZKugWX7QKh9kNH54cThzqiBLfn2KYF7MyZfHkeYvCiy5LZFfJhhyEgFx2gYwgxDi8AgQEPXC3uveZYTq9CduW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2KCaWYRBX4heh4j9u1Ru7rDUFTKmuMQz7FH6tQNQwLq6htvxQUet2NdMxKd7bzt2yLMuUf167jDj6wyvQURUE3",
  "key1": "45kGMMYB7mMfna4sP9JYqjiQnzoCeqmcVwpeatJCuHS9rvBK6eu7BhLcLGEDq7Q99QDSi2Uz33Nb6kMtYNCFyrv2",
  "key2": "2a6wLnSV4vjWeXykdu8TF3efT4D2qnHLQxhgJpzuu6EnEFsTPuJqjUzzvBhTJ86gNeJmFE598Zg4XdCHntahthAy",
  "key3": "5v74HZGrL3vdqZf1bmuNn5iZW2QttjZkEXkhyyE4kVfSTAcxCcyKGWk18tbjSYwnfWt1fhyds1m2RYuczYCY6yHh",
  "key4": "wPuBbeeSqPVLWiMqYJsmjcjyq5q6JfqHKNwToVdPLLm9UXDCQCbNVq7uduGLW1T9YaAzUFs9HxjTBHkabkUeH4X",
  "key5": "3dPuhQCG6KKMuQeSHu5bGB4t4UVkL1x84ZBnmopPNFD32w8u3Q7QqNxmDtsGK4aFhb3SjknccPzs6BE6MW6rLGgr",
  "key6": "2ntpWVX3JWygfFmaqKhRXsx3omQDfSmGixUCa7T6awhJLqWDwf9bnVZ162WXk6BHM3GZc9bRp9upmWQoW3xcFYH9",
  "key7": "47yCRibcA6mGs5eXmAZ8AJfHzPs5N4VawZsMLKLj12dXEapzvj8E9G72brU1pu3SBYqbuk8U47GGGpbAxQk6xZ7R",
  "key8": "5LHpj2LM2pnXrPwybuaxokRxpRAd6hpmJ9mxAHhwaVd9rQmhWzGvpincNEvp83gf8xqqny8wjTa6rPsNqvX3wimv",
  "key9": "3mBCpDcp9yWMev6TRXzDJt8yyWgsAdwRcFqKCNWVHggFsUUafyYoposmhGzTK1c9NhF6aRU3hiyUxkZ6qdsri9PH",
  "key10": "4w6YWnzA55tyGrUkzvv9RknR37ZfPyExDHzkWxZrh4aLZFbTetNSVDaMxnFD4Q4JpZvH2uqgixw6kKqgKs28qBG2",
  "key11": "2Zf1foWP9BXkbHJLrKzzrGKGzn7etWk1CHWv6NZVj6zUH63oQveMF8UsDJXXD4UfTBgsEJVsgrPLvHaq1VagyBdg",
  "key12": "3Vanq8TQdDmpD2Z6WsHWRSidGPzRsR6ihMWMR2xBT1JtYvhCJp5MHV9114kcxL7NfUJAmPtTkTTwcVGLDD7FZhVs",
  "key13": "VMsP7u7dRqYNdd1GyAqbfrtj9bH8FvDzNjAA6MYHw45XRn5QLgu7UjuknT5mRBze74zMGr42Grknb7mQvVi6JiV",
  "key14": "2zu9PHjF4GeKT4Qg28DrubNhMFoBs4f8qqUvUqbTt5inTigfxpmAEYCxM9RDzKcxnd8e349E3NFhmXLHXw5JALHE",
  "key15": "2kr8gR8zQ5wKQrnfCGUgGMe6NkjjAhYZJ5NMaA8YcEffUeKyDg2QSd7p3j3YpRXmMGUkm3XSeEq431Mw3q2kAspU",
  "key16": "25mC5M1FusRmW52GGYutf4cjYmVmmAMmW2T6wMJ1DmBm17WivUJs7K842S1qNBec1oFsBSEbveTQFUjuHm5MPP9Y",
  "key17": "2Q5btoAT1wsQ5jwYfAjCo8S9mFxk6pAAyxVC2tHAGdLMZzpMh8ma4MU7ibXD7hJQs3jrC8RABkEAHrQwhH17GuAQ",
  "key18": "5JXJxWxmiBBHiyHppDhdqS2WgDCNrz4R1Jx654z1ugXm6VHJJp1YSNd3K1KXtDiZifcurLtSn25kuj7pDHEw1yrC",
  "key19": "g3pJBunwdaLjuAQhWq4558rCRhQLNwLDdvpqwxP9xMbDJ8Ep5rgYLa4GjjYUEFXT8FbRFPF5XEoi5SdDZonAnL5",
  "key20": "3tj5tMdi4ninTL9LmQaW5bVNmEw5chczVZLmJT7cgCxoe4E6sUxjW8fAWYzNZeNkddg8QhWChJmc7x9SsRDc1FQR",
  "key21": "42Fx2NMtD3jo87MTyezT3ChbAUhv3oXe4N81LL5Qq9sZaaomghbMeRST6fSRAYx4nZ93nL95aahHVLPRTBzYVZoZ",
  "key22": "23WqeHquZUn3FxL3954YUbZmxM8axVEZDda4SaN5qVSVQBL1ZhyNtekvuk2peXwGWoLcEbXR2vYMD8z1xbm63U8R",
  "key23": "4jvJeKSTu1pUFHyBQUbCPGMELZA5n4dVZ3zxmZ6LDdxQCRAPVTdexu7hKLCR8MiRzjzTNqvEJGKkb8P1oU34TTNc",
  "key24": "2hPqz2o4AX9TRj5teibvDKt7P6F6aUwfbaKtyvVFWw6dVo1rZCoG98sTdnupEPgWhfBYzJuCRo8R9NrVkubXPsy5",
  "key25": "2gEz1fh2QbSFVmUP1mjUtA4oMAkmd2F8H9M6EkDzAQbxXFmQYPpmf2vJ17xNG8iuRZv94HFHJZ3czQofpAJgE181",
  "key26": "2sHeGm1eMxWhf3AWFguesb7PKwkV3e8gUX2TmfG2XM4CyJEcn6KNxscwtcafSHgERWxn5idGCLsLZLKXcZc9ZfRx",
  "key27": "PPSbP7tMmoftndaUB6i4MnSyoMw5YLx4g25ZQJ2ib46vRfNhR9uCznChGSfNkE8MSCsDAh6FDNNbT7j6itfs3tb",
  "key28": "4ywQqiHoNn9M5tgvTi99vTJcLmZhpYi73NV68tBgm4sBQQZ5g2EThybvMhY6PTykQm5UYyTqhuZoqm6gYS992wKE",
  "key29": "ci2WEbxFE7FBB8Wi1tANfpMC29r6aRwCpXWK2ggivFkjkUYYL1Pw6hsozmtY7seMuY2iQaNSYpBKg7uYimTjLFw",
  "key30": "4KpscWm9poZ4vqLXUrpcKZJ8t5bugwZfMR7LU2sG6A3x1nXh6TERc7ybepZsJ2vP1sR8a334rCuJAV872SaHCYXh"
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
