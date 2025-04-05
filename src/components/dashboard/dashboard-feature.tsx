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
    "5HVP9Yn69dyXW4Z1e34DzopXYenCWMCUCHGtjUgzgZdSToVgCnWCQqHCwHG7PtPuJ7ZWDqqKHf4euBAEc597sRZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjF2w89h1VjujinKtBKy5wmjxmkzBNMqB5yJZvgiJiT844vc4Ab5xa2qLADHTrJ3dJymgvPiL2SYzZb1rF2U9nU",
  "key1": "3n8iJqMBqowuSEB18UV6BcuedH2CQiP6myGb92SjcRXJAvtUpfpmWmUs2piUPHVrbW9iVBsDnjRvuWfqnXUoVGPC",
  "key2": "4coJXTL1ftKpppH29qupGzwZdqNyNvSG9ArtRzZqQP8U3ysLUFMycpGM9amYTiTh4fyvUiSwUPxwsedSUozzYgYA",
  "key3": "5iFDkvBem9yFEbfUbDQEJUUAMdTUeAfFbM1MwJkdu9KcczvPvSG2xcTWuKNyoQ9V6T3zFXuQx7tCJ4LdqYVNxs3N",
  "key4": "5chCUoVuBCrFC1vq7cjZ6FHLFYvQn3Wst4H1F5CqhZfK6q1H1irRoUq17cDndAAC6QPLFpQLQaJZDkVUTsZjVWnQ",
  "key5": "3J48PyGpfVcEH6UZ3EuuMQEvWeSJNQcZDd9rCwCXAsK43GEMKotzZJQ75juFj2Qn3PQ8w1mvTX3caoGu4AKjnTdV",
  "key6": "3VfoDQuExPdn5a9g6QwyX3QDx19pRmULPeJKeV4J3FJajoCGXPBjXZpxAGZvzh8rHtpTA6M9S1s59ysqEGnb3gb1",
  "key7": "4NrGNd2PiiVkL1Uh9xSBdiiEYK2cUheLFyaaQrhbkaqwZ5kmsagBEA8JEQtHTn3xpv17m7BThsyEGybZ4HjeWFzL",
  "key8": "q2KZ3yf757hfQGqnvUfmD61no7Bkge6adHon4UQnAitMvx4MbeeAqbvYBemdtHvaWKcEZxnPuxtBJwJTosz7jc7",
  "key9": "29jYzrvJEdbAzLZdAuCyk5HD2rYhv5HDdD91HJ5rmnpUg5fkcB5zaRPT5SyGzofrj4SQ75CDGSEZBfikuUkbS9aN",
  "key10": "59p6siFUG4M5ZjcUjhHm9v8D7J28341gJgHKcVLFHFA9M517mDWYS1fMUtvh2a23geT3avEdirP3kN7CFHqBS3Zs",
  "key11": "5BaFwvoebCyN9Xsiw2bfaU154eE29KdMug9GPBYGGqYK8sVdESCR5hWHhs7Z6RrvTcn36LX9ikJtQS79S4Hu5z1o",
  "key12": "r9291T23BDAwdne7ArheeBqcXwKfNVDAUBqT9Xm8YTPStz2EMWez8fAcB4rzT899S2tEiENTgjSm342R1QU6VxU",
  "key13": "3fGpR1osAXBDkPSKWkjkchc3NemvW7Kk5inQ9mqWJ6uiLGiP6Y2HiW6zVSTSH8TAw1LYaQ7fjPQcq72JcYFiFpd4",
  "key14": "4671rmaGRsCy8G6cTMfqjpoox2aYmsQLUDj5jjdChGrc5mvCJiuZvXrwKJU535TaMME5xaNku1zHkwd3gccVub5K",
  "key15": "3moofcqrr2weM4HZqUKwqETAYcbAEEjoUzRCJBvpYReTuPgNyDiXVZdmrrfWurx9TgQHtBJ9sUwCLqU51geEXLMT",
  "key16": "3fRdLRpbzu3BSCquqYcmSf4GLY6LDpVTF1RrrJaC1ivfdWywVFYw7F7mxUp4LmEo1kfyhf4prTzxtfmYpQojVHKo",
  "key17": "2NvP9HERkfcnonC7u72FSooH47TTWXntCoVBmixKz5bSNfmTjfMjVRo3Xb5Y2XqAJb1zmxsAbFiegxmzgCsY2SnC",
  "key18": "2tqgY8QofgwjRxoM3qgyr6a2cwLRMBYumNmkZUWmfpNvZD768iUBUMhS72vQgJemE2qRwVVVX2ZMU4bxj1TdbL7t",
  "key19": "ErhyUVmf8tbkoQi7aqZeQvak9nDgamsgPGS9Wo2ArHRkrTz8uGzW7NKn9asVq53T5WRV2QB58Dp3fy5no2zvhsX",
  "key20": "556AFZKPY95SCRMLmCZBsEBasGEnYvpK3avXAVApAZYEWfpYgQLoiZoGT7oEJ29DUtK6EAojGbUNRw1hJdTWovMH",
  "key21": "5RrLoF9zdJg7h8k2MqcLj3qoyW3neNZF1e3rNh6YmgCqLj1ojRDr39G1ruNWupPHwWx3sQ64pgXjRKb7z8HdgLQH",
  "key22": "5qYPkRoJXBEJgMmvStaacfQ8vLYL4r4PTHttJ4WL9xNqRtSkstnYKn7bNa5aq72MucZdEDvNqPUKhb18jkHqWYaM",
  "key23": "3EmJNrQZJZSHJNmKpGYfFq9ZFTdcqiAYp8cbMzjHXhSWq86qFyKQTw976ykyzY68c5enVMdVYfLT9nft2XSnEefD",
  "key24": "5TMyufoWSgSGZT9hjnLmtZfdafN14F22wNbuvSyfTwqPqXD9abehe1w2TCCshE9Pt6jFX9VGPpJud43vmD4HXtZH",
  "key25": "jeWFfbxRcWZ5AWB1ECin9aciaHt1PVUnePvVDCUvvbQQG4BGsrJdQk5nfcSNvf4HP1fJKPfu9RyaB47b4pXnCeF",
  "key26": "5d1WSbwD7prTtDXHNPTtcMTHx2Z6izGUdJk8mfBe4kN2yGNuGTC1ofViXuGsoLD3JHzKwqQcKZeYd8ktgbpC3NsY",
  "key27": "5oDB65hzYKGqDXL4icno8yzgZyC5aD6VdkhrwGCCLuy358xUriNLQwNG4rpMXqELnHMFbukbKMv14HzqtAfvUSgA",
  "key28": "4cEYWEEL2fX1YTUgREGXDKHgdZ4RHkRUkTKDEgUneESQQvxhwCvjUaFQhDDBiNAiKNsVZVSAmjjieQpQgrazLnsK",
  "key29": "3A2TMZixwkTBZFnXLiUUQF2HMqHGkdFTvAmr3EFGKddK4XXL4rkSohb7vJ2rTHyKvwMJTpvhpkGWUYpFXTsihn5k",
  "key30": "5MwVP1cMHNLb1QpWqs7JP8QZxQygSrnpZ9xGoaL83moDf92PAgGGXN6KZMQoL5NAHm58nhZEsNjGgMex395FM5UV",
  "key31": "3b6gCkYZjRoKfqSSdeLwPSNMUYHz48xMWgoLt3sAq8zfPLKbZXqB7j3wpCTM96Z5F6WvaHDUKyCVZCzj7wj31VtL"
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
