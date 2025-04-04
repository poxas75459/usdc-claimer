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
    "5gkXgXMkEDXKYetnD5Ws16MrCtfwZMFz4EwYKJJXBztQkceu2h8xyhsNPmPir9R4GjnVr3TtAC22ExU1QEVkj4dZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28fZhYqXdVUt2s7o7T9eeRGXHKtdfbCMAQRw5SP8yKHUoyZ5JKdpmjqDCWs768PfbpHdMJgCktKUTdWDEfupduzE",
  "key1": "2DETEja6jpBXo9RxQGk1edHf5EPyApb8hvqzHi2S4kF7gxx6cYeYoLvMDhyeztxTE9xgRBAtN5YVNvLej4SbwBkB",
  "key2": "3TEiagQ5GhrktW8GcjLxXFpTZQrkrJT4SphKYCrkJetQBP5b65Xnn9k7mVRoURBeqcWkHYt8GeYeQRdvKoFYBFeF",
  "key3": "5HJpkp8vBQMTnMPmEGnV9pj6vYVxYBrhRdmjN11bb5U7uQYrTfKwVNqw7xWc6E8hNS7b8vRsTmwR25G4FvrX6vmP",
  "key4": "2nDPTj49wmSi8KjZ5rXGryz7UDjRtyVNZkhPpnL3VF5jkbFVYMbN1cCFCdTrUMTbzGWhiKMBT65U6dn8PUuBVcDC",
  "key5": "p6gtVjnpaYCjTuKeboBGGPvmGgSpWoru7iz9CWm4FoAvyDWuYqiZUMAGUSUVniy4WhjfwUNAxa4oGk9n4zJfyPM",
  "key6": "2mcnydeXUfi7vEuG11K6T1NMMp4kcvRrm8pmbideRFXaT4Jb5kTtnJrMAQ9u7jB6QqjUvUFpH737rs7dB4S7tcrd",
  "key7": "3hj7H8LgSFcsT7tSanNhdfdBvk2oTNSbUtgrpKPisi16Je7ZBhC3K3EhvdcvPK1kuP1g8PsGL3tZoDJGP2kciiFW",
  "key8": "4abesme7pohXDtENM3sK314us7ptwPC62e2oFDEvRGZJjesRJoYuhAygSgbKyuqjYKwB7jKBhghxKLEHGjaiBEM5",
  "key9": "xsGadfHJN2e6Z54FjGDy3nDK3xH1bnJ97EURwAKVrNoD3EZthNAnMYc3jBYijEUq52im3UrP6hAY7xsRr11kuLp",
  "key10": "5rMKxXh6QxS1shZqPd47zwKwPcguZ4Fnvb3RBvLUyLnEkvDeuJJb2fBHfwMStgSXkR4k8f2VqU5gQWvCRFuU9tBn",
  "key11": "4ynKVrem54J53DB9cVbUEQF3CwNLZMc75nFstk9WLYWigQvCXCUXLyhrHcDytUckSXBNuN6GMSmhbkS5VVHXgocQ",
  "key12": "2RiVNZpFuChNRFB5vahtRruBdnvpiHfyxRjUoX3ZMqbQmyMxB93tiKywaDcfP4zbC9cgahKoJuV6NCNVgk8KkKGZ",
  "key13": "45hK8CEczTBXdamfEgjNSedVG2LP8ZCxeVveDQBjzWFXr9HjBKcXLTaT27bFLZknmRw9y3B2uW1cHsrb1LpxjTq9",
  "key14": "2NHPVDzFdjGFSDMNdRZeVWBY6bjs2cv6tPzoeKvY1ePyMSxG6w9vLMEFEa6Fmn3KUXYojARmZk2cC9WfxFSJZWuJ",
  "key15": "37qbJWLJkGVSVfighdQFaGhGCWq44kB1wWrSc4T2mWKtRNFX2w5URqEvMoHq166fVoG7ZuK2gTJmpeP4M8yRv8S",
  "key16": "NUKLnrJHRgVXhHzz4HBP2aJVvv7RmLqHHCyR6q4Edmyyvr3MSj3YLJ5FKdm5GqPdRxkrUyo8ieRH9u7BbwtU8Kr",
  "key17": "43f8HVHjkAZWGTtW8aCCstFNDCoaku5TruydiYsAEBGA42Q8Y53sg5nwZfe7vYXLVhHRYot84AorwP7zhaBuPKBU",
  "key18": "4zVYUz8qdK9S7y9jh7dFxpGVuFHnLTNb7rtJy32hR9aFX7PnnvN9FRdazsUhgHPAfCXy1NvDsUMBfJAK8DdRx2zy",
  "key19": "3ZKRqN6cvFxvUoawP11fnc6crdzuszqRrozaMpquecQpT4Qnd74M7WaxdqRZrBcMYNfBRouuJCvWGqoCT9YL2zJD",
  "key20": "4pT4U77iuoBNeyNwgLMLmgm963nMCd4UJxRYDf73GmhhxDq2raqK4tFpkZZZz8TQ1vuXwfW6a9PuyfyRUVjr1u9Y",
  "key21": "4Rau1nimuk4bTt5tCrz9awb8XDSsqKjcayY8qCk87WsfVdspEscUtUJwGUZq3W5haV3iAGmUbc31CRaYG17pDSeg",
  "key22": "SZ3fYUzzK8VKYMnifNv3DroffY5S39fFQsLRHwB39QCpcCnMvAeb5ukt1k4buWJduxXoxEEkpTVtauHjGn7zZgM",
  "key23": "3tPe7721yNkvedwjtZVYdoZy7bhtLTExBZpaeKVGBN1pbG9G3GuWCB11aRDWCiFFNBAHKENrM94gQXfHJm3HPAmD",
  "key24": "4YhxA9psKWETVyZSmzA7DAHBH3vWqTroLSfNG3X16RJES1EmUHzXZKsi3ro8GapRX8n7bppzo3Y5uGBbeEEKfUb7",
  "key25": "ABngbJzL7yuxCkFRwTCCT6YqFXf8Ke5FCD3tbEBKxtk6jBo5fGyHyiDCRdGA47Mtz8eswfee4D2kebGo4mhKKKp",
  "key26": "3N8HaY36GJwm8pLrXgyoDx5EHjV8RbCaXiBinDzrCuus45ZNm8SmwfaPCJiHULixNuYKWYnmY3c8oMBWHAMfoKpE",
  "key27": "4RFuDi6M8bKMyhLyVLEJ7DedTe3AkweT85CQg8ycMduckhTYkAmkK8RgLPPhAg2x3gurxaMaXXnFApoB8V6oa71Z",
  "key28": "26RQChQK3VtWNCQDRH9k5ARTrBnSMMMmUQKyF87xj22ZGyX7vtfYGve12C56R5vwrQFdZmqyb82fknkcQAjsLCkk",
  "key29": "5XwArShgN6mVmpD8ZrVntENY7vYbjS6keyCPoWUchumtcq1SdmLmNbEsz3rcJ5b2FE6oeNipHc8w78TyHuvE1VDo"
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
