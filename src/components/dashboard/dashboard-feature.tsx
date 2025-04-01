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
    "4PEXGbHUwwZFbTtSjUPrKpmTwzpGuvwHxbdyzBUEXpxUCsrHrDrwaBu4At5Dnn8p3vT2WyEErmXDkKXDTj6QPLjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c9VB96fK79yPGrR1DTEXg4GbN7LcAANLWqE4gCJJXA4rAKrdGBdnKrQBo8Ybj39UZLHv8UnjEcSCK6V7iE1LfnU",
  "key1": "aRG689zoGhqQrNArFuFgWkV9Tx1b6quh5pepgzkQ5k6yh7axsAQK4PzwFBzSgdhLHqBBAPDPQZirGzrdr7WvaGA",
  "key2": "5Skcg2UEWyX7Dda3tz2Bn9MaamwKKX2fmmV7MVFes4Wyn6EQ4dQn3fd6DEGatHfJoToKV8BwhRF8gq3xGBcFDQ7Z",
  "key3": "5Q35Pkhkc4krqnnqPMSrPhG6TBkWdhDT4UmmJnNMnZ1S6sDY27HLcxSxCyG9FF21m8eeeqD3LpyaJogApiT9NvX1",
  "key4": "5x2rWupQK4mmHoev1GB6KAvu2Y2N4m8FpfVHq985maYTunWGq2GTuHSTU6yKmG3o4R9ozxaGtSc6BcZU7TYsreLC",
  "key5": "4BBbcCfVaZnDHCiF4UjAWiKp5iyRYqtsepeLhcv3xUytjHCUJfAYqhnC6gGQt4PPnyqW2pBuGdvxRQ9a1nZwTik8",
  "key6": "3M36hGL9sg32H3uEpxREdBKkSmWXrn6Pv7jxvtVtVyjK49jPHT6Sub2QU5WgTbHHKaDnRykK9XY1UoqNnu8Qjdh1",
  "key7": "3QgHFGt4wGjn1BQEhkziaj7b5xoStcJrbfb7e1BjdpNeo34VuWDo9YtNqRVpogDdaLqxF4HysZdrwDAteRCuoXpk",
  "key8": "tubkWd8dxrfVjuxgciRRQmDpLBsmc2ciuSkANzF2JGBfXoayRxmAWw5hJYXrMrx8LQBDaENq4MiVGX72HKhszDo",
  "key9": "5RyfdvJfgEZtzhN1KEHxpSBCSqczAphpqWW1szcfsZAQahfof7N7aCaCrzqaDadMA1em7WzYJ6F6S8tXHKoPHNXm",
  "key10": "3WyRSHaVq9CGTSi6zivGeKYrjxnBJVrqumKrLWEZKRLouT5tBCCXuierRxU6iCaZRWmPET663EhAa3PtyeSu4txa",
  "key11": "4sV7RhZKrKgW74gPxjyhJvR3cRJZFqHngiB69CieSnTYWutWPYhE8YF2JZfD2SyDAuoYyr1fVWoDXrhmoCW9PDFm",
  "key12": "3Am3ZVPoyR19GzkmCDSpHQUHNH1zkj6cEQpofGVAq1ZMBunbvgaUgnY3wasSTKotYUkqJLKazLkNV3sxfMs28n3V",
  "key13": "CDBztjhaZvwJpLmvgyPHBCpkKdAButpQuWVcBKXsezAn91a33cYHbNzEXTdcAQsnE7HmpPTaDN4BCNLrPoD6HDi",
  "key14": "xqdMKxM8VcSDc5vWz9hUEJyTkzTDoqSxnUYRQ24LMdsrU83TjfkZnNNzGMKh9ZAayNsPk5CLhYwRSDhRcPxAXhJ",
  "key15": "4hZikcWbxnjbsH1nv2jv4KzWGozbRScYP7eDFXAFvSsgUY8BpYhLekAo4N2V5m5y6ZioQiaHEm43GfCnkKmfpMGi",
  "key16": "4t7f9K3cr1od4XdXbi2FWJWFpgtV5GD4kiWpiB4CRExedqxfzu7uB2tvqDBuHAyy7wm7V8oVqd76gHzUnG2EUyZQ",
  "key17": "2YGZYKFKuja9XYezSb9VewS9dyt7K2spTy87D2xRQAvzwp2nudnc71Yh8u8AJc2fuF7XDwkkJWXQmHjtY4dzoPJi",
  "key18": "Br9rXxRbiLaDmCusPv3Bkx7HYEMKdRoRz8RE7v2a3DxJJoJbPvrZptdgq7jXePKGLRAfRsdqzGnohtaQ2JFZCRU",
  "key19": "2k2vBHmvpyJ7LdJWBBsqyiDP9bqMc3AX4o9obkjzRWDapj9iPgfavuENon2ETknpgzWnGrYTDmThSnb1sPsVHkBB",
  "key20": "4duJgRKCJy53DV9kxujr4Y216ictgiuMq2x7Tm7FNN1nJXrUVFQUbC7sKBNyfRXTQ5RRoJzUQ3vLq15BowPGGbaZ",
  "key21": "KKxMj5Chx2g3oA3wBDzLwhZzA1aFL4VwvshNScezxbjmJhmpKEmNMEK8KexEBjZAvaBSRR6dqB8UFdtJqVCEVvR",
  "key22": "5W2S29BPtozfcpkV2wEfMdCs8xeTm7ECvDX8y9s22pQpFKxbi7ZUpKcmeT46o2SR56k9v6ruku5FRTefj992xcXx",
  "key23": "5TkSxbCoRegfHEJvHjBrkqcPV6WpKaMExiYoc39U7mLrJ5TVGStj7K6fJVCKYMF9uBkACwvSqf3nFt1Q4gadoUXe",
  "key24": "4WatkwznpC83NCtLJm1hyzJp82uACoFZr8H8gSrGCD9AgdcS7ja9MXZbr7PFyMBNXh3KC5R1dm2moSdLnyDYHLb6",
  "key25": "xNWyaQFE3mTSga8qgtD3EXyTRRmcA8ddLMq82rGDJft4NdrE2YrgvFTpdpHA2Lqirjpt9xh7fvHvMspTyPW75Pb",
  "key26": "5jpAwzRPsaj2uD1y8jJfxGVZT97Yq1i2wJg1sbmWj4zP6rTW4TsYVnkb54fZr4S17QVFk6ExfU4gXcEJayto27A8",
  "key27": "3rPEMBjtxcSCihfsm57xgitTdh5nMSy3aWQs4tDDk3Hak1BHUxQUq1wokBwJaJT9YoLbQisvRHQtZKuJWqqzc2an",
  "key28": "t3iPGeSy2fQkkoYmLubG6PX3PgfSaqQQbJMCzjreF5jffjd25AyQQTphtzxHk6jCSjtkX8AgMxKJVXS4wdqgjqo",
  "key29": "3mYJvw4CmMycWuJhzYWcnW6qxJy5oHGHqjb6Fb95NrHeryv6ZSUPgz4CF3wj1YoMxwdU32qWvbuBKXrUiKu7pw6E",
  "key30": "4Z77j5CWh3Cr5Z6Y9qiyAA9mcXDunxq5ziZ6ogNyGbRsoqT5RuGcHbNync6NmMrLghZFvAWwcE626imR6nTP3hws",
  "key31": "2dbKTVq1YhxHR763DzhCbfLmR3pW5dtMRUP7Mi73ECXR2PxPeC9Z6eEeLvWGSjzzwLMVyqEpG3oREXjH9XvgmTYn",
  "key32": "4RYTeSbK3nLWwP1dDKzmmybPn9mARXVX6q6BQ4KKv18Kq7oJwEXBTaDYmSHjjdUyWtkpBq5R74wZKhCcbajGTkAp",
  "key33": "3W5yEQKrvrZ6kNw8q1Pdt8uLoQFXzSGpEUda2LS2ST3msfHac195WYbgXxUyjyrGkxrcm5kXiwDoJtE7Cn665Sgq",
  "key34": "4FJK6ovVRVfazZqH6bPtkpGz2RyiGcvARsRDfEKCH6uDB8XCug7PWuR3Z8XdZSPUgpuEzjaJf1LJBgmNN4z33AW6",
  "key35": "2RwHyEtfEzJ8A695iLDJvRnuTPvnFgzYjiHwk1MiVk548jsa5ZG1s8KCAJroStVugk7zF3rqMareeyizFnceHzYv",
  "key36": "2YWC3EbGmQ2KJdKa42wWwas9mx428JCZWJimwu5uZLCQJBDLbEg5pnkAyC36Bgxb9cKCKGwe9WFvTP1dnfcLBz4d",
  "key37": "3YV353uDm7QeXS1Th27Qo46svgJrxwoqUsxexX8VNqCD7L4vhLrCmxc5PUsHqNRDvC3SEMUZvLMDXnKk1sLYz6wJ",
  "key38": "4USRSMfPyMhD65T4JNinppfWJTXZfsjSPNpHw6jcW6gcsCx4UGKHCGF6RYbioTKPXzEJNVVFULiWe3zDDsx72VB8"
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
