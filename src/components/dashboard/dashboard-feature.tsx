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
    "5F456Qj8sYqXpmY1TS5shCLZN55N9hBM95LN31GBbaVQsu6TAnSxJ1e1aQNwLzAqQpHduM6ERTD2Pb2FHF6JQiQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFz2keP9Gzfc496pVNWQhEjuesbs8JusFP7eHJXwvqKxq8YQxJswaJhCTcWLwqg5fcBMVT62mYPMA9pHbwsRgg8",
  "key1": "5pNGr3LS9EUPybs11BJyL7PCyu2fDPZ3msCGc2gQsrs1ejQfsTejWwm75Q3HUtpugdXMvuoLgtsbhQgkwaTWUAWL",
  "key2": "2yLqoZzzw8gaeKCLr3DFMABXqivyqDFfVHwbi3n9fpYikuNTrCDKvQ6s1w8qc5rhji8MXUFTiZgiaubeJdNqTrHN",
  "key3": "TiGQsK7UWXHUanDKBtRmEUHneB23sAKRCHPG9nUDSGGHEToT7hbTRBjKbk823xNkEMB4j34we9rkwxfbYTtew5f",
  "key4": "4PbNFrepqWfJwSp9w3wGdG6zaLshnKZ4LWx2DvHLHnin8v4ZHXZFKYEis2WBsvYc91Bgq1PMYEcEeRpD2pE7boqa",
  "key5": "25hki972Er7BiBjhLLU8dtrGBvRf95kcCRnBeKDJkxXag9yGuTi9bYe5WCTwQ3bT9WApdVAbfmu5CiAkrs3CJ73K",
  "key6": "2TVR8shbMf8AjQbKJ5RDfMGMQQ3aUZCLdpeE6EiHW5P8juqV9QyAnyEniwAVa5L7xJ1arGgyTcg48KKBwzaSiF8z",
  "key7": "2vma7sTYQ85a8WphFBwvFUXxuaEXGqTUmL9iZ6TPqqPgeRmyvjVJCoHbqSi9rTWmcgSV8peG2adj4XHmF2Toc2u6",
  "key8": "3mCCbeW7tw1CrvrS63p5ZENEfoEpMKkGChNK25g8JB4RTrGiYPFRmFk9fHW2xVXiCDiTqGUgmMn8S2JWuNHnz1wK",
  "key9": "2PACShURB3csVeGt61P4rdGmqPMUDCkScXS6mxAs7gfLhs4n1YEkyMDKNjc6kLHB2H8JquNj8QpCUfGbyYUVscXu",
  "key10": "3vF4wDtdicq6xVCHZvoYfUECYxVM85NfLriDrKYT8dLVXfPDDfMSSR4f16ULcQs4JDP4g28huJG5AQtzxQTD21kY",
  "key11": "5bef5kAvQQBkGdQ62YZgE4cvFYkbvzYCg8h7tNKoXfQXvpXuqpbteshqWzTmShAfCV7atHtJUEA4Kt8UNmjpe8JX",
  "key12": "4j7hMKbTNj5wJDgSVXBVESC1TZ4fCVi3s2o9XF7zwLGLrNzTU3mHuyp4U7ph8zxXStoX891zA2LwWLGJVHVktwus",
  "key13": "5mUhNKZ7pCjxRfGo3PKiY7rU3UfW6PdLu6ospFnFNVpxcqB3cChoi6AnLLFsz1JsP9eXQ69DD5asxwX6gJLfPfjz",
  "key14": "4QxJ26CfJqog3pdYAmstfqu1Z7MWe3zeQv7kJd63Y95qoQFr6b7F67ZonhJ2FzBxianGn4XfN9f5ZHK2ZSg2n4Ff",
  "key15": "jT6enrZw9cak5w1XB1EwkuL2jG4ZyBLTQtic8fvkvaPR3cpUdpSyb84KJHcG9MvqVNRjDsRYe278DuaSwk9ajbp",
  "key16": "24q9CUrjVLjzA7NrssWdQLD4d3KnP7NQ6RyXy38opSkJbRwm329H3wsNyryrQFBM3mSURQ3ij8RnZx1UgEni84yC",
  "key17": "3RkFgPgN8HkzvCT64HsfWwV7SgUvcupbsZdgMnCbMxRMuWWWLZy9VBoFWPFwaksSPfds4AAmrbowJfxp6pQuU8ho",
  "key18": "3eTU7FXXJf1Kmi2yiXgKtnk28ZHFxDEvtnU2wDXwR5b36vgFvxSHSmaJC5WsSQfHGr87UXrhkmkyTjGBVf6X5AXC",
  "key19": "4TvLiXPuQyWkHErEbJxwrcZXfKAss6iL8S1NefN5Sm7n5VgjuqvBtLCEKEcVMtknZnoxVoXBLuVTj1wry6PUFjVr",
  "key20": "49kTkN9Z1DxhHepSVJasMT1ywixgkTHY7QtTDVbmGmG5ggNeLpeZ9UWwY4CFMETRkhmh8Cax22r9nHuc6RT2qWRL",
  "key21": "MSbTy2BSrodec3TGXMty5GecrVwYqzEMJRE3Cby1VJZ6rafVYtqLqfKpJjm1KqXmhj7MHRbqXiK85MycbgGKuvD",
  "key22": "4GwySa7us2U3pD8HAhs4NeWmJKGrqPwfPc9vwdSC2zF4ht8XbugwxqvEYvu62MTrsmkGTiNrQnxHBtGvRyZNVtqK",
  "key23": "5kN9Vfb47R1q9QG5PHMrXUNio1znHRF3RSvaZjjoGGnAcnAzGCNkbrm8BdfPGmrYzk3BxmcvcuCDC8hUrepjBeor",
  "key24": "2W73vD2YaTiGm8JUp4Km5gLA5Wqd66dcDR3hfhFayfxUwnFbWKWNbEwN1mwiBGTZo8UwtRUKjMwrAeY9iUQBQRMh",
  "key25": "2UUuH4s5EvTrR4AgGzAadLfTGuANkmtUeNwyctLXUZ8nEiBcnmWzMsn5RAnnEH1gSGh1Gj1JQdkNDzhbxhdUvXBR",
  "key26": "4Wn876FKnzYCJ5bsGDQcUvG5vnN81GUKYW72xg4iKGBXafeMkUUmmYotxB5hduTKHwfZKe3c6y6oYLJZLpapYEoQ",
  "key27": "4osD48SQevjVgTs4FVc4TpY1wk3heaf9bcqr3AAjtGW4SQBWZxLNsqSc456pqfPzRTUKKmfzLWWn913ABHQAPRVD",
  "key28": "2MRNonMBLwXebfuDv6C9jP94nEpjn7yAzdYk9EohYJBZiTaNG4JBXWSf2WjGZVEgCpKCnXUHWWUZw3H4t17bNKdB",
  "key29": "2g1zqcMgjkh6Wp4BJPXxKCiDsCZ4jYkHYGjy6PeYBnZ6XVsQvz1CLwJywmE73crGvMm5gf67TZ2XQk9i15CX47dQ",
  "key30": "3zn8nZfe1axtsU5jCiKSM8nfJYi328T7QgXtHgzj9jRoNQJtYTC3DDhzLUTMioJSiDtCXYTXur7brGFYdjWuyWMa",
  "key31": "5HFGsUP5PKiZB8HN5kqs2tfnezTfsVEE24Q2x5USSUiVSZbiG7N9G7tiSQ61shwFXJ68x9jVi9ZtqpEy8cNMDjoe",
  "key32": "MAhDSvr4m3K5Bf4caex8FLoNxG5YBs2zeEvAGUZGeHcyduMEtjnMQW721FUxvvj4MYozsem5EE6QbWm1GnLLYxR",
  "key33": "6vympZqPKxndyacHjwViniVHbrgWWmi8RDBpARREXMeqPUes5Hej9kcArt6bN51AwMaB3sFYbu5Ag1NdDcXH9Zc",
  "key34": "3cuhTRAZxzu9TsvXvS298H5niLRVEanAtS7gBQxS2Zb5KS7g4g8rN8JLjBLkaDEmSSUJKa3YGoC3HFVqCZTiYqDi",
  "key35": "2637gmXDQYAMce24h9E4Z6xTEQDPpdV41xgkDZaTkBv7kACg5hgAEx7Mj8xDrC8BCZEEK8rzmunUFUNwEHvQV2jL",
  "key36": "Tsk5Wq8ZfC5boDTD32rH7Ucwrw8RbYXDJQapageyBj7LJQFmSPVVjS5FbiPNH4a1fSEMx4dbpuxDLJo1GdrmGZ2",
  "key37": "36FqDYVZRCoRjr6X4XkKV3PMY12ZLQPiRuwr69jdHo9SedDAW2424QQGztPv5h72LcTR14W7FhZBu6tHa6ZD38nJ",
  "key38": "h4xhYu93p294qHQcRw3Jje8jVmvHyXY4SdMeSoUTPg9r1bqGM8R4LRf3MMRi9FnLMy2ZJ1dhtuVJgYdFm6Piq1Y",
  "key39": "4iEu8wwqsbhKqamLbB4bFBpiG8nrDiK6fffuvuKqRwYXpUi6yGtXrPoEK3eCaWcT7ZeX9y2u48b2yssVLZkWa5CT",
  "key40": "5sC7tq9iQU6zC5BFULomcCoGNLRdqDPLRt3gznLuVVCthviXVgR6iCPpfAAkncaiAv8LpoVDp7uT6dzss6uSSvCv",
  "key41": "5L8Y4q7wGbpDmhsmCBiP7tMdAxFcE2CG4DF7WUTkFB5KT3fJU66QttWz9SFs1KgUtFFbJkKVgUqgLvLeecnb6cxd",
  "key42": "Lw7yjvTY8cW2pbTFNyTioK1SaD2VEAuJakiJNzvCerjASuWLw6pAg9HnsfWQgprxgNPFWkhJXzZTv2v9apoG9oU",
  "key43": "3qqh3U9ApVwPYxLs8mgmRDQYetXpGbMwcE5UN5mLmgZ66JeV2FmidWHeDbHNtnYmLQyTAG261XfMdeC4QCgny3Ya",
  "key44": "2PNKkR1iBvdNMejsaNJWhnD4FsuPQFcmJJ1Dea9t12sRnufNn7yfhvTLZEwvA5yM8StoiR1Ztu8rv8VyBoK1Ua1o",
  "key45": "3PMYTbSWc5fpL56TBTgpVkKs4CrKT8XCjGDScSw18XU6dMtGyf9KqZZivEs2qRvjU7v4K33T8CVohUJENy9fZipc"
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
