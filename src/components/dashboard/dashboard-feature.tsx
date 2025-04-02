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
    "61TVwbhNV5FbcFhh6HAXEbT3Uch55fKaBukaUSMsgJFbvHYwzwrQLTt4XCqyHamk3e1FNpVLfLX7xMznPpXbPJgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57E7w7t8iGwcuMawPY7npfHj2rCndh9fhwh17ERdZYNi6XhbF5b5kSQgaxhubKQkS6qJvWpZt7kyriLE4ppxewbn",
  "key1": "2rbUJUBYL69k7jBDHmjy4H3mX2gXX9R1F9oHjAZ8rHqFuKp7wfy4RostBRJwfQonYDZ8EsU4n2HasBPvzqumMrHz",
  "key2": "4fyCHDso92xLd7wdhFPEPf8Sff2nmupRm7rNsjTTULBxUuDHmdBAJE1StUsuNYAn5cAyxL21z77WMJ1ndyFmymig",
  "key3": "4wysUy5Qnew6n4BPo2MWpm8iBjxrns8WKyp72ZvMva85iMoP87TmE2M3ByabydPJk983GK9h5e7EP4oQpgVPe7pA",
  "key4": "2bhbgJU345LW1LDz79CyXYC4avshfM1WAGZ9CRBtuu6BPX46i9d1EVowEVo2sDiENyigqdKbQxpPcta1geBDpp6T",
  "key5": "4eeLUhe6NnM9EUXBsNPqyetzZcQZ1rUhqB7aCCpbg5R2srMCnTVnBoCtHaB3H3Nz5XGVNjMsi3sRo5r8zcbVcZzv",
  "key6": "4WgKm8ZAcwsZ5ZyRXMMUnoUsWtm2Du8afa7HKmPkvz9Jduy1YHwC758pwRmhbtXPwhiyracw6wiLef5iQxRM9Y51",
  "key7": "2fRivkbHGpJ9iFUn1E7WisC1w2WeN4NLA2QUzg46cHmDto9aX6wREp6KxzUYvidq8SbzXyUcU5aMcJuseP4yJGpb",
  "key8": "bpk79XaTqxgHDbvqbdTno7k9tdyvz5otRca77ajFKq5v61J8pvb1TKFkevtL8Fow4W3oD6iMQSCFtGLJJPD8i5N",
  "key9": "2sAswUubU1N16joXA4v9WdNzohzymxEZQh3pgwj9YRem5CiJsXzLgje5zXg2MBshBfn1gx15z4BhcoiKZRDVagz6",
  "key10": "4vcx5sxJgJNaADQWqz5azpqwCJto1K91eEESaTd86jv49LGokTw3FgEWsyEqJUh7pjSowSPwDzZhF6Uxh1jZJBFn",
  "key11": "2w2mudvFy2bg7u23uX436dKbxHuK778VTLgU6qSfuBfdHy4NJ6dYzkq8ZidruLpPwZAt4776bG4wKqdgno81byZM",
  "key12": "5XnAVHbrjbUN6ZqYMqopWSouPCZCAnCdungx6pXMQvXNKSEaUpaeqwwmQqUGW89PXGsz1ZW7JUquzgyxuStgFr52",
  "key13": "4xegUnvcaJ1ekLyiNkVpEcnXYibsgUe23QtZyriAfuD3Lsh3yatftcGcNq9a5boPDLT6cYx7Uki2Rspvb8rngguv",
  "key14": "ypNWDSdeSdXy4hhe9g6hnRDQCwkZfSgbLbwnS6AmFwymjZmHVGHpYiMswSPmJ4GbBZm9yVPYxBeESSiVQWczeFp",
  "key15": "y7KL8fQkoSL2YeoKfx77G2CQaWWEsg7uUnFEcuu895Vgvqmv2nJfs92i69f8K7gri3h1tzWH4sab3kfCdJnK6Z1",
  "key16": "5qaPtgEmetiqTNQMAXcrqLGLB9wWKFeW1gZmi59iBDiarenkE7VgKXmYp5sHK2ttVGzdfSJsrhbz4vDvbv8tJs2r",
  "key17": "2vAbXpRAZsHPUXUdbgZGaEJNVuVNS5WABMz9nfgrf4JKJq6tJbSSVZQcyhtjSAuHVYVPEx9Kw1SUbUFKWpRDfXp9",
  "key18": "5vrsGLY8s95AwTBUx38wvgLN9wFsvCioP6pvDodvyhUFJvJck9qreYzigzDR9WCKv4MGiA92Z5zmZ94oWumejj1U",
  "key19": "3JECpP3ArwMEdR3HqrfPNiRyQ26GXtYqSDfhffn9KAhegLreXPp4k3fRy3Q5H1mzJdQ1CD62Ljioq2bFNiiJ9cZK",
  "key20": "2M1cTHaTfzK9XXKWfaU3WjJCbWm8G1mLBSZqrR8gdw6zhZhBu584YBCRA3MKTQbFzjqGtY74bh8K14bE2eJAwGNB",
  "key21": "5mmj7bDWNboSUFXBH8kp4opXfwXnQ9NGQCyNGw4fgMbLRgw1jRkiKuKbPgnUecUjf3RDKeSgXzBJKYskVWUvapyU",
  "key22": "4Fr8N8T7EBAtMw5eg6B9WBMw15nVT2vfGjwUzqpYFxHA65tTn4QbTHBC12nGz5Gz7khM1o56XdktBwibH97uq69P",
  "key23": "67PS4sjXudfKhs89ZUHSAKAQk9YinKvK3AgKkUGrq9o1UeypGcAzPatgRwrGF6RGpbDCv6Z2VD87qsQ4213ASGaf",
  "key24": "kYHqLbBPCAK7eMPgFzppn2QsBsXExb6G3vegci7VTesMBeTA3Hq9A7bqt5UiU6BSAC4dLMCDojriGZR4geqpPip",
  "key25": "FK1vrXGJReGKFgzRsHx781SA7qcny3RznJq5D4fMbatr8Rmyqh71TquGfZ6KJ9wRWNzLW6aoo2BLignxMwKfek2",
  "key26": "5KoYuWTVrV6yfWbhvcHgqn5nWnFozxB4nvqEvfC2zwdWD4zRgn5ui3sp4BrvFX6u2r4P7RapZm63ZFWfXpPpX1Lu",
  "key27": "3BQFuPp3kK3FkXEf53UYKeTK2VHS1carnCABfpMeGhXzMophPxuej97UXB5Z4QRU3nE7nfRPnRF9AMU595Nazhgb",
  "key28": "3NwKYq4zE97uhe2KQwrKytBh4hyBifKcym89znbM4GjA4auLxhKDCMstueArHgU3Hf65BFnKq2Xm2AJTiFE4Gy7Q",
  "key29": "3f1G6ZdU7bTz48SkXBnRTtHdxmkiVfP8QzxVggMmLNYQnmrtPeSifGLXFmnDN4Pa9jKQhENGk8idrHEii1VDRd7K",
  "key30": "7eoRP7o43CuUqiBkZwe5B9ttUevcKLtvxMMg5TE2PDxCJ7rhQPzzoWKH9M5TZkh8nUeBjHRPb79gB5YP2rkmpiC",
  "key31": "4pSXRD2EbQP5TeRvqEFyEazK5MyCAYjhThHXgnT7zri7zEL4GsvnCbD633Tsub755iSUUrKy4KccKm6idM6aQGtR"
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
