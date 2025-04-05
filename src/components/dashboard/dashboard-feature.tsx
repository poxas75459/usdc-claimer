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
    "2VLTKF3ASV2y18jwqC9xqy5TcMhKoMr48m3vGnirfeard8vsUtncmsXpQoJX5SogFkgAuHjCbsaUL21xkBpMbvoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBMvpDH8WEnvF8jJREzJo42euxyurQ3gn3u57Z5A6KtcnnqCa3YcSeqmEuoVBpRpfLSVnFncEvyynwjLFQTbqJo",
  "key1": "5jMC3JAp5CNssznqtkCmwhUGQQYMwU7QUtTYReLEAgZUdgYAQ3dqyEp3tsd17a7vpQNcZC1d84sZknLU5G9Mrj8B",
  "key2": "MF8Md7EtzvJjsZKGKGsqBX8qWg57Cb51JtNnd26yFNV7TZSrtXJ7njv1oLvNUw1xGKTb5J8pnAKwBazrknRPGEn",
  "key3": "4HpZ53go6Y4gVny2Y6DiiLTAu33AmJWhGsVCHZFmkFFXa2YjT5Er9WnA8Soa7eiJ6ncdLAgKm2v6oraP5Z26y26s",
  "key4": "5C1YEkoTUcfzG4PxRATqvEfoA3ewE2YaJ5bZ4hJKtXnvqwKVtheMx1Gz3cbUGtw5R3SpuYnfAvNwSEcoBpnAzbfj",
  "key5": "3rBhD1upYBBFtPm8EuhzQsWS9BjKFBkZ6vZYNPKLUHTr9M2NwFBF9gBq68WHA5CupGc8Vyt6i9h3SDkCvbZqTyhT",
  "key6": "63ZsRfGwRSFz1gfvwLQUbGh12qQhUmwn5yYNRFXpt51fd5WWsAQutTLs2398sgQZb87UvADnKXPKMYxc6RxRfc6z",
  "key7": "3fn5GJDaVRC2dCEuTbckCVDDwzGKZ1a6ZrE3gKKoLYXuZV2WPzKQ1w6XwKpLJzuqNcUQsyk9aXThhcVmyhhHRxee",
  "key8": "58gqYvG5FomKPekj8pMWoL3Fh1fhU6Ez5wwLjg1dg54zfpyrDA9Wdx4aUbhrYxjhF3Z1qN7LksmWKesLUma8SUjC",
  "key9": "4dmcfyt2SLDWjHjPy2TQNPfgovifZ3DVR4Bto5utePUwFAMFTCnqRKGc9HfE32gyqSRKoaG4ZxWuKw9eEuCyRdtS",
  "key10": "5WCdAgTghBjuSiMzTr4WPqZpMSmcuUL9PvRZn9hgewwq513FoNEmgMjoB7niv6BqPQaX4yGb4kmeMmCYAjs4DqEP",
  "key11": "45Ycfst1UioKTvZk9JHd2VxjPKiysANQT1qm4PRGavFSpfJX5x7BU6FFZRHxzoLyGbTrvJJvhn2zohMu6fk8W77u",
  "key12": "RKBjZtTjzr93SwPvLTdzpm2nett6Yrwxy1J8jws2Xnv2FPR6eSG5iZJn8iygPtxLN4By61GU9DtfypDqNPyB9dt",
  "key13": "2Ro4qro6LYoWoVy74yuXnBNzDSr8yJ5Kd3Z8EEW143M1ptzPEtRhhHm4yroWqwvvJBDZ1CixYSkyMkvEYdfeJvUo",
  "key14": "URR1X7HtNvUaFCTmiXzdECLQre7YwLxKm4cyptywjTUsU7vaYCQAUEis65t2KYRCgSZpzYXzDTagUZWVD278gLg",
  "key15": "a4egjPKUW2kHTRoe4FfEeMDyS8MoEN8HYVKgBhJC5sCLNzGGCaEA5XojbQHi3Ao4VhAGnBTRMMwwfvHdTdo7dRM",
  "key16": "44ccADgER42BBXXi7SEggKHXitLnM235wNx7D2keBetum5ZbK1mPKAmsnaMGCFmq2feWm8ZVFWsi3LH3KJHMov1N",
  "key17": "5mqWQAK1ja7Wgg2ENsoQ8zP5S9Up7Xew23Eywg8eCkqp5GnwXrBLBSGuEfAYpUQy6BBwN7VCeBMBtcrTUKgdfXek",
  "key18": "37AqAzKzDtJSsRoHiGaAGfoa6oTQsFNFSmjsmhNd1FgZYWtXz6Ghvvfd7ndijNSHA9n9UkspjhgXmM2PSNgUkri9",
  "key19": "fkfuMSwLXRa2nWUxTetPQH5eR4VaXJW5Xhy4CC8ue7PjkWZu28rBSfmBjh47KrXTfLzStcR9cEwEugC3ZXTFhAR",
  "key20": "4jNTXjDzvrn13qUEp8pP2i9va63b4cN4qgwfYHegDRRopmeLnh93q459akjnGyGNh8GquVSvoCyyZJVt99uEX44u",
  "key21": "KvVK947HVPLREywQ1bVud2RFDvX7aXZ89eu8axHwWJeXD681pa5Up2PHaJVYa6rTn9ig8UwRim9jVPCodzHetJY",
  "key22": "XryS2NzGQ5da94iuH6ihxqvUcxPqmWZ95wQBcpJHa4cfrw7TVhwf2S1mCbxnUEH1Q3gAkbRMb1m5iiL5RYoRF4g",
  "key23": "WhZYBZK7RF3H9FUfJXhCtK5bzXvFM4ub4uvhmRqXTVcZxkZshVJwexPffM9ChTq6odjyXDE8RtNDUtdj1EopEEk",
  "key24": "41jikWehapXbx6BAtYGj5Fs1LbAD2S5y4sXjUQiE4otM3WAH5GRrnrsM2kwS9CGwVpHJBqfT6Wcd7M1mLNMVKSL4",
  "key25": "24C2i2bEqf8voGxep9q4XXRWaYsUGidPxDbJCiTAvy5yMJ25ZbvynPYTNRyQyKWL28xyLJwQ82DhViuM3FRdLtoX"
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
