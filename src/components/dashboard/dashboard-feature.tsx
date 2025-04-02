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
    "NwuTP9ymCgnLHD6utmtZZpLD9Fn7AXikbPfhnALX9TobnH7kndb6jW9p8evUza2fcVj8DvSQhsdGqcRVhSVJ79W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z6fWpYBLRXSa1cVvSZrn5K4hP21gaE2xVreHWMNCAaP3AnansyTaW8CxQMzsZHU2rmKuqW7otiNpE9cPZDFt31F",
  "key1": "zWjygUzubLqe2qgidWURyTPz8UHWWSr2E2KcWVqy3tUNB2fSDLeLNCwuyR1TqQVkCUx4zPpyxkCTcSfqgpizhKt",
  "key2": "2abUe92WuyRT2qbjy5t7Eg4kLogzPVQQjLTa2ePjoaWcdeRCB8x1SQtJ1rMHpLQHbiuoyFKzH76wtKEn2ZM3koWu",
  "key3": "4td81R8DuQ4dcRMjQuA7behFM3AipEuqgEzShTdJQzqRb8LXQjio34R2NirQ3um1FeYz4FBxLaeXMDNhCKhPqdR7",
  "key4": "2gkAcaSHxr144pcue7fx1Z3bLSnyc9hhmiZ9NCChNkwHbiUPE1tLYBmvfA5BaqJWdZa7PAmFaCq5fKt1RhvBqL61",
  "key5": "65ePNUmk6LgH537LkewwUK7G9kEdHauXGa34N5Mb8ZapLeQZp41wQ8qd6s7532dPHrJXrQWPqnTZc2zPzhxJMT8b",
  "key6": "4auz2NdbGgVjHvvUH4NPv4fxcaR2kJoL1JP74EDMXF3An6uBDGE73gEE3PtwK1GyxrPugc8VpZ85AwEHJjUrMqUL",
  "key7": "4snKmtdpiiz1ophS57a466p3rdHo5kCaQ4r265EDvjvAKMaf68HyWBoHu7WwutR5oSYsSiPopB9M6pek3eSLMtoB",
  "key8": "zFQyXvmi5gjkkbnqgKjrsnhXthskYHVowzBmppH7w29fLYvQySjxVuVNsTPpfsMEawxTzCh5ZEWtRJ9SgnNy84D",
  "key9": "2PfHD3ayURE2HyyVMvhhNoyKfBroJDLZMweytqU8T2MEqEJAxDf82xhrpCNHjnPJsnbuVxEVjCp6zzXeZDGAzRi1",
  "key10": "3taLA2mPz6oC2iF5NkXXr2TdQLRs4YRKfJ25W2G71pSrCKjhUsZmqZyoHefnuwC4jG76Z3eqDe5Wbuhwu4A72LQp",
  "key11": "53PkyNkCn3Bj2mQTsUPySoTisrUCe3ZDnvxJbw3s1PYzeKB1pGceeG8gcmzNiqHzCe7JzELGdcdYc7JHhbRkCcUq",
  "key12": "3V4SYksP3jX9sLrgtwEqZX3uSG7rc9CFAuuw5tB1P1JUJD2rVFAHAuubnUfsULN2JsUqzwoDCtoYtTg72zewc43o",
  "key13": "5DAhMposcTaiLq7zD4KUCgX3uv6KtFhbg7GKroG3GtmPpmxqgySpPGX5AZUULgHUZyx4mA4CwSRphf4w4wwCSJBf",
  "key14": "4QK8XGDAuDXsvpd2NxBPQe98Hj5PoCGNwiGwqwksDeRC7xx4AedsuCULa4iLxAVsAwvvz6ZvftUrQAYJvHFuhCRR",
  "key15": "2kRDY58Rs6967a6L3S9s5AUYYGXTGLd4Lbx3XLbdu6jss9mYcXQiovFJeeVxi9YfwXS7mzZA7y34BUjDxB85SFmo",
  "key16": "2EFczHqEcTqZHqzYvK6hvFAWviG9Cr32Tdyxmt3om5Ts4JfTxbyyaYmbC81bKLs9Pm4ec7QWSj4RoDiQWBfnnw96",
  "key17": "GgKB4TM6ZSAdT6Y2BhtMQnThSwM69faHddLp55JpYKf4neCPojy4aXmVgBGJPi274pHfXDVXmnYikJfePHuh69n",
  "key18": "49m8FQzqKnjE2VMmpwFJ6Qncg115fPHMT527hC6SmwAL99RPjBL9xcSpMnhTEQLCu6jfRUdNrh2AeqRTULubp5Nc",
  "key19": "4TWZuwN2pwsK5gCQcoj1LXMua4gMwii2phoyny4g4wv6gC3YtwiEcnwU7ieQwKeAH7DtnHJp7M2bpWVyZ3NdjwFX",
  "key20": "4XuJJJLAZXoDxitxm6r7QmzfdAf3naecHnWvm5YagKPabmzTC78h9i213FJhfa9wYFGq6KZpavVCxMnN6YNbNQay",
  "key21": "2by15d3Q7tQAyoxE8wJsQ8YGKnsFmbsZATS22wGCRnX84hddeJnanRMZPykU97UHGPESHvJagMm5JubGG9PMZACd",
  "key22": "3i4HzBF9XK8MiEFCEofZWvNn6dn1CtUbfbyr6kRGTAkaRwQ6MFbq5y27rgL8fkTWpVW7HoKnJ4uueRkZV4P49u4s",
  "key23": "4xiWG6VSSeo4yinRcwXwnRQP3FBGanszgximM96HAwGsP6WLm5hNi9LSooyuCN81hi7uaxmdvxHYQYXsnEBZZUx",
  "key24": "5Jnpk3hBaxtNgyf4QjB81pNxoFdfcUv3xMZcobxcLwaUQgPqix1iAr2sdfPWR5TFiodVJvWuM42dEjeUFf4HwXDt",
  "key25": "4CNgr37KUk2ESno1Z7K3XpvWLdmUiigxfXWzN6zUnWt2jXnCemc45PwxCnBFUQZAaVR6ceRqB3Cfg4ZrrBFs47eq",
  "key26": "5HtMypVGRKrCXd7fUgexZqyPUaUbtVhacZ82yZsPKu4TAzZ4sFk2aSLaAgQ1yE2yCkufg9TTrY1A8AqUpAt6v15x",
  "key27": "4wQiT2QmEMyZcKZ9cbGeNN4R7fGMeay4DPtAGHZao9fVbB9xyze5WSPSwmjmyzyRtP7tidgiWyNBPS6Yw1zxh4Ar",
  "key28": "2jNWSNwZM6DHuxep5n7uyAyEFjJiyVfWZTjbkCSsgEBMx21TdJxozwNmyUewM3fy3MR9R2wPnitQtLCDD7Y38S6L",
  "key29": "2mr7zpoV6GmenoeoFwjkoV1DghxJwqDuCXJGdCnzTFcHpiJ4xpC8RFiew4Ggo41zSiWYdHweyCi7ZYLEbpQukQss",
  "key30": "66q3SZwggUkGpfTZS3hHA6TFBEePisKnPLtwYD6JmLV3y8VDDepu1KeCJ5fdjQust1DrGFnvBvaU13y8um9SbStC",
  "key31": "5LqBRWtAy3gF2e9gxPFCMJRxVWNFzvJD2jeBjFmgq6KRE8TBanTSV5mXEKHopnet9f3c4XwES3gWzodBPmwJhG7A",
  "key32": "4Y53dC8rLyBWeCXAHhQXj2JoPQt52BKkkaVawDn9zE8mbejBr3eXMVxoMBAm92PwqgbpP9DRksBR6epnP7j5fsJQ",
  "key33": "2aPUfZGkPj4eMrnFWrQeY2KN5GsAnLwLdjpmeJWd1JRZWvYJXWsduHMyNxbCjLcmDJU8J6db265VvJtXnpANn94x",
  "key34": "K8u9vjLLAdPwwbMJLU2wvRMNommaye1tR5AgYT5Fhj8gQcP9f9NSuydB6RyLskHP6GZmUEJ3t9cgnrfkHKyEP7b",
  "key35": "3MwLQoAfTqV3jYhTT77mVq7x7RW6owrmthZadJ5BPMRcRjnvBKSG3WhmZ2wZqEAs9w1PP7A33budmGhUtFUWY7FQ",
  "key36": "5Lfp3JeTFV6y3pGhLrhpXRUE3MgdLQTR2YwffWKFqkij3Ym1Pm3Eok2qUk425aurZ6FVGQTHAwPk9C6ivNwTn2nr",
  "key37": "4WDdgoL4FwpUh6AZAsmwmAbGwFhxWZNfHDzVbcr3G8AAUKwa4HoSF4Lu29ttCGsLovmW3M1tFmmrZydW3xWebnb4",
  "key38": "2ZF8jbTYzpVzQ9ZcuekpYfM1Ve5K5dqEqYhDwACBiDesMdFtjtYBJGNHD5u8UpwLj98nTB42GQ7hNLvzYWSaTyB",
  "key39": "66VrYpqbhjyvtoVXwwx5VXcGi1dqJeLC1dncQdJXs71fNb1Dxq9zHHVeYA1KrLcR8PgDqDDiUpowY4U96kJjB2mB"
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
