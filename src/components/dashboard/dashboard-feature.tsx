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
    "4rzzQtzFzT6p585fxQCwEiMn3nKg4xvRwZuFVvBy6kRaDehfHYnEi8WZCajKyTSmvzuZPzFotXPqNz3wFubUmrS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BntR2AtrvNDgeSovCRrh98FZgkvkY68yBBgJq7xQU2MWCbsh2nbh6g4iKL6da5h26tfocWKtRnc8siwipmV7iZY",
  "key1": "2e1tQndGNqWe3BcEBsDdZaxmWNQKxsvwy65Q2vyBCEW6y9BXL4yHtbRauckSRVPV1RX4tkAx5h1Ee2nk5f8QmgPX",
  "key2": "2fTQRhrvEpmYvmsJEu4yG2EDvXCmYJA3J3SaH2GuvFkhHBfPYD6nuaG4gNsF7TvFx2kDUQAJZbZFDi6T3Dy7GXVr",
  "key3": "4XJ5PS5qFS7Ef2DianUrBbDyXUeHfF2Zp3sGSZPFBM5CU9tXn1KAiFAd9VNuQoWW34H5VCLta1xTTVFszhNXMuVw",
  "key4": "2Kar1FP7N5hmBWWGBEGtBqoz1rw6zhj14QHVNZJ79QrTQyhZoYEmgc2oTUgn7PmmTCbZeN77f5se2DCmrnPJw3fN",
  "key5": "8F6FKe4a4PMbGTBUieXPXAxojzSYJgXJziaGn6f84pt4v5CGpZujdeLsc1KRXH4hSCxFBQ6SfkS5zM2QmzTCbiG",
  "key6": "2Lik7jqDB3dn7kYvYy4ofj9bgzjvAbkvD9WYqq9QF9eQ3mZPECzaDrNRSCEY2QHMAsYmrGs6CVK4pyi8kgKRFGtA",
  "key7": "3kdEnTHMcJMRjiRYviUdxPkw5Z8Sz68kJ1UpUguiCDVqYTKs6ifu4mpmGqFhUma1tJeAodfq9xuYMZmrXAh2CzhT",
  "key8": "3sYe4REm5hzHr8AtkfiggWv1kAb34jdZmAbViZtVuMH4RfyyngfwLs75NzfHRzttWEsG23njiPYU4gFydD6B252d",
  "key9": "4Sx6tA1rksnCD1n1eBcnGFScaCopxperwUYArMnXhEZ6ZX7TUzwdcPtZH63STtC2xHno7kxZSkjRzE8cPmaRjs5C",
  "key10": "5Du7g5fPc2c2LgyQUYVZStSTAJvvS8AqEd4Ns2NBKTkEFw16espo2m72S3eQnmheQn9QrVGrET92dcA46RRdyprs",
  "key11": "5dzSsxHGwAWTW5wSyFm7ABcoYTQEf8tPyuu6rQwVeJ1yQpxL2s6Md1XWjAXuguNoUcRe7SYbpj2cjAyYvHTKkP7G",
  "key12": "5YPQCgPKM2LHQQWiHoQuiWkzmSrbFV92CoDBq6DwexhmeqAu9FmLhSYndk3a972rFjLxDreR6iCUzTx4zSWwtV7i",
  "key13": "5Ev9KLx85g7BXBYzS2WaYKQvpvep7qKWEZ9j3u1YUEhVx6n4ovGgsjuZQvyCBRgGNBLLNkrCnjtM32zNchXCYM5E",
  "key14": "4imLyZNRGoDfRdPxyS46t753E8iBfRySE2aHQbqZVruhXKv62T5Bm64bF4a1vsHDLMgrxPuJeEVMRi9522anjyzg",
  "key15": "jscgQunwA1uQQswdutgAcssYVCArwZKiroSXDfjmvtcG8MuTpt8sPxQvoto2z5dfj6zRjRxfzGGH4QTirXqzKTQ",
  "key16": "SpTkugsjcMn5vD39zskNNob9wfij1Q3t7Ftok9psqLPX8PaSeA7C6tmPZKdXu2MisaAcJaM9JdNJQaSh7UBMg4M",
  "key17": "4VmP4krcTZimNYD157Ta8Fn9PBZkj6Bhnvq8AHcJ23ByJgdziFJZ7HPSWh6Sw7fN3yU44fab4Wx7qwGySykcGLbi",
  "key18": "2BWGjrh3wrsVabseo8R6MpDqeHuVbYVNZPApyW8G5QSWTcXurFdHQKUAmTMXGqZJYJkBPrdFnL4uvJRAxokXABtH",
  "key19": "4QFHfxbkphJ8WBs517ZHGWWkhaHyVE6i37PrTcDGqVxgPAMAbF6CV5Pqkt7zkKVHsytq5QWWfaoeaSi6TJtPpsB5",
  "key20": "HRSPvPM1WVSAR3bJ6PARBuY59uWHPjDbGHQ9g42ihWcAd4kKbcjKezexULBtrNBKYNye33UmZ5FaRCZqU41ANfj",
  "key21": "54wxN4tMfktHLQ9GwL3hSS4g2ec5uqtYzLR6LW4WdAHbVSXSdkcoQyLgARGvf4Z1ELFq6ZctkwR3JGXQ2mqdNbx",
  "key22": "Pp6vm9H42sp83FJ78dgK9Muo1bEHVpNboQHeA1R9QfqpScAK8TLHEhjAjPymidMRW5z9LEw7JdS1LQf7UGLS7hq",
  "key23": "qZdhbaCsNfLA8JL2CyGCexA5VwbtQtzcFpjiB32Y6uVe1YxYw9dURZvjZmeG32R8JUQ6vYfAyYxrs6ZCsNUo8wJ",
  "key24": "2gUTT1pkk6bgHYeuDP9XnMWPwCyXCBtcgp8PeeQzF9ipuPn97zKYM2AVXessD6Uzf5iEPH7KQG79DB3fZBYb8sQV",
  "key25": "4DhJ1XhqPeQBxShBQrcbHWoWz9UD2xgerJveSJG72bFxEDn7B65yP8MaJCzirG4W5eVdv3PCVexRcb5CexpZxgwX",
  "key26": "kem9fhYxYjYHmXFi45UVQUdvNFM5ubGNkw5gVDcHg9zytTvXoxp93QHV67BFHSA1pGWhUCxVhunQWWXdpm3zMYM",
  "key27": "kSAPTkny2bA4qoBDaBHiALshbqFDpVcYiYeaa6yDkuJJD55AeWfWxPtnBX7q82XNiENRibgBHWiayXxyZpVHME5",
  "key28": "2zj24ZUiB4G9Kz7YVq7SNEcMA67fAqvULRod45PXg3je6RPNSB2sCtyiZP4yYgmsoe6kcVQFnPZehEVer15bVcpv",
  "key29": "syTVNG4En7F8tLe2mKC3Y9L3nFpiYP3PBRw4gkuyEBXfsoNC6aiNjtX5VW3auYY6kXuTsCnQJp8YPkLF2mnr4SH",
  "key30": "51rRVRBEnJJK1tx2uXbDzESMY9v3KsTghdzBLFD4FJPcphqDMwW4TuCUWo9G8Msi9gNf5Qr4hwiqDH2QEZPRoU3C",
  "key31": "5WYKowmfwpceEsu3R4E8Aj5vfruaYSET9eUgSZAsPU3Uj7QgoRvAjveXHBrbi7JXpqRefCvSRV2WQm9Krdtz2mDz",
  "key32": "4M1M7WJh27oVfuvCDC4ajHwBd8PYTxfbTmEGfmkPjwuifokd4zTBnedhRh4TH8idwFtEJtTP2ogUQqXAz4RzbKU9",
  "key33": "esmdos9cBjaKinYuReRXMmZL5yPM51nx5Hrv84bdKrv4ic3YUnk1Xteh3sSL5qFEjkjSB5gwWxoLvXrDtnTPdKU",
  "key34": "XRsBsaMBTMyWLd9sdPHaAiVpmexDYdLgWqShSaGcV1jr2uaonZrMhAhgKCRbTjjx4SckYWJ95fbyDPUWBaGgFxv",
  "key35": "5gekCgaEMjkHReQiG3MmYxNWNRKQoVvHB4HiSAXj4hB1i6eVBujWmuMk73giZSZXKkJ8kZY6VB7ELZc9K6S2673d"
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
