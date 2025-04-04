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
    "5Ew3sHxjKqMSLQFdhiqsKQ9crs5KHj1mxCsmDQY91nhzdMY2Eh7X7PNsuSmPnT4Th8G7YXQymZoTrEiVwCHhQnMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lc7kVgNYMm376rugLYToatEd9WepRucrKf7mxPsRPnBVHWnFNoWzQy4jkkHG8akq7k6eBTHqqbXjAW1RF3AYDbL",
  "key1": "66JCDtnU3kvJbgRDY7StBpRV6sTbuZzYKckqj8u32BMV2f8tRoZXCmeE2prK2tKfwoHWdsaEriQ2TkjM82Z8oBd3",
  "key2": "4bYgDrqLiJiNiB6BJnYv8aHqbNxLJoSdgb8dZarWBZNLGy9sNJx6FnwJTXzbyecnyrj8kAJXz1nnBe7aD9HAG6Sf",
  "key3": "5Bx8DafBHibG1C2s2oCE3XAzh1ETGZ2bb6DZeda5jTbKa7hZjB95uEPBgGowgSuHjtBAvvCWqFFiVbKKD8jssusK",
  "key4": "4CDwgfqzyZdT5tT28DsqT5D8nhxRvTxea1NcdMksUx3yKeaK2SKmvZqVWFx6pnPiWYyuk1wcqSQF45Gx75zKpc9T",
  "key5": "4Gk7TddUn4YBymyagd77ri9nETTYMYH3DdvvpUedN3Q83YTPHUThgMNKVGsZEUVCR97LZBiwM6gMHe83JEwXSwU6",
  "key6": "4KQG3zi9zmvqzYetoJxB5c9LPrApkomGfe32A1TAzLfPfMifzt6Bb9SUNpgsGVDe2MjhRXHu22nuyTNcJNz9wAid",
  "key7": "5E8gts6CNAPdztsNunfERxwThwzEfuBMLJRFMGecoSzY7ZA1kX5HyByhPGHuPfbpJdu63junaKmkYZPcdApZo9KG",
  "key8": "4JFzHsvtyR8Qj4ee5NaZmVwVyBmxmuKitTgKJBMNLttjMqRAoiCm6HLaE4dS5C5Nxn8zWULHd5N7KhqbdeKEvSkj",
  "key9": "5WCSZ4cTj3pZZQXWHXYFfNbtzw7GLByocixNttTbPz6YX37rWTFC3gq2GcewAXop2UyQ5D4uwR97m8JhYq819KuA",
  "key10": "4aq65LHZwvJhY5FE174tRaSWQuDALFmUKFFRAxLUbVHErjffKSMLiq2qQesmjAYxgyaHVgnDnZpzpFbpo8rf2EHd",
  "key11": "qnMcQk6XftRgwyvZdNtRqccmX3HN1sxC7tKq7wLmKKKaCRoKEm11TkYPCqxqXFpEyP2cz9htVqkbWFo2sZkAtKW",
  "key12": "rpnfvneqbFpPV8YziKWanDosd69zZHtyeorzywUGwm8d8TtUxkmr5fZER6qsbnhfc5ZSdyWBYym6pry9LKUY3pK",
  "key13": "9qMdvpwScXKbeb1Lki8dsepwaxHnXvn69AHK2SrzmmdWNx4Smy98qTazXFFpH7Q2QLGPYJpBJQzNw2XoJPqCm4e",
  "key14": "3SxioahGjrEVenQEyPLHjf5vSr7Q96QerzZ6ZW6gwqvrveRGpGfyvxMiBbEvzN9sf7iyg5HKxPBEjHPHTJG2i5c",
  "key15": "4hTG26rvbs778VftVeGsY8J7XddhdmLTZe5eYAFj9A3qNVxqVUuQDV74d1omHMHkn4erRe2i8M6bEsvWgJXFeqUs",
  "key16": "3q4X6ivyCDgB4AVvjSFFsxafqEzeFKn8woTiiPZqi5ps8Xxytu29iCDifGY2DMBkVwsbL77LqE61KijWvMuwkzDS",
  "key17": "4xdEuJPvXZNvnHMdRst9vnkvToycxLWchWSJLBpjsfALBXCEfCoWMENKnvL8LGYHtJQTHnfQhrWRpzmUE3CrMexG",
  "key18": "3MrZPiZB68xFRmWYQoCka4Nsg9wirTknAMY5cAUQEn9krrzHUZB3fNhkLgXFyR5ppFm5s7bw3M4HsGHKKVjiNwHf",
  "key19": "SWfuTTFT2KxahbSp6Sow1ioggRCLhZpfqaLcYEgrM92KcKiw3uk8Kk3242ZTxN8rTwaQtf7uSCZF1YJvUN8uq1H",
  "key20": "5BNDn47JF3mcgj77c3WXrRwk97wqY4yzTmVuXj85WJQhNSt9zzzX9gHqTcmavAiLjCiF1EZD13zbfQRPgi5snwvR",
  "key21": "1tTSjt7vPDeSB5TkuJDtWuyrgtDaKrEacUTFx9M1fyhQrAHmNyKgBrxtEWcRDoKX4PRCsSkH23AjxVFMS5fH7nm",
  "key22": "59UqgdFv8f7YK67VdhYiDLffp69zm8S1gLXsByCSZRR41nXZ6vGV4rWtjo4hT2s5KK2MuzcscwWFbvemmiyhG24g",
  "key23": "3xYjHYqHf7DYVwN7m9nxzetJ8nRixwbnru9xDz1EKeRaZuqCsMtFDVxX1wqMgs2KEWMMW5crZ79JkKexFuBodNZ9",
  "key24": "3gzquhvvUw858PCcsiioQwFN5aj2AFwteBGeeYjZfLM4HFy8kACZVxkTrQFag5wenEtUzDhMsuehCqRXiX938hny",
  "key25": "XETsZuJV5B3fg8Ehn5Qy9UdS9Ci3an81nPmq9uZRAduSnbKqeDBYicoY3458cuX6Wdr7KMSZ7aPRt5Bvz9FmJtq",
  "key26": "3sV2gRN5WQEAmjJnYHqYnTFjcwWya9sQ7NbB6GgQKoQm6dbGy1bNgFZGcxpKPU2bEVgtca32rpKyVDB95werirrW",
  "key27": "2MGvD7Zc3vnn7kcM7gyey71My1dhg7pwv8cSkKRMikzWaffGKWceewF5ShFtLYri3XL3SJUYa2vCihQNR6w6XXZn",
  "key28": "62zmH4eELxZmv9MhLAe9KnjjSbrnpUGY9upxiqiSJztf5Wrd337GFod267FLWLyNiYQcrtJVPwPMEz5bQy4tPsdV",
  "key29": "4DyKx4TQ1zicvRKwa8DiNP2BtQT6qh75wWwajQk84YAvX3Fy7r8yJvfn38Fz11hZZzYaKpMhfpth8KGBfm52Le4o",
  "key30": "2cHGY7S9gAvyJLuDGjSHm5AkoKiv2Qm378NTnibV7849tSNnEVhsC7jZYNDgn6wdvok5PCTVFi9uBYzqq2WXeiEX",
  "key31": "2J5CDUKzzJzJypWFcRqKndVpTTRr3DnYKy6fYe54s9cBdip4DYQzJDyzBRjqnX4SxNg7JDpDzq3QFqZJxawjNhJ7",
  "key32": "CDZKnmaYnUCCZRbnTuZY3KbsALqZALt3Qs5SJKSJWsTy3GP1z6Uz1W6mSzLRGNRYdqmEcr5V7emgEwMB1gvEdwx",
  "key33": "56mJwikWD7ShDm6EKy7emocaogyxSDTu45thbkCZafHbcZ4kgVmvhezGxz3pgsBAkFaAc1PJQkfUhvybkwKuHQfT",
  "key34": "3aE2krcU3NgsoMrpdSm7T2GokYbdngPvARjjj8EdZ2R5iF4cqSTtTkCzXxjVvoBwB9QMxRoEBWZMimArUMxk5DH1",
  "key35": "5VGHifrz8EUbGWTfEBXgarZG6BLKyFaRxh9FDqcL7xEiqnTC4rYRR499U6TBYjHrwgHkn1yXmqwVy1ZVrmjrteoh",
  "key36": "24V5CQpd7fRfYhgXAkvr2D1DC2UFKqWKooSBqYYr4wrJxChJYrFzeJwVG1PbbXSafEdEdQWjxiH7TwPFDveytVVe",
  "key37": "1giEdncHWSTG4WSgZwzFLvGUbwHBypfejRjSwJfXUzrCags3LnQUwcZwjWeHFVDPxRC543eENcAHipYRDPR5S2P",
  "key38": "TcAbYtz3hZCQBB8xAK6VjmAqUmpmFyj1J1cCNurdsQuagGWorvPF6TXskxFgUGA4vQnC5ViMgWecvuuBtU8BEDd",
  "key39": "5R5NTTDpAwNzAU9FVJ7P9kaCqU2wCF5zppRGphPJckXMPbkHDizSNWExnUG3nGtZrTPoKawgK3eiYkr9NE152KWe",
  "key40": "2BrRWoWSjmFMFkheaonZBkbfLsBELiUPKVgQcmzqg7aRvmB6hSq4p4osMJyW4AMy6ahnoDoRwAHbRnTQDFXTDucd",
  "key41": "3MaDwr6wVUa9HMFSd9KL8qWGWdfg2TxMy21aUh71UMkRm8bYA2NMDacXZsKfN7wKJ2q79ogFriVgJ9Zvo6yGFd4a",
  "key42": "pTswNNF7qy896nKxHJQ95AUUGKWEDfrF9tRJDjvHz3GUgZE2cF9mwAhqBQZ6YXn2mivydh72e4jFwLmz8RS3BXP",
  "key43": "4pbtFYTGdkDpT5164Sf8DmCux9AGgkNwSKYzZENMD6zwRCj7xwT4tJTVusMqq9N8a6AdwAJmTgHAmqnBJBd1H2Cw"
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
