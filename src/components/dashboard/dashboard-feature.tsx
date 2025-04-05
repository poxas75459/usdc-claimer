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
    "9UFd233z4pUR4UCHGMHHqnhPou4bnauDwh9Jicge7nrNQE3EZoGQHBwmc3yvuckLfPz3pwc8zVCu4yNgPaRWo6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BhBC91GXTQMXTZS1FBt1JxXycGjYMohLxjNvymWzgVb7GwTvoYVnQ9ACPLywMtPSdDePAy3z3YkAeSvjm4om5rM",
  "key1": "3LZEAo2CAphqdynBRGZoRu17GNRgwX21jHFuQpgzh6aRbTdCxAdUFnYeJRrjfJVaBhjKskxj1sgpC45HaUCqpqUV",
  "key2": "2dNaPiyLRy1D6ZtkST1qjiKUBvqfxTUoJ7i5M6XKppzXC3fJhatXbXLqoVSnguU5yUNqikVctfVMzMg6F3iVVxbD",
  "key3": "32mRimE9Bm4NYV24j9py6J7tLmUEQVWv7KjtVyjvdWubsvRbjyMR4XKLgsM4N7pdFHEXRrE1SJfXpaS31TkKYsq3",
  "key4": "4nzY6LfMeYCTKkEUu4K5e6vXKaP5avyYKgKM1eHYm5PHK2abibN8cZQ3TUTFsdRvTLXNFkFhNj7izcjWZv1V8gif",
  "key5": "4Q1UdNHZnC2dcjwLALVB8zq3gi5YR78zpS9wVEFy6pkrUXRZM5DsHaoi4DPtE9p6me4WzwsLeM6GkTAXA6A16QXS",
  "key6": "cAYR6NnCkJrzMHu4gjf8kjBgvyjJJK6g8kpEAAVTRrKbqcjvbuHuDYnBAbQrjutc2vvgFC7hjbUvfqs4H5iqavb",
  "key7": "2sCuyuixKKeZVnaBEAqkfCRqHZeNQ7HdjtGeQAbohNtnsioBzdXn6SY41PcQhruDMMPxdZd7yjdMkg7MpWvwQCUx",
  "key8": "3WGhUhofMRw8EF9zMUnbz3CFa2uxDF4rcQLwJPCBLxfeDnxxafscu24gcePewDuuRecAjG1tyAFRzKBWf1tqPfRv",
  "key9": "5npwfKoW55fTLUSARtKTugpB23auDxv256A3hFqeiFJdCPx2fESGt2uRwtU2sm7aixcu2iMuuuULFKZNhvWzeMci",
  "key10": "2hRNRgrQni4zY9uJfEMoTo7cBVup5UG6zsZyFqFWZ5qnH2E4d5MsmydEgZiNzFwHqsn9qTQSx57NCuhYLVtX1mXK",
  "key11": "3Q5cQZ2pCsui9hqFLeJcbfTmYvpKNeeCp84qSTdoqe8v1k4V3GGdBFFAsKqWf9GZ6hdQKHYUoBvKEFQUargF1Jhi",
  "key12": "4F1HsNt3YBu3CxPipokgmqs8AvgCz8JbexCPafFYwwHSbHUNyigun2SFwSHH6HFS9eCBG7T9FMn3f554P6jc5355",
  "key13": "4b6GmCjUW8RCansG66wUk3mWaCg9Jqm8hrYgtWGHyUKcVpbAq6XTfYkdE4bKGUaj5hhrMqem31QMw98foChjMpT7",
  "key14": "3meptHUy29J5BK9gCEBpAbR6ZMhiMgn9rPm5vzuUQxB5dJ37SNj9mTq8NX9i484pXU86gQ836imo5e83eTQ5nU6L",
  "key15": "5ezmdhpUiabAVqXKjBPYo1e4puXkg4mieY3PfmrMo5gp3F3yVEtMo2VxeAjwEzn2DdCWyc12wKLYzXFx8zhGtjjs",
  "key16": "2FW5GNRZ8YVa1vCvFEwhAtWtGi2YdkiEbYLPrTYUEw19GBjJAz7zdwnH2vNH3b86VzHtdZbMcuB6raVK9ZiK9EM1",
  "key17": "375Ctsc5G5WXK88HRHxFQxBFv4pmu4UQtJzzaqj1NdKUMtvARqLA6HyYt6VrQJ2YFF3hcEiz1y2mtY8JVpdnvtJS",
  "key18": "5ue6WdBVj1LPp4kWjLam3JKjBzAUGdAo71r25XsMmHDkjn4Gu9vmz5yZD6ZmYCs4mNt76w7QAwz6v6aDuru6HSMR",
  "key19": "4tq5pZief7zWetkkZ7NGoJPGzwojkmCNAonwux83JxvJFX5n9gLFpbQ8zkgvVpcuUUmDZwJQyMu3hSj3N31AHp2m",
  "key20": "PibeffxBQSXcWyyTcb6C8jYAqzZmGcsrg86zCV9bHRvDk1G3R3UodAX1iqYib66CMcMSHxE1YFXXnHaXV5cUczb",
  "key21": "BqgycpBPY9a6zFefq7rPtGkN97xbd5mfoaXzyQ9ktskMyKxea6BRXMmMjQAUKyr1k7RWcWm2cMvWHRcno32bCpz",
  "key22": "3P3J3szLqpiooHpgLk6WJn9wC6pwuUVcxtzVpio1bA7R1EZb67T9HV8P1Q7bTVhSGasKZwkMyjfk5EoUY7X1J6BM",
  "key23": "vQieWoUzTZPhGreWDmjVzDEVaaYfk1eQWwJrpJimaLZeMCJSHHnBTCPsRbBLBmnrNWFpR8iG4APSqXTC7eJpG2b",
  "key24": "456xMs5aqsgKuXFF4Gv69aWZkHY4MdSkqTLyrukQmvJbu4AjC86poiyQcW45D8dMXcCveFec39rUBACckB8SK7RT",
  "key25": "3RZKYQWtvpowFAMtMEUPH5hhwkGATg7KtgSF8un9SPJzTrXt43oWPuxQpJGki1m2ceYPuJvkHTM167L8qCg9U9M2",
  "key26": "2v6yE65ntASXqy1vLiWBXcygfB7AYzKCYp1v2RnX7UVSRdhCSB4TCM82NxWFfo2oj6cznETGdchVtiJm4oqjgJdM",
  "key27": "58zz89X2LYASchpmg8AAVgrxpbeWnFyypRWh6GgQt2pgFACCF7DT3vVfH26TY7R3t7CNmu8hXPkrH8pRhGKm4WjM",
  "key28": "5FrpLsbNoaLK5aRNzwB9GaAj6L5fft1akZwQis4HGvtb1DNTkESNkTbbbkeG9d7PQewVR3p78Qc3GGvxjXV2pkc8",
  "key29": "29c3LBT5EGyj2hwpYV47Bq4Ygm3dvWwM7QGjoB3rjSheEp42wUM4m1vHHH4AbXbVmE4DES9gKwacXuCX6aQZZPdc"
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
