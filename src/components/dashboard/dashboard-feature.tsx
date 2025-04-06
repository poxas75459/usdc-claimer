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
    "2AAvucV57GjLkVd8PYoW1v1tcNCC2AAEL5fC5nbZjDUzfaXkyDRP7H7xrZzvsveF3uSA9WEQr1YQaMTeZnUwAJXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKbN1piEiasJs2ttEsmEA2tiMxw24vL7FVuWAKCannxLmH888azNA6pPmLCjA6ED8WAJgDyNsLeZkm1dxHt2KoA",
  "key1": "21zyxiijECoTPoh2YZzx2EEk7a96WReLpibRjxZpezw6njkRmkNmPh5HK4NinBQZYFWDs4sWM3N6cgmMCUiSzSGM",
  "key2": "2wC85vKkHSFxBw6FP6evWwt2GDyuPJLx45BN4T3A7HsaGPnztekvb7UfRuc3Zd8VeZLHJ11zegN8U2Rk3tnQzT6r",
  "key3": "5Ly2BbczAUxZkHdDmKZWN3FPxJFG6dVXdfQCuQEDZTezvLB3EKVkWYxnPDcqJ7HeraKJUoy8sckKQFJwvGeFVWTW",
  "key4": "4K4x66BveT9qZzDszwQnyRk6dt1gqNZY6f54rWz7TwGbCFRpN2FA5hakX7KD9Ja9bgy8EvrhLuYsyR8nrAXsxKd9",
  "key5": "5rCAAjvS4DRw9Cpov5TYaF9yo874aUfb3qwsSTAMF4eDtpR5yeDzeevaZizZvceJ4tBbeVhedVcYXwXT25ApTGkT",
  "key6": "4wfWmx3YPnt8D8cYbgo1K5PtcwjGYEmbDoDb7wTF5JRJVzKSkCnwkqUQztNMVBa9qhfnD4q9CyYHSZD6LEyptuXd",
  "key7": "5ard5K6uLx7YhxZ6hu2yQaGZ8kSQQNyZtSCdJtomHKyg24gHVxkEhTXBmcSrJ5EzgKAPb1JnA3uTrH6Mgcjiqqbc",
  "key8": "5QHYeiCy3N19c425ErZSmexy3FnGmqPiQ3A9rcEnah1T4XH5cSfB5UkRoqHvbcbuNqLapTVh8Su8xg2qMKB54cX5",
  "key9": "3rPhAiYWaq9BWsBsDd5SVLmNS4fbUG4wBf1YPxkG6RmZuCFAAxVv4vAbze72zDPajQjgo5eDt1JBUYymnqc3tohN",
  "key10": "5hRbQ9XFY6c5WB2ZbW7ay9JLDBWKpfBes5mgEkk215f4Y8Bq5k1g5oeXCruMeYrBGR8FDQEuZ6bEKQZNz7bej7Fx",
  "key11": "4ooaMM9EKjSEdPCyax66XbqkbQfpCPSUXmb8K4t4yo2KqWAqAW6ugNUccWQgBQ3HzstBaaVpfWcKKUo7z8p3Q1hU",
  "key12": "5LL9izxS7EhQeuTfTJucZcjh4hHkpySg4EtA5xYoJHZKmffJGuKgUithCMS6o2fMwJzvuLNq9JNfhdGt77BzSYxh",
  "key13": "Jcy84rSbAo68Zd3htD6vXfk2Zpgy47SitYDrvz9pU1p1NiUL3aRNt6zmBk1L1n5at8JAHbp4oi37tmUfzrbqsKR",
  "key14": "4vhjNCaRVcbMvNsSW9oboN5PznGAnEQ1ygcmxXNFftZg2L8CCHmtgtYKDccTbsuVZPvuPPrFgcFLV4xR4FgHqvf6",
  "key15": "5AVv1ciWFJjpdfxm3QifCpqK5QdEGsqoE4ETgvedvXtXcWpLFmpZYrZmgMS5ys5EcjDXSbViNRhLz13uYdkHcNWv",
  "key16": "3J5fBvhZnbJFPUSSNw37cME2Yvysg3AhvkbQEEwvMkj76o4UG96cGyGatFZXcTrvMNbEDMKZM7xCXALu1Kccw8rk",
  "key17": "4ngzojRL6ohHXvcH24jWmDWq62pUTZp9nxW6ybb5qxxoYXK8Mwb4hH7FVw14F5PtJsYqKq9aeZrEyCtnTuDog7C1",
  "key18": "4p3bW3qt7mP2du7Jwi3dX3JDyGrKfLgbfDw6GhB7KW9dAumVX9qSRXSERxzmvCyzRj3GvYuJj29iTZ63KJTLC5G3",
  "key19": "2rBB3XnWL2ThXTPqXQseuG97DohBCc5rY92xzcapnoNKXqg2vbbgYFfjVx4eP63zck673ntpow8Cqcjj1rnxUAxr",
  "key20": "PYvMWhGUdtkwXqimmpAETx3M2M5gJdXdhftjBfjXoCsXFCMxTcHy2HTn8WLDw6Eya5Tp7v5NvdH4CKzRNL3kK1d",
  "key21": "ceCsT8MhiPjw6hgSMx2wGbWuuYRnJgiBfEiZqwzYrhK9wbUGjPN6f1ExuiwktJFWpjJHfEtm4fnPc69tTZHnK2u",
  "key22": "d4zjqBRUsEkDpBm4RFf4892dqWs3cig8dHzcauWAQn3cUSGY33rBBSap1XSbr1xuiozmUYZ3fZSLrta7rqXu48Z",
  "key23": "2o8fzLTECW3aCyrY11AnQFpm7RabjDg4bYHSzZSYaY71ycmPzTi1BzJVBsv3dfnFszHQhNntxmyjNG8ok4N33PzM",
  "key24": "TVi9nf2q133GNHydGN2HwSGupmMKH9gdJhPs8wjgMkmfdpu8j2SmHVJwG69d56kzXs66SsZhZdsjcTn6HtkVRj9",
  "key25": "3kBXP1pNJd4jYRMEMyMqxjygqptWbSo3ktocBv1pmraDpXU5ahVCL9BvQoMUYHvNy6mLUAHk7MtXzstcT5VtqmHo",
  "key26": "51GAQYkK9uwd4J97bk4q73VmxBsfGZovSpQxCcsCjwoT4rQPA1gXQKnCy2iuYcT1niUDJyNxtb4K61VRr9trgFB4",
  "key27": "yirpKigifQfLV7gJ55RLQ5zDBhTU4ue466H4jqkeNe5WHiNe2VRjZhgZ38B5L5QX8zABNKCtcNmSfHPdf1S9Cnf",
  "key28": "5Hakm1wZPrarGiEmiyJfd9Kqx3xrp2Sm3qr1wbZyb1wGXkExgvR1EqEMmXVhzS1Hk5VBLFLyhNXWMLGt5Lcmq4xd",
  "key29": "3DTR3z45EBSpDVovqTiDzd1nGs8unxDUSGC6zPVdgMsoDm5PaitXpfr7ZSHWUXxxL2zV13gKEGgS9yKZFY4uFbZZ",
  "key30": "56Sc6wHmFqAidLDytULa95t4nDGWoy6HPcVtEyew1CLoTSGFUoCv2FkiNpzJgi3PR5kr3eEmmKLCNgJhnDuN97qE",
  "key31": "4jaRFkz2aocWYW4Yu6eftqfeFnHBx7s1gkmQxrCs7uWg8M2MMgkmVCRcZdGW82Sgbf97KrGRNpdc8cMwpU67yvZ4",
  "key32": "4gUxstyoGssceLmdwQr1P2BBYvn3Ndr4boz93bRrRq5fP7j6Cbvsyb4VwNxe75YJTYExaaEM5pqF5GscU5eQw1n3",
  "key33": "2yE3fXEauCyE3dAn9BxusWBHMRBdLHE7USWVXjwiadAU76im9EHf4pKfrrtQpSxT1tYRLqcMZJ1iSjZy2DEZw1jU",
  "key34": "5GuWH2Qsqjf2eG9cekdeBgJDVZrMuSQYUadtTVejqkLwtnorzMZNsP9ChtCMmCjNscsvBCA46dFGmCL3FipUuxxN",
  "key35": "3cFjbNhjRiD6L3KbBMHkV9LX9AnxNDeEx5vgWmhirFEhv5MK8chgP5Jk6Vv86yUPT1NwMc1bANWkucXLAF1pyM4P",
  "key36": "S9EbAxJs855SpRJzjHRYQRiYKAmbwnw2Z5z9MjL97Nz1aFrHfmh1qSTeew2z5jv9CYJP6ET84xkpA3ohZRSrXSd",
  "key37": "33DrhDX6R6tdZ4ob5fekUDg5iNz7J31FJJjwDFpkBC6k1fTkM9kqRiHga8fdTCyRdMXKHKcDhRMiAtnkmm7iTsGL",
  "key38": "5QyFKSukDbDRwL6WmMhkChJJFuZ732vnZbGBW1JBJRuHEkPFrrLaB5mCsHyF8s7mF8doz8Stvib7P5nyeJmSTAig",
  "key39": "5nDzGx6MKGKcD2nisY6kcL52PG9DETbQ8o7kF6StPsDVyKciVbK6J1f3HJo5hGw11D8aTo5dnWyB6rL2g8pVSRJ1",
  "key40": "ewRLCr3BEpP5cKEoP66cd8yUT72tnRZjccYh8Qt31jL2nkUjF9cw9f3fC2aA3ac8wTyU5gYK4PkgLEjWZok84Fd",
  "key41": "5kbi2VX1HvG4FBWD5cRLZikmddfx6Eg22U8V8g92Ug5UcMnNDkm2jsSDj5xP16tGb3izHH2ZX7euczY93NxFmRyC"
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
