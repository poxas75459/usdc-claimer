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
    "2eLDvRwY7pvEjHSMjns9TuqNE7JRmUDCQtqSPvCztuuoNyVwq6YhBZENd6jeLtgWnFXEgQg8QP5YWUMkHGStNRUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sn47npwjBWSQf4TeWtVcSmXQbtL48JDGq53t53cd8cjpJ1x3bHHouqxw5v6kn6bAouBsxWg7wQ5dVkj6PMnFydz",
  "key1": "qsv8A9eYgwz6GtSfBVcDhuFveFTRkFyZh5m5hL5oYYNbktwtaPWUabBwTRp9J2itJjQ3RKtYXqwexkLS9tgVLDC",
  "key2": "4kcjMHWtQQqoiRZE9Gg6nu916ZYW42zkGePYzsUhDJiTpsRPRWQhr5hduFoZhEUSSrVG5vZFUpcExNnaHx8bMgeu",
  "key3": "2RkXbEyX1fG5K9PkFUFoDD1XUDsRMAJBEZMcV7eWEdP8PKNcRPJB8PTbVsqqf77kLDmH4FKnpZ4DeuBoWBcZsEuD",
  "key4": "2bxVpUWau6yhrLcj4bhLpiy6Tf2uEuhQUHRVgQfvV8L66mY5Qh7vKNpSU5vUvXbZimW4svn3Y4YH3aPM8FmTq89N",
  "key5": "23iZDAdZwZJoKC6KoHWaB1QYTJpjBfYzr96MvA3DkUVyabNvZZG39TwCmjhun43wpKKBMs5SXur5rUmq9NDBXXVV",
  "key6": "3nmgy6Lax7BT6WYifURLXnzcc94Gzc9ciburqCjzn5oZ9XxdM31rmem1hWQ6Udpia8mFXQAtKJJkQPtQtFq77cLM",
  "key7": "22babv1wowZuTx4VkyECLqnB5y78AULjLMMKNnCvppcA8XkeAszzkD1igXAMMbyd2ju3EcBof5Qr2823fP2UNtry",
  "key8": "3fJjaTm5RkmSki17YUAqCv4VZbNLp5ygnCMqBXusRXapGnVAPWG4p3sYFaemzUfLJdQU4oxs7r3yWEq4SVp8SdCs",
  "key9": "3396jAryz2qThSsZSWrXraBSKabrhr4KXbqv94jtC2JmQXvJwpiRoHtNHZWcKsh4XB3GRnhvpVrhwq2vk7Yh6utF",
  "key10": "4jG7pSuMokdzRwmZwQk9nMDkmVYS9DfsxBRtkzT9q5HXT7pr7JJodGgfiYYKVEEqtDYx5pqVVm7BkuMtvGXWWwmL",
  "key11": "3jNUDuCw53vT49CjwyvziJtpnZVfPV6UD4KzBAYjmE25ThPWJszhE6Xgg6YCzVd6FxfatBTg4LHKMK4KavMWsQBk",
  "key12": "5fJ7fMpJCoufabGjHAZhyWYLpknqWmTn7tmehzubB4YjJrse65zpzmAyo2LgQECpJRP7EXo1Z8sxbrp8rxyXe7r",
  "key13": "2sRyzKWBShypEtpDQqnJMA9PhPH8mBWJaj798WBwoJU87yBMehNK83PaYji5f4NVD2JAH4eFhjmkHBhXBKXt6LvD",
  "key14": "5RVfHqyyzqa4ZFMk13k5MJJbYeYuWFPB7JWb8MLHW1KVupAmqWvsyaKzdXa36qS6QSJfgXxGR7ZSwn4rRtzmwYMi",
  "key15": "3FKgk7Ugo5iKp1u26axjEztWUMGcHcAfWKRYtT1bKdmb14y6F9ckgiJW1WXp5jfc7d2TAfKxJtxgvzaxNnx8zR1w",
  "key16": "4vNvZVam2x9YaBBMnUAXoJGAry31eMtgHXfhTBzduLHRKK8En8vyMcDj1qUbFCdCtEbPkx8VKWg3qkrRYnXjz4tJ",
  "key17": "2c1weQtdNFYq2U9Ytdt1DKdSW3KRCKgc1BP6wLo9DUaT51wzq14FGLWb3hzowXbrQJLs1z5xYyR6dsCZRxuidhbT",
  "key18": "56NYNW4b6dAmXwVMSMd9r3QVg4ErNr9SSC34GYjWt3yz1nWdUg1aJ9SGpsBEogSXqWHH29hdrmU7i29P6PNWxrbT",
  "key19": "3XJEaBpwumrX4mfcWfpeLddp4vcbgiXmiB3f3bkhLW1sJnM6231hbfPdv4oGC2a4uhgC3gETaPpqgze3W7wSwDNE",
  "key20": "5oV7JCYuVj5jacakVwZkDUWEkS4SpMxyKwaT82RTS6xQqrM122GuHPTDe8hZx8UBvXCJFxYu6zaAtf64G2a973WG",
  "key21": "2nhGa1iGTycJxAo2MKwEDshCPUq7Wa5R42oSZdiXSqL3wuFMmVba42R33QdHD4Hy58osmpg9mjoZa3Jv685Pr5Vf",
  "key22": "4Gf8z9iWEfUFmAMzWaLrwPYGTGqyq7gcV5Y3PfjVvyyZM1fkJB4jtdaQc5taM9594HntYg6agd1VM8Ry2QhjntNZ",
  "key23": "39sHfqgWYwntmK89EqCUNNMhHsMvqJ4s7FxxeVgSmvKxoTTUCHSgMLvxz6X7yvMbqeojAkpYrSwsv3rs7JAJBXPy",
  "key24": "3iH8kCf9z9ftL38eYaXYjNEJWooVVtc6AqG7kQL4HonYG4Gd7QngeiPhn7Z9NGmd2g3TzD2ZdK5cvEFpS69tZV5o",
  "key25": "3T11gkuXyj2CDueowixKoneg8MG351gdbjDk286qTTyK2URV2TSmCFuWhYaNhavuWMsvTwGZUPQJDLwa1uWCWySo"
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
