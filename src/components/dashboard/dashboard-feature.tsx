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
    "5SsopQLXjRrKCbbbWCfrTf4KZPVz5FQHKeDckMxyhZRV1jiCU5zQsrpbSWtMeV7GmenoFYU2j3ibzdrUxTpkdp3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K6wpCkmqcv9goU3wh6bKx4GnQrM9do5JwUpiHtosNPER2iUev3hktKVpPowvHmdKDKiLGTQRLw4mkANiM7WAf8n",
  "key1": "7sjJvfMYXWbENWfP3XaRX1tsSYfQg5TEbZgg1r6X78R4KeGd64zCwtt9aFsaUVuPthZJsVEdqxwRdSxLnLNLo2c",
  "key2": "2yecXxfc9EBeqn3L5hhGTucQc8sMXmsQXCahAeHKuss1QTCXyta5r7duzKsqY53DwkocFRD2jkRiZJUmU1xDsbR9",
  "key3": "JQEiktTff5a1JjiWdnfyGNd5US3o1gJi5DAE2mq9ard56FdMWVi8p798dY1qr3DpwgaT7DgYnTTiUp2z6gDWRyC",
  "key4": "3ioMDVRFULSHFZrr8QBDzjWwUT7qxnbCTJYE6Ww3Hky6bpCemXa4v2bZdPgQnk3aBEG4moquARSZqG9VH9aGZj55",
  "key5": "aEZq3JPWUVjMBc1TJTqHdSZyTBZfnWTjEUscUe3fdH2HE1EH9wzHR9Batj8wkBqfpCCvjm7GEWCDDULM2hv36VS",
  "key6": "396orGbg5uLp1xMJjpRZeiQXJnfAgYYGkeR1EiiwxMq1n2Ji287SDmqfrkNsuiJjZXPhKGgnHMm12q8Fnq19WgMF",
  "key7": "2TEBMi1AcojEscWC88csFoARvJNxMi6mFrXByUpqdKipioyMymvq5yTXbqXFmuN1NodUY98nZVRXHyoorniGAxd5",
  "key8": "3vn32y371g2aZELRAeu9yZZhPH4Z5Sw5NFxViHtXxyr3UH8RmiUaT85PSwFydzaqv9SCY1eJQdv6LavC2RACrYyH",
  "key9": "4v17e8qRMz3ULRMpkGGBUtLuSp8PBg6mtiUqHvNzjBm8X3xV8zZRM25zoKbNbDxGaHM1jrrsdpx3nHrnZRRRTsG6",
  "key10": "4erssYzkbuAewKnfF6ZFdukfctJv7xZ3FmkKQR7CZdWvXGZNuQtaGkToFX9aZcSTi8LQgaeqzZWEdM5FxJCksr8b",
  "key11": "2z9upgVZGQFR1RMYYoHhaviYoQKTVTAwfC3tMEBPphePEe2oV5B12fjbWQaHT5BZ1g9EM48uTDsfBySSyZyoJG7c",
  "key12": "414mVFVnX53xu9xcWkEC47fj9TVRsdZevGFmkpCWAuhTq6yWy7Fd6CgyCi5uRyZKrXjNbwzHsKnkX63SHZaTZStM",
  "key13": "3SEMVv39gHG9RErdfGWKuJkNz4bSXtJAPYjWSJ9Gsqq1dumR5GUsW55gEMjxbTh5csS5x5TUBLrvAZvwuWkc28gQ",
  "key14": "5dLsgqjH63LvQFp2nn7wNXtMd7iGDBewNRXfc4BfaKGczX2RZ7DmkM5nN65XHVTec4yrCAayBhqZL3z4vf5zsAWU",
  "key15": "2N8DtLMvK2BdG5nz3MJcakxtGL7TgcKhQsCsQkxCX7syRGKd7FL5MRLM2GenRnQxRZEfDCSzB2As2AiAELbbDDdo",
  "key16": "4i2xbr8nyAKAG46Nwm22DfnR1fZu8wEUszZVswvEcampdVHCyhxwCek77emmr2nFBZPciKzYBbbnkD1Gt8B5beYC",
  "key17": "5bFFAUUa5hVRt5ymbfedE4oRcSn3MdzM1PWpo4chKv8HQEL1f1ftpjgXfZLyDF7gDdb7891UeDbPSYmeRGtFWd6C",
  "key18": "5u7uzMskFbnsvsgjRrS8xEtMSiUhcnaNgy5pUZUW5gFEwNfFj9tVYa8Xn1o1i3pot8U9CYp7ZQj2VdvpuYdhzvN",
  "key19": "3brorV4d8M2RqWxgpiS4UPq78netfbaDKg3XwKhik76J1toTMT2wQhuH6cjbpjkF3MG4XUdCvdUgt7JToHdGKvkA",
  "key20": "4crNETkVjY8pTLkpQboGVpYzM8ybaoj6QDLxnRjWWQwNjntR3Wms2Kz9JH13jEh8ga9wnkpCAQwRtFovNRtY4BzQ",
  "key21": "3D2VDwkrGeWatUt771CDs4SFUvtsotLX1X17fs2quvpw9WQKDfRJZnVUsrFiwst9LJhNEvV1XnqTinQh7hCduJ94",
  "key22": "3iqQvqTtt9kXa2xqwmnX1pRKLrYcDN5jSosvnGWiPoU2KPKyJP9hKBUtc8MbNgoz8Q6FznpU1HpLKHH9CZmzgqKC",
  "key23": "5BUDnLJW3EWREE3J3QkRCceD7SJvUcX6gkAHnoc9sw5juQQRGwsJnA9rMtg9XXPHzp4dzjtofq3SDQGaWGtoMjLe",
  "key24": "ZgNarnouLy7HAksV357VhRiTGhEjomJPnL1CmALS3U8cXgNa57YDxuUT7ec99S3SC82kQHvTF1JCCbKL1z7h7vB"
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
