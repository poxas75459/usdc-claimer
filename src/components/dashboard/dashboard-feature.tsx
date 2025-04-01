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
    "2DmoLtHPLjWYMfFw7NghmTKKqBqm5k9EQFSo8eQ8umSu9cux6PLMpAEuYV3NBnPFdKh72QtfhJ5R1vzwt6AJwSCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtYwLMxVARieXzRWXXsTPVtE16EKJzGSTpJatLcJ8DnNVE4nCQPbgGUYaX7geYZFkZCyevezCmdfhkZzhBpwQMA",
  "key1": "3Bqrjv6CZxnQ8y78xRuGQpSeWHGLXMXPnAwCFRL4qZPFcWWtWuBhsz1j87UZgtBXoD6YUsBZZhPjnMMWKRjPThdU",
  "key2": "5gtSRyNxUBhacebSTnFtgYejYyejeYaswpg1iK9Wt1pwT3HrhcncWVYKAtvCJjubGrSHpxKa9ztzLiPpXmDzfcT5",
  "key3": "4gVKtf5mUKYCSoTXwj9mEgAjh2M7ZWND1VrpZvA19Ffo9zM7fEiqoJu6XyV9W2UKTni7T2SVBFdAUqE9gbiuBVvM",
  "key4": "4MYigXdJrPBzKcMHSp4R3zMkj38cAwCdAtttct6t5ReRLxjCVt2Bv9AupQx5QUGDw5T3bKRziXwR875FzcU99ukJ",
  "key5": "3jMetqC1igq9X7NnUDgxgaDocsYN6B36ze86RHz7kqvwbetYuEnTjsPVGW9t2hDhY3YEx11K52SanV7giBCuCPy2",
  "key6": "2jf7xRtwbAWgr99J3HyYfhL9FM5Uo9Ve9SCfA6kyB5EDxka89aatm6zYXCrczf6TPkeiVL1roq1Kuza5uuNTVfkP",
  "key7": "2456ePotaoUkCckfTZLsgn2bnie4hUv1LbYecpc4Avf2H9ScZ8CKVekpUXsLME4UYywnNDA28MhjP2mVtF3prWcr",
  "key8": "JsY4fNYHzWFpMcqGKBGLzj7S1JAsBdBux9sNTYT2v6cRu4BFnQ3L4sSrvhN3SCv8P6hmVfH1DAaM8dxjN9ddzV1",
  "key9": "5nNLCd7hDiQaqk61vFybvTAoRZ5FLkqEfY3wBoaQJ5racs4eguvPh3XYjr4fDGvjoJGzvpU7iiD7bVwHviPmezAS",
  "key10": "3hWzsCFAcJmE8JW79K8C3PdtXeh4VhqXc5df3SAzU3NMt2oUJb26AjD1L5wncV8wcZLsJXTBFBJAsznENcPUs1i8",
  "key11": "4kpDhAfGKK87vVwLkyY5f8RTPm21g2H7RBaRoijmvZbHwGY4NCyREEqFiAXaSnWgn4u6cfq24fxCMcYJHJwY9dT6",
  "key12": "5rGL4iHeZS1ZrDrWzSV2t9Bv2UFypUahScjzEHAHpTs8o6zzFhnf7t8FKFUX63yqKkL8GKF51LKHSX3o49yEJLNb",
  "key13": "5mzyeSZNdW1Pjpp59h5CCpRD5FTaSEEiDh6FnSz4pxP751QN5urfCcuikh8w3jPD4gARyqdgCE4wyYb5WUkX5Udg",
  "key14": "24vdQiuxaPzgn5deSFzJkWPJKBZXuCKUF2wAapTRXk1NWGQkUfHZ7XcEPtjUTZujycruiNJWE8CtENSATuvmc6Jc",
  "key15": "2QW84CcAqnRtCJ1CXunkSauoAc1qK6dG3uKTZBSfb6iGw7uFnmDxhw99nk2C43PmchmEoED4BF3RvMi9VpW94e4s",
  "key16": "5cf7SXwfhJp3GMfPVtjen4TnsfarrZqst7v5ycAqiftA1groaPN76hnQ8wWwi7NhZ5GyZhqG5MRSHhtV81zjP4Dw",
  "key17": "vWEhBNfbRjAisMTHe71N8w8qw2jBa3qtgzUPGTGmbCT881gjxJA6MD1K3UU4bGiu1GJyvjMo4xEyX1HtuwoJves",
  "key18": "2a7xYLtMRMtpuKwMZeLmRDFy9bX68YNSBmPXqxJXreP6DZcnnGbh6nv9eDRxPsJTZkMCV1sirjwmmtEoG334WCSQ",
  "key19": "WEC81bWGpaFw5pbQNzkv7B4XXnrY7vzVPp8axoUTvZvinRobYQmnPXrNX9Grn2DUrAa381nQbCMuJRGTJFbjkhH",
  "key20": "4Eb45kVEXjsyncfMes1Dad8dpTa2mctbou8PETfwfcacJZV1DSCJCKxyyoRhYUt4kWLu5hGW4XLC8tFyAQakKz9H",
  "key21": "47rmPqUv3a1GZSpPbNY5nxxfpC6z6gLnar65MsEcyKucv7ULQ8ZMchSzRjdnZ7A82MMrSUryQx5nzYr3fdV1oN3V",
  "key22": "45vt1hYhjNDYShKT3Mm8K17DdHVVd3oTBKexC6Le3bHmgurABDWnbVzkzdVXJLB7BfFsScLokCzVHoxf97AT8A2i",
  "key23": "hoeNgcRjN684Q2EhPHFCbk3b5n5PCxYKvMZPCM9shWumUWG9CnjAF1WgLMT7XcrZq7JJSTEPBH8FCVio1icQru1",
  "key24": "4hEus3UAvqS7CDP3oYnenUPxteo3NprpPqSJLMrfRUsn693cMF8CnT2FzcoDBo9HW88bGmn9zh8HmWfH4KWxpe7Y"
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
