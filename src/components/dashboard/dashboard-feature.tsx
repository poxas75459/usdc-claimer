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
    "2MUmdf17yzF5s2ofBC1wUhgrNtLFEqWYp6ZgxWPbwvZT9Fiw5gUe9wmaX4VpCcUfR1md7MtfDiAkYvTiyehHr97P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123Mqp8sV8mPZeJ3dLLuyMS8qhwdD6KsdyZG49Spz2GzNV7YZQuQyXc56H6uH7nMTEuHqdhFkDPSj259r1FF6Vgm",
  "key1": "57GwwT8ihFsiHg1qmJU93qQj5kGER4iDWoX6xoFSSgzJ7YAfsdsXpTd2BzE97LYgGSXNCEXfgFcM7x2M4BQSucCQ",
  "key2": "5r1TjyTJmKWs37MRKQLNp1nCvHg2gsLStp7Ky28ydDEmwmH5vtfHcuxCwxFRWSqey7Wupj1ntzQcPJHchgpNdxa5",
  "key3": "4sP6PLxjS2nV7fDHgXGmbkoxVm1z6vNbt2mbv9XuJGQT5sdfSvXfVffBbcx9KNBdPMSBmgmaydmSeWpwNDk6oigY",
  "key4": "5rDnq7HUM63CgQ7QsipjuBUTeL2QbofAKuLv7HANRDezS7eyKKS4xfT5XPzfRoAuhoAgDKLLWBSvpAPSauqarKf8",
  "key5": "3WQnAUkF5KQ5ugu1NC13HWJE9VwRcJhz1uVuEV1Hzfo1ZzzG1LuEXHE7C9rmEcCJMz5VbpevXoQGLXBMaPL8smEB",
  "key6": "2cYksZQr5g1BX8DAcJ5wNzumrtfv7cXyfNRpiYtA6hoWEUzozwCMgcyogeQTFsyPXwh3YDEFXRQ5eFNeMud2HwE2",
  "key7": "3HSs5hXJz9Ukeu2R1mYNCgkxY53dPymzAkEVyMbwcBmJNaDDx4mXMR16GvwS1NguqgwZSeyKaT3FZ7iguY5aUqTe",
  "key8": "3N8vpP4MEZ7k98MsF4yKArynH7y697FqfyC8XSft74HNpXaxfshi6cnGyThwrLG2xQvK8PcTy2iNNhWSWjFDTixK",
  "key9": "5cfbyctohj2fZ8UYVTECDtpMY6j3SwgQxrcGdVEvjMPGep35wDMqLaBVBUmDDjSmjasRg4nWxxJqmzBCNJfKooZ6",
  "key10": "2rFZzpUduyFvm5HfY4KSGkBTiNXM2W5nBMxPwxvXuEZsYRcNSKCNn8daJazWA76dZPSWaqPjmVyPuEbN2qHg9jLW",
  "key11": "jioRBKGiZGB4cNyTjdSViTz69BoQAs81izeeezjtcASrAcstjFNUrVKDY47994KYCxgnY6V1ekQ8CXVSPkhiZUm",
  "key12": "3VLRETLtaLNJ13tDzeCz7bZWYoe63tQaqjkQLyFhEcr38fu1ebcMWo4zA8XJ6AVeXxoAmrcbURTVG8S9eVMNAQJC",
  "key13": "4ZV1y5NcQ7yUnGuymbRsGqNL8dDHD3ErBwarq2othyMwhWEqrRG4qCrQu2rQdd7vPQCR2c3Z7DavoJ1bVLxLp6j8",
  "key14": "2GhwGJbHUQF2QjKwNeXsVeTy1yasANZKH8dr8GZ4wPzNSWSMDFLiziKKHvBaWcU5Khg8CedFMuYhSH8DXQTBepjN",
  "key15": "5fh9JbyxZqtnPwV1rb31FwbasMqUptWRrZwzU1hPZLespBc4aPBnyh3shwfoMpv6xk2ABu3EoPUV4TvoPsQTQKWU",
  "key16": "43GvBEXxSFVirTcTissVNYXwYhPJQqRKEVDqCP4yiP2s3XmSUDKGL83QvXhE5xLmjMbNy591Eg8RiNDDUPXPuWXJ",
  "key17": "ypzfxWSdFHBV5RXVxebeeMFwjkQGKnWWAgghzgkZthUCBupWv7xmfPbT6ppssvmacgGiDcwdWY3NjKQr1U2ftn8",
  "key18": "4Va5NN5NV5PPyT1UREVyU7e3NgTPAFkWE9aKL54m9WeT3RVX8dUaPJCk5PLuDnCHUrNWjmmc5UWXp3fp3SuMWted",
  "key19": "27RzKiaa6TurJssVcDbG7WWBSaD64UMBGy2dE1UtLc9Zqj4jCWPg6zdxr1GXmWPnFQRTJW6jxw9nPVEpg4rPXriP",
  "key20": "7WjGhZYLm7gFQTwJNvvidH7rKRwNrNrJRawK5K7XqfQjxAhNA1ZiqVk5L3EUCBZejHVgZ4FCALh48LTno4pT8BM",
  "key21": "3U8iDNJ8BpFs2Ef5dmnrzXcbHarEDnCLpfAFdM3Cd7NCfBd5eYNVJCaKnHK9nBCtp6xgAvHJCA9uCBzYd6fy3Kff",
  "key22": "3Yn3xURDHv65yGDSB8WBp365EHdJEMW9JXpwcYByssgr7esT3hZgNSo3Rew7TeAKiRPhoEcU9mBh8YzMujAziFKZ",
  "key23": "3VZX8xfqWuEvbLG4SdS2MB9ySbUHcG4xN4c8spMzDsZYCaExQb6TfJc7KT3amK9BAUt1QP1KXDaGCzzsgUJWZbHB",
  "key24": "5kFPJLVpd72eCunES2aENNTs6UfLLvDoz64634ibiWj2v2xQ2LrzNP9ceBy6cUuar1KC7AhSRvMEGi7VwS1Hoax9",
  "key25": "2hBj214e93arb32vEtbk579dMJbWG4FqZHuALZWxhdmZTLfr8mWpod2RnExW6GxzFsVh3ZvzD5CMWVsAytYve98c",
  "key26": "dCCeNpQDE5PtgFA5PwXub2fhwaJKKEHR4ow4XA2C6xpJ2MoTsPDDbGkJBHFMFHs9FQPt49DLNQbeTrj8NJ7PdJw",
  "key27": "4S5u8qpo9UWfQh6xvvTNE1WLPGm422MGt8muVRfd1xYeGxEJwAHxYrdDEXGPUvYjxM79F191oihainqSAkiYyaVj",
  "key28": "2MJnWt8xiJjpLLB1Zw3zF96UB9Xo7YkfX1Dodf6z2W4HqdsxQeB5isq6tktB2r3jcBJqt7yjyW3x7He8bW83mBHJ",
  "key29": "3RAwZgCyHSAfdysXXY4pscwZNZvUcjeyrLjn1N2hmap4k4N4ugVeTcuPPp6qPoxjrfFMTsTUGcqqkudsxBThXPqe",
  "key30": "4tf2PvM2s1ixxiNJ4QTBtrTi7zMbFVTXEBPzp8nVjQo7bFVkZ5ieTrcypyBAJxLsQsif4T3YLcpCdNoXPpXEo6jU",
  "key31": "rNuVHkB2rAXSh71tamGa3vrzTYUGbL61HvPEpmp6vP1LuN19efoP3CYkFsqjeJtYTj5HrJhW5aAQ7FRxVshNe4v",
  "key32": "2xMxFKEdi3t8Z4pdqTbaDJ1RRithHMCmTUCU7E3BxCFSnvyfdPsy8g8jGaRzsbmC8nfAx8EesJ5cAmvAW7AAqFpQ",
  "key33": "2zdnD8b73o71XrejEdRXmCyLsaLUwNehLB9qZLDX7aSw1uDt8ZHajtABh12FiQjz3k1LcgNusYJfyug12bnRzeWH",
  "key34": "4PTpN6yx4TiPBkFhLnS1uKZWcz2NSS6VkRHtwe7E28BHogUMw1yvuZsABnhSVRZ4bbpBZx41ZGf9vjFg3kcQWzWj",
  "key35": "orf7oVtYHT2aq6QiZvu7iJB1KYdnWbwg65v2kjm3fHJvqSrVZcb21aw3GzF9ZpgGi1yJ2FGs6czCYqc8wpNGbZj",
  "key36": "dpssSVJwjkf5MKGThPSQZpdTYDQEjB2qavSnPaiVLkjdYejYcTMvj3YJgzbjGi1UTHVpjLm9THzQ8XkMtPe2SeJ",
  "key37": "57uDVAyksccTU5E4dGjCZzpvMYS3CHMEB4aTUHZQtLj5kErAqi5W5KWwqSTm3B5gmBNLg1msgxfkMctp5uQt2XoQ",
  "key38": "PcNTc716HiK6ouWUC6x5JYdi9yCtXeiHMcXhiuZP77V79SauQwsDzz4FPQKeRiFiUYAmbTMcoiMs8frQbNgjKic",
  "key39": "4YZsgnvMeDhPgVd6Dxz7NTJ1NNAfWNMpTvHJ3J5t8Cnbox4LFYcm2HAz6eB8CCNFbrzDtyEEVzV5NCi9VSaWuS5h",
  "key40": "3JQ8i8GxxGonXEPABq5epA7ZFYQ2rWNBT3F9ymXkKuqWWs1KBWAgHLUWjggKFA87i969m6mSGCcxHDK6g29ViDNF",
  "key41": "4tsbPQzqkd1WFsbmZkszogYaeQmK4iwjTiW6GLgCGwJLtSkFVfRpECq1iMRSyYTxQQ4cQtHoStv7398KMXzSNqWE",
  "key42": "24TEDFrNyHcMXBQ5Cd4ECzRiLzRUsfPbwGz4zPK2ye39T7V9FCEr2yg7ER3apV2CwRnQASApqLr3U52tixBW1iG6",
  "key43": "5dRGXnCHVq33h3hfrPafmP85Sb1hDjcvSzgtLPyVT8YJH4tqTGaY7R4q9iJooVszB2k7cngwCoguHXMveG9EoR3K",
  "key44": "4q2GXHmrJhsSnnDjabpVgoexeRbCvCiymGjenwFzwVULUeuVV9nbBpasfjshEKyL8MJJ8oVuhWF3CUKPHBmTAfeB",
  "key45": "rtGiQm7o4qUaMdVKuSUhFseUEE17cRHLbUQkNQhEAcWbiCJQgj27h8vNexLyTHzdDm6b56tznRnKmxP5qDMscT1",
  "key46": "YqyBkVmduHeyTUYYqwnY2dQwyZPEaGGxa5nFqpRzEr9EgCfAjH91yxsJeXjKnf8vsFNp3APhjSJiciWyBtPcciq",
  "key47": "4MVEDx62hVyJz6KZ5bAu2x4MXLZHvoUwNnrTnZuzHdXvHwxByFSJgaRaubQxencyQXrsA6mCJwhYv8bhnFGjCfkU"
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
