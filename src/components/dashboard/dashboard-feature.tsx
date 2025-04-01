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
    "3WuGFCrQVFrrCaERC8jJdu7ttvvyQkMadVpDTCYdkZMFg1P7iFF2phwCgzZQWEddPhwsGPxtxW1WPNA8JAEtHwXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TotqX8YGWJHmKcaH1AvsmTFNDDv7UXNeFegZR1mdjcVoAWyDfZ57QcSnXFcu4KDfGPJo9vu4CuHExAddJfM25X",
  "key1": "2WHxjfjgFXo97aEQPT432FXVXRdoD7jJ1SEeQTUTSe793Dyd8ZyMYnRgzQtHnDSwoYz2ZQXeg8KJgKttaUJX9LsS",
  "key2": "4SgP6YVeTeWCmk8YnrpxiAbyXVyTtkqUFAM964okrk2f5Zh64Ya7MsjgMqzn39Ubgw2vfzFk857jQ2VMWhaAoaEW",
  "key3": "23pGs8jPgYjFieWjUWW2gM6rKSr5qSiJdD9A9jPfF8JaqomNd9j5vUgvmEFpufmWFrLJfBicz1HZ8cAxvKWAUpAA",
  "key4": "MFiYnduJ1EdAzB727UYEgn178d15E5mF8gvCsLAz5pNXrqVMSmhYnvfnfdidqkQxTSqwG73LuLXAujuzEA5Mra2",
  "key5": "4mjxhHTjYQ6ysQ4cbki1uSUB6x1MCzEGq3uAy2p5L1dUqjuhK15izGBudeUSuZpL9bkLk416iQNWS6cLJwucQ4HU",
  "key6": "3GKBsqLQwYBHJdFuV7j8v4G3RsyhszF6GqwCLVjDU3SdWZN1rVsKQDN3dXMDe5pSxeo5gaQU6acFTPSR3GPQpePm",
  "key7": "3s1YsH3XB3aWMdB77o6tVFW5Q8wNcwLt6uzMth1zW6tQxD1pDyaFDEFWkpZzKjV2nSmkbYmy1xF8CeKEWJCwoXFS",
  "key8": "Fy8kxLCKJqYvrhV5mn3eGRiMgoRE6xoLhs6LKkWTwSMvvA7eAKY7Zwk5pSYHtwoHyADGW24yYCKb2MR5YqnasP1",
  "key9": "3TWj8DdkMEwQBsL8fzuPmjVADfYTmF23MF5oucgtCrmkrSUzP1a2yTyPD8rsk8svc5WqrEoatnjQedCS2V99Mh3B",
  "key10": "5acvhDrheUNvE7K8RMeoJnfXL8XLK92krrKYm68faegb2z2S6SiC1L5AmgmwqrQF69wNgPjtRDiTd39FWaLWn3Kk",
  "key11": "5K81Lo9EU9u9CkX9x4xSQSvg5AcGRDW7NjQTBFyRg1r8LMt84iPW1T8qQY41G27p3o6jgoAM3Gxi6RuKz7Cuaa7w",
  "key12": "3WQvvh7E3DJ5gdZP2dFbCTt6Yie2gU7derSocuaoMvetvuwYKjiHjixXmZXhrrBfFpxEbCpriMVfZr7fPQY7YnjJ",
  "key13": "gRiqVkgSoTzDhCcwbDniVeTSc679RdkCBVuVqSddbkB1juY3AuJpFYkbKc8viAbvwArNY9EgKJoYvz3B2zh2en7",
  "key14": "5w6UaWQxjSrs9FWJ86xdXXGMZm3qSA3UuToopWWuXQithArE7nuJcuYWz6Jp2Z4TtEDZSpPWzRoEbMFbyRs85fCn",
  "key15": "itcKZuNmnimCgg5srn6QGByNt4xovaQfohqjkDDu7wfK7Lqz6rJ82mKzmpCUrsLXtgDKWALt1GzWRdhJmod2TgX",
  "key16": "5zvPiTXtApYuxp5YMfa6GRAF6W6UkCXKJnePbqBFAesJZ6NtqVHCFLfRE2zijovn4DJoJAGQpnpSimGaq5d56juT",
  "key17": "HoJNzvDVbJJzVd6ATVpwRiwmNbG2ayiNzaU6mUY66o9cCe6Q8hdX6XQiJxGfGtFDbi6CKybAiz3ZQ1LdbnYroT9",
  "key18": "3cNtauhvE853SaAnHkFNuVLzToB4cyyHg6EKhVcetGfxaH2YWgK9bWu22SGZpnsxdXbdS3rQsZ8XXu3jS9vyHBZm",
  "key19": "3PdFhXX6MSPZZsBi6YjVuVXfc9Bo6cuydDdWp2BfcLSQeewQc4EhwQTqc1VGvqA27yyMnvc6MHJLxXgbntzZ9Xin",
  "key20": "3hMtLPw7jQP8sWNaEYJAyXEqc84ZJe5vcFz9zWDnhqDe4Z2HNoiNnXao8b9TY7nzm7pKhj3GHQbnyLATZiZrXFMr",
  "key21": "K4WyaUUPVmxmkVu6d3UwfnvUXNwxXihJxaYxwJp7XX5vNzAsGJZYyG42QzHdMhKfCgL74grUbqvGfY8UK7nAMTJ",
  "key22": "5QVQw7rzZoCyxRQuq2QH1rNYinf8CEAR7MSBJ8hUdpD2rcgvrs2DtVhcS6RPbFuhsbPGxTF1dbMpk8jh1V9YeBaJ",
  "key23": "jkjd2rCXeK7bsrSnZmpiB1bCvvpz45voz5QgcPueExWcbYCN1DPaAUgsLQXWGVS4NhE8kDPgUFgxtT1XSbDBa1Q",
  "key24": "4zLtcRdDSgCsmvGbtiYtVxbThL2Y7Ve7B6fyqMvvhnY5iegvfxC18pjGf8pei5GokcsQuDsscQAuKmFrp5SB1QEj",
  "key25": "47yCG3Grsy6tJXV42c21sLNvNuC6cWWTh3J74joaAiCSBPBWKMD5SBmJMV7PqMJczE17gb8cLykxPv9S52gadUib",
  "key26": "2zTeXUd3QZoYYK4vFMz5BcUhzCV3UPFAWkTfnLfUTSQfVQYD8CEYiBv6jetjLBNbHffu1VBe9iedhXuwsAifDSBJ",
  "key27": "5Uzvp6xxPmr99v2xE3ZrgQ7zDoGzvFAig1D9RCHsCA1g3SgHHoj8nym4Sc1kiuXk1dnuRK2enBGMYdZskHcSM2JS",
  "key28": "3g5HwhYzNnjFB4XQu3Gj4sniuwGMw6kt8TQkGfS7idTTS4hPaRFLbiLDi8eKKw647rn8bL1iKGBhoo14i8T3ubCH",
  "key29": "3vwWSaXQr8gipeZZnCPiDCLXoj9x3EU286iciq5Z4U8FvWSMMSwxfh7k1tFrkTy93UCN332psSX4ABYV6SpdYtKG"
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
