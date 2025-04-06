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
    "4KQUGoGqLh7oiQrwL4knWiixchifbzttZpkp2GoaZ5xHGtRmDXrjS2wvZNuRhhaHfBuMD2nwaPSj8Gjewdyd1ggR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oTZidxd5PQG92PQkUPwFb7qLn4cUWU7YJTiFcYxJAFZw5i3teZnh5mr4ch8JeznZT5GjkdYpEv5ctouXdgT6V6R",
  "key1": "3tTg4yhu38pDKidHhfi5dPHsabbnuC8bhU5xMKWXBUhhfjfjQUoRFfb47Ta9uAGSUvL4CRaeBdP6acGJe46uNRgX",
  "key2": "485KqR2R693m8p3Bet9Vsfeh3oZHjqRMpzjJA87wmcSPJC6HQfTKRgjg7TSFdy6iMH8YYc7PsYqMSxKh21aqbgaZ",
  "key3": "5ZfWV9LZYPD74bRsG3Mt9WF9Dcg3AkBvFetDDUcz72SRehTaN8EoHwPGDkYJuuZYSh8N2er5ASkAJawU8Ka8vJ94",
  "key4": "2jrq5sdchQcQ7DLB6vQZhqxW47TVZSLrV8dWRAek3gNnrRVcmDEkWcsgxfayeVs2KbgNzcGfxhD21wH6iN7KcFWY",
  "key5": "3d1gPDUfKnyGzRMgGfvQ95xg1RDBFCCH96haUF252M4dP8ysokm8yot2JaKPn5wbfnLovQouaRWQfNWUdvCEAieH",
  "key6": "5mRMomDQ2otgguy9KD2fv3L7GodPswDiWqx2wBC6TxwDiKcFsbY4CVwM7dsv43qPCWj42goKpCCNxAX5fPpcaNqH",
  "key7": "5iPWzAPA3Ed8Y6da8G6V2ToXiGYDj3YQDiTDsvNv9WJguiQTd8nuaQpDuEP8JDgB925mU1RGgxcfZX8QLZcMBCcc",
  "key8": "3cVUdqwRL3STxqnD2DxpiLSLzS6VWaqwPDTMQCCzVVhqdZuRYabyxXwkaGHbo2F39dqdDP1tyn7yiaKsnqsBncSd",
  "key9": "34au1xqvntEAMgcoR1KeEDeCRHbD3U4nn5WMtwggKR4JG6191WKftiqWGgLtRocCxQY5uVfYK9hdSiCGibYpyyx",
  "key10": "5WFA2g3skQ2PeaGxZpZaCGK8cw6DPPTM6TR3BFCqgLnSDYZ9XAtzBZT6CZxy28rE25EUpuKULisVEhvscx6gF8z5",
  "key11": "dZX9a1M8MY7AoqdfGBrHYPp3izENwi3Yhqh9iYHssd4Cc9PwuyEDJfLJFi4peuY993t6iwxMn7XbzDazVYYiaC5",
  "key12": "1dnmrupsGu4ymFM5BagY1PV8mczS33P3oAj3vAhSbdLk9PPdQBa8vtuSUavuDavH5NSWdYTBv9NCrhPGCPsPekG",
  "key13": "2ium2EWKizLYrvSvNF8ssjHrDpfEU9AiMbWqJu31wH16khpYrFEMkr9yYtV7fAnXnkVNq5o8NGdM3QKwgRpDhTEp",
  "key14": "4Qj1bvPveCGGnnZNt1neCgseU7hx7NRd2ysgfMHSS8mtqpTUa4sH9ou84wnX4maKX8sKBuYudicAWCcsrn24VrRd",
  "key15": "31pqN5gnh3dyrisVEYGrt3Thr7NmakY66Kp1Rf37sntp2VQFipKRzKdZjgFR55m6Z5cvo9TX3Z3obDqVWDAMsJg8",
  "key16": "qy5TmeRy8K96HvCwaTzoV5Rv3e7gvJ9LJaF5V8WQnuhUJT1tALaWfTrPwFXmP7C28n2oykdJEuXwLkN7zvKb8rr",
  "key17": "4nikUtuG5Bn3NoGaHf1VV1njcKc6WFxzPLWEhzqKjPfcUJW3Wi4g7jTd7upbmMsVsZoxnWR7DXy9u8bNtv2Tv7An",
  "key18": "3KJpYCn1hgWnJXanb9qGLNxcwKB5E87tyrRki79i4Q93cvx1qmo7KRgmfQVFKiB6Sxk1PsoHAmreitFJWq9JbtiV",
  "key19": "5owaNVJmSX5c7UwnQzGeJCLkfUQtpDG36YqjutcuwxLd8RJn6FJ8kQX2Drytw6D9Sdyhu9XeGKVeVwKgQmvYUjC8",
  "key20": "5UvX2RiF8Grc3WXUu4MyWKvpcC6QdjS7NH7LtdyHgrQTgvTWUHGdETZGwRKfiDTp2TyxZAh7ctjuHmv3cT3mq3J2",
  "key21": "3EzPA94iH2bVaG2p9TsFGKwL933tsgAMqzNTAUVyRnMPTpEhkH8RkvANeP8ZPne3Adxao79oCRXdAftQYSudCE8P",
  "key22": "4MKWfmbuqrk838jUVxKXbQJCvtKMpJgCSCdx34m72SwZmnbFUDtxjh4HkLockCYsJii2BDHAY4ZNbfKcCHtwBKoh",
  "key23": "ZHJh3H88vVSF3vxCAcrqqPiH8XFPUNaavFi4f2kBYAgYSkZqE1E8c4yyjbaeFwwPtGyVi3BFJ91wraWP41YWzGG",
  "key24": "2CL6sGgVWDxmdafDTdRSd33vs83n5J3HKBTB4oZc7KKrvM5nkwabfFyiJfdGffpEF38rvA5Hh5AJeippXwEtqZSK",
  "key25": "4GjssGDnTpV99ETnuJDrY5MWoTNEzKUGPmjxsybDSmSk8Ar6HR8kTrfuF8t5DymZa1uLtrcDwqfCG9BgzJem2sWN",
  "key26": "2ZjhBca6uhkg82WRSxr5EXFBSe5BCMkkVbVSBZCbvs2vgGCxTxGJ5KF5aXYL2zyX3os8QgNUkGiawGnFDM88GU7R",
  "key27": "4Cg6P9RMctTWEdDhe24MjYCr3XHy9T4M6ViuQwA1uL1x2LEhqbmYKJZSbrJGSvZ3xMKKCEmLi5Z3zeJ9b4Vdbw7F",
  "key28": "2VQ23SNdjujZeYwfsvVQ1FsxHhmsumB1MFedScTZhQJkCBuR9cBcGsV5HRuesmea3wxUYqF6jveewJmL67pKNGVi",
  "key29": "r6uzv6P9mv2wZCWWF2K4u2MstKBVACWjonx9N1BdZWwhc8Gav8iarD6Urc1ZTvoYSyxRzz7xWPRT8e8SFyT2Sod",
  "key30": "G5bqVZBoKDbBzi8HjrwwtFQPYEwnJeZkt5YJoGzGVzCLGLyacAqYcwTESCyroicssPh8pnmxJVX41cWoJFEu9xH",
  "key31": "24hD27jbCNvKZQQRX3Q85XcWfaZNggZ91GwkjuuCPD142pv1Pe9B4TBNEkL42nCDNZADczNQBDx3gSnV7fTbexhH",
  "key32": "hjhn2cyxTKQSaeh8Ruikn4pCedCJThDtXv1bw5j9KUyjKRCMh3hk6WYHE2XohLzaxtE3zvwFuem8c4u1ZMSTUf9",
  "key33": "3gt9nPydsVJwDcBKTcLrxFJRco8QseMh7LeudT2CKCrDmtRfvM333yJkfVKNEBQo4wmFB1sbxbG1kM7oQaPQvavD",
  "key34": "2XrTt7229FL774h4z7aRSST4NCNjukdfNn9iP1Hubkv3K8ca7R4pjchoSCw162cuo6T9MvuYHpkRpHSrTFi93AMv",
  "key35": "3saSSWN9akk1Q3fgXCfFwU1H6XiJ3Cjhw8aYunxvf96mD8iL1dCNCdcgJN3kQDktqYcvNmXGFUfjyMPyFM3qRHsg",
  "key36": "vKopiv2PTi8xA3XWXPHrT4tkWppiQ2Q1KY5434m1Zqhhbyxv4E6XyDmcKFjkFywzJXtHqa9QA77BS1RD6f5KNTa",
  "key37": "4Gu6rYLvkpHFMnw2Ch8HaT1ebj2Ye3xMkridm76VonrEvehszTZePqhR3EwV5iKm1gTm7YnaboZdsvjyx7fGyaYX",
  "key38": "4zNGjmXMKuVEaveSG9hNXfNdxpbHFCyMFXpjZj1Z7k3nvBGzZf58QBa3q3veeSpEKmorUPLWCVkaReC4F1sAsUVe",
  "key39": "2rZFuDKhv78ak5miZu5ncVMN33vpZgyquNVDsUmfqs5w8vvXqS1aRts2wUTpAYrqFmGMSWWovPvPSUMzd2JfBtak",
  "key40": "44zPznNdrpDs5MdJnbkqL5hkKmKRCrBEZFSUjApRWZufxxNtwMSacP84qgucPS5UsxW1V4V4tm1HMP4yUG2fiibo",
  "key41": "z3qHnKz19iiNiHLxCwDw1nhUNQFUAipkmRdqndkBEUcyf67oLNYTnJWuPhJKodorGuPEiAyCRSs6MGapjcNHjPU",
  "key42": "2HJVTSriuoBXBAokDanUmj382DRNgMbQRQ1sWyM5EFuRb5dF2EH5aFEaTxPEM5U49DdJyNyzYveJinXryoH32GtD",
  "key43": "7W9q6dnaDzk6pJt2VGY571MuFCtpXLe8NAG1U76kp13biScZsxpquuuy4U66LsqN2CgUHsVsrvvxFVi6Fh4xwiC",
  "key44": "4xof1C2J3D9siyK2oXskAJURVMmkJGAbQ1A2v5q3pX1w8mjBhcNwaaDnQ2YBxvztLLLMBUwG2QU74WBWYXAmUB7d"
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
