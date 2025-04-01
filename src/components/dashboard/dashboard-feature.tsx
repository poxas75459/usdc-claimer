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
    "65ZCLqrB8E4j1SqRe2w6w9dyuJ22MAVb3JKJZAs2sGRKg51tUYm56KegHXrBBXWJFG64RjDkzo6FXpGRtM1LhbZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbUodnX3pay6DLnPBftc8fmhNmpHVwCi24WMbpYnt7ei8t39Agh2HMV4VRrKhCPiAm79NAVgYtP4MZtYPjxSPSy",
  "key1": "rwm5UEnzA4dk5DuQojTrBYNevTHUPUw2u7f2aV4sjFLmH3VWMKdrcBF1brMs6YoYsqoEXrynZ4A29anduwsmbP5",
  "key2": "4VhqxmyXEqfj8PYVXUWrw5kGLiLAsHyNkp4cT99qd5D2uJGmWt5gDsAa2katdxC55hq72rhLneKkSUieXw7Uo5GY",
  "key3": "BxsGDqAwvrkFf5NHfDfDJxPe7Vm5K1UTUGiYMXp1njrGNiXRi2qUGgE1S7V96jmrtjCUAc7mVCjA5Kimf3SSFwB",
  "key4": "4excVuxe3RWN6Srr9uxxmKTfqcScBWPRimrWf8PxR2cXMtpegi7DSac38N4R8daTZTnM1vZsuqMV95wmubiKWytc",
  "key5": "hE1iThkgf24zx1F9ZQwpWHoH4sn2R5C1MBJWGfqVqeUDXoW1GZ3eqv11n3qD6qhPNtkN2PBoEUnvX9xVuA2PGMb",
  "key6": "5oKSA22VLSxFdyTmUYRCL1YmgGfDwkezbmWRASc2hYra2gTC5Yn2GUwxjvGvqZJVpeDmdiU3xMfr6ydNctbmLUjB",
  "key7": "2Qp6UbfeicQUSwPz96aCAxGawqd5W4U6gyE7kzHa4ABcERjypQGardYtJfYyjNbt1qWgYTsv447eG3D4jsmJsTcm",
  "key8": "2ymL6K5U2Lv4exjsD6eZmjyrXqKWSg5nGLckRuytJAg5KGNKrEqhAPBWHigMU5BNxAVwvAQVqaxwCsLhuakbLvZ7",
  "key9": "4pM1QpyAotAvjxLWL924LC9freTWNkzT8DVT694uormnBXKhpmcSEDSaXsm9uxFVUpzsiNj6drThp3PcTJkF7wMS",
  "key10": "45zRZbo1p5wcz8pt5CoDRTrmG4FvxgeGqrcmh6H18njuT3NnXJwDHAbEyjP1j8RmwxYZ5QLTx8vvw7dZnYvSDXxo",
  "key11": "5SZLKt1YMVTMSErXvDGLEWnWR83jggYU8qXnb1LtvAZ8P1XJSfRMudxPqt8DBgwyXynBdCRFho9Giqp7oWpEiEpy",
  "key12": "qUnijeQsENRrKRF46GzS4sejZrUcGYMAK49rtFrjAsNWUdt4Dm4FEV8zXdLEfJgevtKGCzTHjvGRbqaXR5qVvQo",
  "key13": "55V7LpUHU9WkwmE9RKaRGAatp1tQadAPKxegNLLv8oSRM4kDf1hRfbALcAzsDtgm9nHFfoQwQd3ZHY7A4s751sXW",
  "key14": "2yoT8eb1kK6Whrg8tRjcRNzTVNMCLXFMtvA5AL1uibhY4XubNSrCCXAD3g6irZsVdWBeExepY8dZ3d3epMVV1tRb",
  "key15": "9eDBUQpSWKG5VP2jFoQ3Lmt6DRUzhMESQ5c3X6sioRGqWhPp2qDwJwKZ7wJRYW19ss1HSXt6uPTyav1r4vJ8Eic",
  "key16": "37xHu7jbyJSaKjqxtomcuMHAKi7a2i61hd7BAQSU7FxUXQhNEhh5hom3vFZmvVy6TDsDS1DsHFAfAoWHoevPMESC",
  "key17": "3jLQCtJBBPGwD5WTQWbkyAfk3VkCN5wRw3TwabKGvjxPnHhfvuCka1ztUpL22mQCAf91Lw2bb3L57bHbBBAA8f2W",
  "key18": "2dXBuA2QkhJo86tKxuFwztSXP7CEdAiCXQWedBG3JGKuyV69ka2mckWtkip1rcYuZHHKqqDKk855XX4wX3qwPcFk",
  "key19": "ABhVRyfdz4HpY7y4NNTfvWYabNggczrkviMS93DWPPBLTtGDmrZYk8yoUpEdzKuvVreXVXtSWxRMDsXj48RjpH9",
  "key20": "3Puj4JA1xec3s95a3d8BwCQVWcJoJZwR3PkZoxtu53D8sc4hrzDUNRZihJ9DVUhamiGv5QWJDiFpS4ptrJAbPML3",
  "key21": "5xUW8mHPGtk71hULiRSA6LGKnVqd6EAXZqTv8xUhR7eHjegYF51w9PWJHh4AbRxaU71gw98oRja1Pwp5ei6g7kwN",
  "key22": "3bc4jsFMi6pCjiRJgRdJibNg1b8TPrNVbp4L5ejp4Ghi5MjfYh7xdJ2TDfcV7FUMPS3pXcyZpCsrY8V7VQhHvaxL",
  "key23": "7t8SkNkWSW73nVkKKLJRQsS4FchREKBHgXtC1kjbPWJ8JECaTfSqePjHfYF5ZWysrBcf6nQA87pz4rKp9WR5355",
  "key24": "5ChMjCqWYRXhAdoPLndnr2pucMTtzVFAKF15q2VHDqAYbV2utPNUR962FaQwXDFopiysxx7hGShgTBGUe9GeBYp2",
  "key25": "2cUP8hzbHirgh4izQ59gCHyzbN5nMbLmt3ariLXDjuZF6CHSHUp2B3ytAH9p3nH5H6JSTc1A7MP5iF6tN8D4git",
  "key26": "JbiVHAjuRpz1m62wCY6pDjYx1muSqShzdUtAHKDoWhsxuU9tZmFBX52gk4hRupR96LrK2oGLtbE7v4tNdEnQrkX",
  "key27": "3b3gi99V9YsyPCHZqfom4woApsKEPFeZ1H7NS24wFzbD7r32dmPpGCmvLVcsbroUTrxpWTRouzmzoQTbKrCUof2z",
  "key28": "o7GH5W7pziNWDA7rHZGXvZNsV8nhUUL3cxUWLVEsdgdymQQLCcLGX8gQRjWNd4Soi8wgdrCVtfL9NrVnjqkpevq",
  "key29": "h3Kn6EPZapqdpXeRiiqNsHeNxumZhsbHxRU6p3kYomQWDpwoe63uxXuyrEGsgR5Xivh7qveUG8fDtTm6F9xFqwD",
  "key30": "5FTQPaFxZf35vvug91FTvigFJFsWMSVqMDEeFoHDnvz33jxg3SF49KnPqu14Y5fSLBkUW1Uf2kT26FARXv339aJe",
  "key31": "2YP3RrAgrk3adxUnZn8kUeqYPDKbEBmThNbhjZpuSrxA1549EQYWjJCy4CW2zwBHy6J8ayVV1mudJkS55sWCnZ49",
  "key32": "CZtgGPmEc49jKeo9rNmTPcsskcPqruUnBg6X8GB7ut4E1f4QPVauCy9o5Pd5mqwZm3jE6ajJqZkZvQJjVsLNA3N",
  "key33": "2qUpvXWksRQhGceyBnxokTDZPrjeN5JYATX1e3kaN8U1EKGUcJTb6yj1ntg8tH4iHQPZwPKuoAFMMYttLYLzE3hR",
  "key34": "2LkrBmy3gC9J6CbfmH55vw6hXWyPL2HqERGzP4uk8AJD7AeQYzPwBmMfAmAri1M5vb3bdeNqR36hGEcHLZwLhMB2",
  "key35": "5gXgpiCMs22GDY8jEA4axYbTegaBqjxQZjGpBkFdxjCTQ2dBoCXfBcX3TmprP9atDzvwB2cQhzbmxPfQEVdmsL8U",
  "key36": "PgUy7cBaHjRb2LBHhXPoEEgBtdaee1x5T1CCT97WZ1ZwTo6WRDQrS4M78uA9RickyUzQn6Y9JADEMKpdkLNrtsk",
  "key37": "5KJDwQa1w43K56Xau9mJceNn28qmjmXSRRMeBxiBjX9qbCQCSFPZU774knXvRnd9miwYe2c8ERMeQyGdujePQnpL",
  "key38": "3xCFKXUf96mrYTatdG8qipDQDL2XxivGHPKbgxFQmpa9bstKWzN3d4PEMHYUgmz1Ygc9DH3QDFy7DhukdCetUP3o",
  "key39": "4Ks1KAwZwNPkvqYxUEv1bUFoX1rDfyQnJZuL98p9jo9KwqMvrYMHWubyfQco8qmcqiZgfNDQDhAUj6ZFJoqhwMus",
  "key40": "3DA5u4JQavjAmfaz7TKUHTuxpU5cKiqtpM1wkVXfzhacNgx5iRi1iNsmsy215eYtj4Yb5XGxQ7Ckj3PemCcAgbYb",
  "key41": "2JWPRLKcEp1dFvZqtDvyf5EbYnEsCb9odyLT8byEuTUNEEQu3G1rrCmU1kckMBX1JHYsmRvDvHTNCokgmFC8xLb1",
  "key42": "5CFm6QuuVYCCW6CruEdbq1U4crYyT8jJyasDRCN1sMrkhBjHgSYHF4spoL2D7TtKvGow9utTWejwAnAT4YMpvmn3",
  "key43": "2FQtgz48wHxu7AibZThLvdgUigrrS4xP9hkAFj3txahpKwL4h4az6J1XBNNUfuPm8pPv9REREH2jHwtcZPFPdv7D",
  "key44": "eNqPqH1NxHDYGFGT4Zb6oE1e3FC7bdNhrTV612v18C4ksxoa2T5qXZrga1GgH7VZAZH5XSFi7pVgc22L9BQbxt7",
  "key45": "bBCTW4o8mcNAWFMMAr1HtMLj3ima7m3N739K4KLRPmyWQS3WNb4vGqSYHr5wgTaVabwLngh13MPJGYVaHXox5S2"
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
