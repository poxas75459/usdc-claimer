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
    "5sRpTTtVRqrZJnmC83MbDpZuSL8tWeYRa9fViZN59KqDnk8sc4odP8cvbHb6TRpGkZ8uakT76pvcV5MP47Z3u7QY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDQG7mW7cy3a8P7JJLnvQoWwZyE363m2ZEMaABrWokVFAebLK1HQ3jSQEu98BejQPm4MspNWfL84B2M7gfrSyav",
  "key1": "3NFNm4VVDWLABQMFfTvQbrMpKYMfNhX28JZkp6wnjfGLmmX9SAb8DCEPfdM8VgxMWSv27sTqvVevyNHDVBcX6SUi",
  "key2": "5fCJ4FpnKvDPKUnsFSuprGD1zjxRq9yp4EAWZwYbvHw7sBjKoBL9HD9svu4YdHgyBQ3kptcnVa1ZnKmT5z1u1w6e",
  "key3": "4Tz3S9ZivY7dUcusf6gnb5F1Bpb2eMU95uttXbnJsLdaybsr2CqcKKfw7XcoEEwtJ4YgLMonBrETqJ4TT6HZX8ZC",
  "key4": "5ZvzJ16THna6n57nmVsJBQGviHxUGYkfkBt55B5QbcS8fTKFPrsc1cePqG67VjwLGBnaHbmj9Ls3qnRjDMJn5Row",
  "key5": "4XgF97TJB65CtioDFVSDHCoUerV6EsqZdtLqiXkK398dvKVCr7NdSeXob5wygeuCb2YZQMCnzX7xz4Rsy6NSKXre",
  "key6": "2MN2d5AZMXwgXd4gA2Wtsp7htjBJ6TBkV4aMuoBd7dQkU32uP8qCvhBXj19RXGtSiERoN2nw7FFbUcqm5gRgF2D5",
  "key7": "47WD5xcPjB3V4bJ2iS8EiKAcZTEbEdVsEbYjuzpcPmSisP1BwcSQRnbznf4SQMYZVw1jV4FcbzKjbyCNgRmMQQts",
  "key8": "45aT1ZVBTRUZJsQkdMZ7GuRjTTjWathWDqsKWDG2sp2ySpZehUgNzEYhmM2r1BJpRkJnZHoUH124pyhsvVB9gPC8",
  "key9": "xN79xUMTJpThCUCTZ5Vk4Tqx3GfmAezee7pFk1jEgP3quwALVzN76rMaQnbhanfMYGMFu9MfCordphaxT6vwEtU",
  "key10": "4eZpUonPdJ6ESjnEDiRaxHe3cU5Kn35cNGJf8vTuwkwvaTahEBUGhxqQTMfWEEB6CNgayEpv6u1RRiEHxubxrmkf",
  "key11": "28oe91jDGXgVP9JGMG1bUJ2tSxqfduPrm9DNG4AuittT4qxy3BK5nQ4y3NPvZVBthF1nUXKBnfDwhEztUxKX4mxV",
  "key12": "pFdAbwvSfQ2449czMmLRLmUwFNiNM2qx8rgfLZk3jcMCxT58dGW8TmHSWouNgEtv96D8aBU2VBHpkzGBNeekfwu",
  "key13": "3pXZAKyLP2v97gGYkRv5xr3SVebUHWhu8tSkYEiU271ZkvZXnCLFeA8dwPYYZ6vn5NEYxmtj8gsexU8JZagHjMCX",
  "key14": "rE67WMbBSavNJdeR6jTw6UH2WUC3qMmBQdKVA9v4PLHsfnCdCM2uvvtT49Ttt2XTZ1EMpR7N2o7hDh1ZTJQcukX",
  "key15": "2bB6ABtDN3BVa4QqQrVSyt3QPuKWNX8vfaZoCY5gbv1nApEZKkJqmd9uWnccHaMv6myA6o4sAKdJ3pQ71haFYZ9",
  "key16": "4C1Wv6WNGnhSAHq4THFfjixi6ZysACnJr8q2Poy7nMQGhZJZtQemugvnyVisCHHwkCziXu2bG4KZN6aPD9SRJQVe",
  "key17": "3Cac3Y78i4aDd152Xqjq3UEzSxPQjk1kc2PLHPRPP65RVWjRVcPHhaHeavjB6xrMb45pAyChPiHJj7UZ8AQwZz55",
  "key18": "5sJiTSAAPbQDdcttQdPDVNR5EUe9fQCoZft7JdjVn1khjDnPqQNJKRq8JxdJs6WV3QDmqzLmAbnev1yaE6T36yAB",
  "key19": "5mJVLK3M42RLEmViSeKa5AcVhSJuyvZFLMv77E7FyXF7APXGM89Cc1Gx36oXunvdpNuWTv6Wmn5roH8CBqLk3uTr",
  "key20": "Em6XbSDEzrnbUKZGxmZvRfT5FTSHNBrYNuhJhYHM27MgxKtiGEfSumXhmGvfhvhUHkQgbR3K9Aj4z9kjWrH4ecQ",
  "key21": "3ixPWS7zw1x5rVoAbeDbreXupeXbVFotibAbVFkDMNQLvL7tQudVNg8KRuBFVXa1mNfzFPkor1cCcLvrHHXEcGov",
  "key22": "5uXmxJHYdk9vZtFWjLdmvVCrNfWgs6Brh83rf1trhBw8L3ZAqNVwNBXqTJ6Bn9q4AdgKo1BujBaHa3TKB7LAiyo2",
  "key23": "2kc1sBssdCmgEqj4MZoJAd3Y1fpktqAFG3jdsu7iBDd59xueBDcq4b7tujXFqsyWrUeNBzJaSFhiNnerfekByXdF",
  "key24": "5ywGugwUBRZwLys8HeUqW3oM4gxYRv8QsTjqbXh9V7CXdoBqtyW9bnNPh5i5wyMCnRcKUoA9twfUxXELDZmpA2LF",
  "key25": "o9Qm6uL6h4cSonVGpMGTLNWxmsu1xbZsxLYDtbjdEYzot1XDbm3ZpiTLagQ1FhBRXc25orsSqfY9yJ9PjDc5zT5",
  "key26": "45pKj6W3oTRREBnjUcTdLy8z5wddaf412TQ36eM6xeYbCqjrva5hJdEg7Qccu8pcz4AuCU4iKMd8oA2w4XUviupw",
  "key27": "51wjUzYz3Ss5t56pWPT7cZzLTzdDtVXNGYBa7dRigdirAptsLN1zZLdrbXaFv7kCk6AoHTM3141KigZotqb6chHs",
  "key28": "5BHXv57XbXRgxnrDGjv8iGVKsBTWDmPJjssG7ScSCkdLoDWV1RBzLCQTqGHCggu5kCWTzTFT2cKWtX9ecY1SpzSV",
  "key29": "2ud3XkPeSxXo48mphQKqZqjpySppYz7DcgNHr9TS19UE646JTCA2StgBPTdr9SS7gKE3Jt1SiZmqCqTEPn7WVa3V",
  "key30": "3Hh5BVSLPQLE4XvA8ppJy1BiGjPMNribZAW1YfeL4YMJftqgtnDWrzDndEQJZMHvH6BvPGmW5YpaXzGR8nJBBJEd",
  "key31": "4cnZLTT6krnriZrT4iBJ1B96Tih6ffahSpCxfvVqAJ18KMsmDcnPbgP7JLbG5Mb5fP1oiLJzdR44K6MfCSNfYNG1",
  "key32": "4otoAkLbmecyXfUXQ6hiV2ovEPTwaAX2uvZEBiJqCoCfw4VEpqt3MY1QTWQ13HX1weCPNZKE2GwEGX5LAwuWHpr5",
  "key33": "5EZv6RYLtAEF4P53uiitk9rB9NurQNvEakVp6kWj4ATkuRhCZrfDNta8SmPpQ4UcVippZrRquXxwyfXD74QX1RY6",
  "key34": "4JWpHmfRLZeuYkBvcXM1zBdS9P11vE2DSLH7dYiyDgkSyvtLW13YfpWmg62JqS2r28Vq4LVPrDPsMBokBxTkSyXM",
  "key35": "63BkrXg2UruBPFtZMD9Nr85C9k6LmtmUev5Zurs9erkwth2CYTnNbQJ7v98nuNjZC51HLro5oepSSwRSJ7RkzpFE",
  "key36": "2yZoUwdG6PxKLp37pwy4AqXX4BQ4dm3Nqnzh8ZJU27yWHsozRzWUTMrYKusRpX6pDLFqQYVQupN93uJHKGaMveqv",
  "key37": "dwQ5tk3g9UAZqGh985WqUr8XMbvYMyk7a55g44c1b5hBFgvihvWFR6qSwvR12n5uChBnp8B4mpwhkWYa5f44dgR",
  "key38": "2oiSaP1YbWgaJkEz47K6yf51BBhyct4wPQBE2nZ2869B1jsr5sWc7GRiJRmRBWJ6nJpiXqfYJCbXgYe166enUq9G"
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
