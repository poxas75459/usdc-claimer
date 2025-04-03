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
    "66j8XckMV463naHpuJmdNVZaoScX7rP1QC4AM25kLNV1VggM6BixwZUyd83DtctBP1sNrbcqjpPWcgfqqRRSHskY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhsDSxfvu5yXSA6eV8vdKR5USRCYMEGervepQQBMBKK7imgVhtNFLMoP2ugYE4Yc2Vj1pWoZwmTJKUT1xBDdjKU",
  "key1": "63BNMWuWd5JkEGc83ziAohLjEk63ykHQTctQS16WfXw2CQokoTUvEMVTrS9qV1XGTGtj69nKZUQQqyy5enewky4B",
  "key2": "3nWhkKPhixoQmVTmPRd9Yj19GvWZEBNGvWymFFZkwpquB5yp4XADquWNncyVqdXdzXuHjYR6xzgCim6oYwnsH54H",
  "key3": "2BaQKB4C87vWhKUbPgHNcSW5c7nAYHUUuz8oEHz8K8b1LFyUStSy7U4YKnmf2xSz1zLE94bff2G5haRGKkKmAT8W",
  "key4": "4UkwF2xnvegDPbjcTdKAHuDR3EzhMugkVvEkWHrFW5882GU2ZN5vjMe65N555weXaSXHFLef9vh42phBkfrB1YbR",
  "key5": "2p7w2gcn4BPLLgpkXa7V3mtdeQM8NkAoph1bqauUfMTTwJXsdohNNdZaDHKVrRr29i6vkHJzAocFpEkiKxWzuWWk",
  "key6": "1bLYjt7DadAofY4bffMyVZ4xtgqGXSqXQksGifgf6CdQYse4L1Wc3puypRCTZGKCdV7EzJE6UshXZtehowWCtaM",
  "key7": "5FfPPytwtQjVqe9CkxmAWhMdVYKZ8M1HjXkniVoi5rDgtQncSxgjE55wY1pvSPHTmJRwwZiiEEknvG1Mcxp538y9",
  "key8": "58U1ymJBkpymNNSeKvMf5fjvN8p27Lf2uXkn673jnZPpfosKersLnTHpNmWYmS6QZ9kmKGKddi8ZWz9ATjcQEGoq",
  "key9": "3sDqzQaNrJJFYqCXrVerV7J7z5xvrV6s3Dfdh6RLGxHwxv6N9bdprELvLmVCGVcPJBSNwYdudfeZ3JKrv5KA8wXJ",
  "key10": "2mfzE6o8AGhNo5bH3HP5WZfDrChQkACcjmEhj5e9H6AzvBCx231cC4MHMivpbQVSd4KZMpLCngYdEfamWztiycow",
  "key11": "5JJCN12Fu8g5kMn4dsusiNgvfei26MLf5TTH43ML7pxEkYjnNHS1hKP9X3WPGtefA21jP8kUZLBoHhWJTBpPXmg3",
  "key12": "qrXd8fAkzR6Uqv8M64hVFZjnRz7bbzf7cEaAd5WasMRA9w97zmbr36M4WEUKk2yvE9aoj5HJo2spWj8Yju3HmLs",
  "key13": "4asMknNsGvukegNcG7pA3mqnDZJEkjkXJF2NUKkyMhTiawa6JHLjpWXnX7CCHKpoZbXbG68zxLbDiamZAYEwu5W1",
  "key14": "44bTd6khp3d2W9YSNy7skAnTm9686XMunf14d4Y9PkbyXYWrb8hYAyk3TQnYEswYtrCfPiGawW61nZ8EoGc3QFe7",
  "key15": "3yxrxTWaB7rzQEAYfw1h6HbtRsTNawWyDR7J5yg7kXWesEUpeB74uJF9ruUXXhXb5fCAYZtadqDDuxRLPcoHUyev",
  "key16": "26QgFVzXn1QZKmWDxmGELMogD51NAcrxV9cp6LieAsVcVMtMoLPmtodi4z6ciLhCo6YPFgAtqokqJowK6FcU9o7R",
  "key17": "5v8MPsMWvWQ7GyHn7zPypr9JE56Aiw5zsjcRnrfwEpC7xxkH9V6HKEdPrrhzeb728tWhbgKvLjmW5EsWKdr222bi",
  "key18": "63qRLbikKwsz4VZzQwapE17zy8cDc72XdovL8nr8jarWBZDFNmR6SuX6tfJxwngyfQRE1fTTF57jAF5fPqALfpic",
  "key19": "4e2jGaRY9zbM1rokHJrZ4B4JK3QKCpBgRADC14YzA9EWeKojSuZg3xPMcMNgvLQTwvKDL6ovYKsj1wn764GeSZTp",
  "key20": "2reTrrH3M8Rwq5YtvgvSSA6fav8ehNDBdMrnCghCtNxSRFjAP3tZiGS2XjMTyBq1i6KJ3twWm3HcZsbN8rt1rCyN",
  "key21": "2e2fXkwmVg9EcMTHc7aQMDPmHt56kmtS2ras9RTZuDJb3g6t62NMzzb9kvgAZgnoin4BbLxswSwWPD6wFN7nQaYA",
  "key22": "2LTpHPx49ZYKEYeRE5uKPxmusoQTiQkMmsED37mc1iZeVfr8fdnbaaiKLd5wfecnsJJpUQder4KSAZmbb1nBFrJd",
  "key23": "4QDth8wJaBzVKKvFwNLVgbajA64eLJuw5S3vP2jAj53H7bh65aLmSGSyHeZkgs1MzKBvUYkvNzT1tBenZdD8nnp7",
  "key24": "WZtGkGHcGdhkQt3XqJhEwYDVQ4tuiJFEEr4KAhqgWuc89YUXoW2K6CNxqmzAVH8P688nLpYzhwjrvKzxFcETVkK",
  "key25": "4AhCz7ZYiySBZUADDYbByqqaNPx649yxBuc5vhxRyv7Mh1gfFtApj8Lda9CC1eJk8Z6Gr7BiqXiPNnJpGs7WY4R",
  "key26": "2gpQUyEtEVTwsEQXzgZuEBPeBmdgeQd5rVXBk5UQ9si9GjsRsF8kqNN62pgV6zcX4niuB8866Wob85PGukyd1rJ",
  "key27": "5DmUVE4iAZESXzAkT5hbJzvLe9Qp5K5fJSzt1ZdduY52ej5gTGRRE4VU9ZR8Vxie6Y8QaJm9PJ5CneHDQvVL5haH",
  "key28": "4BeoLRxYo5pbYmhtX3uX63AQsv5MzJnxk2AQM2UpwvQTEpsa1Bbcr9jWarjGUVsPiSpykBTpDvNb5QbtECy6eMQg",
  "key29": "5ZKMqaFEELxKb4QbQPHQ5bp4W1TetnDtXvrZhdo8C8g9F3KpvEtecbcDPT9Hu6SD2SRPzhuNpDrtTitZWWgFfkwW",
  "key30": "5dnjZFowCHX3HjAFt6VkJd7t8fk8a47Gtjdm1kU9uWkvMwPNwUL3TRrqaQbtjHjcsdvMFxH7SaCPZ347WPmgCpCY",
  "key31": "4YKtNmNdCBG7VRfAei4Hpi3X1nFZvu7drZ5HaumdWBjh5uZGzY4n6s3Zmi11Psb1susptNmRLqrLVLjB3PjAiPmY",
  "key32": "5SWVHHUX5qftz2a5DWBxc6KUzdNnrJPzfTBQzntuWmMkN6bShwyNsSJWCXSo9HiqCap2JGMcqnBYknYTA6HVCufF",
  "key33": "5JqZk6orLGyZ8auS7Qi8inEvmktDaLGTqQsNmRdcz1z4jGJyR7QbEKJJtYkxRKu41ZkNrcQYMCGJK4posDyC8wwo",
  "key34": "24v53UvVVyWb9LwpXDmwcQbW8hg786QU8KCrcAbcWnyBgyVA3Do8pcrbsXu5EEgm62i5RGPqBs2LFKUCfif7QsXD",
  "key35": "2WfRatjAaEH84hE5Nj3Rk6SJUovkkEtSUq3AwMStPfxHfBj8U8EsQGRuppHjND684k8Fu7i6dAQSc9T6mgng5HFb",
  "key36": "FznJQ9EvxCgRbnfsKE1WLsT6JnLgrHPg2LyauRRv8diW4VfA7iSUcAKg4yLRgRdbBE3hC58xpj9ABcHjsjaZiJn",
  "key37": "2ZsUChRXrdMiEAD13LhD1FPPLX7bHNaBzdiZYsiUekfaj64bNGVEKv4ZqgKYK3pqaRVqdtSYfPGSbyQuCTet7FhA",
  "key38": "22mGDVCMcRp5Uf6krzxHZ6sHgSaboQrwjcHRBgLzCvma1frJNSLUjewJheWM3EQxXSLRwvwveD26tNSmonpVyYx1",
  "key39": "yftBCCgi5vn77MbtJYZhfpenpnBjExRgUZvfU8rQjqQnte2Q1Hk3wrVSDMBM3ydw27fH65Ud1tYeoy1YE2wuS6m",
  "key40": "3M1gXABUqqbDhvRDRjAFXoew5vV2kk6aoiFzmVXUsKZdNMtCptRtKwbzA9LkpB6RjpAmgNXZwpXB9ve19bccJZp7",
  "key41": "nX8PCVjT1ub2jDn9vir3QKGsBrDafCJLnGkF1ydKA8xBs5Nnk5mQdbx4hVp1ZhutYwMrPtsb4ghVxLQjB8iNetS",
  "key42": "4fmfXKh4W1Nwf3GPXSQKaBCkzR7iJBtoYNhfKHUFgtBLP7gTBsHiVBgArKSX6yPT3YDwVBa6YUSq7a6v2SwAwUC2",
  "key43": "2M9E2Y7ZD6pxHqaj7YCBmKAjGLZJVprDu2Aw6gA8wxoxHyhFbKhPibXb976o5mwXxFeCYjfiaaC6qRtpHawdGkQk",
  "key44": "3wNo6TDevco32tiZeFsS46yrKEAY8YfWHLn4NSWsAakxvi6Hz9pu59LPvyHRgzW6Bx9M8uEYZRLycNkTWTfa95sC",
  "key45": "2Sb8HNTCdFpptdcWiM2r8EoKZQCSp62oAdnEXKLRDPrw6TLPSQgjUc78w8nnNNWDHrChFQLqq5ComZdwvW2dKN1",
  "key46": "EDK7ZhJp7KnuzJZqSZ5kwHAGvtQux9juysjiRyJzKg9Pr5LaXmCPoa6HQPzmFQY8kBCq7YXUoL1Ao7B1W2fqdgP",
  "key47": "cRz1YLtYuYisT8Vyt7tQEct5yA59qdUf8TqXcWTUEjH1U7rH3eG7mxxZaWs7aWc9ZijBCrRHCjaVzsf1A2B6vyS",
  "key48": "odidxaJLhWMyrxFPhs6TssdtRRwmPvjt1D73khGrq7LzKeibkcCiFb8KnuHUGaBBPQc6ABmTmwSzDAWs5iqdxYi",
  "key49": "27iLNVWAs8MQ7CNJAebJDFa4AEW2JuH6oPRbJRTXQDTmTqu6Zmx9QuAyEs1PS9cNJnCcABkuBYekk4baSsKtQWBS"
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
