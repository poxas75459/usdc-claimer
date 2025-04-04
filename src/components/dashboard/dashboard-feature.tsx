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
    "35yfw3EukmPPDHaNutcY3Mk3d7pikbKPHEmAPgiTEyKnwDkFPWweorLhkfDrUgN3XoAqfpAi9DVPZjZ9jgu7Gkmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaZmnGSQ9jwU9988p1X7Qv8KYSZLFoWPe3fk1Q6taJAxJgJcK1xa59MQHVf8HkUwQ7B3FXNN3m3xYpoqaUhaUQs",
  "key1": "stvrVB6EwQZJCr7pHYS7YqQLK8ayRHvdHorksnnR32qRQUvz7f8uA3cWWymEtQczg3KxcBQrdEgWUKNYsnZr969",
  "key2": "5msv7vYS7Qgq8CBdxcS9URbhkYFuMw3Qguzw5wZK7rUKGAoSPWtMYQto8BL3A9LRH2jGbV9iVXGpPbMc2LUPw8kn",
  "key3": "3qesKEMtnKsnd5YGw7ux3uYqaAgb2n7WjQqQWNkNp8yk1xFo4Y5e66kPFQxixmPe5bMLG4pAHKBZAdnVkk4Qituw",
  "key4": "5yhBBuW328uH375fp5uGKBQWq6hiRvVJ5bLW3g3hPs3updL1egx3F7jFMMmHcehoET5As7mwS3hGnC9TvdnSmTSD",
  "key5": "33jGLSKtdA5aqxKQfMjzaug3KfGwuKUxrbLaCAv5sFeEayfvvzrwFmS6zcUkpbBR4Da1huimozwns6mbFh1Cbt2c",
  "key6": "38sqVjbgiM6YciXwdNphFxDizvdWiPi2YMpRZaCC3iUKFLRqX3uP1Jr3s4YMYzd25R4ioqzY343YQjdtc9VHzauf",
  "key7": "jqqXMM5FeBFA8CrrQNMqCYDcCmMjpV1poVWthzbpaPCn8VHh6Xrxxy53R6BSfnEAUu9TwrDjDvXuj9WNj2bkwuy",
  "key8": "C6PrKhp7DTEwddhJGHc4J2FnLF2tyLq9gNHnBcSxMDqUCR2UEdYtT7y9TYQt4aZdp61RjTZsxqAFmoJw9BSoVMJ",
  "key9": "4MMMXqVfzn8ADs8D91GXoHsnx8R3s8vKmhRRfa6mwhvoaw3noQC8xDLRioGWUTuvMih4WNcvQi9h3vUxN8zPZ4PV",
  "key10": "5nat8ek3qPCYm8uvtLGUEm4bTKf3wmskAYCqCDj3cFjsJiB1NVBY6mdvjvFPrFRvvUatbmjjEmQjSfRNZbmN2KeD",
  "key11": "4bRrkpS8qvTMXqVPDPj9cv4yS1BYuF4Bv1rAHYherb5p6pw5avXeED7aLpS6PRLbmmyf5jLtRMkB25PombHGCFdz",
  "key12": "2eYssiTVh9TmnWyDPyapjmGhYcKgLb1M3pUPxxWFNVhfBQNZ3Ut5pjdKqQDRikLYUY3cwBK2XyfPPV36DFgbQHg4",
  "key13": "zvFiHc8NJvwCHQ7dCbik3sa1W6nHC49bokh96vjrT55D7RkwYGprCy3sb8Ju1Ug724PxPAM8ys2VQqXqD9DwKHR",
  "key14": "5UbkbQuTEz9HCaumFQvBkHruSBBnCJQc8S1Jf6RZtt96PhWJZTqG3SkY69iKLD9d6dKVQu4enNAWxsELaxUPiCbz",
  "key15": "4fEKY1KiR7xgQZfLq548mPcBuXikBJeBPsT1YKoYLjD6EzdsUZ6tVfm6BdngjHVW9V5NQG9Ce7uMJVrn2aNfWRMH",
  "key16": "5sUFt9CNYG1hsTU9bz9PnauHavNyosxMFV6WgD4YAaKCReLS4LMBryh3NWK1TR8ABp8svepRZngMjwv5qDL8QzMQ",
  "key17": "4JGZ6Kt7epq7rZhXZZttqED1oDeKsPwXcJ6QhWHJzmjGkH4i9z511akTX6cLVa629ACgPbxdoPnnhvgaGEurQjWd",
  "key18": "2tD6fAKMp4XF8a7pA2CkjJaw7kCeK7PvW5cMWGRZvvVWuqj2Swg2iRw5AG1hu5kV93C4SSUnkCUhFxAaL26m99DK",
  "key19": "4wjrZRm4xGubUJDUWrzWxiDiuarC2Csrawy1UY1m3gfC34rdicXKR7afXaY8kdDStbzW5o3zFhGJZWSaH77uQGZ5",
  "key20": "otLpT2517BLEBBpd7ArYXNEkurYb7ykSdSZmAGebzzxPYutx3XzSwUCgiEeVts3JvynWb8NLxk2qxoqmPJ3sKC5",
  "key21": "2jPzHTbAtuMbpScwc6D5n6GnBrMYfPKHtcoetSDnT83h8weKrfv9YxoCh5qX3jLR8ewtamKtryCXfdQQ6Y5M7jVH",
  "key22": "2b6aA734HcqS1pHjFosCJXVGr9E6y1sDFJT4b6Eq4XYg7GMyfisTC8JMUuXHdANkVipABBmjfrYw7gBAiA6B9WcH",
  "key23": "2vQPBQjaJKWbGkuYsCFjGyKQgkBmbwFK9RqERxXUWXt3ce1h9tehuA9mCnQ2YAvix4mA7tDksvSHKQCBSUxMefSf",
  "key24": "5VudP3MLVActbCGp6eHsdBanPdSurNzfCEcAArrHkXbodhPFSt5otyZ3a6saSZ8ADzfrK3Rp9PqgQHDA9tzJSoa4"
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
