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
    "2eewb7RbbK4PoQhJWKhov32UQy6QWzUHUewMduNJ3EyznBx2NGotW6M3cdKQJyaNMgy4UWRLdfzHXDnQ39URqGCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEnTbTFjXdgwK6hNUeuR4HRkNWs6CUKprCYt1WnmhB4RCmD6QxXFJkEjLojvSkHsZDe4KT2uutinSsdLkNBP6RJ",
  "key1": "24gr8A45VL9r7PAoMRrGVtCsCrzS53eC2WHjt5LCTT55ckH7LZRjAhn28iB2SZABnpSMsn11KxHXVKT8yZWVEoEm",
  "key2": "4JUkQLRoMj4tA5XRfEbfiK2NTHoMRTS6tJpVEp3KBqSS3i9xodZzJitBwvFT2Mrkz5dL9dBKQkDwn3un9UkZsDbn",
  "key3": "67eWFTPeSRUUnRpRQopfrdLZ889e5LRtbfzLN1GdTfGGSUHBxLb4tz5oQuQwup5YaBTZ1EanTPvVa8knbiJkS1PV",
  "key4": "GL6qt84p5GGfTpkdSNsGru1GJn97HVDdqwMV5JarjkYQEv7EdWmSmB9yEbCK5pA7Bo4DioJgUH6GoEHnjNiF5HB",
  "key5": "4oJLMMd9AU4XPNZdHJFER5ckXy86fnxwzbnYXhbEuG9cUQ2dqfrAfWT7MJAi9N2MyYHn5BtSagKJ1F1jYHAxeqNg",
  "key6": "4hqqt8Jct8Hpg7k2ZdxzAirjHG19jTC7N6X6tbE8pwx27K14BCg6qcznNhPBPPcL2phY6FoUGGN63czs79jRVTbn",
  "key7": "2fv7fc4ttom2A7Q8g5PMHfe6Qt9QT1b2tbKaH9PJ4eazmXPagsoAe9HjBouYLesPAioFChzfEqPJ6DsZ5PZxXm67",
  "key8": "4ghaEs3CRA9ku9N47qBM8R73fTFYfaM295ivJNs2GbpSy6Wk3ot3vGeZfmkoafA4Doz8TotqtUL85c3ggKGC3XSF",
  "key9": "4MUYhtNvjUvxofCak4R69Ya2agHMdBsCdP2yMXngTHFNyS32oEzUVt5LruBaQzpFrj9NZGhBSeNXmysq3oMVUkPn",
  "key10": "4vexmd3BHRUPNfKA8HQjbCmQHo8BqXXbjDPtonJTMeX4Xiyke8JLVFwh89GvrVvvWrDJW7n2kXTfA117wfLiSw1o",
  "key11": "UntZr7s75wMANkyZtTELZzMFx25vHc7kR7jpJWQbocPQbM5VFVEwxxSqpZtbK61wKpb2VSv2d4772jV5peuf89H",
  "key12": "3pRGZKz4Q33kD9Mh9jCr68Ju6CQcKis168hkp8pCE1WiTgikBgfpgxqo2mwCJNzYTvjwTGUPFHE6rGsHS3fy75g1",
  "key13": "3aR5W3RofTZgHuqRawEEtCKoZeM7iwpvuu39mnbWNqwjqgWVRn1Vyix5Vj47bTePyxZvqfbVfYAEt1ghjybGUMya",
  "key14": "3i1wJXGukqNxFUM9LUjPCcVFsvqxRpZD9SFxkrBPHzPGE2rfgfb8QYsLzav8ieSvqpbVGcGcUcaimgJdkmFRapGD",
  "key15": "vJZ4hFTeNpGS9meQ3dfTn7zwtv3F5Bouk2u85Kyxqvwoz4EVZ2wSBBAWeAa3uLSQ6GFCWMkrdemcwyQbLtUevt1",
  "key16": "4HwDmUv2etzxrCSy6EwihwhtFRpSRrNxUqdo7ux53AncGVET6fpjmYDCLiPFBP3znmZTnUvqvAWRqvHc8f1uQ1Wf",
  "key17": "BZmmQRqofoDykWGLnsp6Hwrq2iqf9PQEeKX1LDrKCmfNGQb1aNsUMDfzaAkrB1fanZLYzB3DYtkTwwM6XeJHrKs",
  "key18": "3gxXf6TfB8fqVFAuKsDKuWJgLRiShrYyj7ASJYoMu39ovfTYQys5mSpyMiNMMExYBG7kKXJbnw5iUhT8vUisqagS",
  "key19": "3ddCJuVfUUtCeYyZMZ7ft1ogMZn5YNcnmaBYUD5vAitfibUWbkvB8ayVbVbvVgXS7rY1yNZ7ivCqoxwmCLBVyxqK",
  "key20": "bNAb2pz8gzptBkrJd4BG4Zv2CUunxmSA2LUuc9Pb3wwFV73CLMxQPCWUfWWfNyKN539hfE9LQMFcSYBdGFDb2ay",
  "key21": "LQJBSEfif1JZr5aye5D7ed58aVWZ6mEPkuXz9YRd94KhtSr2yKqGNmEBwRVvdqNR39RLrKs7jTZJphM9M1DbveE",
  "key22": "32HhEE2F9JLbP41Z6srEqkMJmpcQWGPDajPN7i8bLW6KfCbroZGXgJo56wFBQdE4g1jmVNWR5FbV9yA9FHoD8J2K",
  "key23": "4GkDxn4cCNxyGmbFZKvfCK5nCssjySY9aqdNEW85mf2wYEBk5AVsDedkxAUZsSWpe3DAdY1Vq5Wof69QXeYiABQC",
  "key24": "4WgKL9LiW5ELrWYCvAKxKSQ3TiNtMfhokSSQwMLLfJEj55mhr6iVTw3S9r5SFHBkJxPy2jCD71k9VbBmGiFH7GBx",
  "key25": "4oL4BbNvESZDG2XnRPcxnX53uzfcNJ3QEzzdwzCtsyo3JLvNEnGLNw8pxDBfWkLKGDFUSSKaJBA9JcRqGUjGn2T",
  "key26": "2mpMbtdxzoTDGvGZ7d7Gu2ykw2kWmvPiAbxwgwuCFXMnDzgVRzAgRg7HzWuHSHV2FCbJdD3EWie1gKKmnMUXgHVW",
  "key27": "3SzkkB26Vt6kqaq5wxsepVAyPwth5Qpg3qwizeJYfDc1ARWSgSercgMkQTaCDfaYHH45V3Ev24M4G9y8wPCvcp2G",
  "key28": "3pidwwaZzXcw4ZwH7ttvfVtTgTjmkV64tXfaHb6ZnMQSHRqxptCxL3gr61TKcKcYtNgwADmEdim7m3r9cSTEAdVU",
  "key29": "3yVsuy2AegADamSpi2SHNQKVxg2NmCDTyxPYi5c7NKF5Ssdvpg19MpzPa9ofkYHExR58nDqKaBXjrm61kx2q7AaW",
  "key30": "4FT1SwdmXe9yWFmxJvH1s8nKkdKZZcjr14jjV7TxUBJsm9RBZ25Y6UKMsFTWuDxFnqiBuybYLJMMAzjRMyUs256K",
  "key31": "54mMWwswSkbbSTpm5dqWoBc8Dp4tM1MTyiZeUAZ7C71SD4anqzeyiBwBZo59axxqW6gvmjPx4ftYc6rjBTAVN6zX",
  "key32": "4oVhaTAwnVX2dLyveEM5kv2ckt2c8R4b2WfL8frDL1n9VvX4hqNTQRxdQKTAG2wHZ69mFFXsPgvGQfo92p7kEvo8",
  "key33": "2F3jAzEDJ1mY6ioBRHWYSnMEMJNiQFEunq9kfM2CB2LCo9Hohz816UeCTT5UTrSahJxhBYfZ15M1BJgvWzBdrm31",
  "key34": "NMhng7qFDpWBK36nNuswXcWBjcYTXUMFqRaRAFUdAJDtsNs8ctEYg8cMmguKtRQpDTVZVH9CyLzrhatAjY3pq5V",
  "key35": "5ta1GsRUjwGp3f4PPGWNM2oRMEpvDKnErEZAniK3frSEUZrUCndh22xJaF1W6g2juujeLaytNPxqa9tnb9s3a5j7",
  "key36": "3B392bFSrFHx4EY1o6yNXVQhZKN5Ju13yhpBXc5mX1Te7xnwRdmwzp9Mw5hZ2w2Z6KwZW7pnsXX8zTrhhvrCU4Jb",
  "key37": "5sPLGS5NcTnoVtEKWf6UTBS1kb8u5qNvYNvcyngPb8XnJajbKVvg7GGPmXCHSEPMo79XxKwwjCquiPX6EEcvaQtD",
  "key38": "5XmFPUy4uEQCNgWuBPY9hQXUW4Co42kxTPbB7qHRrUjNpMrdP1gEbaNHepNe2BsyquLyUntADrZp8eFdbtNpPAof",
  "key39": "5Et6URZBRHpXDcQHHyrA7kverDuSjG9HNiD8Qmseh8627kEeKVp5P53ECody11WkUAt8PF18rkCEUhnWHy13KaSK",
  "key40": "2RjNpRTGAZkN1Qtde93NWzG1d7mVub2b5kzuhR5KUmsx12op16RydMJpkFffLE2qh9DKgjEjUsxrgW8G28e9M3gE",
  "key41": "dHnCoSwUd752zL6YwyF9Z6c4rEBzuDtmMCQdxbQGizQ7WhyquyrNnu36xP3e5DMzwoxX5ZaUahpJLfPvvBo298k",
  "key42": "2nafycjkKm3GbhTa4Rwqr3mTQnhQ2SjF5farGF3eUf7kxgtGgEKg5pCJX9sHsW2sTRwX3yVonBJnknaF8peo79Nx",
  "key43": "4MNWYsyRykYMsDNKuJgZkEBHYvhHDgGt431mn5ZTPQEqW3w9Qan1hjYbQ1FcmA7XKbKwPejDDVuS5MvW1am8ncgG",
  "key44": "5tUFSSVJMVXxs8ZPZtaoivmZQHYwxLTPBPeYSYekCvQTwWNnEvaqpWC2MRUZpgWoArPww1LDB2oawtPhnaqLiaiV",
  "key45": "2N3qVRVYhZhRS4JKk7d6yGDPXUm9UhGud6oiCB4Lct4sfYchhFPVr5NBg4txmEVf2Sn4sUKmhrzX5Zhg2U58iA29",
  "key46": "5NgzztbaW93AxDLRiNyreXjcJcvSwz36HLin56EteihxJUip7zeDgJJG65C2wUQaydkgjWCzvp9TUXy7uxSitArz",
  "key47": "hWWBaiWxqrGZmsGCcZQLXgzyT3bHsiP85ZCUr4emaLm1Mrh4dGHmHJEDo6XHYAyEgYLeP6oTWdE9DhVhULfUMZ3",
  "key48": "49FJUzkuBdHpU31sKVvvZaUWEKuuy8sjU76NfkbnjDU5ecHsmd7VRcMdWjsmoUHxYP5s8qq5xHXmvAo6mX3aSZax",
  "key49": "3f69ijh2bJxM77KVwuAkPFLRyBCn2QqznBrVDwqZ2xWx1cDnnYCmem65kdv4GoKUHFiPrR792BWDk7jfNQ3qJXvG"
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
