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
    "4sUVY2ERh2B1Phupc5jMz92FsUuZ4p4mXKgWDEWsCrbhkmhmdqLwFLUByjeuwzS4N3Sf9H5ZLE7HVpjrLAHw6iME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNeVD7nHZcEMKwPkfX3ExJDJvLWVn7uCJFbikPLkgu5Nk2PtnvE7UiB8eGi4YXQWX3UDLnE2cavfjkhJRMvrJbo",
  "key1": "3ZREmhEnyaxgdgNfWSyaBim3wJdJSZZnRKfLXATLBW9WsWBSvStnyACAg2Db8stuf8QBw4SrBeF3ZypQxgF19g1J",
  "key2": "226UtKWpPd7ZasTBjeADrBj9Zp4dTNM3i36XBeHoHgd8DveMbKj6pC79F8MBhmoEPHdZNy6LVu7NRHjgtLrQEZo2",
  "key3": "4V599SrtHC4HjGZ4c8pHVJAw2L4EJv1RTvets5kLUnMDxxEu1tacpoguSkRYd47Lvye9kay7iLHgXEA9Zn3LNMUK",
  "key4": "475ZUrKfCNt5P1vk6R8ynPjTBR592Juzp1ErwQm4qprcB6xxdkFiZ54WsNNkBaStmkwwK188aCDDdgvJGTNR1brL",
  "key5": "2P4oWS2d69RvepapRT2sRDKBLCYQhKiATTKzD1CpwfxJ3LweCcGC1oiv7nZAETS41md37h6zTyvXAwsiaT1HMfX1",
  "key6": "2BXkRBoBmsUUar6S36ymKzKLGwkXyvjrSPej8fgf1yZrCCFcKSLE7XH5BLQWxoe67JrcdhfqU1E3dfCNZ9poJw1U",
  "key7": "5GXBzyRdu1X8QtGy5i7CURmBGf7FFi75kXybYwSaqdrxVLAHoHKsLBmamkGzLhUA2oE2aHnBrWdj57gmop3VZLVz",
  "key8": "4G6J6BEnMz1Yj71iwQ3QmyKSb4fsSJHhDZ9EoAptTLhSaTbG1nBJFDJbfpZiCB6wjzxVHucm4yHqCX4urQBSJtFS",
  "key9": "5kLQabWkZHdC3cVPnKfYGCoA4u2EcbwvpnFC3hZNLMBFGGKwbCVFRcRKKtH2F12Uk83QJnYFCirnnwjNb7PVE5kH",
  "key10": "4YpJvuvkH1x3PpENjmk126GAn9ywqJbmjtFfaTQiGpo3UHU7mRQbdooW2aaNvzj6hSmuvkGdYeTwVoPWavpFuwN4",
  "key11": "BJtHyhySZD5eNoWbQbZq5tovonzrexKxXccqXfKyxHJ8VE6SJJmZa3XB2wZQyd17yeSLsgZCtzgYuAowasycEb6",
  "key12": "5riLUeNZraWwBmPKsXLftSqhfppARxU8nfdSw8wgJQA2BpbKjP3DLgjV2wimj6Zmx3HJoEebFoP4TJrUf2ciXS4k",
  "key13": "5wACFTUL1cQsD8okfGtKENUGBJTbXUVmGYeEcP8rD6a36XAeyBtjf9qFmABL6cq8hikUBH3TvfFUGWk71LugrFU3",
  "key14": "66Fo1pjs514XQht8TToB6nDsL91Fy8w52TqmBZjKT94Za2bbZKKzfiCg4TZm3EZdDr12Z4vN6RokPx3rMs3Vmz22",
  "key15": "4Bt6M9gi6gMQPgZm9Eq3173SJTa9eNhw6rjzNWHvJc8amwZGCvMqHqMk1Hg3p6GDS68Kd7zoiA6wiMb3563ZGEs4",
  "key16": "3MwBEAoQgdFH81dEhxVu2T6d6fEhyAfdWYNxWLf2FsztPGrJj323buaZFodvmysBbxSfLfbvPaZ99vZFcHyNBuZR",
  "key17": "SKLS1GAKGB8ysGrtE8QA1VJZ2cnSWrXFjS9cJ99UDPCSn3E85Npwgsy3SeFhE57SMWYmu7YV3yusmLCr9G1LfdW",
  "key18": "2b2EPi267sRMwANAQ967ZWorcFox8rnikeY72grsmk4RmPCfT3xwHxe6dr2TGGc2DJBv7qTVJQ9oAdytwxJTnofK",
  "key19": "5xhNwJWuckvEXS1aE8odDVzzcn1jc7s77NgHYif4ibaQZpeTh7PNu2JucLSFaQS8vBsMf4zkNBL26DzUrbYem98b",
  "key20": "z7DgVYC3vVaqhv7SQTjVxuqu6yFynR3HmVEyUC7VivSEhbYZF8SaBN7nTzdW2FnfzcobScrTdmBmG8qRy5Vzzb4",
  "key21": "2U9cv8CJtNajTbRNQ9f7JyRKvM91sYufed8riVbrMQch4KJAeHUPqABRVpwKtJQ8uqNC3bXWargPnVsLG9ziymux",
  "key22": "3tv1i9ooT1msewHrTda62qcVSKcUL1jJmMpLCejQZGvnk5CFikkD6eAs7woGXrbrgLaoqJB7TcNVD2FKcNgWthv9",
  "key23": "5vrNuemTPuEQEMDRLC9etAm4ztz42FR6wMiain5BYdvAwagdz1Rdds9za8uC7G3WgJV6QzMhHJfWRyPe8ijCaucv",
  "key24": "2Ao72UVSkufHtR1dZXr3vQ2w67wUMM2PK4vUC8pHDTFpngdCp3XZH9jejd64VUTw3dKK3UaaJ3b8bk2GfbDjcW5G",
  "key25": "4xNBqdYmnkjb1sTxZxJ6bzEGkbYSWYG9eicCpz4EHMKKFzj54ZWVPbdE94woB3YERzFtfLSvVhV8HRjaxjUc77bi",
  "key26": "3nh9hKCHBq5kNaigs5SY9aUfS6GHeBXBxZQGaaELfumCAmvAyQ1jhwoYoYa8RbMSDsmxroPS3s4hRGZtNBYaNWfT",
  "key27": "5GwuaBH3wNLSKKqrLcG3CYBSbcmVMHELBPG5p3SGPh47BbDkBAWzZP7n2WBUT8VY8GM6bzdtHm1FiPNvXMnSncoT",
  "key28": "35CjY2M5jSW8DLp8pBvEv8AmaZkuxkmuzikKGM7zPi1zmdvUdrQCDSaKdwHjhGtvRsvdzqAkSX6cJKqzXhphh6FP",
  "key29": "5LmNFCkmAvfkT8fuVj7W8XGjkNkgjr5RxkpF7CYryCRDbKNgcZf6HJLLqGNLvoCKWAh4DYtMeNA3nNPVFoT3rFCS",
  "key30": "3QSyFzybaLaRynx5j3Zmw16uZSB4Hkp3HFKgsvAZFd8pToNAeomQiECnVv71MCfiNXtziKVd2FjSFLmYhKRXCE2K",
  "key31": "2ZGhWsi5moqzd89dBqsnoDncynB8sBD8RNEn6rTS1iWXmhV3gNHgedgCZXAvyowECco8g2EAjdcAVrPAjz3iyyBs",
  "key32": "584yi9LmfUGsF4CgNwcVSeaJ5UV27S78iwJxFFrZ6eGSbWaq8sWpdp2ww79Cgq2ZxGHF2dowxSDbmcjxFKDUd2EP",
  "key33": "3cHDdo7tpjntX8oTk16hP7vtHo9qx1Ufkzs2SicktACvEsSgfWb78V8XVzdzvmo4GEuU6ybxBXoadBCc1VwzRdBe",
  "key34": "3W5QnLrYEsSvef58hM8Qyd7u75wJwnUFj3bfcLxyKTuuvxdqAB6R95y5Z8ihv7Qr3Eaxg96wjjW77KLo5RBHNhaP",
  "key35": "3j4GUxxAWUMWif2yg1GQP7h4xUMnWVptjkj9zdBjXmRuDPMtxVR2M2k7XyD4WUp6KoXCkVwyEJf8ycmERWxR1uwy",
  "key36": "4dp8xh5j9MPauMGFxg4LFWWJ5N3sFBo7of3ZevxWZdwWNujEhKRMFL6gPph1p6bswKFk8WRTmCjWhGoJZg78yR2C",
  "key37": "61VogDQwbwSeHJa5o3931UvyiYHjibgQBL1ArJTgP7EFQbJQ8pJ2sezPdyJ9MKRiyVt9pg6rFS8dFWP15w8p3Xj3",
  "key38": "2pYaXAF3mo8ZEuWRuM5uDghWa4E6N51cUgZQXpbdSoH3XCCK3LRxxDXWvTZMynFX6BhoSGmATJyiZyYcaYDgVzMw",
  "key39": "4RgRg22dC486kuPYuqGnfoSiXUoEJcg2fSbyiQJ3dxfBX8srtAxcsJYi84r9XbRj8AUf6DQ5zMkcgzda6tHRHcCj"
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
