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
    "qswMY6FrFJN3qNZTjdoM7RnjCuwvKSmdYAqp1igb99Zi6W3pCifmtz7tPVxP2da9Y6gMD2smH4bVYn3JfZz3zLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sdYdVB7Qzg8Q8URRZtPw2DS7hQBMrP7W8dSSbnMGjs7V5ycw2wNyd3ZmejSV6tF1e2JrSqnYVdUAL1qLhPjpNU1",
  "key1": "tGBTju5zouvVx1zoHjmCn375TanTSyQhreKzJz6ZfzFhLq5L7eacYqn43Ruc7AyTdBZt2BwZLzVn4CKJJU3Fqa4",
  "key2": "2hwrrNXbELtNJpn3a7dk9FyyqFw5HZ5RZp6ax7fmVwkmN64r57XKNy4aHTCFdPQYRKWxWZ2gj18Bk2D2NjCfiq1b",
  "key3": "3rCD4t1ZDk6jr3rTZkPGcLzJkAUUQjqSSNugBXEt29kLgw9oXHQEeEcRgLDQZjwahb9nWDXj2tgEABEFgJt8wHsK",
  "key4": "51Usk7uGhJixxKsRu6nDYYXvoE2qeSikcKTtnfZLsLs5EMBtAYGmMrKHyLmiMiCrC3wUEmLMfRRRfcy3h5P5Pqtr",
  "key5": "QiG83WBdBmjCFVFHfXZv8sAudD8bJgGLN3iSTk19g39UShgYFNFJ9MmoNN3dB6ti1tH8MRLUu7f6c5Le66HVg4x",
  "key6": "2M4doKMgFsRVP7LCe2bEjYBqTeMU3aNngh9FuWDMvFSQfGvSvti2Q9B4muybQNPhazRMfvzGPYwKmtzXunejaNw2",
  "key7": "3HTJ8xRo8eRBCHBNSLVmzeGXdXQWfRQP9ttVCTvtq7aMWWoMQ5gDUSg9X3Ss8YxNWa358Bpr1NbENGHw199yhEEC",
  "key8": "MvWVZeVpknCiQJWubVKRB7mrsWTG3G9z7u2Gut4hW9tTyFAcFPyotwErk665nBChHMSiuJbuPwhPX1zxeJsU3Wr",
  "key9": "a9sBmPg2XczqadpBPAVSncL1HpEyXRbreXFFSkdUSg9Tj3amLvwgvUNuagNy5SoS3TwNx6GifQbb9jjEoxBCzCh",
  "key10": "5NM9jLXxxMbwekn38ZDfzyY7j4M1C4FvbkJ25znKuEdtpiuZjDPgYjgaFZd6WCG7q7HCbhAE3BV4jEq8X3CTEn9f",
  "key11": "2oo2AL5KvVK55xuGRcYo9UT4qexqtpGRZsj2sK1kghYkDLryaEAEJASS64kVvGknrNiKMSBsnTogwNtaCj4AbRiD",
  "key12": "XrbRtcJrfHBcx9mHN3KcKYNyxMaQieUvkeMHMdKKspTRN5CMUrV9KezGNCumb8rq5bQEm24EFhqangcsoszmF7p",
  "key13": "o6PirE1b9rwS7Wykd9juBFoXQ8GMzVcredSieogsyyHCdHjSHN7KR42dWnsmEtTN1CL9LBASRnw7Enj7HKvqVmR",
  "key14": "3FtqsnCCkjbCt9GmtJWDTXCpNvHkbpVb8FvRTgqTSkidXxyhgFiqxGKUwqmGyyH1EbDK1L8wFa4Anb6BeQKD6rzE",
  "key15": "4PPmaXmopQDcc3QTGHKNSn9h1X1MLbCWun3ktWfyZRC6HydTeAP3jGM3wTWcsAhp6x9qxfodg6xVtTmqBhZepiyi",
  "key16": "2f9qbeDKrb19bD7LX4LTZfS66z1QmXHUsBFBNvrFhwHs4Zowvo7dCuVXfmwUf8bV2HoJRnGTQNYiCB8TgjassR3b",
  "key17": "3auD1D6aeSiCjL5wa3dU16U3nvFZYti4FYfyagwEFP5Pm8TLU5e9HqyJtmXi1iHsP3uHfepP31zD1CUjNvJzNXq2",
  "key18": "5Jx2UfUi2eeVzfmWfCbTd7JcQAx1VxyLwpZcG2DYUimJsmg2CFQ3EAoWBER6soVWLdaGjCtDB86icVnJv8DrpRBf",
  "key19": "5b9YTbUgdzyxQ4Re4M6eWKXV5MPKBxopztro1GLodXeTwccx3izGvQkqSxyMRZToHSrHN8nBdGfhr1vc6RvaMD9o",
  "key20": "3EG7xxpBPtuqoHwVGggVmZfSqvcjkrGRDjKY8HmuamjvxvkL1zdMW6hWMvBmN7DeV7UNF6TBx6PrqZdGYHnWWY8z",
  "key21": "A7z13E4bTqLBPfAvmYR9Rm4PyNzpxMaxXz7CZyQqYLdhBm4J6y4PK4FCd5GG9iwadeM92tzSbpFozfqSzT7vTct",
  "key22": "UGTQYYqszHhbeSLTbwSjebUryLn4jSnc5V3iKgDjbdGhtqeTZ3r7wZ2CMXboCzKtiw9EYvQSSm38iQzqpWfCc3r",
  "key23": "4xJbn9Fje4ReCxNf4Riz5Vvexp65jqoVz7rcBFPRmq3Ka9qSfuYc3SkzMYTSNdLNp8TpPbY4U5Gv2q4jKDHuDfVd",
  "key24": "21H3MQniTwTRRGT18wFf5e2hXnW9h2khSNBbdfsDLBaZ88Va5Vhe64i6bYkZnX1FY6p7ZASQQ4vjbRCCDwMRjGqp",
  "key25": "25KMQt9cZNdtYbThVQgmoYxt37dr842YWsv3RrTr7XsEDqoQW8pwEBW8LQkwVgWPF1TZsr6XEvPJ9Vf4u8PouLTW",
  "key26": "5L8FfJFigu5QZgrFWFX22c6Cp2ZmutGUL2Fv4y97XQQM6J6SQbh5K6DNtq4YJXST9juP3AHGLT5pewAonNfy7UGm",
  "key27": "5ScGRr7NzvEAukMLTxAse9uStehkyQtQrGVLrn4B4Dhi1jK6tXscwu4BphfKYNuqbmdDH7YWczZDm92DQWs3TZYD",
  "key28": "4r4qtsZJwPKhuGSUdiBsJ1JyBw6h7TsAmpgySmuDF5SGeKdkzocRGkeA3MB3raBEmEc2jXjHCHzLqKmwCWMCZyxY",
  "key29": "5cYaTL81eGvAJVFR4Jyewy3Z3DAbU12dy3VyUfZpWYzhWZk3voqGv9KyibwhjhoGKejhTEy8k3mUvtRSrDByXETS",
  "key30": "hizgUXGkLiXFn5hFDLZ8iRqUQuVddkQkjcr754hxsLEhWVUnYmQ12jdBW8Az7BVi57us3UTC1BEekRdHPRZ7SHu",
  "key31": "5QxGs6ugvS3moJH3RTz8esg4rp4rZrsMmgT3xzkJEKJqnJcnidv3o3sUipwBGhJRYK49pz8ugeVRsFn8hi2WjzWb",
  "key32": "5CpZtCXaYh4U6Rtvp3vVQymLNzcdniMEUWd1Lsip2BkxVYntwBfCt79R5XJJYDKiFJniwZS7PxCjXnR6pXQXidtf",
  "key33": "szNdqawQFfFffQ12oQJMXMnTR9Qxq68Ke5nutf2ozs2nhR1PLMkJJ94AGmdmCyDgyFvvmrBckkuJBpQXGr2NrPW"
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
