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
    "vVyPMjQFYhkJ5FPQ3vNbWGzTGK91n6j6sJnSaaXKocHVW8Xx33x7R8jnnjp8qwA1jForniERk2ebmXK9Uaej6nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G5GRMGEcAB3s2neLUc5AeTQBfBeAG4qbu5fc8VoqymGoZMmngvAb1UiRfCUpUsaBCS9PHCrn8v4DDkUfJLgVWA2",
  "key1": "3dJgjYE9dtZbSXcJDUJSEVnSVPhnzgrCaoLzYddKthvEHVBJgcFvrnjiAhBzw7D25XDt7NxFuxZ6etGHHwxi4FSm",
  "key2": "3mchRdaiUMivRpgsgGzzKfcgBTMH2oVrBfsxtqn9ZRDrHeTUp5ef4Tnei1oSgJfopKvzNjaBNXMLwPG33ouLo5c1",
  "key3": "3ddiVmYzTtQhVcHvdKLqcpqw4a2WomCc2DBN4RhGrpaxHSs8MTTJcoKh3jhtWUXisLYGS2Axby72cjxqq8ky5xfV",
  "key4": "gvo8TVEzFk6jNvNqyaHzLReBjEUvq2D69YaYomgdGxRrkSegJhGTbVRcJfgZkB5wHVpdHFHncW66rnP3p7hHRVd",
  "key5": "5kYnHX21NAhzf36rRk59MtHAzxieNFwVn8KYafd3AahjtBE5o27dvE3aDRaQBFJqAidJ7EAZkDZMTygjFLBSHAT8",
  "key6": "J7YHht4TuQ3zWKhKioumw3NAjaQhiK9QhMR758aXgZCVt7rZ2vPTEdy2j72srJ5SprxNcr7BQLnZv2mfqFoqMKC",
  "key7": "5Luz1zJNZ75CrvEjeCHvHwEb7pHZ8TesWBGpumE28MExEyEfLJpWrWBLtR8i3ZCZw9scSzvCkdcDGmFY7tE7gD1q",
  "key8": "2QCv1cpXqc3J1DKbNxU1ow2aK3QdLPtnBHduc9FTzGWSZ8yZcUWD1RqXQSdzsRwYqXiKRap3hYKed7rhsGPMXVGm",
  "key9": "fcsYvvWfBoJ1h8KjXYCpKoAP8BMSsEmeTKZq2pB7KLcQWkJ7as8ZSmqxuUeFuv6Yo3r5Jbip1jG3cZCeCqBSP51",
  "key10": "4QGHMcdqJnT1amGEsrwGExDGhobkVkf754MnMsvjN1V47zajqGzqjrNJnhm8AGC2SHTqU6sdVToJcvwjR6RtzEPG",
  "key11": "5LyUccpcUzBcPRSt7G8QrkKZzveqcuWPPKeru6T1UtwEkvqBz3q5xKvVzKEJdHAqHHYCGx6nu5bhdfFJqXzEdUgp",
  "key12": "4Kmjc5xkeYxK7dW7KzWVh8nxxzujX8do421qPHNKcJgAE8Qwbmnry7mAWsRxAXYD2omUqffqmUPkXrP2TE8LJbAV",
  "key13": "4EHeeiFCuUbgXssFYiaeZSjkDn9tmqxymgr1P16cEwBT7F1vEN7c3TzV8uP93xsexLpTKxGTQzBJt8Z8LCd2jMCV",
  "key14": "3fbn2X61YzgQKv38ie5Pz3ohCbpET7eBjwTnQsTPiijzis3jJAEsc9Q3SXhwstZ4tXF5YEFeUXECrXSFFHwkkMhb",
  "key15": "5bf4qshKR9Z9t4Shz7rRCc2NjSmZPJNCRb3grwo4iuqiBgFP8bUuxCGiX1Vt65To3HBb3En2WP5gK67urFHSgyGE",
  "key16": "22peNdNwUuuHziC4ZoYQSB8qhVeAys9F9jDQAxLFUe2dgqWUwVq92NqxmQvKRgimjz5Np5YFHPfNiZXoDWfxhRqK",
  "key17": "29eY4topyWcMjeefthJbpmJejL3xYf5ohyFBTgg3WUt5ahZEQmGmBzYi2DxeSk2dRQ3ZgRMgasnZ6e3HBtktci32",
  "key18": "42T6c5YWKm8ePhEjCvKeSWaehpN8eQqzuMP39Pj6k5PtrdHcmNoAwQGXFhGZmG44tf465GFGP1hxjRsDpw7kyYBK",
  "key19": "3K3rKCbnFPGnYwY9qLBbnoo2uxuWxsN4SjwhPsUNrpNo8nuePnjXXAihfr1k26tW5DuqL2KaDEKqCLeL32kCQZNH",
  "key20": "LUefVT3Rg49Sg2Ru4FLHDiVFidSAj92Pimmdwna9GAekLH6bHrGMNWsaX44njeTqbRDG64Swdjc1W9NwL1pCbCG",
  "key21": "5kSKd6nGSHGGqEUQBrGdcZX7TbZsZSJazx7Pkr41Tz7e7zv2QWLNKTHguCg57w53Jg1vjL3peYotDxNMYqsri6aY",
  "key22": "2YPxvXRn9dG94j5HteHkDQ9HziJAZVB2TbFao29Rswi56XvnHU1AYHxPn2SEN7SSyjr4vZXnTDSMnWkjSPqBcCN8",
  "key23": "KxxxpasaHPLFu2fCFgcS5jerHCYb61ivjqzmbJxgYPKdCxYdDvEgzpocS6fBjqtsK52cUjm4cwj1cueYEF9sycJ",
  "key24": "4Nzgd2LceCgbbteGYb8kKGDNYeePXKrMNga1eEqfpCaLKpkn4ftXvbShK3WAEngjWDmxjJzJj47PhWBDnwEcZmb3",
  "key25": "57eQSZBkCrBroCE2yctPBj61podQRrhzv2vSxHh6UpB8HkAvD8yBHZB82KU1QwXdz2vjijvPKYM8SXzajvT3DMa6",
  "key26": "3iqgNFP55a9Tup4ukFue3heZ1U684YbMfy6UrDYjzNy5A1uZVkGPVw72HcVEUxkSa21aoRZx23FPKPhBXQszG8ws",
  "key27": "2Vnx3jrWUKr1aTLE4rboNBWUuQpvSp59iageZWyiWzPzaFava2eCCpZDanYDqWi3RLgP3VUBDZJBB7n1UDDtbp1i",
  "key28": "4M4DGGr3MsLjHcCtn1BiDWzJtUSGPXQfTid8vfeJoBaFFZ6uM9oHgZLUsPTP3UWY4iiAYrWhWL6EEsX1yNgx455E",
  "key29": "2XAf5kBR4vcTgJqCxFr8vYMipJGmHb88pGa5rdvpdeQgFrKUAHRLzV7euwaWJLWnNkWqdjRrR4v2A6LGRQtVGXAc",
  "key30": "4oha33FxGT647p4KgTz9BNgSE3j2CzedEPYv9oUMZkYMYfsgLXGR3LhTGZwNFewGAUCn3mQyAGnAMbB65nibVJAn",
  "key31": "3tEuakhgwx1CsRacVc6NAiqWKBeJa3APocTT5wMyK15h6St7B81ALAQjfqYozzniQJL29Ha5rrabd6oF34hKC51k",
  "key32": "4tvnof6XphD8ARkq5Zc2LxVDUQRHUsdhZ7rEq3KaBMELHvbsgBbhYhdwkTvrHviTmDahojQA2tgp7QVtdRhRNbDU",
  "key33": "K5LqYsz4Rxg99kqWdWAZ1NnyVTdLm3qdibPRS4qW4S3uNtTzncVNEsHvXHUNuoX7Lt3CqPGwHkQ9qwPEcVRXzGu",
  "key34": "2iktaUxAhEuEyTD8rFHEaVEKW6iZe37BKBeYC2BZJdcWTUa7594ZkQAbBrtquSJXFCqtshEwWn5KREvNKGDXgFvD",
  "key35": "3bG6du6VyjKAPhPoYQjimVAKe9TTVSJBHTLg8BzUd4V8MU3MdHeGFbFmWtoeoUZNweuqfDRe9ps3wVWE1rjGEzdw",
  "key36": "pD7gtJHy66yFAynF1ghQdRdG8GRXXivHoKU9ysk7zdMxkjPfsVvAEXSt1kfavioiF8YyukxpC2VpWwyjitTUDSx",
  "key37": "3LFsaa5deitb3u9wWRhGDgCtKzDq8McEBQnPWNs7xxn5wk8vfndp8VyEG8yXy6rugFqvrsymiT59PYkFF5Pe27H7",
  "key38": "5KHMfJEMrAYzo615h6YdaCbCYMV8wHueQL6S7MPYAXgxxGa5CaiXnED4bYfJ6B4YqNZGVyBjqg1FXm8AEjyx9Eu7",
  "key39": "2Pf6NT4qHwWDkiSYoL7E6rSAGLHz1Uu8yjgfXqnp2YNRMVFRVRWmRbpu9czn5p2af8xurvVEj3414gDMVrPwMQmR",
  "key40": "4JYZbEaEYVbZsFjKEiSBpZfpQgfKcpcfQ9LgE3jSVFnyrEtQogS4GjxUcwXAeN8x3HXvUTi3RqtEw1iQPhPn3Hhq",
  "key41": "4sTPyUK4CKbQ4BvkoWxhTpqd8nUHnjzyje725pJ4Z8Nh4M2U9hDAbKyfMN1mdT64DS5urUoMv7nspZ4pzi2aRUda",
  "key42": "3qJsBCv5envqhjMmuS3YCzG5Hz8yrs8mvYmgEmbfnboP49rVAqVDrHAdSPhKtthrLRErUyMCZJGpbqSfax6ZDjjF",
  "key43": "3933TJZ9qabYSiEoVFxy77v19sejpNnDa7iPXSiw888V8DWvTxAd5kuv1Y9HFtGmZYP8Jd4awzbBCCeJwASP95pQ",
  "key44": "2y2H89hJBnT4tGCpv7UhZVnK6DL7aATV7dR9J8eSBuXUevgBuqMz7XuifMSRJxUyDEnTEcLaXyY14fiRaY1frqT9",
  "key45": "55q7FtUV4qsJL5wkPJqKXoVBDUMbuLL2iS5cQcoQCEqC2Ye7Bg1ezFGweeUcd62aD5nXd15G283cWMUjQpdGy1aL",
  "key46": "3jTdXSScnhZULy4r7Uqv9HnCKJzAn69q8eYGvnfiFujDzKY73xCDYWRbQABHDgwbm9LzSkHGH3ohkqW3NASipuxm",
  "key47": "38815CwtU4Gs59aHukbWyTssuaM7vwaRbkxR7rVSTEusuCfrQNmJ412E6fFv3SQ4HBk2DTBVtYDPJe9sB3W2ABfd"
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
