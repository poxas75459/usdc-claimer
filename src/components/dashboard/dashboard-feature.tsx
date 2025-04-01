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
    "54bQNnqL4AFe5Y1Nh2Pyvy8CpMai45p5S7rSPVZt28oHwWcbNzvanV3p4KiaBW7yrScS1gTTqnuGoxN6hCsQSK3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eo93w5P4dwhhsyrWD2Te9C6M9zUt4sLwSjY5kD4yHHFU1iKFhVjxHUPAg5kTisN33MipfHDsCoVeG7tinicMbZ2",
  "key1": "2o2ViXZeHeMNkhrPi8wRthBrf9886VpLC19mcUk1wUEDzKSMxBAAxWWeroStUqsW1hdkxigx52CT2mCMYzUjLgrh",
  "key2": "61WU2PeQdjqf9RJt9873c5NTyFdz7HeR4RcyXn8CrgY1yKPLhtcDXwzsjDsNB1V2wF6Gia2rek1dESGb3BAu57Hf",
  "key3": "3jaF5sD3dqwNGJZK9z27bkNuHMsubkcn8ttbZmZW1R2JCLk7A91Tiin8fzGzdQL6392SKfrUUVe1941XhqGTatHN",
  "key4": "fVZDComr9fNZYyZJkfTVLsovxGEN4uwqDrp3T9uoQsQ8bHbhWkRzpvhJ6v1XzpZUqkZYs9bCnjbyAzJrVZXbz5u",
  "key5": "2weGc2fyaDxbqgH4jV46q7UddiqYYE8m43cx6k8nLoKatS9Z9SFwEdQtWi7tx5oDAdpFrGM43D5hn9sAvSJ4S29L",
  "key6": "2RQHZ9BBYE4tFP81Fw7ZvjtN29m1Kc4mrk5gn6qmsYJyXfsFmD7JvDWNAM7rBFYZNPBQzA9cZU2UYcM5XMivwYwk",
  "key7": "2ZvCxaJw8xpEKERqQbPJmHzQ1eW6NntLHAVsCEda68JFAUfVDmygVR2X4EhFk5kejitmhg87QQgc3vzy5JcoTq1q",
  "key8": "EfqD6Qme3YHj1sKxiNnK94MNjzKBq4trdWjMVbyGaDSCSzjx5hZYiHVRYtADzEk8xbh29ne4MhVE619qejASdxu",
  "key9": "5ovFRMC1a17cbH1umrui2m6MrCjgq4annkCLcaGtS5jX9iWhnU9m3dgUMAsHuDo6NBwYFkRZ65RaKNjuDGxJS4KB",
  "key10": "3LsvjmsiNQuzqT4d3mAhL6moDzvVC3BzjdUr2kaPhpyzDmVJ9hhkkJwBys7pm75c74xXf6dH8DuRnvCoDFL1DUz1",
  "key11": "5q5KvjtyxDog7VbnTAzsGqdu6funvwBskXMW7LiVT2WC5vaJchtUkk3UcZxABbRcbsmsSZfris4YoQwutYxjCeFv",
  "key12": "33QsUCQc8SE5kyztJmqpVaJ6fuvagaZp95B5HUyhNLuBYxwQHERmmxQxKPnVzqUPKTvLXndMNgHpC7x4HhVu6EM6",
  "key13": "3R3REdgJdySsAKGMZp4WSVWnWzcfTw4tkT8V8AhT9yhY31wWqSZr7BVsssYTVLjjojrZ5XudSD1UYnEjTPxL4csK",
  "key14": "4ThkGr2Ro392cmtVev54L36neXtLo6pnSyzRsLGbDtNodgr3XYbPa1P1qM2QyjKFGKFXrxBRpKoPgQGtjwDR5K2C",
  "key15": "39r56SxVmv84RPRQWrUjhCDD86HGSxW5uYPHAjHqBxVYUBSJxmhn8q8FSexHHGBXcXf6kp8NXYrkx42WWV3kwA5m",
  "key16": "4V1n3upDsJSvmiUTn3pqEPoqsRza7cNwBaokVrsdn6dPBe6NyM4afBe2drLBgrCzatr5D66i6q23vbDM2EAkFknA",
  "key17": "3ZRf3t3xneaR4ZU8KFVsKvQpzot859GfdyS9StveecNboA3u95zJSaPqpBMv8WShDyVGWxVNEh7ZRzM7FMzcquZX",
  "key18": "28fuMd61SAX5ijrwBfLqkdUynBgEgUmRsZK6fM8okNPKEpmhA1JHbhSbC34bi5DiBHfbWqzENH9JN4Y5q9ENfRxt",
  "key19": "55xcjVXaX2b4HgJLQYcTV5XaZE9cTrNT5kxzAXPMUtb9ut49A7U8K7NnZ65dkrENvfkbbBR4aD1GKE2yj4N5FLKK",
  "key20": "4jW9JA8Lz8PstZmQ5Z4cvMswXbdnCBhdh95q5oXi1rzuFDfCa5d3NamdXkkDMUe1GfgwMq44Jn4BG5xrToxkFkQY",
  "key21": "DaSa1aF3CdZcKd13vMC5nQahpCmdEXq9HEJtvAwyL41jPrMHTWKmtq3Svo8Lro864KmgwUv5vh8sQpuucvXTLtA",
  "key22": "5GYiLVjazwPpVvjVuXjJJKtaV8xBRdKnYCCkZyrXroTjf3r1yC1ZPnqbhXy2UrZ4XqPoF2T2qsnKeSYWCCzcdd5t",
  "key23": "3JRWKdGvZGNKif3G9sBpiMcndXywvuEjFWWKhKksVSLENrL1FJQJxZURDYaj7YZn869yuJZBzXFBZcE2iYDkXKMm",
  "key24": "59X7kc1JjEQkBoXDk5SMhxTY2c7SQGFYitq4TgRXb3Hmg2BLuZ2VdMXi1eFSQnGjNXJWEZ9E7jjctAe7bNME2qKe",
  "key25": "4KmB5DcHH8GCdjSEsmoZtEuwXGDxfnFHJnFZ1NXzhHbS4S54VdufNvL8rf63gp9KBh85zwCzVz1YpMFBxx7B9vPc",
  "key26": "5pP321oxmHGwx2ScBLCQoiTmSQyYWFtdV8GVShsG4E6jtz7snYqhZTtLU5uft8NbYUZ2YdxsJdrrXqywP9bW6pQL",
  "key27": "4eDsUefj5WCgLgunoHr8ofoD8UDNtjSc8aLoiabnUCqxoXTqqZ13kGyiDJTZRUYd19KPkBLQaWLKW4MXqpkUEm9p",
  "key28": "4wu7GM42DcTQFqMMGs3bEMJ8RhXb9H4m8FCGHPnpk8NQtZbRU9q5XdSaDr1ASbCMbfpjAzG1ggm2gyMmUSNHEiSH",
  "key29": "aBDd3TECA4BG25WQkpWbAFpY6d4tHnyPQpG6esnMPgFKBHk1RwL9ZgTatQ4GjPG2SKu6khz6199zxXow8HPHrKe"
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
