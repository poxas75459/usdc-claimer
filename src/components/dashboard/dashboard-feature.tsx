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
    "7MC8HA9ETyDsNdpj1AVPcrwPdcAu86Rwn2BYbA3Bn6tFwP6tUPZTyd6wtQ2WYvD8rTzxU1CRZSDmjyfPmrHHZUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51izvrzv3V7ygzk2Sxz22x6z9z9QehMpVmzv32AdkNhgwudWYGunkDwn1LzCVUuKNyTvUDtbbkYCKCeyTWz7SX67",
  "key1": "2STUwgCpWCU4qZjRciwna95ZFJVxgM9zfzt6HSaQ7EEpVNa3m4a6Dcd5QLCCn5ZZwrHWmSpjEhcEg6YPJvcgrR1c",
  "key2": "59ppmGQ6Dq1Xa8qSWHthZ1kupSGgztT93oYU9WjbgRhQf2KLrrRb49GDfSqHHGc2VjNmqCLqPyLrwJT3S5z5mCmi",
  "key3": "5k5hwELbXSoHFi28rF9VWhRP2DfMmmXrSLCT9fqbAHfnEYuAgAmZ1hMFeqrmutkSipbhzUKVCUTtJKAnfqsH4dAF",
  "key4": "4pUzKXpYGCFQQphD1hSaKfmrkyhzjJX5T7692bjnJbX69T4zxgAvpTeHN57k6K5jCVwB6zCmNWT2vumEuBcMQNzA",
  "key5": "5KjAnJhLU4gKrfp7fKgwmndiVKyuoSvayfXefr65MLYaDczypJhujRvwMc62rb4yrfJvWDhQodaRrEVLNdjHDvvE",
  "key6": "x8jshytjhT7y7mHCxY2HJUZDfFm5MSHRqE5snmjXQBp5mEZaKEMPwkqLwaiyYy3fnMb2aS3Fs4J6RjHuBCfR5of",
  "key7": "4FumfdpBqTUpC2zwGfadCEfCU4L9Y5WKKftbH8hk3XM6tfThmUcsbyQDfa5mML2i53ZTVuwMrY2Xf8LLahpsHrFi",
  "key8": "BvSwdgpa3MpwCFWEJUtjnPSqahqyUg2PqbMGJj1RyCUuajBzRLU6pHgfMwYiyCNomvmMNNfqG2GcHzHBqDor4gx",
  "key9": "4RRGgBH7Hd1tCbH1RyY7GMixetCDuL3AWFf75v151tTj2XwWkaYmnB2nBhQEBfDZ9qVGBz3xxsDhxbcwVMyoYQpY",
  "key10": "4ZBvPckVbFAighzdgsQiq9UwtNhfo3xwN9XteC2nd2Pks6VsWbbHU4rWatzHQUCTv4rVAmsxCb3ZFzZZSzinYvi7",
  "key11": "2w6QN6y14VwfP571uiPmQvJeZvpizkkG7kun9Fj5NFKH1Le6NZKt34DNX7d7hFVfYdbDKD1PZRxZacRV4HyXrkTA",
  "key12": "3M92goEuH6x5omJmhmC211tKFTruYHgpHTLspu3Ju2RRwP4SDtMqK6PKeobCaqBix32Mp2vrDnHJbN4dbRsShGfr",
  "key13": "bkPxT4UJpGtFV5YMRLbjvXjtcuJpUvtzDPEZ6c6GGZG1wdWVs8qJ58KAq5PYAyqp58YqjxZi3RK5VpWJZL67fSu",
  "key14": "5h9CEqyUsgtNULfYZiZidAhXqj1SqhfqNjJWtAbdkHRUMV1UN6uJvnzTzjwHb2JkqEpm3mxao56G2uWEmX8BqqFE",
  "key15": "2386QGLixcJrn95Ag1toN9NHrzHQdeeL2GK9c1iFWmZUWsNMvTQamDFP189RZxLg4BiQejMnmTVoEiSgtizsxbCQ",
  "key16": "5DUnarCFG1yQtfKidePbbYfSFszYWHyL4bcUsiZz5XGg7dATPxVxhUP4mhzB2hXPePTFhcZbNiV4RSztMi66rSpu",
  "key17": "2HDxXM6KhNp15vcJ6MnTAhojG2aNBsbuy8CJuArXfeo1o7W1Sce9KEJyK28b7pBq85Nzn1g9WVzbkxjMweGfLRyR",
  "key18": "61DUHyHWr7jTVjJt9r6TzgR1FctfPZso6RJQoopSJPLGDKmEe3Z8U2SZubT8jc25xH3gB8pgfpotVsDnrp28N8wN",
  "key19": "4mv8Q5XBpFih53jRkET2PdRPMJo81Q18VhVh3CxV3CmnCya3eLcEjLSRQdm8TRoM1moYna8yMKEw3CKcCjZYN58q",
  "key20": "5uwFoYj9UxVTTVC1hHXe1AfbFcPKU7hHR14hrdEZAZFGawkLJNvPzkAEMZBuq7GCE26ncdbJcXVgP5udiBSTGA1U",
  "key21": "ymjhMARi2AsysQPLm4GjHr2jHGu3yfVuFH5vC857VPosKQgRByWRaJCcSxQgpFeo1xfVhDDETEGkAFAtZjPxzfw",
  "key22": "5uzhfdEdSYzDXUdHdjaa5uxraMfWQtQ1u65XL2Sjx5WUMTTYXRxiSLpauRDCmqouCotcXtvViN8RipaNYouFy34H",
  "key23": "5Ujfpsdqqwsza36YUZUbDge7nRx8UgJkSDkAuAjtY2CjPpAsBdJLUArto9effxHH3perupBXheTD5Bir2qtHcm8q",
  "key24": "Tyei79sapVkSzUbCG79ixuB6RWGau9omURsN6qogbta3wZyXZjM7UzFW2CpgasodPS89jxReKKaTpYadsjbLP5F",
  "key25": "2xmcC6SGJLZEZwQUXbbukL7YDVK2Pne4E2iHmHPpr2h53Ei3EPUoNhAxNfeYJF1pznZp8Uw94BhFQ3YLWnpSykW2",
  "key26": "3UGyyFstf4CYMqgNFe9FxMnB7e8m7jttqUyXuwuSiutwiqG7Roa7HDHg2gcFsbJ8xXvQ6oRSry8Nrhycwttr6x7G",
  "key27": "adbMbxQEb83KCWVKUBBfzst4BhQHvSiZqv6bQuaoPE45xGwzdo5tqbyNTMsLxnmQWV7qeWq91Moig56SbRB6ksg",
  "key28": "3adN1zzGqcRjxBwd7NACc1n4yHzQYfszNEsVk1A651M8UTqswNZtyHo5RVxhds34bBkrKupo2qYXBXpra7qCXyoC"
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
