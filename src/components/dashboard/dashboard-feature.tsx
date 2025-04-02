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
    "4uwUpFTkRDemqVmtiuF88DpQMeLZF69WJR6pph5RqDoUHAgz746RfRjWYNHMA2s9HWzgz7R3FdJDNE3UMts9YWgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVNf6F6jZYCJpMSTnL2dWQrDfHadZERwsw8mmXRirNDdLTJrmS1rUSHCRoFR8RG1fwMgB6RW3dqR9Qp5iXJMHZp",
  "key1": "2wxt9Am6hidqUQS2Wes3QjMyqzvA6Nm8z7e6RmFizS3LL8gC5sXCGgFvuKeujDKZt9CM9MpeBcCjN9ouMLY9So7h",
  "key2": "3f42MfD2F4xajwMGe9bNDtdriA5turRPmTp89LGiM3uGmmbNZVeZWQeMPHECKuKXSoQYPTqH4GJA34RuEE1mTNuC",
  "key3": "5iheFrmsSPspqoN3nVYBihcVc774UCh8KhqCKXXFzo2a3SRhx7cR8s9oTDxXkbZfnvHWQ6Yr1psTWN3hBr7ZVdDK",
  "key4": "4aoBv8yXDdZPicwk1CBpa3inrYQUAuMhfLPihMo7ZF7VvvJi5sB8vcvPAZWPLRNPBAKFLxAw1sJJayLoraySERwS",
  "key5": "Sny5unWXEtw5ubMsw2gYJsT9JH9G47dNMPwndAapA5ZxBkU7v3ikGdYK33Q1G2GnpMmwRAREPfmBq8HZHbfpxwH",
  "key6": "4UxUiaAh5pRje48Xp1GVbiXkcTBUiPcbnTF2VqXMYGYeDNJS4ZDDv9fmqHDaB36jErWYcM229uEjhBYCepFzL4Pn",
  "key7": "2NGV6ZwCzxEBuxQAd7fFdS9E6m6AswAkD2k4qhxyesv42osvGGhtFJgPadSME246HeMYoZicevzxieeqAm96svdq",
  "key8": "4ZhSwhv9QbY2kfsK4wGugUu4gCyoHV677JWBsNykkHmw1euVohm8tPhzPmsSU5majgEHR8FiXfxrDZaHPmw9wZXM",
  "key9": "w6j4cHcfohPFqWxGd8w9PNbiDfXPd9nq8dFnSj6ZdtJiU4jawYBDQpdeHkh4f8bpNTZah259EpsMeAvQWwVVKtJ",
  "key10": "45gFGXNm8J4RiLpa1h51fuGApDc35SLzLZsrP5rr9xy52wgxLaozTJP56ApXwKz3bqJBUFnYJd3BBiTgneopaGkM",
  "key11": "59ZqQTmRPH8GoMekHeMzF62HCqXTHvvahC7vGvxjNPssu42G5mwUQmbX8vA2suCQJJaSTqqXL6WBavZLgm9HZbsY",
  "key12": "22Mgy3k7sVLLMSHFL7qHGs83Ho8oepiZLdpou8VAZdztoiB59hoWc3CWYNFB8LzCFJYxm2FJg81s3m6icSbCXPPR",
  "key13": "3MJtQNwLF5PUSjyEJAafiNNFwVjmpioTPMJ17dEJddF29f6N4CZXFtfL9VRaNHqBpM4twifSCTBnUg7TdoVo5ipA",
  "key14": "5GN2Lyc2K5UgmAZuif2R5mCXF6gAdVsCF8SAtCL1moZnKvg7XG7TtMTR8cqo1hr97V4YjXSjTV2Lca3XfG4RjTMW",
  "key15": "5q3NjCUv8AtkixR4QjREaJnp2fszgN4USBUVPYnxJATjvEnsi5kcwG45m9KNNni4oKJQ3N8bu9GiZ4urYVWHpZjk",
  "key16": "iTWjS6ndszLDqhk6YLcDTspb74DENRwWa6VSAuypT4Mq7f6xQRAFv6DgcAbWRbJ159VcAWVhmw9AAfsj7QrZjZ3",
  "key17": "tYfecd11x828UruJDjk9eJMt4xAX6TzA8myaGzm42m2WYzdCo9x9dt8yqKBtMcBJrnNRDuso9Uefhk7G3PB3uAD",
  "key18": "2BfttCqMokqSSmqNFqV2BgEhswZvM9VAADfQHUjdjguvN19N8gKq4npMMAVhUvnprD7Pxzr7LYBwXXNaP28FXtoD",
  "key19": "3uq1PG4mAsNrTA6YEnuN2Y9hxu5Rb3SCcLnR8Rh7WAjqNATNjpKMakpiP25WcsU31XtG9d7dHPCwR4juDvh5uE3Y",
  "key20": "5HDMKqqtJ4b1ik8sNfZjpvyJgJr7s6rUjccHezALidPYXZYVaWXpoNh37d325jUNDvecPg5nGq1rpUHJiqoSYTGr",
  "key21": "5BAaFEXQwqphnjhyrMUCsUYjURE7GheEm6AEALTH8MxhZtYtcSjLuVNQAeKHt99842bMC4EREJN1i5RMf6mp5yxb",
  "key22": "46Bw6b9xoZGxZapLGB7iZrV6Hgz4LUfnnTZWF7zN5rR2sKkF6EhrhEKaPHXR7EqiWqvuXmTgnFiiR1PkE29ghqfQ",
  "key23": "226BC41YVLwqXcrB6nN4SUiF6ZPTry2WKV6beCkgmAMJ3iGcXSJvy4kP3RtNnx4KF1SxTLXJu7RmHPZNyGNri7Ps",
  "key24": "sCefXkS7cVhd9EbxqnBxQoqh1mFusge1iyD5v1J3KTsJjHmot8nHzrQkoznLrAsNWn5myNeRHpUsiAnrvvkMGVB",
  "key25": "3ZZKrhiMQp3Da1w5ftUxPyfDWFEgiFB7JhvxhBHKw63t9DYWYhF4jrbtsWT8PiFQeKA9ToErafroQUHuRj3vFyvw",
  "key26": "jiDuHk1aFDkNr88dLJBGQUgzWB3N7D67FKJbLaeHHeJka1zc6qjoVBUAxAZDngFHSz382JsXbkt1ZMiRrSWpxjx",
  "key27": "4vjVMQtA9WoGTf7jog7xuKw8Q8xQF1StQNALTkZh1ULNgBCF2RzjkfsKnNBmBKrTSfxyMYF2iPwsKUF8TwZ7a38j",
  "key28": "31kAmULufAJ4AoVp7kRwds7f71VPLv1eLUKfqs4zrc4chJY2qhCf97erJDdvnBjwaVShC8t2zWS1TLGyJFECiUWx",
  "key29": "Q35pWoj3maVjTcuinpQPEdwu53x9WGPp3zFbAsGZ49FWypiD9JFqqtu6x1VqBsFjrWPLAhTNd2cDN9ZdZCQ7F8S",
  "key30": "4efNWB7JJSKDN7RVhwjPUMyWxeEa9qv3VgddZgkHBUHahd1cxtg8qA2ctbrow3QAjrMP9y4EdJBz6vq43xXiZD6d",
  "key31": "2yfJ2y89NP6C5Ckon7KHxv3kg56E6tPkvny9frL458Xwf2VGEg4CZedLju9nzB31eeW2698UMBtHhTmfMohqx7Wk",
  "key32": "3cAEgnPsKCGrtp99PovWPJK6nszyJhaCLeMUY83dnXQQCssMPg81JrKRJ7g9dRsb9puNZXzpTD5TS89J2HszZZyH",
  "key33": "5vCvMaTG9MRFEwHp7H5KFNzbxKzaSWdRCge54Tu81eeradkKtTrGYmcfPnLn18HHb8JWE3zmCvuebQEz4Q8yLjeU",
  "key34": "2Btvj72K9SX4BTsEnZAkXSQLr2tGeyYxz6EP9AAJoNZBDvmWYysQRk6iKegyqDQNGRGDyFEiUqpzRDPTehfiCrTV",
  "key35": "58wMeafExXJ544ZWUbrLtZUFatD8EeqJyNerC7nqzzwCQ2haXVmFtSfhkxhK9xphBT2Uin6eiPcg7dwsuASauCfY",
  "key36": "3YXeEWecEFRwdeTPFf6oGRfhEVTYWjxLDF75yJdBiz8r9FwUysfpnHXDkSdTEYefZ7ZgH9NSFS1grhR7GBucPLH6",
  "key37": "4nnknksA8nGTy3ABMmGgHeLAgrRuVzLyaE9wNXrT5JA4bpvwrLhwuHtXPNHxx823gSjnUoaaFcsBRgHDdhxU5eBm",
  "key38": "378dFUad1H5oEa3mbwBJkmNMPH9ahcDwpwA8eGqLJg6dn8f4kuQTJVHFjCq9M2FUsVTJfi7YSgjZ5uUnctBJZEjd",
  "key39": "rUe7hcXjfywe18n7Y3dnK9Q7DFxnnu5gPpJ6JRXJ1S6JEacqnPCpxFPoYGs3Jvnsud7cgzD36Ss8wkPQTcJiYkC"
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
