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
    "5nKZAfS37u4vHkHMJE4zc5XQC3jyZXvKWBCEeFfjTW7SGgM5r2B5b6D1FSfHtQcSN4UeiiWXudojyHuce5YGvuyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SngYgit3jHMTzD4ZLr1kpB93csWt1XkGdFZ1qYRZdMFP9HpMx9MPSRPeVkeAJa2bGJo4ei5eR2vwaeN1P9KigYH",
  "key1": "3sbpEAbpmLgKw1yUTvopvrJYtDSQ33nRtfGFsRJWDfupCvCoNFd39JiJ2AXDvrUGwqcobCA4csTmDyU6zSGmzkQE",
  "key2": "5vqPBQy9UKRyZwEr6uh8J2pfrZdeYhtd6PDn3TLN5Y2F3hXSgYfw84QuxTtd3Mapa7L2y7wATFSif7SNk52y6qFS",
  "key3": "2HMpD1X5NwdjmLPKrWn2ruCwWT1omZdBh3MVouMBHyHhPQiKhCHT16y715gsY2t4czZzvNAsSKfoVDsSE73Dyh5w",
  "key4": "4TkwjiVuaFLeojx3ZitxPt9JYuWfje7m6dZ6ije8bahvvCF5e3PLD5v9DttACeamW3otLeGtyEzSYRAEXngt4uLY",
  "key5": "3ExHh1MLL1kShYdrkU1Hgmw7hARe1XAkhvipf7uPxKhGaR3gSBy6FUQNxzrCcmzwMwZT6VgBeS3ZiZsyP4dCNCcE",
  "key6": "3nDmVVAnKwqTVYcJuRp8H28e7B17pN4VwKQ9UQqjZExR59oDkbTCSUwL4b52L68umX6E1KQvjvY38nALViz7tLcR",
  "key7": "mAn8ncaC9bwQ3RKJAGExddc2BxJZfWG3QHhqFPaUVmEjCVxWdbmnfwiF9MGSnQH8ZXLQaZWKfHo69hXEY4wua5d",
  "key8": "5eXuo1r617E9ARPuCpgfhYwyhiBEQhu8D5Yu9Zodr4CMASRo6q7sMLubLHRjnD464hEzc5BfvV5d9o2emjQnR1J2",
  "key9": "4zrDysBQr17AY99sEFRm5MXfAjdFmspQtpKrSywL7H3mAb31LmYypkapEFvoFZQ56sjtc8CbBFR7vKrDMoAVv78q",
  "key10": "2CWLgV9SAg83ZtBtpHubz4ah74HNEThbfYRuSZM5ySmowARW6tiVwEMJ29GHbSPi2aTgLbGyNUfMJ8MXLwMxqnzB",
  "key11": "3HB7CfKpujAQ5WDSxJcokkkGe1jFygmt5eyi8xGuNjQkAVD5cvSJ5LJ8JP7ei7kKP1gGFhXGrTj3TE6sJkDXgMjy",
  "key12": "4BXtSofazdtnf5Gx3n2GpRYGMeMjqh4grXGsA91NX3xf1hm6PH21X4kHJ15zYFynax65tPnHUwrLrsfwzEGcrfku",
  "key13": "bDB3gCtb4T7wg77aK35ED6otp2mssUNozdemNSQz3cwUGZTnXJDvsEAvbYQbWsK72fJ2oQVwbx6HZvq7eLS17s9",
  "key14": "3QCMmw5eEno8B1ug78Lf9mmBRPawASB1HWtAd7cwqkjCXMHqjLmSZmLTPUJZtK3pFayJgtJGxSCp6nHKPie7aykm",
  "key15": "hBVrcKTwfGVCLhc8t9FrckSxMRc4ZdnzDWhwUHPmSKFhZa3DVxD4g4CtaaTmxKN7kAVZmQ7ex62LGw6HwQTUiK1",
  "key16": "2dScBvEtH8sqgMy23roxeqV6yHLRVmhjysd6Xe1m17URvMFvE2pC6iJJTyBstXCRySQf94n76neXU2a7gPfQ1gHB",
  "key17": "23auCCxtaZ2sRiZiw5UXairdntSSkrnur2fDfFco3xvQUi68T6WK29eJYhagDPVeQCq3yYMkvz9whQ6e2Gt31Mpd",
  "key18": "35qZF1cuwQhJDgXHGWCt4EpwAZ56Ajm4cFRA1Xy7ewfaWFtSXj3ERWkvGJKdDu9GXY6HbWaKdeP65ZdUvmSi59HF",
  "key19": "4NdVyw6XaktdPduKBwPnV5rMXtKQLGisB46QpCgDQTz4BtJVHdeiPC1z3ixMpgPZ4BnYHPGPudF5nKRkWGCVDN7i",
  "key20": "3gHFvvz1Sj2P9aNT78bLvuvsxKPnRAk6QxCwZR1w9iHSX6G49yWG2cubXjgtw7qJfWZMhrsKdhvvBCPmLTEuRufb",
  "key21": "5orJeNKwspS2sWCaE4S77WhbBGBHRyBucbMFqnK5S988NEczr5QG2YXg35QjTaL9ugNqV8CmntArmCVzKQVeHNWv",
  "key22": "5RMCJyfGAPkyTi5qJERJfQ6dGh4aGjah8QKWL5A15tVCqZisoc9hnYCdLZULV85hwu4451uax1ZVJ9zwB99aPJQo",
  "key23": "484NRJRKRGaBupyBUafXRZJiNQhue8EU4gyB8qatHzmbFomYTxwWZQLrgz7B3yfatP87FfoEgtn7ekkr3DD9S9mm",
  "key24": "4PNkfbNx9t7Ujx2Wb5aTXFnGkczbQ9PqnuHh8kDgartMbBcZk9jFHjDaWjq7xWfjmNBfL3MrKcrM63Nq2ezzhfqH",
  "key25": "5xahWPEcsdEDuKDnAdT3pNPb6nzD5DQoa8FgLuvrGSYr6Lq3nzWJYPRmYwxmxiS3QVAEZcWLaGqJKiiUbodvBPyj",
  "key26": "4d5vMrWUkSSs6Bm491fw6TYUMKh2VBy1zHZAL69nwHDqh8ac6byq5SzrLaibyAGi5Pt1H8Jykii7NW7fvPjjWbgo",
  "key27": "3WkSwThUb1U8p9DZUyAawjRG2vKrbj9P5yTiGAu4BoNKzBJS9sxPYjro7imX9q45rgvRJT5Ao6T2Nq3RSgNVtZ8G",
  "key28": "2bKc5Vg5YhXPxnCHFmKH8CS6v6P2ULJe4CW7PUscnVp5NhKgwjg9mxTpMFvXdeQZuBuFm5Urmf6BSYncAQfAmDMG",
  "key29": "4krrPZVK8sPE6HFkMijM8wZdvhJSmWTD8hBQR2BniRNFZvBXUzsuRaG4C1sAyMPGGeex8Ggm9Gy1Y2YsnPyjkt1D",
  "key30": "2ePKYYPMttykDc2ut7UvmFPp24PQnH8QtAAECLPyBYDKYHsWt6M76xoRc18M2EkbHHDPWwBq9WK2o213kh1vUMf4",
  "key31": "2y1DfhEZ5UtYCnVuXtv4W7ycgwvtiCQRd52N7KvFse838AHqJfnsEUCQ6BpkiJQQFGdxGN7VN8PMEjR5aj2g3Pr3",
  "key32": "5H5qGcGu6Pa88Psume88yCJ4dHTrKZZ5AUrPGJH1gDmqGophd4e9LUF8BCixaLN39ZP7MaNk9RSa8EJ1PcyKzNRU",
  "key33": "37YGgv191BvaobVDnKz6FfLscdpLunzhLfJvrrsK1R7oNmCYU6e5s4Fzua7Fw1P2PWbkeLHveEdA69pGEjCgn27c",
  "key34": "28t7XVNdqnbcvGmNna8xDQogBcfFfHoiJ5QrEtbjdCvgZeBKfCMDbw1EcSGDrUxXJTeeh4WoKv6UbZsrR2pYh6Wk",
  "key35": "5YrnneBrDnGwdVuUCH22BFCdbyGXcgBkL7eSfMVnfnmgZFqdMxovCDKyuuvA7ehEsVWiyFYKksnv6hR294VXb7Sd",
  "key36": "3w25dzSE1DJM5JLKiq7mqCrqki4ZV2yqv4RR7iRY1We376Hji8yJZWaE8D4Sbyk8iSWaaHqhChE7qXjsbj7e7Aoo",
  "key37": "YUS5BXdegaJgqCYNesdBJPygmH6RD8zQJVAQKA4PFegEZwM9kUxRh3bDpX8ZDCNrcKSVGRnJ9kFA8HZSD517pGr",
  "key38": "4yuwHDiDTzyMuNVP41uzYPDqZbXMPkJ6zGJ1X48TUfMTkGUDgpznJJXEwDhC93D9NiLtAvCsHDFgjRUJehVJCGTG",
  "key39": "3h5HMrF8iEYzPgWXeSz7t1Yu6DfyDQPGSNNeVqjmKDcSFAij4jpqC78F6eUgPu13uGbS7fgmiGGkzp9hUTSESm42",
  "key40": "5xy9P4tHuNAxTZq3Dc577nWNz6VapdxGtXrZjFygjtSfdA3Byrye4ovCEBds9JwzBSVzaX5v5UZMytJ7os7QZgQs",
  "key41": "32TMnsq5e2Qr22HbptZpixn24CmyBA4Q1udYgVieQRNh1N8mnAKx7EroZsAStRxTxF2JWtytnJ3yqe2WoriYDrXB"
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
