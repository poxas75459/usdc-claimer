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
    "4iaT43xz9kVCMdXkPNBNYDkx2L6UpiqbeyEHg2YWp2X17hPMf9cYYBfT7tT2EgDoJoHApw3npVSExfeYyau3Gr4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFoKvMrLfABGYgMZhP5yEcDFDQMNyJqgwpBpWqL1KngGzRfq56j3RMMaCH3nsvwpz2mR7mQKaFJ1XWJ1jAv6aKZ",
  "key1": "2mFevBVuqKjqXhySfa41gGcmwaXXykdVht3xZF5vn7ong36qRgJjccKUP994LPesufBTubdMpNQXsuMRzAaMpwmT",
  "key2": "3vyyHxqMKgnZHTn8swtzqj1HVkYVEBDR3czvqG8f2GJxrJBE559HrzjRF52rKwFurWZKhccFiv2ST3iwRxjSs164",
  "key3": "5bYNu7iAwLo7rjELiUFDH4WSFtvGrquVhTFz36LwUh92kMWiuubEJPEpxR3jtELAF4KRwbDjbbZndSdTsZY5nor8",
  "key4": "5KkKAsvJLNTvwSaFYV9VABQL1MSDTr15MYPVmEUh487ZY4HdPjjvuCq23py5v6ARgzUARtxmiQcsNDHLPrVyu5Tw",
  "key5": "3J5hT7wdL3x4hrSu6xV6be5k7N54fryXiLoizw8yCbBUCVYfHGdFTEd8rjh366LibtH3XJmpGJimAS3aSwxzAuTk",
  "key6": "4hghbqTgFDChcCFuxtQfP5kEAbuLnKAzqwddsks5c7CwfhMmYTH9novEnyLmmUBQRVjSW2CG7CsfgYLmFY3wv6gd",
  "key7": "33WCJ38pKT1WjDcDD57metkq4ymkHktTzfUT7CJNTBydgwwoyM7nUKV2kwiDuacF617TVyHsxscPVvpYS6XXnEEy",
  "key8": "44SgFUM8nGf4vaQ1ThddCJgaPtQLwFfNQFwNkJebH1BtEUNJ632eksCfYbY8LRFwKHyX9n82PjrTdeMkLhs6UZYP",
  "key9": "2eNZcUh4dmZygTFhApRrVmCL2fAJtSvtdQstmj4VaB5kihzriRKNtpJEziavnhJrQCKJABgCREowzWymwNLbdEgc",
  "key10": "4NQXijunr5zW5g9PG8HC34WjJWs6XFfnd3AucAaAFGhvw82QQ3zFyBVSnxWB4YBe3eEs3awPQpPEzSdpvfqzLrXV",
  "key11": "5hkvBskFmtF9nHnYQkTn1CPuoaAVisrE6rpphXa6v3tLXH9TM99bjUKVwK27GtutwTC3t5LB3KfykdGuF9risryC",
  "key12": "xYgqrmDDz3SsJo2MLWa3akxufqdCzWUrhixtPmnQmHYwkboarR1g5Q654VaE2PHswYNRMAoXEh5KuQACkhRf44D",
  "key13": "4EWuHNh2km78Ar71VQpr3JBwVuM8pedyQ4JF3hBucGJQSbtK2sEkxSfXnC8x3DP9vUfQxmcbwrbtzZcS9hNqcEZa",
  "key14": "ew1cLfhr63JDWd2YKEfRapCQ9hLzqfiziw4A8WTokEUX666x8irJ1MxxyP47UgP9pBztcRgqJYb1bHqvD5YMgXk",
  "key15": "5eDhgHpW9ZhUPgKbcstkdY2QcgBGcyaYPsPFWoxEUPTGw2q4tMaLH83NYpU1193tJguCoGUt1y9ionbigfbEkVQn",
  "key16": "3ZHH6NrDT6SoJMPpZbHUCrVBZC9sTYgwm47GwZgMjxDhDwFW1jcA49AcSttgSZuRbe5NBvr4ayVRg7zznSg1T73E",
  "key17": "3DyVeu7MCs8qbzZSAzhvR5WFWGzHCbKkS31Lfhf2PCGntQTYwEgtzM7wPGgFoDzuoAbLsLYaCzhsy2DravhS5nGd",
  "key18": "6173NaRyHjPEKKVkFvtG1tkhurb1rcsiCtwptmVbFwqdbBQBdtcBXjCQFDied8Cd7eGYa1bdw72AQrUoEaBCGqMm",
  "key19": "eRJPZTA1FsWEVUZcTqU5EWEmKEHUi8AsbKSzsZEqAXPxR6RQ1qffQCh24sSbaJEn7eVYzG3j5sgUoZJSgLY2eTQ",
  "key20": "4RCa1SevWgncSn8Djd2UaCwdFiLGcs7ywioVgMpMQPtPB2HZNPyT3aTLdMCLMaBPcfCqa6d2AcbpvHmfkBimJsV4",
  "key21": "5FDUHV1Nei3im1W7qicxrZuA8XgK54niisSGQzqkdbnvXXzTtXLXtFZ4SzLupn5ZTaTY4ZB3WmANJdfAANGqjC4F",
  "key22": "85fj8CMkPw5Vha6qZoSzQGr8BdMrA13uU92AYPmqWgTX6aj7MZKxB7gVi3P5uBPAUdvK4Rk8NGfTgdAymN3LLLZ",
  "key23": "4M3qEVxGRCnoucDwH2JgeqnZ26YaAP2gEkPYguES3RosfJoX7aZhhYyEu6fg3DHGTMJqn8UaDC7X8KfkAcTZ4jqP",
  "key24": "3kMw7LrDNB6dyJ7hTXmsAfxsqntJLku62Z4Ls4LWcErwA8fEXdAW5XMqLv8aBx5RMjQGF5fwRP8rXEiLLXoXYYZU",
  "key25": "263TmvyrKwjuzetAxfHCYrLGk12aKATK48DvthEqcjDkBogvDojCq3zsGu71PaSgefhzkDayCkPN1BDkAYrSiQAA",
  "key26": "2GvbRmrvz4JZv6qcet7393xfCeZQY3vCuzPvvbGbt45jZyVYhWXC51Rt2f5K2prRuwQaaZkmtaDqdVMmNqGvTWCj",
  "key27": "QEMUZiKM3zDUQm8tLnyi6ECsGYhD69PJozcTuVH6oXeViuaF2orgjWF6apKkbEDr3Ay9AK4hXqUyiT8NM8MhWC7",
  "key28": "kizxoqTBGBmYwYswy79UWo4DdKdXhWTyNnLqihfQnLr6KnhioP7vh1xogkThFFs7jxsAzt2rA4hkTSH54TgEdSy",
  "key29": "574LWySUtHYA4cEatYMbStEGpcQ5tR8pMXpdRMhrZqHjph5foKXUCwz3wZN1G6vEgDRkz1Udafy7XcQrF5Na2HfD"
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
