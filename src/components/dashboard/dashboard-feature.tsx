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
    "2B81spafJvE2tzisyrK1rC7RY84wmcmANfvmEYhKsAzGMHAMPL2cZpdjTSNTD8eY2uGLaPGpYAJtuGLeJHz1izZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzEN3ET4ZSLN3bG9KW3NkKMm5TXcZiRyGK2AnVUwMMnnLeBPcekdhLmZzgaryf712ZQskKQzvpBLxBKvwzY9vSY",
  "key1": "28A2MByEDaWtike2tj4sADjCXizRQQC7uYcs7mdqk34AA76FpUiWe2L2S2PetT4exzN8dowv879rVKyDYsWY1JbM",
  "key2": "5GbG3xRuMM8YKBCb3X1E6FJainP6LxT4C4BAqjz4aSWHuRaWkacPLcEmw1uBQdhzJoYhxhjFe5LBtwwuasZphJVy",
  "key3": "4wxJqizrDS7roqBwokqhMPe5hXS5hnummAyzNtFh5w37FYbnzubkLumVRoVunCd9cWwnqkbtqkMZvMBXGAvFSyis",
  "key4": "2ZWjJwtjsUx1rnEk4TjPUAdWXErJ5YJZbuvAF9yuiLo9AuTjjSrHtiKo1mmkDyWJxkPyVxWU5h89UzSztoovdx2Q",
  "key5": "67fDsyQYpwMkCvqEj1c9sJYFhStZ7XgW84TXZKZ69MhTp7DzFaYZNzquwDZmNEH7Zts3vwe8VcLFYE16oXPeWgh7",
  "key6": "5zwkvsYDBvzHi3NtheCZqRrHXCFmiPDf3JPfgJgEir4q88M2EpT2vVKJppvSj889bw991ETDci2dMYVvub5Xopb4",
  "key7": "2QipHyRc98UMFNym8Q282uPAgLyETbZYXEtnzFbc1jhTntVfoQi5Cshd2TcQ1iKNjkEyesdFBqx1QVnPwuiiVDuH",
  "key8": "4qvNTmrmDtRiQrGQGH7MX1UjPZSpyHXZbdYKDJkAGcNXNhHwKaJGd5z8RBDgBUGLnMUQ7C7TvNz6n1oP8BhwAzXy",
  "key9": "3kVpozNy9PRXAkQ87fuuEscTRqpSAqVrfKiyKnwbC46VQcxktHmqGUnJTHeAb99s5S3w8YepocS3W7H75atpS6WZ",
  "key10": "4zneCHmjzNwoHjNK9k3L2vdT5G1PccQ8JEoUjYAoQPP8UWLJmBfgUAZ8C2ayKdzPMMfwNJyAsGMj9BY19cq9Gb5y",
  "key11": "Ly24wCGfGfYWdkzjkxvm5Zn511WyzpgKsvYnWLKhSJeiaawpsbcHzBiSTaSm5SWXZVBjS8KrriS1v6MB897W26z",
  "key12": "RRQZKpVcKrBRteZoxciVkDgPE1nFyqTAam7WsDUq9zxY5DHivtAcxvtHv4deqtNpPASquXFWvwwYozxyYSnUhMF",
  "key13": "2AAhiCSHY5ShwYmpfh6ik6Q6yKMFXm2KKZnskQbmYgav6r3VhozCFVwKTKc22sdZZioWh9r1wd8r2KLHEyqGA3NA",
  "key14": "awvkdmcCuJzQTM9Qzqi6SRBFdwoE3rynk87e4daWczjvN3Qr92dGNUrumbYur7jx5REy5C3U4R1Tt63HsGJZJjs",
  "key15": "4X1M1W6HKBZ2uCNk4mr2WgtmRwdvcJPnUfaXz2zT1QeTWj9LPP7ZDrmLfJtT3STYQ8xqQsG9bnyJfAXrQbb7jZzD",
  "key16": "CVr1jXGRNTBdAbi3cENsy6bYS4WWydCyvDpYxr6mVD3wD3fPzahA1ra1TWBcCUD9PCyRe3DjpXtosBp8j3bfgeK",
  "key17": "39sh5mY6DiFCrB6Ut3NZFR7Xrm43CZr3eS6knYwVPgtuYogz17jPjbQAtVAorYybTpiRignmSRDqojDdUuQJgvgn",
  "key18": "3jmran27Mbu5kZsve9ci3kYypMCZSnbJA2vu2gjzdUrD7PDKFqXJSMTtv6miTZpnaC3gZN64i92P8rXZq1VCTz4N",
  "key19": "2xFWHKbzjwWW13JUwGgvjyYLEPUi9ratC3hWkkSfNw3ptfNsTXPT62VmTuA5aFdnMYJubPm5Xe5vNJMH62Jx8E1C",
  "key20": "3ZAnRSLJhtYfn2w7K8W8Jr2NuCaoEYqA49mfEajWwjThA1VUf6wTF6b9skfqS72hHj7qGhhYMFPQRiuQ1Sb8GQk",
  "key21": "4qDzUv1V1NN1z1wJCCuc9f4FeUuXypkxT4niSXXA4XfMvArWtASxAM6axbAFWjY4nfNPRc2eufgZwu1XsEGPDFEE",
  "key22": "3mz9Yr6dMeHj9hMMtPX421XpCyDYQ3BYgJ2aSz7NiWMKwUGkx4ecEpYa6KFhB5BjedKay8TweimmMrMmdTKk6Xhq",
  "key23": "3WwjePCyw1QYBzwHkFL8ZYzS9LKdV88rwJw2XRLR9Hex2vJsQdn2KfWZiRThTB8fXh3MFu6JdiFHyzihdrrBQdjW",
  "key24": "3Erw7QERtdUdyffWadmjpoSPVBBbg75qbqVMjjU8hTVoiSuXa9kc1NkTAZ6o538yyfDD3W3sqZczheuzRFkzpnvc",
  "key25": "2hzp523gNeweHKqm3wRKfuRVrXw3Mc6QEZViqY3FtaRqQjEGuiL8dukPHfmB6UoV7KkjpB4WDJtEcU2YGykkAQWj",
  "key26": "2QuiwVBhsY8k3LGebDnWKeg9ir7KpAsWxtPwW2oLmLmeRfEaAs4LBGd7nfn1GFP9mUEYtGzgUTUh7BojZTW74pbj",
  "key27": "4FidmGDZUn37P72sVooHuxEafNzk6xAwxxjc6zctV7ZMzB2UyDZhAzDjWRzkkVLQxL1vzN5hJdK4QtrFkNwz3HXD",
  "key28": "2d9qRLkhe7frzJEjUXiGT5zoHDZfaVL3G3FMAKQQpDTXvtRxMbC1okQgkcHZBsDnMpHbAYWfDu6qPL61AoGUdkmA",
  "key29": "3kaQBre7pjSv3Q8jRMbkNupnY8zWunEsiPtT9UL3ShC5G7yNT9UG5NrKTkfUR6GaXpUy2H79B6mzikujTFcgV7oT",
  "key30": "2KVzhnEwWbJfoFdskRcF2FZeVGHQTEKu8wfFbvS8ju4cQPXxTJ85DvBfeKFhknZtupxmjT4PdGuEGtnGARVJyeJx",
  "key31": "3b9kkvZCwoy3wrCBErMMJmwhSaYTJh9zW1QbLRbt5iMApgr3919bWRR5J33wSgP1wzwmLKt5YLzYeqraNzaKiTaw",
  "key32": "3T25KxHzbNDiBc2tFMNJYAApwEiqxAAKa5GuFDCipogtdn46v33w4Xp8jQME6rdq584v2oAZdSKbc4Wx1msvksHk",
  "key33": "4E4QrKhZU9nnByJrAGziU1rTEX28o9zJKsB3eXaDQ6zcdyMsfPEMsvQBzxAeSApQqUywL3Q54WNH5uKSkScuQNqQ",
  "key34": "3GDQBAhuJarmdWRiTKx8k1KMDWhC2Nn11q75UpvToQxUGzLR6pwFwSTh28cvTRiZQBka5J77cq5tmNnEPVWL6DYp",
  "key35": "33ZEaqcxvx8KewsCX23qTc9CjKn6F1776avAjYixhH55acrrxxGqM3rZ2BJywi6odFCfjsdpJJLhEZMcQ6PHNowZ",
  "key36": "4YmTRBCbmJhFQDhCk2V2ny8nmbPDMy6QrcbgssPo7cvrLMbhh5NVhMTNfmBTvdrRb8mVrLhjKWRpchit3rqcEYSc",
  "key37": "eXuCx5stBP7DKfv3vLYKcQyJnBU9jfiY7zXu7mzpnCwDuUTrkc1JZ5vomDWHHSHUiitSmWduWypiAHxj4xVua7T",
  "key38": "4DBBeGhjGY4fxSmqEBYGpW7YH6urugM4WMA4qGRtuAohT3J77RyDjGZu1TMMr58Hz2aE2HHRAXLpwcUNrxgNyFNt",
  "key39": "5kVGEqBDe3uFqp3tTChwgiw6aHaYU4epkJZF4bRDwPBhcMXUffimwCVf3uFebcDkbsCq1NWHqiNcvB3QhYNYss7f",
  "key40": "5bc7222JQJYCH994zeBy1dP9EkA9cjoNGevhLsf7JjEquqRGZDbWy5Mesu9tH9EmsL1N9ZiBJaVSXU5uudjJENAh"
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
