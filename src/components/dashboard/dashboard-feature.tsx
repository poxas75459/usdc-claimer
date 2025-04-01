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
    "5tmKPqBCN2KWVdzH1sg2VHcpAbKF4r4ySWEfi58vSVMutxvgKv5VCQfHkVtK2CtVeapFni3xapynvc9ZFXFhRKEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3158KqBhYMg4y1jjejk3u8qzF4dH9jUCB11ConyW8DdWEV6Kn8r4upkcxxHf36eEtrWTsPJz15fMsXuy4tndi5ez",
  "key1": "tNCYJEdFCnXdbLzCXq9HirXxmwkBKqCek7GgbEi2M1kKbPMbYZsLDCSLmV8kq6JSSZ7wZhypwhXtbdkoMgqkumf",
  "key2": "4o4P399BRd4z3eYVdSwN31SfpuZR7QDsi2Fjg3BhH9kBLVDScWKsQZ6tnrDxuEVMYi1vM2jF6ZuX8EHim2KeKXLB",
  "key3": "5LFZ9zJggdoykQztx7gxrJcLKdpchvDiW2y1PzsqLKon9zDTHft3ujUapFC7EwxQu4zJJoMHDqGTVzP9x481Tn9A",
  "key4": "yDK5RudVC8jXSrTQEfKXLpk6BYC9aFzGCnj9r53MssPc3Sxq3bWh3Xdvb6hQ4KJFNMgU8wHN8CgXs9dFQAJR8xt",
  "key5": "4wW3m4548fvcQDqBK2NeLwkcy5VnUNhebkyQ3WagSpAGzVFYdDGHWeC4hAmdhdKqaYLTx5pYk2HcUA1wf8BzGif4",
  "key6": "2xLn6EDepA13bVh2LC5xju31P58rvaPUCmCWEgvPUVrztnHA2iD4HUrLgubWigcbJPiD3iXquptuWWjMQ2Hdb6TW",
  "key7": "31MS2Heo9aaXHeb7eX9BzKRYfp4EupfLtCwLqzEvZFPTnTaEe77MCWZNnewzLB9ktqLTEHarah5sa7uK6VyZvTJf",
  "key8": "4tq3WrPA9uvXA7SW3Pqk2qzPe4agBt1XPxSgtyG3NGackJoZHoazqLzb7UNCgGaMbTprDNgsBrMy9higXqpatfsn",
  "key9": "3GQVgkwZ4gPnUWJWNErHH78umEZoSwdfrkGY9eypkDYw42usgiM1wcCLNkG9U5s5SAKU65fXXRcVsDAfdmXpVFpr",
  "key10": "388ttLzkMqKnXYV92EqgcZ44RDPGXAGD9aLnkEyVj9w2WPWdyXojGbUrL37NtS6ZJy6B5KutHfsi9qSzs69aYxwK",
  "key11": "3MkhdvuHAqaHHyXmJS4vRFHsfdenEDV8aaQVnYhWkmSdMNZUkCWdzCX6FyV2aEb4uG5w7F2zL4itcABELAPXf9Nt",
  "key12": "2jrqT58hYP5gN7RSWXvhnPVUexA2dqTYEB5ApZvg4m5aYjBhF6MTNtmz5C5mcbBLkU51kMxcRga1eqQivxEpa31T",
  "key13": "5KhAGAyKmyUp33SFktwqPR4vEc3xfkDEbRHdVfVjsefTKw8MQbeSEgpzAVjsEpASCVxYgNQumX5LSfFLZDD97kAK",
  "key14": "4RFBjR3x4gjVJk3b6Kp84SAbxnUF5wrdhJ4sCbQDaJzguZNXxKpr2jzc7NQetNA7yN22WcjHHjtoaJbcT6e5z1LR",
  "key15": "4GtVuW8jfVFwvZ2xN9dbsGsiPSi3TULXmMUxqcWRycaisKw2AQpY4XTigeqRPKUVPSSNzmdqPpt8pe42yWT9qNf4",
  "key16": "sGd5TJRmBJHs1wLHXeko5ikJjvmDXZey6ovwAfPbiC9XGS5sm3WJV9qMRpCFhvV98TDkpiCK9CPUsKnQLhqgZ2L",
  "key17": "4YEmRJGfAFKD9cwcdJKV8T6tspr5XUdtRoegY5v4HgxgjePpNkiVfBHyfqkgePtzNGcXVXVAXPuZLVJ5fZwNQso5",
  "key18": "3pZXY9AJkSb1cp5F7x8M2irjYFmXR5ZuXPWsMSBQaqtquhLpGrcwzuGFnGNHupJAXsCCLrGgS4pac55J9PNi2D39",
  "key19": "5pSSPXdiTMMNiTJd2nSEsEVuqByBbrrhBweZuXzRo4NFv7WvR8A5znYRrNhRUrLyY3LH22ZkkweJEsDrD4umwt3t",
  "key20": "XtXrtJ5REKdGc7V2bDceHcUhenLZtTtrxfnf8aLcGjPtxFsHC6fJC5dEQPLwLMzYe4z5RTpeeZRqDnGkaWhVcrT",
  "key21": "2P5Kpu5K5ugCutUp6UU2WzCZJYgNzSz4m3q7mcr17umFaoqSnybZTkBfxUDdpr6iBhvqQm7KJsSaUTbhj4eKe76B",
  "key22": "5h4DYGsdtqHmgAZ5hcaVQcsoxdbiScEDNXJ3rYhuHrzLxRdiTEnotbmZeoRSdNTp7xjtgC2J62hb1dqbRUJFm2jB",
  "key23": "37RZpzpHzn6KGYJ2mhSRfWfJMGqJybuhxP4fS2XDoMHLisZaX3injTzz2onsdtCMRPwHoqstRqezVkPSwggWUjax",
  "key24": "5dRoMk9FbntUAdbwPxWqoXKt7yef6mZ8f4YPndkTT68XMY3YRBionzrprZsTq3PWQx9oKNSrmEfMeL2a6fuoVDmr",
  "key25": "3KWu3crA6josBNNZGFPhKcxs8vd5PTuTmXLkcWxuybGoMrLVbgVNmKyyUAgdTMxsuBSMNpDNMikKyLGACjH2gghz",
  "key26": "3Nsp8vffg9pJEcao9TNaN33fW2Y48Vrvt59sN2zQXDsKckDASAH6pjZZHwkkNTUMY4QFH3sPMzctjzb3hsMURSkt",
  "key27": "29yQDBsUv2etWScHeUqDUj4GTPS2CPjf97RLrWToCPJBnhN4shWfoXA5ujrkhWDPw1Y6jAx6KN943nNZkujMmUHx",
  "key28": "3CEH3FfZJ21q9WD13ERz1X6AbZTVdwiCLkkAQUPKyJAM5ueC9NUiTYBqQwZyR9FsTqX8a22eXzMaXtzaVkVU4qDt",
  "key29": "3SQGKFFTu41eaibPcFR32i4B83xX4ekW9MQxBJ1vGWv6LT1uXkYHcNVhEumGTmeGsgwTbDE22LtEdvDUyPWSBx6r",
  "key30": "5sfrcsieqMWdYxVH6tBYpsCjA545jpijGvwinfD6Aaw8uRaLWUHH7JgHYZMYbZxXCZEFKpZX3aaBoTT5zjQUJU28",
  "key31": "5c1FSMA4R2mG226eQBsQA43eQ1JZ3rpagpHBUi1L4j4FaAsESDakM4GgwZtLfVQhDTi849t2U5wMTSJ6wgGjT3Q1",
  "key32": "3y8RNh6NwPEDVjZhxTGYFSnJ1uD53e3CvdsL7iMBUQW6oCjRo56WdUPQVT69FFo8DhuAcFKF3N9QQ2s9QUC3ayTw",
  "key33": "45WpV6vuwtaAkQNdaW8L1u9XYPcTrzrAu5MaBsh8a8B6JB2AS5L2CtZTDRGuFC9b5QAwBtYa8oaVovzEDZyhG8U",
  "key34": "5Zkp1kF7uPJJwNyNSv8kZui9DAqE1QkAX9LBcV2ReM9ZeMsfXDp8L2TuufeXrCC2rCPqY4PB6F1E3t816RL7TzTH",
  "key35": "3eghjBzEvePqci9sjQzkUu99ZLsgDjkujrEqTHsCBV21apUYfkfk8yVPgkbZMaBRQq2oU97FSbZTu6orJXtV86Ba",
  "key36": "A4JJmXw5oH3wVuHUnTSiLZgZGthwZYWABZKoGXMm52PjKmhfiYJJxZFhgdrXju7GrTJ3NoEiM61RK2MPXvLkoge",
  "key37": "5Anv2w888Pm8orNosZ6urXKRS5b2vz6inoxjW7eJbwtnvCZHkv4N8z2qi6qKGxeaH2z6GVKRQBDeTEooQLwU1r9",
  "key38": "4wpT4RPMSequ2ot9ggpFGmqUAMvP9QXsXkmqp5Uykjh5JYPN9wiU7T6ickF5GXrK7eECuyvERb8WtP55QB3TNoA2",
  "key39": "4aDTAj5GWJMVe7kwufAEjV5gK2doHTUizBixXq496X3rzfbS5ReH65mkzz6Um167ophrMPbu5J2YwysRjNKjZod5",
  "key40": "2r9puZw47DswY1EMDsAFqmAKtnb4D5SkCJsmDnpe24w5CtSiLqH7a2SkKEbpGcr7mnk5QdZarbHbyG6tBPFtAKqM",
  "key41": "45aUumU1jhnzA9DrBXXD7EhgeoYinJk7VgWmdQihEZUQUbrvS8kAHm1K7zeAsR4KL58xJwiqYkoL7yw2bnNb2JZo"
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
