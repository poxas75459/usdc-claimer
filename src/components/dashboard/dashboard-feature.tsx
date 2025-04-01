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
    "4Sdv37hpHLtzXGWX3Tm7XBvLY7SvRkSjfPCEujutqvcjUnDetryUMNhRpTU53KyGHxjTNgW2G4ZRa9MihKmVpYiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62pWCgDJviHpby8s4FJag5wQLGhhMqXnrjYBhqL9d7kgpWbF3McjGCZnrx387aF3eEjBAfwAe6MJK6XrY2UUCY1K",
  "key1": "5Lfcyau3XVhPDwWJfbBHSUpNv2m8BZrpnTSMPPbz7kjmWa2zSqsbUs6Xe53zL66efTwNQmBtWJLHgjwM4h7zaNce",
  "key2": "kwm9xuR3L99rew5KcxTHFqagP6VbS1hhu4DM8v9YuzVzxisb1gTP3BfKPHUuK6WmDr2JQJM2hkrEndMyHiQ5qna",
  "key3": "3MCSNZyEuQKs9NF8VwYrzUFtqNfYo4CYYLY7aniBRr889WZxxvVpQsYys49T5uhLrJjWq3cbySjKinaX6n3Tp9LQ",
  "key4": "17NTvm6rHrdJ9Qt4muPyoayheQYCXN8Kr6bckjRqKKXZWa8s8bMNvSqo4Kz4ycBs8oNYZRhRLkosJUt3Fg1iNHs",
  "key5": "xo9uAKGLjVti38JC7oqid8rehBoSLmNL3KQYqBx5Hao7MvbWc2QVLLj6FrtBwaRQZMSVwWmNcNAJXmSTS7jyGgi",
  "key6": "kSPSyp5oYsYC9sEzpxbK24vKihm4ogBRy7iKVVf4P4Qi4wzs2vdYBuKJQtRmNBJcMgwicGgKfFDPytvXwjfJwHQ",
  "key7": "2zkahXXwSKnEGXqEV6Chr8X1bcr6fo7fzTUBNfBQPktbatZHmAAvjroUgo6HFjNWSihWCUwaZ7LSKhmqvJGwhHLb",
  "key8": "55sjqhJfkYHeeg9DrRDGSnzJG4mbe8CxaPpmzCxDCrC6pikV8oqbC6Xppp7we9pqQY6fJQ7h74n1wEqVfHqCAjYo",
  "key9": "26vPfMpK8NyYKY2hGRnPog7mHMXHA8nLGT7BKtw9F8bWDDwZ9bQnQnxhaKEWVAtYtSAh17MXW6Vy7YRSmRzZV2Ve",
  "key10": "4w15Ku2SaSShKLwk9s5VEtLLU8RNdsSvmuUPNJ2ikbzdfNPJvqkpAEg6bf2TGf5MZfJv3zcR5mazSuBAZCK2Uc5k",
  "key11": "Xb66CKbnGNHbZCMyvwRij3PvLrEF1Yf2quJCVK3RLxog3pGTvqSXYiosiTZhhZU2Z2etCkPpWTJkquMZNTdHH8o",
  "key12": "WTwagvCvkjG5YZVTx1BWvmMfrJyvek9tz48djcbJ8yPDPaLp9jeg7ALtdyUYrdLdBFvSbtthtjw58zuS6ZUaM3p",
  "key13": "4dZfs9RLQSZLsuh4VUeS9d9WQAURAnJNXxT18kcDfDesHtmtfW1t9WLEHTdPAiV2scUFUY3MHLzzeu5LpiLnNNNY",
  "key14": "2CFnKGho3KHbmcc4cb6VuxpCozQK6x8KhUHNz9UyZgCfHGjNMkvKQsgmpHgtMgWLDCxMtwBzW4BgoHDKdCR2yrPf",
  "key15": "4NnDWJrXm65cQZyso7MoN41QVmidhC3gnJbHKhjRxnK6etJZFyP6JyU2E33iTrABNnBPDmXhfsTtW89yUVWjkLxK",
  "key16": "3VEoLtXFZJBvbgekkmEZGHuSPzMTapn1kwvxCs5TVMzJ1SJpXHqPAp5dQZrRJoQow6t6XQKvirX1h9A8LHnuHn7F",
  "key17": "5hHaPumMovvK9AVHmC3ZeitqiD76Tp4Xmd6Ssoqn8Bif7U9SSDro7TAdaz6Q42GJZ56cfhA6vZeYNPBPZp4NZehs",
  "key18": "4DHuhmi2MJhtYoN4FeaQUfaSGg5H4XTHm6V5SzKD9SKzUsK7Lojp95x5wxq4wiJ9n5cqrskZxaySjjk6zgPZwUYt",
  "key19": "22B34N1eK2cRRXJwUdFjDr77JqokxA25fUDyHt4eGN1Yo6ty8i4tpfDhYMmvdAY3YnS2yYMUbZE6pTJf3nSrHfjw",
  "key20": "5c5961Fv8ZRDfa8sj2fANJ7Wx6Lg2iQg3UKdfSHAQjro4yFmzwGe6RcuUa4CFCzXFUN99qs1SKwF2yNAorkRmkEJ",
  "key21": "2m3seZK5uT9AjFShc2v1ovm6PoFF3eqYwtv2K9MKxUL9tAoCy18qXn49X6jxJrkvzNMmG1zKCVd5jXnKG95wWUaC",
  "key22": "W2qmjvgAmQNJ2qSiqWMnNauBeWUi5sBVmPrhVcYNmMYBt8A3tP2Ahr4bKrDvnKHncpQFyJZMwY4ztpUQHkFRkLu",
  "key23": "46bVCFUUYJMbv4cVah9Zb4axUWvFkQqZ4AUBiW2m8QvSsRjQQHAQWnUxMRHw9EgsoNwEz8hxhzStEDTLBPZuLZZd",
  "key24": "5VbnrP8gXvspDoJqvKN8jtYT2Qnsw6RvxromtTj7drSZdW2C3KoBaVXJmoHCEQ5EB82U4Nxn16sGH9utWTXejzMw",
  "key25": "3b3Y8hvBSNsZVgXo7WyLFs7ExgNCoU4TMTzBWeUDyDuokBY7wNr3DvygQh3wnnWiUFFy9sumXRUuVpRJNmtK6hQz",
  "key26": "4GgrYwSuvpbYQr2QCj5u1P7r49jieVXRt6qK3876UfCezMea8AnCTmkaLyfCAUU7ZLgmQub8JqcVe5eid7SDdgEX",
  "key27": "3dkwfnPPs7P6f6Vq1abc1KHrtQWWAoftHsw6Gs86SaeQwt1JFkVvhUix4vTNTzMR3S4Q6KYDnb5ns7GJ4EywC54h",
  "key28": "35kL4GsCGUw26ePHuf5mAytKgZadmwuSY6x6JUvfB3CWdpzL6WAN4TZsuCKGHfchxajZt845oThDsDfS95hwL1r3",
  "key29": "2VX7zcNteLkj3fNB7hw1CgTgE3gqXD6xvUoPR7e72LqYdT888YtMAoxozZ4CCVijzfQT28NZzRRVoPHsdg15bAo7",
  "key30": "W3uk92TnDMsey6gyNgpmtzJ77d9XAx539HzubXjYUbnpCGuVCN8dpeLW28bBgRQvuD58pNYb597oQufUbTUj7RB",
  "key31": "4Ma8VkNCVtFoSXATuj12f5xzR8BTfEsDEx4wwEAPwJphnu6ddUyRUrwVa9XsuCdPmjcG85TVzKv5zCJVoSKKfGoa",
  "key32": "rZEkSywFEwTkK3PLSLX7DVQYdKnXGatUHsu7PZJDGxfRAvr9ru1evB6GeaNT5SzfiCBpVDbxFDaVRYtrn6hvxV2",
  "key33": "3Cfj26WUgzY94BhQk3ZhZpeWXcCFfpnHDLPsbUYJA9EE55oDP1DBNSpoBCAGShB92JskZ7WgMSmWsEnCPUXuB9YS",
  "key34": "4VjKau3cYTC7vG6JB7HqjVJZzARpNd9AkryMt9cTsDVfv8YdWQzLiUQPpqEnEBGWrrepyt9m8HptQmv3tDUfjrPe",
  "key35": "4oMawQeGZb37yGGMKF9cvPc7EKSL3Pj9mpFYF1X4K641wwbzxSAqbeGiBqXCCeuYvH78kzQNJyFE5dJeM4cGJS5W",
  "key36": "2f95BXnTfJxgPHKwt7XtJytnKdk3wjohj5dWFCRzohNMWHDi3bnwffX65HfGMszotaVn9epjtQjTEXA2NSp2hSnJ",
  "key37": "3FAd3MWbVG5jbW6Wr6nhypkrbR3it8uQamMhgZqhzJ5Kap7Q2ycndhAer1LWCZ77kpWHGzgyUZivcaroCHSNY7Tu",
  "key38": "47uqK5oGxtScx8ws9xMyKHwyarFW9Rj3wtztriL86uQBdvJveVkkApHr9BK8oXLKJ1NBJaqgpH9sefkQQ5gVJskG",
  "key39": "aMzy9GviJ8ag8kEMAAMDTPDkdMXkJ2BARkzXH5uuLwz9YYcKzhtjAMzCYFgHCHh2rg4hP6mSGtvP9ehbymf5C28",
  "key40": "4okp33uAJdFFDAP4q8QsBpiSxQifgzLgcGUT541Y34Vi17Fy32Xe2q3eyBiWiFdhiF3MHdwfeeWMskNBkuqY6bW4",
  "key41": "yNfjxjr2Mhhp26jev7gGfAsPk58xzAN7VJQdEXLy5qfzvJ3z9RX6cdr4wKeEcVZgN6JFDz4RitfuijKWwiW9haE",
  "key42": "5fQtiYexyFngEuYnFQRuEuirvgEvbvTswVptMxT7WHnGa62J7CjMtxtGmStEUhKzx9n4edqBLB25h5taEDERUYN9"
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
