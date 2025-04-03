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
    "59prWaBFRyhuJyVfEw2AEYk8rWQJwzTsFabDoTe2VkwCXUi31mHG24a21vXcD8giTkdvmZra2gqhWXc66o8WnCeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdQ8u3gWqo9LKoBXzrPgTAMtSkd4WFSZcbohorCT1aMSpP3oj8m581gkLt4xSCBxSS3Po5Ksjr7mkxJCXXWJ9tS",
  "key1": "2UHGM6omV6jtt6p9cVKfbMg9SQX8FoDEXvBjnVAcHT6k8Q4Qc1uJrbMuKh1R7roT2HUyyrwhL99creAWEAjLH588",
  "key2": "5Udmv6bixfo5Sk1QR4GNBE9NWzE5usVLddHzEBw6NLXp17dL6D3Ww27jpKWoX8Z7VxNqcDzG1smuKMtEqLdd5y3k",
  "key3": "4K39dei1g6pxxhB3PumDcrU4nkwgQ5fn8RxUavEqwE9JaQCdv5S6DFttXXDEHsTvaPsLfrVitHwASsUUNW614raQ",
  "key4": "3mSo8jcAEXoDfJ3SKGKX8fh5MsUBzHWiWpUQDySx6uATCUpKMAfApYY178av8ME8P8bawAdkYLp6mKSYKuBhm9e6",
  "key5": "4wdQviRevkN7FWox7Z33XQoWunUu7AiwexPiXYpx35Dj1ZtE81n4McM1goQrp98JPvokKBvUbaj1mkWRoGwehFoA",
  "key6": "rn3DGfrfkiyFPGiZ8kAkd9Hb9jx5182CL7hRHsJaW8GwSWtALDo8FXtBGQgAUd6Att78BgJQyo1nKokpU8QZp3K",
  "key7": "5xJogorMsKqZ9w4M8TzsGDwnJrMSnwhcd3fkZVQLggSWmSurUfZseXpSqRUrGshFEYUWW38m8aerLLnhWs9sAvVR",
  "key8": "McydGqUkfQjtVWUHH7E5rvBhiGN3YwmJs4CsZhyktRqFcpnoyKFjvTKbSvB3MRjuqZpduHcpYE5bDtDf2gDtTPt",
  "key9": "3WJ7MGgASvHocVFLMmaaSb6zRzNjys9a7w2yrGjo998wmkLcSTqzTpbSWiJaZhuUoCB92YjZBMt56pr6aamBLy9m",
  "key10": "67rZDYuPmbUhhZ3NUHJpzbzUYfdCp2kKSnYiUTXqrS88Vm7os8JkzbGv1UZBcSZaPSy8CdqrevsdfvieNemh9hEV",
  "key11": "2TQzM4eiLs2feT323UYEwRzNxr2RQT2k4XwotiX7G3rU9Gv7MNXgxQq4cZ6wG4N74wcay2ReGtJmWGeBX3uFXBvn",
  "key12": "2bz7PvmnDjK4W4bRbzA3yAdukzacw1jbx3RZ9x2yuNKYxr3kvc4qyCgeqVbfhk1gKGpAddEZvuizRgkMcvwXyUH1",
  "key13": "3yztQQ9McqKFBmpAThAm4LJMSqPZeUge1fBcHZ99AYz7K5fdtHbaMeYWvCTuT1gSZrQD8uZSmaRkzGFSdN9od9UL",
  "key14": "3ry2V1Kiezj61YZyq8CvFoBKJG6NJVfrQJtHtYzgujQJBco8VAB2Djh3BAyXbTBFvGCvUAt1wphyFzvCrqfjpVdy",
  "key15": "3XxQfkSkPAYM6UEjZwkaURobBcyW2tK5AeJ3pvjDeCcPB6Dt8HxKj9BQeGAFdBsohWZtsemG5jL7wJaauREtJ5nY",
  "key16": "3r7uk38a7gefWoaqCAQnoriouMVxKfiVJVRQ3SLDbezNG1BgaGRxHTb3DDx6HBGp3CRj8NvgJAiePXbCLYpQs4t3",
  "key17": "4NeRnDn9tX5RHqgNkiv1oE1tzHoDATnVdcR9obamEWydKq9RVHM47AmMKM7uo8TQSqpNz2s1Ce68Qk4vYwCkjGwE",
  "key18": "3c5A6FoksBU87t5Bo1GBDJzfhPk8HkBRPjuGQNduS68iXcCM1oN5Q4xddd9bepqZ7bgKhaZUxW3fbNKGhdQHk4yV",
  "key19": "sFQ5f1jpcRMan6MHnK3RAKYZwK11HvUL9RFbJJoAVuBw1ouMZvqMoRsedfaqux1az42uyqBPGea3P7zuuWUkiZa",
  "key20": "5j77Xe24AjuCNKVm2v6trcdvTcNAQYnoD8Aujh2MJHssnA9UcuQM5R2Fxvp3JUAJJnS1Aj7HCiVodjAe4peVDvhw",
  "key21": "3r4exzpXXW9fPUJjpV3qe538YmYtAqYt3nfjgB1i5z5L4gyEDLT7JafQAoz6S8y2rpUzvrVzoMkfd5ihmv1KRhrh",
  "key22": "GK4G4Jo4MRLaHSscdfF2xgHqpcGe9eq5C7AShAt37Xe4KnaQ3m8oziGzdWRyPzwQkK7pGduB9V1fk19ZcZDmy5S",
  "key23": "5UqoQhEyKzuuxvPw1WEViwGs5uzeRcZ7x2JZVUpjJnmErpZaJbmLRb2MFivanc56NV27TfRXc9jUZNGzH4XAQjdw",
  "key24": "3qyza656GninPrnuaJM8GyAqSa5bdakW8M8S4RomJ8DC1Khsrymi8pyGK3R3V3282hkmVqk4m6RYFz6ti2whKbwt",
  "key25": "4X76ygLSRuwfnv22GNNCS1zLzmW1WFDZUfJhGZJVkWNzXXmncdQGp9arg5pLuVztMXhQ5ciQfLTuUuncg6xrSZk6",
  "key26": "5Bozucr1dkKRuevkbAA2PpMwpLNnnY2QV5kRj1RnaUtTsp3L5Zro14n3RLNEKbCvxNeNHwxdDzq6Vedbt2p4yVLb"
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
