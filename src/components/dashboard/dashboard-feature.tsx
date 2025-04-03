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
    "2Lz6pDiNerznvoTWfjTgMN5oXSBv7Yk4qNG99iuzyouuXcrqo8SzBTz7JvTt3pKd6bH5XG1FP8Hu1LhGTFNwyCro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMhougZtQSUBzR2yF9FTaWzdKx25rAH5Lob5oZqGU9HsKYhEYszYNz6DV6F1wqVZnzPZ13BSfQ9sEFw3bYybC7G",
  "key1": "352SguJdnTdYRkmpGpbqtqkpHLbcf4nkuEUK5o1npbBAdBoNiceDCAMSnGRB488tyoJfvXKqe6nehkozThBB1Vye",
  "key2": "C2kUTMhKuwxNzEmJFcpwbZnkE2ojqsRhjm5fKCuSBRP9ayeS8rtFUW1ecJNjeFmGdZHL2ZDgY5ChMGKzyHnwPq5",
  "key3": "4PWzeYjaswXqMoYvCQRmtMrN2kSReZqfu1F19Ngg9AZGCoLn5WahXgLDrc9z4gYSx6argpv68htxZW2Az4oRBjRK",
  "key4": "2o11AAMuSnvovhVDiXTDC7bM9Vzyspc6F8YhawowJBwye16ar4X8FJV9kKZApfshQfLYcMcUXoTsrr5bzUsJ3hnP",
  "key5": "3DmwUdcdPYcgxXmEpGik6iTpEYuvMgtWYaz6RTvpkAaxEPD4pmuGmcHWp6gBLLVa1aJAJ3A1dr9UUuviRo6BZVCF",
  "key6": "iEWccCMQd8551G8Bi17UTiHyr7YRuthHuHXSMEQkCYQtw9DEPXfBVJYSeiL2ALBGbc5vMHzBQD3JKrCZdAwHUZ6",
  "key7": "5oJJ5VFs3xr43q5qxoG5uNofzXRS4WRtUdr5QWFpg9K7dscoHD1aBUzSqKzY1RAAhc6ihZhBBtXHqQ722nohYvxD",
  "key8": "2BbT8HMQkz8BkDPEjr2F9RGwFEXAZAs9LTXhCm2DyFTqLySK2WYsCE2HT3Fb7NHzthkY91aHyo4xKmvHRWFLftsc",
  "key9": "5CoCLgmSmijywiQeTjEt34Njn1Qzji3AurNs1hRFRRCpakoJeKCbp5Cg2qD6JxEquBiFk58yk53JL7SWDAvmjFoV",
  "key10": "5xS5uXYtYMft3Kgq66xRURqUus3hFdh4yoHibhrCabhwLNk4YDqwJk7CYvwdyAdbJMesLBDxvvHRp2cYpoRiXt7P",
  "key11": "4mGS9Kc5deQq1Lw5huPUbHycB4ZwRxxsKfFA3gAa4eCfHTZNkG4cddaUZTkZasaYYmrmDqY9UFf69HbRedRKq1Gb",
  "key12": "AcWjKoQDmdi1DN1Le3SWi6guuhmS87ZFZzzRTtaed8GZqyVBYQRE9iRm5y6ZmSg7fNdGypJMSh1c6geYiXxchyx",
  "key13": "5FPHbNvYKxLa7VzYvDvepXPjCmgpVm9kTinZrhdeWK6uJZn1hWhmtFga67WSEhc2u3KBucyFJJaSertj8TD57Qr",
  "key14": "7K95Ygo9Ev5AZyagdWfkpRuHAuBV7o9zDSmX94gRPyAtqKXRp9RQGpdjhJq3EisKgiLkSwAa2kVvP9PXwZaToPh",
  "key15": "mGNxy3BEB7uSm71nAQ182QCa56mU4RwfkoPu6GEjPCwWur3PmA4gHK8qZUDNEVCXBunTJGsNAwWvCDQyWfEVoPC",
  "key16": "3HEN4515qCJjyxx42jXYTdyLYM5YxpXinGwavEcahad426EWJqGLEAriMp4TrxgbiQNkEtkedH53MeFQStQs85dZ",
  "key17": "32vt5ocxo3UquEVj78ZnvW7XH5xF2yLYRyCHn7CFokBMYhuZt8YkD41rJvwmgq4TSRyhBZRe3Ra3L4KAjN9DncZ3",
  "key18": "28dCd11pxe1Tt9Y3AWY4S4Y8AUn9K25WWKhFS5izzeANuDTWUZsZdBei5U97mrZgUMekem1Yrv5QhSJupTr9YGYb",
  "key19": "5VMzhg9jSjxS7zMD7sHzmzcq6BDCNd8b15NPewTxJnnb5Pobj3xnxNy9eMgu5sVbUPmeN6MAP4mtsK6GwDe1ezMq",
  "key20": "31LbGYp28A8VbhBHnZRiit3CLg2fiFJhSPnuwsnfjhTN3vgZCPZD9wxzYhvLhqB2AstUxfr69dvatFN5f6T7reJE",
  "key21": "41M1Ajrv14jGSkmX23aAGsFHC1izejjMrDMHMUAmKLBt3dc5ntiufXpe5iojys6wQCBW53N4ymK5gBs1USKadCRF",
  "key22": "4gyXrgnhX54SJJ7fvg3n4ycwEXkxoeXrFaEbkToDmsKmPWJEKbo4XZuYwaJbZk8v8UXckWFWSJH98K2pPaRUPaah",
  "key23": "3wzPZWYVAm3V7H7rtDU5dEnNaJLxQggYZM8WsP7vKPkJDwX9r6QsKsk7mMrfaDBQqwjzDL3DMDjQWsZZvcjCzkus",
  "key24": "5TgYiPPJHzweoqzZV64xeYZC5mu9GcUhxTTHKRhCr9PM1UBj8ucor75RxuM5fgitjuoLrfr5oajmkyb39Vfghs8z",
  "key25": "2hTQHJxbeZE6G7aaHRzupcFob72NLbnAADdAY24r95W5vZ7uspCHiwP1P1snwRdDeFLfk7TVLEX3gH6u74SUNm9T",
  "key26": "2oY6dLsC5xTBZ2YMPn1Z9qW3ayQYAJee52tJWPKuBCpxqUK2MZsSGsuiW762ZB6DTMnRX2dUUCEXtMtSLgF9thTL",
  "key27": "1238px1Z2CCDXrGC2FX5FvUtJGFzW5yzsNuukdgot8HWcKo6MyV8hvWhsmbd7brxjQHPC8AuKpTmtr1AYGDN64sE",
  "key28": "cgM1avSZVXoimrUuH7EpPuPXd8jmSVeWJiPy6hjqRA5TLc87pjQWeHetfcEBpbC1ACz4sAMLmFKkLowUmoaspJ1",
  "key29": "44hQHpHHccnQfrhcWd711TQFP8QDV7ocxiMJzbM7ZQVSedqQpCYNMQXUXAjn3H8AdKqmpeZDoN1QXdZ3VpX24U6j",
  "key30": "4GwRv68zJahmqmgQrJEFNVPgZyQa1FHn6A4DVE3Upf4UWNTYjZc5LjaNdqqctsQP5BULkV39cEqGGWU1ir8pQoRu",
  "key31": "4jcGNASCUwWY5T6G9UX28FNtSgLJMK4W9bSUUGgGjBUVnuRQyPNjAyg5fvJTS7WqB3CF3R8FyCC6mLKade5nGjhr",
  "key32": "4FA8HrwLG47eUwN5MfZFQmMzPhgZuhggbfgu5GjhbMdmzCayUa6DHH4hiu1HQE6t6TfLdLxmqXbRrpppyLinXv6B",
  "key33": "2usArHbXtGSUL2uGN5ZqUhAwCtM1h3LarfAHqjz9wtUA3KMh7wQDa8NBs2QgJ2Coj97LnzkTMaQe58cFuBhSoLss",
  "key34": "5caRe8CRhyES5824wajq5CQTLRbqa9hSmDEi5h7NdNVLqhX6gP2Wwu7FyDEbxbR9HkTSJmGj3pmx32BRu7xFaCXE",
  "key35": "4Wx7Zu2Wr1XogvP1qmgqcSW8nJFMzDTEzCLZuNjCvyWAQTrbp8eWCtQLePccZy3B2m3DLaq2hgH25w1BxFbyDRVZ",
  "key36": "5xkbo6Q1zAzYzdKE3kJxXaBNZfZVRcipjMZ9qmyuaf3XFWccd8a3WPr1iiMQi17sp95B7fHwjBJZFZxUBtTrZPfQ",
  "key37": "5NmpH5fkVsfpWLfbSqW6sWpNpd7MSLd48TAuBFUwgdJWPZHpyw96v3xHCxT2NAote4wSixztgna6d4DZNwqKtgmp"
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
