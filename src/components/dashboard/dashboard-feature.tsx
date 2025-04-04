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
    "21mYuTscKXbLpG1HQGJPMP8PuLqvyWjssKkM3BnfJrcvWVw89nSS5gafuPoWvLU1bMUawcwToMqrPz7nkQ7M8QPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRXpUSBUpRGYzkN5xfZSr3bQDv3ccrrvx4QbQ9Xzz4ytS2DGu8vEMicTMLQWaFxwpAbf8EUmXSR8KJ9w8qLFhYr",
  "key1": "6FMydUoiBeMet9FXgVWsJVxCkuFPo2dJZpgUYu8SCXK2P4L43mu2N9TSmq3WdvJxg9BLyGCgf3aroc8FL7FXkrb",
  "key2": "5uagkczpD172xL1XgCSc1xoWL3HBRX3CSbhHbUVEj4hkzRuXnG2kNg7vyUQxkMh4JjjU5HAJ5JAbuCwAm1CbvdMb",
  "key3": "gmuszofqc6wkSfEvzhqo5tXizaQCxKGyQy5W7dQF5NuZy9h9791qNkw5NJptwG54ewVcn8RCGWHBX3eSun6Ua1F",
  "key4": "2Dg4Kguhid7tic4TzuHgpB9R7DXqwGhL2iF644vtRaWvitUYjM5dbdBX7EqrSALDRHUKCoJoiQbVgVrPpvwN6rnh",
  "key5": "63Qww9jKhQJXYa7u3ADhzaMP5aHWwHySyiK2cf9YtmEy1v1dbndwBv8LjJTzzATBSr7Qca18ZU3JZAsFQiWK18hh",
  "key6": "3VgzAJQRyJybnW11qfo9AuRTLUsgvPogjmZTMf9sxDtrtAzQbrZWpkzdaknrWeNgCyY2uAH15LeAWrQJxp4iZnLf",
  "key7": "tKt8VdQYpwTsymxE6SV91hqt3wGXvfZHWZKsPuUSyQMgwkHsLLrjC7EUjUWfeDvbancxTiT2PLKuAyzD8ZxDSZo",
  "key8": "KGTGaGeEfNEiAAVPuUqtkBqpSaxFCrVLSfg8A6sTrRuHrZjJ8jWMB9y1nEX1bxLPoqCoEnis5DFyRhZB1n9wEYK",
  "key9": "4XSizpyaxNnB3i7ag66kqhqZPys6JhhyEEqwZR4ogvZHyF9iZRZs8vrfPmSXvYt8bM4GnfdUDEmTusgS66A5fuFT",
  "key10": "57rhvFYWu6fAXY9hqBYute79n4mYfmGxEN4HyrXgFLH48Hno9zrsu7TZ6bFJBhmdpga91H5GBbGLSARHRTZUZoUG",
  "key11": "2JHPqCqDdk3eZKbvHJreYCJeaEmBryrymBq41ZCPSuKtm2cFS8XbDykaTqkD7KLCyTw5KHL9495iWTyHtwKW77Si",
  "key12": "ohkdq3FQqfubfpPr7vWZRse3Kr9gCGwjJDF1V7X5VXNS8n7FQYE1T5PRb4tGGDszcmM6Eh4HWYgks6wPvwJ14gt",
  "key13": "55jWfcgtDMi6bYTR2b6oebtAJCc98VUdww4CfVqDgbiwmU5TfahK31b7Kk8Pb9U39Sf41G8itDtX19MqzgHpZuQU",
  "key14": "31qLia18PJLpAfbKCB5qy5jhnzBxpGGkGt5idGpvCLG7dJSUWr96r1Jdg8eHQxs3H9By2kXQcjSiTpxbfaQtHBSR",
  "key15": "3uSLYu6UYXrVLoepSEA5DsbjN6FkrndNRsotgHD3XbC1WDfpT7VNzRgUDNcF51kXH4LDot1GbBvv4szjFTirNb72",
  "key16": "2YHDDAotWH45WXm7re1kyf6ZncuUWRoBk8Uj4adc7Anp6tmYkd3pwGZnLkGqx18wtiL2Ji8VpvgqYjnPtUgh6EuX",
  "key17": "diGmU6z8jkubnkdxApqHvQtRXYW18Kqpa3oLVeSrTMU5Q65af9sgqcnpFRqme78aa11XDZuSzV3L6GMGt4WpkKq",
  "key18": "5U9SJHYpP5zhZ5Zhy81QmEniMvuy1Qoz8oHm7kH1W4CEiVNM8MxAKMLy81GqJhBC9aguC2Y3qTPDnUf9CdHj1PQU",
  "key19": "8Ar4eWpfB7zfw2Causm1aqdRLes54SsFsSWq5jCxN93HR7NzRvKPzEbWVKhMCe6J2Scc7BgyYnuyvj3AQJQ5KTw",
  "key20": "3Y2MvGpKQmUNaps2VFPJBYvSNqbrJoSPJ1QwmRPu84HYdc77NUmBgknLYsmWiESpz89MBx6Yg64arsHgGSpjhwv4",
  "key21": "4PGFWXKeecnACFsTnmxnodFg4ejyhHn1vHAvQA5YQWz6NtQ3jyRKvqhibxCshKGwFFU9TYH6owPT1jCfCr4NSxvB",
  "key22": "2jo8c5wccvWpRZWeTNaRyV2AK39Smv1u2jn598rbZriLrtQv2w9M42zth1eUwo4tmzPfpwc6zhKw58eFCaMuJ5as",
  "key23": "3TZAVuEYVg1SzJyioq48sd6wduVxTdztnm9VprVDR2Mx2HtqTp96qCoCAgNeTWdkdmcsLykcwjj8nbq5DptcaJ7X",
  "key24": "4HHv11mUJUie4qEgz8PmV2Z7C2TZvryQuMV7HBTwBhuBDvh2gDpr58AArr2LAQ6vTwGLt56ixp1XRAamMkSmNAy"
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
