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
    "27xEAsoFjynREFYuKz5xTGRwfYtfMekjZNdv3AgWzus6mzMuBjQweZBkwKokujxkXEFk2GtdKvPUJLJRGKn92VxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RmETvJYMvQUe2izEPFSDRm8bkeTumW9i6nYr4fbozo4Zhu9g6kPYBGQemr2JiYwzyfKqH25StJFGYvzRY5bYq4",
  "key1": "3Y2dNkoMdnBujASQRAWK6PxcKBHpVkBGfCwp8dTsokwY4MjyYeByGutuZQCyFx2swDRAYUQEJfYctc5xa91tTp1F",
  "key2": "4uy7oHDreJ3rgaUuvDifknA9imRVDmouv5TLgMuGmeZKrAon38h3brcE9oP8xgnvRFDxb8n1TK63mmD9ixQ5m1pg",
  "key3": "2DuNLkrsqBKaxB5E9bHCwcmDaMJ7Z4Mei1tWyrgXN4GCq9yttViZDcYBuc5B7HTefSceqvoLTV7Amfuh6mN3ackx",
  "key4": "5dQZvZY8WoxyLCuYdh26gtnqcKLmqFiLghJ6TYaLVZMhqvDbJEMjjhB2rNW2md2o9mxCbxN2TTpZ5PTYHFk6DwoZ",
  "key5": "ZrEDCbU6eXCbDxExg4zv87yVs26qVRsx7txzK1bqE1imnnKNUHYLCFYJqbQXUVfzYy2181eyPic36msN1Zx627o",
  "key6": "T88bKBHr6JedK6cLH3zBAUYgvwSJW5KN4J9F8ncazdcksE8idtEWamq7CmHM3XtBKCt3JzXmeZCfPSV51QaBo35",
  "key7": "3JCcTEwtXzaZ44K7iJvBzETbDAGrKdzFLX6f4aLs3RRS92GM3Z2BfLp1HMPqe1UZqftd1wqB766UvvXP8g9urauz",
  "key8": "2o2UzyHCHZ5n6BbA8dgWJPG3phK4uzvE5xDn7WAD24njmhSN6hTvh69uooXbXBXXBzoHD7gDdQLgEPa33rP5vjnR",
  "key9": "3dp67f3NjYmi1cnFttfjxAWyoiPerep3ctSb6op7P3MiHJRaHwUyQj9zAkTRwSPRakXCh6afk6nGoEYg9BSnmkBK",
  "key10": "p4A1JBgGQWVmeNBCxmC7Y3NuGLvG3Xm8HtYHLGg8B2GtzoaQaQBdi5PS8MPhXBVtC2qREVkNSe648cCe7BaEqAj",
  "key11": "4ce2PAUjswtxdnpAVMFDmMk5CqFTM4fiEZTBsSAwm6WDjVZGUAxuPjtNQ8QZ6REsppLvpzYrMUJyGRgv4AKZfthH",
  "key12": "2ke1q9J8HGgoEACLeU17q5wPJ4qaKQGcU8RsMGGohr2LuXKuvW2LpUzN8Rdh7c8GxcvwLx9ehnARNeE4DV4FofMm",
  "key13": "bt4jVrWLtjMA4x8jZwdA3aS3CNNFWHo41rbHJ21n5CvcTBbnPWYk2XMhi8xiXWwNnVcHuRg92TTBdaU1RjP8Kb8",
  "key14": "4anfu8B6Ye7Nk6nd3EHxjB765tFzews7HFrqXejsmFLEDCr92svfGVH4K1fXB3pPCMbsd5NJKTafUsew32Bf5o4H",
  "key15": "2NjCJ791AKceS1tYJcN4irm4Soem86e4ek7k2DihhewYiWAVCp83zynetoUBf2DTWXS1yLwYsTbX2Eg9zy92yKgB",
  "key16": "aNSpU8mZMngtWXE5HyUzLKhw4NPNM4nNj7hgwQUKcEyTcBuyToBLyvYyM6mMokgXT7s3HKzHCduQkeHy12oH7cq",
  "key17": "3TKUaozVQy3unHR2199kiVwiLWDd5pPkgKV91u5Q3g5QBL8j86VpG9aivYvUbYKCgvnLzTJ9SvUxRwZ6pbGH8TdV",
  "key18": "2vo2kS8HbNmy9ndAH3s81K4bK1Gi2jpNk48CoJaZ4vTE8Ldd6JCm7T88xuJw6tj6Qiv2h8EcoYTU5QfTuc6xXNHx",
  "key19": "4yXaXs4nuSqkQ3zz9kab2rvGLZhfkKPaLCwLjmN9w1pdUUTTwdqfMu7U7SXuUngo1KE2tjdbgKMgzGjQdKksBrXT",
  "key20": "655BSf6LAQPsgVMoSVWYT5a7erPWHgkNYsz5zMMwpwJdGmCYqrqWUPzkL87v6M7cBLMnXD1LUaNfvGCmuMGyo9NW",
  "key21": "3vjH8FCgG7LcAhFzHXWV6JyQ1ob1koXwshGZX2C98v7fgxy1LLGY4xn6YC1ZfXo6j7dTYCbxFsmpR9tJFUWpag5q",
  "key22": "65j1Hchq4BDRMNBJuXjAdah1DkLXPLXSZ1fFwNL4WFuEs64fKkh9tBAC34c6THvedToakBGj5KFAbZQEiGdJ9gjm",
  "key23": "4rHBU5Jr9pyoEkHYxZmgR6RGA3SnZJhcxGKxJ4nLNsEhKg8CuKS539Z9wqpDV5po1dGqS2EY6uJwP3VLJegfgwTt",
  "key24": "4Kb3Bwh8NEiMHPbuMVj8sqWetYsnjRdTUYiWd8R93yhL7vnVnAw8hFLNAxb9f6oRsUdbNocPGHSahfdEyPwshigc",
  "key25": "4LBs58NstMmWb1qW4b3Moa2CtLiP4tZXhhdFQWAVF86RfHrqPJNa3j6NxfaAg5f6XFtBXpFVHa1D5NsuU9gQEmaC",
  "key26": "3KNhxg1S18VuUd6f9x8W4AifB7azs58na2tXrWBf533XkTL1QdjciLTQu6ZQt5dvMDFAUyN3CYsowvp4KkwymRYM",
  "key27": "5ZsVETxPYuNqCgygVtz96QLe2gN57oMB2s2n6ffKBLevX7NgP6YnjqNpcsYijsVtKX1tzveGhg9uupCbRE6j1mKV",
  "key28": "g9eD8J23iEPnkwb4D2Fot3fQu72TXBwL25aU3zqwUsXMRoGfSBPMELgwVLgkG38fUCf4GpSi88L2eXVNze3uiT7",
  "key29": "rTyc6FqN2p42Jb76dYkt434sGVfknQ8Bq2oKFuEXmwG7ePGJwiecnB1BaZNbYB45TXyxhJqqXqM1U2rE99WVzFZ",
  "key30": "43j9NqvDrLFAHmki6t2Trpy86pENcojzbAVMGnYMJC267DKhd99fP8URqF43fAZgycyCDMvXcJd7HzGk6avQdD6H",
  "key31": "5bTVN9XwzRmcDhsppaHf5gAWpHbnPuUVWZ4g6DRQQnj1Ye1KW5fgBfWuPGWXQVpcAQsp98bHBEuDzEoogtjDby3H",
  "key32": "3fR6HtN5gkzKL39ZACRt75LN6sc8nbBZbnBQWqspihUNd32jhWFYjCo3FVLaTK59Rq7f7iocgxhvTwEXMvoJNoF8",
  "key33": "2VWwM7FyJ634gx6NfZd4vLBpb6vhM1vDu6W5L1dhYaNr9bjmnME7FaLju5C43MzEXiyP8LJHzttRc4WbePxtqhUW",
  "key34": "NTCrBKn7jNkAJe4YPGoSokrxNRtf7qN8GFV8M5qT66pHrR1QN81zvqUU72CJxP4cTqv74fKV4tygGUjbifwSH2W",
  "key35": "2o1jLmNfpT3rF175ZFUpcVP7jPvNDjpXUiLAHivAeibv7A2R2gieME1zruuLEPt2fSNyRiXa1EFc6TAqLFyqYPHM",
  "key36": "4C9GLZtCX4BcBYME8FYpj8P8MKWfBgbymwBSjFYYU2SSHnW8eoVAAqnEyExi5JEa4iyUfWyZAZPXtUGi6pavmit",
  "key37": "4UPkfLnDszaaZiWFnUJaJfhnGesvKDD1fzu497xyE2jMcL8urZdzAeemJUy5nD2i4Ta6kzRgsrGaA8Nzdj4r49s6",
  "key38": "556uusSRtfNJNBNGLd68FFe4cGiXVDcaNMyufGnb9oWJqLrGoyZEfJQcoNuvEKfdwYgnuqoiLURH1QSEavgkukjg",
  "key39": "m7kZ696TvnnaQiCtk55xgX1V6PPMBqaW6BKePv4cJ4TMwjKByeMAuXnpKL3VTGBpCu2QF9CLypjgD2rZxDrwEMP"
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
