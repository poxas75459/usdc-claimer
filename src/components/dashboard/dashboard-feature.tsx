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
    "64kJPcVtEnEsWk6fFDeJLUsujAfHPj2cHdenAWBLBSiL55hJC3AV5V9cDNpU8Ys9V4QSEHDzbQ6CSVitNA8rNpZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zr6q2t292wLhQ52vMhf7Q52g5ZwzRmA2tLAKqDevzrdHZrsSivNrk2SAsXswhWwgPJVp8LnByNSjnpUFfEB4CTw",
  "key1": "3JZu1DXEpj1kD8HjdrVtF7eUxYfRhj4LXikegTMp65sAQtsDmmDbC4mjtn5UGYtMNFd47DjAN6VHLBp3rAeCutLA",
  "key2": "4NNDyMR68VC7BzvreuoHpCzeJD1k4ifJGUvE9c26cDw33PMnzbF5dhkDzuCT8jx32poevehnf5uqzJ8Xx4qqHbyq",
  "key3": "2NoxNpLCMQLvMC5fvZvR66FzvNpseYkzex2Asx7HHCEFF5zmNPbqU78cFqJoHqGTec2TbZBjGPAf4Qo6d2NsgKZZ",
  "key4": "52So5vtKfdbLaH2iSxKN3gTwDpiBXktfCu56oJGSpFb4h2ADamPRT8Nf8zXJ5JTPVursJb1RomdiuwnEhmtSxcjX",
  "key5": "4hfVyYAJZjpziDttiX4EqRDnRhiNTiUzF15YLGVtDzVQyiL4ma3mQGe1hNPn3yLorQq4R93vf6KGBj9uDP9TKhDX",
  "key6": "3mGcJso4AoiWqrS4pPca6Lub2dxLJ3VxZXwPdW8CgU4brST1Qw7Vw4dWZFm3hCNtyAPrao1rG7QdtyrzjCQA24Bx",
  "key7": "5YQg7ZvhsNtCoCkH4BWqfmfamyZjbwMmBoQNjmW9pyd7XNnF5Q7w4T7ijsuU6iY7oF2KbU81vH3SQJedZwYH2RSv",
  "key8": "54yfuDNdUSkriBGKWZm44466B3iC2QXbLnNKZVCAt1AwTnoMJ7m6QEtXKbw3xhDqkbexAQ2cYCDV5QvykAzDfaSs",
  "key9": "5AAqcaKXGdCn83Pvvu3UvLJ23LrmveKmihXzWDNFMgggZgEt7oJpQQBBLBhdg6FaFvJW7S4uTZXUGYhaTKGntP6i",
  "key10": "5nxesC3GTkYiU28UeHyq9NvmHk6huWYedjHVUvrE1u6iL3NtmPpF6pYAKGNKsEt5FEZRJX2bxWQ8eGYqNSM5SaPw",
  "key11": "45ucEa98Mm8NRggfixUR4SjenC3pX9GVXhAd66NJqE3NzEwcCVi8XonnfbvzphdBYQtmAMg8oBkVVwc2JQcFBGBJ",
  "key12": "4RyWSBf8RPXcz2TfcXoPLYgBAJ1inTijnfqADtgRfUZkVS9z22JCM36D9QHUTypE9wS7eBoA64fWNZHou1aufK98",
  "key13": "2AGgJghaEorN3AV5uLpHAWXSMZzfzYMaUJ2dENjRnnxdVAL9EXeroBdnU5n9UZaZ5YxafAdnGpeFEu42mukf78Lt",
  "key14": "3s8YwCk9sbdMEyYSQJcStmy5Rsav71BF4uf4xSsgxBP5vKWGZQBNqEYSrbawALY9aiVjWbZNevTsf2X1cS3o5ziM",
  "key15": "2nnc3YsjFmpFpuXSpEw2VjG6HHnTgmYW1To1AGKLHpnuCG2cm4AUx3bH52ucq1hv9tq2NsVmmHeytvkn6AHoLyzj",
  "key16": "7pxm6R2R3V4YPJF8iNbEBvnWtueSPdTR6siPssNmSHNvUaReRyn13etFj66RM1e8Z5YXUwA7vrD7eHV19zFEjM7",
  "key17": "Sy931ac9jCvTSytMPnLmD5KZaqiPhecs4CDwxzhXbkWMyJMtBbXcvYMhPZR33ZCqfmxmrNTtWDRhwV7USvXDQPV",
  "key18": "ah7pTqAumZtR5tsAw5AcR9Wx4Ug1rRnByFCYe9B23CoteA5FMfLtATA2jDakTMdDVqgiepKaAhSRAXTaE3bRVdn",
  "key19": "4veN8rTErBtSMHtraKM7EoQZN4R4EWaL9JkENRpzhUvUE5Vz35TvemZEzV958xBL2wgcZGXfj2hMgoJsqqMftYMi",
  "key20": "2VVQJPGMQCmVe2KQ5nkyFogW8Lm2CPSeYLa8dJPT7DUHDeHh76KAdvbdEACTWWj13sbL2jPyZB3uHUjfyG1cEAzC",
  "key21": "5nnFEUSYk4bmvmmfCeREGp36smD9VvGK3dy9CkUyWsKyK4vrPBkbeZDS4Ap7a2HV3Btrq8zxcWBpNy3cMvbVgDx4",
  "key22": "nEau86gEoUMDWbkb6RBffMg9TTAi7sZk21dVKtKdbuDnbhoL3wDsY3NVMrXqq7BzAnN6tZHf1LaAqzP2fkWLXq7",
  "key23": "4ogtY2ox2HWfCtXo65MFQ9FGqmzn9SPp1ME25FFpGT4Zv686cKdhfYY4u9oeVraUKS5tCjT1aVe1Vusea6se5R1D",
  "key24": "4Tsr249hXybEV59bEkPf8W1vNBo3wod4N8j8kLkNgYA4JEKVbSjJV17qWjXcAwwg8Xq3y9bPaDJaJki4HveaKJwT",
  "key25": "47yXr22LZia7JcZCbXMiAyHUt9M1ygAMfEe81YV8ppQQ7cREZZy9DCuTE1XSeJcGCMuWyg6Ax6GBa9JGTjjf3qet",
  "key26": "2aN5d4NA4AKeyaaaq56oub3H2nZfV6dsANAkGh1Bpur6MtiEJifFX7LH6tmAMejQGvHDVxfacZZubd7ieqSo1Tb7",
  "key27": "45c93vaCvn6i5aZiQ7qaNvU15r9vzSbEkYcixoXaxshdDmSJeuWjzNYA6HkCg1h1ZZzurd8Cs3oJJ81B3uvVcoRj",
  "key28": "SrgNLAMVM4asZVzut6xK93Z9aAdLD94ytSNY2XKD2JMZ4ixzMWMscuWfXUB91vXM1PWCnG6f8m17rq4thg1RggV",
  "key29": "2TAzvaUcat14ftTExcrHYAMeFDkQzEifqk5SLZokMDHcDF67GJFWbATvgEbGcSTm9ygNybgyxDp5B52NJB3kp6Vw",
  "key30": "2LwKpDyGTbDgGfV8M5pRHfrPzwemKQmJdTQNxoRjvL6UCumCJrEuz8zCfJ6ZAKFVFceVc5SqLmRXPNbxDyQVehyG",
  "key31": "3ViwRCzQiFRK67U6DFuH5J5R1MnQcoCkEN8G47qW1YAhgb1mF72h1poB5pju6EkeFGW3Z7fAbUNARBeT6y1L3KgU",
  "key32": "2LHDcZ3MyfxALA2dioZUdAayq3GUkD3kHoB8EQz55wsKq5PcMNk49b5RufSNRW7Wj873CmUpBjNmTCh321r9joih",
  "key33": "4tkTUHRgkDNB14TPXSQWEpzgWzU9dh5iwrkgcuMADNWzLSrfFVdZberEVvd8XScteXoxM68KCbTGiu6QEXD9dPHP",
  "key34": "4e9RbZ8iRqMpKvn8GmryHefZR2VwAmC3a2Qo164w95d7V1awycWZPh2vRQj8vD3rhvqHtGrpYVrB2MAx4gvPozww",
  "key35": "4uHvvkxTJc4jiPHb4LFtwEgopvxwnmQuVHdiTnA6oiarNyFUyorAqaJ2UmVcBUW23voJf5AycTeUrHFZV5bAdWbk",
  "key36": "5uYYnvop8NyhyKRDwEKFZVQikuUXNKgDCZFtW6uiHpfkNgfwrabw6cVsBMhRdXCZMkapzs5R532pJsBqz6z9mgik",
  "key37": "5bFDcNwnm9e7pirsUTmiVV98SDqoofpdwUp28Ec1mTaDRtdQsDt2vDfBwaPpMcMUaaLgKz3G2vvfCzb4519A8Gjo",
  "key38": "3EKaWBzHdn8MijjfnQ4SvBhjCfDo6WzDooVizChH2a5zBKRpA5E5Cco6E394SnLUDSJ3PcGFXRgj4CBN5RNd3j1y",
  "key39": "41hP6XNCCKbSyQT4nwYKae3GDPc7fiwx1jQQeoUBhU6hp4tVBxfpPwCgp9fLJtdHSfnWUyfBbuxpCgRbgCuJ8M8K",
  "key40": "2n8gDpvDP2hmFxHkWtWpVCopRxuZQwXWxvARswTeMPZ4gT9WuPymtFnTHgpVf18RNRF9HZbnzgSYQmxTpKS29mZK",
  "key41": "3Du1CMcDGX38LbKZufXpEPBZfzaSGyyGquY4e2VNEhcRRQ6PdmDga9y5TgEuk1AiQUbMLte11zqnKu1BFqyfSSTd",
  "key42": "2wZfK1TSKzwiUpz3UHSpqdXayhGfAzjjwcteVz7nhqyYLP97qLUvVpLinjFeiBvNXNXxJRdiNtSxemtizbHjSHYz",
  "key43": "kp1aywAmbJMpfzDomBi2jfP6sA3GPy6CPdtW3mkaCLwNyANy4iMc1XLyZwGz5K3MgdsAyQWHczE7dyQgbHKcnEj",
  "key44": "2YXB8jL7nrdXm9PuLYjuVhtVi3E9oZ9eWRqAoCggGTDnCeKmjoZLocc2EC1EXwYKJZF7VdRQJRvYQgZyyKmUTmwv",
  "key45": "5dGon5Q38U6QCBBmHXR8REoG3u5HgFZAfrkHr3xVqgtZSEuj6Ejd1D6TabJQSep5M3qXKMPRT7h3isBK9t1xvPWh",
  "key46": "4XpuBRTo5C3iAPwsradKi5WkcVC6JamFwAZonUGmcP5h9NGgG63ML2LB9PgqAGYSrZGvGUWYCT67sZGXBmC3mUK8",
  "key47": "4GHSnqpuZDHPi21vuJbx4SxFKQHu8Cvp3bCsWbfCCL7NB8Poi6ZxMV2sW4CzE2WP4x4wehHC8qagENCvzHmFCFDt"
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
