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
    "3Ln6CNDMdxwvpj6mnmcvuKP18ip69vh3vLEMbqGaKL2HVY5b873h5NwEWxJtbvZ8qcLbC5XTDuebHw2jW1kqisVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5DWSxwjzoRMmyd85upJzGkb5UtA4TqfgXtqNRQdaXoHgfTzgEYq897AatcnVRFCZr7BLMxChorkQVMB82VVY4k",
  "key1": "qkk5C6wZBs2o7nxGqF9wskytQtswpTUkgHDMK7vJ765wrZBnPvtxYBYRuS4TfvWcunAKtC2hq3YyJRdDz4dtFfg",
  "key2": "3Uyp6agU5mjZBKS6ckqJfeKQN9GHNAv6PBynYqu2WE9dhjrYTa37jPcDz2M3gLGJdygJTktRptXWw19n7gpiaH2F",
  "key3": "4K3D4QCuM123sJvXLb1rmp3Kj7ZNaHu7UNsfE6RurGh6bPKty98Lj1DZAWuwm6TMwqH1GLUQAF7J5qZGZzrV9je6",
  "key4": "3Nd2q69NqN8ES2tURRM5tGfJnD9PZiVqGhTHrY4rHBe5nhuC5gR9sqc4aMSnk2vAD3g17MbQm6UA6Yoi9sNjCFT6",
  "key5": "2qZLvC6JWT4HUz5gpgzsPXaQNNTrE1tieyE5v2zodnvXTgF41eCG7627o7BDN1KZTjenyuCQtDBhpQaFEybjVSqV",
  "key6": "4d8XpJ6x6vGuz3A5dWMEfvZESLZjLUNYRxbFLCdA6sfvxoTKkH5u25ZyQsPwsatu3yh8AbbqwKpRjGgfw5UcgJuw",
  "key7": "4XUR3eFsPQrGNELk5AGqwRLuqN8rHZbxN3fBtwWZ82TVugCYtQ8t1Qt2HM9oZXbyvCfAikt65e2HGx4ge6MnqAp6",
  "key8": "3Sz9NzupSS6CzcLyCN878DZwjz7JN7qhA5Lz7rPii3iEaVbHFCyYTWa8nwTz8RAm9tPX6TbEDL9aquFUBXCcJL33",
  "key9": "rYj1Ps4M6CkKGAhH4ie717JSfiJB8oKHbAEYaZCQ1u44G9i2Pb8cnAPamnSkweoTMkTTnY6KukNhGXKtaaawm4V",
  "key10": "3JZAQ6gE1ntjGGJiSCVSew8V4AdcZvTzDPtZoLq8xEpCRYJq7CuZdwcLsjbqHtjbpo5sJHiSmSXyF6ggRXYg47BC",
  "key11": "2mERqqyDcJsPLRBQFwZubHLQn5fRSkSKTxyjeWLmpcqcEqtKeoeNnDEDiiTUbwnUboJS58s2HPHbeTSJeW81hvD8",
  "key12": "2hWEGLBKzZfyeaU3JqrW45Wx6WExviUJLSgzcSvtesNXvvJk5rMuCtXWc98BKRfZcS7eyuwGzrJcTpr9LzoZaWJG",
  "key13": "5NGg795yfZr7M5siByQNinkQ3rB3jVdijNJExcPpb4ePvtbwRoKF7SQ87PJSqzwNQPCa5NMUdDLybKZKYaXx64La",
  "key14": "r3yurRp5pkuALed468F8zDyQQDq2qFFACwRYpHdYUUoDJpkKBu1Gj85FP76ocTP57vv1R6U3RpNMV4GzoPxsawy",
  "key15": "4BGvWBoGcESqWj6ibiEC4pQWz7dwH5ApxPiHwnTjTF9Ai3H6LA8gMWndPSZQg3HWSTHfrrYzSGc8JeQPF2wQG6ba",
  "key16": "4rsX9ngy5DcMCKTyN24DHeHa7CskuLo9wF5qTGcW2Bk14YLkrVm21djvGPuvNkRcGi5Cd8fN6LW3rQtePdMfkuKA",
  "key17": "4xWpumGSqwbdoTrhULqmLVYD2ryatXKmWaBp5TGkWXmdA29yHJ8825irg7VgjcQC2cZa4nSa369zSFZRJqAoKUYW",
  "key18": "42s2kBku8gptTnN4TXsa4B78VQc9bbQVNS4U9zrjgcaXJsh5sJ7BCZkqqUWK9HCVoZZCxmqDnLkZhkx2oZzzJ9Xb",
  "key19": "3DBQoEErFL7WRB37RhcQtogobusFWitf67kXZ4xa5kLeFzrMk7Ky8dBbBHx5UXQVzok6zYY6H8WH9rRo347cF7fP",
  "key20": "2joLPKh9UogaqcJL18JiajPNYGXymysfNyfoTSeYvqQ15fGxxiMTqWqAHK9VoQKmttzhQZ7wyKrM2PAwzi7p43yt",
  "key21": "2oT8Tj15spiNEJAJpuvJeDzMbD2oX8bbGyaJNE3aJhwsC1upPMf1j2ULHyZmg8q5m88EhPECM59q29eoCMVGUjeX",
  "key22": "2UwocLcKaetppBchi4Pw3ajMmJoEFv5xo1JXcYBeQ7Z6jSYk41vojVfQJ1awrkXcQyzb2Rk8E19K2qz5U3uKU1Lt",
  "key23": "5AfD6dTendejr5Gojo1vrtT3tdJJdRkuA8nTK7RQsLqC5oSbz5xz22E2fweKmrccEnnzH7EABS86aWzeih6tysT6",
  "key24": "2MhhAvpjPfmSbawbYMXDAGLR7QnmFXF7k9RK2CDxJafMj8EmQpAr1LGr6fHLoTLjgBed9PcFmdyRcStQTbzsdFAF",
  "key25": "23siuZk92JkkRgWLV3CQNaTpY59UEGYsttMTBm6GYoaVLwgeNQKGRMx7giDppUgQwhJz9JvGD7CGkF7tNY5Rqgxd",
  "key26": "66FP86omRya4uZbBTTYbpYGt3mU5cJzCkFt8mG6RSmR4dAhabY6Ypx1UbGvn1fE4SH1iWU4GiERtcguKGVPUNKcD",
  "key27": "4E5jN9Uw67GtfCwdrWQvW8MChwruJEnXeXTEzvD5jkauuCU1yEqTnH8CHBAEYeY5bmoBDrQVaYLYGZrF3QDv3b9u",
  "key28": "2TsBBmnbSQCb5hBbJtFjMqXCAN5dqQzFdCSDpTK8DNd31q7mqwcQCk3SdcHeJ4m43ghdV8TwkxdWaPWyii7C8Wm9",
  "key29": "35Lq8aQSeAmcsq99W6yfx4GRnnKCuiq18nMfqRpy4WLEgaaQoGetSQ7LdiTMKXMaFXBgs7ahAs2BhTcjX1A98wDg",
  "key30": "5dcgXWgvCAWSYJXHFk4Zu9YBSrvjcSbnhsJyL4yUJFXxSDAvAGa9TyBzC6wefE81VpcmPhimZon7fSYSaaYsTkcb",
  "key31": "55opJHFJieuXTcbKuL2LosrFtJCWo9FyRkRfvFB3FcPM6PyvFUz79D2rEzLVqs5uvvbaKjxYWiA9S8taLNhfTqAC",
  "key32": "Bc8fxRbJ9FWphKdFpohDAt9VRoAS8UHtH7TAJwtKfWvtjBAcTG4X6KuK5RJy2DnaBeYZiWFZzQjzrfPqAY4132H",
  "key33": "4YPVzH14ktyKijWumvU7fPji9aXhX5vZkqFpBP6Z4AMHieb3FitN6xwdvJNX9Gkg6gEGbsp2AnTKv68br9qXAq7Q",
  "key34": "4mBMxMpiQbALc2TxvQmsrTQw8GFWRw8uqutPxMXPvPmbbWoTxN6BipNmwXxfFXDdTZowb5fPMGvFG8AVmns5j7CL",
  "key35": "2BfWaJBBWJMp7fvY4Xjd8JyYLHVWEUwgWyMGMKgCvsa4V91SuRD6RfUEN1P68rJXo7MM2HRcfdfdK9huj14PaWAs",
  "key36": "fUR1DcpZD1zmcsefCGryttu5dFMnnGnn9TLw2EXccCaJpSN9HFrn4CanyNj7Sj4Pn4U85ZYUjYNpTGRBSS9MHAu",
  "key37": "3Bi37TDACGhZtnMv7X53sSevtotbYRfaj2RNguZ2CCCaDKfbaxZd3z3Wrwv4ivskpnjpymvwP7ohASBeBxpXVytN",
  "key38": "4dvAHx44Ha7BUDWapTKXbUVDRseYL4cFXNsVmDS1jwC8hJExYA9jj9szcTAj77NBJjPNzoCe11d59i76iTuQWxhQ",
  "key39": "4xWDXgpzFVvotDej4y1rr5D6zCBNf3FnJjqtxNLqKmAFZ6MQ5KiGEqGrKamu5LSxaGsX7nJK4HYXm32aGMgoRJPc",
  "key40": "39Ty4LHiRPJF4FhLbKZbuRTh5SRQkG4bGkckLx9vtWNnsa5RhdrBpMEbaGFJgAHCDhe91QJqKeteqcutSnpi4X8e",
  "key41": "2SfsvsrLBbghYRQHE2rztEtCybwP2ZwzMoTSmEEcDoW3miEhffon5Z4N5ERtj5s72s52Wo2jkw2wQCwrU4zsi2ZD",
  "key42": "3Xq7B9uHSEtgdj6KnFtw7YTrN6u94F4XEEwM3UKStgXfs16hyJtbNm7AFbfbQuCikpH21rHBjUN6zAvnF7Lp8AVq",
  "key43": "5QtmXzA6ayvHEzY43GryrMfJNSN6ieeNhxpRgw4okW4CAo6NsdyyGqayuEVTP5BGQe36Hut7LG7mZdBhmm2Jmk4z",
  "key44": "2xHnFB3euTEZPwGKcn6qu4FEdCQugtHz2VXxAJ1wiJTEjYtQHcVMk8Zc9ix4W2DjGhpQUDz45c3E18QNSRVcMzNe",
  "key45": "4Fo7jQS9UCiBCPZSDbgS55A6mgoSbtjDHZZ6CXQQpPT91DvXcX6urF4MyTCaxpMvMZJDfDNLr3fPvRemRMDWahDG",
  "key46": "4V5DZzUbKpuTFZ2K1PgsHNuWj9mdpYdbH5e1dE1PC3kXwDgXnAiTRMdxMYcwmkFukdZthMtZdbD7YV7XjSCXdYKr",
  "key47": "3e2eycrtoteaPi4WBf47ipQDXco6yTvCmCTLwGZd44Jdgzg1QRb9Y24EixKJ41jszavuhp54Wmx3mhxFAAiBLbZn"
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
