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
    "45ianLhFtYxaigELwCotgSHnmgvh3o996Ed1K76A3Bi4A2t9Dh69LXSSwCYoX4uRdaJXMttXczyoRQwM65eKVvQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PUnNjsU8M5cYWJgXKqxt7yea7emRGzipRbwXkqUBqz2UakSGVgTC66fGy34gQURAHtX8dXEt5ubLRjSR43PQqa3",
  "key1": "3s1hymVnxbrkojTHKxdaX7HzDodEc8iPdbNjeim9cHoJXKFMs6xWBkBAL5b4q9mcn2bEpiBt5XJiBpwXXVvdL9B6",
  "key2": "2gVvern4xUU3Ezw7FPeohhzdRYdHbGSHWuggiZq8s9hduNDta5jzFGVYzvjKcdBKJQf6rnkAs9QwCMngcy1CdzMv",
  "key3": "5fXT9c9Zg4gHLBJmJ37e5C1E946yiCwkUhZqiYKTF2ZPxoFqG3tvSQopfZHhpuxTrNsFrZUr3Xr13ZXLCVMFdJjL",
  "key4": "3baHBYag78r6DvDygkgnVnLCvXu7egTs467mtq5jfjUoJhCgDzkQXdEWVBVrVJNzxRFKnJWPyV8XsZYULC5iTybJ",
  "key5": "49WtSULzBeGwuYE2RruXCpw4aJF7kXnDxdc46gH6hGAQGLZbSQXxYyPpBFbJCkZ2Q78YWp9n56tgtdarSjmjAgXB",
  "key6": "4WuGfFdBemBkfLAxwch8oDYHA4BB56p2baNza2rSU8TWCjaYPLpBqPJpvqhDpVVqU2YV2Yqh8JtkV7PHkqXhyXn8",
  "key7": "wCeuLS57ncZws69MVcYWSXYW6FyFYVKBmcxnSvPGQj2ZcPKoyaRw1ZSfBeVWR3BDcpYeBGz4xCfgEtybyDybXw2",
  "key8": "jiJarPE9CJSXT9RQWMux6pSDcXERY2qvw8y8vdfnwHdfHxDK5PB1hGFRqE76yD9mc4WAwyGgzVLZkJHRRE1EC8B",
  "key9": "dZD66ZW8jJmXeNSXhk81h57MFE38NXSKtKcGZee1ChzDscN8F5eE5XKyorFG1fDwqb2Dxy8iTvzsZgAMVoSmDYw",
  "key10": "54Ro4i2k3NevjtpQSLaM9ktcUtCwpjfXqtcobgthsPWBu9ZLhnNQqbMEVjQNuPgDCnXeh9AJ8PeYhpXyRePJwDgo",
  "key11": "4ux81WbdUkq9M1gTGxo1xFTxJxhaL7jewXRyD4C2KR4YAzY9fxWYKYsu51WVc5o1b9A3sieu1tk3tcpaFiKvcFzY",
  "key12": "4cZ7Wmw6Xa6ATc47njoXcR6T3wGgSYSodxSAgiNAXtBhSXzcebAgFUytXkigE5VZJtnCkAzCQ6qUGbKSE65hhPA2",
  "key13": "62nBB3fbrUee2Jsj3SvrmGLgqgi3HHcgaNbPwYFsdH7yT5tcpEvb2zroJd8JkjXHy4RFkGuWqvg418rcCCjTPuUY",
  "key14": "3YiwHmg5wzdzAWc1gJRX5uwgWofJqfWJ1gbVmni3vK9uTGeX42UnEbhMF6UPGUF2t7MWDp3YaaKFK4wBfAdFtL2v",
  "key15": "5k8obWPbMbGhwcGeL3u6ryhzznL5b7r9UWNzUDLJhX9DFrnjsXkCqRfu4kFT7eedtGQfH4gKDMehY4p7B8hXAjfE",
  "key16": "48JnC3JqHT8YQpEPFD99G6NtSejfzHBfBAq4cQpdDYy3FGqq1Ri34q6x4JBJAaUeqSEsdsmSjZ5ysWpbEYZfs2kq",
  "key17": "YYvmYhXgBZLWX8AVHWV1QijwdCMPf3f7NYARst5QCRtyMeyYkv1ArEjkJ8RTdbqtjYFN2tSNnvPvLG1uts3FqUq",
  "key18": "2FLCMxzdXohtDs79V5WyzmfSv7yzVcGdkvXWyp6q2sGQyyBQpKDVRwPYBPohmnk8TCNyAE8JbL1hVS4xkUHAnLKU",
  "key19": "5ZRPmv2ZWwY7N5ddQX6bpaqk1xB2vtzp7Ej76epZ8jyakATaQRS72CvxH4McL1beue1g52uJqYoHtLZqEghuhssH",
  "key20": "29yXADF1Ny4DkLTncHxtz31qPZfRzm2X7yzmAtkPkeKru3P2dS9bBW4v4L7HkqudZeTttK1nLzBHa2d1jbNtFxGV",
  "key21": "4QTL8LFqH9gLiLHkuFETwkC5u4G4HxZExvg1LwDdS5RxWrUQK15kkyqMNzuJpokDCV5JUMZPQ9jioHBqcNeYZhgF",
  "key22": "5mun4cZSD3XFXthKmcEYVX4d89YtYM7fVimf6b1myQ88XczSeEMxzk3uTfJ8LyFC6S9Pk6SkAZjVTY2sKqnBYBrV",
  "key23": "4jXsLjQXQZoAzAXMMnhSWpQinbyVBszxqsfkREe1goHLG4aViy4d6LTTLKSubRW7yWnFQHeiwjdpfPdo5aFUPJKi",
  "key24": "5cSxTmhd8AZs7x5tYBZMfJ7ynAftDJC6nZNtAWmSamXsBPDhtge1DA4JXrLxCcj2bmkjHEBwCGrDwUiiJmLk1yWw",
  "key25": "5VoqJncwSWHQ8Y3NE7SUDkF8aufnyF4nZ9NkmW1EhFXEncVZSgLbhJYASKEXoqF9yKn2KMsGbfdB19kzaPpk5neZ",
  "key26": "5iQVXrAPSJxkPQsCFBgumBxXFg6hoXe17cq2SKDVxmLK1s73ZBgVYqNzB7hNjZmag3KKqM9tjZoqVkFyDx4aTNUe",
  "key27": "ysGNowc49qeNTfmKGFaLUVAM8ZmyoAnDVdCASVDapp51P2Y2A1m4DnLqU1d1wSeqn2V7p2b6FNoXcmgEpG7haKY",
  "key28": "3xeFzRaQSWFXHWxQEJq33yq53u3aDP1DEo2XGPrHbubFSiU5mbLfcz9PkNfVEb1Ghm89VRszzmWgNSs4DGiBVpBY",
  "key29": "4xouBa8yFbvVJ8M7wcnTor8EeQ7geYSDzjr3F7FRG5hF3PeMk7gytZZuJq2J8wsyrhvhdB52q1NpxnRCE4LiLU9g",
  "key30": "sRvKUyVHBmkfLLkoyP5HFVRBYjwh6y2i9hcJCTB45HYgvL6bhJujDu3TRo7cENJaaBwo1TWCm6yu4KVfRZLRhvD",
  "key31": "3f62KZSAhoncuPw1umH2Lt4a665DgvzHasCRokMCvL38EzbYRxDJQkKMqjn4FbsMwooxPkQDHqw6nQKJ2ChVLGrA",
  "key32": "3uTiwRy8FHQ35FDbqz5bjosq6UcRTbg9VrbGouBdwDP9KrmMA252a5ZzL4GUqXRSEXAS8mUpmSNd5QY8dv3facfE",
  "key33": "3MK5WhD4cJJ7sfUYFo5dR2bSLqVRMchjCrRjw42814iPn6NkPYEdouKDnJjgVFSobZxbGtXxcw4eK27WgFmqXMpc",
  "key34": "JSavjG6GiqJj4iLEiJTZLmHvUgJCVCdGdZDR8zVrGAfmDQwqAQMF6SypuMjXqKkLY6tqSZMKzuQYSdZz3Cwq79B",
  "key35": "4sq4P2v6rqQC5hvwxU7kgaNwKiaxSVPyYDiWhuRzo23jKZV1N6nuGezG628tBoTTnmCa7L7hchjhwWfGhEZtFToW",
  "key36": "4DuXLUvHnmZAHiGoPdvYbF2DPgmpQ1A1mGa9Lxg3eX1YptXvotLy2bPcs9DyfiDPXR5e7V1kK7DDPgKMHhBWL5aB",
  "key37": "39LmgfehkDaVNexJm1eb5inPnKzYQMcu5q9fNkqdWdU4hSfM45pzzt5Y2RM7UE76Vrsnn7GiRhbEtqKPUNoKvzJ",
  "key38": "3dmLKeYjEXS4Y2mCApoNZkWfu1TNguLzuqXHwCjAbMZAvNPjsNLjFGfcJbSVzGkwRzYjP1rJ6Vun2S7cbi5jWS4q",
  "key39": "3cViKgxRdb3rKHpaAR9822JLE3E2Uo9uohRyx3r62LUDiePYPumyzaUFAHC1bGM532eBZhp2coWJFeZCLB9e9FSE"
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
