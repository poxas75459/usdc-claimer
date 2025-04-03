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
    "54un5ks9tPu7cTFDkurqVJvZFmSsFH2dkeQKKjF1wy9oL4otxVGZiBnTk7UrudxQFnVtyznoxySqjkMJ9Z17acdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPvd5JHyRxND8WS6uNskEr5EEvm7VuVWq5a43Rq49fC3haMrE4nZXN4m8W8zWX7iPzgENAAde1MxM5dKQZj6uWu",
  "key1": "3YQS2p3H8N8dsiTNF64YXgEBSK8QChsUMVV66gQkQA4WuCMyzwebi3VzszusXmHSsk8VgQtMe7q1zTLP6XoTJ2iH",
  "key2": "3EJkQwzEmRKBTNGhZ3k2ujZujSqBFFQRbPycyMZGbh5LG7in38PFCgLcHSsan5cZx5kKYjEamyov33FJ9C8Dh1Fi",
  "key3": "2eAkZHhkFAKo4ikUYZQXvR9zUy4ZMqHyaq9WhL9aADJfmTefxY2Wp1fKpb6GCVV3NChM2u6VRQnbf5SM2PApkdNK",
  "key4": "3VkC2drokwRD747JNt7p1Cvd1NbZx6LisS98PogrcTyVE52FdpDdjiMz1MpeYzZFgnnq3XVLRRzModdZKNimWuR6",
  "key5": "4E2r1JUEKeecnqKnvUnuc8Dh3eP8UfCDghJY4MsxCofsV2CUE5Zz3KxuYo6jiiPQYizEwau5u5x1YunPMLpPfDc9",
  "key6": "3mNgRjzVUhkpMboVvDtRsQJszdwc898ij74yohBkwVKw91xvLRCQEoGQu4FA5LypfNCRY7ume5atXWsVtSzcPDu3",
  "key7": "4ryQ2pjvLYLCPXTtt3HZY5iRxRUeZHYxXn1jZXcZDF5fjry5LNh6xdjzR3gyfvcFYoYGUXDWzPGqwLtRUesY13oG",
  "key8": "5ktuMhLme5oRKESEjzFwgAfrUJVYbC4Ckkfzudm79zQVx9JaZdFiYnjpjNiHtevijLxepnGyNqzZuoofB5SU7LJj",
  "key9": "22VoQcecs5iHFoLkuKj1dopo5E5SfT48ZY4fw94URYcUUoNbZVJRKXexVbuegWSnTSwRc96yzXgC55YHNSJFR65f",
  "key10": "3GtM2aa3uffGZWpsECHY5iWBWmLQ6cosqTZaKRrkZauNJRMHhqRicTeXkuJmoDnFwAkAv6BZeKh7xaZQprXmtQMP",
  "key11": "3AeBrxsawcmhyuzN4o84ByovdKRGwoBNn2gsCNSuLq9vzJNBFXWdukKtAdGjxXGPbeiphkhBr5txDe3reAFfs1XJ",
  "key12": "povyeCCXa2RQ7z2nrUZ4dfHkYchfNE4xWMyCo4WSWnGCGWynkRkrRYVfnQdoUX7cnLcfQn76Q6JQdgrSnyJymsJ",
  "key13": "43GbA65Dr1S9cQXQ3VN2khTrtcf9EMGP3wpT6yhZLucLFnjUG4nkiRm9uTciUth5gqtChU5FhsNX5jQN9LXLgA2P",
  "key14": "5CSUNKZtwaiSNMxPyb4n3AhEZy6o9Xy6J9EdiCdePomULL6AnSq8PPanpnPD6iG4bbYV3biGXGvC838Gi1aLmuN7",
  "key15": "4JafyhtSiUGr9zna9PQSiWR3RMahvQErTzpJW3ztvppc7s6yZ63mbq1ihsXKkkMw6271GCBcDb6hsqV6Essx6ZS5",
  "key16": "2h6ex7PRnHgQyuoaE6HioXDwDqYuLKwaZWM49FsPtJpTcYtB463PthxRVauYua7M7f3DinynxiCF4pcRhVqVeo3Y",
  "key17": "2Qs9ArUd1nRisvDVMVVja8eQjLPASNeBj36UeA41SE3KEmFRt9ZMzy2ioLED3Kn9WU8WLEZ61cjGh79MGGAdV2Uw",
  "key18": "2FdPpdQG4LnYpFbGa4QR39EFYP53akrMBNrPYdxiB7SAfdAtB3q9HQGATywZpxHeqWQaYZUSWYvJQxYHLf9TogR7",
  "key19": "5d523Yp6drPQhAGkGeq2ssQT2QhLQuqsLmTTBm17xfNn1si7TqZVGaQhB5neBkTjYnX5bCpV5Qf1wjp9fsw6VGkv",
  "key20": "3PnWhmy7QL416bQEJ5oKjmqw96j78JYHsZRHHxy2DsLwm3vVja8h6FtDmkBejEhoxAh13j6MY4opwBqeoZ4hHXCB",
  "key21": "5FpPVapQ9TL5PQeP4DMJKWQyGrec8vrACVs6bTPDwZgpfQLGVPMMo4VFkG3Bq4BsGC5A45rdq8Ruma4K4eafpfZV",
  "key22": "3WnYQwBRBigRLQy76C3kuzTBP8xtSPZCUZ6kn1Z4VnxUTbKwpjSbQHPUDdKGKz4Z9UMxPKqy8NXXCMg9wL8o3af5",
  "key23": "2SjsgkNQpPDC242K4FJ1GFbMdABkY3kFhxdaXTwyk93gCuRwXQrXCCkqF5R5YSSZEd1FWRaeuN2EScCFv9dAXV4A",
  "key24": "SmYUHMSeSsSYrfJqTp5beBL3rZzdA3r21j9XdU3RadhTehEh2rVpHGTm6UYWnx48Dn9F2GvLZyMAk4eZeKQ62gr",
  "key25": "2CziJAn9DrbUp3JW2oEQS36YLNCYuK4cQ328RURJB5dEEvh7LayqUDfb4vu2hZJqULd6hQsjDN55N4uV2He4mQAN",
  "key26": "3WD9FkqYt8U3v6o9LCx7TEec1fDrmwb5S6g2Tr8FYyVPHhQ6mKVroFZ8ba4o23djLJpvpfaML6otn2iHxVuVpG9S",
  "key27": "33sD18xwJpB1ZE44pUa9omyW1AG3q8padND4g4aTbPzSha6WuR4AmPE4NGc3KbgkK7ygfxytrDaApfTZFcWAX8aA",
  "key28": "oDitdquoTpLoXBAbp21oUrRj4rmnCgRqYuzyER8nAfesVPG4C1y9dux5jHgszJzP6Sq9HWt8y1d4zfygWqTdxa4",
  "key29": "3WYrkBjBcwRUd3fZ3czDq2mhm5yt4aDVBndcguigPjTNaQffS59dpwhTjSgGyh9uB4YGFQWNmqpjR2awccRJDayZ",
  "key30": "5fauXmZqWSmRuLZWe7Sc6KwFar3woXc31y37fYKPwQyBsuk9Kid1H5N5qG49gAt4hvFaKUkYSk3wYWvYEcwwzAEH",
  "key31": "3jEv7CaBJAwesYbUAHDreVVSWykHQBNeHSPCzvepxb5GC6xcx31pgU71RR2tZ9svi4yjXKda1FxhF1wpvnNbWpqX",
  "key32": "2UKSGZB3q1MiSADageggQmxVHgY8Up4QbneLtKcHneh6aq6AzQCnASPgY9cAWDdRs4Qq1XVx4LHKgqSjwoDRDVtG",
  "key33": "2UvDUTQLecYMjbLJ3AycuD3Ats7mpwp9aXU8xUgPcRECFFgnEPStxK6uowG8Yw6jXcFcqnQsFAKeQ9vuCR5eRQDo",
  "key34": "3fvLbAurKBMZ5za9bq9SvbcMnwAAGvqjeLbrcvCTmYFqFA4HeRW9up2aEqjgfP32dBS4H2TvnPvYTBgW8hUQGcm4",
  "key35": "4myT98Dufy2oHSztXGTUdD1H9xVMmhXnnqT5iSMWTcbJTuAiaF3iL2YgeX6AJ1FqqFwssJuQxzNVaxXK6ai1KotA",
  "key36": "2gqmyAfRQoxWB58fbck9vwCMbUhqPu1wL1B23YDcRDRqPuezAH54rYpBQvUYbs11qrDqMNpgdFtqQ1J6TdLymrzi"
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
