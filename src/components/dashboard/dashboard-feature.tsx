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
    "4MZhDLb5Eeah9ry1fsd89JSiLDKoShXMGSErnoB7hEqQnxAT4F1EiwwknpMZQxrSBNZ3T966DLYapxha2aTAW6zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTkGbBSo1DQxXvwKF8V18RrSB3GfQ6xhWTfCvTXC5ecU5gmb3p1oW177iHgPtDxHaaHRUUDLAyNHPEuiyyqP8N4",
  "key1": "3T24EwroWtP5qReszM9YLBm9zmCKw6pPA4VPaj1ugD7RYFa53C4ToxiwSS1RB96hMwYr5Pw2vQFVS9VnFCdLmFP1",
  "key2": "55bVSRdDisQfs4d7nLWLrCBJYToYVr3WbTgeeVBg3tty2vhpjrXkK2Gb75gfnk76F5Cixvq5uWnUQpQQ1yPuNgmn",
  "key3": "GJx7zZKB4uiZ9X6wmxzvPvULQurxe5ZzhQgJGBfjW3gR7if4ZYDzKwr2eWWKbbzHWQnZSVLkhta7UombzDGU1RF",
  "key4": "3iKkHVVemMJF5eBdpT44eZD6QgHCfXoWbv3qYZCG7VD5dGbfMCAeupLQfBeGyWx9fPdpWEKqhHQiFkKPBaUoZuP5",
  "key5": "3fcNjYvxFwpR2cBxUPtBKZVvfqexcs7pDzqTrkRVTaiYKUCibr13RwGf9pWHM4wyrWRiDNeWxUkVPf5Wb1RSxjtH",
  "key6": "YpkwRMEpFXtZQGRTagS9p5EN1abnKBtc6FPiLzVWZKKZiuBJCo3C1TXWJo2D6gFdtH2uTsvibjNqVnkAEd7EX1m",
  "key7": "pX1vgpXvVLSmLt7rg24DkWM9DyqrwHKUi7FyZK9d48zxEYcwL4pRRejaN4NsQAzf9ZSNTujttRGtV3JP7E1MGAc",
  "key8": "3cUUBwnBNj3uQUNuQTHNWFrhXBBrvtFKjDh5uN1nYnvQyiaJoMPQ8LcnEm1QSLSQphcunMtL1w7TnSsAzWMes8yr",
  "key9": "vey7PjAZL5iXBHUdLSKy4JXVMo9AY1h8B2oneWyh1n8er2QA1zGsLBpVJ5KSvuePmHeLYyTfcLDyBN7bZs9WzeY",
  "key10": "2iPNHWCiewa5J1cTYLk6yJbSmdALad8veWEXeViC5GXkcdNpN9oRkZ348UrSN8WZm2dQtAkmVdodxn47iNQbZRgx",
  "key11": "WwHVV1UQbBwE3aWx44rk7P31KBNCmZPM2NqNGtCGBxfo3dnUTWdxhNhMLxUAmjgzyH3L9oSe4aWECvx55ZgbqYt",
  "key12": "67jVyJnTL2RnVjAvL4p1iCAAQ4s6EB8fLUkc9W4Tz46Kzji8x9d8JrTBpuNEZpvefwtMLCw24rcSGvfD1SdxYWzY",
  "key13": "2iQ5cSwA93eTydjKm9eY8gHyV3sXg6ze8X98TfmZ7xCACKLdaFZpePjfirGmRVyhTbWrVrBK4FMakebmU2mBYhD",
  "key14": "ruEzt8VGwGTvWpWpuUKdJ9FNDo53AEkPxKC6w82rF8KbWDGshAhCm5fC7VmzRicqfK3sVcgWpPTFCsDwDjQbLDW",
  "key15": "dyUyUWqRweJZguojC6siiC9s9ui15mPve2zKCHZHgJrKuzrXhifa5BzysdzxSojr67erQq6YMuXU5DuNQR7Ccjx",
  "key16": "3snw8MMTT1oKhzyy4V6Ka2VZdvZGK1MdD4QyCQnD5tZrRbL8TTSEa7fQpNrbWj8uGz415k4SHzHDXChW9XTAhvzq",
  "key17": "4bkZvuxM5fDKeT6rC1WEFAqW8QPX5GD1dvuaezR5ypjT6w13EpZkSzyqsxAArG89N6NnLPKixep8gLGW3JUDd1Da",
  "key18": "5oBTrDsCRNkWXiDe3MeRPcNuFCkmrkX4yvx9HT2vNfSjhNcHoUxLUU3wSbnmAbt6deqifR3DCU1U54yTYpF1jz3z",
  "key19": "2v2zskn5PXYZH8Nxps347CmSdCGtkRT85WXbJmdS2Ygj9RL3nXitwfPXPZrwcoFLhCS9eSFsKA8cADBa1PktTHXK",
  "key20": "4VLwTzAhha5ewm7iM5YY6b1cXyybka3FP38LDuhFnpMJmLBmZ4ksApydFbcbdEmJfNxvQQ4cMYq3JFiQBfK4obGK",
  "key21": "2G22r2SXrCt24R28zKAG1FR3ktYJYdDpcdKee4DEpNYz6S9RNoyw38F5vzu6fwzev1941dgu6Xps7Y1fmNxjRDLD",
  "key22": "Q6taYTr2VXKceE7fqkyfya7BZaFKiK7wRGmyr7dW81RpVHxQwnwY4S5Pwnf62VAWJahDRKYt9sTKj9YAQ8dcSH5",
  "key23": "2cDw7DL4yUazYYFQryNKjQGr5hCRDJwyeYtvHSyMbmzGzHtztRk2iLvCe3GgK3jLcrJXgyrp7BRujQjTYEAEeRLX",
  "key24": "2HdcTBwJJUKYjRthCPdbZRSEfPxqEnMMUWzDi3i9wPQspdsUyREwRk5tHmLpEUUsKVduLT8cR6J9iC2fNGzEjTJB",
  "key25": "5cSfEmQHxUUW3ajjNbryJZVot22pW7DydSVVvwDAVkV3HRsgcFoKQ5FcdEDVUMwMCyc3HL45JX7XGNEp5NyncW6H",
  "key26": "4KmMGErzPV1VWCyfhspLNi5z26drEdGfrXJrAPizcQz93dq5SYUwYUUVJyRyp4WZNcijkiLkuNzqbganZhnLjdgx"
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
