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
    "6fGeiPepM5E7nnexpKKVttfysgRx7XmcskL84AcHV9pxPKfE3uYrQTVwBpyFge3S1mDz1CrNhiMyf83Y7fTV5AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTuL7QQHr8sb9KspT71p4bRbFSUY7vVnN9ae2q4ekUxmRNSDQSRJ9vB3t9BpA69zicrfv4pwgSQc1AZ4wRXVhpz",
  "key1": "3jWMJ5m7hL6e3MqeSGi7T2N2N4nTqg8yU1FYSyuwfWoEm1rvQvi4EkNMPF1ExHfhKA7NTxuushdLTAxuj1mFFrPA",
  "key2": "tgwL3wdvBa9khNgb9vBEDZPs3tBrSq9FLNRKaYRFDKFv6w6K4vhWAQ26twCysEsGPr8YMPFrA6xgqehSBdcBKmW",
  "key3": "66mHZpxJMoqUi6Z5hTK6GadhgjDWytNPZ4xkTb8jbU8ttn5aRfwFESdUgdmc5zXx1o89aLbosdqQaKqFG1RsbDq6",
  "key4": "3XXvH8C1VqFDFvi43jfEAp5rZqbuPTD5xKQMnBfJFo2M9kLvtAoMmTrmzXT68GhE9sTmX8BypFViJsxff6LvrZoZ",
  "key5": "21xowosTKtoTTi1ZfCXm72gdyiYeKD8oYk4wnXxnLsK4zDPsp5LoM8AD3J3JCaqoHdFw4Q1FCWYiM3iDfLhpBwFP",
  "key6": "4NBA1AcTkeGNAghPNGi55oJmTRysJfULSF8GCZjSRs97uD5Wi2884dp2hVtb88bTNWzUo2vp7fSw75WSNiHyBUYK",
  "key7": "3f2U7euxciFcAtNMcdBz7DL918n2hfg1vrCMzdXSGRHRUGrtHemZr3Z2LsJ7MmzYGXDqHHm5ftBKP2Monn4VDbe2",
  "key8": "2ZdHTFA5H4zvDQZhXEeMZWCzVFdz6rqwq2MjmSd4N3BEXVmZXhcEXxAjVX8L2ohusSusFAf8rEZfyksJBUKLqPWy",
  "key9": "3odBevThFJ3ikug8nhKq8ddGfNRgV1enA9cr699HfT8jmB9HESi38LSswY8dQRWTrHqKG1HJSrkzZhgaaKP9z7eX",
  "key10": "2s59XNUc63oFuPcfKBzhRFdxHBtPj7TdN1qYp4asfirpBmh4QBN26hLnvBi3zHdLH5kPP2VEWHCtHq8C7ort8KqM",
  "key11": "uE1Jy98PFutiQjAuULM7WFgDBVMGRMXBZAPM75qRds6qyNGUwcP8wNLtuV4tpsCXJbH37gb6p98djntPj48uFnB",
  "key12": "3F4ruHZwy4XrekVUmTcageYJpKrKwHmYocXBsSq9jZfcSZs6jN2Jq7WLoQmcK1M3zQDRKZLpPmHSfBfMTiF3Zpn4",
  "key13": "5oxXNUhofwmUSc7YdN2LdxpqV9kpmpbvmSSQxY6tKFiDLwgrHRajqYMaKSNUkAyhasJvXt8R5Cm9H69RQA34xZM2",
  "key14": "9n1wf8BP7SwJ6an3ayjA9ZkFKEdPKpRnXgqwuke53PZSHSuM7SH1P9Kugh4FUTsPVRGrgLnB1d1U5eKQXwMNPAm",
  "key15": "2kzzuCQ2kUTtTSV4HBqptxSkNsZ6ZF92Fe6h22ywSw64DSwY1ynBvanwz9Pjfu9YobNioWhhraY498jK7ASpgN9M",
  "key16": "2fVuWgMwHtUxnk4ZidPHfGg3D8w5X1nsMdXj2wBnPpCYGLw3Td9ea5nQff6PdJGtsq2tTdJ6p5u1VD4TSJFrFg62",
  "key17": "wiLhnbdrqnTtGxt28YNLLdQh9vgYJ79k3nxcE6hVraqp33K1A6RKiECb1vZ1CyNJEKwB5S5knShyNNEHTjc5nhH",
  "key18": "3PvaPCufWj6HUWyTUoVcqtASYdHXaGT3FSu1YVN5GrWBWykBn83co4yaKJ2Bwwq9uMMy1T5DSZbDviVhvzzRtKFW",
  "key19": "2rd1mbkvpmiDuaPh5ZuhddUJpBQia6SNgfqWAAXVvYgRH5pztN9JgsgKLMffhHUC43SgmdkmMrrVgEaghYHSrEN9",
  "key20": "Lu9N71QEMdZRPFSjuDJFN1sSehojav1ny4zXDp6RUKnSkEWHd6YwQCpTaoXBm7nS1RdW8W421Bzsm2i9iYjWueH",
  "key21": "UxWPgt1tpqqywrw8B6iB7G5iHjaXf2CQTGBkkGirM9P9qYZ4hWFatNNQamvoJiXffcCV5dMWzfoKX2cjBQiLdFC",
  "key22": "5dF8QYLY5BBq8nLNfaedCULRdRwi4pb742eJeU2dvPXgHXt9YMiattjeeZyktMFVnqgKw8hGRURrh6iZux39UCig",
  "key23": "5e6mD1j7ucdc43d8oSybBJqahNbH2tCP9Kfh22n9iJtHXubyGanPYgBzznGoYtCkkHeSZm6RxMYE14b9Cg8jxL72",
  "key24": "25UZ8tP3kT1f3Anvn8GS2AnaX6f38yeXiwvT4E71QwkSYPeRsPecobaPYKfrn8cxwDxcKsuUvRU61DwYXL6V1Np5",
  "key25": "4gKfddP9dsqEy1gFdvEmxWNhAJW4WVtqQ6XXw3hEMrUdd6Tk6YEJE8bnjn1Dc55xnP7PjxE79o6yuSWvpAndJzhN",
  "key26": "2th2hCAKDwRDMf93Ajw3nUYxjA3AwXgpqbiyjRxqSHQpQJMMvjNYADAewM2CB9XJ4PPsiGE5r8BaxvJYV2XCT2op",
  "key27": "td46TMqohLiuMNC5jzfHFCt6UkHtna3jBXLMHQV4cFjC3eNHeBnpHh1d2qcnfgM3fZxrGrtxQFmLsddqMC6iFwC",
  "key28": "3FJNRj7FXrAhAtDb1hZ1xTPNGx1gjGAZojC94u6CE2aJTc9wsUQoyCkAXpedn6Js6kgVHBTa1927gvxNz1aDCnAt",
  "key29": "2JALuZr5nKMovGdMVptoHWUVCQunh6F813ogTETKQSUtsCT3fY5rNNKtp2tf2E8bCuGWkksU1wWAkzwaMMbdZARd",
  "key30": "3vYjCVCRQBa9vzr6Cxuh53ASJutQNwZveESTJVthzh9JR3YCwo3RyoejYWQ5RGmntV8sjz8RbcsqgXsek36kx4Ek",
  "key31": "nwPXyDMbEnRNao9xydRj3VRRgc3Yqg6jF6Hmk5dWu1iFYTRfpUc8G6HmtMFTaXRLoFFb8rtkwpRY3WmpmCoZrwa",
  "key32": "2zFMFaw7iG41LTWTxmstcFfuY4K5yLwafWnoiEUwu6uvp2cLY5tDNsC4M4onNeC2fR21YE73xCdthk7V2c2YgBxw",
  "key33": "5CLSUcUB5fQV3K3qmCQ8u8Uv3w7bKsQ2XNv7zVmeqePUZ4WsV19NeSdE4Z4XuoEc4k3Cy4CsznuNXrLMFRXjiDt8",
  "key34": "42VmhkwThaNW2d5Ykx6e6gN5KbQYQxDV9wAyM13C3aSxwwJg73m1Puf7nC1SCasARr6P1rqmd8LCqYehZBNyDbyh",
  "key35": "3qY1Nyq9ttTbRUCn41okBVGq6vxXWFaNYH3ocNGEb9tAZUTcVrijf8wtjg135gnhkj813xviNuR8aC3vXNyPZT9c",
  "key36": "3PkfNXXB6dFMDbsbetGQwKB32UTdnZx9L1RJXrZ9Zi9nRJoGRu2BDPp2oQn2Pv94aiRHywmHhgD4YHxQ2o8MfJmS",
  "key37": "3jqLJdn5QYqBzvijyP1NhP3tY4Y3WGNe5bxe7gaf9aCbAVpnu3dq377CGD8gz6JYnKcXtWiH9z9Vm9JxRd8v3rYs",
  "key38": "2vBzhogzJMbpb86Pke6BSvuBEWmhzcRCng8rMKkSLKWoT2jfMHw5D5kGvJ3BvyY3nD5kxqxrZp6gdBDyEFuv1Yur",
  "key39": "382sBpnM9waW8P6ndNehXVuWaCL1ChEF74QY2VHVTSt6ZAJuzVSK5wYQ67MvX5BJTR3buKDkJ4oKm3bYkN9Z4JWk",
  "key40": "2Mptrjqn2Df9wmJTtJeNzU6ixZocg8no5kASNrACKMQuTiyEYfAa8NAyxQYs5VeUj3kmVhdgH8YXxQcY6AagJny2",
  "key41": "5ek7ceneZextUgNMtUpx4EcyXdr7gQssXhy8FdoDKC76VZD6DR3sNT9JS9WqLzzwe4trc7Tqki7XzZd3DJmrANPm",
  "key42": "3RvwAo3NQe9HEWEQn3QCQLqH7sHyQ4TnkjQmKjToVgeCyyZvuc3WE2MSpMnU7sufxaxuHRGKZaFAq9xmxn1rbWAT",
  "key43": "hQtUmqqCuyVi6rN7RuCqxCkBr1BhJSMRkremiUPRVb2jPWEzpHWBDseabCgiW5mBUDcxDkefvcpypXsNfds5huY",
  "key44": "4mWvc1PNT4Z93HGKTB89SfTNoSEPhsfsNPUGFsmRVMter2heBdWLM9aWaiYr4ZsX8ME6MR3AP5fnzh2bvtZcUkS3"
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
