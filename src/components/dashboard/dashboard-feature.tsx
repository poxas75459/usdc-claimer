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
    "2MGRCRp6oyXJKpub6ybCPYj9eJHf2fcK7fMsUdYGUJEY1hdubED1n4G795ky2BPtLMXa99NWb6JdtNtpyE6JZwGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EzapmBhY5NvtrieoPA5yVRVyXtowCBhGpuD4ZkN8u11Xp7kWS7QkURuW2QWtR7axkn2ZVX3NhMadqJg2w7pTiRE",
  "key1": "3FpN5Q8P7UH3Gjp4mEqf35qQhWGn8MAYFAgbyvgF4v2esJiCgaJJz3WQ6PaDCLPgpKbre5PEUMjGdhxY1bpVHdth",
  "key2": "3SXky3H8fWbF8pgJA6VH5ZaYSePpRf1NhQnrHk84bRnjvrvCXcSPpXJM2Yn1jZTt8aKc2eZqCNk8Ne7yKhJCgZd3",
  "key3": "583qnGe4vSniEFjTtvsCgc2sMpYNoGpwxb3XW8q1e7MY9xHdRNhrLcETiCySgRN7RN3r8LPvGamfTp7A5GdvXkRf",
  "key4": "5qm62EVT6WpwJJunW3P8jP5bKJaHoercTHgPEfFcxQH81MyhQ9TTNVJTxLo7fRNVWRRucs3CySNdiYjS4DbcDitp",
  "key5": "53pUJkbZB5wRBWebAwxQGCVNDaUqNe9hvhu5dVeFMDAEsDYmfwrRHUaKYe6WVW8Ca1NQ6DkEpMygP5MQMW9UhiZ5",
  "key6": "7HVWUUkHnzuPvWapRhHcy7fRowypZH4TSR4urYj1XuUPhPWxde6AuBMoJhGydqSvrbUCnKJ7aCe4FroJgfCcTJU",
  "key7": "3URHDP14YVeZmFGxGoq7YwiMZWBBBjpMQ3DCyz4gssCxtiAVKkDU7W5Cs7UUW7y4Hc74G1RP29hqFgutvvZoQjv9",
  "key8": "2oB9Rq378iXCV4fHV8NTq7iWEWyiGgMEqJkGrQ1JScLABJSCLmdn91rX81WxKddJScV1MQK28vYVpChZx69tFkAM",
  "key9": "3y3QsjEdiPQA7mcWDFGaXszrwLR8svJF6iCjtQAcuzfv5ap5x9ffUqTcVWw7td1wh3Rqt5g3cc3o6RavmdcNUbTr",
  "key10": "2MW9t1uFRvhFGRrbAvYXvaZ25MoqHPEHkKjQb8u2LEzN9xw1mrMPVEiy3sbmcp1A51pgKUaYKWzTEkmy3cjkbdAy",
  "key11": "2MJer8JVQXE7DzKkBjb6uhhDNEJRiG9VSsUZcWGG92TqKPRURinToq2etcqAQy3KMRy8F1x8wz6T92x3XjoGFdTG",
  "key12": "mJGAJZPHZhs9CJcctHF8QYv4jncpRQLfwyYVwECeVsyKzcieS2RLWYpoWg2MZWXsVUhD9kdtijcVE4Kf6zcHkRd",
  "key13": "2hkTVWoH1TMTRQTtiCG5KWmXEsgz7g2EXLyyumDrAyoxP8A8yrWab8VcYjXbRQqPtLfxDUPBXAFQMfxUr1oXy9Xg",
  "key14": "mFyUw2HvLoWezeBVWHEifgP56sAMSuvFh1vcWsH2YZZ4cGYYTJSAvXm9WPPnQihkNRYwCU9Fw14s9L3s1VHQed9",
  "key15": "3Nq8w3k4KHpJ25UXzDGDPNvMQ9nAzDyXWbtgS74T9NoLAB32rtmDeGKsmyEHqqBg4qFNsUoy29hBMhGHuq8Q7GRX",
  "key16": "2goQhyZxtfh4YRbpV7PCmMnYiUXqUfS7XUMKm7WyLLAyesTCETTmy6iYLxfBUe97AgnxPYRcXnEiu1ZciQcBHMCG",
  "key17": "2Ptmp9ZAUiR2xrwTpdsszv96Sn8vhUK5ud1TBS1XmkRWwTKRvawm3aJ63kZQnrHrJPBUeNhSGK1PPPnUVJknyw6m",
  "key18": "5pEC54zimBikNXzSPfg3Xe71x8agKsi8Lz8CkojQ1AY36mJhRikp6YAZF59QRDq7tdZHS8K3aw1smdqtUmye6mCx",
  "key19": "395pNZyhdpmuCavfMwyBNEg4gi2GBST1EANWbaeCMYsnjeEosdFnGS4fEQykxEWWMd3iRfNuErZBJwKJnZaPhP2t",
  "key20": "39K97cHqsqjb8q3vBtp6La3UM3W2CNjbtDoMY2hx2zXKPjupJjg1drNS9qqXCjM3XeXERfPGMu88b1VhxrUJJJY1",
  "key21": "2qiFQJGCJ1KeAF8tv5of7zHmN9ykBdSgMEqaXZnDwfqsesMeh1DSA4QUUn9K5r7RqG6ezVFTKT64NZ5GmbgJWaGi",
  "key22": "3GNnV43SQ5CtXPVMxmG2BrHN2MwjqDw94GqmUKWRTMqaSMf2Hzd9NK1aUCa13PYWc6wuxkXPrdcBTm63J3WCbNVz",
  "key23": "35vcgHoUR3NzuDUDTsc1GYvnQMxpaERwhRgYhmgy1zUb5LGxPsvZUGhKqXJTDjfyW6unWBwuMukyYDaAWCnWWkeP",
  "key24": "2NNourXYADBHL7MyUXTRR2qj3ds85Yf3qNedNLSEiH4e5N3UbCsbKFtq9R4tJsSFWS1NhNrDjdkN888DzfSEEnGK",
  "key25": "3uMcYPRihq79JyfFyx5FzxnE4dwLFCB9HkkLEY55zPiFjrCvjRhTUNpsuoirQPzgS4WQCiEifK1omz4EWkvwywxv",
  "key26": "EJJ3Be71XCuPyicdKCCpiggrCTAYr2ToeciadjUmHdcjRSeiWfKdJgbSaC6xZ7BzxezTJNugB7UBnjQJ6K5kMN8",
  "key27": "3jRknbweAefwgD4x5p4Sd6qCRtBZgYpK671ou29DdSEtGWcUs1s9zzYn3kz7FMDod8ywmsCAmnWzKD4iX7DXCaET",
  "key28": "3ZJbqT6wQtZyZKq8YaybVQsQVEfva9FaBCYgmt9SR2VQcxEwHTkRUGezxPcgdMnomxkYLvuf3okHFt7nrdZgPQ44",
  "key29": "H6ZQXa82szg83uVwka5iZUFYANWsK5ab1Sx1L5f8pCzRv1YthoyffV16fGCnKo1dmzSni4FzTYWpXoeUJaQ8NJJ",
  "key30": "qhJPhSRKTGwZfrtRRxGVDDWBtHvrchQzfwn8125LocEnvJdQJoT7kfBn6o6xUdgZcDvXq3BZJ6adhMxQqkye8uD",
  "key31": "3BnL1gQfFSZYiSWALLaNNrhx4adzBaNbXdBGk7GjrS87ydQUErSKvPDGm7ap9XbZof7HySJNYF5nnKfkeQMkUhCv",
  "key32": "2iw1sbBbYfwwUp46NZKWnQLizpawg7jZYBeZgQcTgz9qAToVYQiooaRRoVbvNrRfjPwN7LpEW1Kxzy5CTgdYmiZj",
  "key33": "2Bs4MJgJy6nLQ56Lz7RjyogqqGyTC4DuufgiaGZHWKfQL9eTNZHJBSsg934ZB1cXTeC3M3DxqEVbyGqeryacHHML",
  "key34": "3aT95w9t3GkJF7JSDBkYCrSfNeUPwMcB7rsFL1bz9innLzerqbXWA6dyqGAn4MJKULCEx3QSHYbpEEDynbTtHQya",
  "key35": "4oWbvih57eWuLkwYu7tfPKxZD3ipUyM7YpcUKsabWxBiD5fkC3WGFSSE9hwju1aUWiLVWJEcchH5y4ZVxc1ZHfQU",
  "key36": "37j6f98fVVK8axGHYUAFnPEc1NUkyvnVqJYjbfZpgP2y3aDCTrodWZSgHdq8qNAryroew6Yk7HD2SEg23eJk2Scr",
  "key37": "34xYEFamqUG9mDbaetz5t9yoWL8epPVXbr32Bf3V5wPQbeboDdh1p15GXLyEY2Xycg3bYsvMRHW4FeukdWZt42v3",
  "key38": "2NXuPnFXY14eqriPbujYMAjMuF2ZBqHbU7iDDgKDDGaobsbFvJC7M3ryD82XpqPiqSMu4VYb1nAdj3KDSNw3R95D",
  "key39": "3XCpax9ohCEBFkgzdtZmU2h2yC9UVTFGGxwDDBmmGWL2ZgTEyW3wksT1fhLw9CaE6CXs8RvNnCnSQD5dxnMNra7g",
  "key40": "3MxKE275NaRBfusyf9wdRUyA4xkhcxfSJGjsaHEFXECrXjwuadWkwXq5SNZQ534MkTsQM9Btowbr7VTqLhqFtrsT",
  "key41": "2QcTQSMX4BGBwAj7BzNV96m7ZfHgUbaKbJKroTMDJUkWBf8MUahdv9vSTVGzE2sQ7FEAXdnBoghtV5JRLNjAwYnp",
  "key42": "4wNDcnEFf4DB2GJ97MNLtY4MAE2oeneS4UuLy39BM8eMx48PCmfShbpNii7kL9obFgrd27rwHsEnzo18b7ZnNtRb",
  "key43": "3Wk8NrfWDtGV3WoYBrfyqESrQkQzvkD1ZUHUKDgAe6mcAmwNxJYjUUHb2FReRXZokkchVU7qX9dqhwKeydR2y9wa",
  "key44": "15gQfWckHvQrUUUZKURJwgAg3SmVsGb1xGNibXCFv4QeVM8UEVJ8pGC3CfaE3KPvHXxpZBEcS1fxRFW6wQL8oao",
  "key45": "64FRa2g3uCEKfJtSCgsduVDbMcqVi43B4VPiV8d5JTfMMLKKgvouPrCbZpcxrsmjaNvF27PWWFzXKS2ZhLzYchRy",
  "key46": "4dQ2FxdKexE1MpGcPKqoVDNoc3j1vEwoPqjNxVLNWCKpcWuYzkLqQMuDL8J8VCdf5FhcgasFkXDy7biDJiX6LFvD",
  "key47": "4kvfCcPE8EsmZceXZ5DUwtZdMNaRZeGVm4HezkDm3A2m3sTBexATsL8rmWKtaSPtc3mw5QYQ2MqKAVz5JwAAxXf9"
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
