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
    "5KZ18Cp8K3jUQHW3g2BZLTuNZj4dvBLhGVDBrvjYQ1wkebJxmePiG25T4WVZn3TZgqA1gRRNpdQex6WknsZ2fNLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUdETULNopE8zi8BgPPqxeF4uDtPMriSrPEzhdYmMBnMgpxTjah59EXEYHCkeiTTQia4ScQDz3y6jokjmadEs7Y",
  "key1": "2PsjX7Bb7w1NRYgQ4viAqm9JrYGusxKXWzsyQn9W1phoFYtX6GFAVscuQowDuRDWoqjEHmNHQ65WLJgXNDi9vjBw",
  "key2": "4kRq9qZfPWNW2QRqxtdZoZo4P9w7xaTpRD8KjuH1TSY4hfzwTYwPfNome51YWHpaaYCcYWV1RgL6v9zryvsSTTcz",
  "key3": "5PX7THfoTh9EBjvJjmFUfqK6QMFDKZDBqS6cttnG1a9A97itqRbU5bktz5TMkTuqeV2hT1MpZhGhwgaCKtHP7nwQ",
  "key4": "2vG33PuoHHvknzt1qoG4MnXJFdbh4Ui9M1rFyAjpd9V4zm4Tx4JA4LukVWsW7pHCSVfC5ZTQkg6GUeYrhxdNBcLy",
  "key5": "4WcbRNNy3PUiuuNpvuQqVGSE6vnTYH1D7eN1xrWcmUg23S6YzmDWyjgrR9JYBi4L1NL3JRf5hmdecdXNDxfCLZer",
  "key6": "3xnZ8EHEjkHT4CCiWZiZfqLA3zi9CKnEzrL9RX21vkvkd8UzB5oDQrDxELfm4yJZULugV2djiPVzokq1hnaJwCPK",
  "key7": "CZBwHDV36pMKddv4hL4LZWTewc1UjBiqMoNXYmMEmzBymPw7cNxfG3UEMmgjfLkjiPphHPn4r58qsbaajMB8WEx",
  "key8": "3aBeV4hRin1pihJJfBxqGa1C1t3wciRZpHo35yLR8BvCVJHrDfDj6qdFHx4FsXY48o4mTUZdPjHRjWfAksKoxKsU",
  "key9": "7KF4Df2vWEu27qZ8Rc7vvXZ21xCpAT2eFCrzxLR2Cy5Ty93YWreuPwMmsck4RbtqFNqtc7CnaPPWcmnS749NUWg",
  "key10": "5YPxMpcA7CQd8CcQFXGJNuTXBMhejhaNavnCgPTT8eD5mFWGqpF9XrRXZg7SouLf5iUzmT7sJwa9cArLc27oK1oY",
  "key11": "5SvxVVuhBkKf9HQe1abPUhBYqcdjuNQ5Y5rpuiwiMHUGnMCZdeqDdUqyASHBnVseW3xhD3eSRBYFhDLxBku8qvSv",
  "key12": "3P2hva1zDPvVMxqLvVYuJeXfbW2JAFY2Qcir4zvSXMViggscVF3vGxYbMdhiG3oXCosyZmQLz51PrbALVSgNu6tr",
  "key13": "49vwqSVu31X3JPNTSCGqJ9qMd9jKZ5bav6XNrov6KAZ3uyvKhQ9JBftaHCWKFZ8H3PicNtTnriVFyv9ALBXzsTDx",
  "key14": "2H1dLwUVzkZddLsQxPKgG3zjg1rGvCv1c7D7Axiv7fyBXF6NoLeFiYAXL5sLJBPTZVHf3be2C1GgM9qMRiynVfiM",
  "key15": "2xWT1n3rFQRM77q8R6RQbfsdkbY5VaP1Urv4caBeZNeeT7dJfDbaA25JXYShYWdbeN9Hcia3XmBcD1KADbNDWwM5",
  "key16": "3ufVSxw9N5SGDNRsZmNZ9qWSznSXWggf73V9Z73MiCDYpC4e6MnmhaXZX8rBwRHWyAuJHqCnEyrW2cTqrEa9giyP",
  "key17": "3zApUEtYamyYDSxWc3V2YxkcPFDDpQzd27gU4tMt5R3UTWUTpJNThcKNHK4z9wzo5iUFLFfHbQU8hK8V86KjFVyp",
  "key18": "5EBVt5ByfFZPEpB9Sn7MqykEpxGgYYApCk5ntTiW5PeTwgtB3ZZc4N2bgtWGw7ffwmtHmxfLky3HAtvW6huVuHCp",
  "key19": "4z3ijdvtw3SgLiqZSKTnTwPeK5PgUSJe3dViLtfpdn2AHjyoSwLLSUhNU8aFnT7sd2eGt5CwutvkZg6y8qhhy3tT",
  "key20": "5GKqUjvaG1n7fuofgjsBAqroaQTtiaWfxyXWoqkr5JL2eLc3KeZn4DZsvfJRL1GUwRNQ3zA1gDkeBTfpMePkaPKJ",
  "key21": "3Fz8mbFE78sEf9AcYz75cFMyZD9qJwtc3RMdou1gSZqp3RNLVxGxtwmXc9vpZVo3V7tUkjKHJGxMTq4voJJXuYr3",
  "key22": "2pUtFVw7ZdJeN3zfmCmieBx3PEKwiAmruW347MvPfFmsguxShijFyNyhPwbLQkANY4fV6p8G8hUcydJhiw986TTq",
  "key23": "4CBqf6jyZeVUPhHAfX3NmX1Risw52PR65jaTwgRkRUX8kY1gRkNu25BQh9PYBv8Z48RVXp3MWwFJBGxq7HAuw67j",
  "key24": "K6WJKHppKrQAhqsxUXXuLzaQm4315Wy42w1v1piRWPyJ8xrRXiCN9UwBye9hLFYm3ibx5QhzPcXxH8ZTUmA39J5",
  "key25": "3FBzs2Ux3W1ChPQ922prLSf87hz7pPTt5Epw9Z2rnxGPZUD5znwpVM6VxQTJWwBhoSdGogRQaRH5tB6WSc4KcwBq",
  "key26": "5pKpj6x2i1Ph6ZGwXSWiH6Gd34GMzhSWxRX1U1ifCEsDQrgLzkxct8kYuorzdSLz3FUjfkweCEfwCRTuZZqxnPhp",
  "key27": "3Z2p5KhjBo5aMGw6DGHjzHJCfmadEFpuhBYWQ2791oXEfNqSgi6ho8uvX9Aqvja2b3mwEabynicWKRLhBAjqp3wG",
  "key28": "36943W5ncFQoi2wCFKtGnMi8YfAjpT9mo2qAS3A9mNLTtTLS51zCWtJSiYvs9Uive6PbDRQPRCa8ikoVcNoSUoyn",
  "key29": "GKEYo7STK4vJoTmtfJbeYz24rP4JxzWKXx6Hiwk5HSZCoDfaJDA5WwXCoMr3EqQMW8BkCJ4AvNR2uwwiYVFWrzk",
  "key30": "4EBCAD67iMUjDwtmNptkdAEofkFEJ1doKgi1CX5v5cjzk86ZEh14xgWxXjABBjJCyFGDzL9qBwVKdJWSPX3aRwA3",
  "key31": "2ZVu5p4Aoc6t2ZePPtNdxs4DK7DY2yMmDCpVfPiVhj8PsMGND5j6zKjaoBWPaqswJK4PV1dwh4EbCKAkYzDaRSxm",
  "key32": "5EUvBW4EcBJW7cW553XiQfT2QRK77u1DAWpqDupqUxcHBfrixuEpFgHj52JScy2HhonMtm7TTU5MzV2LrFaQisN",
  "key33": "4wz4GLyhE85z81H1MAXRwU2kTfJAZ2bha1SHJXudsK7ZmQYL784CezcnaAVa83j9yr5sZaGdTikcWSaN9FAiRn9Y",
  "key34": "5RFWs6MLVK7vqocpo2iL6GPkg5SEc4s8ji1guUGPXzsT4yvk4oX72E6HgDEo4fSDSDUwF2HJ54n9SvCNLWAMWwQD",
  "key35": "4THBozBkmb3pG1wf2Yg8EgPKF4UUw6q4hNNrX6VQWR68J9od7tPiXhhenic3psTjMyzqJaTkP6SL4sgoxvyQRayb",
  "key36": "2DftzNnhher9uzEqhtUbYahW4R9AB1ErcY7oLhKpckvV1LwqRiCxomS3CwCwNmtptXaWAkKmewsMGub1fHbJXiiZ",
  "key37": "3ZFJ9YJiZe7NSjpcBuyc8xViRdsvB55Lhw1yoyoqsZEcXkJEP7uYLEogJYsm2wkWtG2fR4PzULXbxHrpdWZY2ZDd",
  "key38": "57Ga2BQoqKKLoGWSuh8pJn8y2DfjiZfvZCSuQUBJsego64ByqDNgAnZgB6kHtSTa5FjmjEVFsDiKPFdHVomE6qVG",
  "key39": "3gTK7SV7FMWMGT8MhS8tAwSpVnvYKCtR1LskW9dsbhb9wsgfoDvJp9eomRy39GzYQLU9u8eiZeZ2wkhbT1HjV477",
  "key40": "2UQc7Mni9FY1zgGZUJoSzT8QVcAEHGC9NSShcCviwqSENMn5VgGcVAYsuTRVgkmZTMPrHeAiZduucz5aihKKeX3o",
  "key41": "5nqzXCTX9u2jEd8hPJageV5Qcau7fSUTAhJqX8YK1qQrKDvWxfqAGqot8BvALwoth2BzfZaehZgWmjCVBLWZQPq1",
  "key42": "3Dw5Z8EuwYWNA8jgsEx4UTSLcLuzRs8yb8YBhkj9ozLz38Zx1bXz7MqqLFVgHkpHGZmcAcoZxVgjQftF6q2xvUhM"
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
