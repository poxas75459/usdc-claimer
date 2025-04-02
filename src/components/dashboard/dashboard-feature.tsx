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
    "44GzCwV8WoMPpB5ENTcptmBiXeZMUnNkEAwXiJY1aVnxJiMBJdinPCZc948k6J6BbqEDUEMnkxy8fWKWo5nnDGG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PX64SehrVM2Pc88EEJ72Mwm6n9Uxy7ZmCBmVbSPYqfPQj3X4yQ47SvHETmgeB7DbzoemMg2G3cijCxfr5S7Fukf",
  "key1": "2mAEewLmf2XkGkqDf7f4FM8nY222g8YvANZjnZ31PaoktGJZn7sXB4eMogFBP1wV3bMxLubVGyardKt22bFqCt3q",
  "key2": "3qHWrHnaMcToExfdkgb3FJ7bdSkXQzu71yGSPHbEmtSm62LoqmAtFM94QS2aaVBzWmQiK2gxnqFamzDKYWkN8KzM",
  "key3": "43iwaY1Eszt6hcwWKgcutqwMtYyjfYMzHzHYew5iR6bC9RPnVdChKnpuPkAhe6t7Pa9qfmeLZg1NY439zw4Q9D36",
  "key4": "2zkH7kVf1Dj1nQpUKrfyaWivZsYaaCbLo7rcvCPm9P3NaDq79PRAPAvthgWh9kbBH4H6xJZNbcQYzehf2kcywBq7",
  "key5": "4dvaou7DzhhmVERAyQZqUEtKEhoB1jveM4FKSKQKEoW88bndZ5nGQR25Up74RL1GEqW8cTRgrcEMYA7v8NU6bv24",
  "key6": "5ACTAkV6fM2a6Ha9gnBxC2GtBHWLEk36jxuZs5CeYhr18p9PnPoNpSjN1Cr4S7HsuwuaMq7G4rWkhw8o3pzKJX5W",
  "key7": "2TXsiDq2p78zUCpLQUxZfHfb4xXXCWyjZTVNECEeYKQn1CfYF6atLwzAWDXdUVsHXEU6Su2iLYWoMZbE6R3KEZr6",
  "key8": "27Ypr28XrPjXxXAa96i5GTq5FebiYSznHsndUwHj7WSX6BMQcXZWhftKY9fenpbyb8UzBYZ7Ws1P3BrQgJfwWXyA",
  "key9": "64kmUFKj51w81sg25vvQaeVNkeMjHei97h6kTStuPmupRDUEVNCrdWuyZvPvLCRZ7WaV9dZYc6ARwqSG1b2CfCTN",
  "key10": "2PGE7EMmxwTq7G241GxMoDThvgp18mobDS4poJWpZbeVfdocs3yjcfWFwDE2dV3G5Z9XJWzPfueSCBfHsqFZQdzE",
  "key11": "3oEANn7nKPfHmYtGu8mQjEmu29QLMWhxFqrgpYiNvgvnmz6xDkxbyV59Wahc9oH9zGBh3Wx7kqsmVoLPZAzP9ogo",
  "key12": "5MLdVyWASkaHv6cp4TwCxzABRmrZjnYKLjisZk2buzPP9wLnwHFC7ePJBwdzHfcntpyh7K4PhYRC1gD2U2ictece",
  "key13": "5b41rNYtFRtkPnnrBWf891P7pZXj6NUseZeB3Rkhvvjw3saT6nYeeXjgc8RNcnHCmczLxZVj8Q8ZH8B1asXLM6Eg",
  "key14": "4Sqy5MSsaQV5cz4BUf9qcfiAY8vPD82xDYNCdPVdtfHnTePjZSQHNJ66rETxe24ix1PwQtyv87VHtvbnhJ38eHNn",
  "key15": "5HkWfa23AF9fqSutgzXqw1haqA8q8HuJrc75XEeDT3au2ZkmevYRj5GrFjSKfEkzY7WdUJQMskpwaM1h5zUwHWvc",
  "key16": "4GHasVYUty8KrxWbL42TwUhH1tCTFUvyayWWEKepoJMaJ4BzZqGnoGPAnKX1ri6pAFdQ9xsvaswGM9TkBU2aBC52",
  "key17": "3FYazQLTh1MS7y5xe4oQVjy67g4Jmb7qfkyvgC7eXQVEg7JuWMmrYdaGdKoH4W1iLMVjH5PgWqXsNs2NgeRYdkjZ",
  "key18": "5Mts7YpGtactoQ995mZocs9Xbhsez759MsJe4zydYqgLLi1HoWNA1dt1FmNaC3XWjS3QUczJ6g5mtfmuxDfjr4BH",
  "key19": "32YySeKvd9oo6korWQKpcp4viiLiXa8wd4H66o8z1t1HcPXc52VCV1Lye97FzWFpimhYrnjKHzZDvZQKkDEJxN7T",
  "key20": "5AAsewmfN4RDDf4zSA8YJY7pf1NgMj8Twe4jZsHysaWv1pvwLWFq8HmMzWfNuwjMt6GzxR6NWqAfW95hgXKLnKLm",
  "key21": "2K3drRD5SQbM9ydPfYJkk4xeFd9dyPN8ja4pjVytWjtwR2q2rgTH6k7kmAZcQ3kB9pNWA1NHWCMih8mpnG5WHhTq",
  "key22": "CqNnED4fcaAruFBdpW7pUuLsMiGWXXJC73AKLkeNHGLab85gWvxY3hTTwTSuep7Ef8R2G9toE1bSptFTKNbYtkm",
  "key23": "4CT83ZErYJMtU36N2XKGj9EwCGw5HZJGHaAr4itAdwa2uBxRLXM1mc8V6CajUnza8zkpvpLM2qdZbBt3FNLbew4Y",
  "key24": "279o1JvkMdeGpg8cTohPQ9ESXSAPR2JnBRRALD2aySsA8sYUjZLhkkicdMYabcX2iHaHugXMQ5sNeJmTwsVQoXji",
  "key25": "3aSv5EgscZ1MLonTyw5sN2ZUCwatt6ovjGrAubw7AJTabks5GCK4CEh65aVhmq6uZ8R2ZzGYF2qfX2KiihLNkP2X",
  "key26": "37N473YUgSAhg4bQYAVFtQhMHvPJQtZhbu9P9aBsDRbMJ1RWBE5XHaFY9CzEvwXYqPnRocfdPyFGsfDEZ56TKNTz",
  "key27": "57csgHJYJqi7Y9vYYM7Tkg5oy7uJQzPe85oFGMbm8fzAYbkFWGFfAAf8jf3rUV5PZjBVDRvuxwkhsZUnGugFkrMc"
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
