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
    "24LhYskgHWhW9uCjMkfqrG2yBh7ePCShYr4TkYQ5W1otkYq8hS28kwji4NoV2mBRNKgEKugQL13NBjeuS1tS4xus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21eJ3pUTWaztkDLNTWLcMAkn5x6jeScW7T48xJHkBAV4GjuNdVf1JBRvizMDSTjdVfoT6rPWYoNLGk4gGxJ4UTF3",
  "key1": "4r5CrjGUmj6zSRAV75kg1yNY6RbXt5eaXWQKB414kTsgWJCy654ki8FjotewXTnEB8J6LpxEVA2qtQc5u5USXmWv",
  "key2": "21fA9A8LCZUNoba3svFaEtX4eNMHYcmFxMfzCGbQqm4FuEQ8kCUcbVqUL3USHhM3gpFTQ5puL9q2vfnrdurqsAtd",
  "key3": "2q8yofZkmzPpY1y9KQswxeTu1S2GB925t2xwUEg6VB6GyepmAbRGdpbfnuoHtiHWpXnsY1UsmutmLXEYMG96yKWj",
  "key4": "5jvePxghycjTyGS1dBojasMnGaHAmi1vwzyxRQzdSDbi6DZhzWGyHu1B7mrmHeqWDRz6REzAfaDPUrdWMv6vLfc5",
  "key5": "3UXz6udJ7cDEFZnGPZYSeYee23Rn5u346WKBEa53eRxpjagRH9jC3WyMvFCuJbGDnccDANQai7HoYVmWCqDdENPk",
  "key6": "3yvwCVEwVAwadSr5bHrD3K2C6peyyont5Awe8VhE74sYcrE8Mk6L6rLisMVVdSy5c8zbrbnbifML7brnjE8mWoxo",
  "key7": "2bCRh6v3Sf7EAF34FNkGuq7VoGtYnX9zPwq7yLCbzaKCvsnEgxp1vDkx7eFNJoxSC4VvQyqcDwaahTiATJzKLUJf",
  "key8": "5NmjqmvaM6DW5559iGWrqfne637R1bkhPsTeGGzYVENG9pLM3mXxtbF2yaLV5roHaZwKPNvg5UinXMTxzPbrzhQY",
  "key9": "4zCDLisGRL6bWLWVoZiTuCmP6eZascrepoj3cxdkNS19p7i1nEFxgqsX7AHNuXTyCiHZ8bEwVG8gRWg6SHPUPkkF",
  "key10": "4oKNUgRKzP6Jiz7yd7xMjmNMs9KgdZxAET8Aa7VsGjUWAQKj7caBARV3hT2USCuVXikcfXu6ofvp6uvNSYTzcTD5",
  "key11": "3CGfuFjjE1kSG2XikWKdFXZigCferukU31Jtf4yDeE8dA7w3ccvUnh3pmHEwr5SARL2WZyrfzPC9pdkToijYMG5V",
  "key12": "g4CvRVgDfeW2JB1FKcUJZRvGP3CsUr8poGkaqUjEGjdj5F98oWq7YwTFDWhNkByyGequ6r5vRNzM7XjiefSCWnC",
  "key13": "46aeXWWbUWFpeYcYx5gpBopwBRPjWiUz8PAStxLvoPr8zt2aGZA3gK7kPEnsap4hEPqzWDr2L6i5YDdSCLXtdMjh",
  "key14": "5iVWs8dvrLRoWzBE42wbDN7gmSc4zw2Jky5bn4ZfuFQdKGozNDmLvEiqV6iD3GnLfaeUEdz8TveZKpFeuheSxWeT",
  "key15": "4MCTWNjaUNW9uWFPS5oPUL3iz2hyVFVKyVCczzUk2KoKWY5aWUmQBSastLZsLNZq9rLKQy9wP3TsaGzv5GDwAFBw",
  "key16": "2HBhF4ybPHmnv7q7DoDEPQ5pZcbT2Y1qGu9UZmRiBqabSJifW3jfbZ6YQJP86mPJ5cBUpimsmLzhe5Tikm8pSsZi",
  "key17": "5dHeUyV1x4tXbf48beFtF1kdRByLfECR9z6Eouh6upVJ9Gpu9K7w2ZhAhxLtJasHoy67Mq4XQoD46FExkr5mQsnk",
  "key18": "58HxyrZsDeLELvjXfE2pqUG2rRfVjCkPdKri4VsDB9dB7KYA4aQEHLvpkxH3WrkKCSFbyDh6ES36zx3opAmwnBhF",
  "key19": "2fJuukp52bghX22Z42xQRuA18t5UMavFaxeURjnifxZU3WbKyW7XAxcwCoxgcKRALDhmV5cSxtro6FJPXBUHY8it",
  "key20": "sG8icAjUAvXou4vyqHGsyEh8JbY8EmEsFGXcnqCSyMm8Efopu4iRjHRPPmXXGZk4bkzf5QNQhYqSzDk8WXzkF8C",
  "key21": "2XikaxCk2gjpaWw56RhoWnpS32iyzRbyaV71Fjsfw5qeg8AnvUUPxmLDExg3bLxhKPciueorjJmPkBg8VcZB9wLj",
  "key22": "weyScdnasVTSxsYPtW1rjvRpW5KeRo7am3raqQ8yaRFJciky9oy5kioajnx63NmtCxV9SysX6fTCY5AMH3D7YFW",
  "key23": "3douqTxJEd5zbmYFBjCfJWuhTHvRux5Mbq7cUTsHoZVf267CdTxZKJKBdXZfyEym85V5br9VoJR9DJMkXK48KTn9",
  "key24": "5dkYXfpubmpiJaKsSqFRALKFZPMnME8aGR6yR3zvoj2HKKZvGLy7597MEWNLwKWAaFb4gwyLfXr6aPFn5Rc6Kvgc",
  "key25": "3n6XdUBEwgWh64whcpZSHpwDAB2UpX5zEBWB5mgbU3g78tmRTWaiTZkx6P8o5tA3UUtgGWK1Erou14veZPVKgGk4",
  "key26": "ho1ioXtgc47Mivn95VsP8LPtWP8R3Ksaxx9iyDxTYTxZMLMYRodcsnsBUdbKyi1VK6jYZrQ7QHKo7CuEkntZKTk",
  "key27": "5rQm31dXsJFAYBvhBViS7mRiXm9BCdAwQSe3yqQ5oAuoGQ4ZK5E68C68btpdcak8c9MrHzmdAjaZCG52VgG9fW1L",
  "key28": "3hhxr7mCp7eEp69cbbxhUkiUVYdVC9tmcuYD7yJYzqdcwDCB7MxaqMay9M4XRMeawPUPpwbfcnBhfSBo97sKgQ7M",
  "key29": "4zeJBgYkrbntCGFsuPcrYbg7qzprYsZmLw78fFrU912iwZ5cfXMntd2jJ4fVtYcWMGeDq1ZdFT4SMEhSgsPM4UJa",
  "key30": "2YRVjKzCp9vQBCMzmYiUCFeaKQc3S9gyqLF2uhYYQ4MxNL5vcAWxvFNP3cJSeDGbqVody6ZGeosnncpCaE6G6zj6",
  "key31": "5h9jdjfyt6DC6wmguD71bf254R1VF4TNuksy4sHBwPRbRTGeLEjfCrTYhPA3MMprXfcKyGHBRPnPs7jWHujYQDhL",
  "key32": "4pVr1rSjfdUt7BAD4bKdzLEjAGR4aeXxeTDzqqNPPxHwVhhpnTBwkwd186DfzThiKJD6vGXh3s7anmz5Kf8Ef9nU",
  "key33": "37HbG9jXQGcQDuGip8t6r7WBJs81LVtrUX8t92LPvnARfDpYbqUrUx63515k2fkwBdmB2z4sGgojbxTt3UZCvLCP",
  "key34": "cX7r3saNbFKyAidhzwucLCv7My88DGG3XPPbkpJnP8QQq9fCcCT8qpC2GoX41VSUzm73CFct5tV23poeoGAhLHL",
  "key35": "35THDiiRixW6Bs4fcQk4WSKfFbyu4ja5yYTsPZw9mVYRG3kodb5UBgk9nXM7zogeFiBDs6zae16uk3yzTT765DjK",
  "key36": "4tc5EsxLCNsNxP6pihbviR9pbd3aa3TyoMgEnYWiQhcBq63NZUtWdY75Dgbed7V2jYWRb9tyFWiLo2PBShkmkcUR",
  "key37": "2UuHZkgtsuW7HgvjP6ifZE5Ntp1TwQHbA86GuUpgQmj2xwapCU8thPqvFADtGAcmhfSmLZ4TDe5Uha4NoqUMqJKX",
  "key38": "5esGxRVtQcpok691kg2ZvKTbZM2uJ91MKV3zbyizkkrxuCakHqVTm7kpnEQ4e6DLBUMXBcV7gXduDcmHbDsXy5kU"
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
