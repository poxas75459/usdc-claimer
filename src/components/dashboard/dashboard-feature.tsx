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
    "3msY7bC2EyDunBdsfghfp4mH2kGKP3zsw1pEPZnfxwETZeL4HqyBo8T8Jh7yNdH1XNmKiCrnhkrGbtWmvho2MMKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cwhsAQdmCcog3ySpWrnLRTX9o2TEUf1rwFvd53tpPLh9fVSozWLJDrfpahKLDH6XYkQHJFxgF4LK6Ak7xam5EjA",
  "key1": "4mbk7owBCYsToLj5goppZopCkNyXxkfZLfVM6YjGejMquErUfHrEDCwFj2kViiEKwqxe2UTFZhsDqjkVJK5TeNJa",
  "key2": "2omVrn5pPZZj2y9HrU7JpmCjyyaCLUcj8cpPgdCWk7YQ5i2igNESsCwKeHhrmX6FsZqgQC3p6vXexR7vBoSThdGJ",
  "key3": "2PiWkY6WLSTfARtpjJZZFY8yVgD6JeinJpwJQLWBXLGvRw219c169A2q5jXQ3gayTEErHXcqJNuzZ7b5kEnNbQ9p",
  "key4": "32HnNEvHPQrGhXdxWQjQ1A4vGW8EAz2b8Fu1qCx6f61EVRNEpv61GwStXfyCcUr99pYyfKkAs3jL1o4ZCv2SwwjA",
  "key5": "ocMHuAERp8QQwcQh8Eanzrski1MbHwjDtac6ZQeBJVHArEiSYwTfobg6555ywjzzTdRJxgspvm4noCyxqCQAKcg",
  "key6": "4qGyUGqzoa4QvR4io69QEYwtifGebRNeEidHtkg8Lj88JjqNbR6xs5ZxomugTpC9SQJYVWzDDgErAKQQurBkUa8R",
  "key7": "4hQtzYjLEuSWJkbahVvB9MTzZE8m4HHgBsVWByusxiUu2XvngRABSgJ84FwzaAtck1HAR7AJ7t5fCyFQMGg2f64X",
  "key8": "3pqgGxJJy8w56a4ku6fdA5fgG5VcHveuzi1o8obRZsqENdx4B7qQCnxy6kv4xeiR2xTjesEp7WWgRg9DuDPJh6A9",
  "key9": "Z96mUyM2dp7nACnCSuXwPewW5oj44A9q7JAywdz7Xb563Lcqf1rN7iBDakGBr78QkWhnsYNAK7PmXbLof89gC2u",
  "key10": "5AovnwVQg1zkhPwkp8DQLp5p7yqt9p8AhMAaZw8GSVzNL2WMM5ZuWfDHeRtxtoEcQ7wwGsaULsjYgJUFfWk2yRS9",
  "key11": "2whvxMkUMWZ8sF5TtorfwyrtkZby1xErCgVK5LXdQrLjhmdxPzdMPjJdY7XpEiqpdYH2Yyqf5fPMHQh56SZCrRcc",
  "key12": "5Ype53tgYYwPoRxzEqimqMWVh6SssKd2K5HjiL5VAR2QEFzHFee7yhqUWYPnV8ugKz9mREYsDpLfFkRDXoNDxMLk",
  "key13": "2vKMWZx7zktFzgsHyr9GNyhD3P23pS3h1E3D8YitQRAyWisot8fjYxAQSeia9caRRf8oabQnRBDWBpZf2tbBFsXv",
  "key14": "3K6vswxt2rSD2XeUt8DwzPQNTSypUDX3YShbYRyRrXk2m6qMysd9AmvgeJ64gcQmv69VyS3NcoDgyCnXhCB2cekV",
  "key15": "54CGseCJgqYtaN7a3moSXfeR7XcYwuasEFnbUU6b44hrhgPgcze7Tq33YNALVWXcJ8RfGwccZD1Cz7dCmnYw8rij",
  "key16": "5iJhX7mLhQq7SPFjxPX5ZMMDq2t2aopAEXb4GxgFwYDwGUQfY9tQdUf6ZCciDLjGtWkqmwuzaDCv9V1SQ1A4veLt",
  "key17": "3CrMw2jRzarX4zYS9csGaffdWMQTSTtTse8V8x4rTebsx3VmTSZ9SKWJMqJpXv7vvGY4pfrPR6GbdvCvLQ5KZgaC",
  "key18": "5gmCfGJYjso4gSs4i1Bh3ZrRY57UZPjz5nGo6KseCNLG7i6nYsAkdv9nsgTc5kT15jtaQ4Fcf4jr4TATZ9J1zaQr",
  "key19": "3GCCLphzCMGDHuJy7io3Sa1CV88jp8XiNDGBafLEDiLaUJbFXpA4qojYgxBVBF94tqVu9TLD1XxN4MvHRcQbwQCq",
  "key20": "4QmK9JG33U2oyEwnZWkJwGNUvFcxb8Hf5BrfCZrKrdtzn3s9Ag1jKspGuB61xmzqoe6xWrH4RhX7kWKZZJJASVhk",
  "key21": "5GsLkZEezHqYVEvmM7wW343bS5AWJ7eqcDt9dfZEPoSxkq1wdAbVBw73CUv4Cs897v2dYq6YexzDvZFiRMxkC3Ad",
  "key22": "3Dy5aNfqkWmKNiozzzAi1UNcVdWta32dCQSq2b8TTsLaEvmRXPruuywmvqoZK6rLvxwL3N5BiZgQ5bUqsJaYkSuH",
  "key23": "2W3xKEAeeT37CHpMEz98dBEQNxJvBgeUjrUxdUjSe4xfQqnq7fiDvUXFNmh6Hjus2mxGjUyC3Jc7heZY2iu2erXC",
  "key24": "3DDdyM16Rk5AF9CFtFDaXiqZqvvbFTJu5uc2oZrMYBo7Q2UC8JsVVivL5MAb3J5ikse1NVbbhj5J8CRnJntMWBB6",
  "key25": "26rh6HmPdah7tVSfYueJyNEZkKyKhRJpzgs8921hpbyEtPetrrHUCyKJTXqDzV4bafUH6T1HYUwp5hAkX7Cqyhm9",
  "key26": "vnkhumrDPQxyENjEzNs6eM2MrF8HbxYGswrdpGgAb1skQApX3wgV6W9sbSSgM9AyyTo8ktNfPiPKiDzTDUSqaFJ",
  "key27": "2gJ47SJp3Gf5rkEJtiZtnssuf8uBPp4GRG7QKCr4GgS4DDcaS5P2SNpkt2o5EBMNewMrfuo8ro5MjRLoG4vVMd8h",
  "key28": "4GHVqthuzZDMqZ2gT6w4FWAiUbkJSq87zfCnX7st7sTAwyMqJgqHDbPQCcBMhL8DmxZw7etLsT79zviPpwm726WL",
  "key29": "2ebQZETfSmU9zcrb4E5TfznaCSKSyYiUowHzSHnSQrHdinnEzKLugPKkgnoGHdBSRsUrxwTdMBLhgm1468zsdmRU",
  "key30": "5THSKJTtAZScP5zvESG8n648WRt6z6EYwAE9bu6YP8isR4s2UrcuazBD7ju5VgvGmFV9ux3DnSMEQqnHnqab9GiD",
  "key31": "4AJdt4SjQoajzcXiuA5KJ8Axb5eQ5bzmwQ9y4r9EXc2m7UB7kggLDiZ8kyigesu7CxF7jK5BUgbDkdbZyBDcCcKz",
  "key32": "3kSCh5xVR3yZwVcnxTwD13FhDySEJjxd64b1jksq5KGpH51YSC2aJbM79fBHssqehdL2zyoCyu9qAfMDrRbRjoaJ",
  "key33": "bRXoQh3TdqUoqPWQJh7MXFufcGPfgpneVa1T87Au9WuY9Xv6qzETWHmsvaZd51Tqh9dC7ag6NhkvbQ3BPDxUdsc",
  "key34": "2SvWbvYvxLU3EBJr6dXSRC8VK2ZqtKTPUrmJJTRXshHNWMhiFZ4R9tifumewyEqDdfS26qyS7yJtdDBgWRcqe2vS",
  "key35": "3iYwQsm9Ui13xFkFg6V45MmB9wWvRnHnELCAL1jtqPPAith4aAcqCKJJu88KcaB2iW8R4Xxj5epDPgCEhbEQXoSx",
  "key36": "YDSVJMxhGfaRQnAF6WAoJHT4mYcqCSewmAR9ogo8uWakKE8x466KxdNF2vUR7jS5Tr2JpKcFzTY2PiR8vmKZY5i",
  "key37": "gFQzACztLXbJPwDMnf24k3bDADaD5MCyvpBeo5BxBb9dGKvN9u3vYmeprd6tLCJ8QXWWpGLj9EbRcPUJT3RLV1q",
  "key38": "46pVssE1Dp96Z67U4FkSxqKmqTes3HcJykzaP37HtCmVMpLijWpac84GjkGcdAhbCpPQyrMtLgVYv52uPXvtLydK",
  "key39": "4upi2rfWbESNvtEFUcRYxcovM1nQbjEMQ5bfavT9CDrafBBdGiC1pQxfRy6okpn4sTuL8GDeJXZC1VkhVSaAJfbu",
  "key40": "2DyR9wm23B92AdJooqiwS6St6YBx7ywjrfDxLJogwvk33krKoyNokhQ8JydbexLPPYy6wRERdmLDLv6ML7gdTdgv",
  "key41": "5LzsfmBFBBTTvandsRBLM9kaLgCMoNfnik5swvfkaxXquaJj25W31kCKbDXkaZceoiL4MSkARkgmT6e8GBbmFH7D",
  "key42": "HJVPSEGyCNhzUzMvYn9E8g9GbVsETxZwWdYR1VXpuadTbZfBMujLkoaYxZAUQXieZYDFVf5x82PGJiEdWLbJvHE",
  "key43": "3Q8VuRzCASXUcPqcYrtsySQow72LrDAN5TkKNck4d4jkyfVrDvK4jaBzqszw7ygUAXCbV3emYpJtkuJXnzEsPEZ",
  "key44": "3eGw12MkH9dPWVtpYk5885YvtiaBroqbokQKiyTcZpeHBzAMmVRkSKRtxLxqGYXT4NohpN19oswMLWuiSbp96sgt",
  "key45": "5HwStLhSBoktWn4Wom4BstVQauU7ZWseXNhYSHxSk5iyqR9xDtb2tQmoq9ihnVXfqYy7i3BNkvYVgzStmRVEhRmM",
  "key46": "5dR68BkYEWqRbVjfnmzh9rx6ZywvSfACxfJJVMREutK8SNLzsCVEQj4MDxvUyqo1YSSBCuzMPzafwiqjgbcFHFzT"
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
