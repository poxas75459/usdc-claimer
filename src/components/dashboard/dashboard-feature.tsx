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
    "3vN1xFUGbh9EmF4ZewPRAApbJwpSf5Z3bo6gb9vMGcJRtPmBiafF9Nt3hzpW62y6tnpnLeDtxSQpBx6EzzS8iWP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uC16tLMUkHN4wojvD4wP1gHJW6BYdA3G9b7r8MnPPLJag8NPdAuKkeEpyqYyAaJFbVspDsry2jifoKqCmdPzgMo",
  "key1": "66Gcu8gPZKZG3LJz7Lb3f8WgMjfkUsyhZ1hagVEqQo1p27hDi3atUyqGZGd4yj5hTvMua8EYUqYCREGtD9ECwLXi",
  "key2": "3NVZ6s54Wc5cCxnVTgjF7uqNX8Jskos7Eb3GZxPSCLQq6KJMZontduD83etJZcxLAypDXF2iTeUPuBetrwiJeHi7",
  "key3": "65cWp3XUrFdjDDr8rDuSJ7K9DokHLTXuogRyxwZ2Pzz7VwdoDoNTrkSMmUkitL4QX4i5r7k773vPkQjDTpvKJ9R6",
  "key4": "5UqiXhxWV8XzzdXwm7ZJsHsxmxTmc7XAC7JCo7yhLcjVsk4LHr9FjMJwGsJJ6i6bMBER8Ggy68VVquVMHX8XUfhE",
  "key5": "2wZFqBXmJd4NGT5SHpFnJDviLqBvD5cTWqwdqTfa5FrSo41TsbRjoYQmJJ2hvbUyNgSZKJB8sXPLJwxGcb99RbLn",
  "key6": "Bxri2i7XGrEuoQhcGRo45iDhBV2xJ6A6b3KKrr9um5LQfNmweVi9tZZNcFdeQ31bgVXhFEMt4DQuKWBnM6Bi7ni",
  "key7": "4dgzKUDcwggXYeu6qYGaUsryVUNHcyV3m1tmHusnZFdYqPyiKMXTDVTyMeKZbHvygpqTomYhLdX6ExANbgQkBDBV",
  "key8": "4EWSpC97vA6AnY8bcKLxuNXeCNuRhaud7XCUbcw43MtSnrkBvWPTems4aM9VTsNfV19hNPVwPAdmQw2K9ynv7A9k",
  "key9": "4wvEh8TRzdYs4FhnWRoW3RHLdR6jrMEzZVYo9Rrq6nU9bMmtLhmY22GPSCg9NqD3gux26unSmW8At66a2BNxtJLr",
  "key10": "3fHbYLreifGs57WeRMwb4fF6zDJtN9Ss2pY4meitETwrBWqHZoNGCyGj9r8bvpv6zddmW6axtZpYt5ABQTHGJkVk",
  "key11": "3zsJzYJnVwirGq26uT73wKyJ1HT5HZY6TzsMuVfFzxhwrxAt4hwDbCHCoRUrxDQXNMLL5VAKJFQaq8KJ6zjdcdfG",
  "key12": "5Ng4PymGCgYtZkRuo3Wp24wyGhNnRRtGPK5KHYfxdgSCFMpUmNCuBdJ7wT1DwdeyYUgx7tX7NvUvnmuj2k1K4MJ7",
  "key13": "2TXZ5ZJTTzGAZr9XJJA3LckTwziUK2ruxqDimyHbv8on4g8A9iWWMYs1gtRbKQEnUekAnB7ae9Zd1PcKy8nWW4zX",
  "key14": "5WoHjcAd21xZzmJGXsK6NAzzUMCbDQDP8ftgHgbV2aazwoK1mEEhiCj6Wrm7DkkvriEjimXi1Cy7Sd42z2pwF682",
  "key15": "4RbjDReEsYtnVL7qKdgKzy8d9CqWncivL5WYssHdZQTfN832fLXw2kPeeqLKwisQtn6KysGyq3DC3PexXxG9uouy",
  "key16": "CarMgTuN892CiLCUdhUbnjBJdA9aL1RNxXDq8hF8AMsKP3q25gFB6BkTqqjpbeXnnkDY14r41f4HmRimzaswPQ7",
  "key17": "Vw4Gac7A4T9jchZa2gFDwxpRPJuL1DPZE5i5oQVr8BocgN42rLNN7zfZp9R2sGeeaGnJLMLzGUmdbVFvCmbUGp2",
  "key18": "9x53Z4yaeipj7G1bdVGE5TwSpoXXFni8PPJrJ1KzY2i3L7eHVZfjW5V4uQDQbAAdUXMBmMTd658rn5o5SKN62AY",
  "key19": "3Y7c6rj8UNu6CjVfNwphWh9FgHqeY5hGCzpYgPC12XcjEVRN636AtnkLTWimnYmXsuBd4Z9XhmE6Jwtzpnm72miw",
  "key20": "53Tn4oFWfdC7yrNADHzzmqgkdKNyrQSQmsFNYPWTwtpp6bCbgQGtZY18MEVT3N2FhCy3aYtxjACef2mchZiV9JuZ",
  "key21": "5juUYgi7zjP19AaD9HAQBdAwq9E899GeYa6UqU6QNub2Dc3jyHNGn8p9GniWXRsCtahYqYp2ZeTwhwCMJVDrbgrU",
  "key22": "4yQfYvx5X3iuNMB7rjSbYpQXDuP2qQnYfmkw7ihiVBJ8eDfRoXwKZxHZkBPDYDDbK9r1djAkW1Z9JT22B4trhAKN",
  "key23": "3jnQvhXYMmk6KGd42fqwksLnoJhzMUGtTaQnwEp3YSNMf8qkLpTAP5vcupXuEWWcBNeZVzxYFqQAfay5y56PWbww",
  "key24": "4ahLFZ43H7QXjw58wtVbejci7n17dEc698rbke8jN5uNssnJLKbnGx1vxR9qQoswuniLo4DyS3AFtTHxFm1QqkAJ",
  "key25": "NwXWewVc5ozchQep7yqUyiD8Uce3Si9gnpNLVJqYf3VwtF34YhpaQnZPdhcmv5SrjiW4SqxwtLDKQsG1bCYebfA"
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
