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
    "TwQXywABJV1NRJQExtJMGTHs7fq3YkKe6mjd7Lx7WbSDf9P3bxdxwAicXANqgScJag6oV1PHhv9eip6FtDpbBde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUbZW7GDQHxFRSp3L4YmGd1wVsuuXddUu3qR1A1uwxY2c3y6p2w9GYa1tzFwY6NikoQDmAosvKP6c51vJLvpxbZ",
  "key1": "2QoUpUScUppYEfr9YUScHedHMQuwPG1uZjnGBEXHzkAYwdkmcA6hnfg2KcMWC4vQseYx4KpTTRkn3k388Ayvk6SN",
  "key2": "37cYgDYSHyEQgF6WiU31Dkwy8rA91XVs4ozuoG3CsPCsESvF6qqQ9B5SGP1H5zc4VWP4MQTVZBakZTkviRVc5jTR",
  "key3": "4cT7tVVd4q79xCWjyuSSr3svVeSSFUZSJzxDwvBT7ko8FfxZh6KPgejPNtRYdwF5ZQvwrJ5dRK8tsBtq2vi8SDBx",
  "key4": "24nG24oKDdYwRZGWR49eX7xsJQkdZKkPTRCEGYKgXaHfY6LCpzn3764XyMAv5DCkX8fLfxGFmvsJbvn3rRsXh2hK",
  "key5": "2CifFL6f9wP3VhZHjqpjSUaHybQnka8QbT3eCrwoYHFKJDeHsn4askGzibxBYCFiiDJMhHEoyFPuaGcC3fucaDAU",
  "key6": "5adkxUvafCgMNmBTYMancnH47frbo3HzaNBa5GcQ61dT9b8rq9USSXEtkb1r6AhiuVaDjd7t9wsUMpKFGSKyvnD9",
  "key7": "32cZFzhX3bH3zg8xs9nsVSJJAQYVmUeQBBY5mBkWJV3HkT12RisNqY91ttdN1uj5jbXkyFBsrwR1jAyVvhXmgDBd",
  "key8": "2UTZTtW1MVmCR2WKghLqycRDS5mdNb1hZpGvCGEVb4iwUu2owmrdLk1KjHpwxFoXazQ3xoJchWg9CKYxACnPSsFk",
  "key9": "525QeudVyvkmTqtDT7iLRdt5WETo7y89JwQnR1wQqLLUoRoP4u58mK9bQ9tb4krhY8UzamrPmN65w4svY5eJzyNX",
  "key10": "3z9fjGg9eR5uzcKiBLMhwz21ddAjLLiouzcUaKQ7MnYQnmiUax8amWEzwtiez4u6nKXDn51C3cdZN1rPzRgkt56i",
  "key11": "LhP7j7V42nMAahepn9bB2b2mi5morZBGz4qWbygDwH7CFmE2nn9DX6xi39G8udNQdjNwFDRFrF3xsAnPMxx9X27",
  "key12": "4kBq7bttVsYzvxCU8tsWH9gboz3HDJdLTF1NPp96Vyu7AGcB33pjzYGBuVy6iTh7CQtsHGUqp7QcgnGmPqn8Twhi",
  "key13": "5PaPDvzSRLrHGVt6jFSSMRa6o452X64qnoVyzNeS7Fe9cRhNPpwZaUNcgzUNn3zam6TkaHEYd1NEAXR1wRsz2k72",
  "key14": "R2NHJbgwfdHZXkUDUJDi2niihc5FvWe2tGFBZow9xk1k9R9ztZzqfqjU6L4QcgebZuW6CYMiWQyxhwrmG5FCvKF",
  "key15": "2Wy6BtBoFwHTgAFa3qLZ1MJhwQ7dTtN2H9LdP8PqDQYncLuCceR6xp79GMqjV5wyrT5U37qiGKE1PWHdntgixLAW",
  "key16": "2mVMNTzSKTztvdZDzndC8yHyYkUQTo1e6CimoQR7wPR6LiviwKfD455GUYs5e93t1Srmy1foGJ3qjL8zjxS4BS1g",
  "key17": "35NagBkU6aUu4Vz4igY35T1y2fBR7arLWvoYBhCCu1UbAe85gmvU1TSPr5nsAWfS76tVvd2kKucthoF2oyKxihsQ",
  "key18": "54JACehquoStwmNsn9etTyYyAnGDGgfzqLfwhxSfudr9itoAWHJYNNQJFnhJhSYif7H5sqd8bpZ3MJ9ETHSPt4HW",
  "key19": "2o9vL48JVaM7P1D6mPR44iLm9Hkgt4wLfD9z8B6kjkaWKN9qaChEB7sgYKZDKQeie1aXQxaAKZecUqiq1wLqs7pd",
  "key20": "42XZ8j1N4xKybkDXoHtgwxC5EZzqDyG2SRBPsR8Gqgc3MKAoQ6qQ2KpTruCnWqBpgUZiWf9HLyawss2hARh38PDS",
  "key21": "2u4zzEnB39WgKS84s1R7XD5XpGqsRtigtVCb8ZrRcas3HtywtC4Abt5JtRnLBzDYtVjEc5NEfmJoCzkGzZcn1zKq",
  "key22": "3CLqqw37Xcv23gbivbCidwhHjG6PVCagFKzfmwvA6YnYzYb3pDsFSSjneM7M8NNaWQHYpXARvgnNNrDdfYPZ5AWZ",
  "key23": "gmL6qipwGgz3dYRwSUPQCmhpmfntuDVTbRA3o1CVteXErz6JBAmr6ZYMerGyfhbfovThEGXV8vASqVGDvWqkbes",
  "key24": "JAx3Lrrc8Ejzvtz1DtD1AscMQKwifWgpAav99oQSUaNozWYXqzuPvx1bwjpqSBiBMUPVv1nMqBqgn8RcQXKKBJm",
  "key25": "4eqHqNgX8HFMkMFnDfwBhMgGW6DZmVEcyrc6Q7WHGc1TzUntW7qex7rhznPvKYsPEBSUM6bP5VDJU4d5zE2EegQF",
  "key26": "2xkGi6BXguJgMzEJ3RoNYwQZutL2DxoZcFuYL3uxouZXKY3AikQ17b7DyzjXcBEehhqW2bkobi4hiqgWUx3NrVA6",
  "key27": "5j1ggNMkLBWeSgcrbJYV3Vhv2GkgKMeCCkuvL74NWnrk76euSWAZ2D6dUynrbuSeckTTTb2aXFSuGM92K2KcBGne",
  "key28": "49zvFFARS2EPfdqnx9MzdHHFyK1fX8CE41DeEZeVkBTjRKXsQz5srpMgxywnb3BCTL16xfb5CmdYZAVXhc9S4gx8",
  "key29": "3sV9ZYhtQwLXuiwHjRZXDyZoTgMFVVWHqAGetQY8CM2qFxdioywKNCTCx7fo8TeyNvdzhiS28VpLw4mfEQFbvxTs",
  "key30": "467GT4gTduwgpz6dj6Epn471ryRg32wsFu1jAMqfufmggh4n2L8HiByTtDy5mCWnTdW7JvAJsTK5k4bH9vAd47zA",
  "key31": "2h4K12q59iRBXGQgZino4gYNsEJQsEwt6Um3sf2bWERDib3DV3ktzKHnoY8VLaLYfMAMdgRFRJJyRtuCEZJw3CUi",
  "key32": "4Fa22AtTtsuMpekkU2vcABhY5AE9wPMfFu4GFUUswiFRUccqQamVDAzwmYanYsjEYyKFX2grEVDdJbq3tap3BhD3",
  "key33": "2XQpawhFCBcVB6cxpETaAtrr8gsi31kooGXNhadNL17XbLtdf9DGBdaGcRRvaLy79KvU7CnZf4mc32h6kGyguyr7",
  "key34": "5bvkjcEAmgBXovLzQT1sYLS1xwWSwGh3b5zaBG8LVE8HLn8brSWDT8hiDSzCQADh2Rm4g5Jw3g6abmb7NBwMuCP",
  "key35": "3Q8LhyD1N1Qr6v5ysifGziJfYrUxyPEGqer4bAKNYXMBnEvrjtqHYnJ6AFhvJhiMdPtKT3vuRYJrknWDkpk4iMLg",
  "key36": "55tUCpUzz6rFKdtNURU2dN7bNbuiLmkEeW3mgzWJfwrNf5aU8pdJQQY4QffSxBbYDszTKXYuHtM6KiUvjMpnn6hL",
  "key37": "gofuSCqV6VZ2wW9Q1Z8gRWo3Y45gdC2vb43G8VKrG7hqHzonVpwC8SPYA47YQmzi1Qa7m88w3y5opFjDRVaySpB",
  "key38": "b3U3Jp1ay9DA3hKeMtU7LhAVRgYxGhkcGU3FJuCobyNtKgnarWZBFZG28Y5xCZjK34RGhbBnpWMbBVdR3Ef6EbD",
  "key39": "4vdN6FJaEaLpBb6qsJtK4SpFZZDoDdALL8nMYrJBeD9ixtWcCfx79f1Yo8boQHRsJ9SZid2uXhXpBHMv4m92ASuA",
  "key40": "4ihHxJ3oJ1pwGA8HdqiTP7Sj6CnpbRgo99MMykbU7xjrGX17BfvDGFeUem1G7G58zeUyoNj494h3nM2Pb1YVkW2d",
  "key41": "2q7bgLyf8xpHnbQM3x5GenJjg4R3wUFWQSuJ1mzqeLTgLSNcCRUBJfBSApCq29fU1PXnUKje6QGgBbEKbDzGMo9v",
  "key42": "5gyDSk7Nb1tqZ4pHeySWwfZw5ywChiGQs5X8YP6BizMqQGUTgiTuYq62RAkVerpZaQSw4ZY63z1uxqmNnYJiY5fV"
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
