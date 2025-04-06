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
    "4xb4dpLkza8fJPv4L4F2to7e9E6CG7rjHz93ikAwMg1LfFF5mcSyVUGnLhLGrBcPzmjgdRscg1oexzG8dxM9k8tR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1smptAeWAoZ3rdM1DLp623rW8xWvCzXfjcKpYq1XiP5aRfKsrVcyePXRYKpv6mG33NhfKme1dnkvANJVw4bsgZ",
  "key1": "5387ibjRDPYyc9Gp514WMhpa3MkqvtCqHch1oBgFXHrwQVHgAJXLayYpSYggqD1iehXni7X5Z9g7HRkCwjoWj9Kz",
  "key2": "2SD6a1MQiKL1vt5yGsHSfSq3ZGuHBYKm5bb5Ef4qeR6AiJC45aruUUUMxTnxF7uCP1mSVMByWbeL23vh6FkWPdff",
  "key3": "4MdBdkJuV4oYCLwPWzcgsH1B1b7MvB8MwGNEP79bSUrYbSxptQgM3GT7woBmXBwtvsT1DxC4XiYWF58ZqiF46Ugm",
  "key4": "4ZsRbPEcW3z963gBnt72QX5bCncomNrZUinKTKw6L5BVnHsmcz9qfCZpnWuanQpLsWZpnjmBa1XByZusWNYeQKVU",
  "key5": "2MgAu6QQyC7nhSJJsUyWQV2VaQNj4yNUm6yafghYAxWFGCZqd3pnLe2TngX4ScfSbyqFpeRpyydcdK3d6dBFoQ5p",
  "key6": "3dt9jqphuUoQnx2PqFUT959zaaMgLQ8ig6py8bPH7fsd2W1785f2gCpuf6sQnSoAg7M2uDqNW1FdehG92EUD75Tt",
  "key7": "2BRZ2JGDTQBc4ZpWagckP1dJPUf1KuzHSaVNWdrTqaUkNbD1dHZwuT5visnzUiKB2AdVuyhHc5juYxjCEi8DeSVr",
  "key8": "5orbBHjQaqL8mKR97zTYGMM7NWgCjjWHC5GhRrs7eVTfy5yuvFSyQrB4R2ugMAvfsg8eyuMY7G3Mw7wT8b8zgaWf",
  "key9": "2eSB9BQh7zqvStG5HXhyz3wz968PEdjSbA7P7qdRdQn7iHuGXsP8hwaFC2Dz4Bm46SBHzq13UZRjdQGxN8yn8Gga",
  "key10": "4Lutri7JdHsvSEaRK9zy8PqyYwZqYDMiiM3WbpQ3RHpxFjqCgKYTJQUugdJrJ6GZyVRejCF6XHR9tfG4sw7cYzUB",
  "key11": "BSMaWA4RaDNh7sfzPG1dMgWunSvJbFJDe7MgWVmvhcja5vuV7tvm3D1qWgCgPrajVduzWWvhSyxjLQmWFndVSqB",
  "key12": "3fpNyJP6BMEaJ4ZUpphAMYUkiKELB1xuVSL1ExAAqKZnZscL2WcySJvZoyP4zC7frNuqNVTo48125uMkU37SJCKj",
  "key13": "4wxJtJRAULhbEijb5KGJbarxFYUQYsgB1R6kVbnA9BoBsQktFuy9koYmq9v4dt8nww98yzmAwLpRPZr9HnMr2Ssi",
  "key14": "3vhxAxBBobGKi7RWQML5J62Ptg9f8fui7rZ9MGCZjMozpqYufAL1TMgeaHyjgDG21FU8UAh5TvMNj9SJ94tdfurf",
  "key15": "3exurhP79sHsZTwi2scbRTg4EU6xMoMSrZHwhVjULbo2JT9ezRLw8JRBU9FcnYmKGjD7jnoYstM4WpoWQHcFsDt3",
  "key16": "3i7d2T2tkuEzMDVmZuXCMeR6jbDGQBPv1RidvLXxttAzQvL8p4XV89zvGgSjbXHwZ6hBuvHEu5APK97yavf6cEnC",
  "key17": "3xSMvNhDWkZfnwjgCwSVxsCH1snYkcRynZpeopHUYpoPqotLa35JrVwjgnsLnrJGbviTgs7M5CgBd5Ca4U1LumwY",
  "key18": "5Kg1fCHXSHEWw9i9VSfgwwT98DP1zfa8wxrNzE9mSrSVCukt7nnigRHGsyproQY1oewVdsZAFi3Az4mW6NpZncqr",
  "key19": "3S4qqqkjPqSqqFLthm8gu7Vz5WUKa1MYrjD8VQDiNBTzGFMqrWVTExnTDPqaLm2hKqJ93osdswXdBPyqa3Qd8QpA",
  "key20": "3Pd7rTvFN4qkcfjmBnnDkge1hRLCxWtyGgiiko6fQG6eaySXcrj4MMYgmWn8MeSMNZ8eUbpLzpDVY5rCz5matQmk",
  "key21": "45shCh8hcGwL7fx7vsurLNAKULjj4khKQ6vowtCwNmUrCQcvRN9KtumbkT8YKTwAH9SQ9ptbmVvc89Vz9zE1xn2D",
  "key22": "2SYkfABWWXZ2SkziUdRjVCFDEMhMddo2Cr69Rd79wiHeDQ4V7WX7j7JbicnrUVb9wkhLs7nAiYTzfrXeJpkM9rAP",
  "key23": "MwpcPy9awFob6HYQmAfCZCgwqgPkukz77dq1RNKaMuUeKtDjX8H6m7aQJodrpKsfPx44DUDGT5PsJdDVZehzBdk",
  "key24": "2YoQuhd9BkSmfSN7HuHnqG1EowAhBxvogoJyg2ntPsGb3MMSHCaJxoemERPwho32udM6hA8ck3FcURn8vV1bN5Ur"
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
