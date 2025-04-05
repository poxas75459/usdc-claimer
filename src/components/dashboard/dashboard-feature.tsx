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
    "5R8cKNDUCbJwfyUvDGDW1e4YTHnwP4qYbFgXfr3vvnMKGR6iiCqZGypwXRo9cKZQ3d3PJ87AW6R6egwfqtezVMkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJfYwfQzLTgAeQiC62i9hyckXxpDzKL4EjA7Kr22ugeQvDFituJd2AVNMzurYzXiR4YPsN9qBKzhovUn1QxTU81",
  "key1": "2qAx2zTPhYwbffqwi4Ct7SNTavNNsJdTn4u4BUh4KLKhbds9JDn9G91nnYPDff5XZuYKCpLyHvLdNLsZ28NdwZ9S",
  "key2": "3zKWPpf6aqo8PugivESXXeCqeHh8fWR3ThKYgAekQzo5YGbPDTKYQEF6ZGVRf76sMD7iJjjeFDez1bbYVpsMxntZ",
  "key3": "LyMjiBAT53ck4UAx2Vzm3duEBZQvPG6BCUUG7tYmfwyQ4jNQcjZ5Eknn8tmsVzuUJpwhN37tV8QpF8piHKNq7ay",
  "key4": "55xzgVCPu6TaXjJgo4dyrjd17px44GTkuNvFh6PMzB3MEWWC7u3ucCs2GHS2rtMQbj4kUmfPRjrz2fHejour3av6",
  "key5": "oYawKTcXrsvF8To1NF6hr5RU9ZUWkXnFi4uRjwHn1wdV5cjBvfsNTTABoVR98Df43EWz7U7nqWbhHXdhmfCBmhH",
  "key6": "4qCVeoP7TMS5sZgCzog7EFg6uyehjHuZFpa8pfokVfeLZ4qBJpioNP4Fj6vN5EQye2MMArh8TmjYW4y4vnbNYFtz",
  "key7": "2ArtKhrpse8PdgYnyA4BS12ceqaXnsfNo2Z71cJRab8sLBUyzKz7FcaYL8VC56qFjsqd2tY82pVQ4MwXiKjU3UKf",
  "key8": "2dFqW5PyXDwBR19b9Lr8beTRgMq1nn7KFeMEEqyoduYFpCswdD2CZtN1fYG6YjEYZ8HrHFuAHNXcRA2tFMqxB8Lr",
  "key9": "hVV9osSzt7ik2fioerS14JHoovcx7avEZ4Vcebtv9KgKVcK2jgNiYPyAFHsUeohAPhDNAoQHSkWv7uFcv7tND2S",
  "key10": "5kE6tpBnKrqGhiLcLcQnjexAHfubMzazNqTLMpSTaWZ9Vj99Hox7ujeLUGFU4T7UCZq1kWzVUHLAf64UgJu6yN8d",
  "key11": "8Too64QpQR4KsmdTJyQgoBFJs1Pj4aCADWiWeE5KEarztEpZG6YmoVho7G56M3nY82YZqKGAT1zhEz2VSNaJFzh",
  "key12": "4RwbQR9HmtJUZjaggVCeRvFhaHVTuWt5vHYBdYy1UppQLtc61CGwCi3VdrwrsK1XfoDqKUwMx7PBqpyAA1giTTce",
  "key13": "4vXgFWqY3m4Yp9YhMyP64e6zBw6wDdCZHYqUHpoQdZ1hgmUCsH4wukZd2GZda9dNGZxDVvJ4Hx3JYYemGVUfXPfQ",
  "key14": "iPUyoAX1ZNWwTB9W8dSYCtRwa5CYmZ1SsbSZXfreFbuoUCEt7nkFxCy2R7WqBemyo6e4yt6bHYY6ic2AtJz56ne",
  "key15": "2wdFVwZmKPhhhuxwftwAeFQw48YKiFEsZnsBRJZGEB4DwN1ZSURDokCtQTFuJucnA3fSJrkVrY4yRqL6Bj2HoXtV",
  "key16": "2AgDG9kNh3aGDJK3U556tQaNjLHuDFVRMZhtfMr6tRvX2DzxPcQY3PaE1T97wkkGzdQbdpAfa2VEaAwPFSGZrHmg",
  "key17": "47iKJJiQziTVXKPXbTAzu3W84yGLUJZbe3SWcxBPgukfKkZynEEZwFPkxVdBRDp6WF6L49s8ABgbicxfbxW1W2ts",
  "key18": "47rVRLCghBHchERJKfjPMkfQ1p4fhbZFzyw95mWGvJGNM1Q5V6y77EP9a3rc68PVbfkK1B2qwYKiMGFFdejeuhTn",
  "key19": "42WjHir6EEensJp9J2TSgDqJJTX7eH2RUauwr3hXXj5a7z44H41ccd4DdMCW4YjjLwNLV2whPbnbVj74UUiCpV1A",
  "key20": "2dS1ZwjPjcpB9DdkHPwo6w9QVDYcXQi8f8ZPggqrAAJbjVtxXUg3hKuSpddf7T7NmGyUJCaVbhZLSQoCvLD64dH5",
  "key21": "3PpB5uKPJV8YhhTnqMk8BM9uvyKnNWEe9KNiCHpSD85eadmwctL72BDHjfsz1nfy61y4721pjTA6em3wLeYroZYp",
  "key22": "4D92mBRzb9qHtaiKWX3HFPpBmsvTWd72wxknmD2WjPjFE6oK5AoFPbAJRCLSEbCuq3rSpbTMgGiJPDMMt4snvweR",
  "key23": "5MeihrvKz14fB7TwyoquG4Y5kDTj3fdQvs6UEGLtDctaiofBk7JLLhntU2JmdSyyhHVihTumYCJWDBeNXFXvUkxE",
  "key24": "2oqqGcw6qaGSqdgbZUSieNZeFf221ttCh9pqHEJiRsfMyZM1VksRTmVD12hQzApWkWkfGCyhiCLgQxRSShZuWG6D",
  "key25": "ZqeudRdx7Pm6Y75nQdng1HnQJqhXcXNowQDKtBZ3D5ZeVV3cq14wfyUveJgnnCP1BnCfwicer9PiDr5pkaHhELE",
  "key26": "vVgrMsCeQ4AxtFo32bxEArdaxLwQUBiPqLAdSmKdgXN9BJ5cxb4FrK5nH6fn1iGZ6Cntf93dSVrAgr1w9cLXdqo",
  "key27": "38MoDWoXKpZyR9mqpMmYfsQh22CVXYhW2aqYccDMKoEKq9BsMqQSNn6SbXd3aLErvfmAAb8YJ1PaMKPpkKhe4G95",
  "key28": "55Cy46HmffHdyDD91sDLKacokaoFe3qFkGr2jXi5n9yqAk6JTyq2YnojrvABMJHRBvy3CYW6SyK8yhxBudZCSGUm",
  "key29": "2G581ySWdkEAsxi9xZ5ogwELW95EeZnYAmbuUuvFgwwfbGPEJR7ibnbcu283yi4si89T8cposGBj1QgtWAco9e5F",
  "key30": "3gw4YzGJ7aArEGVQzcjdpnPJLJnnRn4sBuhPLjfVNMYU2vvkv3PEGjanEbMxNi4fuAU3YiRWymxqE22RTuo66Wxx",
  "key31": "3VHjuKdyTkRdNQtSbNrMohmeStwzD8iDMA5CQi9Yju3aZYR3ZXVjfPEtSMcuzFV27dRCVYRfA7gZmCq7oab4JwUY",
  "key32": "2CNvR1JgS7qcSvs76E3tMKRFQs7pnViPvdzvPWtajkFUxSg7FnSWULPLrmf1sEHM53bJEpdWzbZ1kU4QqCdcyqGP",
  "key33": "211UrFnuSeoSoH7pVkx6yddeahkr4DCw5qMwxE4h6GQsjG9CCvoJcD5HL3QePRza73wec7V3iwkbPBwfpgnKwjfK",
  "key34": "daGbb6mSeReiesKbeu68Kt3nST2BSk4EAuB1rBDJ9GVfRgWQtyAZgZWxjn7yQYDTgEoqxyry6krbUzyNv7zK6ms",
  "key35": "BDMncwfV7nUpQCdqURnqfd74cae4ZgsuVrDXbTHdhbJMGDtB2LSprDMbWPw1qrd9ExLCae9KJDx7QJk2m9rht7W",
  "key36": "4coqTK27fQjpBcMp3m334uwxWj5WNu8V9atUDzvg2iQKwiqNaNLNjGEcj7abDc9atahewDmQGoAkbGSf5QxEJwDW",
  "key37": "3R7GJo5ZhJHeg5jarEcFo7MUvtLAFqSKE6dbSuatKNQuMYn4JhAxq1rK6ocj7qygEGSvaCbFKHMP5VZDse4PBSh",
  "key38": "4Y92fRf57r1q2839QCeeXCCd4VDm5FxnmiJNJKeiP4pBQbKkPEKVzkHoLt88UpM8qAtHjXyajLLurW3rWvPXwYcm",
  "key39": "5dsT1D95Eahj675k4XU5yrkn2dVbghWCgn1oqcfLNrL9TJ6DSoqrL8CTq2LyGNRgdntzWvyXqLrGPwes7fKD7HbT",
  "key40": "372PJL6Ka85SqvU7q6Px2nWZ6ens7oNr8cTpP4MwuV6bZGzbbECzvmNB66Hz1wAZgUDGpV1fYony4KvS8pwAHfN3",
  "key41": "34ZhNNJjGBWQHGDwqkqPRCYZbrRTPq33z4UoXRqQ7rzCV7cX8Db74kpX9wQurLiCVdaHa7w8veN62UmcZqYyTrWc"
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
