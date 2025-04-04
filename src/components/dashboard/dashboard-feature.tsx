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
    "3pPVzJAcC7jJx2KjMNg7PvPbby5EzNDAbtFr8BCNMGucuvPJcdQVm3uFbCD8aa7AUqPe9k6ZGoFaJHHi4EaTg3wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikhZoG75sNrUCk8Zgst4yCb5hvdVuL6f6EpzuTU67w5VBkmsHPtx6H5kgeHjkDgqkPXsY9RusgjjBDyEUqvmcFe",
  "key1": "4oppXfLyWGioaqWuhssgy1KyXF1fgjtd5NMtdDZxqjVbm67BKpyyJqoZoqVTq88SR6mypvX3QUYYLk1iKdo7oizs",
  "key2": "47TRvfQVfykjyCrkSRBr2JhhC4vfKmKJKGysDU2iqs7Y1JEYGHVAUGh9z3QN7QhWmFH55VmzGJ1Ez51eieivh4pF",
  "key3": "281zJbwwZdh7RG96qr61Yb8vG5673VTkSvQ4NgPnW5E18cM6oaDRL5WH4XUW68o3McSzF3L7mcuCpbUBby4HHb3n",
  "key4": "DeXT5ZxfERCWmXxPvSvHFkZVMBNLi1uh3H9a2p1JoQppHyHLJNgpqKvjgmDB3YMiFCcycEgHH9gWYVJqqSUXcr3",
  "key5": "3qsvj822DMod4k7hhVea7NQhDpWprb6DpRzP7XyEXKyMzsyPv3t59UycFjoUgr8bhTfMugEg2u5jvn8LAZk4dmQx",
  "key6": "432a4rWYpKQcZNKdgxNBuSqNmxUt6HqRRMHsLf6ZsMXzeh6ZkGD8CZWw1x4QMtXzMiwiGpC11xtJSBfnpdoXDin2",
  "key7": "XyKFZwMvrorinX9E31wC1vyLcBqKeRXjHVefLEdbF51FKNncoxhZsqdndxr5DyHFs9575QrBY6YBhjtMYUENJuW",
  "key8": "2QvtDU8eRKG78jZzUVgpGFyYZCyfLSDWiQFjBiat4qFfJ6f4CLAECdu1RoVsVn4XQ1bACcnxkhQxFPTngFP9bo4E",
  "key9": "2bMWiCsnS26e9UrvECnKcSGAMQPCz8PaEZvxCV6Pk7vgwDurXgehbEAJKNvunxB7hKyDdQtTAuJkoQXdZFZoqwZr",
  "key10": "2nkHrH8yRWEvzzFTo7RVFpGVcLgHU2oJyTdJ75UxJptKnqFpDDWJqtitesu2gGe8mMnHwbok5frG8gKpQqGgdiDD",
  "key11": "3NjuKhFxZFTtgpejGJzMymiekGzBBxgyNH4c4NdzvekWUWnRter9u7P3kDgnCXD1srAsD2WXbjBuErGBS9G6dKXb",
  "key12": "3rZJvdCCRKXbGeD9sQxs5uXbj5bUpWpP7JoCt7Sn9QXDJsXRmeeFPZtN7YkZHXyZzCrfqvYRZRMakEpCEUZ1HSp5",
  "key13": "2JsSdyLkN4YvXuLBH5rn7YT7Kdh7hfxXNAkEJhYdnZqP5XRarrP3G5iEJ5yMeSm8se6VMX6v44FALdcpveanQYuc",
  "key14": "3raoZop92CWwtWsCiL1XGpnNUgNaW5zZrBxkKpGMNuEn2qzjy8XrpfpfMfHfr7HaB9uEPdbUyaHzY4GBpLK2tD5C",
  "key15": "3QtApKjerA6PUdLLVJ56hSgG6FQZiAD8iNaXNEN4jTYbunWLUYzLVbf5rntP7JMumkCRVFeedBFruecawGcaijer",
  "key16": "3g2meUDcQ21BR3zR6X3maVRnEhL6vCQ2x5pZ2SpFN9qiqVJJKRNb8zYnTmZJaqF3pz3KKNTuQLi6s1NRejY1jfkw",
  "key17": "5orsGFG4fBLaAz7X19VY8957pFzyksmxGUKq2uZoekDeB5zQtVg3o9QhWghhvA996JyJcEwyjM2oZCwSDsDrhYWg",
  "key18": "5rtbVUFcobC4gtPqQCqy5BSBiCJcT2m1txZtchmWr1oXZ9yTb5FHLMzenUuACG1RZ5U7wBsF8cBncCzAi3oF3Mmh",
  "key19": "33zBEWZB1oSdkETVEeKLezjsAa2hJYRnKQTTQQtxXNvzSsMaQaqdgz2rpnn7fKFGLuGtyATtSeSNWFYUWvAi3sfA",
  "key20": "4A92qTf4L3QDVmqumRXYzVQ5p1m658vbPNGyYDKWuZXjMbs8YneG5fUEaVVnMfqgiSLrdU5RnS8JEmNH3TCvR9Uh",
  "key21": "2TAMBZEFkyTBR7KQeJSKPVidJqvzS84vqFrzo7vqq5KU3mnjm3CU1JMCWTtXhdP5hqjsBhrZwGGRnt3ot86UMNSb",
  "key22": "3ipZqJc3E4CiWCFPEioSrmviQ5TSgE7JXoEPHuQk9QBUH9LxEgj3mT5U95wzFssqrzMuYsjvweAZ4TuoSgQgyPqS",
  "key23": "3mnJqQWvVeaQtdAee9ENGJ121rSqUgHo4PJQBDkfb7hnJ65r2cbGbg3DrzceGycZKdES2JW7HtFU11K6xKD6woR9",
  "key24": "3TpsQ67xSU9WfsbtKV3qb4fw93crS9VRhCkQPkeLR4TjqyaaBidxFQzEMNeCNvifPwC6cBaJ7GyoXgTpyHVy1JGJ",
  "key25": "2zqADXGZ7eeeHSb8gVkwBoSTe4m3gywqSTq3TZWF18LWtki6Lf4okiqE9JRxsucCHLbvS5HPog7sbtKF5zsREdvQ",
  "key26": "4PbNqueGaSpvJtZKGpUJ4st5LYNHboAAo6gbN8VTaezEgcDiCLxLque92aAJdoD3bmt8TeQqBL2XK7u1vGLY5h1k",
  "key27": "7w1Eijv6caAbEQtqGoyGMzGoETbueUx1Pvx8iHM8dksHpKAKQj5LRpHrAYjTQvGaYWA3vfRpPg9rEK9L9gAvoYL",
  "key28": "5FGRJeNsR3RDyXjLoB5JQFvSC9DP2UNSRKaSfgxwL6ySrtoRBVGDFrCVRuEBeeBjT7EWivTU4jhT2daanGGakhV3",
  "key29": "4peH8UFvQjf4YNqJhC85t5ZVJ1Cuaeu4tgxu6vjKafXCXKej7nwzLLuDD4LehNY1NCkFpstt6Jp8WZQqr7KhoBKb",
  "key30": "3fed7dFoVu2pRgFJrr8RgY6znUQpVGwyMz23vJZbqEeTSFbqHmpJgZrcJD57o9B9BYRYzdDP6fBHkwFzAUREHYon",
  "key31": "4Wo1yYWUnHxg7uBQ9uVFdp93Qko7cTbFz9agcyCLeaVaf1xGFGhcXAN2fYHqMDJXwskebMMkTgHNMXhcnDXUDSZ5",
  "key32": "e4ExGJsNduG8BZdseR4g2Bdk6AsXx5XRVM8p7GnzxeNGkswWfU8yE6C2yyqDwrpNoE6BQ39qYQG1oxKaQJ7JQqu",
  "key33": "zdfDD1K3FmnFuAB1kBKYYhscXUyRxsDNxUbTbgGPwwdqyF7yfxxXYuP1KYaWpukn81Lv46HTaB4y4i25y2oGZiy",
  "key34": "3euh4TSatM4LPn3AMvU9JagskG4Y9bRJktq844uVg5M5dEDNjtP2YBRQBoDCWCc7y3xkgFqQKChwQRUeQQxiwGK5",
  "key35": "4StTUYCZcAV7aauNbFuFmhkAU6QRiZF7bgW69Azpf1SiStB8Y2eaFdLuEzKUKgF21TnAt5yRodnmNRk51CA2KURk",
  "key36": "2tu57Kx3bzfL9j6cwKjn9iJgJFTMR5vd4EoaaMjPzyUVYTAe6Cn5vnxHpk6jS8rK4Bt93evevXKbRHnFhDdHNWTR",
  "key37": "3J7x4djDsWv4fEbBmm69m4zXGwVU4iVwZzuyBoGiCvPCSZVYei4pMBev5mVE9XjNLiJDx2UjqPjhjzLhUYoP9mab",
  "key38": "2LvkWKwh9KNxQUuxA3CrJ6ty5NZTLF2AjnP1MCx9wSnztToF4jb28JmPuFUKxqZo8uyDFe1TXY33HZ2rDCJpPNbh",
  "key39": "hkxL3MbWjHdDVMGCKSHt7upwfucZceq6ySHmGMjKoQsbBtq8rhx2kjZ7yeg9mR8Q7XvCzWkdWqChMBcMEGorYea",
  "key40": "5mYhDNjrCRQZNFtHbu4ut34VhqotgL8hPyfT3btNLSp3zNwxTwbzqC2ix13Yo3W6WvuNZBbdHhuveRyv6JbLvomu",
  "key41": "2GeTCvm2FbqZWVNu6rea1SFYd4Aok7JmdkYeaupNjAakQJPcDhCrDEiEJbAC65eo9FXvwR8VFBpgnBNRk7R26W9B",
  "key42": "5ZkrZVpaaSUbqqQihnM8x7oJzUBjh9Q7skHhfMA1HoGSxe6U7js1NLPu8TdtHYk7pBt2zSwD8x4pL2tYrQG74Ppd",
  "key43": "4wkezWYL85r6CrcCj4NcF5i3uT64YhSC7E3hFWekngxMgvKfkx1gRVbe2uk1tbtVixQyDm4RCv8roP2ZQ4JFUASE",
  "key44": "2ypcSvniYBMAycW1KzHTeZDbYF3JBDpXmQCtvm2GeSReiw4Nt3dy9N1Xm8dt1jvdFG9GGKGqW6yUjkz9FMCj3Dmi",
  "key45": "5hHNwF1r9e5uQ2AYGboiu8G8mmT4NGJGTe7AZy4migTQAXyJoHYAzEHNxcTGLtAhVwTn6vyDAJR3Z1g7gyGLBVdN",
  "key46": "4qKFHpzwBumSb9DRXjGQxDd1eAZRZfVop7mjqoL31EESYZWjyya8sX5FKXjnmBrbm1xWf7jj38VFSW2eWqBmG4hH",
  "key47": "2PVCM3wJB4ZJFyWMYaLrZqFymdnJz1kyDsYpXVDGhPdNVaXMZL1Y5N9oMXmZCtaoPHZxjCJRpF1g2XL1cPWV4Gte"
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
