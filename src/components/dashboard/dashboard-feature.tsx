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
    "5vCPLPUQP6KeXLgdwUN5TJYTumk61EAjzD35aYPq7aR4R8Vnp2mVTdR6WAiPBnUBX64XcKAYeDEavdhfnJeSRR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96LZyskHvBWpRocWBajK2AKyfvgHGPDreP7bq87JaFDGzRbYHAQxVjqwnjoXubN2JfAErDCD6nm8L2fRnrCZnRd",
  "key1": "cWmKAicTAddDHg23J4kpiuch2Th5hQHLsRsyB6MUBGXGj11GjQy3UZjJWe2TY9vqq8oUSdn19RdLegJCWb1FvXZ",
  "key2": "5sTLNwZ4Vow96gutbQzUP7FsNUDWeowrWzKyoRqyW3w2XwkcgkBXHe5QtnaMNHa2yTus6fHWr9Y2qKkuFUSupJQT",
  "key3": "4T1k91QZJpTdZV8WQSbccvMyCRYtDnW815r21LN72rgURYyYV2EGSRmvnUxsAQzpWmTAH9qjE7iRXv8LQktiaHPf",
  "key4": "25kCCjji5GzAzYhBHa4xSbfNAPZC9ceuo8JDUPBoSgZ6syfx6Gmq7Qw9g5Jm7AErc4ZmMj37hJuZUcDTYcx4ygnK",
  "key5": "3Gkyfk4XF2UKvymodP1vMqRWiPc1JR2a3sXN7QpuDeJwMvvtrEcmjtYyH7UovLJncQFvYZu2BKhnBcfQPEQptFZk",
  "key6": "E9by3CvUtAy8dNbvRGgbpQmP1MFfdhXjperLTqUA8ABrdBYzb6SJ7AJp4ZGrwCJebP3ffNXYsntvSqduyyDRghU",
  "key7": "5GVzrfWhoZNcH1UNWthuYg3fjaPZWxZMPJnjMbm8Hzju9cfFno43aijn4kasmabVj27eM1RaiXpREVHYQJCkkRW6",
  "key8": "xL69fcZdhBExDrYENeGZQuE4aArcti8k81mfvukDpaG7e5cnU9LuBZ8AJdhu6xrp77uHX1WpDPwWkzSgLFUyp8W",
  "key9": "2xKQdaGfwLR5Y8sU1N4mk8mTvtxvPZBMfCgYtg6mKoKhyC9gEf1kS3ydeeKjeAJqFW7icdbA8XNM8brV9ag2Jwgq",
  "key10": "5hQGHYiqj3DQpjRJgavBVwvE2Z6iKLFHLTCdBXEkaWn17wL2wBr9v3Z1Bt9zFFsj9D2WKxYbRqvdQBypY5feAf7V",
  "key11": "5D3tVR4WTBKFLZrBAVgJW2GeJXjUSmNx4CPAKZomribPBX1pP2TrDX5hsNducvrp4RK6o7jHjoXUYL1CgTQFmjWe",
  "key12": "5bzTn26gRqGo8aYcXGj4DE5Xfyz5huYaQafC7YSRP9zAG6s21N9ff5eS5vQcQ2umxKoK82sJu34nY9SKTe9EWqdd",
  "key13": "3jYo5QXRwnZuT6GUxcHAV8FXUthmzLPuVimTdn5E15JLxvjkaTWgmqcUs74vAXG3Gtta3PVE793X1k15vvJKhLEw",
  "key14": "yxYE8UezZMXYzN1adZxsNFRutrgS78KU267KJD77to1LhkW2vaJT3BsnGsA2x7Dq3VqmsCFYFjT5wg3zZYM8Jc4",
  "key15": "3NsWeMGtGqcwjYLGZ5hoj3BFkUi2nsuUxLrdociMHKkyDk2J93XyuSQG4aARtmnuusUBjMzsvPqXa3i45rRqGWbn",
  "key16": "GAn9UBnHHr4iJp1WuYGxnnZNyZdEwJ8XbkWg9nVc42BVhs1vfR9Gt2Aheah5pPprEozP7r8jFjsW6bjpMvuHp7c",
  "key17": "24bkLHeABhUBehYuezQ1kKrs6f6BJ2C4kfv1xa7omh5FdJi2AoEfpQeFwpfcNPiYhqVHvo4hu52BB6ScPt1R4jeV",
  "key18": "5L4mbdqCbEtudsF2EGTwrBFz2K2G2mG861xW2miWoZT2tLvuxLcYXwov2nCj8fF9Vv3X4A42Raf9PckwXKMsq4Wb",
  "key19": "4epvLfujNd83xDzEKr9fhJKEr79VuY3oCyc3dJdPJqsczLEmsAjs45Wmamv69fuJcmHnq2WyqjGTN5oM3uEP2t5d",
  "key20": "5UTRhRAxjM2sbh5soqzYDAzBQvc9dbFNrhH7NoVj2y7eYyDsXY71x55wy6pzX1dF6ndfyFwt47CNg3MmMRAnaL7s",
  "key21": "4dCXAyDWEP6zxY7xJyuVvjZWEvmtWTtr7TLFxL3rwmFXvZv6X1Ay3Y9iyv4do9ykBfZQn5NfAcoSaBTicThkXePw",
  "key22": "5nMMYPScsgG5rKqpUtdkArwiqLBrtNA6iiG2jMJHEfYBahddgBHXwkq1x3boVP5HQCPL85SNaJZecBX381tPfRB6",
  "key23": "SrsY5P8zywhritR9xht93eojdDRwbfF4QU9XyuttwHdPVNYv7Hu76f5xjPhmSqtdRy2dbeQ9yu9HN3cge6dmQTm",
  "key24": "49w1pTXFJWYpWV8jBs7NmqykyDFpzGmfyxgF1KXTY72kG7TUmFZNys8qPQ5s12QLvoXWNAxtVJuvkaVq6gMBzcWF",
  "key25": "4xKZM1wrmCN9FGnj1LBRJiZopKGmoXf9SsryzaAcJfKuHxb49rtF1QCeDSRUxpPvey4cPEFfXo9kkC5CPsPKmQnE",
  "key26": "4oNFh4psqWaDAhad3b5Zt1C4YEobYuaUEhT6SmKaP5bkpb4VSXjqxG2Y2zxocsg6fjyeSHaLXNpjCQvwXiBwY7GV",
  "key27": "2U69LdJtnnzsqU82NpNtAFaj8XaFf1scuvjcFKkv2CoyRpfHErGyikYJZ6NHSsaeEGzrWXjzdRGzCAA4jPviznsP"
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
