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
    "NnE63PXqHNgEoyZ5RSMN21PoUj4utmDgbudAGHXurUxyWbkVC3RgPE9SJS1xT3XvSBoJQw8mfXsQB4uCTRJbeEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zux9f9ufADUGaVNrGUWXD9zf72D6T5rjHFZLNE2iWPPcMd4cAtgn8WqrGtEZjp7qTkGQUM9DQCAAtFN1XXUHg4J",
  "key1": "5dbKjwvJE3mEjDxFxpSy3sY2bsGcj23LsfGVmdqXGjhsks6KTawTpSK9R86xPFFWswUtCWZT1LRXdX6HD2n6njDc",
  "key2": "XHzKG5JTwkgLF3t2EAidBJvT7MUQuuBhhznzsD6eDA52GWLvHE6vnRPxijYPfB8qH8hhysGgb7gFYLYMXtsLEkX",
  "key3": "4y9DnyuDT7bkYTEWmSXQVQXg4baz6qVHmRPzeaQWDhDi6HAR9K62ZjnAtPhEPu67XSqTMJFyFafLPetgGKhXMoT9",
  "key4": "2ZVTjcoDR5PyTqm8Dvqizxes9HpcdL8Muiyt1JehTLVL8KLBxZJRYdFGmXM1dJDktyqdnUGutyKjgJnHa5qEuvrW",
  "key5": "5TuJsG2o4ZGowTLpptbXg3rTuHiwBmSAY9TAqTcAnuXNFeKLCbsUFSWyi4X4bhWJiodc4qFsvn8CnXB1G2GgM1SX",
  "key6": "3v2ZLmB2sMPpQmWkUfp1yUmJZ4QcKjocqwvnPxYAjpeKGrfFQtmSPjRBZSnAvsAfNoXWE9yKgVMUntAYmEXCH3bW",
  "key7": "3iPj7Kex6q3xNw8BGf3bts5cRfRwU2kHEmm1FJWvVmCNeY8jaU8iYo5gn2ukSYtXM62dEtAQWE1gCJrCke8DVwFb",
  "key8": "3JZnzA9gReemjjHFp2g6rfAbquK2SwZB2WYhpMjuLo7BBVHFvXacXaYHEngW4TZw8fL3BRutch2fuZuGd7v4CfdF",
  "key9": "2Q5QQsF6yhKSZhqhFMZgU9PF8JxXVRzKidhA1GmqaJ3dzUete9qya6krWyhhByp2vvCwPjypXf7VfeGjPBVkpLNo",
  "key10": "4NWQfaJ623Hpxp9eUSMiJBvamuKdb7bZ79UB1vgUY9GQGGNpQPQka4VrNUEngmvsjfq3X5X2T2BER9r5ZqptQQ3y",
  "key11": "4mjNQnSZGxU4Xc5AATKRpfhwouEM8mrDcREK74DX8ATSutAUi4RyZLRp6GdUVQe1kYQNopncXAWk9CYGniPooo9n",
  "key12": "2FYbk2mXuurECnTrYqpgTrMHYgSYqCkWRvraSQ7Kotqhgn2kPAaiEmoE5ekrjVVPycn52drj8S5S5MyisS7rV8hf",
  "key13": "2wDuQ67e3eoUUytcBErdJu7EscBNGSNEafYxZoxHMsZZfQ4jM3e7bX7s96PqksogKTE9wTftJH3b6yGoV7F5caoM",
  "key14": "2pq9PTFsA8NL4QAumhQ2nn1brbGtGqzWTVghqLE7HHj7KyJ9dB1rw6wTL6z7EAFsc8JA73YgL8kBVtiFi9uMuDgY",
  "key15": "4aWgjjhWYUircHHiJGHhu3wq7PLJ2BM8EVfT1R1bBrwkfiMXbS7A1UzaFTTgmRhfzLEoBsVzga5CZBuMR3oPFCCt",
  "key16": "HP9qiTbJqQhzn5pvh1RCiTypACt7mo3Vez7V9KxjqjHpsmmdXFfgNGfZYNSsAx9oFpPM8ZHHftfmnz8avCgQYPT",
  "key17": "42714Nk8Kr2uirVPEBa37a7PzRXxJ3Dpy21ksNnzBpukZ9ttuETr8jVN1r8GcMdwNuqkjfP7AjJf3bNLWuVpRS4r",
  "key18": "2J3H1a3NoUMc7bVVdjf3LAxCicmSZx9iCi4asjPLBiZyPsfvXqm7r9ZxCHCqFdLnHaS6tTaj1kn7prGKhJRYndM2",
  "key19": "26gwDz5k7FgvsLTXk9FtAa3XVGAj4Yph7Yvn9EDgefMXWUBz5PZ64RBC2iFUSvYmKbss5sR74AaSY3Rj8F5Ld17T",
  "key20": "29ZUuBXuKjFXmYTiXBK3rzFXa5cxBQzU3PCpbGrtZTzm5cq7vo28xEHSVL228o55nBFz1NGGwXj1po5a4WBt38j3",
  "key21": "5i1aBBx3pLkE5dbQpQhCRWTtEsbFJw9XM9EJnU6jDvR4AoXVuJ8PXXEDo8r56V3QGd8oVzLDNht1TQm9zkQvEKcB",
  "key22": "fLKtTxs7Yuavs49291n9p2a5RgxoRwfXqZaBYPGvfgHMCZvZ88i75KrxYcXubn5utRJRQ852dLfSe9sCbMk6YdA",
  "key23": "3DBWzr9dmyhuKfw3kuHfETW7f2ekD1UCLshyyeHBj7gnH5irAtHigNtdHmW8SRDkupyRoXnHG54LLk1jx9iBbc5S",
  "key24": "AM5QGarAntRnpwJbpQMrSQ4NibvFWuTQvDrKf5WVmqauRuNa5uVeHywGW3Vmve5TDX2i6HYwvG4mRUQ9PJPWAGv",
  "key25": "3vFu2Q7iysJv2A2Y7vkADQvnjST98BCc7MuAbg45HBEuXeLNHHoZaUi1A1G5jRJJ1izQCgNi5sFKWiE6R1U28xUf",
  "key26": "3K1oGZ4J2Ry62bfdfV5AsCXBmdqLiZm8eiLrMr8PExoCevV4Gmh41hGHQ6i6xnziK1aX7ooahT6EBqe9u2JoddAw",
  "key27": "4UJzH2AtPk5geE6VrEx5fdcNLFEaxVCQrUE5H19MXAkWLs4T43PwrCYGBmtahS5rTkQeRb3qhFn57wkNRoGw9jb6",
  "key28": "3gtFp8Lmjc3iysSnve1mVZrUkfisdhKud9GD61YE6MR6fm9u1CgKbLgJvXroEwqRbsc8mAwvNKp6feTLLwtNpU1C",
  "key29": "4i5LAEZ8bNc7sXJjQ2nzHR26w5RZ4Jdj68qt3hwEvhGGRiksXwaYp9GFY9RG1azZYbecobG52nnQMx3AdtWqoprQ",
  "key30": "4vK18sMSY7RiQMHTCqkrJDBhpWybf1C9VHG8H6muAyco4Tz9YLyvphhtzm2TgzgLYovuPZ7NvZX1TNhRHjM2fMqR",
  "key31": "2cGJzDGButj4YF1kANCf3n5cLWnGygFzfet1ggMfcVAB5VWyZCmJyimTaftG7pCaxYJmxWL5YEx3Y7YtCwG77Zaz",
  "key32": "5i8Usdo5CMCL9Q2hgjUmAGjP2Cqt1g2NAhMXrmPdXp6sLzF55SLpmaYF8Sb9hmZcWFokuGMxj5ibd7nYzupqS3oC",
  "key33": "TQczLC4nLS8xY1T8p1mBWqj5ZZXCZVfvdqKy1E2i5mMAAgHeJMhbi7GXySVz1QbDAEXxNjmzihgSj3JKpuFBFNL",
  "key34": "WjhZraSyZzwykCpNGhUwM3XTaTrkv9SeckVgFPV6VEdDQCss67ntYPpjvLGPYfna3VbuGzNGqama69MU2KL5Ksg",
  "key35": "zUwGBY3QdY988hVcT9FXpFjUhzATVryCEtfeQtLxtB5Q7wPSU6jQf59rvPfzgQWsjANaB29GKwdFkXazuLcCFiE",
  "key36": "2RWnUrq85tsm2CHPcXEFm8Ngi7yDpGQCmfN2n3G5aq31nr2C7EtRe9hkCam4L4vPazSwrGXXRpCNaT7LJbZPNgPG",
  "key37": "2D7JUC1DcFtybm5owfiR9kgvrK2W5d5DkSAFrcykK5Dfuo1AkkczvMZmbF4LgnYz3WTvju3fyNqFy4DhoWm3mvsd",
  "key38": "3wkdExmEpvb6f6C1WcTB2sg9KEcSED4J79JG4F6HwP3QzeejdsFrnftFMQeWLdFPYz34ux3RiM6WGnw7E1FQkJD9",
  "key39": "5YF7dethkNLpbE1amTYmKY8ureKBcMQ2X1RxUzm6kpLW2QY15DZe9bj3KNtPC4ibbssXgr6s2Qpk41GUfnBRu1Pu",
  "key40": "3W3xdVK4tiQE4djXXAeEVVpMuFzs4vDTzx5VyDQcfEH2ws16d5dwwNQjYBRetPwvqSv49FNkY9gMEoCjFzho4ATd",
  "key41": "3CgJr3G4Xc4an9yCTyY4h7fX2NbEskyFeNzMewtVtyHR41ggVv3hRscSnZebPNgFJAwVSFqJ92UWSFeMETmPf3hS",
  "key42": "3XgwAGnerg7FuFvNXY3onzt2BCokqxQaBJPHHQxFdSgYeL4SnhxnWH7LRcdEPkVNMNbpgdn3kJFuxz36bdk2Ajj8"
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
