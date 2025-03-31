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
    "2RGSWLjagTTUA2hDQoXmszqepARVDLErR1pwLoyxTAquGMYoLZWBjM2Gc4MsDtbECa1tKE3J7S4M6wuZfALP6mRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eet4u21tZot2Ftu1UpHtEizDSvVwYGXHHh38BFmYBCjiyNmFGTiQuoB44Z73sUhQWuQNzuBP2F9hMAkvdRfuT9N",
  "key1": "3JbvPVNNoBxs2VRqTCSicHJoT5HR8MnzmczEnyH3JoyKbhooeMYbM6TWaKzECk6CXQYD4uxqWvJQ1oXE7dRCsmsF",
  "key2": "3AQyHSxYDREPvYfTP1AKYwcRJ2Z629r8Vnp4abGLuHqfJ7hs7Q7S3oBHTc8iuvrqh81CoLqepHzj1eS6YgWX9Z57",
  "key3": "5PgF3XBU7evmaoDYz9kzPHoHNmi4xCz9tNpUKkaKyyEXxiJuyk15cVdHu5PHXMMD29bo3owEJTJzidQtgGLmprWB",
  "key4": "2tAoT63yfadTpSimLo5Jpj1f8TFpVzRnxXi9viD5y3452TXWabLLP9ZageDWxtbjgzakfeyedZyjBdcnm8MV81N5",
  "key5": "5VAULpGa57TSuGB8zf9h7fjC5pvAF6R4yhvbLVYnXqujzLKHzxqqCeMmJviGj4Poc3ujK6YyTac7aqJToUPXZfY7",
  "key6": "4aXW27gVpDb88paHrKZGuQzmeYvHdGbk3ZmEBCTPcAHaPw2WjkVUQdNnmYqkLK7YTKTERKV3AqZP1KLvh5VQybxm",
  "key7": "3rz51Pg2V3DYCpHzbyiSvYkiua13PSuJxDdobMC1i6FwQiqxEH6Hm61wrrBiWb51buSFQoXm4L6wFkFppSzYu2Fn",
  "key8": "4spV3L54bV5EHig1Atr6pEsgJ8CHJRr7EAJnnmDJNoGjhgFAMeXNfwZQS7trw6J1SaK6wfUr3HDEFJwW53A3hfo6",
  "key9": "KytWGgHErznYAckQeKyLafxPSjrjyJacPw32Krgin25M2mvN7mJsh8JL9PZoeTSsUKRMPbXM4AdKkLCHQBRRY5v",
  "key10": "AhNyuMDpNCH9TdjLeGt2nBkhzbwAgTBBQS1dbKirYn6jXzC65ws3VrpjucKdC8CjcUUoxZHT4Fkbfv7bmQgEV8f",
  "key11": "52QkuQnMPyXoJohyyyEBhEstAdGGdBLUaHMyeQbxnyuLTGguFvN49JfNu2gVNNaBmLkykWvt1oVMJ1tYStDxq6P6",
  "key12": "57J9eg2CvN53qg7CEfgNrZaQV4uwuobDCgLVWvUCYddnyZsNGuncUbAvyjN7xj3L2B7azuVL9UHMzTk44EY7gAVu",
  "key13": "3SpN6hPsqS5QZF8s8kga1urJdrPN6knTdNpGvDJ5RmpfoJSJ1aAM8MouAz5cKMaCeuTkigHyfZonBRHkkVYE2w75",
  "key14": "3DRMnJy5pdXSPACPpENTag7vG125WDrmgLLXH55KmVu3kmgUxuUzT31LBQg4JoSVguQWoCe4i11xHuBGCvxMaYsg",
  "key15": "2n2A4foVd4jrbpEBnq4Jz3n8ULStwgji73BygN1F9ZTf99DBJnpiSeGJJtuC737weZNGtFeFdKzBfsjd1w6JgiKr",
  "key16": "riUgWnWR9aumpEb4VN5xyRN4ZMD48Hij7Qv14ARVc1bZVkaqtxbqkDTTynd4pPNaxtbXrweJ6P6hMbstqJCgG5s",
  "key17": "3icZtFmGHUzZ7AnMMYHvXTJ95vokdQvEzvJnT6M6z97FMRYMsbrfJpnBNY7jrFsm2UUS8qL9yEQiHw3mrzA84VuK",
  "key18": "4jcQ8mWbGCncdJZfiKE3ZEJDXnhV3gLr7iLDgrVzYqtmPGMSYMYu2eNKF2t651KW26bWjifLi7bsGRh1gZthfCav",
  "key19": "39dkpEVmNcdqbVfgTWXhi564oJ4iQPPuWJFfenYaogqyjCNPhJdEWbKpJp9sjgcWPDFmjfGjEFnHn9YbwKLuMrtc",
  "key20": "5iV1YUPJFdPkK9DMVB76JFFKz2uL7CvuRzyojp7haxTJ5Njo1jgZxdBeLfvgZ5znJrq1NgL6ZvPhR1n4YK1YsPCM",
  "key21": "5Uyyv38vZeLG1KbxQw4gaZFebdJAjNdCCvBRnMoLgNCnvAZKv26wG15WoaeoVj2GC45QU8A8TocLLYMvpXGQBTh3",
  "key22": "5JpYCuc7gbT98nP2kDsyyKHMcbQJqv1hurED8btbGZPLrVxDmP2YminaPQ8NaMryqWQ5mUBcN8g55u2cnxCNbP6q",
  "key23": "3KCaWqHwtnBgWD5RW5fRExAum1y2fHDh8gFkaEmrDHUruhzCnvaZsWHVViya41HRGFFrZt31aEVQCNzci1o72ok6",
  "key24": "41mKoGYs4WfcFZES739PRufojYBRNSrEDGKDK27wMaKxCW2ARTP7M9DBvmjcAprUm6iNwarCkhC6rXQTrEHHvFrY"
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
