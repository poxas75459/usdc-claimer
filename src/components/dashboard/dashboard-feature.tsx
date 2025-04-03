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
    "t31GJkHNK2N3yG6fKuybgRiKZ8Kwy6GxJcyhJX7UDMDZTRRxQpWXbUHriqpDMYY8ejBexU57WN4Wgud6RC11KgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r1aSj9ZnGzQmfcDC5CCea9SbKzMZ9xGEr2TR9DP21nsS2X6MKfww4gJpAzdcrixtMuHLfcK4u2zR6yyxbWbrPrb",
  "key1": "4hXNBMAhaUSKyA2QQPp669GK9gBThvDku5gwaXYzCRc2LokTX8ztCLwkkA9F5W8EzzKLDYEgLdURndWyvMxWLKwc",
  "key2": "5NSpimQEUWWFX7RcKeijrTAENSGqbgGgqsbXWTfMMfYKpG598GNmk5UsNXJcFFMPhDxPfYa4Rs56B1ZQgQoQRWFA",
  "key3": "xoXGnxvfCBVr2zoR2jQG4UPov15naGTFAvHsqmqfbNcX1pzH7Upu8c3vF3yS2iPSz65UHJiQJaU5KFHE4FV3FNR",
  "key4": "ivsLjVCd3jfZGhyV5h3PdhJaFEdxNjCd7M4crgRw2StBgKbFhTCSXbymmAZxhjaNd8jYEqmmmUPzSkvhfFx8D7m",
  "key5": "M4fQH5AkhoSfoWHNmrkvyG6eciQdaQBPQK44pKTVeUEUAyTdfh2SsnX1ZP2b2NwwSRoGDufzWwUQhWsPW111Ekq",
  "key6": "2ftEr2fF9MVHREkSKunMiGReLJmfUgyeHJyG4hp3vU7rJAqNmKTojTvogc4QachhQFs2q2Lfm3i9iTSGF5PApnKn",
  "key7": "KZzdVa9GWkbifPuxW2uCjrwzBJssPVBnY9yt4AXZG9URvoT7SQx9HEfYX4CCHYE2QNdEDpon7HFJ9i6qToWCf7d",
  "key8": "5TV73nTgNgwxgXLmCGjyysMThAyFxZxHGjXvhmuesMKPSf5crpaDFPqXCxmuvNR4E8oNy8EdmA24313nin2F5Zyw",
  "key9": "2DWskEKbqLiEuEFQNEcbhCA95TWW3dfj42BFCA4PzVsZQRETE45Q6stkiWnPraBWxMei7NvYZKvEHRBQcPpKTFKC",
  "key10": "5ffxFPxWz445RcpvMQcERktVEdg8ZybZKtHKVbj8y1fLgvjFjWFMPDPLqGMYSAdiETHHZCLArEyzVCsJzdy6Y38X",
  "key11": "5R3dzo9hMTCJCogWhykK3JTuvE64HMMhDzHW6RSamFy8hD8MRswmPp1tqzVxGKz6XivVbzFUhGqT9GwnzF113SUw",
  "key12": "5vXfz2qn2r62nb3SW3ZBccRwMQbE58GvyRuPqA6TJ5ZUxn9o4PmohgFhdNA9g8MxoyjxVKXnMU4SBcGJcrpquKSB",
  "key13": "5ggvXywcfNEcpMKzbrmCUcjAP9BMMexGP4F2Z2XYbMDeTE9VvmKLWqc3fw4M2hE9jdrwSRhHZAS3MKgGAA3he9Em",
  "key14": "5Q3uW5CrkuQx2xKeM8PtAjmQzT4XXv1JHSrnrGoLkrFc4knk4smFPTdCzLyf3J3KfbydMLkUb3MWdbNUeSLHJLLL",
  "key15": "4qriUacuNPGJExCHW8bj7FTbQTe4mymVKY2KkCQEBqhCLpeVq8oMcEiUUJYs75EzJ9Ccs4yCPqftkkWprxXUseNT",
  "key16": "5tvbjDbmXhBREKLmo3ff4nK9cjX5qpyWxmT91TfbLsLXAEhuqCy1rNWEGHaXDQnKHg2Ly3T1gsgPiLsuo7THDUx4",
  "key17": "5ndazhSR8NKdztDmcCTajVEkfAwQKBGPG7nMfjGBtDULvEZ4TQXvBSNFVEoaBvfiT4CDY3RXtfnnppGoo6w8CjBy",
  "key18": "3nShJUcBJjW9CrMqw4wtPSJFeZ3sXHdGkentNn5DGtwnNv4cCivmoBkfgQgWg9BZkYtTtLg4YHBmJQEhAgZkKb51",
  "key19": "5Qxo6J2gTNtbvrwsFjSfJBAiTiouU9rh3pHPbwfNsz3pfEeyaJi8QhkdLPdmymoCkVtBCEgNiCisiPdAHUaG3wrf",
  "key20": "2hq7pKqsvUJ2YPF5Fj2MXpCBedFBBnsvpwzdqFGj495HX2YBoby8hh7CiK1j1g342LTXPteEdiqG54fFfRKYqanU",
  "key21": "323fnEoiqRWA39hsk6xxoBC89MN8KtXuN51xvAaEbU8V14SBmkLKXdoQ94MvH9sVVDRsj3iHEpRh48LS7DygPpMp",
  "key22": "3YWrSDu9qtAixhRm3PQft429fkPD7EyZgXrHhvpWqsknW7QgpMLaztP79nMMuSFPjeZuTwerc18wiWCbhza9qTLW",
  "key23": "2Pku4tN7nJZHzqciXmJabD2WhPmkAQKtGKrCCYDyZxbnf6vAuvzwU5EoGxUchFrdnWGxS9jQ4ZE2RE7onec7WbUE",
  "key24": "HunnEPrfqbNPR66NczyrhHKRx5A7S9iswDYV5ofSSgCPNs74d6sA5yd7dCDVV5REoNmhUREjUyxCGE5BnxviaXp",
  "key25": "5yvfqB8MAsA1VX7Qe5Zepxzny5oHYTBGQpvhFwzgwRv6uuNqo5NikgkoGavaMuTuUg1kxWzumNSn8qeVc5YQzwi1",
  "key26": "otHbRAZ6inGXLrTjE7m4dkXhohD6hZ85itAeZ7VUmDVaEQnq1p5w4QzfBoBQ9HMEweQZvSCHGuuHQPRRf5mvJkU",
  "key27": "2N1sR1AAKHfKRRF3DykvqdG4r54u1wBRLCAJVcttSjLgrCk6grHn15s7oXt9eQNnGLnzuuwub5sdF1UBdENVZTTF",
  "key28": "3n55zRaFGNDTQfHgiBS4EDzeXqso1r3kJzF2RdFTyVsHf6rKkCWGb931mkUXTwBdwFS5L9eDmWm9fhB8ffxvgLqr",
  "key29": "45FsaoU8BqaZhxEFfEoBTYF4ciZ4KKK1cQUgAThSXqtf7veg5sD5KjzxRQSJqyZDhCPbp1jMhe9Y1mDTY8ahusXi",
  "key30": "4u22CjoBrRoozkaohWhAvqdLziX3EQJByBkeSoDQFFhVq3KqqzTUN8EWrcsEg9E4CABknD9uCqBtx8hpj8uPSvPC",
  "key31": "4bEDDARf51PzCAy1Vc7FUuDLz4KokMtA1uytQm7pmZodbzpKZ8s2SrggYriQAWgXFKd4CeFdtPuTYGC7jWoJFuya",
  "key32": "62B7bKMUoJKfwnsRzMYTT19LeP4s2EdNE8MEHTn4ZD18ZEHwqsREWfS2gQv7DrwY3baRhqVyxqKARTmnEJjBwt9K"
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
