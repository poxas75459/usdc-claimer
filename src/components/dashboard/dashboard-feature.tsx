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
    "2aHMheRtGVuVPSLkeGwK82QMjNfhzuGwrpzWA6f4R2hw5V3VmfVRWkkWFi9m56GSgdG9V5beK9H6Hjo75EMnXsba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pVwiWQToJt32GY7YnwJYu8Vr2efeg3GMYZUTjAEHAt9wspiWVgfpm5yDcrffKrep4GYsgwfEmEfzZMJN5nfuBVf",
  "key1": "Y9w1Cadk81V4keJg7BW2zAosVYnqvNbCUSENeyXj2F99bhWjJor89C5Ze1fhdHRNe39eCmAfxo274xoXv7HVK96",
  "key2": "m4kmQB77hTLScpkb5JVgabRC8n8x1WFDaHwzLzz2joUMWtjjUp3aefyFnqGkAK7vvwXUzWBQ9RGPKvh3JcBi3sk",
  "key3": "3rFW2PUrLYXn8AP1Cnn919ESpUShC4vN5rBW6e5xt7HRfLFPqXU6fS6uaivwEnZ9ZWp5DiU9Yncovcfq7cKTLHJP",
  "key4": "47MdTBZW6TmRooMcmnKi33v7TsLU9fa81gPptmhfNqTeJupArxeYbYxbMyFGn1ZxUxhusMExnwG9NM96az2Ga2z1",
  "key5": "4vTjNjxX8rE3GCL8hteb5D5xysiLr6tEKwy4YG6zGks6kiE3hiLzZkobhjmwPSPQ9RFnsLU2N6Eh5NNmNjEZRbFy",
  "key6": "3KE2GSWRtBespNehrF28XXKYqZ3sn4iYWdJRBpE5o2MUQCJn4mKt1MsbKDnA57jKAhvZf2LBKXbVekJaaxjETbgT",
  "key7": "PmbYX3d9f6NfcHVrDm9po2t4yBn3HaSq1xLDo1mTGQ3h1ZRAh7WqCkDw4QYRBCjWerQ7xfcmmdMq7h1FwH8Miat",
  "key8": "2UaLbjNWvbs9yT5oy2vcPgSFTgEr2BLNhBhmvQ8ciTTuY2o6Df4Y2HNHFNsWCVL2ejVx3YuwMapGhyHfRvVSdoAk",
  "key9": "4zKiSzYtJmBvMwakQiY3WbcjRxKZ1XR8chmeu3AcPPMDbzGWkkq4aXdaoMJ52X4Sy7BLAavz6UDuB1UBxuJJjZmY",
  "key10": "5xZLtbikXkNUbf7YCS2foMxEPp7y8rd57vf8xxUXV3nwxkgiGNBFk5GZi5VZ6dA3XFn9zYjHJ2puhz5F2z5mfoQ6",
  "key11": "4mCvkthph9QwGNwdaYrWsJR7Ai7sGoa8apt3wnJKwjg6znYdeHDbPv82dvDuYbdpQkeY7MChixBuocsN5QHCgSHF",
  "key12": "2eJdfCm3UAQwhHnwA4PxZPJALb85jXadwET9neonq5ZrLaNDKUD32Ytkm1nkmrHSoTA8N3eAHkbU63NRPtGTV7TL",
  "key13": "38dj27Rm5MwcvG6gL8C6D9cZd4s6TmvvNKbnfHfd8cGfEYMLrooxnjqRr77pkdGpSjJnm5fPgBWNuT3Km9gW1bpj",
  "key14": "4Hp1Fi44197X5qjMWkkhFvgSSnqGDTzRMGgwGqcQXbwzgqFNTYE223X7rXZRm8AmqoGHzMwD4h4BEMhssibbhyit",
  "key15": "2uXWkeBJJ9MeerHZWQ36s85j92eA9BYRSJg5YkRaDTm3YVW81GRC8Z2F2Ha9icaTrGdgcx36paxCC3Hk6M6nxpa6",
  "key16": "3Qskt16NKVk9c7gLEcwMPt5s7g4Yzr86Mtwk8nMQtDaWdCHggHATpdoE9jHaWEF5QqsbYCXZRRnfMcyWyKdf8iVo",
  "key17": "2LN68cxLTUAgBYHPoMgdoihYkKVTzF4Cv8BmGWMN8UgtKTdTV3UvzwyyCWsnSSHvgpux5TYcU1feSn8RvBEu1upM",
  "key18": "21WFUKeyeJafvRajqPxXUQeuhcGvhQVpdRaVpaB3uZGUZvpdddohZeFZdNKLA4oPSf57PchxSxsZqK9Phzgbt54Z",
  "key19": "2ubZ9qgnjt7VofFxs4Qk4ReLxAvtmDdVbm77CwkeHddqbGSHrFTF5Uj4RFr5V2sq9zngPmVEqvQMHyJMpNubWVWr",
  "key20": "5xUCb5AHHe1BTsd3RQ62Pz2sFb3vEqG9XTggzPzN3vZdvP5G7renQ4V1givdtxLzgXkSuwo7popEsczY1agd8URu",
  "key21": "5E5zj5nop2szTZZhCoGwhzHSzzV2FpncN2ozCCcnzNmRPSs6gMiJmQeLXRsLLeEXraJ6TdhTKcXs8HtFkbKBneyr",
  "key22": "44Ygz85dnE39kD1oWrK25q8R3vU8SRaj8Bfzs2v3ypdz1QysnLTQtPosNv76jiNuv3wZsULwMJXbuWshnPRSepNu",
  "key23": "3Du1h6TYDYuNHJnJRpfXLqSYnUKFyWwkEaQ5ZVVfFfN615FsoGrTLjfW48PrcGvPVfK5CAXCBY92LMNm7zd4DRp5",
  "key24": "WnPf7bjWsEhEYrNizcfWLsaXgojhcysPcugjTE4DMkWRoE28YiCS11qcrjaZvZrpxNHZmT8w8NFXADSGmtFN8n9",
  "key25": "57P2E76xb8ZoF5r9KQkWDU2LvSHkjcwJvKbrFykCQ1X1QCCwB126fiLY5n2vbLhhgYvBLKVXX3Q3NBnTDJNXqV8A",
  "key26": "53fyuhtNvHCi7F46Nd1LAJJdTehZ27UBvNUDPh9bwg7jzZVn6EjdPhjzJvvZL81FrofnSaW9NJskVYUq1KAb2xwc",
  "key27": "ocYQpiGLzCL4hEBhBReJJVMoR6UJDTvTXdfchtcDsywqDXiivrTwUdiHLaPuUhfYBxeAZhfwjjsNn4UWHDpFtdT",
  "key28": "2NZMkA1EdsJHEjERfxzjgKzbmRs6MMRaZKtZBPj2jBBT5577AYn2CnXCyFEoWXH3CAvpQJqCWRjPiEczN1BFHnAD",
  "key29": "3WFY1sa7HEgevXxMqVtMn9YssYNJRnyRcczbMhALpqhrJxaEwRvEQu3kzgYjuoi8NXwNjfkR6b8DDDXA3CNh37kq",
  "key30": "4Nt6uTwjmbrk7cCWuxwzxvAWhoaaKjRDj2ysvH4MbqMXHbDWJvZ5c5mfL8QQ66o7HT1nVNqJ81b2Tf1gc4F3HDFf",
  "key31": "34LKfkVCj2AS5EPHHGrEi57ZgzrN4oA15SGdGe1fseptGegPUyBJNYA3DuxmYWevcEopXPjc15ptCVc6aNXJaNBK"
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
