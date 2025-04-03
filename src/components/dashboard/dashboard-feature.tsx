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
    "3WMVBZ7ahpAVRogFBh5HJtVTUmhMDZGm9EPCv68sZz3tuYu7x33DCspX2Zu1jnTBgFVeZyphRE8qQdkbBTg1a37s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDBoKb4zqNxXw6A7TRpYFWyaDPsEVM75N8HTUs3Y8VurHNTKgf3Us1tYokNhAXYBXCadMvXbVfZ6UPj14mjxxpT",
  "key1": "2NiGrB5nnPudRsNyeDRsUyk9PE8h3V9U2Ve3vKp3xTzh3orsvpr4FSoeqYRSVSKY6bsNJHi54W9UpJtqwbhuEKXF",
  "key2": "5qWCXK5yjzjSdQH58Ud9DNvjsshvfuGKkwfQabdumwSLMyZGQoF59KvT8LXYXAxJ1cpfSAxzbo33oDNwqjzMQcSw",
  "key3": "3Ey4qsSDwCtHf2M1E6xQQfyoYMDwyicEQPUMUt1PGrsTbnQvTS7hCzYs1K7zTtcew3SpNdCa8fePr92fBeX1SUep",
  "key4": "5fJJJx11essEgA74NHUU7THYQDmeDmKXmmrgcWNZg2yzscW75ngjH8G3zdNNE5TJdtki6mwTLEBmMAkJrr4PvZLP",
  "key5": "3s3SUoRhekuNzmTsLpNbHrpfdXYBcGBJDtRVikpVVVJHMyfA9aXnnLvsUFUDEDiEYqLmvWeMVreydHqFDM3D2Pmq",
  "key6": "BdaZwVYv2pQjwWyw7C3kdhPkd3cSbNLrySwUQWcTEpgM3HBhHUVE2HCKJS2noc3SHLw1XLvMXcfGfV5QLXqCiaP",
  "key7": "5WRbH1YSBZsRKAvYopVAgDcxH9PRaxsPYnh77UyvSGzHn8SH44CEMKRfJucGZwNkroXfCvkGHeatEx4YxYMPz2DW",
  "key8": "4teLPANkZ4FZbst93YJMbVUHdoB1bXzAzbjVrT3c2uYkv9QwjyDio6nMWfWYYCd5n8cM3HeE49TxrwpmRCSQ7gj",
  "key9": "4uHLMPdwjPGiKb4Zb2bWCQN8gUYg55HdT2ZmYV7PERv82ANaxf7zVGMaQgJygkK3rLghPKFa9BFqVD4GDoahJGtX",
  "key10": "f9Cr1A1W79RGPfedWqwh1oEVn1Lu5kPY1jqnMoXoN65RB1xkJXZ5RVE82sz17nDVCEGmgHAUVgXWLkDxxkD2BSB",
  "key11": "6fPRrQukpRFzsG4R3dhzKh7vXzJQawKZRw19KQffJB2SsEckXoVNVZumKJ7rMRzH79r3QvuaoXrK54esNjEgaxw",
  "key12": "oa3fgWwY9A1JAjhvy4Dq3CBqbyqQKC276MWLy9kAqGCCTYtfWWXd5wiUJDyEUXKXZoWuviCy7fqwtJSxBPSVHrt",
  "key13": "HexmZSzDmzmnn1MfM4fERfEePKenFVct8NAeSCADY6CxxFawxbRgewtZJ7JGaBkXTEpTCVQU1rzNSwjYeqYgX6b",
  "key14": "4DELyBQTYSTo3n4AdL97J6vCQnytJB7zjskUmnPkswqu4r2pYcXf7t2QS2nsfvf3mG7SQkqyx5bAGigjCWpiPSDS",
  "key15": "4umX4VWHry7VGVpYvKsHAw1S2UkrBnqxV8GwbBqmBLVYyYvZoH1ERGyggCugCpu36ve1bxwHYv6TbL8Sx3RtDp2Q",
  "key16": "2v6PrVWX6uUBQMKVi4mQxm9vxPngunm3c6zRusiN9Ut9GPmppC6sf97dFiKfNaYxyL2TfCKCczyvYxDiFEzRbyny",
  "key17": "43vhhTFRpMdbMPLeVsaexsiADwMW6JJcSC87MrF42VmQHvKwEDqP7URnpC6Tba4eA2bq4yHd3pD28T5zS4bb8t45",
  "key18": "3CbxwL2ZeZvTosVtVx2BT35xEuNR2qT8YzYBnJFF5e2rsC9nWjF9JjWhDk7zZ4Gy7donREZgxguSgUebhyz3wdgC",
  "key19": "3zvkqxo7PAzSgLx4PUjgWYhD8nKPzDtE8ygiwMN79nkyyrDfijHxi9JzJZW99nTTdTgjk4VydBh9sCMy1DfRSh1G",
  "key20": "2BXd33XQmaKGc6W4bLRwmV86z5Tu1hurGxZD3RX7C9dFLEKyANNP2KsWqB9uWwoAy3fDemL3kfxQtWXMLDWAc9m9",
  "key21": "4Hu69gWK5PXCob9gDwTrJ9xPHrZjfoNMn5JXHtpParYGk2bx8BMvWu9WStsv9oEHZ6DnfHvuVd8rJozrn3HL62nv",
  "key22": "hFXJE5DfmQUtRRDk8kjgychdrXz6zeBaEnGUeF4KWqgbJyLY48jKtbbFTqFyLSGsDxhHTK2t2AQapJxoY7kqunR",
  "key23": "VqujYz9M24Rhk7w8NG1uATQY4ZtgvtG1LcLa71svB2fYen2VBBZ8UvtXRtha8wX6LoXxaMDCEVQX6LMkzsN5uU4",
  "key24": "3CXFZUECsKfX91PRVo2VNAoXGbbodnQV8etuDNCjhb89ZvwAgk6Kqgidbhx4ccTv5A4GFXiMfLhwpoUqUQz8RrTM",
  "key25": "24WdiN4WT8nm3UqiNYAs3WWzkvZP2u4XddcwuD9azgQCUFqJyqWBuqhJZp7WYdyVbVXUKySWgp9x8QxK7DDChzhw",
  "key26": "9SJzY15g87z8b2ytrBCMP74AZyJJxCoxM6xFnkA6NcFpKGRDMtP8PVQfZyjaCdC15NZgUD29Cg8cEh3yErxyALj",
  "key27": "3sYzRfM66gfoykxhRch1uxAnxSXNPd4pZTCeFumeTJVt79ojktW2u5GrpkqnNcM3Vs2VxNUsDYbY5tuynsZDwVNi",
  "key28": "3o8XWEdbU9M3yzRSxCtDTRGa9HChQvzZCD8ewJzGD1BFH1nMJjfBNA38ucoNJ23pTn9TVUkdrqiarcPnPPoTa1G1",
  "key29": "33YfcbvCkihQy2XYgESG4yXgfbbB7HMnqDUEJRLRf56QjKLPgBzys75GjA9cKct7xeMYcZswZiwvy5QvF9yrC2C1",
  "key30": "3ocAWNNPCeFwDQhoZc9KvTwaKkG8QsDJfgJ5vhUNiizdwaoUK5d5eippLDH1KoU9b6bEAWZ8gaLiTqu9gtpEsAAD",
  "key31": "3ipArcS6cBz6ZAJ4j5abMGcTxwT4SQQ7P1pSrQE4E2cJ1KrVUai363aakvYBiaKrqwSFgCHZEcuggGZsmdCykniS",
  "key32": "3qJr7L4vgx43WsjutNXy3kmdwCcvAh5nAZ5xLvTHRMzABiXwMAJFjZM5C5jB8k9QDfaBAW1Hpe1DuFd2rrFM4Eve",
  "key33": "st7ZjtUBp1huUw6t5s4MtfS7MuMJHRJNj2tteBrMRS4V9ov1FwWiBW7CwJ5pWBm4Y18krcUthepgJBCvszfHaov",
  "key34": "3mGApnD3d8V2SmqzQ3WfseEsPtxQTnTb477BxDhgvUzHq7CKGgxBC72YhKZwqReQ1cD9KFh1MtbsJ6xSmwdAsMtP",
  "key35": "4o6rwMFd8yXKvchB1Bgyz92rf6VZsgErVNRP1o8Y1r3JarkZWnJnmXSAQxr6KbsXSBisc219Y9SbMMyMgKsaij3d",
  "key36": "3VzP8ntX9pwCnMCMGqdBWGMEWQVnPE4VgWcJQn59NTd2XT4WZRNdJYBdSckdQoWxTCB3Kh29W9UjVRky39PZoU9g",
  "key37": "2qUNosMogFd9Asp4FR6tHQiWPZFcvBQfMvZZaWseBouGnt8N3RqWWMbDAfbPbn7eNoVP2kWALDErcte5Qr2LjnAT",
  "key38": "56NgLaWXseNo6PAmdyGkaFRBicCsAz1nBCZauYKj6YghrctxPsRRRoxvoJrryswezE3LdTvmDs9R5sBKuTRs7twh",
  "key39": "2kBvNCyNsMYa9f2uwW2cXNCissbwYf8s8WYydY22ioAAV4GvL3fa15dSRskA8h8DF7Nng8hYJNi1FaUFKtbdjbR",
  "key40": "4tGL61e5HAUNJyibSyzVUCFrLA4VkYpuMU7GQmVUMTLjuQHMmkxrSvWCmLMLrGPhV59ZHPwe2NTQ8VDGEj3qvz4o",
  "key41": "2wtqRqRTmBsVdGtjdUiF2uB1XsBbMgPCRzfdXifp2zFGgZRxaPTuTYGYAFpYEcedqSxFBa2bQxRb35WRHjNXe53j",
  "key42": "41V4ZzXriRzbKAWm9ykArxKMUkHu27TR45RWcEQKcpsEWRidbCfhKm94xfxYQQU7Y2eXU6u6FBoL3oBfryFrBETK",
  "key43": "x1b2AcTwJiY6z5B3GomEMAj3djYzvqFXwPdokUrm5uNykXULAMyy3i6xeszxHfRTenw7nuZDhVDmkbpjtiz1HVE",
  "key44": "q19kEF6yBmFtFxbRAMpDvHmqikS6vFWCEbQxNNg4xaV8t6dPsrGGrdCP7CSendtd77euPaMrsGbx2DV8cuYVbvM"
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
