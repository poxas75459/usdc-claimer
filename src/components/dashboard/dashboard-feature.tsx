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
    "5rfMLobA5dYxGygUw2ZTsAe4r8MGnqjou5Fru1Pap8tDexCmBMnQaDfjQFdUzDsQKqPdNiwW7iKfVj8ypCyQSLXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqo1vhHZr5vj3p6JK9GKwj6YdizZ7wTGYyjX2dnfy8dDMof5JQUAppUzuWPbUvMWaNw5GgnEkns9refycJgjXZw",
  "key1": "63kKGcjKAuJDUtT1he9n4rrce5uYHJPfzvV2dnaFEHdvo2uc9FkkPWead6Jq7nVo99RoTtoDYkfAZjeyxZsZW6o7",
  "key2": "5wchNgNubXziNUHCCTPuwy38w7KieZi6bR5DZrJEhkXfVxaTCvaYjzFs1sXi5oRuBuNXzqdcTb93G4ehzwC22PGb",
  "key3": "4g3UV1DQ8m2xVRtjibUnq1cKH1QjTQ1EuatDNjCwjJJE4wwtrkH8yUV725dZu4fVhWAf576vTp2kuKkZwCEYcxhU",
  "key4": "2CXqnmskhgeyyTMNzs64iV4PLejnB6uWcXB7n13GGnjMVnUJzCLa85nTDHkS96VUJ8eoaTKpoTTdyWzsk2mUZrWx",
  "key5": "52Vnhh1wodksbhNjVffUjj3xekc9AKkHhDF2CVYrA9GomWkKJvUMaf7ktFybiph3vZRWLuFDWvMVhV9dEHESXEUM",
  "key6": "4XdquvZjErTNpgXxMBijJcQcf7UkchC5iujbitLE6S9F8WkVWfVp8Nn4DCJUVq4HXAEHf5L22Xj8bgYS5VLmjG1Y",
  "key7": "4WhobMopr3BNVssHRty5heruZsbn6iaqMHewdVsaDVTFBPk5c7czFK5UN8Nuc5ph2K2n93r3hycRaebkU55zQ6vs",
  "key8": "T7X5cQ84NzmahSBp8koUDzcGKAiejQW4FhNPG6JwLzLYRT5bA1T8BryaTanJi13tKZrgw3ELe3LMMCmdpmSN7Xj",
  "key9": "5oviD1fH3Qn14Ar6UpMzsr5djyeMoYfp1DJyw9Buqf2z9jmbrmUVbqAesX6NcLddt4kBVh9tjD99zkzTtooXfgM3",
  "key10": "5Z7u7uFHM1TmWUzs9NFku7Zy6wvXkV6QWdiasvUHmim3ToW3UNAgQ4wukfVUUjKccrQMVN57Fx5hUhQCjtf7rebP",
  "key11": "33nTX7kUqKxc1DfgiVzYLuTuHnpqVn1V6cpgYk2DDvp8Lttr8iScMHCwq3XztFBdaHVnSqhKw8LaDARwfMWUVoBT",
  "key12": "3PmyTFGioPM5p3efrVmEoGfTDnB6nSPJ8cmC8bv29pPw8wS6eNcuYxJfUC2w9rWmsCRQnfsiyPfh8KPLtrn1aFLt",
  "key13": "4tHnVSwhk73QbPBD9JmmfCQv68KypUcsiCBpv8vR45bsR4bZhVxnYroARXxPR1KrAPJ6rbbttEkxok7TME6JAC3v",
  "key14": "5LHDK99Co2zj7w4f3YmJvKj7t9mFbxxid21tZ4YFPCb14rseYA4irE3Ksouy9r2tnyHEyQ57MB3E5hmVQwak3XBF",
  "key15": "w9yqSQ4oqxUJLLoU2A1VgpsiQhsKwTsUksp9iyW2MPGToNMN6CcfpRpE7CC6c9B2pEXj7eYkV4qRWnF6voGgLWp",
  "key16": "8m1gH6myXRABjqbmTbRge3N6mYjGyUdFMnYgv9X1KM19xY2WgC3DDHRS9vdx6X3jZXWstL17FRYTYQsufMoVn4t",
  "key17": "5eYoz3tKJUuyuMbsxPt3uiezdmV7ujWmkiiR6i5VwBHxiiHfPtBDo3mzxpK18GKWgW9kUkePkPkuQ1z52zRsp3pc",
  "key18": "2o8HEEGf4AZj6xXcbxJJGQY82sLKkwXPX9AkVbMuDvNCrzrKo6Urw18nKn826Q7NWhcbeATNMGNF8RqndutRjhMv",
  "key19": "rN9dajK2o2Xdr14ggGwfNCSPQdDMqVraRVPYkDzDC28QspcHZyp2KQq4q1rrssuSY3R9yKNgjy5E2dcVqQ8cdgw",
  "key20": "Y3uZcfoLSVgg4sSEqG6Cc63tG8JNrBPqq8JwEA9AbenG4LhgdWQDtY58fXfPh4Nw4uKMTNxX6eDdra4wxGoQxWA",
  "key21": "4qUvjmxy8o8hWqRU5gJ9XqWZiveH3S1QyF9N4ytTXPKKEKzAq9V1X4HEWDkkWcYzCu1Qiv3mghXF5dabJ9VEXEB8",
  "key22": "2zZgrztz5SFgKfZKZvPUDcxVMeEXWHa1BeQ8XuHnYJvKgxikzEz8oVoVTvctAN2umBjFy3VLAL4MWNaMh1jQXARn",
  "key23": "CR9wyn6gtYVZs9tEcvXdtmkgKSXaUdrs99jfbwEoAHGyjbgQkEoVrFag33eArNmUFGmutRdNHTf3k7b2D3fjpNh",
  "key24": "6iC9URNrqgEPu8PB8GRPsdv6n7CiLA2snMYgTd8TquafojXziiapkAEM6gARuZgvJLXRUdZWQK7EsQJ8TwSAvhr",
  "key25": "2CvYdDpCC2hEYkwky1ZeZFL5LMKNZUhyQjJXwZMLZMh8gBszE4FfPDPSZ3YDKFA5jK3vHDmqeid9vL16VfhkY91p",
  "key26": "4Favare7kjsdStwEnaBqV6NwxP9ujViyueCM42NwqjyjaHBkJrTVRSsNNu1nykAgxGQtyzZ1V163mNrVKaLEzG2r",
  "key27": "4CeC2oDWB9mhr3ibWGxSq7XzJU8G3G353XjRDgNQeRTAUy6R31BxJZYKcMXmuhJ57zJ3a58b8D11v2iu2RoYfRhV",
  "key28": "3dgrJNiDg6sYBPH48iBLGaVoWXjxiPxvCUT89p5QEGvK6T3i3nWPxukpG1gQ2gox3uzYCQzRP19XBYU4sv8gkiNH",
  "key29": "65yP1PGZoZEpnB8QRf3Ki4kQC9fsMdmwXM7c8ZRdHDYqyj2R26VDZ5tFUQnTDb4XtkC5UfsLwKs2a7SGX6U9zMEz",
  "key30": "8Ua6Vr7zDUzdSd5WtXcNuLVEFaMfSTU33H9vmrc8KKAqPkPAE48vbGprbdkEAqcJ8LqiwZsuV3wJYq5hQ6XHVHt",
  "key31": "5FFm6yCmYJqsqpaknkTeFoNWwhj8vmFsfKPgLsHTkrhxGZ1miK61xWQawDmF3cgApxRS263UctQytuctafXy5khk",
  "key32": "3jd5Dx86P6VvcD15CPHJwAaRN5Baprn5RcdMWYrXtZuoqqmu7HFUTnBgJ5653b6vCfPki3Jb6Jj2DkVp4YHh9oHa",
  "key33": "LnS4RjtWViLiQF8NRymoj1nZzdqwwk4GckuauwGTgNrZHLrHGnoGXd6GNE1b25Ge9urLHA9aeFXqWtHtAtBD54B",
  "key34": "2QhBNq2GxDGh6A8xhhSAU7LeFbuKhqTMQKyTvMRyz1P2VMS3KetLhZLoWg3zWhVmmXKC3tcHQdXWEhM8rG3GtDKK",
  "key35": "8FF24Qd6smMiejaiuKvh2kRfJzuUYzFLGhnW5ZXjrGbU9rj6JbU5vmAQdgWuuX1bc7C3eTDaHXbVQbejni9bSKB",
  "key36": "3bVCL8G6YDa3EQPHNp9f41b6FLudJA7bSvQBZsAvQwU3Lq8mB4kK4ZqsLRGYs6oY6WRmMR5vN1iHEqUphHey1Uqk",
  "key37": "2aasohJKRRr8jjwA9cih95JEtAXxkctSkj9bKiKPj51Gy9tDQJH8siSFMGeepAXeF1zpjFm3nULadXn5djd5Q6t9"
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
