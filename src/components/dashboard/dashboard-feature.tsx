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
    "4yMEwHkajxkH7WK5mcENTtWTY9RRdjU65zT9YXrW5Cwy1qDY6pPLLTJbfPPkYGh69rDAbUjwX4nmbJLNNmVujBd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665ruEtNadoyP7PGxPQSqaXjWhauKEfN82QbLH5f4JXmhpJ31dXREZGqigZd5T2rxUwf9p6GuCezKenGMRQpQdhQ",
  "key1": "2fmp38Y7MB15TmGTj355UJMpadFo61d3qhhDgwfJxdnQFvpdTJiDtxoFkg72Gc4yaeRfBAjiqtkYnw992UoVhaYV",
  "key2": "3o8VVMQewp1KFhx79AC7NNBYGVu32KgGfcFusCUwQdxvrYqRdkpfk6nRNSRHLX8Vv5AxbxxYGCBT6fAJi1eonTe",
  "key3": "21JS931NJ63fEDuze4j7bPvT2nzHxGJtUirfwqVWBTQ5dHU8gW9mykGdY9HnKo2otwAnGbMKKxq47co6Kdjg2S5Y",
  "key4": "BbCEjBA4dQNh7XXxXcbxWy7rokfGA11GrgujNx3PLPXKeKYxciGnFAHVx5UXALJ7Ea2JynZs83QCC9FjCQzjmLE",
  "key5": "3GpbWnY47vBi8MWkZJd21fyDzr6JmP3zwHkQccVQZYqfEq8qKWfhz1mVJxoW7CYEv2PHF9HNydhEYToUHdD37qjz",
  "key6": "YyrkANDFH2mB83nBtUmCMauAT4CvNvW9LhXcvGt7zAyYHRVu32bWWAzeNKmf6ZQujAMSYuHwpKdBtbVXdc3r6S8",
  "key7": "55sRyc9yyAWW8JoB4GszyxeN4zkLf3fgG2maWrCLqGS7NnhJkJtvxcgzextfRFoHTnaNX1ZQXFL1nXu9Gjd6T7ie",
  "key8": "4LUsRNqetmppgY7Xv6H9HFoA8m4ijnXjt1Tz1kQXT3HP4LDMjYJ37Cc55ca3Ur743mnr5RDLZvK1Qv3Wopjft2yT",
  "key9": "HRdhmWF5FKni9BZ5wCr4zWRNMsdBUyouBcyvadTQH42LVEF6u6ygAwydLBbProPBSAFHopMr2rCPnWMDKSgwqN8",
  "key10": "nAJzEYHVJdxbjrUTVuKAEhp6Sd1WGB5kYiirkFhyfoVv7GKxdwiT6gp9ZYcZsnyxpnZZWjqkYmTzyWdafF4JB9D",
  "key11": "5hboxbMMTbGg6mC1PZcUgzyum7vdMVeM5SnNUmPif9kpBkh6HynVXofyZCDadQbRizpRxuzcgQJVkJb74GtzGMmN",
  "key12": "646wZKehoeT5YjEy1XuP2SdHAB6tXcFkKYNwowgrbwD7WcTdGqpT4Do1ACUFUcjcN6PiWXt6yoeixMoQZ2Fx37YG",
  "key13": "2iDJ3XtBxw5RBDeT8A1gjNmHEAYnduAG6xv1FUjEdB5UiwenSJvq4Y6gqUFxAxB8Ra19vdF9JSGthwKcMVwcmQ83",
  "key14": "ypfdfBPhiZnUJpB9rYRGw9eax4upoBKc8ADztdEcd4AbJyEj9vmbsrVZw1aTguAWcpU3QVjJFBoBQZmQCr3pw7V",
  "key15": "vHMEFEnDERyXyKcTvG2QFEGdC3Ge57tGi2GAjCprw6me9boLccQQFe956YyJGMCaS5UxmJGFWgcgivd2Jk1NLTY",
  "key16": "3iFQNFTDyQmc8PSjnUHQXHLUDvAT4CSMfWsfPnUuPQsTGvQWmyaMqYWVFqeeiiRava4Lr2T3w7UfpebJnyX4yGBP",
  "key17": "TT4Uv1bdwKEfPhdWvVTnhCP2b1F83pJH5ReGaszEt3ZexSkmXpcgW8rXgAzmm5keLDwmxPYyFQghDD3SBrQEqk2",
  "key18": "3iuAs37wointdFuWZt1NwzsbW8YC9fdkQK7BbZx3g4FSpaoVJeLmNhUfumv4ptP6JHs5xxE1d7WKVKhfjp4TFwD6",
  "key19": "36aRNg4kERQKU5NqaJb4F5QLudGFeKKBBTYj6VQ1SWBaoPZn1aHCwJgeRXkyCi352ePSGn1o5jWePkrX8vVwQBrG",
  "key20": "4cBjtjfUiAyDpWXM6kNJ1F4BkJwcoDtCCybMMfcXLep9LDyMQarzNrtyKFFG4nAupALGL1xm6aG3tj4kaZTFvrNB",
  "key21": "5zGdynXuzhapNqwnia4RM2GBZU1Mrp1NepNaLZs7L7s4ojjBriDyMYzkim7jF4c4tR9uLMWmddcFpNQnhRSd5qjF",
  "key22": "57YeZvAzGjSej73KV3NN26NDckYgbvGD5Ua4hfHGWUusQxcctov5f2FJnJKJGeyRumzXoPXxrxrdwtwNEJov85iX",
  "key23": "xe8UUfXNJTBSenFKaZBRFU2HGHtP3MqmpC1NzreYirEj2v1wfzMyxcPKpW4YW4kWq2WtPHtU38KsJLVcVMShFED",
  "key24": "6AftGdNXGyr8rZ8gWcm3VUHNeXpUDw9QCpngFvShwAJJvii7du1avyXMCbcHA7kJecvpt7hiCmKBwQ55PtB1kRk",
  "key25": "2PQekygWdBmWb3YRPQZ4UKXa9N1vfV7oD9DX9JRcUy4iXUgF9AGRjEFZvn3SZ2zgGtaQ7MPzoYMM3ZpRxWbHkAVU",
  "key26": "4FQpKcC2EZGqwQjjnNuSEveuDbgB9MyHJuAguJbkGzDvFwyJNUQ1L2ee78W7oNpMBNUo8L3vHXsLYJ87ieoAzc1A",
  "key27": "sotVBJsEmJpBxcR9oMGZbfyLqzBihmLsdxBLT2TFHnR8wd5M5Y5iHYqFvqv5PtZHckSugWcabmsWDeLfaZCuGrs",
  "key28": "3gHTgFnvLVgz1cKF9KwcY9Z3AZWurUJhcQS8xzVCRpaMnDpg7ciRpbBNEbxHE2TqaMWU6VkWxWkq66kRyUPRn7aB",
  "key29": "2G1cLaVBtPyPuJx4ue4RKneUrPJwCohis7jm2kWppyxZHYW1d3NAnvfVbcfkmNxcA7Z9Dh74Cc5Qbw4BTZV3Qnoe",
  "key30": "5u42438eZhVqzkUS8zY1nShuWkrNLfUFgukd8DsXGJVmFkeiKSLHCDjuB3veKMmCXgkSLRH4gFTv5SkRCtoh2w1U",
  "key31": "395T12DY27jYgYSydhxEG6D1Dwd4D3U82mb8zBFT5RAwZrdDsVso34fhJDJUMoN9Tc7pwtH55ebZBJmcKNivTFt7",
  "key32": "3QezBzKCtYHtbVNYS568qPcV5RLJSNaebpE96pwRPLMAiLjUFNKUnZQBtC7U6UgFYkz3EHxcwu6JgyBwLbofipB5"
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
