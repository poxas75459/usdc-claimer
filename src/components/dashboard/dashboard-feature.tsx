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
    "2FqzY2y7zgTgR9vCYwrgwJzf8z4z6rXfjV1ZbHvbEF3yVZcPcx6BcXJz2X4Cy7TjiK2oeqqPhfFco96bPFxDjzwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5UwZBf8x52ZaxwsArbvx8RtzCkmE8rDPvyEXKVQiyw2vvP5Zs6HEifVHj5h59s7Ri1yiiQDK1G3vqSpAJPkvbi",
  "key1": "Tgm64QgmMC9wcuf13eNt17YbmB5vFzSibVBAABwpRacafbG4AQhNskirz97TLsT9syZrF25nkfz492mTziSz7r7",
  "key2": "3bnBbmepfi5jG8EEYfEY4YeGCT4Tn1ADasXTov6s7AWicobsbK5h8h8e4i67m8HRhcZYX22VgPtZX3kC7Ju4R45B",
  "key3": "55VbFE7mUr9R3zYYp5PsppUVh9K2eLYK9QMvYVW7nEs7J8NjLbk8vJ53CNPW4XLjn296DS2o6GGAsLtqP26EjAMe",
  "key4": "4sTh86N9H5JGwkRHiJbqgoVM1ahLcFufigKmgKxRBU3tFi87iq5MGPLWjf2H1b8ob2HbyofTVbhSkejPegxTZuaN",
  "key5": "Up96qSNwHG7QSukQFRpG3HYf5hvoq9dwFZhavVCCAc1uqjWD2nKaXT4RVqMFkJy2zRHbAWA8MuTPgTcvr18khHc",
  "key6": "4zYn5eUXdmLQ9VJ9zhRoXjE4NHDvemmyWmMv7jpwpWsgVPubrHfxDgtonCLWcmegg9b3dkjhUTdEFC3A3S9AKpGm",
  "key7": "5z6MFDC7YU5mUR6Wwsn9piBmSZZBQh5DLc7DUWPrxQbJ5iUKh4mitrVcoYsqKdUh3SjfAdqzvLGjFLsirxrhKmE7",
  "key8": "2SKHbfESX2HFMw4DvzF1ojPUgQsxZ83KXq4MnzTS2cTYZBAqM1XrWxkpwsiqtQQ2fY7TqTFLX5qcHwetffda3U4q",
  "key9": "5ZG7vRpvCJM6YV9Lq7ThVwTcP3KBzi5YZWaJxBEgs9d5B5gnaLSqV7HJ2QWgq885nUaDh11HQUZByiXtcLie2XQk",
  "key10": "2FFL6dAkjSQzsbN8cgjxjovdLTnfZVWvRzQJ6bYnPSx9EvgdWLtfdgWfJEkMYG6qwDaY4pszAyek21ooa6xyXkfR",
  "key11": "4SisXysJMeD5TYX9oB8RxFNaXyiYwzNsSz9o9hDH64C1kVCui819VwWfr6y9L5PjzyoToHB3wm5EShJN6eDszU2H",
  "key12": "5yCMXF1DTmgQTF1BXnrxVJuqFyjeCZu672GK8usk1ByK14Rd8Bu3g2gXgWEafLmxvNZZemYhPPCgLTapbASB4brZ",
  "key13": "28wQe1hdWUrZsNATJbwfSJmyZHqc2CDUPnFhaXdDmHkaikUdSftqzLedPpdEUjSgAL7mYYoH1KcF6nDm64nb9byD",
  "key14": "48Qzwub4Q7JfhvekSybX5i3EoDU2TJ1dQUqdjjX4qkJiydNHtw46BXbXE4LQsHNjz1GGgS1Npv2xUeFeZqjonWsu",
  "key15": "5kb21yDoTTT6mn8JeE5hr1hUAA1QMCQo7gBav2pFHHtEU54QuRyW72k7zhkx43McUP7o6WZCzVajXj2yzVeW28gE",
  "key16": "43L5d4s1AzyDjSQYo1roFodXREx4tLC7qC8BRU6v2a9vhViAqvKdGfmw7MMa8o1qfEQ2wosgrMNnNmaNmfLEA9vW",
  "key17": "4vJbvZGriEkwgHYwNEkYzTeBCgkKPxpsZfMsp7P7HsR6Jnc41BSGXqv5DnSPTU6wz5wiZYrUud6k3dAtTyTnf4B4",
  "key18": "5QYnVkk1jxEkqACGySiJQsJMAJ2hrDZkP2tqBW46EZEYDA7tr4ydoTnuJF4zzM9ZgaWFhc9CUCnBajP1GCJcPFfb",
  "key19": "dk77zGTibc6hs53EGtg4GuQ3b3JzSSqiDk2NVn5GMaT6pMmbZjibJ3b1UMYNDG2rP3z4Q1JLGnsM7j3jfNatpGh",
  "key20": "3Dj3gFvXSC5kmiWpvCTVh9N95x86RCbjmLCTSiVPzbK1XYoZ1qLkatZC9duLmV44hWhQNbDaoFu9ZEfLWUgTbchL",
  "key21": "2UfxHo7JyTZdurwmCL6jHVarwX66ruB11B9zHcmguwW4hY3da54uccBDZf8vLWgU4FqFh29cBbdwaMnRmMFYqWLS",
  "key22": "5iRRuKRYm1wWexJAJKanLtdc2MnzYi5Sob9oeWVp8ZStUqWe9CVgqTEoVitCtbee1XbDnoJ5wQ8v5c24YvTReyZ6",
  "key23": "3mzvKbRRvUWAiskmW9jKH2V37F1uvcQXv2TgUGfc7VvsWgiwP1Hq6KXNZKENAQv3nDvC6TaCDqLyL1ahgLLuebKz",
  "key24": "5NjU9rDdit9ms99QNR7bWiyAvYuH3ApLS4U3pSnWDFcRQPUQdSeDnDmgDtaYaz28R8Eoxv55Yd7ayghRt9xnxP9J",
  "key25": "3Ma4kuf33MjPgB2yLJ9zpmVChrpNzt12Jn68tyKjZh4A6RQgzepGt7tVhJ1WDiAg7oNz9HsU4Dg7BzARQm9xXDFN",
  "key26": "42ouSrVNpKYtsq7ewVjK5t7LYmuc9nmGbUQYGRBe2gAgsqxWJijBAHkgxRXcMXujAJAYHSLEBDGbgCZ9DfpbkvBu",
  "key27": "2jgbzDc42hfTw5W16jMfWGH1grPooxHXfhCbk6LZX6dgpjG7QjuZGKU5dMo7jzqyueEGVhN1qPQjCvsydEsjGafD",
  "key28": "2CUSspyp5fzbP6YuXDCB1ia33qQyyDHDNMGhqLmgqJ5W7TFfSQhVjCeNcuv9JhRgoszthqYBbPJfb17Z6hy1pnFa",
  "key29": "5gw4jxRhu5voCxEbaMh3ao2RUvWt5J7XFTTgoDhWB5DB1uuxNiaNFQX2wRf4i5yjPkjMFqYqpJ1RXyKqmQMtCBhi",
  "key30": "2WfYLDvr3yaGf769VW2ZyU9q89DgZNfBtAUfwpKRszKTPmjTc7Vah64wC3HNEtbQPPdmMjsrCpCgo5qc8pNZU271",
  "key31": "3hoK1ZmCyWfFEfpq1oNKkRduexc2amNpWg8ErYiMcpqUFRNrNuB8nQvR1S6wjw7ZHwKD8bCwwf8qu9JSezRy6X84",
  "key32": "55kuBgRJdmj9psJVHNR3wLB3CGz2MWACeKRSroL1JP67HMeXHare1AVo5RLdtumLLu9N3JLhXo5aaKVcxYR3NSkU",
  "key33": "5kYCBwiUcSaEoCoh8CZXNjTmn2CCGLzWsAYhmjUAZ2fJw5DJqUMJ88drh7zhbwMQwjEvDAQvRinubX38yuUKLEDW",
  "key34": "5wnu5zRtZh8i5vCDQ4DwfVvUa3j73Xe9u1NR5MbVmBrTscT27fxGUHE36fD9JMULos8XnCHyszPiesbS7n84FykF",
  "key35": "4T1TCcppumENkkUvsWbabPhChY3fkjPZGikaXehBcpfWLWBNw6R8t2N8sgrpHXx6A3za6rwsSCaHfYeEuH6msS1h",
  "key36": "2BeFh1SCGygcdiBmbyjx96yGHrYnJNWB9bsSiDg8VAEYVpnYZxDPPaKDRwZEU3U5rkHANZ8Qn1ykoHGRh4sxL6Kp",
  "key37": "5WFSmLtTqWCfMuLaxZcTmZiaE599dm59ysVoj5veutfUUCSbL5iLrdYeu95SPLuBqzu2yhABv9AeNStFZxWD993M",
  "key38": "NQsT2BV6cUx6qibdmYSzyJQE5p5H3usdzupYcEcVmaSVJyLGSgdL4qTptEZa59ihonY6icSDXbzbTbLNuQHxB5b",
  "key39": "3iALCzjACp25NMwngXypPod1vmDpC1E6BJsHVz5AxkJZHXKEgGVPeyRdrvLdb2wV7cAupvp3oPgfJ8RU5jC2RZmD",
  "key40": "3mbvoXdhbF1hSG9Fwr25pg2YnsnMD9JhNPnRZUoNYYsEuyNwmxYLw6rMS7JtxyECqgUzTMkn9zLFpQRrWRvS3HPB",
  "key41": "5q9Keev5XJP6AqP86LXNjVYKdDJEoFe5CnoGxV7TMU5DngG82rB15zK5r9BZwDwMn3w3QfFp7XoaCHBaGegamcsk",
  "key42": "2X95A2rMpkzGj7f8YBXohyQHQu2Qsky2SLejQ916zNqH6mqnEjYRAjMPQ7owDPSGhapnCzBQjCrtsGeejHyBeA74",
  "key43": "8ECjBtuALQ6VYRVN2pc3jQLXfNxzGj9p1UAg1os2opUAmnG6sfK88KwumuS4rPdGpxzSE3zPzj5TSvd6FmKQjvv",
  "key44": "qDZh6eTH1m6TAu4hLcryKCeT9GZ9sCHGgdbrUfKAJHSaKAsBm5q8sXb2Yyw546g7UrNCc5NJGrXiCiGekhvTEYh",
  "key45": "2LdAYwxeEDWeeqb8UH7ho1j4YQppri7E8AWf9zHtCj96LdTdQ6C7DvHCqkxtVju9G7fBBdhxUEjrQmyNAL8mfn6v",
  "key46": "2m5cZRv1ZyEzQAbU8KnxRaD5kpC33KPHyHb96mKtxHD65Zwb1tzuYLp465uERrfz6w8cpRuzVDfZqnATPg8eupxD",
  "key47": "2hSCBWWCFikBccGsXNhCFbXLWnB2mb77p8nYEy6Vm6wZzZNLqmhLuJTXzutPLDTFjuG6Q1PWEEj11ULadzYGCdt2"
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
