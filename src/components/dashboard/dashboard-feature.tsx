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
    "5cGUZFVthDLVMZuB6uuQ8egyNLY3ScCRANUx18BE97RijgYyAn2gjdu1atTSQxdcpctUF8MKPV5TUxqLDhZd8eb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C8uinH29aXtZpXVWF9rZshyHpwPJ3xXgs13ADDGCnDzegpyEAWZmBSPmitCwAMX8ubakMv9DyriYUXYR9dkL5dA",
  "key1": "5R2LKwYpgGQziuM5JLwce22onJdtVz63rZwJQuRP47vU8GUgToMCjqRwKdBWXgS4yjBKwtzQwNGU3ptVAT74tSSL",
  "key2": "K5YuSJpgFh5f8o9ntXNY1XURgbD2VweZ9DKFdewyqRBdwjLkfeRTuVJ4bjQYDaP8uTjJyvuRJPe6XCJkPPtdEEX",
  "key3": "5FgevSyoYr2BSmUyxgSdDgoxYue6AnFG8UD99d9PJFKJbZZnrjMJ7Bn7U4kBEuHQ6kj57vfAdSkqhhAWTCxPv1yH",
  "key4": "g9Hfa2yZJ6w8obvbZ3Vbk6GEbMsh3ms6eADEojGfaGDUbjXyPeWBBpFZ4MFJiQ6Gh1fyKvr7eoV59LogxFDiPxQ",
  "key5": "32UPTrnwBwrbr3SK4KT5xxtwfHBwywPAtZCkGG4jgZJsqjB5KKWvBa39rQ2t7vRV6mZ9zKyiZ3MjipTHqmsPeZGG",
  "key6": "3dzm4h96gaHWgXGhQKTxveBrGwcwMRe2aLkAJWyNw4Kainu589bxqmVBNL3DikxFmZyVkJ6VQ3hUUXz6Mm6Xg8N2",
  "key7": "2ACMcXJt2vYm3L6qHsqGWRdePLQz3gz6dVydywivH1MGDWcVQ9XN4NPskA6hbTppD3SdoSWYmgKMnhF8Ct9GpfiG",
  "key8": "64TQR5gyjgSw8wgKpmaU2AjdyDEeXB1gnspo5AGJh4D5Z9YmPJkrMCwf1mgFYRURbpTZQk61eBfq6hEzpihjJ6Ym",
  "key9": "5H6X6LbZzYP2PeXC1iZC3hTD37M94haVn1k62J9L61Fz3ZJm8mpi2dmqB9HHBuvBoSrPHoKXeBdL9fgMfbya69f9",
  "key10": "42p7iiLTVk2vbb9a6cE1e6x4MNxJEQs8ftrS2NcPiPfy4idmUdTMWCp1KFgCdzcNNoUWvXNzHXuUaD7g6P8DCuc5",
  "key11": "5FBWoRSzE4fHYBVGY6xaVqKhX85xpu1wZqzk44sEKKT5rW5y8UnhgwmbVwtd89evnmfR9T7uRfPWA39nUF2LokGF",
  "key12": "1zcYb8tBeTp7rFdKkUSsGzm9FqzYUnhbYKF5oHvJU33goomtKTHSVdBRTRLNAv96Du57X3k2QU8LWfwqf2CJX2A",
  "key13": "2WE3YedPM3fBWfdW1tEZ4iWAai5CNAhXaqmbtiqaKUbFgBZEgkrkiSeYWLyC3Qw1ofP4v2FhR3WT8Kgy86ypgjAD",
  "key14": "SA2mDxeYkdJeWLd3drNx1oAioU9xqcvJyQBS6RHjuQS2KDQ2yuGPFdAdKzvAxM27ZdTcuPbyBc7EdPZE647FSHF",
  "key15": "3r7PKrBRELmfDJNKFoHKijtWTbb8fspwYGb6bpcZAxuYhHT4HvWBJiYdP1D3x77Mnyq1j9LgvKs5ogzDY3wnvDVn",
  "key16": "4nXLU4vLLv3kxXM1ezA5JDJstkTxcgTcFTHrqyDEJh5eyuHq37hZBFpuiX62orHgGbfKrN3V1DVxoEGTNhkWnzMs",
  "key17": "gESecybWkAicrA4KAwNhELYxXtMiRpVJEgoVFrnoyrdZrmvDT7QqF4aVrvFXQ6iHxePn8rDMo2riYo4Zn8ZvKKm",
  "key18": "BnajZ2aEeV1iYBbDkrR3ZJqQgA84a9uhpYN4jMhqQKWKBJi5UEgGjDiRBzxGFUAdaoigYFHcvoeRZ1RQYEf1BHW",
  "key19": "4YQqKVqBeiYXPC5Sc3ZWkGoXVrdtijSkJMgM6VzoErrc21vd3RQD6aqMuWjzwsV53yiaeD7Js5386BZ5ZFK5iz9A",
  "key20": "21BMupQYVgYUwPP5jqXquD8siRgSbe1fauRppH3ZS1KLweKZYew2YqtYnosCy2dgKE48EM5NYdTYM1zFc521WNrA",
  "key21": "3VYrBkF3ofGfUhFu19xVJjoGE8yiamDmQDJpAJsuGXyYBmT89cRL7g8nuz6vz6FNeucHFCHAy9iSnsJFRz1kDQ2f",
  "key22": "34xjn3kXEFpmgLmtTLnH4sfHsuTgGhRc4P8nJmquk6D7CjyTDaeMJgtTPdKhG5zSJKwVMpLH8je3WWmRoJ1Lt1mF",
  "key23": "2VbgX7WukC3bqwm9Jn5KXzqh2mtxwCLcpmZJSEziVTaKZyhjiU5QgYzAJDsfe8zsLH2qzj5qWbR38d4DbJFwSuve",
  "key24": "5XEWQXjziuHhf3xK87sv5PpyQQ947VjmBsTtNz2eifvWnhhBNjWzWaDYhBpXNDx1xgajJgV6mRYZ1xnJHd79cohz"
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
