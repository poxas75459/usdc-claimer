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
    "3acPyTAgioDJVsUXjoYGCZrZ9NoxmkGBvAVohZUqpNNRC8YScSsjF16KUTtrenLwTYdNbPJLYXdu3JCXzdEPbKMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbhGq1nyGzm6NDdm7vyR5qrzSmS76YY8C8bqyLDXN4J2mfEza6ytwXNp76BYvvavoEHQtLCLYa75iWAhjXYmiyh",
  "key1": "4KsXx7sqF2w4daD6373yffqjHCGRYTbNksUt4gXv2wUSaEnVmQSr63mgQ91XPHNdN3CxAP7MxxwXPu2MMm9bnxEi",
  "key2": "533hJnEMk6d5Ffr9fvVeHqbpbBneafeJyXSKK7s7n9fmAjRnJ6e3J7N4tYYhiVnaigb4JkdGDByqp8kiJrrbCWx6",
  "key3": "Rc8jgSf7SxtLxZzJJeZLQsTvBm155EA5PvhvcXW4FMVzStoLek1NjpcGynDAbaM5z5tt8198Xoq4F8sQKoxCeQN",
  "key4": "x6cVmq1xpbaJRDwbq58A5WPDZRAANTVR82ex675J9PFbsmitacZEDV6qMM2WfU5CajZM9zKCJJEwooJo4d2vCf5",
  "key5": "33SSqfU7DBt3QgyVssWgJfW4aahBgWE9TzUzMPVsQNrC3JMa4Ub1aG4nnXBDwC2i4dQjgb5DaeD5deHoXTbpFmFq",
  "key6": "65zVmTopBXfcBHoyGcxYF8zZuRHPMFyBzueRJtDW3NRiaZyYPNHf6fytTwzJtXJn7g9C2od7Jj29Aiwrw3xNqwwv",
  "key7": "5QvHetkYBQgdtE2qKrD1Mam8yHAbLvXh4SNNU1j7svRyueMXvh4wrTK75epzbPuHbjcRrpuvXwFLq3MvVZwXkZvD",
  "key8": "4D39EUc1F6cvFztNbGou1oGPy46MUBDSPtWfgHPALa3qvswZw3SUEfRfzezRL8NpPKd2iMzYu3mVqBoUyVQAsBUf",
  "key9": "2PyH4cyhHuijqpSEruEw6GeaG8g7GScpUxkW58SFUCVfRLubL1R6fmxuzo6ARAWLJ9w6qBhVk9TY17Le3saZGyLt",
  "key10": "2yY552HEcKdyJBux7epiDZqvCDXJ5mGHYAQQL8RM5rEUP8hsVQUTVJMmvPMnSozkBhFJJzb2V6SEbAcHvsZB1KEY",
  "key11": "49HWeLVd6FUXmKMLYFLw51oKSqm35LdBKEGcwxc6MwgPuMi23kQsMUwNhMUVNYiwTXgpQm4o2eGNjX36YS5JCxzx",
  "key12": "5SG1kdmsb6jHNtSKvLWvcPZGtq1DuEZN8MUFVHfswG9qPmrSrG7xJ3Kuq3oYkZ4w5YaGiMEa5Cgj1tGXds6gHQfc",
  "key13": "wBCqpjoWx5J8yK7owQavPPynoYPdvDoHMd4zdFqqW9DUJTSp7BCb2ywY1LyZofxhSR6jANbPap7kN88z2euV51F",
  "key14": "n5XQhxJ9DVh7t2AB1yFRMmNMtk4WMToNpcoSJSyHtAH7xMy3W3bbJNVGWDbuYgh3uQGf9WTtuitPPx2mDbvb19Y",
  "key15": "4GZ3nAtaQbJUiARoRFY82xBxK8au2keQ6L46BhyNhsVwnDady2d75phybaDjhzjye2wKpkuRfnLBBTTBdakkYoEF",
  "key16": "tAV8ye4mnaJnPj1C62TdzJFeLGHxpSe5jVnyDYCFioerzk8dtc1LFzwC9v4MEyaXTxw9erfYNpe9D2JyyVdfBYD",
  "key17": "AmQpGnQe5D5N5LzfHWgGGRS1HeW9XmVQqAgrzAbFTjiR7hgdK9vNh7Genuh4x3frNJuDtEEKJHeuMLrcDA8wwzV",
  "key18": "2Wi8P7Cvy3pCvLEf2r4XteDEc8NntsLSHBCAX3bDD7cY6sBEptELeGHpMnkcWZXctoK3aqWqScHpzEY117SoNhJE",
  "key19": "2fHFUqR83XpejukNHJhtXfZZ9sDxpdWVqUCRFZv4buJ6L8xeMmQg8eXtMWrrpiPRKkToiDitMMhYQ4Z9V62c8zyP",
  "key20": "4jgkCh4mkN46XAQ5TKvCPG7Gwiv7onDuoKYhWXzpx4LnLuaHNexpqmqoCLPjisgqvFjQxHTox9RNMJFgTkqWqRa4",
  "key21": "2vpf7qyxAkZCzqaBkfbNoqtyZ7DZ6QF3CEqJyznqpcVRhq2dcHdK5uieMABheXWDRocb8ZxsNCiffU8BFSygjsMC",
  "key22": "3vZWZ68pWutR9Hspui51pRAhrB2nTqgoXkDzpn5xbrrQ32P3NNTmXT1VdLypnToEoMdTUyThNNybuF4c6ion3yti",
  "key23": "4CAVR1o47iXdi6dWZLqwQjMEiXXmPbZAVEnrARtRAV9SLRwLjv6acLPSfr8RhTnPrPxKHZGK8y3n3dnD4yg7DnJ6",
  "key24": "3Rj12izmx9j77U8ZV98GtFMhrY6PDmoh5nzMnTeCmRgHpib1h1pYZEfeNav1hxKCANnSKjvqFEiXsAnnSdHHkxrq",
  "key25": "3tyEo3cWCuY4QNUYxgWcqZ8WdXGFYG6oSb7fX9fMFJ4xMp2kaepmndfoqF7LuZrpr3idVn2DdNP4w2HMqVYjjTe7",
  "key26": "5TM6KWf1ydGHPVY1T4MprCgYcwbd3DacPTwpmzLxLFEDCvLb8QwYQ4NTs7ufAWwnYxqQ9oQi1cGvHFRsQMApsEgn",
  "key27": "5raUFgJKZqyKdKvz1jBwuqxqkuMDMcfzjFCNTv5C3CPKExLHNqTvt9eSKTGmaxvUyooPvPvUSNURpLEzT16gmv4t",
  "key28": "24JyCsBWujyBnBkXEGwxnaCgtMuyCy28EoTw4eYxD1ZrbAvrXMaeToHnEMGLC4fcKGqdMMeZWdYxC7dgcBcLXhny",
  "key29": "A5qxtz8y9K8fEzhdvMyKz24xnZhHSsc3hHyr7EazDb6qqdXShuV2D7a47cjVqvjseKbm3XDXgxEJbtouCXmfsfP",
  "key30": "679fJ6BEA8oLmqPQnrTptzJRdExsixvhEFq73ev5kkTY6VimRf7AYwWJk2CdMVVMz3eThgxHrpQwca2J9WGqg8Ck",
  "key31": "2vZYPeuYfk5TgrrDdXPsaf2BbWReYyQ3wzeBoxd72VjEHBi7pbFiah7YoitWBn8DQvZ4WqYoB4ZT3Dj7Fsrkt9hF",
  "key32": "3wgnTYqCPLbBv6XZ59FrzzLAPaHSy36Cr7YNJCynLh6rgzpDQ5q2vXtLPywfq2rEcbWbKCVYAZoSvu9kuFLckTvN",
  "key33": "5agiomHRbJWgk3YuSfYwTbGqcjM7mrKGphkNERjNddaHHsyPXX5Sgr5VyXPxWtCbz1FwG1tmdY5N88ZUYuvmgXm4",
  "key34": "5gVAd4nXPCdHFJy6B5VizTCX8iji4YtLcMksiFKm9uXX1UTX1Es1sHJsHMwdwE7KFkHcyBBqnCFSLtj5kn7aVfm",
  "key35": "kAPeo1EdiAderuXhmxHhuT61MtCdL1DtPkiWg2nTUbzCEA7DMsArghtc2MguC4jdMJF1ES6Ut5xS8vwfc2kywJG",
  "key36": "2kRGv2wnnMmd8mxgpVTNJHr7eXxYF5cwi2fpPvVvKw4yAnPqWhxP4xrQQcQonsMw5cyGMuTsSFeDKEf9Aw6C6XzQ",
  "key37": "2Gvz1hpN6jYE82qNQNt7AVoMh7kaHwB7fhnBYnJZiPp9PVTzEJmJL5JMShHhpt6QGTa67Snz2qp675hciC4GoZu5",
  "key38": "4xtwn3KzvxXwa2QNUf2ZtFyn599j7Uoe8K48MfR7iyTUdJHfMTWfWfhmi7V8qMoVcoxW4j21ctjqLZ4QmD9iNKFF"
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
