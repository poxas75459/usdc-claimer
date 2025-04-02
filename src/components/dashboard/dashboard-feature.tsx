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
    "5AB8du3CPcR2m7xfRLv2ooZXWvBDaGoog86Nmtvk2YHicMfsUXtRChHHRqwhdNRqKXQfRkzbwr47QvSQSfWCoWCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qoGfZJoBTutFvSubMWM2sgsrs1fcdykjonQqgaTNdKmh6y5LxcnYBAyTg4meXCWsFo53iL8EpdCxxbDFVN1tUnx",
  "key1": "2vgNfjg8XsjotyFCq196MHbM7PnhR6KqRZsbxdXrXYeAk7JQmPduhRW9FDsAZ4baSuo3qs4upRBNoU1QGEgo7tHq",
  "key2": "448xA7WdriTRaHHbyEzqkFSSEYejh8eRCYcym7kBu8Pd4sLcaLbtfmkL2umJdAsKB7mwmdHtHGiw45DrJD4XjNzW",
  "key3": "5qhfYomb8p5wZ6Gu8we7a2ww7AgFJnDvU6hmGEG3hdje6qPUzUdQy9PfgiAeZTtsFEAkREC7Kq581fneg82F2DEY",
  "key4": "gVLjbZKcLJz11ck4YXs7gTULjwufUoEi6G2BcMBP6BJJRSk1NytCwLG1eNLU1GtMBHpC2timpzkFXCpsYQerk36",
  "key5": "3xmnvdh1QaqrX5rVySiUfn3CNPGhUxEprmiCcVLVFjV7zZmp9iiX9qNQDRVFVkgGLmZX71PJ4GcYn6AvrRY5rSv6",
  "key6": "uz2SzTg4e9WjErrGq4RpgQrghK65PxT94Y6bkpNgqqvF8KHw5TrSiYKJTfCb4z2zfcyw14NZFNwp2cGkAHrZerH",
  "key7": "m8xeezpbJ3aUi4zvA7Mhtdvh14zLvghLpBTtARDHobMF4MyxtA687RJjv3BhSdMEhktc4LeCPQ5vKucsNC4j4QB",
  "key8": "5acTcNadND4aaXJCiubqZ8aHsdUnE3s8rX1KVWoZb4m668JRd331E5dtYNSZwzzSH7Etyj4hbuJ7tiecm8oG1XgW",
  "key9": "5wGjd6vmrB7DEL2dLhxkhxwz45NgDGvKCgoghmKXJhptHCETvEd967nuC9M6hUA4KuQy4X1phQkftffzoDpyzozJ",
  "key10": "FBf8cxAVexqWYr4DgBhdcoUrEr2zfCTdjDwvmnPqTeXiM57VPuHFBi6Uq5C324joget3ptHd6MhWqbA6aHCXmgk",
  "key11": "2fa1rkBdW7LH5TmAAviGheYQhZWnBBZ51XrYyPCh8BFZ6kNUQuXom25SCCwcbkNWLSDmNnjAH1YWfTqhDW6Qhf3",
  "key12": "3ZMu3dXs4q77X9Ah32c9Em92Pe7YruVeRF75mhQpiWXW6pU8q9f5fDPwDgfMwedCZyYANefKJxhzmhhM287fdkLG",
  "key13": "3D6YjwU7pJCkT1Hkd1YbdEjR4MG135FKnu1LvACAhSSuK81mppiWheRFLqYtTn7Xnr5hRGFfpVFntcUjfy7AiCa7",
  "key14": "4tBL1d1r6Q24qZx52tQNsWGHkP4xBQykuxJkZkcRcswbf59EirtwQDvCo7XQazwtmTh454VfxsN4Ph61EFzkzQqk",
  "key15": "5ED6zg7ZAjikx2bdqepsafcqRFtoE7LRx1nqM4B4pYPmvf9Vk5gx5i5b9QVa4vAWB9tsU6NTQy2WGbgGVT8KMZVe",
  "key16": "ADU7tsZ5VUkNeVRTZQ5nrnmDG7mDtbC1i5og94iEfoTNKEpcSJWYngNkMJq3CgGhTUTXhgDNXPjMzMGZDMbpuQj",
  "key17": "2eMQAH64mXQ7j3wr84omi6SoSt8TTVdJFrKKY4ZrpGqsoqbkMk6ouf7qW2E8RQmgdKiddJahnQAt2qQWQutqFcmh",
  "key18": "3wVGGWUu8ZdMpWamDWEP63qK2fYskuxYb2PQGCq1kRxCgYD1fbt4vSym3EdzKfUiho4KfM5nVdEkVSv6ZyuACcfg",
  "key19": "zGPyLPf2bASJzt9crxQi5oUiW1uCWWNoVGb31Xm9ECg5J4hHcsWYSSbCnh9Rp1EBSgqfhjANfr5V1TE138YvfCG",
  "key20": "36FHAa8GmwHi65tvCoGm3YfnnbsVeDJnWCuguxkHcdB1gSsDTFDgfEVTpEZGtXm6mwjWwdkBV3rn99gW1AAZhimx",
  "key21": "32nqGk56NXq3AWfHt3ESAV4fUeSqdBKGbzLx1naRB1HoLaKANBK8nNmM21akELLT5QucksYWFrnK8hnLsacrNwuY",
  "key22": "48TkAGoVZb9ec9mXaCEtq9LSCfSagFXrEMAtNECfD2uq5ruhCZunUACbQUfABu69d4Ch7u81CzM3pg8SgkTVgAsM",
  "key23": "5wdExK9rLWjAtFp82vvsLF8JE8CcG4mnGCpqb9dALkMsZZoCBjEvZibW9YBakZT47hRc72tScxkfTaL3uy9pwwDx",
  "key24": "4oRQ1mz73awhrDYyBLiBdCacTjEEgU5T4WLCHct7sixwabhsADyzAtRdywkAELuXFoH1DrLuCbz4ELap7p2euZtG",
  "key25": "2GcfKjciNpmVfdvwdSCRicQd7vHrZTWT4VN3EyRoMNGr4NF5gttar9T1aaRN9nfARTN2VaABBuo8cKuQmUcMJ7z4",
  "key26": "5dc8cq5MTieHszQzfKXyk4yEJsStrkkB5KS77L17qdXxG1gLvV6Y3e3YV2sZtiCMDVjoGHEN8A3r52pcJDu7w6wh",
  "key27": "E1wKN3UfZWAqarH2ownRBYtpBcsfaFVYiX9Hwon4QgnEBYnrWcVmgFgSxVUzB7FzmZ57e851PRU4oZEnMxDahvJ",
  "key28": "3XrqDr53VgTK36mADzm9s3y1vm4SG9B4HoLKJVK5YPjwv2zWb8LkYnpz6euENyAp5h5YBFou7M5am2KBkL5ir2v1",
  "key29": "3RHCLE5gnKpHrTFxQk6LZ1hCFU4hBMkfx8psLTgBnA56pk9aooVWPVaccuNPspCEz4sv2oDyjfMD9oGkkhcWt85h",
  "key30": "2cWbBnLnGS7ZguANBjsSp96XjgdmufADw4vRPeEcp3sS9qGPuVYT3UUUrHUWqHcZQDHLxT6ZwKwwJgAfFXwDvEEo",
  "key31": "4wDjwpqQMQ7tjqLiRwNfDCr8Yh8JgEqcULa5qJ97YqN54TYPkq5KPM54iDyXV7Qs4T2NPG2MKdRJWoUkNKho1yWp",
  "key32": "2rn5FiG2tJqDF8t8ZVzwyeCxwEN8hHLjgoKkm7x1x1HjkHoFEoC6uUWUH9442ybRv1zYXVqAYuwk2qKEfDCosCoU",
  "key33": "3w9yY2Q52M38byfa4JEDfPSrwovUw5zbedk86ihJUhp1RNTaHn61Zqjq9D3zvAahLxVTdtaga1sNWCw91aZjNMDB",
  "key34": "DLPUngafUBNt9FGDrq6BDkGxYczVw1fNQvfvxN5gDx4xAcmuH936oEUNuKDPevnbiVrBm1smPwSYKHDi5yW1Xgw",
  "key35": "2fYbSijPW66J6VfXKWTKkBT3PZpPbFQaWdBxLKFirHu2zWV8RPccd4QZYTjSs3DAd1sa5VAm1xtuE5ygaxLfsezp",
  "key36": "4AZ4VXGUmGNEvfvpRcLqV7Kt63XBwM6GSwr92LU2pPezbrjo6GQt3b7H2fwy3NBiavSQDRCMaybrV9crrnn1cWoy",
  "key37": "4P5tzAHNNDUB95N7A7SjgLdf9scCqKcVv6qBmuxBif4w3FwDpPSFNqg2tWU3CXKH7Lme18H5A75vzsBxBhU7nuM4",
  "key38": "4C6Fw2Z3MN1JByAo2SgES21dzvSwHMX65nH7QsquYDrF4aKgzWtSszU31k8638Voo9T3MzGZScPT6njLH2VT9SBn",
  "key39": "5trtC5a1iwbLTHzaCzyHyU1QuRBktZGZMV6CjB18NXJdNrH5wuRxJQYdKaLujqUZ36iUCGCWJdH3YJeDjtGzRSUT",
  "key40": "2pmmnp17onnmxTVy2RQ729ggU8eJEkcepw8dDxCXv3ph5ZjqinpAT7CEbYZEyfRgeFQ5mekeoLJB7uCPi2KodzUb"
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
