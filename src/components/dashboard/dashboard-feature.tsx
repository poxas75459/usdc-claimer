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
    "51JWbhCYQGzydnUn6RrPDRtoMb2YTfDJZncLzHCdVQaaihNLg7gLh1D389SPEyMwW9kYoWWkkS6uhfe86K3Vc5db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjmtbQ28okFS1utstE8aeJNWSwXskj4e6MfzDQ1wN3YsF5V95VD21MNZ9uG8j5Pi3VBRDbm2Ek12xA6W2kek9yn",
  "key1": "65aLUSRx9azzVk7NJxcnofTN66DNFmhCss17aidpmUoVYkBDKJ5DuokWCSdjqBzU4R2r5ZUsc6srBTLjzE9JmvcF",
  "key2": "4E4FRHgs7u86zsdWLAiZ3khsasnFPN1fAExa7LJw8jr4uVLqNt4szs54THpEiSPLaC48CacWdjhEmRHbhp6ZH99d",
  "key3": "vEnWGUq37ZAqWo4tTMFRUdnTsQWCJaBEcESHMNiXULHr4tpyGAn6nvZQhbxHd4t6y3uASV4WpZvGWMWYVw9Gbm1",
  "key4": "4ihgazfCvCKVPzUBx5u7Q5cCbyhGGWy1FDQDkeYxYYTFCXeqKemiBtYbXNydEEf11rbcwxMnWjGbcEESSECogcaj",
  "key5": "4vkrhjGyH5ANvwNBAFBrSjMi7iYyYzZQCJ8MDSrT8Rx1Su7Y8ZuoqHbsFUyWEu8p1ntqf9HyJvdGRAP9ZW67azQg",
  "key6": "3HYDWadYUNqYwMqbFS9WfGqxniyFgYPXoFHeumvTXvGd3WCinJhxmrmJFb25QFk95dhxnDFUzA5jRpreaDtHa4Wf",
  "key7": "21bkAiiBJAMsJWeWjhYkntVajfCRfyBoWuxbFg6t5tRtU1ELJChGna1gm4k5EMMtQFh5koYmAqThxTsrkxxoAq3j",
  "key8": "3m7bxoAGpGZvtX6wj2Fifn5XrC2W4PeP12TgxDqETNk4Y2fhu3rjJbm39MSC2FuQAnqFvUB1FaMxb2SkkZ9ZX26i",
  "key9": "tEfgKpVrssU3qc7dmX9o9v2xtyiEuhWjSFUQG88uXPALkSqqFW2yupi9vXrWeqQ6AhCa1ynUjjXnu9PtubUD7ui",
  "key10": "q2WNvtp7q6RBMaDHaPijMtWqL4UFt2fpu1HzmZpqm35TQjrf68PatwY8Us3N68bKcxWWMp8g1Cb1w6aZeqJkmMn",
  "key11": "5vNreHcA74HPwPPrB1RXNfxRM5vyKvFW4HGtX5NiP9Ht6j2NSV6WeaxEnX5S1CsKx97nfsYFsBBRomaWACzoPLbd",
  "key12": "aUm9sRGLBF62FBpkhJJZFzSCDRnWYAWT4Q4F9QoyCFxXixFv9JFRuMiqUSzN9QKfNfPLd5knGWVyXWoMw2RVfiv",
  "key13": "3nQY6pSEpZYuXDAiG7TZjf69gp1TpExfNK8KbtSm5to9bVQihKPJ4tfW3TAtvRTtT2uJNg98VzP71dGmjjNzZViD",
  "key14": "4XWvQAZFmczdEHx4RRRdKNjUqA49Ptj5wsvhSAm4dwTBdjpeVq1gjXhsznMWPFehYcfjNHPhGmkMDMCQehVYsSQ",
  "key15": "h8CS75NpZAUCRmxhMYZnVjugtVVAEPRU2cjYY72wnwuYJzdZ3e2viuBuENsDL9629tZxM2gAkxfyNf5kEanMAgY",
  "key16": "5AdfLWubqxukXvHHkeqKu17YDpe9NeFbt98xNQvterAZ176jeE3qdyd39JhjQe4kLVggcHqGVUbapkKM2Fy9QUiZ",
  "key17": "5gWGEEkBPSt6A6YXZguwegoWNNX6c8sAFSsLZQ4TP8Z7FcETePqxm5SZuCXLsbMXETf13bbRxesLfqTUVzRxJ4UG",
  "key18": "61MjtFhZTHH7TTKt4YRMiFjmREZeNhnL7fwm66VGACZZjm4L2bxRLDGRVJL7BXALvoZpkiLPiaJ6VCqGzyFxde32",
  "key19": "8UFHg1NU2TuWM1AKpFqXjJNGBshe7gWY9SqMDoLNtijfda5NgzDBXHBBteQ46Dag26nXY8j8NzCoudtx5K3fxc7",
  "key20": "3KJU6DMfUrK4PknBsCn12ev6unR2yJuW58kBUDEYR7XRyHUpSsLfZp6hvHrqxt8qRFe2Tnwo3x12GCQVy19qK6Bh",
  "key21": "uKvPammcq6ShewYWffvtBshuC2xHjHqDnUAG69srUV1U5X3oqEXKjv168ij3Vvqv5wLm5xh31tdrWMwKS7Fxk2t",
  "key22": "iiQNgnFLntZrzJbKycvr8J2WcVHrF1ytJx4YTd2G6jHgKT17BJ7zU3ejyDvCArNQNiTBfme1dmRTHHEkD3Vuq5W",
  "key23": "37X7SVFtgDNnKWARQe1E2Js6LnRZiNA9DdKZi7VWniLv7QStVW8ndnbYofYXNoZ8cQDbe9BhT8nJ1nTxvRSU8WXC",
  "key24": "51uKxieWqhuPfYeQV7v24o3Ea1J5vDABdFLXo1AfLumB3mHyLnj567QyvsgAQkuNjpRgkR8BQXSW6ktZ9jgaVif3",
  "key25": "t2RW9n6qbttvvfKqEegv6vcaWWQswAX6x1CDfCqAxCo9zZa5FN3ieQR2fPaWB7Fv4YNyabR4ei2PFEpiy81PxZN",
  "key26": "3Zhp8cVLmwPbuiwrJFQQdiDK96dBiTPj2GQe8VrbpBh3r9WLfGaQ7gBUgF1uGZHDKLSF8tsfUKWLqrwd3htGEujW",
  "key27": "52WhB1WgnP2wN9RepdGquVUxtrPcBZQMorYYoUd9AXeLsaNpaHFhh61iYAsXobyoPvteG6NgvtzmLYqFhvcJDGD4",
  "key28": "3sEdS22iea554vtBzbQoZPDXu2X617Re7V6iQr3mFGRXWBeGeiYcaDxU5eU6nDnA6iGM1ADLRPRhpHSVE9KPW4V5",
  "key29": "3KUbYDfjfHhnH4xwsZcjSZvuTPzhrVLLXsTn1wybx3ySdeoegScgxjKo43Zc1oGJWQo4EuquLBP8MG6YhTtJrUac",
  "key30": "4mNhHBprinS2MZqZkA5G6JgD34Sd6iJwE8bMfvgUCPRkCkAzugNJe8TgNbz2x3xfqriZkPRfewfdy2nBMjo7MNRg",
  "key31": "5kpFW11ccMbWvKqu6PR4TjfPbRA5FTquqiv1Wh3A5pzr1jpdxnTJD1dAkaM29P1ZXgui2d9aGftJUgYfGHYVgUZA",
  "key32": "peb1K5HmmezTzh5qyKBHom11NoH7HSYh18kXs5WZ7acijXCEkF3Dj1Fc2rZGjR5jcb3KVFo2UEETFuGWf37BPzP",
  "key33": "4RjFdz1PNWjk67DycWLoy2CoYkjtCDdQTYYKLL7QFcRPP9g4uA284nJJqn84yRhTT7wYH1wSwqdopARgZne6Trdi",
  "key34": "tyD2Z9MaTK68aNyd38yHJCkRWpS5TRvkd1zXpbc7GVqcp7uTWcoBkAfyUajpvqNAwpqUbKN5STe9pScNXMJ2KmD",
  "key35": "5D89dvbQjaAwvUxK62Fc9s2hfbpz3tsqZtj4gRwgBW3X84A9abACJBdeWbuJREvhVX2rbj49oZDCc7zpuu6HJ9e8",
  "key36": "5v5LwFYRwFD4Dadmaxt7umx2Ea1YZruftK4WCRYq9jvPWpN948AcWLQ67LZSSNavFFV4ApWm8PnW5Yi6LdgoaecX",
  "key37": "437rZ5Q4wLufW5aU7WCmRtregEdV4DZ1RKDjV9XXcF1ipdcsZcNsLxBtPxToeJ9fbCwV8w752VCvd3MqYjkz2tuM",
  "key38": "5HWyhY2jCKiTFUR4nYYvq696poWmbRgvWdHUACSXxxCQr4Hap8NiWAUWMven3dvLKi5XbyYV5z51rX8AD2uxg9NX",
  "key39": "4CQU6hosWB3x2g6xWLiieDRA2Y7BC7X2NK59A4R8eWAkBFa7owTt8n7ojucjwcWbcEhuMWxkkvAVGc8GJSdMSivs"
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
