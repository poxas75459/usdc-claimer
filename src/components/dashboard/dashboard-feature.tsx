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
    "4i3MALTX3BmpTv7UyPy6zsdrc324mesxEGfzNjyLhfc5o5ddzy8P1eD4JTZivKFSb4xwwWWomDFBvVNn1hE34bgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NMohHayLfT9Vtr2LCPQQooUatAT59bjctzg919ZDtCPqKStxvJiJNW9XvyBvPzcJ2AQkPhRWYyj8zC4uDsxF19M",
  "key1": "5CxKuWTBty92gHbVPdKho3X6s7sV264Wq6qacBtiL6DVPpbmWnhn5yXXBq5tuMzdBMqw2HXauBQHc9z3XLwp3pRX",
  "key2": "3hqJarAWcf1sfpGueaya464ypd5iMCeEaLhNVsG5ZQrD4BQ1xWk45VpJYQ6kH5J7R5xpLzUcU8LjvVi1g4W63FHc",
  "key3": "4s3sRZmqCk72vusi9jc4nLveAeyGieiB3m88qBuCEoazkMmg5nuRjsc2dJC725pFy24VknbSdcaxzjX3YnXzb7zm",
  "key4": "YwmbNEkA5PNE44MB42D4ov6pRPLQsAfGfpJGb58LTykP2PzB2SgHfztaU4rJRGYwhEcRqhQm3NCSrX2nKEYJU4n",
  "key5": "4hnpMEePjvVgkFkeS1MaM66k1QdEBugExkmmrwTH4GPpxP2R65xb28RUkLs18MJm4X52e26CvDM7eJrXhJwnbwvE",
  "key6": "4sDrWQhRP6bJtVNhdP9GLxSCeJJTEHFq68dC6dgsAXRRPsHYYgsBUywuVKEJjnuYj32HFUtCfYjC8Wthq7zoAtsi",
  "key7": "3E963JGHc89VtnKsDYG9UbKxF2CeGj9bg41rwTPYtYkr7tEdskfPikxaZRECY1uEjDA6rwYqETz7p8Fy48wNtjad",
  "key8": "AAtQkHUjdv2CKLKWFqmNH6KkyyarJNymJndjQRw4RPKKZk1w442iG9CHBJq9wB44EGBXVwqcbxeA7FQkNZcP1eN",
  "key9": "3u9sUGienvdnQCc6sj6vYt5nJTzfuALUshVFib6db5P9aNofJSVuN6jaj8dzFCKPowd6yhMTKhuzknQzqDwwgakm",
  "key10": "4WeuU84d6ETuJ7Z1HPW3TbxCYqLe9i4vKmLcxRy3VAxn8obW9DwBYn1KKj6v91tsFCGG5LRh4boREms1gMxTCVJr",
  "key11": "23YB97EHpvXDbuUo7WqW4NkLNVX9JEgZG4QpFdNueBW8AonHAbbyYkRSdCKNRuNqYLnQ3HEGoFFqBXf8PLRoHBWJ",
  "key12": "5qBn8rnLfbk7waRntV5wJM44Bp8t73wTgPiqbh8RHWkLSaWvdYiypyhL7FmnyPBLD7RtGPwCR57mTZVEZSe5p3ZS",
  "key13": "UrZBEiXRyV7iKUq1mXPXQH3rp7Ht3P92AV2GHvNSmxgxY3tDtiHYH6rzEaCKJsVLqojFXLzWcBYAkrwonn658QP",
  "key14": "3gL8tmJQbhw1YtyNLSiLuQArmdpab8NRVaZcsfA1FfCcbt25woEgZ7mQPvb9pTMk8wccFMvxC7SoRErQ11nQZK87",
  "key15": "hmFE2jDzifypxNBm7pL8YC5EqnjoqyNTgfxhSERQYi42LsYAn6s9CbzLSjWRSBnNMMP8SoTTExBt1seajVikUsz",
  "key16": "2rmTEHU11qHEHqwKgCEfMoydLbnX9XH6T1WnszN2c7jPMVbzLVwgQLb9P8gkLbBmhY8zmbt68KJrPvEaEbtdZUxj",
  "key17": "5DhLcUJBXBiLFawMJ4eWZbQLPvoDf2dAFgt4FYWv3XKCkg91gbWg1bJKR1gs11mwCNLmPBEUCp2nTx9xUMcou6Ac",
  "key18": "ctUsG33s2naC2LaRfLKum2RmDnqKpK8V11Y313vShHAwL6YxTiBxLsPQm7YcVC8htBwQLESpPhPnSkyvorDj4FE",
  "key19": "5GnJHzN9QMshcEF4s41mjx5zyBjrgg8uSJVhx7Qa2sFRT3DqUQ1PhP3em9NHpfQFn7u9R22yJ6QAp2G6182G2uBo",
  "key20": "2maB5FrHvkgTrSYZYoH3tMRBzqGXghDKUuum7mhXDtP4qJCEoCRF9AUTCw7229VsoTiDaKezQNFZKfbMEaiQwz85",
  "key21": "2x2x8wUT75ssJ58wL5ge257APEUaZFKsqPRTqmyomJrk4ddjhQJ9RH4X6wkGaBFTkBB88kSywAUm4Ki39efM8yM2",
  "key22": "L6N625gcnDWPLkm8HE8JoGTgnJyQAEhhSNcMx3qdjEhMwpM3xEP11YoEsJYrzhkNHAqK2hf9WRuhkNdno6toMmV",
  "key23": "uaXzN8ToDZD1vEDqdwCMJaGWPxV6Pt17N7aizCKKdJD469AGUbxAQXKnEGCtf2PuCgF2XJLgcjhBS9tYwBKb6ik",
  "key24": "2cyy7dt6cXCwvsNK49tdj9sDPDnvbrrfvfh1CFE9HwECyrzqN1q8iHpit4XPUeL5NtqdPei4XZxUQXhjNvVsjuhH",
  "key25": "3mMjnZjwB2RpJEgvcfawCSGxv4bDMLohYwkuRDgcpwGSCyfcKA8Ge1uSXx36znwxG1D738iCcLnDdSwAFAsGjXxZ",
  "key26": "39R2b9jq35L1aYc8qwrzXfVHpvdJVRVhoL8fpFaXz1s3Gttj7MSoWBQR2F7F5SPnWboexB2uWneuvjBwmWZz9L7d",
  "key27": "3NxUCf3cwLDmggh7QdgYAXcrTNUK19jAeVJs3CSU5KYY6Jaqthb6iGGgVUvuMgjPasx8w357nC5Dbi8Bz6HEDpke",
  "key28": "425RXhERdJnQP2PBi1e8fsBtpjbqpfxBQmwetWGmGjWjVxgpHnk6EPwPQrtW2DU3r6QjP5E3Zm3pmdcN54bir6Ry",
  "key29": "C41oHp1AUvEe4djM9mggRtcRo41TFeTA2onWSRunJLZRFppegf2zQjPgKZRmSTavueZwZd9ZXWSmXWZWEyhYgdT",
  "key30": "6jvizTFa2rgghMSQcapo8SnX5APn4FRqfBZ6JZNNejpV9U4zLhbC6Z3c5BfKSmcPFTKoRAjDR9EiUymEMrCS14M",
  "key31": "ctvaawUaA1gcpiB7Mf6LvhgQ5R98d8eTcajsV31BqXGqVof5s3vfq4mSTUuM4xjZazkJnDgzNnkUbR2raxpSVuS",
  "key32": "57A18j9rzbcJ8auk18yiGEzMNEKrivh2QiuCPhTsqxLu7gXRLF67JMscWM3ryu88ibkFRksi4g6RcNHxCeWUiMKw",
  "key33": "3p65w8WzsvPEwwhc4aU3oQKvFJCBEmwu5DdZFCnrc8znrNETyAyWVjATWZRMLu3fRmtqSkBRBTDt7MVrJnWY4eTJ",
  "key34": "5EGBX6pWDUKH46kkzh1LZHNtBCcW6GSpHR1jhw5rtDvnnpETb5uRTNK97tuP1KccAbTRjzJAgiht5VgZyyJQXQ5d",
  "key35": "3dE6kGE1Jjsq787ZTidPoS4pAwPnXgguRWey18RQTQJTekVjB21Q6Kdr7FtZ6QDmdoqEcNmCrGXyVPc5GkDUNSge",
  "key36": "2r5Jf49qxBg2YdpoWPv6JpWnxYjmRjEZST8bWr4bvFkTQVHTX9TDaAks5xr1PghbQXnjyx9ivTY4N9o3PQYgteTa"
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
