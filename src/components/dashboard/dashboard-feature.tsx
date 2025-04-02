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
    "2xbLZsg7URtH7PzgNAtW8Br9y15JxQB5hyjEZRHY7uomMnpAmhVAaSxiZ6MQxgAN3hTCZN45KJrrJpLMfHrJRVEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvaiaCuvBetfnxyuwaLVH7y2EgN8oNMHmdbmxaLUvjYKifS85865MsTVzibyZ3Y9Dz3AKSn6KXUM12TyhYgmfmD",
  "key1": "5hkA6MoK7grz3hJcnGAmoC3cn84RiVP7coiSC1URqA3W5AcmaqqAmnrxBqyoC9eV6CeoDhbMd5EtzW2zHLsn8kwU",
  "key2": "kHi82B2EGCzwor7SyKGuVhP6Nb3RKau2d277LKQXKQvqWJXrw1sMvrp9VYgWjf8n3Ejry9Hk4c9gLhiSVRGX8Bp",
  "key3": "G7BQhJ4cDZ59Yn4Qxp4bLR46uuvBT7mwMTvJap33Wbcjqs3Paf6xEjjP9w9bs7EpewUn2a7Hn8Lp1EDB5uGeMid",
  "key4": "3T9sfKehEcRbAoh6CGwnPZD5nmPWu3QQDphdpk4j7r9aKzmCPxDjTB1iDWJFWRqSJCmwWqeVzstYrZ8mtzA4oHp2",
  "key5": "2JErpTbfwEVj3vAfdWUJzDjz5PLSwNrHnAmbEwhxRZeaP23yNUf5pHSBdoodW7B6aSJN9VE38qRAK74uT1E9Mpnd",
  "key6": "5ZshGxZp8hyoPiP2AuRVZ82o4Zm9MQByvXTto8Hnv3eCF8VyY914g4bE4x4z4GPm97wfuqLNrLmB77E9V7Z2sbbY",
  "key7": "NudoeFHUGW26B14QC2GAhhBCvSzCWtzzDaFN279etuS9z41zUhM5qgCucGHCkwctAZFR7GanFBGDXbVRo7EBcFG",
  "key8": "3LebEd5xC1R3xJJJ7VrVAkVquzVtStuExFbzomvGkXXbSifAHb2zDHBaD1AP9ib6Pze5PgpCmwEiXQis8zADHJZj",
  "key9": "5KZEMwYvHiAFoXVibZfgBwb4rsBPuCsw2ngHnXYp36iHgw2RESDRYycpFzUxf4EZoeppBpKgKumUtBbptJkWxBfZ",
  "key10": "5iXyJKocSsf6gjfohxgYiXtyWFQn8yUub8naxWsY3ggTDZ9G1ZfK7F5x46E2X6Tf3LAsJfAWnkTf8RarCSrn6jZz",
  "key11": "3ZfbqZudjaqaJtjKfeD8WruUfnSRYzJDv7RxNbJLbtiHEGRNZEcVoRT3tJ763qTPhf5ZS1ZW6cRJiZGgbakWbEcb",
  "key12": "2XeXXxLmFDmJoSvM5VEV2WRcpzz2sAqb8g268gcAoRzYGiZKqy7TxSqJgeqrLnfJCLNcHAPFk2XXnEJVNG8AiVcq",
  "key13": "5RSyGoArH6j8pmetSBhytAmCYBVvLspMsHeJSocFxGC9mrnLhkrVfh8ZQJWZzUTMB4wQHYcEb1j5oG8z4pvqGQpY",
  "key14": "4jfW3TAYL51nXqyCjQNJ6Qa4Jou3PNDoPxWT6zvD1Ms4DEBMD4f1tzzfPXsmQcG3wSzjAbYecPh92L8BrNr3oos2",
  "key15": "2EwkmMbo2PAM92C7edC969s3tStqP8Z7XX6yNnqXoudUzRafedzDbsu2wamHukzRegihpsTUwfMMX4QDcrwky5jG",
  "key16": "ZCArkaA6ZtofZ1GQ6aAvNMkiUNiBJ5o8hjqmZiW1iNtUGcQpmwiNAVwnniiHumG7bkoeEzj9BG9rYyCJpJbez53",
  "key17": "2J3jjyTKYYSAqCVgP5TnBMwi5BiMUqR3ATUH3VaamyjSSZWg2zFX2dvVY48jNwWosUhqhZ3FwKzagPMKbdKrAsrV",
  "key18": "57Mb7CPw4V7qd84TtuSwxBU3Qj68W7LMsqKe2wsKkYHPS7nhsd8vqjQRTfgPW1uNy3Wbi8LZDB6L3skc44BLGQXe",
  "key19": "4RM1bZm47pPCGuSv3VWksVfsDa2V7Ya1Agste2ejbMFEttQ8RdALQZqaPRtoQiepboTKh8mayFipT76n3VehJnWd",
  "key20": "4rDTtkzA3a5CZnFSvTKev7k1ctprebUxroPrVy6fRwUHsoeenEGspioq3sRZWzfiUcABJHmMeUKoYFNdk6os9hiJ",
  "key21": "3ny63QHdW76n3cgktpmq1hgfgGQqosW5Tg21tVBQG1prxjFYeVafzCeKdwcCR7eH3Pocw5JLbu7byjRS1eWHNg1U",
  "key22": "2wdRqyu4X9SwQcNh1njWYR9vqN2k9USx3nuBWn718DkAVwRLJQMMRQx5qXj39z9tmZMKMqnzfPHvW2s5vbjbXkq9",
  "key23": "3M4EmS7N2QJda1zxA8hKUYipG1mjYVAEhFqQb1vJu9L3zmR75PT6ifoZDGPfmERHCGrc9TbZ96CxT9AGBqb1UUWh",
  "key24": "47vtzrr6nnJ5ujB9MwkNKFgRF59KQFYeR3vBENGTb1iRMWjJ65wESTwCzUwCqQSmyAEm5X6wUuNQt7bdngWDYn1J",
  "key25": "eh23e8unTM2nyss1hMr4QTQR26j8zZAXwje6AEBCSWhh3fzegTPN7bjdSPPusvwgXSyPSY6kfbjpG8xxJwMt5Cn",
  "key26": "5iEjjRd9t2QGSMsWsgHu4u118ighEUNqYmy3kkSpVMAhFhb8UkAPZxtLo98g2zLLVpXgmLjSucHEnkBXDewwhX5s",
  "key27": "5ELwevxxuVCUavqPBTFCqiKA1Faywf26gU3EtBbkxySTewgFMCjT1mzVvtjPJxZYUV2LkyceAeDReB25fFwakkR7",
  "key28": "cm7cyEbjM9VvRu35hnXbjcHkSTEmfFzeHgkCa9f1bSBDGHNBJGFWSkx5hVp47CNPA9fioSxegL8DK5qUKwXWA9D",
  "key29": "4fRU5esgJCLAViLuJwm8eyxMSVtT78vZYwFzEuU26XgA35XutzGKMtWJ45cHzwfFEcz8XpTYaH3gXMCp1eNSnSmo",
  "key30": "3452ueA9evxkLADGjZi4tkM15NixWjRUTb22x2XGMGKLE1PFjXcrjMRu64abJoNQX48Xjow7wFxqC37svbZwaF7o",
  "key31": "58SGBgDPo3DgCY2pg6jSG47ULFH88nRVEmNrqUW3xBYp4HokU5ZGe4Lsxcm8oniwY2NV8bbKtqrUj4CRCYoRxTjr",
  "key32": "3DwbHx8vvCt57YjDE6US9eEHvKqtTreC3h97B5snhyfgkjkZ1LRfdkMJ4BtoENg5ipHmMjDt2nJ6vPcwzoFLsxuR",
  "key33": "361V1fSpCjUs4sjU9h4ZjSKsKouMGk4PWSzozvvzge6VY5UkoQBbPvvBKTrL3LkdHGtAcjYzJixjX8rE1L8VEpf7",
  "key34": "4q78H7fX57KPz9HeWqtu5nTdnc9Cpc26VzX82eg5xdtvE2MW9YukAVpzFfDHHNv43366QxyxToqZoFu3XymRKtNb",
  "key35": "2sA5UAEXRk9tXyotrWn4X69nkHD4p2EyW14qDdK2dJ5wM6u2792zSMXY7RXhpGXNGMrdWbjrQuFdPxQkGSAerfHA",
  "key36": "5vwVz9WheeVEpJXjtD9EpJ625VFw3CH86CehfU7wNijFve5WZtToSje2z8bVVopiP6vymsngPDjYgsEys1WijL4e",
  "key37": "5svoWWjQaq3JPpBTJF8YETpak5Fvw9erqFVDjDgGNZgGLigGJJY4Z1SH3KNYuV2QjRWVkk1mRTjvxL3SrS9yEoBF",
  "key38": "5bZ9UyBnsn7U4NcUEfsFiCqGYQpsVZZh9uJvWKKuFFU5Pyo8qfhx32Xcs5SezkLVHfYiJXZoYvBEMRbwgSKZTeet",
  "key39": "23gjwdpiQKXE42hGPnk8PWPE1W49qfgMUo11qx4kPLoRPkG41NK6UL63ocbmJoimSiHcqkcPi2C7vtAEXd39onjz",
  "key40": "34U2KWDgYr9om4NDJatypyc97rhsL9DVux76XHws8NigphvWB1DhMJUbmrYdifpGgtkC6pxtmDmvhrxwj1TYUweN",
  "key41": "nxYexXhGn3wBuNDpf97h92mdtuAjQUEEepgDPqfUej4wvxkeVGwRCQuXskgyF6BEowtT1G99K1eRMRUV9yjtYis",
  "key42": "5wzb9ETCXj58TZwoqBZUPq6DdSRXJFFzQRaWgeXHxpuxYDnHiJdvsfnRdgM8fCEQeuRPzR5cT3zV8U3rWRrQ4oMF",
  "key43": "5epPm7iatxr4afxM9qX6poVjqB4eEMvyFuz9fSap49bFnP3msfZz6jczMTBuczEmncRayRcjQaJegZz2krU5ueRD",
  "key44": "2H2J9W4dftmHUrx6MJ8qTHg6GJ7RKUSKutXACgMN3M2DMPRmVxU8NuLnF9J5jwF2QZiUmGZ1C4CSxJR3EsCPvt35",
  "key45": "435t9z29czkqWLDEwME4VhR4yx5qAjaDoFSVj8Zah9VGuNTZ6cBcS3rKhg3QwmbUwQ1xqpj4YRMKvSDM9QzRBvXv",
  "key46": "4kyiegwmhMcUTL2DaFdjeJA5Q51aRTfpAFd2vNSUt4GwGJyDARJyni9vNkxhA24X9v2xBpqSzhJSc9zFRMvJpYMo",
  "key47": "3tJUvqjDcj17PdSUeMWuwJe5sCsgTDXBVeegidmpMqTfH1nTFcgMyGGcGMbpJ4PDypzqCPsXKTyuxyLaTWSFEGW1"
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
