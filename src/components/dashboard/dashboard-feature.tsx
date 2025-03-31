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
    "3Jzyy5GDA7JSvn4SDd7cYH9cQGhMJYuzEXJxK85aZ4UW3KSAh38qDcZk842PGrSanqBsr7Kc5hqGUjVWzeGGfNnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YU11iUAVukcqunSBmQj9Moh21uvgp1LNGrWVGmtGVQ7MYHdcKqVRYLgGNMaEWaZ9XLqzcw78abRB4SPEWHQVbJE",
  "key1": "zJnkLUi83VVedrmwU6A68V85DCqtM69GwnpVEA2dfJAFxPMApzBbYJQACv3sMZstJrAW8fmTzrKce6pj48bN7La",
  "key2": "3gzxnHkK9sFgNcw4wBd1NNe7rQ2jmqL9sDocNCiBQYQz1JgBo4jF3AgbN7evJXuHoewG75bw8Rtd5Z2iq4HBuUB4",
  "key3": "MLKHRiuP5EGYk36ckEJmpXA95if3UbReXN7x6c6nEUyGQ1Kpggzpu7B3Bz55CvorgLD1cPJ5Q4KX8SiQc3baKM1",
  "key4": "2KCVcyz7SmsrDzCYxabPWykojhgvicqSHKp4XyDbHnqd7nbFdY6W8nF4HmDoKiL7N9TgASy7WoXDwnHR4HCcuT3p",
  "key5": "5aBhq1m5nVVzV9wxXKbZzygyKeBX7vsfDRz6VYftRguLHVs9pkA4cSmXzAFMoYFDtJVMvVafWsjN8C9PRdeZUytj",
  "key6": "zPHN76DbRr6AdBa8i6CJvjUoFgv7VS2o9DBZvkADbKraJ3ZdeMpvCu62T96nkFSwHpbT4X3sDjBX3M1R9ZQizgS",
  "key7": "5bpJRKNQ2zWFf4W42jT39tcojhJx2dWqo2PyKiEsacHDEoLc4oGHaheYNEM3PztQ6ZDwbuxGvAyn4j9wduLTYThx",
  "key8": "2Dn2jwLxSjV9YxY2DDwEyvn56qJY3VtH9RHBotLbcGsNcrzpihsyWyeWCwX1wYbWaQAACKSxAtUQyFjH3dNmocKq",
  "key9": "2yH7RLecD3a4PUMdTe7sTNbRcGPDShD2Yk1NfhbqyVcupxbvNhfVxVgGirY5Fuu22CPMq9xre5x7pjuLhsZ6cqiC",
  "key10": "3uJUcTDzjGazycZtL4RZ9V1EzFm9C1q78yjRFfbaDDucBU1xwHiUaLyMpBsSGFyG846ZhWFs8EtobMZECvjQ9XpY",
  "key11": "3by9QTBQZNiXDXi9kESNKeTt76owTPpAatSry1GGjbZk7Fuj78cUG95PY46wae8WxMyamSG3avAaASPjPnLCnuh2",
  "key12": "BmHvEVcqUJPXo9QMTPpSYffc7sFgtstX5xX36gk5vcqxUyfQFRKwX7RAZFvA8Gs1tse9ZPUKNPgaxd4BYAnm4e3",
  "key13": "2VvtvMWuiqJgKVNNYMfSW83hTrhXHzVv1EvHXe2Qm8pyUzZiBYmD7uFyEzeVbeTQHs2ECqsxoc6PRfBoB8cPP1dg",
  "key14": "2CYLVzkfPfh9Sq5dg1p1s5eBkAmiS3o7PBJdmaABgvxZpmqT5brEVKXJX4g4Tr2Hc3QsgubSCRM7bYJkphej2PCJ",
  "key15": "3Kfi6y925ppyyJ2tqtdUhY2KLTuJKA7rwasM483mzTnVRD6xDvnt5sPapQvRDdBmpNkdLzrwwhpEFEw9cZpKZBrw",
  "key16": "4pLehikLz7MXiN91DAXfAji8LvTP6sbbuJbKdmTJTfRr6fsDaeduNcNgzhdMkQwMsefiVws9xVFkZfzswzfmogZT",
  "key17": "5gC6AgjvqcrGvEgsb5ZQj1QzNEHr4PqG7sKTLMV85XpnM3NQ1ivdRnMC7qrMWkwoanhoJ7VRhzZNK1uxxSN655LJ",
  "key18": "4uC935gYVvWrryZmjCAqyVAPRtT7xaC1RcTfThSawumCSkodVWazN736RojiBvtfCN73WZYxgSiFbyj2vaNw21zU",
  "key19": "5CakgoaDJNVqQRSKVjWhSryLeqKsqxkG1aY358p2YkSZg74XNzPCHR5ugeq6W5949nHgTMQFjfmNydC3jkCvUqRj",
  "key20": "4ZheLjQ7QXn1xko4jn1fDs4jfzHABqzxU6qbpjDKamZj5PVa2x8RwkomiefcWdEyQ7nUbAEk3SDysCHbZ6L4xa2B",
  "key21": "h9avDC5XZvcWvMBBiAorUcrmf8hxmTKRAUyedsKx8DezWF3AuZTNBYrHkbiXxP1wrM4186g1AtWwZfErq7PHoxz",
  "key22": "5u8ZhgvKGbLFWCBPD3Pdt9xMjSqeePxeMQWGXhXsqesyzWqGfvwiiDwEpy9GJC8oa879Fst5GD9AtfZHywiz4a8a",
  "key23": "FqggDgCS14cetH2ZPqWgBfj1TLpck7DGD1zyBRxsZpgHY6WG6VN9dsMNGdAm93CSeV8Gfhy9pom7j6en69m1bGN",
  "key24": "2R25gnLyhaYAekZeDypBjsW8yewbMuZxG2H9BtijQiLNRPk8XUMcP8dwE3TpjJxCkojEYfwgRfuFj7VVN73bQmWg",
  "key25": "6AjuN576btriJz3s4z23MLtQwyMenEuYvtzizji3u2CPbQuZdV25dBq5dFa3xTcdL6Jixdt1nNBKUQrW2b4F4m7",
  "key26": "3UdaxSrTCzWxLXgk2apshjyRiZfFs1WpTsEUDNdETWbmEXPfy45bQYnTceF9EYtx7hqY6HHMwCtbYgM2WTqoBbf1",
  "key27": "29uyXFYDzS6nHyzTNKd4eBgYEwrhccXfGdB3gxnJgQKsGUsSAXjktTdSVPc6HYNrP3NJdbfYuCAywTL6iyLbae8o",
  "key28": "2rneDtKZEXZLniBN3e2tXxTQE1aqq91QA1LMSzxcy1fGm5USrvsLuxmaowgyr9dWfkvyYwiaZkZ7Qim7oQcWHzPM",
  "key29": "2GnNPKwiuKPhmGRenWpA6xDZ4PX8SYpkuP9LL9jsWay7qaW979cTMFuDS7uhHhSC3GR64i8zu2f3MdA9MPLsKYQC",
  "key30": "4DMDxgwjbMxBdw4vFoVptmiVRvLrYXkc6gP9PERLKNtzH5YZtQXsMcV6wwBjtms27mkozQNSmbCc3Xs4vKRnjnmb",
  "key31": "D93FYYBm37cVLpgvYE4FqgpTxSByqDMNJURb8Fcpm5jrQqaCxgGHUwkXLXV3PW5SqCFtZjtaD8PDssvUGbf9uQU",
  "key32": "5xVgfPKkZufKfFkn583Jb48MbivZC4mXKTrGsddfuavQ4ydE3ZnhqTek3ZNMTWniajWhotybDzMJf39Q1J4WV8w5",
  "key33": "4UPncS5snjxTsQJTCxAjN7mW3ynasszwqhqr5CTjsGTCjP3yVRo6U2NyKRfuTQpToP5L4MJfRhBYuBrpRnfRAm8Z",
  "key34": "2dT2c6GKSNQPX1xMqDPwHZjfYeMCJ7KP4aVZHYVmnbUPUQ5T9DjXkWKULGjR6L7Y94RyLMpSHiAQJnomP6i36yf2",
  "key35": "jwZ8gYQ1LUiKjLexShXL913xxYQqLoquxpNNxBexkBzDmWkucsrxB7r3WuD7RLUt559rt3oedcfrNJdwVBHWFdh",
  "key36": "hBFNQQnBVf6XFcPzKnPTJGMRQhh17jpyaWUX1aYE6HMhVZd5nMAjgvfztYkKJEULJTC52H4FnrfhpUkzny8C4rU",
  "key37": "3s742huEWbSnM6Q2pmFt1mi8tm3pR3RV4vVbfVGGsjcDfBzhYeNts39fNj3QLwxGWGuMECackVhKUJMwWsv5R3Ho"
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
