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
    "4ufbY98u4fA78NzPov5GV9b3qeEfiZQ4oSh7wL3c3eBbneunzcfSdYGYfGcQMKqSVKZ5hSviSSqyciPaqPBLzZQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfCf4ALuiiambJoRfZYkFT7sgyMYjKcdLz9cWko8wUHPCrBfu7VFk95gobo1VCUrAzjnu4c7rEec77nRbWJc8pr",
  "key1": "5Ry7eiWxjnKsWe159FqexenC75BTvJtVkBY6HfPbhoh3zqaLRmkhnJDcG1P3sZp7noPKUZE8PgKd6onAKJjwss9f",
  "key2": "2KJY1zEqQkNM614E6pNZxD3QvZQgSPFNV32svPCbpsbe9cayCRgyWLRNVBRdVBnKfLZRJvXvTKG4Ht5AeQnuLQuu",
  "key3": "66G5faDemkMY5CHcKtb6sFkhJUG2tuYQX6PThBK27CTW6gMR4CvZzUgFzo3ydWcva7hpfjiPUdDNJV1w9BAS3Qun",
  "key4": "5jGbc1YEdMbjZwSE8Lvgv5fkAfXog9cDRH9EXv2Gh38pTA4LUHFgpJMp7BgQGTdtWEbMiH7e6LtPzXGbNn3FYSMe",
  "key5": "MHJ52y6qXP6vsPoCptnxUiYRELkDDb56qXeWGn8PhXYD4SDhXxcDju3ibUrGBi3yir4sKpmddLADr7y43DgpQdk",
  "key6": "VVyRBGFdSsKeMa8Fnn4fGYZkyZDKo2ebqdFnk8cByP3zZLThRcXzwbtxLwpAY36RfjcTVvgzMkBuap5kKqQMNiw",
  "key7": "2H39UjGc6zRNaWwUSSwpgtryC8vKe8JQaz2havWC4hVpwreLjdqTLJUJ12ihByr7bjLjZQqcB5B75cnBNa9cZ2rS",
  "key8": "AP3xdGz3EyHfqg6Ss1WH89qA2KfbpJzBNgiFkVBZJ3G5s32RuLreFP3ZnFTTgS3zshCXqLqBMHoU1uhSgsrcuRK",
  "key9": "WGQJrLLwgergMT14msnBd9TESyriRUPYkbmveq6qhQK8hT9gCvFUpXAsSdv6zfT4GnV7Lzwyp9dqYeaF9G6RWvp",
  "key10": "59Wjt5sDkS7GDs8We7N8dYwa6L6UdV1b9MU8P3UeBA1HKENTHF9uaTYxjbqyEN5q7q5Hd1HFA3595DZ52o1tVfod",
  "key11": "3egFZVdTRUmfcNvLM82t7hy4LAu1v3uFYfWErbcij6JC44FYpX1q4JfJP4RgKesCb17EBnZAoVHrmfdaozyok6gq",
  "key12": "2iSKSGEASXMwL1FsgGfExkHanVDjb5yFvp3Bb8RVTAfogNRsxhByfyfYH2RDgqf3U4mfgozGpeypWUdW11MejTn",
  "key13": "3VzauGHAmY7BVbH7QPqRMn13ZGoMCdfPxjnjLPWyYMeKsxSTFUEW4idhYjc7FYNEDwoSQ6YD8wpTAfRc7SFWxxaE",
  "key14": "4vkdnNvzXVoVKjYapSenmNjKPrA8TALpTtxUVLMWBBHXmK2xd6FGXwkCnkzVLGB11WZwpV8iNPxU45MMwZ6DcTcF",
  "key15": "2Yb18NZapdY7ANWLNMVHe88W2u4osKtj5SBJEJYFV3Z3Xg5ppNVXkTuYRxkfE7K9XMp9c6vzu9h3qt7Qm7Ad6sPq",
  "key16": "36cGEE5HSX3PirBW5eB4HUYAa1QuSLGPY6eQT9mM4c3HsmMJD5rDw5nrJcRZnKodGVEuiqXZywfcLA4MWUsK6f7Y",
  "key17": "2o2QBP2eWBq3FFeRvD5SmP4i9UXvJNnqBBqjpMN5QjU2BNP9nwwv5VzdPceaegfBjnQ9kQNGxbwMaUVubrQmEeVi",
  "key18": "ySwY9jw3ooAKqXKVeWJP9BQfCiPbqU3xLr8eNdQSWah97tpAfKdofBde3GWwE1oMQQeGLnK3USgZdNtXht6jrGF",
  "key19": "Dm35PxhkphbGywLHsB8GTBqczNyy67n2VnhdVULxj2F9djrXtZsgMzbYGNfht6UjjM87pY4H7r4bMih19UzTivc",
  "key20": "28kyC88E8unTUmA7twQaJoMPp6ShLoPeVJ4a1XRxMuj5znZRkGwNLXC3myM2JdFKHbvmfK8E5PNYFCRFPCgjmDQh",
  "key21": "vE4o1pYZN9hvjTn58Eo9tr2iJcZpZeudncrMpNKUw3V4K13AHLfaqVxUd1DD8TXBwAKW9vFrW4GGKAeadiDRq6n",
  "key22": "ZCG1xZWp19xDZnw7sTSQFn1QKsiqc8wBBXoL9GcDvPSHfm5NRNydoTi47b1fpMmuK9rjn3Hvi5YbfvBV2gGbdYF",
  "key23": "3kXKRXa48cfABMZf4ctuEZKSkaWVCWkvEtBbD8qTEC4qXgMEaecczkQJNvsMEDQ8fUA4qzCsB9u5jLtc2L5mf69p",
  "key24": "4U6JtMeyiPodZYc1srYkVyoq5ZgQZsEsR7LmJnSUVRPsxfNYNmPXLQBPWW4FTra3263AjHpHfNooKhd2mYbQe1fg",
  "key25": "jnci1rZ9LFxMtUFuogWX9dZXDsk4Me8wT9CKV2Ak3hEoYJCMyx6mPNcXCtVzMsw2vCPnd4VcgjzeVVbARpVBi24",
  "key26": "3FVzC7dhTSy2yRu5obs6SNUWshc9MveKBEgYRQYrBPc2KSkRWE2C9v2UV9T7KfukStTngq3JYdUmUqTMLugztCDi",
  "key27": "2GcWtq4PxYWHV78oTY3N1nLTSaQxAD78DWkvHP4U5dusKXoPL5A4RHohuchet3Z825DFJqn59RxqxuQDcxXoBSVW",
  "key28": "hdr4s5KJ4h9eAF9yHe6AGc62WA9NzjP2n6fZe5RGfyLw1HUkiY1GeHsKR1aUGQSAcqyoh52DGAwkJbh5cAiH5Tr",
  "key29": "4LoWuRBYTmGLFGdATeDynxJedUrfSS158GnP8HyWKai6aFUEW6YGSoCKuRtL3ZzDiYZkSqySLPuM78BGWqfMzuw3",
  "key30": "21CFrnHjpZFg62CArjD4VPU5dJKQLQXq9CfQTXkaJnJzbsKKG8Jz9kdbPf7LiYgWr9rFTpivFH9rs13bJjJrjdPN",
  "key31": "3HBJ4RjqZvHVM9GjpvFAuezJRZsqSxtJmPdADKHAByyEdxpGSR9dj5H5mv4qLjjQyQxRuQCRRrTQSGbWYBcyL8Hf",
  "key32": "3ajAgmetfkQw8d5b66KRUzedx5ron9jcx5xVWyR9EWjyjiWJQbscfNNEHzcy4RwdRocJeiKVU7DdVdj69kxKYqhg"
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
