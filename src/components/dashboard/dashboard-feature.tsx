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
    "3Eg3a4YMkgHaJgVfpiuxARmz5SaqShCGB3Kd3Cnr4c5uSVrtF8ah3o2cj5CDbKRmgkNaMQk1Unc228AWvYr3Xynh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3sPwRtW5YP6P4L53oy54EA3NfuSNLyYk6K6LYiDQwJYp9muYiMzmkbyx3xhH5pL1kH2vrVXF7PMok1DZar67XK",
  "key1": "32fdYPb8Q2RbrKCmMqESUm4KG2u5NBKZ87Q6M1nJNBF8FWH97TXEghdqfMT3ZmWDHXbcKFy5RPz6KcaJJj3YhhvU",
  "key2": "1b9awQuYSFMV663wcraKb2zvXdUM3Hr1mw85KTMUTXwDbZHw5yRYkev3LTFpMLbkV8AeH4tcwcN86zZg9hUT2bp",
  "key3": "2iFJF5oJq8PP6zaPYsmSKeeo7jRnax767oR7M1ZcPYy8zQN4n6Mmq7Tz4fsw6cQU8fywefvLVecvu4bdK5WnGG8t",
  "key4": "5VoBXJ1Cm8kFKTPHfJdJW3n6u45Vnwpn4oNZqH7VJeXYmDUQ3NCWrQx8o7H2tU2XWtrBKMPqut1CXPYadho8BugA",
  "key5": "5Hf4sC8ga3NTDvQvFo5ww1BZgnz8B4aLLEgLavxfkrx3Z4d9c1fv5RfMz92cisP5seYrrSWuk1n79ngyQAXANFAe",
  "key6": "36t5pY4DB6vB7ecPAstBVAwwGLSvc6MAiK9EvyZQDHGhbfv7aiC2FvSHH6jV7kjhxueicB93PVYjJfEgcVmX75QT",
  "key7": "3VVisgUqPsVy45LrQr1u5uH9KngVb9BiRtrAzZqTfkCgGrzNjcs1758K1zbk85xQopwTkXCpFkFctnXYPFkyyN2s",
  "key8": "5YFme4XTRuKtKfE7MBhYWqczf9xbWKKhTdJJBA9MqQQbjzNQ1ZVXExm7ssTS4G7hXnhdMsqWqFBESoU4Qz1sv6je",
  "key9": "4AzANdYZeoSQ47CrM43hFVcg6B61G8UEYsR82fFHboG33PaW5Pwxd6jG9Dkx91uTmnu55NPhNhPxuWFWhXws9vqx",
  "key10": "2Ri5CTzj3Y7z3j3wpWQKEGw5PwgezaFmVLsB9B8dF4DQACH8PYRSLZHYi6LYq2oXtkXEy8WGfwvCjjb86ekvNuNt",
  "key11": "7rVFW3LbyXbg2ZMkAux3srwhHb2wcipu7jnnQejqaCDTfgYvea68F7kAHGPp5xGNjU7gQJSyKY4attE5gKW8tHC",
  "key12": "5N8T8GDz7LTriC43doNgwuJFJTuqa9VgXyuqTbgSXctAQSUBxuFMhCRTHdZ4GjnRhHqtgoSGCyhce5X222nytLxx",
  "key13": "5cyCS1Po7dpTSR6i7qNqtwjarBmc4ojEgoKrGa2hbySSGRVqqk6gcb28LwMPGAESxAb1jb2ZRdG54sKqNG7GhbBV",
  "key14": "5ykyZY6Z64aCUcro6wbrxskVpEifmEXb7sfaudsPdnmCNTDfzf8YtAkCKsV9YdzbeZM9fJhiuYXHM7dMaz5WXSJL",
  "key15": "2VTNFpwyvk5UVrwDmYDU9GNok3KpSNrDDHk1rv9Y7aqrUp49pYo13o5c6udQSTU6MAou1GH4ahMr4VeJEskrXKnp",
  "key16": "5XvvAi18wiUNXUXZocFdEBZ7n4ser78uhg4cdsxDXXS5m8jP3vQVEspDhTqNMJMcm97eqeU9mf48BzLvUu5nrcdf",
  "key17": "27UihD883837evNwkUjx2Hyj5jsFDjibSVdGDf6F3Ku72fYCBcsEhzFbtjmnGY8yp4hoUrA98y7EE79RqAY1foH4",
  "key18": "4Hjzv414yejVpZVWFn17hnjSiWCc6muSvUZuDVqUKeVntmRgGuM4XwXCYKwS91VAQ6xToKFpuMbgPtF9kS5FwB8L",
  "key19": "46ujTozHoU85Ruc9jXycgJ7F87yBz9qzkVdWStNXCuQVdhXnPDuTNNMvM1nNRwW4AwVcHEbQfvgSHoSgAAePiE6a",
  "key20": "4NNQDGZqkZubBbByLDXVyReHxdVyH3xhwqZaG3WRdfJWKGQYAgekNNLvQBVdhgvV1hyJfo1RhHDRoR6CBE2AB4YR",
  "key21": "QGDPdUVRhYDvxunuaeVkH46LM5vC6ubcimPH3xfgfvMAspLJcffRUBR3nnb9yJobgGu2sUwLeaK9GtEyo5P3iiu",
  "key22": "2RwPMLhPgt1fJbw3h2deh5qT2kLfh9hgfuuZtgnj39ZEx9ETBN78w2sHPgZHYtu5S1iX3b2pz5ggRmwyyyRxDLtL",
  "key23": "3r9tCa4wuY8V44pZMx5GyCW58QPSWJ2Es44hCPz1eDLdSV7RCc3vtQG9ep5yoqVe5Fg9g3f99NrDqK5aJiYqLn8Z",
  "key24": "3h1YfbEqxRLAnMBUWBYhiGgQvXpHjN3qeeL3S2chTDmCJ8VWxFTLsSHH4Byp2DgxuPKVqvPnAwES6L6xUSaUdcvs",
  "key25": "59JnjjKWWekkj59kdWATZQmitCaVDjMkPiToTRk58tHRfiiJB81AMHU8XQGYEWY786HCdyd6ditkGFbXdHPrZZzq",
  "key26": "pGa8x6ui713jTzqCLkam7vxVsF6juRZHBnoDAVeX8UcDDMiagEr1UV1skuHZdsRptQLBF5pjyiWyGCL2pwVNugX",
  "key27": "JEiLJ4U2PjX1hsbvH4LB3L2f5b4JgciLTAFHVprM9ekXyDcBpMznT8osGoNKd4Xq2iBK6QyL6FmLBCs3dxfUDNQ",
  "key28": "5VVLMte2fjRdFqWAFz1pZBb741o5kuYrNM8GxAK3AUeAQiUfsZRb9SCwtY6F2AiovCwDMTCU3GVT8uDW4gcq72h6",
  "key29": "4CgtKiCaJA8bdDHd5WSf2sS65GHSgqp6khfgkjATkLwEyC7xFdu8KJbhoYm6C6twbVagmvCxyKsbpTfNcMv24JpT",
  "key30": "8fz2NAkF8HJ9mzs7Y7sGoZpYP6GpXTfzwVpeLZfVqkZBz5GKgFtu2ru4yZzAPpKGMXKqCWQ6vMoAni8ecvzT96T",
  "key31": "4UGa6oty8Mthq7ZHHdD5DPJmCmj9gt4izj7bud6wR7QPMCAS9pA7YRcHvj5BRVJZjEFt8C3uDQZP7MmNAR8yvMkQ",
  "key32": "42cVqsrcG1k6n7UxNZBmhFFne2JCk2zcVQzzTHrPehDGedFmSceawCXyWfAUeGmBKe7NsmpRe75zGhCxMDEkSYmz",
  "key33": "375KGnn9SMdcyUTC1XSVDwmHHXAxLsPDYSMCs56fghPwLyBSNyc2Jw7Madw3EKiXqnetrz7TfUUwXhxHBgNidvuZ",
  "key34": "2Z8duSe2NwvxpTT9X9VgdcTxYv1G1o3zkQHQdbVAaJTLU2B2YMF4Xart9EduoXrrqUofwVBDhV1hx3iF1c6eB1GU",
  "key35": "4P1NE9asur8f6iUY4Nork3vJ5fw4mB8P3rTEpNbS2L3jioQ9SFxhr1XZ2fhX6dWH73KVgfPEsL5s4QHQgZbjea6T",
  "key36": "z1unnRmuHCDzbBLRYvJcarHgoyXFSryy9gj2XPqx7ecfoR2qxvdqT3pG1Bb7cWQj43xs3BMWHpDhuaEByWyUgLC",
  "key37": "4ktcbriME57Xox3oRBXEYDv4HHLSqEt4uWRQ2kwm5Em4mrTLb48jFmYhGAunccKv1zDmyWBeFiEhasMSvxtxry1b",
  "key38": "4FWURSx2DJUSdz86pV4b3AJXpJh9KRwbRL2megddw19ZTcRgbzWgZriVvSSZE3ihNvPXB9ufeyw3EgLQafgXNX2U",
  "key39": "4wGHZ8ai342eiEurNSJwFHhH8BguEXEMi1t8CxGUVJszrz3tgFVUkJv8aQRcoBTkkSmghHt1vLuVG3AD3wTYyidi",
  "key40": "59Q3jmC2YmZs1xF65Ja6dv1ijfH2D8Uk6aT7fqymAckCvuayzoLC4BTjjTHWFWoLPzp6tKKZN7qfas2DVjZ6QNW2",
  "key41": "549p5dq6YHkcXoX2kqbPnEvxABzm4pTFBdEd5aAhBLomPjYDxJVQCpxLCjTWQrKi4ZpQYRr5oNiZ8SsqnvrKZDeQ",
  "key42": "4rabKMHfRqWvARMX787mPUbfyJL5oQvMGZDorUpRLv76DpF8p5YzNZmYTobJ3p9tjmvam1EegQ1NNwsKmj5p7aha",
  "key43": "4yriCkkERoy5a5z3B6zGbZ2S5S1tTo8xPdZARD5jBd9giW9MCjERamjKQPrN22xQ3iXp9HU3fxg6dXR7vXuAPbuG",
  "key44": "3EmANCVCLgpukERMpTndAhXBqj4wRXPmDLwP8V8qK9JNmmadHwh66gF2EKfbaeDqtAnEN2iAqVMxRUjgGSuZuSsb",
  "key45": "4uMDKSC6up6o6sBuNaVDof1J3EUxKyvX7n2o1Dz3NkP2SJdRcpYwcgFBrKSzzf6RdwJL6xWhZYeuq6A4RbXN7xAW",
  "key46": "2KrXWegSY2DLoCMDKgKTw9VUxgtX2L2HubFJ4CvJ9jxegxNd67VWqoqZAAwviTt1fshcn1iyh7WAV64vhwX2jiDF",
  "key47": "5ZSyeSa2JtDh7xqw1M8uo5PhXMhE87AaEiEUQUpwx9WgP2amuWH6zuAUQxxvk8oSL5Qjw1BiS3S36zoL7C2BjcFm",
  "key48": "2Ec2khUFq44BsHgiQMTaHfcXaFJoooWrPHgKZeVQr3jeYwAQEcupViqP4mkXuWcXN2WyVACsBaM7dfXsvS6LxyyC",
  "key49": "tXGEVEcMv4Y5MZCz5ZaK21vUXvYf7ndrhoBDpTFaWrizvnUdz4BfdqCczWmJuFH51y1A533fAiZUN1vNX1ub4CL"
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
