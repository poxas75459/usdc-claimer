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
    "4V5eoLwKzzkiHQNzo6hqpTu1c76zZ3iQMfNSo5a4CSarkzmNpNWUqACbqMo8XrqdhfBABvZf5VMJF72pTXn7Ymtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nqjCv6XtaXKuCv8eZioRgFHmKfJDTj6CFGBVuA9vKkVEyuUFVxxNUoVn4LwD8b8Hn3mXUa3qV76oagbqcMEPRtj",
  "key1": "EWjRSAhjrxMhWmJWmypLKD7dNyyCvamWRGX1u3bEoeo7o9F23B5yXkaNscixfkV921se1YtsnGjKseERzoaPmBu",
  "key2": "4bSHXHoXfATWGUsPbdDxPAwukyhQPX3EMPBmTKRiNLWZgLcuS9xFiHfbCf3xMqvLtBWeuucnfZzki63cj9ZHXoL2",
  "key3": "LwmC2D2q9iULJDi4HmsALd7LRNupoQDWrekkerqghpsd9brJGpUCa9mC1xkLTHdKjV8vHDY1pTYey8PrhPsXwCi",
  "key4": "E1vBQBQfsh4MNT7SYEFAh6K9qUmfxTYoEwamgHFto11nM7RbwEL5u3yUdjegWoEiMr6KmMkWCXmMdFeeYSjkDKq",
  "key5": "GzecqSiEyMzmYqxE3g9m9T3Av6vUcEi7nYB9FKhUeEe5PQK9DaL8pA7e9nhzCRb2G41aJMc2tDBDqqL6rR1FbGw",
  "key6": "3KUzvb7YPhY8dX1Le1xT6aKTEKcDN16fh1dFSUZgvBNYwBhdRNvvmUc46paf3zCDf3KVXtNm7VE7LhpG6okqgTFK",
  "key7": "FE3h5SaWEYbYQ8tNxqw7iAjvJoT9gB7DSiYT44ww7wMsEhUeZa1zPpe6paTYQRMiquS8dGQ8h5KWnPaogCegBEF",
  "key8": "2NTBUXdbAmrGNBfAxS6bc5jHCv4qKzpayNoHHP1zJYDa1cgeAe9zthX3n5Yd3eTqxCBgKQ8xAJzM4mx5ytK48Ffr",
  "key9": "45ZQ8N3PUauFaGco5DjWRmsipp8wW6oJhm529oRch8rUkxicZvnYQFCDedQXrwb16QjejHPrs1gVVw1MUhRtXEjC",
  "key10": "GXv1ZtrU1EEgAywMnsVeweeNYAhqQ5xToC9a1XhdZP1DtpmcwaMiMnyGmzHUqCdZ98sa3Pjd9oJisz7nPEisf91",
  "key11": "VxU34CqzWmifsidhwaKc68HHJwT428xzDNSQATrCV1jj9XUP6C7CfuADz98nnQMhb1ttWGYNJiZfM1hQFpbVQr6",
  "key12": "9AckwLrJzTzUZ9FEDsSWu7vCzFeBi14kwfZcJY1RYnQuFZucQuKjMokSvpdLCsonbwwb9dcTUo1MSivSKW1Lp4N",
  "key13": "eWWdnaoG81aSHGNSyt4tLv4Z2mmSH9XftctaiQYQnWnYFtaFiv3n5keVqUeqvM9MTeeVFBpesgAj5CkGjh7ypCm",
  "key14": "2Rk1cws4grSKGCgKhopk3cV7Uh7HCB4QGt3yvrqvSkM5uuuYQj3mkAxHwiPixPQMnuZVZ4iDu9UX4wToZowk8rra",
  "key15": "4mTbFHPByN8Pc2H3sUANcSVr46dg1FqjWLRMQCjAXEW4pioQB1DCrnL1ekd4s74nXuxkJp1z7YLsCKGEHAXPqyYS",
  "key16": "2AH9ULzSzjkfXKYBd9T9WiCjrTvZXPW46wCydB1dCDdvjtbXtRBaWNuPDqUmbV1qsoLyKhohVzR7GBQ1Pr5AAa5M",
  "key17": "4GDynG9EYj2sMwRs3ifv1f7MbG26oaakzi1WSn6UUVXae1gyYvNA4wwYYQ3i7vA8yQTpZycpRNaxZSfiATQU7ddL",
  "key18": "RPAhDp4mMft56C3LijScX4SW5E2a9wgcRGDin6qb9SZGQD5MoxfB7forrQLWvrqfKBckRcFzKgBbSEQ3XmtTSuX",
  "key19": "wBHnz9dosDa1kJC4Z5ZZKmms5UZVvKejTFmkRokdBYr6CMz6jb1qhZFccujCYGN6PFxgyT4yCSG5EM5mMnzxeog",
  "key20": "4dvdCjs8tmNRC2mc581pRw7imeWJhfPCUATMVYtLbEoEuC2iRzV6iNZ6Acte4WqmaKCsu3JjbW4HTYVyCMCAg5QY",
  "key21": "4NVkFjUyejUMiChVYYdrTkLeu1DzraNxaDV2yRecUYRbpV5sXTwu7yaLLRdb5KLPUYk1eSjxcbVB3djqkQFLfac6",
  "key22": "4JpFzRPsf9LTaKXRrx2N6EU7fd7Z1ALMfJv5jp8cHWdvpJyKGePKdwnANYtwejAtVE1MKQxDc8jaQmo1oEame9yP",
  "key23": "4N6MgfsjpmFmpDeAoyM6riEnQ9Ndk715enypmfPDyQGc6RC8ynNyFT9xJD2srtkwSJbnNCQ25zfV6UpH9UUD9wBi",
  "key24": "Bd37dQ7QQ5PQ73iHL4bxXR6X2ZYC2z5aq12HrzkRq9UmfjH28Bp3uYnvtcsozMAfPyg4GwuPD24ri3qsyDpaxEr",
  "key25": "3as6hL4hTz4uDpi9jeAVMR1upGnUqRnqnNqhC5dkfq4T4EuKuSKPCRYTMSKnhJxfDZDTVoYfYUYrHqVqgUAryr7t",
  "key26": "Lrf1ahJCfi6VbST5kk68C6jWsDRsAWGjTAiFo6qb7Am4k1HJxZGHD3uodB6828PpwvXbQiMjWDzVUaXZyVEP2tJ",
  "key27": "4YxvWC4EsTnaQwRdkvN7YcgwnKnTaLZ5QMRUQsazAxfrAA3sqoYn1kjRkrvZu6WzydUqKYS57Wn3TKupwrDMLLCt",
  "key28": "3xjDqLD4tUnLxeXNLwNJMptkYjW5GYFVLRJuzY5mJpsAAR6sUwW16NYjQE87jY6ewTt8TafE76x1EH6W3Z9f9aJv",
  "key29": "284zhw3WPYz59wvATeABpESLyVrVxzk2Mk3ewTSSrYjfZiKJ9Xk4NG43KF4iRvKg4YJqKivg7tk5ihdCiCAwe5Hh",
  "key30": "5sHh1rqn5JM2451m4gVMCnF7cD9jL3Sz2fi7NqBCqkUfQLovP61jB2cQLVeJUYwLeHxUkKA5N2BxkMEcvftDoqXT",
  "key31": "4zrtxKV6FHQsCFsbmbjPDRkCFdno5dtCSwuNun4kTcHS5yrHpMU2NFMM2YRaupy7E9zg3KrZLd3qNJHScGC45gsE",
  "key32": "4TMi444jPKkDwyVBtEQBhT6Hp4HGyD4rqh2YDCiSdCJ1H7HBvnhcJXiSJrWVoK1DC4St5XwxHqEZaj56o1cpCBN1",
  "key33": "4wdbzKw6FG7GeuTtdpCt8Ga1XWUwGgiwJ3oGNFe3XbQQaRLKgcHbeTmNjETSxKefEoBNv4TFELK2GBkCveW4dA8D",
  "key34": "2XcuHUYfPo5VE9BmMoBJKhQruaQYxXcFt938fNjLCVgQ4zDxbiguywFPvVopFc8bWeGZ8ZxREPYY6uBYtvVhjTSC",
  "key35": "3ywCYqPXWPRLuVrJazfLzBznf57Y4HTB7SrPTopDqCFYsk5LV1o9pafzgG8gLZJN7giQgqS9NGZaWLVFwt2UGeEc",
  "key36": "2HtERawpsykAhN4s1dLMi7SUtCB7emMeNszD11PfnAZ37XX2tChk1wp6SZjAagezzmvTsfUGpwk4BCumSxQZybMc",
  "key37": "4d6MeCmWLPArvE35XjHXdd7XYGFtzHGrwEeXDqbz2FtgYfpLSaTNkxC3F1fY51JbGTh5rWr7fSVnPwAX9AWVy3kh"
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
