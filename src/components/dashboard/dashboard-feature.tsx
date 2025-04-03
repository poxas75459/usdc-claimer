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
    "2jQSoyvuWNcd3XiihyVXa9Pyr6PcwNX4rqcxLeXtpPc1n2HKr6USBA3NrhuAgoonbwjuifqjN4hosV4E1g4Dfn7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661myUxLCeLKwuscGP6BnH2Ru7EXYyGUb8JCSLVFaT9cGK5cgTTcVzEg7wKazWN9trqAYoCGK9x7rs222MHwJuKG",
  "key1": "625s4NJFq8dk59FY2MtdVDJGQJTiVdjsQ9z413H2bsEBvPEU69FJyJaJ9HfKVTEVZ8zEN8sdseGpao71gmV4edjJ",
  "key2": "4WiPizRAuyYqCcLEbr35YHdUFbEfzgpCHxQXJVQZzQX4e83J66kUYwJkctz1MvGVav8yRGTeTiimDFa8rJQjTEyy",
  "key3": "4UA1Lvvwfe1grxADS4nTsGW1DsVKv4sXEpCRQZya67rwmmgriLtQUVroYP1fSoF7gB2x7bUSSN6nq9jG4DU2tBv3",
  "key4": "5hWVUh1JWxUK3y5jC5BXuFpf2R57ST3ug1Sjg36DTp6aMSTG8BPkcnv7ddyv3MYvGeTqExaHerNf4wocYGYV5S4c",
  "key5": "2Q4S2EAQEqW7uX29NeqcY68GQP1Ed5vfTPtNYPQvX8zdPxvGDqNh9nvReHM92XWPBRzdwc9skqiT7zc2dCcJXF89",
  "key6": "ZWABGw9TpfYEgbKoVjDyhzaEE43BjiP5Cv51UKR9J6ZtGevhpLyNrH8xguDCf2RXjgeME1xZSgPPCdZWpwp9jJS",
  "key7": "4mSqyDpwEo9zUA61feCrH9RvZuyWWrRWhVcPJ3nKdy3m6GSqWx9vSEQLBgpuW3kroSRdnNHoWPdV8cJrCJ9Qmaq4",
  "key8": "5gipqX84zqbwZ7mTSon7HgYphxVQotQgoTJNgxoj7Bf2BWkxwLGCXDVGHymbpgTUHgDfRMtm9hrrMbNXnubHA8zE",
  "key9": "2h3hQt6km6jWSvTD1Uz6obrFxvyqJLUKxemrFR7SFHdSVeTrGTAhQ53Nsv2JzjgM8F7jpFbeuuFrbULUJvZZZNVh",
  "key10": "43zn9V9uLSQA13WTkNfDXEfD2PuVXVsER4Ls8sb6wCgtPM55Um6B9jTQwKfuE1y1MVymJDG8VcMqPbT8t8XpnaXD",
  "key11": "532LVcbHCcA338q7W6BFpMR9HbonwAq7vcZcwrvXfqcHkMgyAcHfZGYma7gcYymePwNn8esZ7AqaPjHo47WJpZPs",
  "key12": "4t3dLNdCbkpkrNjoUFfhHKXSk5Jun6drG9pQ3JVyXB6ngfxDm4hEVunCtGGzucLEdQj9MPts6XqfprHnYn5xAk2P",
  "key13": "5CgTSgxYuYLfVgTJaZdGUBU3VpRhH8qYK9UscKSByYzVDnrLmmDFsK2LCAT9z8yGrhgxv2faEbApMhCRWzCmzX7e",
  "key14": "CMkKJfge1okTbne8N55SEYREAimSqD4CCCJE28vZUqwKaoyB1pfuXGQWg6c9qWt7NUPr7WEFF1vutEZnJmYoAZp",
  "key15": "y453ZMTZnwu7wrVL7kkgeLM77ssSQ9ebLAYrBE4XdYP1mVaoFLUqjFTfQxx81PxSTp7SBXmhBUmM4sZfpADYdGe",
  "key16": "4KPMA1a8ckZJiotcbYBBMipxASrPGd58KmPdwBwyLK3E1w8mQ2vAZmSnwyirUzaMnBndME9mtnyEF4uzapnEoCAN",
  "key17": "2Nm1LjCSfN4Wrs4HtSLTy9uSSixZcwAmKNx545tjzoQaYQciGcGth1R4tki4SVyPajqFpvxCmXVZz1TEx2UzV1Xu",
  "key18": "5DyB7DA5GtvtDpNgzWXNS2ESw3dhAoVrz2pzGzT9E4xx41jopJqHEXT7tVvKKMqLadFmB9S3bUZqTSvvGBY3GiE7",
  "key19": "2k3Gj4UUy5cuu3H3CqZzbPCN1JYE37mA6xAUMm3BwdCZUvjctn27s1CF56FknreXbjwVcoMmWmi2oxrKjuZx8mg2",
  "key20": "3eKuwfxT5HWSPS1eGAUBWSoup1aX61qDLAvbEPLJyYTGzZ9VuQoH68kUmNDPH1nitCo2BZT7dtB6DDGpwxBroybb",
  "key21": "NGTAeoBFvR5XhivLgyMXSdco7HNNBq4f5PxXNvShDyCQT3kQLBciHfRfrxZRT68Sq7s5hrdCR4UojTm9goJd4e4",
  "key22": "WgNwJx9if62PekATGidVnPN7Y7VGkQx9ssekL6HtznvJir5kTvf1e3aLweYBeQzvYW6ECrCunWFY2A3H8C47tLF",
  "key23": "UDCf29TaBjs4DZKWyF6rvq5tT4V67hB2jxod8dHvNPi7eND5rce94cB1iF9xDNXhLL6KXv8RQhZ4m8EF7UbXvFd",
  "key24": "2apTsuk9KGctqJ13HKwWuYXywZjjsi4pdWodBFNjSGmpfLzGgY2d1p12jYug1uir1VoJqp6M3xMFbPBWmXE6pNyW",
  "key25": "9qLB8jJW6c5dfqfRiy3kFL28Na3wrGncKkgNgjV83C4j7eqKocUtM2VqweFnQoM8BSKsxkpCvM3pAmGJAApfoq3",
  "key26": "3cKkzQS1aQ1spER9aG1ouY2wGnGnNqTtzB8RvVkTatvQBjwo4Yub21JDziPgBiKcXUPcAcTesRmtszdmzV4VNQ3i",
  "key27": "4QzPJEaNjhui9okeJNauQ7jTuKxKGytbRvCcAUW9o1AbMXarqUjDZMpfoX14bknXYwSZ9Fhm7idqPjYbNbhJxBUZ",
  "key28": "XKiWHwFwbQeoxn6AK7hK13XXguKMWEx8PYKGkH5cjGAPCT4Pg4Xyb9z3iEC3bs5LXZbEiLzpTJ1CycRML7DCnT8"
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
