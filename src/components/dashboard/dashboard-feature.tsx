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
    "3LEuZhNVxQsQquMSHqJk7Jyk9C6KbcgyHy5HaUbJiELXwVXT9ogGdscc46UgweJwQeZE1huQZ91HA5MesrQUnKzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9AHiBc7YrGmZun9RQeAQDY4P5Nf8cYFqfcG2j3KhaprVCDQbZGuMtu676Rgq5pBrofLvAyGD7vekkEjgo9Tz22",
  "key1": "61UFbzaqR267Gk3oQY5vsxDoH5kRmGWqFpWXd5Cw2DtFfwWMr9gGxqxJ3qKQmVETnpczteS6hTR9SGmue3dM67ob",
  "key2": "GGhSsxdKzgigLDqetBN9E6bsuyKaGUPLVCchzKNjDjxkwZ2E3KF41uyus5e89bHG1jjCU9DYkG7FQg8ca6vZGPG",
  "key3": "3L1Ke45fTeDzEaVQNC9qPhcwmBeTGuriTYv7CA4aKXgPXWiqKNSobGDbSC266FCbBLQ2BWwLZ7be5bgFcCvFJptf",
  "key4": "4UAp6mLDkJwPKE6PtwbYqSUR8yjrYbeNL7BEhkFxin1XSwAceKMjNwMDP78u3yNgJSXGSEzxqkxufQxohRjBkdeD",
  "key5": "5ZjRKWwYP2gzgfMcnfLDyULL4fgoT3QXGXUsByzGAvd6yZyRB7sm3pEZNBN4tYqaXX7csye95MnGVdP5mFQDX6RK",
  "key6": "5QvVAD5Qz7Gj88CTdJo4syFdR2N33sRoLz9RXTAsZjWp91uSAsGf67r2DUeVpye75TbvtyxyCCSAKcAwRnkRH1zS",
  "key7": "PV972pW19L4bRXDzGQUGBT6ibr5w3omfiqZhRSGiLtc4PHyzysErjZaeJGCeszdFBLCyZfxNgGU4yqCKGWPLhVc",
  "key8": "5ZgZcGy1xuM2x6qNHjYE4SJUWyy2v77CESyfFkFy5dKtP1ZWD7ssqiMxkxtzg3WEbZRiHqJwwHGjSFw9xZMbawXT",
  "key9": "3Ks9qtTe6Gcc6Au492TkAnUqcGdfmta5RYxMvz2ctPYexXxLpVw9Q1sapaQde9Qiz2f9pYezcPAYMnYnvvMD2r2M",
  "key10": "2wgZ4AwQhWT1aWsXeC2BiQJJzWU34qbeKHXW2GTRjqwt4BstUBfXX3NaYMgQjUMLSQ3cLpD1sVh72ik4wS2Adv5g",
  "key11": "3fVpwhVKsZpxKzvEY8zjvdty3GFeaKVDQWV3EebgXgTBLckSYr15E5U84JxQVG9sMAJHSTGgNaLJQaPLJiW6W6id",
  "key12": "2u1CTvDi6fSuyEVJJfM9JmHqrB6rPNiTasCHTxRfdACJaA9HcQPCv4DBkFNJKR2HmMddEETjscKnXtHZ8JroBX9N",
  "key13": "2ZiQn76jz3PHPfgBbFFZ2piqjMJLixT1TseSujxpcE5ToPW8SgmrtW9c7sjGMnU3BdgQDMdizy1hQn71ishwHNKF",
  "key14": "3ww24GQqtYacKXF3qEamoRVx9WDF6yE3b3KiCSae8oZpZZdADdfH417nNcznrSjpUjDE3YoTUCQS6qLJN9971eZB",
  "key15": "ve1zfq362Mujm2mbQqXdsLhNh4HsdxdGQWzHDS2K6ke7yd8nmEvMEh2ZkaG58wZz2yUVPxv6ttJFJczYpVJYXZF",
  "key16": "3hGXx1vhMbmwaQvNM34vb4Km9n5HJaTwwvE4FXwE4G7JodrKbBiwud1osHDwYNBQEW4919t89pfXfGvTzzzAKCh2",
  "key17": "4SW8Y7vKzDt9iNHFiBUr7ZMz9HWj2CSbfFTTCi1WQqWvJnxb9k9A25PkZJFw87AVgQADSjXXwnswZquioBZfHUsv",
  "key18": "E56Ki8hd9xGv2kg937ZyPvfFh4qhKXaz7g8aVdqbqBMFqHYbKAQPRv2VBQfF1iUZVuhf4XE1wyBcdNqrj7UXzwV",
  "key19": "65xW29zYVMC65ozbNaZVrHL3F6XxqzhWeoCcZuKdfye5GYMkDY1u3NsdDFtb5hZGAe6kmNShmSRkqATLNjkdzHvh",
  "key20": "49C5ii8Wmr7VBejFDed9oHduCYHkwq4KLSPCtGmkqG8teFW3cEFJ7VznbwNANui1vqWQ1CUtXKNWbS3tjXPx53pa",
  "key21": "oW2jDUUyFRBhALmbPLAPSuZuzoZE9j8QPmKnZUTH94DNx6cjS1Si1mEXZtu2ShD2p9P3Ysa4YasndE5XDRvZ7JR",
  "key22": "3apGD4T39Zu3AzkZrqHzdNNGKXJqqhrnV7zxy3qe4z7Ht9jQoccjh3M61LKzf77oWwNf72BrrT88B4UoHokgzax3",
  "key23": "35WE7A4m2sqGdRhphKM9j3kG2emUsvAbpRGqofJdLfhQTcbBVwBYEVCZZZ2GLDhq9Vvo41UR21BkgE7W2E3Nsk9L",
  "key24": "42fDEtQ9V2LPakDMwTSpYHyjeew9UA5FhnKcYDJbrtqnLw7qyXJipR4JdgqCUVmNa4CvcZuu6Wd6VTASvoSJsdJ8",
  "key25": "QFFYb174QBHVxy1B3BYazsdaGJeAgncWkVNuoMc1Qaafw6pSw85PsVoe6YRCru3YVtBBQaebjF7pBGMwJ1UDpwz",
  "key26": "4or7Wuz7EPRADBiCE4eknKATHnwQ4TfgopdCjSGCyZ6fUjGB6rrXt3bAhg3Zcoc6QEpRnFVsuxvXboaiXnkc7Tbu",
  "key27": "4NXZJgXqmCVDMr85p6arPzFWV59Nuetz61AZbTvo3KFBtgfYWU6Q32wbUUWaTXVQ1rhSbjaRTM47nXYwAponyNNJ",
  "key28": "2Lzk4Ff6zmogokTYm6J4vwKA4paWc5q9oPL7b4o2apPN8fifZ5Qvw8S3KGxcZjv152N75aVqu2AZWQFaALW4tPcD",
  "key29": "3APtjESPKbMRomiisvaiZvGBCDgKvzFWP6SMSgMNcgkSey2dmmNyiowiNwZUhzBpEhDTdBhBDsL6DiDXCcWc1aUh",
  "key30": "2GF5Vkqjr6YQem1YjHt5hAr98oMJLQrRk1eK6cojqGVR1zSXbjoMj5e4gF9rg8Nd7ArWgrLQC3mMujaWjkTtBNcz",
  "key31": "5cKkBBhRYL3QZXNPSmYeqgH8wepabtejhn91HqH6jHCYcqoQDE1jBFU33TJ9qhXCvXFQSteMB8WiGmq3tdTDxNPF",
  "key32": "5c5uxyoBLk475JA4QvwTzqPgC1bNAz556QSFK8M5nhArQcqMviWdLCau116yD19hDQF2Fmo3B3UGj6rUMpYex9S2",
  "key33": "2HeEsAhBTQVJjyf273SNHj2A4PtGMSxr1Xe6At8UkeaDncyBTBfLLN6DTdTe6qxXK3VpYqno7YsKyYtyTeWwLAiB",
  "key34": "4c1gwsTYmJUVZtcD8rMo9ExHYXZwyAy1CQJE27Pj72ksgNMs2hGh8vK1PheyfypdxJrwdZcKmHFXBYVqCtJxeFF",
  "key35": "5GJoMQdXjqjmFRru7bcbBHyDTB395M9YzSZDrASyVya9JDPK1ToqHjYBGEai9aTAbSJjED9ExajveGhtAJUxK2wY",
  "key36": "3vSCUYvnQrmyrKNjSSx1BFWfkbSzqRVmKU59CezEvcHRjyxzkmvQ6tbRsc72bGX2tJzrX28NeqjvunHt6EwShpo8",
  "key37": "4cFTcNhMtBq7BY4Cq2C2c2g8bkw9c4c7T299bpzgiRcTFwt3j9tGEaD6Xpofvx3qbyXLMV9DfjL7X5wraBUCUGo1",
  "key38": "5mJfujjhqQkbthfTrRShGfF85wEuwoXSumE3AexbJ1jeDL7w3EXHDr2sXD5aAjMTJPdT9RMdGvfsp8sg2uPodQxy",
  "key39": "4pLwqR5dtPpLXgAykViHXSxU8jKb6XqvmtRo3mVNG8UVqaM5kdbBqnTmoGgbug9H9cqhToU4Zh98afrriRFeD6Ts",
  "key40": "cXmsN6DNDLaRxmcCr92zN8S9hVjvM81oro2vh32YxEiWKmve6o5qx9iivLQxrsqhtm9mbSnuWNSoWXsjCtN7hPM",
  "key41": "7Eok9VTUjMhHhcJG2YqVUTWEXwfhFtWhnuvDcgHfYMTEE4BkydweBV6eY8jPWRAeqEBgxuctx7CxgmDdxGtbSqu"
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
