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
    "2qStSBwmAmghGyD1SFHMPJcnXcNeMg1Yo6WBeFEZNYxdghTtmtb7cMqPBn3EfnadVnQz2ybErgh7YXVGgQD6jcjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmWRrDPXaD2oVFUmoaDy1gYyqP2x6KPUTSyosGLSk4xwahY5VHRehjeSvpLk4zbW9p7SmwvDLd7w6u8duhCFe4n",
  "key1": "xMzhCaMwkf741QWVFqpTY53tD8r5YLCEzkhSkdqzdvZP6BzS5kFjJ9TNu6FyKPK1BjAkwzzeTqnXx3kMWrrVucT",
  "key2": "YtbNAunryU2GoK7cXj48bnDuGTiZY9qTEuPfsuq7gstHEhUMcF75T2uUVvGSm1dK3mKnz1qsWxnMoLGHCq82MTV",
  "key3": "2BxJ3k3whpdtAL3P1P2xwQLs8oq3yx6xzqSYUSstDXtDZw4nvPejfMZwrRqLkevaWoibqrnH3o7VV2v2KNbtqpEp",
  "key4": "EGoCPX5auaJjkJzjxJk2WYUTPm6TveDTqDyrHKv5DrU4YT8UGGXqpHTtnnv36eXabZM1qcrZUM9thKndUwu5nrC",
  "key5": "3u1aH6EJJEgHXSyEgXRCZoCpR9YvDvPDPfM82MPLXrXctrMk7nTmwzq5g2evk8LsgU1bvLmLGxxfZbpigoRS6YVJ",
  "key6": "oLejp73tYTypMSN7rxGbkGCKrBPy8xadUVkVsYrieQ5NWNPt7JAPgyi1ujDcFdZbZxpZwZ4NUZazdyRckwno44z",
  "key7": "2QxP6pxKjhKB36oDVXgNkiz6NHF1Z2ewj9sJeWhpcD98WBC2aoTaw8A1ATUyNjYC8LS7KDpfZdPQ7WqhfokSBjjJ",
  "key8": "e8XQ7hDK6HNRtpLvejVsL1F3dQmDa3UafRTVwcSUJ6L9JYebRaM83u9JmQN8PMiKx3hsfBcgCM6J2ZxVXr4zQZR",
  "key9": "23vipy5ege2EBXviRWN1Gn6NNdSXaSLkqTFiwQvdhaUKt6rTpnniFwwLjAGhHepgozS45Q3r8S5kuroRKHaJZZdR",
  "key10": "2Uh9cs1QkYXe4eTWSQmEjswpKie8k9CLhiHZzsfuQAxehk3NvQf3NKkmCDsMEcBJvtuaEerQmxpoe37uaBthHazn",
  "key11": "34McCya7fwjijoR3C7WTKwUGxW9DToiv7YA72fALCJqHro2s2ncFyiZ8u5cXfwvdzuyZnTdkm2vty6g2r2yW4Dve",
  "key12": "4Bb4LAzRtNPmpf6B2VZnAgRDVjQ57bpfcXDbELjCVrYLPYgYUyDdD994xSAk7t9P6jVdpsn7cskTeMazkogPDyEX",
  "key13": "55kQXxwcPdcMp71ZpVUEujZdohQwRfCparJ8W5jRb5Vpdgs39XTKXVNLFCmfTEoKCw992xZQXfSPDD74WwJf1DwB",
  "key14": "5U4e9ch8hSKHMdfsLp6iNQzjkWyvd9uq2WgxCB548PEdvVUTdU2KfTBnKJs6BmRfsUpznBM24vtzGckYveWeeJ2W",
  "key15": "3BTwgoi3azV4Kx8BtGkBwb6zCDmnjKBNgdrwxyXycxyiC3eV1vn3XZ7H88BLZU8fzhNPiKYqwyWzTGB6Vv5ysk3g",
  "key16": "39VBcVhKSXjr3G9D1QjQF9kyCSDQsoWpq1ANm4mPcchv1roc5GDRsmGSMaBcHfUQ7KbR54MVrzUxkC27AtpbtnWS",
  "key17": "JNUw6e9EWYhzvv2zZ14eMJjAE5ueD6om4TYrTmWJH9Fjd211qQ6HQoSHPEwnmQFMmMG1wtiT9ZG9VwU5eAcVcT5",
  "key18": "21CQcdPw3K2x8YmchF9ZdEFkScPyYR7p2kxGGgEPArMyiiDuTiZhLJMeWAUfjUo3tJpEmFwo5X987LCzkaN22Zhr",
  "key19": "bG2JDooDFtUw1yURvb8HspPjeSsh6mDzwc7dGSFF5xFUUdzAP492Fq4GxJTGn1NbVYPUbKKvuEQS35m964HygAP",
  "key20": "4BEjrKvRLJ2UhtUm6Hz79bRvzujDeJHHQ1JbvVD8HT4AWUC9FZXda4ZTTm6BeqkBQpKQaAtBjoAzBNsLakntvncw",
  "key21": "4LLPtcqCLYM49CFGyzCkSGTn8FjcUvVxz1paAts4dioViEYZKHa9v1nUfog2cebZYE2bCxX26kfrDSobtcPoEiZA",
  "key22": "2yw3NFuCvSCXudjHmb4ME2nP4Fv6CZLMVcaGRJFqdqfKoqwY9EXknfaeCRHLx1LTELGx6p4ps9GVbSqsbAcnA9Px",
  "key23": "zjCgSY6YpFA5urH7d3UZaeNV4g618J6EyZT8Tmy4wqVtxKijfDsejV654iUPsAdiqiQEDLeCwuYzq4W6ZEBAgyx",
  "key24": "3p7dZuTxEhWye4eYuZWmasjA2YroaWSBd8qTKpJhqTRLJgrhiphb569hHNFBq1p9fy72E2xvKX4CoZ6RAmjkw3e2",
  "key25": "2MS9WZ1fyTaaALfArm9mXiWzuoWskudQyLhSS5k1fQQGwAR5TMWUU6WhsX1rSa495Bgf98ikBzajLyWrBqZb4GcG",
  "key26": "4kpTqWAM57utBzpRCQC8a5QAM9FeeWLN1UN48tG5ZinVAGzyP5yZNUnsVSneaq7e6mRhVTKaRrHezf7khKAKicEk",
  "key27": "2azV2bYWqs57DSmceXW8f46c7t8sNZXM65ZPxtuTT1iaF4uLc8BS1cPrCrYSbphRkqjhVwCdfcohWBxEEK9o11Qy",
  "key28": "3vBMrjoFJvNHwF3Lj8CDyvAWrjF7nrn9zs651M49mLx1mjAnEDcPWJaWEWPu6bznBPZzHBzURTvqz5MMyCwuSnfg",
  "key29": "nYTDKvW8p3jG1ERGA458hv8j9gtS6Bg3dYypJtRfYX9kqvub8NKedr1USAfrpiaJgKK9Jk34ebn6nbyaRjprDm1",
  "key30": "28XQ7iBb1E2pBYvBvEu8imSoQghGFWoxA1VGZF3DQkqC75Q4swe558Pxhg9db322twseF9qXsa4sdLVSjezRGJgp",
  "key31": "36fNmGWdD5b4RZGfswT7bg7HTrmwTtfG5wnYq64sUFCPFqZPsrnRCSCPjrbgUNLYp4rscKdKxyr8WPui9t1pg8nr",
  "key32": "QCvz7RN915947Ebff6mEAChFpUJn1iYujaWX4djt6gA6z5UqpRkYoxmaXjzCZ7PdeX7fyHFg88v8prkcMrkrqQ6",
  "key33": "2kuWMWXXwbKNU5KFH5zTqSwSpqTahBPBTEDaG9pYguLYQiGkpfNuskvjZQ5F1VH13uiTUrjBNdAZF5W5MNDzVn18",
  "key34": "4BUyveF6EtD9LBNNsLzVR8RTqjYtuU1MUtU4SGYcKCL7zeq8cRJct7N1Vsq3h3vDosrWB5nnPuSYzgPEwdrTbcQP",
  "key35": "5sECedTB7ZVCmtwWWtL2PVqeRQYHMWRNsNNG7LRVzMnXkRq2pTat4faZCeWQxUH4oZ1X3yjpUSpU8kWXDwZc5aUV",
  "key36": "496cBxxs27B1W3ykv9nqU4JqLzkJskFxEcpEEn234sxw7EfoNZrwYxsc6sBaGcGZezMN9bUPWhshyqVZ65C5RNB9",
  "key37": "3cPUmYmicQVAQjcSbAfg8cW3G3EfVWBW5egZ4seNNuXRL1wkM9ANfVm2jhPE598JVc3B1gdHKfEHX1xaYcKGy2Ak",
  "key38": "4XZvZ7FwJ4XxTEp5xsGhyveJ5ZCHZw9Adn2xuwP44jWr5asLeAZV8js1ArxiKrRCwuFAbPm53egnzmikJekd8EcM",
  "key39": "3GfA7UcwdE114Ue7oJn4H1ubzX6NYuouyfv9KmLqCuVN1k9QSFEhUp8CdgdVEdMHzTnkApqBQk7t5GfxfcRE9sKL",
  "key40": "5b3N7n8FqByvr4GaCVFJ8Duerh9KRzonKGsx8QhNehK7YJ5X9PR9igq7qMgkxJBwKUXQFXXGMrFUt9K4xyvkaGkG",
  "key41": "4DK6c2agRQtv7Wh53PJXmqgdP9tSWQ7AvCF584btdt5WzWgmj8MKXav8DVf8XEiQMziKLcgvD8SPkLozR2o32T9o",
  "key42": "5p95xBKCr2vdDi1724GAU1cpaB7VyACrLtMhcH7GEzw2qwRnJhAqukiXKvWwGuqj3TsoVfko8J63H9gzym5Lsieh",
  "key43": "4CBNJNKowejBcymt5StXSCRr4sRf3TJCgpxJe591FQTFcffgK6hTf3CGtgwKVQgn5rhw1VBYfvyiXyAHG9zv27Mu",
  "key44": "3A9JiDF23v4LYv96NoFXX7JYDZpJhXLeyrSBFZz4FfCCyAFF3xH6r3KR9rbqR1weNNZrdBm1NchgrJms9L4rjhxV",
  "key45": "66zYwSg2eQNovce5JctY252J1DehbLWMxVxjohqosyCshDuPCrVfE6aeELAXmwhpyHK9EUw7e5gEd4MVXfkNxxz2",
  "key46": "3ZgV3cxvNu5iEnv49WLeR2RZ48YMwzjEr5QNkLfhYK41m9acRU91TNMZHw46ixeG94Uzko2pjcFgBoY5zqmD5NTU"
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
