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
    "3Tse3NbLPvzitzMr5Qs6LAVZprrHVUuxh84Q6XTAcvdx74hNksynzemj3M85JRo8PQ6pCFpGTJEikzaNuX2m3Wux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjQnVVYtxbKY3aTEZKDouLopveDxZVGy3SnNG85RD7Wa8HtQT3SR8JZV6vhCCGFWwygMAY5SbbGDLzCHRkx8Lra",
  "key1": "4EYRhjb2wBrAP5BcHDY3EEp12qZeXRzjGG1GSE9MTAVaqWzFjmrvT8WQ2JRuKk9ndDzh8rpvE77uk2xdHzwVvVoy",
  "key2": "BEQVSAdeFw6xr8K1gH3xUqwYEtD1iKRHiFYZCFzaKmkJqNSbBL1eHCfDKtLyNDhEyXqJv64MdKuAJNsVV5mdkKK",
  "key3": "37hNHAV5K74bRZ4E3CgNPRTTabQ8n8sMy4jVXbC3q1BSK9KA89fZEzzj7WjBdsEdih42Jmwow4hBw4Rzn7tLRUPj",
  "key4": "3rxLynDYbDbgSEcaJyuGUotm4c2RGoJBhYSCfcLvYFZnsAcd2sYZEKRGVpuNzHKkTwi4WnC3V9LpheeW2trm3H5Y",
  "key5": "5XFVZTMgBBdSKNer61wuLo9dUygBPT27ejpodbM1dztjN9kEbsSsRuW7GtYcjKXwpQeg7kxA29hnZV1EZUfDKaiH",
  "key6": "4sXedySAyNpAdvrNmeb8caotwkuSP7ZQYXSy7seZsiw9R3ZqHqDVo91AbNZYjddyTtUedFxs3bpAgYSrykJ45JBm",
  "key7": "29y8bq9i8NPaBoNrzCMNWcD82p8AnTqpd8iSDLjPvvMrmF89SrqkUMu1bTtsgLyid1LE1w1mSwb584zKHPA1si2T",
  "key8": "5kr4ZM9KLr1xFSpkWqFoX9xhA7hz4SFsRB2P4SV3RhQ74fWgy8qPugD5jBC7nTBzi8pztKXAj7oYyrXEdhpaKVMc",
  "key9": "4NTYJ2jcdmcjNYG7PYgbo84BxDT6JUjmZdfjGTeNcUPbsyz6BZafJwp91bWFNP19SQ7EcvLbuG3RwZ3ny1Nm5rHr",
  "key10": "4YHZ5i4VGu1sjA7x1WRVC1NST51sqCP584FsjKZZFm2oGB6TygkDwt48PGFJJUyxEDSMsL78Uyv9MuEP8mJ6NZVo",
  "key11": "63V1SjLH7vqBMmQs3pDRQJhweYgsqaEn2fjte6DdBrrhMMmcCEfGexcsBJbjTZJ9ycpNNMc48ujYBh8H7bRoM2i6",
  "key12": "31kF5k6DvbvedGGRDHcj6J4ujcSkAZjLBjUpCA23VBpqqSR7FWiMmtXoSz2xxMEuUMPasUmUPUbXJsgqMN74NUMp",
  "key13": "5C8vs1zenmfVWpHEFonGqAWR2KjLkG5vy4Dq2wyzKtx67WjixtPgFvY6dwCrs4rfyeJkQbNMx8ghf3noPA49mtmX",
  "key14": "xbJJgwqTTmAsFv5BiMVsNp4WN2YzVcyT3q5h6KATUgokfmhzDWyGAbULnZ3aVVcWiqScqrkWkNhXgVv94U4R8yP",
  "key15": "66pE1CFuwQAn66Kizr714Zc6xVfMKixJRSvf2ivcm6bBgVeaGLgJAXQCuUEn8E9AwXWpUjgsciHvMSaeDCcZnjfo",
  "key16": "4WTVAhGZAHXNBWPjQu95e1QHZcLQtgLTUQxaHth3zmDPfegSKciUDRhGnFEcPmeWD3QAdtWSttyT7dosz6WneUt1",
  "key17": "2Yj1Vy3oM7MYwem3guzZcHiw5qr82MaktEEFaMrcLEc85vL2CVDmMzFsKEk7cqKXcUJXrE4DvG4XN4Y1LE61eVyR",
  "key18": "2fF3xFcgPXMdyssnkBnoePVriuH4Ge1W99cBtskBrBvLiVcbiMLBasmK5mRZTRTd9f7yDnNG9sj8tTW8RckMvrcH",
  "key19": "3i3tmnJkQHkQ1BzznFs52pH2up6n7Qdvs5M7bH28rfWxfE91gce5eCNvd4hWt8xTUDPbUUoanstJCJvhXZpg4BCs",
  "key20": "5Wi5tUyVripcWrqNeiCfE8e4QgmB6viRhtHtkjncv5szcwR9cpPRocqdMS6ry7wTJ6zmSWm27c9aPCrtmPEtgN4x",
  "key21": "3ms7qiom5Gd2eaYev4weXDhA7wgFJzqq5juoVmz8rnye77bdzZXD8i6FGnDW93sHfb4NBQxHXSrGKMreKo4bMcL9",
  "key22": "5v6YLGThDoNPgLph4PEoSLjtbpJxWbEXEzeGDFw9QVFZmDF1ow45pw3yNQ3Q3zoHsV9KUi972vyfkPFDB29JfB6H",
  "key23": "btQrAX6833Nt2F2HoB9ocfUWMdFoTC9C9KhJTEvXScReCmZ15Tjz9hzXac8D8oekheSBMqRZBWbhSZyVVDQRJgH",
  "key24": "4QpemF1dp2jiDxd9vRFyykyxUc5UGyaiGYq8tTXyd29LzCw5DYs6E1oLcaoiMj8zfeoyC8oM74avJLy2Z1NQHe6z",
  "key25": "5yzrdekoxC7YUxkTmaE1T5KFpEwiHZJmH6EKAyb9B1e4kDYf6yhbb27ZEszLPP1hTCrLZSgYmGcXVb9TzVTz4jrc",
  "key26": "5qdWcjsqAU3mvSQfJ7QXg926HLkmZBBLi7ymhuCKBoQknBL3aD8jFSpetkqAP5byXKdufYsXB47BfKk5TaEuxRUN",
  "key27": "qxLWEnWcM2YWWv8H49Q7AmVbNhb2NckwAEHrYDfPXmygLC11AXoNzwhTZ9TdAtqSnFB6wfeSgUSNJ8C4Lz2XMCC",
  "key28": "4Yjp6Rs1ZNmFPYpMHAZwSYePVjj3Y9LwUxmoUnqEFHF3ZcvGFKfz8vUgkYML9uSHDtjP5FbdXBqcs5UV7QYRPX9H",
  "key29": "52w3R68ypyJQ3WTMvFLNg9fQhRauzPnYxRjVvfkXb6zywuC6wy3xVAXTbiSCVKHbYvEACmqYnYiFP5v6NJzQTuqQ",
  "key30": "2b6Tj1fk2rwqjMudo1GhK6CoRqnsv1Jm4EpKpfRVcDwbFPP71Ljjvk71tbcC8kYc1ipjW531DucHnpvHJFgdCPaq"
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
