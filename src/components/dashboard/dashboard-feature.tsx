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
    "669wtUs3uMV7UsiEbwPBKVafkk7SAQSHLucf4R7g535qXQ1rGVX8u7wzLbXdVjBi5PqkvasCD1M5FxYQp2ucipbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpxJtkAiAjTtqXsqHyN7gTqN8SuxfnKhtJTHFtcAQyaev13MUJXiP9QtQs7K5gYZHdE8JAEBCPjPFJHH4S4dkAT",
  "key1": "cob48MogKtq7AAEjdBEBsMbPpU4gWwvxACyLfjjhzmqfT79NbBxamtmesw1gW3nVjwaDpcKuw5gwQ9zmnmfEwTM",
  "key2": "3RWfEbUkuqi99q2RieWDFi7GCk7utD4xN8nfzXijDB6sgejNcSbSp1cJa6zNpzVWvrdgpEqfb1wKNCXpcxMqyD3o",
  "key3": "WHPtNPropAZKVKVFRnoAUmZ4jHHG4MKwuPAjZM871vMzbXAu1fDyXNMWrkTit5S73YmDcBo5kbKwJMHoRKq3FZq",
  "key4": "4GTAGxW7yB5L3Y8azhvYdL4CTQAm67PxJZCxdEXLqrG6CB8btKExCFSdp8PdwsDK4zmAtbjnTtcfwD7xMT3WHkZR",
  "key5": "3mCC82zTaqHxsNkmcsPY7pzDrWMTsYmGVmqiqD2A9WPA6dtSxR2XWTMLzB6SKicnSoz5vSY5hzTmPCcFJgMwam6V",
  "key6": "2fHtX1xFaWUxCpAsW6A6wF5kc9t9Q2gompVM7ZyBTosRfgF2i1aQFDPdGoT878HEobPJ3WGug8oahPfcrWyr65vx",
  "key7": "5j4QyD3GccXvqEX3VoJahgviYzR5MiNvETTivLaHUoht9DT3Xp5fG923bZrcMRSbgHZRAmBjfnSGuUfmMQFkxwzY",
  "key8": "kU96ECuhsHgTzS6yrGUBsc1gR6UbPAMsvomdKdPuBrqQW81tEo2Eejyt9454Z86rDZamXkbj8ziu6yYFYCmbxrz",
  "key9": "2SQSrXSrPECNVYic7eWYYCVAvk9e662T5faicsJU9jh3pHyHGkmxW4Bfenv98e6rNivmBET739cvZ8xr4bQAwKWm",
  "key10": "264wfq8kQ6G4Sq4qyD15iQMen3pgF9iREgncWWCPUUFkBTaBCssx8fmMLf4gFFgjj9e6bN6CiSY6uuZRMjfXbk1G",
  "key11": "5TNba1BQvTjKyZP6RUCi46KVYNZB2Sf3zfw6UNjK2fmdRjrPH9cY3tDdVV4yDkQueMVGXEirRHAx2HW9a8gH98f1",
  "key12": "559p8JmMnAX4D4v14Q87Ccen8wuHDm3K9fcsqYRdmU4oK1QFgwy8susTdMKVoQr9bZmbcm3xcHfU4gqRdHkmhYNu",
  "key13": "jVq5sepJ8z6q8wtD6i7LUC36RTRgZWmoDvX25qxsSKiVJR7zvTH1sby1G3KRCqDbszx8vnETiQdb5hY8RfPjzio",
  "key14": "58e5jsWXrvqH4YtiLBjzAAHyXZz196Cwdj1tsvALmeYeaQ8k7Vv6RDY1DQ7k1HvnFovVhH43FKx2VDNXbeScHK8q",
  "key15": "4c26BeKJBgXTM1uFYBtZsEUEAyjjKqjCRHAbyKinf14w9g9nZQdRBZ4ccTpwpnBtTJH6AsKFBzxypG9y6u5RBgLz",
  "key16": "5kkZo5nq69K7ATW6dwCywGcw8ddBRz6fHnANSyWBoZVGvMRu4H9ke7tWAAtqvE8AAeqeAU9o2b1vw6mAraYXQdv6",
  "key17": "5ezm4bqwZPkMKHY6jDmUsrCaGkNG8JDjCpkHb6ZvmrZqbKMcs16TSwevjSeNhbderXNxF4b4WyYz8S9M97sgfCzW",
  "key18": "3LckLnD9nxbzRnRR2pJjxw87AkCopXsstrATRjn5LTjXo7fGaiWUxGCpCwjzjepTAo9nQePYCPRqhUkfxC8c1HZK",
  "key19": "3FFv5VgEoaATHvkhZTrrjC74m22VnzYYs3kTWWy1T5LHATVANHWg1vdqsun3Fwpp1ZL1VsTTBEKgTaCY4sH8gmtr",
  "key20": "4eG2hE9opH1pQbDAfxemRguUUz1J5FPQVVKQh8gtJz3nYmWvCwQvWRKYksEhDSdqjht6mrv9GqRGeqtaCDL93XvH",
  "key21": "3ufoab2q4JCA5CzqNXe12gZm561NRPwrtrYxXvWSM37YojB8YF3sMGgLxyNmtQTSU2FaMtBv5YtN4ymVVSSoqS4N",
  "key22": "2isuXPHDiEu2v8mHoFZ7CoeRZBsvMoxzkQMJHWXSHvz1VJ4TJ4YXQZqWeBDLLUXghAc3kNhnCJUoTiNPHcQJSKG5",
  "key23": "ZpJmnkmWTberQ9CQxsuGcNCSPQzNEorm1Jhgci2XL9Si8c5vhQL3gXSRbK6oRfr9QFDK3X1521rvi313vHAU56K",
  "key24": "hD1iHQTMT8zkHrvCFbhSb6MKGvDLVTBxDv3NfYtrNERiXLdUqkkMTEgQy2Dvc7kvs1ygV6Z6sZNVwaXfDv3tTRd",
  "key25": "5fjqFLmct6ZVWZJGKxLERLQ7sswUMM4kq8d7u6fjdVkJ8PWGT7vuSNGbSSQTtMcYhmmP9atzm6cQ4FRMrPgDkyLC",
  "key26": "3Ki1HbLQzLmTyADafSWNbKRJoRbpcY5o7rSYkk7mmUmRUP96eyfYRuSJQeMpz4Ji8cpNwBJR993M2s2SdrYNakD3",
  "key27": "32z1Z3WMjbrZfUmJRsKqxTB8CuFpYk5CfAf6ZuDS29rohsghUoTr8YDSuWwDEbTf1V2DkTNatNQXBVGtsPaaS4s5",
  "key28": "2QdydoXvJXJPZ73MVLvk5tWHXhSoUbkuUswJMf983BxjiGZZavTUtVcGkrzBGqKjCy5gysRbMZRwcE9EZxbo8Guv",
  "key29": "2VfV6pcUZvfy4ReXjvw2LWgS7rvE11xZXCPek8DtcxmC9Hfv82TqbeJ7XJea2N1LmHWcTNVELLnBVKpV3TiT8Fsw",
  "key30": "5F23udERzyBWgEXGaBuGjmuF3dwRg5RS9WR3AjdPH3ytSkFaYLFMoGhZfVqbMBCEuXSXDp6VyRoYfAwkCHvo6jn1",
  "key31": "5duaenT5jnLYDggaaMg5dthCcsQKxR3YXmHuRg1m3Fm7nz4koq4zscMMugSZ4QTp5pJRMY2nUSkiEZHdozu43h2J",
  "key32": "5rCE7VdmmqvvnhQtcTJME7NrbU5zBQbuxN6CTtkLZaYUYSUxQbbDaZSfwo2BWdcqB33RLrnxkuoniaFJbPHuShFS",
  "key33": "5CbPwKWEy8ekJdrSs6QeUKJEEUcpyysRvL3uQQwPfjQ72nDMPB2fiJyWMFgx2jrftKEVAUziVJ4i7zsswrz9c4gV",
  "key34": "4uVpW2KCBr7Q9gUtR23QCxpBpeNSQDze5ESaeEhiVrkwMAfAeEz6ArJUTPExYCXUbKZd4CXgbDmh5ETyAnZj9dMQ",
  "key35": "2UeEHG4Tz8KhoReRygLy7BbZDsveSP5KvqsiiwsrHqS2ZJohuoukgK2JdY2PiArZFRSfDhL9CsSgf6jdWMXnpRqH",
  "key36": "2akupMa9YAZqFopfDoWUxEeMhkF25PzNP7EoG5DwJfEEjBuVSk4ivLV4fqfZr67gD54dFoEPopmYbrGKrRDhgPva",
  "key37": "23huzENgKrYcVTN33pF362GiBgxmoA8ZEHPJYXuB4PJUvKCgxhoJWkuH2mSbpZKMuJxen8dbhpAizJw5nqYx4fcu",
  "key38": "22mF59mkWVRw51K1q9V9WK8aQT4BC3zBWJA87dSuoLmBsZfovXnk8eYbDusNEThkCePHj57GdMdvewCVEHcxHFg1",
  "key39": "2Pq2kyMXBM3M1Z5sFWDo8wB11JFGZ5n56jDb22agfDzcZjhnBsoo5xYntML38tSVwt6g7uDKwEY93kEDqDiTjebr",
  "key40": "5H11KaD3fStJAHvY4KvBB3DtPwjcsLksXLCHbqWWgQGxTfpGitHceE2wBV7CEvGEUPWh5XzhQk7WgjzTx4ufAGeb",
  "key41": "4HNc2dvNUbedDmmbQLV7LLs13oJUqU6ycdf9PmU3667n1AEs4arDoVDwe9XDnmgNk3jEmrbGEydSazW4W2b9wLnA",
  "key42": "3UvnVoGWaJBc9vE6Uh2FF5Amh2cxNT3M25Sg16EVntZXLj6Q9xVnQdyDiTNrVWnGeLKFhDYTWW4UWGx2cTf5nx7G",
  "key43": "3L3xVybNwWDvyNh8HknrJmjaEv6yCj11cJgJ8GAZWYNLUoLWEDduCcnnDqC1GvjJsg5r2epFhQpKM5Ugtw8euFRk",
  "key44": "5rRfTPscH8fqPuUaVQu5KBs37jWdkzJUArxTAgMEp5NM7gCMKWUBiRaK5UoKpukcDqtA8n4Y6M7vvQoGVLTTFaVf",
  "key45": "3WP6Ffi6LpEQx6wHt3BoXqE8JbhLkD6R2ypLmm4enJhgZCPL6JttJN7uUAdNGUbv8LhNdQ9sLVTHK49S7H6S3ek9",
  "key46": "55pQmyDRHsdTtbmiQurcgF3eJzBpyswHYNMSxidPD1hpjrRtujV25435mi2WD12z9UcWbR8YT6V8DQspwasyqFv"
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
