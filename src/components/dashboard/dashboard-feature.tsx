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
    "4qgXNDoyTDJA6E1AFhHgHQmHcFMTQwBtdxQQhFwHqdjtXwMUJNXsGhy6mwVFcjCGyfbnAG9Yv6Bq5Jyoy31w1uSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jf4FrQiiHsvz1aWRpQDViy3urM3Zs5KMor5ZLw8vBrTeZEg3Pnc8XqAxR77NYqtDskbuoYs78Xq1ZfFXP3gmWym",
  "key1": "3h8kgsA9jCmwyWBhvbR1dJFihXwgy3K1wm8zWPFwvawjxcRyxyjEjVmwjAjMNGYXh4Lc2GSSKJ1BJE19xcC113jF",
  "key2": "45tXHbG4mh5k6iG8PgPufhyzDk6x3Kr3aM3cKFXhfWgC3rKM7RNptpAiuemshKYFF5apBmr4K46kr74cLJpefE6Z",
  "key3": "5mKrE6btuncmNs1WArqAKruK8yQWu5A5SRzphvFTbHehWoJyZ2iNjnzkhuFhSRbuMPCDLbbrLXs7M89u1XqiCfJ3",
  "key4": "3oYAyGbHaxxnBNiMUYmzFYkqqUNrZTd1kvUNGbGuAwX7Jysu6Mszj23NjFgSE5HTmMQcUtAF5As9EXHgpzrv1kLW",
  "key5": "64uL8uVR13nPUxJmLX5Aqa27VujRrbB2fnj2X1ZSkumkvBFqSKh4tobtKTLuCrLrBu8xgUaNzuec1M6DZqv9ZsZu",
  "key6": "ydyPss1qSpYqgRdxntA7DoNSK8WvGcqhhj7LEW5PPc1fuJVQCq2CrDe16KiyP8GUsQDozYmFCJ2CP1ADotGoiur",
  "key7": "4JfCBVGzgV4TYEmkNmifaNC9PxqNZ6E87ie9nA71vU1ESNvbizdoug8e3BjL3w2LVEryGt38Xxau9CWCa8bnsV1t",
  "key8": "4j7T54r5QU34NVKZWwKoqF4zwyHhinUBBxzCp8KFYZcKzsVLgnafHbX6MxXaFhGtUdBtzXut9kVzNzxdexzD1bHJ",
  "key9": "5QBYqX8tK1hTjvX7u9ivb8NNKXktSnQZUrMaB9kbpHxkDohyptufjWDb5Yz5RsNYeik86cd9CVLhHB1tuupPknm5",
  "key10": "sWKQYj3uwPXHk62xVSTtMWbMtyyqCsmVQByFcVKQKG1nS6S4hd5euXgNvUdwWYBEKEZn1HPvrT56oYwfLukaTmZ",
  "key11": "59SdLQAUXEMGiSZw93p3Dq71BvxCy2ZFyc7mKhVv2xsDYmPBzjjjYgfZmSaEmU3RtWdYEyE8Ym3WtfUp7cwn2kaT",
  "key12": "qmruM9uVt4bJGqrgp8ZX8LYwtb6ai67DPoJ4osuAwb4Zdnjdr6m5kVAVQtEMbNm7J9jaMfzup9y5wt5kkkURTbu",
  "key13": "3MAmxPkesCbEQgd93Ccxw1LrHkcREGDpTevCTAMNFEig2CCNegM4KqhUYVpb6BKF9tstBCFc3WgeBtNRsBmvaDh4",
  "key14": "3JBxDZevdjgG3c1rACWuGBQt61XTjBysoW5r6hGxaMdRxb2kPjftk3y2nv1UbuaiKnc7sX7Ks64gK3qfuXhyRmmq",
  "key15": "5y28moBmAuqcqea5sKs7QAX1Z7dT8bA5XJW9kyJuVHKosGVT2EHZLCHCJcgBB8xjJkGjEhie9NdJfRHgPkNuNU6u",
  "key16": "3wm7PgjuVr7fg5kDTqWH16MBqEjDU64Y6x9AMK4XaK7icjhuUv5dPHTtWc7LuZgSaDcTacoGrGZq17LpZUcTf1Bt",
  "key17": "4trH3uBRfJ2SJG8Th78KgYNvfn3QLWDgr4NtbtBx5hciQ1skyLiHqkAZjcbPMQHePnDEZtJA8NQJWcxbQXhJfaPb",
  "key18": "bZYEeXoM8D7UcBmYQQTpqT3AWoVs4QFoBQfXbcSQT8geShxYaCrdDvtEzq9JiQugaKfd7bMf6LWEPokXVCDGrhT",
  "key19": "2YhkaAceyJAEeEK97xPB1WjgxNPpbFjjLxnhKwuYhRyiyBvfMLdjT6xte8qFevtJi3L2MaE6fn8Fi3CpSgR9qXTd",
  "key20": "2KrSrFLm4Pkjg9WVXQM5HQkXHrNapmBwfiiXruzyx6BzMaUTnKAC1TtFH8yHzQDsUWcX9qf1bDRDKB7RbKUWQH6r",
  "key21": "KKKcnSgBcsfGQsMjxkrWjbSECggYQP2Vy7TYbXKv1oFeCtCTAkvaqGTk9BBi1dABKbr7khqte4d3zHXcCbcmtPb",
  "key22": "opsssJxym8D1hGQYANTyAQHXzTdDG7pakRbpHw53smvBBrpXHRFgVG8rLFBSJ4pGjgSYzzqAGPKjU8hToKcEFjC",
  "key23": "2cbM76tNzrg6sP3H4qwAYroM1yyJFxrdDNwhMK5T3ps8GrJP9CnpDJbJCQarfqepBwvg2gog98UBNkEEVayrKmg1",
  "key24": "3iTDTsqXbFhuYyzkiieLSioECcvvRNzpJSncEVFXSA25S8zzx64ff3jL24naxfv7fbqz8Nw9MqVa8z1ugucciekv",
  "key25": "2bwEfkzKb3SbTeR49PfJyJaNnfy6NMPAxdY2a9EeBZfYjq8V3LbKkn5eYCBnJu3wpPS4eM8zzBtfwTxmkA9YasRj"
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
