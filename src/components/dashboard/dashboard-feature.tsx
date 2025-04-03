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
    "5uGnkGMt1fVG1myni2CMkFrmQ8MUMq82Rz3vgnu331WKxzzW8Joa66uL8UsFTN8jWc5Lmhtweg1rxcpz3bPjm6sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35btExXjem4UFtoNmkK1EqMUL3K3DR1BJDAkSg4dLDC8Lyc8pxNy4cpn18ASGVvMZe3KG8xDTBA23Nkp4q7tzhrk",
  "key1": "eYCzt9Beu5WQi4Pb2gtQ3cQ3BmWTjj2CCWb2gerAfVRYHvpKJEYbSzAEoT5aXUNpyaoHX92mnVYDXS7YnxzqZgM",
  "key2": "5L5tFLPUsVn3MuP1nymvvbuMUowyvAZ3i5r1uNmMzbtfbgb9bihBnPBNaxWEFWw8GS7kbCeg9rCtPGq7Ah9e6MYi",
  "key3": "2TnFh33wKXaGcGJyRr8a1DPWncE27YCLSknXyKF2D7j9xFXXpkawRgpEP3gZoK34tHYqCxWZ6qkxd3xh4gfW2bdN",
  "key4": "QPa8B7j9jJkKorJbTYuHnZCmnUVCsR8od2PHdaneMQ4LBT4ww7NBz1aSRrNToFtpJrDPuH743xi9Efh1yh6ZWBC",
  "key5": "25rn11wf8MXsnYvisGFHpBLw1GtD4iBENyTni3xM2zaW2HVn2UpHEyrb3JY3MwKerTCPm9QCtA7KZsqRQD5Wk4zt",
  "key6": "zGTj3wkfhD1NgUmLKKQCD4vnDcRKAgktsN2iR5kiTH3sPd3dVMFJQ29qw2UCCEi4nQKGaZGLcHngVwtATELL574",
  "key7": "yuCGkhMw3Mgae9LwVGhrsPu3xjDEvXycQTecZAUojkuXs9AJGt5nd3uFR3a16EhitB7ooNhf8t4SDes7JUacHm8",
  "key8": "4FQuxaYMHE96CnsQvJhmZ3WLtMPXxJjogSqmLp8NsjZYmzVYWM39oVJtzLzvscJtNCE8ik54ZtRWQbAcby3io5vu",
  "key9": "2hpzJuPoy6z9mZutdAG5xB13Bh4vVYsyQdXx8258cNtZHkXSVKEue1nQPwV46nhsgKorLsRo16ni2ZdFxnydAjXn",
  "key10": "4AoagBv8JfihJSDBkCpo6pKHtYLAxW5f5GW1ChbHQjWgDrmKeP38em2zVputfjo3BoiEE3ngjzRwQBW91jiLeaan",
  "key11": "2iUBhpkgx6vkpRYDhETp1ztZ7AeDKpvhDXyJpfTQWaG6nAZ8ye7gGduNbuAHtLXKQ9mFdWhkdJnbEyQG5xuPEsFG",
  "key12": "2DreM5ivSzL8eRJG4ooeUs7YzpekotyJGd4RZHze5BZebqM6LQLqRCX3ZkCzdWGRNwmzPZjeAfQ89Zip9DoEDWfg",
  "key13": "5TzCMKpAWDms3mkCpiG3MxzcpBpxBNNWDWuM8TZkzZ4TqFJgVzESqsLLSDWU6vsPc8L5bYeg8FoFKmxiGAKCyDTu",
  "key14": "4z3wrjQbe2ZiwoUzQs2ktJwjhrg7astQf8dejtfbVGQcB46YZFbSGx1QeomWpw4QtVvCZiLA31q6vYukotrBQany",
  "key15": "35hnmmzFH8bjDPHJuWpTsUrEPx8xXmCqP2TGsDtNmif2J7qkStZAvULH92g9sv5SM7iYEeSn75Ugnegp53FD6dUW",
  "key16": "61Ucww2GCypNNVExfUzqGTxbJ1JJJrYayGRkVXtZc9iQtBb2yMuKZui4152tthdc8Dj97E8cLy95oWNJ2cNZgExJ",
  "key17": "2F8fLfA9Z9PRaspPzEJiGaaZzFV3xZydK3iem27KwVseq6UDYiYogJSEeZ2prLRPipJEiwKFgK51vpFuccceqmaT",
  "key18": "5iFSohr1B4AkXz7uF3kaCMXD4oFCRTMTAnTYD42TizszKt12vchQ8awEse7Eu7jHYa8PdSRrN911WTwE9KfnGzPz",
  "key19": "3ZmdfKaeLdhcrmpJfa3VMDdiRLph4DnD7n6b8V7UcR3eWnGVi97fFDUxfxvGAbcmzSRc36Kbsj9k5jLpA8rQJhDH",
  "key20": "3sY5o6beKheiDa8LwpAUWAcaywVhzMdDLNeptEm5D1H6VZxgFPaCU5nMsXM7poEUD7GXUovgMNNaGByMEFZMc3Zf",
  "key21": "3y7NfSQT3BpDo3HrSCq6dVkV9ZaRpt6n2h8mmqrGRdNm6sYHricjkAV383wSYbjNLXcYX9hBw3SLtWCZD9gVDBfh",
  "key22": "643JkENGPpm3ShddcL5dGAH88x5d2Wu1DXxFUR11yd11d8HvLGRBJiqs7P2EM1WvvSGqpajr9byd98Ui7ABZ4jpA",
  "key23": "66bFKwVuNsQTQJjms67vYjpDQzW8r8rNnXSHDz8EdxfPqD4zH8SPt4M9rSP8iX889gcPzHW9pPJaKbbLNoGgaAL6",
  "key24": "BmpKniUwNyKWi86gJvJNib3Ug2d44JKFS2VKD6six5By2pKD8kjh511BZkjxydKfxWTZ6VbR56rpny6BGq3fSnS"
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
