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
    "5bFN6fBP2kSJ4AbVcFaR9ESsrWaGkJtwAtfKbVDaLgv7QkHkVcd8Aa9ikcPHgg7g3of165BR9cfr55Vm8bJN1daq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FLE4apTcFwzZGSyHHLs4XLX6bZZ2eYmKSiavqw3dxq6JfWLVybE3rnbyPdf1MSQkY5usJzyE9GtK6EN24wep4nZ",
  "key1": "84cd9oNYPEB5dqPZzWMj9irzjiK3vuL5eKQMsRvot4AceWnSBeSck8X5spTrCYe8J44L1XKEW1jMHAtGnvjbMGP",
  "key2": "4QAYAAhjRwthWnuNXUfBd7Zcv97Tjk2DTKtEKFQvFFHuZKN8zaknFFmw1pqfZ8Ry2gYkFfdosB4s8d733GTLw9a9",
  "key3": "JSkPqx4HqNWiz3CgsmUWpMqf3qtW9sZkzf4TWpWXF9JVmpev78Q889VZ3GZd6vyF4Tyb1LiYeGpgCsS4k7QLzwf",
  "key4": "3Yo1WPfQBNXvDBLhiGJDzgeJKVSCH9ApTcK2sNRaDYp5dxp6NZ7BxWzVWJbgRTUyAGkTi4R5Z8HEZhETE4Wf7XJb",
  "key5": "54Qz3Lw4XL7ridkez4KjENke5wfm7rKd1gPJ7Zo3U4biqtgEYhUR5Hm8kJFCjxknRp26gioxWDEHBzoNULp6TQBy",
  "key6": "2Kr4Jv64Pbu6TtQfUNgvVZgFGEJQqBvY2eeLZ9kPGTsqAj9G6AQV1fA53Q1Ehotv8HLfYw6j4Bbfim8t31gMLN3v",
  "key7": "4vZQ3bEqTyNWMkMZrX8UdX26kbMereyfmcDvZBqsQJiJMDUkKWGK2sxpWUBQqXLjMQBzo8G46Pr9nSvVaZe3H5Bu",
  "key8": "2Z9gY1xCVVZAKR6Jbgjx9XyLdVUAwsuRSWP8gTU5K74qxc1cdb66WNXyAfhD6eUQUrUaSezuRykgEyvqWT8c54Np",
  "key9": "2moJVAvwjEVP9DkZniLW9o3XLiDYorW41QAaLptzcLt2NLMwjSaQL9ukUkms4qq93JZEyBvnUPwt44H5fons6WEX",
  "key10": "4Hkpu7wJUcaUueRdRc1knoPdTf69rusEfTpp4nKZGouYFxuxDwmJ73UytzQkojqnLWWHatWqzys6ySERoJcfLZVc",
  "key11": "2Y4Ckrfur1QJEpWzCuS6BfFR5wDxEMVSPJG1wZURpvkVkDXmhkmjZT2mBxJYQYr7kuPW8mrNZC66Cp2pXDeV11wZ",
  "key12": "5q5sV2vJchCtzJcTCiZJQq8PMMofXXNBPaUy2dAdzydmHh41LuEqgkS8pTJLmKhuVew1Y8SbV11dFmrk2S2irdbC",
  "key13": "4ECcRyGTwUyWwdi2WPNicPDRoGoN3zgN176T5iZvutxjf8mxAf6kktp6a3hTLvGjBybnncCYfMo63Z1cheD5gzAK",
  "key14": "5aDRhydrEGZKUMjY71nrFPndvwTPLQQoaauwKwGkViYvcEXUhEeCTHbSXsYRfp5tBKL6oJGU3brZczgfnenW62o",
  "key15": "5NJwtEZzmoZgLt7FyjPR2vyddZPVWEQX4qZnu4rmwucpu4zvX6iZaBw1C8BmPczu6URoJCzU65qneeCwj8YNNa3H",
  "key16": "3xUXZmqzavQ7Mm5HTM43soXomtRZ7hd53ZJJBaZ73N8hCqzKJZZYjvrPwVAraZ7UzxPBQfCtC8dZpPuBJ8LTPQhr",
  "key17": "5KaU86AST5qb4TW3rc72gZntwoDQRK1o4xFUnxmcA7FVrLf3QT5Je18mDG5hRPYVWvkfcKbNDBfG79C5FU9vVxNg",
  "key18": "42fatGGqvhvFeK4n2awTvzyZ5cZs4BXWtCmnpSRPVc75Hx3Z5oemScNy1YdVoQScb33LHKuxwBS4ZRq4BZahU7zU",
  "key19": "3D3dKhMYPRidHfKexdkGDBsatCNPM8N7iGwwMHPqCHjzGVb3mouQ1t94Gw2tb7VjpCazpZajDFdPfV6nDYXVjqG2",
  "key20": "4PTKxoxcpzKSVK7diVy1dpHwcS1BbTEx4yExNgiKG7oDnUKhbFH1hz7h91VyzC8ZEXndnYass6ysekf2Dms8NAMU",
  "key21": "FEofHy2HSxjCKEQqXPXRt4QguLXJc5GUfVHufe5NL99JMckqNSikxRoLG7P33FmuNY5P5iaCvLhAuKnGdA6E1Rn",
  "key22": "4vyTfj8GZXobCEaEhiyjiY4WxwUp5wWUuauLZmgGMYvcTcgcrC2TmdZu1RArv7nfuFRs8TQ3VgaVD1FSP6tk9AMT",
  "key23": "4JnfTq3LmKLXnCerkYa5educMrCeAbxpvpro9GVoRcd27nZxww8ut3ioKcJKAVof32B8JJiTPzibzRfJSVhU57Pv",
  "key24": "4y4J8DaBFFgb6p7VEV9QCQ3MwCFj3z1VWvQtpM3KwPEPGnuKt5a3TSF7wQwoEJdjY5AePUBQEWLRgEDc4NvZQ5Ki",
  "key25": "3eop5omjTxQEpgXNbJ4bP17VbxVaABW8jZ2cCBhnefGgTZFjLEiiXhzJkfwuwoyybe6QjM7H4nxUxc1kHZu4Xb7n",
  "key26": "3EnKR6Ez2wHo6VPCVg6TFnanXsfsonhczxNrqJMWpUCFjXL3384pQ4hLfdeTud9msoeNQPvicCVB67x51wd73YV3",
  "key27": "3XPDgkWqP8qfDiMYsJo8eGjjsKqpoe75d8CTCupqLoExYERimh94GuG5J9drkuBVXEsiz34oC5LRLNxonkux1BfL",
  "key28": "xhUyG3ExJKRmpzJKgRQoaP11M9cnNbvdjSaeuW8x3eQfGeKNS63dzG5tfyWgBMTMGXo9H3H44XRqqqASgAcbzbr",
  "key29": "3GWjjKHauE4hPzLKow5z7LRKtHrVdkN2Eib7V97hshZNGc1UNFwMPduRXyoNCE7aSwFUDpAsiUCxSDngEbsHuASA",
  "key30": "2aDJ6ZNET8dPLg8KSShU15VajsTfUbdqZXGSnpsYsfFPnfPzknn98Ep3LiN6hHrRHjCGApdEoK3WYwb8RqJMr6Rx",
  "key31": "3qVYVCbPqFezNA145tubAt2JHumiTYpdmsf4j6tBGfnMuZkvx9s2a4v2Xa2iEMHvRDJ8mXvoxSkLPk5W7odzreXX",
  "key32": "58H8pmrXjMXDAXF4CbNECGdsiNnLzazipnj3K6cNnWFsMvRXfXZVH4RJ8HxSFz2wcovrQWidsbxizNhC25kGZPGx",
  "key33": "5SU3pLpaAZKnQSxMinm5tpGmEgKkGZuvqTuiFuaEQKMGnBBn9LjQ7acEkM9fTUvPNgJJzaz1czEM43QgYqnypmST",
  "key34": "2nmecC2t3NGPBJyxPTTGfkKwSnLa5rU9Vu7g4x2tp2KFQccuqm796CvCvu9j7y5NvN4XZeYRufXBE1eZgqXM2jbL",
  "key35": "4dj1UG8KrArqipDsKWbk7h3Y5W4AtEn8SZPxAtziuZTJkgNgy3pcEp877izWN6thJBwdb3voQ5izPc3QA4g3VpWp",
  "key36": "5PRZKkp6As9ZVYRDFY4S56fuxmK6JHWUc7GVnTFEkUQ17qJCmvRKE4oLPcru6ZFffBXnkoT7t2KWggNrn8X5tkXu",
  "key37": "67qjgYpUSQWLQWdSkEzRYqZabf38csDtwWE8ZA2vPL1XuE6Ao46KpagnPxWPwuiunqEK6n4USjrDcCXsuiHTwWt",
  "key38": "YbXieEvdUDBcqcG5YFo43aWgahhT3rR5VwR9DmUQ5gpLseHosTkidHXMdSEPKvazkKMMFFvXcQxZgkaQsKwM9fU",
  "key39": "4FneGfWEiWaogVp7yGk6eNemjHDzeQC34TWzZg9TngazVSJbpp4RStAQL2AuzqJ7V21AYpx5W2b6Q7VPcbWm2xur",
  "key40": "2RCRCpngVto81H7McGRqNZzUAu9PKUNqmXEDjS9rryqyg3Qw6LXTYUdxcpVwLc1oymARV8edEJukXtoYLF1ZmLjU"
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
