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
    "1rNq7oRrsSrk83zSEbEP1evsWxPFxfJAvCmumNUu44NzVrP7qppaFd1HZvtZUn78piTKnVBKiv7NiBrfUZELvge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGbyxZxwUXfAspzvNCvVFEwEE7qdMCGNXLPDYnKybcvrPh8QhpVw5fyxBivX2Jor8JvJHLc1fysdHVrwd6JHTXZ",
  "key1": "4h9e4BR6M53n733Gbf15CrXcTtqrojmy1TbpwE39XDKxo96opi3icN4MRtA5fNeDG8y9Fxa7bs4gT3LV3nefQksZ",
  "key2": "5ZuUWXsoQc5VWWfi4fU1mdPPGe4QTFRptpG4A5wvDV3MwsPeRCDGr3ExMZ7hMwcTAyBsXhHThGhWTDHzHMuxHKig",
  "key3": "475RVqbzhz7CLCVRv2JUj9J5RM3DQqSFFSpkB249zxXQztKfmBE2UkfMyrfaVa5NmoFqV2rmEA7Bz2stZEwrKQDD",
  "key4": "5gTtn6uR99bZCqVCeFHF5oPde7Mq3MvsjK3uB1ja1Kk4bBgAzVyEumLPYKDn8Y8V6m8RdAsfCTwaK6JKANvgZqoz",
  "key5": "4aUnWpunb9WyAxdNuAisE9ysVsnXWBhpoYUhojDLV2fvTJdjJMtQgsYosHoMwiw2dB15UfWLAUcv5HP88XsCeb4w",
  "key6": "32uScHqFhgT2LohmY1SbFn3ViuMMLdQjmkTjNU7QwPkykvdYxDZWRjmH7pqw8ys2SxNnWshSomjEzyxuU9qbi2m9",
  "key7": "4cmycoTZ6BearHZibHnin3p1apYqzZwyNEuxSuwvydFsDCYL8kVQPw9F3cNk61sHeuXo2DAXG2u8Au6a3QMo6HE",
  "key8": "4eEK4LecsimUP8JStjwQPcm7GQi3ZrXs46dWK4F1cHfKPTXhgcGYoPL6V6GaMAdvEXM2uQPuXMJy482ZVvL2w4mb",
  "key9": "5jFw94NQkk3A3vYMHZtLanBEinhD7bzkrCSAMPyTGJb2ohUET859ThRCAt7xpJ3sFdfGNSTDeD7AnVBEFuWF4hkY",
  "key10": "QXMoA8Qj63USHRNMXMCNouMUwMA7uZTjkwuuZSiyPFzPVbGeGcxZbwMQPhVE5ai3Nr8ttpuByAH7ggBcXQqtynM",
  "key11": "5qWmdjNcH6tNzHcHzEMZwQwvBCetpihtQHngX8GYL59qXUyekN9AZ516QKtQZehJKWGtiPtqkqGaC2xso75uXnuq",
  "key12": "2Gpj65s73XuFrmpj3e8NmuBn3YkAXHtiPRbHaMgJCcn1WTCFwJWEJaRrFsSN6tgtZnQTFvacsTSah1SBHPwemjr5",
  "key13": "5MyAmunnz877WtFMv8zo9YbYGXe4JQpcL2X1m4F5XQ7w93f64dg4tSWhWpZb32WkxZYrufyWwycwDYyVfWaYNP8C",
  "key14": "59yip9odA2iM3U6esWzbFQgDYn6PPHK6rMrDqa9haXivJ8Vi7CQKU6B5uetsgmBnSJ57vC391nFgBrQ8z6JsQYdi",
  "key15": "2hTB8wQME3WJcQn5d8rME7ywkznHjvb9X8XhdFypwS6QngjNRhEN8U9p92JTVg2QuLeDjuYG36sssAMGQ3vTMyE6",
  "key16": "27jFP9HVPHyx1HFshtitttfFUz5H1PANSGyiE8RzzHEJDH6WSwuUYs8yVwwvKyzg5A13zUYk1wFHXtJfYa3hgWH4",
  "key17": "3NSjF1EiV5KekF2naeEUTiqWktHzRTg23ch3qA5gzwKMEEzkHyokPYJazmaKpFsG3MMcs9oMgENKMmTkfEFPLJSM",
  "key18": "tu98LxgYDLP4aTS3mQD5BeofX6AA2txG5f65WW3fY85UV2HoyKF7RMpE5thggHoAJHGcJvguNVkTiXoGY581Xn1",
  "key19": "5ZaGkicCtfBMWXa1HkhnkzEzjEZR8jh1QudwihBzTtixvX7zm6AL7kPc14tQYjgoBtBY2jKWo2EMAqRosQexobQC",
  "key20": "48YKNyHdbu6dYf8EFECfPBgb15yNP4ZbpFc2wQTLrNWZe773w1ES3SCcrMAnjxHBkVQ88xgx13qCHXktawsk2Apx",
  "key21": "wZSLYCTyLquEMZZ9GHcY8qFjCSJ9uahgL9H16XPDJYD1zdguLzYgGD4VkCD3peUWTfP76ZdxyBdvjtiRFZoMRg9",
  "key22": "5S4xxkC7nxRU1mkqW7TNcN7Tu6V51LVUDcAkznRTTdsH3J67mgYGaCUVoYWJ2Fb4yBEcF9Tj8taJahhkWrCAKP4Q",
  "key23": "5T5L8EnerDTojDm7724VmuQzvQR6cMA7JAP8sDFckYVFtyELyjCM8WQcccyZdBtMs1Sqtv86LaHmshqT2YKRTSjg",
  "key24": "4cNbER31qghhJY6hvHTv2hEGAEJc4HqozLSo8ELKpJRhmebweC17WK6GJUNqkfdKMhbeP5zTcnnznSkEcaMT6i9Y",
  "key25": "5Emf9nePsVNfovWMbHtEwRoFYwbWdPadBtJHT5vShdBeDRw3FDmpK1ibbTR3TVWTxFMtL58WTiJuqxYivKmxXvqF",
  "key26": "66wCXwZ1PuW5JL5Ce4VmETs1NmkrTJQsckoWnKfozQ3AA2MkpxRw3iWqthGRoL8Qq1M4bjmmdtumQQyMJGfViHQm",
  "key27": "2mXmrHS2tCpuijooJBmsCv5Skw3pz6R2g32Pe8jpx9tvNT5E81zdyCgHD3s1jdxMSR9eCDAwFRXaiYAWMLww3gRW",
  "key28": "54waQreRBKzPUABJQebA5XcehyL18c1N4rfkRbCpFms3p7CVG5GQAVqDG52qvc5gJdDycSK1PhKtSzg3Va5Z9ojy",
  "key29": "5uQeC6v7PrctSVeotiG5ujE8wwUmPowFp6N6bDGtfGMfdDsQrJuKFaUFqdGyBPHTcpFjBY4kacTUr9KccvemUN9v",
  "key30": "5z8uw5nDottKqXjTsnCQT6takyaktvcHebDd2iS36MXAezY9XHtTcNwHU8SPUNTcDNBWFxdFj77mRbWVC4XuVd3h",
  "key31": "L8ngmwBPzisdQT33y5dp2c76hSemTtrJqJXeLSJ1K3KaQXYuamt8sXjTTLNwWaBz1sUSHjvq7VXCQiAJ18WQARz",
  "key32": "3Aot2XTWfhBh5GTGefKLzknhxaLwURGd7uVAdWf9S86rXNtNnumX55onJ5kkmRRE7eXbWBZqRJhgRSFdEARsEA36",
  "key33": "534S9GvaLZ5tCBwEYaGhNdgCwSBXM7xQDwzMr9ootc2Ue5VbUMY8484pKvPzHCBZ6oHfVUuutFY7YoxM9brLFYYW",
  "key34": "3hB9VE8cgfXhUVdMBSuP3YosvEVpR2d5jCpwwFfZivXPysokHbt1nmJtzxHLSL8icrJ6kW9VumYY3J7AVPXbDYWz",
  "key35": "5nWNJjEyBgsKf95iVuqKZ8YB3aL4SjjUcjrpRMGVjNM8MVwv3jdqpFsfFn7MwmbaQHQ7XGJHG6XbCP9HheQf9Qa",
  "key36": "5MSZ4hWT9eiuvkteRjEwUCkmbkeb4YqBDJYpHf1p8nsxvEWTtgVmqpynU8CxiPu3UjNogRuxErW85NmfDUH95Qjo",
  "key37": "4N4w1GfX9zGk59udBtWPcFMThAVu8QxPpChMF2rUQG4rWWMtZers87Hi7Pv8aKrhLyRgwchUmR3BUDsrFG2BqP7k",
  "key38": "3uULheZL8oVkRSzRtX1547dN7iEHop6Nj8BUV3rBKu48UUCosZvfpktS4qFxbA5uU8NEZM5tWWaTFaTpPddnAghG",
  "key39": "4JGTEQvMwMmRx5chXcEHVDT1L7hHrCfaqihz8ZhnFzdY713xcLzpioqXB4NJnCQYF8qx64LEAcfV2VLigYLVLMvV",
  "key40": "4UDBe4t4PYrEjiDjaFMFBk5jj34iPS1ZGYWLM8Tz7KmdiFB9cJ7kzvnnjWrMRUiM7pAWCSX5rdEvM6zHpm3c1x9",
  "key41": "3V9iyeQWwTJ6Q3M6xQnP76p2MxS1GxNKEZNNn32prMP3S2Nmso78Wz9rcg1tLKp4Ugtejem62YTMNEn2Z1WLjF5V",
  "key42": "4k36ecMHTbCcbEbUEHJSP2YWgYwKFpT1w7tLKxd1k5ptXdChpvNSmojVcAch2DgSXtG9LtwrFBEapd8gKG4oqQfx"
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
