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
    "5kmbw53KR5uAib2M5SkNvpqfxar4y7FeMiaoER4MtfHYJwUSEC6d22Yx2uR1yFUxgXYAQV363h9ub2JvaqHAAWja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jd9Y4pJ28oo7LPoFNFGoMy7B9ihj5pLcnTexAoAcVYc1PapUFAtb7xSCpBSNiDy2fL17yEP36kqV9dANViN92n3",
  "key1": "27HkKC8VFv9o1anZYxnq3fEWt2LyRPNzUkXTFjTiyYsKMPCcspq37rJKeJpYjjWFiuQTCRB5eUhwiLAZZF6gMWpS",
  "key2": "2w2mzxhhmk5koY13Rkn6pMgd5aoT9jxzC4NHpZiFFvfMQyQ5cffQyehS4TnB2yZxZXGk2TBjRFCoVmj5ngncftNU",
  "key3": "3mXY2TRnM3cbTaVs252EGUhcFuunc5eKVFE9QqWpLUQT2jACYcAZwF9oTe5k8a7LUrs3BJVMG1NQWSP3uBdPbRbb",
  "key4": "3UdDTnkLoeGJvqXEWSRxvCv2bWx1JHWbHbFRi9wYBrSkLV2K6Ra3Lv7T38Cbw7bq4CFsrxruSrbDnGJANqy4gDVm",
  "key5": "5w2EkabYNhNh4JGDbp2BpV38fGGfeEstpot2Tp1R6raEQoUCucvayi638sdd4fWRyYbrRfP8mnSFLse5E3djJd3Q",
  "key6": "34ePn7a9rejcFjpqxy3w9ZzuZR83dp6TnWAV5kdqsdAkM9UfZw3b7TLymH8pmbX4myxjcjACEYZWjxJmpEKtrsJD",
  "key7": "3RJMGiDzd1MyRJaLpBNAJ5whKZ5MN5EAYHYfvYMMzU2M4ZPDRv8KE5yZjyud42s7dxfRnW6zmHwc5wqKqzSS2rpK",
  "key8": "3TAQXvJdXGhxbcCYMjHXzrqhep8GKvZ9bNGdhy8CRwejuKPPYkgHVwQRVo5Q3pEfY668ZL4mQqf5FJD7NvfpHqzU",
  "key9": "54EZxMCDpQY1hLuMTDeHoMtLqxvYtgVMcB1a7oGDTfdm9es1jUFJwBRer5T2FeCQ9g5VgQSChmDEa7kVDFRLhEv3",
  "key10": "3itevgEdAN6cC1gwn97bxBpGS9BYsSNv9pJ8aLgWALu7qYbuCLGN9cCt2xdqZ9ap4Nc3MKAhSJTkFKzGyc2Hp3Hj",
  "key11": "22G4KXKrGYpsx1HzAhvTEhiidX5nRPwtye4nJohWidLqQEEaBGrcf1mibJ8kCRj2GwJFCfLo5GPkdu94Lo1fn7Sz",
  "key12": "4WQ4kbXK1Bm3oQ2Thqn2sNMvQZ6iUApp6ssTJNm55sHg1yAeNVQciB5AggfwFWgTwyUw7H96GWtRRVQ5rNWXoswk",
  "key13": "2pcffFJuXAuZCyzfQXhTzy8CgkGghcX6auKAcq3xfJdKMiNQ4jf68RoN2kMex49xAD3Za8JeNH1wmTJnVCAqgb5d",
  "key14": "3LjL36BECdNLGWR21Yfd33vQ2LVQQnZhQ8u7r75oUKPccAD1tF5nNcq1qHXbeFnzURwb5tHBJbaR9NiNWgN5yd7Y",
  "key15": "2C5hK7mQxsP3iYqTCukhDzwUWtEHEvGdpUZuPdaDbRBq7bUb82vWKFjJrPboCKstb1ZrvxpjwE8VffbzEG11F93m",
  "key16": "5FvVRxdtm5643gBgtU2K2E3TiFjbpC4GrFX9yL3GPi5Xb6diHLLsrQwAQJBxjR6eSQnLLoELYzRnB6r7HJdFkMhp",
  "key17": "3sSgySnjzLSSxEc5seLMNFX5i2AvzAe2UJBXAwDSsLS5GeSDzvWZFdtH7UKPJ6jQuZ7HJkidhtrL9r76Z78H7w6z",
  "key18": "3pgSAdjxVRskG9Z7GfQpYm6rbMxgR6bjPrhWxiDz5r5cEqo2trHmbqR1t6HA89MsFcRugY8Z7KKXAbDjVXmJZ7cB",
  "key19": "Z9AtWiSAQmfqRxYjtJk27LuefKVcc3XZR5gHTjs1rRBjcMbXDkw7MqMTL5vzGJQuHLfAQiyVpJw7cQYXUfD84jt",
  "key20": "4suVkEBrCGEUaZ1DH1iXsAucxQiTbYSUwPd6BsMnrQzriNgmiRZnS61pK26rbBgefD5fQJAjux8CEuAXuLazLkdY",
  "key21": "4u7uBnj3JyLKCwWrg6pswwhEPUwqGmbD9j1y1NxFothrXqYGouJE3Gx5WdL2VGqi81wohNpRYjaGsm8yVnkaRPwg",
  "key22": "XbYDPzsn1vPD7Jvm8f76KABqnAuRBfENt2epG7iXDgawe5E65W79uzx55pULb5tG7ozcsYHmXuvoVNomVgvFfd5",
  "key23": "59yo47uPgoMP4F8puLwm5DRTbwt6DdgyMVMc5ZYV58pXdHEgBaRiWBpxMXJWQCGLZnzLiNLXKENRZFEeTHH6o1Ba",
  "key24": "McnnhMDi55PUmG9Hhq7DR8mmKMJzX66DsTWYEjZBswbuhg1iVPVmiB5uiaTbe4tskrg3Cp4XQzBU8bqUBMjuLXK",
  "key25": "3da56kne1gBtfF9hKqGSCbus64gKQ9J2CiSxo4Entp6nh1dyDue6mxhJgGFr3SBaASRRGATCUBCkJWbZe9eGiDvj",
  "key26": "2zHwnXXPtCoAjLSqkUC13gGpm6wHhQi51xLMNhi2CS8CPsQEEAJzRCnA4eNrpk7mBs4Kmt1eiabSMgEC3K2mQzd1",
  "key27": "2hPoupGX88qqNmyfLgkNb8itjGnEjHfhsoaPnvfUacEtM93ZV3UvX1fytdPA9GYDzpXDrY1xuMbJXFJH3hTo9upk",
  "key28": "4bfUhyKsgVVqmYpWJLPbhiMCXGT8yjBfcrKzzAhmRGH4jHQisFEjKJXNaqrTf6Mbf2sSPXjJhu86F1fQrgukjSKj",
  "key29": "5iPupTCABT6GVC7UZYHhvSyYnjJBTJ3pgoTAE4Rp8MQmNzWz2sqLq4U4ffZDbezQiQrGYGZWFL8Ptye5mrgLrXpS",
  "key30": "4uYLnD4EtT9KdRaDm6MNBJ2mn3H68UwmcaTWAUejnm7DhsxozJz6mW1mLTdfoq3KCSuCuK9D9AocEUfN6YXFvMrU",
  "key31": "3VUK15rssEbHDE5bzoSobADAnAphCHrc3C6R2rDweEJeNmfe77mHzo9ZXfTpP3sUUUsucbMK7tqZ2hhqzy2qhG6R",
  "key32": "22gnzDsmRRa9Xjxouq3YQbRjeuxzJuWZGv1ZpRvFmGebPSJN77uVsFfL1uFXEwnH1yEq73bcZfxvEcUVUV8B46HZ",
  "key33": "5oJdZx94EVALc8wSMnETvQbEfniFgXQDkBxza8Jose191iPoN57o8SM4hdgY8WoUxxRVXCfwpTxFzDirS3StceME",
  "key34": "26ifGN3rw5Y3qt2rnzvbuFmdSsJBBWrsV2rhFpkJdkVniotBeRx9gyKRLwSousjcoukjswaF8QMnvg3SxBk8GwVw",
  "key35": "SJ8rRCUckdF3XqxNKS2uv3QbNmUsmrQ48cW1tyteaiiswjer1nHvyRGpYrSTFVSPneVyYMPAqVhXwv3U7H2Ea5v",
  "key36": "4DdEjnfHqkrXjn4dfBtGLcCHxbpu3SfCxaLgtFbJdrPc68tmjV1dnQH7QWxdkwJL9wTUtRFm3HF7Rvd3QPEjKqv5",
  "key37": "5W7rmKVJr7cJceNBFNfrBVvxmDtNXk4ryhiZd8JSaJSyyFYaabAsncQKvZnNdCYyaUQb9DYqDJTo1NxGW5ee6D1T",
  "key38": "2rACMR6G8LmXfbeVCitYKuy4x6oN5P6fB2wDjNTuSgDMQEmTjbnVy2cLDwwGR4RX45cJsBTwFGLhmo3CkkAus6g8",
  "key39": "49CM1iTCHWQSTUcdPL5vMFZpzs5aVi3ZueTsTmPej94k8ZSmUG4gru5N9xSvf5MDMXZj2waQTzF9KP7b67ji8c5Q"
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
