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
    "J4JKAGHy5SiRC9xXTk7FcnihiiRBvGHzCMLDQigGZfcZdCCoHmGLkwtwabKZYsqZnP9kFRSBLuSWiHszjgYGaHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjQp53YGxmtBgDTDULTHdXXhkXXvw6LNtcqwyZk2MXGhVcPX9PLW9uYcWjkeNsYExUsMZi7s4WMNUPuG7E5zrmC",
  "key1": "4779bAZfbaX3jkU1UjNbRdq2gPb9m3qmpGLCcf2X7mCZozvEoKWTNtfABuAbJofmsPBcn7DLEp1VY5jQuuqw36Gd",
  "key2": "aYUXiK9YaMRZPk1zmLn4U5JyA23wwihLW5ovdjH9WtGLNqTmJ7PTYCRvw3trQBGREKjXQ3v1EcZCEBtRgkWcz1n",
  "key3": "je9KiBr4teHvZkfnZ2gBwQb8fUqzenHaFcgDonyVbFTGqgVnaBhuEpVKDyMnSQgLE1sBm31Jq7rgC5y8Jz9V4AD",
  "key4": "3NzcTenxyE7pwyY7w4DuxFyX4e3yGyiYrGbiEfZS4K1Zb6YfwwB5LYo6DfLnm6PHH2jmwAXdbgrsdHHba6Yus7Gp",
  "key5": "2byvUDNkgqkZSB8Cw56CyTNHDv1934fF4ZWJBjWGmdHQSJhuBW7GSh76pzAbQWsgiJQh1kfmrQvXYaE73GFpWTLi",
  "key6": "2H9tLGQy9CeELWUqmSYKivkTrEu6MVcYLqE5FNgVGozgYEnaD5ipbC5aha3Zmk7GnRVNn7KgQ2pE2GEMJdJeL3wB",
  "key7": "5qZMhC3RzFsM6Tj774rQhgFofuTsK1GUU4Y2J9znnMJQPFU2gBcjc8iW9JTfdVUT7g1EZhA3ZLKjHMx1MRUds2bG",
  "key8": "38DUMbemAnQfXkDmXLEYNsKo8ih5Dq4kvFBB5SqxfU1oTVAChRRyRR14DCt7kjtJtM49RcsqmWNg4YHcTyy2UoKw",
  "key9": "4Pae8UNjw4eZ7T5ZYaBTXXAaeG68z6fxFAuXCRLQ2qshP386xe1EcwLLbDkFLopwwSnYQQ6mbia9u3D2vwazyJLS",
  "key10": "5AptXtbk3ud3CFhVpKT5Pa8gMaBCZwPYWgdybjCxin2cZHXgyCyWTdukMyr9uTZeJAhwRaprSngSZVSra2LrQwHM",
  "key11": "5WeNmz6RMJT7729weGDsjPYgXatVEgfnf35enj2HW4W2GabQQ4qmrTT7PCG2MkPd2oZKmKLu8GxjsJHx5tDrPHoA",
  "key12": "mARW4tyMqVq3TC9ZYREAV3SR1uQTRym74gmkwrASteYM7UXQofDfMbYVFq2CWxdFA69weA1iGDqzhQmuQFuidY2",
  "key13": "61Lmjp6p28WYJ51CfFs9JdPz2pFMuu1rSZAHVXv2H5bcTV5z6Wr2hp9p1HJLkE864UYPAwQqxen6khZ4NycYkHMr",
  "key14": "4L1gPCcSMejmVqnUhRpqGGr8cRZTMD2fe3moHE6YMhfVRyo548gPaRzFT5UYsFNUCRXsLYdDejttSnf2QCeG2xk7",
  "key15": "5Q1cieEanfhcrejiLeUiQJc2pQ9YALfDWrpjKkpVZxyCu1CQDqyXoCA76mvnjupP29AWU8G5ZvooFfvRKHnM7PFC",
  "key16": "57j8hAZfpcP8Zj1v6Zf7sHKgSM3EdozeTLyvvPKHE2rmZ72jhcBYVLxuDX9NUvN3LRWQ3qwpAwMd91B2ybL3WRKc",
  "key17": "4ZsvZ86iLdA72v3hWdLnCCXomSBUtrAv7FVHsEjde6a16DUpMVUa3fMq8HaYVSbzQnujcAmrd4KqFrDN9SAzRsAH",
  "key18": "3VWo8HTfBVN2zhdgrjmm6YEsWMxghp9nuNA8GDbF9RJMHEs9VMuv1Q3d3sfxysougYWAMCMx1s9nvQkG55rQHczT",
  "key19": "3kAsN6YGrZFGTmgyuhn75VMfYJvd49CHkzNxWjbDkm1bMTJxsDLwwiTZMi9et4uNgGM5a94ugBMx8Ychdo3VPYm7",
  "key20": "YhZTLfJVzWz5P5ZZzEyg1sG2QEDnTH8Wu6EvdSXfBBcGRqQpPrxWwXAQ6RsM1Re2ND447exL1wpDHSchyywrWXQ",
  "key21": "tnnJ4ZE3s2cMX21SGJstz946Rk1Epab4sTtaFaZZtXWGiQVjE9B1AFZNQQAnP7hJrLbrf5KCYeLicBZf88WKvuL",
  "key22": "4op2tnJPiKpE12BKqXfigoCb6hAetqzsjvUxeTPfVUrtmxQgxqepHgaeR7wf9tEoom7zWj2LPYPmyYDWDb4tCaeT",
  "key23": "3LoVAPt4QW656NYUm4WMncXgVAvBZmbJ7kA6QTBT7MpBiiWQ17mPuFsAKTHpW8suKc3HyhBceVSxCzG6qSW1bHFQ",
  "key24": "5T7dD7JXbYWVWsNTDLqTCudt41kdWph13EJ2QowtKbatYrJSzSH4LetFzLdtAkmAsj4VpZLFZ4HstZK3DLA5vkTb",
  "key25": "3ym9LwuBxqNSCsy7oLzxf3cafh8QdCWsm1arSrP8SGDyYpauEV5x57pwaVVSXumhLo5nZuqj3DEhUBFw53oUXxYq",
  "key26": "rf99ETfLDFBUaRPBF7F2Pq9pYv7xUascWUkprLZpNvW2zH2jMiLVfSYPAPkQG9jpZdqbBau2sZgTqXEBcjrgTvm",
  "key27": "2C2pUNJ1XFSUfQZf9APQbNJE5xiRaieyGGs4GnRSZZ2hSyYtxzW7yDgac3xm3S4xPiRSQSBM4oAY3KCEQAzt95b9",
  "key28": "2JsQ6yutFkN7fakDLHnh4ZecWbFbCin4FHJYrtYf2GRJt7Zd55PD147579HQEHG56rAv1CKk4VfW95W1GqB9q7Kv",
  "key29": "24uSUjShfse6b2MY7vmmWc6ty6ZMV7dcoHZrvcQmbLHh3xCDdC977QrkRj7P8VuvgsAuNFFEvUbduKT4eZysXA2y",
  "key30": "3evexbBpFNLPCnZkJct8T8nqk1pymCCShbBpxjvNPYutnRCJwbQuQ3nHVpJuXJ9S4LxN8jk2F55PVoAk2kDG8Byv",
  "key31": "2wtFVu2DoAvWzPhKnAfEpoh6QRXyLrxcMxJoQhQitcM4Xuwoxdq5JtUK2WuTFhMEoFkjTCvH6rJBc9pUhzWLEuaG",
  "key32": "mE3pXtV5bdM73msc2mJ7fGTeFLx7yXi6YW7tRQ5BdvymtDeY2huyfeqMEdvh19ft4NSkSrPYrJbybT7kBM2kddg",
  "key33": "HnFqj9EcmqbPQrvaKnGsPQsVyCMQjQNXSGKKUBhYAho4sPX7Uua9YntNvoMZqJTqe9aCKisJbaZQU7XcC9kt56Q",
  "key34": "2WVx5zWLp1du7czVehB9DhodXKzMh9iSEhbPNyX5VrkgKR76J6BXz1fkgjigSaAXvziJjrV2j9k182ZCoe99oHEx",
  "key35": "43MVmGxdMTsuTLXP9eq29MqgwHjCiVzXBeUZHMhVNiXtkE4A5Vry77qpqvbU4yLEWerKTUQW2H6dq6LZa1Kqp2MK",
  "key36": "2hcyg8Z7M8BYkfz9em8aFbU16ZRw1RYGHSYdi1G4V82aAyA8BKPpUZ6mfXNNXUVHnENrVJYjyzkE8cRtArSDXr7g",
  "key37": "4Gcfove2KTw3GKEkchTbAVxKTKUNBwJ188DDxwif279mK7WjJA18ktTHDUVN5daAWTfLrmqNuzY8jpXMTN5XEcbG"
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
