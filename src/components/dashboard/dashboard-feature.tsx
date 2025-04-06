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
    "eYERxdzU1XLAbq5KTobF4GS7N9WQFcZ6NRJBU5grGsGFWZaFuP3YsFccheasfK3gFZneu6XnTAph1XDixoiJRBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jY4VRSgM1yerXifjKKgvwNKYNRqg2ftfB8M2hMa5RB2AefWvrJZnmC4vZFM5viRicZv2LyG3rmNxiKiAJNSjni5",
  "key1": "4Ej9j5DnkS9goU9qXySF5M4uMEbHVyFAw8WSPWx7UjGZzYYoK6i5h8CfRTFxd3SPMZVvKSv2YB8R32zeGPxNM7S",
  "key2": "5Pn5Zd2J8Csgt5qoddAwbTwecuJE5ZcStm4z2Js5XTpxpa5jn5N5bpwdS7muW8v8LHYcJhDPVLVL5muYgZsPu9o1",
  "key3": "5gQxMtX8s6Q4spzV8izvMt2arGa3nmKgYqFjZPSjqYyqJMMYUV8ithCi2bwCCtZMo4F6mxte3LAfD3TcqFFhanSz",
  "key4": "Lazrxx3EG838cj8oE8aAEAtz5MCu8GpAuGvrd3natc2NufUxmU9K1p2V8Q66R4cuNZLzXFFpWQKKeJfyrk541AG",
  "key5": "tKBg2j4iw4ubkgkKssVbpZ2ezpFj9yXKQc5DfQFapQVSrok39aFyB813P9NXmaPtybzDPJ6Mn5vfKFjXB8ZSJ41",
  "key6": "4i54Xxa6oSMDR3jN1xSfE7K3VZbQkweEsKUwwSZqfXhAP8b3vFGzGDAe2RhHPwY6RxvqaSQDEsmQdavMLgTtFNSb",
  "key7": "uGnf8vKGNmQwi42ATFKbq1YUmSvMn5KuDqYSpNG78PEETi463NMpSH1Qku3R6s7L6Rg3aqkJJq6g2RkAQFCoAKV",
  "key8": "2kZjkjD2ApAeMv1XtGFEyhz1nnokSTXpKHQb7Bcxdu2BCiyVHpCvDgF7sRULG1og4qk3quhUQK147EH5vLkPQJMQ",
  "key9": "2m1N6vUnoGDTcAV1ogxTWeLXM3xZV7JCnQmehZVLosfjV3a5xGriXSr5SWUk5KJwkRvECvXLKyxqvpzh7gNr4aC4",
  "key10": "61iLL5dNvV3gBDpFPrDog1B7xAdnvQnPPkgJYzLbuABvLiPWhvtD1sNRjkXeHU799pBBsU3dfB6jghj6VngkNSd6",
  "key11": "4DQu1HcosCHg1whFqVCQX57T3q31yqcM6wP92xYWrUowoy8rhey2dgFDuHCxqAxEW3ubz8ZTgedXou8iyQ3GEdZX",
  "key12": "3Eah7vFmvx7Q7rw8AB8tS74Jnx86SKfEVDR1HB1PVQ77UwTr6CC2WGzM5Mxf1RTcHJp5LrWyDHdzt4cUmmd3Z7Bu",
  "key13": "4xuKE7GnLAQxHofonWWJgPychTCHL5YVokUVmjVBTkKfbHgY2Dh8yFVRumoTxatbFDS8KFo2ecHnNvaqtMwUKyMo",
  "key14": "3HHo3469xYEFucFjS6vE6NVHHwbzd8yNHGXNPaVRJPQzdG4YNhvkSGhNzQGvPFWkVN1EBgqY2Ak9bgiN3pEhkvcD",
  "key15": "3q3YPzGeWir3496XzKMWvbmZV2cBmzrYnvwwbvdS74bD7CSnyhUukK8cpb9eLFLHT9HWeYBmBqH55qew2Ks8JYFH",
  "key16": "5gCUEV8uXymz3PsYLsRTMTTJdgzcaGVq4YNobJPYR9i3JmVhvnNokCXnBiyw7tKUhbnmQ3PR7rHGaMXE6qNCZEzF",
  "key17": "24dubDK4gvHRqY3MqqMPetMj2fRux43qb8CAhg7aSB1d33bzenRJfi8VM3fmhVULdUWrWCmuD34hyPHwviTdhA4i",
  "key18": "3ZrcEyhqWUg1tMkQxZXfnqZkdDRNAaaHYXcAbSCcefTEPHnCjxhSCKnfEeKFpTSfAFoKywbshos1CqJtQVf8S4rG",
  "key19": "5DHpguNTJZUGnHXUJ36EtnvQFm6EV1dTeXLw553HFh5PQqz13B8D1gq2uukNT6Dqm2r1FKQgmGaFeeZWqvopkJsp",
  "key20": "26PYUzWwb7gkqsZQkBTo6i9M5TnV2qpqfuTdBz4gcwtMEbuddUDw1HQ9YfNS4vmX7VSTHxn1LV5dq61zF4QRhx3y",
  "key21": "5LU99QaU9QoePJrHMnxJ5xnN4pJ5swx5yjQA4LQQhtvTrQzKVp82oMG8Tut695WUBtcji5GQy2SWQRvNmKpP9ftP",
  "key22": "4szYdKAvjmi13vg57dSZbYwixrfHnEbv3yx1YfwYtYUYbg8wF4BH9egFKkge8G9KcZgSxDB6gxwurKuf5ZZdSooD",
  "key23": "3zkfMW3GgD43B9KSYKGuAqLw2U97GMv7kpoxwB4NKfrCGZ17MgiN154NVZvzGunN9ZRTQ2MPE3cPcp7GJ1okrmPb",
  "key24": "2DE6DbjsxzmtjtQJ4tQJtAYS1rZGaK3LzWe1G6VVjSEgiMAnTYr2yHXuGb6zTMFgvvjTqovZXf3quC55AP6pUxah",
  "key25": "QF48JmVjCJE99ftDnAdW61C75XVgqvgrfWpePG8Uj4rSjK2WvQctLNzcwM2vMPbaHQBn49YzjmYSbfxNPHCudcn",
  "key26": "eCfEkXC6ZjrY54vszZbULsxez79FLKaAXAz2qnNgzvZY4wrwHhxToCPHZ8GKfYBLCNSPinqTVawTH1ddKNf4kQP",
  "key27": "5SpNmiBGEPcDqwtD88swVJHqu66zZUTEiqFyE8FrKAxu66foYhPzBBky3T5t4J55CmA8BBeFTv9YV3jhJ7SLhRSo",
  "key28": "3KjtNX5pLxvU4eiBg5b9EhQMvUac6jjajUh7g4zdgJA5a4naaSKr99z9YKSqc8zKqgQnTAqA9DgZUC5EV6RxvCUS",
  "key29": "2koemxkX1kFzGvY6Sf73i7dD2JzXznHGfYWuW9iD2cvP9uUoaqkfMzCi6D494jXUB5Gw2C35LWKLC3pCnYQDAKGk",
  "key30": "BE6W58SCuGUCd66fk2YQAM5fJG4P28zPrtaZtJ3ZX7TT9sSuU8nQ46RiMadQHyAQPf5GtBdAXT5iWreqoFDb2b6",
  "key31": "4AvVdic4Qtb1c4SnPdUNrF3x2hXvdYKqyxFBvMTZZu4RyBQjTiAtR1WR43Y7Hy8mtyXkNeaVrf2hKd22TG78wSDA",
  "key32": "5vJhrifkzULmW88f5RYNqYqhFaiktzT5BdZjNYJTcVRU62iFcVAdCLyA1KS2QMi1agHi89hk6a2q8W4HszyDJQaL",
  "key33": "5yMqdqhZc2v4Bd4pUKVvJ97iE98oKQVpThoktLFKNS1jqB6F6GdX5PTN9q4ukTeT8DdbrxnrQ1H2qnFo9qfb4vpx",
  "key34": "5to2ZEzYo6V7Wb19svjX7Y7Lt8me5eXzbtFpPbFNWQLmYFtieQbs8yRRSxwY8wjaZxiq1RWhcd1ESSHAPat7ZUau",
  "key35": "4q8cQvDbGVkxww8Y4ApwkZP5aivwiiMkaf6e2iFaz9gSELN3YifnNzNZK5qrzmQuKSLLUrvBgQCjFgmeaasxTkeq",
  "key36": "3EpKH83sZ6wLCBhDAigw5JbUNkeWfX1uiKNd2GEupsScwHp8iXrnv9UTMf5zKZ6iSG2TCdhzFwNLt136Xsigo6z",
  "key37": "3ZDXWJBTBkpx8jEqQv27RKRy3PgjcHszvjAT7pR8MnT6AghSaGjhm8BxRgxtMy9RJGQEMa2PMwB4zQ3hCwaKxeiL",
  "key38": "242Hhv5Sh4sQftvZuLeF4y6tHjN9kEdENrm2dSb1nVL588fs6xrVuXSGQ4tv7ZSdnN8g2Mu874bqVRW2xbmvBg8w",
  "key39": "G7GvfSq6DhLgMNrnUXvF9gTRyrhGP2KSqxLRzQJK9QBj6Zsh61eBsa7LgAncuvkvF936mDj988R8huGWw7NZr6e",
  "key40": "5XXZQ9jMUMEhdk1YJgBGFAgEn6uNzNgvYfjEMVKHF7LVbkpdviBwh3tVX9Kb8GQhDYMFTJV3a14ad6DDrJVTCmhc",
  "key41": "4Ewibh1GSwF5mRng8fHe63WsNqtzYv67zHQC7NW4HztPhAXVCGfsijUYNn2rc68L21xqmzkuxby3jSb4jxAi1C6R",
  "key42": "1Ho9Uyar65jdzbJfo9dPUE99tat4BD7vbY9WrQ1UBTUnHWgH8J4PHqRPEePPwP7JkuGxgarnjwv3Ygd9ZWmDVxq"
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
