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
    "35h8mywitkU4PFdwUm2hiXjbQk7MWQ6XQBRt77D5WWUC12HRU9RFjo1EoKqmKB5NnFuqzym7CHtNt6FxUNghGwRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46drL5fuysXAmHQ3cdsHDPNAJiYcfsBXQMjeGu4TxXDDcE1YPJhkRNjbVnuVbA2tctP6FExkPQ8RaAYpxK9bL6dP",
  "key1": "4mj1cEqeNjrHt3p8kaeDoTYKdtCPmjcMVzRXVoVHGUarqcYHdCBfp7VLVYtfwq2A3xTD1stAyB5s4wpQ9HZ6wRFh",
  "key2": "3oWRkYBE2w8X7DhpHfD1nVjxDfyTT2nvvWGAmCpSp2nHNtkBACWRSQGBU1ZRVCaBnyvJCFYgV6qmjgqh3jdQ4YJG",
  "key3": "4248JrocmoZ3cWpMQqfEj8ofjcf7qQKpHoh2g7LZRMjeKjWb31tf8oWMSXmoN71sA1Uxk23pJJN1tumsua6BKjnc",
  "key4": "2Cnb8rGdzoF1hWVoao5y6buiupyAJT7QR3wEALra79V6ptRuf2F2LSBtPSWSziJibWLhxayavDaXVNUSHRE2KcMU",
  "key5": "4AmsvDsp6sjKCrrX4uBbESUoK72V8cGjEjkd2NMeQRE9FMGaBoAGArTP8fYDptJp4gEaqETpuwv886VTWvPYYjnt",
  "key6": "3HquRtCfz4pzpE7vYjeMzyvAfuHSgd6fCwocPy43abKSwCi7PjRoXfWfJz9QsbfnugzUyHJnAoXoC46CH7ZUDJqJ",
  "key7": "239chPfCfCKrqLTfiY3fY4Y6Sbi9cZ9H3QTDVk5DtrKnx9YtaDctMB2JfVNfswF8kFk712RtQ6fvPo7grjmWQzNq",
  "key8": "3mTuXeNzu3JLLvNDxXW16AHuj7rLmQ6Xnj8VKyBaCcz3yKTo5fBGuT5x8kyVz1YukCwU4HET1LusRc4oicd6xxhQ",
  "key9": "3DaRCsqLgSoDcqvELb1PLd7kEP7RbzxjPW3DTBcN2Y37rmpAEc3UziUVCfEfWGQ9ikR5r1MHFMwmT5CiVZ9f3Fum",
  "key10": "4m58DXyDKuDjeEXZ5Usr5YP5ivn2RzpMGeQdbXTDeEgdB9zDEj1GTGwd9AemCBxJcJvZ4h8BR286MMid97a6kGwF",
  "key11": "5NeEC8aLVf2C8ewVXzuN2nNf3hECdeRPgbJDPZpzXb8Rzcy9jAwATN82QPjmdFZqKcaEX55GjgFm4m5EfsYLAy4p",
  "key12": "Ln5Xi3BQ6Sqz9KMhNL9SWNuBJC8eGHG1qyZvdPDHMpQ7RiA7X4x4Jgw6SZH2cQx474XFAXPdMz55TmVEX691dZS",
  "key13": "4Y25aik1fA2frjCr4Ez7RXRmRWZSqdvfbD4nAMdPJTNzcsVLeCsHnUpAEyd8LT9brJvKYKoMAM1NZ26D6rrofGh6",
  "key14": "53z5mB9SLpXzaZsKfqcej8qDekcVmb1zPFoBQDfR9wQRmUf64gMjzrmRpXCMFwTLErkNoevVM7yJNsjNHYccB9QD",
  "key15": "4WujPfZRvNSUUoLDNBPPxBrCaMorw8xkNjT2EvgjxhdevAHQMomRcigJSegmi6hdau4SuxKqwft4LmtKk2VgoG6p",
  "key16": "5uzeDJVTzZVPrLzh15j2unUMVdVuHbG72TWJXS7URiYoN7UfA5MEv6G1qzTDefPWf7eHf1aQZh6DBfVEbTTnQtGY",
  "key17": "3SpfqkBSgtrurDQqVLUed3s8W8YTovHoYEJWproj5y7NNHg9NeepZmmmXNdaereNr4kiqCX2NGyy2LCjU6UpJyBG",
  "key18": "qqVHmgizwowZHBmJwS9buWQoNSEPpLLd1zhWT7zV7rPraQua3ywUiuwkAtwcxDdEnP5uyEP1KpAjeoZ2Y6YGrfB",
  "key19": "2cAiLdiW45WeWLvRwHgDr1AbbZkvgGy2GszZ5hCWDFmsMKU4BV3xF4kBnSKJQAKQNYqEUiWqNtV354nM1k8iMopw",
  "key20": "3K4Vwt18T6q6Hsk6oPR74yNu2Vt3XbeuJajkTuFT4XR6dxfLbc4Rzsqg4Vj7vCfgGjpQigWMPU3NfgpietW8K9G1",
  "key21": "2VK1KQ9mfXuwVSC11KNaq2udSdc5SLDc95LuNpDukh54RRKD278W5H5s1UFYVr8jzd2x9TiVLSvriMmDQoJGDLgw",
  "key22": "5RvawCLjsC4g8MaBvpuvd42LMwAR4YJcue2rmHV7zdCNTAd2DRbYPNZSpyUkze7UVxHkHHFhXTkBP3uHvyevXUDi",
  "key23": "3JAnmcaid1qNiJLH1uCuSrw2XaeuvaEyRfuQR8mew2QxFtzoGKo5hSfapRmD8vdginpcFUSr6Y544wv4MDz3dUGE",
  "key24": "4idkWQ8nHfXyeqCcKyUjaPYFcBvdBsTQTu7ihsLkDrqhk47sr47Q3CAx2jF7giwdpFnSoiqrGwyoxaQXrX7cifZH",
  "key25": "5KhT4j49wKijyBkzH8RxFA5gaJb1TxiCNba17usRwT5ZzQ8mSgTetN923VLfY7qXY5f1knW7NhVN8i8X8BjCBVmo",
  "key26": "3qSabdBn8xrhJKG1nKrt64aSuh2EKmTmKBRfd92z1VV56nqKo5Lt6tyT5qhFLuB2nuDCpVcWEnAd8iKU78kR1tWL",
  "key27": "5g2pGr7yXV6ynp7EDaZ1MaPWm4gfR8q2kA8CRDHkMEtQjG185Wkx2YUW4cLdVQHVyhDAzsVnVNKWjuz6DLH4tFaX",
  "key28": "5nwHo3vjHUmEkoZ4GwuX8j18nKjiWEbYLrvK1DwVzvdHTbMrBPym1GUVgEUNUn1UmpPthWqcHwqfHJ8QELtcVHt7",
  "key29": "54FHwKt9Cx7jaWSyL4rZyvARiU44kvk1DTDMsq4oamKZ5yv6CZb5fgkZyoQNSrVBVSGJ8rXLFuosMPj6sTEspUty",
  "key30": "5mDpaBJYawNQqruaNpaKjYjawupBK9xN9QiazZ6zZmKUupjisvympzVmvrEPp6CpLTxPtD6aDhBPw4pCF2JQ69vv",
  "key31": "3j2GBBAMPxh998wmmC5keJmKKqb7PEJG5cdK2K92p2RH5jq2kEPnLuB6e5c8VdcCMeLJuQu1heKT63XcEMZmDXf7",
  "key32": "5u2rN3SVudCuAhMi4APooLzTrxu5AV5qDVhUAmyf8tHjMtgJ9HWJGrShXf7LZAagg84Dd5X2GdbndZ5oZkYv3ha5"
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
