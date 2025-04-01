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
    "3HPjjZX23i2cfypaMxH4UJZJSdw71ZW7haLp5qLyEFW2S4KX7vReUYdTrWBd97GZ8272psrTX6FwDrCmFBa7Gjjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MpMjQAkfe3AfXhaPu17m99irGnV4exUgTn1V7dkJkJGHDhVrrcp41bRTgHr8yiZR7U3xQTgeQ8YRxFPrvGMgd82",
  "key1": "4jNKm3K1cuZpvpAcr4HhLo5Lvbq76skWz9zAmDRSjfYyq7MfSqktAoLHcLbDhCNieYuh6JfrMWsfppiaUMCiZHGc",
  "key2": "ZGyDNyJbBiJ1T6k2Sh2TJ5W9VSzC46mTh4oANsiQ3kXvo5SGEj3Qdx7mMnLgSuW4DV87GkBw9AXcwy1GjGP25ia",
  "key3": "3pgwWiP5hoUoqosRTNqG4N4EVwUmBVXR6s94Qz2x8ZF7qb7VsS3RypNJqqBhx8uTFVR73MeyQXxo2B2tncPUbTw5",
  "key4": "26xAtC5GEKyaGsR1bADKTJUR5TYL1PAv7myjYVoNc2iqY9cBDr4urasxtiJENXciJwjCbSzCNEbaJQyQqWqr3geB",
  "key5": "4yjxY6R6RYr9UM9U9aThYYScHKgAkgvgzKVXRLx3bXHjmdAeX7W4HyCsJvVvcRF8cEutkx2dakNxficfvoahZ68i",
  "key6": "4mLUu53WtKGUUq4Ss9BkXUd9hDJwMpJLLYH5Z6HAdwb1WiCCtvtq37vbcQAqHxxYwXoGHtXZkyDgjn6RYShbb5L9",
  "key7": "4fzKoAsXyVywFkXC5ZF874V2tXcRrUeyreF5LRcbwq38qufUGYX9oQDWhZTJYGZGpYixS5Ryn2vqmzhDLwNfzSJY",
  "key8": "4Cu4T4gL8gLjrXYE5twt4ve7bPqtr6QLHHPVZSv2o658zrbX35uDeGi3hzECaTRubhJEPQKp71Qa1PrXUZWn6E7d",
  "key9": "r6s5j9P1UahRdtAkfhDdsehLGcD2XyeP2aduLBZQfzm6dAidg5ctSwWNYeDcSbkKEb1nTMKc6hiQouaoYrDCbWb",
  "key10": "QTnyHKnqCLiXxv5caEbRMtpDLMB2aQTo5vCF9ow6GPyQF1saw2sc7CPQLnkGbjnTRqnCm2mVQkEr9CgjEBSvVmS",
  "key11": "55QJ6ussHKW5CAsiQfwPcji45X5Ng5hVWWeBGtwaF4Q7hwK5eZVWHzxJSjKgjdrrwZCuJP8cTxUxUepFLNmoAq1A",
  "key12": "4GyA7NT93Lr9PBeAzuoBpgs1o2SZSi4uKrngEo6TAQ74UgVzj7EhiMDmYZDhPVS7iGSkiXNwAbuVviusgeUwtHja",
  "key13": "5wxY9smnfpHsewkAfmGvdXxtE46rhnznVtHMjq7GjTTyGTYSPwuGAvtp4RG15ekHUTZd3BPv1jkEAEKorBsybvwA",
  "key14": "3ZC72QTfF7oBzDjNYZSxDRMdQJE43ajXP76yAHTUJp15YeN6JpWBttgp262HvPtSPwKHHHfcuUBZ9YDwLixZTeuM",
  "key15": "5qtctZwz8V1kdn1vWhknLvrhm8bCgVsjRYLXpG4rDToK2Sw3PxP2Lorjeb3GXKsX96E6YJBKYtZo1amtU5gg66dZ",
  "key16": "4Xypqu9b5BjrvrxzzEsskZmxUVnsy1JJUNqUaedhTN81RetnQjmgYvWGzKQ3p7rXyiwEEjx1Ex7GZvKy6ARoEzRJ",
  "key17": "4FLr1ymuRzuSXGuma3jMJU9wqUdFABBYmSxhqtCVpQ1c1XqmiA3rfPyjYjM2esMV2H9QAgmJ6ZKTRigj8TmjiDgJ",
  "key18": "Cdx4kT1HGp2F9u9RW2CAfqGk4vujgSsgRDgcAZgkqJN4ZFE2jdhmAuTrS1TbyieVTWA6zLPcBKdBt619PpcYYfk",
  "key19": "z7mprcJPmYWDF1nuqcZ6o5BSj8Vr57kiHAWXs2u1XZa19u9RSLsbLAnGQG24iunrNKvCR1t3JaKJsokXFey5jqm",
  "key20": "2rqpyRAG5dYaFgFKxJTj1uBJA9o2mdU7hT6M3xAnJEp9WCjyM5Th4PdZTd5eLxeUWdw3Gd46dyiZNcvBYrokLSM",
  "key21": "5MZk7haFd1Sa3TEA5cvgD2ZoeH1jFcw1VMkLYYeNRF5SAgL5t2Po6VxyCeZ1ziMbuMiX55ytgVGR6QvZvVj53E7E",
  "key22": "3WE7bryvz3vPUS3WjrsDbhVbU4YXAQpM18m1otDt7RE9g26dxJ3tZkSTXjtj9ADUw85vR8hEBwCkgSh9V8dTfNcN",
  "key23": "XE7c3Jr4Ufe6neQZcKoR5chCrpfF2svziiK4KgC1rNPnFY64tnhQQkXfhQjG4P6qLrGTScREh37XduhKJFDtn2z",
  "key24": "4cK3LyKNbY53w4UTcuDDGnMf6Uw6pVD2JLLCBTj86ujf28T7tHXbXGdnDExLofmqXHEgnLnRguMH8eaKivCP273D",
  "key25": "5yU6pvpmWNyvbqpLQHRXQpnjHn3VYddDX1ey1VbKcZK7Y9p9S4Sr9sSGoMgYuJ4MK5eTwHkcCQbihysVdq4iq3qo",
  "key26": "4jcbMzUCav5TTWqWhBxgHcgrDES5EMg9CKweQjaAM7DEU8S1JHcNvUqd5f6EpcVoGgB4DvMd8DhLzq9HdBbeZt6e",
  "key27": "3prYvwZcqZahZUJMirRJon4uUMY17uxMFECX63Xz5kEHFsXghzAXMUYyLg8AE3cRx1RkNsMKFkgBjVrtW7JFXCFm",
  "key28": "zJ6N8qfwV3tQdrgCxH4ZZmaT36XW9RYD35LGB7PRCMWJrXe1EXofX8R7nZywqmhDzMDu6WBDC6TwRdtWiGSkqaZ",
  "key29": "2hFjfzsxk5kGv1oo7pYrmMGV8U42FvJLzVNJkBN7z3Fkk7SiNAzdLJXWTMtoYa9dMKrY5bfanGpi4DJk3CzSW6GT",
  "key30": "641axWd6WW3ZBm6j1SPvYAHXzmHgtxQJWLp8ReKCKdEUEgd4nPs6WsYmCoYwN417fwUgg9gmgvcDeP9reJCruA3h"
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
