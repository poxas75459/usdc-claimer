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
    "2pGUKJvbWWPr8hoXgwjCL9nmjcMPF9taaYKbkMkED2kJpwoJ2UDLtE194CUeUFAfEZZyTmDE6jxxU6PLu4t2AKAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UT1FxA889GD1XrkDdFgEhyVDhieWK98TBRSnuzqeXvDRDQrVvVX93Pdwyyy1wdJ3whDUzhqJpzXRpeVQifQ9osR",
  "key1": "5Vm18vUhrgQ5rgvZ2EoHHtgvBVeC5CLkWJriSbZT2iZYFJbVtXtHWkpK3YucTA66yx1KoCNPxp5bPAyMn9f7tQbW",
  "key2": "LPKTjZdpNuG6M4DoDuNQ1aYgMWuTkv8pFmW9fPmK3iXczBeTyM3XbAt4qb6ssrQYfHSj1gmWTd9GmoMnuWzFbjC",
  "key3": "vXDYoyCGSu9pVLHgawLUiJrT4pDwdPbGjLxR5KRXmwHBTfzXryDqTeFiz8ra8uPTSfAUUahhMkH1CTe2DDEHAJ4",
  "key4": "2mpn2qDNaN7Tgjk49a243DwbXXc2mK8MnLJ9afUUSPSMFvjg3gjzMAj42PBRBXxn3t4etzi57PKuSisDoA895gV7",
  "key5": "66tjGTXXR36ut12ayCqLXPLF1DoP6cyvwQ6VDQKstfgxb9XbdPDUdcsYfKe5T5rxEWqSE6RxbweTuNcS9WYrgt2U",
  "key6": "5xpVbNcPYTFkwS9XHAJWU9ddSt667hmjQTeQTAfVTjURzkHyWmrEibA3aEVa549rqmbtEFVf8qFxTRqGUTnYNZnP",
  "key7": "2FLJK1iWuffAfX7NbXUsWfRbMTXKPZ716dceFms1K4hQ6VtmLc55QS9WtpeWLcRrdDfaMc4J7A3xYX4PAG1Lt4q4",
  "key8": "5jYnmFBn6KnhkyQJLAEmzhEasvb4NwNV81Egcu3CkYYgdLqAhoQ1MdRhRosa8VCuvJsWWyUpLkDbU7DjexS8yLjV",
  "key9": "3mBY2fdMHRbVZesUzgR41toii6wWiCviuW5ijYMKaFiUx8Fiimv6PcXQYkCmrqmMvDykZQFtu5b541SdGh7CTAew",
  "key10": "5GvaxtWMZwVdx9a9gkrv1aMP3Qaou52Wcb7jM3cZCtX3zmwfDFRPqSmji8f23JQwUAzFw891KEd5avAZidTLdvaV",
  "key11": "3ntvpZJQHGNYn7bf92d9wPiYxC2ci7vVKv7kueriL6EQqjsBt5nqnXTick9mzKgGmndYgDCNYhurWFmPY7uqgCmE",
  "key12": "4fKwqNJTfpxfxT6mbkFXL5qoAG4mR2G4PeuPd57mjDgB64HpfhqcG8MueWKzTF9a2PqzSj2iPdoAPqc4isEmK7ft",
  "key13": "324EqCmsnfidwSvi3GkAi6k6VAZvSXpNjfe1gsQvMphx4Nfzs6FKYs9aDd3j7KmtAY8qvpYgdB6M4GhLUu2H2huB",
  "key14": "Gw5oEtsjawoC91gTbLMcSJbK4WXFd99aavPMoqZjLLdpF9EGdXmzEAnjTRyNHrVbpoWmZ8w2Qb9tUYaQPk8Spr4",
  "key15": "5NF5Xk7LkWybvjpcxsNLumdebcczshBzUexSVKt9oTXTikxxM9JNFuR3WMPyHFy4qDKCajTxRc3ouSrvgv7HPaFE",
  "key16": "2nSGDaeEhWSvPQfw4mQiyXbJFRYwfzKzDa9aYfhcytZvbUHZLdCapK9AJdJDQ2R2vX3pVVhERmgH866aNDPoKfET",
  "key17": "4obmZMwDDHgXPkgPDYhP2hUrAHRwKcyxMRFEDs8WQ1akjU8YSy8w7U7tDCFUf4XKkWBG7JvWTmuYNPyP9RpPH9XE",
  "key18": "2qJBCJjfkQKRv8tntWJQp6So751V9A9bNz2SN3e8gCbBrFSxjJGvYzzHRGN5LdYodvizsiPMnYom2AcC2xDTgvw3",
  "key19": "37MRD9dqp8EEKgyHJim8xTWoDrsjfKptwhKfTHrVjhbM8EafZnyHN146qGBvZQUMheJMJ836BsguZektxK1KRTN4",
  "key20": "th41dpp5FqxTZSMkZBPm8rUnA5oaiXYFZLbqMkHYxUmqek9DT8pknVJBMrHmNdhng9zjmm3oWXUGY1FRf3EU1fT",
  "key21": "4ocoX9rGdmHoLejatnqx92iYADmXhAvb7GzVju1cRUuqQTSS1e4UMW6oqhtZCesjFKcAt248aYG7advzyq7vGApA",
  "key22": "3rSc1aYVuiMmNA2D56M6Tcr9TTjAv7h6TNf2pz6MqNy1ivqN4LoVzKoomDHtrTyDR6zRwfL8zgrYGFpCt335NWz3",
  "key23": "3SBkJNUDchtv9LFzNUixACQm18oKxoAc4zpyesEPpT4bk5Wf98h6nvwgRLEscuseP4hyATrG9wxy8ZtQ6xyxQKF3",
  "key24": "2ueQboKm3GanZyuD35BXewWVzEoWLsRAeLXgihzAn1Cbv2byi2RUUn5mnT8ZYTWq5jPvvL87apfBqso8XKr1inSz",
  "key25": "3kLE3zPx6XmdQNGhhtmZjNXVNbLGd9koMjbBEsqd6qiZbHtFnzuSDw9eyYwGY7B5bewZkQR1kH1De5kd9jxS9haY"
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
