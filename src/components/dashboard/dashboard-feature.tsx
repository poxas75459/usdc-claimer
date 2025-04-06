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
    "3Ve1SBvpB6Zzrn8V8TRs41vZj2tpbjVcRFUMJ57rNFgWiAcztG6hmkyLZsi7E7D5brwyYJiFrRncdKgmks89n44x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSURySNWaaXPw3aSYP2h49cZtcYLhh885q6DgCmDSNEjik4wfQprCWU8QuFNSVXCfXV4zfrAbkkiSNHXpbxoMHb",
  "key1": "2v8wRbma7FNhtwrNdVh7tBSPFDL7WAYDVECSVbCGLMPESKrvjBis5cCGfcdL5FP3ZWpDyvTzsonfgizYSV2wLwre",
  "key2": "5CTX41jQCKgh6rsSxodgzcEy5KpT818rHvgn7p7NcTofUBMUhE38jbLVeU8Hmmap6gLqeTBNLX6Rbjg2mTrFz2xp",
  "key3": "4gRhZxVFzh2NY4T2aeQt2mNBc51YGEV816ssq4eB5e4rtvc1Z2YpCdHDJVAMBnnUct6TT6dSZ7SB3ZCeqHgzowM5",
  "key4": "9y9B6cRhDkaoQqmp5PmU5NdxyV23TG4m9pgTFYWsdXqzTY7PSnempr6tiDKCuDwXxxC5PgeJ3sPdSPjaTofdNWs",
  "key5": "55udpY8kEQgkWtq3GCbNfZ4b4gzLLCQJDZXp4puAdPtK4kkrRZRXKv3aFYXEswaPxe8s5rQcf9uZhurYxQdrJsmx",
  "key6": "vDpo4vq8qjoo1rDoPzpA4Q6kVisHtaVv9yYe2YDfsx4ZjrahVm64D8h9xzDMyJ2B899FNnMTMSeSfAF9r1ER9rX",
  "key7": "4d5jsws2rHjBqPychDieZm5Es3rcnUNLVS54DssNykRuNTNv8tbtRK46zypQh6TsRTk8ABbQhwK2T9RY6FpnoyF6",
  "key8": "2ZoEYgfjBjmyiH17eFKsNbpRrkYjaizPMY88DLmSNyyTPqKvEtrWcAzgybp2kUXdCByw9tovPrxpprDs53gEpNgh",
  "key9": "2ZxtmyhcUn1xGAK9X9jPe7Rsn9GSxkvZN6wSWSkVc3ZLX5DuHvE9fHeLmTqfoEWcGozrZgBZrsHmUJTbsazmjPva",
  "key10": "ZZBdcnCg7x7rea8J5W78pdTZHUxdqA2sizkyF7DdqBEmrfdXtfBG7MqTC22WYQpwMupb35UaxCS8juvvGjfAtr4",
  "key11": "4jdHVJMgsGcC3hqBQc8x18hJiX49X78aKyePX5km6ax5yViHDbLF7gBvRf58Ko2dGfJ9eCXih4L9NijwEddv3457",
  "key12": "4xXtGjWDDWvBM3BPZAnyaqeKoftXyceDzYA3uYGQSd5a67yNyBz3sSh15e1ra8ihBcGpP7WP1TDznE3BbzTuKzBH",
  "key13": "4KE72SE2QPPcLejojxj3p6CzXPh2tCBDtiaQuQ7TRUTi42HUgYYvcUVuo94xUZKyudKRfNUaLYxFXjPTXYTUuS9",
  "key14": "3K6t8DocuEpwqksBaz7z9VTNHNmZrnA6dcbAh4iWWZpKPgqBAx9evaCUKpes7Swekmh89BEFXXEvFGvP7u4gCYCz",
  "key15": "52iBWh381MKBcYqTduXKp6gh1wpCW24p4VZiM6zZcoQ1zDnK5zNGfrXvQJfGsS2Q8bVU4ncaeWocMbuQzw2XEmVC",
  "key16": "3vN7aufUcA9LpUZRbpVjw4TovgAhZjR9rbszNhYomXB8QHcqqqtYUogGoNbdhc6s2QciHLkN74uBxga6VbE4rto",
  "key17": "4oJaGbL15XGUNtQTDDskuAkgnQkPnhpVvyEFWEPxUUW58n3oDpJabgDsrWRyDTJfgcFh1UwWoLx9aaiMLVYWkVz6",
  "key18": "4NmcMFcUvaJSV7fchcKno3CMsVkTknf5eEJWRVRPk6LkkMAP8P9WwagvyjcmRSWMcyrscpFQebfv6g2o7pM67PrF",
  "key19": "65rP4mRSjy2V66KnSiG4QxkDAYA5RcotnAFFH6NLxzNAWb5nbTkSM3sPp5GjY1gB7JGYYQRzmqXe3KKpBhgjQM1Z",
  "key20": "Ccy4oQKb5QQobQbP4yxsCedGXpEc2MfP8hsTibNL3mUs7Ln64pU1SF25hKogBxgbZGnJVJT5WSzXzTyk1Xir1Ej",
  "key21": "46CEeXmDWNNMMXir6RYfpNZNJwdXoVog7UuqLzKzY1Y2BcwqgWVKMcpsQ3ohtzNMxFppcbXYBXdwXk2G5Qj4TJUK",
  "key22": "2tv5soLU1nLit3ChQzvKsX8grwT9MbwQ4YeNwuUmWYBv9HTSYzccgwGxmjJpjVGMsinv7cMqK9Cjg84KXWbhddLw",
  "key23": "3RPiGS1ZUfYf9XUeRUzWiyy4MTU8gdad6Xd44TiNT9p8LjmhLf3Nwd27Grs65H3DaXCbDZEL4nnbGBSBxbUa6HCf",
  "key24": "2U5wKEgjxdD6VRpJsgNPoJXgkAGiNNAkSMfK1zLgATFUc4AZypHAGLFfmLouoJhASnrHeTphuZDVEfRCUwJD3Dhm",
  "key25": "22rUMGXcEK34V9thBpHfotoxXQBqvqJvMoovsKCBVxwnmjsw8t549azWxvaqoSq9sACediK9cddh9LmJovR2HYKs",
  "key26": "3S4Xjrw9Nzwn8rcVkEKu1ibQ4Xp1ZTeKs5p48vWyQVgK6GvivXT74ecsqJE48wjHrjy8EShKKF3SyYD4KyY5rWaM"
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
