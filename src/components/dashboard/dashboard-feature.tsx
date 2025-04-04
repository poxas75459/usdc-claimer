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
    "4aW1d8ymJuzC6DqwGo2ZknhZPbYULRhZ58m38v6YCDuTnNmivLqfC8zfsRtARdR2i4WP8FyL3HSwNmHg3xrYd3aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iJXBjpPD2rUn9ffD3DYGjq1kqgJRYSgQry38Vf3oYd8BuuctM44x2xJSXuBf4gyGcyJQucafTLyCHamZr7nBK66",
  "key1": "41yga1EXuDJrnJFMZnBV57XnG8oryH23rBJ6tzxvEx8QhFhTN3jkXL1BX8wcKSQGR9kifmrMyweq31yejbqzqzek",
  "key2": "5gMZqSsaF8oa3WY2ranhADzDjcBVWTFRdvtw6yiTNiAh1m2HREfMgSArK1VMmnW63keBufCQoQ8Gdc8p64mgni3Y",
  "key3": "4F7A5qp3Fe6A8YpmYoNjsZZPf95mzu3fsEEPtWuMpduU3VjfPiWtPRpzKivAXkxhbNxPpQndEC1PJ2RhQ3MUbh6d",
  "key4": "3tRChA1f8BvHvn1H1yYtYVsooVMJtXojjpDVjPWP7GhNftgQ6emX6AzdGKFTzuAEEw9RFMF8DwBw3gD9VGRSsrrp",
  "key5": "3PUDsu9hEv48xmX4E7v5VfhPgaPSoBRDyUP18sqqytcS6JgmKmoGKvUDiCKL5ZqJnB25o9k6WfXoM8HLQpsdXZK9",
  "key6": "CBM1nPgLi6XcvwWweycfp7Kf3e5i5122AXr19UhpDxpBTjnT5r3VTZjoT9PewJbftcZMCeq7Ka54o7HK2QbsP2v",
  "key7": "4t9e8gVeFEoZJj2Bn23HtVpKF33d4bZT5NCL4NJcFLoNAUSLdD7NxNCfhtS3KpP59wj8eCjwz6tdVbETZzNB4PAX",
  "key8": "5axbmmJopcp1kqCXkjjFyxZepWTWNXqB5Ls65vgqsDmvsa9zrSjHmio353qeJjpUeU58jGU6FLAUkKQWxrFmaHZM",
  "key9": "5JVDoT2DGNe88aoM34RhTNrZjFBhGC5P7VehamSsmdSXqAZy34eQ8S928r5eKaW9NYFC78eqaHMtma78bTozWYH9",
  "key10": "dspVM2qu1EFUBCaTkWpTrWh6vjGVyMMbPxEuypczx3NweM7tmSuNufb1aswNRN6xVc8sYZJZ67QtDQh3KZ1GnzZ",
  "key11": "55RnHueeGsTQEKEJuLn7uCfg4pfozT9jX5qU9MK3FRMJCqzsHwaniGAnCDJtedfXZv8RRTc4b4kQHhaYw4LDdXCo",
  "key12": "5aphsfPPhWgGn1Fq8JmoQfrtxs9CFNaoEKBjvA6wFnuawN2TRDc2GkFM24TiCYQNDVK6tCsPqw3Nd6qKzve8VCUD",
  "key13": "4zwRDcQjoBvmC9Ad2cA3VFFxGUzJgVUtSfJwHKmUyGfhf2fKUzbwsQbzhWvVwhoXdxQonDgfbfbAwsPt6Tw7umwt",
  "key14": "4AzqTPMrSJRuUUz3WHTupq7VtZBYyvRMRsQxinDf1aeZbBG2rmr7UbvpDCE6NfvNCjnKUdcavWGJz9xFQTkffRw7",
  "key15": "5RCGWU4BYrspXsjHHAJvuDnujeHPQTK3Bt6XE1aqo6aTtDguyCbtguWP8DDFvwabqSKSWh52PyCZHysTab51P39g",
  "key16": "66Los3jnA2vbvGXc2eCk1cPQjmsM1A28HrHi7syTTW4Nw1ryj3sAPAJ8eDB4KvgiZn1ihALFpJhXHgMdkA7cDZuF",
  "key17": "2N89eqLbSCP8QHtQZLxgK1KNY8QobYbNtT8XR8svNWXXvFNTqifCnzs2rEAvELykaH8eLfZ3qZvwTeU9daWU2G5a",
  "key18": "sAVs2EzbGaWK1Shkbuy18f4ZGtmN8RtwpK7ki8bJxhM74tyjHVvrnbpiNK9TCRy1zSknBCnvKNKCkBvNsa4TKo2",
  "key19": "4Aao4A8v1dVtjm1C5f8J9uZ6B8vRuCnufydH5AY2CUzAXn8nzLXrzuqGxCRijHknDUxegRbStnLvktrq1yCB2Jzs",
  "key20": "5pmtopZ27mzVXsA21e2tpdpmYoRKrGqeXRPuqULfQXBbb2THNvfThCKaJYfduPoGEsf2QDDkd7p5o562y5GdksoY",
  "key21": "2kUDBhZESeqiLe3XKFExh9uH1PABCm69CBAf4hciuYR8sQnSmgFuXYqGaBu2Lit2L6qAgAE9UiKd1zwVwJmU7hCf",
  "key22": "5fo3MhfA44RugFtj3bNJUBe4BwUWKxTLcdAZXzc8XmWCFAXQFc1Wha4ckLfqRPhyD1P3fLTPW8Zqa5WyhxFXRZ6K",
  "key23": "3U3z2q7B7Zgbc6j1mYULDXZuBVadXUE4Pzd3bw1v6hbCDvyKXY762oTnwUzi7mb8BHuJ5LjdYCq1V7meU1wtdb97",
  "key24": "4mbjsCEWGCQ36Fx6snaShamDx9U1HGsevRdqumZ6JGrMKKsT7TERdpxyWRVGJazGQuHyzbW3o77BnL19of3BfWDp",
  "key25": "2Shm1Pjzg9QZ4etEVFfA96Q8J7EemimZA3uGdEAH8y6yRdP2GovqDheivWNuMpLrZaqx9n6AVt7skjmQVV6pvLsh",
  "key26": "2hAcegWzK9pc8nnsA1HEYt6uXb3ksH9UhhJWidthtDpcz6Kty8tMPYfpmFMB4ZmXL5aaGT97iFxVKenYCdDs9vws",
  "key27": "3LwRepKGVfy5NJq4zvjJhi8UEuY8UyPGRoVcJZJHFenkhmcaXifk6FYP287wXZ89e7NkTE6MSdybj555zPUzyDk",
  "key28": "5ooaNUVd7cEk1hYi7hiTdxKyQCYTU9WndmTJrKEXUG2y2ZXxBwqHNkZiwbuACxyJBokfZQL9QjMHKbtSiSozuNwt",
  "key29": "56KzbegPBEK3AEnejzpxFgL5nYJ2vNDJBfFTt8D6P8gszpcfHDT3uVspd4yupZw2yeSCFGKKRMwmSFNiucPdChQT",
  "key30": "2Dz8XL3uA25cE2twdv4ejqwJUAmBB18seMSQiRqHUxZdsZYhF13auTojvL2DP5LpPX7Dv5WyQZ6B2x5MtpBL1YNK",
  "key31": "3GpZTMWmeobFp6XC5tRGYVBy1JmgFe9Nbn9vhtRNsZmBE3pNa2pctBSbZSyWkZjqRnX23sjYD1HTb7QF7Kyzu6DU",
  "key32": "4UaM8gCfG3jSvgnXGBxUx8TnqwnR2BYmAZqgcZAC5A583NnJx15RbwTDuCmhPnbpS74prkvbegBsSiiiycwL8jbH",
  "key33": "2oEFqQor3H8czwpgcHZVsfWVYgJNFTVwQV4rZboj5jFwFm7poiGRiGLScCwqiWhGpQHGjcQS2ryraDqqdUxK7mR",
  "key34": "5rG1VS5WSctxusoXEKdG7jte69Wf3TQdfrCzi4HxSGYLZGsYPDmw6kfdozHjJVcXutcaRcdLMGvwjMAcpws9K8e2"
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
