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
    "2z3c1QXFqZVUnwT5Hiq8jmEMqtEDEzvLVG7KTtJPE7Kia41TkqHEzHH8Y2EW2BhtsgGZmG3KYt1gqkLjp4tbYqmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8ojh2HXSKmAugDkqzpUZWmnEfwitKMhKi3TvfSW8GtVotFjXeJCdcS75SyfbY7jdvPHMaGLwPAw2uro7mTs9ub",
  "key1": "4JKNpeHo3j2C5z2CBubVgZVqYYAHRbFahA74RZJj9qhMFqCGZP3PVwiavbawga8AU5SsR25YPxu9vNuguuceSdoX",
  "key2": "Qe4bxa1bqMeniriRhbqcAmCHAHkuRaHwDp95cvV3ssYxpKeE5x8uDcMqKzhq8RvLNDiJqQzKsQQZ9pPR1GAuCXK",
  "key3": "4LSpzcRwkUcqvWvQixis5Rhsy8WDtzmetgRakpZkE9b3bJNkF4c94ULMhsQ8hcXLQ7qs3fqcp2a55N6DYp5CdxiA",
  "key4": "3nz99MCiagw9jaSZdiK8oTR6jwvK43MDZnuF6fGzwcJHUwbasLyjesqRdsMXyUj65riDNfSsT5zgzdDZdgUGM5gY",
  "key5": "2rR3tNcmndJe2zK3fxbumyXzQUqjQyfGQsseCG2ARGkC3LLzioijwZU87zvtVnKTM24uqh67fQiVG3zNYTfSUUdU",
  "key6": "3pX6Nik13BKSJPUpcPNiYquprWWWhueEDLFaZHBXef2P32oJfgsQGtsf6Zb443S3ULCYK5rmMwq8GLCHU9afagfc",
  "key7": "3zCqyRGeW5vRKnhawso1vw6qNK36zcLjpzkWets7Ztwu7VE93mi5ZfguRjUcaUwYjNeSHRKd5s33rMpQneisRXW4",
  "key8": "2y54CwcU4KaHBcAKqzTwR3yLbyKw5kRZvssXUnyHajm2sKpf8d9kFQW9uoxQ8N4EJFLXpZbNAsQyW3njjiazNnjK",
  "key9": "5AQHZpz1TQQNvzpiBeTdZmfZyarar9ZQcmh9GGeAKQ7Az73crPJxXmgv7QvW37RG6VHd2vJxhd6YmEZanw9Y5cTN",
  "key10": "2vyW2sRfPUr9CZJw9KrSxW2hQ2fXJ5v6q6AG81VE1KboPYPWFCRGpsveeGN5Dvvj6bhH4FanCZTDp79q5rVq9rLA",
  "key11": "4EXySfxwMB9RMABQL9TVkrkZbmG4YDNQwoyV3Ux11pzBebhUd8U7Bg4YFt8Qxxh3ykEqE89sZB8WGC9PxYRp9pBn",
  "key12": "4oSRmrxE2Td3dM5mPgm8b1qU3p8G918cfVEnHgQehZnfZGEaTUaDrtgJmdX5f3ibWcJDSZzhC2hstgue8RMXQiM3",
  "key13": "271LDVjwH8b6Z8icZvsq89LGJYyxjmPdHETsuLGBNri6CkoKxFsgQZtsg41cQJsSyzQdUuR47PwoMJgPRctoAihU",
  "key14": "4UH3hLRDSe2oJgHz9v2yqvkVrrcdPrAuiuSGn6d2H4djDydwQBip3TjnzgZTjXGLUH9dy6YdNm1zD5zWfKx1NYzY",
  "key15": "3eQT4vpaR8e3hCH3gN42ta7rs7baRsYaWL3yNkJD28xww1iKR2WJNaLKhVsLpziyczKodXY6SnvzSSpQsym9G693",
  "key16": "3NS42fk3zcUZBuqUYzZtPHhB77m4DPUsjExphM5amyeTVZLX5cFvwspdQ912wdPiU5rFq2ZLvSSZkzuABNsLJRVw",
  "key17": "3Tx7nnLrA42EzLC647H69v4yWF7HS7nHtxSWy3syEh8Lnrw2o8TQgEmBJgLB84UFaCxuZGYhK2rU5dHchPHqW5cT",
  "key18": "54i79sNt9cYR4N4CNH5XoRjwrwrDgttkGK7vpozrKPUhUY7iHQ1WgXaQNHgqpiTRxRsuLXcXw6sGWCq22z1m8GaT",
  "key19": "5qovfx3kVz14NPFFPv49hKcKCrygRggJSCXgLsh5qBFMY7JsTFmwkvwRwdcUJDYYyZ2NsphYaMqiKtmpgrLjCj2F",
  "key20": "FUZt3SowkCHJvVTcDvPaa2Tgo75acEwofVSRBR6VX7CDyanPrpamtqNzDjq7nBuQufju7ftNS2TJ6FevUL9FwDL",
  "key21": "3UMp9iT4xhpoKvSTZjddLXjTuo1FCAJZu5vryNPCUWDjRCGAfpNqYAmJ759QiK5Fg2BYtACdwgp7HCtw3nGvfQeM",
  "key22": "5whwQbxo8TAuxLiB1U8WJEqDGKawyZrjvGPGHqqyURMNkqiWrY9j4EVS5AQnU47HVP4xSuoNtpY5kk8QjsJ11ZjR",
  "key23": "4kuM1ZjjEcfevz7QrUCX7zkTdy9ZDYPPjNkKZ8yNiKYHZgZBkoH7HG5uejL1PpkxMUDWK2f8qmfxXCZMAHt6bWBa",
  "key24": "2tDKEaazXUXpKxKvQG7dxno8w8fY1oakNwEpBV2srtJ1iZEUYnV7iDPaTRJhUrDqkre3HA4CMUTWqJRciAs3tddd",
  "key25": "2ceBg8phAah4J6cBhyo6XtSYgVWtK2P3fZNvZJqD3DihyVc5L6z9NHxAfPKA3XctDMvqqnuygqsWKzJpyBseQhpB",
  "key26": "4LagWVrjCjc3HJKCjHuvxicEYnkSN6QRefgkfyZS9HG9fsnSSspmta8QLB5QNYJUSGV26ypeJqPNoqnTuggq4xqN",
  "key27": "3WWRxUivBUfXdrUGuSMyQSSpgr34Q9jU2JDBoNHaF6XvJECALP1DorM1SFGNxBurHNdakXgEwGn8ngGZNXMXc8sJ",
  "key28": "ULWKDaMewzZLAdSAtLqiX7yz8x9tcZjUbvP7Zi4tT6MgNGKqgbKtxddeYkB1X4rUTMyWSzyzcKFdbbvh24fda7d",
  "key29": "5ZPFbLUnnJKao6CfaiixyDCBRqrBwPvS8gh8YHcXp6ZmXDjb2TE9mHypBf1rLNJU7vojHRsjBmr3G8Y4JWD8fYbW"
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
