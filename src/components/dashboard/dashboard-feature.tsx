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
    "2v9jdqiQssZajxBfNGPcuPRu8MT7QTh1jANs9pX1zpsi8DqMTuPZcgLzSSMxD8NUR14rhwcbw5xTRiBXoWjVP6E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CijnEHHsKAiCQD3jPBFmPKJSFB7AAkM1gTxdSWq6bthS59oceVwRvpiK5Fb91DpyWqV3APbn9tWEpH8cihT2wht",
  "key1": "5wWTVmQZjbwK72QrYo3MjA3AcXKUvgAFAZQvEYkcyr9TVDjdaidpdYJpKDeFnqNuxcf8pMTKto5wikRCaC9knmE1",
  "key2": "2Jp8Axab4AjeodTBMmbx5atstN7HVbp8ooJ46ocpJhZyAD4hZzE863R94rvAfMuYr8pD441WC9dEGrV49SJ1QdfF",
  "key3": "QZRa9gMpjHT9bLs8rHHL9CMmAiTs7RyV23Moy5DSLMfnwpMVS9BMQANbszzbxsieD5S4sVvSEdkvv3hJ6oPRxCa",
  "key4": "2QEsqCqYx7ahmc177ACTs4QwZdoF8sb4yy6cbMsVJxkx22GrmtdFpCMdpSjtqj6tes3eth1Qy8skdX4vTwy794pM",
  "key5": "4kWh2pfGYPvBhNGC9h7kPfqPm32Kuu2364mHAhYpGT8oc3c6bEn8JwanKth4pXaSDKAiPQ7K1Nb6TtrKdViJmAty",
  "key6": "STvtdaXTPY8DtANa7bvyPpgZKZSZwsRKfxyYCZki1aN6ctzuwMoDndUwu92pHv5aH6XBRUihAP3mauK88zMvzr5",
  "key7": "5ChYU6EutikUeusggMYQpHtvCTMB9mHh5EZKB96Rf5mtzT3RMSXHCRWnqog6rbu6J5xZkSPvWC1i78p3ppn3EkZs",
  "key8": "5krm4pn4fE2cAGPJbEgrVxJDquTVf5X9e32EQNnmjRY3zA8HNt9rvbPmoBS7Dt6yJvj2BVUfHwdA6NwfLJszpnZj",
  "key9": "5ipsRoT46fu4BkpjsAG8mHXuSxe8jrnmMtk8zDAYvRmp3PfBN3YxBkf9pA4fcMxm3jsB4REM5GgMCD3PjgVyGL8y",
  "key10": "2Cawpid1Y7CE2u7i1uJFdPRV6KEBxKuvhoq4qYeS8njLmrPxqRatXEUnXjcWcBZcxkogLyA1nYCwQvMLwBhP5dwa",
  "key11": "5H6SDr5cznchmZv2pxqmkdH9o3rGZwVVyd49EMMbWF8omXw4qSD1KerAPJ7BkLgkuRcas1D4WZ5rQe7ZZg6npWp3",
  "key12": "2CftbyUiL9Nna7s4mjfiDJjxVtjcNnjyernk8krzVuE6NjrjtvGNVtn29yxsqWYhd9HtdeMpz9UM2UhD22cumdg8",
  "key13": "5jMGqQL8DiTTsQSDnRPNmXeD4bhrLKYMLc4NhKfL1SG2pLJt5mt37eZdni9KBwqGLm6hYQtg2QhBU8pfiVUoXGDN",
  "key14": "41dFGJvCZQQzKCo3vq1bVAmxbzbudKu7zCMdcvtK3fL4BHzNumCALpr69dx4nMg9Ne3bBwhMTs7EFJdJrt2jB95Q",
  "key15": "L87Ss1dmkSRM9enGu8v4zCijF77kYzLan97WatK9Twa44458dAuxySNrRbwKfYVyMzoAWx1TofSQtRTrL1xRu6W",
  "key16": "47X82i19piNNwFrwQ3RzCPc5kuqgyxNvXfp86voyFz1hreckM8yMrFSeA3kfrzw4m8VJwATdBeKu5mp4ejZ7v6bE",
  "key17": "15f146muapyMqQNAgHzqTZqYUZ3WHWvDmwkJUVoopmbreJAcFYY3H8XbYQ9qd3kfVy1LeE54dXJy13NdFdbq3jN",
  "key18": "5pVbs7xYhtztqQHsSmfyaNAWPrNztJ6Rm9whJTv2FsLmaiRnfKZcUw5LVgL7ur1MnKvHPGK7o9KDkVywCa1W9hVw",
  "key19": "61ouJGMjwVGQX8jsuMdCJAkHgwoDK1VgrnMy7Y6W9skfqhMYm9TLDi2evJBBAnZ7iEsUurg2EdLmtsRXvACU72bV",
  "key20": "3MfrJb1dijue3EMzCNSpwT2LRDTEB5Y4iwRe7aFpShhnVNi9KGxMYde71HxZQjiMoGxUFMke3SyN8JGM6F3jBB38",
  "key21": "sf6oNGmZFtfTXDN6HwMrQz6knAzWqtJV6i1cARsFwfQiQvzy4m7SRmbuMhnnZpTSysrsrorZQwiozKf7ZaPpHgw",
  "key22": "3GbgrZbGV3k4NjiitEUKfntLNKKyC1GMwZTHGcuonjbnF1o9cRdg5mTVWGPwDhqnk9jUNcLoXi8WifDxydjm2QNo",
  "key23": "36p8Vt1jUf2nUKDZJk2wh83bbZHmUTvcLP8s8oib5vpqwEd5abm3SkjwrbnymsggLu5dn7uPYyK35BVAMpNGFsrQ",
  "key24": "4s3cEXPXFG7yjHtYSWn2eHNWbdSnBdHPUWhzZErYNwGcYT9gnyvvR3eY1KgyVE3a5NespbJoEK6EzzsYcXmyzbpt",
  "key25": "4MbgBwTCw34rP3DKAZ5ar5H31yiYEGzUmK8kuv1qDEuhZP2qmozkxEx5cj2ew5duMdtH2E48ykB5cuRhgDuV8ZJo",
  "key26": "3a96Yrudirtr88UykrgKDJ5HoNoiBJdCGdtsizLzCXkS1cB7Nbaqpt5ad4nrB5p9ra8NLzdaZDuCnY7vA2oiAEKx",
  "key27": "5bMpSY6sp6tabcB6PsEHtkFA4XgNEqzgKhZzKou3dmC9EZVaVzV59SYtKXWkEfNK9NC9CwsEeCqw6XKZxhLprdGL",
  "key28": "2jjDReYV4NwUCwRsoPJH5DES2BLJFeEFbVf8V9pTyinAkXVQZ6UxCzftX7xg8qimBvQ884ZWgSof3G5htD6J6TZe",
  "key29": "3NQ1ru6hquybX4HP4Fu5ihAJtWNHBSA7AiTCsnhLzX3ic1fVgdT7se1cTbWaqit56bwKm7C4FaTGYC8eLyUeScMr",
  "key30": "3uKkPUXkHTTjuudwpJ1ANcuBCFeHcoGrLjZZRFKq4BSRj8F3Y4B6tDGtX66fW2UuRwL5VW2s3CuTHLE5RTnw79FS",
  "key31": "26JXershHHvqYxmokhDRa45pq1NrX7kv9vBRe2oRtb4AsVZMwa3xFRn6xoHkGE29AWhnoxfUnmC7VoKCqo8QLBHy",
  "key32": "2KBe1uXDZfUD1rJADsTqfaDU5gQbNjTvsGfEhsHc37K6XiCbq8EjbhunWW9CrtZ1rHtstKUgBasuD2wpAGV5cvEv",
  "key33": "5X18eJtyCLt5sT4DbuYWSjWWVg7d6PCECjHwBNAeKhLPb8KvWtRU3JX4o7a4NtTkBDF37p2VKXq66MNdQnWgr1Xh",
  "key34": "5YUmLoVMQDJNQ1Ema8YjpGMsCK94RQA5mUak9TbvgbQ5BfRUmuMvgy3tVDGaR7dMmjFYm64jnpWd6J76n8DUkwoe",
  "key35": "2ZDFtkJwNSRQcDtZemmsiXMgra1FZFHgrXoeykxard8bBkFetc347DfJp2U4tcabh16yF8vpxnrnfykCM5JgYVMW",
  "key36": "4dNaN2QJQWaKwAJfXELjBXJW7BnrMDBs5eUCfs4G6X7KBda4kSTTm8sozqpZxR8BGbhHXhtL3AnDfCiZWrCiY2uw",
  "key37": "5ED4Y88uKX7zRszpNre3pKKqkkwJ5peHWnMu9yroSiQeKDjizrqvxP2ADygCZDComBtAL9PUVWt9bYL9hptqwAqo",
  "key38": "B7HZ58kjk42dDYp72CshcqP2Ry73nddGuorsX6C9brbuQYbdFZfz5RK84GNN1bha6NpZpXze5rihkvd1fxTEUMR"
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
