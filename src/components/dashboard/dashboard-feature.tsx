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
    "4NJAX3KCWQeNYCfviDMvNNpcGGwr3rwzG6RiBNGPVMf7rgC7YVqkwAnpaH7jG9hrGEusxTri7K1V5Ws4op7Xh97V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhw2aReBs7XxrccxkBoQq6wqmBvcjyvqVM3xfv9QnhkpNi7tUQSZJwtnrBYYscCSpNZDzTzCZKm7EWbnimUbAhU",
  "key1": "615vvqpGsNpCbYyWMQRj1XTCX2qwXxTejWEy7GXmdEi5jLTFxygokGjWCRQyivWPvawgAogn9PoKF9ZMNkvUvZpz",
  "key2": "5NRCtUiwrRy6X4tJwBpNYx51baCuQQ3ppQjtXYgrNnMnsBRKvT2AXjwFE6CCLiXXRyf6MZKjWLLLUBXbhHWThwAc",
  "key3": "49KVUawRVLzr1sEDBg2x6h7EjMk5Fzr8DZKD8TMgveVJGtmskqQw2GA47ZnKLN9GA3F1GHVikDNuKYo2J9Zk71MK",
  "key4": "4MxbvirmeF47pn9zUjtG518Lbtyc3T9Qdt2GvYnMCDCYSMJgsNZyQYbEf8oQpSj9o1EAoLTLnqK7aZGhRnXHeSDc",
  "key5": "5gFcFYJZET3tiSGvUas6ymVc9rqLFAhoXYYomHuiKcUg413fLp2fUBcmEJE63qtuk4456yrJdPha33Gh2KgYpKbC",
  "key6": "3kqmqm8Y35MPLfD2uSZT1eE21vsWxUkwMCLMcJicQ7F2tAN7CBicT4v183o5t7sAVLqjpvMbLTisrtrbdhuWF7jz",
  "key7": "7u6zekLMKTPC9NKP2DvYDLPwgNUZhQSNymEWiLT5GdW82y8rMuJ1BUGpKKMnf2fN35vjaTuqcqmAvFHsE2CPuM2",
  "key8": "SHmtzcpb16jVhzZeryctaV6NEzohgXTryCUPyZd5vfjfgN2jh8rUy2nLHkrHqsHHybcPHJfqWtaX6eA85heoJbX",
  "key9": "3xXbc6KkdHPXZ62JbWcXWiuhrsJv4GVJepZK8Df9ZkKWjx5DmGvDdkW4pCKc8L1nF2MNwyz9Kc81pHJyF6qKEuJw",
  "key10": "Uw5brGXgWzGPbp3efsF6AzATcWzkWZ8sJQLpwrUDtxkNoZWyLNGV43WT8rKHpRu52xWYa5YZPh7UNqAvMRZQa55",
  "key11": "5Fk69sqj8qkVxrnwKkCWfUeTYxx1aSqRvPCMXWX1pb9wFJmX8paNzbtLrxnqVaAKN3j6nZBRrqWedwAArXZdtoqd",
  "key12": "31mJxvBv8BVJ8CYn92vx5wbffSv3Y5CYMf13VH53USqYiP3c5NB3UuhPCWAa8YPPUHciTqES1DA3heZ3zvXZBvi3",
  "key13": "3iHxEsfh6N7aqNQyF4QNGpPy4w2dXjoL3NRkx8jTKnSao81NyBkHmAdTfhukVEjyDb42ypvEyU2teK61BHaGxJHk",
  "key14": "5SVD4nynbKXntPeWQmnGuptWsYryHzcE6eNddK6wvMt6qDXg9k7kGyfjEWGQGbmSvkouNohgt2PUSEZk6TWCTU8M",
  "key15": "4iwcBwDmpQEudJs6XKiovwwECTXHXkhKojAUhwrUXhpv21JxCRNVjhohJ7rh7uCDm28bd4CwqYkrwywkW46C7thw",
  "key16": "5HL2771xUtzrp8jCHqQ661HNXohvkgzFXjAu1mC9pc24QMqDXqGRCcrAp1u8QJygS8bxBiMjAaG9F5xFbuNCsqR",
  "key17": "42bY7UP1b9S1ANvWuCSfhUMfZfkoa66QCHiJtztpiTK2QLnmPMUf2vYWnqwkcnznzW6MPZJ8XSbJoS9UoA7FHFhK",
  "key18": "3dXGxiGcJPLuC5M2GBAWnkkjQDwufuYKtuKETBMfbNdLbf4ZAMZcbt9ohuc4Mr96p8wJR26YWr17YBsX5EnrbX4r",
  "key19": "5me9BeH8sKsQ5hmSBAUz7dKuJyk4ZUs4iyLsPHcTvnat7KXQCMQcnDmhb2PCpftxnEj4FPFx3Mapzq4CXgNJHhvD",
  "key20": "331dSzrxznJ7utUyidk8dnEbbn6BqBnQQ9KB3PgRS3RaTLd3oRdUGaJWFtKzhruSoRTaTMYWEn3YDo5eibxqsnGP",
  "key21": "4wobS6zSsxCKcSBJFmhRyWn2tvnKqnqNA6ZbyFhVqpnXA2Y73ubKy5S5Ur6U5BcGDCwgE9D5zPtMkPWE6n89u9hx",
  "key22": "kSKuirPTKtLWqgrnK4x8un1zX3hPxyNAtgwibRqHvh8hXvsfGX4cud7fM7woyZtkMTtUEeLary1AC38PcRXECEf",
  "key23": "6M2XvfUjintfn2FtRyqU1VF5JMT8p3SJ2U7p5UTc78SNnqSwWu5jReCu1fkfRPH4nFHY3TsVu3ZpgtCRGX33fVD",
  "key24": "35pS37u47xeY18ayPPWMQN7VdU1Y3xpo9bHJ1mWMtv4gCWDXrmGqWrMEc4m9b725SAsaBQNEdwMo9z1J8uKSNG1F"
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
