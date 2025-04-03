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
    "61tvrj4VuJX9pso3cgXiGGSRL2t5iJdTkjFrSoSqerRFfXzJzCLypMDe3vi89gUcFnesBdgCv7AqD5zWT8uZKCpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEattngeXw2CkgBKDXZkyzMs7UtXHtcbHcatcgMySG88iUFRn7U69gLxCUk7Cqw56RaBKfktzzuFzpfyMrbWVJp",
  "key1": "2Cg8xR9d9T5aMpTJcrZwjZ2A34hotVh6c8ZesfJeRvhYrX6P7EqJrnh8gKFLjewn2ENoNRNcwh43fegGb131fouZ",
  "key2": "5ZA93oVwv7UQK5nbYw7tTomB8Q9AsuSs7cwc4KWYbs5WauaAwJTUwoQ5WapoTELxQih4K1v8fGh4WR1gnBb2Ek5u",
  "key3": "5QRP6XeTEY43XGBRYesrRGs2R9sksny6CgB1hL4RYDiWFCHSP3FTKEZk2U2UFCrZfxjRtDXodNb42KYc76CgqKV2",
  "key4": "2ovJt5AqDX2xXpopjJBcV5Z2HEjWpqWTUJrkU76B31dmyF9KmupjoXNLsysmD6ongC5FBb3fsjLCo26hmsVaHpv8",
  "key5": "5JCDZ7gReQvRQ12UNLYYH6yTXq2udumexZVe4dqVw87cDrHckQsnLvfabMKBxxL7VQdrctYwP71XML575wC62jgY",
  "key6": "2AMqZC8t1Qx1xK7BCWq5RrkvYhAcVEuQGavNjtpKQcYnevMcu6XZdpDqzzu1d1FUG9MiNEfYGEm32rWqpk1uxobN",
  "key7": "3GAddFPwDRnCcQjFrcx7FSjrtCdvoLwY6eLx74QKwkgQRWYGMKTwb3FmpBKtkSQJ5VVPSRZvs8HjiVAT6MYSHGiC",
  "key8": "3oYT2tsyNzNS3ALNbvkKKeDvDwRHXLvPWFC4ugmz6kihBb6LFn31tnmPYGrsEz5o4qaxC8sr4ivFR14Pb7hiiWRi",
  "key9": "5EC1P1wppz8CVX3ydhJJmYMKpgk5iWdjgXW4eF8WPzcWRYSynMZzyzrMbXzAiLa274Y9WQbiAjPbRoR3UqP8kdd3",
  "key10": "5y9zietygitCimdUztSFQJhTW5RBycUspNWZKTHsoZWHgLGBRnwjD6n3sQk2V6BD62X29Nt1K1mghLR2cQefBqG8",
  "key11": "E3xGs8nzhwoKQG6rbSLkF7EYFi1LPTeMfysahHEFiLcXEG4fELqNpGJi79yWA2D2CFpkstWS7Kr7BZ77v3xnR9N",
  "key12": "EPJrj4zZjtesVH55Ns1muU5ofzpb6bPGTnUgiJVNk2G2GCEcLkwMdvixQ4pQRAYCBi1Ds3VKM1NABGCBQtfuxui",
  "key13": "kQDwwimxfG4kpVg3DiFeBi9U6hz6arBrnXvVViykpm8Bx53wHca4npGKnPdDxEfYDaH75YNEc77VzYhm3URgBgW",
  "key14": "EZdD5LsCkSST2ojyfYkoHqjEbjzSS17uaGtWdYLzbAso8BFt5ocJNzbAhL4GkcymvqHBig7GHbG92aa1inRwKZ9",
  "key15": "4JGbEAh1Je1XqmTA5uGARSCmBekH9tD5aYpBKcsumYj2sLswbrBCCncSSLQjwYDUCRd2NfcaJisJ4AB5n7zqxQVf",
  "key16": "54FzhZBdV4AW8bAAFGsSYanvAzjP2f9uY9LuYGYP3G2qD9D2mTBEsVDgXkajjw55yEYjquhtsqXoTMHxk2Dhg1eE",
  "key17": "34nybL7FHRzknTvkzXyiPesXyRY225Dntz86WVFvp7s1WxQfibyN89roC5H9BU7YmXXiT56113YUeDwwVCTJkhTa",
  "key18": "2XXfh5Ptm6bHQoyR75cczrKgcZD6F9dHrWUvCrAN64gb6sY88CSdXa6QAjUiqeiJ7vfTnqT7yC2xT1CxQQKk86xw",
  "key19": "3hrd6fBuuY1NVsoDHXk1FBnU89qgLX6wRQU59aKS27WS7n3aHRLAJnHjCo4o3jBFarLZB17htpwVExv6hN7Abbgz",
  "key20": "2ZPLYjxGBYz6nYxt2otz8yMArqf8ayAVhtLjBbsb7NA3t7d1imM4TZBcGU1DjtcduA3yJUftRuN19gDgUNdJ43YE",
  "key21": "2VGtTghnhvQhpE1znJNnt32r8d7bn1wvCXVZ7LjfqouAuZguY7ET8EZPgSbW2bqWoT2LKEsYJCWR4Rc7Z4CQxr8M",
  "key22": "4PGuJ874gWqfXPBKd2YJBsB62MYFmDEhUeWTwhkh4V76ucjvAHX5uMKYR7XAGL7iaEYJJhRtCXHdYj791bAcRvZK",
  "key23": "3wrzRonCCxoKBQAhHq1G8eMmp9jTGthze8ERMwHgkr6vbUxMLYszJQBJqJEyMT7uM2MRSWZsEhTUfBSr7RWgFcM9",
  "key24": "63zgUUNeEiPp2PQTYx159Yj6J4ycuxdUNC46DmpFf3B7q64YJ1oSQwoUonpi81REZVV1ZqpG4CZ14oQQLg3AbQCa",
  "key25": "58swVV2nMd4yMLVZVGsrBhBTyjSEPnCXe5GSuxBMNYtpE89WSoDexA3H9rR7nijijcDip9tuYSJTb6186vYUdAE3",
  "key26": "26qArBK7iXsc2KZaMCyPuMfRG3kFDSX6pxdQczDkStBhM9u3ELSmDmq6UbiPMGiYhMYTyc76iY2Raay8wUabtxJd",
  "key27": "tY5XEhntDaMPG1v3qoxjXGo6WDMCMjiv8UaE3t159hyp2sUjJ8HXBMzEhzWMRRgEmzvBpR7NW37x8NwoHFTMiej",
  "key28": "zGyxN8y7b6X5KWVujWRRTn1zjaT1R52WEbDwqeA997AsdEcJyMFNywbqg5H9rmsytWZ3RQ35EviJaKA4v1fL9mq",
  "key29": "5B6zLjv5TixM1g5fJ7iyVGBoyMZiNMi7hqKsqGq2kKEyKmGmQ2ZoeLCpExaEkgdTzz7SswiPSK1RLQdD7iTEpX6R",
  "key30": "5aRVwKWYJHCdYrTGgminPVbmXRVeWznSzKFhuKkpGGRoWq19JLjDpLHsut4iZk3xTy5eSyz53QjG8hAcsBgM4EqK",
  "key31": "5Xd8NWoj9GzNdPz2kZp25TDkrwoxgwy1rMocKrvHw6J2sUH4bXsw9sFpvhnZYVcYxrEq1h5zoRLd35Viv7wqKBU4",
  "key32": "4neivMqYUwBgph8QknLhmaoLvfaaQsDsFTRi7gxuTo4mAchvXZGbp5CAhwnLLvqzJcVUSAtzDBM9fLMJSU82cWgc",
  "key33": "2TgRtpsPB4hVm6PYYHxVkrdpqoThHerrz3KrabkQQMxMUEuKih29jiSuGhdBHVA1JmhGwS1AMdayGvV4W6xqAirC",
  "key34": "cCgxWrWzUbL65r9bW1AjMEcq6BEY92jrN4QbCPoxXVokNw4K8RZmkRE8KsER1kab4mvBZCt34Qt9zKvBtudxAVp",
  "key35": "28HommW1kWMeS8u9vj3SVZZ35yQhubPFSjKQVhonJFGdbvYnoBzTwJ6Behi45QJ2xF9sWtvfZASsmutbLBCtLxbP",
  "key36": "brdSWg3JGFJwP5gCMA6yxkRxuvwhLkd2t6emXEe7JL8qbk5jxyh6KkcrE4nMqywdPdzk4Z1HQm9Gexo1EEFiQVx",
  "key37": "5qJd4VpdcNb4VBKbaAtBemyNn5uxfJ963RLm6SrXpgtq6puSLuh4d1GK4F6c56fttp2B26PWXbxe2jwjYCiajHKw",
  "key38": "5VqcBtQ5yWFKcAGQsnNZeRKhusdZEN2P2jbDvU6YnKiafbGm4fsoiG18SFNGCTZXLnzpVgNbmmU6u1PoQF73cAs6",
  "key39": "Akdr1CGweg2BAgo3WwzFbH3vdLTZva9tJHtUcxnP9FA19H6E4VKj3M5VY8fogqjN5auSLHB4b8KMK3BZBPgThef",
  "key40": "3kT8xo8tdF8Z4CuLkFrhFR9knvhzNHZNbB29Avnv4ZYah75pPqA1PPJ4KUvSu36Y6VUKWn2rUWv1cH1pJtjZsktk",
  "key41": "5H4ZA29u219EJGHV7SrepS9CBHeTddYXfgca2dgGB7wFs4BYjoTuhFMiwQpeM4JSMQQM8byHC431tx1D8YTzKprr"
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
