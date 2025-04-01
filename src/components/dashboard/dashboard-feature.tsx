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
    "2zetzPBwPRaVh4s5Ls83XBd6q1myiAVcYxqAxEr6x7DpvJ9ZqFejgrHdoyaimCqPCGWAMhTKXY5K27JW6ypgdBhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jF5a49pp68CvN5Aj36Vxy4yU4mbdcBSt8GZSrX42tTKP22gRfcYh5EzeHVC7xWhC9eFTzSiiStvgTPgT7bYXyXT",
  "key1": "5ucgWyQGwZPSJn2cXQSWoE1FVTyFL14q8MMcTSUojXV81e52DHniydvV6jvQy8yUdJXcv17xrTr2LJTWvVZvjQdp",
  "key2": "QMeE3Scd1vZsA5ycwavMuaWTRTTmPefueghuNXDfDPDdS8H9hpbLhoL6BHSRes7XrQSbwS7VqbkaUvrL7PYGUvr",
  "key3": "4TD5nHNaeBVRr2PEAT4DZKpPcGAiE8xrshQjizHLEerWGuP67ZWcwYNnGs2BhYDRCKiGiZSUJb7x8W1ZYjkCrzdY",
  "key4": "5D7E3ZXzjW2hCtzSQE49F7WqhNFUUoUwdpnUfNo89sLQnUH4YUgDLpPqD1U3twZgvNhi47wQfAh4EmQ5wKYi6XZZ",
  "key5": "zdaivFaSw3CTqzoMBCtn5PMKVL7Zjj2RZnpu4takzmty7S4Kmxjak8YUuAoXXswkFySuzhrccohYGaQ4V4rRThk",
  "key6": "4izyCAHKA1UKfWkZFFnpTWjoBcmmax6aLy7S66cjG2e1UeNFNuKQtJ6uBCGP4LhXFp5stHMpw48QHrHgQHzxBson",
  "key7": "8nbyYbMWkNHpcqxCwCN83Cub9gvn1pSV8fRDH1dmK3kFojoJb5BKo2qa4Y2SKEEkhfpemcoRsLoSZcRtvhHB4yP",
  "key8": "2AmGb4hHK8mvKe6Wffpt5aRMKS5SWB4e7wtE6NmHHWV9JqigTQn5DpUUNEPR3nkWC5WQLEYPSa7JBKnb9PSyBYhD",
  "key9": "2T2fV44S7tu6HWm9TFnGBVSNwPPoRonJJb8K7XGvRcdvuSHQMDrXsDjYb79A9NqwpvG3qReTjFQoLQECD4zLFKY1",
  "key10": "sysXXze5vzs9ok3NMQyS4J7sZZtk49fZ5SziB6PxLL4eiZVwx4V9YXyw73TVov7PWa873wavfmFJF9YUZCXiRpz",
  "key11": "k6NtDkRMAhChgtcDszEsCjoVwXxbYNMVGs2cWazMs3kiLy4qt7xsDxSHaifWumGARuZZLbHwvL2uQFy8uX36XUS",
  "key12": "47sNDzwdGdyuFeRMZDQXqrEhx51dCXJh5VMm9MskaGH2Rf9JTkunSiGWXiVmneH89YMtPahyXbtsUZeDaGyV2T4S",
  "key13": "3Z6Bo9mZZ1bSfe79ur7txikXbgCPjnAAWXCJtLqphZYZ33cRxBzSDuoWLGnnUrk4mWEJQTzg5MfJfanyzewnggko",
  "key14": "4QVxYAyvDH2iGFf9YRDx8EQR6vWNrN5PCMcKjAda8PuNyza5uc8yhKqWyvdRnQS5vXvxL78jhVRCaeH6CmuLvySs",
  "key15": "5tsmLLizB4ywe2Dwi85u5GZakntYDhEnrVkTv7cTX6QhpgwRmSmHUNMtP3BfLqNuRewgjGpoXPCJw3qJTUEg2GSa",
  "key16": "qK671pS6xG7h9qPMiKubKhHRUpeiGezxXqbVk2duh7DsAPqQPKV57DMsZ9JENvcgzDFRJu5QuZMXZx2UiHkNEKv",
  "key17": "3rcPAko79GaRZejT6BSkZQ5zc36zrem6bSvkTaGtdJKH2MURDsB5nJJuStizPJZmQdF4STc9QHLz4zskGgK3CepR",
  "key18": "29MVZUixbLt2HRPJcF9wMY6t1zHAEHx859FiSKjc9YSQmndUxJ6b7pAoLE5ZPQ7HWUnwAjGooxikQAdifgs39VJH",
  "key19": "5bto69bnWK9Erze8EeHAvNi3V6A4JzHZsyQ6tpngvHhvRQ6o4aKkVTzaWgbx6BXMMeqaXoQDUDPGnTzjk5NgqD7V",
  "key20": "4fH27c3p6xCYoB9CnZR8RZU4hRV6BKSnLF9JodwH7vnRNf3ygaAx1KDZAmUiTXV42mhdehkQNLtLfzcW37Kkj4iW",
  "key21": "28ivWzm83q2wymXajDzRQDTCBYtroPzh1oLeqzJT4NJfc8LTTwS22W2Cd3VXernNShpHU7PKyrKTeU7wLW6DA7VL",
  "key22": "WRTmyoUHGhR96iMPvjitDCGpMoupiqGpfGXsyGCwkXbY1vQP1BQfn4fEoYSDJnkMKosgbKcvRFZZvap63dwZsuf",
  "key23": "46gJpvHSPjzjjLu2orr8WLXNwjy3ddvaj71nxp16nDd9yeRVgxEKwB7KTpgyLkjtEuxXnvNotj93UTQnipMxmm1Z",
  "key24": "5QMKmECY6aMfyzA2mBxM1xG6sPavW1khcFT7swbF1c6Yva26VSQeeyR2gehZsoVp5SkXqnvydRMcUxLoc8khPQKn",
  "key25": "3NusssAKGUMw1ZdHsLc3KM1fxcZm3HNire3TuJwmqeqthWUruubtQJAhWnJ6G8N6LT9Cnv99acRb8w63FJ1X7pCx",
  "key26": "2AyxB9MDyjkKowaBmwAv4Am9YaqNpZo5fCv7FLFXFpgJYiuuPYWPMpSQ2mBFWzWoieHxw5YY1aqdohFVUCsXqrGp"
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
