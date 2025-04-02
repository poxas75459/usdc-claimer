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
    "34qsrYXNU6V63dD44ZPostvXHDBZNiYgSZunXL85PfMXt8zKNUBdTYncD2bF9yRb9hHhbvojsC5xguuUPN9nSdzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRLBWMpP4JqkVA9m6yjRex7UWJVw3sPchDqAfYzgYKJZAULohpgw6dvhS8b8wcWQVujiWVQGJZsrqbHZ7b1zWjd",
  "key1": "ZWFouVo3uQXoqRTikGTZLUzm3EBwP6oPDoZpfaFxpQm1Xpeemw1auEwXMY3Y9hxfDK2o5j7E4mbDTT5PSp4CG7Z",
  "key2": "2JrFxWauhN5DoQz5vKgxNRzm9yaqoPTDFmD3Uo3RjGXGcjdCtiY8VZiSkyEk2t6ENrCWG9bi1Q5QYogVbst8VVgV",
  "key3": "5jndtN4wSi14uU3HubWaqD1GzoMTaAcTaJTiZs4y7ZAfQLTkNwufictZxZLjWBDGTtgqRFtnhvwDX4BNpLQh7Mwg",
  "key4": "2ukBSJdxTzJbMSzVJn7dbC8Q6v5aYT5dJBGAKPNkGhrp3LAjBpndyJQac8CEs3pWpWkZMbtRzwomuEFnFbg1VpNu",
  "key5": "91JQJ9FNtf3SMZyjhA7nXxDyMk8ga6M1rNyTkCrCsLJRMhEtZZpLuRqBRQxY7MpWThNkP6DzNQspmZu7KcexSat",
  "key6": "5qchnBu9JKiFDy8DH5am1u2XuyDwr6qbsg84g84SpwUSQ1dRHKZisKaGcXZgD7mk5m4wuqKiCmy8utwRYqNsPYiY",
  "key7": "5xoJzGcdzGfcWhYRTr8g9TW6sCAoNWePHnMixSHmHcbpLRtUt8jemYqQHdwadXVK43d8TES1xP6W3YYz3PjxDa65",
  "key8": "5Ne6oBm2u8rxPBMSqhhrW5ngRtqiJTR2iTHfoeLJnDybWGMLVtqqBBi3endD2uFnSoLHAr8i4TRtw7qLxZXsJQGw",
  "key9": "5KKmCzBc39wTY2vKH1rG5NwU5CMRSoD2WvbcVDnZBviRTt4qMwyEsMYrf5GZ2ND3FDGbv41TVMjhvKuBoNpp5bks",
  "key10": "2Xp2ZUXA7K8Rb3nV6u5Jj8j3M567ebu8LC1ZboH2BU5YgxZQ14by9oVPQajLDtQsQ1XZfz9ZSwQ6v8fEQyv4M3AZ",
  "key11": "5q23Vr4bkF5hbATzi6GUWm1u3KV1Ys3hb5vgcuiE8JyY3n9eVJDHvJLWkk1mtNCunUF1iF3u7UsLmoqW1uCqVMSQ",
  "key12": "6oT8VwSA7U7J9wyNH42yzqLwe6xZ13yyTG6ks91GSVEs8zwshMW9CD83gFmNkrg2LJqmd4fxAtz8pwGztuQ8qR7",
  "key13": "4jzPa9JLYy8zVeHWaMjVSrHtPBzJoHii2xgKsiYak4JWkq6sQ7an4THWVhvBi7Xc3vQRWExWdmBZazikkaVvRevU",
  "key14": "4JmKG5MzPr9af45odFAK8oq2LYKqhEdNEybUiNheG77HW71HvjhJG2dJAZTd7yjs5rb81woN2j47UQ8YgurFJpxW",
  "key15": "4qS2hggnFQ1unGYr8hgFyg8b234YNTVc8iP2qKgDxgKAJgpVshU7EekVWD6A1GGFfXwwXqgzNPzbxpW5qm1LLzxQ",
  "key16": "3iJZAydKsBoMMuRQ3Vs4Akrpx9vmAYcFiBJutLn4XVPfDbiVFVENm6ndekJzhxK1djMb4C8xJrHGU3EUqzZV3XVB",
  "key17": "4S6fzerZkXj2p5Bv4FYuHwRQcm8krsiZSCkXFnVh2HQwqUyDVHo5s9hvdPSKTgDKYxZQSeGkZe88oJ21gVuQNtSH",
  "key18": "5sCzyurgP6Wa1LHpCFVjYpRAQk8omRTqoJpUFZpnpCM5QKMtsqomKCRoMcKqtWTYmJRRxoP9fouefKn66MkbcBt3",
  "key19": "5sywp5guiyrHSNcaWXhcTZUJYskYf69ckq8VxMBeKKz1RjpXHpEpUobDHQEBAAYxW246dYe583aGQDAEJTrsbSGK",
  "key20": "eW1LaeCKKd3GhhWkR3yEszs1hWUZpJG8vKbkx26cTseRYGygMsJ2WFAqResP4Bk3FLqA2E6JqaaQofcfjuoZSR6",
  "key21": "3hKq58KK4YDUdf7DoZCRdLUUUdY7PazUFZSe3CBMYtG6Z1KNaxdVt4hJody7akGy9SUj3tzjSYZBcWNeuLndjcP7",
  "key22": "5sZZMLSP8Y63tzMHFJJcfm1PJ8tn4z6okKXuHZsLFGJX2ftHpdCYoEXKezXshJ8aMj8eHQhD2r5xe98prnbV1mxL",
  "key23": "3xDpFKJdRnCTo1rCygPQXQ5MVibni4q8Xq2jTaoHJAfyukp2QNrHNXLDjZzMGCdBHhGGLEnyxmrjevF392k9zMjW",
  "key24": "41c5N7eJxXWVJyQC2QSWshcwrzt5mitzqbgUXJm1VBUG4vYof5A77ujYR4eLSPDj8kmjwH5B9XfxXuX29afy18Bc",
  "key25": "3AUvCbAfg3aHr1LTWj3o8HYMs7MrX668GkX1b5EfBfAsJASyWA76EX5ratZPX8eZeTBJcwjXX6u4xUrY4YTAVQAU",
  "key26": "5BVQ3YuShRtjF1NcJguikMyxd5cjFq5mRLcPsK78ZGEmtNbPkQdiQXcZgUtJJDpYiaYiU2i85f9QcLeebJgn6zVT",
  "key27": "4wt6KaWs5LfWQhBN1GFKqQFTsmbiGKU7t4zb1dnTSfZjTK12Co4VrJDphDz7ZVby7Noa1UdbdoAQtMeLh1XnydrD",
  "key28": "2ss51tAM7JouK3hTuXjWNCvF6QyyB1tUzqd7hP1vEinNZ2iixnb9b52tVZT6ZbZA4auTEU3mLNBntYkdAWeiajjG",
  "key29": "4Mnsh1PDNxDC4PHAQrLWo5a2juMRwHiQKDZHUrRxhJaGgUVqfjnTVKnmgrR51WfBGZAy8zxAcxKM7HWNhAgTA6s8",
  "key30": "2pF33dBsfiwrctcMwiFQsKhJscjLFyKyw6chBTrRy5qRBEedi9qonrgV46hPeg8kRkspUMdfn2i2RVFV5eFFrEqX",
  "key31": "EFy7pjBPjWEftVH7xPBwswGz3nKvmQ8NMBC9w2yQ3LDCqW2Wmv3Vv3648SBpjqqqykjCgAcZBfX1QYuf4qY7j8T",
  "key32": "53EKx4NvRJB3U7RwAf1GuCRTZKzaFJdzJvD59sVcYbiHAgGCgj6zyKdmsuzkWZD3WRYX9VohaM9L4jowE3ubmYbS",
  "key33": "4j5NovEZEhTQ2miZtUqndnbtwcyga24TSjsjFYDr3RuiurdEDc8oWboUnFx8juDSMU5XyJDqkiQok9zy4SuqDYsf"
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
