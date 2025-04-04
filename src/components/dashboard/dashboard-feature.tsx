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
    "5fJS4zH1hoNuxF4Quoawghp8nrX4ieoBnQhU1UvYsN9mxC4NcenB5q4zo4LrypYAVaZkTpCLdDgTVBrrNyf9Jyip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "638tFNrQup4PzcHxWj1TfG9n8rHx6bxuYyAXLw78wG6uVJmMN6STrsq6HDra9BnXXs1qxLmj4QmbvyFicm4Jg1hS",
  "key1": "5wBZFPWudJSo3nge6fBxm3tgycK6cNTPUcNRHM6MGFZeTBhtdFReWG1bSijNKNsasgKutdtZa67b7V1wcjLNuQKX",
  "key2": "5BuAxgk1uZppTApEmPw92TNTLfpBaGD6ycwHdnqLMKYsEp2eDshsw4oX6UE4m2yQ5Rd62CRSKyDtCUEoGYy8M3yV",
  "key3": "3QFAufkKywTDux6Qvz4UNRYvZuxdgJRSRcaBjsQ8vMNYA1dj2UJaCDNNsaio8ZNjgBvR7QiJdoxeLuRR5mCg4Yg",
  "key4": "2x6SFQvKo3aUjzANdxFYNa65qBZkRbZ2u7iPyUHWNcyCPfNeRU7eEJT2PCDvm8jJVc9iMK1gGqpFWtjWAVi3GrWa",
  "key5": "2xsNDqoJRSSFairvN5MXHzYPBNDJZPbWdH41CtB24EJhEDT7ofMsJKdfVy4NAHh7a2mtsNSYYuWciXuZk2YnbZ8f",
  "key6": "3SeYUSS3eRzMMpBoDF3bmMMdGDVidWM4jpC8JCMDXw2u4KoSVArAWJVxpEgYgRLFo52MqeV5mNsA8z2yrtF9bTM5",
  "key7": "48apuJMcshL8QSCGbXQQbkZw6m1wJ312ibD5etMRynce4AntvCRrPk8XGE6f9nfTe7kyVEFS64oFo2qYMBCaNRyv",
  "key8": "2JxV73sKRuWxLt1gvyv6okgUrQGRQ9Dkjwq5kSjfgGFrkDAU59fsmtjCAfFwp8bWWUdeqx8uQuqV1tmg9YkWmCHx",
  "key9": "5iz2Jwc3Fth2Fn8Q9h6aNsan5aqdeobJ4Dhev9BW56mWmisYWJQziWm2gbZHw4DotCXWex4KoD5sQoC7hYemtw4R",
  "key10": "2Fp6LP52G1pm2SU9PhsraEQvjFVHTtFy5L1MLGLSdp2tnXHXadNPoVBss7B5NsZJgG6NuFxJSQqsGtEd4KYdottu",
  "key11": "5vWjZp2WnQxAkA5noq9Jni3miNUR5j8QSFpRLcnXPwKFQYdQgDKG9AckSckkS8YK7R1cPvA43o2hXb9cQExBypnK",
  "key12": "4jMvWpo8HHwSpbapXCGNEGZq64pHQPywcZuNuDWsBaAWGPja4DUtLoaWb6ncG6617EMR5HCwXxmauGMx42BtA8ic",
  "key13": "4AwzjqcwdG9GejV94xKnzT74U5vT3uF2m7Dr5AZqm3G6foWt1TDNWh69ttAZeBjJUiEYkRb2dn247US9n5cRYWH6",
  "key14": "5n9okGtt8a8bKk8KEsHqURH7k2njfHwbxdYsEVPSvK5iZrpocrbmPGqwCw7C61vHYWytfR745EVyRkTpYFHwyPvF",
  "key15": "3DrL7C6mJ3Y2mXouVPNQqKWSDVSrd1YDmDorGG1yDtanjxnruZiW3Cv7qZQXTuLgP7p7zSeBDk3GZj2H7Wno7D1G",
  "key16": "4avqeK54cLfBK7SJk9itd4tohLyub72CgZrrnPa2jG9U2RMXB5BzUGi7C7j8tyhD2f6FhA1D72Qv3kUuKHMNFzA9",
  "key17": "d18PYJKYbG6hQ2m5oRe5x2qjXUdmQo7fTTE6sBn8dZja1bHQ8UoUkJdxiEpLiD9pwMVLURKATuNo7pb3ddhtwY2",
  "key18": "4DAEGaq4WfhwJMe6q3mCfy7yfqLprW8pCGq6AtPLuVgncV2ADmTyKGyqjZQgNYk2aK5ZbBhLT5UiLorNg1CT8KNa",
  "key19": "JZ7b9btYGPX6bLQvKLFNVaqV8eWToJbxGNdPodW6y5A75TDauE3sH7QeLnWdeRikpZd7KNpxs8Z7xf7RfHCrW5D",
  "key20": "5jVVgqbrnL8K6w6kE6h3C1L6v6MzVXriU8WLW2AWaSaM85uGVPaZVmpzcqn7k3ko49VaxuyczBthcER6Bg3hSTSm",
  "key21": "3AYi6aABRRFUbpUvVJ7uDmqpgRBAYqUWJodsKAcRiES7iatshvHJ8C8LMyzd9GgtmFyNxA6SyjYRLxmHXKK7jstv",
  "key22": "4fNrKQwQSjodfLjjcbKaH2RzBYx78c9LecgiZenwimB5dwPkTuvdJR8tjGt1SYBhgzjdu9tTTdtheHfRpFPYhrW1",
  "key23": "3xiYS3bDKooew9XdJrc2Eu4HoUEcT4pDp94vjC23tRbGKAaaA2uDMXuFTHkcG4sSk2ZRVp4skxEWWHjEkg6gxZgd",
  "key24": "2ynuLNYjDgDiBLe1n5YCtqdGpYFNY26vmrnh7fF7f8Ex6u7Hcxj2kbMj9ZdPrwA9ZNhsBfhv6R4uMVpZNzUrTHho",
  "key25": "2B7xwGmpaS7KvguMSG71MR5uTAe1QZvjNDoaSTVeGNFevAdjhjTdzXDnyG5UQ68wdwUzadtEJopYw8vGNZPZBCZv",
  "key26": "LwrchyWDWrh7Afre3LJDktJU3voMmCcp3ip4XRVcv42SVfeAjFhiWC3kZnrSsu6EgCV8iXm1brRMX4rCXLRZeev"
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
