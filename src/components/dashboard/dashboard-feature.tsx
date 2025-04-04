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
    "2BeAnQ55aSdfVPqb19nSbPXuPvtkMa7cGckzg5JWEES2ZRjh7mmpV8Xfb3mJGqmovbpGzAW6aWEo5kpeaTGTYtUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63phnTKPJqP62vL7fFnu4yvPZdP5pTMv6guMB9gY5BXUpvyPekrvptTmsugmBSn4xPeE3fSMvMBawPKUTaBC4Vzx",
  "key1": "3jqScR33Kzrb5mkw4qvW2jSRHWN7BDpfVjshqd1K6F4mizJLsoGEhJrwTzm7vUmjQ89wZ2ZukBHwZdeCg2kx88dR",
  "key2": "5oJgnu12pczmiqKaWLNNxEUAxLVrXbZVLskSwJmsAbpFEPTr9SKQFAUWPnQh1TjH9UbbWzcs1iZ2ewiYjg6N37gT",
  "key3": "5kRXT57TEsMY38cwthLkqzjbk2Nmf12PfBwzaUtHa3XooMbuvPAVqQtZQ4ojL7jbahQesuCFL1JrRjgbdaqFySJL",
  "key4": "4jMdHKW37FSy6m1Va4uYDSmNUGJHQkU6PJvmBupzAv48e4uXRKtBeA8U2Wv798kSsQEDrGnddkpeGNY3uKm8MTCT",
  "key5": "4cS4GLX9NZVVJS19bdmrEHuvPcJuCN2U3nh2QuQDH9EXWBakATT47odHG9s57Kuw1yaAM4WHijZfZ7g6neoRxehU",
  "key6": "4Gdz4Satyw9X5jpjmffMvduN3TNEVeePPkVCn89rbJ7KyM5FSuQLJd8hfqsr6uAJAFruLA1QroBjAeXbVCAcdHpw",
  "key7": "5soZKA1BRJDhpueRWy96DhXVuN3nUFgvkFCpQAwmcFiteGTTwMeEDP7GE5HXFck64mGtnuAfeD5rTUuEtSV7wxyz",
  "key8": "48o1527sJBW2TucndEHs1rjX6t96GhX7bKftDGjLhduJSkZQujq7DVSkW1XrzWXKmjsyNJU8BDruqfqz9bJtpeML",
  "key9": "4skq58mXGrqnESN7risCV4JNq8GfQFMwE4i8ecBw73XpKgvdJ14VuRaSuYN22y3vd1zSmrPLsK5idxdvyQv5FFYy",
  "key10": "21D8BUoFM8UZLXbPBj9Yui82njjGAfCM5Q26qiVVNkmV3Dv4cvmQWCjv57oeN22G6HqSCRj5JQkSbK54ArLnL5wk",
  "key11": "4rB3c6szvpB9NFc8biQhHEm4ZkUsNZmq31nsWwzSeF8QaFF7MsW4EsVcf8cZNehzQW8QEd83ps1cNdkPgYsuAYTj",
  "key12": "KMZeXRqbeAZqGKamMHn8FVyzH7Ribp3oBFZ4Q9o9qkTZ7gaHPQr9pDNcSpBmwo1Q85gkuEJyTE6jG8fgaUPBx2w",
  "key13": "2F18kNkfeaz75MxxVDCHZjPUVJFBrXKGkLMS1droRruFhdVmBUyXqQiHbdS8paPq9SHy8yuEjaLZ4XmqCJdACadT",
  "key14": "fFAuDccteaJKVzqQNLNxen6cKEo5ZqFfPD83fMXk4YFkXm7kfdaxPtps7rJwszs8YQ9drHtqqizE7v7TCvVNmbD",
  "key15": "Je39uAaWhs7p79ZLbWWt4JzZbRmB1AUKGjmkVsYKcina7stk8sJf1D8hrT9bHsHbCa3iQakWcojv3sEB8znLFo4",
  "key16": "xH1tUPVY51hykmUdVCf7aQDisvVxKSPU6gxLQdvyoGpkLsuQQGrWQsZridj3VzWoRjgJv4X3YbKiveLJFXGuHrT",
  "key17": "48baEgCuhM2JXt3p9Sh7zLvkWaAE9Zw4pFutJZ4oZRcQEAJFubfKVpB65mXnxFMxazMsTFx9bZgQ7aVq7j781dJA",
  "key18": "4PKAsPupgG2F7otmNpNmBMNccXuXxL5ghA6mLGLoVaxsHBS9AFWSMLVuBwNzZPRN1U6ekGz7ESAu9sUjJANSUkQo",
  "key19": "3opE7ZeNTaz2aZRpZf8ucEiCXdve5HBJ3e4i5HujVEATW4e4mz1B7g7Y8vp7yqnxqsMyHFCUTLeEoXirAuaiB1ha",
  "key20": "nF5fbxDhwba9MeSGBCroBU8wL6B9YDojqY8p5f1ZZ3xyreRYjQ9ZMRHmi1TKzbh3Q4Ldthv6MompWPFFk4LNw1y",
  "key21": "5F6EULrXu1CyfSYj3qUGPkCQiVurjWg6Es8BApKQD7gf63f141urQMtYMpecbogctxeU91z1eCsvCJzr5Q58arW4",
  "key22": "5WMz2h9JYX5gAohTqmPWwzmApevqinoSW3BJTBupnpMYBDCn7gk5NcQavXTDpc8eWJZUo1oeE2RhFzgNBUHHLTnA",
  "key23": "5dhnjoJQig8BtMgHLLerzTB4zayW19WLcCwwrCDFUwYk6QTGqs9E9QMo39vHw4h5Q4H6NZyyQyYAZYx1dpgpQxRW",
  "key24": "P1zq2jN1Xf7R3yAntanSGAUHcWEEqRHkoeWRH2B8gJYZBRR9ruEbVjJy8bmuUWY5Aisrns5YWgjBiR6fG6fr3ve",
  "key25": "2Y2GneCHmJiP7pCcyFYtXSUpz1yPAu1eSK6GZMcYu6nsCav33HCbWZPbb9UjdCaE8fVEhF6GQYfo8GT84CnbSoDo",
  "key26": "3iUbWGkJXnCE4uYHN24EkSAC1gVq2tNgHUTExBWywVMyxLCTDnVD4SyqPESyzDmToV4PtvizcUkN1xw1Q2L4EqsF",
  "key27": "5YhEPvccNafQh4DDkMMuwBpAz2iXxevPxDtr4ULKQuDAQNfJDip3s51VvFA2NEgyfbuay3CSHdzh4TorzDwd5BiH",
  "key28": "3eYwmgXucBmmxPXx2quLH4p6625afDK5kDGWQbELsZHyBReWH7n2kYJUT5vTEDxpgmLe1MZ6ZvPBgwPquEGPFpce",
  "key29": "2fxbyL86tg8NrWb5XF7fQpYVLiDibiMkRXquvcKqADZVF51oHHaPx7aTzr4VfuaNTD412x25cMAzg8h7HzdsFvCd",
  "key30": "29FYCyhNu7qv9FNJK4WPHcSFqmKKGvb6VgMoqp73CXCgCm9R1CfyuwqmRR25YYBgFn6D5QazYASfCM4VuFayQRfF",
  "key31": "od1bomqDgP3WvecURdcj9pi14EFBMQNfDosYkiFKnqLSSawn9XayrYXN25eWHtQLd3zvmH66Wi1MbxHYNLdU9Cw",
  "key32": "2RQ7Dm4W3T2yv7N64mr73UgkX6LraiLFQs6bTC6jknJVgqa9CqyeYgM9Ceij1mzCVuPk2MXuL96JvNCRZXsPwN3W",
  "key33": "4pY8SLJR2C6omwqK7LSrAWeKHy9B3kCVW2eTMw1rLNSmdwEWNFdeZdAbBkRKb5AjALAynMaA37kRbheUki6KjMb3",
  "key34": "3DcS7Q7MjtsKQoQP93tmWGkBLdDdSa1K3JVJVxbEz5memPo5ph3EDbrzxgSQPVkcg2pbVCkD9CJMpT2mzstrAf52",
  "key35": "p8aNUDFJHFF9uaHDanjdCREUuZUPuPeKZt3DGwe5JTz3yWq1Cx4QuYquBkDcUGr5ZScN1auAKHAWgQt4aSWpC5k",
  "key36": "3caz92zjM5ZJ2nBa2eZZrwFrJisJxu6MeiGnnicNQFAhYdguuWtd42eqnHRw1LCReSr18YxBAKTGKnuZQ9uYoXcg",
  "key37": "2wUVSKdJ3M56XgJ2sn3fg7D83idNaVcm9rmxnkDxekPu2x3y9rYJQ5sGnnFn7xQEzW2Cjkx4gj9fEiJWFWmUN2LV",
  "key38": "2ZQMiBc1GoZ2XxT6jCnerjQ3a1umByHoxMQkH3HY97HjZ3bYswPS4gPEd5ANSfUDXRv7bTwF7MdetcCT8z4pqPtK",
  "key39": "qt2bp6VRQBzsMbqT7TP6qRkNhRdyzStoEwwFb6cs3bB9VACfXxPVSzez7mnbu6y4YRs2cy6TPbu3RLFw4bKfKwc",
  "key40": "584SC81kWNxBcX2Tgk6eXFmTT2pfo1sTg4QmH4tnSJyEUvp9CpKe8Li7gPTcJNUM5BJMd4HEU7G1KJ1RwiBwJ53s",
  "key41": "8BqQJpzXMmrv51baAqE7YxyGaTv58ChzF1PAuzNL3tvzCrXiEmgLVd7RDcAxc2YS899XoPDoTi6aySuPmL8EspW",
  "key42": "4JhS1zPGbaM9YTA5SSCuE5Pcu992SeQXB2eJSe9LGuE26NEMK8epE6ie4Bz6HYnoHUNts9LS98PonRbT3PCP1m3g"
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
