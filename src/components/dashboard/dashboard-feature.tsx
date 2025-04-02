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
    "2X1aURAQcYSQK9ZYGBxtNJwc65dWrLFNSBEdW5G4ckRFdcYyeVSQyQ3NrdXraaQzF2SFKPZE1ck67wJwMuV64bmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6ZCrEnhdb8tVpbmJ4fDFEp14hmpSoPSokSYdxcJc2L5fByLavNxKHPjJVXkC3zQMwrzzcw86reXwwhkkgeRt7n",
  "key1": "413K2UkHttCGkj2iyGpLU9r5Ldifd6DDuNwWLK4xtRfSVtyCjXSe1UQUgERo9tHWmmYtGTd1wmKWbUJRi8gU9F1B",
  "key2": "2YwG3HyKBtVwnyqGUxDdbWJbXqwyTXiT1JqEGVsFDwY6e1nxrBe3RXYD6B83EkU9n3qzwe47Sy9pqyvJzhsBy5Mn",
  "key3": "5PMYRcqeCHwwzddjdmn5F9qukYrqa2do7s5PqX54NkFw26rZwXX4rPx2VCPhWqK9U5jySojgGmk1bpu3bcR8feMg",
  "key4": "3VpkJMme1Va3vQSx13HMby1tcuPSoAQpeAFSmNFH652KdJ8LE9D42qowSULna8cXNCsznim3ktNwAmKapexRD9gm",
  "key5": "3Pmp3VxenGftgFZTsLrnHXxebQCfcNwwsCCWUkPT43Xs6qKdZiohbM2TxHcsyET25osWyHHT2T6Hk3oxZ27FyM9Y",
  "key6": "2R9FjCV8mDq8WdNzN1q2CuE1Mm5yYyBfFcDYQNdWYgKjYqwEgLqe5bwns5BpuE1fc8Yx3CsWhiRbc7z8GHH7nam4",
  "key7": "1N4RhgajGtq6dQszit4camDFhqi9UwZxP61J5drgmH4NoP6kyxCddVssGT9AhA7agHLxpwsbGsWdmPQ5nfQf3HS",
  "key8": "5s6cCtFQRQJpk56fn3h8ZRqwUYdcv8R9Z9vvAzidGKaB49XGSDwmW77mDeT8HLXAUH9Uq94s6CmKqcT9W5KWNpAy",
  "key9": "2cVWF9eLzMx7H7HTiEXR4fHNtJrZ7PqNxtUiwetisfANh2F58225Y4kwZWaNWsvjRn4LW7gzHbgcJJAJN9YUM3TQ",
  "key10": "4KzYnbupqwjEzaLpUHbUwZ9pQ3FfNsSPxWcRoDe8uUPoUTpGvxoJcnMLpNToMQUpQ46Wp8emsBrUMV9do54Dejb3",
  "key11": "3VvBbsioUV8XRUhBRKhZcivTXSLaTA8vVmXgk6ue71kWdRUviMYQftGRh4eY7CMtLAj28DXivRaXu2Pya5ZUVDeC",
  "key12": "5An5EQ5t7xHwixvUNj6FCpgnjncFCu8Y3YD8Ruy3AUQ7SkepgD4UQcWzsL3qg7u1JW8QKbsrTopX9FXoAqsPkWqL",
  "key13": "3ipTx5aDmJvEmi5mUEbhVS5q7XBoJyGqcV2MFSeCTfJBmgqKiZSgLP5ZZ1AJcirvVa4EyaRq6c3LrbdJBj3pxfmu",
  "key14": "5DtfhfEa4H3R3urrodErUUvP7ywXBFqfvDu6ksnfWa48w5Bkp8cKV2XcVqYBDGReppabWggV8jUtbnqNZoNbEz2f",
  "key15": "4XTKLEyLy3L9sE3BAPwCJyfed4CAwVJkwfmCVt4J541mzDp4uN6b8wjJ5bzxCxFjfevxQLRKFirTcBvqTs8kFMnV",
  "key16": "55oGSdEe6TtKnTthFewPTwEY8TLeN44xUzts5zD5xQCnvM62pUuJSULzCxQX1gGgqjoZqJfMi9uRxFfao5pyoXrc",
  "key17": "4MF6VCNXHrC9MWN9SUPzuDmMeXoy2gbvXXCSQLYLFX4B4KDX4JwZMCH9f8VKK3EK87H4JvSTV9fTixu9sRNAY2r3",
  "key18": "2rSCxdorvUBvDDHyXC8H6ho2WG1TZj4NGg2cPv4s49Atsi5dVWUgRii7BnHeXirPVbMJbqQYfMh7v9LszmvLSiM7",
  "key19": "3HSNBRqNvxckiLNe3Gm4N6yTVkVSuBmX9KqsX9a7uwBmZb3ob8Q6vfzYb1tRZzkPC5jnKcwKoomPsuG664399Yt2",
  "key20": "2hF69wpb3mjccPeZxhyEQvNXuPaCJoGfmBt28m8ERkpDjszrYMHoBJCwzs9QCnJnQW1XuqjLx5Cr5Q9Bp1vY6SJC",
  "key21": "5Suqcd1ueKXRW935Tw8hLKu1CtwUbz4PJp3ZmjWGWqZknz9Sdhji52qpag4yq5keaQo46wwnDBrgAfZ2AmX9F3R4",
  "key22": "5BDHrwzTXcTXwzwkanjNMiLkrJVb1PkFKhAHhPr7jJq4w2zX9nwjXQt1Jd2aGQgpzeExd7hK2b9tr93yFDBMyPJb",
  "key23": "3BNUYCQDzYLcCkaXT8zArnN3VeFBvaSZ6maknMFYL44P9UvnXmduuQ3JYrADSDpSK9cnRec7kWTbS5M7k7688QY4",
  "key24": "dYEzpfBAABFWneopYMt5yQvZtmKNPu777rsU3tXBQ9CTjecW1YpgNZ7Tyz91QCiX3oC89Pif5bVQ2SCYU6YZWQX",
  "key25": "3MnXgsynWYFsQBFSqxktNkydvtzkUsM7J79HtkHtvA6V3ErgDUitXtRzY4TQyNE9cGRjssV2dGnj73qXRhx71zZU",
  "key26": "5G9XHWctvRqh2c2A8czN7NjgafsLGja5eDkDws5DKnZJKMUL4WD8mGcFr7dck4k9zmyKhstJSDxNrAkWYojz8ueU",
  "key27": "55FxUNAvxyJ1qUEcXbv4NoYuGgj87TyEmTfnEr8X3wUVVq9WtcCk3VE8Pd8VKXdA7QQn3MYRcy7HfwQK7z6ME2ZB",
  "key28": "3ykdkA1k2LqMuTeUs8MPDd86m5s27XGRm6MYaqD2fMSzJQ91QoXxzU3P951R6utGxuP7jvH3FGtHKxDbse7LadwA",
  "key29": "3Bcf5H6ZvubLCRpBi9JMttnZbdz9YKVuGsKD1B5EYgo4HEayT52aaewx249vyZUWh2Nitdujry49dvHhe8LxQqB",
  "key30": "u762EARo7Fg9AKzQaojgetyABTQt4vCsXkbMwj1wNWDZGJqcv4Gp89fogpwsPRfsKGvQHaxqNpq4cLGKrk3sNvW",
  "key31": "45bdnbFZCicerKXadxVgCMxmNE5HYre3m7kBDdunkWc715YTFHiYHYnSM9FsShgnC75AsTqsdzzVcvoNRkELPywD",
  "key32": "Qkkf2iNRMeSVj1A8aM2D5JHZn4A35mgDxrhdw9zMjp7UrRvMJRzX41HsSYPmnAeMxqetsjgS4zsgWbZZgjcZgW8",
  "key33": "3QNfz8foRqV5q8CMVBmqBrVcD6Jq3gnqfWZvi7wG3Vp69SU3kDZDfwML8xu2xXCKbmH4GxSQ5J12JraZWENcoPiU",
  "key34": "4uaQ14CX9q9RSPPrDteqsGPgPsbnasfbJif9euHFy9L9JPWVHmDLk3YX7emERviHGCsS7syX6G6qRprwdr89hgSa",
  "key35": "4mNk4XPWPSAYxBk6E1GbRYx2WzaUCYTLj42TTUcRSgqudcSdR8BHy6WQ9nCGbDRVakAQzVakRStkVtoStBjCHhiT",
  "key36": "62ii76fUv9Y1BAF6o32tmaVpg9f5KdaXBcKcuboc89CFUCGcoL9S6te2uNXiYpugGBBvpDyegkXGGFTbvhr1TJVm",
  "key37": "JHKHMsojybSmDubiTRYzeQkQ2HUqUnzeexNLkmHDGjjbnTR6CouDrXCe3pEzrSD69mT3HpP2oDjzDV3bpMJ8BhD",
  "key38": "4vEVgrjMBTr337Bfs7VWCKPBjAsRxNSCmr3ghd65sTd2YcujLc5kubEhNkb3oMvQwUBnPkKs3snxMcyEmsdgKYDU",
  "key39": "5gjmhXxt32UgkTZ7LYSrLTXcVnM7jd2z2ESWQKP5DnWuH9JoEr1Eex6LHuR69EPPL1UWudMFjve4MAW1efmwRmpx",
  "key40": "3CGyJEB7PApW6xYeStFsp7F6wYKuh3m5TPNhGr9ppkfKVpM2Q5HUFQ9VCYAzbcLitM3oJbFLYwKFjhwdgDp6GhMo",
  "key41": "2SChXzS968rH1TBxsefaQZdMYPGpbhK3dfwVeybNSnVNG57dU3swsP6gWX6V2RQKkzYtanTTh7nqfWMo8RbqjjH1",
  "key42": "3YLnyXz7uKS7maYgbNBYriC1hGT5Wz25PxoQA9t9xctYbGLWeTPRJMMbD6Du4n8AA4bKuzo4tmLsZYczJ69DCFXo"
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
