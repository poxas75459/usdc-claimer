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
    "5pJPMfxKQGKe8kLPtggvdWyoyTc8LbRX5acTid7A7V5hJ66fEZ1V2sWiB499dGZuXvEiBQTzhD5DrAxYDNHdKsNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XkLLABBn4bH1bJeY811fTQv8GT2dPJdtfMQ51QhYsB6osYoFZQp9VS3hSrJFjEJ89NGWnxb21jWXndWE7tQa4Ja",
  "key1": "RhMLJjgMbdFwTnyE76pkGvSKwv8UBkJcMND83EkrUXSV2v1QUKpzR2ag53Qqt7kYhvRnkNEXbZDXEiddqgtyRky",
  "key2": "62HQbEuDDEE3UBFxkVftDQxpnd4d2g1jLUqpW7eWatPxCiNwFkFgoPmnmrxeVuGDAui2hWS6cmUVTr4t5UXk7rpa",
  "key3": "329rfMzmKSCCWncRHU9RKAnbdjhMncDYhKxaCW5UNh7uZcgcBZfJLSdgu5LUQbTdSTFNcVjZWXhvdq7g4ti5B8dV",
  "key4": "2VaL56S4SJNM5o5oWDS6EJScpkUW8X36fgThud5wx5RvdxurXjwqNw3qe3yedVKFdGV9pHxAGo5RxUkYRqHwVLLQ",
  "key5": "3taS7KUaEz9SZ2KgaTXF5RzXms67GfM8ch4SzQJxhgodwAqKA8CBr1HBM4cDrFP6o687VQymSxYaLcJehRoe3pQ6",
  "key6": "qY5Zvy697oozCA774fPcRJjdw8rii3C6hQj6LUmLEcXmEweHtj6iF8gmsBbRaXXJquikaqS2dWmSAMXbyrpQyRD",
  "key7": "4bk3kpuEz2hYfvDroupwjZ5LvDCP3NGdnjsQgMaKEGEwCicSNc1FHs82nC8kHq8XPi5tyWJxJdtSfekmbyfPVhqg",
  "key8": "21rAxo2kQt3T7weGe28kuLcb9styZu2qBJXkhHrNe14hn8HQ7JofgYUsKNeuAzgQ8W5qCVwXmCb7yU5GpPoztd6f",
  "key9": "2YVkfPjJBwSP4wxKsBW732CniREWeLpicjYdCqHV3ZVvXqQNV55VfS5Ai9TzeTcFrgR8AxHpNMeg9x7xtno2nVQ6",
  "key10": "4nBGWydLhPzbJ7dWD1Ak4XWF5859V1ENQGgbmVearyQRz3cGDkdheyXUZEevup9Sse9NTBSpF1opSRC5edQZZ4UW",
  "key11": "NPbdM65N3efDFnTxHjfjfkS8VQeXLwU5bDpdtfh7sCuB9BzSjfjnxYktM3hCFWyhDy6dNfa5LsHi4oCF9utXhg2",
  "key12": "JhTuyucuS2ck9KNzkNRrGao93XDMuVpfg9DaZXuEYJkptUchPsCv28caC9Eu9czEvcTj1FWVH9VbYnBozHXuKbN",
  "key13": "52cz32XcMN2wDmDrch4DPRbmhFrLnX4HHWRD7WN5D9DyTgTSnCiPA44tuqTHhXx4zLJLUCFucRWDsY3PD2akuVgb",
  "key14": "5wYhDMFubrsmBTTbX9yZMTbyenjZpHYmv2rZ8RP1Hi2uUKwikjdGZw2gxyDhtAZNiVYv8wdS2FXrXAYm1h7FYsXy",
  "key15": "61RsSKNXpE7RzQ7VWyfhDWNJK9wktEwvBSbSLJPCC2bVLGpsZEVGNCCLxyNJP31qHz1QS1YUBmuUPcY4KGWwN5VY",
  "key16": "2Cp3brKgadm6rtppwGovHjJVSJ1BeqBjSJemeWNXNwg6m68hzB5svU4ojKN3TCHU7WstZAnkGcRxkMarh6pcP4DQ",
  "key17": "2TnsSDHP9SW7RqxKwbryRrcrC5pTATgQSqXUkUS6TgPHKJzyTdho7pDQ8p6HjA21JHi9KMYGx44p8PqHPgy2YQpk",
  "key18": "66bbmVu8sUBJk1EDcih1qxVK9H9mp6j5mM5fDNNuiAzHCxNW66xnZ6Voy9qLJVbGBk6cyuZuWYcAzHhLdCzYh5a5",
  "key19": "5Uxgv5poxmMeQJaNfj6SB1snnK8BbhMLNKMpzaELk8xSnPs8VBXYPfmeefyawgp45Qx9FeTbZ2iZcQicCm35cahM",
  "key20": "4b1yLeYSiXYSaiYvbPi6nECz6strdBZP7cGs34UG5LxXX3XRYq8AiWqQa9u3WjtTJWZ8TM5qcim9Mrstk3GjJSSb",
  "key21": "2mnQZn8MxTLucUbm5nMps7EP2xs7V7hL7yUzYUG3oMEK4hKvGjkskR2WcGHt3NxhzaUaeESHT7dA2mwYPNmXDt9e",
  "key22": "3d5ibPkPpvH6FfYPAanBN3rFT4Y8Em53Kb7snhJanJmvcN1V13RutyeB67M1GBsoSGnfUxaeBKZSjPJoithp4eLb",
  "key23": "3X31oU2LyLMs96se8LYW6TVr5DsXjSXGZJ5imfZy4heTpprVrFh2bAT3GLoTh61D4q1rkPqDSCwpZ2LKNarRNi7n",
  "key24": "3dy9rkXqZmQwfS2MzkaK4K5AQkF57ai3g8NzfVqfSEJDbBREMk3bBkdKwnkrCoJxoV1Tj3Zrt9PZRCDvG5gqmWeX",
  "key25": "Dqon1fEY49RKTT6hAX7nQ2tnzfJrzhU7qtj6PDrh8qk5cyrMNQC2CMQtSNQrJk4ghL36ixC3YQhpTbzPtNWUc9t",
  "key26": "4HSt1aMHPMWJsPraDAAJFK1kR3BJZmh5p7aW4Qwwv6aLnkEa4svL6BhKucmRTuUQtSAjqMnTjYu58hZ6RBzs7LrS",
  "key27": "XKhh3wtvsCqkYP9TQYSCHK1q3S9MaEtKVrNRTYw5QDKnTy8JpMTfesSk8PWSBqD376E2vcpCLTDafeMbUzjapD1",
  "key28": "59oNwNJtwWCeVyNdKneuPeGUH43Q9YDWNmreGSrVBNAhQitn3k8XB7QoGG4GtbDj6FXm4RAHzZUraQLFeDz7DzXA",
  "key29": "4DUcgXJZVepbmPEcXRjaABPFM3knk6mUSbJjniWknh5yf3zj5hAjc7XT3vDcxoyEbWXGqRWU1uDbPAXMcSXtPv7G",
  "key30": "211euBwnJNHSKB5Ak4AT5TwfofTqdHAo8FdfqP4jmwV7twWKzokyuyesVKS1q4ziQDU5vcvMcKBrcUmMGEbGYeWa",
  "key31": "5nXJKkbCTdnWJBf1iAjJ7xwboymC3b9abLbg4tDS3LcrsNmjuruJomVuDNEay2XG4BAFjLbf8BYnZDZnCzdKr9tA",
  "key32": "5jYL4sDG4woEXWoDA84BeC5guNb2HgY6cpVsgiSSY7i6pZYrbkQhAsTr4V9NLPqrXnBVUErVU6YQhznMubY7PhBi",
  "key33": "26HDCg7QnzH2CH4kqLoGMXbDM4cvQtHE6MQutLWwAQxFSnBs85fqvjH1gxryMjN9UmcW4XsJ3N4F2JLc85SCd5v3",
  "key34": "4Wav7PWJQjbTUoxyvQ4trw4JMDgiLbvXLLy8HAX9vSgx7QcMSsQ6Bn8eSiwJ9HDkvRzC74m3YbRiwj4hStvRiTP7",
  "key35": "2WZ81nFgzdXYSCYHZ3wGT1tryyDiZ9Fq3SsCrywek9Cy3nWnJFcxQUemZrsDPNtCmjaLDL9H9mJppujEM3LZh4Ek",
  "key36": "3ZzYuGvw87TpTtN55x28fuUBU21MQU7s4vbxQjXCULeyhZgqdUEtK6ibN6DK79DKmdvjuTkUpRMM9RFkWdPpWVY9",
  "key37": "4cgJ2wmjsMydz8YeHVD5WP9mc24bT6jfe9DsZPD54qv3pkt4gnxXVaCkdY2tETWB8pakMFeixroBWALyMa1Fgqax",
  "key38": "4X5orkkjGC6xwcYfGZYPSoSksF97XWo5AMhkCqRFd9UhwcjvrbMNFS3KYfk8Qhfk9CXg6iZzjhyUW3VNQGsPAfMo",
  "key39": "3dqX6KmkgzVhpbd9ABUq1KCvQgkBZNS7gWGWmb4NfKWYPWYroyJSAtHDQoM2jFsBDg6XG6WPw3yWPuRWuQnv4qHv",
  "key40": "3UEsv9qvvBRroonPkPC8rhG2u6MsZP6jn1uM9SzLhNYcv4Q3FBZc3zH66ALpZ4WFw6S5yCUUKb6HukHU6bkwhLwx",
  "key41": "3PGrDgNUmQtqjdkvDxYsg5VMBViQQCxLKRK4vKe1MxRRpvn7WsunSpzVkcy2LwYjgPDegVvmU2F9wVYAin2z192r",
  "key42": "3g9dTt4vi9KgyHQTJvaeNjC3aojpBaBJkQUfSQ2Fat1gqvTxYeqRPMQTyaDsbvcmcpCc8c2E5F6ZpX5BduVjFFcZ"
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
