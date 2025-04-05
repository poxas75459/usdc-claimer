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
    "3kMkkvWue5CFDj4GMYimZSbR5XYWs27Ug4jgRuSctmhYy7m9SV1hHPDTCMFrdzxpusGuPRZu9vRtLcE65kZdFuk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hf4Xn1fiVG3iUUCR4i89w5c6bsxLiBjNH6uzf8tz7DiiHAXyCPCnq8prCoYzZ5Hk2YV2opQEQwVyzH72rGNeGwy",
  "key1": "WrZDJBY4kHGnN7S5ntTWMv8UzeKHmJqtbbytmUfVZ2gKXC3kG3sJfK19bCS2wyvjEmvA1nYXkf1N6QuLLAASgxF",
  "key2": "3TWp71hBvKdv2pj7LYhYmyYrH3fNdGzeG5cvQyAwc7Wd63RgqJtSuB8AfawkuF5AQKyabeoBxRgCyicDPzY7PWR",
  "key3": "4BzxQ3TATrk5s8rYfrkjojHhXokrrAvyXCpnkJpoAmR5bWyPmnyU28p2b7muH9tSKP7KKeP1QBzHoKvGCcc9rBUW",
  "key4": "5rTsL24NCEje2QRncMXeJ5X4q674G1aEEzKZbCWanWbamyy7EFXGqsLyqoHKHs3CYLxzGVT8zjfM7GdgMkjYcuSz",
  "key5": "3uitWCM8FePbi24wnAk3oo4YM61qvKbJ2HGxnun4pUBnbWh81T9rn3eLsQNPF95eMxzwaNTnaedmwed2DxpacdDK",
  "key6": "4RFRr8Rt64tX41gQ6FHaDJrpRVKSqDhVUsYQzRhuiATzTPV8ZbRuAropcBSqEDd1RQcXC6DQBMyocA3yv2TBWf5q",
  "key7": "2yiduYtDfYS4xrFTsguwCmMLaeVL1SUaUuN42Y1PtobWTsnnS7286ZCZEbFABdxoasDFuGzGLceuB4NM9z4Spsy1",
  "key8": "5LA4XwoGtWTKsbWZ4T1szeqGdokwSdh2YmXQLoiyDCQLkxrsTZXGNwLBFRpri1yYqWmo3oYL5YRH7cFtRrNGVWmE",
  "key9": "3Bd2hYWXo1SCgeCzYcZMZDzdNpQKxn4eyXWdXkZFeuie6vRFYKg9XBh62HEitfT16CWnQamc9ThKnk6ffqC9yADB",
  "key10": "G3G3gZpcwcXBCBze3MRAUqbghLqrDpkCy7xUoGGTtNnCAVD7RqrQ77AHYid9GfSzmFtoYwr3H1damkriCKch9GE",
  "key11": "5fBfmgUDdM3Lp6arL2W3LFmmYWXaaVEzq9aNehXjoYQBdtUbLKgGNVs7Yixp8jYq2SGya4LdtL8DvngeQeojzmEi",
  "key12": "4TP8TaoaM8xLywRFkWF3TXjoVqyD9g8iwe1XvSRkttaBCtTmrkLRbe14aALT93FXzfwKQZHNG5PourqffSdzk8iz",
  "key13": "5tqiKnyQAK37dMiX6bKz8yrsyCWFYRLDPgqDSkwHaKitZNr8RtUodCJLks35Zq56PdHxUh1ND9EHnfrgatiiYXAp",
  "key14": "57oUghuR7MYHpSnjRwh5FKJP2DBKASQTDTLcprJaJpsjqaEZWmWFQ1owA81vb6yMc25QyNAEidxxpzgvztxdBKcw",
  "key15": "5VydC3yQemZQMULA739smgoy7Kz9MX3DPteLEBFaHtnnPAHZirdtKsshzUeDu3g3mXKQs7LJxR5de8W9JkMuMxzB",
  "key16": "UDPvfmDb1hZw3EL2x7LMqHW23XT1okWZcsNqnAR96265DqN1XofFkuUEkbWwT1iCjVrrQSpDBu64igZKTrKEn8f",
  "key17": "5eco8Xs5bijdrCGs6L3q6rbEWe8Ekr6yEK4pgCuXztWwu6ggfw3jEYdGueREiFQhAA4H97gPHrh5Sx7NBCY582e",
  "key18": "41kWjVEZcD8fjswFYJE71oaV4H2ZrTB4EdkQhrxw8LcLmzVVzC6mnNETKaaavcDRHHUMHgBp2qEdLLH6R1obZTiz",
  "key19": "541jhjPoH8dx74NjudwHDfZbjeUpbop3bPtsPXJUnQRbSEEVbAXz6DsgbL1kwoEs85tBsqPzEQ1bMdfUPGV92Q9N",
  "key20": "vuMzbvHsk5KGuwEkUxYiNfpRpgeD28hhHMKMW1F7hYcdDhhY21eAdk1F9RFCyX2RRhwh5XzsXsCuAH3QAg6bzjM",
  "key21": "4icE5itjXxCiFUjnTtdWHcJiBR2UpdR3akJNkjhNMeRt37uHU9nBs4yk6uoEYAeeyuWHmbaTCqe6A4mYjzwoLof8",
  "key22": "tqjHFKbTZDoqiB4VDt3U1GGJwevJ3chzjkftBNRV3o8KQtBVLB5UWAZVc1GBcM6SRMzEgFtsoFUmoKn1w1VTMkQ",
  "key23": "D4WfMJSB5rAFY25iuj3x8ZLs19vfhg7xLh6GTf4As13w4ZiPvv8nefjaW1wsueStTDgeYzyg2bEjqV9bWC3JFXq",
  "key24": "9x7gV7P6bVETTJoX2gB9se3awNp6EUqHMYq4Bqvsyn2ucga79o6pABburRhrdrySrezwX11yGV7h2SUtveoorXi",
  "key25": "5MATjPvDhpmmL1bCGv2yK4CzBfugdaKmaeMk54enwqEPP5D8Vu24HR5xEtzQAZgHoSYbsgiuwd8Lkd7YpjWSSzsP",
  "key26": "4B9cLqkJFPNRutcFgPRDuvV51zsLSf3jBs9VD6LNzQxTbKEtQrNPTvC38qXPn8uWxv2bk2FqqmkAM5XBism1KHkJ"
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
