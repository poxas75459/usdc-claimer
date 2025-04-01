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
    "4SBoNvBf3QNGXPGZnBeebiCFKCeaGRDzjcAwRvobVfpA16sDSo23KTJdZrjKcLHhWr8sFpyFhrGY9owZz7rL33Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNE5oSTQdYbexBzgvcCFV1ZGAYRPmbEiCiPyR1BHxo6vJo1J5CGSqVUoQNwSmE9uHwukNuRAgdqE94esHtJNaaD",
  "key1": "2hUFZVU1MnapF2NtkC8T6cfrTrm5QZZkeoBDSVbvyt25zUJEZdo8AXcQtEwpgpFBq6wmYjq16hYKC1cbGt4352ZQ",
  "key2": "2tr5JU6aCpqHUy4nBbSmVbbZAetWVuxdKWPpiHYpadQGvyDcRwxAib98kgxEjtz8ZaL2XhAmKPJ7gFUny5N6moY7",
  "key3": "L329ZFWUYvzDnCpjLM3rYok3NZwrd694WUc6JLpXWuQUSLfZMuERHcVNT4QMKzzYwMdcFNXxiUqXADdQjeJRWW8",
  "key4": "2uM7mnKqMTCLyy7ubkhZnQTYGwHtRKSNjK81huENnUrHiES8ZD9oUZAYLCTh6QtR5TpZtGPz4sG5Hqjjb8eqxbLY",
  "key5": "4ayc9ttEz7kzBZUepGHcRAmjGr2w7igLWQ2XBdkMjbpuUjzLYApCdqk1K6C4okYhXbTmDYyCJgsAMzu3zKEv1dQV",
  "key6": "4xksECSuTd5GkCaAKhWUSf3jqLrn72wxUApLXvwVvzcKyPE1bhHCZvxmYiBfMH8RzmPKQeT6F3nUknx6hSCT1YGG",
  "key7": "gQcmH5TpLiH5cRQRr9rvjMg1g89PfBQnakRFkjjNXFJiBNi4m41veAJEmhSrXJZwLdcJQWJTSqmrZ98hwu9566H",
  "key8": "4zLCT3xTaad9SbiAEU53APEyxv4BPJNCeLFbuPuYNi1SKMaia5T6rQ5MzBzojEEbrLHL3oYFPTJX5sw6myYnDL2U",
  "key9": "4dZv5SstgGiGbsbdbuArzU7oTjqc8VeZrVeR8HepMYeKHfWMcupyRb8kyKDFuVurwYg1cxGymee89AkEckBTvpvK",
  "key10": "2Gb45ggL3k1Ui7yoeNAUEEdHwwDyA5fySb2pMYdMvK5nGxtetS13WbaF81f2y3i1mJjoh7sScfPkRpmyQf8PuPRg",
  "key11": "fC2wwzRgfo8ipgJLw2hEdc6yKfhxmCHdESwoSnwA6QMVfmX8o5ULGHWTKsmJSbNBDXw4WVeMnBkSLvu2EaFipvk",
  "key12": "5AbHq7q7sZzywQJZRmox6YYzkm1SjZCBQa2e29bBuFwYwsy69W6CRpNHfANJP7SZJjseJCZJaXUsKbbgKevjRAdi",
  "key13": "5So1QtFejQn3NzZMvZWMEvXLukuALmd83eAkP5GNmCZjJs5eFSbsPAaeeFeqhBMT11rWsyM2TWfjZDXoFXFj93DX",
  "key14": "3fwm2Kqbc5Mqc2fX4CstQ1pywqmP4VC7eM3rVrG6Dt3A7BiCqvunE2946aDrShQfhTCMZANhzEapyzXxprVqdan",
  "key15": "44HNFnBgvsThfysE33jKnVpka64wu1u9vmXuLQPYq1wZnNAdSB5HmN5kAKQMB9wd2vJeVDrB5tAN6MhezeRG6npm",
  "key16": "4RXTmBcm8pq4TrrDbkVTB7ktKmXcuFDZEXmacStxbgG8Mzv1YCQEQipeGznkE2tCNrh2Sfy2nDReQELq7UdVqjyi",
  "key17": "7TxFrh3ggC74uLonY1h2ckoDPne1pUn8h3EYZXdtfeDcX9hjJ3AqB3WuJqm4SWT5NPryUXJdBGSiWzzaNmY4hEC",
  "key18": "ixJfFJ1yxZtLuDsUQvPbPNG8fQaCFb1JBcc5BsFWFBpnPJgK6peQW2HjhMRdyu5VRi4u45oVbv8jQkVvbRNFgJp",
  "key19": "3xZxqjt32ywvZAkKdaZkjj82eSrLeG5NZ3emPs8ERx5GkzNSa3nEUsxjzLqJK4dx8FoxR5ygp7WjTqr5pEDmuPV",
  "key20": "3Av2i17ZSzjTSQ9ESvsSrf3ZvCUV4Dai5D4no3Dob5ZHMMH3vuSVE54wbxNNU6poLjfuN74nppGTn6NjZpXXqqZ8",
  "key21": "61LPbJQXebt1qoyZDnQYKgHxmzgGjuNfY8KVuCJyemyMHcMbCKwoZuSQVQX9bCBfSVuxyqwvPFHzHDXgmNEa5WDz",
  "key22": "3yszM1kSsqBQz37TkhWRwA3d6mEBBYkd9fn9TiH7HvYqG4WrwGE6X5MEcgDvcrsxkLCSiWvBouEFdyEp6aisMoej",
  "key23": "5vLwQhuCRvo8nXgSEUN9k6ucA4evtDEDZkxmLoW7B6ugkvSCmGQPm5qxxCaUcuEY4TMj8MD9SXkNjTU6odn8t6pD",
  "key24": "5CneURVf8JsENjKDpYvxdHkJo7EwxdCXnRzzCTddTqfs67jjLMyuJPyQhqz4NsantDvdM1sFs469Sgb6GfDCeFRA",
  "key25": "PZaiwC1pNtKR3Q2FHTPJakqGwhLMsmQV1uQ85h9wTfzLP8oAh6JMetW4rtLbJr4kXNdk7t3HzzQeUtQoWX552Js",
  "key26": "4Y6KG6dGtpUtViU7oNqKj7QyrBQtDnKMRCTDHK6UNHrGRLgwh81vAJRA4fJjy6bedxPUFb9m6TuB9pyTKoNhv61n",
  "key27": "54duz3LF4DxqStqhwP5Hmfiwwu94BZQDkr6BDh5dj9E9hrKVbGzPJsBVP8ZMBTjdUyxLmUse2DN7SejuGHpWpLxK",
  "key28": "4K5MhyiUDj1VKV5AouM4KAZSZJ5six1ZoHs7ZRdqe2XgJf5GycwdBZEM1a9XkUanhmPAjEhdpVp9RyW4mEXJPUNE",
  "key29": "3A32tcp6RyWiGx8MWr6A6pbNhcxsWdoPNmT1QPqkt3BmLmGCnbmpdHHivrRws7UPJbhCcgBMNvihiAEv7RAgpaDN",
  "key30": "4AMnUCgtCJMWtPfAgvDBa2xkjBrPtkJbfPrSiNYGHkmCfmddVwBqiB8UC4aq6DgZbCzBGjHayio6NKucezHRBmdh",
  "key31": "53avVa39CZBZqZFcXnZABcpHe6U2dfY4HgHaDYSVFxhYwZcrsSimwTJPJj7cUVoefMrjGgZz2exxuXduDffQVhxp",
  "key32": "4QtnJgKzQEHBWhEhR7SpWugsiQLetsD7BrF72m9KYja1phNUw3ekRaWQfRZ1PJAgdwewRVs2Wr4NpGWX22Pn9xXR",
  "key33": "2ToKzUqpMTpvc6t8vxFjokHtNzaAsVzg9qdExjKjUquhCHNUDnP4g9sDShUSafGYuJ1STMG5hpRze7m2dhrMHFF5",
  "key34": "RoPoEruy9xuzS1wQ3BEXi5J9GK93trn92C18PsHEXXsKbTpLmiQ7mTkQSdnvhCbczasf8oDUvahTuBMMbfHF7jM",
  "key35": "3124vBQofd4sez8eQvULq7ggExXd9ADDnrBaXJXAmQ6GGKmkuvGskWPApqRCQnnGyYow2Djieq9efYtiEoExBiX6",
  "key36": "4rSFfBezfh21BdSi5fgVgTYz8zRM9AW2zsMb8Az8BMhSGK9rxypXfEUCPaawuthFwfWzJJYVDsmVfV8u7HgkKzCU",
  "key37": "5q3ae9uof5ZtF5N1xLZ3EYkbuG9T3DdTaLXwTMadvcLsdZZC1GkHqY9S3cyK3JQSNRYfF3qn6ayx3XZYgJyAgsUg"
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
