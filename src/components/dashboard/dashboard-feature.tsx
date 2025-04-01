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
    "5q5iLwr3Qs3D3cPberG3b16mRFYfSxW8MFcopq5Z5uAyAU58CJdjiMt5DGWabkVdv9kR6PdvrJNv9z51Hh34jyBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRboxDZwMszaui7hc3nVCMY3XM2fSYr8sRXXv1dG56914H5PpeHDjWiZSAABXzkdSW6MJBxy3Ju4ga6vXS1h5oc",
  "key1": "4LG37yZu6HNu7iw4aXFvNvrxsuXir9m1unhS9L8sBacrC5eXURPppfWBenrRzrdiqRKrFYvp7TVDN2DLK4VkEKDN",
  "key2": "36GwNMQKnGs4nNMwqN3NfxqgLWNhzmKrWjYmmkzmCnnresx85fTZKNLcTsFjHRJGcVykgYf24PaFVJSVvbEvY5bL",
  "key3": "qLNRHnHgnZ6SDymD9koKiUUBhWDDQTLznAJBPYxzYc3cfHR8fucoTtCthcwmGwLyuKWwnF9WVkavofUiiZLJAhw",
  "key4": "MzuN7U5S1vuevDKra2wgBTZ2v5WSwv4xXDT6ZCtb2wwYH7cKJzP3SvLnxETYocASqnPwLFjeV6YGScBEzcJtDut",
  "key5": "4Y1aEHgynPDeeNWYzztHYVC4HHbLDTpHuL8awhf8ikf53m53NFPyVNRHQExmBHmzsS9ttsUjEnMAwH4PXjojoPCY",
  "key6": "3U8FHo7AvPQKYDvouCF9nUe4pHhKjU8CtAsdDgx66oiB2e1CqZdFqDhKw2BgqJB8mh94MzCNeb9RkVvdQK5hJrTh",
  "key7": "4VhLHTjN5ACRDccszdrGVmTq8aGaz4EY5gqJb24LrXjRdmQp7gdqytaEFHzj4zDJn87itPcvU52rXW5J6t7ywKEf",
  "key8": "2HTXafBrbA2oMz77u1Luq9cmvcYZDeFgWgBtUAorjjzyHJRb2KL6sgpK1ESL2fLnqjd9dNDJx6XzvG7C2PN8MM41",
  "key9": "3ktxgJ7S1ZgQmqtXKEWKFBtd4vKK2exxk3GRq2ZGvymAFwLwju3RZbpVnepLTCv55FdMJSv9aey6rYdMHrgNjGxD",
  "key10": "3WH4Z2hK214pT1Ss3eJKYQ93FVrwKiK9ieHR7D1DBhMajSv8KQ3EZy3vME3ba52UwyyrLmwrnS8GPHwCtTg1Ngq7",
  "key11": "5ejvfnSaVYSYXryBgyENBU22xdS1NR3ok8D3mRuwFvV1fMhDx57BwRE2SW5JT9UyJjSjPSduF3KsakRMCzqxqTSU",
  "key12": "4hE8p9JJMSBQU9fx3NrhDJyosZuSaGpvvLYT2K5maSxtv8VBzFuJQkuqn6TnZ3chcZLP41sr8BufkbCFMuVHSSCn",
  "key13": "3Ts4eAvb7Q32pahw16afZWU96weLAMzBSUXC4E9Q5dpDaVzwQbTCqbcRwyQQpDkcABu13ycBcNKo2oiwvg5VSA2A",
  "key14": "3eVQN3Lk2T2iU9AicpqQ8nXtNDkYPEnzB3PNY4dB6bVPqRD9rqh5LKWJgNbW7yTgFVYfr9K3WChXFMgLT7sfRH5A",
  "key15": "3RPj8AuqJxpP59DKBkhUyJDwa9oGwGSvsCuoxKyYYd33sLuFpqz9QYyM2kJSAhGouLYPhdJG4fTe9SGrSN2Vxp2G",
  "key16": "5t5TrKhneaqehNiovTU8CKKfEueeyQxANNEEvwdwWiXwNEhKkjnijpXGp71KFSiGZuDf44cPnckBF7nTwCVnUfbn",
  "key17": "3WMKNVWXS5TjntXCsJX8tWJYEJGTpBYH4Tb6WKzYujHcVVbCmMaicmrexn4XVqaf9CJeMS6shDnLV537WU1849BW",
  "key18": "3apzdRgYVX6yQBddw6VsfP7bgBXHaR9F8B9u4Eo2EEQoUDemVPMBXX5bpRmkeNjifNt2DqbgY8Xp464SyzPCrkR9",
  "key19": "3ypYVDRLrFGmurbQVZsYKtHHFUts6MtABuFwR4dJCoHchKowEyut6TjfH2f8Xa5qYacAA2HA2PyZ75WwW9VzZxPb",
  "key20": "4S3US2FpBuhnu8GK23F3UNRL2R8jq1p78FqGuT1yY3cj9t7CthMeDhQHVHZnyePSweSH8zq8yXJ2dbvGNzhzTWmE",
  "key21": "2PHw5ykgKTFTpFKDkJAQZek7VnNBm915naMQQXgSebKE9ZpPQkQu6uhvq6ieLs8Ss5kyGFn2Pj7SF2rvZS9ABYxu",
  "key22": "2W6SgzXqLFkdQTS13iTkAyWTWd3bowZ8eqx2g7xGmL4nr7hKiu8SKnANBDes2z6ut3AgYZLzbunCgHqBqmsDL6Sc",
  "key23": "5GKhhTjhPqxwKzPMKuwEtT9Fs6TDYdGTf9j6dwxwzGxANAWXULukZEJLqybPYh1JFzXY3vZDJoq9JfEmQ1G4LbYu",
  "key24": "5W9AxLmfbEKNC7YXQSUxd5ngYPVfETzhWJexeBLy4CXvJLvtLgWyZ3b2eKXM1xQwyCZkSfwrhSCd7A1q8CFRRWKE",
  "key25": "2pSxDzQohyMd8Y8MFphYekjSVUdLUoFxjAKX4YVX657ofqdwzRiiFedFbfGCYiy2DFDNUd2cK53CbWHgQqTS9MSG",
  "key26": "5DLpfAiviNG3hV73KC87Pygz2bfZZE3GQBxcNNnBymRqabj5HY5BqE6y1Fmh5YRRfY7YwYjUt4g9ZKC7eER2CUjy",
  "key27": "2kFNigmNaRJBXhjksW1madi2tJ2MKAjm69L2FGcefc6zrkHxfWdZbVhVo41gCVLv2UFwFTowQCbBux4Dq2i4zFiK",
  "key28": "3ddXfaDYVvmX4GYHdummfB8HsVE6CXYuTRJEp5pgqeCUwCZFoUApVbtDidioo2Ytkjf8cXh1EFyh1Cfxd4hRq6C9",
  "key29": "5hDpuTqhiy8Pa4esDsssVbKNoDh4cwpMm5mK2FevNjZtCPRc8YkYkvvQ3sfcYZDBgqAZc5qkFuqRjLWFLfV368c8",
  "key30": "2y83oHFMw9py4sjJHa3erR93JK9y1uW4NmAjZyFLFhuX9MGRRpUYVL6ccxUyHveQGNaq9Ksr7QccPeE7LkWe5mv5",
  "key31": "2eHij3YL1nxyckiyXKTeNLfqeRBUgVY8ckwW7N2hL3nyfMwHew3AVjFE1Dqdvtm8dK3LAN4iWoMC24euihD9BT6P",
  "key32": "EpvRHQPxYqA5J4n5VbYy917fykjHvW2TTpBRerhq5EjmUSU3tDmV2WBCka3UZ2Q3DLApitTCDAH8tjAFsGor9DH",
  "key33": "2H4LsVvPnUZqyCVJGnRc2EQkV3tYYf9WQcxNg8pZovqEuPFBDvaRMBz6Zu4xdusmrP4ye6PKTHRhmcRQ31Wmk2cW",
  "key34": "3auq3x5KWgjE9LUC64EJcG1bLXyrb6mcr64WHfcJoTQThxBwctJLNroDfbidjUNvJJ9JrQs3yyvAJtVy13NGkcqK"
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
