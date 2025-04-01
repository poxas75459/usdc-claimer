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
    "282dN6oBHNqAxsUDSL6tLESKZJM3Kd82jcDzj2pAYSgAtwNc1KQXxgtYdeQeqSz91SCsRCcXoYC9jtiVWexZvZAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUjDWhcKe5WsWAeSDrjx33zDfoyA1Z7ys38CP3ikRJUU8YEUhSfGiykuCDiiMfQVc3wjVSVqyiHd9ccR17nhZro",
  "key1": "2Stz4LvkADAwvx4Q2bVN8STjCNVi7t7TVH3ayHXHCDjNXyKMsv6osAunFnRjzCrp1zs5qJqY47qb6U2PB1rwQBYx",
  "key2": "45YKRN72FY5Ntz7ThxHj3pkcx57KxAhEja4gxj4ei5reNeUdbgboBPhirqSNuRiuUTWtTmCZP9Nyp6zMAytpf9XK",
  "key3": "5xLyy5iuDMuBwz3iFLycY4Fwp9aMjj2nM8MDSNiL45Zm64Wr1jsqLVyBAuahiT6hFrDFDwh1U35c2XtaKtSqPmkx",
  "key4": "54PsLjvKoDTDg9CuLVSAoCqqfouZd81LyBd5hcT7yRwEvSp6keWV59kg5ZpPRStG1c7LwcdmTDHu2u4uPxbGSFU4",
  "key5": "57W31k9J54oUbiYRT7GtbqTNPiYc7ecwmb8YuxknD29bnHEZ2Cshz4fE9sZ2bm2e7kqx1Qtb3E5HUoLwwahovrfN",
  "key6": "2bnjk2dJMG5PN9yzrPq2WCzNxb8rGrWZjJj4AwLRqW1wFdUDFzU4P7BhHymCb9HrzSWqVjstXtPHVhoyVjnhoBkQ",
  "key7": "4Kk7kYB7JjuMeiSdnAZXd4yHA9FWiizF3oyL1BM8DuDehX8abxoKUi6TCzN9Jov3CQ247aDN9P4bYmSJAkBK5CdF",
  "key8": "mTFR36rd1iXULJMrWMwCTgUPXs331KsxZeDjTqs2ifc6dGqGHhLqTcMHAmarxkpiqjAxENW783xnSSG8x4oFrvZ",
  "key9": "3mXduvvwaQSxU1opuJ8iRtFEWHmpXCAKoBV5mxwnUwdQMFP5P9qzme5h54H9bvLrCCtbUbKpQGpqXEfmHm1AH9tq",
  "key10": "2pL5xxVXz734ydfR4K21e7oM2u2Fy3NLgqMu3D3m3xZygkTUuUjEr1HPA6ZQkjP3Zu95p1mi8kayT4HyqJQJtL8N",
  "key11": "2cuqCGAV53cjjRcLUhJ3dQDkMvbPuorxUAZngoSpR51fTJQgSdBvqkPmtg3bfWoLKVaRk6acHw8dBAYrBSLvaKXc",
  "key12": "oFno8qJDrFEr9FzqzrB5Ni5ws2BmVEMw9smcU2cCvEkM1EimgXQEd9VgeM9UWqSQwuXzwHDvCVyxj6fSZWWc8is",
  "key13": "4H3dc5kVtHMU6J13qX4WggEP9n8qbBGv54VTbcgwJEr36xwMEh3BdxAtV2GtdpeLf9tubZfhqkuNUfb41ibgKv9Q",
  "key14": "37Ln8RFcq2AsftKGycYZNJmR7FqJMxSvF1WCPuXvttkVPquU5vgCCG29PEfHMmufesZguvykK8bWLuvq8RaADPkg",
  "key15": "4ZavHWeqxyUxAqijN2eqjCnfLX3nUxAUSmDjQfuiVgtY1c8CSxpaQXcVJPxZ1EBmWSajXUzdtpgCaxNiRszM31Gh",
  "key16": "L1E3iCDKnizs1nT71t6N5aR2PCzfD1bHCT2qybRgkzYs8JM4tybTfGKzwf1PsDa8zvfMTAH1ejKryY6gpdpmYJ5",
  "key17": "aZiwayxRiP6CsGmsVN1KNDHEtVgiQNCFCkatSnTkTpKUaWPySD7BumUnm9wgVd2Ns3dpF63oonnrf2SBusamiWN",
  "key18": "U62ksqTKQEDbk9aDxcDc73HXgJLV8BXoyrmbxUgEtMiUd2QWW4kQdM4YN1tbfBK14qDK5Ts9PmrhktQ4R3xfFSx",
  "key19": "9dmru8j7CgT6mFHj8SkUcvcwfBGDmPT5ip7opPmdk7X5MGEa94o6hPWn1vMLBPLkWzK4Aue6Lk55Ffou98gnZv3",
  "key20": "5Lc1ZXejGSzT7rhFbKsnmKxKePCn6QJrHr3BABRJp6b4gE6FCQtaWcSJ9J7gB6HZpcfhUK57ogeBhAVRpC2uoQdM",
  "key21": "2F82mkhYsDvM6s1Ncwks6SmE9ceHhXwG2veuqqJHAREAYCxvcBstRB7EebkjTcXiZoXZ9nyJ8TCDut61vczBuZsx",
  "key22": "4b2xKEdQYPdpaHew4UpNynGvYyPECqpWcscD7PbQDjTBvs5G3HeGP52UzUZovikhR2iTCytG2gaPPrVSVeZC5Pei",
  "key23": "qtWgt3EpHbi2GNzXUVV7Rrv9nVwvDuRdqWVibGefiyAdRumKE3ffmfzTuzA6NvrvukJCC1vu6TYp5hKv2b7JrJi",
  "key24": "2QcGVVDRXqb8La5PM1jjgjxsbgZK7AP4DpAtQirAGSh8UFiB61EmUosbfKW6HiWH3EQii4do3K8BvGH3iL2D9jaA",
  "key25": "2j5UpnzR8ChQJkkFkZiQ56PSDgsz8oh2nMCfE88YXAjRcPqhWJU867TShbPVXgnn5AG7GBrqV6K3nXJCtifc4UQX",
  "key26": "54BGQMFJixtGAKADzVuZjVWwyur4WQnn3YWjkfzU3Mw7m7v3BefAGZznw1TLGFhcdE3cD3RzM3hHY84GbtTXkKWP",
  "key27": "31KgmMcP8ABRTzgBHmxF1kGK4WLNXNCDwXnFrkmh3UgHsuiaK4FwxwoG2i8JrT9Zez8RcNucBBePt9LpJpipBPL7",
  "key28": "2muZoyphhwV6uWMuKz6G1Apy8SPwxhd2cETykK4C27YxmBAFckFrfcqrwsJdmpBG7nphU2DHJfZsvkXujDyiPAHw",
  "key29": "21hNyYNttHVUG2QGhWNbf87u2iSr9hwYPGcoveLCdLwnjfUEE5kqZPauDSNXb8ZhU9K3Kv7YefUVoy9kFt1ebqXf",
  "key30": "8M2AVWQeYTSqVJ2fjogjS2Nw2JDSSHbFDSvXpUSBjymybamEg1jmRRg5cnehMz4wv5XK3VYjjscDrxzDmxNsUUe",
  "key31": "2bnGkcpQGtY6UXoofW5tZrcg5eaWVUMM59G8oTqAcgkWJwA93rCacSi4L1qrH6fPm1ycHjuprGfVrPqWY9HyZpa3",
  "key32": "BBYx1FQWMdRLmGPQt8FQn2kzvKu3dMG8CBihv4AVfkmYtTJ4TXrHct2ETQavLH3VB2spuar7SLpoYtJE7LSnw6R"
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
