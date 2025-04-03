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
    "5HBGDtwcyiuTWHoNT3FVUbsLjBnRNNyzHJG7yBPMpbejWpei37tpKPJgbSH5YiuhfqZFAErSJXywXJDp8ap5Soue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B8JTV6JB85JgMpqUFY1kF1P9itSy4WdRDPtsFAhhxCURyC2Mvnp5iQpYKxvm89puTudY3wNGoxtDxbEHcmK9keL",
  "key1": "3XR4TwxjYpHjB9qEaEqPrNkjK9Jb5Fy9hpBwfEzyndm6CVWPAySn3Nbn4Z6NHqyPVPwuFXkravuemvjcsSS9d5U8",
  "key2": "4Y7diMSYvWQ5Cnzo6BUf4SNyRC76E5Vwbn3ZCFEyWvQj8E9drJvcuY7AfNn4ucTYt14ojHmUR6pX6xnD4T41yZVY",
  "key3": "5CMTpgbwifpK7ew8YRxFT51oNHFWr2qhJrwN5Dk2PZQbbae3sFHkCmEycvRgQFbVeboXQC6b9iKLtY5i2JUzi81J",
  "key4": "2wb54ffNS9GLmoAwg15mnMfqWtQmNRytoTmtPctf9hrCsrudPNSBq54Zk9BDGHpD94fKF8qNpG7LC1Cv7bazWuaz",
  "key5": "4ozHdCgwe5cT2Gthy9Eo4Upiw4DGSECBVqZBBvG4s33eYhAUFU64vXwcTGv2Jkq9xQzKDNe4j3Z8Kh6hRKadG6FH",
  "key6": "qkBLFyrGeE22o6sZRodJ5QbgBJ6wM5E78KAhMDgJ3BEeNFf56mmhHV4s6huDwksHRGeXhSYNtwa9d4HhxgzqT8L",
  "key7": "29wzNj2k3qKzd3QSoFosy4KQx57xDQUzwkgayVP64ZhXJqPUjRcvPqfrbaawSVdVydpFHAkQFKK6rXbxL3yGnimF",
  "key8": "t7FVDXgBJvKnh9LkCSpdeMkKB77AMGg3pe77FcXjqzi6KRYyUV1gWwaEM6F5buQVVf2mci32yApkuDzPVja3nEK",
  "key9": "5CmWMuFFQDPgEWNv7QpumSUoW2FStpPby5CSTK3XcZZxtU1X7oyfsT5Sw2NZ51Ks7RzJU86bjWjq5SAKFQvavxbP",
  "key10": "3hYBPVXfBMk1SXDDCfkmZunG3gAdgNNNFidhRkVCehWhAdp7wakdJXssjoYyqu9PgfdU7bvkDypu6TJVafw7yzMS",
  "key11": "4Bq9tEsGWAN6TmrhDXCSS31dM1SKpuDw4sPFtio9WmFpKBKsDm6ZY7FoWm6K2PVNVv12MgcMuwG3LcyopfERwHSg",
  "key12": "2jENc5RTiLPXaHD84wJ8kzbpEsKiucg3DLpZArJw9HuUvhEXdWtH2oE6WuruFPpRfXZ1SxQtqF8dExU95HLD9TUX",
  "key13": "AxYVPKuLL71FkuNfx4dRoeAxh969UAAzqvEn8nQJiAW2h2WEm2Wb91uGWP3Sdt9mQSn8L3yYCz8JHWPqJrZeywz",
  "key14": "5dGr5Bp87DLLohrA7mkqeVKVU9ggUCybuvxNjkAWNjXZmLDz2BSX8H7ywh52yjFjURENxMYu59PxqSjTXxzjyMA9",
  "key15": "5gqaTTVaiwbzjfgoUwtaVw4vuB8o6C34dNmkFdwGCmUqqU2JQL3wgoM8RiffKTdnGqNKp1VTpNeCmhVU3e6Th1Wk",
  "key16": "4XWVK48E4VoBxTQgnYxzLf5U7xnrFh32zxsSfbXzk8DY2jAFfER5WntukEmxZjm9mmMCPNDQjmu4Ksv4XCuMiJCh",
  "key17": "59m6qujTy4Fwz2BCPdaHwhQ1SsNHztnTHbZFNXdZn6CgCxc4WBmpD1FZHc5AdDVTSKxq25BsMLSjYRgHiQS5kV1b",
  "key18": "2giAgTuy2o2sURfuuAp9KUpG1n9Zko6YNDFxvNLtsM6phqpFayPiYtAaHXXBmVtxzw8GhtVWWaiU3N67RcsGeBs9",
  "key19": "2VHoh2shDSNVxpr5RvHhYCpCMQdrjxPRxN2ws69EiEj5snmCvhAS1axzp3UDeQDTXv4viepPgdv3PXqRYEkrUfwA",
  "key20": "2g5jodejpRRG7jEmyAYGeWcPJM2sF8eXWwWp1DpRzQDbiJGgbRZYNAg651a6qY5oajrVcWsahM546Xfz8PJFx1yD",
  "key21": "2wBJgnYygrgVqjjKjhUAeUUAXNtmHgSkK1nHMSMLC3dtmvdpvhZoeCmPnqbneFY2NC4MX8AV7aDqzNCG1BQahs2",
  "key22": "yiaS155i2Z8FEk6LTq4jGTwYKB5MSsBEqwvdVNe7Vfeahouc4LQer5AFgSw9cm4G7wRzB5wK4gcd3RW8oSU9Hry",
  "key23": "euZndjkN5EMyHm3JusvP63WrvLzgsPR9iBqNKc4GyimffSPCCDn8QjBE4J8VeweaTj8T3TV1QRTBGDDRcjdrhQy",
  "key24": "xcdnWoCH5i2YsqgyVMUcKWmxkdG4mm9Gc5G7DoR5k4WJbXRg2LJpkwaRNJDRX1i7ZRcN3KqvY2ckpcXdQuNUVw8",
  "key25": "3Rogq3sHsdcQDiR4YdkZ9BLJGFX5tx5BPHFDHSS3xuAZMYafxZG1AniyETeGwknmUPou5Cb9kVC7h8UGp39fWe3G",
  "key26": "61zckm4Qd7GRBkNqsScpkH5YcnGAjFtXXKnm5GoyzB12NNf9KkUQ6MjgViMvQvyg6aisiFeMVgcmE4JdvQeYaBnb",
  "key27": "2aTTNJnTPwxjQ48VBhcAQ99qJJod9q4Xz8P8X83YhFZUe7AaViBhBy9r6FUbvvuUcwXWXVjmLeV23EX5jqCVT8CQ",
  "key28": "5ffqECDNjsUXHEg5Nq9BkBUq9ocDQC4oo1tZ8jQarNRrQWpSFHA1CbWGpL73JX1ktHVVtguuPWL77wt1cK4MS9c5",
  "key29": "xyxPYGhWrUebkNCNePLwToT9aMczjHYGocXcdfGTJ7T4Ko1kJHbxwWBQiCVXeMhUd4zHqbhKZfz4nS9S4CJWyAC",
  "key30": "2oddUYRfZV3S6rxWrMca1mDxzTs39Qshmz6y4xkbxyJ1zbZgDTrto7QtepBKs8gTK2NDab1SUbTGTpLBgYiVR9AP",
  "key31": "3QMn9GEbfznoRRAatVauM1o9ydnDoX4P5dgbCYNjj4U38YThNsWPZ8GyUu5rFVLPJxHaG6pFih643p7vQ4WJ9WW8",
  "key32": "2JhwooN8gDojU8YrKktC2cuLK6jPLKSVjsB4UdFUuZLYHYdb52HNcc6wLA6ar4FYyoBfLVJWNMyRPhFsXVn9JVN8",
  "key33": "hEDQtDNx9TXMMi2M6Z6M1UTT6zcGV7yKWPdnnjxZZ6Y1tXzqVZtw6uWzdfPT8tm1eZH7X39a5DpBqC82pkBVTXS",
  "key34": "3T4Wsy1xHtcSGw2G1NR5B2FgU2MuH4zoW3kncPBqf9UanbgoU7RTDxvbM9FXFGjQJuEWJdRdznDyWYjHMZe1mut",
  "key35": "2FT9SYfnbSGfEc2fJPMVhPY1vSvGqEAqZKZ87i3gnK3fWTPDpFhnx4uNy2H1eW2N2TXvjZRGLuohzJnaahgC2SQH"
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
