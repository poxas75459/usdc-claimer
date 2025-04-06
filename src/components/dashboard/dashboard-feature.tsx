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
    "2jzb7RBieeXupEaq1FjBmaQTt1rTk9pwcgxfPeiErsEzZEHrzmTwHnnRgU6L7FEVF1ujnbD2hSWbe4eJfqurv5Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jorjs1gT7m91r9Yatw9ZiX2vQ5YTkU4VWxYLxVYNTa3JPKomuux4LrT23J4MUovpt4QpFz48CxseHm8qEtEwbXT",
  "key1": "4G6KmVxStnefT4hWDwdsJocBMdGjdFA3kGf15ih57xYeZ1WXsCBMsUPQCPMscnc4xR6S6omstWhygrYrY4ze4Uhc",
  "key2": "4Y9Prtncc8dPAeJUwLRtDh94vtvzwdZGMtKvjgo4FVr58tPAFDuHjMExnFeYEfpBJpNPNW3CHhjGpvMNVhAsiyev",
  "key3": "48dNv9VWipmeRwEatHo2FvS4i28SA7iAjDKRFf8cfrmrNb7tZ9X64GcVwvb9BY1X2HZRs68sSJBf9hhT4KC5kE4u",
  "key4": "4ELyqLiRFdoyMJUqXCpDFuJK6CsQxN4rsFJM7LREyMqysrvy4sQRg6cB7WWeipf3PKuaBwuZmqYJqKtcQeviwqxv",
  "key5": "xNSPxkcqXKNut5RT972G4vMqvcdE7D8gAC1uXi9vwft53g7GiPhDnsBPHpgzhBZqtBMWhwo7gu4S7NkRhZNiQvU",
  "key6": "Q63nsKjcN8FcWqKg81zDqsyzZmSH2RitgETNVXdnYvvTtNKFoxWmt4CgEJm6XBroFFBf6XuaYiLgxozuFecjEPk",
  "key7": "662MT859mgt12vfmn1VKLDMgsi33sFWeqnAwWbEuJLPiHvUiDNMfXeRnDpW7JnzQjQqmxR1VovLydNcvoTGK2w3y",
  "key8": "4MoM37bZVPaBqRuRbK3oW8p1xzSxcz6TMUUsp19xdR8rymQwBjvk1S35h8sBXgXue8cV7f7xJjcYSZhbRcDr3yeU",
  "key9": "1zj5ALyHSw7mT1HpBRiL5dBhBWFCSvZjrH9vJijuFvo424EiQWvDCYWknJj3qqX7FXo4XFmmKKN1Kdq3pgRZf1v",
  "key10": "5pAgiTgmH3azqDFEfqrxRVWUmJPhYcZfdkbjTHTVWa7LEB6q9FsmnvsodLPEqY7Q75xFXHSBTFMQ26K8PHRPzzZv",
  "key11": "5hUnHjjq7KB6Vby9e7qY8kjsNBuzvdnppRp6wTnre6VVvc6xXHn8Q4iDxbs6ieLr3Dx1ypsaXrxQDqmzcE1qgdqU",
  "key12": "5u8PgMg4DniUvcder7aLjKKZe7Djpa5XY1NNgqM62b9J2Gv3GqNcEAUYqjf85rruVCR1fFjq73Z9kqEigetXYZpA",
  "key13": "vizDPkEjsEM5rKddXx6xzawXQoGqrp141bBafY4bbLZmNCwyHjemyVwo48yedzVfy6HCkohGw1r9uXvk1gsPeop",
  "key14": "5DkQCEs6kgoqTzFcbE5pP81mSCxNPs2mXzb3HkhRPUBDpEjh24qpocKVaFcH5x8KfejPqSsgwRDX1bYfBYyFqAof",
  "key15": "2xAx6hphSfa1xLPHw2FUi4jYBtPQkzu3La8KejkE2hzZu1HMq831XUTnjxSzuHfSb8fHwAPRku8kwpiSHm5ybs1M",
  "key16": "34CLD86nN3ax22U9VP7Y2hw4jVMB1sYdet4EPxZ4n8sFKUob7ZdtdPcn8W5pWe3aTPmte8mPqr7SAkN9ST1dh1v1",
  "key17": "ft9duHrr77aP7ErZvsfhresWgqUNekoGRJKxWrKHN2k2DfRJfE2iCc321n3VRyR8ETDiEuK6V8K85yWi6xN9yPw",
  "key18": "biwS8mjaEzjmeHiGdJ2bUQSvmwWMzzfaWDG2igpTHxTBY1f4ZjU2WwiFUMvh5jpJi4G2ivAYNp4Qdix1Sn9BNxR",
  "key19": "4ctt4TLDeker1jAgkfUvi6Rwjxa3cX5tMwwB6AzcYbWoXtqqrWMhwjMFdfdfW9oyMefNN3gdFucYfpHNcFsDTA51",
  "key20": "XAdfjd2YMARtt5Nvso6NkTkASi2ZYNyaJpYoyt8uNLuJZT6fvzX8kjHdAt4qAqERSBfDM7TtVjFYyYcWmN7RmJQ",
  "key21": "66ujZ2wZif7waSXBznSKt3QGN6DtXkuS9wJvhDTquFc9xGbAMGKrgRPTvQdQuuBf3seiC8vYmxK71xLmrvS762Jb",
  "key22": "KQbzaXDmeqiSyaQWzozk8RoXWvwwqVsuANjpUwoQM9uRDbNck5bx5gvQ9M2QGXXPhd97oq6REMRMuT81crbjHUx",
  "key23": "3A7p49SPwhD4FVivbsv29QpFqfdMHMguJdesxCeFTEBbGQM6Kh7EF69CKwDkrDPYqxcCyEMLp2SRVCZSLooUXwqv",
  "key24": "JjNc8LKmBtavJ3EPvU9B2VN2LPs6xNzf4Tjmb4ykXJNvPJXMPjXgXvsJJsmVLqBmnK6fDRG2qBXQU4SRy9yBUec",
  "key25": "wfbzGXnqsF9768HHwki3sQK42EZjgJiTd57Ak4i5YxHQTgwLv6KgcqP2FGUNhRdUcpq6STCuRap8YsdfVAmcirv",
  "key26": "4P2cTXDsCbVRR7iwWMBiqFaszhKtbe1cGMUgU7nbvV5QudARbxNNKinjzcUZ6HeHd3XeZXXHKDJwrG8tCEWVRuxx",
  "key27": "3fLLPwExfnB2cVrKD1EYKJT5HaNAcUgLoByBdGCyZ4dbrg2YgHWNCSjgueZc6sNPaoP94F74W9tAD2VjVu95j8QP",
  "key28": "8ZkJXb5krJVQPN4gcMk5LPD7LWpjCZo4bSrcAyS5oDQDPzq5VFTNttK7tqdnRgf9H3hxQn6m82c8jrwFAjPYF9Z",
  "key29": "4pganHGCtUASgtLmKwDhVSx6jfQWaXBmgSBa2eSoxUYjH5Un8AtiizxAm4y5vKs63rRQe2ix1SZ7jAUeue4nBjUS",
  "key30": "4h2N23bVMcwC5dP3vMKHnbXEAkGKvzwJXj2iBsWxmwYPRioNAfG3utoHsps8XcqVecYGNGxmxErpXfR5bkPz86oF",
  "key31": "5YnHCc3WZ3gh26qxSBN8gs41H1epKizPfzNyX2KwpjWypWY18LpN1jGhQuVv231LDtZt7M4e3noKfnznyd96KT4Z",
  "key32": "655UApGyWoNoYdy4tUmJJthPHKEEJHm4fhyo64ZfoWn84eT4KfCetCF2pMrtJn34aUSVkZpqWd7JDu71tGxmK9HY",
  "key33": "3xG9YuvDVqLv5nj7ALiRjJP72AYvzXDBDgzw1eUppoujyPAoP91u66FVCY7ptCBuwHAVaSadsUdZ7xCoRzKSEiKH",
  "key34": "46JZo3XyWfwN3NJ6XztZDjme2KNRELhMgih6aUApsXzXsovcqLr2YpnsN8a9wLMh1GoZJjmcG2H2Zx3BbVVDoQZr",
  "key35": "2RxfYF3RLKkhzX36vEowcWYhFgTdyLpoYbEyx4JkyRWogHbAHLfjYEU57CcyyyiLX2WQBc1GKpLQy7Loe4bJQ7MY",
  "key36": "4r7LTuzYX2CQnFKDyQNaF2EWoBPu7zq3i7TCBzxzQV6P3S7R3VQ4azHME8f8SPKe5HJ9B7T6EBQGjYjvU1wffZHa",
  "key37": "3MTKBEf3n4ddnTueNLgnRdSEZ8pLLLABNwVkVtuK2LbyKBaie7Q8E5vWzC65iifmAE4U88ao1PQJ7yPfRKjJvp6v",
  "key38": "3s2cVAuPj6wqtLoo93LuSgnctehfmzBUCWqmotcNT22Scogwvj6uV1ZzWDgpYEAWKtfdjgqszQN4mGZ71hXg8xrs",
  "key39": "3D9TdSkpk7HtXQNvYRDwPbh9o93bPcQJ3jRHvus35zDQ7iUpta7v63Qt3EeWByURgahoLtRG6vYGjQmPnfParg8Q",
  "key40": "2ZMQGFrDwAFWDtQFbf5oKen7GcFib5WFZTHjXKrLTNwUabCmCFnqXx2Q8PbowXMo89d3ofXQquV4PBhhfeKR43z7",
  "key41": "QzfzVGRRad5ub6v34fuQXNjxEJGetbBcFoRxJCSzV43AVXezfdPeSgCPndnX2WQdpQjucb9P8buGyRP9o1vYeKv",
  "key42": "x7BfdctMjCA1ZqqbGv23XNmdtko1CMN5DTx2kHUybTRzvFoNfEa5CzZAJ6NanFgdWiotPXHYbohHov9JXmUNXfr",
  "key43": "4bm4YgdStB6tsgkcshEEbZ53a4osGRnNBrHFnKvmYuQ2YJA44EgASVVw9DQ7ZzsWWQSw38xNFyvappmAeNJMgPjs",
  "key44": "2eqRycqpjJCZaq5RfpyYnvWoGQWh7p5ZSvTmJNBAc4ir5hPSrPCLWK7U1RgaUz1knCDHtu3gGP9ir3HNYrTYdxpi"
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
