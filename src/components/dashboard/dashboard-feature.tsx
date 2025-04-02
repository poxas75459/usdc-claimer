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
    "3fJKGGMhtETzqh5xxKcEupKon64eD6gwZyjhNiJrGpdw7iXWz9KBqwsD88RAv3PQgSFoJzpVs1KGZBPkcV1yUwMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5anxw8kDfqN6bRajHSixQYG3sYwHxat7M7w4nrBdC5CFFbDmAE5W2Doj1q6tYkjKjjrT747ZKB9NJb1AFzXqCT1m",
  "key1": "Mf4ST3Gd2xyLfRq3RbwDZv4D4tFiFtWj86vcGwiY95nAWtmZajdpPtSDiUEsYPvaGknwR435rTEgBNfXKqwWj99",
  "key2": "sFQP7kMtnea477tPQJjtwD15EE1sCaqpR8GZjf98iTf8KZPMnkAF5nJPbGPRTu9wEQQAwTUSxqmaSFXHG4c9tiB",
  "key3": "3Evwjye3NbWPyH5GaSGLhgue53qanpPzvvtvHhQ6XphPytjAFGJVr4iMH637KxxVo99vSZn1z1fjMRwhiehMUAfq",
  "key4": "fbC8oFUZvxLBdnPa3y2YGp1VaXeiG85azFgNb6bMQpt6eih9ciqvE6YvS81U5WqmRTzu73Z9Gw6krwWf2eWzHyy",
  "key5": "55wmcRma2ucqQeEo7AjuMeWX2aEioWji5Ft8ZsyotdTShUC9xNpqkPSx1n6tCUo9fEULfgPtReJXaAepUAFqJKUi",
  "key6": "49cVeLpaGUydfB77BT8eRLzkpb3LCdG3GJZSusJDePbE11DD8ujHnprnwBKywBaW87snB6uFQ9sh6iimtuGd1PMy",
  "key7": "4rTwwAjeVGL2jT8S1GxnMkLvQQ1irX4XJ3opdfpdndrp8wv89FmutwavDhjgXv8xDAYmTz5oswRFJQyFUAhx8M4w",
  "key8": "2NjsQGVYuoyH8H3pj3PD2rxzNMiVzxdoUinWjgPSQH1pLga5EMmY5NURfpP5WjEXtczSmqvmsxN5QjDmxLkuyjHZ",
  "key9": "2dchvtZqXAfuhL1LyLpH7yzVci5eaV6HFkJnawW7WmFu3bkBkpsXa7JHG7H5mbAVEWoGqJtxvJDF2VEQvjqjbJXd",
  "key10": "61CtAysHA9jFdn5ABpDTECuqDBfJ9C5GqjxxcbuNNuWhbUpiaiixQsZifzX4zjZf4qHPGtY3QJAJpzkgSXtjHBD",
  "key11": "5R6TvYmKrr12dP1fePryrUcPBrFSjCSuQxinUq6MdrcMEHA8NXDs716Pu2EytDWAy543YfHpqyE3jCm7Miv5C27E",
  "key12": "5kUteJiVKR7Jug37UkDPzpF98p2ysmF8zfDgYQd27qSPNb9n1CfyyBojv3wN5dufMUrwAi6YrV1mvfx4MBFDRayB",
  "key13": "2vERwdngfmAYzDetXhQ4kyC7mtU38GCNkswYdwr2rXdR9wmd1LHEUvb22gUAVGak1PztjCpNjVkirqgJXRGTD7XF",
  "key14": "2Kk7KreCska2gasDvdSxYAEQcJMASsayjRpHXzfDw9CTF6erN587XwStfdjFHxHM2baHRvkVLMsGrmaEGJCUwa2w",
  "key15": "4c2PHHsaFxmz6rxDwUBs36udbPw4twNavi2HNd3CtQudREUabjEdfcr8B4S9oeg7HdFrJWrFnsPkg1stJVtMSctc",
  "key16": "3KVjKWWHN257BpffoEcV2fQWy667Xg1RBAL9FMpjaazLpwks39qG3tRQ8Rq83jn2Py6d2jDVkk5hA8kqTTYhStJq",
  "key17": "5gLsyGAsGxdukGw3vYYTfou8ci8L41kAtWEBQktTgMGHhE3ievbUUCR2KAHgopeydPNcFNQMaRZbWuqxqRDnVd3z",
  "key18": "3uLhdCbPWzE91qHd1pkA2nCsnSULi1ysRcyt9NpnjKkKqyM63Xy39tUpYerCQZL3nCCeM34jWuAnn8aUanapPggc",
  "key19": "46LGoaGssxZH7T472HUohz9AzL9xU7oB4PQ5NDjz27LMwqQSo3nVbynQSG4AKkQshVKAKo21nqeWZJEhGKzJoXSk",
  "key20": "2SibwBidrrtdrGrnY3tAz6NddwDuMk9CAtVGxXJxMznXxp4RWMgYtqF1fY3FadxWCWK13BiFeHwYBMoX7fpgE5HZ",
  "key21": "8nn8sg1tgDSQGr95k9Z5KpwCxqWHvJNhN3j1R33tTr794Ra2kBV3mBEgYj6Yf1EdDYapk5bLWBx5KfokRfBzs3z",
  "key22": "3aC417rKQJV4keHNvHmxiLR8t89vvp5kuQykj7Qv19pJyypPaWHAt6GMMMxH5M6RFHQqWTpCKV2a8d2iKD3r44oL",
  "key23": "5Vz1L9PLephrY7ZAKZw8vnDhriQBdgtdNe1c2mzVt6hkhxWvD4VaK55qNXVcwPkHCxhMZMXE94crGGjLzFsa3Qwy",
  "key24": "3cxhKNdCPUZvsxFHNDeokY9g29PgGBsEXkX5aEYWiieQSh8o4BaUaRwctkPk68CwfC2373ZmGQS9sa1A3nPrp2Ky",
  "key25": "35AZc7cvPPpVgMbvVCVwxuSxFmS8orHbCrUo5ZHr6f1iK8RJpKoGgzoSGq64SmP8aTpKLynQCQmdChWH2UndozmP",
  "key26": "k36AMQCG6e5YJRsfHypTNKLbYcKbBoL1NhAuF8RRVhU13WAa7ciRDVkP6uw1hYxSgQCq2u7wBJS46hZJ5NvmywC",
  "key27": "3W5wXphcEAMCxspZRNxLtXeczBfZjxys1hAGZGpPctAX46SQ8z9ZK59dz1SByJJ2eNjrhn5v4WfXhJ6t11LJr9zs",
  "key28": "29RSHYpoV8KPGxkftuAVcS9NHkA5zqd2MHMiqWKbpT58fmZDcqAXzX17Lna6ELs6yLWYDZwCEcau2G8LpycEeyY9",
  "key29": "5B9fWFQQEDdyPTJbDXqSTniJAbfQFd8sXk8M8jHnn1DHdL9ra7Brse2sVidGfLahP9yubhge1fMJHeTA5pGLGGSp",
  "key30": "5B69vw5Uo6J267qf8yGV5bZzpVMPB3qZejDsjkXA8FXLoWni6yyczgrq67fFrQ3n2MAoDjAmGuSB1sFZb5hHD8KB",
  "key31": "5TKZek7fYhL4UhxXZW55p1nMSd2W6Mo4PwcdN53c7BRnuSYypzWXJwsPb3A12enBMWAnipNMugPUWZiLrLEBj5dw",
  "key32": "2LyiN2WgfPzt2oGyN2kS26Tn1x2Cyugemd7QeD4B6DZftnNPraUvegUAxgWm2Z1FF2QTd45MfzQojb122bqFPZAk"
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
