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
    "2vGhC9iqooMEDoDdMzrYvHMdDD6TKrQNTWp5wLMP78ooK5DotSvd2vMGPA5w4S9SXCcrTRw24jBcbNKC9nqsV7Qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSMnS3q9D5LLNUWkWNhCceC27hvAeR6BD1uVwLvj8VePUk1gGfPXBqyJ7uBhfmazwAUiiWcvpkmAMpT2LkydYjx",
  "key1": "zNhPgTmJcpJQncTWp1nfnmJ4aATkURoGKA9b2CcX82LbRCcfF4DYqtJW3cUFATsws6qSuPRi4P1yTFbetNxgVSM",
  "key2": "2cA3ZFjtVm3cY3tUKhZvrHY2zCYwZkXNAMmWR2zcrsFp4Mewu5xD7S2KVdMDuFpY8cPyHcwKpfNjvYExj5XeGqPz",
  "key3": "4hnaxRGMXQfk6yaWPzaJddKj1CcGx6knMgeRsawcSwQWnt9HSXVuAgpHfRXZwWTpCVJ1A5WFpKoZb78rBjrnhHCy",
  "key4": "4CCQCeD6ddukvabC5QRRs29C7LqXQfwyiSikKCfhtPwESQLPQjnt97TbWoVygvC5h5MqWsSazZkXvSY8rznpd4E2",
  "key5": "vv5pBCGZYmioYYx5BnfS87Vr4qxyugCpB3KqGgMRPKWVEfRq5qRHMaDNq2VvMxaWDWTHDFTcUonPdEMfYqXbTbM",
  "key6": "CdamUMdhks9X1hxTSfmr4hgDBSukGL58hWWt59YdtshcYtwkXapaXB59GgXw13X63evkSNooEWCJExvY9Hsz7su",
  "key7": "2aTxiJjC5HPEtDajaRRLBygcnvujZBGwmSvqAShreHuYday55oM78xEoXjodhr8f3A7oa1cRXXwxjZnXSNtLTkzK",
  "key8": "5hLdksS9AQ9MZvoSK2gQqhAmdwmDxckETRKGRakEpMW91TiyiPG1cLaGdZmbUJkngDbx4ELcAqjRw3K5XytNCGEE",
  "key9": "1DfjsHxAVfAkjXHPXeH8KFJpNhfsU64qiauE2h2EhwyAgU57EWVhzN7zwJUkbfFNmpdQaK6iGqrJc5hGkLCatan",
  "key10": "2yVg3mFoHkdmeG2FUtH9ju2EAXXf4tLGShvDBf8AwYrsVNBdiLF78QGxuTkXbdkeG2LM82GU7ssMmrE1P9RdxrnW",
  "key11": "2hbzfL873TZqFQfamFEVXiM81eu9DVrr697att56y2Z9yvvo9vzvvCJjm8qN1yMKZYMbNXgEa5nBjWyXwHYyinW3",
  "key12": "29B5SF5JGTRChjnZ9zfwyx89MCnKEJq39wJycRXuSaYRHznfff6Djxt8yynYCohxWSh5Jp9iCaYHgbyEeWuqD31W",
  "key13": "3177WiiPDpRTcRgcy3Mu6jSQYwNfEuh32uoh7VVtBw71NjgdBZC1DTchSSdPXcLeC4BCvkk8CfW3ctHW8dVBNyBd",
  "key14": "3ETDxu8xj3ybwvTQLpRSSHDNEDhF2vZ8Ah3K7EXMVjSZBWrBghruc65y39gi1NY7GtuHVUwHMkBXsyfUdcaXsPLu",
  "key15": "5P9znBc1tWBxu4Ead5sUkmm8GUJ97SKbJjZ4kc4A2b72aRGh2noeY4ryKRtJuTCmcfMowLPyaboVCSnDwaycfnYE",
  "key16": "3naiAk9azzTCSauNcsGbyqMMa9ag9NacdQxr9DgJV2a5bi9P547PKHbeoYv6NeAa3zfCytxwyzkRgdH161uroxqW",
  "key17": "2WciLKYmDKP65nVciqqgYKXYAx1KjjpwY2Kuybzj1ZsmnjbtGyoUSyiT4LBBe3horbJdWL9eVuryGpYFKbTXuSRQ",
  "key18": "NNMB8oyV45iyZxpGZNF6b6VsKPKEJaBbySvn64tztQxdToa1c6GNy4u1skf1YwUmAPx5M17cBxXR1VQsiFfWngv",
  "key19": "4nZvWWuDVByXU2V3ChqizLGZCGau4D4313355BeCEXhoRNdYMcayGLf24ePmNx9dVUevCKygkzTf3kQPLGzC4DBQ",
  "key20": "4sYSHCoj8aiYD7DgqvQaSH15UvV9U9wqwf9o1SvnnzHt4eSnBTQTweNmTfBxVU5bs63A1JWgB9T6dDuCCn5As2wk",
  "key21": "3BzNQo1vuzksFr9jCnzPJE52bfEDaQ83ibSpocsK1S5NGYiLsNYAdvvXG8cnGzjTQF5wKmWhVwq8XVnfDkw8eypi",
  "key22": "5xYqHhEkRiDvTiK7MseR2AcXRXtxySHHsYhiCFNGA5HhwWAbHYDU11yUbgma9M9BXTM26r8GMa3NUpx7vHhqivts",
  "key23": "59ou31WHVrqrdb1TgRouq2KUrwAVaGHEJpiLAb9V274ScsMetCG77d7PDbHU26mr8TT5R1wEgPAswx7wNQohRZJ3",
  "key24": "ghjhpJP4UvvLcrp91ngo78wSEFjWpq5rmXFPwxnYnn8tsMyQyLhXG394uAidcFbvSWZdUdng3nGXP86wt9KhAs8",
  "key25": "5mXRd2ZcoysLojUGqQJADNE3mEHJcprpxB2zgbdsHC26kw7qYF2ipE93YVychZCn3f3XhheDxUDtYbtgAqqqgPAN",
  "key26": "WyjmU7Qenc2YDxNF7a5pkCsujBfxag313cUx1e9RVW5TjtHscqDSgybfJibPbgeL1LxYrvFWZLmqTQaiA124Z2y",
  "key27": "3Aqu8gHudR26ffAY38RtxxrvsFJGLKxjeYJdexihcZkxiuk3c4hGQCbPcgLbHnWUyP83CzFxQT4kTUtHMd7JxXxu",
  "key28": "XCjkiVJYRmRz1yuqJ782PtGPpm5hgu9wz96aWDw2Q6qoFxSXCPVUtmPCmdkKQ9yoDHN6PbGnKSeSAnA6Q4QQw6o",
  "key29": "2DpzSW7CJivM4wGQjWaz7ALqadVxKyojNhmR2r9Bg2NXtSqX52CgBtXYVEWihLET3CRjd8eoV49Ejq82bcfZbJTS",
  "key30": "4XoxEy6W9f3iXn7G37WkNvYNjoeqoZfjYhyouVeGjkcPcgraL6QmfnHpBBVjkxjSPgQabAwnaH5Gni9L7uv7Dh8w",
  "key31": "2pQxN1NWb1e1MSjJ9c9z8PgUZG77wm3VunYdEm2UQBi5wDx4tW2f9RfM4YJyLNkwJJGamVCqLRCz1rRawFgnrB8C",
  "key32": "2bRwd7Diz2Jd3M4LEuArBb2sSRoVNsq3AKQe2yJTz9SKe86DFvFq9XNKLr8ryLqoMdprskg1Xk4Ln18FhBDgikxM",
  "key33": "pfaKdotKp6EdPmvcxeKWqrdxoh2hKV7SGsDJupMjoD9j62aSLg2mDq2W3rpZrfmwEUBQgcHNdTEACtnemvWDnpr",
  "key34": "hknZxG6Uq43h5yAjtcWp5iMsZSNXpdkSxH82V8NA562rTqwUSsdweesPxjEFYyQS2T2tasCfTUzFZQukDTY2FnR",
  "key35": "cCD2EB6V7pJJE9hUWqscvqwMrAj8syZBVqSApzdJgyBUsBKRHf8ZU3EamMnEKuiLKcyWUiDtfr7BPLpZ3kyoUah",
  "key36": "bdF8Q1JHe9JbkAk4QLXgXkNmTXJHPLti4hScfVXFyRPHUKwTiSiBDy9v3ptm34eA9e64iipCFZRLdRsHD9Hc72B",
  "key37": "54N3M2fPiatiJ4bPbB6Hnhzsx9mRY5b6oUueu6SCfbsLPChqHfAKLHgiswVXtKVxrBUar7NoqQoZEpbNQLP65CHH",
  "key38": "2U2oi5UjaPzA7MeBscuSeTB8yP1QotjsvFpm6gFLhmzP7EXoSqaRyGa9md4TSAgnN5mTZrKDrioRVUMj1HYQLQxQ",
  "key39": "59FVDcesCreJ8JvtoSXwk1MyT1Aw3ifDFV5E9h1QVTn2eGq5CysDXa4GDZXMKagpKp4i1iaZKeaidkbQnbPiKz9s"
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
