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
    "35oapQ1ddvN2RdXeZopvbXzqrezEArPNXj6EGUzJyVc85d84KE8UZNWvdpx2j1vUrVmQdbE5wewfvXtQTgN9Hhqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WW94Yf4zMMzACdTa4qS83euoNf6GnQUKo6kH71prQLQYihLmG9JEm8EX8chqmckj82GLreFpRiVio6VRP5cc998",
  "key1": "wpm1Ecj6AwnpCmpvYZb7PzHsXnm2G7TL9sxxR41CoAgeYqsUbgXwb2LBVLcASarWPJfxMvutEMZ2d8KqhJFvxcq",
  "key2": "4nfYnnYeNJZ74pbBE2m8s1JV4NfiH3JahsE3U5RE7pNhYuSfRHMaaQR4T9WPYmaKa4nWL8hAehhjAA5QMcHg6BPq",
  "key3": "2T3Thb6gd7Ze4HAyCeAZXatTBi317kFxvVaNqE7k3ijwLc2Ponseb5NewmcrTUW94XCAAmd49dEUCqaMPHje9crZ",
  "key4": "4mmLwKz8SEho5viWwfZKbdArAyE6YK2SfutAW3XkebG1qDkGQ5rBfedJZeLdbcttj5M9azBCZ338yGTHLAWDpJBA",
  "key5": "2cvz8SrXd7kYnZ1KXBqBePTPWQERZLMer7iEPErf1G9K15VP9yQ6bnekxJpDw2DBDv6mtVMHPFkgBjrsRfUtBq7c",
  "key6": "5wQjVzu5deax9b14eKmargjgiYuvYGdyBNxz1aeQGfjpoicwpRdDto4xjrGQmJrB25xrUATmN4MEW2yUPJboZtW9",
  "key7": "5kfXNxfbWLFgm7rsomonTJnTwYbSUDnfqfxcW5aTEQ5q2ptqbHD2zQeNjKEZMRCuKhkAzCBkULRztDPGw6UbtXeQ",
  "key8": "4BBRS79zNB1itMajhwTD4Xfz5VNkiX5QUvb1mxV2Q24AtmM8NUHednH4yjy4zALqbzaJrUUueAGnpqJxHaVhShf8",
  "key9": "5tEv7AcS9R39R5rRAprcCti5kqZ4ZPXnu324RkA3ee33xg9sE68aBrAymDmYG822Le9Z4VJGp7j7ksx8w4wD7v2C",
  "key10": "2mMa2am9iuQYNzKxL9VfXCSfcafovFksmVV8NG71182veufjB2Ajx2XkFEqD6rojTVnCz7jSEZV6thiuNQsCp3ig",
  "key11": "r4MvPp1hLin3AEwQh3B5fobmRJGCWsUe5VuLX3JnJv15YwYV4y3ApUccWWtcixv55dnnvL5tPLooSqRutBkL8a4",
  "key12": "4iAEcsyqc6eVGKB62d6h4g3Xm582fRLbCyUXFH5CXrrsWtDKBzhtSBzcsi5YzhGEq6J1kHKvaZqyopNt9LHZk2Ay",
  "key13": "2f4s5z265wshLj3RPjJrPT7dJa2UA7whJRckxyf2wgvUDH3JRfvkV97oa3LtHFqyqbFbLJvDDmKLuKYWau3DrLR3",
  "key14": "WTLztC4jVb7u68Fj7HvaYh7FSyUrbgEGnmGPa5MtybqiTg7wQctePZEMU7mpMK4uSyaZsLPhF7EvNMxFnHyNijX",
  "key15": "2njz5SRnbrpfbnR6u37woyTNqhj4cNtQHgPSn7Vv2uyj6iQsgf6RA2P6XBu3v353GmwoGgHM7JB3tzc5ihpqzsBD",
  "key16": "4HJYTn8jqd4uD4Zd5aGdSxvoy398gHKjjGFRUNMaLk43BFPVheWaTvyCBLTKB99czDvWaUH1uGXY6psfnCjCKeXY",
  "key17": "KCKDtyu2qeR6z2PYQny9maFdUb49EhC7e33dBqrLBX58qNWgKYKvCkN8wEYHaR6XDGHZBke8DJ16rbakrVfu8BU",
  "key18": "thAKzEd7v9EPwjbFLJ1xEHjHkHvp2RMkpymoAgtqkYwwR8nBgCHW2y7NBJB7jqFynkQzYFrKjRG7zESFuqR7Gtp",
  "key19": "4mbwEMiRkzwvzQEvJxARj7cBtnjeiBUNNp3vUaRNWnEu6wVhXNQUsGV2t51dHZPi4VKtCSpZNNsNWYfk1Wa5cHQh",
  "key20": "5i4VTsZ736DqQ4C2a28ochZ3WY6JoXgMwD8pENvCsY5s1k2kfPNQUx457ST5W8Uo3gssouqcY7Bq7FHJxS7G6KVZ",
  "key21": "8Xgr8ote2UTnrMi6xXXH3eBhEACvL8At9Kzb2YBPuiNWW1xBKADteWKKWKYcTyYGjNVphv5ktuWcikQrLdXCAax",
  "key22": "2JHBLw4w9aL9jd5QoCrSKejXeVEFMLWp5qkTnKDaWnJvC66aMYkt92Ku2BEXEfmkuy6AK9rhR2Rd78LSXd4NHKoz",
  "key23": "4KkMAgpPr9nPHuaiDAi59m9jASpM7uAR7Y2si2nm1nihUoi6H21ASof2d9CpUua9AQFadpbhxaHsqQ4bYjBK7U7h",
  "key24": "4ypzJbCmo1g2PxF3naWpYCskfNybY4XVrzqd386i4j5ipAykDxD9KbFNBc6y2KPHCzS9XWFBhigJzUZEaiRDDTSm",
  "key25": "5nEaSFfKyGRBF4fNpJgfqapqKanbrFL9PViVQtJzedggC93rMinVEoAAvqkwcQGtP4anjxnEPRLYmgDX9nwBY8nx",
  "key26": "28AdvkhTXP5wurjBLP5MTm54pyUtMqSM4GMGaMDmmrYNt1am4qw8u73MYuoYcEA4pCo9uRw8dK5tiHcmfj7cG3Y4",
  "key27": "33vHzCiXfa5dLpe5TmCEPkf1geSE61eCTAVWvLyF5rj6kfSoGiUt6GDPxA6XAd3QUNEwzzZQ9zvJjM2vR1cJRgK7",
  "key28": "5J7DnLcX7A83u7ssAbz5xSQe8zyy6JZcVwSur7hSda1WfBYjb9JxSFZfnGXcR1ySsMrpcgbJucH4aszrcTuo5h8s",
  "key29": "5e4do6UfGB6UFVSfHrab9YKa2jhfZkLkWyx5cnBrFQLNnHXaZpV2T6ianM2oHjW5fnmfkL3NChPYBYLEvh1r6SDh",
  "key30": "5LduyEdpHcQ7csxW9JnDNbpMkUz1wuyFmowdULNDHCMQUXssMRDMXPp7BeoTpf1D1H4k3R3xH4s4Kc9iALFYxsjH",
  "key31": "4MfBaB1HtsRxDWpbNVmz5Fb51re3qQHuMSZup6kM6AihYQHX8F4WpbgQdLdyxuoj8uUNi9g9XFMXHzWwJkx47Z8E",
  "key32": "5yiANYYxGhnXinqADQZhoc8XCGwXAGVH3TSjH5czVD7YWQXrqyNRQD1fzghNMwc9M1TSL34MQRqZnWTJDxFL2APy",
  "key33": "4Amm5CkrzRzTLpj8yxPDj2Uh8pGoS7R8LZkuFpGA4ZJWpqtsSwKgWh9nJjpBqPo2gv7thU1AwzjFjxviz5ypZ8bp",
  "key34": "5nNeUCqbNMGPue2Wb4TjRa5PDVu5qXEHvZY6MxW2vz4Qyk8MvBNj7HdC545NGSyR8bfGnZWRRormgRod5mbHXG3Z",
  "key35": "23FPD5Q6HYoUQhW6wj3tSVm5ffA2FuxcuC5PeUiHELtWWW1FyMNiubFdzB3sZDrbpyjMoxH25mYiCt9NQzW9RoAb",
  "key36": "2qZBd22p36mNLxDEtko9F3xKuWuvVeBTVywaUmvrErKdCRBLwEVjcvvyeBZkuzXsY18hakTJNVgEqZ4VHQQW5X8G",
  "key37": "5zCGgR6eRJMZbgUP7PPfUE2KBCvaq8GTA8bYa8tQYGwMLkfa6YMec6wLu7KuqF3UQiDsqeHF9xreVNdnf1Ad2SKX",
  "key38": "4AGTfkMn9V37UNT4v63hsQ5au1XtunxxHwWJkUQkG9Nc2BzRwD3pBSBcMmrQjnvLhU9ccu6QCi6PuPWCPL2amsuC",
  "key39": "4mu2jGo2pKfjquoyZiqgHM9iXA3WFfKwMTWvjPjQZcw8g6mc4TYh6dYrEuzMBPmj2dVMzdk6Bs6fMMPvL7LnR8LP",
  "key40": "4Vad3VehacYgApZQrGL3TW1s5w3RjwY2eg6wfgeBJ4BWa4uhdocUMoQwFrTr3hJw5PpDcC1om5jKzi3QwbteAjq4",
  "key41": "PVF3N6PhPcSwT3XZqjjAavTF6w7njLRDtvaubxJ9sdrc1qrzepHkNG38CYXN7ZtLZ9aQEEL916A4L4cKfufjntV",
  "key42": "pRiWFiHu4ounMW43zM83Hz8zjf3GspbZgNwaJNEcvMnauAjHsicrpFovWQmpSHx2G1xpPXVoVg1so9m6eBKhnef",
  "key43": "5yJ4BknFLa1hqGSNhT7L2njoahcP9VQjSuwpNeh43c1jsqrctxcv6E2ykJXne5c9zX71LThQ9URbfUrLV2TF9G2a",
  "key44": "7ZhMyjQsz8vt6MB47K8Gpq2WJMx3Vd4ktdhcf5cTa8aPd8Y76UUDiLLWdQofG1ut4tGbQFaUoZZ6vejrr2db129",
  "key45": "2DhhY43S3nSqcweqnXSURptifEM6EuzvQyBLYxg9bicKrGnmToFGyNd3d29nrA8M3xLnJDSJT6DHrv6PpHaS8ywv",
  "key46": "cZGT46gzXqmAtFeQqpU993op51xp35CSHFrCd4wL7ZRsZqkxdKd1vcWVfR8nX2X6fX8wPgUgUmN1t3Z5SpQoyWz"
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
