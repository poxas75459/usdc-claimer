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
    "578rPgAtLHuSabgi3euFeNj9gMoJvF1TA7jNpLGsk1Fc6dKk2g5MUXeSAX22KHqo4JtkPDEhGyqu4dwJbtuq5PR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mBTrZcRESNFoh3KZoJHTe6vGha2sGZowkY927ksshG7Uw3ZVE4gxMcRgWwkv72jiu767EiYBDr4zc6HzYHn6SQ2",
  "key1": "38aGQCrAZXkxvvs6J8S1zTvweL6oLHS4MNbNDc1ww4KMtBd5i9RRxbAB4cX6UCM48TQdd99K4CNg8UrSWuuGsHGz",
  "key2": "3UDjfrmiz7WcLRe1GB8SYdXpYWUqY1hv6km8fqitYei6c67dDGXeEhpLrGeZEVgvdLGL6DfuWuKHmKMMN6EGpuLv",
  "key3": "2KSuHkR6fbWsRDatH9PSdtbpGgDAGrmgoKZCJf2AHJ5WtUfimJapz2Gyq8RvCaSdscxnjE656ucXEQHWFuxrtsAe",
  "key4": "24Ajy7N9QMXcKSgn2YTc9YCfJpRc5GWzrSDAENnDqX4twRyzEYYriP8Ss9YUBZjP5DnVm4DwYcYdywYkEX3isfkD",
  "key5": "3VVVsZ1tVfL18bZzktetLWrbUcT5ME3BsA3eukLrQTDngx5istPHLPybuBgi7W4AquHqaJwZ8ZHg986WjkbQLv1S",
  "key6": "4HEdo8Dm38vdCxM6NYyjC1cygv6YJESuJ4Xhwk8TVRmH2429E1S3vnyQXwaH7NHpWFbuksNaZu1R2WpTxTR1HRAS",
  "key7": "2oTBSXhJs69mVd5mg77Qsm2ZWvNqyrthxJBpymArET3PrPy7kVQvsutxAWYvrD9Jjk1nKbjqZPuRdLDLtgGTQxhC",
  "key8": "5hc4ackxwAsDY2aKjPVkQ4XdGR4AaCSvM5VsprV3jMbj2PczEQ4Q5BdZn8LExvUD2e4FmzpRBHgrUriUxekFad7t",
  "key9": "eYyekdDbzUDmteW6mZqGz84apaDMGX9uawi7FhYud4DWDyPnrRs3f11xFBdFGbnNJ3V1v8CcXbnFTarkhNR7ToH",
  "key10": "21JtzvNjHfC5RWjPrC9o9XWRmQDwBrB3jZUUoFdKXDHFgE5se9Ya3VjKgRv4Bj8QmpJLyZG9ZSW5ebxPM4ggLa1q",
  "key11": "53ECnPRQNnteyVRci6qqFXqwM7MJvtXsjgTTd96uDZy8Lsq7fPBjFwQiKmPtRHV3wbEtpKVjJYMP9cG6DCZNnqBe",
  "key12": "5E5G54JCoZHTnJX7Non8fJxDvU6YgpbgCHyUeD6CCHXJoYza1uz7pEkPo9q7XaWPtQWXY4yqThQGDRqynpGnFvNb",
  "key13": "44uvcgdq5bzZhzCMvMCeoFsmDCWBunCtoKBQy6bB8GN7GxyuXA21F1u8aehYbx294p3p2fbQz1RqKjmfBX7KCsvy",
  "key14": "2NhNGjTz6zcNjacYiHFRc7fFQaGBndH4RcoqogswmSWba56Uempe14GNv8BykRWE2ytPsN2fYTtULU5HXGX5r5n5",
  "key15": "3nRSdPRaRxDYsxUtui4KrDrDinUdS8M4hSKbQtZqWUWrnMJpwCUhSJj2qkPT5fpcWQ548rYfVZyAbqqDEteyNM5z",
  "key16": "2iRzErxKCuJV4rFJVdCx5yxhAwSsZ1etJmDd4XaeTbutMgBqZjRWhEQnKgr8f1ea9Ug2FD87LPtjyYb96pdEvh93",
  "key17": "26LbmJeBKobBpFs1oKJior48VBnd4JAYQm9WugrAeyma9xhfEaZ7Eamqbc7eqi9ijD2CcWYaExavtn5LUBYQuQhv",
  "key18": "5BTdS6ezxf2Eot2xpPZk5oT91j8Fu9Gj3hj2j5Qyz6u7HtkWTyFnLDaDnvPnM9BPK6c3Pb2FzNGZUe1af8G9V9DX",
  "key19": "4oXX99sjcCvUSjLzUcNu17qenkdLCRJ8Gs3fmKaGBkS3vEtgkBSDJJjxm9wseDWYHRpyGLxANsJWvhXrRPSxScEY",
  "key20": "4LsdfZ4dqrU94dWfrhJRV75E7dJg23TsCRhVAqc9jAmsfFzfspDs6Yu3hYpL6pby9xLjkuBjTiBefVBGFcAonJ9z",
  "key21": "3W1u9egR1eAfWLrrCNARP1gu2nLtTbbYEQGqtmRLkc7t4Jz1uVZRPHXtTjeW3TybiCid22M5CK7qPQw8LSbeyFcY",
  "key22": "NKPBfDAaxEAZqChw6rpK9FJ27rFL6PE53fHuVqCZt2fP273TLKgRwTGdqVbqkiCpNmiHvZrqNC2DkwGLng2nki6",
  "key23": "2S2khccEPatTDxrrmdQaVajoh8ZWzTvwQW9KuMtjiv7CQamiyEsrDM3KrvLpCurtGfszqZziBEJ2GFCSuTwKdgFN",
  "key24": "4UUqALkpct78hV3Pkr6eGLhKvdnBNtux1X1tdwDxJcodRAiZXZwkXfdLkiQaQLSd9BQsAP47m5h7HRHKh131MqBX",
  "key25": "wL6Dbqk1evYuVVo39vQ6wBsvvbLYmqVp4Cpw7PNpEAVAnbwHsicJ3tyMxMDXTKEYvPARnEK14UmefBBBRQ1bNXN"
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
