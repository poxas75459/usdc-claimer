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
    "26cAfU5F51U2PUTQgMUMcBTjmRzskD4sYmQVKgPDtfshU5vUXE2tFhwF7XdSA9YWhKi53K5gCW2AfoeGTmWBKsBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4STGLfMU6VMQARtcGc4hAVksFh3ihYAkEeLB6zDok87xvTMeT6GdcPH98d9Ea6C6j5KeBwtaWdP1R9dv7yiZttHs",
  "key1": "4okgJhCBX8PUqvCv2Kbbn5jXxuNEkaAQ2jdQ9FB2bjyLJC7YqDkYdW1cfSxnmf7x2PeK5KoWyPmPWcqXTG4Yfsfb",
  "key2": "cdKEwmVqvh7md5yLczdLVFeLYhi73wS7EczZMNWh4VDK7wehxUJdACdXcCMajXP7JZY8wdipFCpe1tezPxzFm7s",
  "key3": "5TmXcHCEq4nyvY5kigPATjcZj1q3SEPBDNCYiyNj39mwUvzC3bJX9wP89GkpRMr8YRMeW2XpjpNs8QxfiRuQNUsf",
  "key4": "3q7NbW8Co2SsGFk4rJHiNo5v9yHjg7xuySj5N4bK1Ny6gB66vCCFtrLuaLH9ymnduDQtABn641yH4WXttS8YeWxt",
  "key5": "4ZYy9Ag7WbYh4Fs2sw41A9wTEraEzczexvfzro48Xav2K6JMBCduxVMjc5xFZG13EkykUYR8h284zwtcVdoPnB48",
  "key6": "2UHWja9pBk19TAS9HHxYjvAg6u21X5usRKALgxwVRr5pRmV36nSLX7hvYRcYTJgZcC6x9Y49kfjFNhf12vkhaVpK",
  "key7": "5xm65uTGRXgWLLQS12JTjqm2Nz2QSnD8HDe6cBKaDhaM6fqLonDmxBzvb2U4wcdghLDRrucfFtHN4cZH8Cy4wi41",
  "key8": "5UzV7qtgCrsBMeCRKciGCV1QzEWDRPnUFskEN2G7unPsp2YZZXgstdZPmdvzPqLpN71TPsmg6ry8QFfinhgQMRf4",
  "key9": "4VzNRhGkcDm6tWvkrkTy75Hm2TyrGQEjCxEGXDZHi6YM6rkhSdGwMPR9xBXfXsxfaf1ui4S5VTSetgVzpVQeM9tC",
  "key10": "2BXw2eJen7UjdKqaidt8EGk9zLhbozK6xPqAzqsdv8aqsJXTy4JwaR1QHNV2YzVvpqx2YKueQCZW1xs7PrTGGzVG",
  "key11": "5j9SrhuiTWaWVx6Tn2hW8pjQ9WBXvBBW5rq2thqFv1fVHtfyaYzUo57GRkDaX3UBFizgxf8XCgjdfXhog3yCRPy1",
  "key12": "mEysnEeKQ8QaKRu2ybimTfDjAB6y6aF9WJxLLq5k4jhjBppY5mgHafdb6R3jMYQ9RghFrquP2VQKGDoa23jvEUv",
  "key13": "5vkbpt8wxHcPb1Fo5WmmDVwJ8x1AFT4qTxXC2iGn35cBn47XAEN8Hvuk9kUnR27eev6YdvAMmRhzoXDk7iRD2f83",
  "key14": "uuHsnXpzkagzMD7dSQi2Dds2RJ6mMofBoHJFeShCsbeLrGneLfb2kZN8ac34eq2fWXaEZgVui6M1grc2XaJ4GXv",
  "key15": "58X9bauMeb3M6HUhCU6uGBpYNRcY7ACumf4DTvi6XyowCBV1K8KVJcHzKtRG7s9puVahC6eUGwhh99PUY1LGkqyK",
  "key16": "44eQ4zut8DnZt9p3gjdB7b1bcBzVRKkgwXyWELoyEfwm2apDypd6uTR2CvccnFcEecXJsgqVPyH63kkUtLsaNe47",
  "key17": "5mCPiKUbBb798FA6h2Q4GdVPUWW3CzMQroiCYChy573xsr7a5cx6tMoTgXsz7SVAnBF7LiuAPPBZrfXYaPBZgu9x",
  "key18": "2dwZq5GbrU2pjGjPMEULGxuWUpF2HxKVifbJBFTkPkjoZF2cCiZDZxWh8Rz7NS3T5LaDXnhvXnK6KkpP6ZnapCmf",
  "key19": "58H36CzmtANCPHKmwMmicsX2ksFBJk2X8nrxkc7A42U2xBB5K7QwHL7qBuEhEBDZEGr4jiySB95s3iapeqpSaZPD",
  "key20": "5HDe9tVoSk4W9v1aWQtHGDjm28rEkYPPfc7qY4svXSC1zfuS2V5nRstDQBRJ88hfL4FRsE9nrFhfyHK9CU8RCpyC",
  "key21": "55G46iV4j16tRtTyZ3XAwfRnsLkqfmvbGZpG27kxk1LDmqTKmBsehY6WN8hoj3c4LBBJSExLLddNVQYc1BVuXz6B",
  "key22": "2y2zmtwXBgkisyxSwkSfhcgNQf8YYLdGUJEpsrEHFzCyiJ7WTDWUKP1xawR8uHHSpLrrZFFmZfqYeDim5FCzToL2",
  "key23": "232UdsQaWeAYAreoAmdtqK8vjMTfjPSdBamZKqieTcVsfKnoABU7ddKJdd4VQX9E11mA9TFt2jyyfBsbidBBnWA2",
  "key24": "2A9G2wpvpTbSJ69T84yugfAwtJZ42ksLiU4wESC6SmVkir5kNuNMTDvD1iaipComHiHdNrMC6qCAjZc3WDgUv6zA",
  "key25": "2a6T7wn9hB2VEFPCzHWjNT3QkcvVxoGfmhxLT7nHmtGSCxzVLZH27DzgWLvAZngK9PSKmGpo7huDRpxanxwtnx2h",
  "key26": "2h39nSSYYtFtA5vz8jiTf2yG4KmWBEu8AsK12TgT5sKRz7859Pm8iYrykBtdKD35C1hk1SD2SKZWo2zG8t8MTm7e",
  "key27": "59jM6aNzHS3rdREdcw1CiY4JK7jcFcuyktXMAqXawSkYXg9ey3Nc2eLk4E21nWG3cW8CPNxRGsZgYquPgTAbfkPg",
  "key28": "2KNvFWGGwaX83KvWD78jpgkZGafyeDxc1MJf4xzcXoRoFgWD4xzsgupS4SiEZRwzPjZqgU8QP4Jyb9DAnqSgcCxR",
  "key29": "4bxJsvRFy3GpT3rojNFZL2sfV5LHq9vjvff7JaFcpn2WjXi2TuXWZjnGHdGyY9iHD4scqedMFrinvurj7EdQX7GG",
  "key30": "4TFKW9JJX1WUzJauHFfSwFVVRzzhm5BfzLsyCaWdvbw5heDrt3mCHaoGg5sUpa8dLGY1uZh5Q61r472PKDCtAiuF",
  "key31": "2dTcna3WubDUsJXhuXgViUjFWQYxjfJ5qrdFy4FyJRFpcPPwumxwsVPLHn6zHM26Wbk5GAU3JcpXU6Bz6c7auXCv",
  "key32": "3oWKVaSMsaDNwGS7oeRZoV8YkGo1etMejhhEwh5X9vWigCFZmXEAgTZHb4ktbUxGnyPL2UiMp5pG9nqCvp9xvwWh",
  "key33": "mD52Darvhy2z2FwEoTQVYydPeVAgxMsFbHq3izhyxgDRF1fx9672UiDMEVAygR1jb5KCwQs3dp4MS91Y78X3F44",
  "key34": "216Us8G8w7GZns3ybRhxQrUAJDQWm29fa3yDGsdrJXKV8d2npcB4iA8DidY3bwg2WFXyf94sujs9vQVyAKckFuxa",
  "key35": "3eSbN4dU8Vb5Wo6v9ugR3Hf4yTn2ZtL8AvaAuFk2eNgCx6nr3znGzWkRruuraGe5Ldrw6Zkt9u1hXDo1VSizNf9o",
  "key36": "2pQQxJFjF7nb7xNz4rFw4v8eEVQxnJM1uBfJGUN7dcFA7JiZZh4JtLV4yNzGbe25yq9rsqZaipptN2P56bCBsTqX",
  "key37": "A97s7xDAUWk8DqXedz4wAVghZe93s8pCCs5UYiXBmV6hXuKdWThUso9rAfq4hojTcRXiRegjkUUnD5JqdtcBYno",
  "key38": "4KxDmkPkxYubFVYpo9mUC2pFd8EGSZJU3ka7uozMa9a6qEJh5f11cnJKNjxvVZ3pCDZegmbqkHdVxjjKq6M226Qm",
  "key39": "dRQdYq822tbbrSM2F8siKhfaKicbxM1rkVujeUF7PA2NZd7xVQw1d9KWPMRNBXQG24zoQ2jgBc1d6Tcr7pbZcSg",
  "key40": "47mo4nrU5LPNQ3edUBJgVynbFxphAK6jYpzb2aYLPMHDfWC1fQfKYUPEY1BpaSWi2uGxLFeNL17kNrxo6TWnBg4X",
  "key41": "41cdA5mV1mxyb8oE4uhSJd325Z1Khjh5H37eZdbS3HfjLWWGrN5YK3QVyM7w2Eq3ZCYvXeyJFV2ukyak2a1kESje",
  "key42": "5zjBCkGLj8J5wUbEbi1di1JrNBVXMWNmuSbD6Jr8napL7ytAf6we2aBMhVYSwBmemToCKZhUhpDoEjPwm9ufbT67",
  "key43": "326BTu7S4bwU4YBv9psZQ8tGCCatCtaCJXTqMgKhNTYz2rTHczReVrCG3E1BgNdZhD5WYrN4i49zDrfyS2pJ719o",
  "key44": "3h8ySrwVhjtc6yBPxdFUpHZNvQqQAjaoS6Cm3dsYUqiA5fK5tS7TZZHRymighZZenmtaYWmJs9545yHRJxF8PMiw",
  "key45": "2uiQJN9f9FD41v4WujSMzjSYW71BJHuJfSqc1HLYL8Wr86wzuVJLi3a2dWnGNWmaQ6puUMFR3Qa9wYuKTvanXoBG",
  "key46": "4n39mcp4Z6E7NU8QtZQ3dZtUAcKvmaaUoa4sdHorjZcCyQKWG9dNB1tdgqzMpmcEzDT1m6tqyV2dkE5VZNPnPhFY",
  "key47": "4jz85nBVAm9JLeRn67MqECy5V94rqc4KBc3UsnqaQXSyMawkCEzzHv1zJvcRzvAF3RuEcGR2oNHMnTbb3u7MNYFj",
  "key48": "4ynM6engnGirtvChersS3dzPn224pBe4LKCTe1bxVhJzWP2sUzR1L3vUpFMnWY65xNcXapkbJ6sxDLAqoDPHGXsp"
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
