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
    "5T7V7kzfKQoN41DynBUGB7rfueJR1zmp4G6c6rrsFS3YnN9Yq2xtSZyVb53HKS7rdpPhL5L8WuyqLm3wQRC6DBk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cExuEEt6hnQKic752c4fgEkTK3oimNPgZyPFvUPW8yLNgL5NLp2qgv16s2upkTJyXjmeidLJH3Ji3sdw9QE6uv3",
  "key1": "5Rd4MN7P9uiMMiNiKHSxeJgzeAZgbLDA8zxbu2vLraEfebATPKAnP3m7GoSFPoa8ngamispCtiyUWNVazJcnMHvr",
  "key2": "2n4EUD7N6XNPf7yKjPA2ut6HZAbFGDFKVKQW2A9ZK3b7FTBmjgp74evJZgTXYzBz3VEt9maKYWtqSSs5eVgGRA5G",
  "key3": "vbWDxy3tZDzRWq4qdr9jnbDZT5RzkGyo3bZvRvZHBmNL7s8zyNY52PJmERXrjBoov4ywCULT65HvenPQNaMQeQ6",
  "key4": "jPv2X1hiDhA8zCCPvSzrRcnUN3cGrJ9JwDN3SMY4XxN8ey3eYgcD5vUbk5kZUZ6ci9JkYpPpBzVKBgWSyoKegYg",
  "key5": "2LzxWrteikB9ZKogSanihsKkbPNG4WmLsjaBHnacSSFUdHrqMXf8xwdeu6VouRZd2GkTZSF1hqkM9ToHWAFpWHti",
  "key6": "VnEg155PDDkkECohkh4sFsU1n4QQaNzya7VzgPL5JoZCnE4Wk2vJb8nrAK69h2j8ZsnReRCZiJj7QkVjuMEi55W",
  "key7": "3pbu2RKjQBfmigwurNbLev5312Phjd2xw77BK6tH84dFaaiBwghxcDW5yejtbyhLUH9RXqnVgMtfR8nMncidfvUa",
  "key8": "33r7fVygspR8yz8KXrXTTHxfTAUgbir8wskKmDR8sjvvXP6V2JVfL31wYK5mHXQVwS5oqdPGR9gxSv9A2R7WUEug",
  "key9": "4WJ8JCNT95nBo5VzQCaV38p1Wak3rbwzNNEmEu3xcMgN3U5PiWmhbdiNQjbGcFGEn2jrMcNrn3yKQNdMDmzy9rco",
  "key10": "3MkqM6NXBVasLEfVsCeFJA7ckyDi1HXCvqiveJ3nbD2Zv3AyrG8UnLebQ953giexK6wzzxZ6f1JnVLYMHKfcYhU1",
  "key11": "tXYKrrCmF6tdW9hoqUrBgmhJmrfk29MPmvC6Y8ModxwV5B5bPtYVrUKwiWmerng2GKLJiR16LhCvjG8LDfFgaxB",
  "key12": "QAYsfQLi1qo6ER4AfQYxU67w6ePZrQsXWfb79pccuJNi2UjN9EAcNhGd9wdQNSRRAarQxWiLhPQrxe3j8bgMWCQ",
  "key13": "4Rq5229WWfc2DFyEVTjNkTJtRax9kDnXDj4HcAtmGP4mELQKiv9CrhUdhx3N6z5DLEoX2TzGQ8j1TMUH6PeN28TD",
  "key14": "hToc8t7GCL4wgEiFa4eSgeThcMJiZZrCqMAo5vHt4erXuRNLDg3at88a5zQwVDBdDECndY35oQsAm3vx8QADzeT",
  "key15": "UEBMu71mGDeMxvT8DjDQms7eRfZ3rURFJfBbm4yJAZMzuNHYgU5ow6PczJ8Fk4J5Wgt6cdarYRLAcFvEwpyErTv",
  "key16": "sSZyFYz5s8hgU8oGzPMf2Lo3eoDT9c1ZF4JyGTne1fFitg2Fnzvur2gsMyYyS6jxuuh613gFKikimGeegXxGJdM",
  "key17": "4NGeHR4sYktP5ZtiaZ7MmhccKbN6Az1QV91gvzD5P69DkJ5p6FVsq1m5FZCceJxEAfoJrZSUPm9mrEydB81eR9fd",
  "key18": "38NJ5MoUVSW23h6GA31ydgcsGRmxL3HBAfuwrozBBEBJZvhCnPzVjEJVpCDc2c68KU6PkVtZTwXTf6Hm4L3DVKeY",
  "key19": "58FG5y5666Zr79dYE4rSMvFBXHtZ3W4BkajTBomapcBShF1eFREcBNuF6irF9nHPkrByyJMizs9vXKjAMhYX4aB6",
  "key20": "2k9HRgmShBowCM6v1UaX3SXTDiD8yuNy7kXjj3UiYYYPGWxja5NEAghrq7sDmk6EQvjtWMSYvbXjX5hcPcQn843x",
  "key21": "f4e2cjbzszwKaGjDvmrZ5vPzDt9bStkhqkD6LmZtzgxWZPm1wNzyEJ4CEH8jzeaTVxH5Z9umGa2X3rWTjJzsQ29",
  "key22": "4g62jBL2Upb6YwZ2QAV2EihaGnJQdy7fQhP6s9moywBefvV7RbKeXf6XPBtwFsQAu9FAY7YSXZoPXeHAcAbiLcsi",
  "key23": "3P3jwm9ZYGAjBJErfQF7G2aNDHJaziZZBttckgLm8xgbsbQDN4aQUHG2ia5DvMcDeKXRCiQ7r6XL5euNbUEyiH47",
  "key24": "3fkwEt84ppAKs36Z9d3fBEtDtLb7hjdTM7njYbezT7xWmEZHtMR9TzqhmJBrDQUbSrgYXRCGKKXYCr8LUmk9aAP7",
  "key25": "2rwzwZtaZF4oTqMGPXzmzyPfwwQWewAhcJ6igrZfZ8npLzvbMKpAWr5PJq4rgzaa6jxR99aPDiyAVNZ2X67cP8ab",
  "key26": "3j6LHuXXvzh7JjUZFy94tt1SLXCMrFppvgWK6zdPfvUmWdUaxj7rcGaWgF1yMdNdZdMk2EW7CRsiYLDjH8gBGjGg",
  "key27": "2iBrwX4qgG4dyjBQc1CwCGeRyjBkGAUMgU3Hq784cuxwLV9YtERFbizZLLgSYxzBD9ds2tEoxgkj3b83mxA1pL1y",
  "key28": "2a7ssrXonFJo48agwoPsYHXXiAZvou3KJhq9FXaXwi8dac7YUdbugA2nw8ZP3vgb4R9Am8GjD9KyJSSrKf75AqAe",
  "key29": "3NyKRzR3qNicGYPeEEFUE1o2EiYima9aoFbkxsyonszBc47LoTfpHgvbUXbjKHLzYLgs5eqeTReEMqX3pEwNMf5d",
  "key30": "5oFVxHwesVFFmDiq24p59x4SAfDnVmVM7EshJDVAruEUcDsr79XY7Q3uVakFc7bKeb8ULpkUcvGGq17j3fpxFUtn",
  "key31": "5XJECHzHJKpeibArCtTj2bkLUdCq31H2HeAhJLJiejaeDDGbhbPE5eaEdfvqHcPwNAsvK4b1SZANQo86JeVV39kn",
  "key32": "oYr5mCehaW9tZb3cdLBsH3aLvMx4mVkgsuqPdBupEgHSSYDRAg7FvMneW5XEYGK7fiDLH96cAdVYn9XM9pW2NeG",
  "key33": "VWrGwkPcXJrySg8S7isfB9QK2UUYAVJQask1evXKMsZnPLfKSgepNBsnurud4j6kBXh1hDDmZbQneceBNs1xpxJ",
  "key34": "25mfZgQMSVaE5StKbZFKtMyuG5BuvYeyHeLejZBG2AkY9sjKgn9YKNqB4XBTwxtPPHwGRyP1TDZKHrWWfr9FqJDo",
  "key35": "2QY7SNpKGyT9VShn64KxhyzCGMn2iQZAkbbXEWSoaXakGtHs9AcF5Qmg6A5Dggbcw2VsoAX8ztaVZ5gQme1rAnnU",
  "key36": "yxfDzgSZ9hpneDjNm6k4DFTqzY6tB9atgzqvchXXb4jXfLqTMc2j8Xe6r4qq2UBnjgj7VwXtXZJWFLuYFrZm5Ga",
  "key37": "4MufbGMS44WzuVh9PKk7tNMw8mbxZMTK6cMYY6c9N3yqqZATSZtDX6jBe9aZ2hzMabXo3hjWZ73c24wD4Bb8SH3q",
  "key38": "a7L8EDPbUfkSuZUzBg2CRB2FVqWhHbqvEVVYc8uB7N6jnp8aophNzro3ajuYF5a7QqY66UnjMW8iCzGJEP9F3ex",
  "key39": "5DazeRUtQWTB6C691mty5CNS9efFxHRJ7QxkDySRyeNnYDeYqppx6zWbcVo3ZfTsMoJZVyYj95HbwP4CWfVWuyhi",
  "key40": "4KHqgVAMAw3rwQUqMKRp5wUXP95gcNGfjnJ3VrJgSwPHxU8XZVPoi9tXaHtBw83vyVcmHnBF28WuMLmJPopkF3fg"
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
