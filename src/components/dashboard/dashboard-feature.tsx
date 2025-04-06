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
    "XzXtnfymvfCMcogSQLAMzp8N92h2H1WyjXs92M7K2sjEMcSiY7xMV3639aTfyoLkqhwd3Lt5pttPDRdfKmg1qGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFPKW2yDt3Mo4ZT4NrQ3UP6wHxB9QAGRpDAU1XJv8p2pBirUFou6pGB4xMZ89BHtVhFv9C25UgexLG81Ux5YHkm",
  "key1": "525vkoW3JxLWjhJKV3rkJCnzLU8UNmv6KxasmKLcwNVPBZhKdd3PpD4o7S5Vd5w1EEx6Buii6Xy2EbRXhCzGj4Mr",
  "key2": "2PsYr8c1Ewra2ovJ5oC7g1rkVz8zDUWroKR7t1ZZYNqcB6676fErUHL8sfjQsCcr6zT2mFLsRobTkYUnWoEx145U",
  "key3": "2VsYTGZNYmCCFaFx4iEcrLkASKeMqWvhADa1Ru8r97jx8mP7JvVtzJB4Gzkct4pxmciBcapUMXKqazfQebX3qkf7",
  "key4": "2QV8a2Q3ihzVNaijnHkQTr1B4yxvV8vHxTGLM2U2ftu1R4E932g3WF2XqpgfbZPMR5ukf2aVndRbZCmckrdfanX5",
  "key5": "4DB4FsrmdHUcDYBgP5k4vd6BwoKuLkFLqbhwEUiCeGQgZ3uPfGifVJXjXMGtX7qPAzR8sZzrFMvwqFKPKWJHo42a",
  "key6": "5Xc8P36Vow3ab6XdTBc7dw3qyeQekjU9NH7sPr9FtgB4RuZrHqDPwjUq9QMhzFW6kw6HPBTs2JhLo62xcBUxb9UQ",
  "key7": "2cCc6N8ib4xQKc1wciDULmqqadpGKJE3UDMvynN89YC16bsp3xeL3XHtwJopuVWW7CEBaNun9W4z6eHQVQZs5SBQ",
  "key8": "2VuYFVoBdnNtDLN9i23xzSBnqH4Eyr6tDpdSzC5W2vDNCVNrqdzEpAwb7PELx58LkkFyG2p1XQbPQDPdRwiFJJuB",
  "key9": "88Pq9XNnPcPJCUuP9rqPe3HoRa1f3RCHbgGrNsDwLp1CMmbeGoU6UVUohb6MuX6RonVajdyiHEH7J9T9rGS6DjQ",
  "key10": "4XAztmRcNoEw64sGwpcVTxXBiukKcVt1nPAm1fwnDFtpwSU1kER2eb94P9ANXNsuaFC2qidjh5tGTcTqTMgtLJ9c",
  "key11": "67mtbDoiQHa1VY5Ben2NXN1pW7Ub6joW8Z6KcDr7QzFjtAUq1xsDBjP5GxD4necBx5Pn941JSCNydCZTuy4b1WNv",
  "key12": "2HCoH4N7NdVPyQxTJ7BkCqjqRcPsJ4rQxNwm4RnnBQP7amq9fVs8uoSpTqzUZg6daB3A6VwwNBksHzHMzWKnExxs",
  "key13": "2TH2jQoRnCXF9qE4v4uUUC72osnDvUiiwJB5mj6D2Mtoj1Na8kPRdLQ2r6ViqGemEWbiYVakFfK2d1k69zze33qQ",
  "key14": "3HWY2xa9W5sQgd7ijESCVCSFUc6TA5DtGbaoPKGPN3Xe8RZaBDfGnJb126MeL95QkTUWs1N66Ue3YNawFdu5oV1p",
  "key15": "4nvBXYwbDMiJttNybDLaunqmJwBXzKfKqU1qQybtGjkfuaPmZe9m4N6nramPmbnSjR1tEG4KASBwHME3gYr2ufLc",
  "key16": "4K6Yzctfjmr1XaATvwnWLRxe6BmGE8XDUW3fg2pXvacD6DUirLoN9fESanTWV7vt2VGNUU7kZbgBNAfm51eHnBwB",
  "key17": "58enUhAWXPvSwmQ8749JvYKD281tnG4LFGDrRmXYgMtmTRfiWH5qjitmTTYLbFb3n1FDA8bqCnYmz1Ayw3y4V2dv",
  "key18": "ce1WvXttVNm4K22q96B5dXbJPAa4fd3GoJwg5XWgmFnSucHwqWfc8iD7kmfZEKqg33q1zzQDcJ5Zi8mv9qV6y9h",
  "key19": "3oAgRBQ4WMuKWUqhH5Uzf1M78NZATYtjtgWHKEqQ9Ea33FXYHPGPTK6z8DXHbsmzykVJw22K4z8sAsAAy5GaRjSv",
  "key20": "5rKeNcDYB2bMoEgy9fs5npTNe1NVye1xvAJ5kxt5KeMUwgk5Q1hrBva4o6iW1uWN71YD9a8z3hFL36SCVKhgU9vL",
  "key21": "5Xvuqvun8kshyiVWAuVG2VPFR8VYsLSpToUvGzCRiGwsWD1nEX8eQb2MPZJM2toYmfyaCbzRQuh4j6quGVftAj4d",
  "key22": "25kcqU5MUya8PhyLqcG2TzZix6XwjvCUNrkyBvmGaxU1GJVZ8mPkVzFovvaZQUfoRNuTsmXhETCJqgr9EqRLwzEG",
  "key23": "2JkkipAyoDNefSpsbsMoUhAmyLzt9ijAKzaBU6vrnNiNmxmSoz9wQRVTkMQALE7F3c7y7z5qjUiZxSn8iFrQS8QP",
  "key24": "4iREWmuV4599gmbgiJo895wFYF6GdS6FRPjcKneCxBKFCNkQdEmR1UTaoonjr8KUtMMJA86MuLtndd2SJ6tzArkw",
  "key25": "59Kkp7cbKJf1dwcGroFhU3FhPfuR8P9rU7M6Y6XtTzUM3UV4hsWqTHYNHs9tUZR58DUhYDsY5uzpf8ETj3M8MGPr",
  "key26": "4CjwKwYoGuujrs1vatYiuLwEfGKAmk6y4gcrh9vxRznVbzH88ACXBSYvGEW1SEcHYT4qSaru26YBroTArUofSM4F",
  "key27": "3jxeTmhoz9msygi6WMiByacY1j2XD4e6u6w7LBY3KG3PZji5c4nrXbZipW8LFvKCgW7AhRtx1iUwmoUiTsEH8ZMY",
  "key28": "tzdQrmXwaqQHKnRGtEvL7mYbYb7v75xr2jvCv3FsjXfKF3VdrnR9MdKHs6X5Dqn2g23fE96Td6GUwAPvSmALHYY"
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
