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
    "E7w84hNRikZwTqEWjHK4qwbNfqwBc5uGpjy91F8QyqCrU679Z1KKn96m7MNZishNV4KzpvcNU1TCeDSQU1FVRbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3zDN8UPN4AFjkFuUfpXqcZV747kQydYHGymgNhwE8oWr6XZRKxbakEYCjoWv5EMTFMe2gVe3oN8FLpiJvwkA2R",
  "key1": "zkJtbN6yz4FAFdZ91Rbt751cwcFMwdJNk4JzJDi15L2oq3Qd8ofdgjbic2te7RBBFjsJesTHfSGHsqu7oah3Chr",
  "key2": "3VJ473qAnUUhzviBZsMimFWZp8uRsFg2rqzvCm2Noef7rM7QPQeqK7xvCJZ4E4pEGjP1rFxtgrDBUj7EKCZbFZBD",
  "key3": "5LxoNc1WjV7rR1mdAorrvecXaai8Y6M1pc5WRZuxoepBhfdL4hudoiSaBRcwcDQ8fq1XfhnVJ2iMAEr3Y7Kxg35m",
  "key4": "544hJxGF7EcCAdUX9a7N4Ua6R7GwTsnypA3Z5xYydR1NZ3VNyKU4oLHXtqqVsVvyYcEYqyGY7dPp39eFq1LVpdxK",
  "key5": "38Wia4JXZgTnUsza6YGKFfV2warSfsNso9qiqVs7SDhZvQPmhvvzRxmcVeJsGbMo1cQepa8Nc3kSJzMg16ZpXjB1",
  "key6": "5GFxf3B6JRYueKsQfmNRTmJFM7A6BQf28RnX4SUdxfYxR31pkcGrHv5oQo9fw7NRZd2ATNnKTcmCE2C35w75gxya",
  "key7": "5jB5LjhKu4MGYi7q9umknyDBnjTYaddeHsTF7wujDuGvgCPJnrSA3zmxn9rzMST6Mh6352ZDDEQkvuQibSgjBgr4",
  "key8": "FrPjExAErra7bDqh8fb8nFzJnevEzC8DbeM3eP9iA9ZwKPUhmfbFZ7YNUrz3pBXzChdrfqAaPGZLkRMoN3w6zKe",
  "key9": "srYvcP1GxMdDLjZY4DUbhSTfsL2qVJfAwBFye2fU1P8hwKmdMGGqPzieWosWU7NGJmcRkSmTm3ctEoGqW1TcaDg",
  "key10": "2dEGCC38bRyksmc3yPZUqMNmmYpk4mmcM4vWZf4TUne9FEsFxgAgAmdY9y5Y89iboHFiDnfebM77sZGrEjW7kdyM",
  "key11": "4rfDc2b3jbRHAtKDhSmSwHYACWBexzCvXH4jVLzjjzbbsVMyugimu7UZGY5fkL8oDrA3T351B6uS1gB6CEUkJwRg",
  "key12": "r4hK26Ki27reyrfRCwugxxKpheEs7z3PSVvmAe8iwtw21RCyinhzHVZtcSZfKLTPzBwWTtVtTw37QeJc2HVFPMK",
  "key13": "SUtyn3qJsgd8q8mAZcyLNKsJqEBgwEWUUULjbtvCQ1bZYtv9w234EaqYQE1N35pHa1wHrs71ryPFRzYR6qeBdXK",
  "key14": "4Pn26GTzTK8hJy5sroKL1cNsAK1LhE7iWUnELF5JC6veUpAPSiNuMM3t4ciWGAHhwZuuwqR9yfzD52G498gsVxmJ",
  "key15": "3nsqt1Cy8nYF2mCrZDGWVNtGCVst8JXjXVoaQaNBGcJtrMTdxZ4Zmif4xc5qvG2StwYY5wVMJqMGsws2wjBKxyJd",
  "key16": "4Pw5KuaLXMynR7KmYX7HoC6V7VKreLzv2qpE1dqXgshBZHFiyvRXYFAwj7Y7MHkhccFykUyy3qQ1ZWeEueoZy5f2",
  "key17": "5x2UjuF9kNzVYtD943TtfcyX1fZzFVTwnFBnCh2M6CzLR1BavhqxKhajZizQLtSDRGBsWFaAEZtZC8NLk7RTumHk",
  "key18": "3ECdGyzgzexM4yLD8pTShbgxtnw2ERDSdmBVgTc3bPRMAez9RYBSR1MdPHPUNomQVbb8Czei31kCPbv44u4BT3Xd",
  "key19": "cgnwiAnumpZsTvG11iMTdszKvjQcuCgdGNg3omWn5WzpyXNMExp96hn9UUFvu67APgxVWa4oEspGRzJBioRtFjN",
  "key20": "5C2dLJTjw29XcYU75TJUwYMbXoufVax7q3f6ECb1an5rL6rcRiBqMaA6vU562hiyn9NMzZg5i5PCJZETDRB2rmtz",
  "key21": "3JMV5t75uMC2mjREt3DctjNc7DSTcK4MwjsVTbyqJNyshoZEPdc1GHpY2dZQtHBBCyM93VvN99qJqUvpuNgBNP1J",
  "key22": "2JzAahYzSUzqnkJweNu1fj2gGFU9FRn7aJuBTTDqpQFhAtoGHujvXTnXGYwQBapCbg7a1Bme6tJmdrgYCbNBmhy1",
  "key23": "3qyh5wn9tdk4zdRgnccJFLxU92BsjFHxAS6GKGqCQV7nCwq6uqLS98b9ApmN4KRfE87E1EqSULLnMj5eNC723tdS",
  "key24": "2LuPyfHV2kBFsf9vgXnCSafX8PVsGCxHm9dKwonmw1AgLCjizuRwf7C7qqxZCcPwEeAJgdnFjLfhSbA2oNgZziy1",
  "key25": "5tGof9uTxMHTo9g5jUzFjGTepQ7xmJNSSVPR9MEfUJpA79yYNrstJc1XwjEUWgjXDJceE9MAm3DYkWBkVpnBHxEF",
  "key26": "2nmQQGzYF1ix1TRPBgU3N3rFA4KoyUKpmNJzriZMXct5sqUXexE4pdHnF242JtKgFbE5awcZrw4fs2uGa78QZYAo",
  "key27": "RFJNoVJ6qiQfH1nS1Hm8b3CqFHC3fxnBZuC6xgkbwR5wL6HzcadRPkkoqaG1H7Tnuu2K4hCyhrCQrtTjsrwncbN",
  "key28": "2p3gpMPrC1jq8wqx1BXMM9ovCeawiK3BnzypWEXb4dtyx5tLLXDf4j74KUpTUX5Ytjpj9sJRWz3u7bbvdzWL8C9"
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
