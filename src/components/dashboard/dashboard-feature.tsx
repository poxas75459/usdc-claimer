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
    "4jtseRUJ9MiQtBUb1QvQ3d8PNtRnKxzURBDdgQRpM3SWtPZUNmStim7syKq7dxqiowSCfZ6XoHjwkcAySXatzcsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKPrfQ6Nr3ao7HmHmYZeNcxtMhaYQ1rZZQV1rtVceAN5UeFKHCPMbd7J56Vg8s2UbXndD3hqPeZBD5eU3QgGZBB",
  "key1": "36Qry4SWh4X4pUqztsMkTuC746F2Jvc5gmEiBmNCxqzHTonzsLHLkmVtY4kkn1Saw79JqiWph4X1aU3CRf7FzPXo",
  "key2": "2CXscbU7gQNK6MJcc5KmxumTpgcSTkKM4GAbDThQ6fQXgmog9EFYAggJdFjB4qXeyMJEDDbp9KZrYodeTFyG71Mo",
  "key3": "4X6cDczjVf2ndD4ZWipyvoPswgKeVaD2npdBBqgcjxHXsRXXiUYHk214cCrARKU24ExHq41cn173EhoXqgDPgNh6",
  "key4": "4zkM2mP6qicGYLxMcuW7GmdXFbJBJEv5smcKQ9YP8ZP5KJpGY2e9iWb9X3LQcQCWkApKT3VvyPVUc3c5NZnbgXHD",
  "key5": "4SeCrKwn4faaSaFuXvJAHyf3wNzzQtQcvbW6bEcjzA8XYLFYq1L8eGMj2EHrocQaXweMX6TZxJUvHrDCUTyq7muu",
  "key6": "5xp3jkMtN8W85zJ2r1PVvncJ8DzAWvYv3AXRraNbinCAStLRBhhd7yz8k45zMjUAxvEu4fAMjSigveTee6YFBpXG",
  "key7": "3jLoEauR3ns3eSeiDa6pQWUqgo6PTKMsA827hGXueBZ5yWm6CTNFQPqmcP9xfTfwomsKukoMRsPq6BtATDuagsJT",
  "key8": "4h21YfcFajNUx1hvBgE7dwkyobtXWbSi4o6QGCHuxjR8GuNdMKdj1ikGxiS1Cbiuvw8RGUgPmdekACWc9tzJYJgp",
  "key9": "4AEeWxpTvH7LqvUpSrmJ73Kcub7bVqBp4uddTQMvWfhK1fzJHGRgPGVy8dNN3hdWM2LxRPsERLx6epfhgJJ6HWc5",
  "key10": "4cYMCkzGq4BqdPvFr5yFRqbSjnHkMgzVsuLJcwtp1iEf3dRkSiqKpK8dQnUgnWHUtdTwm4SHX9rHK4aHpQgxZ6Rw",
  "key11": "5JXWnaiyewKP9xmKfAYekci1fSGiQ37DCud8SbggaRoBXt9JcLZPm7ig8mA9CpNEbCsfr5ztxFMP5Q2kmv3qHS9p",
  "key12": "3YYvcxsy5zWjG3o7Z1WdTHqW1ffHjTJajcirUiCzqxhUyDHYZYjbeAn2FkTAxZZa1bfJrBC8Rkdj1nweBKgdJiKt",
  "key13": "5uovssPkZ4esHBHghkYTyCMWonrvhqJVuJNqFQeDjUc7B8zgjkS9HU7tLxc1zxDz1X8jJkRvwjWz224qRCZ3PXEu",
  "key14": "2wmo1ZzQAzXnH8v6C1feFD8BzitFgFoNm3jRigpADC14y8AK4HcfcxvRuUVqHFvkT6t5DJAHqYX7636ZYfg1QJfj",
  "key15": "4a5k71JzDHGVmjGcPN8CeXRmoGjY24pYbQQCL54jzRL5xnbfZxv6U9WYS5T6Cejn1kMajtAWAQFucoVEUGRZRdac",
  "key16": "5pduP1csGMdz2qsohaEJXN7b4wwUxP8PATrmULTSuMPbDo9nMhuxTRyurhWb1KLbd9JFuegXAQfsTzBXEeDrFJ63",
  "key17": "4r4vjDD928bR6Pi9qt9vEdxiv223hCNXz2kwHYAywFwdiT75WSpbXUMf5tGwiQAtVQYtuwrxKVYqCi28r4ogAt7g",
  "key18": "32NG4WDzWgScrNoFnbkEurGFbFjmh1ZVApTGNPZXMExwTzdbyHpA2eqdyjKzDjhQDh3h7vXcbNCgSoXJUjJBcqw3",
  "key19": "32wHCw3wFkk45hafywy27AsmbJhma9JEXQgKvAkHNdrUnyBKmmzVWP4iPFqKyicEWhsK4ay2P9d1cK1tyoW6wcUm",
  "key20": "61JJLxb5P9f3NwLUrVkuJe7MAN8CqKC8z4ZuE6LodHVNqGfvecMR6BdZZouNBev4vKW2NuVLMRjj1ap1iBjKDBM9",
  "key21": "2m5LoJPVU8tFvStcbR8z5ZLFtg252f8YtgonotbAqRWj7dQTFH1KcrcGxRosTdEgb19N7TgsAwTw6xpiPkmNqvSx",
  "key22": "46V7vt661kYQTt4MKafGyCvh3KqjLuxwhBwrkXH6GZMoRj4Jk1fZ5KpkkUTkydBeq451zwdPFpd2wqe4Kbi6ZYXV",
  "key23": "4mcEiaDb6vdAtd9xLWRwNiRyvvaXbkmsVhp7pYEeJm4JEssfQ4bYUwvrYBYKxDCJjnL2uCtS1XBozZPvxRbJHjmv",
  "key24": "2X9hGNsSLuFa5uQ84yD7EjGnMhXgbEsMmhvR7mg211gXV7qD96z5aoSA5tdnjNTCppLmMaEzF1Hj2VvMY1f6DLJZ",
  "key25": "4G94y9ZV5WcqVXbbprPfcXwc68tAfvociCjoMoJ2p2CTG9k6wmzAoWBB5j8JiP9QMDzydfqSLstmi3Y1ikZt9wtn",
  "key26": "3xjHuuGJ5mHNz1zq8pKbPrZ8zWpBmrGZd57cMCxEbw5uLMrxWzGWiUBuJuX7nKgvaHyCU3T37AiwS5FAiTqUCDEZ",
  "key27": "3AbRYD9GoguLvVdHLpfVVCVyaBAo4grcSifQZrf9sHxsEDfRRGdXxVafRJHKjvX3b4wUWiPhY5VRSxHBMVtsYHeq",
  "key28": "2bkgCHdcnfDGAARfqSdEwLPLdWA47YmA8DPgdzYWVeFhw5ze1jd3ktwaoTwavXGrgCjfYtnQYYP2CuZYg4ZMzKDc",
  "key29": "5yQ8YaQonc2wJfmdoAUSSaoVvn9yk7fi73xQaVGAQcEmyXDT8myAKxyJY1VtYdztUoAZn4Dcfk26MKYJcenYnTHk"
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
