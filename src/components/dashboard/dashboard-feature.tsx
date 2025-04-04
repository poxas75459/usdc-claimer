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
    "2Ak4P7wj16vprk6CiXrxzLQeLN1zZ3ZnfsebHWZnbCjXoX964Z28XPsUwQ3KL18d1UPtUnXH2EqfUUsB37VUawmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRCtd13SUPoGrsrEjmvNv2GkTL9FPdYYGL4hETUiewvWJG855r4jzXszVa4iFRKiG84pruhrJknWEUvHP7hhSQa",
  "key1": "3eNWTtVqRxLVikHqrh2awsHKhddpw31NG4khaoesF9C5fqiNjhKGnukiDiwHnbDkzfjgN1AViWRbBFKKdEsFXtM2",
  "key2": "5YMx7gELvqsojHj2R5h4fHqk9KPMYTJQ2s4EoaTCXKhbw8TQV1b5buhRRd8WshXdMupcjGePXiVrZC4wruSM77A5",
  "key3": "5eXGsLfNmQ4ss6sfxk5WNLc6RvCs6BHzieT2qChfNvUFE9LWsNVv9UCxVUhLgfLJeQbCqH5k8TvQkrnrg8tV4exY",
  "key4": "SEkCoFvrVHdek8QQLf89jtHx69iVQtxDmPPS24fMugTSLiM3sVW4tgonC8HCguSrPNxhfP15veu7po9csH8CwuV",
  "key5": "3KYY3kdm8qp6HPgudgL94io4gCGCWKK2o5MUHQEztXP2eG6cu7VKvcv27EKaQcJHQjfqfibrGzNjbWR7HX6ztkg",
  "key6": "4tzWn24AKe45woxKtxnJiWcTKEtpqrBvV7FZdoeYECT1XJX1Qu48ni4tVYC3DChwFkqdh97nkjcghYuZMFLk3nNm",
  "key7": "BGSM46EWenp33JuS7QbeiC1bjRH9Hz1HSHe4KytDgYxKXw38nZ7buCV4qnNaNfPQ3TMMz6JDtkswqzUBdcgozTp",
  "key8": "61Vf7ug6z2QL2w8FTssdnzyHSKhbWRQMNZyfqLEx6itwNpYfHgfkBXAZqmUcMN7QKgZZSDJekT2miKugWr2ff3HE",
  "key9": "2xhLVBtUrkaDk8hHq4ULkiqDzmRhpVPqpJbYXCeP6tdXo84CyvJyd276GhzRXWSwq3Svwgg21bRZwXKWUUGjukJ",
  "key10": "3fpUnfxjLdCNuVxc2Bp9chnbu5q35TazbjkktjCeFJBSuR7uxhD8iqmi8gxf55NXRRoNBAi6VG3PWr19zkiUx1Cc",
  "key11": "2oiQQxaUYw87rTmsasdUShrq2FoUtr4AREQvrmyt3D5ZmC6V873SczcqXfhk5wh3dzztMfJefrToJNoGERrG7aw8",
  "key12": "2ehrX5jYfTKSuKfLormrEi8KRuNXSCRCAKzQSTKDX1tggLKBGvvuR6JNaMKAxARwZgbQn39fNiDtwcTvTRg1Cecb",
  "key13": "KegaJyZsfVtvkjZDAW3fykAbsqKsJeZZB2N9HnHh8F8oNwckHJvJ3vmBu4udmpaozfXPXEgUB2q7VzyLAmwdw1D",
  "key14": "67jG7y73qFTmocPcLj5UrRCkig5XA8xvhQ4V1mxkQTGieqQcZQ2REJN96em8tHGQtaQZucf9SGnYKu5TPhJ8dNu3",
  "key15": "3gyZX7uE672CtNama92NfvxN44En4DHSctJD5rhCWSQKbMe1reW3tQ8PP7nmzCqyDtUkQKncSTHTL5mRYnuvhhY",
  "key16": "32r5QhY7yw2n3y8URzxPuNiBc9ddQc3BVAprLC6KwJBjLvRZj5Ekg2X3YPMibgzNgW2iHsFucMk8H8P5299rgi7i",
  "key17": "61ScRGu8j4caSzyqjiXvCg7S3MC7pC62KmYCPdB4QUGZ3jQ4QJmWrLaGPQmSoVEqV6YxwqJYfV5nUXxzHgqvmfN2",
  "key18": "3anLfvyKc2WEj5Hi2urppxzBKKmpm7Daxtggv5GjMKHASsVwZmhg5gwLqYyU1zujvg3G5pZ7CL9t8aq7ceqaeeUg",
  "key19": "4tKREPj9rPkjMEgHBD4QHwxXZFGvgMZqsiTVjTtbY4L7RjjyFX571wwjPmfzirR4G52WyRevjzRE8LzyBjh6WCbc",
  "key20": "4Jgpmfj7LnCERc4ZCVcfcA3SZKLBM6FQU7juViFHS2CSus4fgdGJ8TGg2Xqeh4BpufWwTDUG7E1DZ4GYQ2dbFDPb",
  "key21": "28o7ZfiRy2RYWPwRSp8cnEgcFymEvTEff8jar2xyR8qjW4LA9BALxaPRb3gXgSCmPze6YL15oP8GsfT7nsWhNCzo",
  "key22": "66wdG8yLXfQpVSDW3gqze1z7hGoq4Mvr4Ub8pB5VqkRiSk9ocALmhetFoF9rya3RTm7nW82EpvuQn5WEE7wSbSGu",
  "key23": "afpsKwc7eWDANWTN582ocwnNhJBCyQd6MJzMqQWYF4NMVAZeJnyf1LqUhCmg5HYEqtwcYi4W1XfqrTy1f4Bzz3n",
  "key24": "35QKXn7GQHbk4JqZ2a9w1wC71Mi1cuCi3LqUw6p21n6rAUdyCV94wSaqA2LJjXMMC62p4iLAfd5sJNvrDUNPHypL",
  "key25": "2W85tc9eMKfHwFYcSWn8hhpn7GbsHpqiKkmuxXqW51uBXB5nR4k3iNwbrESsMa2R3nHwkcX5tkDQWG66gDqv5SDd",
  "key26": "4i2TaDTHK39h1yobZjEWV7Tp2rtLKKdFhvw2Sog2WVnP8x3v6XLVzKBUWpskyJ7CmkqWGoBPCeFxxeLcUaEm9Sia"
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
