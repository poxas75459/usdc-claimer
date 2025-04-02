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
    "5ajxDyLwd9TZSy8VFMqCiWuZZEakdyTsqvJo9SDvakJNP5bmgtb39VepmCvChJyhhr5XbymKSSKLickHnveq5LXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EkY4vZDPuymjJUvtZdHU9YSeNUqqTZKQM45Q5M1RZJxNgQ3LDSzBcBf4HacCxDSCRmMcfeqy51uuD5hAwcDLPHL",
  "key1": "5yYDkyzeH7SG5W3cZi6N16GNeoQdgvLrGiCVRgQbXGpm9YNMgMQ6r7tTpdAE7H6vPpmB41FBrzZ4ZzcYRcy3jBxh",
  "key2": "4qt3YiKEekWYJX4br5oRywU16oJCDYStufhXjqJnzEANv6uWH9Kgqfz5Nwvi68Bd7RdEXyWiqkYqtpVQehGrTxH",
  "key3": "5H3gkhx8UVgQLXLzBWCSH7jGzhuNkKJZB9YgQBuPAskKxvkMZAQJ9VN8s6MojL5gRPD49Vb43WuFRbNvCJ8JGbjJ",
  "key4": "3gsbtAoRDQHMNeCue9eY22kg91yqD7umuQNgoUtdVwFmt9UCaWhCvjohb296PPGeQAFH58df24nMwFgdwX88sEaF",
  "key5": "3WQkhyvuA5JGbovXBgQSruqR8o6F4ydfokdz3B5ph5v6zfVP2K9MPTe2h266oDjCzxy9muDxz1gVoLKXVyGkbpNC",
  "key6": "DzPvQuMo3X1XVJcpfAuBSHbHRU8rtPzXK3a8HLv4KJ3FpnNXPuz1KVb93Ux2Ji82TZWq5PASfKzYF9R1ZhL2hmT",
  "key7": "Bg8CZ62fSypq6rjB2dKemJnPknmc9E4aNMtBRjKB7o7jd1yHfLA9DJiLirkyQncPQvTXsardE24Swdy6dUoh7Ep",
  "key8": "5VZZKoZCTNgoWmnkHPfxkgyJFaxLrbTiAmeokxgveGU9w1Jn1wXozPQSuoq1KZNUeSLWWhSmFjAnuwRJBjh3TUPe",
  "key9": "2mVAgeHrhTwHbpWQ53HTUoLBvCMQvv6QxVaU8m5eomG118yZpTdqVvs1KnzdsBm8hSHCu8FPJApUvepk8N1HgTh4",
  "key10": "5vPjJPTnwMnkscNhu16M4wEa7wbNHhRY6c8nqKDfuSezUK3YjacPCYXK93x3BbnLsf1P51TsPLwt5aKxYbQ9irXd",
  "key11": "4UCXyDJxJvUfRcguJmRkvxVPYKdTGzSvduSBQ6TzNm5BedYbf3VwuiZu2ueZEZNTrrJGL7aX9QJDRewzyD94Bkaw",
  "key12": "3Tey8HpPfGB2LknYSx5XBFygRDGQtHtQLTogAYjwivoVfPTiif4m3VLVZvRfexuoKvKN5mYr2mKXrmWBmdZNbJiL",
  "key13": "3f5XU2pSEqiVVDXgztemew4v83eGjvS7tgFgebUmFLq7vSUmmvgCQmVC1kHUe1f4F5fwph8EURUumE9dTffLW6oS",
  "key14": "4ZS8TnSoq5nqkQHQ9VVzPBHuRL5D3B1ntEnzqRwEWmmyQDaMovWR5AKdd89cLA42H3ehkPqpCojZXX5My5apJV1H",
  "key15": "5AdP8Mt9iENRF4JHaafiAmBxARtDC7HWiJMiZz4RRmkcVG9pFRYunaZnqvn45rqf9xoBaeHpA2kTqs5KbcMEE84t",
  "key16": "5k7wc4NwjMc9KRo1gq6HNUDYHUqDatyHjL51TUEzXv52CSwW2SFtsDBGigdipCiHV8hFc6bw4JbNjNmLDY6KhmyE",
  "key17": "2Lg9ToZKdYCJCar3ajTJVLo5cSKSTp9DYLv3HSd2K9xX5QnoMNdk59MErWkJqx4uwXKi3KMnd1MPk2owifypcjgp",
  "key18": "cTvayDY68BFyJpeBke38udK2ZmSEGaCDCv85nFP96xJiHs9ZGuMT8cfpLzUdDsRKbVHwspx88of4yaL6mA2dT1w",
  "key19": "2TyiRjfbCk1BegzBGQYVuj412ELz6LV1aNB9sTVSZxJuutyKgDYhy1A7VwheKw8jNQQv6YUvtHXnkD6CT7qxsabS",
  "key20": "28WPG7yro71usaUCE9EzH7pRjbDhs1Ux5wyWKKHdXfibC1KFhsJxPgzB8rdsejG9SGtveZs2wbjFKyb1YF7sjRJ4",
  "key21": "jQLbnxQywp8s7Z3eoorLF65D5XsQmFTKpNCM2noxn2jdYR5ZCKnvY2SveVik4uEC17iB16wzXeyp5ArjJr8PpuW",
  "key22": "zaySHVZeCc5tb7s8MwDQscnp82kHfztCnUDkXNfw4UuJHAArp8z38N4yZXK1KMXgtVooNSmpyUXW9iJFZxpjyiX",
  "key23": "PDeLmBAoSw8XhUapsnNoExEFb9mMRKoBpzw8NZXxhda8Jx4sjtTTJS538Gi7cRNsSzCbhcpDEtJZ7zFb5F7hr6a",
  "key24": "4mgGDq4Sn7mVKUHbXJRobpnbsHqeYbgfyC8nVL3xgygiNKt5hrNa5Htufy2nsUSqMKZR9G6SrFtCtKvvVd28QggY",
  "key25": "2rdDEoYCJ1Qwf9qbR1SYRstMwkovbC6F3UWjNLKiBfi463akypCqndaJyFsKJbA87EAbR5j97hEjGpjPabQm32YM",
  "key26": "5hTvJY2aLVnZR7AoD4LpitR9x3KfBnfss2MXo8hvgPrKmguMigwsb2cGCBYnaFSaSNtGEj2KKN7rbhokfS1U8Txt",
  "key27": "3mmr1A3RNh3Gr3riAneR4xUkwGWqmSLKzSgjJE5ua1Fm7cX7YFGAEFEa1i9NzpUA1nJcpZ36oZjmhVDpRZxtRCBa",
  "key28": "8BX4oeSKWNRhnodPAKP87Vwxx5Ed6pWJ1wgzjV6n4jwtfMxTbtAsrKnmzFv6uiCjt9VRwPqp4XppfSWB8fzni6K",
  "key29": "NUXMu5QHgsVYQEZeDUfqBHsWL1XPqWS2tetg6gzaksiSjWkfQmZWMJdqGx2ZFAPUy5yTuLWKJ83JjkNHP1M7V8A",
  "key30": "3bA3jxeimFddNRgJdkvRMs7v7XKADKuo2aiiHYKoQeAUMmkNtBbGiXGTMrG7E8hyK6xKkwDfFZYyZFqAFNdouSKU"
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
