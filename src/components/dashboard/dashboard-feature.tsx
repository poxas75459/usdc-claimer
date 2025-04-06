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
    "5gM7MKqkS1C28Saqs1jBhvSYZKHmQyt7mEhbYoFS14CsrYhBQCovViXJaDji5L2FrsNmuXHjpT6qkfFGYnhh46rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKW5F4RAYfim42qp2EitMiL9i61yW5BpKy8KvJDpaiKXBQ1Utm8wFxrLtrVzR5KMuJfzkF8MvKWkz9afw9v3QZJ",
  "key1": "3wUPAsFyryX38PiESCiBLW8u2o4tZ7QRnPw4rHPJ55nY7ownBuoVbn977pFRpZqRAEjuSDek7cC3zdw2xAcfy3H6",
  "key2": "gCx5oYN1sdG6w5bRxvkCZDzro1y91iVgFVGzegtq8pSdeMwNnErdpwYszDSbSvEoFqrDt1KK5TUtuoGtoya4YWC",
  "key3": "3bboSc3xpXcnC2vnrPd3Vj7GoR39htoUwGn9F5GaCsUHivKZSjwXMp8P6ktXPxWXrVPUKunPDiuP3ma8BXhyYFKJ",
  "key4": "26GiXmLNjKNz4AnCiqy9qhpnC2GLWp2T34noszPt3bGYZudotob49E2hZ8YzMLuLAGcxcugJ5eqmNYQBGL5bXa3k",
  "key5": "4xEXGVV7NWP13nLJaREaiT9RHUymUB7NsARM6EKA5RWuVhTJTLGDRfaMrETmUTeses31yDny5G888fHShjjRumCV",
  "key6": "5RWDBiuz5Giq5w63SMeDfarJkUZuWP8e7hZYXVXdjriDSzkLjeLX7av27xK8byRfZ3tw9DqeMeWJwFjvr6VDdWLS",
  "key7": "3ou4kxMCWszaFV2HNkAzWGRPhWXoQ8LwRTBKjsonVNEkZAHwMe5mWvUTnpTDUDVNsQMCpnqbD5NEMHeM4QWyHv53",
  "key8": "5ndrswHJunkypwM41H25RqRphYPYqKSSDpofxt5rVBG3ueDpy3HUpZTsyBeUzGQXS9HZmwXaJ4WBnYUUuD8VDuL1",
  "key9": "5f4WW3QiUeEWvqVKMUY9CDgRmeqNcf1CPqs2YRJSqUFuTFNc45xFotYtCwiWNMSS5HQTgfLMAxBB3Pt7aLNxTT3h",
  "key10": "2X3cEXFH7xj4HT3DmSKUpT8Vk9y7dCaw1s1KJ8vSmihdZNCHGeUMNPvyDkAkgP83UXfWWtdBzYjGi5dukn4PNH7b",
  "key11": "V6XntyL5WzuijUtSsLdfkobqFG79qkrzos8B6FzAarkVpJXkQi3CodeWpqeXxwKBg1gpFGcgUzBQL1DxEV3SBQw",
  "key12": "4JBGSnU44uVBh8uNdoqamAfE7yNJbRJJeLQjK3yS8Y893FceSDkCs9qzZLBXG5sEDGKnDiqv6K8PJM1mWVHrd8bu",
  "key13": "2u4JcLqnjMYvCMGVLMafzok3QsuVWDxYDJVrPpZg7TEYUkCyiw4zQA9g7VCnc3phJRTQnDbXqDkMXi7Wy9cCbPa7",
  "key14": "2A8Vq6Fqs9Geo8hUKs6LbYMwPaYxJWSvFrKDxosLCG6RFGhqWFGd6tXZUFPQHqY77JtuUDfxG3Y3piuJGh8cqXfM",
  "key15": "3DXxuRb1ARS28a3pbo85ZNodZE52Skxdtb7h9pZzt3parxdPsGcoP4MC4EHfPp2JL5ke9WX9DdAPZNtd8tnnNJiE",
  "key16": "4PT2sTNbyHnmSeaTW3EFq3vKY4iJWiXYt9JJx8a3cSS4Y9nVMLc61wBtfnF4VULSEQB5HboUqL2gV4hdK2zpWEL1",
  "key17": "3hEFSE6P79VcqgsJLnUBrCqm3cGQBNjXiuDVUotn2kTEWA4kSp61S62N4mK31mfoDmLCT6qew8nJKghaRQVgsB9B",
  "key18": "4T4BcvMj9ujtxBA5J2iGPG8FuxL1UhTzcerqLEBQirzvMk9UyHUbCbaoxq9esAdM4E4uozBRZUhX5ANwpTQJ5HJ8",
  "key19": "57xtbgt6ocxfUPDEfjgUeYZNiXCxonB4mCWWCgZuFPvZaHDULjgnQHedmh4ZeqieCJbSDnRg8sD5Xbwr9fLtvsna",
  "key20": "zr6g7MgmkY3RHwEaJUu24R1nRFx5NBDL9BZfAh3QqnTRMnP93HNukx86pexTwC926F3gs3hhtxsTCCdokJMUEMW",
  "key21": "4Kjgc2xXrrj8UBFFgRLYfRbHXzG8N144ZhtvzjL2Ubn7mai8D8f3gxNVh7LXLnwDcJ7FBDwH5g2yrKJdrgXaxRKp",
  "key22": "3dkphktr3EN2JfCKqxQ2s6UCQADL8CarMbyKekVNXjxuBNmJAVKpcjkVAtpYBTT5yPAwtGsEXVREtP84nFcC4Nf5",
  "key23": "4MyHiDVyUZjqGniPKYNXohHAbduuW1qETP6UhqR1JAtjWX2ek8aZco6ot3XeewoVcytLrNxoGDdewu1jcJypm6p5",
  "key24": "2XaqKCmBEZv199YSTjDYEnNdZAioJqPmD9QmkZBrCSKftyzLThoNBrEG31sPxLpEce8uK7aPSiV53xruusKa5YzP",
  "key25": "2mvTbBYbudWC1hSd95J5QGFfdi3qV32KAoLmk3vFRf5mW67y3c3oMBCmJTLMuNWw6xdTZF8TUZTgPNzKpFz9Bo9Y",
  "key26": "3YwtNXrwYbL8u3fos1DRFQLxrTtYFFyxdXHKW5YUAPKcCNsvF2gNjkLh58t8FEWHVqRaQcu35wQR8JDWRGtXt8LD",
  "key27": "3M5v92o5pno2oRbSRNrJV3RkY42LtTpLCaYLYUH6Tb9HvtB5PfgBnL6vjTxzWW53Z6vvVkKnUuzXsAWvwpPJSs6X"
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
