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
    "3tzWoPgTQ4iBygkRYHZoRnc3BBBEqJkBdTF9o54D1An5pMzb3YXMKMFtvdfQMyT8kK9LfFqMre3WHB8VXHaZRgoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTCGzCKgoiBjJ2yk7PqSsZfpSUSRzR6Zi7nNHd1Ew8hAG4W7b1euEpmrBbYziaLQfFTUtxjPo48dWANnfUppRVA",
  "key1": "4QotoYtk5hkxdo3hSVwaBBd8qFyrAbyaV2XCStuDMT7eAQ1RDk7UZNSJqG6f7XWicudZaCS2bZHHiwkrwnZkZrgZ",
  "key2": "3S4mnrAqfrUxVyTK8jMeN61mzsPM4A2V8QbRD7HDAzMhsVRqMubLZL3qRHrCb4mw6EDANkEE5oMmdkcoFwPemeMg",
  "key3": "4gaMSvKHR2ktDei4WZ3mQAkHjFxaGYqNRV63SsvWEAGhnGfAvTc7FtHqSADnBiatpxV7BZvyWmukNEv3kbVVg4gR",
  "key4": "BiUxYs73CcJsbCaYD7RR5LGctTY3nB9hnMdMXwH8geaUveN7aunX2hgMeGAAPD6v53qrVx5473A4LLSVL1sHtv3",
  "key5": "5QxSjwq4BBDQxyfugS9MGDnEDA9ERGiDy6oUznUFqL2ubRWnWY3rY2ZDT3z3NF6sRbkFiQCthBR8GGadZ3UWeECX",
  "key6": "2ZfLu4rD5JFypMLekAkUEAsJxCXE4ctxinANvJwf1hCc1WV1oVqKAr2omyGn2UW312A5rjqYb7bfeMUuvaEMp86T",
  "key7": "4xc8TaWSNDg8pnWQ54E6KUo8x63WhnUAR9e8VLRKx76eiXPHw4p6cAg5FQkjkvaHFbhEhUAdv2QsCU8GrU2oW7fW",
  "key8": "4J3WysCGYQb9AgkvNr8hwbdmYp3GYeTeUk6SevddAhuTZjV84b8ZVK7yG7e2PvyyQBNhYYJansHs4y6TBBGNWwwt",
  "key9": "28StUPPHetAh8akjNyfMVY1tDWfJ9GDKriQa6DJ9w8YmqPkqMtxDozyDW7rxMC4JwQmfSrNUnQoeVopx2QCK2iJ4",
  "key10": "4KWXgf6J8QqWYmRXELycWKWtWfCw9WjXG9e7vEKjNW6JVwuvdLVi8ASzZbrBWTXUjqgo4mWXt9o9Y4CVz5X6P8mM",
  "key11": "4HfE6C9PGFKky2irtVEqzgN1z1Eoz44mctuQTQoMqgXRUWbYKzUZ81TjyANStmJ6hWnXBhomxv6HmRSQHBwS95X3",
  "key12": "5NYVdztgqhRy3yeErrKavjBs3dpqEYmhnzZfzjrqATXd1ThXSnxhfFkKTBxGNXNJPZqbxeXUttu2fGZjofe3rNsh",
  "key13": "yyb8vCUbGW68g9A2HYiQV8ScGZmFfD8z5JagWfVrTS7X2tRVkP8XLC2UpEdXyTK8EULL9hnjc5erfF7R9Utpsw4",
  "key14": "4zJAb8RsBC4NTB8osVWg8Hb2zhN5jnjf7BxeP3bEofckdMeZRzUaTDnyvBTbyWWYSLJyrUVkr41esaouXubivHGQ",
  "key15": "2feBWMMzv7mzcmoriEuAbhhuBahqoWPP8XWFEaBxucCp7t6vdFrhcCAbF3XMnThUKbNE9xThp5ZJNsRFLDeLETJV",
  "key16": "5HCLoBNCfEgwPYSotWdkdasTJcdmeKgYZiaGQnKQCtk3gsbBfYjqjoN8S3oS1hsSkiGUFZqt8nUBVUqX6Rc8qLmE",
  "key17": "57KhhDXXZEnJD13W7G2znYPPU7aua6NkQKZUrr6fDv9pVqVRhidqDhtwmZtmQNDwtua7p5q9TWxksuAWWPCsHVT7",
  "key18": "ptBrv6XG6PsZDJQK9UJJs5NQtxRNCbzXyuN54jzEwVxFzZ1VF5Tdhr5VcJs79JxGDNjcA8snzCvmT2yGdgAPzVu",
  "key19": "238edZRXwf4nWqPiYSnst6iydKkJfyRhKMXYc3v3mLjZS3K8RaJnsfQMwrWYZoo4Suynb1DjeaQtwpr7VpqJFgDb",
  "key20": "2C6kdRvkFN5KgbMVcbKwZPSos4tkRohkzbkejuR9MuM6pLXddjL1VfRc1SkDq6e1CjZ3Vj8FbUfikpRAdfjU5tga",
  "key21": "2XMiLuLcUhxZ4MBkqu3299BTjocJVgpha2X2RxyvpymWPp1mbhsLRZD5D3ddL8Yyu7q3wV474D7sgwvtyAKMDocX",
  "key22": "5sfCeTars8RLJTbVyCiWjzNKUcZQK2HcoMVPiKzqBNtEKpK3Ggfcx8VEr16uoT7vo6dUPKmHSWetudXHNntE26aq",
  "key23": "3imTNSbqyUGFDTnGHqtrzUqM5u4g6LQpdR3fnyqiMKFVZuFBsFTW9KnrYhBYCWyuHwcHQSYF7vNvrQfxrcH3jHHf",
  "key24": "5yQoJLJa9kmAFJn5wb3bHM6socfHgm3Tj6HVg2GVdGUE7bqwLoha77WSx7bwYBneZjzeAjRXMN3ohYQnK1GGvaiP",
  "key25": "2J7yTFBJ1eFCX95XfxVwzm3Q2kW4kv6fDSuEfcCkjaNUKqzTzgFWCoFsUbHeWK4GjEKvGpGZ2YN3L745AWw1vBEw",
  "key26": "4LTG3LzHRPbPwzc4R2ukc8HgjZJdUb1hzMXxDESPcYK25hM9PXDSQdH27oHPySPToxgJvgJ2YCpK8hwNvySVsD3M",
  "key27": "4SWD1qxFqp3LNb29ytqB5yXgf1BHFoGb5DYoBjcTY9tYzHWPeRW1kDKEPeg4cQggRj6RAqJ9BUQSw8THpVTU9yaJ",
  "key28": "3zKRktKGsSKepSDkKgm49Nf3n742F2zK5YzstCFnfaotzNVxdHpTBja6kUEHBHuba2h6zTmU7vSQVZNFvWU8koo5",
  "key29": "4fNxud3dDRzjmJrutLQHLo3AWRcxC4Qbi8f8LjUmrJUtzYDqnZq3o92Xqgqhc7JyWWXwFgwZnKckK6dvrhZAug7X",
  "key30": "RutvXXa1bhWiFj2PHg6jw66NtLgsS1tp7C2upVuy6s5Uq3o1HiWRhJJVzVsew5vn7gLGT5bJeWSdw1aSG6wqsJt",
  "key31": "Qsb4Cnyjskqcg44JWpbxXhtZ1Cgq5URTBiBReXe3CfFcmXAq7CgdDaus1PNDQERHkeeZNznHJYeg6YHNWdJScAS",
  "key32": "57MAWLwC7NbXjvSbosGPwNC4GBUun9ZYDKZRAdHtoD9Me8J1oNmx1dqgnBBySq6pDDJ7QsSNvBA1F3H2qjGhZ6GA",
  "key33": "51uGu8ygjRUb4mwmkXKPTkhfSRshALP7zXmpPocRZgw3dGqzswYbEyxTYVCZmAsumhUwKWQpzjBbx9LHSJaiDy8K",
  "key34": "619AVyqLeAStgRRnxMDTtLjXx6FkFgWxjXxWoJBcihQjjupa31eboGc65H9YGpmc2THPtVv7DmFu85WRANvkC4de",
  "key35": "2RQjRdAwV83SKeoCkFdS9zfbpzp8eMRJsZbFHy5gRignwqXge45fyTkfBS6cF6XntFVQ8jPLn3NNKqXRf9syPNkn",
  "key36": "2ZXJ36gSeMTtkeLZq4HL5tTABLyPbBwJF8kJEqRK9T4eM9uB7Um4KtTi7rq1VvJ5HT39Ycp5vLzJtHFzGGKsRsx1",
  "key37": "migJ34WVboHNSRbFtvWQQSYhxBwdbUA29Lo4M36KYtFBYWUYGXkrivkB5GAegJh16s3hBnbazwxeSZeP2Ziekq7",
  "key38": "2ZgdCRZGGRMFvpCYxANH5xRe7rR1eXHbFNiMXF9dYRYh5e6o5xoErbQMCkoxpAJY5sdZkoPVBBF5ADwWKyu1eFhT",
  "key39": "499dsn4Wpj9EHTh9sfZhWxvZEkRnyzc4pCdmNtUAAYEsyVxtQKWsjkYDuncaGri3qqJPtiKiH93EeqaM97BDKg8k",
  "key40": "4T2vmM2yZKKf49HTtKaAbpjiP6dQvJQGKCcvYo4LAMFhpDteeEhDGVeFWryNCdi2KiswGbKD6sBPSxFKfBmjxZBD",
  "key41": "57KEuC5zofPnWhmuULpgw39Fzf4YT9oHKkoQagYR7DAM8r9MTQhg12ZHYrHTwz4XC5sEJHRdnQjpJEMRwFfMnFd6",
  "key42": "121wnS92Mg7rCn38TkjK3GZLZSSCr712E8yuDR6RMhGy9BGvMtkzEc2RAnQUR7ic7rBHrFZe4RVfwkbDTh3hVwSe",
  "key43": "5Sd3gCCrB5WrkipJ3roL6Jv76BWG4HuJkkutZhzVvBZgy84aWhRqpE39brkBskox4183KfjQv1JEZ3yuuMJWBheZ",
  "key44": "4HehiRK7PdDkD4mPExMDguyo1ftc4X8DFu7KZcuqJcyY6cVuJRdZgVTCH3zEb37vEt8rZX5UQN4TfZ6muMWZ8W5y",
  "key45": "21YoYuStEFAai8FSDNGHuwZdTtJMTuiFjFYHfQhD3WgWaCgt11BbqnJvNv96d85qfNkDH3k6z5swrUSB9DeckEkP",
  "key46": "2vDoaN2BQ5dgE2g2Gzwctxgsz151RWDy6fdrCQ38cpa3sRpRDzYuWoGWVFXF8oQBeiBZykTisamb7wLt8gYBYE78"
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
