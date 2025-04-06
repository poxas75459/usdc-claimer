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
    "4ThCjUnMvRD4BN7Cckvqr5Dt18MpAMTf5hg4LDef5DwKFbDcv7NeBvS6h2LM4xxXJQ9p7gpfbzPhq6cd8djrih4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmKBSTmrBzUH29N6QnwhEB59VhGhsqozKCTGuHWz4FTEdGB8atScJL5usttSnYELoxomc6SoUh1utwdPqy2Eic1",
  "key1": "3defsKN9xJUzuRr6iTQWPv4i4dnGKkyk3aor33JMgCusooQMNFgmEh9qBmpiunfKYb6JnDuPivmre72x9PmY2pKN",
  "key2": "4Eo7EDshh2WK7Sq5jYSNk8BhLDyGGUBkSjnMaCTzvFTtApHfTKiFZ7Gi2c5HEjPXy43PdEYGEd9mvWxwusCxKeAn",
  "key3": "5jWuucXbHx4twwyGT1qcDpSrT1FdZdaohsgqDTQEdhi128DVNnU8FwonGhCF11WjFQiYUnvPPeyibxVH1C2aAvAy",
  "key4": "2Exf9Y3DagNGeUEfsCzbLW3dX9XNXc2oXcsAzz893dhbgbaDdahdb1wM1e6cxvHEKVsTd1Bra4vBmGa1D8CYPbg6",
  "key5": "2nnBoC8K5wi7nhruh6H1dkGp6WW9urs3MFLnd1nFZnZKZXb71a5CyF84Jb6cccCe4q2A5tuW8XkivNxP2owuobMa",
  "key6": "54gJZ8c5A3L7BNWiQ16VjY1vUaELX76ZEu1hReKF5NeZQic4TKukTSWs9JbEtsrkFez22B5n7zTHbVsmUfNcrfyQ",
  "key7": "4pH7YfiVFu9amtxXTckTu3wRBnXv3njtbVGN5HxhcLGsyFP4hsacAwBCrSS3jySbxo35U51EyuzFiPKR8JLuMgFx",
  "key8": "3vGszgLcovg4gJjZewXer1hbmjoqjMuK8sPLFXsicnGa7yhZgthg4nxsmzAvMu6DcjbrbNuFUUpZtMiTU1dqCvtw",
  "key9": "2J1QSLSgDsup1d5nt6HJh9EbZoHdA7ByMVoPCKLy7hYvLU5uGDrcBXxhDA2pnegubZNTgkezR2zAKJfTgQb4GyeY",
  "key10": "5BMYEqkmjeosZJsjLjPU6diVffrqJsSsJ7KHnCfbLNJKs1MBvFT53gjVoawJcbFw9vFXg6qJV1DtNdmp3Gd3n6Hp",
  "key11": "3LQUtWdCtQuPoGAwPgtLaVCSBR5E9dUTBBDLpnic17Jg7oew6pdvELHvAd8GViUtcc1DtcAhzHwU37dhMPUWWPPH",
  "key12": "4CmSvzBN7X4cCR7Uj7QFEf39SLr6m8J5kAbHvWUbrizcz6CybTvD4kVsH2ndLNHiXbZVVtBKhHtuwpfh17KBTfut",
  "key13": "aEBsCdiDPjKPDHHDM1CUCqBkceQnnd7kCE79DJT2geqRuQhYKFQCx4HmcFQANX8GdhyKFvBvaciy42j2Y6AkJGv",
  "key14": "7H6tYA57yKehRXPfBtqiF2ZZhKWWMzi9L1WzPqP7zxSfC6M1vyPFAZh9BZbLxg7qVz9jzMh1ZwK36fg8euL971f",
  "key15": "29es8gMnQRY81tuhKRHpTMUwsrzzpuV88aXhp21iYdWpvvF9Rum9iWiTLWWMz7VeFgDHNZNufSzexBpmMTqZ6bR8",
  "key16": "2K3CPb8KAZgMac3cjwzn1kxK77EyUvBjx1YLTw87DP814YXYXdVffNMCAbubgcGJHq63geLTrXvwBbJhp7JrbQwH",
  "key17": "Zwjqjz57Z8iyQ3yHwNpQSR3oEERdR6jrJaUJrXHTWc5es21DZms5tQNQSJuuqyznvEMXNdGyNi8JepSNHBBrpE1",
  "key18": "33GZ6qfBn6NpP9cwJUtumE5GQWzYf2oCCJd5QhxDACbNBBoxNWDmaqdBbBBBYZMVRFpMCj6G8eqwxKrWsh6V9YHi",
  "key19": "2SD84Wxtv94embSMqaALrFgxHbAXNumFu6FD9AaH67w7a31J6qEKp47BsZ5Pi99HwFTnBefwsiBQnAyCHMUHqcNX",
  "key20": "2Tov5EDdWmV4Pb2rzYPFbjLwQCwbGqouoY3kJuPzT5B9ad4bWju6JrrPdHaVuJJVuZHpopiMeih8HB9WT5voDS62",
  "key21": "5Y3pKM5AUEVLVixZEvaQrwMZnfLiBXTtpbds5EsVcJx1GmBRhe8y5RxAQQtDM5QJcFpYWQhDTddSCdM2MkTyyQWf",
  "key22": "2fis5PRW16Xnt2F6dAX7nxHPzPArvUU3bUau3zpGDhRUGipfZA5CEkvwriptg1jXmmuVgTtWiRverNyzQAzyXaLQ",
  "key23": "4vF3WryKxLKaLT9s932679mh6ujYy63pyQGdkpQHLrP3Rs6PUWCfmd5J3JsiSJduLXohtyiq4JCn56W7AMndYxdH",
  "key24": "3HhvRZBrCmstFBUxMQMo4m7j6qnr4rE1LvNBLaYB42JA53XRLiw5Ddva4HFPb3WzgePa3A1eTkAEKEEKxhHcpgU",
  "key25": "5ehH3BFKiyoQPKmePcKh5NJTfmT8Qf4Ad8hgTYxdCSMpqvDrJkC9s7MbfKLAfRRuUTs3uh1afr82L4WjL3jxMMeq",
  "key26": "3eTYqJZ13qxhqgZkhPhPqbabxvQLheeUEEutnr7ycgY3Sy9sGTDZiQLbuGbX9sDtmeJyUdmz4FLBQYcNzmrieJon",
  "key27": "3N756Wi7rXHFVGy5sAQS2w6EVFhAg7iVQxDzQu2E3pvgdjpnckGFXYCV6QRcohVRctJf2FLTMzBcVYVfaFLFuGuL",
  "key28": "39TfJ7MYmtCDEcSPmyAXJonSFtqejPJrkSLysny35V4oVZS2SseK8YHWfiKevKYXrbBWppsmekeMfvZGrGMSSd44",
  "key29": "3j8rsrDzgVJdZUCKoo8UUsPrdfKfq5sGtwJGijzKjaz3ofGdU4kCwH4mRJMop7UcfndGz1MEnfV3vYXSpTwLPUxJ",
  "key30": "53A51pZ3gSp3k97Emfa2X6rvEYsSMWJKcK7TaipEVBA3KUirHi6WWUwj5snJ3Tmx8HswsasPbxBnvdhQsq2JSWif",
  "key31": "n8Xwu5aSaYUkgbeBKHu9dCQXGuiotEYvpSb7Z8GsxbYsoKnB9Gv1mbcQQmfhKxHFjdEqwRxjjBiRbvJiPezni6N",
  "key32": "22djrS3g6HV1W9pg5Co9fmHvPkhSZwQzVc6dD2EUyg6RD3qZGXfzsWX2A74kEkwggLcxo18BhnuwKBkD6xCsMAXs"
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
