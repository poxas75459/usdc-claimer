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
    "3ihHKerD4mXPUekqzzVmg5P7bLkfc4xgJoX9zfTRT7apScZhTZzyTsERJZBiUGLP8shSCMgFSVxjfmNt2EUidgRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsBi7Yxw3G5e3i35TnMYPoSFGt8nEefKFkJo6gfG1rUnoAVmgN4FjXTCmXJfi3EJf4R8PEafHjCcEwde9Yqf5rp",
  "key1": "3My4DB8s9YXjNPRXLR5XceEeYxXL73KkrB5d2WKvYA35qPJ9JopwYqttsLDfekWgmAcciFmdDm3umeeAozNEbTTw",
  "key2": "5qxkZFw6GCSNGzCri1Y3kD3zubnbEkh9CBsUMct3v82Gn4LwqKxq1uSioQmGpLJDkLxZrh2WFyZA7Rb59xkZJr3R",
  "key3": "6JNJ3wiV4gDZG5iUbqwwbcVj1KP1iVk3S4yVhDKCtp3veBFRsjZLpQUySERAAkMeTSxcUZBog49LCUiZkNNdnhK",
  "key4": "4h68e978k3KWYBB5wGNtKcPR7rHNNgWhimBARdf8SU1ovGWLaTTvWrBhwFDXFUSHLCfaUcyFU5ud85zpQX5M3haV",
  "key5": "3iq3RedTn1V5vMGHP23mVfhpXWtswGnQt3YCMn75qC2bkxKo4fg1Y1oPhtPXbRbd9AAC4jP9jBtBd4p6VZUVJcfn",
  "key6": "46E5TvehNeCGPMtyxt2KxscSa67XmjftVknSibRnwpz6u3Ayvea3QNBVMxomA8BSs58dHoRPGUMBe4or9SPR6sAD",
  "key7": "3yhMtKkw4J16Rpb4a7e8HMFgAK8kGm59jj36tunMW9HC17K2GVYVvXkbGh1A6tdPMpdMQMJzSUk7VW2GzXyp5oy5",
  "key8": "35ypU3abvwb53hvgZAXUn6oohVFPDkR6J9DCr3J8To6gU4tUk4SXsvN68yf2uM1AHJ6aE9GcULxwhvvT92c9HuUW",
  "key9": "5bfmqzLEj6DJ66VEf1zcjzVEJJzyhEf6DxFJ5EXwEPw8GRQ9DJWYfEQhgwEnWm5STyorqyLogohAnDEf9LjmQ85c",
  "key10": "3HhHa8DFdn48KZ2RnqJZKasVhsFjdtPzErqiPwaDWuURZ9EEvAmrWd4RnJLm88HZgQ6PGH7rYpvjSo4r366BTbiH",
  "key11": "63VgiMTeDC2wfRyXPhVqFYGYd8hLB42zYGbN8YCbeedTUurNP9BiGSWHcBtAzXUhvXRTEqQs1T2ffHgpgtqMhZGU",
  "key12": "4n8UMBuUQjNL2UpSCLzRZS8kiFoaHoTmzkmJkMhzU1hBbZvfiMQzCrxdk7h2g8VBTHgym2GT9DeDWZZoCLsMXD9q",
  "key13": "5ese9znzpz6LTFxgRgw4yijQVfWTfy3NZkrTJq994J1o9DjRxFsCJzikTYKXfFTJp3hrBRGXR3UhBKxw9TAMM41o",
  "key14": "3ztfqYcYmYA1D42S55Kpg2Sh2SKaH4whQn5QzCRgFdZDy42BWRwTBLcpVEGA6eDXA1yHnG4STuXYUdTnaWFkdNWP",
  "key15": "2yfNB2ot7R9kqzgArQRqztN98aJtNtHcDAnNzcMrRbju6rVz8iAf5L64d59uHtpMXjWTDaAwxfsrCKsHL5JbevSj",
  "key16": "4cNEvRM6GxnPSiV7tGXj69YhaBLKUbjdecqYSJHcWGDd1qhHTswzDJn1QjJJhKhi2m3RPTq1sJmi2d5CoAjhVoxA",
  "key17": "65vRdApCHKgWXK7jXtrkFDURbfvtFKJsDmwbYoVjzBhmiBNP5CJEpMiV7CRbeNkeEtWEV3gmJwjMwY8uKU2JHwYZ",
  "key18": "46sQZVgTPVuBf9oGRb7eoEHvPrzpCB96eoTFrDnCpStwE2H9dEDLgKUYAWZSCQ1fbGjcRsAh9UU42hieyRaijBSG",
  "key19": "58jrpDZV4WNazCG59hAPEkwVh43teLS1qoEMVEQKncCTF5GtPS4cckw5XuuBft3CHgydvVMLUDGdYoCjLH73avWs",
  "key20": "39aFBgTtN86SSfeGreFJV1FJ3jRcrUYR7W3dkaAu5ATLMjsXiA5xttZthAj3m8n1JYaD3ccxKBG379V4YMjdtd4Y",
  "key21": "3UUbfyVdnRcM76k9sBdL12tGnZ6WK7ccCDzkx2XAYuzPHZPJGXBVC2bbnfv8xYy3R2MPAEQ4sga6HkdAHkzNCxEp",
  "key22": "3fcA6kiTYdxWfkd9a6ZCSYTAxA3jtF6ocKmJk6wvxNsWiMiyLJBzpRR1xVpaf8EtWcaBsrxfeoQd7j3Br4YjB5ZT",
  "key23": "21a7BDfvS6XqhgzosdCmqyZTXKVbLLC3M7kL8qAsWvi7kxGZHzJhYaohHWf9Ja6V5qKsZdKc7QcJKXWVGregxNUP",
  "key24": "4VY1BnExNi6M5T4SudzWUh9G4mDcJ5xvG2S3L8fYrKyTADCKzYpUvoKw9KT8bXMYTydE6BdBe75bTgEPvDnVy6qg",
  "key25": "2Denyq9rRYP3a9K9XtF4nsWR7KwFsAjufLLdSfmPntxYCPLEqAQEDjnMHEge2hEWv3ropBVRsb5MoLvyDnTZm52g",
  "key26": "4Jh4VB1SkuhTrYnDc8oGe7LV4QFVgnf5uymR5wADPnrRC9SfVEaiGg3MbNorNW2US6YAdZmXGZxEBQy1igAufkxa",
  "key27": "4EknPcD11H7R29Zs9z8pd8yqkedBgkwi1x2iJ143xT7HpNJNbhs9PAyFYqkCvokBxHiX8naLYFh9ASaKc3aoxfCH",
  "key28": "3zjnS3zxPaXNmvpuNoUEk6fQybDYq7xCncWcPrbMBooaxyJrrefmVzrAJbk7ykCkC8jv6YUgT3pPKmgtdHvNxY2w",
  "key29": "3jb97RBvS2HEo46kHgCS4y4HJX9mpq1bCN7UEeqPV5JzmGuTXNYt9Ff1Jf2M9CkSoa7Zee7Vb6itbTBvfuKPXuur",
  "key30": "4DXBPtLGKofuKbDooMwhBCpJF9Gs5iXiSobGcJRSb8U69b9GsEDr8mHtbywhbxRsomZVf2Lnt9kpYv8FFNWEoVcu"
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
