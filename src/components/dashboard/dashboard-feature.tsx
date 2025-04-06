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
    "5QRaHjkCcQKq9AihoZmSyoHRaTz53zyZKTZ3DDZ8B3fCqCXhJLfDHbVqmVwVXu6oQDZmDjYCWBBieYS9ZBp73VQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqazW9uayx4YXhAm7iyWQUZmbXrBxd2M9muVRzMgqvASmnibAY4ikFhxWGc9G838jk6yPjQszT6G1YFBJbDTSMM",
  "key1": "2tRfXy2sz7YxnLuTMinot9TyuTt68ZQv3JLhrRTRTT5YbUc594JsmX3BfaurTQkiMZGHYUCvvDeHgEF4oH2nvTCb",
  "key2": "5aftGfdBLB7nAoYBkyT37y2r85t5XrSk5rPSLgyBwQbsFPA1qxsthSzW6YRiWKBHQ2MYu2ptE2jouM5pCAupcCvH",
  "key3": "q5j7JYipUTuDhihDxHsC2U1KCFoV5ZYqTBRm2qLYCKz2auqyon6ScLZHMNKkAEJNSa1dNHTYCnyDNGw2FDm9t1Z",
  "key4": "5RojHuRNmzcKjUtvLG6J4sA1JxdywFkUTj7UgphNh6Rhe1dozvJ93BZNa2NMBNGoVtCEqMiQtMnMeGCgQQyvUrVv",
  "key5": "4LpjVKrKqJ3TBt9PRMpVsfz3non7M5WMmWrYiawL1uNPDAo5nRcDZTPixffKZqAC3qJYYteLAdukkT1sHrY3PDu9",
  "key6": "4DaFZasU5tBQ2fUpUH13BfwMqVGbocLqjqAk39ckCQMDifYGSD79tVCDww5rbgnEt28rb6jB33yjewET6wFV8Wn8",
  "key7": "57fXVS1FFKoAxMe32z615Hcg2pTeoWX5shWqRZVjSCMzrYNPCifYraPwuANMDAJyUYwcVBUkkB4fm3UM3zUtt6sv",
  "key8": "3YqceEqhz2MdgGfCBxhPg6kca4ZfceDWUXbDVeFby8gLHSCS1QXz7Z6ZZQWpkM8hY18UTDdLHC745f6bax4vVP6W",
  "key9": "5Rsid1ftNRt5GHQVRc5EP1K86FfBcoMQ83t8wC6RM55cfh4cjoQGxcYcuJH4JwmiobKsK5Sa3n9gXC3kqani5rfK",
  "key10": "2bkUVsuAKMHq6TqhrVkUyMd68H9EC4uPM7bMUGrfSjRM3NBsyviFMf11ZsBfSsvrqCZ5iVYjvE9XUfo3m48KBVTM",
  "key11": "eb6d2ARCL5abmNf8Pe8sLRbHxF58hMkqnC66GsPUACrAKqQqt49tJ4chAqg6bNUdNqicUgTjq35vTHk1Rf9p23y",
  "key12": "44PwNqx5sZMZkKZsJh1CdHLqp9DSCLFSeFhPxBPwDccWf8LZyT1BQLFCq9QJLHRqPrj2V5hEt9tpmbEgpzCzujFu",
  "key13": "5qmgMThd83d6En9gFctbfMJiX16exggDtTgAkHiyDnS9x3hwN8FXNFt3GV6buDRJEXVtgDHgcUhjGYtRBXXKrWED",
  "key14": "5WZY5Ge4w43ineRwRdVaskrkvJKbAk9gcCZRoAUgzaiZhbKu3N5xHoqJ2ZKzevCRFuAXeu5AgkmYHQPsLtx8dF3W",
  "key15": "XjRh8WG2L4Z62uhJ7YFd6b4A96Wzx2ekmEw5mSxAF7zYiUgsLP4ajrwkyRZoFCWCknzWNr2RZm6SKsPZqkwHJFd",
  "key16": "5ztdjPYDjka1SXRTWdFDrR8HLrdiGaq8fLuWAyGHj9S9V8cXAaUz8oEBDEp8RALWCuyZF3t9mvLPD5xdJBDtfCp1",
  "key17": "5PVwpaXWmDJyJdFoix2y5knAguHSwLJjCkPUNcWQfDrt1QHWAfXFWNi8p753MLbaoqsHjSfdeUtvU5wF2NuWpDvC",
  "key18": "511HSg7QQr8mQWyaZKrNsB4FbrGUc75wt7wuN8iKza4JfmKC23FirH7YgGZLhgmjaWMAcr9Twjt2cCNXeaGsESsP",
  "key19": "PGufXjFxdEuGktKWuhnQWAisoQyKE8E3Pv26dUuDjg7dQxzG3fdwdS5oPgoi1s5ikHr3PLSth7vxpMsTe8p9HPP",
  "key20": "44KV9vb2oT1WQjkaJGuWbzsn21Gr9qgqZgNFfHrrA15ntLBonELmXfHAbEZFct1zyDYE4wWQEmUuKsgPCH4K23Ar",
  "key21": "2WKWtjyw527LErdCxDncyFVkVKWVCBvYX8Les68cTZvoMPLQxSwwvkJib2k9fLKruU5X4HNbtkV23Ydne1LQhijL",
  "key22": "fY2PNC9JtDxfrYyeJxGYQ4yZoGzz8hihsFTVYBc4KQSbQnzYmP4aiLEebySTJHNj8ZBSKjm8pQSLK8h2XMtEc2e",
  "key23": "3ZWdzHZuFWpKbrGmAUQKYzQifS36s48Q1QNvJveoPED16HReY2Ac3R194Dw5bfqEDBU8JTgH6Ec5R9qbsVtFyCks",
  "key24": "3LSXqVGDpwnkVPqXhJhXsPbhnSNqBbktRciQvh3MggLoGfpEf4SWQudgv11BV86CpPuc3DCnBuE9vkGYdewBua36",
  "key25": "6679d4oiHTCS39QNcdB8RvVQnQbKPNHmfPTxaLAXawYAUMkcUFwDJUeqpChPRGmDsRatcZAALT4xAyamAqr5v5PB",
  "key26": "5Qmn8C3hQ3UDPpLjv4p5ri6yPuv6jLo9X5QGC1od6HNh3ru4LjY1L7JPqDSpmzMRk4vxrYA2527B9ZyfkB3kXwVT",
  "key27": "5865BaCviDNZPkPvwdRYFDLMMskfMfw6zQ5nDVQYZbvvxC2g8ocPvfzXwCQ6UjDP897L53b1h76Nd4g1fDGZ8GG6",
  "key28": "5qi3PmyH3YoibyjVwrK3qxFvuuGAfKZHVj5fu8nbP12KKebesMpYVFUbvUoirGoaBgTqmCJd7iExE9AZ2EVmoqz2",
  "key29": "2yMeXRqRtNigGTe1VVtjhC7Q9vZyi7CN4F1DEVETHQJd6r4juejo1ava5MogKCQrExGZX4d3AmxEXnqEAU3fTvPG",
  "key30": "5WbDUc7XU3hUNm26CSDLU17wiW5uk6iZqtFwRwhddragbJ11duvq7g6cWA7fzThGP3b4VrDntxwQjpnNcZsvbsHT",
  "key31": "48V3pm4KPqCPkqKBvXkffyVvjWJnQyeLExRvj27xDpMaqgZ4VARy2YzuXvGYfuQ3CgXR4j7m8Pr6USKdorKGxXP",
  "key32": "9Fm365phMqAEjzAoHWkT4wP7eQ5Rj2bHViT9wZ5Ce9sY3UW5tnMpmwJbufUd3WW5WkrGrRemQtPYzed7ybqt6uK",
  "key33": "2uU8FbG2V77ySKxM2TUWPWNGXdyKof1WN6oUw7Q5ZnJiGvwfRKEBNBzCZEqGP2RKfgqDbTtnyc9nU4MArU75kGiJ",
  "key34": "MgDiN5S5tJ4DrzAyzkUDiEZJJhd2oyoQJhdm5J3i6GpUQpj1zgDNvFKK8UnXLBHBFBSPodGqJ9QSpjyPByJ8tcM",
  "key35": "4NGf9cvGCWrD4eeeJ3mVD2kAkA3ctoinTGQxisdKZeZsfYVtHXcf2ZvdZ7oMHTkhZuWAJvaezPT7j8a6eaQ2QMYo",
  "key36": "29fAxxhGk93Bq6QqkjioZG6AvvnN9LtkpwCbAbAyyJLaU4ci2NJeEnS6Pme1rwNRjNtPJXbXcrJs3zmf5oAeSAvH",
  "key37": "3C1h7qZS6aW6Mb8W5tQPaijJzVoxnkXVgnapfKQmqFVGGkwM98wmGxfXNjD5oHkJ6YMe4H4A8W3DmFCeWcYYemhW",
  "key38": "27LMd3xcjYYrHHzyz7Euzok4fEny6Qgddi79kzUkCUTAdmHTxx6Eei7EHAeb2S4gAzT6ri81whKn928jkKXYKrnr",
  "key39": "4wgrPw16NiBauucsa6P6oPuWAgybUtyJNXJuqQASvWoRa61wDyuUsqyLwc4Pvztq9Ajog173fAkaxtXHC9inWjoV",
  "key40": "5iiQyh26yyXQppoyzBp54JjGcz1KV8LbPgYC84xVmjEbVP8x8qoFJdqZJr6mey4erE7e1YMuqvr1D2p4UXPmJbSY",
  "key41": "58atNoWNvAsM7PbJMJ9dvSo1h5oGcSgegZ7qqU74QAV5iyZvoj5u2xdjrfRQTTyZAqg3FHfqu4HJzDoU1GzEXDXw",
  "key42": "5g4hDdHJcesnvzTjxCK7zRkRRQGv6XHkRnUMCyF5Uo3gKQEVu54JRN9uZGNsxzDrkXs8QffSS8ivaQugTsyP8TCX",
  "key43": "3Yo88PFbeGYdZLRKXjsBq4dqiWNT1mQfSPXmQLWcrbuZHhSyYhzQ8zAYRPLyP2gxUwdiagVzQeFTNA25X8AGxrmc",
  "key44": "5rhbZFp3dfAbryUqBBPM4LGt3SrEXTLYU7kL12PvZ1vPZxdyjqnGdCThrRoDUFa6Dx6QQpVR42v9hVgvAFHEaG7B",
  "key45": "3P3KnhfDLZAE1eY2crQsaLUZL4hXSJwRZVZcvRq9RaWkZwYiBxd9dJa7v4brN3WYY9cEsHhPtLGeuv63KnSUxG4a",
  "key46": "5jEr2AbLd8buBtDoAcGi83qJVtUHYQsS3X6XoHjZqEVQgaQcsiSFMNr2ssJBcgFpuy8f3B4XqMHZSxVVyP2EsDno",
  "key47": "38jWeVYHcPh2bMkY96v6fwLL5JqrxtFV4B7nnJjWnvoDBLuGp4xgGdVLACpV7JeDbGgmBJt48Pf7NFHyiHjZ5uGM",
  "key48": "5owNNPX5gCsvCvTwjJsUNU1QiqE1MHfTP4gpTwdtNDTsQC4f7otnJpYMrx41jUGMsAg9wiMhFV1c51gCQ8cjNSev"
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
