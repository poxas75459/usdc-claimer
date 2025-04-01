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
    "35ZA1k8iz9KiDrDkbpMzofstvf43JzXAXoU26PgzSLFS9RdSxFtTYVRkrVhtkkMaXmhASE39VJfb3g6qMRfNuxxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w321RxAman2sXVbiJzd1JgCZkk3rQXv5iNApmiCyNdqgoJZJNCcyj6zzNzVxXjTzCUxsBLQ2qbCF3kbHLgJGXio",
  "key1": "3o57oCqyhCSsYXTSDhM1KYCdxcc58dCXWLbDXV54vZzggQfKfyPU6BpXU4wDKXjNbnuH9tiTsueyrJ9TGeJ1Vhgj",
  "key2": "9aMBwxP2QF3xd6Ya6DFJV8ZRhjEdwM1Cb3Ryc1QBmrpTwQJJA4zZSyKR88BJ1d2mYGWk4ctb85dv94tVoVGYgZh",
  "key3": "4TzWMeEDtaXVfBGE6YhGYhggX7m7c5wnMXoNWh5UQT6opwvwoS221QF9j8Xs9ZNEjdBfPQbgsUNXZ2MGQCr7RdHB",
  "key4": "4NthYbFVksQh4R6pBdP6KLTdjKi9TED69yGajn2FEVNcXbg5PiFiD3exN1iDvDuATpQwscCojEfhA6KF6JLfRnuj",
  "key5": "DJTrstRY7wKBZ3fY1eV8YCf29dvvAmUhTFhDvaVvBK4xdnWHpXXqb3u7DWFntzjX2YH28EdvN49ziy7AEkY6p7F",
  "key6": "5NpMGH5n1SEDgZMxrJTQgjSSDB9b1w8Hy9g4AY9ZEguWCahyfBbfcNT1VLwcFDY683K9Jhd3h1YWVe6vvsqyEexu",
  "key7": "UQhnMh15f1rcxxSmNuV9odgz5n9QtUcC46MpH8nDV86jeffWk8CF3sRTxBWKovrUQ4WXdHoFUbPA6vSTDSdmmsQ",
  "key8": "2bxbjpQx7yEVb1xa4Y5P98KCN6arzZ83HD7CZVUX6LTGdtjqNVUm8hxuv8xb8ZLcq7rPtkqDmM7MhemgxW7QEVrU",
  "key9": "5pfrvZPDcNuxeRaynyFU6prsof9QivtNexdNHUZQv6pmAFi4or2bYATumCsvdB3f38SpChawrN9d9R2dDBE1FNeN",
  "key10": "2ij4FNr5XWwMJuV4SaaymM2vHKoqFrRwJcFFHBNdvMpjyD3TioP3vPc3o4q79JcZ3TP6LM7tVPLxeCkaAMgPVyc6",
  "key11": "5dkGC9RRCcb2Wv5P4HkqNr1orjHvjnKsHYx6M8ufQ538es5bXPs3cg5eLWQS4bBN7xiqkMSvZzxooNMk8Vq323DD",
  "key12": "2GVJMnqMbEh5qPm5RTfjGJJjQXJXhkox11bNRWR9b1t5W728Tnb88XUGWL1gissPEc5gWAwEsTcS5VZ459H6r13J",
  "key13": "5Ux5HvZYjoqFcsFFbdzE3aAeWzjd7PGGq3EiisK5J3aiYiovFwkv5ECioQnrPaH8gFbgWqg6taKJHCZG1hUqPck",
  "key14": "3iT4zwob5CUyQ3aU9GanpCrGfSPLgk1htPBpAJ9fFA8tGHo4x8NW7LaAMk1cYJ468hrGg5Mp5sSbp4q1hDdWQKbT",
  "key15": "5WgJMApRCEFaFDUcHdswGTyXy9HngweSbJX26YSj4xwcsxFfMEYuJSF3YkzB8arCFaQCUGKPGBAAyBcpGxRDXX2U",
  "key16": "4k6sDFxDvF3sx9CWArQBJUmNiBsjF6f4dmhS3VCKzNdaV8X8BiTCAKCg7dKBTf6bzwtHQNM4WsEEd8njVLrkRhN1",
  "key17": "4yob1NJV3Yz6R4VEfhpvvWVzTZe9t5jA5UcjJjt9WHHPmkeHhB7Kx6eKJDiQk8JgTBCZTwmPmZV3Jik75mMyaxcG",
  "key18": "rwgEvgQ2P5Tx5mftPv3VQhCx7wgD8RcFT6FywBJ7vL7n2dxV9p3PiDge5ioub3hCrYk9QUaZT78k8TFUxwJBbjG",
  "key19": "Dp7naD9ACj6sFx9o6kRhV7tMLehXF94etBkj1m6JjwFp7NCtCrCgGSSyuv6SJVPxu5dganpZveumvCygGK1ox5C",
  "key20": "3AoT5gco3mAEghYRLe1VnvYvMgfTQx1LtLRHSfXAxAWV65EX2gvjj6TtNKXpX1eHDvGBUV4nx98uUm3nDzFSgmbj",
  "key21": "3J2JSrxbPQY17GQLLRVVq7bu7SswLH8r9dRszkUZTPrZCPY31WAbAgyu7AB359RE9kaqRRkW3J9BhP6eA6RE6kCG",
  "key22": "3NoiMpFUMUyUEgWkr57bHa1N3eBj9TRiPY7VSR28biQopeAAMegRcaWfK3N9qf83hyGXtdWw48hZZ9o4j5ENuqh6",
  "key23": "3R5WgaXJhN5C6JL8G1oMw2DQiohMxW1jqGYZyskpcSXri6E7M6mW1JCodYtURidZkEAhLWdJwvx3xLBS6GXciAga",
  "key24": "2Kc8hrtFmxRy1AHjD1kUzKqjojYVEjNRJSgKJW28CKcFmjzxxwCcvY1PGgs2JbZxQ3EupQgZs4NXtVZvZikYrCPh",
  "key25": "3EX6VsPQxAYrwp9eXDq8Ff5Ka5byYfuBKpDU4qnoedzhtsWAkRY672A7vxeKRj9VUKzcy89fj9AJUyrkgWyRYSPz",
  "key26": "5mcGHtCwnSYQieKQaq3zzmppMmVkn5Y8kEUepxTY6DWoRpeCQ89aphDWPUb1uHLtyoswLNWeTpQZV3DiVyTjbs42",
  "key27": "5jtFLSDzvPJDD6ArbJXaYHWP4P21jARhj14Rjy66A3FRikPYUkrKqsiWhyABbNydxNPLecgvAKiz8BBvAck8KMBx",
  "key28": "rn3oR1o5drTcX7Yna6s8UfWbScsrpeGUr3UAP1KwXoRVhWTnZP6Rpto3ye6xqYrCoivYGK6RYpn3VDWZCgSVjvZ"
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
