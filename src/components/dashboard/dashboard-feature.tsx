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
    "2MrpKsejV3AGEHyjEa4NjtK22JWrY7wDBdBN3J3mSr65TVR2WTFHxqLvAWgYU24eYYTvFqtNmHntTXcpjuSA47Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qUREMfTa1HmRj8BxRGeg9e5GnouEYBMfdLRnEh9kgBZ1WoGe9HuanTFgVvZAC2AoVkkdy17Ruag1rvkRsP5jft",
  "key1": "3CFtkN9adgdMf7HNpGnmJmfj3KB553wZxtsLrAUfKJeYagsqa7Z9N7BST4TSXkM9w5f2FSqsu3XQ6q4P8d8Wq6be",
  "key2": "4joXoFp8ddn7gYpfU3wZxuhS3k76NG11UqrtQQiqjfCZdea8kQzhubeZNtxXHAqnEB311vqatLoWBQPePP3YsCHi",
  "key3": "32tSZ4E15DdYf5NL5pz4iSH73zLdtgNWZQw1iSZo4ezhQK96Q5gibeVUmLLonBeGPnFwpApmCoiuoShP9cKgEnbz",
  "key4": "3iUn95PWGd1Ls2bDVMFpENtJDTvnDsjEYE2R1h6AUp3zadNwBnJQeDRB6QhNg3qHPti7vwn6mvCgEa1WuCeX3H8Z",
  "key5": "jBepofvRPQ6GvZ16j8VtGzMYSDEv3Dkf4PuPC3LQrnN3BmjwAus3wjGwcRPUJXU1DDf5L6akrpNNC3zxHJ35RNR",
  "key6": "4D7JNMMqS6v3RWABtMYVGSQVi9TLr7odsZD72eAHUZKfsMoArsvJF5GPgX1tVoeb5yU5t8baXrgqhfqDVCA4YLPD",
  "key7": "5MtNbG7WwMiU21Z89AmYMGHbapdURkiHGj5sD8NTcLdy73yyDMA1D74GzK87aj6wpJtjDao2BJAT5JsfLqjj9Qqm",
  "key8": "3BgtBsb6kNUHqTjYEtnbitZif23G1VFeLFt8JPKWisCUDr2k6E7ZdN82pWMDjre33quMYqK3VxmVAtsWQGqCx7Sp",
  "key9": "4zzJvYUQULpYconbnyLoGJejhCLmNRg9zQZuLbtosUCAcjyRKCDsg3C6jY2qnbsagyRBVf6B1bht7oiZjDeuWH3G",
  "key10": "2CazAuHuJLhAddo8u4x5hCPtiQgkFPuggUsvNWnctUsVg29YRAaKDHbSVEbKGW8rmbeK6mMioPh9PU8oRNRmEMco",
  "key11": "8zVNUVVFCPtwYhqicHGD61d2ALrLfv8eMTJ8n1thwY3uVASKf5oUgAmAsKZbHxrHNjJRAjSXpAGppxZ2rW95woG",
  "key12": "2XtL5Z6PszS7upUAZK3wMTFaJRCXBbbQeDKZgbYkMMzaKheowQVbJfK2RjzQ1A1g1AyHTLsWLBnjjgdM6WPuGFN8",
  "key13": "64jsJqo9HBzZmVNcThRnxg6qs7DpJCGYobFrAqVYSDi5NugKVK3xRCKpiArzP28kD2FxbC6PEEwtei7f4yJXxt9F",
  "key14": "pZWgXbDE8exwDiAhVuTWMx1SUc7M8eygR51C1XWgGit4zqC1NgzJMQb48i5PaTYoEzwzhZ1iCYwBHvETZWxUQfN",
  "key15": "5VapJrC3U6d9hpqjxGzzoZJpMbs6cnk1BzCxW1ZQjsDhQvCsTAhYwqRJVjyGjp5DdgkEa4dYvm8DHVTRnAdgcHA4",
  "key16": "3reZKczZbQdmr9vM8KwVeXe3gYMNC3ECSmyq9MD6bgcketywDziEAYVqXFgaV3aSELYuFqm4V15K6dhmkkQpYET2",
  "key17": "Gnh9HiKeAAngWaSsCsbfytCzSjtshcfeaPFb2E2nQmFHGnPTZZXQZEGAZvTUmusyubrbWQeZrts9Mpp1CuHRBjN",
  "key18": "1DGdyrxX5HWYKpHwFM5pa2T48f8GNZBZKEHV2sPSPDJ2jZdigP5zqSr5i79eQhfoFMTBoxQpbVjyvkYUaoU1Ge9",
  "key19": "2Bxkr2Bzhe3Jqraur8rjQYqaBeaSnoQMPVstc5KtL1V51TcGnTCLAGLHbtLx7cod1949YXoHNdvYLrYBe3KnHvFk",
  "key20": "3AidggT2MDrBEiHcnJLZNXRkuMzMRvWSyjuKMTGk95TEYdJDGtL7XWA7mCGF8R7NmwCBW6PBHii3JvpzUpvXqZYT",
  "key21": "39NjjLQx8hMaVhNns4Eiao5eyUBhGiRh1nHivg2WZ43FyTMJQGXerVeXpeGgnhJKmMh1UfYX2U4Jn5RTpepkniXJ",
  "key22": "4LaCKF1hVWT3egFFzjeRG3dPx9tvjKQoXKFKTtVvm5tVaxShFKGtfESy39mnpJgpBHGrVTkGUP9fcAFiKHzUy3a8",
  "key23": "3vsckAwRWxj4U6G3oWmkENcBDnqVG6RmTmYvqtWNoadKFJD7F7Pm22RiWSAeRz7guqcmtHdtJWDHcfgvJB6s49rh",
  "key24": "2wjZD7TtG2cDQzR4y3GDQGwccCAjKDnqRjm4m2aYCQy5y2FoVsf1CtuipKv2RjEUvM9cwycsfayvxifKvSH4FYb2",
  "key25": "44iTMmkCJGM8SEd1TXL7Y1PyfBBPYeN7qaVMvdP3ve1ci1pfdK7QSjh1n3CUkfsnZRwU8Xym6Y3yLRquXUG6YbBf",
  "key26": "quaKkWLCG6zHqSLfAuMoi4TdS2LDQPPmNCH1WYGWGttALKo6BdoWy8pHydKG78VfS8JJGxdJaNDp9TC6yzTsJh5",
  "key27": "3C5ejSPgbrVmahBLF5LHM7a4zQ2YXVb9ynmwfUxYZCm6SZSUbpSKxD8NCPc1L7d8SeFrkRTUar7wgScEKngRtNLX",
  "key28": "2tqfbYWCUwM8VJYNhJdEN5rPEbx4e88wS9WUAwYGF6guh1himzSyEMr7NC6kBUwoCANfrDkYDUhipaz5dB2ms6BA",
  "key29": "uSX5Mvie9yPub5WiCHWx5P8H1aDKi6SH5WcKy1MTFaxYGxnB8k7m1tswzjBxHtd8F4Ym4Z6YvJZJGa9Bh9dVN6D",
  "key30": "3ZfY6uy7gcPkUJUocu4tNaLcnJj8f78BqMtDeE8d6FNRuzufgbEbe9BTQ2RsidDbJJYEwqbJ5vfqtE1oe4U4FZKc",
  "key31": "2kGy4R6FUKH4fkmuisPjXzLiFdNZx2AAgDtN2y1aFp7cS2EmfFh8W3upUgZFJVK8PVmdLRNUeSGVtnckN7L73HXx",
  "key32": "Fw84MKEh5AZrP4dmuFKDeB73ieVZzSQjaJhw7n1D6m9ngDyBsQTxWbiELWKueYMrM29jx8PXDrPcXtQQGynZdzs",
  "key33": "4YVe1kCiEPrC5E1K7r8YcHa1SazNQHBSVnrCdRzNno8y7ViegYf7YGm969NR2ZsAdPmGvMcpXtPXNnjoiYpH1Btr",
  "key34": "wVFkgwEHFhFXY9TNm8SfCTpu4pVQzX5gUks34aD99Ahtz3F6swLY71ir3Mgsx6jshUHv4DjBkARamzGE8u89Cd4",
  "key35": "5YejgJsioAAG4qm4k3btHk3c5CK658fUWyFHjh9F3EDa67bUhPeX9yNd39Svy4nGe5ZLThaEx5BAq5fsq8S7CeSD"
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
