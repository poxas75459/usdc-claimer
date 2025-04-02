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
    "3sdf8hzgdu9gqxh9LWoWbpHREz7QWCXWTfQrGXbdj1bWHuFbTirQR4D7b58gQswm2B72TYiFf96kKGokt7uNu71V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQkz8rwXavzxoH4twyUVT9DuaxhNGcjmhExJ1WVWGFduRRZU8vYfr651fQP7hMjdA12DoPvMYoFXrcDAGc3xYfY",
  "key1": "65zdQbLmeV3vouSEEDgco6Gy65gxmxxERhGaw2rMmg37TaPxA9QxdhrGbHH8nYtDKwifZkFMtFCfZDHv8K5ihKEF",
  "key2": "3ACxvCTCytoN3MEJMmuoSGmvw8vMJzk5e6xzZbCo1GxuP9318cqDkntq3SbxUETYx7w1G612sDj6PDWse2p3qr3v",
  "key3": "2Jwysp9bV2mr7rucQLvihd6x5AMDPUbJ4XJ6KdLqqwkdicLvVCPQ15DJFPjMuhifUw2STFmY1QpzCJqb6Nft7N7N",
  "key4": "3JBzCxXQsr7Q5jP8iCVsuWC3gbaLRAu5y8Qw6jTT46SJeoztPKG2o31UWKmKL7HwTWXLhm3qEUQ9YKKFDr7ue5sv",
  "key5": "3ySzLfYMMynuFk7rK7ex3B91keXbHLrSgtfZqkkbkgPG8F6BeVQjRCgF5K3ioa6UgwvVmpA1nB2CFAaZTThU9cx4",
  "key6": "3Bmq7HzHdnS5nAUYS3poSxFBsbxzTmydNunBHxXCS7rEuPnSr3VKgovhFLNw2x8NpH84zvFCy6VfPf6MGoqkpD5b",
  "key7": "TA8L9WqxFPyV9RC2h1ocvxCLGV7YWhR11MLuv7pJaYEAuwsRwxiMijFnuB9xJZPDCHwByffxAdkVC3v8My6siom",
  "key8": "3V1o8HSEtd7FKMPgasiX3uiMqx1fJ524sYM4aUPUXhm5cFZLeqX3GhECFpUyRj1VNgdJvRupnM9tV7esn1EdJpMp",
  "key9": "ymgAQFQcXYpS3aMJ14qDR25FzqAPdiYYzLvPZrKEQzXb2HkWBsMqPgiZ7wJEbw2yG9HqZ4P7Kgj3vt2aaiDHkoq",
  "key10": "3nHF3uAM3sUrwvMVsUKxkTQCS3NQtpF3JLy1Cjdc3zUbeZUyT2BM7e1ro3xUSeqzdLhLMZbCURsU9s9L5WbYfPMW",
  "key11": "9oFaMC8WRRbUNRn1WKqdXv5217BfjSsf6kArPoPpHkRMqNcmDNQNNq5KF4MAUPvBn4bdbrcf6Nf6JNGSKubn3jk",
  "key12": "2zdDvo9hoSyzbynteXeYcEWrMj7GH5sptjgvkUdtCKR25utKyKDrfPSwZBEaSzfWfDXCm2DZ3nLR6HYn4pJh4rtx",
  "key13": "65busHXqaMPq9eKtHGMhJs5YgigssEj94PBrCrowaDZXnQMQFcbCiuAmkzqnCpmyzHL8gXqFtqRWiqCRK7s3g6BX",
  "key14": "2qWMo8C4jwSdiuN1jjVVujvJs964Syz2SbLaAZSYYkE52Csrbc8z7bPhjcrHTjczuCePDzxufNRyZ4DzaSthztkg",
  "key15": "2TJXwkhcKUv9QnQ8LCbWNp5CS7zAR7CgaNrfPi4qbTmr78CQ7CAfFPjf9QCENBo5Jsn61HLDW46fMKHMGC4vvQ3X",
  "key16": "3zUaVkX9tfGHn8LHEpJY6KKmnBofE3TwqYjcWP8a53H93FenTAtJDcALz61p5KAuD1jYTr6jaKWuGc4YUrs6uJUp",
  "key17": "5BVhzStzQD5tyBorpkwEgrYnzDYrHJ6D7bNW7WD3M4b7vv4cpGB4ij676LmBNAA1sXseSV93L233JGvA4xM4xDsL",
  "key18": "2PBjZVwjzfGkGUJSyCdfi9erjxGYHZFHuD2RZsKmXfpEeUbXjjmncL4KNsL5T5kMnZon3HxfP6JXxRyY3PkLv3Su",
  "key19": "AMrxkbB1gKrMiGbDCTxKHR3n6jNXcHvG2SjT3dL48LzPtq6p4qgf7Wpu5BKuTXBTH7Hdz9BgDoLk8dDDrBvcQQG",
  "key20": "3hNhcPC7KVzreYwSfpSiwhfx4f2KpTcr7na9ut2wH3CkRN9UWDpYb8jRSaDyRx6Qye9u6m5r2dbgvdzUi1hgft9i",
  "key21": "2oEWi9f5hPT8sTQ9KZnQ3CM5XaRbAWTKKtPd1po1eVcskTzCPxpiU8JjxC3S7AWn4cdik5ovtF5Dwuf8W5H8frov",
  "key22": "V4Lwo4Ag9UGwzeamHcD3Fsfmjfxq4bTugVDfByhiSfd6qdZxUdtmmY1TvZ3FTeJbaggzFZPM7miUaBxq2VzCurQ",
  "key23": "36RNLFBmkhat5bd8HNcaKioYbGDFc9TDmttszvre6EPrPdFLdvXzzYocx4YrgEgmP6uf44ZquS75ehoA9h9fwuH1",
  "key24": "4S7dU8kkWAyX8P7c8McMpN6ExZrh6UEZXNXD8R5XvgrwCxmMPGBTj7pv78fi46GdSkHGqMYUipMVR3tzbouCeNuB",
  "key25": "5sWx5i3T92ervMD5YYW5dnbPsNygRVbdK4fdufjjGtnLTjw2eK8PsfjE5WRoHxpn9pkFCxtvr1cEx15tixNa7Ny5",
  "key26": "2oRJUMtSHUxAn9M3w4NDDnQkNZJBTaYt3uvqHNsCtK79yzYGxHeDZeANRXR6WZTT2qE7yBWHqQorSWtmuzn4KdRL",
  "key27": "2rWe1ix7Bmrz4sjAdPjoz3fqYEuoRzPRQ6GFF6An72uT7mUFvAMm2uDiGzJh9CeM9B1qSocZSg5eLFdU8b32Z1j",
  "key28": "4DKckNvbnvG8TekstxNcDa5kBSP4hMGTChCFtUG2nzH8s1v95q5CXp8zs86cm2sRDjdCJJoHLNo8X6JFrsgb52uq",
  "key29": "Ksi5GpFn6q6AsR7HSJrw2f6BNtX39qHHHTvhfX8SEsw3HQgJzReihKTa5DzENC6f9crdnrC4SZgtQoDsjfkwPvB",
  "key30": "2vrZVsdk9LJdBqoCikqcnZX5sPYHRSYVeNinhuwdN8gYyoUXfHaakbH5byLqMEqMrHcxKAV3rr5TpZGJjofmKycT",
  "key31": "3m5qjKMxhCaZQeSr4xkD4HBoWT9AtHvteMdmzbL259Ryww3GaVzXBL129n5wHiphtDZE2cBk2uerJDSqtcWrVU1Y",
  "key32": "5gLjK6pe4XZkV6xdR5SVzbNQULC7eXBTXwAhM6GhPAMcYiG6QT1aeXNRpSsgGmNDTavgQ5ABKwp3MWJWg6WPCXg8",
  "key33": "5DvQEmVQx7Qnq5TSe1MnJGxU5qgf2JbTf7kfnRahHBpF5mEJw4hQTJ5GZL8LyJsAwFsY3xYNFy8eUFZ82qCQA8s6",
  "key34": "4C1pG9QKLuECXL5wsZydcYrmE2jn2jXQSMBpxiCDK8qrVdeziVdH2QCuUf4bVDsvkpfNThn3wVRdgq8kCCUHq6gG",
  "key35": "5GhQKBxvDkbvsAMB6nU893z1ZWAJmuCru6HvJxxLpUzJKx4zzw978rHDuuEgQS6hYiDH24KfJZLdrPT7wMXKREs3",
  "key36": "2Pf7tY7ZZJUjdgpDXiX7cA6ghrAvN8dMnSy78jabZdeRy29J8Y1nCZmfK5sB3SwA7VYzqjdy7Pg27huMWAuQ6by5",
  "key37": "3C6TkyjxK51ASaz5dvj1TkEMUdP6SrGtL6sxT3goLSYSpSgbiYBTew3UbwqCCz8CoaA7EpxAqmQp3K29rtzZeXBc",
  "key38": "3JKnR2XvLpv3gJYGhfaPMsyK52V3UbWF7wiz7AZrV3wm7paf9nB81JxoETGLMq91KVMBjhEzAUWUxHAQfXJjvWkz",
  "key39": "48pVGStAnPsyQuaHUDbCGu9imXSssg1cXChuah4THynqfVz5vLwedKrSiB41RfvDSfFZB8arAPNVwWy9BstxqK8X",
  "key40": "5snLXqkAyErBDBhGEHHt5sYCXYSqESYvHf6Jz4Mupe5FHcGtRHWk43E6pyqAfoeAxpoVyTEka1h4d8SbZ2dPvQTr",
  "key41": "4py97AxAVuB8syoNFnMc6fipbNjkBpyWcD5crRcTRNi7yVERuAwoSn82oHj78QYLbGeS7oFSKW8jdHUSL3noLP7p",
  "key42": "3EhxBiY9WenkjTiqy5vmSF4Qw4U4h3Ng3Nz8wyYUR3PegNvncHDBpna8pyjv3ch428QP1xPdathbURoFHRVH65jt",
  "key43": "AjvReT1iGBCVKq2RNqd6v9CM4drd1SxSqKkT7Z1Q8RpPWtBfVTx8Lyaad7vP5i2CnX2WiqfAqRo27rD3VJ4W9n2",
  "key44": "5QcZEfyemm3672XEhPwRN1CRFpCfdDLFcsuA6arPAYsGpyQNyi2LG4gXHkajUFZSWxgG2NRqM8q18e5kFPK8JTh4",
  "key45": "45QnnBTKGVGG9hY7N4KCYNbRGbuCutEMPfPvKyxV4XYDHtvPhwDFYuXwqwdvyLrWLU1qu7oGt7vqUZc1vyBPuiew"
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
