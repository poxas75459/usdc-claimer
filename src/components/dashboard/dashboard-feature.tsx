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
    "K1U1Nn5CMi2QRELrWqKmiS2SXZcKQoE2cdDT24Ye7zTyWJq1mA1nT5EwY3Xr1qCQX4vPhjXsLxmvqEbmVjzW8Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMNHu4BNtLN2jqSXYmk289L9u9zWDY2Q65g536SpVRRYmwUsjY4fuTmCrQz6uzkSXwk426ZBXFgfwWCmwQezz5Z",
  "key1": "5xR7D5T6TunZsUTLxtPaEa8Ji3ffP1GXNLrJsy5iv6tQTkNJbJJzu8pe3xuSi5J5psBG9R6bMdJeBE6JjEBT3HVG",
  "key2": "48wkri8L3zPtRahiPrJHZXsw2A6nC7pSskZBUFrT3tn1aQ3Xe9sxmdyUzkuYmrit1fzdN4Y4WxJM8CRcDTzLkTce",
  "key3": "6BFTDR4QpVprjLigqN4hKLpRjsmVu69YKAvXAbJh7ehs2kKYgeEX8cmc9rfjn3SVJ9ji9D2oTLgJuYziuhsm5q7",
  "key4": "4J71Zt2MzHKuuDrCZDUVHkMPrza3C7e7UZxkDeSzZUKP5XYGvepR8kpB6s8Usn5d5oKVBLeLkzxVh4yi38XbEpC8",
  "key5": "298bpqLTLPbchySstwktNLFW1xHtL7dC9DXTUfeDbrgVvWFCFaZ1CqmLPuLr3M38UpQPZbKFaZqJjASe7A8kyQrX",
  "key6": "3z9yKvDj76ZaSBgSN1pZAXyvAqA6EFfnTvmWE5eSj5pCdjkQgp9eFJaZYxeB2aCf35RCqMukq6zpESx7BhjdoiwT",
  "key7": "2e7y7fP1UDsvTzETwwAcW3vBK1kD5GihTEaZVjXKQndtcdoGhbkwAwk776MQGQYB8bVEctaeYTBrm2EoPnK8D7VJ",
  "key8": "3KHQUmXDouiJJsUiMCrhE9PCLkV4xDiDWf8Yz5fAptnMKfUFGRbAtuVv9ntBmYy5Vyod1iokrF5xt23vKuBBGFa6",
  "key9": "2TNipqNmCbtATgVt1xE2T4rm8urJXi4DTZhyd8VFuhraQ3TPzZ1cSZXDsc4P4TLZ5T16GtwxKnk2Na7EXzswuYc1",
  "key10": "4TFwLrpe11p91Cfmjctawzgbs5W2NooCgBv1NeFPZBfe1y2Gf7wHyLKRhRCyKo43orSgJMDYorYrHZaWZDrhFJM8",
  "key11": "25gcKUuWQnMecGoohyP7WKMc14wdKGGhHUeU1kuTs3439EEBDDDB3uS68AuJCathTozZMyYEeGLutMeYvK3iDppj",
  "key12": "3XGu8nTjDmBboZEpTaCvSVVANWyHDxNT5QL3WtTVZUSf8tftc4Z5hm5xfgokH2n21d2iFigDSVAJUV4YoHbHnZMv",
  "key13": "4JnCBCPpFWA6B5no8uB7tMX2rtECBg6ub9KXLA4pL3nPaVZDEFSxijFvjGVidX8wXy6qPHn6F4T4Aor8hdUb3vnD",
  "key14": "3S7KdTYBfAYYv5utv5GSTZxQ3m6gFLgU1gy7zt8zVPTAYwjLje41SF4f5wHumoJE24y9uYfQnz533rN9irBCZPRS",
  "key15": "43Pfug16upcHjuv1v14kCzsDwdGHayzwVrnu6pR6ksewbh1uJdb2kfyYvUTMM5PSBuTcND847ztwPCozXwPmw5i3",
  "key16": "TEZU1K1hQkDhtuYj6jmxP1tx6iB8Jp7cvYXy6Q79ygWQkLHSY25hKFV45foPaCJr6qMoDo7yBf2DVfbdFCtgTgY",
  "key17": "5SRLr5FG6VifrtuasACv338fQyBk6q3St7GeRtPzt5gYSzPpiRh85ZyjR2YbSgvsR4YdNsZCbNgZAMxA1PC8Pv9T",
  "key18": "3LJTxhXNQdhVFMnv8SUXYWxeg7dGvUbuYTQLcp9s9xCWoP3dcDN3HH5bBFwoD3wx28CKZHEvaQWBaD6te8db1ut7",
  "key19": "4m3DKp4N4wwwFxWjK18V4bdzeartYXYyijoTxCpRBnaR3fLdHv5MjmxunCdGmRh35ZKuYXanTJMN4caLsG2ZbmMP",
  "key20": "51gkPTmjuUbwwBu4jFEtF9qseUsNaf4A5qdjEjTTnSFXnQYpWmH3XxcZin1gqphnCwUhUr37Rxi6V5NN6rJtnq1R",
  "key21": "4qJ3K2KKJuHE86kBwFLLPMAb9kVqVeqsg4sX1VnA8hzRKPmGgMMNp1ZzLopTTLy8iHyMNJ5D4vK9DoxFkSNpL9Xa",
  "key22": "2HkuzGRSUxpnicLGdUNqRk2kRVcK2AuzyHt7c8vaUvENUyp3pHL1EPcH8F1BjH8aihQ8F4GCV1Hj8wpGZvX4BGF2",
  "key23": "V7FvnQi6SGuTjns3aV2yzFGQYaAiKDaqZse49A1rGX3zexEPbcsHkPdP1nn9xojjSCA6iyvCR2DEKn7nha2b2dh",
  "key24": "3Yib86jnaXWAeGHTaKtqgVfbVUXv2yvW2iiZ9gngaX3s4wFHk5ENjRawaENHcfQ7DjDzY8b4SG2DTrts9j2BzZFQ",
  "key25": "4ZhJLFib4hBgkhakHJgfLK8iyKmVvoAKtYan23rjH8bmwp54L7cAAYvyAtMnqN9GkihnXAJanve6iHotDDVeVrr1",
  "key26": "2yEazwrHV1aXzYaYnxCj7iv1uspS8v1W1wvtur4h3eVzX47wXGd5w2ScBv9v4tbGjBzcZwFjA3KUvZJxDML7b2m1",
  "key27": "4UjLhpLmhLZr9C3CJGX6FWBULSHVPYqs3CF11YTJKhhczCHWAvrEhBeoSST8hAYMimSq3HTSu8jfE5ES7tmUimRg",
  "key28": "5zVyXtn1QRAzq152wXG5PzwGNuR2jFg187ETbUK9UdipsnzaHyTFYT4VTCoayb5v1MmKDuoVxBLF8CEeFXc8ysPy",
  "key29": "36dhuAm9yR92XUkKC9biSDjCLXzKR4Cv79o8aK7Rgp3AzgJDwuHGUdnZQPMUXXrxWvaXVkjk8MfUpDJzQFy7zVA2",
  "key30": "4F2Tzxqd3HXN86K7X8gsUGC599GzYusqVmoeQEexMndjTYUx6Arbu7tmmSWm7W9nuXw1RRga1yYT4yS2UvVYnezx",
  "key31": "2ZjzGiB9gXatumA59QiPENvYpjKqCpCL3TAmes6Hbc4iZd4CgoP41vLn44Cq84LvgCgSgX76otS4qbxLpzPFhC5Q",
  "key32": "coNbYwbuoK4fsMCkrv4y5dJksMtgVWSyvYHvH3BXS9mwC8pXVoMT2KtNeqWFJVaeuycdRjB45S81F3vW29C94my",
  "key33": "2zjCM6dKZE53rbVv7WkoKPSB3ZM9R4FQoYswEjgyJKN9shz5Hw4V5MWqiNCLLE9MoRXAyDPyBiHBEug49PniYCyc",
  "key34": "4LgsBCXF9Anwi4V8VR29CcTxqKR15ceRiFpDr9fGFFFZsBF6jmnqnUrvGd4svD3DP6KYT6TjBCAtfFxrfxxLAakR",
  "key35": "3C9aarus9ZfbFv4cVgdH4Y7jRuggj8tMmuQsMZRXJTTfDoUEtG5J45JeRw6foPLvKmSPajxU6DT87KChz7MiF96y",
  "key36": "5x9GABJWDbs4v6BjYiC8GSoXSuuYQYsbGeYo6QSeJoGqVe17VHPGe8XotC2kkCeSz11HcqkXoYcoyCGHs93DGUPU",
  "key37": "rJKvwZjZ8NjDW9jfTQ92etFTEWPMgNeFZkrHbViVLmy57ccFgnCwnoHGiqBTNZtPa5zrAa7pvZ7EKdu9TQy3evC",
  "key38": "2uxZ29XC3esoo1aqQjvCeYd72AZEVVQdejgJ6wVoBha3q3MVpcytBVXtTzh1aDEJmQ8JnLvRQSxrgH7Ka5jb392w",
  "key39": "3PgcMP6Drre5NydCp3hhCSBrz7PvHM8DdGVctDQS8EnGsaUZvtMUBjoe1SEHQRK5UpGVmNuaAr51zdshbd1xP7vt",
  "key40": "3X3qMgzhRuDPkjT7iFiXP4p2HsMgTmUrjEKwYKVeQiFB385kS5bDLJ4N2URUtMqJeLUz8CKiWWtYxnRBEQkG1F1P",
  "key41": "5Mk2jEWG5mhpRbbcaSfzmnoX38DAraeykQTMZRgo94z1CdZEhEjmvto7sYQvtgy9SdEmbUswyLzAGYUgSkiiQsF7",
  "key42": "5UvA1sGys4X7V2rHXCgNgZpfK5jneFE94aTQTC4XymWKcxCwuTpfWMKvyX4wu8Ewx9DddsvjRhSojsVTMFBN5qop",
  "key43": "667WWhWF1THR6x9onoChpYQQ6YXCfguH2fvxevBJTvMWgdA1K1cvjWgkiBatWEGKNzYWucEV6xMPQq9rSPhF8UEB"
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
